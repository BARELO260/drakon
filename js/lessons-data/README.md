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

Antes de dar por buena una tanda de lecciones nuevas, conviene validar que:
- cada ejercicio tenga exactamente 4 opciones,
- el índice `correct` esté entre 0 y 3,
- no haya opciones duplicadas dentro del mismo ejercicio,
- no haya IDs de lección repetidos dentro del mismo idioma.

Hay un script de validación de referencia (ver notas de la sesión de
desarrollo) que recorre todos los archivos de `js/lessons-data/` y reporta
cualquier problema antes de integrarlos.

## Estado actual del contenido

| Idioma | Código | Lecciones | Notas |
|---|---|---|---|
| Inglés     | EN | 66 | Progresión A1→C2 completa; incluye animales/naturaleza, cuerpo humano, deporte, domótica, mundo laboral, registro/sinónimos (generadas con el generador procedural). |
| Español    | ES | 66 | Progresión completa A1→C2: A1 (12), A2 (9), B1 (12), B2 (12), C1 (12), C2 (9). |
| Francés    | FR | 66 | Misma progresión y temas que español, adaptados al francés. |
| Alemán     | DE | 66 | Misma progresión, adaptada al alemán. |
| Italiano   | IT | 66 | Misma progresión, adaptada al italiano. |
| Portugués  | PT | 66 | Misma progresión, adaptada al portugués. |

**Total actual: 396 lecciones.** Los 6 idiomas cubren el recorrido completo
**A1 → C2** con exactamente el mismo número de lecciones (66 cada uno),
cada una con su glosario de estudio (`study`) correspondiente, validadas
automáticamente (4 opciones por ejercicio en mcq/fill/translate, índice
correcto en rango, sin opciones duplicadas, sin IDs repetidos; los
ejercicios `writing`/`speaking` usan un array de palabras clave en vez de un
índice — ver más abajo).

Último lote agregado (uno por nivel, en los 6 idiomas, mismo tema para
mantener coherencia y progresión): A1 animales y naturaleza, A2 el cuerpo
humano, B1 deportes y actividad física, B2 la casa inteligente (domótica),
C1 el mundo laboral (reuniones/correspondencia), C2 registro y estilo
(sinónimos según el contexto).

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
consigna debe indicar cuántas palabras escribir (ej. "60-80 palabras"); el
motor usa 25 como mínimo por defecto si no se especifica `minWords`.

### Convención de `translate`

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
