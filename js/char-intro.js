/* ═══════════════════════════════════════════════════════════
   char-intro.js — Introducción cinemática de personaje
   Ruta: drakón/js/char-intro.js
   ═══════════════════════════════════════════════════════════ */

const CHAR_INTRO_VIDEOS = {
  dragon: 'assets/characters/animations/drakonanim.mp4',
  ninja:  'assets/characters/animations/kenjiroanim.mp4',
  wizard: 'assets/characters/animations/merlingoanim.mp4',
  fox:    'assets/characters/animations/zorrekanim.mp4',
  panda:  'assets/characters/animations/baoanim.mp4',
  // Para añadir más: 'id_personaje': 'assets/characters/animations/archivo.mp4',
};

const CharIntro = {

  _overlay: null,
  _video:   null,
  _onDone:  null,
  _safetyTimer: null,
  _loadTimer:   null,

  _build() {
    if (document.getElementById('charIntroOverlay')) return;

    const el = document.createElement('div');
    el.id = 'charIntroOverlay';
    el.innerHTML = `
      <video id="charIntroVideo" muted playsinline preload="auto"></video>
      <div id="charIntroVignette"></div>
    `;
    document.body.appendChild(el);
    this._overlay = el;
    this._video   = document.getElementById('charIntroVideo');

    /* Escalar el video al cargar sus metadatos y al cambiar el tamaño */
    this._video.addEventListener('loadedmetadata', () => this._scaleVideo());
    window.addEventListener('resize', () => this._scaleVideo());

    this._video.addEventListener('ended', () => this._close());
    this._video.addEventListener('play', () => {
      clearTimeout(this._safetyTimer);
      this._safetyTimer = setTimeout(() => this._close(), 12000);
    });
  },

  /* ── Escala el video para que cubra toda la pantalla ── */
  _scaleVideo() {
    const v = this._video;
    if (!v || !v.videoWidth || !v.videoHeight) return;

    const sw = window.innerWidth;
    const sh = window.innerHeight;
    const vw = v.videoWidth;
    const vh = v.videoHeight;

    /* Ratio necesario para cubrir la pantalla en ambas dimensiones */
    const scale = Math.max(sw / vw, sh / vh);

    const w = Math.ceil(vw * scale);
    const h = Math.ceil(vh * scale);

    v.style.width  = w + 'px';
    v.style.height = h + 'px';
  },

  play(charId, onDone) {
    const src = CHAR_INTRO_VIDEOS[charId];
    if (!src) {
      if (typeof onDone === 'function') onDone();
      return;
    }

    this._build();
    this._onDone = onDone || null;

    const video   = this._video;
    const overlay = this._overlay;

    clearTimeout(this._safetyTimer);
    clearTimeout(this._loadTimer);

    video.src = src;
    video.currentTime = 0;
    overlay.classList.remove('visible', 'hiding');

    requestAnimationFrame(() => overlay.classList.add('visible'));

    const tryPlay = () => {
      this._scaleVideo();
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => this._close());
      }
    };

    if (video.readyState >= 1) {
      tryPlay();
    } else {
      video.addEventListener('loadedmetadata', tryPlay, { once: true });
      this._loadTimer = setTimeout(() => {
        video.removeEventListener('loadedmetadata', tryPlay);
        this._close();
      }, 4000);
    }
  },

  _close() {
    clearTimeout(this._safetyTimer);
    clearTimeout(this._loadTimer);

    const overlay = this._overlay;
    const video   = this._video;
    if (!overlay) return;

    try { video.pause(); } catch(_) {}

    overlay.classList.add('hiding');

    let called = false;
    const finish = () => {
      if (called) return;
      called = true;
      overlay.classList.remove('visible', 'hiding');
      // Liberar memoria completamente
      video.src = '';
      video.load();
      if (typeof this._onDone === 'function') {
        this._onDone();
        this._onDone = null;
      }
    };

    overlay.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, 500);
  },
};

(function patchSelectChar() {
  const _original = window.selectChar;

  window.selectChar = function(id) {
    if (typeof state !== 'undefined') state.charId = id;
    CharIntro.play(id, () => {
      if (typeof _original === 'function') _original(id);
    });
  };
})();
