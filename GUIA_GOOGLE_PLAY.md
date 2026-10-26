# Guía para publicar Drakón en Google Play

Estado a fecha de la **ronda 12**. Este documento separa **lo que ya está hecho y probado**, **lo que depende de ti** y **lo que no se puede verificar desde un chat**.

Documentos relacionados: `play/FICHA_Y_FORMULARIOS.md` (textos de la ficha y borrador de formularios), `twa/LEEME_EMPAQUETADO.md` (generar el AAB), `README.md` (menores de 13), `REVISION_LECCIONES.md` (contenido).

## 0. Decisiones fijadas (ronda 12)

| Dato | Valor |
|---|---|
| Nombre de paquete | `com.drakon.app` (definitivo) |
| Dominio | `https://barelo260.github.io/drakon/` (GitHub Pages). Requiere un 2.º repositorio `barelo260.github.io` para `assetlinks.json` |
| Cuenta de desarrollador | Personal, Guatemala, nombre público «JLX Development» |
| Correo público | joseluisdev123@gmail.com |

## 1. Ya hecho en el código (con pruebas automáticas)

La app puede usarla cualquier persona. Diseño (detalle en `README.md`):

| Edad | Qué pasa |
|---|---|
| Antes de nada | La **verificación de edad es lo primero** que ve cualquiera (no se contacta con ningún servidor externo antes de responderla). |
| 13 o más | Se descarga el SDK de Firebase y aparece el acceso normal (correo/Google). |
| Menos de 13 | **Modo infantil local**: sin cuenta, sin SDK de Google, sin datos fuera del dispositivo, sin chat con IA/voz/cámara/micrófono/compras. La interfaz oculta la pestaña IA Chat, Chats, los planes Premium y las misiones que exigen IA. |

Novedades de la ronda 12:
1. **Reportar respuestas de la IA** (`docs/js/report.js`, regla `aiReports` en `firestore.rules`): botón «🚩 Reportar» bajo cada respuesta; envía texto + motivo + comentario, sin uid ni correo; si no hay sesión o falla, abre un borrador de correo.
2. **Eliminación de cuenta**: `docs/eliminar-cuenta.html` (solicitud web por correo, plazo declarado de 30 días), enlazada desde la app, la política y los términos. Nueva función `onAccountDeleted` (borra datos del servidor ligados al uid cuando desaparece la cuenta de Auth).
3. **Sin Google en modo infantil**: SDK de Firebase cargado solo para 13+ (`ensureFirebaseSdk` en `index.html`) y **tipografías alojadas en la app** (`docs/css/fonts.css`, `docs/assets/fonts/`, licencia OFL).
4. **Revisión con Chromium real** (`tools/ronda12/ui_real.py`): detectó y se corrigió que el modo infantil mostraba planes Premium con precio, la tarjeta «Memoria de tu tutor» y misiones imposibles de cumplir.
5. **Compras**: `verifyPlayPurchase` usa `purchases.subscriptionsv2.get` (estados activa / cancelada con tiempo restante / periodo de gracia dan Premium; en espera, pausada, vencida o pendiente no).
6. **TWA**: `twa/twa-manifest.json`, plantilla `twa/barelo260.github.io/.well-known/assetlinks.json`, icono maskable, manifest corregido, comprobador `tools/ronda12/comprobar_twa.js`.
7. Correo de contacto actualizado y política corregida (se quitó la frase del «registro técnico de errores», que no existe en el código).

Pruebas (todas pasan; ejecútalas con `NODE_PATH=<carpeta con jsdom@22>/node_modules`):
- `node tools/validate_lessons.js docs/js` → 0 errores, 0 avisos.
- `tools/ninos/pruebas/flows.js` → 24/24 · `functions.test.js` → 38/38 · `ronda12.js` → 46/46.
- `python3 tools/ronda12/ui_real.py` (Playwright + Chromium) → 27/27.
- `node tools/ronda12/comprobar_twa.js` → 0 errores, 1 pendiente (la huella SHA-256).
- Las pruebas nuevas **fallan con el código de la ronda 11** (comprobado), así que miden algo real.

## 2. Lo que depende de ti (en orden)

1. **Comprobar que Guatemala permite registro de comerciante** en Play (https://support.google.com/googleplay/android-developer/answer/9306917). Si no, no podrás cobrar Premium.
2. **Limpiar el repositorio**: borrar `docs/docs/` (copia antigua de la app que GitHub Pages publicaría en `/drakon/docs/`; `git rm -r docs/docs`). Las carpetas `css/` y `js/` de la raíz son restos que no se publican.
3. **Activar el tutor de IA gestionado (lo más importante)**: hoy `DRAKON_AI_GATEWAY_ENABLED=false` → el chat usa la **clave de Groq que escribe cada usuario**, y un usuario normal de Play no la tendrá. Pasos exactos en la sección 5 de esta guía. Ojo: `drakonAi` ya usa modelos vigentes (Groq retiró `llama-3.3-70b-versatile` el 16/08/2026) y solo cubre el **chat de texto** y la **voz TTS (18+)**; el dictado por voz y «Estoy allí ahora» (cámara) siguen pidiendo la clave personal hasta que se amplíe la función.
4. **Firebase**: Plan Blaze; secretos `GROQ_API_KEY` y `ELEVENLABS_API_KEY` (y `PLAY_SERVICE_ACCOUNT_JSON` cuando exista la app en Play); `firebase deploy` en dos fases (sección 5).
5. **App Check**: configúralo en la consola y **solo entonces** `enforceAppCheck:true` en `drakonAi` y `verifyPlayPurchase`.
6. **Probar las reglas de Firestore con el emulador** (`firebase emulators:start --only firestore`; necesita Java). Yo no pude: no hay red/Java.
7. Repositorio `barelo260.github.io` + `assetlinks.json` (`twa/barelo260.github.io/README.md`).
8. Generar y firmar el AAB (`twa/LEEME_EMPAQUETADO.md`) y subirlo a Pruebas internas.
9. Play Console: rellenar los formularios con `play/FICHA_Y_FORMULARIOS.md`, crear la suscripción `drakon_premium_monthly`, cuenta de servicio con acceso a la API, tester de licencia.
10. **Cuenta personal**: pruebas cerradas con 12 probadores durante 14 días antes de pedir producción (confírmalo en la consola).
11. Crear cuenta de prueba para el equipo de revisión y pegarla en «Acceso a la app».
12. **Revisión legal** de `privacy.html`, `terms.html` y `eliminar-cuenta.html` (no soy abogado) y **confirmar** dos compromisos que yo redacté: el plazo de **30 días** para atender solicitudes de eliminación por correo y la mención «publicada como JLX Development».
13. **Revisión de las traducciones** por hablantes nativos (todo el contenido de idiomas es de un modelo de lenguaje).
14. **Revisar semanalmente la colección `aiReports`** en Firebase y actuar sobre lo reportado.

## 3. Riesgos que no he podido cerrar

- **Reglas de Firestore sin probar con el emulador** (incluida la nueva `aiReports`). Sus campos coinciden con lo que envía el cliente (lo comprueba una prueba), pero la sintaxis de las reglas solo la valida Firebase.
- **Compras**: el flujo `subscriptionsv2` está probado con simulaciones y con la comprobación de que las funciones de la librería existen, **no con Google Play real**. La confirmación (`acknowledge`) sigue usando el método v1; verifícala con una compra de prueba.
- **Bubblewrap/AAB/TWA y permisos de micrófono y cámara dentro de la TWA**: no probado en dispositivo. Es el punto más probable de sorpresas.
- **`onAccountDeleted`** es un disparador de Auth de 1.ª generación: confirma en el despliegue que se crea sin errores.
- **Fecha de nacimiento autodeclarada**: la verificación es «neutral», un niño puede mentir o borrar los datos. La política no promete lo contrario.
- **Eliminación por correo** es manual: tú borras la cuenta en Firebase → Authentication y el disparador limpia el resto.
- **Fuentes**: Inter y Baloo 2 se sirven desde la app; los idiomas con alfabetos no latinos (árabe) usan la tipografía del sistema, como antes.
- Las capturas de `play/capturas/` son del modo infantil; faltan capturas del chat con IA (hazlas con respuestas reales).

## 5. Activar el tutor de IA gestionado en Firebase (paso a paso)

Proyecto Firebase: `drakon-a30c8` (es el que usa `docs/js/ai-gateway.js`; compruébalo con `firebase projects:list`).

1. **Plan Blaze**: consola de Firebase → engranaje → «Uso y facturación» → «Modificar plan» → Blaze. Pon un **presupuesto con alerta** (p. ej. 5 USD) para evitar sorpresas. Sin Blaze no se pueden desplegar funciones con secretos.
2. **Clave de Groq**: crea una cuenta en https://console.groq.com, genera una API key (https://console.groq.com/keys) y revisa en la consola de Groq los límites de tu plan: el plan gratuito puede quedarse corto con muchos usuarios.
3. **Herramientas en tu PC**: Node.js 20, `npm install -g firebase-tools`, `firebase login`.
4. En la carpeta del repositorio (donde está `firebase.json`): `firebase use drakon-a30c8`, luego `cd functions`, `npm install`, `cd ..`.
5. **Secretos** (te pedirá pegar el valor; no se guardan en el código):
   - `firebase functions:secrets:set GROQ_API_KEY`
   - `firebase functions:secrets:set ELEVENLABS_API_KEY` → es obligatorio que exista porque `drakonAi` lo declara. Si NO vas a usar voz de ElevenLabs, escribe un valor de relleno (p. ej. `no-usado`): la voz gestionada fallará y la app volverá a la voz del dispositivo (comportamiento no probado en dispositivo).
6. **Despliegue, fase 1** (no necesita todavía la cuenta de Play):
   `firebase deploy --only firestore:rules,functions:drakonAi,functions:onAccountDeleted,functions:onParentalConsentUpdated`
   Antes, en la consola → Firestore → Reglas, copia las reglas actuales por si necesitas volver atrás (hay historial). Si el despliegue de reglas da un error de sintaxis, no se aplica nada.
7. En la consola → Functions comprueba que `drakonAi` aparece y copia su URL: debe ser `https://us-central1-drakon-a30c8.cloudfunctions.net/drakonAi`. Si es distinta, cámbiala en `docs/js/ai-gateway.js`.
8. **Activar en la app** (solo después de 6 y 7): aplica `drakon_ronda12_activar_ia.zip` (cambia `DRAKON_AI_GATEWAY_ENABLED` a `true` y sube la versión del service worker) o edita a mano la línea 7 de `docs/js/ai-gateway.js` y sube `BUILD` en `docs/sw.js`; haz commit y push.
9. **Probar**: abre la app, declara 13+ años, inicia sesión, escribe un mensaje en el chat → debe responder sin pedir clave. Mira Functions → Registros si falla (`model_not_found`/`decommissioned` = cambia la lista `GROQ_CHAT_MODELS` en `functions/index.js`).
10. **Fase 2** (cuando exista la app en Play y la cuenta de servicio): `firebase functions:secrets:set PLAY_SERVICE_ACCOUNT_JSON` y `firebase deploy --only functions:verifyPlayPurchase`.
11. **App Check**: solo después de configurarlo en la consola y comprobar que la app lo envía, pasa `enforceAppCheck:true`. Antes de eso déjalo en `false`.
