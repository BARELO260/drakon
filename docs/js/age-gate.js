/* ═══════════════════════════════════════════════════════════
   age-gate.js — Verificación de edad y consentimiento parental
   Dependencias: state.js (state, save), auth.js (window._fbAuth),
                 index.html (window._fbDb), app.js (goTo)
   ═══════════════════════════════════════════════════════════
   Cumplimiento COPPA (EE. UU.) y Política de Familias de Google Play:
   toda cuenta nueva pasa por una pantalla neutral de verificación de
   edad (se pregunta el año de nacimiento, nunca "¿eres menor?" de forma
   sugestiva). Si la persona tiene menos de 13 años, las funciones que
   envían datos a terceros (chat con IA, texto-a-voz gestionado, cámara,
   micrófono) quedan bloqueadas hasta que se registre consentimiento
   parental. Las lecciones, juegos y el resto de la app siguen
   disponibles sin restricción.

   ⚠️ IMPORTANTE — pendiente antes de operar con audiencia infantil real:
   Este archivo implementa (a) la pantalla neutral de verificación de
   edad y (b) el REGISTRO de la solicitud de consentimiento parental en
   Firestore (colección parentalConsentRequests). NO implementa por sí
   solo un mecanismo de verificación de consentimiento parental (VPC)
   válido ante COPPA — eso exige, como mínimo, confirmar que quien
   aprueba es realmente un adulto (p. ej. doble confirmación por correo,
   firma de formulario, o verificación de tarjeta). Debes decidir ese
   mecanismo y conectarlo (ver README.md, sección "Pendiente: consentimiento
   parental"). Mientras tanto, ningún registro pasa a status:'approved'
   automáticamente — solo tú, manualmente desde la consola de Firebase,
   puedes aprobarlo hoy.
   ═══════════════════════════════════════════════════════════ */

// ¿Las funciones sensibles (IA, cámara, mic) deben estar bloqueadas
// para el usuario actual? Único punto de verdad, usado por chat.js,
// audio.js, situations.js y ai-gateway.js.
function isMinorRestricted(){
  return !!(state.isMinor && state.parentalConsentStatus !== 'approved');
}

/* ── Restricción de voz (ElevenLabs) por edad ─────────────────────────
   Los Términos de Uso de ElevenLabs son explícitos: "If you are under 18
   years of age (or the age of legal majority where you live), you may not
   use our Services". Su Política de Uso Prohibido añade que no se les
   puede ofrecer el servicio a menores de 13 bajo ninguna circunstancia.

   Decisión de producto: se bloquea el texto-a-voz gestionado para TODA
   cuenta menor de 18 años, sin excepción y sin posibilidad de desbloqueo
   por consentimiento parental. Es la lectura más conservadora y la única
   que garantiza no incumplir el contrato con el proveedor.

   La app sigue funcionando sin voz: lecciones, juegos y chat de texto no
   dependen de ElevenLabs. La restricción se levanta sola el año en que la
   cuenta cumple 18. */
function isManagedTtsBlockedByAge(){
  if(typeof state === 'undefined' || !state.ageGateCompleted) return false;
  if(!state.birthYear) return false;
  return (new Date().getFullYear() - state.birthYear) < 18;
}

// Reemplaza la lógica de navegación post-login: primero exige completar
// el age gate una vez por cuenta; si la cuenta es de un menor sin
// consentimiento aprobado, muestra la pantalla de consentimiento parental
// (pero deja seguir a lecciones/juegos vía "Continuar sin IA"); si no,
// sigue el flujo normal (idioma nativo → intro → app).
function routeAfterAuth(){
  if(!state.ageGateCompleted){
    goTo('screen-age-gate');
    renderAgeGate();
    return;
  }
  if(isMinorRestricted()){
    goTo('screen-parental-consent');
    renderParentalConsent();
    return;
  }
  _continueNormalRoute();
}

function _continueNormalRoute(){
  if(!state.nativeLang) goTo('screen-native');
  else if(state.lang) goToMain();
  else goTo('screen-intro');
}

// Deja avanzar a la app (lecciones, juegos) sin desbloquear IA/cámara/mic.
// Útil mientras se espera el consentimiento parental.
function continueWithoutAI(){
  _continueNormalRoute();
}

function renderAgeGate(){
  const sel = document.getElementById('ageGateYear');
  if(sel && sel.options.length <= 1){
    const now = new Date().getFullYear();
    for(let y = now; y >= now - 100; y--){
      const opt = document.createElement('option');
      opt.value = String(y); opt.textContent = String(y);
      sel.appendChild(opt);
    }
  }
  const err = document.getElementById('ageGateErr'); if(err) err.textContent = '';
}

async function submitAgeGate(){
  const sel = document.getElementById('ageGateYear');
  const err = document.getElementById('ageGateErr');
  const y = parseInt(sel && sel.value, 10);
  const now = new Date().getFullYear();
  if(!y || y < now - 100 || y > now){
    if(err) err.textContent = 'Selecciona tu año de nacimiento para continuar.';
    return;
  }
  const age = now - y;
  state.birthYear = y;
  state.isMinor = age < 13;
  state.ageGateCompleted = true;
  state.parentalConsentStatus = state.isMinor ? 'pending' : null;
  save();
  // Antes de iniciar sesión (nadie ha dado todavía ningún dato personal):
  // adultos → pantalla de acceso; menores de 13 → modo infantil local, sin cuenta.
  if(!(window._fbUser || (window._fbAuth && window._fbAuth.currentUser))){ routeBeforeAuth(); return; }
  routeAfterAuth();
}

function renderParentalConsent(){
  // Modo infantil local: no hay cuenta ni se pide ningún correo; solo se informa.
  const local = (typeof isChildLocalMode === 'function') && isChildLocalMode();
  const show = (id, on) => { const e = document.getElementById(id); if(e) e.style.display = on ? '' : 'none'; };
  show('parentalConsentForm', !local); show('parentalConsentSendBtn', !local);
  const title = document.getElementById('parentalConsentTitle');
  const text = document.getElementById('parentalConsentText');
  const skip = document.getElementById('parentalConsentSkipBtn');
  if(local){
    if(title) title.textContent = 'Esta función no está disponible';
    if(text) text.textContent = 'Para cuidar tu privacidad, en el modo infantil no hay chat con inteligencia artificial, voz, cámara ni micrófono. Las lecciones y los juegos funcionan con normalidad.';
    if(skip) skip.textContent = 'Volver';
  }
  const err = document.getElementById('parentalConsentErr'); if(err) err.textContent = '';
  const ok = document.getElementById('parentalConsentOk'); if(ok) ok.style.display = 'none';
  const statusEl = document.getElementById('parentalConsentStatusMsg');
  if(statusEl){
    statusEl.textContent = state.parentalConsentStatus === 'pending'
      ? 'Ya registramos una solicitud. Está pendiente de aprobación.'
      : '';
  }
}

async function submitParentalConsentRequest(){
  const inp = document.getElementById('parentEmailInput');
  const err = document.getElementById('parentalConsentErr');
  const email = ((inp && inp.value) || '').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    if(err) err.textContent = 'Ingresa un correo válido de tu padre, madre o tutor.';
    return;
  }
  const fbUser = window._fbUser || (window._fbAuth && window._fbAuth.currentUser);
  if(!fbUser || !window._fbDb){
    if(err) err.textContent = 'No se pudo enviar la solicitud. Revisa tu conexión e intenta de nuevo.';
    return;
  }
  try{
    await window._fbDb.collection('parentalConsentRequests').doc(fbUser.uid).set({
      childUid: fbUser.uid,
      parentEmail: email,
      status: 'pending',
      requestedAt: Date.now(),
    });
    if(err) err.textContent = '';
    const ok = document.getElementById('parentalConsentOk'); if(ok) ok.style.display = 'block';
    const statusEl = document.getElementById('parentalConsentStatusMsg');
    if(statusEl) statusEl.textContent = 'Solicitud enviada. Está pendiente de aprobación.';
  } catch(e){
    if(err) err.textContent = 'No se pudo enviar la solicitud. Intenta de nuevo.';
  }
}


/* ═══════════════════════════════════════════════════════════
   MODO INFANTIL LOCAL y orden de arranque (COPPA / Política de Familias)
   ───────────────────────────────────────────────────────────
   Principio: la verificación de edad es lo PRIMERO que ve alguien que
   abre la app, antes de pedirle correo, contraseña o cualquier dato.
     · 13 años o más  → pantalla de acceso normal.
     · Menos de 13    → «modo infantil local»: NO se puede crear cuenta, el
                        progreso se guarda solo en el dispositivo, y no sale
                        ningún dato a terceros (sin chat con IA, sin voz
                        gestionada, sin cámara/micrófono, sin compras).
   Así no se recoge información personal de menores y no hace falta
   verificación de consentimiento parental. Lecciones y juegos funcionan igual.
   ═══════════════════════════════════════════════════════════ */

// ¿Se está usando la app sin cuenta siendo menor de 13?
function isChildLocalMode(){
  return !!(state.ageGateCompleted && state.isMinor && !(window._fbUser));
}

// Un menor de 13 no puede crear cuenta (ni por correo ni por Google).
function canCreateAccount(){
  return !(state.ageGateCompleted && state.isMinor);
}

// Inicialización de la interfaz cuando no hay sesión de Firebase (modo infantil).
// Equivale a lo que hace onFirebaseUserReady para una cuenta.
function startLocalSession(){
  if(window._localSessionStarted) return;
  window._localSessionStarted = true;
  try{
    applyTheme(state.theme || 'dark');
    applyNativeLanguageUI();
    updateAllUI();
    scheduleMidnightReset();
    updateStreakCountdown();
    setInterval(updateStreakCountdown, 60000);
  }catch(e){ console.warn('[Drakón] startLocalSession:', e); }
}

// Pantallas desde las que se puede redirigir sin pisar a quien ya está usando la app.
const _PRE_AUTH_SCREENS = ['screen-boot','screen-login','screen-age-gate'];

// Punto único de entrada cuando NO hay sesión: decide entre verificación de
// edad, modo infantil local o pantalla de acceso. `force` = ignorar la pantalla actual
// (se usa al cerrar sesión).
function routeBeforeAuth(force){
  if(!force && state.screen && !_PRE_AUTH_SCREENS.includes(state.screen)) return; // ya está dentro de la app
  if(!state.ageGateCompleted){
    goTo('screen-age-gate');
    renderAgeGate();
    return;
  }
  if(state.isMinor){
    startLocalSession();
    _continueNormalRoute();
    return;
  }
  goTo('screen-login');
  if(typeof setLoginMode === 'function') setLoginMode('login');
}

/* ── Segunda barrera: bloqueo a nivel de red/sensores ──────────────────
   Aunque algún módulo antiguo olvide comprobar la edad, estas envolturas
   impiden que una cuenta restringida envíe datos a Groq/ElevenLabs o abra
   cámara/micrófono/reconocimiento de voz. */
(function installMinorGuards(){
  if(typeof window === 'undefined' || window.__drakonMinorGuards) return;
  window.__drakonMinorGuards = true;
  const realFetch = window.fetch ? window.fetch.bind(window) : null;
  if(realFetch){
    window.fetch = function(input, init){
      let url = '';
      try{ url = (typeof input === 'string') ? input : ((input && input.url) || String(input)); }catch(e){}
      if(/^https:\/\/api\.groq\.com\//i.test(url) && isMinorRestricted()){
        return Promise.reject(new Error('blocked-minor'));
      }
      if(/^https:\/\/api\.elevenlabs\.io\//i.test(url) && isManagedTtsBlockedByAge()){
        return Promise.reject(new Error('blocked-minor'));
      }
      return realFetch(input, init);
    };
  }
  try{
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      const realGUM = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function(c){
        if(isMinorRestricted()){
          const err = new Error('Not allowed for this account'); err.name = 'NotAllowedError';
          return Promise.reject(err);
        }
        return realGUM(c);
      };
    }
  }catch(e){}
  ['SpeechRecognition','webkitSpeechRecognition'].forEach(function(n){
    const C = window[n]; if(!C) return;
    const W = function(){ if(isMinorRestricted()) throw new Error('blocked-minor'); return new C(); };
    W.prototype = C.prototype; window[n] = W;
  });
})();
