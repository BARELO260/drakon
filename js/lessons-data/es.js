/* ═══════════════════════════════════════════════════════════
   js/lessons-data/es.js — Banco de lecciones: ESPAÑOL (ES)
   ═══════════════════════════════════════════════════════════
   Primer lote (A1). Ver README.md en esta misma carpeta para el
   formato y cómo seguir agregando lecciones hasta llegar a ~500.
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.ES = [
  {
    id:"es_a1_greetings", level:"A1", title:"Saludos y presentaciones", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en español.",
    study: {
      vocab: [
        ["Buenos días / tardes / noches", "Good morning / afternoon / evening"],
        ["Hola / Adiós", "Hello / Goodbye"],
        ["Mucho gusto", "Nice to meet you"],
        ["Me llamo... / Mi nombre es...", "My name is..."],
        ["¿Cómo estás?", "How are you?", "Respuesta típica: \"Muy bien, gracias\""]
      ],
      grammar: [
        ["El verbo \"ser\"", "\"Ser\" se conjuga: soy, eres, es, somos, sois/son. Se usa para identidad, profesión, origen.", "Soy Carlos. Ella es de España."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en español?", ["Buenos días","Buenas noches","Buenas tardes","Adiós"], 0, "\"Buenos días\" se usa desde que amanece hasta el mediodía. \"Buenas tardes\" es de 12 a 8pm aprox., y \"Buenas noches\" de noche.", "☀️ Son las 9 de la mañana y llegas a la oficina."],
      ["mcq", "Alguien te dice \"¿Cómo estás?\". ¿Cuál es una respuesta común?", ["Muy bien, gracias","Me llamo Ana","Tengo veinte años","Hasta luego"], 0, "\"Muy bien, gracias\" es la respuesta estándar. También puedes decir \"Bien, ¿y tú?\" para devolver la pregunta."],
      ["fill", "Completa: \"Hola, ___ nombre es Carlos. ___ de México.\"", ["mi / Soy","yo / Es","tu / Eres","su / Soy"], 0, "Para hablar de ti mismo usas \"mi\" (posesivo) y \"soy\" (primera persona de \"ser\"). → \"Mi nombre es Carlos. Soy de México.\""],
      ["translate", "Traduce al español: \"Nice to meet you!\"", ["¡Mucho gusto!","¿Cuántos años tienes?","¿De dónde eres?","¡Hasta mañana!"], 0, "\"¡Mucho gusto!\" es la frase estándar al conocer a alguien. También se dice \"¡Encantado/a!\""],
      ["mcq", "¿Qué significa \"¿Cómo te llamas?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"¿Cómo te llamas?\" = What's your name? Respuesta: \"Me llamo ___\" o \"Mi nombre es ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena: [profesor / soy / un]", ["Soy un profesor","Un soy profesor","Profesor soy un","Un profesor soy"], 0, "En español el orden natural es: Sujeto (implícito) + Verbo + Complemento. → \"Soy un profesor.\""],
    ]
  },
  {
    id:"es_a1_numbers_colors", level:"A1", title:"Números y colores", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 20 y los colores básicos en español.",
    study: {
      vocab: [
        ["uno, dos, tres... veinte", "one, two, three... twenty"],
        ["rojo, azul, verde, amarillo", "red, blue, green, yellow"],
        ["blanco, negro", "white, black"],
        ["Tengo ___ años", "I am ___ years old", "Se usa el verbo \"tener\", no \"ser\"."]
      ],
      grammar: [
        ["Concordancia de género y número", "Los adjetivos de color concuerdan en género y número con el sustantivo.", "El coche rojo / La casa roja / Los coches rojos."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en español?", ["Quince","Cincuenta","Cinco","Catorce"], 0, "15 = quince. Ojo: 50 = cincuenta. Los números del 11 al 15 tienen formas propias: once, doce, trece, catorce, quince."],
      ["mcq", "¿Qué color es \"rojo\"?", ["Red","Blue","Green","Yellow"], 0, "Rojo = red. Otros colores básicos: azul (blue), verde (green), amarillo (yellow), blanco (white), negro (black).", "🍎 Piensa en una manzana madura."],
      ["fill", "Completa: \"Tengo ___ años.\" (I am 20 years old)", ["veinte","veinte años","veintidós","doce"], 0, "\"Tengo veinte años\" = I am twenty years old. En español la edad se expresa con el verbo \"tener\", no \"ser\"."],
      ["translate", "Traduce: \"The sky is blue.\"", ["El cielo es azul","El cielo es verde","La casa es azul","El mar es azul"], 0, "\"El cielo es azul.\" — cielo = sky, azul = blue. Con colores usamos el verbo \"ser\" para características permanentes."],
      ["mcq", "¿Cómo se dice \"black\" en español?", ["Negro","Blanco","Gris","Marrón"], 0, "Negro = black. Blanco = white, gris = gray, marrón = brown."],
      ["arrange", "Ordena: [gatos / tengo / dos]", ["Tengo dos gatos","Dos tengo gatos","Gatos tengo dos","Dos gatos tengo"], 0, "\"Tengo dos gatos.\" = I have two cats. Verbo (tengo) + cantidad (dos) + sustantivo (gatos)."],
    ]
  },
  {
    id:"es_a1_ser_estar", level:"A1", title:"Ser y estar", emoji:"🧩", xp:35,
    description:"La diferencia clave entre \"ser\" y \"estar\", dos verbos que en inglés son solo \"to be\".",
    study: {
      vocab: [
        ["ser", "to be (permanente)", "Profesión, identidad, características fijas."],
        ["estar", "to be (temporal)", "Estados de ánimo, ubicación."],
        ["cansado, contento, enfermo", "tired, happy, sick"]
      ],
      grammar: [
        ["Ser vs. Estar", "\"Ser\" para lo permanente (identidad, profesión, características). \"Estar\" para lo temporal (estados, ubicación).", "Soy profesor (permanente). / Estoy cansado (temporal)."]
      ]
    },
    ex:[
      ["mcq", "\"Yo ___ estudiante.\" ¿Ser o estar?", ["soy","estoy","es","está"], 0, "Para profesiones y características permanentes se usa \"ser\": \"Yo soy estudiante.\" \"Estar\" se usa para estados temporales o ubicación."],
      ["mcq", "\"Ella ___ cansada hoy.\" ¿Ser o estar?", ["está","es","soy","eres"], 0, "\"Estar\" se usa para estados temporales como el cansancio: \"Ella está cansada hoy.\" Mañana puede no estarlo."],
      ["fill", "Completa: \"Madrid ___ en España.\" (ubicación)", ["está","es","son","están"], 0, "Para ubicación siempre se usa \"estar\": \"Madrid está en España.\""],
      ["translate", "Traduce: \"He is tall.\" (característica permanente)", ["Él es alto","Él está alto","Él es altos","Él está alta"], 0, "La altura es una característica permanente, por eso se usa \"ser\": \"Él es alto.\""],
      ["mcq", "¿Cuándo se usa \"estar\"?", ["Estados temporales y ubicación","Profesiones y nacionalidad","Solo con el clima","Nunca con personas"], 0, "\"Estar\" se usa para estados temporales (cansado, feliz, enfermo) y ubicación (dónde está algo o alguien)."],
      ["arrange", "Ordena: [contenta / muy / estoy]", ["Estoy muy contenta","Muy estoy contenta","Contenta muy estoy","Muy contenta estoy"], 0, "\"Estoy muy contenta.\" = I am very happy. Verbo (estoy) + intensificador (muy) + adjetivo (contenta)."],
    ]
  },
  {
    id:"es_a1_family_home", level:"A1", title:"Familia y hogar", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en español.",
    study: {
      vocab: [
        ["padre, madre", "father, mother"],
        ["hermano, hermana", "brother, sister"],
        ["hijo, hija", "son, daughter"],
        ["dormitorio, cocina, sala", "bedroom, kitchen, living room"],
        ["baño, jardín", "bathroom, garden"]
      ],
      grammar: [
        ["Adjetivos posesivos", "Mi, tu, su, nuestro/a concuerdan en número (y a veces género) con lo que poseen.", "Mi casa es grande. Nuestros hijos son pequeños."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" en español?", ["Madre","Padre","Hermana","Abuela"], 0, "Madre = mother. Padre = father, hermana = sister, abuela = grandmother."],
      ["mcq", "¿Qué habitación es \"la cocina\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "La cocina = kitchen. El dormitorio = bedroom, el baño = bathroom, el jardín = garden."],
      ["fill", "Completa: \"___ hermano vive en Madrid.\" (My brother)", ["Mi","Tu","Su","Mis"], 0, "\"Mi hermano\" = my brother (posesivo singular, un solo poseedor)."],
      ["translate", "Traduce: \"My family is big.\"", ["Mi familia es grande","Mi familia es pequeña","Mis familias son grandes","Su familia es grande"], 0, "\"Mi familia es grande.\" — familia (singular) concuerda con \"es\" y \"mi\" (no \"mis\")."],
      ["mcq", "¿Cómo se dice \"grandparents\" en español?", ["Abuelos","Padres","Tíos","Primos"], 0, "Abuelos = grandparents. Padres = parents, tíos = aunts/uncles, primos = cousins."],
      ["arrange", "Ordena: [tres / tengo / hermanos]", ["Tengo tres hermanos","Tres tengo hermanos","Hermanos tengo tres","Tres hermanos tengo"], 0, "\"Tengo tres hermanos.\" = I have three siblings. Verbo + cantidad + sustantivo."],
    ]
  },
  {
    id:"es_a1_food_restaurant", level:"A1", title:"Comida y restaurantes", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en español.",
    study: {
      vocab: [
        ["el menú", "the menu"],
        ["Quisiera...", "I would like...", "Forma cortés de pedir."],
        ["la cuenta, por favor", "the bill, please"],
        ["el agua, el pan", "water, bread"],
        ["delicioso/a", "delicious"]
      ],
      grammar: [
        ["\"Quisiera\" para pedir con cortesía", "\"Quisiera\" (del verbo querer, forma cortés) es más educado que \"quiero\" al pedir algo.", "Quisiera un café, por favor. (Más cortés que \"Quiero un café\".)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en español?", ["El menú","La cuenta","El plato","La mesa"], 0, "El menú = the menu. La cuenta = the bill, el plato = the plate, la mesa = the table."],
      ["fill", "Completa: \"___ un café, por favor.\" (I would like)", ["Quisiera","Quiero","Quería","Querré"], 0, "\"Quisiera\" es la forma más cortés para pedir algo en un restaurante, aunque \"quiero\" también es válido y común."],
      ["mcq", "¿Qué significa \"la cuenta, por favor\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"La cuenta, por favor\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This dish is delicious.\"", ["Este plato está delicioso","Este plato es delicioso","Esta comida están deliciosa","Este plato delicioso está"], 0, "\"Este plato está delicioso.\" — con \"estar\" para valorar el sabor en el momento (también es válido \"es delicioso\" como cualidad)."],
      ["mcq", "¿Cómo se dice \"waiter\" en español?", ["Mesero/Camarero","Cocinero","Cliente","Dueño"], 0, "Mesero (Latinoamérica) o camarero (España) = waiter. Cocinero = cook, cliente = customer."],
      ["arrange", "Ordena: [agua / quisiera / un / vaso / de]", ["Quisiera un vaso de agua","Un vaso quisiera de agua","Agua quisiera un vaso de","De agua un vaso quisiera"], 0, "\"Quisiera un vaso de agua.\" = I would like a glass of water."],
    ]
  },
  {
    id:"es_a1_daily_routine", level:"A1", title:"Rutina diaria", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en español.",
    study: {
      vocab: [
        ["despertarse", "to wake up"],
        ["levantarse", "to get up"],
        ["desayunar, almorzar, cenar", "to have breakfast/lunch/dinner"],
        ["ir al trabajo", "to go to work"],
        ["todos los días", "every day"]
      ],
      grammar: [
        ["Verbos reflexivos en presente", "Verbos como \"despertarse\" y \"levantarse\" llevan un pronombre reflexivo (me, te, se) que cambia según la persona.", "Yo me despierto a las 7. / Ella se levanta temprano."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["Me despierto a las 7","Te despiertas a las 7","Se despierta a las 7","Despertar a las 7"], 0, "\"Me despierto a las 7.\" — primera persona del verbo reflexivo \"despertarse\": me + despierto."],
      ["fill", "Completa: \"Ella ___ a las 8.\" (gets up)", ["se levanta","me levanto","te levantas","levantar"], 0, "\"Se levanta\" = tercera persona de \"levantarse\" (se + levanta)."],
      ["mcq", "¿Qué significa \"desayunar\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "Desayunar = to have breakfast. Almorzar = to have lunch, cenar = to have dinner."],
      ["translate", "Traduce: \"I go to work at 9.\"", ["Voy al trabajo a las 9","Voy a trabajar las 9","Va al trabajo a las 9","Voy al trabajo las 9"], 0, "\"Voy al trabajo a las 9.\" — \"ir a + lugar\" y \"a las + hora\" para indicar el momento."],
      ["mcq", "¿Cómo se dice \"every day\" en español?", ["Todos los días","Un día","Algún día","El otro día"], 0, "Todos los días = every day. Un día = one day, algún día = someday."],
      ["arrange", "Ordena: [las / a / duermo / diez]", ["Duermo a las diez","A las diez duermo","Diez duermo a las","Las diez a duermo"], 0, "\"Duermo a las diez.\" = I sleep at ten. Verbo + preposición + hora."],
    ]
  },
  {
    id:"es_a2_shopping_clothes", level:"A2", title:"De compras y ropa", emoji:"🛍️", xp:40,
    description:"Aprende a comprar ropa, preguntar precios y tallas en español.",
    study: {
      vocab: [
        ["la camisa, la camiseta", "shirt, t-shirt"],
        ["el pantalón, la falda", "pants, skirt"],
        ["los zapatos", "shoes"],
        ["¿Cuánto cuesta?", "How much does it cost?"],
        ["la talla", "size"],
        ["probarse (algo)", "to try on (something)"]
      ],
      grammar: [
        ["Comparativos: más/menos...que", "Se usan para comparar dos cosas.", "Esta camisa es más barata que aquella."],
        ["El verbo \"quedar\" con ropa", "\"Quedar\" describe cómo le sienta la ropa a alguien (bien, mal, grande, pequeña).", "Estos zapatos me quedan pequeños."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"How much does it cost?\" en español?", ["¿Cuánto cuesta?","¿Qué talla es?","¿Dónde está?","¿Te gusta?"], 0, "\"¿Cuánto cuesta?\" se usa para preguntar el precio de algo."],
      ["fill", "Completa: \"Esta falda es ___ cara ___ aquella.\" (more...than)", ["más / que","menos / de","tan / como","muy / que"], 0, "\"Más...que\" se usa para comparaciones de superioridad: \"más cara que\" = more expensive than."],
      ["mcq", "¿Qué significa \"probarse la ropa\"?", ["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], 0, "\"Probarse\" = to try on. Se usa antes de comprar, para ver si la talla es correcta."],
      ["translate", "Traduce: \"These shoes are too small for me.\"", ["Estos zapatos me quedan pequeños","Estos zapatos son grandes","Esta ropa es cara","Estos zapatos cuestan mucho"], 0, "\"Me quedan pequeños\" describe cómo le sienta la prenda a la persona, no una característica del objeto en sí."],
      ["mcq", "¿Cómo se dice \"shirt\" en español?", ["Camisa","Pantalón","Falda","Zapato"], 0, "Camisa = shirt. Pantalón = pants, falda = skirt, zapato = shoe."],
      ["arrange", "Ordena: [talla / mi / es / esta]", ["Esta es mi talla","Mi talla es esta","Es esta mi talla","Talla esta es mi"], 0, "\"Esta es mi talla.\" = This is my size. Sujeto (esta) + verbo (es) + posesivo + sustantivo."],
    ]
  },
  {
    id:"es_a2_weather_seasons", level:"A2", title:"El clima y las estaciones", emoji:"🌦️", xp:40,
    description:"Habla del clima y las estaciones del año en español.",
    study: {
      vocab: [
        ["hace calor / frío", "it's hot / cold"],
        ["llueve, nieva", "it rains, it snows"],
        ["el verano, el invierno, la primavera, el otoño", "summer, winter, spring, autumn"],
        ["está nublado / soleado", "it's cloudy / sunny"]
      ],
      grammar: [
        ["Verbos impersonales del clima", "\"Hacer\", \"llover\" y \"nevar\" se usan en tercera persona sin sujeto explícito.", "Hace mucho calor hoy. Está lloviendo."],
        ["Estar + gerundio (presente continuo)", "Describe una acción en curso en este momento.", "Está lloviendo ahora mismo."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"it's cold\" en español?", ["Hace frío","Hace calor","Está soleado","Llueve"], 0, "Hace frío = it's cold. Hace calor = it's hot."],
      ["fill", "Completa: \"En invierno, a veces ___.\" (it snows)", ["nieva","llueve","hace calor","está soleado"], 0, "Nieva = it snows, del verbo \"nevar\", típico del invierno."],
      ["mcq", "¿Qué estación sigue a la primavera?", ["Verano","Invierno","Otoño","Primavera"], 0, "El orden de las estaciones es: primavera, verano, otoño, invierno."],
      ["translate", "Traduce: \"It's raining right now.\"", ["Está lloviendo ahora mismo","Llueve mañana","Hace frío ahora","Va a llover"], 0, "\"Está lloviendo\" (presente continuo) describe una acción en curso; \"ahora mismo\" refuerza que es en este momento."],
      ["mcq", "¿Cómo se dice \"sunny\" en español?", ["Soleado","Nublado","Lluvioso","Nevado"], 0, "Soleado = sunny. Nublado = cloudy, lluvioso = rainy, nevado = snowy."],
      ["arrange", "Ordena: [mucho / hoy / calor / hace]", ["Hace mucho calor hoy","Hoy hace mucho calor","Calor hace mucho hoy","Mucho hace calor hoy"], 0, "\"Hace mucho calor hoy.\" = It's very hot today. Verbo impersonal (hace) + intensificador + sustantivo + tiempo."],
    ]
  },
  {
    id:"es_a2_preterite_yesterday", level:"A2", title:"Ayer: el pretérito", emoji:"📅", xp:45,
    description:"Aprende a hablar de acciones terminadas en el pasado con el pretérito.",
    study: {
      vocab: [
        ["ayer, anoche, la semana pasada", "yesterday, last night, last week"],
        ["comí, comiste, comió", "I ate, you ate, he/she ate"],
        ["fui, fuiste, fue", "I went, you went, he/she went"],
        ["¿Qué hiciste?", "What did you do?"]
      ],
      grammar: [
        ["Pretérito indefinido regular", "Terminaciones -ar: -é, -aste, -ó. Terminaciones -er/-ir: -í, -iste, -ió.", "Hablé con ella. Comí una manzana."],
        ["El verbo \"ir\" en pretérito (irregular)", "fui, fuiste, fue, fuimos, fuisteis, fueron.", "Ayer fui al cine."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I ate\" en español?", ["Comí","Como","Comeré","Comiendo"], 0, "Comí = I ate (pretérito). Como = I eat (presente), comeré = I will eat (futuro)."],
      ["fill", "Completa: \"Ayer ___ al cine con mis amigos.\" (I went)", ["fui","voy","iré","iba"], 0, "\"Fui\" es la primera persona del pretérito irregular de \"ir\": fui, fuiste, fue..."],
      ["mcq", "¿Cuál es la terminación correcta de \"hablar\" en pretérito para \"yo\"?", ["-é (hablé)","-o (hablo)","-aba (hablaba)","-ando (hablando)"], 0, "Los verbos -ar terminan en -é para \"yo\" en pretérito: hablé, caminé, estudié."],
      ["translate", "Traduce: \"What did you do last night?\"", ["¿Qué hiciste anoche?","¿Qué haces ahora?","¿Qué harás mañana?","¿Qué hacías siempre?"], 0, "\"¿Qué hiciste?\" usa el pretérito de \"hacer\" para preguntar por una acción terminada."],
      ["mcq", "¿Cómo se dice \"last week\" en español?", ["La semana pasada","Esta semana","La próxima semana","Todos los días"], 0, "La semana pasada = last week. Esta semana = this week, la próxima semana = next week."],
      ["arrange", "Ordena: [una / comí / manzana]", ["Comí una manzana","Una comí manzana","Manzana una comí","Comí manzana una"], 0, "\"Comí una manzana.\" = I ate an apple. Verbo + artículo + sustantivo."],
    ]
  },
  {
    id:"es_b1_reading_notices", level:"B1", title:"Lectura y decisiones", emoji:"📌", xp:55,
    description:"Extrae información práctica de avisos y mensajes cotidianos.",
    study:{
      vocab:[
        ["disponible bajo petición","available on request"],
        ["sujeto a cambios","subject to change"],
        ["cumplir los requisitos","to be eligible"],
        ["fecha límite","deadline"]
      ],
      grammar:[
        ["Lectura selectiva","Busca primero el propósito del texto, la condición y la acción requerida.","Las reservas se confirman solo después de recibir el pago."]
      ]
    },
    ex:[
      ["mcq","Aviso: \"Las plazas del taller están reservadas para socios hasta el viernes; después se liberarán las que queden.\" ¿Qué debe hacer una persona que no es socia?",["Esperar hasta el viernes para saber si quedan plazas.","Reservar hoy porque tiene prioridad.","Pagar una cuota obligatoria antes del viernes.","Asumir que el taller está cancelado."],0,"El aviso indica prioridad temporal para socios, no exclusividad permanente."],
      ["mcq","Mensaje: \"Envíe el formulario antes de las 17:00 del jueves. Las solicitudes tardías solo se considerarán si quedan plazas.\" ¿Cuál es la acción más segura?",["Enviar el formulario antes de las 17:00 del jueves.","Esperar a que confirmen que quedan plazas.","Enviar el viernes porque siempre se aceptan solicitudes tardías.","Llamar para cancelar la solicitud."],0,"\"Antes de\" marca una fecha límite clara; \"solo si\" no garantiza la aceptación tardía."],
      ["fill","Completa: \"Los candidatos deben ser ___ para el programa antes de solicitar la beca.\"",["elegibles","disponibles","sujetos","límites"],0,"\"Elegible\" significa que cumple los requisitos necesarios."],
      ["writing","Escribe un correo de 45-60 palabras preguntando si todavía puedes solicitar una plaza después de la fecha límite.",[],["tardía","solicitud","disponible"],"Incluye saludo, petición clara y cierre apropiado.","Escribes al coordinador de un curso que cerró ayer."]
    ]
  },
  {
    id:"es_b1_opinions", level:"B1", title:"Opiniones y puntos de vista", emoji:"🎧", xp:58,
    description:"Distingue hechos, preferencias y razones en conversaciones cotidianas.",
    study:{
      vocab:[
        ["preferiría","I would rather"],
        ["resulta que","it turns out"],
        ["vale la pena","it's worth it"],
        ["desanimar a alguien","to put someone off"]
      ],
      grammar:[
        ["Opinión con justificación","Una respuesta B1 debe incluir una opinión y una razón.","Preferiría viajar en tren porque puedo trabajar durante el viaje."]
      ]
    },
    ex:[
      ["mcq","Lee: \"Maya esperaba que el curso fuera difícil, pero resulta que el feedback semanal lo hace manejable.\" ¿Qué opina Maya?",["El curso es exigente, pero el apoyo le ayuda a seguirlo.","El curso es demasiado fácil.","El feedback hace que el curso sea más difícil.","Dejó el curso por falta de apoyo."],0,"Contrasta una expectativa inicial con una evaluación final más positiva."],
      ["mcq","¿Qué respuesta expresa preferencia y motivo?",["Preferiría reunirme en línea porque ahorra tiempo de viaje.","Me reúno en línea ayer.","Las reuniones en línea son un tiempo de viaje.","Prefiero porque reuniones."],0,"La estructura incluye preferencia, opción y justificación."],
      ["fill","Completa: \"El precio era alto, pero la experiencia ___ la pena.\"",["valió","prefirió","resultó","desanimó"],0,"La expresión fija es \"valer la pena\"; en pasado: \"valió la pena\"."],
      ["speaking","Habla durante 45-60 palabras: compara estudiar solo y estudiar con otras personas. Da una preferencia, una razón y una posible desventaja.",[],["prefiero","porque","sin embargo"],"Organiza tu respuesta: comparación, preferencia, razón y reserva.","Conversación con un compañero de clase."]
    ]
  },
  {
    id:"es_b1_storytelling", level:"B1", title:"Contar una experiencia", emoji:"🗺️", xp:60,
    description:"Narra experiencias pasadas combinando pretérito e imperfecto.",
    study:{
      vocab:[
        ["al principio","at first"],
        ["finalmente","eventually"],
        ["inesperadamente","unexpectedly"],
        ["darse cuenta","to realise"]
      ],
      grammar:[
        ["Pretérito vs. imperfecto","El imperfecto describe el fondo o una acción en curso; el pretérito narra acciones completadas.","Mientras esperábamos el autobús, empezó a llover."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración usa correctamente pretérito e imperfecto?",["Mientras caminábamos por el parque, vimos un accidente.","Mientras caminamos por el parque, veíamos un accidente.","Mientras caminábamos por el parque, veíamos un accidente ayer.","Caminamos por el parque mientras vimos."],0,"El fondo (caminábamos) va en imperfecto; la acción puntual (vimos) va en pretérito."],
      ["fill","Completa: \"No ___ cuenta de lo tarde que era hasta que miré el móvil.\"",["me di","me daba","doy","daba"],0,"\"Darse cuenta\" en pretérito para una acción puntual: \"me di cuenta\"."],
      ["translate","Traduce: \"At first I was nervous, but eventually I enjoyed the experience.\"",["Al principio estaba nervioso, pero al final disfruté la experiencia.","Al principio estuve nervioso, pero al final disfrutaba la experiencia.","Al principio era nervioso, pero al final disfruté la experiencia.","Al principio estaba nervioso, pero al final disfrutaba de experiencia."],0,"El estado de ánimo de fondo va en imperfecto (\"estaba\"); la acción completa va en pretérito (\"disfruté\")."],
      ["writing","Escribe una historia de 80-100 palabras sobre un plan que cambió inesperadamente.",[],["al principio","pero","finalmente"],"Revisa que cada parte avance la historia y que uses los tiempos verbales de forma consistente.","Un viaje corto que no salió como esperabas."]
    ]
  },
  {
    id:"es_b1_agreement", level:"B1", title:"Discutir y llegar a un acuerdo", emoji:"🤝", xp:62,
    description:"Propón opciones, responde a ideas ajenas y negocia una decisión.",
    study:{
      vocab:[
        ["¿y si...?","shall we...?"],
        ["entiendo tu punto","I see your point"],
        ["¿qué tal si...?","how about...?"],
        ["un término medio","a compromise"]
      ],
      grammar:[
        ["Lenguaje de colaboración","Para negociar: propone, responde y busca una alternativa compartida.","Entiendo tu punto sobre el coste; ¿qué tal si elegimos la opción más barata?"]
      ]
    },
    ex:[
      ["mcq","¿Qué respuesta construye un acuerdo?",["Entiendo tu punto sobre el coste; ¿qué tal si invitamos a menos gente?","Tu idea es mala, así que gana la mía.","No entiendo ningún punto.","La opción barata es la gente."],0,"Reconoce una idea y propone un compromiso concreto."],
      ["fill","Completa: \"¿___ nos vemos en la biblioteca después de clase?\"",["Y si","Sería","Hizo","Ha"],0,"\"¿Y si...?\" es una forma común de proponer algo."],
      ["mcq","¿Qué frase expresa desacuerdo cortés?",["No estoy seguro de que funcione, porque el lugar cierra temprano.","Eso nunca va a funcionar.","Tu plan es terrible.","No, obviamente no."],0,"El desacuerdo se suaviza y se justifica con una razón."],
      ["speaking","Habla durante 45-60 palabras: propón un plan de fin de semana, responde a una posible objeción y ofrece un compromiso.",[],["propongo","porque","término medio"],"Incluye una propuesta concreta, una razón y una respuesta colaborativa.","Organizas una actividad con un amigo con poco presupuesto."]
    ]
  },
  {
    id:"es_b1_future_plans", level:"B1", title:"Planes y futuro", emoji:"🗓️", xp:60,
    description:"Habla de planes, intenciones y predicciones usando distintas formas de futuro.",
    study:{
      vocab:[
        ["tengo pensado","I'm planning to"],
        ["dentro de poco","soon"],
        ["en cuanto pueda","as soon as I can"],
        ["es posible que","it's possible that"]
      ],
      grammar:[
        ["Futuro simple vs. ir a + infinitivo","\"Ir a + infinitivo\" expresa planes ya decididos; el futuro simple expresa predicciones o decisiones espontáneas.","Voy a mudarme el mes que viene. / Creo que lloverá mañana."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración expresa un plan ya decidido?",["Voy a empezar un curso de italiano en septiembre.","Empezaré un curso si tengo tiempo.","Creo que empezaré algún curso.","Empezaba un curso el año pasado."],0,"\"Ir a + infinitivo\" se usa para planes ya decididos."],
      ["fill","Completa: \"En cuanto ___ el informe, te lo envío.\"",["termine","termino","terminaré","terminaba"],0,"Tras \"en cuanto\" referido al futuro se usa el subjuntivo presente: \"termine\"."],
      ["translate","Traduce: \"As soon as I finish the project, I'll call you.\"",["En cuanto termine el proyecto, te llamaré.","Cuando terminaba el proyecto, te llamo.","En cuanto termino el proyecto, te llamaba.","Si termino el proyecto, te llamaré."],0,"\"En cuanto\" + subjuntivo presente expresa una condición futura."],
      ["writing","Escribe 45-60 palabras sobre tus planes para el próximo año. Usa al menos dos expresiones de futuro.",[],["tengo pensado","en cuanto","es posible"],"Combina al menos dos formas de hablar del futuro y justifica un plan.","Le cuentas tus planes a un amigo."]
    ]
  },
  {
    id:"es_b1_complaints_requests", level:"B1", title:"Quejas y peticiones corteses", emoji:"✉️", xp:60,
    description:"Formula quejas y peticiones formales usando el condicional de cortesía.",
    study:{
      vocab:[
        ["me gustaría","I would like"],
        ["¿podría...?","could you...?"],
        ["lamento informarle","I regret to inform you"],
        ["presentar una queja","to file a complaint"]
      ],
      grammar:[
        ["Condicional de cortesía","\"Gustaría\" y \"podría\" suavizan peticiones y quejas formales.","Me gustaría saber por qué el pedido llegó tarde."]
      ]
    },
    ex:[
      ["mcq","¿Qué frase es una queja formal y cortés?",["Me gustaría saber por qué el paquete llegó con una semana de retraso.","¡Esto es un desastre total!","Su empresa nunca hace nada bien.","No pienso pagar nada."],0,"Formula la queja de forma indirecta y respetuosa, sin perder claridad."],
      ["fill","Completa: \"¿___ enviarme una copia de la factura, por favor?\"",["Podría","Puede","Pudo","Puedo"],0,"\"Podría\" en condicional suaviza la petición y resulta más formal."],
      ["translate","Traduce: \"I would like to file a complaint about the service.\"",["Me gustaría presentar una queja sobre el servicio.","Quiero quejar sobre el servicio.","Me gusta presentar una queja del servicio.","Presentaría una queja el servicio."],0,"\"Me gustaría\" + infinitivo es la fórmula estándar de cortesía."],
      ["writing","Escribe un correo de queja de 50-70 palabras sobre un pedido que llegó incompleto. Usa el condicional de cortesía.",[],["me gustaría","podría","lamento"],"Explica el problema, formula una petición clara y cierra de forma cortés.","Un pedido online llegó con dos artículos faltantes."]
    ]
  },
  {
    id:"es_b2_hypotheticals", level:"B2", title:"Hipótesis y condiciones improbables", emoji:"🌀", xp:75,
    description:"Expresa hipótesis poco probables o irreales con si + imperfecto de subjuntivo.",
    study:{
      vocab:[
        ["si tuviera","if I had"],
        ["ojalá","I wish / hopefully"],
        ["en caso de que","in case"],
        ["a menos que","unless"]
      ],
      grammar:[
        ["Condicional hipotético (tipo 2)","Para hipótesis poco probables o irreales en el presente: si + imperfecto de subjuntivo + condicional simple.","Si tuviera más tiempo, viajaría más a menudo."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración expresa una hipótesis poco probable correctamente?",["Si tuviera más dinero, compraría una casa más grande.","Si tengo más dinero, compraría una casa más grande.","Si tuviera más dinero, compro una casa más grande.","Si tendría más dinero, compraría una casa más grande."],0,"El tipo 2 exige imperfecto de subjuntivo en la condición y condicional simple en la consecuencia."],
      ["fill","Completa: \"A menos que ___ un esfuerzo extra, no terminaremos a tiempo.\"",["hagamos","hacemos","haríamos","hicimos"],0,"\"A menos que\" siempre va seguido de subjuntivo."],
      ["mcq","¿Cuál es la mejor paráfrasis de \"Si yo fuera tú, no aceptaría esa oferta\"?",["Es un consejo hipotético: el hablante no aceptaría la oferta en el lugar del oyente.","Es una orden directa.","Es una descripción de un hecho pasado.","Es una promesa para el futuro."],0,"La estructura hipotética expresa un consejo, no un hecho ni una orden."],
      ["writing","Escribe 60-80 palabras: describe qué harías de forma diferente si pudieras repetir un año de tu vida. Usa al menos dos hipótesis con \"si\".",[],["si tuviera","en caso de que","a menos que"],"Revisa que cada hipótesis combine correctamente imperfecto de subjuntivo y condicional.","Reflexión personal para un blog."]
    ]
  },
  {
    id:"es_b2_reported_speech", level:"B2", title:"Estilo indirecto", emoji:"💬", xp:78,
    description:"Reporta lo que otros dijeron adaptando tiempos verbales y marcadores temporales.",
    study:{
      vocab:[
        ["dijo que","he/she said that"],
        ["explicó que","he/she explained that"],
        ["preguntó si","he/she asked whether"],
        ["añadió que","he/she added that"]
      ],
      grammar:[
        ["Estilo indirecto","Al reportar en pasado, el futuro se convierte en condicional y el presente suele pasar a imperfecto.","Ella dijo: 'Llegaré tarde' → Ella dijo que llegaría tarde."]
      ]
    },
    ex:[
      ["mcq","Cita directa: \"Terminaré el informe mañana.\" ¿Cuál es el estilo indirecto correcto?",["Dijo que terminaría el informe al día siguiente.","Dijo que terminará el informe mañana.","Dijo que terminaba el informe mañana.","Dijo que termine el informe al día siguiente."],0,"El futuro de la cita original pasa a condicional; \"mañana\" cambia a \"al día siguiente\"."],
      ["fill","Completa: \"Me preguntó si ___ disponible para la reunión del lunes.\"",["estaba","estoy","estaré","esté"],0,"El presente de la cita original ('estás') pasa a imperfecto en estilo indirecto: 'estaba'."],
      ["mcq","¿Qué cambia normalmente al pasar del estilo directo al indirecto en pasado?",["El tiempo verbal y a veces los marcadores temporales (mañana → al día siguiente).","Solo el sujeto de la oración.","Nada cambia nunca.","Solo el orden de las palabras."],0,"El tiempo verbal se desplaza hacia el pasado y algunos marcadores temporales cambian."],
      ["writing","Reporta en estilo indirecto (50-70 palabras) una conversación reciente en la que alguien te contó sus planes.",[],["dijo que","explicó que","añadió que"],"Adapta correctamente los tiempos verbales y los marcadores temporales.","Le cuentas a un amigo lo que te dijo un compañero de trabajo."]
    ]
  },
  {
    id:"es_b2_passive_impersonal", level:"B2", title:"Voz pasiva y pasiva refleja", emoji:"⚙️", xp:76,
    description:"Describe procesos y hechos sin enfatizar quién los realiza.",
    study:{
      vocab:[
        ["ser + participio","to be + past participle (passive)"],
        ["se + verbo","impersonal/passive 'se' construction"],
        ["llevarse a cabo","to be carried out"],
        ["encargarse de","to be in charge of"]
      ],
      grammar:[
        ["Voz pasiva y pasiva refleja","La pasiva con 'ser' destaca el agente; la pasiva refleja con 'se' es más natural cuando el agente no importa.","El proyecto fue aprobado por el comité. / Se aprobó el proyecto."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración usa correctamente la pasiva refleja?",["Se firmaron los contratos ayer por la tarde.","Se firmó los contratos ayer por la tarde.","Fue firmado los contratos ayer.","Se firmaba los contratos por alguien."],0,"El verbo concuerda en plural con 'los contratos': 'se firmaron'."],
      ["fill","Completa: \"El nuevo edificio ___ por una empresa internacional.\"",["fue diseñado","se diseñó","diseñó","diseñaba"],0,"Cuando el agente es explícito ('por una empresa'), se prefiere la pasiva con 'ser'."],
      ["mcq","¿Cuándo se prefiere la pasiva refleja sobre la pasiva con 'ser'?",["Cuando el agente no es relevante o no se conoce.","Cuando se quiere nombrar siempre al agente.","Nunca se usa en español natural.","Solo en textos literarios antiguos."],0,"La pasiva refleja es la forma natural cuando el agente no importa."],
      ["writing","Describe en 50-70 palabras un proceso (por ejemplo, cómo se organiza un evento) usando al menos dos construcciones pasivas o impersonales.",[],["se + verbo","fue + participio","llevarse a cabo"],"Usa al menos dos construcciones distintas de forma coherente.","Explicas un procedimiento a alguien nuevo en el equipo."]
    ]
  },
  {
    id:"es_b2_doubt_probability", level:"B2", title:"Duda, probabilidad y certeza", emoji:"❓", xp:78,
    description:"Distingue cuándo usar subjuntivo o indicativo según el grado de certeza.",
    study:{
      vocab:[
        ["dudo que","I doubt that"],
        ["no creo que","I don't think that"],
        ["es probable que","it's likely that"],
        ["puede que","it might be that"]
      ],
      grammar:[
        ["Subjuntivo con duda y probabilidad","Los verbos y expresiones de duda o negación de certeza requieren subjuntivo en la subordinada.","Dudo que el proyecto esté listo para el viernes."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración es gramaticalmente correcta?",["No creo que la propuesta sea viable a corto plazo.","No creo que la propuesta es viable a corto plazo.","No creo que la propuesta será viable a corto plazo.","No creo que la propuesta viable a corto plazo."],0,"\"No creo que\" niega certeza, por lo que exige subjuntivo: \"sea\"."],
      ["fill","Completa: \"Puede que ya ___ la decisión cuando lleguemos.\"",["hayan tomado","han tomado","tomarán","tomaron"],0,"\"Puede que\" + subjuntivo (aquí, perfecto de subjuntivo para una acción anterior)."],
      ["mcq","¿Qué expresión NO requiere subjuntivo en la cláusula siguiente?",["Estoy seguro de que...","Dudo que...","No creo que...","Es posible que..."],0,"\"Estoy seguro de que\" expresa certeza, por lo que se usa indicativo, no subjuntivo."],
      ["speaking","Habla 60-80 palabras: da tu opinión sobre si el teletrabajo será la norma en el futuro. Usa al menos una expresión de duda y una de certeza.",[],["dudo que","es probable que","estoy seguro de que"],"Alterna correctamente subjuntivo e indicativo según el grado de certeza.","Debate informal sobre el futuro del trabajo."]
    ]
  },
  {
    id:"es_b2_contrast_connectors", level:"B2", title:"Conectores de contraste", emoji:"⚖️", xp:76,
    description:"Usa 'aunque' y otros conectores para matizar ideas y contrastar hechos.",
    study:{
      vocab:[
        ["aunque","although / even though"],
        ["a pesar de que","despite the fact that"],
        ["sin embargo","however"],
        ["no obstante","nevertheless"]
      ],
      grammar:[
        ["Conectores de contraste","'Aunque' va con indicativo si el hecho es real y conocido, y con subjuntivo si es hipotético o no confirmado.","Aunque llovió, salimos a caminar. / Aunque llueva mañana, saldremos a caminar."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración usa correctamente 'aunque' para un hecho ya confirmado?",["Aunque el vuelo se retrasó, llegamos a tiempo a la reunión.","Aunque el vuelo se retrase, llegamos a tiempo a la reunión.","Aunque el vuelo retrasara, llegamos a tiempo.","Aunque el vuelo se retrasa mañana, llegamos ayer."],0,"Para un hecho ya confirmado, 'aunque' va con indicativo: 'se retrasó'."],
      ["fill","Completa: \"___ el informe estaba incompleto, lo enviamos antes de la fecha límite.\"",["A pesar de que","Sin embargo","No obstante","Es probable que"],0,"\"A pesar de que\" introduce una cláusula subordinada de contraste con un hecho real."],
      ["mcq","¿Qué conector suele iniciar una oración nueva en vez de una cláusula subordinada dentro de la misma oración?",["Sin embargo","Aunque","A pesar de que","Puesto que"],0,"'Sin embargo' funciona como conector entre oraciones, no como subordinante."],
      ["writing","Escribe un párrafo de 60-80 palabras presentando una opinión y matizándola con al menos dos conectores de contraste distintos.",[],["aunque","sin embargo","no obstante"],"Combina correctamente los conectores subordinantes y los que unen oraciones.","Opinión sobre un tema de actualidad para un foro."]
    ]
  },
  {
    id:"es_b2_debate_nuance", level:"B2", title:"Argumentar con matices", emoji:"🗣️", xp:80,
    description:"Construye argumentos que reconocen puntos contrarios antes de defender una postura.",
    study:{
      vocab:[
        ["por un lado / por otro lado","on one hand / on the other hand"],
        ["si bien es cierto que","while it's true that"],
        ["cabe destacar que","it's worth noting that"],
        ["en definitiva","ultimately / in short"]
      ],
      grammar:[
        ["Argumentación matizada","Un buen argumento B2 reconoce el punto contrario antes de defender una postura.","Si bien es cierto que el plan reduce costes, cabe destacar que también implica riesgos."]
      ]
    },
    ex:[
      ["mcq","¿Qué estructura muestra un argumento bien matizado?",["Si bien es cierto que el proyecto es caro, a largo plazo podría ahorrar recursos.","El proyecto es caro y punto.","El proyecto no cuesta nada, obviamente.","No hay ningún argumento en contra del proyecto."],0,"Reconoce un punto en contra antes de matizarlo con una ventaja a largo plazo."],
      ["fill","Completa: \"___, la propuesta tiene más ventajas que inconvenientes.\"",["En definitiva","Aunque","A menos que","Dudo que"],0,"\"En definitiva\" se usa para cerrar un argumento con una conclusión general."],
      ["mcq","¿Qué función cumple 'cabe destacar que' en un argumento?",["Señala un punto que el hablante considera especialmente relevante.","Introduce una hipótesis irreal.","Expresa duda total sobre el tema.","Cierra la conversación abruptamente."],0,"Es una fórmula para resaltar un punto relevante dentro del argumento."],
      ["writing","Escribe un párrafo argumentativo de 70-90 palabras sobre un tema debatible (por ejemplo, el trabajo remoto). Reconoce un punto en contra antes de defender tu postura.",[],["por un lado","si bien es cierto","en definitiva"],"Estructura: reconocimiento del punto contrario, tu postura y una conclusión.","Contribución a un debate escrito en clase."]
    ]
  },
  {
    id:"es_c1_register_nuance", level:"C1", title:"Registro y matiz en textos formales", emoji:"🎩", xp:88,
    description:"Usa atenuación (hedging) para expresar afirmaciones prudentes en registro formal.",
    study:{
      vocab:[
        ["cabría señalar que","it would be worth pointing out that"],
        ["convendría matizar que","it would be worth clarifying that"],
        ["tender a pensar que","to be inclined to think that"],
        ["en términos generales","broadly speaking"]
      ],
      grammar:[
        ["Atenuación (hedging) en registro formal","El condicional atenúa afirmaciones y las hace más prudentes y formales que el presente de indicativo.","Cabría argumentar que la medida es prematura, aunque los datos aún son limitados."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración suena más apropiada en un informe formal?",["Cabría señalar que los resultados, aunque prometedores, requieren más análisis.","Los resultados son geniales, punto.","Esto está clarísimo para cualquiera.","No hay nada más que decir sobre esto."],0,"El registro formal favorece la atenuación y la prudencia argumentativa."],
      ["fill","Completa: \"___ matizar que el estudio se basa en una muestra reducida.\"",["Convendría","Es obvio","Nunca","Siempre"],0,"\"Convendría\" introduce una recomendación atenuada, propia del registro formal."],
      ["mcq","¿Qué efecto produce usar el condicional en vez del presente en un informe? (\"Cabría concluir que...\" vs. \"Concluimos que...\")",["Suaviza la afirmación y deja espacio a la duda razonable.","Hace la afirmación más categórica y segura.","Cambia el significado por completo.","No tiene ningún efecto estilístico."],0,"El condicional atenúa la afirmación sin negarla."],
      ["writing","Redacta 60-80 palabras de un informe breve que evalúe una propuesta, usando al menos dos expresiones de atenuación (hedging).",[],["cabría señalar","convendría","tendería a pensar"],"El registro formal prioriza la prudencia argumentativa sobre la certeza absoluta.","Informe interno para un comité directivo."]
    ]
  },
  {
    id:"es_c1_subjunctive_past", level:"C1", title:"Subjuntivo pluscuamperfecto", emoji:"⏳", xp:90,
    description:"Expresa hipótesis irreales en el pasado con concordancia temporal compleja.",
    study:{
      vocab:[
        ["si hubiera sabido","if I had known"],
        ["era imposible que","it was impossible that"],
        ["habría bastado con","it would have sufficed to"],
        ["no fue hasta que","it wasn't until that"]
      ],
      grammar:[
        ["Subjuntivo pluscuamperfecto y concordancia temporal","Para hipótesis irreales en el pasado: si + pluscuamperfecto de subjuntivo + condicional compuesto.","Si hubiera sabido el riesgo, habría actuado de otra manera."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración expresa correctamente una hipótesis irreal en el pasado?",["Si hubiéramos revisado el contrato a tiempo, habríamos evitado el problema.","Si revisamos el contrato a tiempo, habríamos evitado el problema.","Si hubiéramos revisado el contrato a tiempo, evitamos el problema.","Si habríamos revisado el contrato, habríamos evitado el problema."],0,"Se necesita pluscuamperfecto de subjuntivo en la condición y condicional compuesto en la consecuencia."],
      ["fill","Completa: \"Era imposible que el equipo ___ el proyecto sin más recursos.\"",["hubiera terminado","había terminado","terminaría","terminara ya"],0,"Tras 'era imposible que' (pasado + duda) se usa subjuntivo; para una acción anterior, pluscuamperfecto de subjuntivo."],
      ["mcq","¿Qué distingue al pluscuamperfecto de subjuntivo del imperfecto de subjuntivo?",["El pluscuamperfecto sitúa la hipótesis en un momento anterior a otro punto del pasado.","No hay ninguna diferencia real entre ambos.","El pluscuamperfecto solo se usa en el futuro.","El imperfecto de subjuntivo no existe en español."],0,"El pluscuamperfecto añade una capa temporal anterior dentro del pasado."],
      ["writing","Escribe 70-90 palabras sobre una decisión pasada que cambiarías. Usa al menos dos estructuras con pluscuamperfecto de subjuntivo.",[],["si hubiera","habría bastado","no fue hasta que"],"Revisa que las estructuras combinen correctamente pluscuamperfecto de subjuntivo y condicional compuesto.","Reflexión retrospectiva sobre una decisión profesional."]
    ]
  },
  {
    id:"es_c1_nominalization", level:"C1", title:"Nominalización y estilo formal", emoji:"📑", xp:86,
    description:"Convierte verbos en sustantivos para lograr un registro académico y técnico.",
    study:{
      vocab:[
        ["la implementación de","the implementation of"],
        ["la ausencia de","the absence of"],
        ["dar lugar a","to give rise to"],
        ["conllevar","to entail"]
      ],
      grammar:[
        ["Nominalización para un registro formal","Convertir verbos en sustantivos (implementar → la implementación) es típico de textos académicos y técnicos, y permite mayor precisión y densidad informativa.","La implementación tardía de la medida dio lugar a retrasos generalizados."]
      ]
    },
    ex:[
      ["mcq","¿Qué reformulación es más propia de un informe técnico?",["La ausencia de coordinación entre los equipos dio lugar a duplicidad de tareas.","No coordinaron y por eso hicieron cosas repetidas.","Los equipos no se coordinaron, así que hubo un lío.","Fue un desastre porque nadie habló con nadie."],0,"La nominalización condensa la información en un tono más objetivo."],
      ["fill","Completa: \"La ___ de nuevas tecnologías conlleva costes iniciales elevados.\"",["adopción","adoptar","adoptando","adoptado"],0,"El sustantivo 'adopción' (nominalización de 'adoptar') encaja en la estructura formal con artículo."],
      ["mcq","¿Qué ventaja aporta la nominalización en un texto técnico?",["Permite condensar información y adoptar un tono más objetivo e impersonal.","Hace el texto más informal y cercano.","Elimina toda posibilidad de precisión.","No aporta ninguna ventaja real."],0,"La nominalización es clave para la densidad y objetividad del registro técnico."],
      ["writing","Reescribe en 60-80 palabras un párrafo informal sobre un problema laboral, transformándolo en un fragmento de informe formal usando al menos tres nominalizaciones.",[],["la implementación","la ausencia de","dar lugar a"],"Identifica los verbos clave y conviértelos en sustantivos para un tono más formal.","Convertir una queja informal en un informe interno."]
    ]
  },
  {
    id:"es_c1_causal_connectors", level:"C1", title:"Conectores complejos de causa-consecuencia", emoji:"🔗", xp:88,
    description:"Encadena causas y consecuencias con precisión usando conectores avanzados.",
    study:{
      vocab:[
        ["dado que","given that"],
        ["en la medida en que","insofar as"],
        ["de ahí que","hence / which is why"],
        ["so pena de","under penalty of / at the risk of"]
      ],
      grammar:[
        ["Conectores complejos de causa-consecuencia","'De ahí que' introduce una consecuencia lógica y requiere subjuntivo; 'dado que' y 'en la medida en que' introducen causas con indicativo.","Dado que los costes aumentaron, de ahí que se revisara el presupuesto."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración usa correctamente 'de ahí que'?",["Los datos eran contradictorios, de ahí que se retrasara la publicación del informe.","Los datos eran contradictorios, de ahí que se retrasó la publicación.","De ahí que los datos eran contradictorios, se retrasó el informe.","Los datos, de ahí que contradictorios, retrasaron el informe."],0,"'De ahí que' introduce una consecuencia lógica y exige subjuntivo: 'se retrasara'."],
      ["fill","Completa: \"___ los recursos disponibles, el proyecto avanzará más lentamente de lo previsto.\"",["Dado que","De ahí que","So pena de","Cabría señalar que"],0,"'Dado que' introduce una causa con indicativo de forma directa."],
      ["mcq","¿Qué significa aproximadamente 'en la medida en que'?",["En la proporción o grado en que algo ocurre; equivalente a 'en tanto que'.","Significa exactamente lo mismo que 'a pesar de que'.","Introduce siempre una hipótesis irreal.","Se usa solo para hablar de medidas físicas."],0,"Expresa proporcionalidad entre dos hechos relacionados."],
      ["writing","Escribe un párrafo de 70-90 palabras explicando la causa y consecuencia de una decisión empresarial, usando al menos dos conectores de esta lección.",[],["dado que","de ahí que","en la medida en que"],"Distingue con cuidado los conectores que piden indicativo de los que piden subjuntivo.","Análisis causal para un informe de gestión."]
    ]
  },
  {
    id:"es_c1_mediation_summary", level:"C1", title:"Mediación: sintetizar con precisión", emoji:"🗂️", xp:90,
    description:"Resume información compleja conservando las relaciones lógicas entre ideas.",
    study:{
      vocab:[
        ["en síntesis","in summary"],
        ["el punto central es que","the key point is that"],
        ["conviene destacar","it's worth highlighting"],
        ["a grandes rasgos","broadly / roughly speaking"]
      ],
      grammar:[
        ["Mediación: sintetizar con precisión","Un buen resumen C1 conserva la relación lógica entre ideas (causa, contraste, condición), no solo las palabras clave.","A grandes rasgos, el informe concluye que el plan es viable, aunque conviene destacar los riesgos de financiación."]
      ]
    },
    ex:[
      ["mcq","¿Cuál es el mejor resumen para una audiencia con poco tiempo?",["A grandes rasgos, el informe recomienda una expansión gradual, condicionada a la obtención de financiación externa.","El informe tiene muchas páginas sobre expansión y financiación y otras cosas.","La expansión será perfecta si todos se esfuerzan.","Hay financiación, expansión y un informe involucrados."],0,"Un buen resumen prioriza la decisión, la condición y el riesgo principal."],
      ["fill","Completa: \"___, el estudio muestra una mejora moderada pero constante en los resultados.\"",["En síntesis","So pena de","De ahí que","Cabría"],0,"\"En síntesis\" introduce una conclusión general que cierra el resumen."],
      ["mcq","¿Qué distingue una buena mediación (resumen) de una simple lista de palabras clave?",["Conserva las relaciones lógicas (causa, contraste, condición) entre las ideas originales.","Elimina toda relación lógica y deja solo términos sueltos.","Debe ser siempre más larga que el texto original.","No debe incluir ninguna conclusión."],0,"La mediación exige preservar el sentido y las conexiones, no solo el vocabulario."],
      ["writing","Resume en 60-80 palabras un informe imaginario que evalúa dos opciones estratégicas, indicando la recomendación principal y una condición o riesgo.",[],["en síntesis","el punto central","conviene destacar"],"Prioriza la decisión, la razón y una condición o riesgo relevante.","Resumen ejecutivo para la dirección."]
    ]
  },
  {
    id:"es_c1_concession_refutation", level:"C1", title:"Concesión avanzada y refutación", emoji:"⚔️", xp:92,
    description:"Reconoce argumentos contrarios con fuerza retórica antes de refutarlos con precisión.",
    study:{
      vocab:[
        ["si bien... no es menos cierto que","while... it's no less true that"],
        ["lejos de","far from"],
        ["ello no obsta para que","that doesn't prevent"],
        ["en última instancia","ultimately / in the last resort"]
      ],
      grammar:[
        ["Concesión avanzada y refutación","Estas estructuras reconocen un argumento contrario con fuerza retórica antes de refutarlo o matizarlo con precisión.","Si bien el plan reduce costes, no es menos cierto que introduce riesgos considerables."]
      ]
    },
    ex:[
      ["mcq","¿Qué oración refuta un argumento con más precisión retórica?",["Lejos de resolver el problema, la medida podría agravarlo a largo plazo.","La medida es mala, ya está.","No sirve para nada, obviamente.","Todo el mundo sabe que está mal."],0,"'Lejos de' introduce una refutación matizada y argumentada, no una simple negación."],
      ["fill","Completa: \"El proyecto generó beneficios; ___, no cubrió los costes iniciales.\"",["ello no obsta para que se reconozca que","dado que","de ahí que","en la medida en que"],0,"'Ello no obsta para que + subjuntivo' introduce una concesión seguida de matización."],
      ["mcq","¿Qué función retórica cumple 'si bien... no es menos cierto que'?",["Reconoce un punto válido antes de introducir una objeción igualmente sólida.","Niega por completo el primer punto.","Expresa duda total sobre ambos puntos.","Es una fórmula puramente informal."],0,"Es una estructura de concesión-refutación característica del registro argumentativo culto."],
      ["writing","Escribe un párrafo de 80-100 palabras que refute con matices una postura sobre un tema controvertido (por ejemplo, la automatización del empleo), usando al menos dos estructuras de concesión-refutación.",[],["si bien","lejos de","en última instancia"],"Reconoce primero el punto contrario y luego matízalo o refútalo con precisión.","Artículo de opinión para una revista especializada."]
    ]
  },
  {
    id:"es_c2_style_implication", level:"C2", title:"Estilo, implicación y matiz", emoji:"🔎", xp:92,
    description:"Interpreta el subtexto y reformula ideas complejas usando inversión enfática y litotes.",
    study:{
      vocab:[
        ["de ningún modo","by no means","Negación enfática que antepone el verbo."],
        ["quedarse corto de","to fall short of"],
        ["un supuesto tácito","a tacit assumption"],
        ["matizar una afirmación","to qualify a claim"]
      ],
      grammar:[
        ["Inversión tras negación enfática","Con expresiones negativas enfáticas ('de ningún modo', 'bajo ningún concepto', 'en ningún caso') el verbo suele anteponerse al sujeto en registro culto.","Bajo ningún concepto deberían tomarse estos datos como concluyentes."],
        ["Litotes: afirmar negando lo contrario","Negar el contrario de una idea es un recurso culto para afirmarla con prudencia y matiz.","La propuesta no deja de ser arriesgada, aunque sus beneficios son evidentes."]
      ]
    },
    ex:[
      ["mcq","¿Qué reformulación conserva mejor el sentido de \"Los datos son sugerentes, no concluyentes\"?",["Los datos apuntan en una dirección, pero no bastan para una conclusión definitiva.","Los datos demuestran la conclusión sin lugar a dudas.","No existe ningún dato disponible sobre el tema.","La conclusión es sugerente, pero los datos son definitivos."],0,"Mantiene la diferencia entre indicio y prueba concluyente."],
      ["fill","Completa la inversión: \"Bajo ningún concepto ___ tomarse estos resultados como definitivos.\"",["deberían","debería","deberíamos","deberías"],0,"El verbo concuerda con el sujeto plural 'estos resultados': deberían tomarse."],
      ["mcq","En \"La propuesta no deja de ser arriesgada\", ¿qué función cumple la litote?",["Afirma con matiz que la propuesta sí es arriesgada, de forma prudente.","Niega por completo que la propuesta sea arriesgada.","Afirma que la propuesta es completamente segura.","No aporta ningún significado adicional."],0,"'No deja de ser' niega el contrario para afirmar algo con matiz."],
      ["translate","Traduce: \"By no means should this decision be treated as final.\"",["Bajo ningún concepto debería tratarse esta decisión como definitiva.","Esta decisión es definitiva de ningún modo.","Debería tratarse bajo ningún concepto esta decisión.","Esta decisión bajo ningún concepto es definitiva tratada."],0,"'Bajo ningún concepto' + inversión verbo-sujeto es el equivalente formal de 'by no means'."],
      ["writing","Redacta 60-80 palabras sobre una decisión empresarial polémica: usa al menos una inversión enfática ('bajo ningún concepto'/'de ningún modo') y una litote.",[],["bajo ningún concepto","no deja de ser","de ningún modo"],"El registro C2 combina precisión argumentativa con recursos retóricos de matización.","Columna de opinión para una revista especializada."]
    ]
  },
  {
    id:"es_c2_rhetoric_tone", level:"C2", title:"Retórica, tono y efecto estilístico", emoji:"🎭", xp:94,
    description:"Elige recursos retóricos y ajusta el tono según la audiencia, el propósito y el efecto deseado.",
    study:{
      vocab:[
        ["lograr un equilibrio","to strike a balance"],
        ["una pregunta retórica","a rhetorical question"],
        ["evocar","to evoke"],
        ["asumir responsabilidad de forma proporcionada","to acknowledge responsibility proportionately"]
      ],
      grammar:[
        ["Efecto estilístico y elección léxica","La elección de una estructura o palabra puede crear cercanía, distancia, urgencia o ironía, incluso sin cambiar el contenido literal.","No es del todo desacertado, aunque sin duda podría mejorarse."],
        ["Reformulación para un registro público formal","Un comunicado público reconoce el impacto, asume responsabilidad de forma proporcionada y propone una acción verificable, evitando tanto la frialdad como la dramatización.","Reconocemos las molestias causadas y ya estamos aplicando medidas para evitar que se repitan."]
      ]
    },
    ex:[
      ["mcq","¿Qué efecto suele producir la frase \"no es del todo desacertado\"?",["Una aprobación cauta y deliberadamente atenuada.","Una aprobación entusiasta y sin reservas.","Un rechazo total de la idea.","Una instrucción técnica sin valoración."],0,"La doble atenuación crea una valoración reservada, típica del registro culto."],
      ["mcq","¿Qué versión se adapta mejor a una disculpa pública formal?",["Reconocemos las molestias causadas y estamos tomando medidas inmediatas para evitar que se repitan.","Vaya, qué momento más incómodo, ya se nos pasará.","Eso no fue culpa nuestra en absoluto.","Todo el mundo comete errores, no hay que darle más vueltas."],0,"El registro formal reconoce el impacto, asume responsabilidad y propone una acción concreta."],
      ["fill","Completa: \"El discurso busca ___ un sentido de responsabilidad compartida.\"",["evocar","invocar","provocar","revocar"],0,"'Evocar' significa suscitar un sentimiento o una idea en quien escucha."],
      ["mcq","¿Cuál es el propósito principal de una pregunta retórica en un discurso persuasivo?",["Involucrar a la audiencia y sugerir una respuesta sin formularla explícitamente.","Pedir información que el orador desconoce.","Confundir deliberadamente a la audiencia.","Cambiar de tema sin que se note."],0,"La pregunta retórica orienta al oyente hacia una conclusión sin declararla directamente."],
      ["writing","Reformula este mensaje interno brusco como un comunicado público de 50-70 palabras: \"El equipo falló, hay que arreglarlo ya.\" Reconoce el problema, evita dramatizarlo y propone una acción verificable.",[],["reconocemos","medidas","evitar que se repita"],"Evalúa proporción y tono: ni frialdad excesiva ni dramatismo innecesario.","Comunicado: un servicio digital estuvo caído dos horas."]
    ]
  },
  {
    id:"es_c2_critical_reading", level:"C2", title:"Lectura crítica e implicaturas", emoji:"🧩", xp:96,
    description:"Interpreta presuposiciones, lenguaje cargado de valoración y conclusiones implícitas en textos de opinión.",
    study:{
      vocab:[
        ["dar a entender","to imply"],
        ["una salvedad","a caveat"],
        ["lenguaje cargado","loaded language"],
        ["inferir","to draw an inference"]
      ],
      grammar:[
        ["Presuposición","Una frase puede presentar una idea como ya aceptada, sin demostrarla explícitamente.","Incluso los críticos que quedaban aceptaron el plan revisado."]
      ]
    },
    ex:[
      ["mcq","¿Qué presupone la frase \"Incluso los críticos que quedaban aceptaron el plan revisado\"?",["Que hubo críticos y que algunos ya habían dejado de oponerse antes.","Que nadie criticó nunca el plan.","Que el plan fue rechazado por completo.","Que no existe ningún plan revisado."],0,"'Incluso' y 'que quedaban' presentan información como ya compartida y orientan la inferencia."],
      ["mcq","¿Cuál es una lectura crítica apropiada de \"una solución audaz para un sistema obsoleto\"?",["El adjetivo 'obsoleto' valora el sistema y predispone al lector a favor de la solución.","La frase es completamente neutral y no valora nada.","La solución ya demostró ser eficaz.","No contiene ninguna valoración implícita."],0,"'Obsoleto' es lenguaje cargado, no un hecho comprobado objetivamente."],
      ["fill","Completa: \"El artículo incluye una ___ importante: los resultados no se han replicado.\"",["salvedad","idea","consecuencia","comparación"],0,"Una 'salvedad' es una reserva que limita el alcance de una afirmación."],
      ["mcq","Ante la frase \"Es hora de devolver el sentido común a la política pública\", ¿qué implica el uso de 'devolver'?",["Da a entender que el sentido común existía antes y se ha perdido, sin demostrarlo.","Afirma con datos que la política actual carece de sentido.","Es una descripción neutral sin ninguna carga valorativa.","Propone una política concreta y verificable."],0,"'Devolver' presupone una pérdida previa, una estrategia retórica habitual sin base demostrada."],
      ["speaking","Analiza en 50-70 palabras una frase persuasiva de tu elección: identifica una presuposición, una palabra cargada de valoración y una inferencia razonable.",[],["presupone","lenguaje","inferencia"],"No basta con estar de acuerdo o en desacuerdo: explica cómo el lenguaje orienta la interpretación.","Frase de ejemplo: \"Ya es hora de poner fin a esta práctica anticuada.\""]
    ]
  },
  {
    id:"es_a1_dates_time", level:"A1", title:"Fechas, días y meses", emoji:"📅", xp:35,
    description:"Aprende los días de la semana, los meses y cómo hablar de fechas en español.",
    study: {
      vocab: [
        ["lunes, martes, miércoles, jueves, viernes, sábado, domingo", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"],
        ["enero, febrero, marzo... diciembre", "January, February, March... December"],
        ["¿Qué día es hoy?", "What day is it today?"],
        ["Hoy es el 5 de mayo.", "Today is May 5th.", "El número va antes del mes: \"el 5 de mayo\", no \"mayo 5\"."],
        ["¿Cuándo es tu cumpleaños?", "When is your birthday?"]
      ],
      grammar: [
        ["El artículo con los días", "Los días de la semana se escriben en minúscula y usan \"el\" (un día concreto) o \"los\" (algo habitual).", "El lunes tengo una cita. / Los lunes voy al gimnasio."]
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice \"Wednesday\" en español?",["Miércoles","Martes","Jueves","Viernes"],0,"\"Miércoles\" es el tercer día de la semana. En español la semana suele empezar en lunes."],
      ["mcq","¿Cuál es la forma correcta de preguntar la fecha de hoy?",["¿Qué día es hoy?","¿Qué hora es?","¿Cuántos años tienes?","¿Dónde vives?"],0,"\"¿Qué día es hoy?\" pregunta por la fecha o el día de la semana."],
      ["fill","Completa: \"Mi cumpleaños es ___ 10 de marzo.\"",["el","la","en","los"],0,"Con una fecha concreta se usa \"el\": \"el 10 de marzo\"."],
      ["translate","Traduce: \"Today is Monday.\"",["Hoy es lunes.","Hoy es martes.","Ayer fue lunes.","Hoy es un lunes."],0,"\"Today is Monday\" = \"Hoy es lunes\" — sin artículo antes del día cuando afirmas qué día es."],
      ["arrange","Ordena: [lunes / al / voy / los / gimnasio]",["Los lunes voy al gimnasio","Voy los lunes al gimnasio","Al gimnasio los lunes voy","Lunes los voy al gimnasio"],0,"\"Los lunes\" (hábito) + sujeto implícito + verbo + complemento: \"Los lunes voy al gimnasio.\""],
      ["writing","Escribe 3 oraciones (20-30 palabras) sobre tu semana: qué día es hoy, cuándo es tu cumpleaños y qué haces un día concreto.",[],["hoy","cumpleaños","los"],"Incluye al menos un día de la semana y un mes. Revisa que uses \"el\" o \"los\" correctamente."]
    ]
  },
  {
    id:"es_a2_directions_transport", level:"A2", title:"En la ciudad: direcciones y transporte", emoji:"🧭", xp:42,
    description:"Pide y da indicaciones, y habla sobre medios de transporte en español.",
    study: {
      vocab: [
        ["¿Cómo llego a...?", "How do I get to...?"],
        ["Sigue todo recto / Gira a la izquierda / a la derecha", "Go straight ahead / Turn left / right"],
        ["la parada de autobús, la estación de tren", "the bus stop, the train station"],
        ["Está a dos cuadras de aquí.", "It's two blocks from here."],
        ["¿Cuánto tarda en llegar?", "How long does it take to get there?"]
      ],
      grammar: [
        ["El imperativo para dar indicaciones", "Para dar instrucciones se usa el imperativo (tú/usted).", "Sigue recto y gira a la derecha en el semáforo."]
      ]
    },
    ex:[
      ["mcq","Quieres llegar al museo. ¿Qué preguntas?",["¿Cómo llego al museo?","¿Qué hora es el museo?","¿De quién es el museo?","¿Cuánto cuesta el autobús?"],0,"\"¿Cómo llego a...?\" es la pregunta estándar para pedir indicaciones."],
      ["mcq","Alguien te dice: \"Sigue todo recto y gira a la izquierda en la plaza.\" ¿Qué debes hacer primero?",["Caminar en línea recta.","Girar a la derecha.","Tomar el autobús.","Preguntar de nuevo."],0,"\"Sigue todo recto\" es la primera instrucción; el giro viene después."],
      ["fill","Completa: \"La estación ___ a dos cuadras de aquí.\"",["está","es","hay","tiene"],0,"Para ubicación se usa \"estar\": \"La estación está a dos cuadras.\""],
      ["translate","Traduce: \"Turn right at the traffic light.\"",["Gira a la derecha en el semáforo.","Gira a la izquierda en la plaza.","Sigue recto en el semáforo.","Para en el semáforo."],0,"\"Turn right\" = \"Gira a la derecha\"; \"at the traffic light\" = \"en el semáforo\"."],
      ["arrange","Ordena: [autobús / la / toma / parada / en / el]",["Toma el autobús en la parada","La parada toma el autobús en","En la parada el autobús toma","Toma en la parada el autobús"],0,"Verbo + objeto + complemento de lugar: \"Toma el autobús en la parada.\""],
      ["speaking","Explica en 40-60 palabras cómo llegar de tu casa a un lugar cercano (la tienda, el trabajo, la escuela). Usa al menos dos indicaciones y un medio de transporte.",[],["gira","recto","minutos"],"Organiza la explicación en orden: primero, después, finalmente."]
    ]
  },
  {
    id:"es_b1_job_interview", level:"B1", title:"El trabajo: entrevistas y rutina laboral", emoji:"💼", xp:60,
    description:"Habla sobre tu experiencia laboral y responde preguntas de entrevista en español.",
    study: {
      vocab: [
        ["¿A qué te dedicas?", "What do you do for a living?"],
        ["tengo experiencia en...", "I have experience in..."],
        ["mis puntos fuertes / débiles", "my strengths / weaknesses"],
        ["trabajar en equipo, cumplir con los plazos", "to work as a team, to meet deadlines"],
        ["un contrato de tiempo completo / parcial", "a full-time / part-time contract"]
      ],
      grammar: [
        ["Presente perfecto para experiencia", "Se usa \"he/has/ha trabajado\" para hablar de experiencia sin decir cuándo exactamente.", "He trabajado en atención al cliente durante tres años."],
        ["Conectores para estructurar una respuesta", "\"Por un lado... por otro lado\" ayuda a organizar ventajas y desventajas.", "Por un lado me gusta el trabajo en equipo; por otro, prefiero cierta autonomía."]
      ]
    },
    ex:[
      ["mcq","En una entrevista te preguntan: \"¿A qué te dedicas?\". ¿Cuál es una respuesta apropiada?",["Trabajo como diseñador gráfico en una agencia.","Sí, gracias, muy bien.","Tengo veinticinco años.","Vivo en el centro de la ciudad."],0,"\"¿A qué te dedicas?\" pregunta por tu profesión u ocupación."],
      ["mcq","¿Qué respuesta describe mejor un punto fuerte de forma profesional?",["Se me da bien organizar proyectos y cumplir con los plazos.","Soy el mejor de todos, sin duda.","No tengo ningún punto débil.","Trabajo cuando tengo ganas."],0,"Una buena respuesta es específica y verificable, sin exagerar."],
      ["fill","Completa: \"___ trabajado en ventas durante dos años.\"",["He","Soy","Estoy","Tengo"],0,"\"He trabajado\" (presente perfecto) describe experiencia pasada relevante hoy."],
      ["translate","Traduce: \"I have experience working in a team.\"",["Tengo experiencia trabajando en equipo.","Tengo experiencia trabajo equipo.","Trabajo tengo experiencia en equipo.","Tengo trabajo de experiencia equipo."],0,"\"Tengo experiencia + gerundio\" es la estructura natural: \"tengo experiencia trabajando en equipo\"."],
      ["arrange","Ordena: [equipo / me / trabajar / en / gusta]",["Me gusta trabajar en equipo","Gusta me trabajar en equipo","En equipo me gusta trabajar","Trabajar me gusta en equipo"],0,"\"Me gusta\" + infinitivo: \"Me gusta trabajar en equipo.\""],
      ["writing","Escribe una respuesta de entrevista de 45-65 palabras a la pregunta \"¿Por qué quieres este trabajo?\". Menciona tu experiencia, un punto fuerte y tu motivación.",[],["experiencia","porque","me gustaría"],"Estructura: experiencia relevante + punto fuerte + motivación concreta.","Entrevista para un puesto de atención al cliente."]
    ]
  },
  {
    id:"es_b2_media_literacy", level:"B2", title:"Medios de comunicación: analizar noticias", emoji:"📰", xp:78,
    description:"Distingue hechos de opiniones y evalúa la fiabilidad de una noticia en español.",
    study: {
      vocab: [
        ["una fuente fiable / poco fiable", "a reliable / unreliable source"],
        ["según fuentes cercanas al caso", "according to sources close to the case"],
        ["un titular sensacionalista", "a sensationalist headline"],
        ["contrastar la información", "to cross-check information"],
        ["un dato verificado, una opinión", "a verified fact, an opinion"]
      ],
      grammar: [
        ["Verbos de atribución", "\"Según\", \"afirma que\", \"señala que\" indican de dónde viene una afirmación y cuánta certeza tiene.", "Según el informe, las ventas aumentaron un 10%."],
        ["Distinguir hecho de opinión", "Un hecho se puede verificar; una opinión expresa un juicio de valor.", "El artículo afirma (opinión) que la medida 'sin duda' fracasará, aunque los datos (hecho) aún son preliminares."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases es un hecho verificable, no una opinión?",["El informe indica que el desempleo bajó un 2% este trimestre.","Esta política es claramente un desastre.","Todos saben que esta medida no funcionará.","Es obvio que el gobierno se equivoca."],0,"Un hecho verificable cita una fuente y un dato concreto, sin juicio de valor."],
      ["mcq","Titular: \"¡Escándalo total! La ciudad al borde del caos por nueva norma.\" ¿Qué sugiere el estilo del titular?",["Busca generar impacto emocional más que informar con precisión.","Es un resumen neutral y objetivo de los hechos.","Cita una fuente oficial verificable.","No contiene ningún juicio de valor."],0,"El lenguaje exagerado (\"escándalo total\", \"al borde del caos\") es típico del sensacionalismo."],
      ["fill","Completa: \"___ fuentes cercanas al proyecto, el lanzamiento se retrasará un mes.\"",["Según","Aunque","Porque","Sin embargo"],0,"\"Según\" introduce la fuente de una información, indicando que no es un hecho confirmado por el propio medio."],
      ["translate","Traduce: \"It is important to cross-check information before sharing it.\"",["Es importante contrastar la información antes de compartirla.","Es importante compartir la información antes de contrastarla.","Es importante la información importante de compartir.","Contrastar es compartir información importante antes."],0,"\"Cross-check information\" = \"contrastar la información\"; \"before sharing it\" = \"antes de compartirla\"."],
      ["mcq","Un artículo dice: \"Los expertos advierten que la cifra podría estar sobreestimada.\" ¿Qué nivel de certeza transmite?",["Una posibilidad razonable, no una certeza absoluta.","Una certeza total y verificada.","Una opinión personal del periodista sin ninguna fuente.","Un hecho ya demostrado con datos definitivos."],0,"\"Podría estar\" indica probabilidad, no una afirmación categórica."],
      ["writing","Escribe un análisis de 55-75 palabras sobre una noticia (real o inventada): identifica un hecho verificable, una opinión y evalúa qué tan fiable te parece la fuente.",[],["según","hecho","opinión"],"Separa claramente qué es un dato citado y qué es una valoración del autor."]
    ]
  },
  {
    id:"es_c1_figurative_language", level:"C1", title:"Lenguaje figurado y modismos", emoji:"🗯️", xp:88,
    description:"Interpreta modismos, metáforas y expresiones idiomáticas comunes en español.",
    study: {
      vocab: [
        ["costar un ojo de la cara", "to cost an arm and a leg"],
        ["estar entre la espada y la pared", "to be between a rock and a hard place"],
        ["tomar el pelo a alguien", "to pull someone's leg"],
        ["no tener pelos en la lengua", "to be outspoken / to not mince words"],
        ["ponerse las pilas", "to get one's act together"]
      ],
      grammar: [
        ["Interpretar modismos en contexto", "El significado de un modismo casi nunca es literal; hay que inferirlo del contexto comunicativo.", "\"Este viaje me costó un ojo de la cara\" no habla de un ojo real, sino de un gasto muy alto."]
      ]
    },
    ex:[
      ["mcq","\"Este coche me costó un ojo de la cara.\" ¿Qué significa la expresión?",["Fue muy caro.","Fue muy barato.","Se dañó el coche.","Tuvo un accidente."],0,"\"Costar un ojo de la cara\" significa que algo tuvo un precio muy alto."],
      ["mcq","Alguien dice: \"Estoy entre la espada y la pared con esta decisión.\" ¿Qué transmite?",["Se encuentra ante dos opciones difíciles, sin una salida cómoda.","Está completamente tranquilo con su decisión.","No tiene ninguna opción que considerar.","Ya tomó la decisión sin ninguna duda."],0,"La expresión describe una situación sin una opción claramente buena."],
      ["fill","Completa: \"Deja de tomarme el ___, sé que no es verdad.\"",["pelo","pie","brazo","ojo"],0,"\"Tomar el pelo a alguien\" significa bromear o engañar de forma ligera."],
      ["translate","Traduce de forma natural (no literal): \"He doesn't mince his words.\"",["No tiene pelos en la lengua.","No tiene pelo en la lengua.","No tiene lengua de pelos.","Su lengua no tiene pelos nunca."],0,"\"No tener pelos en la lengua\" es el equivalente idiomático de \"to not mince words\"."],
      ["mcq","¿En qué contexto encajaría mejor \"ponte las pilas\"?",["Animando a alguien a esforzarse más y actuar con energía.","Explicando cómo cargar un dispositivo electrónico.","Describiendo el clima de una ciudad.","Pidiendo disculpas formalmente."],0,"\"Ponerse las pilas\" es una expresión coloquial para motivar a actuar con energía."],
      ["speaking","Elige un modismo de esta lección y explica en 45-65 palabras en qué situación lo usarías y qué significa literalmente frente a su sentido real.",[],["significa","situación","literalmente"],"Distingue claramente el sentido literal (a veces absurdo) del sentido idiomático real."]
    ]
  },
  {
    id:"es_c2_irony_humor", level:"C2", title:"Ironía, humor y ambigüedad deliberada", emoji:"😏", xp:94,
    description:"Reconoce ironía, sarcasmo y ambigüedad intencional en el español de nivel avanzado.",
    study: {
      vocab: [
        ["¡Qué suerte la mía!", "Just my luck! (irónico)"],
        ["con la mejor de las intenciones (irónico)", "with the best of intentions (ironic)"],
        ["un doble sentido", "a double meaning"],
        ["decir algo con retintín", "to say something with a sarcastic tone"],
        ["quedarse corto (ironía por understatement)", "to fall short / understate (ironic)"]
      ],
      grammar: [
        ["Marcadores de ironía", "La ironía suele señalarse con el contexto, la entonación o un contraste evidente entre lo dicho y la realidad, no con palabras explícitas.", "\"¡Qué puntual llegaste!\" dicho a alguien que llegó una hora tarde es irónico por el contraste."],
        ["Ambigüedad deliberada", "A veces se elige una expresión ambigua a propósito para no comprometerse del todo con una postura.", "\"Podría decirse que el proyecto tuvo... resultados interesantes.\""]
      ]
    },
    ex:[
      ["mcq","Alguien llega una hora tarde y otra persona dice: \"¡Qué puntual llegaste!\". ¿Qué comunica realmente?",["Lo contrario de lo que dice: llegó muy tarde.","Un elogio sincero sobre la puntualidad.","Una pregunta sobre la hora.","Una disculpa por su propia tardanza."],0,"El contraste entre lo dicho y la realidad evidente es la marca típica de la ironía."],
      ["mcq","\"Con la mejor de las intenciones, canceló la reunión sin avisar a nadie.\" ¿Qué matiz aporta \"con la mejor de las intenciones\" aquí?",["Un tono irónico: señala que la acción no fue realmente considerada.","Una alabanza sincera hacia la persona.","Una explicación literal y neutral del hecho.","Una disculpa formal por parte del narrador."],0,"El contraste entre la frase y la acción (cancelar sin avisar) genera un efecto irónico."],
      ["fill","\"Podría decirse que el proyecto tuvo resultados... ___.\" (ambigüedad deliberada, sin comprometerse)",["interesantes","excelentes","catastróficos","perfectos"],0,"\"Interesantes\" es deliberadamente ambiguo: no confirma ni niega el éxito del proyecto."],
      ["translate","Traduce con el mismo matiz irónico: \"Great, another Monday.\" (dicho con fastidio)",["Genial, otro lunes.","El lunes es un gran día.","Qué alegría, es viernes.","Odio los lunes totalmente."],0,"El tono irónico se mantiene con \"Genial\" seguido de algo objetivamente poco emocionante."],
      ["mcq","¿Qué función cumple el understatement en \"El terremoto causó... algunos daños menores\" cuando en realidad fue devastador?",["Suaviza deliberadamente la gravedad para generar un efecto irónico o crítico.","Describe la situación de forma completamente literal y precisa.","Exagera la magnitud del evento.","Elimina cualquier posible interpretación irónica."],0,"El understatement contrasta la magnitud real con una descripción minimizada, generando ironía."],
      ["writing","Escribe un breve comentario (50-70 palabras) con ironía sutil sobre una situación cotidiana molesta (el tráfico, una fila larga, etc.), sin usar insultos ni lenguaje explícito.",[],["qué suerte","genial","por supuesto"],"La ironía debe notarse por el contraste entre el tono positivo y la situación negativa, no por afirmarlo directamente."]
    ]
  },
  {
    id:"es_a1_house_rooms", level:"A1", title:"La casa: habitaciones y muebles", emoji:"🏠", xp:35,
    description:"Aprende el vocabulario de las habitaciones, los muebles y los objetos de una casa.",
    study: {
      vocab: [
        ["la cocina, el baño, el dormitorio, el salón", "the kitchen, the bathroom, the bedroom, the living room"],
        ["la cama, la mesa, la silla, el sofá", "the bed, the table, the chair, the sofa"],
        ["¿Dónde está la cocina?", "Where is the kitchen?"],
        ["La cama está en el dormitorio.", "The bed is in the bedroom."],
        ["encima de, debajo de, al lado de", "on top of, under, next to"]
      ],
      grammar: [
        ["Estar + preposiciones de lugar", "\"Estar\" se usa para ubicar cosas, junto a preposiciones como \"encima de\" o \"al lado de\".", "El sofá está al lado de la ventana."]
      ]
    },
    ex:[
      ["mcq","¿Dónde duermes normalmente?",["En el dormitorio.","En la cocina.","En el baño.","En el salón."],0,"El dormitorio es la habitación donde se duerme."],
      ["mcq","¿Cuál es la pregunta correcta para saber dónde está algo?",["¿Dónde está la cocina?","¿Qué es la cocina?","¿Cuándo está la cocina?","¿Quién está la cocina?"],0,"\"¿Dónde está...?\" pregunta por la ubicación de algo."],
      ["fill","Completa: \"El sofá está ___ de la ventana.\"",["al lado","encima","debajo","detrás"],0,"\"Al lado de\" indica que dos cosas están juntas, una junto a la otra."],
      ["translate","Traduce: \"The bed is in the bedroom.\"",["La cama está en el dormitorio.","La cama está en la cocina.","La silla está en el dormitorio.","La cama es el dormitorio."],0,"\"The bed is in the bedroom\" = \"La cama está en el dormitorio\", con \"estar\" para ubicación."],
      ["arrange","Ordena: [cocina / mesa / hay / la / en / una]",["En la cocina hay una mesa","Hay una mesa en la cocina","La cocina hay una mesa en","Una mesa en la cocina hay"],0,"\"Hay\" + objeto + \"en\" + lugar, o \"En\" + lugar + \"hay\" + objeto: ambas formas son naturales; elegimos \"En la cocina hay una mesa.\""],
      ["writing","Describe en 20-30 palabras tu casa o apartamento: qué habitaciones tiene y qué muebles hay en una de ellas.",[],["dormitorio","hay","está"],"Menciona al menos dos habitaciones y dos muebles."]
    ]
  },
  {
    id:"es_a2_health_pharmacy", level:"A2", title:"La salud: síntomas y la farmacia", emoji:"💊", xp:44,
    description:"Describe síntomas comunes y pide ayuda en la farmacia o con el médico en español.",
    study: {
      vocab: [
        ["Me duele la cabeza / el estómago / la garganta.", "My head / stomach / throat hurts."],
        ["Tengo fiebre, tos, náuseas.", "I have a fever, a cough, nausea."],
        ["¿Tiene algo para el dolor de cabeza?", "Do you have something for a headache?"],
        ["Tómese una pastilla cada ocho horas.", "Take one pill every eight hours."],
        ["pedir cita con el médico", "to make a doctor's appointment"]
      ],
      grammar: [
        ["\"Doler\" como \"gustar\"", "\"Doler\" funciona igual que \"gustar\": concuerda con lo que duele, no con la persona.", "Me duele la cabeza. / Me duelen los pies."]
      ]
    },
    ex:[
      ["mcq","Tienes dolor de cabeza. ¿Qué dices?",["Me duele la cabeza.","Me gusta la cabeza.","Tengo la cabeza.","Soy la cabeza."],0,"\"Me duele la cabeza\" describe el síntoma con el verbo \"doler\"."],
      ["mcq","En la farmacia, ¿qué preguntas para pedir un medicamento?",["¿Tiene algo para el dolor de cabeza?","¿Dónde está el dolor de cabeza?","¿Cuándo es el dolor de cabeza?","¿Por qué tiene dolor de cabeza?"],0,"\"¿Tiene algo para...?\" es la forma natural de pedir un medicamento en la farmacia."],
      ["fill","Completa: \"Me ___ los pies después de correr.\"",["duelen","duele","dolor","doloroso"],0,"\"Doler\" concuerda en plural con \"los pies\": \"me duelen los pies\"."],
      ["translate","Traduce: \"I have a fever and a cough.\"",["Tengo fiebre y tos.","Tengo fiebre y tosa.","Soy fiebre y tos.","Me duele fiebre y tos."],0,"\"I have a fever and a cough\" = \"Tengo fiebre y tos\", con el verbo \"tener\"."],
      ["arrange","Ordena: [ocho / cada / pastilla / horas / tómese / una]",["Tómese una pastilla cada ocho horas","Cada ocho horas tómese una pastilla","Una pastilla tómese cada ocho horas","Tómese cada ocho horas una pastilla"],0,"Imperativo + objeto + frecuencia: \"Tómese una pastilla cada ocho horas.\" (también válida la variante con \"Cada ocho horas\" al inicio)."],
      ["speaking","Describe en 40-60 palabras una vez que te sentiste mal: qué síntomas tenías y qué hiciste (fuiste al médico, tomaste una pastilla, etc.).",[],["me dolía","tenía","fui"],"Usa al menos dos síntomas y una acción que tomaste para sentirte mejor."]
    ]
  },
  {
    id:"es_b1_tech_social_media", level:"B1", title:"Tecnología y redes sociales", emoji:"📱", xp:58,
    description:"Habla sobre el uso de la tecnología y las redes sociales, sus ventajas y sus riesgos.",
    study: {
      vocab: [
        ["publicar, compartir, comentar", "to post, to share, to comment"],
        ["estar conectado / desconectarse", "to be online / to log off"],
        ["la privacidad, los datos personales", "privacy, personal data"],
        ["depender del teléfono", "to be dependent on your phone"],
        ["mantenerse en contacto con", "to keep in touch with"]
      ],
      grammar: [
        ["Comparar ventajas y desventajas", "\"Por un lado... por otro lado\" y \"mientras que\" ayudan a comparar dos ideas.", "Por un lado, las redes ayudan a mantenerse en contacto; por otro, pueden quitar mucho tiempo."]
      ]
    },
    ex:[
      ["mcq","¿Cuál es una ventaja real de las redes sociales?",["Ayudan a mantenerse en contacto con amigos lejanos.","Siempre dicen la verdad sobre todo.","Nunca afectan la privacidad.","No necesitan conexión a internet."],0,"Mantenerse en contacto con personas lejanas es una ventaja concreta y verificable."],
      ["mcq","¿Qué frase expresa preocupación por la privacidad?",["Me preocupa cómo usan mis datos personales.","Me encanta compartir todo sin pensar.","No uso internet nunca.","Publico fotos cada cinco minutos."],0,"La preocupación por los datos personales es un tema central de privacidad digital."],
      ["fill","Completa: \"___ un lado me gusta estar conectado, por otro necesito desconectarme a veces.\"",["Por","En","De","A"],0,"\"Por un lado... por otro\" es la estructura para comparar dos ideas."],
      ["translate","Traduce: \"I try not to depend on my phone too much.\"",["Intento no depender demasiado de mi teléfono.","Intento no depender mucho de teléfono.","No intento depender mi teléfono.","Depender de mi teléfono intento no."],0,"\"Depender de\" + sustantivo: \"depender de mi teléfono\"."],
      ["arrange","Ordena: [contacto / mantenerme / me / ayuda / en / a / con amigos]",["Me ayuda a mantenerme en contacto con amigos","Mantenerme me ayuda a en contacto con amigos","A mantenerme me ayuda en contacto con amigos","Me ayuda en contacto a mantenerme con amigos"],0,"\"Me ayuda a\" + infinitivo: \"Me ayuda a mantenerme en contacto con amigos.\""],
      ["writing","Escribe 45-65 palabras sobre tu relación con las redes sociales: una ventaja, un riesgo y qué haces para equilibrarlo.",[],["por un lado","por otro","privacidad"],"Estructura: ventaja + riesgo + una acción concreta para equilibrar ambos."]
    ]
  },
  {
    id:"es_b2_ethical_dilemmas", level:"B2", title:"Dilemas éticos: argumentar a favor y en contra", emoji:"⚖️", xp:80,
    description:"Presenta y contrapesa argumentos sobre dilemas éticos comunes en español.",
    study: {
      vocab: [
        ["a favor de / en contra de", "in favor of / against"],
        ["desde un punto de vista ético", "from an ethical point of view"],
        ["el bien común, el interés individual", "the common good, individual interest"],
        ["justificar una decisión", "to justify a decision"],
        ["no hay una respuesta única", "there is no single answer"]
      ],
      grammar: [
        ["Estructurar un argumento equilibrado", "Presentar primero un argumento, luego el contrario, y cerrar con una postura matizada evita el sesgo.", "Algunos argumentan que..., mientras que otros sostienen que... En mi opinión, ambas posturas tienen algo de razón."]
      ]
    },
    ex:[
      ["mcq","¿Qué frase presenta un argumento de forma equilibrada?",["Algunos argumentan que..., mientras que otros sostienen que...","Todo el mundo sabe que tengo razón.","Es obvio que la otra postura está mal.","No hay ningún argumento en contra."],0,"Presentar ambos lados antes de opinar es propio de un argumento equilibrado en B2."],
      ["mcq","Un dilema ético típico es \"el bien común frente al interés individual\". ¿Qué significa esto?",["Un conflicto entre lo que beneficia a todos y lo que beneficia a una sola persona.","Una decisión que no afecta a nadie.","Un tema sin ninguna importancia social.","Una elección puramente económica sin ética involucrada."],0,"El dilema surge cuando lo mejor para la comunidad no coincide con lo mejor para un individuo."],
      ["fill","Completa: \"___ un punto de vista ético, la decisión es discutible.\"",["Desde","Para","Por","Con"],0,"\"Desde un punto de vista ético\" es la expresión estándar para introducir una perspectiva."],
      ["translate","Traduce: \"There is no single answer to this dilemma.\"",["No hay una respuesta única para este dilema.","No hay una respuesta única este dilema.","Este dilema no hay respuesta única para.","Una respuesta única no hay para este dilema."],0,"\"There is no single answer\" = \"No hay una respuesta única\"."],
      ["mcq","¿Cuál de estas frases justifica una decisión de forma razonada, no emocional?",["Se decidió así porque los beneficios superaban los riesgos a largo plazo.","Se decidió así porque sí, y punto.","Se decidió así porque todos lo querían sin pensar.","Se decidió así porque es lo que siempre se ha hecho."],0,"Una justificación razonada compara beneficios y riesgos de forma explícita."],
      ["writing","Elige un dilema ético cotidiano (por ejemplo, decir una mentira piadosa) y escribe 55-75 palabras presentando un argumento a favor, uno en contra y tu conclusión matizada.",[],["a favor","en contra","sin embargo"],"Estructura: argumento a favor + argumento en contra + conclusión matizada, no absoluta."]
    ]
  },
  {
    id:"es_c1_academic_citing", level:"C1", title:"Discurso académico: citar y parafrasear", emoji:"🎓", xp:90,
    description:"Aprende a citar fuentes, parafrasear ideas y evitar el plagio en un registro académico.",
    study: {
      vocab: [
        ["según (autor, año)", "according to (author, year)"],
        ["como señala/sostiene el autor", "as the author points out/argues"],
        ["parafrasear una idea", "to paraphrase an idea"],
        ["citar textualmente", "to quote directly"],
        ["el plagio, las fuentes fiables", "plagiarism, reliable sources"]
      ],
      grammar: [
        ["Verbos para introducir citas ajenas", "\"Sostiene que\", \"afirma que\", \"señala que\" varían el matiz: no todos implican el mismo grado de certeza.", "El autor sostiene que la política fue un error; otros investigadores, en cambio, señalan matices importantes."],
        ["Parafrasear sin copiar la estructura", "Parafrasear implica cambiar tanto las palabras como el orden de las ideas, no solo sinónimos sueltos.", "Original: 'El estudio demuestra que el ejercicio reduce el estrés.' Paráfrasis: 'Según la investigación, practicar actividad física ayuda a disminuir los niveles de estrés.'"]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas opciones es una paráfrasis correcta, no una copia disimulada?",["Según la investigación, practicar actividad física ayuda a disminuir los niveles de estrés.","El estudio demuestra que el ejercicio reduce el estrés totalmente.","El estudio demuestra que el ejercicio, en efecto, reduce el estrés.","Demuestra el estudio que reduce el estrés el ejercicio."],0,"Una buena paráfrasis cambia estructura y vocabulario, no solo una o dos palabras."],
      ["mcq","¿Qué verbo transmite mayor distancia crítica del autor citado?",["El autor sugiere que...","El autor demuestra categóricamente que...","El autor prueba sin duda que...","El autor confirma definitivamente que..."],0,"\"Sugiere\" indica una afirmación más cautelosa, propia de un análisis crítico riguroso."],
      ["fill","Completa: \"___ señala el informe, la medida tuvo un impacto limitado.\"",["Como","Porque","Aunque","Sin embargo"],0,"\"Como señala el informe\" introduce una idea atribuida a una fuente de forma fluida."],
      ["translate","Traduce: \"According to the author, the results are inconclusive.\"",["Según el autor, los resultados son poco concluyentes.","Según el autor, los resultados son concluyente.","El autor según resultados poco concluyentes.","Los resultados según el autor son concluyentes no."],0,"\"According to the author\" = \"Según el autor\"; \"inconclusive\" = \"poco concluyentes\"."],
      ["mcq","¿Cuál de estas prácticas constituye plagio académico?",["Copiar una frase textual sin comillas ni referencia a la fuente.","Citar textualmente entre comillas con su referencia.","Parafrasear una idea y citar la fuente original.","Resumir un artículo mencionando de dónde proviene."],0,"Copiar sin comillas ni referencia, aunque sea una sola frase, se considera plagio."],
      ["writing","Escribe un párrafo académico de 55-75 palabras que parafrasee (sin copiar) esta idea: 'El acceso a internet ha cambiado profundamente la forma en que las personas se informan.' Cita la fuente como (Autor, 2023).",[],["según","sostiene","(Autor, 2023)"],"No copies la frase original: cambia estructura y vocabulario mientras conservas la idea."]
    ]
  },
  {
    id:"es_c2_logical_fallacies", level:"C2", title:"Falacias lógicas y persuasión", emoji:"🧠", xp:96,
    description:"Detecta falacias lógicas y estrategias de persuasión en argumentos de alto nivel.",
    study: {
      vocab: [
        ["el ataque personal (ad hominem)", "ad hominem attack"],
        ["la falsa dicotomía", "false dichotomy"],
        ["la pendiente resbaladiza", "slippery slope"],
        ["generalizar a partir de un solo caso", "to generalize from a single case"],
        ["apelar a la emoción en vez de a los hechos", "to appeal to emotion instead of facts"]
      ],
      grammar: [
        ["Identificar falacias en el discurso", "Una falacia parece un argumento válido pero su estructura lógica es defectuosa, aunque suene persuasiva.", "\"Si permitimos esto, pronto todo se descontrolará\" es una pendiente resbaladiza: asume una cadena de consecuencias sin evidencia."]
      ]
    },
    ex:[
      ["mcq","\"No deberías escuchar su argumento económico: además, es una persona desagradable.\" ¿Qué falacia es esta?",["Ataque personal (ad hominem): descalifica a la persona, no el argumento.","Falsa dicotomía: reduce las opciones a solo dos.","Pendiente resbaladiza: predice una cadena de consecuencias.","Generalización apresurada a partir de un caso."],0,"El ad hominem ataca al emisor del argumento en vez de refutar el argumento mismo."],
      ["mcq","\"O apoyas esta ley exactamente como está, o no te importa la seguridad de nadie.\" ¿Qué falacia es esta?",["Falsa dicotomía: presenta solo dos opciones cuando hay más matices posibles.","Ataque personal contra el interlocutor.","Apelación a la emoción sin ningún argumento lógico.","Generalización basada en un solo caso aislado."],0,"La falsa dicotomía oculta opciones intermedias válidas, presentando solo dos extremos."],
      ["fill","\"Si permitimos esta excepción, pronto todo el sistema se derrumbará.\" Esta frase es un ejemplo de ___.",["pendiente resbaladiza","ataque personal","falsa dicotomía","apelación a la autoridad"],0,"La pendiente resbaladiza asume, sin evidencia suficiente, una cadena inevitable de consecuencias negativas."],
      ["translate","Traduce con precisión técnica: \"This is a classic false dichotomy.\"",["Esta es una falsa dicotomía clásica.","Esta es una dicotomía falsa clásica es.","Clásica esta falsa dicotomía es.","Esta falsa es dicotomía clásica."],0,"\"False dichotomy\" se traduce técnicamente como \"falsa dicotomía\"."],
      ["mcq","Un anuncio muestra imágenes de niños llorando para vender un producto de caridad sin dar datos concretos sobre su impacto. ¿Qué estrategia usa principalmente?",["Apelación a la emoción en lugar de a los hechos verificables.","Un argumento lógico riguroso basado en datos.","Una generalización estadística precisa.","Una cita de una fuente académica fiable."],0,"Usar imágenes emotivas sin datos concretos es apelar a la emoción en vez de a la evidencia."],
      ["writing","Identifica y explica en 55-75 palabras una falacia lógica que hayas escuchado en un debate, anuncio o discusión reciente (real o inventada). Nombra la falacia y explica por qué el argumento es engañoso pese a sonar convincente.",[],["falacia","porque","aunque parece"],"Nombra explícitamente el tipo de falacia (ad hominem, falsa dicotomía, pendiente resbaladiza, etc.) y justifica tu identificación."]
    ]
  },
];
