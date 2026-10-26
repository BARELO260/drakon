import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from patchlib import sub, write
P = 'docs/privacy.html'; T = 'docs/terms.html'
FECHA_OLD = 'Última actualización: 18 de octubre de 2026'; FECHA_NEW = 'Última actualización: 23 de octubre de 2026'
sub(P, FECHA_OLD, FECHA_NEW); sub(T, FECHA_OLD, FECHA_NEW)

sub(P, '<p><strong>Jose Luis Cordón Pineda</strong>, desarrollador individual de la app Drakón.</p>',
       '<p><strong>Jose Luis Cordón Pineda</strong>, desarrollador individual de la app Drakón, publicada en Google Play como «JLX Development» (Guatemala).</p>')

sub(P, '''  <li><strong>Claves de API propias''', '''  <li><strong>Suscripción Premium:</strong> los pagos los procesa Google Play; nosotros no vemos ni guardamos tu tarjeta. Guardamos en tu cuenta únicamente si tienes Premium, su fecha de vencimiento y el producto contratado, y un identificador cifrado (hash) de la compra para que una misma suscripción no se use en varias cuentas.</li>
  <li><strong>Reportes de respuestas de la IA:</strong> si pulsas «🚩 Reportar» en una respuesta, enviamos el texto de esa respuesta, el motivo que elijas, tu comentario opcional, el idioma que estudias y el modo de chat. <strong>No incluye tu nombre, tu correo ni tu identificador de usuario.</strong></li>
  <li><strong>Claves de API propias''')

sub(P, '''  <li>Mejorar la estabilidad y el funcionamiento de la app (registro técnico de errores, sin contenido personal identificable más allá de lo necesario para depurar fallos).</li>
''', '''  <li>Revisar los reportes de respuestas de la IA para mejorar la seguridad del tutor y retirar contenido inapropiado.</li>
''')

sub(P, '''  <li><strong>Servidores de Google (componentes y tipografías):</strong> al abrir la app tu dispositivo se conecta a servidores de Google para cargar componentes de Firebase y tipografías; como en cualquier conexión a internet, Google puede recibir la dirección IP del dispositivo. En el modo infantil (menores de 13) no existe cuenta ni se envía ningún dato de la persona.</li>''',
'''  <li><strong>Componentes de Firebase (servidores de Google):</strong> el código de Firebase se descarga de servidores de Google <strong>solo después de que declares tener 13 años o más</strong>; como en cualquier conexión a internet, Google puede recibir la dirección IP del dispositivo. En el modo infantil (menores de 13) <strong>no se descarga ni se contacta con Google</strong>: no existe cuenta y no sale ningún dato de la persona. Las tipografías de la app están incluidas en la propia app (no se piden a Google).</li>''')

sub(P, '''<p>Conservamos tu cuenta y progreso mientras mantengas tu cuenta activa.''', '''<p>Conservamos tu cuenta y progreso mientras mantengas tu cuenta activa. Los reportes de respuestas de la IA (que no están ligados a tu cuenta) se conservan mientras sean necesarios para revisar la seguridad del tutor.''')

sub(P, '''Esta acción es permanente e inmediata.</p>''', '''Esta acción es permanente e inmediata. Al borrar la cuenta se eliminan también tu perfil, tus contadores de uso de la IA, los vínculos de compra y cualquier solicitud de consentimiento asociada. Si no puedes abrir la app, consulta <a href="eliminar-cuenta.html">cómo solicitar la eliminación de tu cuenta y tus datos desde esta web</a>.</p>''')

sub(P, '<code>jcordonpineda@gmail.com</code>', '<code>joseluisdev123@gmail.com</code>')
sub(T, '<code>jcordonpineda@gmail.com</code>', '<code>joseluisdev123@gmail.com</code>')

sub(T, '''<p>Las respuestas del tutor de IA, las correcciones y las traducciones se generan automáticamente y pueden contener errores o imprecisiones.''',
       '''<p>Las respuestas del tutor de IA, las correcciones y las traducciones se generan automáticamente y pueden contener errores o imprecisiones. Si una respuesta te parece ofensiva, peligrosa o inapropiada, puedes reportarla con el botón «🚩 Reportar» que aparece bajo cada respuesta.''')

sub(T, '''Si tienes una suscripción activa, eliminar la cuenta no cancela automáticamente la suscripción en Google Play: cancélala por separado desde Google Play para evitar cargos futuros.</p>''',
       '''Si tienes una suscripción activa, eliminar la cuenta no cancela automáticamente la suscripción en Google Play: cancélala por separado desde Google Play para evitar cargos futuros. Si no puedes abrir la app, consulta <a href="eliminar-cuenta.html">cómo solicitar la eliminación desde la web</a>.</p>''')

write('docs/eliminar-cuenta.html', '''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Eliminar cuenta y datos — Drakón</title>
<style>
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,sans-serif;max-width:720px;margin:0 auto;padding:32px 20px 80px;color:#1a1a1a;line-height:1.65;background:#fffaf3}
  h1{font-size:26px;margin-bottom:4px}
  h2{font-size:18px;margin-top:36px;color:#92400e}
  .updated{color:#777;font-size:13px;margin-bottom:28px}
  ul,ol{padding-left:22px}
  li{margin-bottom:6px}
  a{color:#d97706}
  code{background:#f1f1f1;padding:1px 5px;border-radius:4px;font-size:13px}
  .btn{display:inline-block;background:#d97706;color:#fff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:12px;margin:8px 0}
  table{border-collapse:collapse;width:100%;font-size:14px}
  th,td{border:1px solid #e5d9c8;padding:8px 10px;text-align:left;vertical-align:top}
  th{background:#fdf0dc}
  footer{margin-top:48px;font-size:12px;color:#999}
</style>
</head>
<body>

<h1>🐲 Eliminar tu cuenta y tus datos</h1>
<div class="updated">Aplicación: <strong>Drakón — Aprende Idiomas con IA</strong> · Desarrollador: JLX Development (Jose Luis Cordón Pineda) · Última actualización: 23 de octubre de 2026</div>

<p>Esta página explica cómo eliminar tu cuenta de Drakón y los datos asociados, tanto desde la app como si ya no puedes abrirla. Está alineada con nuestra <a href="privacy.html">Política de privacidad</a>.</p>

<h2>Opción 1 — Desde la app (inmediata)</h2>
<ol>
  <li>Abre Drakón e inicia sesión.</li>
  <li>Ve a <strong>Ajustes → Privacidad y datos → Eliminar mi cuenta</strong>.</li>
  <li>Confirma. Si te lo pide, vuelve a introducir tu contraseña o a iniciar sesión con Google (es una medida de seguridad).</li>
</ol>
<p>La eliminación es permanente y no se puede deshacer.</p>

<h2>Opción 2 — Sin abrir la app (solicitud por correo)</h2>
<p>Si perdiste el acceso o desinstalaste la app, envíanos una solicitud <strong>desde el correo con el que creaste la cuenta</strong> (o con el que iniciaste sesión con Google), para que podamos comprobar que la cuenta es tuya:</p>
<p><a class="btn" href="mailto:joseluisdev123@gmail.com?subject=Eliminar%20mi%20cuenta%20de%20Drak%C3%B3n&amp;body=Solicito%20la%20eliminaci%C3%B3n%20de%20mi%20cuenta%20de%20Drak%C3%B3n%20y%20de%20todos%20los%20datos%20asociados.">Solicitar eliminación por correo</a></p>
<ul>
  <li>Dirección: <code>joseluisdev123@gmail.com</code> · Asunto: «Eliminar mi cuenta de Drakón».</li>
  <li>No hace falta que envíes tu contraseña ni ningún documento. Nunca te la pediremos.</li>
  <li>Eliminaremos la cuenta y sus datos en un plazo máximo de <strong>30 días</strong> desde que recibamos la solicitud y te avisaremos por el mismo correo.</li>
  <li><strong>Padres, madres y tutores:</strong> pueden escribir a la misma dirección para pedir la eliminación de cualquier dato asociado a un menor a su cargo.</li>
</ul>

<h2>Qué datos se eliminan y cuáles se conservan</h2>
<table>
  <tr><th>Dato</th><th>¿Qué ocurre?</th></tr>
  <tr><td>Cuenta (correo y identificador de usuario)</td><td>Se elimina.</td></tr>
  <tr><td>Progreso de aprendizaje guardado en la nube (idioma, lecciones, racha, puntos, preferencias, chats guardados)</td><td>Se elimina.</td></tr>
  <tr><td>Contadores de uso de la IA, solicitudes de consentimiento parental y vínculos de compra de la cuenta</td><td>Se eliminan.</td></tr>
  <tr><td>Reportes de respuestas de la IA que enviaste</td><td>Se conservan: no llevan tu nombre, correo ni identificador, así que no se pueden asociar a ti.</td></tr>
  <tr><td>Copia local en tu dispositivo</td><td>Se borra al desinstalar la app o borrar sus datos desde los ajustes de Android.</td></tr>
  <tr><td>Historial de pagos y suscripción</td><td>Lo gestiona Google Play, no nosotros; sigue sujeto a las políticas de Google. <strong>Eliminar la cuenta no cancela la suscripción:</strong> cancélala en Google Play → Pagos y suscripciones → Suscripciones.</td></tr>
  <tr><td>Mensajes procesados por el proveedor de IA (Groq) o de voz (ElevenLabs)</td><td>Los trata cada proveedor según su propia política (ver <a href="privacy.html">Política de privacidad</a>).</td></tr>
</table>

<h2>Modo infantil (menores de 13 años)</h2>
<p>En el modo infantil <strong>no existe ninguna cuenta ni se envía ningún dato</strong> a nuestros servidores: todo el progreso está solo en el dispositivo. Para borrarlo basta con desinstalar la app o borrar sus datos en Ajustes de Android → Aplicaciones → Drakón → Almacenamiento → Borrar datos.</p>

<footer><a href="privacy.html">Política de privacidad</a> · <a href="terms.html">Términos de servicio</a></footer>

</body>
</html>
''')
print('ok')
