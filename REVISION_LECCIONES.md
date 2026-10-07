# Revisión de lecciones de Drakón — 23-24 sept. 2026

## Alcance y método

Revisé **todos los bancos**: la ruta A1→C2 (`lessons-data/*.js`: EN 223 lecciones,
ES/FR/DE/IT/PT 213 cada una = 1.276) y las mini-lecciones de **Situaciones**
(`situations-data.js`: 624). Empecé con 11.023 ejercicios; tras seis rondas de
revisión, la app tiene ahora **11.543** (ver la sexta ronda, más abajo).

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
| Lecciones de Situaciones (EN) sin ficha de "Estudiar" completa | 56 | 0 |
| Lecciones con menos de 6 ejercicios (el estándar del 79% de la app) | 390 | 0 |
| Traducciones en inglés en el glosario de "Estudiar" (ES/FR/DE/IT/PT) | ~8.169 entradas | 0 |
| Ejercicios calificables que piden decir una palabra "en inglés" dentro de un curso no inglés | 410 | **sin corregir — ver más abajo** |

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

## Quinta ronda (esta sesión) — las 56 lecciones de Situaciones sin ficha de estudio

En la primera ronda había detectado 56 lecciones de Situaciones en inglés con
`study.vocab` o `study.grammar` vacío, e intenté rellenarlas automáticamente; la
calidad no fue suficiente y deshice el intento. Esta vez lo hice a mano, lección
por lección:

- **13 lecciones** (las de tipo "Diálogo" y similares) tenían gramática pero no
  vocabulario. Escribí 4-5 frases de vocabulario para cada una, tomadas
  directamente de los propios ejercicios de esa lección (ya verificados y en uso),
  no inventadas desde cero.
- **43 lecciones** (las de vocabulario/frases por tema) tenían vocabulario pero no
  gramática. Escribí una nota gramatical nueva para cada una, relacionada
  específicamente con el contenido de esa lección — nunca una nota genérica
  copiada: por ejemplo, "sustantivos compuestos" para la lección de vocabulario del
  aeropuerto (boarding pass, security checkpoint), o "presente perfecto continuo"
  para la lección de quejas de restaurante ("we have been waiting").
- Antes de aplicar nada, verifiqué por código que mi lista de 56 coincidía
  **exactamente** con las lecciones pendientes (ni una de más, ni una de menos), y
  localicé con precisión el bloque de datos de inglés dentro del archivo (que
  comparte estructura con los otros 5 idiomas) para no tocar ningún otro idioma.
- Tras aplicarlo, comprobé **columna por columna** que ES/FR/DE/IT/PT quedaron
  exactamente iguales a como estaban (0 diferencias en los 5), y que el único
  ejercicio que cambió en todo el bloque de Situaciones en inglés fue uno ya
  corregido en la Ronda 2 (una consigna de `arrange` a la que le faltaba una
  palabra), no algo nuevo de esta ronda.

**Resultado: el validador pasa de 56 avisos a 0.** Las 1.912 lecciones de la
aplicación tienen ahora su ficha de "Estudiar" completa (vocabulario y gramática),
sin excepción.

### Lectura completa de las 1.862 traducciones, una por una (esta sesión)

A petición tuya de llevar esta parte al 100%, releí **las 1.862 traducciones
completas** (no una muestra) buscando errores de significado, redacción forzada o
inconsistencias. Encontré:

- **0 errores de significado.**
- **2 casos de redacción un poco forzada** (no incorrectos, pero mejorables):
  "sin preposición + día de la semana" y "el/de + día de la semana (hábito
  repetido)" — los reescribí como "día de la semana (sin preposición)" y "día de
  la semana (hábito repetido)", más naturales.
- **1 inconsistencia menor que no introduje yo**: "(certeza alta)" vs. "(alta
  certeza)" como anotación de dos ejercicios distintos sobre el mismo concepto
  gramatical. Comprobé que esa anotación **ya estaba en español en el texto
  original en inglés** antes de que yo tocara nada (es decir, ya era así en el
  curso antes de esta revisión) — la dejé tal cual porque no es parte de la tarea
  de traducción que me pediste, y cambiarla sería tocar contenido más allá de lo
  que se me encargó.

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

## Sexta ronda (esta sesión) — 520 ejercicios nuevos y un hallazgo sistémico nuevo

### Las 390 lecciones con solo 4-5 ejercicios ahora tienen 6 (el estándar real de la app)

Medí la distribución real de tamaño de lección en todo el corpus: el 79% de las
1.912 lecciones tiene exactamente 6 ejercicios — ese es el estándar, no una
suposición mía. 130 lecciones tenían 4 y 260 tenían 5. Añadí **520 ejercicios
nuevos** (uno o dos por lección) para llevarlas todas a 6, usando siempre
contenido ya verificado de la propia lección (su `study.vocab` o su
`study.grammar`), nunca palabras inventadas:

- **504 ejercicios**: `mcq` "¿Cómo se dice X?" (o `arrange`, ver más abajo) a
  partir de una palabra del vocabulario de la lección que aún no había sido la
  respuesta correcta de ningún ejercicio (sí podía haber aparecido antes como
  distractor; eso no la invalida, es lo normal en el resto del contenido).
- **7 ejercicios**: `translate`, a partir del ejemplo de la nota de gramática de
  la lección, que traduje yo mismo (verificado contra el original con conteo de
  barras "/" para detectar desalineaciones, y releído después).
- **7 ejercicios**: `fill`, para el curso de español, cuando generar un
  "¿Cómo se dice?" no tenía sentido (ver más abajo).
- **2 ejercicios**: escritos a mano para dos lecciones cuyo vocabulario
  restante eran palabras sueltas de 1-2 letras, demasiado cortas para cualquier
  generación automática segura.

**Un bug que descubrí y corregí durante la propia generación**: en el curso
de español, como la palabra enseñada y su traducción son a menudo la misma
palabra (ver la Ronda 4), generar "¿Cómo se dice 'la piscina' en español?" con
respuesta "la piscina" habría sido un ejercicio circular y absurdo. Lo detecté
antes de aplicar nada (una revisión manual de 80 ejercicios al azar lo sacó a la
luz) y cambié el enfoque para esos casos: en su lugar generé un ejercicio
`arrange` (ordenar las palabras de la propia frase), que no necesita traducción
y es igual de seguro. Cuando la frase tenía menos de 3 palabras (demasiado corta
para ordenar), la descarté de la generación automática y la escribí a mano.

Verifiqué el lote completo antes de insertarlo: 0 errores estructurales, 0
circularidad, 0 duplicados (ni entre sí ni con las preguntas ya existentes de
cada lección), 0 distractores en idioma equivocado, y releí una muestra de 80 al
azar a mano. Durante la inserción en los archivos reales encontré y corregí dos
bugs de mi propio script (un formato de cierre de array distinto en los archivos
"compactos" de inglés, y una coma final que faltaba al insertar después del
último ejercicio original); los corregí y repetí la reconstrucción completa
desde cero para confirmarlo.

**Resultado:** 11.543 ejercicios en total (antes 11.023), 0 lecciones por debajo
de 6, validador en 0 errores y 0 avisos.

### Dos errores reales y pre-existentes que encontré de paso

Mi propia verificación final (buscando si la respuesta de un ejercicio aparecía
ya literalmente en la pregunta) destapó dos ejercicios del curso de español que
llevaban el error **desde el contenido original**, antes de que yo tocara nada:
`es_a1_frequency_adverbs` preguntaba "¿Cómo se dice 'a veces' en español?" con
la respuesta... "a veces" (la explicación ya decía correctamente "'A veces' es
'sometimes'", así que recuperé de ahí la palabra inglesa que debía ir en la
pregunta); y `es_a2_sugerencias` preguntaba "¿Cómo se dice '¿Por qué no pedimos
pizza?' en español?" citándose a sí misma, así que reformulé la pregunta para
que probara lo que la explicación realmente enseña (la conjugación correcta),
sin tocar las opciones ni la respuesta. Los corregí y los integré al pipeline
permanente.

### Hallazgo nuevo, sin corregir: 410 ejercicios que preguntan "¿cómo se dice
### X en inglés?" dentro de un curso de francés/alemán/italiano/portugués/español

Mientras revisaba lo anterior encontré otro patrón, de la misma familia que el
hallazgo de la Ronda 3 (el glosario en inglés): **82 ejercicios por cada uno de
los 5 cursos no ingleses (410 en total)** tienen preguntas como "Comment dit-on
'les mathématiques' en anglais ?" o "Wie sagt man 'die Mathematik' auf
Englisch?" — es decir, le piden al alumno que diga una palabra **en inglés**,
dentro de un curso que se supone que enseña francés o alemán. Son ejercicios
calificables (no solo una ficha de referencia), así que el impacto es mayor que
el del glosario de "Estudiar".

**No lo he corregido.** A diferencia de los 520 ejercicios de esta misma ronda
(donde reutilicé contenido de la propia lección ya verificado), arreglar esto
bien significaría reescribir 410 ejercicios calificables: cambiar la respuesta
correcta de la palabra inglesa a la palabra en el idioma meta, y rehacer los
distractores también en ese idioma — mucho más riesgo de introducir errores sin
que tú decidas primero si esto es lo que quieres. Antes de tocarlo necesito que
me confirmes lo mismo que con el glosario: ¿es un error de autoría (lo más
probable, dado que es la misma causa raíz) y quieres que lo corrija, o hay
alguna razón para mantenerlo?

## Séptima ronda (esta sesión) — los 410 ejercicios "en inglés" corregidos

### Qué se hizo

Los 410 ejercicios calificables (82 por curso en FR/DE/IT/PT/ES) que pedían la palabra **en inglés**
dentro de un curso de otro idioma están reescritos. Cada uno es un `mcq` de 4 opciones en el
idioma meta, con la pista citada **en español** (el idioma nativo de la app):

- **FR/DE/IT/PT (328 ejercicios):** la pregunta ahora es p. ej. `Comment dit-on «el caballo» en
  français ?` con respuesta `le cheval`. Respuesta y pista salen del par (columna 0, columna 1) del
  `study.vocab` de **la propia lección** — no se tradujo nada de cero. Los 3 distractores salen del
  mismo `study.vocab` (idioma meta garantizado), descartando filas con la misma traducción, listas
  con comas y filas que contengan la respuesta; se prefiere la misma forma gramatical (sustantivo
  con artículo frente a verbo/expresión) y un número de palabras parecido.
- **ES (82 ejercicios):** aquí no se puede preguntar "cómo se dice X" porque la palabra y su
  traducción son la misma (62 de 82 eran circulares; ver Ronda 4). En su lugar la pregunta es
  `¿Qué significa «el caballo»?` con **definiciones monolingües en español**. Escribí 171
  definiciones a mano (las 82 palabras preguntadas + palabras hermanas de la misma lección usadas
  como distractores; 41 lecciones). Donde dos definiciones de una misma lección podían confundirse,
  excluí la palabra hermana de los distractores (`solo:true`) o elegí otra palabra del vocabulario.
- Casos especiales (9 + 1): 9 preguntas citaban una variante de una entrada con barra del vocabulario
  (p. ej. `être surestimé` frente a `être surestimé/sous-estimé`); la respuesta es la forma citada y
  se excluye del grupo de distractores la propia fila. En `it_a1_neighborhood_city`, *la farmacia* es
  igual en italiano y español (circular), así que ese ejercicio pregunta `Dove si comprano le
  medicine?` .

### Dos errores previos de alemán hallados al releer (corregidos)

Al leer los 410 ejercicios nuevos aparecieron dos errores en el `study.vocab` original de
`de_b2_smart_home_tech` y `de_b1_digital_entertainment`, que además estaban repetidos en sus
ejercicios: **«Hausaufgaben automatisieren»** (= automatizar *deberes escolares*) →
**«Haushaltsaufgaben automatisieren»** (3 apariciones), y **«das Serienmarathon»** → **«der
Serienmarathon»** (género; 4 apariciones). Por eso `de.js` cambia 84 líneas y los demás 82.

### Verificación aplicada

1. **Conteos exactos y alcance:** 5 cursos, 1.065 lecciones, 6.390 ejercicios, 5.770 entradas de
   vocab, 1.120 de grammar — idénticos al original. Cambian **exactamente 410 ejercicios**; el resto
   de `ex[]` es idéntico campo a campo; `study` es idéntico salvo las 2 correcciones de DE; los
   bancos de Situaciones son idénticos; `diff` por archivo: 82 líneas (84 en DE).
2. **Validador:** `node tools/validate_lessons.js docs/js` → **0 errores, 0 avisos**.
3. **Búsqueda de restos:** 0 apariciones de "en anglais ?" / "auf Englisch?" / "in inglese?" /
   "em inglês?" / "en inglés?" en los 5 archivos.
4. **Motor real:** extraje `_shuffleOptions` de `lessons.js` y lo ejecuté 200 veces sobre cada `mcq`
   de los 5 cursos (491.200 barajados): **0 fallos**; en los 410 nuevos, 4 opciones distintas, índice
   válido, sin opciones en inglés, y (FR/DE/IT/PT) toda opción pertenece al vocabulario de su lección.
5. **Relectura a mano de los 410 completos** (no muestreo). Fue lo que destapó los errores alemanes
   de arriba y llevó a refinar los distractores (misma forma gramatical).
6. **Reconstrucción desde cero:** `tools/ronda7/build410.js` partiendo del original produce un
   resultado byte a byte idéntico (`diff -r` sin diferencias).

### Lo que queda (decisión tuya)

- **Pistas en inglés heredadas (hallazgo nuevo, no corregido).** Unas ~190 preguntas de lecciones
  iniciales (≈42 por curso; p. ej. `¿Cómo se dice "Good morning" en francés?`, `Traduce al
  francés: "Nice to meet you!"`) están en español pero citan una pista **en inglés**. La dirección
  (pista → idioma meta) es correcta y respuestas y distractores ya están en el idioma meta; solo la
  pista debería ser español. También hay ejercicios `translate` con frase de origen en inglés
  (p. ej. `Traduis : «The dog is very friendly.»`). Es la misma familia de causa raíz, pero de
  riesgo menor que lo corregido hoy (basta traducir la pista; no se toca la respuesta). No lo he
  tocado sin tu confirmación.
- Las definiciones en español (171) y las traducciones de rondas anteriores son trabajo de un modelo
  de lenguaje, no de un hablante nativo verificado.
- En el curso ES las preguntas son ahora de significado; la decisión de diseño de Ronda 4 (qué
  mostrar en `study.vocab` de ES) sigue abierta.

## Lo que dejé sin cambiar (requiere decisión tuya)

1. ~~Los 410 ejercicios que preguntan "¿cómo se dice X en inglés?" dentro de un curso no inglés~~ —
   **resuelto en la séptima ronda** (ver abajo). Queda un hallazgo hermano, más pequeño, descrito allí:
   pistas en inglés en ejercicios heredados de lecciones A1-A2.
2. **Qué debería mostrar la ficha "Estudiar" del curso de español**, ahora que su
   columna de traducción es también español (ver el matiz de la cuarta ronda,
   arriba) — 1.177 de 1.657 entradas quedan circulares o redundantes.
3. **`arrange` con varios órdenes válidos.** El motor solo acepta `options[correct]`. Arreglé
   los 2 que la explicación admitía, pero otros no se pueden detectar automáticamente
   sin ese tipo de pista textual. Lo sano sería que el motor aceptara una lista de
   órdenes válidos por ejercicio.
4. ~~56 lecciones de Situaciones en inglés sin `study.grammar`/`study.vocab`~~ —
   **resuelto en la quinta ronda** (ver arriba).
5. ~~390 lecciones con solo 4-5 ejercicios~~ — **resuelto en la sexta ronda**
   (ver arriba): todas tienen ahora 6, el estándar real del resto de la app.
6. **4 preguntas idénticas entre lecciones distintas** (ej. `a1_sports_exercise` ↔
   `b1_sports_fitness`) y **1 caso de `HTML_CHARS`** (un carácter `<`/`>`/`&` suelto en
   un texto) — informativos, sin impacto real en el alumno.
7. **Etiquetas "A) … B) …" dentro del enunciado** (p. ej. `b1_present_perfect #1`) conviven con
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
