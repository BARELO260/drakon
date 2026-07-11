// ── CAMBIA BUILD EN CADA DEPLOY ──────────────────────────────
const BUILD = '20260710-v21';
// ─────────────────────────────────────────────────────────────
const CACHE = 'drakon-' + BUILD;

const OWN_ORIGIN = self.location.origin;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(['./index.html', './manifest.json', './assets/icons/icon-192.png', './assets/icons/icon-512.png']))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => {
          console.log('[SW] Eliminando caché viejo:', k);
          return caches.delete(k);
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (url.origin !== OWN_ORIGIN) return;
  if (e.request.method !== 'GET') return;

  // No cachear archivos de media — el servidor los sirve como 206 (range request)
  // y la Cache API no acepta respuestas parciales
  const ext = url.pathname.split('.').pop().toLowerCase();
  if (['webm','mp4','mp3','ogg','wav','m4a'].includes(ext)) return;

  // Network-first: descarga fresca, fallback a caché si offline
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Solo cachear respuestas completas (200), nunca parciales (206)
        if (res.ok && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
