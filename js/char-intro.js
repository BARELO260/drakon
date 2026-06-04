/* ═══════════════════════════════════════════════════════════
   char-intro.js — Introducción cinemática de personaje
   Ruta: drakón/js/char-intro.js
   Cargar DESPUÉS de characters.js en index.html:
     <script src="js/char-intro.js"></script>

   Cómo añadir más videos en el futuro:
     Añade una entrada al objeto CHAR_INTRO_VIDEOS:
       'id-del-personaje': 'assets/characters/animations/nombrearchivo.mp4'
   ═══════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════
   MAPA DE VIDEOS — edita solo aquí para añadir más personajes
════════════════════════════════════════════════════════════ */
const CHAR_INTRO_VIDEOS = {
  dragon:  'assets/characters/animations/drakonanim.mp4',
  kenjiro: 'assets/characters/animations/kenjiroanim.mp4',
  wizard:  'assets/characters/animations/merlingoanim.mp4',
  fox:     'assets/characters/animations/zorrekanim.mp4',
  // Para añadir más: 'id_personaje': 'assets/characters/animations/archivo.mp4',
};

/* ════════════════════════════════════════════════════════════
   CharIntro — controlador del overlay cinemático
════════════════════════════════════════════════════════════ */
const CharIntro = {

  _overlay: null,   // elemento DOM del overlay
  _video:   null,   // elemento <video> activo
  _onDone:  null,   // callback a ejecutar al cerrar

  /* ── Crear overlay en el DOM (se llama una sola vez) ─── */
  _build() {
    if (document.getElementById('charIntroOverlay')) return;

    const el = document.createElement('div');
    el.id = 'charIntroOverlay';
    el.innerHTML = `
      <video
        id="charIntroVideo"
        muted
        playsinline
        preload="auto"
      ></video>
      <div id="charIntroVignette"></div>
    `;

    /* Insertar en body, encima de todo */
    document.body.appendChild(el);
    this._overlay = el;
    this._video   = document.getElementById('charIntroVideo');

    /* Cerrar al terminar el video */
    this._video.addEventListener('ended', () => this._close());

    /* Seguridad: si el video tarda más de 12s, cerrar igual */
    this._video.addEventListener('play', () => {
      clearTimeout(this._safetyTimer);
      this._safetyTimer = setTimeout(() => this._close(), 12000);
    });
  },

  /* ── Reproducir intro de un personaje ──────────────── */
  play(charId, onDone) {
    const src = CHAR_INTRO_VIDEOS[charId];

    /* Sin video para este personaje → ejecutar callback directamente */
    if (!src) {
      if (typeof onDone === 'function') onDone();
      return;
    }

    this._build();
    this._onDone = onDone || null;

    const video = this._video;
    const overlay = this._overlay;

    /* Resetear estado */
    clearTimeout(this._safetyTimer);
    video.src = src;
    video.currentTime = 0;
    overlay.classList.remove('visible', 'hiding');

    /* Mostrar overlay con fade-in */
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
    });

    /* Reproducir — manejar restricciones de autoplay */
    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          /* Si falla el autoplay (política del navegador),
             cerrar suavemente y continuar */
          this._close();
        });
      }
    };

    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener('canplaythrough', tryPlay, { once: true });
      /* Timeout de carga: si en 3s no carga, continuar sin video */
      this._loadTimer = setTimeout(() => {
        video.removeEventListener('canplaythrough', tryPlay);
        this._close();
      }, 3000);
    }
  },

  /* ── Cerrar con fade-out y ejecutar callback ────────── */
  _close() {
    clearTimeout(this._safetyTimer);
    clearTimeout(this._loadTimer);

    const overlay = this._overlay;
    const video   = this._video;
    if (!overlay) return;

    /* Pausar video */
    try { video.pause(); } catch(_) {}

    /* Fade-out */
    overlay.classList.add('hiding');

    const onTransitionEnd = () => {
      overlay.classList.remove('visible', 'hiding');
      /* Liberar src para no mantener el video en memoria */
      video.src = '';
      /* Ejecutar callback */
      if (typeof this._onDone === 'function') {
        this._onDone();
        this._onDone = null;
      }
    };

    /* Esperar a que termine la transición CSS (400ms) */
    overlay.addEventListener('transitionend', onTransitionEnd, { once: true });
    /* Fallback: si la transición no dispara (e.g. display:none), ejecutar igual */
    setTimeout(onTransitionEnd, 500);
  },
};

/* ════════════════════════════════════════════════════════════
   PATCH de selectChar
   Intercepta la función original para insertar la intro
   cinemática entre la selección y el efecto visual normal.
════════════════════════════════════════════════════════════ */
(function patchSelectChar() {

  /* Guardamos la función original de characters.js */
  const _originalSelectChar = window.selectChar;

  window.selectChar = function(id) {
    /* Actualizar el estado inmediatamente (sin efectos visuales aún)
       para que los listeners que dependen de state.charId funcionen */
    if (typeof state !== 'undefined') state.charId = id;

    /* Reproducir intro; cuando termine, ejecutar la lógica original */
    CharIntro.play(id, () => {
      if (typeof _originalSelectChar === 'function') {
        _originalSelectChar(id);
      }
    });
  };

})();
