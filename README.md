# IA administrada de Drakón

## ⚠️ Estructura del repositorio y despliegue (GitHub Pages)

La app se publica con **GitHub Pages**, no con Firebase Hosting. Por eso el
proyecto está dividido así:

- **`docs/`** — la ÚNICA carpeta que debe publicarse. Contiene todo el
  código cliente (`index.html`, `games.html`, `privacy.html`, `terms.html`,
  `manifest.json`, `sw.js`, `css/`, `js/`, `assets/`). Configura GitHub
  Pages para servir desde **`/docs` en la rama principal** (Settings →
  Pages → Branch → `main` / `docs`).
- **Todo lo demás** (`functions/`, `tools/`, `firestore.rules`,
  `firebase.json`, este `README.md`) se queda fuera de `docs/` a propósito:
  GitHub Pages nunca sirve nada fuera de la carpeta configurada, así que
  el código de las Cloud Functions, los scripts internos de generación de
  contenido y las notas de arquitectura no quedan expuestos públicamente.
- Si en algún momento cambias de proveedor de hosting (por ejemplo a
  Firebase Hosting), aplica la misma regla: el directorio público debe
  apuntar solo a `docs/`, nunca a la raíz del repositorio.

Este servicio elimina por completo la necesidad de que cada alumno cree
cuentas o copie claves de Groq y ElevenLabs. Las credenciales se guardan solo
en Firebase Secret Manager; no las pongas en `index.html`, JavaScript ni el APK.

El gateway aplica por cuenta 25 turnos de chat y 80 solicitudes de voz al día,
además de límites por minuto. Esto limita el coste de los planes gratuitos;
las suscripciones deben aumentar estas cuotas únicamente después de verificar
la compra en el servidor (Google Play Billing), nunca desde `isPremium` escrito
por el cliente. El cliente mantiene en memoria las últimas 48 voces ya
generadas para no volver a facturar frases repetidas en una sesión.

## Despliegue inicial

Desde la raíz del proyecto, con Firebase CLI autenticado y el proyecto
`drakon-a30c8` seleccionado:

```powershell
cd functions
npm install
cd ..
firebase functions:secrets:set GROQ_API_KEY
firebase functions:secrets:set ELEVENLABS_API_KEY
firebase deploy --only functions:drakonAi
```

Cloud Functions requires the Firebase **Blaze** plan. Esta no es una razón
para volver a pedir claves al usuario: su coste de infraestructura es pequeño
comparado con TTS y se controla mediante las cuotas ya incluidas. Define alertas
de presupuesto en Google Cloud antes de abrir el registro público.

Cuando el endpoint esté desplegado, la app usa automáticamente
`https://us-central1-drakon-a30c8.cloudfunctions.net/drakonAi`.

## Antes de publicar en Google Play

1. Activa Firebase App Check para la app Android y cambia
   `enforceAppCheck:false` a `true` en `functions/index.js` (en ambas
   funciones: `drakonAi` y `verifyPlayPurchase`).
2. En ElevenLabs usa una *service account* limitada a texto a voz, con cuota
   mensual y, si aplica, allowlist de IP.
3. Configura alertas de presupuesto y revisa los límites por usuario.
4. Rota ambas credenciales si alguna clave personal se usó antes en pruebas.
5. Configura la verificación real de Google Play Billing (ver siguiente
   sección) — sin esto, `activatePrem()` en la app nunca podrá desbloquear
   Premium de verdad.

## Configurar suscripciones reales de Google Play (Premium $1.99/mes)

1. En Play Console, crea el producto de suscripción con el ID EXACTO
   `drakon_premium_monthly` (debe coincidir con
   `js/monetization.js` → `MONETIZATION.plans.premium.playProductId` y con
   `PREMIUM_PRODUCT_ID` en `functions/index.js`), precio $1.99 USD/mes.
2. En Play Console → Usuarios y permisos, crea (o reutiliza) una cuenta de
   servicio de Google Cloud con el rol **"Ver datos financieros"** (o
   superior) para este proyecto, y descarga su JSON de credenciales.
3. Guarda ese JSON como secreto (pega el contenido completo del archivo
   cuando lo pida):
   ```powershell
   firebase functions:secrets:set PLAY_SERVICE_ACCOUNT_JSON
   ```
4. Ajusta `ANDROID_PACKAGE_NAME` en `functions/index.js` al nombre de
   paquete real de la app publicada (p.ej. `com.tuempresa.drakon`).
5. Despliega la función:
   ```powershell
   cd functions && npm install && cd ..
   firebase deploy --only functions:verifyPlayPurchase
   ```
6. Despliega las reglas de seguridad (impiden que el cliente escriba
   `isPremium` directamente, sea cual sea la vía):
   ```powershell
   firebase deploy --only firestore:rules
   ```
7. Empaqueta la PWA como Trusted Web Activity (TWA) con Bubblewrap o
   PWABuilder — la Digital Goods API que usa `js/monetization.js` para
   iniciar la compra SOLO existe dentro de una TWA instalada desde Play
   Store; en un navegador normal no aparece, y la app lo detecta y avisa
   en vez de fingir que la compra funciona.

Con esto: el cliente inicia la compra → Google Play la procesa → el token
resultante se verifica en `verifyPlayPurchase` contra la Google Play
Developer API → si es válida, SOLO esa función marca `isPremium:true` en
Firestore (el cliente jamás puede hacerlo por su cuenta, reforzado por
`firestore.rules`) → la app lee ese campo verificado normalmente.

La aplicación publicada solo usa el gateway; el alumno autenticado no verá ni
necesitará credenciales de proveedores.

## Consentimiento parental (menores de 13 años)

La app está dirigida también a menores de 13 años, lo que activa COPPA
(EE. UU.) y la Política de Familias de Google Play. Ya está implementado:

- **Age gate**: pantalla neutral (`screen-age-gate` en `docs/index.html`,
  lógica en `docs/js/age-gate.js`) que pregunta el año de nacimiento una
  vez por cuenta.
- **Restricción automática**: si la cuenta es de un menor de 13 años,
  `isMinorRestricted()` bloquea el chat con IA (`chat.js`, `ai-gateway.js`)
  y el acceso a cámara/micrófono (`situations.js`, `audio.js`) hasta que
  haya consentimiento aprobado. Lecciones y juegos siguen disponibles.
- **Solicitud de consentimiento**: el menor puede registrar el correo de
  un adulto responsable, que se guarda en Firestore
  (`parentalConsentRequests/{uid}`, siempre en estado `pending` — las
  reglas le impiden al cliente aprobarse a sí mismo).
- **Aprobación**: hoy es manual — abre la consola de Firebase, edita
  `parentalConsentRequests/{uid}` y cambia `status` a `approved`. La
  Cloud Function `onParentalConsentUpdated` propaga automáticamente ese
  cambio a `users/{uid}.parentalConsentStatus`, que es lo que la app
  sincroniza; el usuario ve las funciones desbloqueadas la próxima vez
  que abra la app.

**Pendiente antes de operar con audiencia infantil real** — esto NO está
resuelto todavía y requiere una decisión de producto, no solo código:

1. Un mecanismo real de **verificación de consentimiento parental (VPC)**
   que confirme que quien aprueba es de verdad un adulto (p. ej. doble
   confirmación por correo con la extensión "Trigger Email" de Firebase,
   firma de un formulario, o un servicio de verificación de identidad de
   pago). Ahora mismo cualquiera con acceso a la consola de Firebase puede
   aprobar manualmente — es solo un placeholder operativo.
2. Confirmar directamente con **Groq** y **ElevenLabs** que sus propios
   Términos de Servicio permiten procesar datos de usuarios menores de 13
   años bajo consentimiento parental. Si alguno no lo permite, esa
   integración específica no puede activarse para cuentas de menores
   aunque exista el consentimiento, y `docs/privacy.html` debe reflejarlo.
3. Revisar con un profesional legal las secciones de menores en
   `docs/privacy.html` y `docs/terms.html` antes de publicar.
