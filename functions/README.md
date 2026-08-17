# IA administrada de Drakón

Este servicio elimina por completo la necesidad de que cada alumno cree
cuentas o copie claves de Groq y ElevenLabs. Las credenciales se guardan solo
en Firebase Secret Manager; no las pongas en `index.html`, JavaScript ni el APK.

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

Cuando el endpoint esté desplegado, la app usa automáticamente
`https://us-central1-drakon-a30c8.cloudfunctions.net/drakonAi`.

## Antes de publicar en Google Play

1. Activa Firebase App Check para la app Android y cambia
   `enforceAppCheck:false` a `true` en `functions/index.js`.
2. En ElevenLabs usa una *service account* limitada a texto a voz, con cuota
   mensual y, si aplica, allowlist de IP.
3. Configura alertas de presupuesto y revisa los límites por usuario.
4. Rota ambas credenciales si alguna clave personal se usó antes en pruebas.

El modo de clave personal queda sólo como compatibilidad para desarrollo web
sin backend. En producción, el usuario autenticado no lo verá ni lo necesitará.
