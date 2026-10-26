/* Drakón managed AI gateway.
   Secrets never leave this service: configure them with Firebase Secret Manager. */
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onDocumentUpdated } = require('firebase-functions/v2/firestore');
const functionsV1 = require('firebase-functions/v1'); // el disparador de borrado de cuentas de Auth solo existe en v1
const { defineSecret } = require('firebase-functions/params');
const { getFirestore } = require('firebase-admin/firestore');
const { initializeApp } = require('firebase-admin/app');
const { google } = require('googleapis');

initializeApp();

const GROQ_API_KEY = defineSecret('GROQ_API_KEY');
const GROQ_CHAT_MODELS = ['openai/gpt-oss-120b', 'qwen/qwen3.6-27b', 'openai/gpt-oss-20b'];
const ELEVENLABS_API_KEY = defineSecret('ELEVENLABS_API_KEY');
// Credencial de la cuenta de servicio con acceso a la Google Play Developer
// API (rol "Ver datos financieros" o superior en Play Console → Usuarios y
// permisos). Se guarda como secreto, nunca en el repositorio.
const PLAY_SERVICE_ACCOUNT_JSON = defineSecret('PLAY_SERVICE_ACCOUNT_JSON');

// Debe coincidir EXACTO con el nombre de paquete de la app publicada y con
// el productId de la suscripción creada en Play Console (ver
// js/monetization.js → MONETIZATION.plans.premium.playProductId).
const ANDROID_PACKAGE_NAME = 'com.drakon.app'; // definitivo (decidido por el creador en la ronda 12); no se puede cambiar tras publicar en Play
const PREMIUM_PRODUCT_ID = 'drakon_premium_monthly';
const PREMIUM_ENTITLED_STATES = ['SUBSCRIPTION_STATE_ACTIVE', 'SUBSCRIPTION_STATE_CANCELED', 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD'];

const VOICES = {
  dragon:'ErXwobaYiN019PkySvjV', wizard:'VR6AewLTigWG4xSOukaG', fox:'TxGEqnHWrfWFTfGW9XjX',
  robot:'pNInz6obpgDQGcFmaJgB', alien:'onwK4e9ZLuTAKqWW03F9', phoenix:'yoZ06aMxZJJ28mfd3POQ',
  ninja:'TxGEqnHWrfWFTfGW9XjX', panda:'XB0fDUnXU5powFXDhCwa', triton:'N2lVS1w4EtoT3dr4eOWO',
  axonic:'IKne3meq5aSn9XLyUdCD', narrator:'21m00Tcm4TlvDq8ikWAM'
};

// Edad a partir del perfil REAL guardado en Firestore. Devuelve null si no consta
// o no es un año entero válido (un valor manipulado nunca se interpreta como «adulto»).
function ageFromProfile(profile){
  const y = profile && profile.birthYear;
  const now = new Date().getFullYear();
  if(!Number.isInteger(y) || y < 1900 || y > now) return null;
  return now - y;
}

function validateText(value, max, label){
  if(typeof value !== 'string' || !value.trim()) throw new HttpsError('invalid-argument', `${label} is required.`);
  if(value.length > max) throw new HttpsError('invalid-argument', `${label} is too long.`);
  return value.trim();
}

// Lee el estado de suscripción VERIFICADO por el servidor (nunca lo que
// el cliente diga) para aplicar límites de IA/TTS más altos a usuarios
// Premium reales, una vez este gateway esté activo para el público.
async function isUserPremium(uid){
  try{
    const doc = await getFirestore().collection('users').doc(uid).get();
    const data = doc.data();
    if(!data || !data.isPremium) return false;
    if(data.premiumExpiresAt && data.premiumExpiresAt < Date.now()) return false;
    return true;
  } catch(e){ return false; }
}

// Valida que localDate venga en formato YYYY-MM-DD y sea una fecha real
// cercana a hoy (±1 día, por husos horarios) antes de confiar en ella —
// nunca en un valor arbitrario lejano que un cliente manipulado pudiera
// enviar para "resetear" su cupo a voluntad.
function _safeLocalDate(localDate){
  if(typeof localDate!=='string' || !/^\d{4}-\d{2}-\d{2}$/.test(localDate)) return null;
  const asDate=new Date(localDate+'T00:00:00Z');
  if(isNaN(asDate.getTime())) return null;
  const diffDays=Math.abs(Date.now()-asDate.getTime())/86_400_000;
  return diffDays<=1.5 ? localDate : null;
}

async function consumeQuota(uid, action, localDate){
  const premium = await isUserPremium(uid);
  const ref=getFirestore().collection('aiRateLimits').doc(`${uid}_${action}`);
  const now=Date.now();
  // Límites Gratis vs Premium — mantenidos en sincronía manual con
  // js/monetization.js (MONETIZATION.limits). Si cambias uno, cambia el otro.
  const minuteMax = premium ? (action==='tts'?60:30) : (action==='tts'?24:12);
  const dayMax    = premium ? (action==='tts'?999999:999999) : (action==='tts'?80:25);
  const today=_safeLocalDate(localDate) || new Date().toISOString().slice(0,10);
  let remaining=0;
  await getFirestore().runTransaction(async tx=>{
    const old=(await tx.get(ref)).data()||{};
    const minuteStarted=old.minuteStarted&&now-old.minuteStarted<60_000 ? old.minuteStarted : now;
    const minuteCount=minuteStarted===old.minuteStarted ? (old.minuteCount||0)+1 : 1;
    const dailyCount=old.day===today ? (old.dailyCount||0)+1 : 1;
    if(minuteCount>minuteMax) throw new HttpsError('resource-exhausted','Please wait a minute before trying again.');
    if(dailyCount>dayMax) throw new HttpsError('resource-exhausted','You reached today\'s included AI limit.');
    remaining=dayMax-dailyCount;
    tx.set(ref,{minuteStarted,minuteCount,day:today,dailyCount,updatedAt:now},{merge:true});
  });
  return remaining;
}

// Devuelve el cupo DIARIO consumido por consumeQuota() cuando la llamada al
// proveedor externo (Groq/ElevenLabs) termina fallando después de haberlo
// descontado. Sin esto, una caída temporal de un proveedor externo le
// costaba a el usuario uno de sus mensajes/voces del día sin recibir nada
// a cambio. El límite por minuto (antiabuso) NO se revierte a propósito:
// solo perdona el cupo diario visible para el usuario.
async function refundQuota(uid, action, localDate){
  const ref=getFirestore().collection('aiRateLimits').doc(`${uid}_${action}`);
  const today=_safeLocalDate(localDate) || new Date().toISOString().slice(0,10);
  try{
    await getFirestore().runTransaction(async tx=>{
      const old=(await tx.get(ref)).data()||{};
      if(old.day===today && old.dailyCount>0){
        tx.set(ref,{dailyCount:old.dailyCount-1},{merge:true});
      }
    });
  } catch(e){
    // Best-effort: si el reembolso falla, no vale la pena tumbar la
    // respuesta de error original por esto.
    console.warn('[refundQuota] No se pudo reembolsar cupo:', e && e.message);
  }
}

exports.drakonAi = onCall({
  region:'us-central1', timeoutSeconds:30, concurrency:40, maxInstances:20,
  secrets:[GROQ_API_KEY,ELEVENLABS_API_KEY], enforceAppCheck:false
}, async request=>{
  if(!request.auth) throw new HttpsError('unauthenticated','Sign in to use Drakón AI.');
  const data=request.data||{};
  const action=data.action;
  if(action==='chat'){
    // Menores de 13: sin chat con IA salvo consentimiento parental verificado.
    // Se comprueba aquí, en el servidor, con el perfil real; si la edad no consta
    // (no completó la verificación de edad), tampoco se atiende.
    const profileChat=(await getFirestore().collection('users').doc(request.auth.uid).get()).data()||{};
    const ageChat=ageFromProfile(profileChat);
    if(ageChat===null) throw new HttpsError('failed-precondition','Complete the age check first.');
    if(ageChat<13 && profileChat.parentalConsentStatus!=='approved'){
      throw new HttpsError('permission-denied','AI chat is not available for this account.');
    }
    const remaining=await consumeQuota(request.auth.uid,'chat',data.localDate);
    const incoming=Array.isArray(data.messages)?data.messages.slice(-18):[];
    if(!incoming.length) throw new HttpsError('invalid-argument','messages are required.');
    const messages=incoming.map(m=>({
      role:['system','user','assistant'].includes(m.role)?m.role:'user',
      content:validateText(m.content,4000,'message')
    }));
    // Modelos de Groq en orden de preferencia. `llama-3.3-70b-versatile` fue retirado por Groq el
    // 16/08/2026 (https://console.groq.com/docs/deprecations); si un modelo falla o desaparece, se
    // prueba el siguiente para que el chat no se caiga. Revisa esta lista cuando Groq anuncie cambios.
    let text='';
    for(const model of GROQ_CHAT_MODELS){
      let resp;
      try{
        resp=await fetch('https://api.groq.com/openai/v1/chat/completions',{
          method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${GROQ_API_KEY.value()}`},
          // reasoning_effort:'low': estos modelos razonan antes de responder y, con un tope de 900 tokens,
          // un razonamiento largo dejaría la respuesta vacía (igual que en el cliente, ver chat.js).
          body:JSON.stringify({model,messages,max_tokens:900,temperature:0.7,reasoning_effort:'low'})
        });
      }catch(e){ console.warn('[drakonAi] fallo de red con', model, e&&e.message); continue; }
      if(!resp.ok){ console.warn('[drakonAi] Groq respondió', resp.status, 'con', model); continue; }
      const json=await resp.json(); text=(json?.choices?.[0]?.message?.content||'').trim();
      if(text) break;
    }
    if(!text){ await refundQuota(request.auth.uid,'chat',data.localDate); throw new HttpsError('internal','The tutor is temporarily unavailable.'); }
    return {text,remaining};
  }
  if(action==='tts'){
    // Cumplimiento de los Términos de Uso de ElevenLabs: "If you are under
    // 18 years of age... you may not use our Services". Se bloquea toda
    // cuenta menor de 18, sin excepción ni desbloqueo por consentimiento
    // parental. Se verifica aquí, en el servidor, leyendo el perfil real
    // desde Firestore — no se confía en el cliente, que podría estar
    // modificado.
    const profile=(await getFirestore().collection('users').doc(request.auth.uid).get()).data()||{};
    const ageTts=ageFromProfile(profile);
    if(ageTts===null || ageTts<18){
      throw new HttpsError('permission-denied','Voice generation is not available for this account.');
    }
    const remaining=await consumeQuota(request.auth.uid,'tts',data.localDate);
    const text=validateText(data.text,900,'text');
    const voiceId=VOICES[data.voiceKey]||VOICES.narrator;
    const resp=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,{
      method:'POST',headers:{'Content-Type':'application/json','xi-api-key':ELEVENLABS_API_KEY.value(),'Accept':'audio/mpeg'},
      body:JSON.stringify({text,model_id:'eleven_multilingual_v2',voice_settings:{stability:.55,similarity_boost:.8,style:.25,use_speaker_boost:true}})
    });
    if(!resp.ok){ await refundQuota(request.auth.uid,'tts',data.localDate); throw new HttpsError('internal','Voice generation is temporarily unavailable.'); }
    const audio=Buffer.from(await resp.arrayBuffer()).toString('base64');
    return {audioBase64:audio,contentType:'audio/mpeg',remaining};
  }
  throw new HttpsError('invalid-argument','Unknown action.');
});

/* ═══════════════════════════════════════════════════════════
   verifyPlayPurchase — verificación REAL de suscripciones de Google Play

   El cliente (js/monetization.js → DrakonBilling) llama a esta función
   con el `purchaseToken` que Google Play le entrega tras una compra (o al
   restaurar una existente vía Digital Goods API). Esta función:
     1. Verifica el token server-to-server contra la Google Play
        Developer API (el cliente NUNCA puede falsificar esto).
     2. Si la suscripción está activa, marca al usuario como Premium en
        Firestore — el ÚNICO lugar donde ese campo se escribe.
     3. Confirma ("acknowledge") la compra ante Google Play — OBLIGATORIO:
        una suscripción no confirmada en 3 días se reembolsa sola.

   Requiere:
     - Una cuenta de servicio de Google Cloud con el rol "Ver datos
       financieros" (o superior) en Play Console → Usuarios y permisos,
       vinculada a este proyecto de Firebase.
     - El JSON de esa cuenta de servicio guardado como secreto:
         firebase functions:secrets:set PLAY_SERVICE_ACCOUNT_JSON
       (pega el contenido completo del archivo .json de la cuenta de
       servicio cuando lo pida).
     - ANDROID_PACKAGE_NAME arriba debe coincidir con el nombre de paquete
       real de la app publicada en Play Console.
   ═══════════════════════════════════════════════════════════ */
async function getAndroidPublisher(){
  const credentials = JSON.parse(PLAY_SERVICE_ACCOUNT_JSON.value());
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/androidpublisher'],
  });
  return google.androidpublisher({ version:'v3', auth });
}

exports.verifyPlayPurchase = onCall({
  region:'us-central1', timeoutSeconds:30, concurrency:20, maxInstances:10,
  secrets:[PLAY_SERVICE_ACCOUNT_JSON], enforceAppCheck:false,
}, async request=>{
  if(!request.auth) throw new HttpsError('unauthenticated','Sign in to verify a purchase.');
  const uid = request.auth.uid;
  const data = request.data || {};
  const purchaseToken = validateText(data.purchaseToken, 4000, 'purchaseToken');
  const productId = validateText(data.productId, 200, 'productId');
  if(productId !== PREMIUM_PRODUCT_ID){
    throw new HttpsError('invalid-argument', 'Unknown product.');
  }

  // Las compras no están disponibles para menores de 13 años.
  const buyerProfile = (await getFirestore().collection('users').doc(uid).get()).data() || {};
  const buyerAge = ageFromProfile(buyerProfile);
  if(buyerAge !== null && buyerAge < 13) throw new HttpsError('permission-denied','Purchases are not available for this account.');

  let publisher;
  try{ publisher = await getAndroidPublisher(); }
  catch(e){
    console.error('[verifyPlayPurchase] Credenciales de Play Developer API no configuradas:', e && e.message);
    throw new HttpsError('failed-precondition', 'Purchase verification is not configured yet on the server.');
  }

  // API vigente: purchases.subscriptionsv2.get (la v1 `subscriptions.get` está obsoleta).
  let subscription;
  try{
    const resp = await publisher.purchases.subscriptionsv2.get({
      packageName: ANDROID_PACKAGE_NAME,
      token: purchaseToken,
    });
    subscription = resp.data;
  } catch(e){
    console.error('[verifyPlayPurchase] Google Play rechazó el token:', e && e.message);
    throw new HttpsError('invalid-argument', 'This purchase could not be verified with Google Play.');
  }

  // El token debe corresponder a NUESTRO producto (una suscripción puede tener varias líneas).
  const lineItem = (subscription.lineItems || []).find(li => li && li.productId === productId);
  if(!lineItem) throw new HttpsError('invalid-argument', 'Unknown product.');

  // Estados que dan derecho a Premium: activa, cancelada pero todavía dentro del periodo
  // pagado, y periodo de gracia (el pago falló pero Google sigue reintentando).
  // Quedan fuera: pendiente, en espera (ON_HOLD), pausada y vencida.
  // expiryTime llega en formato RFC 3339; si falta o no se entiende → 0 (no activa).
  const expiryMs = Date.parse(lineItem.expiryTime || '') || 0;
  const isActive = expiryMs > Date.now() && PREMIUM_ENTITLED_STATES.includes(subscription.subscriptionState);

  if(!isActive){
    throw new HttpsError('failed-precondition', 'This subscription is not currently active.');
  }

  // Un purchaseToken queda ligado a la PRIMERA cuenta que lo verifica: sin esto,
  // una misma suscripción podía activar Premium en cualquier número de cuentas.
  const tokenId = require('crypto').createHash('sha256').update(purchaseToken).digest('hex');
  const tokenRef = getFirestore().collection('playPurchaseTokens').doc(tokenId);
  await getFirestore().runTransaction(async tx => {
    const owner = (await tx.get(tokenRef)).data();
    if(owner && owner.uid !== uid) throw new HttpsError('already-exists','This purchase is already linked to another account.');
    if(!owner) tx.set(tokenRef, { uid, productId, createdAt: Date.now() });
  });

  // Confirmar la compra ante Google Play (obligatorio, evita el reembolso
  // automático a los 3 días) — si ya estaba confirmada, Play devuelve un
  // error que se puede ignorar con seguridad.
  if(subscription.acknowledgementState === 'ACKNOWLEDGEMENT_STATE_PENDING'){
    try{
      await publisher.purchases.subscriptions.acknowledge({
        packageName: ANDROID_PACKAGE_NAME,
        subscriptionId: productId,
        token: purchaseToken,
        requestBody: {},
      });
    } catch(e){
      console.warn('[verifyPlayPurchase] No se pudo confirmar la compra (puede que ya estuviera confirmada):', e && e.message);
    }
  }

  // Único lugar de toda la aplicación que escribe isPremium — con el SDK
  // de administrador, que se salta firestore.rules por diseño.
  await getFirestore().collection('users').doc(uid).set({
    isPremium: true,
    premiumExpiresAt: expiryMs,
    premiumProductId: productId,
    premiumUpdatedAt: Date.now(),
  }, { merge:true });

  return { isPremium:true, expiresAt:expiryMs };
});

/* ═══════════════════════════════════════════════════════════
   Borrado de cuenta: limpieza de datos del servidor
   La app borra users/{uid} y la cuenta de Auth. Este disparador, que se ejecuta cuando
   la cuenta de Auth desaparece (también si se borra desde la consola de Firebase o tras
   una solicitud por la página eliminar-cuenta.html), elimina el resto de datos ligados al
   uid, que el cliente no puede borrar por sus reglas: contadores de uso de IA, solicitud
   de consentimiento parental y vínculos de compra de Google Play. Los reportes de
   respuestas de IA (aiReports) NO llevan uid, así que no hay nada que borrar ahí.
   Es idempotente: si algún documento ya no existe no pasa nada.
   ═══════════════════════════════════════════════════════════ */
async function deleteUserServerData(uid){
  const db = getFirestore();
  const deleted = [];
  const targets = [['users', uid], ['parentalConsentRequests', uid], ['aiRateLimits', uid + '_chat'], ['aiRateLimits', uid + '_tts']];
  for(const [col, id] of targets){ await db.collection(col).doc(id).delete(); deleted.push(col + '/' + id); }
  const owned = await db.collection('playPurchaseTokens').where('uid', '==', uid).get();
  for(const d of owned.docs){ await d.ref.delete(); deleted.push('playPurchaseTokens/' + d.id); }
  return deleted;
}
exports.deleteUserServerData = deleteUserServerData; // para las pruebas
exports.onAccountDeleted = functionsV1.auth.user().onDelete(async (user) => {
  if(!user || !user.uid) return;
  await deleteUserServerData(user.uid);
});

// Consentimiento parental (COPPA / Google Play Families).
// La app NUNCA marca 'approved' por sí misma (firestore.rules se lo impide
// al cliente): esta colección solo cambia de 'pending' a 'approved' cuando
// TÚ lo haces manualmente desde la consola de Firebase (Firestore →
// parentalConsentRequests → {uid} → editar el campo status), una vez
// verificado el consentimiento del padre/madre/tutor por el medio que
// hayas decidido implementar (ver README.md, sección "Consentimiento
// parental"). Este trigger se limita a reflejar automáticamente ese
// cambio en users/{uid}, que es el documento que la app sí sincroniza
// con el estado local (state.parentalConsentStatus).
exports.onParentalConsentUpdated = onDocumentUpdated('parentalConsentRequests/{uid}', async (event) => {
  const before = event.data.before.data();
  const after = event.data.after.data();
  if(!after || after.status === before?.status) return;
  await getFirestore().collection('users').doc(event.params.uid).set({
    parentalConsentStatus: after.status,
  }, { merge:true });
});
