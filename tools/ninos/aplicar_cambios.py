#!/usr/bin/env python3
"""Ronda 11 — la app puede usarla cualquier edad (COPPA / Política de Familias de Google Play).
Uso: python3 aplicar_cambios.py <ruta_del_proyecto>
Aplica, con comprobaciones estrictas (falla si el texto esperado no está exactamente una vez):
  1. Verificación de edad ANTES de cualquier registro; menores de 13 → «modo infantil local» (sin cuenta, sin datos fuera del dispositivo).
  2. Bloqueos de red/sensores como segunda barrera; pantalla de «no disponible» en lugar de pedir correo del tutor.
  3. Chequeo equivalente en el servidor (Cloud Function drakonAi).
  4. Política de privacidad y términos alineados con el comportamiento real.
  5. Nueva versión del service worker para que los dispositivos descarguen los cambios."""
import re,sys
D=sys.argv[1] if len(sys.argv)>1 else '.'
def rd(p): return open(D+'/'+p,encoding='utf8',newline='').read()
def wr(p,t): open(D+'/'+p,'w',encoding='utf8',newline='').write(t)
def sub(p,a,b,n=1):
    t=rd(p)
    nl='\r\n' if '\r\n' in t else '\n'   # respeta el salto de línea de cada archivo (algunos usan CRLF)
    a=a.replace('\r\n','\n').replace('\n',nl); b=b.replace('\r\n','\n').replace('\n',nl)
    c=t.count(a);assert c==n,(p,a[:70],c);wr(p,t.replace(a,b))

# ───────── age-gate.js ─────────
sub('docs/js/age-gate.js',"""  state.parentalConsentStatus = state.isMinor ? 'pending' : null;
  save();
  routeAfterAuth();
}""","""  state.parentalConsentStatus = state.isMinor ? 'pending' : null;
  save();
  // Antes de iniciar sesión (nadie ha dado todavía ningún dato personal):
  // adultos → pantalla de acceso; menores de 13 → modo infantil local, sin cuenta.
  if(!(window._fbUser || (window._fbAuth && window._fbAuth.currentUser))){ routeBeforeAuth(); return; }
  routeAfterAuth();
}""")
sub('docs/js/age-gate.js',"""function renderParentalConsent(){
  const err = document.getElementById('parentalConsentErr'); if(err) err.textContent = '';""","""function renderParentalConsent(){
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
  const err = document.getElementById('parentalConsentErr'); if(err) err.textContent = '';""")
t=rd('docs/js/age-gate.js')
t+=r'''

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
'''
wr('docs/js/age-gate.js',t)

# ───────── index.html: pantalla de «función no disponible» ─────────
sub('docs/index.html','<h2 style="margin:0 0 8px;">Necesitamos permiso de un adulto</h2>','<h2 id="parentalConsentTitle" style="margin:0 0 8px;">Necesitamos permiso de un adulto</h2>')
sub('docs/index.html','<p style="opacity:.8;max-width:380px;margin:0 0 18px;font-size:13px;line-height:1.5">\n    El chat con inteligencia artificial','<p id="parentalConsentText" style="opacity:.8;max-width:380px;margin:0 0 18px;font-size:13px;line-height:1.5">\n    El chat con inteligencia artificial')
sub('docs/index.html','<div class="login-field" style="width:100%;max-width:320px;">\n    <label>Correo de tu padre, madre o tutor</label>','<div id="parentalConsentForm" class="login-field" style="width:100%;max-width:320px;">\n    <label>Correo de tu padre, madre o tutor</label>')
sub('docs/index.html','<button class="intro-btn" style="max-width:320px;" onclick="submitParentalConsentRequest()">Enviar solicitud</button>','<button id="parentalConsentSendBtn" class="intro-btn" style="max-width:320px;" onclick="submitParentalConsentRequest()">Enviar solicitud</button>')
sub('docs/index.html','<button class="quiz-skip" style="margin-top:12px;font-size:12px;" onclick="continueWithoutAI()">Continuar sin IA por ahora</button>','<button id="parentalConsentSkipBtn" class="quiz-skip" style="margin-top:12px;font-size:12px;" onclick="continueWithoutAI()">Continuar sin IA por ahora</button>')

# ───────── app.js ─────────
sub('docs/js/app.js',"""      if(state.screen === 'screen-boot'){
        goTo('screen-login');
        setLoginMode('login');
      }
    });""","""      if(state.screen === 'screen-boot'){
        _routeStart();
      }
    });""")
sub('docs/js/app.js',"""    if(state.screen === 'screen-boot'){ goTo('screen-login'); setLoginMode('login'); }
  }
}""","""    if(state.screen === 'screen-boot'){ _routeStart(); }
  }
}

// Punto de partida cuando no hay sesión: primero la verificación de edad
// (antes de pedir ningún dato), luego modo infantil local o acceso.
function _routeStart(){
  if(typeof routeBeforeAuth === 'function') routeBeforeAuth();
  else { goTo('screen-login'); if(typeof setLoginMode === 'function') setLoginMode('login'); }
}""")
sub('docs/js/app.js',"""    console.warn('[Drakón] Tope de seguridad del splash alcanzado — mostrando login.');
    goTo('screen-login');
    if(typeof setLoginMode==='function') setLoginMode('login');""","""    console.warn('[Drakón] Tope de seguridad del splash alcanzado — mostrando verificación de edad / acceso.');
    _routeStart();""")

# ───────── auth.js ─────────
sub('docs/js/auth.js',"""  window._fbReadyToken = (window._fbReadyToken || 0) + 1;
  const myToken = window._fbReadyToken;
""","""  window._fbReadyToken = (window._fbReadyToken || 0) + 1;
  const myToken = window._fbReadyToken;
  window._fbHadUser = true; // hubo una sesión real (para distinguir «arranque sin sesión» de «cerrar sesión»)
""")
sub('docs/js/auth.js',"""window.onFirebaseSignOut = function(){
  window._fbReadyToken = 0; // cancelar cualquier carga en curso
""","""window.onFirebaseSignOut = function(){
  window._fbReadyToken = 0; // cancelar cualquier carga en curso

  // Arranque sin sesión (nunca hubo usuario en esta carga): no hay nada que
  // limpiar. Se decide entre verificación de edad, modo infantil o acceso.
  // (Importante: no borrar aquí el progreso local de un menor de 13.)
  if(!window._fbHadUser){
    if(typeof routeBeforeAuth === 'function') routeBeforeAuth(); else goTo('screen-login');
    return;
  }
""")
sub('docs/js/auth.js',"""  clearTimeout(_saveCloudTimer); // cancelar cualquier save pendiente

  goTo('screen-login');
  const bn = document.getElementById('bottomNav');
  if(bn) bn.style.display='none';
};""","""  clearTimeout(_saveCloudTimer); // cancelar cualquier save pendiente

  // Dispositivo compartido: tras cerrar sesión, la próxima persona debe pasar
  // otra vez por la verificación de edad (no se hereda la edad de la anterior).
  state.birthYear = null; state.isMinor = false; state.ageGateCompleted = false; state.parentalConsentStatus = null;
  window._fbHadUser = false; window._localSessionStarted = false;

  if(typeof routeBeforeAuth === 'function') routeBeforeAuth(true); else goTo('screen-login');
  const bn = document.getElementById('bottomNav');
  if(bn) bn.style.display='none';
};""")
sub('docs/js/auth.js',"""    // Local mode logout
    goTo('screen-login');""","""    // Sin sesión: un menor de 13 usa la app sin cuenta y no tiene acceso a la pantalla de registro.
    if(typeof isChildLocalMode === 'function' && isChildLocalMode()){
      showToast('Estás usando Drakón sin cuenta: tu progreso se guarda solo en este dispositivo.');
      return;
    }
    goTo('screen-login');""")
sub('docs/js/auth.js',"""async function submitLogin(){
  if(!window._fbInit){ showFbConfigNote(); return; }""","""async function submitLogin(){
  if(!window._fbInit){ showFbConfigNote(); return; }
  if(_loginMode === 'register' && typeof canCreateAccount === 'function' && !canCreateAccount()){
    showLoginErr('No se pueden crear cuentas con la edad indicada. Puedes usar la app sin cuenta.');
    return;
  }""")
sub('docs/js/auth.js',"""async function loginWithGoogle(){
  if(!window._fbInit){ showFbConfigNote(); return; }""","""async function loginWithGoogle(){
  if(!window._fbInit){ showFbConfigNote(); return; }
  if(typeof canCreateAccount === 'function' && !canCreateAccount()){
    showLoginErr('No se pueden crear cuentas con la edad indicada. Puedes usar la app sin cuenta.');
    return;
  }""")

# ───────── monetization.js / lessons.js ─────────
sub('docs/js/monetization.js',"""  async purchasePremium(){
    if(!this.isAvailable()){""","""  async purchasePremium(){
    // Las compras no están disponibles para menores de 13 (modo infantil sin cuenta).
    if(typeof state !== 'undefined' && state.ageGateCompleted && state.isMinor){
      return { ok:false, reason:'minor', message:'Las compras no están disponibles en el modo infantil.' };
    }
    if(!this.isAvailable()){""")
sub('docs/js/lessons.js',"""  captureSpeech() {
    const Recognition""","""  captureSpeech() {
    if (typeof isMinorRestricted === 'function' && isMinorRestricted()) { alert('El dictado por voz no está disponible en el modo infantil. Escribe tu respuesta.'); return; }
    const Recognition""")

# ───────── servidor ─────────
sub('functions/index.js',"""  if(action==='chat'){
    const remaining=await consumeQuota(request.auth.uid,'chat',data.localDate);""","""  if(action==='chat'){
    // Menores de 13: sin chat con IA salvo consentimiento parental verificado.
    // Se comprueba aquí, en el servidor, con el perfil real; si la edad no consta
    // (no completó la verificación de edad), tampoco se atiende.
    const profileChat=(await getFirestore().collection('users').doc(request.auth.uid).get()).data()||{};
    if(!profileChat.birthYear) throw new HttpsError('failed-precondition','Complete the age check first.');
    if((new Date().getFullYear()-profileChat.birthYear)<13 && profileChat.parentalConsentStatus!=='approved'){
      throw new HttpsError('permission-denied','AI chat is not available for this account.');
    }
    const remaining=await consumeQuota(request.auth.uid,'chat',data.localDate);""")
sub('functions/index.js',"""    if(profile.birthYear && (new Date().getFullYear()-profile.birthYear)<18){""","""    if(!profile.birthYear || (new Date().getFullYear()-profile.birthYear)<18){""")

# ───────── service worker ─────────
t=rd('docs/sw.js');m=re.search(r"const BUILD = '[^']*';",t);assert m
wr('docs/sw.js',t.replace(m.group(0),"const BUILD = '20261018-v27-modo-infantil';",1))

# ───────── legales ─────────
p=rd('docs/privacy.html')
p,n=re.subn(r'<div class="notice">.*?</div>\s*','',p,count=1,flags=re.S);assert n==1
p=p.replace('Última actualización: 12 de septiembre de 2026','Última actualización: 18 de octubre de 2026')
old_age=re.search(r'<li><strong>Año de nacimiento:</strong>.*?</li>\s*<li><strong>Correo del padre, madre o tutor.*?</li>',p,flags=re.S);assert old_age
p=p.replace(old_age.group(0),'<li><strong>Año de nacimiento:</strong> lo pedimos una sola vez, <strong>nada más abrir la app por primera vez y antes de pedirte ningún otro dato</strong>, únicamente para saber qué protecciones te corresponden (ver sección 7). No pedimos el día ni el mes de nacimiento. Si tienes menos de 13 años, se guarda solo en tu dispositivo.</li>')
m=re.search(r'(<li><strong>Firebase \(Google\):</strong>.*?</li>)',p,flags=re.S);assert m
p=p.replace(m.group(1),m.group(1)+'\n  <li><strong>Servidores de Google (componentes y tipografías):</strong> al abrir la app tu dispositivo se conecta a servidores de Google para cargar componentes de Firebase y tipografías; como en cualquier conexión a internet, Google puede recibir la dirección IP del dispositivo. En el modo infantil (menores de 13) no existe cuenta ni se envía ningún dato de la persona.</li>',1)
a=p.index('<h2>8. Menores de edad</h2>');b=p.index('<h2>9. Cambios a esta política</h2>')
new_minors='''<h2>7. Menores de edad</h2>
<p>Drakón puede usarlo cualquier persona, sea cual sea su edad. Para proteger a los más pequeños:</p>
<ul>
  <li>Lo primero que hace la app es preguntar el <strong>año de nacimiento</strong> (nunca el día ni el mes), antes de ofrecer registrarse o iniciar sesión.</li>
  <li><strong>Menores de 13 años — modo infantil:</strong> no se puede crear una cuenta, y <strong>no pedimos nombre, correo ni ningún otro dato personal</strong>. Las lecciones y los juegos funcionan igual, y el progreso (lecciones, puntos, racha) se guarda <strong>solo en el propio dispositivo</strong>: no se envía a nuestros servidores ni a terceros. Si se borran los datos de la app o se desinstala, ese progreso se pierde.</li>
  <li>En el modo infantil permanecen <strong>desactivados</strong> el chat con el tutor de inteligencia artificial, el texto a voz gestionado, la cámara, el micrófono, el dictado por voz y las compras. No hay publicidad ni analítica.</li>
  <li><strong>De 13 a 17 años:</strong> pueden crear una cuenta. La función de voz gestionada (texto a voz) permanece desactivada para toda persona menor de 18 años, porque nuestro proveedor de voz (ElevenLabs) no permite ofrecer su servicio a menores de esa edad.</li>
  <li>Si eres padre, madre o tutor y tienes dudas sobre el uso de Drakón por un menor, o quieres que eliminemos cualquier dato asociado a una cuenta, escríbenos al correo de contacto de la sección 9.</li>
</ul>

'''
p=p[:a]+new_minors+p[b:]
p=p.replace('<h2>9. Cambios a esta política</h2>','<h2>8. Cambios a esta política</h2>').replace('<h2>10. Contacto</h2>','<h2>9. Contacto</h2>')
p=p.replace('o para gestionar el consentimiento parental de la cuenta de un menor, escríbenos','o para ejercer tus derechos sobre la cuenta de un menor a tu cargo, escríbenos')
assert 'sección 8' not in p and 'sección 10' not in p
wr('docs/privacy.html',p)
t=rd('docs/terms.html')
t,n=re.subn(r'<div class="notice">.*?</div>\s*','',t,count=1,flags=re.S);assert n==1
t=t.replace('Última actualización: 12 de septiembre de 2026','Última actualización: 18 de octubre de 2026')
m=re.search(r'<li>Drakón está disponible tanto para audiencia general.*?</li>',t,flags=re.S);assert m
t=t.replace(m.group(0),'<li>Drakón puede usarlo cualquier persona. Quien tenga menos de 13 años usa la app en <strong>modo infantil</strong>: sin cuenta, con el progreso guardado solo en su dispositivo y con el chat de IA, la voz, la cámara, el micrófono y las compras desactivados, según se describe en nuestra <a href="privacy.html">Política de privacidad</a>. Crear una cuenta requiere tener 13 años o más; si tienes entre 13 y 17 años, declaras contar con el permiso de tu padre, madre o tutor para usar la app.</li>')
assert 'Drakón ofrece una suscripción de pago opcional ("Drakón Premium")' in t
t=t.replace('Drakón ofrece una suscripción de pago opcional ("Drakón Premium")','Drakón ofrece una suscripción de pago opcional ("Drakón Premium"), no disponible en el modo infantil (menores de 13 años),',1)
wr('docs/terms.html',t)
print('cambios del modo infantil aplicados')
