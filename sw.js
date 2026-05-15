// Cambia este número cada vez que hagas deploy — fuerza invalidación de caché
const BUILD = '20250515-v6';
const CACHE  = 'drakon-' + BUILD;

const BYPASS = [
  'fonts.googleapis.com', 'fonts.gstatic.com',
  'unpkg.com', 'cdn.jsdelivr.net',
  'responsivevoice',
  'pollinations.ai',
  'api.anthropic.com',
  'firestore.googleapis.com', 'firebase',
  'gstatic.com', 'identitytoolkit', 'securetoken',
  'groq.com',
];

// Al instalar: cachear solo los assets locales esenciales
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(['./index.html', './manifest.json']))
      .then(() => self.skipWaiting())
  );
});

// Al activar: borrar TODOS los caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => {
          console.log('[SW] Borrando caché viejo:', k);
          return caches.delete(k);
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;

  // Dejar pasar CDNs y APIs sin interceptar
  if (BYPASS.some(d => url.includes(d))) return;

  // Network-first: siempre intenta la red, caché solo como fallback
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
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
