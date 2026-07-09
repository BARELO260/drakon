/* ═══════════════════════════════════════════════════════════
   games-bridge.js  —  Puente real entre games.html y la app
   principal (index.html).
   Ruta: drakón/js/games-bridge.js

   Antes, games.html vivía en su propia burbuja: tema por defecto,
   personaje duplicado y el XP se guardaba en sessionStorage (se
   perdía al cerrar el navegador y NUNCA tocaba el perfil real).

   Este módulo lee/escribe la MISMA clave de localStorage que usa
   la app principal (`drakon_pwa`, ver js/state.js y js/auth.js),
   así que todo lo que pasa en los juegos es real: mismo idioma
   que se está aprendiendo, mismo tema visual, mismo personaje, y
   el XP ganado se suma al perfil de verdad.
   ═══════════════════════════════════════════════════════════ */

const DrakonBridge = (() => {

  const LS_KEY = 'drakon_pwa';

  /* ── Lectura ─────────────────────────────────────────────
     Nunca lanza error: si no hay nada guardado (usuario nunca
     abrió index.html en este navegador), devuelve defaults
     razonables para que los juegos igual funcionen en inglés. */
  function _read() {
    try {
      const raw = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
      return raw && typeof raw === 'object' ? raw : {};
    } catch (_) { return {}; }
  }

  function _write(data) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(data)); return true; }
    catch (_) { return false; }
  }

  /* ── Idioma que el usuario está APRENDIENDO ──────────────
     Mismo shape que LANGS en js/data.js: {flag,name,native,code,lang} */
  function getLang() {
    const s = _read();
    return s.lang || (typeof LANGS !== 'undefined' ? LANGS[0] : { flag:'🇬🇧', name:'Inglés', native:'English', code:'EN', lang:'en-US' });
  }

  function getLangCode() { return getLang().code || 'EN'; }

  /* ── Personaje elegido en la app principal ───────────────
     Nota: los ids de CHARS (js/data.js) son distintos a los
     nombres de archivo de las naves — ver SHIP_MAP en games-core.js */
  function getCharId() {
    const s = _read();
    return s.charId || 'dragon';
  }

  function isPremium() {
    const s = _read();
    return !!s.isPremium;
  }

  /* ── Tema visual ──────────────────────────────────────────
     La app principal lo guarda en `state.theme` y lo aplica con
     document.documentElement.setAttribute('data-theme', id) —
     games.html debe hacer exactamente lo mismo, no leer
     document.body (ese era el bug original). */
  function applyTheme() {
    const s = _read();
    const theme = s.theme || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  }

  /* ── XP real ──────────────────────────────────────────────
     Suma XP directo al perfil que usa toda la app (mismo campo
     que gainXP() en js/gamification.js incrementa). También
     replica el mismo criterio de racha que markActivity() en
     js/state.js, para que jugar cuente como "practicar hoy". */
  function addXP(amount) {
    if (!amount) return;
    const s = _read();
    s.xp = (s.xp || 0) + amount;

    const today = _localDate();
    const yesterday = _localDate(-1);
    if (s.lastActiveDate !== today) {
      s.streak = (s.lastActiveDate === yesterday) ? (s.streak || 0) + 1 : 1;
      s.lastActiveDate = today;
    }
    _write(s);
  }

  function _localDate(offsetDays = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  /* ── Contenido de lecciones por idioma ────────────────────
     Reutiliza EXACTAMENTE los mismos bancos que la pestaña
     "Lecciones" de la app (window.LESSON_BANKS.<CODE>), cargados
     vía las mismas etiquetas <script src="js/lessons-data/*.js">
     que ya usa index.html. Cero contenido duplicado. */
  function getLessonBank(langCode) {
    const banks = window.LESSON_BANKS || {};
    return banks[langCode] || null;
  }

  /* Aplana todas las lecciones de un idioma en un solo pool de
     ejercicios, opcionalmente filtrado por tipo ('mcq','translate',
     'fill','arrange'). Cada ejercicio se devuelve enriquecido con
     metadatos de su lección de origen. */
  function getExercisePool(langCode, types) {
    const bank = getLessonBank(langCode);
    if (!bank) return [];
    const pool = [];
    bank.forEach(lesson => {
      (lesson.ex || []).forEach(tuple => {
        const [type, question, options, correct, explanation, context] = tuple;
        if (types && types.length && !types.includes(type)) return;
        pool.push({ type, question, options, correct, explanation, context, level: lesson.level, lessonTitle: lesson.title });
      });
    });
    return pool;
  }

  return { getLang, getLangCode, getCharId, isPremium, applyTheme, addXP, getLessonBank, getExercisePool };

})();
