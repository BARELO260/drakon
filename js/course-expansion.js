/* Ruta extendida: 250 misiones por idioma, basadas exclusivamente en
   ejercicios ya validados de cada banco. */
(function expandLessonBanks() {
  const target = 250;
  const levels = [
    { id: 'A1', weight: 0.28, label: 'Fundamentos' },
    { id: 'A2', weight: 0.26, label: 'Comunicación diaria' },
    { id: 'B1', weight: 0.24, label: 'Autonomía' },
    { id: 'B2', weight: 0.22, label: 'Fluidez' },
  ];
  const icons = ['🧭', '🗣️', '🧩', '⚡', '🌍', '🎯', '📚', '🚀'];
  const cloneExercises = (items) => (items || []).map(item => {
    const copy = [...item];
    if (Array.isArray(copy[2])) copy[2] = [...copy[2]];
    return copy;
  });
  const cloneStudy = (study) => ({
    vocab: (study?.vocab || []).map(item => [...item]),
    grammar: (study?.grammar || []).map(item => [...item]),
  });

  Object.entries(window.LESSON_BANKS || {}).forEach(([code, bank]) => {
    if (!Array.isArray(bank) || bank.length >= target || bank.__expanded250) return;
    const originals = bank.slice();
    const remaining = target - originals.length;
    let assigned = 0;
    let mission = 1;
    levels.forEach(({ id: level, weight, label }, tier) => {
      const count = tier === levels.length - 1
        ? remaining - assigned
        : Math.round(remaining * weight);
      assigned += count;
      const matching = originals.filter(lesson => lesson.level === level);
      const sources = matching.length ? matching : originals;
      for (let i = 0; i < count; i += 1) {
        const source = sources[i % sources.length];
        bank.push({
          id: `practice_${code.toLowerCase()}_${String(mission).padStart(3, '0')}`,
          level,
          title: `${label} · Misión ${String(i + 1).padStart(2, '0')}`,
          emoji: icons[(mission - 1) % icons.length],
          xp: 24 + tier * 4,
          description: `Práctica guiada: ${source.title}. Refuerza el contenido antes de avanzar.`,
          study: cloneStudy(source.study),
          ex: cloneExercises(source.ex),
          sourceLessonId: source.id,
        });
        mission += 1;
      }
    });
    Object.defineProperty(bank, '__expanded250', { value: true, enumerable: false });
  });
})();
