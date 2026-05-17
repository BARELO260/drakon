// ── CAMBIA BUILD EN CADA DEPLOY ──────────────────────────────
const BUILD = '20250516-v11';
// ─────────────────────────────────────────────────────────────
const CACHE = 'drakon-' + BUILD;

// CDNs y APIs que NUNCA se cachean ni interceptan
const BYPASS = [
  'fonts.googleapis.com', 'fonts.gstatic.com',
  'unpkg.com', 'cdn.jsdelivr.net',
  'responsivevoice',
  'pollinations.ai',
  'api.anthropic.com',
  'firestore.googleapis.com', 'firebase',
  'gstatic.com', 'identitytoolkit', 'securetoken',
  'groq.com',
  // Google Auth popup — crítico para que el login de Google funcione en móvil
  'accounts.google.com',
  'oauth2.googleapis.com',
  '/__/auth/',          // Firebase Auth helper iframe/popup
];

// INSTALL: cachear assets esenciales y activar de inmediato
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(['./index.html', './manifest.json', './icon-192.png', './icon-512.png']))
      .then(() => self.skipWaiting())   // ← activa sin esperar que cierren pestañas
  );
});

// ACTIVATE: borrar TODOS los caches de versiones anteriores
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => {
          console.log('[SW] Eliminando caché viejo:', k);
          return caches.delete(k);
        })
      ))
      .then(() => self.clients.claim())  // ← toma control de todas las pestañas abiertas
  );
});

// FETCH: network-first para assets locales, bypass total para externos
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;

  // Dejar pasar sin tocar: CDNs, APIs, Firebase, Groq Auth, etc.
  if (BYPASS.some(d => url.includes(d))) return;
  // Nunca interceptar rutas de autenticación de Firebase
  if (url.includes('/__/auth/')) return;

  // Network-first: descarga fresca, guarda en caché, fallback si offline
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && res.status < 400) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Mensaje para forzar activación desde el cliente
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
