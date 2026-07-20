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

## Estado actual del contenido (ver también SESSION_NOTES.md)

| Idioma | Código | Lecciones | Notas |
|---|---|---|---|
| Inglés     | EN | 25 | Progresión real A1→C2 (vocabulario, gramática, tiempos verbales, mediación, registro, retórica). Se corrigió un bug de sintaxis en `en-b1-skills.js` que impedía que esas 4 lecciones B1 cargaran. |
| Español    | ES | 12 | A1 (6): saludos, números/colores, ser vs. estar, familia/hogar, comida/restaurantes, rutina diaria. A2 (3): compras/ropa, clima/estaciones, pretérito (pasado). B1 (3): futuro simple, direcciones/viajes, consejos y recomendaciones. |
| Francés    | FR | 12 | Mismos temas que español, adaptados al francés (être vs. avoir, passé composé, futur simple, etc.) |
| Alemán     | DE | 12 | Mismos temas, adaptados al alemán (sein vs. haben, Perfekt, Futur I, verbos separables). |
| Italiano   | IT | 12 | Mismos temas, adaptados al italiano (essere vs. avere, passato prossimo, futuro semplice). |
| Portugués  | PT | 12 | Mismos temas, adaptados al portugués (ser vs. estar, pretérito perfeito, futuro simples). |

**Total actual: 85 lecciones**, todas con su glosario de estudio (`study`)
correspondiente y validadas automáticamente (4 opciones por ejercicio, índice
correcto en rango, sin opciones duplicadas, sin IDs repetidos).

**Objetivo:** ~500 lecciones por idioma, progresión A1→C1 (vocabulario,
gramática, tiempos verbales, conversación, comprensión, estructuras
avanzadas). La arquitectura ya soporta esa escala sin cambios de código;
lo que falta es seguir agregando lecciones a cada archivo, lote por lote,
en próximas sesiones. El inglés ya tiene el recorrido completo A1→C2 como
referencia de profundidad; el resto de idiomas van A1→B1 y necesitan B2,
C1 y C2 en próximos lotes.
