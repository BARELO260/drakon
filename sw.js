// ── CAMBIA BUILD EN CADA DEPLOY ──────────────────────────────
const BUILD = '20250529-v16';
// ─────────────────────────────────────────────────────────────
const CACHE = 'drakon-' + BUILD;

// Solo cachear assets propios de la app — dejar pasar TODO lo demás
const OWN_ORIGIN = self.location.origin;

// INSTALL: cachear assets esenciales y activar de inmediato
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(['./index.html', './manifest.json', './icon-192.png', './icon-512.png']))
      .then(() => self.skipWaiting())
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
      .then(() => self.clients.claim())
  );
});

// FETCH: solo interceptar assets del propio dominio, dejar pasar TODO lo externo
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Dejar pasar sin tocar cualquier cosa que no sea del propio dominio
  // Esto incluye Firebase, Firestore, Google Auth, CDNs, APIs externas, etc.
  if (url.origin !== OWN_ORIGIN) return;

  // Solo GET de assets propios
  if (e.request.method !== 'GET') return;

  // Network-first para assets locales: descarga fresca, fallback si offline
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

// Mensaje para forzar activación desde el cliente
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
