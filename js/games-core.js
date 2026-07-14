/* ═══════════════════════════════════════════════════════════
   games-core.js  —  Núcleo compartido del módulo de juegos
   Ruta: drakón/js/games-core.js
   ═══════════════════════════════════════════════════════════ */

/* ── Personajes ─────────────────────────────────────────────
   Antes esta lista estaba duplicada aquí con sus propios ids
   ("drakon","zorrek"...) sin relación con los personajes reales
   de la app (CHARS en js/data.js, ids "dragon","fox"...). Eso
   significaba que el personaje elegido en Ajustes/Perfil no era
   el mismo que aparecía en los juegos, y que un personaje premium
   bloqueado en la app era jugable aquí sin restricción.

   Ahora se construye a partir de CHARS (mismo archivo que usa
   toda la app) + su nave correspondiente, y respeta si el
   personaje es gratuito o requiere Drakón Pro. */
const SHIP_BY_CHAR_ID = {
  dragon:  'assets/ships/navedrakon.webm',
  wizard:  'assets/ships/navemerlingo.webm',
  fox:     'assets/ships/navezorrek.webm',
  robot:   'assets/ships/navesyntinator.webm',
  alien:   'assets/ships/navemarshal.webm',
  phoenix: 'assets/ships/naveazhar.webm',
  ninja:   'assets/ships/navekenjiro.webm',
  panda:   'assets/ships/navebao.webm',
  triton:  'assets/ships/navetriton.webm',
  axonic:  'assets/ships/naveaxonic.webm',
};
const EMOJI_BY_CHAR_ID = {
  dragon:'🐲', wizard:'🧙', fox:'🦊', robot:'🤖', alien:'🛸',
  phoenix:'🔥', ninja:'🥷', panda:'🐼', triton:'⚔️', axonic:'🎧',
};

function _buildCharacters() {
  // CHARS viene de js/data.js (cargado antes que este archivo en games.html)
  if (typeof CHARS === 'undefined') return [];
  return CHARS.map(c => ({
    id:     c.id,
    name:   c.name,
    role:   c.desc,
    ship:   SHIP_BY_CHAR_ID[c.id] || '',
    emoji:  EMOJI_BY_CHAR_ID[c.id] || '🚀',
    locked: !c.free,
  }));
}
const CHARACTERS = _buildCharacters();

/* ── Estado global de sesión ───────────────────────────── */
const GameSession = {
  selectedChar: null,
  currentGame:  null,
  totalXP:      0,
  gamesPlayed:  0,
  difficulty:   'beginner',

  save() {
    try {
      sessionStorage.setItem('dkGS', JSON.stringify({
        charId:      this.selectedChar?.id ?? null,
        totalXP:     this.totalXP,
        gamesPlayed: this.gamesPlayed,
      }));
    } catch(_) {}
  },

  load() {
    try {
      const d = JSON.parse(sessionStorage.getItem('dkGS') || '{}');
      if (d.charId) this.selectedChar = CHARACTERS.find(c => c.id === d.charId) ?? null;
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

const GAME_STORE = [
  {id:'skin-neon',kind:'skin',icon:'🌌',name:'Casco neón',desc:'Brillo azul para tu nave.',price:80},
  {id:'skin-flame',kind:'skin',icon:'🔥',name:'Motor ígneo',desc:'Estela naranja de combate.',price:140},
  {id:'trail-comet',kind:'trail',icon:'☄️',name:'Estela cometa',desc:'Partículas al disparar.',price:110},
  {id:'accessory-crown',kind:'accessory',icon:'👑',name:'Corona galáctica',desc:'Distintivo para el hangar.',price:220},
  {id:'ship-aurora',kind:'ship',icon:'🛸',name:'Nave Aurora',desc:'Diseño violeta exclusivo.',price:350},
  {id:'skin-legend',kind:'skin',icon:'⚡',name:'Modo leyenda',desc:'Aspecto dorado de élite.',price:500},
];

/* ── GamesCore ─────────────────────────────────────────── */
const GamesCore = {

  /* ── Inicialización ── */
  init() {
    GameSession.load();
    this._applyTheme();
    this._renderLangBadge();
    this._renderCoins();
    this._renderCharGrid();
    const nav = _el('bottomNav');
    if (nav) nav.classList.add('visible'); // arrancamos en screen-menu

    // Si todavía no hay personaje elegido en esta sesión de juegos,
    // usar el mismo que el jugador tiene seleccionado en la app real.
    if (!GameSession.selectedChar && typeof DrakonBridge !== 'undefined') {
      const realCharId = DrakonBridge.getCharId();
      const match = CHARACTERS.find(c => c.id === realCharId && !c.locked);
      if (match) GameSession.selectedChar = match;
    }

    if (GameSession.selectedChar) {
      this._markSelected(GameSession.selectedChar.id);
      this._updateFooter(GameSession.selectedChar);
      const btn = _el('charSelBtn');
      if (btn) btn.disabled = false;
    }
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

  _renderCoins() {
    const coins = typeof DrakonBridge !== 'undefined' ? DrakonBridge.getCoins() : 0;
    ['gameCoins','storeCoins'].forEach(id=>{ const e=_el(id); if(e) e.textContent=coins; });
  },

  showStore() { this._renderCoins(); const inv=DrakonBridge.getInventory(); const grid=_el('storeGrid'); if(grid) grid.innerHTML=GAME_STORE.map(item=>{ const owned=inv.owned.includes(item.id), equipped=inv.equipped[item.kind]===item.id; return `<div class="store-item"><div class="store-item__icon">${item.icon}</div><div class="store-item__name">${item.name}</div><div class="store-item__desc">${item.desc}</div><button class="${equipped?'equipped':''}" onclick="GamesCore.buyOrEquip('${item.id}')">${equipped?'✓ EQUIPADO':owned?'EQUIPAR':`🪙 ${item.price}`}</button></div>`; }).join(''); this.showScreen('screen-store'); },

  buyOrEquip(id) { const item=GAME_STORE.find(x=>x.id===id); if(!item) return; const inv=DrakonBridge.getInventory(); if(inv.owned.includes(id)) { DrakonBridge.equipItem(item); this.toast(`${item.icon} equipado`); } else { const r=DrakonBridge.buyItem(item); if(!r.ok) return this.toast('Te faltan monedas para este objeto'); this.toast(`${item.icon} desbloqueado`); DrakonBridge.equipItem(item); } this.showStore(); },

  /* ── Navegación ── */
  showScreen(id) {
    /* Pausar juego activo si se abandona */
    if (GameSession.currentGame === 'invaders') Invaders.pause();

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
       Se oculta en el resto de pantallas: el selector de piloto ya
       tiene su propio botón fijo "LANZAR MISIÓN" abajo, y durante una
       partida taparía los controles (mismo criterio que index.html,
       que oculta su barra durante una lección o un chat activo). */
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

  showCharSelect() {
    this.showScreen('screen-char-select');
  },

  chooseDifficulty(game) {
    const names = { invaders:'Invasión Galáctica', phrasebuilder:'Phrase Builder', listening:'Listening Probe', hangman:'Ahorcado', wordsearch:'Buscador de palabras', sudoku:'Sudoku', solitaire:'Solitario', kakuro:'Cross Sums', chess:'Ajedrez' };
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
    if (game === 'invaders') return this.showCharSelect();
    if (game === 'chess') return ClassicGames.chooseChessMode();
    const starters = { phrasebuilder:()=>PhraseBuilder.start(), listening:()=>ListeningProbe.start(), hangman:()=>ClassicGames.start('hangman'), wordsearch:()=>ClassicGames.start('wordsearch'), sudoku:()=>ClassicGames.start('sudoku'), solitaire:()=>ClassicGames.start('solitaire'), kakuro:()=>ClassicGames.start('kakuro') };
    starters[game]?.();
  },

  confirmBack(to) {
    const game = GameSession.currentGame;
    if (game === 'invaders' && Invaders.isRunning()) {
      if (!confirm('¿Abandonar la partida? Se perderá el progreso del nivel.')) return;
    } else if (game && game !== 'invaders') {
      if (!confirm('¿Salir del juego? Se perderá el progreso de esta sesión.')) return;
    }
    GameSession.currentGame = null;
    this.showScreen(to);
  },

  /* ── Grid de personajes ── */
  _renderCharGrid() {
    const grid = _el('charSelGrid');
    if (!grid) return;

    const premium = typeof DrakonBridge !== 'undefined' && DrakonBridge.isPremium();

    grid.innerHTML = CHARACTERS.map(c => {
      const isLocked = c.locked && !premium;
      return `
      <div class="g-char-card${isLocked ? ' locked' : ''}" id="ccard-${c.id}"
           onclick="GamesCore.selectCharacter('${c.id}')">
        ${isLocked ? '<span class="g-char-card__lock">🔒</span>' : ''}
        <div class="g-char-ship">
          <video
            src="${c.ship}"
            autoplay loop muted playsinline
            onerror="this.classList.add('failed')"
          ></video>
          <span class="g-char-emoji">${c.emoji}</span>
        </div>
        <div class="g-char-name">${c.name}</div>
        <div class="g-char-role">${c.role}</div>
      </div>
    `;
    }).join('');
  },

  selectCharacter(id) {
    const char = CHARACTERS.find(c => c.id === id);
    if (!char) return;
    const premium = typeof DrakonBridge !== 'undefined' && DrakonBridge.isPremium();
    if (char.locked && !premium) {
      this.toast('🔒 Personaje Pro — desbloquéalo en Ajustes › Drakón Pro');
      return;
    }
    GameSession.selectedChar = char;
    GameSession.save();
    this._markSelected(id);
    this._updateFooter(char);
    const btn = _el('charSelBtn');
    if (btn) btn.disabled = false;
    this.toast(`${char.emoji} ${char.name} listo para la batalla`);
  },

  _markSelected(id) {
    document.querySelectorAll('.g-char-card').forEach(c => c.classList.remove('selected'));
    const card = _el('ccard-' + id);
    if (card) card.classList.add('selected');
  },

  _updateFooter(char) {
    const el = _el('charselInfo');
    if (el) el.innerHTML = `<span class="g-charsel-info__name">${char.emoji} ${char.name} — ${char.role}</span>`;
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
      invaders:     () => GamesCore.showCharSelect(),
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
