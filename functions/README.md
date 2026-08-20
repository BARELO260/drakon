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
   `enforceAppCheck:false` a `true` en `functions/index.js`.
2. En ElevenLabs usa una *service account* limitada a texto a voz, con cuota
   mensual y, si aplica, allowlist de IP.
3. Configura alertas de presupuesto y revisa los límites por usuario.
4. Rota ambas credenciales si alguna clave personal se usó antes en pruebas.
5. Añade verificación de Google Play Billing antes de ofrecer cuotas Pro.

La aplicación publicada solo usa el gateway; el alumno autenticado no verá ni
necesitará credenciales de proveedores.
