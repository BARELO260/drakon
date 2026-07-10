/* ═══════════════════════════════════════════════════════════
   lessons.js — Motor de lecciones (multi-idioma)
   Drakón v6.0 — Arquitectura escalable
   ═══════════════════════════════════════════════════════════
   El contenido YA NO vive en este archivo. Cada idioma tiene su propio
   banco de lecciones en js/lessons-data/<code>.js (ej. en.js, es.js,
   fr.js...), cargado como <script> antes de este archivo. Cada uno
   registra su contenido en window.LESSON_BANKS.<CODE>.

   Ver js/lessons-data/README.md para el formato exacto y cómo agregar
   lecciones nuevas — añadir contenido NUNCA requiere tocar este motor.

   Estructura de este archivo:
     · getLessonsForLang(code) → banco de lecciones ya normalizado (cache)
     · LessonEngine            → motor de ejercicios (vidas, progreso...)
     · renderLessons()         → renderiza la lista de lecciones del tab
     · startLesson(id)         → lanza una lección del idioma activo
   ═══════════════════════════════════════════════════════════ */

/* Convierte el formato compacto (arrays posicionales) en los objetos
   completos que usa LessonEngine — así el motor no necesita cambiar. */
function buildLessons(source){
  return (source || []).map(l=>({
    id: l.id, level: l.level, title: l.title, emoji: l.emoji,
    description: l.description, xp: l.xp, study: l.study || null,
    exercises: l.ex.map(e=>({
      type: e[0], question: e[1], options: e[2], correct: e[3],
      explanation: e[4], ...(e[5] ? {context: e[5]} : {})
    }))
  }));
}

// Caché: cada banco solo se normaliza (buildLessons) la primera vez que se pide.
const _lessonBankCache = {};
function getLessonsForLang(langCode){
  const code = (langCode || 'EN').toUpperCase();
  if (!_lessonBankCache[code]) {
    const raw = (typeof window.LESSON_BANKS !== 'undefined') ? window.LESSON_BANKS[code] : null;
    _lessonBankCache[code] = buildLessons(raw || []);
  }
  return _lessonBankCache[code];
}

// Idioma de lecciones actualmente activo (según el idioma que el usuario está aprendiendo)
function _activeLessonLangCode(){
  return (typeof state !== 'undefined' && state.lang && state.lang.code) ? state.lang.code : 'EN';
}

const LessonEngine = {

  /* ── Estado ─────────────────────────── */
  lesson:       null,
  exercises:    [],
  currentIdx:   0,
  lives:        5,
  maxLives:     5,
  correctCount: 0,
  answered:     false,   // bloquea respuesta hasta pulsar "Siguiente"
  xpEarned:     0,

  /* ── Iniciar lección ────────────────── */
  start(lessonId) {
    const lessons = getLessonsForLang(_activeLessonLangCode());
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.lesson       = lesson;
    // Barajamos las opciones de cada ejercicio en cada intento. Así la
    // respuesta correcta cae en una posición distinta cada vez (A/B/C/D
    // equilibradas) sin depender de cómo se haya escrito el contenido, y
    // repetir la lección no vuelve predecible el orden.
    this.exercises    = lesson.exercises.map(ex => this._shuffleOptions(ex));
    this.currentIdx   = 0;
    this.lives        = this.maxLives;
    this.correctCount = 0;
    this.answered     = false;
    this.xpEarned     = 0;

    goTo('screen-exercise');
    this._updateTopBar();
    this._renderExercise();
  },

  /* ── Barajar opciones (Fisher-Yates) sin mutar el banco original ── */
  _shuffleOptions(ex) {
    if (!Array.isArray(ex.options) || ex.options.length < 2) return ex;
    const correctValue = ex.options[ex.correct];
    const order = ex.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const options = order.map(i => ex.options[i]);
    return { ...ex, options, correct: options.indexOf(correctValue) };
  },

  /* ── Barra superior ─────────────────── */
  _updateTopBar() {
    // Progreso
    const pct = (this.currentIdx / this.exercises.length) * 100;
    const fill = document.getElementById('exFill');
    if (fill) fill.style.width = pct + '%';

    // Vidas
    const livesEl = document.getElementById('livesEl');
    if (livesEl) {
      livesEl.innerHTML = '';
      for (let i = 0; i < this.maxLives; i++) {
        const heart = document.createElement('span');
        heart.className = 'life-heart' + (i < this.lives ? '' : ' lost');
        heart.textContent = i < this.lives ? '❤️' : '🖤';
        livesEl.appendChild(heart);
      }
    }
  },

  /* ── Renderizar ejercicio actual ────── */
  _renderExercise() {
    const area = document.getElementById('exArea');
    if (!area) return;

    if (this.currentIdx >= this.exercises.length) {
      this._showFinalResult();
      return;
    }

    this.answered = false;
    const ex = this.exercises[this.currentIdx];
    const progress = `${this.currentIdx + 1} / ${this.exercises.length}`;

    let html = `
      <div class="ex-card">
        <div class="ex-progress-label">${progress}</div>
        ${ex.context ? `<div class="ex-context">${ex.context}</div>` : ''}
        <div class="ex-question">${ex.question}</div>
        <div class="ex-options" id="exOptions">
    `;

    ex.options.forEach((opt, i) => {
      html += `
        <button class="ex-option" id="exOpt-${i}" onclick="LessonEngine.answer(${i})">
          <span class="ex-opt-letter">${['A','B','C','D'][i]}</span>
          <span class="ex-opt-text">${opt}</span>
        </button>
      `;
    });

    html += `
        </div>
        <div class="ex-feedback" id="exFeedback" style="display:none"></div>
        <button class="ex-next-btn" id="exNextBtn" style="display:none"
          onclick="LessonEngine.nextExercise()">
          Siguiente ejercicio →
        </button>
      </div>
    `;

    area.innerHTML = html;
  },

  /* ── Responder ──────────────────────── */
  answer(selectedIdx) {
    if (this.answered) return;
    this.answered = true;

    const ex = this.exercises[this.currentIdx];
    const isCorrect = selectedIdx === ex.correct;

    // Colorear opciones
    for (let i = 0; i < ex.options.length; i++) {
      const btn = document.getElementById('exOpt-' + i);
      if (!btn) continue;
      btn.disabled = true;
      if (i === ex.correct) {
        btn.classList.add('correct');
      } else if (i === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    }

    // Feedback
    const feedback = document.getElementById('exFeedback');
    if (feedback) {
      feedback.style.display = 'block';
      if (isCorrect) {
        this.correctCount++;
        this.xpEarned += Math.floor((this.lesson.xp / this.exercises.length));
        feedback.className = 'ex-feedback correct';
        const msgs = ['¡Correcto! 🎉', '¡Excelente! ⭐', '¡Perfecto! 🔥', '¡Muy bien! 💪', '¡Genial! ✨'];
        feedback.innerHTML = `
          <div class="ex-fb-header">${msgs[Math.floor(Math.random() * msgs.length)]}</div>
          <div class="ex-fb-explanation">${ex.explanation}</div>
        `;
      } else {
        this.lives--;
        feedback.className = 'ex-feedback wrong';
        feedback.innerHTML = `
          <div class="ex-fb-header">Respuesta incorrecta 😕</div>
          <div class="ex-fb-correct">✅ La respuesta correcta es: <strong>${ex.options[ex.correct]}</strong></div>
          <div class="ex-fb-explanation">${ex.explanation}</div>
        `;
      }
    }

    // Mostrar botón siguiente
    const nextBtn = document.getElementById('exNextBtn');
    if (nextBtn) {
      // Si es el último ejercicio, cambia el texto
      if (this.currentIdx === this.exercises.length - 1) {
        nextBtn.textContent = 'Ver resultados 🏆';
      }
      nextBtn.style.display = 'block';
    }

    // Actualizar barra superior
    this._updateTopBar();

    // Si no quedan vidas → mostrar resultado al pulsar "siguiente"
    // (No interrumpimos para que el usuario lea la explicación)
    if (this.lives <= 0) {
      if (nextBtn) {
        nextBtn.textContent = 'Ver resultados 💔';
        nextBtn.classList.add('ex-next-btn--danger');
      }
    }

    // Sonido
    if (typeof playSound === 'function') {
      playSound(isCorrect ? 'correct' : 'wrong');
    }

    // XP parcial (solo si correcto)
    if (isCorrect && typeof gainXP === 'function') {
      gainXP(3, false);
    }
  },

  /* ── Siguiente ejercicio ────────────── */
  nextExercise() {
    if (this.lives <= 0) {
      this._showFinalResult();
      return;
    }

    this.currentIdx++;

    if (this.currentIdx >= this.exercises.length) {
      this._showFinalResult();
      return;
    }

    this._updateTopBar();
    this._renderExercise();

    // Scroll suave arriba
    const area = document.getElementById('exArea');
    if (area) area.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /* ── Resultado final ────────────────── */
  _showFinalResult() {
    const total = this.exercises.length;
    const pct   = Math.round((this.correctCount / total) * 100);
    const won   = this.lives > 0 && pct >= 50;

    // Sonido de victoria — una sola vez, solo si la lección se aprobó.
    // No es async ni bloqueante: no interfiere con el render de abajo.
    if (won && typeof playSound === 'function') playSound('win');

    // Marcar lección como completada en el estado
    if (typeof state !== 'undefined') {
      if (!state.lessonsCompleted.includes(this.lesson.id)) {
        state.lessonsCompleted.push(this.lesson.id);
      }
      // Racha diaria — hacer una lección cuenta como actividad del día,
      // igual que chatear con la IA (antes solo el chat la activaba).
      if (typeof markActivity === 'function') markActivity();
      if (typeof updateStreakUI === 'function') updateStreakUI();
      // Misiones
      if (typeof checkMissions === 'function') checkMissions();
      if (typeof checkAchievements === 'function') checkAchievements();
      if (typeof save === 'function') save();
    }

    // XP total de la lección
    const totalXP = won ? this.lesson.xp : Math.floor(this.lesson.xp * 0.3);
    if (typeof gainXP === 'function') gainXP(totalXP);

    // Pantalla de resultado reutilizando el sistema existente de la app
    const area = document.getElementById('exArea');
    if (!area) return;

    const livesLeft = this.lives;
    const grade = pct >= 95 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '🎯' : pct >= 40 ? '📈' : '💪';
    const title = pct >= 95 ? '¡PERFECCIÓN ABSOLUTA!' : pct >= 80 ? '¡EXCELENTE TRABAJO!' : pct >= 60 ? '¡MISIÓN COMPLETADA!' : pct >= 40 ? 'BUEN PROGRESO' : '¡SIGUE ENTRENANDO!';
    const livesHtml = Array.from({length: this.maxLives}, (_, i) => i < livesLeft ? '❤️' : '🖤').join('');

    area.innerHTML = `
      <div class="ex-result">
        <div class="ex-result-icon">${grade}</div>
        <div class="ex-result-title">${title}</div>
        <div class="ex-result-lesson">${this.lesson.emoji} ${this.lesson.title}</div>
        <div class="ex-result-stats">
          <div class="ex-stat">
            <div class="ex-stat-val">${this.correctCount}/${total}</div>
            <div class="ex-stat-lbl">Correctas</div>
          </div>
          <div class="ex-stat">
            <div class="ex-stat-val">${pct}%</div>
            <div class="ex-stat-lbl">Precisión</div>
          </div>
          <div class="ex-stat">
            <div class="ex-stat-val">+${totalXP}</div>
            <div class="ex-stat-lbl">XP ganados</div>
          </div>
        </div>
        <div class="ex-result-lives">
          <div class="ex-result-lives-label">Vidas restantes</div>
          <div class="ex-result-lives-hearts">${livesHtml}</div>
        </div>
        ${pct === 100 ? '<div class="ex-result-perfect">⭐ ¡PUNTUACIÓN PERFECTA!</div>' : ''}
        <div class="ex-result-btns">
          <button class="ex-result-btn primary" onclick="LessonEngine.start('${this.lesson.id}')">
            ↺ Repetir lección
          </button>
          <button class="ex-result-btn ghost" onclick="exitEx()">
            ← Volver a lecciones
          </button>
        </div>
      </div>
    `;

    // Completar barra de progreso
    const fill = document.getElementById('exFill');
    if (fill) fill.style.width = '100%';
  },

};

/* ════════════════════════════════════════════════════════════
   RENDER DE LA LISTA DE LECCIONES
   Llamado desde ui.js → switchTab('lessons')
════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   Niveles y progreso — compartido entre la ruta de lecciones (renderLessons)
   y el glosario de estudio (renderStudyList), para que ambos usen SIEMPRE
   la misma lógica de desbloqueo y nunca queden desincronizados.
   ═══════════════════════════════════════════════════════════ */
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const LEVEL_META = {
  A1: { label: 'Principiante',       emoji: '🌱', cc: 'var(--mint)' },
  A2: { label: 'Básico',             emoji: '📗', cc: 'var(--sky)'  },
  B1: { label: 'Intermedio',         emoji: '📘', cc: 'var(--gold)' },
  B2: { label: 'Intermedio Alto',    emoji: '👑', cc: 'var(--coral)'},
};

// Devuelve TODAS las lecciones del idioma activo junto con su estado de
// progreso (completada / actual desbloqueada / bloqueada). El desbloqueo es
// secuencial: solo la siguiente lección pendiente está abierta, igual que
// en la ruta visual — el apartado Estudiar reutiliza exactamente este
// mismo cálculo para que su contenido se desbloquee al mismo ritmo.
function _getLessonsWithProgress(langCode){
  const ALL_LESSONS = getLessonsForLang(langCode);
  const completedIds = (typeof state !== 'undefined') ? (state.lessonsCompleted || []) : [];
  let unlockNext = true;
  return ALL_LESSONS.map(lesson => {
    const done = completedIds.includes(lesson.id);
    const isCurrent = !done && unlockNext;
    const locked = !done && !isCurrent;
    if (isCurrent) unlockNext = false;
    return { lesson, done, isCurrent, locked };
  });
}

function renderLessons() {
  const container = document.getElementById('lessonList');
  if (!container) return;

  const langCode = _activeLessonLangCode();
  const ALL_LESSONS = getLessonsForLang(langCode);

  console.log('[Drakón][lessons] renderLessons() ejecutado. Idioma:', langCode, '· Lecciones totales:', ALL_LESSONS.length);

  // Todavía no hay contenido cargado para este idioma — evitamos romper la UI
  // y mostramos un estado vacío amistoso en vez de forzar inglés.
  if (ALL_LESSONS.length === 0) {
    const langName = (typeof state !== 'undefined' && state.lang && state.lang.name) ? state.lang.name : 'este idioma';
    container.innerHTML = `
      <div class="lp-empty">
        <div class="lp-empty-ic">🚧</div>
        <div class="lp-empty-t">Lecciones de ${langName} en camino</div>
        <div class="lp-empty-s">Estamos construyendo el curso completo. Mientras tanto, prueba el Chat con IA o los minijuegos.</div>
      </div>
    `;
    return;
  }

  const completedIds = (typeof state !== 'undefined') ? (state.lessonsCompleted || []) : [];
  const totalLessons = ALL_LESSONS.length;
  const totalDone = ALL_LESSONS.filter(l => completedIds.includes(l.id)).length;
  const totalXp = ALL_LESSONS.filter(l => completedIds.includes(l.id)).reduce((s,l)=>s+l.xp,0);

  const progress = _getLessonsWithProgress(langCode);

  // Offsets en zigzag para que la ruta serpentee (patrón de 4 pasos)
  const OFFSETS = [-64, -22, 64, 22];

  let html = `
    <div class="lp-header">
      <div class="lp-header-ring">
        <svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" class="lp-ring-bg"/><circle cx="22" cy="22" r="19" class="lp-ring-fg" style="stroke-dasharray:${Math.round((totalDone/Math.max(1,totalLessons))*119)} 119"/></svg>
        <span class="lp-ring-txt">${totalDone}/${totalLessons}</span>
      </div>
      <div class="lp-header-info">
        <div class="lp-header-t">Tu ruta de aprendizaje</div>
        <div class="lp-header-s">${totalXp} XP ganados en lecciones</div>
      </div>
    </div>
  `;

  let globalIdx = 0;

  LEVELS.forEach(lvl => {
    const entries = progress.filter(p => p.lesson.level === lvl);
    if (!entries.length) return;
    const meta = LEVEL_META[lvl];
    const doneInLevel = entries.filter(p => p.done).length;

    html += `
      <div class="lp-unit-banner" style="--cc:${meta.cc}">
        <div class="lp-unit-ic">${meta.emoji}</div>
        <div class="lp-unit-info">
          <div class="lp-unit-t">Nivel ${lvl} · ${meta.label}</div>
          <div class="lp-unit-s">${doneInLevel}/${entries.length} lecciones completadas</div>
        </div>
      </div>
      <div class="lp-track">
    `;

    entries.forEach(({ lesson, done, isCurrent, locked }) => {
      const offset = OFFSETS[globalIdx % OFFSETS.length];
      globalIdx++;

      const statusClass = done ? 'done' : (isCurrent ? 'current' : 'locked');
      const clickAttr = locked ? '' : `onclick="LessonEngine.start('${lesson.id}')"`;
      const inner = done ? '✓' : (locked ? '🔒' : lesson.emoji);

      html += `
        <div class="lp-node-row" style="transform:translateX(${offset}px)">
          <div class="lp-node ${statusClass}" ${clickAttr} style="--cc:${meta.cc}">
            ${isCurrent ? '<div class="lp-node-badge">EMPEZAR</div>' : ''}
            <div class="lp-node-circle">${inner}</div>
          </div>
          <div class="lp-node-label ${statusClass}">${lesson.title}</div>
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

/* ════════════════════════════════════════════════════════════
   FUNCIÓN GLOBAL para salir del ejercicio
   Debe existir como función global (llamada desde HTML)
════════════════════════════════════════════════════════════ */
function exitEx() {
  if (LessonEngine.currentIdx > 0 && LessonEngine.currentIdx < LessonEngine.exercises.length) {
    if (!confirm('¿Salir de la lección? Perderás el progreso de esta sesión.')) return;
  }
  goTo('screen-main');
  switchTab('lessons');
}

/* ════════════════════════════════════════════════════════════
   ESTUDIAR — glosario de vocabulario y gramática
   ════════════════════════════════════════════════════════════
   Cada tarjeta de "Estudiar" corresponde 1 a 1 con una lección de la ruta
   (mismo id, mismo tema) y usa el vocabulario/gramática que esa lección
   enseña — así el usuario puede repasar el contenido de una sección antes
   de hacer sus ejercicios. Se desbloquea exactamente con el mismo ritmo
   que la ruta de lecciones (ver _getLessonsWithProgress).
════════════════════════════════════════════════════════════ */

// Alterna entre la vista "Ruta" (path) y "Estudiar" (glosario) dentro del tab de Lecciones.
function setLessonsView(view) {
  const pathEl  = document.getElementById('lessonList');
  const studyEl = document.getElementById('studyList');
  const btnPath  = document.getElementById('lpViewPath');
  const btnStudy = document.getElementById('lpViewStudy');
  if (!pathEl || !studyEl) return;

  const showStudy = view === 'study';
  pathEl.style.display  = showStudy ? 'none'  : 'block';
  studyEl.style.display = showStudy ? 'block' : 'none';
  if (btnPath)  btnPath.classList.toggle('active', !showStudy);
  if (btnStudy) btnStudy.classList.toggle('active', showStudy);

  if (showStudy) renderStudyList();
}

function renderStudyList() {
  const container = document.getElementById('studyList');
  if (!container) return;

  const langCode = _activeLessonLangCode();
  const progress = _getLessonsWithProgress(langCode);

  if (progress.length === 0) {
    const langName = (typeof state !== 'undefined' && state.lang && state.lang.name) ? state.lang.name : 'este idioma';
    container.innerHTML = `
      <div class="lp-empty">
        <div class="lp-empty-ic">📖</div>
        <div class="lp-empty-t">Glosario de ${langName} en camino</div>
        <div class="lp-empty-s">Todavía no hay contenido para estudiar en este idioma.</div>
      </div>
    `;
    return;
  }

  let html = `
    <div class="study-intro">
      <div class="study-intro-ic">📖</div>
      <div>
        <div class="study-intro-t">Estudia antes de practicar</div>
        <div class="study-intro-s">Vocabulario y gramática de cada lección, para repasar antes de hacer los ejercicios.</div>
      </div>
    </div>
  `;

  LEVELS.forEach(lvl => {
    const entries = progress.filter(p => p.lesson.level === lvl);
    if (!entries.length) return;
    const meta = LEVEL_META[lvl];

    html += `
      <div class="lp-unit-banner" style="--cc:${meta.cc}">
        <div class="lp-unit-ic">${meta.emoji}</div>
        <div class="lp-unit-info">
          <div class="lp-unit-t">Nivel ${lvl} · ${meta.label}</div>
        </div>
      </div>
      <div class="study-list">
    `;

    entries.forEach(({ lesson, done, isCurrent, locked }) => {
      const hasStudy = !!(lesson.study && ((lesson.study.vocab && lesson.study.vocab.length) || (lesson.study.grammar && lesson.study.grammar.length)));
      const openable = !locked && hasStudy;
      const clickAttr = openable ? `onclick="openStudyCard('${lesson.id}')"` : '';
      const statusClass = locked ? 'locked' : (done ? 'done' : 'current');
      const rightNote = locked
        ? 'Completa la lección anterior para desbloquear'
        : (hasStudy ? `${(lesson.study.vocab||[]).length} palabras · ${(lesson.study.grammar||[]).length} reglas` : 'Aún sin glosario');

      html += `
        <div class="study-card ${statusClass} ${openable ? 'openable' : ''}" ${clickAttr} style="--cc:${meta.cc}">
          <div class="study-card-ic">${locked ? '🔒' : lesson.emoji}</div>
          <div class="study-card-info">
            <div class="study-card-t">${lesson.title}</div>
            <div class="study-card-s">${rightNote}</div>
          </div>
          ${openable ? '<div class="study-card-arrow">›</div>' : ''}
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

// Abre el modal de estudio con el vocabulario y la gramática de una lección puntual.
function openStudyCard(lessonId) {
  const langCode = _activeLessonLangCode();
  const ALL_LESSONS = getLessonsForLang(langCode);
  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  if (!lesson || !lesson.study) return;

  const titleEl = document.getElementById('studyModalTitle');
  const subEl   = document.getElementById('studyModalSub');
  const bodyEl  = document.getElementById('studyModalBody');
  if (!titleEl || !subEl || !bodyEl) return;

  titleEl.textContent = `${lesson.emoji} ${lesson.title}`;
  subEl.textContent = lesson.description || '';

  const vocab   = lesson.study.vocab   || [];
  const grammar = lesson.study.grammar || [];

  let html = '';

  if (vocab.length) {
    html += `<div class="study-section-h">🗂️ Vocabulario</div><div class="study-vocab-list">`;
    vocab.forEach(v => {
      const [term, translation, note] = v;
      html += `
        <div class="study-vocab-row">
          <div class="study-vocab-term">${term}</div>
          <div class="study-vocab-tr">${translation}${note ? `<div class="study-vocab-note">${note}</div>` : ''}</div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (grammar.length) {
    html += `<div class="study-section-h">🧩 Gramática</div>`;
    grammar.forEach(g => {
      const [title, explanation, example] = g;
      html += `
        <div class="study-grammar-block">
          <div class="study-grammar-t">${title}</div>
          <div class="study-grammar-e">${explanation}</div>
          ${example ? `<div class="study-grammar-ex">${example}</div>` : ''}
        </div>
      `;
    });
  }

  if (!vocab.length && !grammar.length) {
    html = `<div class="lp-empty-s" style="padding:24px 0">Todavía no hay contenido de estudio para esta lección.</div>`;
  }

  bodyEl.innerHTML = html;
  document.getElementById('studyModal').style.display = 'flex';
}

function closeStudyCard() { const m = document.getElementById('studyModal'); if (m) m.style.display = 'none'; }
function closeStudyOv(e) { if (e.target === document.getElementById('studyModal')) closeStudyCard(); }
