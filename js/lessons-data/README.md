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
  ru.js   → window.LESSON_BANKS.RU
  jp.js   → window.LESSON_BANKS.JP   (código de idioma: JP)
  zh.js   → window.LESSON_BANKS.ZH
  ko.js   → window.LESSON_BANKS.KO
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
  ex:[
    ['mcq', '¿Pregunta?', ['Correcta','B','C','D'], 0, 'Por qué es correcta.', 'Contexto opcional.'],
    ['fill', 'Completa: "I ___ happy"', ['am','is','are','be'], 0, 'Explicación...'],
  ]
},
```

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
| Inglés     | EN | 15 | Contenido original de la app, migrado sin cambios de contenido. Niveles A1–B2. |
| Español    | ES | 3  | Primer lote (A1): saludos, números/colores, ser vs. estar. |
| Francés    | FR | 3  | Primer lote (A1): saludos, números/colores, être vs. avoir. |
| Alemán     | DE | 3  | Primer lote (A1): saludos, números/colores, sein vs. haben. |
| Italiano   | IT | 3  | Primer lote (A1): saludos, números/colores, essere vs. avere. |
| Portugués  | PT | 3  | Primer lote (A1): saludos, números/colores, ser vs. estar. |
| Ruso       | RU | 3  | Primer lote (A1): saludos, números/colores, pronombres y "ser" implícito. |
| Japonés    | JP | 3  | Primer lote (A1): saludos, números/colores, partícula は y です. |
| Chino      | ZH | 3  | Primer lote (A1): saludos, números/colores, verbo 是. |
| Coreano    | KO | 3  | Primer lote (A1): saludos, números/colores, partículas 은/는 y 이에요. |

**Objetivo:** ~500 lecciones por idioma, progresión A1→C1 (vocabulario,
gramática, tiempos verbales, conversación, comprensión, estructuras
avanzadas). La arquitectura ya soporta esa escala sin cambios de código;
lo que falta es seguir agregando lecciones a cada archivo, lote por lote,
en próximas sesiones.
