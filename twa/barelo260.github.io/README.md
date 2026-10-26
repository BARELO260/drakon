# Repositorio `barelo260.github.io` (raíz del dominio)

Google comprueba el enlace entre la app de Android y la web en la **raíz del dominio**:
`https://barelo260.github.io/.well-known/assetlinks.json`.
Como la app vive en `https://barelo260.github.io/drakon/`, hace falta este segundo repositorio.

1. En GitHub crea un repositorio **público** llamado exactamente `barelo260.github.io`.
2. Sube a su raíz el contenido de esta carpeta: `.well-known/assetlinks.json` y `.nojekyll`
   (el archivo vacío `.nojekyll` es imprescindible: sin él GitHub Pages ignora las carpetas que empiezan por punto).
3. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
4. Sustituye en `assetlinks.json` la línea de la huella por la SHA-256 real
   (Play Console → tu app → Probar y publicar → Configuración → Integridad de la aplicación → Firma de apps → «Certificado de firma de la aplicación»).
   Si pruebas también con un APK firmado con tu clave de subida, añade esa segunda huella en la misma lista.
5. Comprueba que abre en el navegador: `https://barelo260.github.io/.well-known/assetlinks.json`.
