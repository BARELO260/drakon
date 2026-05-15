const CACHE = 'drakon-v6';
const ASSETS = ['./index.html', './manifest.json'];

// CDNs y APIs que NUNCA deben cachearse ni interceptarse
const BYPASS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'unpkg.com',
  'cdn.jsdelivr.net',
  'responsivevoice',
  'pollinations.ai',
  'api.anthropic.com',
  'firestore.googleapis.com',
  'firebase',
  'gstatic.com',
  'identitytoolkit',
  'securetoken',
  'groq.com',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;

  // Dejar pasar todo lo externo / APIs / CDNs sin tocar
  if (BYPASS.some(domain => url.includes(domain))) return;

  // Para recursos locales: network-first, fallback a caché
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
