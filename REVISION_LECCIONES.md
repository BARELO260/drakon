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
| `writing` que exigen más palabras que el rango pedido | 184 | 0 |
| Ejercicios que reproducen audio en el idioma equivocado | 49 | 0 |

## Qué estaba roto y qué hice

**Motor (`docs/js/lessons.js`, 22 líneas)**
1. **"undefined" en el feedback de escritura/habla.** 1.279 ejercicios `writing`/`speaking`
   no traen explicación y el motor la imprimía tal cual. Ahora es `''` y no se pinta el bloque.
2. **Mínimo de palabras contradictorio.** 184 consignas piden "20-30 palabras" pero el motor
   exigía 25 (y `buildLessons` descartaba cualquier `minWords`): quien cumplía con 22 palabras
   perdía una vida. Ahora el mínimo es el extremo inferior del rango si es < 25; se puede
   fijar a mano con un 7º elemento numérico.
3. **Barajado robusto:** localiza la correcta por índice, no por texto (antes se rompía con
   opciones repetidas).

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

## Lo que dejé sin cambiar (requiere decisión tuya)

1. **Escritura: mínimo de palabras.** Para rangos como "55-75" el motor sigue pidiendo solo 25.
   Solo arreglé el caso contradictorio. ¿Quieres exigir el extremo inferior del rango?
2. **`arrange` con varios órdenes válidos.** El motor solo acepta `options[correct]`. Arreglé
   los 2 que la explicación admitía, pero otros no se pueden detectar automáticamente. Lo
   sano sería permitir órdenes alternativos en el motor.
3. **43 + 13 lecciones de Situaciones EN sin `study.grammar` / `study.vocab`** (la ficha de
   Estudiar sale vacía en esa mitad).
4. **130 lecciones con solo 4 ejercicios** (8 EN, 18 por cada otro idioma, 32 de Situaciones EN).
5. **3 títulos repetidos** (ES/IT `weather_seasons` en A1 y A2; IT `c1_inversione_enfasi` / `c2_anteposizione_enfatica`)
   y 4 preguntas idénticas entre lecciones (`a1_sports_exercise` ↔ `b1_sports_fitness`).
6. **Etiquetas "A) … B) …" dentro del enunciado** (p. ej. `b1_present_perfect #1`) conviven con
   los botones A-D de las opciones: confuso, no roto.

## Lo que no puedo garantizar

- **Corrección lingüística global.** El validador no sabe si una frase es buena lengua. Mientras
  revisaba aparecieron errores como los de arriba en lotes que "pasaban" la validación
  estructural, y es probable que queden más entre los ~11.000 ejercicios que no leí uno a uno.
  Recomiendo revisión nativa (sobre todo IT/FR/DE/PT y los lotes generados) y, mientras no
  ocurra, no presentar el contenido como "revisado por lingüistas". No pude determinar de
  dónde salen los defectos: `lesson_gen.py` ensambla el texto que se le da y no fuerza
  minúsculas ni la dirección del `translate`; el origen está en el contenido fuente de esos lotes.
- **Lo que escribí yo** (5 frases DE/IT/PT, 5 ejercicios EN, 30 respuestas de `arrange`,
  distractores nuevos) merece la misma revisión nativa.
- **No probé la interfaz en un navegador.** Ejecuté la lógica del motor en Node contra todos
  los datos. Antes de publicar, abre una lección de cada tipo (writing, translate con audio,
  arrange DE) y una de Situaciones.

## Cómo aplicarlo

```
# opción A: descomprimir el zip sobre el repo (mismas rutas), o
# opción B: desde la raíz del repo
git apply lessons-review.patch      # (verificado con `patch -p1` contra tu zip original)

node tools/validate_lessons.js      # debe terminar con 0 errores
```

Tras publicar, la próxima versión del service worker (`BUILD`) invalida la caché antigua.
