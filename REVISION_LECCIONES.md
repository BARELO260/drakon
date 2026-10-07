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
palabras y frases al español, ejercicio por ejercicio — es exactamente el tipo de
"inventar contenido a granel sin verificación humana" que he evitado durante toda la
revisión. Lo dejo documentado con cifras exactas para que decidas: ¿es intencional
(quizá pensado también para angloparlantes, o como aprendizaje simultáneo de una
segunda lengua), o hay que encargar la traducción al español?

**Actualización — corregido en la cuarta ronda.** Confirmaste que la traducción debe
estar en español. Ver el apartado siguiente.

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



## Cuarta ronda (esta sesión) — traducción de `study.vocab` al español

Confirmaste que la traducción debe ir en el idioma nativo del alumno. Traduje del
inglés al español la columna de traducción de `study.vocab` en los cinco cursos
ES/FR/DE/IT/PT.

**Cómo lo hice:**
1. Extraje las ~8.285 entradas de vocabulario de los 5 cursos (lecciones principales
   + Situaciones) y las deduplique: solo **1.899 cadenas de texto distintas** (mucho
   vocabulario se repite entre lecciones y hasta entre idiomas, ya que las mismas
   listas de palabras —colores, clima, profesiones...— se reutilizan curso a curso).
2. De esas 1.899, 67 ya estaban en español (frases descriptivas como "registro
   académico/formal") y las dejé intactas.
3. Traduje **las 1.832 restantes al español yo mismo**, en 13 lotes, y verifiqué cada
   lote por código contra la lista original antes de aplicar nada (que ninguna
   entrada se perdiera, cambiara de orden o se emparejara mal).
4. Apliqué el diccionario resultante con un script que solo toca la segunda posición
   de cada entrada de `study.vocab` (nunca `study.grammar`, que ya estaba bien, ni
   los ejercicios) — **8.169 líneas reescritas** en total entre los 6 archivos
   (es.js, fr.js, de.js, it.js, pt.js, situations-data.js).
5. Verifiqué con código que no quedó ninguna entrada en inglés, que `study.grammar`
   no se tocó (1.640 entradas antes y después, exactas), que el motor sigue
   procesando los 11.023 ejercicios sin fallos, y que el resultado sobrevive a una
   reconstrucción completa desde cero del proyecto (el paso quedó integrado en el
   pipeline de compilación, no es un parche manual de una sola vez).

**Un matiz que vale la pena que sepas, no es un error mío:** en el curso de
**español** específicamente, la columna 0 (la palabra que se enseña) y la columna 1
(ahora la traducción) a menudo terminan pareciéndose mucho o siendo casi idénticas
—por ejemplo, `["ser", "ser (permanente)"]`— en **1.177 de las 1.657 entradas de ese
curso, contando también Situaciones (71,0 %, medido por igualdad exacta tras quitar
mayúsculas y espacios)**. Esto pasa porque el glosario original contrastaba "ser" con el
inglés "to be" para explicar por qué el español tiene dos verbos donde el inglés
tiene uno; al traducir ese "to be" al español, el contraste desaparece, porque el
idioma nativo del alumno y el idioma que enseña el curso ES son el mismo. No es algo
que pueda arreglar traduciendo mejor — es una pregunta de diseño: ¿qué debería
mostrar la ficha "Estudiar" del curso de español si el alumno ya es hispanohablante?
Quizás sinónimos, registro formal/informal, o notas de uso, en vez de una
traducción. Te lo señalo para que lo decidas tú; no toqué el curso ES de forma
distinta a los demás porque no me correspondía inventar ese rediseño.

### Verificación exhaustiva de la traducción (esta sesión)

Después de aplicar la traducción, la sometí a la comprobación más estricta posible
antes de darla por buena:

1. **Conteo exacto de todo el árbol de datos** (lecciones, ejercicios, entradas de
   vocabulario, entradas de gramática) comparado byte a byte entre el original y el
   resultado final: **idéntico en los cuatro números**. Nada se perdió, duplicó ni
   movió de sitio.
2. **Verificación de que solo se tocó lo que debía tocarse**: comparé columna por
   columna y confirmé que la columna 0 (palabra en el idioma meta), la columna 2
   (notas adicionales) y las 1.934 entradas de `study.grammar` quedaron **exactamente
   iguales** al original, en las 6.615 filas de vocabulario de los 5 cursos.
3. **Relectura crítica de una muestra aleatoria de 130 de mis propias 1.832
   traducciones**: no encontré errores.
4. **Tres barridos independientes, cada uno más estricto que el anterior**, buscando
   cualquier resto de inglés que mi traducción inicial hubiera pasado por alto. El
   primero encontró **9 cadenas** que mi filtro de "ya está en español" había excluido
   por error (por tener una palabra española con tilde en el paréntesis, ej. "must
   have (deducción)" se leía como español por la tilde de "deducción" y no se
   tradujo el "must have"). El segundo encontró **16 cadenas** más con el mismo
   problema en frases más largas (ej. "whose – concuerda con lo poseído", "on + día
   (hábito repetido)"). El tercero, corrigiendo un error de mi propio script (había
   excluido "who" de la búsqueda por error, pensando que era ambiguo con el español
   cuando no lo es), encontró **2 casos más** en las lecciones de cláusulas
   relativas de español y portugués. En total, **27 cadenas adicionales corregidas**
   sobre las 1.832 iniciales.
5. Cada hallazgo de cada barrido lo revisé **uno por uno a mano** antes de decidir si
   era un error real o una falsa alarma (había muchas: el límite `\b` de las
   expresiones regulares de JavaScript no reconoce las vocales con tilde como
   letras, así que palabras como "andén" o "análisis" activaban falsos positivos
   constantemente; también descarté correctamente el anglicismo "check-in", el
   numeral romano "I" de "subjuntivo I", y ejemplos genuinos en el idioma meta como
   el italiano "in luglio").
6. Tras cada corrección, repetí el ciclo completo: reconstrucción desde cero,
   validador (0 errores), motor real sobre los 11.023 ejercicios, y sintaxis de los
   17 archivos.

## Lo que dejé sin cambiar (requiere decisión tuya)

1. **Qué debería mostrar la ficha "Estudiar" del curso de español**, ahora que su
   columna de traducción es también español (ver el matiz de la cuarta ronda,
   arriba) — 1.177 de 1.657 entradas quedan circulares o redundantes.
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

- **La traducción de las 1.832 frases de la cuarta ronda es mía, no de un traductor
  profesional revisado.** Puse cuidado (vocabulario común de viajes, comida,
  gramática, expresiones hechas) y verifiqué por código que cada frase se aplicó
  exactamente donde debía sin desplazamientos ni pérdidas, pero el texto en sí no
  ha pasado por revisión humana nativa. Es el mismo tipo de contenido que llevo
  toda la revisión pidiendo que se revise antes de publicar.
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
