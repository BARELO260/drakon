# Sistema de lecciones — arquitectura escalable

Cada idioma tiene su propio banco de lecciones en un archivo separado:

```
js/lessons-data/
  en.js   → window.LESSON_BANKS.EN
  es.js   → window.LESSON_BANKS.ES
  fr.js   → window.LESSON_BANKS.FR
  de.js   → window.LESSON_BANKS.DE
  it.js   → window.LESSON_BANKS.IT
  pt.js   → window.LESSON_BANKS.PT
```

El motor (`js/lessons.js`) es **100% genérico**: no contiene contenido de
ningún idioma. Cuando el usuario abre la pestaña de Lecciones, se llama
`getLessonsForLang(state.lang.code)`, que busca el banco correspondiente
en `window.LESSON_BANKS`. Si un idioma todavía no tiene contenido, se
muestra un estado vacío amistoso ("Lecciones de <idioma> en camino") en
vez de romper la app o mostrar inglés por error.

## Cómo agregar un idioma completamente nuevo

1. Agrégalo a `LANGS` en `js/data.js`.
2. Crea `js/lessons-data/<code>.js` (usa cualquiera de los existentes como
   plantilla) y regístralo con `window.LESSON_BANKS.<CODE> = [...]`.
3. Añade su `<script src="js/lessons-data/<code>.js">` en `index.html`,
   **antes** de `js/lessons.js`.

Eso es todo — no hay que tocar el motor ni la UI.

## Formato de una lección

```js
{
  id:'a1_ejemplo', level:'A1', title:'Mi lección', emoji:'✨', xp:30,
  description:'Descripción corta de la lección.',
  study: {
    vocab: [
      ['palabra/frase', 'traducción', 'nota opcional'],
    ],
    grammar: [
      ['Título del punto gramatical', 'Explicación breve', 'Ejemplo de uso'],
    ]
  },
  ex:[
    ['mcq', '¿Pregunta?', ['Correcta','B','C','D'], 0, 'Por qué es correcta.', 'Contexto opcional.'],
    ['fill', 'Completa: "I ___ happy"', ['am','is','are','be'], 0, 'Explicación...'],
  ]
},
```

`study` es el contenido del apartado **Estudiar** (el glosario de vocabulario
y gramática que el usuario puede repasar antes de hacer la lección). Debe
tratar sobre el mismo tema que la propia lección — no es contenido genérico,
es un resumen de lo que esa lección concreta enseña. Se desbloquea con el
mismo ritmo que la lección (ver más abajo). Cada entrada de `vocab` y
`grammar` es `[texto, explicación, nota_opcional]` — la nota es opcional,
se puede omitir.

Cada ejercicio es un **array posicional** (no objeto) para escribir mucho
contenido rápido sin repetir claves:

```
[tipo, pregunta, [op1,op2,op3,op4], índiceCorrecto, explicación, contexto?]
```

- `tipo`: `'mcq' | 'translate' | 'fill' | 'arrange' | 'listen_mcq'` — es solo
  una etiqueta visual/descriptiva, todos usan el mismo formato de 4 opciones.
- `contexto` es opcional: si no aplica, omite el 6º elemento.
- Deben ser **siempre exactamente 4 opciones, sin texto duplicado entre
  ellas** (el motor las baraja en cada intento — ver más abajo — y si hay
  texto repetido no puede identificar cuál es la correcta tras barajar).
- **Convención recomendada:** escribe siempre la respuesta correcta como
  la opción `0` (la primera) al redactar el contenido. No hace falta variar
  a mano el orden A/B/C/D — el motor se encarga de eso automáticamente.

### ¿Por qué el motor baraja las opciones?

`LessonEngine.start()` reordena las opciones de cada ejercicio (Fisher-Yates)
cada vez que se inicia/repite una lección, y remapea el índice correcto.
Así la respuesta correcta no cae siempre en la misma posición — esto
soluciona de raíz el problema de "todas las respuestas son la opción A" y
significa que **quien escriba contenido nuevo no necesita preocuparse por
distribuir A/B/C/D a mano**: puede escribir la correcta siempre primero.

## El apartado "Estudiar"

Dentro del tab de Lecciones hay un selector **Ruta / Estudiar**:
- **Ruta**: la vista habitual del camino de lecciones.
- **Estudiar**: un glosario — una tarjeta por lección, con su vocabulario y
  gramática (campo `study`), pensada para repasar antes de hacer los
  ejercicios de esa lección.

El desbloqueo de "Estudiar" es idéntico al de la ruta (misma función
`_getLessonsWithProgress` en `js/lessons.js`): solo se puede abrir la
tarjeta de estudio de una lección ya desbloqueada o completada. Si agregas
una lección nueva con `study`, su glosario se desbloqueará automáticamente
en el momento correcto sin tocar el motor.

## Validar contenido nuevo

Antes de dar por buena cualquier tanda de lecciones, ejecuta desde la raíz del repo:

```
node tools/validate_lessons.js            # resumen + primeros problemas
node tools/validate_lessons.js --verbose  # todo el detalle
```

Sin dependencias; termina con código 1 si hay errores (sirve para CI). Revisa
todos los bancos (`lessons-data/*.js` y `situations-data.js`) y comprueba:

- exactamente 4 opciones por ejercicio de selección, índice correcto en 0-3;
- **sin opciones duplicadas, tampoco si solo difieren en mayúsculas** ("lo prendo" / "Lo prendo");
- ninguna opción que dependa de la posición de otras ("Both A and B", "All of the above"): el motor baraja las opciones;
- `arrange`: la lista `[a / b / c]` de la consigna debe contener las mismas palabras que la respuesta (las fichas se construyen desde `options[correct]`), la respuesta debe ser una frase y, en alemán, respetar mayúsculas de sustantivos;
- `translate`: la respuesta correcta debe estar en el idioma meta (ver más abajo);
- `writing`/`speaking`: 4º elemento con palabras clave; IDs únicos; `study` presente.

Lo que el validador **no** puede comprobar es si una frase es correcta como lengua o
si hay dos respuestas válidas entre las opciones; eso sigue requiriendo revisión
humana (ver "Nota de calidad" más abajo).

## Estado actual del contenido

| Idioma | Código | Lecciones (ruta A1→C2) | Mini-lecciones de Situaciones |
|---|---|---|---|
| Inglés     | EN | 223 (A1 37 · A2 38 · B1 43 · B2 34 · C1 37 · C2 34) | 104 |
| Español    | ES | 213 (A1 39 · A2 36 · B1 39 · B2 34 · C1 34 · C2 31) | 104 |
| Francés    | FR | 213 (misma distribución que ES) | 104 |
| Alemán     | DE | 213 (misma distribución que ES) | 104 |
| Italiano   | IT | 213 (misma distribución que ES) | 104 |
| Portugués  | PT | 213 (misma distribución que ES) | 104 |

> Cifras verificadas con `node tools/validate_lessons.js` (sept. 2026). Las cifras
> anteriores de este documento (72 lecciones por idioma) estaban desactualizadas.

**Total actual: 1.276 lecciones de ruta (223 + 5×213) y 624 mini-lecciones de Situaciones.** Los 6 idiomas cubren el recorrido completo
**A1 → C2** con exactamente el mismo número de lecciones (72 cada uno),
cada una con su glosario de estudio (`study`) correspondiente, validadas
automáticamente (4 opciones por ejercicio en mcq/fill/translate, índice
correcto en rango, sin opciones duplicadas, sin IDs repetidos; los
ejercicios `writing`/`speaking` usan un array de palabras clave en vez de un
índice — ver más abajo).

Último lote agregado (uno por nivel, en los 6 idiomas, mismo tema para
mantener coherencia y progresión): A1 ropa y colores, A2 frutas y verduras,
B1 la cocina (verbos/recetas simples), B2 el mundo del arte (pintura,
música, cine), C1 crítica constructiva (dar/recibir feedback), C2 lenguaje
inclusivo y evolución del idioma. A1→B1 forma un hilo de vocabulario
cotidiano denso (ropa, comida, cocina) ideal para el generador procedural;
B2→C2 mantiene el hilo de comunicación matizada y pensamiento crítico de
lotes anteriores.

Nota de calidad de este lote: se revisaron y corrigieron a mano varios
detalles finos que el generador no puede validar por sí solo (concordancia
de artículo elidido en italiano, consistencia de partitivos en francés,
colisión de una palabra usada con dos sentidos distintos en la misma frase
en alemán) — el generador ahorra tiempo en el ensamblado mecánico, pero
sigue haciendo falta una revisión lingüística humana antes de dar por
buena cada frase.

## Generador procedural (`/tools/lesson_gen.py`)

Este último lote se produjo con un **generador procedural**: un script que
sigue requiriendo que se le entregue el contenido lingüístico real
(vocabulario, frases y sus traducciones — lo único que de verdad exige
criterio humano/lingüístico), pero automatiza todo el ensamblado mecánico
que antes se escribía a mano en cada ejercicio:

- Elegir 3 distractores plausibles para cada mcq/fill/translate, sin
  duplicados, en orden aleatorio pero determinista (seed = id de la
  lección, así el resultado es reproducible).
- Generar 3 órdenes incorrectos distintos para los ejercicios "arrange" a
  partir de la frase correcta, en vez de inventarlos a mano.
  Ensamblar el objeto de lección completo con el mismo formato exacto que
  usan los demás archivos.
- Validar en el momento (4 opciones, sin duplicados, índice en rango) para
  no depender de una segunda pasada de `validate_lessons.js`.

Uso: ver `tools/lesson_gen.py` (clase `LessonBuilder`) y los scripts
`tools/batch6_*.py` como ejemplo de cómo definir una lección (vocabulario +
gramática + banco de frases) y dejar que el script arme los ejercicios de
opción múltiple, huecos, ordenar y traducir automáticamente. Los ejercicios
`writing`/`speaking` se siguen redactando a mano (requieren creatividad).

**Balance recomendado:** usar el generador para temas con vocabulario denso
(animales, cuerpo, objetos, profesiones, tecnología...) donde el valor está
en la cobertura léxica, y seguir escribiendo a mano las lecciones donde el
matiz argumentativo/pragmático importa más que el vocabulario (dilemas
éticos, pragmática, crítica literaria, discurso político...). No conviene
generar el 100% de forma procedural: se perdería la variedad de contextos y
matices que distingue a las lecciones redactadas directamente.

### Tipos de ejercicio: dos formatos distintos

El motor (`js/lessons.js`) soporta dos formatos de ejercicio según el `tipo`:

**`mcq` / `translate` / `fill` / `arrange` / `listen_mcq`** (selección):
```
[tipo, pregunta, [op1,op2,op3,op4], índiceCorrecto, explicación, contexto?]
```

**`writing` / `speaking`** (producción libre, sin opciones):
```
[tipo, consigna, [], ['palabra1','palabra2','palabra3'], explicación, contexto?]
```
El tercer elemento va **vacío** (`[]`); el cuarto es un array de palabras o
frases clave que el motor busca en la respuesta del usuario para dar una
autoevaluación orientativa (no es una corrección estricta). El texto de la
consigna debe indicar el rango de palabras (ej. "60-80 palabras"). El motor usa
como mínimo el extremo inferior del rango si es menor de 25 (p. ej. "20-30" → 20),
y 25 en el resto de casos; para fijarlo a mano añade un 7º elemento numérico:
`[tipo, consigna, [], [claves], explicación, contexto, minWords]`. La explicación
(5º elemento) es opcional en `writing`/`speaking`.

Desde esta revisión, el motor también muestra al alumno **antes** de escribir cuántas de las palabras clave del 4º elemento necesita usar (la mitad, redondeando hacia arriba) para superar la tarea; antes esos criterios solo se revelaban en el feedback posterior, así que la mayoría de intentos fallaba por desconocer el objetivo. Escribe las palabras clave tal como esperas que el alumno las use (con backticks entre comillas simples evitado; nada de `<`, `>` o `&`, que se insertan sin escapar).

### Convención de `translate` (importante: el audio)

El ejercicio `translate` es también un *Listening Probe* y el juego de Escucha
reutiliza estos ejercicios: el motor **lee en voz alta `options[correct]`** con la
voz del idioma que se aprende (`state.lang.lang`). Por eso la respuesta correcta
de un `translate` debe estar SIEMPRE en el idioma meta. Si quieres preguntar
"¿qué significa esta frase del idioma meta?" (respuesta en inglés/español) usa
un `mcq`, no un `translate`.


Todos los bancos que NO son inglés (ES/FR/ES/DE/IT/PT) enseñan un idioma
distinto del español de la interfaz, así que `translate` siempre traduce
**del inglés hacia el idioma que se está aprendiendo** (pregunta en inglés,
opciones en el idioma meta). Mantén esta dirección al agregar contenido
nuevo — es la que ya usan todas las lecciones existentes.

**Próximo objetivo:** seguir ampliando cada nivel (más lecciones A1-B1 para
mayor práctica antes de saltar a niveles avanzados) y, más adelante, sumar
nuevos idiomas completos. La arquitectura ya soporta cientos de lecciones
por idioma sin cambios de código — solo hace falta seguir añadiendo lotes
a cada archivo.
