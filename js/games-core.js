/* ═══════════════════════════════════════════════════════════
   games-core.js  —  Núcleo compartido del módulo de juegos
   Ruta: drakón/js/games-core.js
   ═══════════════════════════════════════════════════════════ */

/* ── Estado global de sesión ───────────────────────────── */
const GameSession = {
  currentGame:  null,
  totalXP:      0,
  gamesPlayed:  0,
  difficulty:   'beginner',

  save() {
    try {
      sessionStorage.setItem('dkGS', JSON.stringify({
        totalXP:     this.totalXP,
        gamesPlayed: this.gamesPlayed,
      }));
    } catch(_) {}
  },

  load() {
    try {
      const d = JSON.parse(sessionStorage.getItem('dkGS') || '{}');
      this.totalXP     = d.totalXP     ?? 0;
      this.gamesPlayed = d.gamesPlayed ?? 0;
    } catch(_) {}
  },
};

/* ── Dificultad ─────────────────────────────────────────
   Antes la dificultad elegida solo se veía en la pantalla previa
   de selección; una vez dentro del juego desaparecía por completo
   y era fácil olvidar en qué nivel se estaba jugando. Ahora se
   pinta una insignia visible (icono + color + nombre) en la barra
   superior de cada juego mientras se juega. */
const DIFF_META = {
  beginner:  { icon:'🌱', label:'Principiante' },
  medium:    { icon:'⚡', label:'Medio' },
  pro:       { icon:'🔥', label:'Profesional' },
  legendary: { icon:'👑', label:'Legendario' },
};

/* ── GamesCore ─────────────────────────────────────────── */
const GamesCore = {

  /* ── Inicialización ── */
  init() {
    GameSession.load();
    this._applyTheme();
    this._renderLangBadge();
    const nav = _el('bottomNav');
    if (nav) nav.classList.add('visible'); // arrancamos en screen-menu
  },

  /* ── Tema ── */
  _applyTheme() {
    // Antes esto buscaba document.body.dataset.theme, pero la app
    // principal guarda el tema en <html data-theme="...">, así que
    // nunca se heredaba de verdad. DrakonBridge lee el mismo
    // localStorage que usa toda la app y lo aplica igual aquí.
    if (typeof DrakonBridge !== 'undefined') DrakonBridge.applyTheme();
  },

  /* ── Idioma que se está aprendiendo (badge en el menú) ── */
  _renderLangBadge() {
    if (typeof DrakonBridge === 'undefined') return;
    const lang = DrakonBridge.getLang();
    const el = _el('gHeroLangLabel');
    if (el) el.textContent = `${lang.flag} Aprendiendo ${lang.name}`;
  },

  /* ── Navegación ── */
  showScreen(id) {
    document.querySelectorAll('.g-screen').forEach(s => s.classList.remove('active'));
    const target = _el(id);
    if (target) target.classList.add('active');
    if (id === 'screen-menu') {
      const ms = _el('menuScroll');
      if (ms) ms.scrollTop = 0;
    }
    this._paintDifficultyBadges();
    const themeOverlay = _el('chessThemeOverlay');
    if (themeOverlay) themeOverlay.remove();

    /* La barra inferior (Inicio/Situaciones/Juegos/Chats/Perfil) se
       mantiene visible en el menú de juegos, igual que en index.html.
       Se oculta en el resto de pantallas, ya que durante una partida
       taparía los controles (mismo criterio que index.html, que
       oculta su barra durante una lección o un chat activo). */
    const showNav = (id === 'screen-menu');
    const nav = _el('bottomNav');
    if (nav) nav.classList.toggle('visible', showNav);
  },

  /* Volver a index.html manteniendo la barra inferior — le decimos a
     qué pestaña queremos aterrizar mediante ?tab=, y goToMain() en
     app principal lo respeta en vez de aterrizar siempre en Inicio. */
  goToApp(tab) {
    try { sessionStorage.setItem('drakon_skip_boot','1'); } catch(_) {}
    window.location.href = tab === 'home' ? 'index.html' : `index.html?tab=${tab}`;
  },

  chooseDifficulty(game) {
    const names = { phrasebuilder:'Phrase Builder', listening:'Listening Probe', hangman:'Ahorcado', wordsearch:'Buscador de palabras', sudoku:'Sudoku', solitaire:'Solitario', kakuro:'Cross Sums', chess:'Ajedrez' };
    const options = [
      ['beginner','🌱','Principiante','Más tiempo, pistas y una entrada amable.'],
      ['medium','⚡','Medio','El equilibrio ideal entre ayuda y reto.'],
      ['pro','🔥','Profesional','Menos margen de error y mayor ritmo.'],
      ['legendary','👑','Legendario','La versión más exigente, con máxima recompensa.'],
    ];
    _el('difficultyGameName').textContent = names[game] || 'Ajusta tu partida';
    _el('difficultyOptions').innerHTML = options.map(([id,icon,name,desc]) => `<button class="difficulty-card difficulty-card--${id}" onclick="GamesCore.startWithDifficulty('${game}','${id}')"><span class="difficulty-icon">${icon}</span><span><b>${name}</b><small>${desc}</small></span><span class="difficulty-arrow">›</span></button>`).join('');
    this.showScreen('screen-difficulty');
  },

  startWithDifficulty(game, difficulty) {
    GameSession.difficulty = difficulty;
    if (game === 'chess') return ClassicGames.chooseChessMode();
    const starters = { phrasebuilder:()=>PhraseBuilder.start(), listening:()=>ListeningProbe.start(), hangman:()=>ClassicGames.start('hangman'), wordsearch:()=>ClassicGames.start('wordsearch'), sudoku:()=>ClassicGames.start('sudoku'), solitaire:()=>ClassicGames.start('solitaire'), kakuro:()=>ClassicGames.start('kakuro') };
    starters[game]?.();
  },

  confirmBack(to) {
    const game = GameSession.currentGame;
    if (game) {
      if (!confirm('¿Salir del juego? Se perderá el progreso de esta sesión.')) return;
    }
    GameSession.currentGame = null;
    this.showScreen(to);
  },

  /* ── Pantalla de resultado ── */
  showResult({ game, won, stats }) {
    GameSession.gamesPlayed++;
    GameSession.totalXP += stats.xp ?? 0;
    GameSession.save();
    GameSession.currentGame = null;

    // El XP ganado ahora se suma DE VERDAD al perfil principal
    // (antes solo vivía en sessionStorage y se perdía al cerrar el
    // navegador sin haber tocado nunca el XP real del jugador).
    if (typeof DrakonBridge !== 'undefined' && stats.xp) {
      DrakonBridge.addXP(stats.xp);
      const coins = Math.max(8, Math.floor((stats.xp || 0) / 12));
      DrakonBridge.addCoins(coins);
      stats.items = [...(stats.items || []), {val:`🪙 ${coins}`, lbl:'MONEDAS'}];
    }

    const wrap = _el('resultWrap');
    if (!wrap) return;

    const grade = this._grade(stats.pct ?? (won ? 85 : 40));

    wrap.innerHTML = `
      <div class="g-result-icon">${grade.icon}</div>
      <div class="g-result-title">${grade.title}</div>
      <div class="g-result-sub">${stats.sub || ''}</div>
      <div class="g-result-stats">
        ${(stats.items || []).map(it =>
          `<div class="g-result-stat">
            <div class="g-result-stat__val">${it.val}</div>
            <div class="g-result-stat__lbl">${it.lbl}</div>
          </div>`
        ).join('')}
      </div>
      <div class="g-result-xp">+${stats.xp ?? 0} XP GANADOS</div>
      ${stats.perfect ? '<div class="g-result-perfect">⭐ PUNTUACIÓN PERFECTA</div>' : ''}
      <div class="g-result-btns">
        <button class="g-result-btn g-result-btn--primary" id="resultRetryBtn">
          ↺ JUGAR DE NUEVO
        </button>
        <button class="g-result-btn g-result-btn--ghost"
                onclick="GamesCore.showScreen('screen-menu')">
          ← MENÚ PRINCIPAL
        </button>
      </div>
    `;

    const retryMap = {
      phrasebuilder:() => PhraseBuilder.start(),
      listening:    () => ListeningProbe.start(),
      classic:      () => (typeof ClassicGames !== 'undefined' && ClassicGames.replay()),
    };
    const rb = _el('resultRetryBtn');
    if (rb && retryMap[game]) rb.onclick = retryMap[game];

    this.showScreen('screen-result');
  },

  _grade(pct) {
    if (pct >= 100) return { icon:'🏆', title:'¡PERFECCIÓN ABSOLUTA!' };
    if (pct >= 85)  return { icon:'⭐', title:'¡EXCELENTE TRABAJO!' };
    if (pct >= 70)  return { icon:'🎯', title:'¡MISIÓN COMPLETADA!' };
    if (pct >= 50)  return { icon:'📈', title:'BUEN PROGRESO' };
    return            { icon:'💪', title:'¡SIGUE ENTRENANDO!' };
  },

  /* ── Estado vacío ──────────────────────────────────────
     Se usa cuando el idioma que el usuario está aprendiendo
     todavía no tiene suficiente contenido para armar una ronda
     de este juego (en vez de romper o mostrar contenido de otro
     idioma por error — mismo criterio que ya usa js/lessons.js). */
  showEmptyState(screenId, { icon = '🌱', title, sub }) {
    const screen = _el(screenId);
    if (!screen) return;
    const scroll = screen.querySelector('.g-screen-scroll') || screen;
    scroll.innerHTML = `
      <div class="g-empty-state">
        <div class="g-empty-state__icon">${icon}</div>
        <div class="g-empty-state__title">${title}</div>
        <div class="g-empty-state__sub">${sub}</div>
        <button class="g-empty-state__btn" onclick="GamesCore.showScreen('screen-menu')">← Volver al menú</button>
      </div>`;
  },

  /* ── Insignia de dificultad ── */
  _paintDifficultyBadges() {
    const d = (typeof GameSession !== 'undefined' && GameSession.difficulty) || 'beginner';
    const meta = DIFF_META[d] || DIFF_META.beginner;
    document.querySelectorAll('.g-diff-badge').forEach(el => {
      el.className = `g-diff-badge g-diff-badge--${d}`;
      el.textContent = `${meta.icon} ${meta.label}`;
    });
  },

  /* ── Toast ── */
  _toastTimer: null,
  toast(msg, dur = 2400) {
    const el = _el('toastEl');
    if (!el) return;
    if (this._toastTimer) clearTimeout(this._toastTimer);
    el.textContent = msg;
    el.classList.add('show');
    this._toastTimer = setTimeout(() => el.classList.remove('show'), dur);
  },
};

/* Helper global */
function _el(id) { return document.getElementById(id); }

/* Alias para el botón del HTML */
function goBackToApp() {
  try { sessionStorage.setItem('drakon_skip_boot','1'); } catch(_) {}
  window.location.href = 'index.html';
}
