/*
 * Ruta curricular de 500 lecciones por idioma.
 *
 * Los bancos base contienen las traducciones y respuestas revisadas. Esta
 * capa las distribuye en una ruta progresiva (A1 → B2), incorpora repasos
 * espaciados y rota la posición de cada respuesta correcta. No genera
 * traducciones nuevas: evita introducir errores lingüísticos al escalar.
 */
(function buildFiveHundredLessonCourse() {
  const TARGET = 500;
  const LEVELS = [
    { id: 'A1', total: 150, label: 'Fundamentos', mode: 'Base guiada', icon: '🧭' },
    { id: 'A2', total: 130, label: 'Uso cotidiano', mode: 'Práctica contextual', icon: '🗣️' },
    { id: 'B1', total: 120, label: 'Autonomía', mode: 'Consolidación', icon: '🧩' },
    { id: 'B2', total: 100, label: 'Fluidez', mode: 'Dominio aplicado', icon: '🚀' },
  ];
  const FOCI = [
    'Reconocimiento', 'Comprensión', 'Producción', 'Precisión', 'Contexto',
    'Repaso activo', 'Uso real', 'Velocidad', 'Corrección', 'Dominio',
  ];

  function cloneStudy(study) {
    return {
      vocab: (study?.vocab || []).map(item => [...item]),
      grammar: (study?.grammar || []).map(item => [...item]),
    };
  }

  // Reubica la opción correcta sin cambiar su texto ni los distractores.
  // La fórmula depende de la misión y del ejercicio, por lo que las cuatro
  // posiciones se reparten de forma uniforme a lo largo de cada curso.
  function balancedExercises(exercises, missionNumber) {
    return (exercises || []).map((exercise, exerciseIndex) => {
      const copy = [...exercise];
      const options = Array.isArray(copy[2]) ? [...copy[2]] : [];
      const correct = Number(copy[3]);
      if (!options.length || !Number.isInteger(correct) || correct < 0 || correct >= options.length) {
        return copy;
      }
      const target = (missionNumber + exerciseIndex) % options.length;
      [options[correct], options[target]] = [options[target], options[correct]];
      copy[2] = options;
      copy[3] = target;
      return copy;
    });
  }

  function sourcePool(originals, levelIndex) {
    const level = LEVELS[levelIndex].id;
    const exact = originals.filter(lesson => lesson.level === level);
    if (exact.length) return exact;
    // Cuando un idioma aún no tiene una unidad B1/B2 escrita a mano, el
    // contenido validado anterior se repasa con más autonomía, no se finge
    // que existen traducciones avanzadas que nunca fueron revisadas.
    const previous = LEVELS.slice(0, levelIndex).flatMap(meta =>
      originals.filter(lesson => lesson.level === meta.id)
    );
    return previous.length ? previous : originals;
  }

  function isValidExercise(exercise) {
    return Array.isArray(exercise)
      && Array.isArray(exercise[2])
      && Number.isInteger(Number(exercise[3]))
      && Number(exercise[3]) >= 0
      && Number(exercise[3]) < exercise[2].length;
  }

  Object.entries(window.LESSON_BANKS || {}).forEach(([code, bank]) => {
    if (!Array.isArray(bank) || bank.__course500) return;
    const originals = bank.slice();
    const validatedOriginals = originals.filter(lesson =>
      Array.isArray(lesson.ex) && lesson.ex.length && lesson.ex.every(isValidExercise)
    );
    if (!validatedOriginals.length) return;
    if (!originals.length) return;
    const grouped = [];
    let mission = 1;

    LEVELS.forEach((meta, levelIndex) => {
      const existing = originals.filter(lesson => lesson.level === meta.id);
      grouped.push(...existing);
      const needed = Math.max(0, meta.total - existing.length);
      const pool = sourcePool(validatedOriginals, levelIndex);

      for (let index = 0; index < needed; index += 1) {
        const source = pool[index % pool.length];
        const focus = FOCI[index % FOCI.length];
        grouped.push({
          id: `course_${code.toLowerCase()}_${meta.id.toLowerCase()}_${String(index + 1).padStart(3, '0')}`,
          level: meta.id,
          title: `${meta.label} · ${focus} ${String(index + 1).padStart(2, '0')}`,
          emoji: meta.icon,
          xp: 20 + levelIndex * 6,
          description: `${meta.mode}. Repasa ${source.title} y avanza con una dificultad progresiva.`,
          study: cloneStudy(source.study),
          ex: balancedExercises(source.ex, mission),
          sourceLessonId: source.id,
          reviewCycle: Math.floor(index / pool.length) + 1,
        });
        mission += 1;
      }
    });

    // Mantiene el desbloqueo secuencial alineado con los cuatro niveles.
    bank.splice(0, bank.length, ...grouped.slice(0, TARGET));
    Object.defineProperty(bank, '__course500', { value: true, enumerable: false });

    const generated = bank.filter(lesson => lesson.id.startsWith(`course_${code.toLowerCase()}_`));
    const invalid = generated.some(lesson => !lesson.ex.every(isValidExercise));
    if (bank.length !== TARGET || invalid) {
      console.error(`[Drakón] Validación del curso ${code} falló.`, { count: bank.length, invalid });
    }
  });
})();
