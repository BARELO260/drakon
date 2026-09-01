# IA administrada de Drakón

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
