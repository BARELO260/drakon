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
  routeAfterAuth();
}

function renderParentalConsent(){
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
