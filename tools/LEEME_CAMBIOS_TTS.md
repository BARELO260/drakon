# Migración del sistema TTS: ResponsiveVoice → ElevenLabs

## Qué se hizo

Se reemplazó **ResponsiveVoice** (voces robóticas, sin control real de emoción)
por la **API de ElevenLabs** (voces neuronales, expresivas y con personalidad),
manteniendo un *fallback* automático a la síntesis de voz nativa del
navegador (Web Speech API) si el usuario no configura una API key o si la
petición falla por cualquier motivo (sin cuota, sin conexión, etc.). La app
nunca se queda "muda": si ElevenLabs no responde, sigue hablando con la voz
del navegador, exactamente igual que hacía antes con ResponsiveVoice.

## Por qué ElevenLabs

Comparado con otras alternativas (Azure Speech, Google Cloud TTS, Amazon
Polly, PlayHT...), ElevenLabs ofrece la mejor combinación para este proyecto:

- **Calidad/expresividad**: voces neuronales de las más naturales del
  mercado, con control fino de `stability` (estabilidad/monotonía) y
  `style` (exageración/carácter) — esto es justo lo que se necesitaba para
  que cada personaje (dragón, mago, zorro, robot, alienígena, fénix, ninja,
  panda, caballero, DJ) suene distinto y con emoción real, no solo "más
  agudo o más grave" como antes.
- **Multi-idioma real**: el modelo `eleven_multilingual_v2` cubre más de 25
  idiomas con la MISMA voz — incluye perfectamente los 6 idiomas del curso
  (inglés, español, francés, alemán, italiano, portugués).
- **Voces masculinas y femeninas**: se usan **10 voces predeterminadas
  distintas y sin repetir**, una por personaje (Arnold, Antoni, Josh, Adam,
  Sam, Bella, Callum, Rachel, George, Domi) — todas vienen ya disponibles en
  cualquier cuenta nueva, sin coste.
- **API bien documentada y estable**: REST simple (`POST
  /v1/text-to-speech/{voice_id}`), con SDKs oficiales y muchísima
  documentación.
- **Plan gratuito suficiente para desarrollo**: 10.000 créditos/mes
  (~10 minutos de audio) sin tarjeta de crédito.

NaturalReader (la referencia sugerida) se descartó porque, según su propia
documentación, diferencia entre su servicio web de lectura y una solución
comercial para desarrolladores — no ofrece una API pública apta para
integrarse directamente en una app de terceros sin acuerdos comerciales
adicionales.

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `js/tts-eleven.js` | **Nuevo.** Motor de voz compartido: llama a la API de ElevenLabs y cae automáticamente a Web Speech API si falla. Usado por `index.html` (chat con personajes, ejercicios de lección) y `games.html` (Listening Probe). |
| `js/audio.js` | `CHAR_VOICE` reescrito: cada personaje ahora tiene un `voiceId` real de ElevenLabs + parámetros de expresividad (`stability`, `style`, `speed`) en vez de `{gender, rate, pitch, volume}` de ResponsiveVoice. `speak()` y `stopTTS()` ahora delegan en el motor compartido. Toda la funcionalidad existente (chat, mic, Whisper, traducción previa a hablar, botón de activar/desactivar voz) se conserva intacta. |
| `js/lessons.js` | La reproducción de audio en ejercicios "Escuchar" (`listenPlay()`) y los puntos donde se cancelaba la voz ahora usan el motor compartido. |
| `js/listening.js` | Lo mismo para el minijuego "Listening Probe" en `games.html`. |
| `js/state.js` | Se añadió `elevenKey` al estado por defecto, con el mismo patrón de doble persistencia (`state` + `localStorage`) que ya existía para `groqKey`. |
| `js/auth.js` | Nuevas funciones `loadElevenKey`, `persistElevenKey`, `saveElevenKey`, `onElevenKeyInput`, `loadElevenKeyUI` — mismo patrón que las funciones ya existentes para la key de Groq. Se añadió `elevenKey` a las listas de sincronización con la nube (Firebase) y a los resets de logout. |
| `index.html` | Se quitó el `<script>` de `code.responsivevoice.org` y se añadió `<script src="js/tts-eleven.js">` (antes de `lessons.js`/`audio.js`). Se añadió una nueva sección en **Ajustes** para pegar la API key de ElevenLabs, con instrucciones paso a paso (igual que la sección ya existente para la key de Groq). |
| `games.html` | Se reemplazó el `<script>` de ResponsiveVoice por `<script src="js/tts-eleven.js">`. |

**Nada más se modificó.** No se tocó ninguna otra funcionalidad (reconocimiento
de voz, Whisper, chat con IA, lecciones, gamificación, autenticación, etc.).

## Cómo obtener y configurar la API key (para ti o tus usuarios)

1. Entra a **https://elevenlabs.io/app/settings/api-keys** y crea una cuenta
   gratuita (solo con email, sin tarjeta).
2. Copia tu API key.
3. En la app, ve a **Ajustes → API Key de Voz (TTS)** y pégala ahí. Se guarda
   localmente (y se sincroniza con tu cuenta en la nube si usas Firebase),
   exactamente igual que la key de Groq.
4. Si no configuras ninguna key, la app sigue funcionando con la voz nativa
   del navegador (como antes), sin errores ni pantallas rotas.

## Nota sobre las voces asignadas

Cada uno de los 10 personajes tiene su propio `voiceId` único de ElevenLabs
— ninguno se repite. Son voces predeterminadas ("premade") que suelen venir
disponibles en cualquier cuenta nueva sin coste (Arnold, Antoni, Josh, Adam,
Sam, Bella, Callum, Rachel, George y Domi). Aun así, la disponibilidad exacta
puede variar según tu cuenta/plan, así que antes de lanzar a producción te
recomiendo verificar que las 10 existan en tu biblioteca con:

```
GET https://api.elevenlabs.io/v1/voices
Header: xi-api-key: TU_API_KEY
```

Si alguna no apareciera, puedes sustituirla por cualquier otro `voiceId` de
tu cuenta. Todos están en un único lugar: el objeto `CHAR_VOICE` en
`js/audio.js` (y `NARRATOR_VOICE` en `js/tts-eleven.js` para las frases
sueltas de los ejercicios de escucha).

## Cómo aplicar este cambio a tu proyecto

Estos archivos ya están listos para copiar/pegar sobre tu proyecto actual,
respetando la misma estructura de carpetas:

```
index.html
games.html
js/audio.js
js/auth.js
js/lessons.js
js/listening.js
js/state.js
js/tts-eleven.js   ← archivo nuevo
```

No hace falta instalar ninguna dependencia de build/npm: todo funciona con
`fetch()` nativo del navegador, igual que el resto de la app.
