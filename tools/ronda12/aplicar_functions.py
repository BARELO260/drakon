import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from patchlib import sub
F = 'functions/index.js'

sub(F, "const ANDROID_PACKAGE_NAME = 'com.drakon.app'; // TODO: ajustar al nombre de paquete real",
       "const ANDROID_PACKAGE_NAME = 'com.drakon.app'; // definitivo (decidido por el creador en la ronda 12); no se puede cambiar tras publicar en Play")

sub(F, "const { onDocumentUpdated } = require('firebase-functions/v2/firestore');",
       "const { onDocumentUpdated } = require('firebase-functions/v2/firestore');\nconst functionsV1 = require('firebase-functions/v1'); // el disparador de borrado de cuentas de Auth solo existe en v1")

old_get = """  let subscription;
  try{
    const resp = await publisher.purchases.subscriptions.get({
      packageName: ANDROID_PACKAGE_NAME,
      subscriptionId: productId,
      token: purchaseToken,
    });
    subscription = resp.data;
  } catch(e){
    console.error('[verifyPlayPurchase] Google Play rechazó el token:', e && e.message);
    throw new HttpsError('invalid-argument', 'This purchase could not be verified with Google Play.');
  }

  // paymentState: 0=pendiente, 1=pagado, 2=prueba gratis, 3=pendiente por
  // cambio de plan diferido. expiryTimeMillis = cuándo vence si no se
  // renueva. Solo se considera Premium activo si de verdad no ha vencido.
  const expiryMs = Number(subscription.expiryTimeMillis || 0);
  const isActive = expiryMs > Date.now() && [1,2].includes(subscription.paymentState);

  if(!isActive){
    throw new HttpsError('failed-precondition', 'This subscription is not currently active.');
  }
"""
new_get = """  // API vigente: purchases.subscriptionsv2.get (la v1 `subscriptions.get` está obsoleta).
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
"""
sub(F, old_get, new_get)

sub(F, "const PREMIUM_PRODUCT_ID = 'drakon_premium_monthly';",
       "const PREMIUM_PRODUCT_ID = 'drakon_premium_monthly';\nconst PREMIUM_ENTITLED_STATES = ['SUBSCRIPTION_STATE_ACTIVE', 'SUBSCRIPTION_STATE_CANCELED', 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD'];")

sub(F, "  if(!subscription.acknowledgementState){\n    try{",
       "  if(subscription.acknowledgementState === 'ACKNOWLEDGEMENT_STATE_PENDING'){\n    try{")

# Limpieza de datos al borrar una cuenta
sub(F, "// Consentimiento parental (COPPA / Google Play Families).", """/* ═══════════════════════════════════════════════════════════
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

// Consentimiento parental (COPPA / Google Play Families).""")
print('ok')
