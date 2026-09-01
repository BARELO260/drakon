// ── CAMBIA BUILD EN CADA DEPLOY ──────────────────────────────
const BUILD = '20260831-v25-optimized-assets';
// ─────────────────────────────────────────────────────────────
const CACHE = 'drakon-' + BUILD;

const OWN_ORIGIN = self.location.origin;
const APP_SHELL = ['./index.html', './manifest.json', './assets/icons/icon-192.png', './assets/icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(APP_SHELL))
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

  // No cachear archivos de media — el servidor los sirve como 206 (range
  // request) y la Cache API no acepta respuestas parciales.
  const ext = url.pathname.split('.').pop().toLowerCase();
  if (['webm','mp4','mp3','ogg','wav','m4a'].includes(ext)) return;

  // El documento principal (la "cáscara" de la app) siempre va primero a
  // red, para que un despliegue nuevo (nuevo BUILD) se note de inmediato
  // — con fallback a caché si no hay conexión, y como último recurso al
  // propio index.html cacheado (para que una PWA offline nunca muestre el
  // error genérico del navegador).
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
          return res;
        })
        .catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Todo lo demás (JS, CSS, imágenes, iconos...): stale-while-revalidate.
  // Responde AL INSTANTE con lo que ya haya en caché (carga mucho más
  // rápida en visitas repetidas) mientras, en paralelo, se pide la
  // versión de red y se guarda para la próxima vez — así el contenido
  // se mantiene razonablemente al día sin que cada carga tenga que
  // esperar a la red antes de mostrar nada.
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request)
        .then(res => {
          if (res.ok && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
