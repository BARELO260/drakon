/* ═══════════════════════════════════════════════════════════
   monetization.js — Configuración centralizada de planes, límites
   de uso, y puente a Google Play Billing.
   Dependencias: ninguna estricta (usa `state` si ya existe).
   Cargado ANTES de state.js: solo define constantes/funciones puras,
   no lee `state` hasta que se llama a una función en tiempo de uso.
   ═══════════════════════════════════════════════════════════

   POR QUÉ ESTE ARCHIVO
   Antes los límites (25 mensajes/día, qué es Premium, el precio...)
   estaban repartidos y repetidos en varios archivos (chat.js,
   gamification.js, index.html...). Cambiar un número significaba
   buscarlo en cinco sitios distintos y arriesgarse a dejar alguno
   desactualizado. Ahora hay UNA sola fuente de verdad (MONETIZATION)
   y unas pocas funciones (canUseAI, recordTTSUsage, isPremiumActive...) que todo el
   resto de la app usa — cambiar un límite o añadir un plan nuevo en
   el futuro es editar este archivo, nada más.
   ═══════════════════════════════════════════════════════════ */

const MONETIZATION = {
  // ── Planes ────────────────────────────────────────────────
  plans: {
    free: {
      id: 'free',
      name: 'Plan Gratis',
      priceLabel: '$0',
      pricePeriod: null,
    },
    premium: {
      id: 'premium',
      name: 'Drakón Premium',
      priceLabel: '$1.99',
      pricePeriod: 'mes',
      priceUsd: 1.99,
      // productId real de Google Play Billing (debe coincidir EXACTO con
      // el ID de producto de suscripción creado en Play Console).
      playProductId: 'drakon_premium_monthly',
      billingPeriodIso: 'P1M', // ISO 8601 — 1 mes, para referencia/documentación
    },
  },

  // ── Límites de uso por plan ───────────────────────────────
  // Todo lo que consume IA o TTS se controla desde aquí. `Infinity` =
  // sin límite práctico (Premium). Los periodos son "día" (reset a
  // medianoche, hora local del dispositivo — reutiliza el mismo ciclo
  // de reseteo diario que ya existe en state.js para rachas/misiones).
  limits: {
    free: {
      aiMessagesPerDay: 25,     // mensajes de chat con la IA (todas las modalidades: libre, gramática, vocab, debate, historia, roleplay, situaciones)
      ttsCharsPerDay: 6000,     // caracteres de voz ElevenLabs por día (~6 min de audio) — al agotarse, se sigue escuchando con la voz del navegador
    },
    premium: {
      aiMessagesPerDay: Infinity,
      ttsCharsPerDay: 120000,   // ~2h de audio — "amplio", no infinito, para mantener el coste controlado
    },
  },

  // ── Funciones exclusivas de Premium (bloqueo por función, no por uso) ──
  // Único caso actual: "Estoy allí ahora" (Escanear + Videollamada dentro
  // de Situaciones). Todo lo demás se limita por CANTIDAD de uso, no por
  // acceso a la función en sí — así el freemium es "prueba todo, paga por
  // más IA/voz", no "paga para desbloquear contenido".
  premiumOnlyFeatures: {
    situationLiveHelp: true,
  },
};

/* ═══════════════════════════════════════
   ESTADO DE LA SUSCRIPCIÓN
   `state.isPremium` sigue siendo el booleano que lee el resto de la app
   (no se renombra nada, por compatibilidad), pero AHORA se considera una
   caché local de lo que dice el servidor (Firestore, campo escrito solo
   por la Cloud Function que verifica la compra con Google Play — ver
   DrakonBilling más abajo), no una fuente de verdad en sí misma. Ver
   sección 7 del README de /functions para el flujo completo.
═══════════════════════════════════════ */
function isPremiumActive(){
  return typeof state !== 'undefined' && !!state.isPremium;
}
function currentPlanId(){ return isPremiumActive() ? 'premium' : 'free'; }
function currentPlan(){ return MONETIZATION.plans[currentPlanId()]; }
function currentLimits(){ return MONETIZATION.limits[currentPlanId()]; }

function isFeaturePremiumOnly(key){ return !!MONETIZATION.premiumOnlyFeatures[key]; }
function canUseFeature(key){ return !isFeaturePremiumOnly(key) || isPremiumActive(); }

/* ── Uso de IA (mensajes de chat) ──────────────────────────
   Reutiliza los contadores diarios que ya existían en state.js
   (state.msgsToday, reseteado a medianoche junto con rachas/misiones)
   en vez de crear un sistema de conteo paralelo. */
function aiMessagesUsedToday(){ return (typeof state!=='undefined' && state.msgsToday) || 0; }
function aiMessagesLimit(){ return currentLimits().aiMessagesPerDay; }
function canUseAI(){ return isPremiumActive() || aiMessagesUsedToday() < aiMessagesLimit(); }
function aiMessagesRemaining(){
  const limit = aiMessagesLimit();
  return limit === Infinity ? Infinity : Math.max(0, limit - aiMessagesUsedToday());
}

/* ── Uso de TTS (caracteres hablados) ──────────────────────
   Contador diario nuevo (state.ttsCharsToday), con el MISMO ciclo de
   reseteo diario que el resto de contadores (ver state.js). No bloquea
   la app: al agotarse, la voz sigue funcionando con el navegador — solo
   deja de usarse ElevenLabs hasta el reseteo o hasta pasar a Premium. */
function ttsCharsUsedToday(){ return (typeof state!=='undefined' && state.ttsCharsToday) || 0; }
function ttsCharsLimit(){ return currentLimits().ttsCharsPerDay; }
function canUseElevenTTS(extraChars){
  if(isPremiumActive()) return true;
  return (ttsCharsUsedToday() + (extraChars||0)) <= ttsCharsLimit();
}
function recordTTSUsage(chars){
  if(typeof state === 'undefined' || !chars) return;
  state.ttsCharsToday = (state.ttsCharsToday||0) + chars;
  if(typeof save === 'function') save();
}

/* ═══════════════════════════════════════════════════════════
   GOOGLE PLAY BILLING — puente REAL, no simulado.

   Drakón se distribuye como PWA empaquetada en una Trusted Web Activity
   (TWA) para Google Play. La forma oficial en que una TWA cobra
   suscripciones reales gestionadas por Google Play, desde JavaScript, es
   la Digital Goods API (`window.getDigitalGoodsService`), disponible
   automáticamente dentro de una TWA cuando la app está instalada desde
   Play Store — no requiere SDK nativo aparte ni código Java/Kotlin.
   Fuera de ese contexto (navegador normal, desarrollo local) la API
   simplemente no existe, y este módulo lo detecta y responde con
   claridad en vez de fingir una compra.

   FLUJO DE COMPRA REAL:
   1. El cliente pide el precio real vía Digital Goods API (opcional,
      para mostrar el precio localizado exacto de la tienda).
   2. El cliente inicia el flujo de compra nativo de Android
      (`PaymentRequest` con el método "https://play.google.com/billing").
   3. Google Play procesa el pago y devuelve un `purchaseToken`.
   4. ESE token se manda a una Cloud Function propia (`verifyPlayPurchase`,
      ver /functions/index.js) que lo valida contra la Google Play
      Developer API (server-to-server, con las credenciales de la cuenta
      de desarrollador) — SOLO esa función tiene permiso para escribir
      `isPremium:true` en Firestore. El cliente JAMÁS puede desbloquear
      Premium escribiendo `state.isPremium` directamente: ese campo se
      sincroniza DESDE Firestore, no hacia Firestore (ver auth.js).
   5. El cliente vuelve a leer el estado de la cuenta (ya actualizado) y
      refleja la suscripción activa.

   Sin este flujo desplegado (requiere: producto de suscripción creado en
   Play Console + Cloud Function `verifyPlayPurchase` + credenciales de la
   Google Play Developer API), `DrakonBilling.purchasePremium()` informa
   claramente que la compra no está disponible todavía, en vez de simular
   una activación falsa.
   ═══════════════════════════════════════════════════════════ */
const DrakonBilling = {
  _service: null,

  // Detecta si estamos dentro de una TWA con Digital Goods API disponible
  // (Chrome en Android, app instalada desde Play Store). En cualquier
  // otro contexto (navegador de escritorio, iOS, desarrollo local)
  // devuelve false — ahí no hay forma de cobrar vía Google Play.
  isAvailable(){
    return typeof window !== 'undefined' && typeof window.getDigitalGoodsService === 'function';
  },

  async _getService(){
    if(this._service) return this._service;
    if(!this.isAvailable()) return null;
    try{
      this._service = await window.getDigitalGoodsService('https://play.google.com/billing');
      return this._service;
    }catch(e){
      console.warn('[Drakón][Billing] Digital Goods Service no disponible:', e && e.message);
      return null;
    }
  },

  // Precio real desde la propia Google Play Store (localizado a la
  // moneda/región del usuario) — si no está disponible, se usa el precio
  // de referencia de MONETIZATION.plans.premium como respaldo informativo.
  async getPremiumPriceLabel(){
    const svc = await this._getService();
    if(!svc) return MONETIZATION.plans.premium.priceLabel;
    try{
      const details = await svc.getDetails([MONETIZATION.plans.premium.playProductId]);
      const item = details && details[0];
      if(item && item.price) return `${item.price.value} ${item.price.currency}`;
    }catch(e){}
    return MONETIZATION.plans.premium.priceLabel;
  },

  // Lanza el flujo de compra NATIVO de Android vía PaymentRequest con el
  // método de pago de Google Play. Nunca marca Premium activo por sí
  // mismo: eso solo lo hace el servidor tras verificar la compra (ver
  // verifyPurchaseOnServer). Devuelve {ok, reason} para que la UI pueda
  // mostrar el mensaje adecuado.
  async purchasePremium(){
    if(!this.isAvailable()){
      return { ok:false, reason:'unavailable',
        message:'Las compras dentro de la app solo están disponibles instalando Drakón desde Google Play.' };
    }
    try{
      const request = new PaymentRequest(
        [{ supportedMethods:'https://play.google.com/billing',
           data:{ sku: MONETIZATION.plans.premium.playProductId } }],
        { total:{ label:'Drakón Premium', amount:{ currency:'USD', value: String(MONETIZATION.plans.premium.priceUsd) } } },
      );
      const response = await request.show();
      const purchaseToken = response?.details?.purchaseToken;
      await response.complete('success');
      if(!purchaseToken) return { ok:false, reason:'no-token', message:'No se recibió confirmación de la compra.' };
      return await this.verifyPurchaseOnServer(purchaseToken);
    } catch(e){
      if(e && e.name === 'AbortError') return { ok:false, reason:'cancelled', message:'Compra cancelada.' };
      console.error('[Drakón][Billing] Error en la compra:', e);
      return { ok:false, reason:'error', message:'No se pudo completar la compra. Inténtalo de nuevo.' };
    }
  },

  // Envía el token de compra a la Cloud Function que lo valida contra la
  // Google Play Developer API y, si es válido, marca Premium en Firestore
  // del lado del servidor. El cliente NUNCA decide esto por sí mismo.
  async verifyPurchaseOnServer(purchaseToken){
    if(typeof window._firebase === 'undefined' || !window._firebase.verifyPlayPurchase){
      return { ok:false, reason:'no-backend',
        message:'La verificación de compras todavía no está configurada en el servidor (ver /functions/index.js → verifyPlayPurchase).' };
    }
    try{
      const result = await window._firebase.verifyPlayPurchase({
        purchaseToken,
        productId: MONETIZATION.plans.premium.playProductId,
      });
      if(result && result.isPremium){
        if(typeof state !== 'undefined'){ state.isPremium = true; if(typeof save==='function') save(); }
        if(typeof updatePremUI === 'function') updatePremUI();
        return { ok:true };
      }
      return { ok:false, reason:'not-verified', message:'No se pudo verificar la compra con Google Play.' };
    } catch(e){
      console.error('[Drakón][Billing] Error verificando la compra:', e);
      return { ok:false, reason:'verify-error', message:'No se pudo verificar la compra. Si el cargo se realizó, se activará automáticamente en unos minutos.' };
    }
  },

  // Restaura una suscripción existente al cambiar de dispositivo o
  // reinstalar — Google Play ya sabe qué compras tiene el usuario
  // asociadas a su cuenta de Google; solo hace falta re-verificar con el
  // servidor (mismo mecanismo que una compra nueva, sin volver a cobrar).
  async restorePurchases(){
    const svc = await this._getService();
    if(!svc) return { ok:false, reason:'unavailable', message:'La restauración de compras requiere la app instalada desde Google Play.' };
    try{
      const purchases = await svc.listPurchases();
      const active = purchases.find(p => p.itemId === MONETIZATION.plans.premium.playProductId);
      if(!active) return { ok:false, reason:'none-found', message:'No se encontró ninguna suscripción activa en esta cuenta de Google Play.' };
      return await this.verifyPurchaseOnServer(active.purchaseToken);
    } catch(e){
      return { ok:false, reason:'error', message:'No se pudo restaurar la compra.' };
    }
  },
};
