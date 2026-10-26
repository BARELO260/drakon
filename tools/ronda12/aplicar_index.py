import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from patchlib import sub
H = 'docs/index.html'

# 1) Tipografías alojadas en la app (adiós a fonts.googleapis.com / fonts.gstatic.com)
sub(H, '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
''', '''<link rel="preload" href="assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/baloo-2-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/fonts.css"/>
''')

# 2) El SDK de Firebase ya no se carga siempre: solo cuando la persona declaró 13+ años
sub(H, '''<!-- Firebase compat — works on ALL devices including iOS Safari, no ES modules needed -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
''', '''<!-- Firebase compat (sin módulos ES; funciona en iOS Safari).
     COPPA / Familias: el SDK de Google NO se descarga hasta que la persona ha declarado
     su edad y tiene 13 años o más. En el modo infantil (menos de 13) no se carga nunca, así
     que no hay ninguna conexión con servidores de Google. Ver ensureFirebaseSdk(). -->
<script>
(function(){
  var URLS = [
    'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js'
  ];
  var pending = null;
  // ¿Consta en este dispositivo que la persona declaró 13 años o más?
  window.ageAllowsFirebase = function(){
    try{ var s = JSON.parse(localStorage.getItem('drakon_pwa') || '{}'); return !!(s.ageGateCompleted && !s.isMinor); }
    catch(e){ return false; }
  };
  window.ensureFirebaseSdk = function(){
    if(window._fbInit) return Promise.resolve(true);
    if(!window.ageAllowsFirebase()) return Promise.resolve(false);
    if(pending) return pending;
    pending = URLS.reduce(function(chain, url){
      return chain.then(function(){
        return new Promise(function(ok, fail){
          var s = document.createElement('script');
          s.src = url; s.onload = ok; s.onerror = function(){ fail(new Error('No se pudo cargar ' + url)); };
          document.head.appendChild(s);
        });
      });
    }, Promise.resolve()).then(function(){
      if(typeof window._initFirebaseApp === 'function') window._initFirebaseApp();
      return !!window._fbInit;
    }).catch(function(e){
      console.warn('[Drakón] SDK de Firebase no disponible:', e && e.message);
      pending = null; return false;
    });
    return pending;
  };
})();
</script>
''')

# 3) La inicialización de Firebase pasa a una función que se ejecuta cuando el SDK está cargado
sub(H, '''  try {
    const config = window._getFirebaseConfig();
    const app  = firebase.initializeApp(config);''', '''  window._initFirebaseApp = function(){
  if(window._fbInit) return;
  try {
    const config = window._getFirebaseConfig();
    const app  = firebase.initializeApp(config);''')
sub(H, '''    console.error('Firebase init failed:', e);
    window._fbInit  = false;
    window._fbReady = false;
  }
})();
</script>''', '''    console.error('Firebase init failed:', e);
    window._fbInit  = false;
    window._fbReady = false;
  }
  };
  // Adulto que ya declaró su edad en una visita anterior: cargar el SDK ahora para
  // restaurar su sesión. Si no hay edad declarada o es menor de 13, no se carga nada.
  if(window.ageAllowsFirebase()) window.ensureFirebaseSdk();
})();
</script>''')

# 4) Módulo de reporte de respuestas de IA
sub(H, '''<script src="js/auth.js"></script>
''', '''<script src="js/auth.js"></script>
<!-- 9b. Reportar respuestas de la IA (política de contenido generado por IA de Google Play) -->
<script src="js/report.js"></script>
''')

# 5) Enlaces legales en Ajustes
sub(H, '''      <div class="setting-row" id="deleteAccountRow" onclick="deleteAccountFlow()">''', '''      <div class="setting-row" onclick="window.open('terms.html','_blank')">
        <div class="sr-left"><span class="sr-icon">📃</span><div><div class="sr-title">Términos de servicio</div><div class="sr-sub">Las reglas de uso de Drakón</div></div></div>
        <div style="font-size:13px;font-weight:800;color:var(--muted)">›</div>
      </div>
      <div class="setting-row" onclick="window.open('eliminar-cuenta.html','_blank')">
        <div class="sr-left"><span class="sr-icon">🗑️</span><div><div class="sr-title">Cómo eliminar tu cuenta y tus datos</div><div class="sr-sub">También sin abrir la app: página web con las instrucciones</div></div></div>
        <div style="font-size:13px;font-weight:800;color:var(--muted)">›</div>
      </div>
      <div class="setting-row" id="deleteAccountRow" onclick="deleteAccountFlow()">''')

# games.html (CRLF): mismas tipografías propias
sub('docs/games.html', '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
''', '''<link rel="stylesheet" href="css/fonts.css">
''')

# age-gate.js: tras declarar 13+ años se carga el SDK antes de mostrar el acceso
sub('docs/js/age-gate.js', '''  state.parentalConsentStatus = state.isMinor ? 'pending' : null;
  save();
''', '''  state.parentalConsentStatus = state.isMinor ? 'pending' : null;
  save();
  // 13 años o más: ahora (y solo ahora) se descarga el SDK de Firebase (Google) para el acceso.
  // Menores de 13: no se carga nunca (modo infantil, sin conexión con Google).
  if(!state.isMinor && typeof window.ensureFirebaseSdk === 'function'){
    try{ await window.ensureFirebaseSdk(); }catch(e){}
  }
''')
print('ok')
# (parche adicional ya aplicado a mano en la sesión: aviso inmediato de «sin sesión» cuando no se carga el SDK)
