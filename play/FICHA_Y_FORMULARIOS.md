# Borrador para Play Console — Drakón

> **Cómo leer este documento.** Todo se deriva del comportamiento REAL del código (ronda 12). Lo marcado con **⚠ DECIDE TÚ** son decisiones o datos que solo tú puedes dar o confirmar. Son borradores: **tú eres quien responde y firma los formularios** en la consola, y Google puede haber cambiado las preguntas. Compara siempre con lo que ves en pantalla.

## 0. Datos fijos de la app

| Campo | Valor |
|---|---|
| Nombre de la app | Drakón: Aprende Idiomas con IA (30 caracteres, el máximo permitido) |
| Nombre de paquete | `com.drakon.app` (definitivo; no se puede cambiar tras publicar) |
| Cuenta de desarrollador | Personal · Guatemala · nombre público «JLX Development» |
| Categoría | Educación |
| Correo de contacto | joseluisdev123@gmail.com |
| Política de privacidad | https://barelo260.github.io/drakon/privacy.html |
| Eliminación de cuenta y datos (URL web) | https://barelo260.github.io/drakon/eliminar-cuenta.html |
| Idioma predeterminado de la ficha | Español (Latinoamérica) o España: elige el que prefieras |
| Anuncios | No contiene anuncios |

## 1. Textos de la ficha

**Título (máx. 30):** `Drakón: Aprende Idiomas con IA`

**Descripción breve (máx. 80):**
`Aprende idiomas con lecciones, situaciones reales y un tutor de IA.`

**Descripción completa (máx. 4000):**

```
Drakón es una app para aprender idiomas paso a paso, con un dragón simpático como compañero.

📚 LECCIONES Y EJERCICIOS
Cursos de inglés, español, francés, alemán, italiano y portugués con cientos de lecciones y ejercicios: vocabulario, gramática, comprensión auditiva, escritura y práctica oral. Ganas puntos de experiencia, mantienes tu racha diaria y completas misiones.

🎭 SITUACIONES REALES
Practica lo que de verdad necesitas decir: aeropuerto, restaurante, hotel, mercado, hospital, oficina, fiesta y universidad.

🤖 TUTOR DE IA (a partir de 13 años)
Escribe con un tutor de inteligencia artificial que responde, corrige tus errores y se adapta a tu nivel. Si una respuesta te parece ofensiva o inapropiada, puedes reportarla desde la propia app.

👧 MODO INFANTIL
Si tienes menos de 13 años, Drakón funciona sin cuenta y sin enviar datos fuera del dispositivo: lecciones, juegos y situaciones, sin chat con IA, sin voz, sin cámara y sin compras.

⭐ DRAKÓN PREMIUM (opcional)
Suscripción mensual que amplía el uso de la IA. Se gestiona y se cancela desde Google Play. Las lecciones y las situaciones son gratis.

🔒 TU PRIVACIDAD
Sin anuncios. Puedes eliminar tu cuenta y tus datos desde la app o desde nuestra página web.

Los contenidos de idiomas y las respuestas de la IA se generan automáticamente y pueden contener errores.
```

> ⚠ **DECIDE TÚ / revisa antes de publicar:**
> 1. La descripción dice «cientos de lecciones y ejercicios»: es cierto (213 lecciones y 1.278 ejercicios por curso, más 104 lecciones de situaciones por idioma, según el validador), pero ajústalo si cambias el contenido.
> 2. La descripción promete un tutor de IA que funciona. **Hoy el chat de IA llama directamente a Groq con la clave personal del usuario** (`DRAKON_AI_GATEWAY_ENABLED = false` en `docs/js/ai-gateway.js`), así que una persona que instale la app desde Play no podrá chatear con la IA a menos que ponga su propia clave de Groq. Esto es un riesgo de rechazo por «funcionalidad que no funciona» y de reseñas negativas. Antes de publicar, activa el gateway (pasos en `GUIA_GOOGLE_PLAY.md`, sección 5). **Aun así, el gateway solo cubre el chat de texto y la voz TTS (18+)**: el dictado por voz y «Estoy allí ahora» (cámara) siguen pidiendo la clave personal. La descripción de arriba ya no menciona micrófono ni cámara por eso; si amplío el gateway a esas funciones, se puede volver a mencionarlas.
> 3. Las **capturas de pantalla** deben ser de la app real. En `play/capturas/` dejo 4 capturas de 1080×1920 hechas con un Chromium real (inicio, lecciones, situaciones y perfil, con contenido real de la app). **No** incluyo capturas del chat de IA porque las respuestas serían inventadas por mí; hazlas tú en tu móvil con una respuesta real. Sustituye las que no te gusten por capturas de tu dispositivo.

## 2. Seguridad de los datos (borrador de respuestas)

Qué hace realmente el código, en orden de «quién lo ve»:

**A. Modo infantil (menores de 13):** no hay cuenta, no se carga el SDK de Firebase, no hay llamadas de red de la persona (bloqueo en `installMinorGuards`). Todo queda en el dispositivo.

**B. Adultos y 13+ con cuenta:**

| Dato | ¿Se recopila? | ¿Se comparte? | Finalidad | Opcional |
|---|---|---|---|---|
| Correo electrónico | Sí (cuenta Firebase) | No | Gestión de la cuenta | No |
| Nombre (si accede con Google) | Sí | No | Gestión de la cuenta / mostrar el perfil | — |
| ID de usuario | Sí | No | Funciones de la app, gestión de la cuenta | No |
| Progreso, puntos, racha, preferencias, año de nacimiento | Sí (Firestore) | No | Funciones de la app | No |
| Chats guardados y «memoria del tutor» (nombre/objetivo/intereses que la persona escribe) | Sí, si los guarda (se sincronizan con la cuenta) | No | Funciones de la app | Sí |
| Mensajes del chat con la IA (texto) | Salen del dispositivo hacia **Groq** para generar la respuesta | **Sí, con Groq** (proveedor de IA) | Funciones de la app | Sí (solo si usa el chat) |
| Audio del micrófono (dictado/conversación) | Se envía a **Groq** para transcribirlo; no se guarda en servidores propios | **Sí, con Groq** | Funciones de la app | Sí |
| Texto para voz (TTS) | Se envía a **ElevenLabs** (solo mayores de 18 y si la persona activa la voz) | **Sí, con ElevenLabs** | Funciones de la app | Sí |
| Fotos/cámara («Estoy allí ahora») | La imagen se envía a **Groq** para analizarla; no se guarda en servidores propios | **Sí, con Groq** | Funciones de la app | Sí |
| Reportes de respuestas de la IA | Sí: texto de la respuesta, motivo, comentario, idioma y modo; **sin uid ni correo** | No | Seguridad y moderación de contenido | Sí |
| Historial de compras / estado Premium | Sí (estado, vencimiento, producto y hash de la compra; el pago lo gestiona Google Play) | No | Funciones de la app | Sí |
| Dirección IP | La reciben Firebase/Google y los proveedores de IA como parte de la conexión (no se almacena como dato propio) | — | — | — |

Respuestas globales:
- **¿Recopila o comparte datos de usuario?** Sí.
- **¿Todos los datos se cifran en tránsito?** Sí (HTTPS).
- **¿Ofreces una forma de solicitar la eliminación de datos?** Sí: en la app (Ajustes → Privacidad y datos → Eliminar mi cuenta) y en la URL web de eliminación.
- **Ubicación, contactos, SMS, archivos, calendario, salud, datos financieros (tarjetas):** no se recopilan.
- **Anuncios / analítica:** ninguno. No hay SDK de analítica ni de anuncios.
- **¿Cumple la Política de Familias?** Sí, ver sección 3.

> ⚠ **DECIDE TÚ:** Google distingue entre «compartir» y «transferir a un proveedor de servicios que procesa los datos en tu nombre» (esto último no cuenta como compartir). Groq y ElevenLabs procesan datos que la app les envía, pero **hoy la clave de API la pone la propia persona** (BYOK), lo que complica la clasificación. Esta tabla los declara como «compartidos», que es lo más prudente; si activas el gateway (`drakonAi`), la clasificación puede cambiar. Revísalo con la definición vigente en la consola.

## 3. Público objetivo y Política de Familias

Recomendación: declara un público **mixto**:
- Marca los grupos de edad **9–12, 13–15, 16–17 y 18+** (el menor grupo en el que la app tiene sentido es 9–12; evita «5 o menos» y «6–8»).
- Con **9–12** seleccionado **se aplica la Política de Familias**: sin anuncios; solo SDK permitidos (aquí: ninguno de terceros para el menor, el SDK de Firebase no se carga en modo infantil); verificación de edad neutral (la hay: pregunta el año de nacimiento sin sugerir una respuesta «correcta»); nada de recopilar datos personales de menores de 13 (cumplido: modo local).

Respuestas previstas del cuestionario:

| Pregunta | Respuesta |
|---|---|
| ¿La app está dirigida a niños? | Es de público mixto: dirigida también a niños de 9–12 y a mayores |
| ¿Atrae a niños? | Sí (mascota/dragón y estilo lúdico) |
| ¿Muestra anuncios? | No |
| ¿Recopila datos personales de niños? | No: en modo infantil no hay cuenta ni salen datos del dispositivo |
| ¿Tiene compras dentro de la app? | Sí en general (suscripción Premium) pero **bloqueadas y ocultas para menores de 13** |
| ¿Tiene funciones de IA generativa? | Sí, para 13+; desactivadas en modo infantil. Hay función de **reportar** respuestas |
| ¿Hay pantalla de edad neutral? | Sí (primer paso de la app; pide el año de nacimiento) |

> ⚠ **DECIDE TÚ:** si prefieres **no** apuntar a menores de 13, marca solo 13+ y la política aplicable será la general. El modo infantil seguiría protegiendo a quien declare menos de 13 años, pero Google podría considerar que, aun así, la app «atrae a niños» (mascota, estilo lúdico) y pedirte cumplir Familias. Mi recomendación es la opción mixta de arriba: es la que coincide con lo que el código ya hace.

## 4. Clasificación de contenido (IARC)

Respuestas previstas (tú rellenas el cuestionario; la calificación final la calcula IARC):
- Categoría: **Referencia, noticias o educación**.
- Violencia, contenido sexual, lenguaje soez, drogas, apuestas, miedo: **No** (el contenido didáctico es neutro).
- **Interacción entre usuarios / contenido generado por usuarios:** los usuarios no se comunican entre sí; sí hay un **chatbot de IA generativa** (13+). Responde «sí» donde el cuestionario pregunte por chatbots o contenido generado por IA.
- **Compras digitales:** Sí (suscripción).
- **Compartir ubicación:** No.
- **Acceso sin restricciones a internet:** No (la app solo se conecta a sus propios servicios y a los proveedores de IA).

## 5. Contenido generado por IA (política de Google Play)

Qué decir si te lo preguntan:
- La app incluye un tutor de conversación basado en IA generativa (modelos de Groq) y voz sintética (ElevenLabs).
- **Mecanismo de reporte dentro de la app:** botón «🚩 Reportar» bajo cada respuesta de la IA (chat, historial y Situaciones). La persona elige el motivo (ofensiva, sexual, peligrosa, incorrecta, otra) y puede añadir un comentario. Si no hay sesión o falla el envío, se abre un borrador de correo a joseluisdev123@gmail.com.
- Los reportes se guardan en Firestore (`aiReports`), sin uid ni correo; solo tú puedes leerlos desde la consola de Firebase.
- Las funciones de IA están desactivadas para menores de 13.
- ⚠ **Tarea tuya:** revisar la colección `aiReports` con regularidad (p. ej. semanal) y actuar sobre las respuestas ofensivas (ajustar el prompt del sistema, filtros…). Google valora que los reportes se atiendan.

## 6. Acceso para el equipo de revisión de Google («Acceso a la app»)

La app pide edad y, para 13+, iniciar sesión. Debes darles una cuenta de prueba.
- ⚠ **Tarea tuya:** crea una cuenta de prueba (correo y contraseña **tuyos**; yo no puedo inventarlas) y pégala en Play Console → Contenido de la app → Acceso a la app. Indica: «Elige un año de nacimiento anterior a 2013 en la pantalla de edad; inicia sesión con estas credenciales».
- Si el chat de IA sigue en modo «clave propia» (ver aviso de la sección 1), añade también una clave de Groq de prueba en las instrucciones, o no podrán evaluar esa función.
- Explica el modo infantil: «Con un año de nacimiento posterior a 2013 se entra al modo infantil sin cuenta».

## 7. Suscripción en Play Console

1. Monetizar → Productos → **Suscripciones** → crear `drakon_premium_monthly` (el ID debe coincidir exactamente con `PREMIUM_PRODUCT_ID` en `functions/index.js`).
2. Crear un **plan base** mensual con renovación automática, fijar el precio (la interfaz muestra un precio de reserva «$1.99/mes» si la consulta a Google falla; ponlo igual o cambia ese texto) y **activarlo**.
3. Play Console → Configuración → **Acceso a la API** → vincula un proyecto de Google Cloud y concede acceso a la **cuenta de servicio** que usa la Cloud Function con permisos para consultar pedidos y suscripciones. (La función `verifyPlayPurchase` usa `purchases.subscriptionsv2.get`.)
4. Agrega tu cuenta como **tester de licencia** (Configuración → Pruebas de licencia) para poder hacer compras de prueba sin pagar.
5. Haz al menos una compra de prueba real en un dispositivo con la app instalada desde la pista de pruebas, y comprueba en Firestore que `users/{uid}` recibe `isPremium` y `premiumExpiresAt`.
6. ⚠ La confirmación de compra (`acknowledge`) sigue usando `purchases.subscriptions.acknowledge`; verifica en esa compra de prueba que no da error (y que la suscripción no se reembolsa a los 3 días por falta de confirmación).

## 8. Orden recomendado para una cuenta personal

1. Verificar identidad y la cuenta (documento, teléfono, y los datos que pide Play).
2. Crear la app → rellenar «Contenido de la app»: política de privacidad, acceso a la app, anuncios (no), clasificación, público objetivo, Seguridad de los datos, IA generativa, eliminación de cuenta.
3. Subir el AAB a **Pruebas cerradas** y reunir **12 probadores durante 14 días seguidos** (requisito de las cuentas personales nuevas; confírmalo en la consola, que puede haber cambiado).
4. Solicitar acceso a producción cuando se cumpla.
5. Perfil de pagos: ⚠ **comprueba que Guatemala permite registro de comerciante** (https://support.google.com/googleplay/android-developer/answer/9306917). Si no, no podrás cobrar Premium sin otra solución.
