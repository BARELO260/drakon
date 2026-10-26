# Empaquetar Drakón como TWA (Android) — paso a paso

**Estado:** los archivos de esta carpeta están preparados y su coherencia está comprobada con `node tools/ronda12/comprobar_twa.js` (sin red). **No he podido ejecutar Bubblewrap, compilar el AAB ni probar nada en un dispositivo** desde el chat: todo lo de abajo lo haces tú.

Datos fijados: paquete `com.drakon.app` · dominio `barelo260.github.io` · app en `https://barelo260.github.io/drakon/`.

## 0. Requisitos en tu ordenador
- Node.js 18+ y **JDK 17** (Bubblewrap te ofrece descargar JDK y Android SDK la primera vez; acepta).
- `npm install -g @bubblewrap/cli`

## 1. Publica la web primero
1. Sube todo el repositorio `drakon` con la carpeta `docs/` a GitHub Pages (Settings → Pages → rama `main`, carpeta `/docs`).
2. **Borra la carpeta duplicada `docs/docs/`**: es una copia antigua de la app (sin verificación de edad) y, como está DENTRO de `docs/`, GitHub Pages la publicaría en `https://barelo260.github.io/drakon/docs/`:
   ```
   git rm -r docs/docs
   git commit -m "Quitar copia antigua de la app"
   git push
   ```
   (Las carpetas sueltas `css/` y `js/` de la raíz del repositorio también son restos antiguos, pero están FUERA de `docs/`, así que no se publican; puedes borrarlas o ignorarlas. La app usa `docs/css` y `docs/js`.)
3. Abre en el navegador y comprueba que cargan: `https://barelo260.github.io/drakon/`, `.../manifest.json`, `.../privacy.html`, `.../eliminar-cuenta.html`.

## 2. Repositorio raíz para `assetlinks.json`
Sigue `twa/barelo260.github.io/README.md`. Imprescindible: sin `https://barelo260.github.io/.well-known/assetlinks.json` la app se abrirá con la barra del navegador y las compras con Digital Goods no funcionarán.

## 3. Generar el proyecto con Bubblewrap
```
mkdir drakon-android && cd drakon-android
cp ../drakon/twa/twa-manifest.json .
bubblewrap update      # regenera el proyecto Android a partir de twa-manifest.json
```
(Si `update` se queja, alternativa: `bubblewrap init --manifest=https://barelo260.github.io/drakon/manifest.json` y, cuando pregunte, usa los mismos valores que `twa-manifest.json`: paquete `com.drakon.app`, URL de inicio `/drakon/index.html`, **activar Play Billing**.)

Te pedirá crear una **clave de subida** (`android.keystore`, alias `drakon-upload` según el manifiesto). **Guarda el archivo y las contraseñas en un lugar seguro (copia de seguridad fuera del PC)**: si lo pierdes tendrás que pedir a Google un restablecimiento de la clave de subida.

## 4. Compilar
```
bubblewrap build
```
Salen `app-release-bundle.aab` (lo que subes a Play) y un `.apk` (para probar en tu móvil con `adb install`).

## 5. Firma de aplicaciones de Play y huella SHA-256
1. Play Console → crea la app → sube el AAB a **Pruebas internas** y acepta **Play App Signing** (recomendado).
2. Play Console → Probar y publicar → Configuración → Integridad de la aplicación → Firma de apps → copia la **huella SHA-256 del certificado de firma de la aplicación**.
3. Pégala en `assetlinks.json` (repositorio `barelo260.github.io`). Si también vas a probar el `.apk` firmado con tu clave de subida, añade esa segunda huella a la lista: `keytool -list -v -keystore android.keystore -alias drakon-upload`.
4. Comprueba el enlace con la herramienta de Google: https://developers.google.com/digital-asset-links/tools/generator (o instalando la app y viendo que se abre sin barra del navegador).

## 6. Pruebas en el móvil (obligatorias; yo no pude hacerlas)
- La app se abre a pantalla completa, sin barra del navegador.
- Pantalla de edad primero; con 10 años → modo infantil; con 30 → acceso.
- **Micrófono y cámara:** pulsa el micrófono en el chat y en «Estoy allí ahora» y comprueba que Android pide el permiso y funciona dentro de la TWA. Si no funciona, hay que declarar los permisos en el proyecto Android (dímelo y lo preparo).
- Compra de prueba con una cuenta de **tester de licencia** (ver `play/FICHA_Y_FORMULARIOS.md`, sección 7).
- Eliminar cuenta desde Ajustes.
- Los enlaces a `privacy.html`, `terms.html` y `eliminar-cuenta.html` desde Ajustes se abren correctamente.

## 7. Cada actualización futura
Sube `appVersionCode` (+1) en `twa-manifest.json`, `bubblewrap update`, `bubblewrap build`, sube el nuevo AAB. Los cambios en la web (GitHub Pages) llegan a los usuarios sin necesidad de subir un AAB nuevo, gracias al service worker (`BUILD` en `docs/sw.js`; súbelo cuando cambies archivos).
