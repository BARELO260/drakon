# Guía para publicar Drakón en Google Play

Estado a fecha de la ronda 11. Este documento separa **lo que ya está hecho y probado**, **lo que necesito que decidas o me digas** y **los pasos que solo puedes hacer tú** (consolas, claves, cuentas).

## 1. Ya hecho en el código (con pruebas automáticas)

La app puede usarla cualquier persona, de cualquier edad. Diseño elegido (detalle en `README.md`, sección «Menores de 13 años»):

| Edad | Qué pasa |
|---|---|
| Antes de nada | La **verificación de edad es lo primero** que ve cualquiera, antes de registro o login. |
| 13 o más | Pantalla de acceso normal (cuenta por correo/Google). |
| Menos de 13 | **Modo infantil local**: no se puede crear cuenta, no se pide ningún dato, el progreso se guarda solo en el dispositivo. Sin chat con IA, voz gestionada, cámara, micrófono, dictado ni compras. |

Además: bloqueo global de red/sensores como segunda barrera, chequeo de edad **en el servidor**, reglas de Firestore que impiden al cliente darse el «consentimiento aprobado» o cambiar su año de nacimiento, vinculación de cada compra de Play a una sola cuenta, política de privacidad y términos alineados con el comportamiento real, y nueva versión del service worker.

Pruebas (todas pasan):
- `tools/ninos/pruebas/flows.js` — 24 comprobaciones del flujo en jsdom (`npm install jsdom@22`, luego `NODE_PATH=…/node_modules node flows.js`).
- `tools/ninos/pruebas/functions.test.js` — 18 comprobaciones de las Cloud Functions con dependencias simuladas.
- `node tools/validate_lessons.js docs/js` — 0 errores, 0 avisos.

## 2. Lo que necesito de ti (si quieres que lo prepare yo)

1. **Nombre de paquete definitivo** (p. ej. `com.tunombre.drakon`). Hoy hay un `TODO` en `functions/index.js` (`ANDROID_PACKAGE_NAME`).
2. **Dominio donde se servirá la app.** Es la decisión más importante del empaquetado (ver 3.B).
3. **¿Es cierta la frase «registro técnico de errores»** de la sección 2 de `privacy.html`? No encuentro código que lo haga. Si no existe, la quito.
4. **Correo de contacto público.** La política muestra `jcordonpineda@gmail.com`. Confirma que quieres un correo personal visible en la ficha y en la política, o dame otro.
5. **Tipo de cuenta de desarrollador** (personal u organización) y país: cambia los requisitos de verificación y de pruebas previas.
6. Revisión legal de `privacy.html` y `terms.html`: yo no soy abogado.

## 3. Pasos en orden (los haces tú; yo preparo lo que haga falta)

**A. Firebase (backend)**
1. `firebase deploy --only firestore:rules,functions`.
2. Secretos: `firebase functions:secrets:set GROQ_API_KEY`, `ELEVENLABS_API_KEY`, `PLAY_SERVICE_ACCOUNT_JSON`.
3. **App Check**: registra la app Android con Play Integrity, comprueba que el cliente lo envía y **solo entonces** pon `enforceAppCheck:true` en `drakonAi` y `verifyPlayPurchase` (si lo activas antes, la app deja de funcionar).
4. Prueba las reglas con el emulador de Firestore antes de desplegar (yo no pude ejecutarlo aquí).

**B. Empaquetado Android (TWA)**
- Una TWA exige servir `https://TU-DOMINIO/.well-known/assetlinks.json`. Con GitHub Pages en `usuario.github.io/repo` **no se puede** (el archivo tendría que estar en la raíz de `usuario.github.io`). Soluciones: dominio propio apuntando a GitHub Pages (lo más simple), o un repositorio llamado `usuario.github.io`.
- Genera el proyecto con Bubblewrap o PWABuilder usando el nombre de paquete de arriba; firma con **Play App Signing** y copia la huella SHA-256 al `assetlinks.json`.
- La compra de suscripción usa la Digital Goods API, que solo funciona dentro de una TWA instalada desde Play.

**C. Play Console**
1. Crear la app y subir el AAB a una pista de **pruebas internas**.
2. **Público objetivo**: como la usa cualquier edad, incluye a menores de 13 → se aplica la **Política de Familias**. Responde el cuestionario con lo descrito en la sección 1 y revisa en la consola los requisitos vigentes.
3. **Seguridad de los datos** (borrador, verifícalo contra lo que realmente despliegues):
   - 13+ con cuenta: correo, ID de usuario, progreso de aprendizaje; mensajes del chat enviados al proveedor de IA (Groq) para responder; historial de compras de Play. Cifrado en tránsito: sí. Borrado: en la app y por correo.
   - Menores de 13 (modo infantil): no se recopila ni comparte nada.
   - No hay anuncios ni analítica.
4. Clasificación de contenido (IARC), URL de la política (`https://TU-DOMINIO/privacy.html`) y URL/instrucciones de **eliminación de cuenta**.
5. Producto de suscripción `drakon_premium_monthly`, cuenta de servicio con acceso a la Play Developer API y su JSON como secreto.
6. Ficha: capturas, gráfico de funciones 1024×500, descripción corta y larga (iconos de 192/512 px ya existen).
7. Pruebas cerradas: **consulta en la consola cuántos testers y cuántos días exige tu tipo de cuenta**; esa regla ha cambiado varias veces.

## 4. Riesgos que no he podido cerrar

- **Reglas de Firestore sin probar con el emulador** (no hay red/Java aquí). La lógica es sencilla pero compruébala.
- **API de suscripciones:** `functions/index.js` usa `purchases.subscriptions.get` (v1). Google la tiene marcada como obsoleta en favor de `subscriptionsv2`; funciona hoy pero conviene migrar y probar con una compra real de prueba.
- **Todo el flujo de compra, la TWA y App Check** requieren un dispositivo real y las consolas; solo los he podido revisar a nivel de código.
- **Tipografías y componentes de Firebase se cargan desde servidores de Google** (reciben la IP del dispositivo; ya está declarado en la política). Para evitarlo habría que alojar las tipografías en `docs/assets/`.
- **Fecha de nacimiento declarada:** la verificación de edad es «neutral» (autodeclarada), como exige Google; un niño puede mentir o borrar los datos de la app. No es un fallo, pero la política de privacidad no debe prometer lo contrario (no lo hace).
- **Contenido de idiomas** sin revisión de hablantes nativos (ver `REVISION_LECCIONES.md`).
