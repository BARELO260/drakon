# Revisión de lecciones de Drakón — 23-24 sept. 2026

## Alcance y método

Revisé **todos los bancos**: la ruta A1→C2 (`lessons-data/*.js`: EN 223 lecciones,
ES/FR/DE/IT/PT 213 cada una = 1.276) y las mini-lecciones de **Situaciones**
(`situations-data.js`: 624). En total **11.023 ejercicios**.

- **Automático, 100 %:** escribí un validador que carga los archivos como el
  navegador y revisa cada ejercicio (ahora es `tools/validate_lessons.js`).
- **Motor real:** ejecuté `lessons.js` (normalización + barajado) sobre todos los
  ejercicios, antes y después.
- **A mano:** leí y corregí los ejercicios que las comprobaciones señalaron
  (unos 400). **No leí uno por uno los 11.023 ejercicios**; ver "Lo que no puedo
  garantizar".

| | Original | Corregido |
|---|---|---|
| Errores del validador | **288** | **0** |
| Explicaciones `undefined` que vería el alumno | 1.279 | 0 |
| `writing` cuyo mínimo de palabras no coincidía con el rango pedido | 1.594 (184 contradictorios de forma flagrante) | 0 |
| Ejercicios que reproducen audio en el idioma equivocado | 49 | 0 |
| `mcq` de vocabulario con distractores en el idioma equivocado | 660 | 0 |
| Distractores que en realidad eran otra respuesta igualmente válida | 12 | 0 |
| Títulos de lección duplicados dentro del mismo idioma | 3 | 0 |

## Qué estaba roto y qué hice

**Motor (`docs/js/lessons.js`, 22 líneas)**
1. **"undefined" en el feedback de escritura/habla.** 1.279 ejercicios `writing`/`speaking`
   no traen explicación y el motor la imprimía tal cual. Ahora es `''` y no se pinta el bloque.
2. **Mínimo de palabras contradictorio.** El motor exigía 25 palabras sin importar lo que
   pidiera la consigna. Primero corregí solo el caso flagrante (rangos con extremo
   inferior menor de 25, ej. "20-30" pedía 25 y penalizaba a quien ya había cumplido);
   en la tercera ronda até el mínimo al extremo inferior del rango en todos los casos
   (también en "55-75", que seguía aceptando solo 25 palabras). Se puede fijar a mano
   con un 7º elemento numérico si el rango de la consigna no debe usarse tal cual.
3. **Barajado robusto:** localiza la correcta por índice, no por texto (antes se rompía con
   opciones repetidas).
4. **Criterios de escritura/habla ocultos hasta fallar** (tercera ronda): la mitad de las
   palabras clave (4º elemento) debía aparecer en el texto del alumno para aprobar, pero
   nunca se mostraban antes de escribir. Ahora la consigna las lista explícitamente.

**Datos (306 líneas reescritas, una por ejercicio; nada más se tocó)**
- **49 `translate` con la respuesta en el idioma equivocado** → convertidos a `mcq`
  ("¿Qué significa «…»?" / "Elige la mejor traducción al español"). El motor lee
  `options[correct]` con la voz del idioma meta, así que esos ejercicios se oían en inglés con
  voz alemana, etc. También contaminaban el **juego de Escucha** (`listening.js`).
  36 son de FR/DE/IT/PT; 13 del banco EN. En **5 casos** (DE ×3, IT, PT) el enunciado ni
  siquiera estaba en el idioma meta sino **en español**; escribí yo la frase en alemán/italiano/portugués.
- **76 `arrange` en alemán todo en minúsculas** (los sustantivos deben ir en mayúscula) → corregidos.
- **63 opciones duplicadas por mayúsculas** en Situaciones ("lo prendo" / "Lo prendo"):
  una de las dos contaba como error aunque dijera lo mismo → sustituida por otra frase de la misma lección.
- **5 ejercicios EN con "Both A and B are correct" / "All of the above"** (`a2_travel`,
  `b2_conditionals`): el motor baraja las opciones, así que las letras apuntaban a cualquier cosa.
  Uno era un `arrange` cuya "respuesta" era esa frase. Reescritos con una sola correcta.
- **30 respuestas de `arrange` con errores de lengua/ortografía**, p. ej. FR "Y a piscine dans
  l'hôtel", "cet coiffeur", "La salade a de la tomate…", "Je vais à la salle de sport faire";
  IT "non vi è dubbio che il linguaggio è…" (debe ser *sia*), "un impegnativa";
  DE "Ich gehe ins Fitnessstudio Sport zu treiben" (falta *um … zu*), "kamera", "signal";
  guiones perdidos en FR/PT ("Pourriez vous", "Encontramo nos").
- **109 consignas `arrange`** cuya lista `[a / b / c]` no coincidía con las fichas que ve el alumno
  (las fichas salen de la respuesta) → alineadas.
- **2 `arrange` de ES** que admitían otro orden válido (`house_rooms`, `money_prices`).

**Otros**
- `docs/sw.js`: `BUILD` subido a `20260923-v26-lessons-review`. Sin esto los JS cacheados
  (stale-while-revalidate) no se refrescarían de inmediato.
- `tools/validate_lessons.js` (nuevo): el README citaba un script de validación que no existía.
  Sale con código 1 si hay errores (sirve en CI).
- `tools/lessons-data-README.md`: cifras reales (decía 72 lecciones por idioma; hay 213-223),
  regla de `translate`/audio y `minWords`.

## Segunda ronda (esta sesión)

Añadí comprobaciones de coherencia interna (no solo de estructura) y volví a leer
muestras a mano. Encontré y corregí:

- **660 ejercicios `mcq` de "¿Cómo se dice X?"** (66 lecciones de vocabulario, DE/ES/FR/IT/PT)
  donde **1 o más distractores eran entradas de la propia tabla `study.vocab` pero en
  el idioma equivocado** — por ejemplo, para "¿Cómo se dice 'cold' en alemán?" los
  distractores eran "sunny", "hot", "rainy" (inglés) en vez de "sonnig", "heiß",
  "regnerisch" (alemán, las otras entradas del tema). El alumno podía acertar
  reconociendo qué palabra "no estaba en inglés" sin saber alemán. Sustituí los
  distractores por otras entradas del vocabulario de la misma lección, en el idioma correcto.
- **12 ejercicios con un distractor que en realidad es una respuesta igual de válida**
  (ej. "Tienes que sacar la basura…" como opción incorrecta de un `translate` cuya
  correcta es "Hay que sacar…", cuando ambas traducen bien la misma idea). Los localicé
  buscando explicaciones que decían "también es correcto/válido" y comprobando si esa
  alternativa aparecía entre las opciones.
- **Tareas de escritura/habla con criterios ocultos.** El feedback exigía usar la mitad
  de unas "palabras clave" que el alumno nunca veía hasta fallar. Ahora el motor las
  muestra en la consigna, antes de escribir (`docs/js/lessons.js`).

Repasé además, sin encontrar problemas reales, ~140 casos más marcados por mis propios
scripts de auditoría: "todo" detectado como el marcador `TODO`, letras "A)/B)" que se
refieren a frases citadas en el enunciado (no a las opciones), y explicaciones que dicen
"ambas cláusulas" hablando de gramática, no de que haya dos respuestas correctas.

## Tercera ronda (esta sesión) — hallazgo principal y cierre de decisiones pendientes

### Hallazgo más importante de toda la revisión: idioma de las traducciones en "Estudiar"

En los **cinco cursos que no son de inglés** (ES, FR, DE, IT, PT), la segunda columna
de `study.vocab` —la traducción que ve el alumno en la ficha "Estudiar"— está **en
inglés**, no en español, aunque el resto de la aplicación (preguntas, botones,
explicaciones) está enteramente en español. Ejemplo real, lección `de_a1_greetings`:

```
["Guten Morgen / Guten Abend", "Good morning / Good evening"]   ← alemán → inglés
```

en vez de `"Buenos días / Buenas tardes"`. Until ahora nadie lo había señalado porque
es coherente dentro de cada curso (no rompe nada técnicamente) y varía lección a
lección, así que no salta a la vista al usar la app superficialmente. Medí el alcance
de forma sistemática: de las ~1.150 entradas de vocabulario de cada uno de esos 5
cursos, entre el 54 % y el 55 % tiene una traducción que mi detector identifica con
certeza como inglés (frases con "the", "is", "you"…); menos del 2 % se identifica con
certeza como español; el resto son palabras sueltas de 1-2 términos donde el
detector no tiene suficiente señal para decidir el idioma, pero la inspección manual
de esos casos (números, meses, colores…) confirma el mismo patrón. En total afecta a
**~5.770 entradas de vocabulario** (y a las notas de gramática que las acompañan) en
los cursos ES/FR/DE/IT/PT.

**No lo he corregido.** Arreglarlo bien requeriría traducir correctamente miles de
palabras y frases al español, exercise por exercise — es exactamente el tipo de
"inventar contenido a granel sin verificación humana" que he evitado durante toda la
revisión. Lo dejo documentado con cifras exactas para que decidas: ¿es intencional
(quizá pensado también para angloparlantes, o como aprendizaje simultáneo de una
segunda lengua), o hay que encargar la traducción al español?

### Otras correcciones de esta ronda

- **Mínimo de palabras en escritura, ahora coherente en todos los rangos.** Antes solo
  arreglaba el caso "20-30" (el motor pedía 25 y algunos alumnos ya habían escrito
  suficiente). Ahora el motor exige siempre el extremo inferior del rango que indica
  la propia consigna, sea "20-30" o "55-75". Afecta a 1.572 de los 1.594 ejercicios de
  escritura/habla (antes solo a 184).
- **3 títulos de lección duplicados dentro del mismo idioma**, que hacían confusa la
  lista de lecciones: `es_a2_weather_seasons` y `it_a2_weather_seasons` ahora llevan
  "(conversación)"/"(conversazione)" para distinguirse de su versión A1; el C2 de
  italiano sobre anteposición ("L'anteposizione per dare enfasi", igual que el C1) pasa
  a "L'anteposizione di oggetti e complementi", que además describe mejor su contenido
  (anteponer objetos/complementos, no adverbios).
- Confirmé, leyendo el código del motor, que las **130 lecciones con solo 4-5
  ejercicios no rompen los minijuegos** (Word Blaster, Escucha): toman
  `Math.min(N, ejercicios_disponibles)`, así que simplemente ofrecen menos preguntas.
  No es un defecto, lo retiro de la lista de pendientes.
- Repasé el campo `context` (pista visual/situacional, 229 ejercicios) buscando texto
  roto o vacío: ninguno.
- Intenté rellenar automáticamente las 56 lecciones de Situaciones en inglés sin
  `study.vocab`/`study.grammar` (ver ronda 1) extrayendo pares término-traducción ya
  presentes en sus propios ejercicios. La calidad no fue suficiente para publicarla
  (traducciones cortadas a mitad de frase, descripciones confundidas con traducciones,
  entradas casi duplicadas) — una ficha vacía es honesta; una con traducciones
  chapuceras sería peor. Deshice el intento y las dejo tal cual, pendientes de
  redacción manual.

### Otras comprobaciones de esta ronda sin hallazgos

Mayúsculas alemanas fuera de `arrange` (heurística de sustantivo conocido descartada
por demasiados falsos positivos sin un lematizador real — no encontré forma fiable de
automatizarlo; una lectura manual de ~20 frases largas en alemán no mostró errores),
codificación de caracteres (mojibake) en los 10 archivos de datos (ninguno), y el tipo
`listen_mcq` del validador (no se usa en ningún ejercicio: 0 casos, código inerte, sin
impacto).



## Lo que dejé sin cambiar (requiere decisión tuya)

1. **El idioma de las traducciones en "Estudiar" de los cursos ES/FR/DE/IT/PT**
   (ver el hallazgo de la tercera ronda, arriba). Es, con diferencia, lo más importante
   pendiente de decidir.
2. **`arrange` con varios órdenes válidos.** El motor solo acepta `options[correct]`. Arreglé
   los 2 que la explicación admitía, pero otros no se pueden detectar automáticamente
   sin ese tipo de pista textual. Lo sano sería que el motor aceptara una lista de
   órdenes válidos por ejercicio.
3. **56 lecciones de Situaciones en inglés sin `study.grammar` y/o `study.vocab`**
   (43 sin gramática, 13 sin vocabulario). Intenté rellenarlas automáticamente en la
   tercera ronda; la calidad no fue suficiente y deshice el intento (ver arriba).
   Necesitan redacción manual.
4. **130 lecciones con solo 4-5 ejercicios** (8 EN, 18 por cada otro idioma, 32 de
   Situaciones EN). Confirmé que no rompen los minijuegos (toman `Math.min(N,
   disponibles)`), así que es una cuestión de qué tan completo quieres el contenido,
   no un defecto.
5. **4 preguntas idénticas entre lecciones distintas** (ej. `a1_sports_exercise` ↔
   `b1_sports_fitness`) y **1 caso de `HTML_CHARS`** (un carácter `<`/`>`/`&` suelto en
   un texto) — informativos, sin impacto real en el alumno.
6. **Etiquetas "A) … B) …" dentro del enunciado** (p. ej. `b1_present_perfect #1`) conviven con
   los botones A-D de las opciones: confuso a primera vista, pero no roto (esas letras
   se refieren a las dos frases citadas en la pregunta, no a las opciones, así que no
   cambian al barajar).

## Lo que no puedo garantizar

- **Corrección lingüística global.** El validador no sabe si una frase es buena lengua. En
  tres rondas de revisión fui encontrando errores nuevos en lotes que ya "pasaban" todas
  las comprobaciones anteriores (ronda 2: distractores en idioma equivocado; ronda 3: el
  problema de fondo del idioma de traducción). Es razonable esperar que sigan quedando
  más entre los ~11.000 ejercicios que no leí uno a uno. Recomiendo revisión nativa (sobre
  todo IT/FR/DE/PT y los lotes generados) y, mientras no ocurra, no presentar el contenido
  como "revisado por lingüistas". No pude determinar de dónde salen los defectos:
  `lesson_gen.py` ensambla el texto que se le da y no fuerza minúsculas ni la dirección del
  `translate` ni el idioma de las traducciones de `study`; el origen está en el contenido
  fuente de esos lotes.
- **Lo que escribí yo** (5 frases DE/IT/PT, 5 ejercicios EN, 30 respuestas de `arrange`,
  ~672 distractores nuevos en total entre las tres rondas) merece la misma revisión nativa.
- **No probé la interfaz en un navegador.** Ejecuté la lógica del motor en Node contra todos
  los datos, incluida una simulación del render real de una tarea de escritura con la nueva
  pista de palabras clave. Antes de publicar, abre igualmente una lección de cada tipo
  (writing, translate con audio, arrange DE) y una de Situaciones.

## Cómo aplicarlo

```
# opción A: descomprimir el zip sobre el repo (mismas rutas), o
# opción B: desde la raíz del repo
git apply lessons-review.patch      # (verificado con `patch -p1` contra tu zip original)

node tools/validate_lessons.js      # debe terminar con 0 errores
```

Tras publicar, la próxima versión del service worker (`BUILD`) invalida la caché antigua.
