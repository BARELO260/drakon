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
  {
    id:"es_a1_emotions_feelings", level:"A1", title:"Las emociones: cómo te sientes", emoji:"😊", xp:35,
    description:"Aprende a expresar emociones y sentimientos básicos en español.",
    study: {
      vocab: [
        ["estar feliz, triste, cansado, enfadado", "to be happy, sad, tired, angry"],
        ["¿Cómo te sientes?", "How do you feel?"],
        ["Estoy un poco nervioso/a.", "I'm a bit nervous."],
        ["tener miedo, tener sueño, tener hambre", "to be afraid, to be sleepy, to be hungry"],
        ["¿Por qué estás triste?", "Why are you sad?"]
      ],
      grammar: [
        ["\"Estar\" con emociones", "Las emociones se expresan con \"estar\" + adjetivo, porque son estados temporales.", "Estoy feliz hoy. / Está cansada después del trabajo."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas a alguien cómo se siente?",["¿Cómo te sientes?","¿Cómo te llamas?","¿Dónde vives?","¿Cuántos años tienes?"],0,"\"¿Cómo te sientes?\" pregunta por el estado emocional de alguien."],
      ["mcq","Tienes mucho trabajo y poco descanso. ¿Cómo te sientes?",["Estoy cansado/a.","Estoy feliz.","Tengo hambre.","Tengo frío."],0,"Mucho trabajo y poco descanso llevan típicamente a sentirse \"cansado/a\"."],
      ["fill","Completa: \"___ un poco nervioso antes del examen.\"",["Estoy","Soy","Tengo","Hago"],0,"Las emociones temporales usan \"estar\": \"Estoy un poco nervioso.\""],
      ["translate","Traduce: \"Why are you sad?\"",["¿Por qué estás triste?","¿Por qué eres triste?","¿Por qué tienes triste?","¿Por qué haces triste?"],0,"\"Why are you sad?\" = \"¿Por qué estás triste?\", con \"estar\" para un estado emocional."],
      ["arrange","Ordena: [trabajo / cansada / después / estoy / del]",["Estoy cansada después del trabajo","Después del trabajo estoy cansada","Cansada estoy después del trabajo","Estoy después del trabajo cansada"],0,"Sujeto + \"estoy\" + adjetivo + complemento de tiempo: \"Estoy cansada después del trabajo.\""],
      ["writing","Escribe 20-30 palabras en español describiendo cómo te sientes hoy y por qué. Usa al menos dos emociones distintas.",[],["estoy","porque","me siento"],"Menciona una razón concreta para cada emoción que describas."]
    ]
  },
  {
    id:"es_a2_hobbies_weekend", level:"A2", title:"El ocio: aficiones y planes de fin de semana", emoji:"🎨", xp:44,
    description:"Habla de tus aficiones y de tus planes para el fin de semana en español.",
    study: {
      vocab: [
        ["¿Qué te gusta hacer en tu tiempo libre?", "What do you like to do in your free time?"],
        ["pintar, tocar un instrumento, hacer senderismo", "to paint, to play an instrument, to go hiking"],
        ["¿Qué planes tienes para el fin de semana?", "What plans do you have for the weekend?"],
        ["voy a + infinitivo", "I'm going to + infinitive"],
        ["quedar con amigos", "to meet up with friends"]
      ],
      grammar: [
        ["\"Ir a\" + infinitivo para planes", "Se usa \"ir a\" + infinitivo para hablar de planes futuros cercanos.", "El sábado voy a quedar con amigos."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas por las aficiones de alguien?",["¿Qué te gusta hacer en tu tiempo libre?","¿Qué hora es?","¿Dónde trabajas?","¿Cuántos hermanos tienes?"],0,"\"¿Qué te gusta hacer en tu tiempo libre?\" pregunta específicamente por las aficiones."],
      ["mcq","¿Cuál de estas frases describe un plan futuro cercano?",["El sábado voy a quedar con amigos.","El sábado quedé con amigos.","El sábado quedo con amigos siempre.","El sábado quedaba con amigos."],0,"\"Voy a\" + infinitivo expresa un plan futuro concreto y cercano."],
      ["fill","Completa: \"Este fin de semana ___ a hacer senderismo.\"",["voy","soy","tengo","hago"],0,"\"Ir a\" + infinitivo: \"voy a hacer senderismo\"."],
      ["translate","Traduce: \"What plans do you have for the weekend?\"",["¿Qué planes tienes para el fin de semana?","¿Qué planes eres para el fin de semana?","¿Qué planes haces el fin de semana tienes?","¿Para el fin de semana qué planes eres?"],0,"\"What plans do you have for the weekend?\" = \"¿Qué planes tienes para el fin de semana?\""],
      ["arrange","Ordena: [instrumento / tocar / me / un / gusta]",["Me gusta tocar un instrumento","Gusta me tocar un instrumento","Un instrumento me gusta tocar","Tocar me gusta un instrumento"],0,"\"Me gusta\" + infinitivo: \"Me gusta tocar un instrumento.\""],
      ["speaking","Explica en 40-60 palabras tus aficiones favoritas y tus planes para el próximo fin de semana.",[],["me gusta","voy a","quedar"],"Menciona al menos dos aficiones y un plan concreto usando \"voy a\"."]
    ]
  },
  {
    id:"es_b1_environment_sustainability", level:"B1", title:"El medio ambiente: hábitos sostenibles", emoji:"🌱", xp:60,
    description:"Habla sobre el cuidado del medio ambiente y los hábitos sostenibles en español.",
    study: {
      vocab: [
        ["reciclar, reutilizar, reducir el consumo", "to recycle, to reuse, to reduce consumption"],
        ["el cambio climático, la huella de carbono", "climate change, carbon footprint"],
        ["los productos de un solo uso", "single-use products"],
        ["ahorrar energía / agua", "to save energy / water"],
        ["tomar medidas para proteger el planeta", "to take steps to protect the planet"]
      ],
      grammar: [
        ["El futuro simple para consecuencias", "El futuro simple describe consecuencias probables de acciones actuales.", "Si no reducimos el plástico, la contaminación aumentará."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas acciones ayuda a reducir la huella de carbono?",["Usar el transporte público en vez del coche.","Comprar más productos de un solo uso.","Dejar las luces encendidas todo el día.","Usar el coche para trayectos muy cortos."],0,"El transporte público reduce las emisiones individuales de carbono."],
      ["mcq","¿Qué frase describe correctamente una consecuencia futura probable?",["Si no reducimos el plástico, la contaminación aumentará.","Si no reducimos el plástico, la contaminación aumentó.","Si no reducimos el plástico, la contaminación aumenta ayer.","Si no reducimos el plástico, contaminación aumentar."],0,"El futuro simple (\"aumentará\") expresa una consecuencia probable de una condición actual."],
      ["fill","Completa: \"Es importante ___ agua, sobre todo en verano.\"",["ahorrar","gastar","tirar","comprar"],0,"\"Ahorrar agua\" es la expresión correcta para reducir su consumo."],
      ["translate","Traduce: \"We should reduce the use of single-use products.\"",["Deberíamos reducir el uso de productos de un solo uso.","Deberíamos reducir el uso de producto un solo uso.","Reducir deberíamos productos de un solo uso el uso.","Deberíamos usar productos de un solo uso reducir."],0,"\"Single-use products\" = \"productos de un solo uso\"; \"we should reduce\" = \"deberíamos reducir\"."],
      ["arrange","Ordena: [reciclar / importante / es / vidrio / el]",["Es importante reciclar el vidrio","El vidrio es importante reciclar","Importante es reciclar el vidrio","Es reciclar importante el vidrio"],0,"\"Es importante\" + infinitivo + objeto: \"Es importante reciclar el vidrio.\""],
      ["writing","Escribe 45-65 palabras sobre tres hábitos sostenibles que practicas o te gustaría empezar a practicar, y por qué son importantes para el medio ambiente.",[],["reciclar","ahorrar","huella de carbono"],"Menciona al menos tres hábitos concretos y una razón para cada uno."]
    ]
  },
  {
    id:"es_b2_ai_future_work", level:"B2", title:"Inteligencia artificial y el futuro del trabajo", emoji:"🤖", xp:80,
    description:"Discute el impacto de la inteligencia artificial en el trabajo, con argumentos matizados en español.",
    study: {
      vocab: [
        ["automatizar tareas repetitivas", "to automate repetitive tasks"],
        ["sustituir puestos de trabajo", "to replace jobs"],
        ["adaptarse a nuevas herramientas", "to adapt to new tools"],
        ["generar nuevas oportunidades laborales", "to generate new job opportunities"],
        ["depende de cómo se implemente", "it depends on how it's implemented"]
      ],
      grammar: [
        ["El futuro compuesto para especulación", "\"Habrá\" + participio especula sobre lo que probablemente haya ocurrido para cierto momento futuro.", "Para 2030, la IA habrá cambiado muchos sectores laborales."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases presenta una postura matizada sobre la IA y el empleo?",["Depende de cómo se implemente: puede automatizar tareas pero también generar nuevos empleos.","La IA va a destruir todos los trabajos, sin excepción.","La IA no afecta en absoluto al empleo.","No hay ninguna duda sobre el futuro del trabajo."],0,"Una postura matizada reconoce ambos efectos posibles, sin absolutos."],
      ["mcq","¿Qué significa \"automatizar tareas repetitivas\"?",["Hacer que una máquina realice tareas que antes hacía una persona de forma manual y repetida.","Contratar a más personas para tareas repetitivas.","Eliminar por completo todas las tareas de una empresa.","Aumentar el salario de quienes hacen tareas repetitivas."],0,"Automatizar significa que un sistema realiza la tarea en lugar de una persona."],
      ["fill","Completa: \"Para 2030, la inteligencia artificial ___ cambiado muchos sectores laborales.\"",["habrá","había","ha","hubiera"],0,"El futuro compuesto (\"habrá cambiado\") especula sobre algo que probablemente habrá ocurrido para una fecha futura."],
      ["translate","Traduce: \"Some jobs will be automated, but new ones will also be created.\"",["Algunos empleos se automatizarán, pero también se crearán otros nuevos.","Algunos empleos automatizarán, pero crearán otros nuevos también.","Se automatizarán algunos empleos, pero otros nuevos crearán también.","Algunos empleos se automatizarán, pero también crearon otros nuevos."],0,"Ambas cláusulas van en futuro simple: \"se automatizarán\" y \"se crearán\"."],
      ["mcq","¿Cuál de estas afirmaciones muestra pensamiento crítico, no una opinión sin fundamento?",["El impacto de la IA en el empleo dependerá del sector y de cómo se gestione la transición.","La IA siempre es buena para todos, sin excepciones.","La IA siempre es mala para todos, sin excepciones.","No vale la pena pensar en el futuro del trabajo."],0,"Reconocer que el impacto depende de factores concretos (sector, gestión) es pensamiento crítico y matizado."],
      ["writing","Escribe 55-75 palabras sobre cómo crees que la inteligencia artificial cambiará tu campo de trabajo o estudio en los próximos años. Incluye un aspecto positivo y uno preocupante.",[],["automatizar","depende de","sin embargo"],"Evita los absolutos: reconoce tanto ventajas como riesgos concretos."]
    ]
  },
  {
    id:"es_c1_advertising_persuasion", level:"C1", title:"El lenguaje publicitario: persuasión y connotación", emoji:"📢", xp:88,
    description:"Analiza cómo el lenguaje publicitario usa la connotación y las técnicas de persuasión.",
    study: {
      vocab: [
        ["una connotación positiva / negativa", "a positive / negative connotation"],
        ["apelar al deseo de pertenencia", "to appeal to the desire to belong"],
        ["un eslogan pegadizo", "a catchy slogan"],
        ["crear una sensación de urgencia", "to create a sense of urgency"],
        ["el público objetivo", "the target audience"]
      ],
      grammar: [
        ["Connotación frente a denotación", "La denotación es el significado literal de una palabra; la connotación es la carga emocional o cultural asociada.", "\"Casa\" (denotación: edificio) frente a \"hogar\" (connotación: calidez, pertenencia)."]
      ]
    },
    ex:[
      ["mcq","Un anuncio usa la palabra \"hogar\" en vez de \"vivienda\". ¿Qué logra con esto?",["Añade una connotación emocional de calidez y pertenencia.","Cambia completamente el significado literal.","Elimina cualquier interpretación emocional.","No tiene ningún efecto en el mensaje."],0,"\"Hogar\" tiene connotaciones emocionales que \"vivienda\" no transmite, aunque el significado literal sea similar."],
      ["mcq","\"¡Solo quedan 3 unidades, compra ahora!\" ¿Qué técnica de persuasión usa esta frase?",["Crear una sensación de urgencia para motivar una decisión rápida.","Apelar exclusivamente a datos técnicos objetivos.","Ofrecer una comparación neutral con otros productos.","Describir el producto sin ningún tipo de presión."],0,"Mencionar unidades limitadas y urgencia empuja a decidir sin pensarlo demasiado."],
      ["fill","Completa: \"Este anuncio está dirigido a un ___ objetivo muy específico: jóvenes profesionales.\"",["público","texto","autor","lector"],0,"\"Público objetivo\" es la expresión estándar para referirse a la audiencia a la que se dirige un mensaje."],
      ["translate","Traduce: \"The slogan appeals to the desire to belong.\"",["El eslogan apela al deseo de pertenencia.","El eslogan apela el deseo de pertenencia.","El deseo de pertenencia apela al eslogan.","El eslogan apelar al deseo de pertenencia."],0,"\"Appeals to\" = \"apela a\"; \"the desire to belong\" = \"el deseo de pertenencia\"."],
      ["mcq","¿Cuál de estas palabras tiene una connotación más positiva que su sinónimo más neutral?",["\"Exclusivo\" frente a \"limitado\".","\"Producto\" frente a \"artículo\".","\"Comprar\" frente a \"adquirir\".","\"Anuncio\" frente a \"publicidad\"."],0,"\"Exclusivo\" añade una connotación de prestigio y distinción que \"limitado\" no transmite igual."],
      ["writing","Elige un anuncio real o inventado y escribe 55-75 palabras analizando: qué connotaciones usa, a qué público objetivo se dirige y qué técnica de persuasión emplea.",[],["connotación","público objetivo","urgencia"],"Identifica al menos una palabra con connotación específica y una técnica de persuasión concreta."]
    ]
  },
  {
    id:"es_c2_political_discourse", level:"C2", title:"El discurso político: ambigüedad estratégica y eufemismo", emoji:"🎙️", xp:96,
    description:"Analiza la ambigüedad estratégica y el eufemismo en el discurso político de alto nivel.",
    study: {
      vocab: [
        ["un eufemismo", "a euphemism"],
        ["la ambigüedad estratégica", "strategic ambiguity"],
        ["evadir una pregunta directa", "to dodge a direct question"],
        ["un ajuste presupuestario (eufemismo por recorte)", "a budget adjustment (euphemism for a cut)"],
        ["comprometerse sin comprometerse del todo", "to commit without fully committing"]
      ],
      grammar: [
        ["Reconocer el eufemismo político", "Un eufemismo sustituye una expresión directa por otra más suave, a menudo para suavizar una realidad incómoda.", "\"Ajuste presupuestario\" suena más neutral que \"recorte de gastos\", aunque describa lo mismo."],
        ["Ambigüedad estratégica", "Los políticos a veces eligen deliberadamente frases vagas para evitar comprometerse con una postura clara.", "\"Estamos evaluando todas las opciones\" no dice qué opción se tomará realmente."]
      ]
    },
    ex:[
      ["mcq","Un político dice \"ajuste presupuestario\" en vez de \"recorte de gastos\". ¿Qué logra con esto?",["Suaviza el impacto negativo de la medida mediante un eufemismo.","Cambia completamente el significado de la medida.","Hace la medida más transparente y directa.","Elimina cualquier interpretación negativa posible."],0,"El eufemismo suaviza la percepción sin cambiar la realidad de la medida."],
      ["mcq","\"Estamos evaluando todas las opciones\" dicho ante una pregunta directa. ¿Qué función cumple esta frase?",["Evade un compromiso claro mediante ambigüedad estratégica.","Da una respuesta completamente transparente y específica.","Confirma exactamente qué decisión se tomará.","Niega rotundamente cualquier posible decisión."],0,"Esta frase evita comprometerse con una postura concreta, manteniendo todas las opciones abiertas en apariencia."],
      ["fill","Completa: \"El gobierno anunció un ___ presupuestario que en realidad implicaba recortes importantes.\"",["ajuste","aumento","regalo","premio"],0,"\"Ajuste presupuestario\" es el eufemismo típico para \"recorte\"."],
      ["translate","Traduce con precisión: \"Politicians sometimes commit without fully committing.\"",["Los políticos a veces se comprometen sin comprometerse del todo.","Los políticos a veces comprometen sin comprometer completo.","A veces los políticos completamente se comprometen sin comprometer.","Los políticos se comprometen a veces completo sin comprometerse."],0,"\"Commit without fully committing\" = \"comprometerse sin comprometerse del todo\", capturando la ambigüedad intencional."],
      ["mcq","¿Cuál de estas frases es un ejemplo claro de ambigüedad estratégica?",["No descartamos ninguna posibilidad en este momento.","El presupuesto se reducirá exactamente un 12% este año.","La ley entrará en vigor el 1 de enero, sin excepciones.","Renunciaré a mi cargo la próxima semana."],0,"\"No descartamos ninguna posibilidad\" no compromete a nada concreto, dejando todas las puertas abiertas."],
      ["writing","Escribe 55-75 palabras analizando un eufemismo o un caso de ambigüedad estratégica que hayas visto en un discurso político real o inventado. Explica qué frase directa estaría evitando y por qué.",[],["eufemismo","en lugar de","evita comprometerse"],"Identifica la frase exacta, el significado más directo que sustituye, y el efecto que busca en la audiencia."]
    ]
  },
  {
    id:"es_a1_money_prices", level:"A1", title:"Números ordinales, dinero y precios", emoji:"💰", xp:36,
    description:"Aprende a hablar de precios, dinero y números ordinales en español.",
    study: {
      vocab: [
        ["primero, segundo, tercero...", "first, second, third..."],
        ["¿Cuánto cuesta esto?", "How much does this cost?"],
        ["Cuesta diez euros.", "It costs ten euros."],
        ["barato, caro", "cheap, expensive"],
        ["pagar en efectivo / con tarjeta", "to pay in cash / by card"]
      ],
      grammar: [
        ["\"Cuesta / Cuestan\" para precios", "\"Cuesta\" (singular) y \"cuestan\" (plural) concuerdan con lo que se compra.", "El libro cuesta diez euros. Los libros cuestan veinte euros."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas el precio de algo?",["¿Cuánto cuesta esto?","¿Qué es esto?","¿Dónde está esto?","¿Cuándo es esto?"],0,"\"¿Cuánto cuesta esto?\" es la pregunta estándar para pedir un precio."],
      ["mcq","Un producto de 5 euros es más barato que uno de 50 euros. ¿Qué palabra describe el de 5 euros?",["Barato.","Caro.","Gratis.","Grande."],0,"\"Barato\" describe algo de precio bajo en comparación con otra cosa."],
      ["fill","Completa: \"Los zapatos ___ cuarenta euros.\"",["cuestan","cuesta","es","son"],0,"\"Cuestan\" concuerda en plural con \"los zapatos\"."],
      ["translate","Traduce: \"It costs ten euros.\"",["Cuesta diez euros.","Cuestan diez euros.","Es diez euros.","Tiene diez euros."],0,"\"It costs ten euros\" (singular) = \"Cuesta diez euros.\""],
      ["arrange","Ordena: [tarjeta / pago / con / siempre]",["Siempre pago con tarjeta","Pago siempre con tarjeta","Con tarjeta siempre pago","Pago con tarjeta siempre"],0,"Ambas primeras opciones son naturales; elegimos \"Siempre pago con tarjeta.\" como la más estándar."],
      ["writing","Escribe 20-30 palabras sobre tus hábitos de compra: qué cosas compras normalmente, si prefieres pagar en efectivo o con tarjeta, y si buscas cosas baratas o no te importa el precio.",[],["cuesta","barato","pago"],"Usa al menos un número ordinal o un precio concreto en tu respuesta."]
    ]
  },
  {
    id:"es_a2_restaurant_ordering", level:"A2", title:"En el restaurante: pedir y pagar la cuenta", emoji:"🍽️", xp:45,
    description:"Aprende a pedir comida, hacer preguntas al camarero y pagar la cuenta en un restaurante.",
    study: {
      vocab: [
        ["Quisiera pedir...", "I would like to order..."],
        ["¿Qué me recomienda?", "What do you recommend?"],
        ["¿Me trae la cuenta, por favor?", "Could you bring me the bill, please?"],
        ["¿Está incluida la propina?", "Is the tip included?"],
        ["Para mí, el menú del día.", "For me, the set menu."]
      ],
      grammar: [
        ["\"Quisiera\" para pedir con cortesía", "\"Quisiera\" (condicional de \"querer\") es más formal y cortés que \"quiero\" al pedir algo.", "Quisiera pedir la sopa y el pollo, por favor."]
      ]
    },
    ex:[
      ["mcq","¿Cuál es la forma más cortés de pedir comida en un restaurante?",["Quisiera pedir la sopa, por favor.","Quiero la sopa ya.","Dame la sopa.","Sopa, ahora."],0,"\"Quisiera\" es la forma cortés y formal de pedir algo."],
      ["mcq","Terminaste de comer y quieres pagar. ¿Qué dices?",["¿Me trae la cuenta, por favor?","¿Me trae el menú, por favor?","¿Qué me recomienda?","¿Está libre esta mesa?"],0,"\"¿Me trae la cuenta, por favor?\" es la frase estándar para pedir pagar."],
      ["fill","Completa: \"___ pedir el pescado con ensalada, por favor.\"",["Quisiera","Quiero ya","Dame","Tengo"],0,"\"Quisiera pedir\" es la forma cortés estándar para hacer un pedido."],
      ["translate","Traduce: \"Is the tip included?\"",["¿Está incluida la propina?","¿Está incluido la propina?","¿La propina está incluir?","¿Incluida está la propina en?"],0,"\"Is the tip included?\" = \"¿Está incluida la propina?\", con concordancia femenina (\"incluida\")."],
      ["arrange","Ordena: [recomienda / me / qué]",["Qué me recomienda","Me qué recomienda","Recomienda qué me","Me recomienda qué"],0,"Pregunta con \"qué\" al inicio: \"¿Qué me recomienda?\""],
      ["speaking","Representa en 40-60 palabras una conversación breve en un restaurante: pide un plato, pregunta por una recomendación y pide la cuenta al final.",[],["quisiera","me recomienda","la cuenta"],"Incluye las tres partes: pedido, pregunta al camarero y solicitud de la cuenta."]
    ]
  },
  {
    id:"es_b1_personal_finance", level:"B1", title:"Finanzas personales: el banco y el presupuesto", emoji:"🏦", xp:62,
    description:"Habla sobre cuentas bancarias, ahorro y presupuesto personal en español.",
    study: {
      vocab: [
        ["abrir una cuenta bancaria", "to open a bank account"],
        ["hacer un presupuesto mensual", "to make a monthly budget"],
        ["ahorrar para un objetivo", "to save up for a goal"],
        ["los gastos fijos y los gastos variables", "fixed expenses and variable expenses"],
        ["pedir un préstamo, pagar a plazos", "to take out a loan, to pay in installments"]
      ],
      grammar: [
        ["El condicional para consejos financieros", "\"Deberías\" + infinitivo da un consejo sin sonar demasiado directo.", "Deberías ahorrar al menos un 10% de tu sueldo cada mes."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases da un consejo financiero de forma adecuada?",["Deberías ahorrar un poco cada mes, aunque sea poco.","Ahorra ahora mismo, no hay otra opción.","El ahorro no sirve para nada.","Nunca vas a poder ahorrar nada."],0,"\"Deberías\" + infinitivo da un consejo de forma cortés y razonable."],
      ["mcq","¿Qué diferencia hay entre gastos fijos y variables?",["Los fijos se repiten cada mes por el mismo monto; los variables cambian.","Los fijos cambian cada mes; los variables son siempre iguales.","No hay ninguna diferencia real entre ellos.","Los variables solo existen en negocios, no en personas."],0,"Los gastos fijos (alquiler, por ejemplo) se mantienen estables; los variables (ocio, comida) cambian mes a mes."],
      ["fill","Completa: \"Voy a ___ una cuenta bancaria nueva este mes.\"",["abrir","cerrar","gastar","perder"],0,"\"Abrir una cuenta bancaria\" es la colocación correcta para crear una cuenta nueva."],
      ["translate","Traduce: \"You should make a monthly budget.\"",["Deberías hacer un presupuesto mensual.","Deberías hacer presupuesto mensual un.","Un presupuesto mensual deberías hacer.","Deberías un presupuesto mensual hacer."],0,"\"You should make a monthly budget\" = \"Deberías hacer un presupuesto mensual.\""],
      ["arrange","Ordena: [ahorrar / objetivo / para / un / quiero]",["Quiero ahorrar para un objetivo","Para un objetivo quiero ahorrar","Ahorrar quiero para un objetivo","Quiero para un objetivo ahorrar"],0,"Sujeto + \"quiero\" + infinitivo + complemento: \"Quiero ahorrar para un objetivo.\""],
      ["writing","Escribe 45-65 palabras sobre tu relación con el dinero: cómo organizas tu presupuesto, si ahorras para algo concreto y algún hábito financiero que te gustaría mejorar.",[],["presupuesto","ahorrar","gastos"],"Menciona al menos un gasto fijo, un gasto variable y una meta de ahorro."]
    ]
  },
  {
    id:"es_b2_mental_wellbeing", level:"B2", title:"Bienestar y salud mental: hablar con matices", emoji:"🧘", xp:82,
    description:"Habla sobre el bienestar emocional y la salud mental con un vocabulario más matizado.",
    study: {
      vocab: [
        ["sentirse abrumado/a", "to feel overwhelmed"],
        ["poner límites, cuidar de uno mismo", "to set boundaries, to take care of yourself"],
        ["el agotamiento (burnout)", "burnout"],
        ["pedir ayuda no es un signo de debilidad", "asking for help is not a sign of weakness"],
        ["procesar las emociones", "to process one's emotions"]
      ],
      grammar: [
        ["El subjuntivo con expresiones de recomendación", "\"Es importante que\" + subjuntivo recomienda una acción relacionada con el bienestar.", "Es importante que hables de lo que sientes con alguien de confianza."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases usa el subjuntivo correctamente para dar una recomendación?",["Es importante que descanses cuando lo necesites.","Es importante que descansas cuando lo necesitas.","Es importante descansas cuando necesitas.","Es importante que descansar cuando necesites."],0,"\"Es importante que\" exige subjuntivo: \"que descanses\"."],
      ["mcq","¿Qué significa \"sentirse abrumado/a\"?",["Sentir que hay demasiadas cosas que gestionar a la vez.","Sentirse extremadamente feliz y tranquilo.","No sentir absolutamente nada.","Sentir curiosidad sobre algo nuevo."],0,"\"Abrumado\" describe una sensación de exceso de tareas o emociones difíciles de manejar."],
      ["fill","Completa: \"Poner ___ es importante para cuidar tu bienestar.\"",["límites","dinero","ropa","comida"],0,"\"Poner límites\" es la expresión correcta para proteger el propio bienestar emocional."],
      ["translate","Traduce: \"Asking for help is not a sign of weakness.\"",["Pedir ayuda no es un signo de debilidad.","Pedir ayuda no es una señal débil.","Pedir ayuda no es signo de debilidad no.","No pedir ayuda es un signo de debilidad."],0,"\"Asking for help is not a sign of weakness\" = \"Pedir ayuda no es un signo de debilidad.\""],
      ["mcq","¿Cuál de estas frases refleja procesar una emoción de forma saludable, no evitarla?",["Reconozco que estoy triste y me doy tiempo para entender por qué.","Finjo que no pasa nada e ignoro cómo me siento.","Me distraigo constantemente para no sentir nada.","Le digo a todos que estoy perfectamente, aunque no sea así."],0,"Reconocer y explorar una emoción, en vez de evitarla, es un procesamiento emocional saludable."],
      ["writing","Escribe 55-75 palabras sobre una estrategia que uses (o te gustaría usar) para cuidar tu bienestar emocional cuando te sientes abrumado/a.",[],["abrumado","límites","procesar"],"Usa al menos una expresión con subjuntivo de recomendación (\"es importante que...\")."]
    ]
  },
  {
    id:"es_c1_legal_language", level:"C1", title:"Lenguaje jurídico básico: contratos y cláusulas", emoji:"📜", xp:90,
    description:"Comprende el vocabulario y las estructuras básicas del lenguaje jurídico en contratos.",
    study: {
      vocab: [
        ["las partes contratantes", "the contracting parties"],
        ["una cláusula, un anexo", "a clause, an appendix"],
        ["rescindir un contrato", "to terminate a contract"],
        ["estar sujeto a los términos y condiciones", "to be subject to the terms and conditions"],
        ["en caso de incumplimiento", "in the event of a breach"]
      ],
      grammar: [
        ["El lenguaje formal impersonal en contratos", "Los contratos usan estructuras impersonales y pasivas para sonar objetivos y evitar ambigüedad sobre quién actúa.", "El presente contrato podrá ser rescindido por cualquiera de las partes con un preaviso de 30 días."],
        ["\"En caso de que\" + subjuntivo", "Esta estructura formal introduce condiciones legales hipotéticas.", "En caso de que una de las partes incumpla lo acordado, se aplicará una penalización."]
      ]
    },
    ex:[
      ["mcq","¿Qué significa \"rescindir un contrato\"?",["Terminar o anular un contrato antes de lo previsto.","Firmar un contrato nuevo.","Modificar solo una cláusula del contrato.","Renovar un contrato automáticamente."],0,"\"Rescindir\" significa poner fin a un contrato, generalmente antes de su vencimiento natural."],
      ["mcq","¿Cuál de estas frases usa correctamente el lenguaje formal impersonal típico de un contrato?",["El presente contrato podrá ser rescindido por cualquiera de las partes.","Cualquiera puede romper este contrato si quiere.","Alguien puede cancelar esto cuando le dé la gana.","Se puede cancelar el contrato porque sí."],0,"El lenguaje contractual formal usa construcciones pasivas e impersonales, evitando un tono coloquial."],
      ["fill","Completa: \"___ de que una de las partes incumpla lo acordado, se aplicará una penalización.\"",["En caso","Porque","Aunque","Sin embargo"],0,"\"En caso de que\" + subjuntivo introduce una condición legal hipotética."],
      ["translate","Traduce: \"The contract is subject to the terms and conditions described in Appendix A.\"",["El contrato está sujeto a los términos y condiciones descritos en el Anexo A.","El contrato está sujeto los términos y condiciones descritos en el Anexo A.","El contrato es sujeto a los términos y condiciones en el Anexo A descritos.","Sujeto el contrato está a los términos del Anexo A."],0,"\"Subject to\" = \"sujeto a\"; \"described in Appendix A\" = \"descritos en el Anexo A\"."],
      ["mcq","¿Qué son \"las partes contratantes\"?",["Las personas o entidades que firman y se comprometen en un contrato.","Solo la persona que redacta el contrato.","Las secciones o capítulos de un contrato.","Los testigos que no firman el contrato."],0,"\"Las partes contratantes\" se refiere a quienes firman el contrato y asumen obligaciones en él."],
      ["writing","Escribe 55-75 palabras redactando una cláusula sencilla de un contrato ficticio (por ejemplo, sobre plazos de entrega o condiciones de cancelación), usando un registro formal e impersonal.",[],["las partes","en caso de que","rescindir"],"Usa al menos una construcción pasiva o impersonal, propia del registro jurídico formal."]
    ]
  },
  {
    id:"es_c2_literary_criticism", level:"C2", title:"Crítica literaria: voz narrativa y estilo", emoji:"📖", xp:97,
    description:"Analiza la voz narrativa, el estilo y las decisiones formales de un texto literario en español.",
    study: {
      vocab: [
        ["la voz narrativa", "the narrative voice"],
        ["un narrador fiable / poco fiable", "a reliable / unreliable narrator"],
        ["el punto de vista (primera, tercera persona)", "point of view (first, third person)"],
        ["el tono y el registro de un texto", "the tone and register of a text"],
        ["una técnica narrativa (flashback, elipsis)", "a narrative technique (flashback, ellipsis)"]
      ],
      grammar: [
        ["Analizar decisiones formales del autor", "El análisis literario avanzado conecta una elección formal (punto de vista, tiempo verbal) con su efecto en el lector.", "El uso de la primera persona genera cercanía, pero también limita la perspectiva a lo que el narrador puede saber o percibir."]
      ]
    },
    ex:[
      ["mcq","¿Qué caracteriza a un \"narrador poco fiable\"?",["Su versión de los hechos puede estar sesgada, incompleta o ser engañosa.","Siempre dice la verdad absoluta sobre todo lo que ocurre.","Nunca tiene opinión sobre los hechos que narra.","Solo aparece en textos científicos, nunca en ficción."],0,"Un narrador poco fiable ofrece una perspectiva que el lector debe cuestionar, por sesgo, ignorancia o engaño."],
      ["mcq","¿Qué efecto suele producir la narración en primera persona?",["Genera cercanía con el narrador, pero limita la perspectiva a lo que este sabe.","Elimina cualquier conexión emocional con el lector.","Garantiza siempre una visión objetiva de los hechos.","Solo se usa en textos no literarios."],0,"La primera persona acerca al lector al narrador, a costa de una visión necesariamente parcial de los hechos."],
      ["fill","Completa: \"El uso de un ___ interrumpe la cronología para mostrar un evento del pasado.\"",["flashback","epílogo","prólogo","índice"],0,"Un \"flashback\" es la técnica narrativa que interrumpe la cronología lineal para mostrar el pasado."],
      ["translate","Traduce con precisión técnica: \"The narrator's unreliability forces the reader to question every claim.\"",["La falta de fiabilidad del narrador obliga al lector a cuestionar cada afirmación.","La no fiabilidad narrador obliga al lector cuestionar afirmación.","El narrador no fiable obliga cuestionar al lector cada afirmación es.","Cuestionar cada afirmación obliga la fiabilidad del narrador al lector."],0,"\"Unreliability\" se traduce como \"falta de fiabilidad\"; la estructura debe sonar natural en español académico."],
      ["mcq","¿Cuál de estos análisis conecta correctamente una decisión formal con su efecto en el lector?",["El tiempo presente narrativo crea una sensación de inmediatez, como si los hechos ocurrieran ahora mismo.","El autor usó el tiempo presente porque es más fácil de escribir.","El tiempo presente no tiene ningún efecto sobre cómo se percibe la historia.","El tiempo presente solo se usa en poesía, nunca en narrativa."],0,"Un buen análisis literario vincula la elección formal (tiempo verbal) con un efecto concreto en la experiencia de lectura."],
      ["writing","Elige un cuento, novela o relato que conozcas (o inventa uno breve) y escribe 55-75 palabras analizando su voz narrativa: punto de vista, fiabilidad del narrador y un efecto que esto produce en el lector.",[],["voz narrativa","punto de vista","efecto"],"Conecta explícitamente una decisión formal del autor con un efecto concreto en la lectura, no solo describas la trama."]
    ]
  },
  {
    id:"es_a1_professions_jobs", level:"A1", title:"Las profesiones: ¿a qué te dedicas?", emoji:"👩‍⚕️", xp:36,
    description:"Aprende el vocabulario básico de las profesiones y a hablar de tu trabajo en español.",
    study: {
      vocab: [
        ["médico/a, profesor/a, ingeniero/a, camarero/a", "doctor, teacher, engineer, waiter/waitress"],
        ["¿A qué te dedicas?", "What do you do for a living?"],
        ["Soy estudiante / Trabajo en una oficina.", "I'm a student / I work in an office."],
        ["¿Dónde trabajas?", "Where do you work?"],
        ["trabajar de/como + profesión", "to work as + profession"]
      ],
      grammar: [
        ["\"Ser\" con profesiones (sin artículo)", "Con profesiones, \"ser\" no lleva artículo indefinido, a diferencia del inglés.", "Soy profesor. (no \"Soy un profesor\")"]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas la profesión de alguien?",["¿A qué te dedicas?","¿Cómo te llamas?","¿Dónde vives?","¿Cuántos años tienes?"],0,"\"¿A qué te dedicas?\" pregunta específicamente por la profesión u ocupación."],
      ["mcq","¿Cuál es la forma correcta de decir tu profesión en español?",["Soy profesor.","Soy un profesor.","Tengo profesor.","Estoy profesor."],0,"En español, \"ser\" + profesión no lleva artículo: \"Soy profesor.\""],
      ["fill","Completa: \"Mi hermana ___ médica en un hospital.\"",["es","está","tiene","hace"],0,"\"Ser\" se usa para profesiones: \"Mi hermana es médica.\""],
      ["translate","Traduce: \"I work in an office.\"",["Trabajo en una oficina.","Trabajo una oficina.","Estoy trabajo en una oficina.","Trabajo de una oficina."],0,"\"I work in an office\" = \"Trabajo en una oficina.\""],
      ["arrange","Ordena: [camarero / trabajo / restaurante / de / en / un]",["Trabajo de camarero en un restaurante","De camarero trabajo en un restaurante","Trabajo en un restaurante de camarero","En un restaurante trabajo de camarero"],0,"\"Trabajo de\" + profesión + \"en\" + lugar: \"Trabajo de camarero en un restaurante.\""],
      ["writing","Escribe 20-30 palabras sobre tu profesión (real o imaginada) y dónde trabajas. Menciona al menos dos tareas que haces en tu trabajo.",[],["soy","trabajo","me dedico a"],"Usa \"ser\" para la profesión y \"trabajar en/de\" para el lugar o rol."]
    ]
  },
  {
    id:"es_a2_describing_people", level:"A2", title:"Describir personas: apariencia y personalidad", emoji:"🧑‍🤝‍🧑", xp:46,
    description:"Aprende a describir el aspecto físico y la personalidad de otras personas en español.",
    study: {
      vocab: [
        ["alto/a, bajo/a, delgado/a", "tall, short, slim"],
        ["tiene el pelo largo/corto, lleva gafas", "has long/short hair, wears glasses"],
        ["es simpático/a, tímido/a, divertido/a", "is nice, shy, funny"],
        ["se parece a su madre/padre", "looks like his/her mother/father"],
        ["¿Cómo es tu mejor amigo/a?", "What is your best friend like?"]
      ],
      grammar: [
        ["\"Ser\" para características permanentes, \"tener\" y \"llevar\" para rasgos físicos", "\"Ser\" describe personalidad y rasgos estables; \"tener\" y \"llevar\" describen partes del cuerpo o accesorios.", "Es muy simpática, tiene el pelo largo y lleva gafas."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas cómo es la personalidad de alguien?",["¿Cómo es tu mejor amigo/a?","¿Cómo estás?","¿Qué hora es?","¿De dónde eres?"],0,"\"¿Cómo es...?\" pregunta por las características o la personalidad de alguien."],
      ["mcq","¿Cuál de estas frases describe correctamente el aspecto físico de alguien?",["Tiene el pelo corto y lleva gafas.","Es el pelo corto y lleva gafas.","Tiene simpático y alto.","Es tiene gafas."],0,"\"Tener\" se usa para partes del cuerpo (\"tiene el pelo corto\") y \"llevar\" para accesorios (\"lleva gafas\")."],
      ["fill","Completa: \"Mi hermano ___ muy divertido y siempre hace bromas.\"",["es","tiene","lleva","está"],0,"\"Ser\" describe un rasgo de personalidad estable: \"es muy divertido\"."],
      ["translate","Traduce: \"She has long hair and wears glasses.\"",["Tiene el pelo largo y lleva gafas.","Es el pelo largo y lleva gafas.","Tiene pelo largo y es gafas.","Lleva el pelo largo y tiene gafas puestas."],0,"\"Has long hair\" = \"tiene el pelo largo\"; \"wears glasses\" = \"lleva gafas\"."],
      ["arrange","Ordena: [madre / se / a / su / parece]",["Se parece a su madre","A su madre se parece","Parece se a su madre","Se a su madre parece"],0,"\"Se parece a\" + persona: \"Se parece a su madre.\""],
      ["speaking","Describe en 40-60 palabras a una persona que conoces bien: su aspecto físico y tres rasgos de su personalidad.",[],["tiene","es","lleva"],"Incluye al menos dos rasgos físicos y dos de personalidad."]
    ]
  },
  {
    id:"es_b1_education_learning", level:"B1", title:"La educación: sistemas escolares y hábitos de estudio", emoji:"🎒", xp:60,
    description:"Habla sobre sistemas educativos, métodos de estudio y experiencias escolares en español.",
    study: {
      vocab: [
        ["la educación obligatoria / superior", "compulsory / higher education"],
        ["aprobar/suspender un examen", "to pass/fail an exam"],
        ["memorizar frente a comprender", "to memorize versus to understand"],
        ["un plan de estudios, una asignatura", "a curriculum, a school subject"],
        ["aprender a tu propio ritmo", "to learn at your own pace"]
      ],
      grammar: [
        ["Comparativos para comparar sistemas", "\"Más... que\", \"menos... que\" y \"tan... como\" sirven para comparar métodos o sistemas educativos.", "Este sistema es más práctico que el tradicional, aunque no es tan estructurado como aquel."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases compara correctamente dos sistemas educativos?",["Este sistema es más práctico que el tradicional.","Este sistema es práctico más el tradicional.","Este sistema es tan práctico el tradicional.","Este sistema más práctico es que tradicional."],0,"\"Más... que\" es la estructura comparativa correcta en español."],
      ["mcq","¿Qué diferencia hay entre memorizar y comprender?",["Memorizar es repetir información; comprender implica entender su significado y aplicarlo.","Son exactamente lo mismo, sin ninguna diferencia.","Memorizar siempre es mejor que comprender.","Comprender es más rápido que memorizar."],0,"Memorizar es retener datos; comprender implica un procesamiento más profundo del significado."],
      ["fill","Completa: \"Estudié mucho, pero aun así ___ el examen.\"",["suspendí","aprobé","memoricé","comprendí"],0,"El contexto (\"pero aun así\") sugiere un resultado negativo: \"suspendí el examen\"."],
      ["translate","Traduce: \"I prefer to learn at my own pace.\"",["Prefiero aprender a mi propio ritmo.","Prefiero aprender mi propio ritmo.","Prefiero a aprender mi propio ritmo.","Prefiero mi propio ritmo aprender a."],0,"\"To learn at your own pace\" = \"aprender a tu/mi propio ritmo\"."],
      ["arrange","Ordena: [asignatura / favorita / es / matemáticas / mi]",["Mi asignatura favorita es matemáticas","Es mi asignatura favorita matemáticas","Matemáticas es mi asignatura favorita","Mi favorita asignatura es matemáticas"],0,"Sujeto + \"es\" + complemento: \"Mi asignatura favorita es matemáticas.\""],
      ["writing","Escribe 45-65 palabras comparando dos formas de estudiar o dos sistemas educativos que conozcas (por ejemplo, clases presenciales frente a online), y di cuál prefieres y por qué.",[],["más...que","comprender","a mi propio ritmo"],"Usa al menos una estructura comparativa explícita."]
    ]
  },
  {
    id:"es_b2_sustainable_cities", level:"B2", title:"Ciudades sostenibles: urbanismo y movilidad", emoji:"🚲", xp:82,
    description:"Discute propuestas de urbanismo y movilidad sostenible en las ciudades, con argumentos matizados.",
    study: {
      vocab: [
        ["el transporte público, el carril bici", "public transport, the bike lane"],
        ["peatonalizar el centro de la ciudad", "to pedestrianize the city center"],
        ["reducir el tráfico y la contaminación", "to reduce traffic and pollution"],
        ["un espacio verde, una zona peatonal", "a green space, a pedestrian zone"],
        ["invertir en infraestructura sostenible", "to invest in sustainable infrastructure"]
      ],
      grammar: [
        ["El subjuntivo con expresiones de duda u opinión", "\"No creo que\" y \"es posible que\" exigen subjuntivo al expresar duda u opinión sobre propuestas urbanas.", "No creo que peatonalizar todo el centro sea la única solución posible."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases usa correctamente el subjuntivo para expresar duda?",["No creo que esta medida sea suficiente por sí sola.","No creo que esta medida es suficiente por sí sola.","No creo esta medida sea suficiente.","No creo que esta medida ser suficiente."],0,"\"No creo que\" exige subjuntivo: \"que...sea\"."],
      ["mcq","¿Qué significa \"peatonalizar el centro de la ciudad\"?",["Restringir o eliminar el tráfico de vehículos para priorizar a las personas que caminan.","Construir más carreteras en el centro.","Aumentar el número de coches permitidos en el centro.","Eliminar todas las tiendas del centro."],0,"\"Peatonalizar\" significa convertir un espacio para uso prioritario de peatones, limitando vehículos."],
      ["fill","Completa: \"Es posible que el carril bici ___ el tráfico en esa zona.\"",["reduzca","reduce","reducirá","redujo"],0,"\"Es posible que\" exige subjuntivo: \"que reduzca\"."],
      ["translate","Traduce: \"Investing in public transport reduces pollution in the long term.\"",["Invertir en transporte público reduce la contaminación a largo plazo.","Invertir en transporte público reducir la contaminación a largo plazo.","Invertir transporte público en reduce la contaminación largo plazo.","Reduce invertir en transporte público la contaminación a largo plazo."],0,"\"Investing in public transport reduces pollution\" = \"Invertir en transporte público reduce la contaminación.\""],
      ["mcq","¿Cuál de estas frases presenta una postura matizada sobre la movilidad urbana?",["Depende del contexto: en algunas ciudades el coche sigue siendo necesario, en otras no.","El coche debería prohibirse en todas partes sin excepción.","El transporte público nunca funciona bien en ninguna ciudad.","No hay ninguna solución posible para el tráfico urbano."],0,"Una postura matizada reconoce que la solución depende del contexto específico de cada ciudad."],
      ["writing","Escribe 55-75 palabras proponiendo una mejora de movilidad sostenible para una ciudad que conozcas, explicando un beneficio y una posible dificultad de implementarla.",[],["es posible que","peatonal","transporte público"],"Usa al menos una estructura con subjuntivo de duda u opinión."]
    ]
  },
  {
    id:"es_c1_science_communication", level:"C1", title:"Divulgación científica: comunicar con precisión", emoji:"🔬", xp:90,
    description:"Aprende a comunicar información científica compleja de forma clara y precisa, sin perder rigor.",
    study: {
      vocab: [
        ["simplificar sin distorsionar", "to simplify without distorting"],
        ["un hallazgo preliminar frente a uno confirmado", "a preliminary finding versus a confirmed one"],
        ["la evidencia científica sugiere que...", "scientific evidence suggests that..."],
        ["una analogía útil para explicar algo complejo", "a useful analogy to explain something complex"],
        ["evitar el sensacionalismo científico", "to avoid scientific sensationalism"]
      ],
      grammar: [
        ["Verbos de matiz para comunicar incertidumbre científica", "\"Sugiere\", \"indica\", \"podría explicar\" transmiten distintos grados de certeza científica, más precisos que \"prueba\" o \"demuestra\".", "El estudio sugiere una posible relación, pero no demuestra causalidad."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases comunica un hallazgo científico con el matiz correcto?",["El estudio sugiere una posible relación, pero no demuestra causalidad.","El estudio prueba de forma definitiva que esto causa aquello.","Los científicos ya lo saben todo sobre este tema.","Este hallazgo es cien por cien seguro, sin ninguna duda."],0,"\"Sugiere\" y \"no demuestra causalidad\" reflejan con precisión el nivel real de certeza de un hallazgo preliminar."],
      ["mcq","¿Por qué es importante \"simplificar sin distorsionar\" en la divulgación científica?",["Porque simplificar demasiado puede cambiar el significado real del hallazgo.","Porque la ciencia nunca debería explicarse a personas no expertas.","Porque los detalles técnicos no importan en absoluto.","Porque toda simplificación es automáticamente incorrecta."],0,"Simplificar es necesario para llegar a más público, pero distorsionar el significado original es un error grave de divulgación."],
      ["fill","Completa: \"Este es un hallazgo ___: hacen falta más estudios para confirmarlo.\"",["preliminar","confirmado","definitivo","absoluto"],0,"\"Preliminar\" indica que el hallazgo aún no está confirmado de forma concluyente."],
      ["translate","Traduce: \"Scientific evidence suggests that this treatment could be effective.\"",["La evidencia científica sugiere que este tratamiento podría ser eficaz.","La evidencia científica sugiere este tratamiento podría eficaz.","Sugiere la evidencia científica que tratamiento podría ser eficaz.","La evidencia científica sugiere que este tratamiento ser eficaz podría."],0,"\"Scientific evidence suggests that\" = \"La evidencia científica sugiere que\", seguido de \"podría ser\" para expresar posibilidad."],
      ["mcq","Un titular dice \"¡La ciencia lo confirma: esta fruta cura el cáncer!\" basándose en un solo estudio preliminar en ratones. ¿Qué problema tiene este titular?",["Exagera un hallazgo preliminar y limitado como si fuera una certeza absoluta y aplicable a humanos.","Es un ejemplo perfecto de divulgación científica rigurosa.","No contiene ningún tipo de sensacionalismo.","Refleja con precisión el nivel de evidencia disponible."],0,"El titular convierte un hallazgo preliminar en ratones en una afirmación absoluta sobre humanos, un caso claro de sensacionalismo."],
      ["writing","Elige un descubrimiento científico (real o inventado) y escribe 55-75 palabras explicándolo de forma clara y accesible, usando una analogía y manteniendo el matiz correcto de certeza (evita palabras como \"prueba\" si el hallazgo es preliminar).",[],["sugiere","preliminar","es como"],"Incluye al menos una analogía y un verbo de matiz que refleje correctamente el nivel de certeza."]
    ]
  },
  {
    id:"es_c2_speech_acts_pragmatics", level:"C2", title:"Pragmática: lo que hacemos al decir algo", emoji:"💭", xp:98,
    description:"Analiza los actos de habla y la pragmática: la diferencia entre lo que se dice y lo que se hace al decirlo.",
    study: {
      vocab: [
        ["un acto de habla (petición, promesa, orden)", "a speech act (request, promise, order)"],
        ["el significado literal frente al significado pretendido", "literal meaning versus intended meaning"],
        ["un acto de habla indirecto", "an indirect speech act"],
        ["las condiciones de felicidad de un acto de habla", "the felicity conditions of a speech act"],
        ["implicar algo sin decirlo explícitamente", "to imply something without saying it explicitly"]
      ],
      grammar: [
        ["Actos de habla directos frente a indirectos", "Un acto de habla indirecto usa una forma gramatical (como una pregunta) para realizar otra función (como una petición).", "\"¿Podrías cerrar la ventana?\" tiene forma de pregunta, pero su función real es una petición, no pedir información."]
      ]
    },
    ex:[
      ["mcq","\"¿Podrías pasarme la sal?\" en una cena. ¿Qué acto de habla es esto, en realidad?",["Una petición indirecta, aunque tenga forma de pregunta.","Una pregunta genuina sobre la capacidad de la otra persona.","Una orden directa y explícita.","Una promesa sobre el futuro."],0,"Aunque tiene forma gramatical de pregunta sobre capacidad, su función real es pedir que alguien pase la sal: es una petición indirecta."],
      ["mcq","Un jefe dice a un empleado: \"Hace un poco de frío aquí, ¿no?\" cerca de una ventana abierta. ¿Qué probablemente está haciendo con este enunciado?",["Pidiendo indirectamente que alguien cierre la ventana.","Simplemente comentando el clima sin ninguna otra intención.","Preguntando sobre la temperatura exacta de la habitación.","Ordenando explícitamente que se apague la calefacción."],0,"El comentario funciona como una petición indirecta para que alguien cierre la ventana, sin decirlo explícitamente."],
      ["fill","Completa: \"Decir 'prometo' en voz alta no basta; también deben cumplirse ciertas ___ para que la promesa sea válida.\"",["condiciones de felicidad","reglas gramaticales","normas ortográficas","preguntas retóricas"],0,"Las \"condiciones de felicidad\" son los requisitos contextuales (sinceridad, capacidad, etc.) para que un acto de habla funcione correctamente."],
      ["translate","Traduce con precisión técnica: \"This is an indirect speech act: its literal form doesn't match its intended function.\"",["Este es un acto de habla indirecto: su forma literal no coincide con su función pretendida.","Este es acto de habla indirecto forma literal no coincide función.","Es un acto de habla este indirecto que no coincide con función literal.","Este acto de habla es indirecto su forma no función coincide."],0,"\"Indirect speech act\" = \"acto de habla indirecto\"; \"literal form\" = \"forma literal\"; \"intended function\" = \"función pretendida\"."],
      ["mcq","¿Cuál de estos enunciados implica algo sin decirlo explícitamente?",["\"Algunos estudiantes aprobaron el examen.\" (implica que no todos aprobaron)","\"Todos los estudiantes aprobaron el examen.\"","\"El examen fue el lunes a las nueve.\"","\"Hay treinta estudiantes en la clase.\""],0,"\"Algunos\" implica pragmáticamente \"no todos\", aunque no lo afirme literalmente; es una implicatura conversacional clásica."],
      ["writing","Escribe 55-75 palabras analizando un acto de habla indirecto de una conversación cotidiana (real o inventada): qué se dijo literalmente, qué función pragmática cumplía en realidad, y cómo lo supiste por el contexto.",[],["acto de habla","literalmente","en realidad"],"Distingue explícitamente entre la forma gramatical literal del enunciado y su función pragmática real."]
    ]
  },
  {
    id:"es_a1_animals_nature", level:"A1", title:"Los animales y la naturaleza", emoji:"🐾", xp:36,
    description:"Aprende el vocabulario de animales comunes y la naturaleza en español.",
    study: {
      vocab: [
        ["el perro", "the dog"],
        ["el gato", "the cat"],
        ["el pájaro", "the bird"],
        ["el caballo", "the horse"],
        ["el pez", "the fish"],
        ["la vaca", "the cow"],
        ["el bosque, la montaña, el río", "the forest, the mountain, the river"],
      ],
      grammar: [
        ["Género de los animales", "Muchos nombres de animales cambian de forma según el género (el gato/la gata), pero otros son invariables.", "El gato es blanco. / La gata es blanca. / El pez es pequeño (invariable)."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el caballo” en inglés?",["the cow", "the dog", "the fish", "the horse"],3,"“Caballo” es “horse” en inglés."],
      ["mcq","¿Cómo se dice “el pájaro” en inglés?",["the fish", "the cow", "the bird", "the dog"],2,"“Pájaro” es “bird” en inglés."],
      ["fill","Completa: “Me gusta pasear por el ___ los domingos.”",["bosque", "pez", "gato", "vaca"],0,"“Pasear por el bosque” es una actividad típica en la naturaleza."],
      ["translate","Traduce: “The dog is very friendly.”",["El perro es muy simpático.", "El pájaro es muy simpático.", "El caballo es muy simpático.", "El gato es muy simpático."],0,"“The dog” = “el perro”; “friendly” = “simpático”."],
      ["arrange","Ordena: [gato / negro / tengo / un]",["negro un gato Tengo", "Tengo un gato negro", "Tengo gato un negro", "gato Tengo negro un"],1,"Sujeto implícito + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe 20-30 palabras sobre un animal que te guste y un lugar de la naturaleza que te guste visitar.",[],["me gusta", "el bosque", "el animal"]],
    ]
  },
  {
    id:"es_a2_body_parts", level:"A2", title:"El cuerpo humano: partes del cuerpo", emoji:"🦴", xp:46,
    description:"Aprende las partes del cuerpo y a describir dolores o características físicas.",
    study: {
      vocab: [
        ["la cabeza", "the head"],
        ["el brazo", "the arm"],
        ["la pierna", "the leg"],
        ["la mano", "the hand"],
        ["el pie", "the foot"],
        ["la espalda", "the back"],
      ],
      grammar: [
        ["Artículos con partes del cuerpo", "Con partes del cuerpo se usa el artículo definido, no el posesivo, cuando está claro de quién se habla.", "Me duele la cabeza. (no “Me duele mi cabeza”)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la espalda” en inglés?",["the foot", "the back", "the head", "the hand"],1,"“Espalda” es “back” en inglés."],
      ["mcq","¿Cómo se dice “el pie” en inglés?",["the arm", "the foot", "the back", "the hand"],1,"“Pie” es “foot” en inglés."],
      ["fill","Completa: “Me duele mucho la ___ después de correr.”",["espalda", "pierna", "mano", "cabeza"],0,"Correr suele causar dolor de espalda si no se calienta bien."],
      ["translate","Traduce: “My hand hurts.”",["Me duele la pierna.", "Me duele el pie.", "Me duele el brazo.", "Me duele la mano."],3,"“My hand hurts” = “Me duele la mano”, con artículo definido."],
      ["arrange","Ordena: [pierna / duele / la / me]",["duele la Me pierna", "Me duele la pierna", "pierna duele Me la", "la duele pierna Me"],1,"“Me duele” + artículo + parte del cuerpo."],
      ["speaking","Describe en 40-60 palabras un dolor que hayas tenido: qué parte del cuerpo te dolía y qué hiciste.",[],["me dolía", "la pierna", "fui al médico"]],
    ]
  },
  {
    id:"es_b1_sports_fitness", level:"B1", title:"Los deportes y la actividad física", emoji:"🏃", xp:60,
    description:"Habla sobre deportes, rutinas de ejercicio y hábitos de actividad física en español.",
    study: {
      vocab: [
        ["el fútbol", "soccer/football"],
        ["la natación", "swimming"],
        ["el tenis", "tennis"],
        ["correr", "to run"],
        ["levantar pesas", "to lift weights"],
        ["hacer yoga", "to do yoga"],
      ],
      grammar: [
        ["“Soler” + infinitivo para hábitos", "“Soler” expresa una acción habitual, algo que se hace normalmente.", "Suelo correr tres veces por semana."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “levantar pesas” en inglés?",["to lift weights", "to run", "soccer/football", "to do yoga"],0,"“Levantar pesas” es “to lift weights”."],
      ["mcq","¿Cómo se dice “la natación” en inglés?",["soccer/football", "to run", "swimming", "tennis"],2,"“Natación” es “swimming”."],
      ["fill","Completa: “Suelo ___ tres veces por semana para mantenerme en forma.”",["el tenis", "la natación", "el fútbol", "correr"],3,"“Soler” + infinitivo (“correr”) describe un hábito."],
      ["translate","Traduce: “I usually do yoga on Sundays.”",["Suelo levantar pesas los domingos.", "Suelo hacer yoga los sábados.", "Suelo jugar al tenis los domingos.", "Suelo hacer yoga los domingos."],3,"“I usually do yoga” = “Suelo hacer yoga”; “on Sundays” = “los domingos”."],
      ["arrange","Ordena: [forma / mantenerme / en / para / corro]",["para mantenerme en forma Corro", "Corro para mantenerme en forma", "mantenerme para Corro en forma", "forma mantenerme en Corro para"],1,"Verbo + “para” + infinitivo + complemento."],
      ["writing","Escribe 45-65 palabras sobre tu relación con el deporte: qué actividad practicas, con qué frecuencia y por qué te gusta (o no).",[],["suelo", "me mantengo en forma", "practico"]],
    ]
  },
  {
    id:"es_b2_smart_home_tech", level:"B2", title:"La casa inteligente: domótica y dispositivos", emoji:"💡", xp:82,
    description:"Habla sobre dispositivos inteligentes y domótica, con opiniones matizadas en español.",
    study: {
      vocab: [
        ["un altavoz inteligente", "a smart speaker"],
        ["un termostato programable", "a programmable thermostat"],
        ["una cámara de seguridad", "a security camera"],
        ["controlar por voz", "to control by voice"],
        ["automatizar tareas del hogar", "to automate household tasks"],
        ["un riesgo de privacidad", "a privacy risk"],
      ],
      grammar: [
        ["El futuro para predicciones tecnológicas", "El futuro simple describe predicciones razonables sobre cómo evolucionará la tecnología.", "En unos años, más hogares tendrán dispositivos conectados."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un riesgo de privacidad” en inglés?",["a security camera", "a smart speaker", "a privacy risk", "a programmable thermostat"],2,"“Riesgo de privacidad” es “privacy risk”."],
      ["mcq","¿Cómo se dice “automatizar tareas del hogar” en inglés?",["a smart speaker", "to automate household tasks", "a security camera", "to control by voice"],1,"“Automatizar tareas del hogar” es “to automate household tasks”."],
      ["fill","Completa: “Un termostato programable puede ___ energía si se configura bien.”",["ahorrar", "perder", "romper", "gastar"],0,"Un termostato bien configurado ayuda a ahorrar energía, no a gastarla."],
      ["translate","Traduce: “Smart speakers can be controlled by voice.”",["Los termostatos se pueden controlar por texto.", "Los altavoces inteligentes se pueden controlar por voz.", "Los altavoces inteligentes se pueden controlar por texto.", "Las cámaras de seguridad se pueden controlar por voz."],1,"“Controlled by voice” = “controlar por voz”."],
      ["arrange","Ordena: [privacidad / puede / un / suponer / riesgo / de]",["de privacidad riesgo Puede un suponer", "Puede privacidad de un suponer riesgo", "privacidad suponer riesgo un de Puede", "Puede suponer un riesgo de privacidad"],3,"Verbo + “suponer” + objeto: “Puede suponer un riesgo de privacidad.”"],
      ["writing","Escribe 55-75 palabras sobre un dispositivo inteligente que usarías (o ya usas) en casa: qué ventaja te ofrece y qué riesgo de privacidad podría tener.",[],["automatizar", "riesgo de privacidad", "por voz"]],
    ]
  },
  {
    id:"es_c1_workplace_communication", level:"C1", title:"El mundo laboral: reuniones y correspondencia", emoji:"🤝", xp:90,
    description:"Domina el vocabulario y las fórmulas típicas de reuniones y correos profesionales en español.",
    study: {
      vocab: [
        ["convocar una reunión", "to call a meeting"],
        ["adjuntar un documento", "to attach a document"],
        ["quedamos a la espera de su respuesta", "we look forward to your response"],
        ["retomar un punto pendiente", "to follow up on a pending item"],
        ["llegar a un acuerdo", "to reach an agreement"],
        ["posponer una reunión", "to postpone a meeting"],
      ],
      grammar: [
        ["Fórmulas de cortesía en correos formales", "Las fórmulas fijas como “Quedamos a la espera de su respuesta” dan un cierre profesional sin sonar brusco.", "Adjunto el informe solicitado. Quedamos a la espera de su respuesta."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “llegar a un acuerdo” en inglés?",["to follow up on a pending item", "to attach a document", "to call a meeting", "to reach an agreement"],3,"“Llegar a un acuerdo” es “to reach an agreement”."],
      ["mcq","¿Cómo se dice “posponer una reunión” en inglés?",["to postpone a meeting", "we look forward to your response", "to call a meeting", "to reach an agreement"],0,"“Posponer una reunión” es “to postpone a meeting”."],
      ["fill","Completa: “Antes de cerrar la reunión, me gustaría ___ un punto pendiente de la semana pasada.”",["retomar", "adjuntar", "convocar", "posponer"],0,"“Retomar un punto pendiente” significa volver a tratarlo."],
      ["translate","Traduce: “I'm attaching the requested report.”",["Adjunto el correo solicitado.", "Pospongo el informe solicitado.", "Adjunto el informe solicitado.", "Convoco el informe solicitado."],2,"“I'm attaching” = “Adjunto”; “the requested report” = “el informe solicitado”."],
      ["arrange","Ordena: [respuesta / la / espera / quedamos / de / a / su]",["de a espera respuesta Quedamos la su", "de espera respuesta a su Quedamos la", "a respuesta Quedamos espera la de su", "Quedamos a la espera de su respuesta"],3,"Fórmula fija de cierre de correo profesional."],
      ["writing","Escribe un correo profesional breve (55-75 palabras) convocando una reunión, mencionando un punto pendiente y cerrando con una fórmula de cortesía formal.",[],["convoco", "punto pendiente", "quedamos a la espera"]],
    ]
  },
  {
    id:"es_c2_register_synonyms", level:"C2", title:"Registro y estilo: sinónimos según el contexto", emoji:"🔤", xp:98,
    description:"Elige el sinónimo adecuado según el registro (formal, neutro, coloquial) en español.",
    study: {
      vocab: [
        ["obtener (formal) / conseguir (neutro) / pillar (coloquial)", "to get / to obtain"],
        ["fallecer (formal) / morir (neutro) / palmarla (coloquial)", "to pass away / to die"],
        ["solicitar (formal) / pedir (neutro) / pedir prestado, informal para objetos", "to request / to ask for"],
        ["residir (formal) / vivir (neutro)", "to reside / to live"],
        ["no obstante (formal) / pero (neutro) / aun así (coloquial)", "however / but"],
      ],
      grammar: [
        ["Elegir registro según el contexto comunicativo", "La misma idea puede expresarse con palabras muy distintas según se trate de un contexto formal, neutro o coloquial; usar la palabra equivocada rompe la coherencia del texto.", "En un informe: “Se solicita revisión.” En una charla informal: “¿Me pasas eso?”"],
      ]
    },
    ex:[
      ["mcq","En un informe oficial, ¿qué palabra es más apropiada para “obtener información”?",["Obtener", "Pillar", "Coger", "Agarrar"],0,"“Obtener” es el registro formal apropiado para un informe oficial."],
      ["mcq","En una conversación informal entre amigos, ¿qué verbo suena más natural para “morir”?",["Palmarla", "Fallecer", "Perecer", "Expirar"],0,"“Palmarla” es coloquial y encajaría en una conversación informal; los otros son demasiado formales o técnicos."],
      ["fill","Completa: “En una carta formal se dice “no ___, seguimos adelante con el proyecto”, no “pero”.”",["pero", "sino", "obstante", "aun así"],2,"“No obstante” es el conector formal equivalente a “pero”."],
      ["translate","Traduce con el registro formal correcto: “We reside in Madrid.”",["Somos de Madrid.", "Residimos en Madrid.", "Vivimos en Madrid.", "Estamos en Madrid."],1,"“Reside” en un registro formal se traduce como “residir”, no como el neutro “vivir”."],
      ["arrange","Ordena (registro formal): [solicita / revisión / se / del / documento]",["documento del Se solicita revisión", "documento solicita del revisión Se", "Se solicita revisión del documento", "documento Se del revisión solicita"],2,"Construcción pasiva refleja + objeto, típica del registro formal/administrativo."],
      ["writing","Escribe el mismo mensaje breve (“necesito que me envíes el archivo”) en dos registros distintos: uno formal (para un jefe) y uno coloquial (para un amigo), en 55-75 palabras en total.",[],["formal", "coloquial", "solicito"]],
    ]
  },
  {
    id:"es_a1_clothing_colors", level:"A1", title:"La ropa y los colores", emoji:"👕", xp:37,
    description:"Aprende el vocabulario de las prendas de ropa y cómo combinarlas con colores en español.",
    study: {
      vocab: [
        ["la camisa", "the shirt"],
        ["el pantalón", "the pants/trousers"],
        ["los zapatos", "the shoes"],
        ["el vestido", "the dress"],
        ["la chaqueta", "the jacket"],
        ["la falda", "the skirt"],
        ["rojo, azul, verde, negro, blanco", "red, blue, green, black, white"],
      ],
      grammar: [
        ["Concordancia de género y número con adjetivos de color", "Los colores concuerdan en género y número con el sustantivo que describen.", "la camisa roja / los zapatos negros / el vestido verde"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la chaqueta” en inglés?",["the shirt", "the pants/trousers", "the shoes", "the jacket"],3,"“Chaqueta” es “jacket” en inglés."],
      ["mcq","¿Cómo se dice “los zapatos” en inglés?",["the shoes", "the jacket", "the skirt", "the shirt"],0,"“Zapatos” es “shoes” en inglés."],
      ["fill","Completa: “Llevo una camisa ___ y un pantalón negro.”",["azul", "azulado", "azulados", "azules"],0,"“Camisa” es femenino singular, así que el color concuerda: “azul” (invariable en género, singular)."],
      ["translate","Traduce: “I'm wearing a red dress.”",["Llevo una falda roja.", "Llevo una camisa roja.", "Llevo unos zapatos rojos.", "Llevo un vestido rojo."],3,"“I'm wearing” = “Llevo”; “a red dress” = “un vestido rojo”."],
      ["arrange","Ordena: [negros / zapatos / tengo / unos]",["zapatos Tengo negros unos", "Tengo unos zapatos negros", "negros zapatos unos Tengo", "negros Tengo unos zapatos"],1,"Sujeto implícito + verbo + artículo + sustantivo + adjetivo (concordando en plural)."],
      ["writing","Describe en 20-30 palabras la ropa que llevas hoy, mencionando al menos tres prendas y sus colores.",[],["llevo", "de color", "y"]],
    ]
  },
  {
    id:"es_a2_fruits_vegetables", level:"A2", title:"Frutas y verduras", emoji:"🥦", xp:47,
    description:"Aprende el vocabulario de frutas y verduras y a hablar de una alimentación saludable en español.",
    study: {
      vocab: [
        ["la manzana", "the apple"],
        ["el plátano", "the banana"],
        ["la zanahoria", "the carrot"],
        ["el tomate", "the tomato"],
        ["la lechuga", "the lettuce"],
        ["la naranja", "the orange"],
      ],
      grammar: [
        ["Cuantificadores: mucho/a, poco/a, algo de", "Estos cuantificadores concuerdan en género con el sustantivo y sirven para hablar de cantidades de forma aproximada.", "Como mucha fruta y poca carne."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la zanahoria” en inglés?",["the apple", "the tomato", "the banana", "the carrot"],3,"“Zanahoria” es “carrot” en inglés."],
      ["mcq","¿Cómo se dice “el plátano” en inglés?",["the carrot", "the banana", "the tomato", "the lettuce"],1,"“Plátano” es “banana” en inglés."],
      ["fill","Completa: “Como ___ fruta todos los días para estar sano.”",["muchos", "mucho", "muy", "mucha"],3,"“Fruta” es femenino singular, así que el cuantificador concuerda: “mucha fruta”."],
      ["translate","Traduce: “I eat little meat and a lot of vegetables.”",["Como poca carne y pocas verduras.", "Como poca fruta y muchas verduras.", "Como poca carne y muchas verduras.", "Como mucha carne y muchas verduras."],2,"“Little meat” = “poca carne”; “a lot of vegetables” = “muchas verduras”."],
      ["arrange","Ordena: [tomate / ensalada / lleva / la / lechuga / y]",["La lechuga tomate y ensalada lleva", "tomate ensalada lleva y lechuga La", "ensalada y tomate lleva La lechuga", "La ensalada lleva tomate y lechuga"],3,"Sujeto + verbo + objeto (dos sustantivos unidos por “y”)."],
      ["speaking","Describe en 40-60 palabras tu dieta habitual: qué frutas y verduras comes normalmente y con qué frecuencia.",[],["como", "a menudo", "verduras"]],
    ]
  },
  {
    id:"es_b1_cooking_recipes", level:"B1", title:"La cocina: verbos y recetas simples", emoji:"🍳", xp:61,
    description:"Aprende verbos de cocina y a explicar los pasos de una receta sencilla en español.",
    study: {
      vocab: [
        ["cortar, pelar", "to cut, to peel"],
        ["hervir, freír", "to boil, to fry"],
        ["mezclar los ingredientes", "to mix the ingredients"],
        ["añadir sal al gusto", "to add salt to taste"],
        ["dejar reposar la masa", "to let the dough rest"],
        ["precalentar el horno", "to preheat the oven"],
      ],
      grammar: [
        ["El imperativo para dar instrucciones de receta", "Las recetas usan el imperativo (formal “usted” o infinitivo) para dar instrucciones paso a paso.", "Corte las verduras, hierva el agua y añada sal al gusto."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “mezclar los ingredientes” en inglés?",["to preheat the oven", "to mix the ingredients", "to boil, to fry", "to cut, to peel"],1,"“Mezclar los ingredientes” es “to mix the ingredients”."],
      ["mcq","¿Cómo se dice “precalentar el horno” en inglés?",["to preheat the oven", "to add salt to taste", "to let the dough rest", "to cut, to peel"],0,"“Precalentar el horno” es “to preheat the oven”."],
      ["fill","Completa: “Antes de hornear, hay que ___ el horno a 180 grados.”",["hervir", "precalentar", "freír", "mezclar"],1,"“Precalentar el horno” es el paso previo típico antes de hornear."],
      ["translate","Traduce: “Let the dough rest for ten minutes.”",["Deje hervir la masa durante diez minutos.", "Deje freír la masa durante diez minutos.", "Deje cortar la masa durante diez minutos.", "Deje reposar la masa durante diez minutos."],3,"“Let the dough rest” = “Deje reposar la masa”, con imperativo formal."],
      ["arrange","Ordena: [gusto / al / añada / sal]",["Añada sal al gusto", "sal al Añada gusto", "gusto Añada sal al", "Añada al sal gusto"],0,"Imperativo + objeto + expresión fija “al gusto”."],
      ["writing","Escribe 45-65 palabras explicando los pasos de una receta sencilla que sepas hacer, usando al menos tres verbos de cocina en imperativo.",[],["corte", "añada", "deje reposar"]],
    ]
  },
  {
    id:"es_b2_art_world", level:"B2", title:"El mundo del arte: pintura, música y cine", emoji:"🎨", xp:83,
    description:"Habla sobre arte, música y cine, expresando opiniones y valoraciones matizadas en español.",
    study: {
      vocab: [
        ["una obra maestra", "a masterpiece"],
        ["la puesta en escena", "the staging/mise-en-scène"],
        ["una interpretación conmovedora", "a moving performance"],
        ["el estilo de un artista", "an artist's style"],
        ["dejar una impresión duradera", "to leave a lasting impression"],
        ["estar sobrevalorado/infravalorado", "to be overrated/underrated"],
      ],
      grammar: [
        ["Verbos de opinión + subjuntivo/indicativo según certeza", "“Me parece que” + indicativo expresa una opinión con cierta seguridad; “no creo que” + subjuntivo expresa duda.", "Me parece que esta película es una obra maestra. / No creo que esté sobrevalorada."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “una interpretación conmovedora” en inglés?",["an artist's style", "a masterpiece", "a lasting impression", "a moving performance"],3,"“Una interpretación conmovedora” es “a moving performance”."],
      ["mcq","¿Cómo se dice “estar sobrevalorado” en inglés?",["to be underrated", "to be overrated", "to leave an impression", "an artist's style"],1,"“Estar sobrevalorado” es “to be overrated”."],
      ["fill","Completa: “No creo que esta película ___ tan buena como dicen.”",["será", "fue", "es", "sea"],3,"“No creo que” exige subjuntivo: “que sea”."],
      ["translate","Traduce: “This performance left a lasting impression on me.”",["Esta interpretación me dejó una impresión duradera.", "Esta puesta en escena me dejó sobrevalorada.", "Esta interpretación me dejó una obra maestra.", "Este estilo me dejó una impresión duradera."],0,"“Left a lasting impression” = “dejó una impresión duradera”."],
      ["arrange","Ordena: [maestra / obra / esta / es / una]",["maestra obra una es Esta", "Esta obra maestra una es", "Esta es maestra obra una", "Esta es una obra maestra"],3,"Sujeto + “es” + artículo + sustantivo + adjetivo."],
      ["writing","Escribe 55-75 palabras dando tu opinión sobre una obra de arte, película o canción (real o inventada): qué te pareció y por qué, usando al menos una estructura con subjuntivo de opinión.",[],["me parece que", "no creo que", "una impresión"]],
    ]
  },
  {
    id:"es_c1_giving_feedback", level:"C1", title:"La crítica constructiva: dar y recibir feedback", emoji:"🗨️", xp:91,
    description:"Aprende a dar y recibir retroalimentación de forma constructiva y profesional en español.",
    study: {
      vocab: [
        ["señalar un punto de mejora", "to point out an area for improvement"],
        ["reconocer los aciertos antes de las críticas", "to acknowledge strengths before criticism"],
        ["formular la crítica en términos concretos", "to phrase criticism in concrete terms"],
        ["estar abierto/a a la retroalimentación", "to be open to feedback"],
        ["tomarse la crítica de forma personal", "to take criticism personally"],
        ["proponer una solución, no solo señalar el problema", "to propose a solution, not just point out the problem"],
      ],
      grammar: [
        ["Mitigadores para suavizar una crítica", "Expresiones como “quizás podrías considerar” o “una sugerencia sería” suavizan una crítica sin perder claridad.", "Quizás podrías considerar estructurar el informe de otra manera; una sugerencia sería empezar con las conclusiones."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “formular la crítica en términos concretos” en inglés?",["to phrase criticism in concrete terms", "to take criticism personally", "to be open to feedback", "to point out an area for improvement"],0,"“Formular la crítica en términos concretos” es “to phrase criticism in concrete terms”."],
      ["mcq","¿Cómo se dice “tomarse la crítica de forma personal” en inglés?",["to take criticism personally", "to be open to feedback", "to acknowledge strengths", "to propose a solution"],0,"“Tomarse la crítica de forma personal” es “to take criticism personally”."],
      ["fill","Completa: “Antes de dar la crítica, es buena idea ___ los aciertos del trabajo.”",["ocultar", "reconocer", "ignorar", "criticar"],1,"“Reconocer los aciertos antes de las críticas” hace que el feedback sea mejor recibido."],
      ["translate","Traduce: “A suggestion would be to start with the conclusions.”",["Una sugerencia sería empezar con las conclusiones.", "Una sugerencia sería terminar con las conclusiones.", "Una crítica sería empezar con las conclusiones.", "Un problema sería empezar con las conclusiones."],0,"“A suggestion would be to” = “Una sugerencia sería”."],
      ["arrange","Ordena: [problema / propón / solo / no / solución / señales / una]",["señales solo el propón una No solución problema,", "No solo señales el problema, propón una solución", "el una propón problema, solución solo No señales", "problema, propón señales solución No solo una el"],1,"Estructura de contraste: “no solo... [verbo]” + “[verbo]... una solución”."],
      ["writing","Escribe 55-75 palabras dando feedback constructivo sobre un trabajo (real o inventado): reconoce un acierto, señala un punto de mejora concreto y propón una solución.",[],["reconozco que", "quizás podrías", "una sugerencia sería"]],
    ]
  },
  {
    id:"es_c2_inclusive_language", level:"C2", title:"El lenguaje inclusivo y la evolución del idioma", emoji:"🌐", xp:99,
    description:"Analiza el debate sobre el lenguaje inclusivo y cómo evolucionan las lenguas con la sociedad.",
    study: {
      vocab: [
        ["el lenguaje inclusivo", "inclusive language"],
        ["una lengua viva evoluciona con el uso", "a living language evolves with use"],
        ["prescriptivismo frente a descriptivismo", "prescriptivism versus descriptivism"],
        ["un neologismo se incorpora al diccionario", "a neologism is added to the dictionary"],
        ["generar resistencia frente a un cambio lingüístico", "to generate resistance to a linguistic change"],
        ["un argumento no implica necesariamente una postura política", "an argument doesn't necessarily imply a political stance"],
      ],
      grammar: [
        ["Presentar un debate lingüístico sin sesgo", "Un análisis riguroso separa la descripción del fenómeno (cómo cambia la lengua) de la valoración personal (si el cambio debería adoptarse o no).", "Desde el descriptivismo, el cambio se documenta sin juzgarlo; desde el prescriptivismo, se evalúa si conviene normalizarlo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “prescriptivismo frente a descriptivismo” en inglés?",["prescriptivism versus descriptivism", "linguistic change", "inclusive language", "a neologism"],0,"“Prescriptivismo frente a descriptivismo” es “prescriptivism versus descriptivism”."],
      ["mcq","¿Cómo se dice “un neologismo se incorpora al diccionario” en inglés?",["a living language evolves with use", "inclusive language", "to generate resistance", "a neologism is added to the dictionary"],3,"“Un neologismo se incorpora al diccionario” es “a neologism is added to the dictionary”."],
      ["fill","Completa: “El descriptivismo se centra en documentar cómo habla la gente, no en dictar cómo ___ hablar.”",["quiere", "puede", "debería", "suele"],2,"El descriptivismo describe el uso real, sin dictar normas sobre cómo “debería” hablarse."],
      ["translate","Traduce con precisión: “A living language evolves with use, whether we like it or not.”",["Una lengua viva evoluciona con el uso, aunque no cambie.", "Una lengua muerta evoluciona con el uso, nos guste o no.", "Una lengua viva evoluciona sin uso, nos guste o no.", "Una lengua viva evoluciona con el uso, nos guste o no."],3,"“Whether we like it or not” se traduce idiomáticamente como “nos guste o no”."],
      ["arrange","Ordena: [necesariamente / postura / implica / no / una / política / un argumento]",["argumento Un no política implica una necesariamente postura", "implica argumento necesariamente Un postura una política no", "política no postura una argumento necesariamente implica Un", "Un argumento no implica necesariamente una postura política"],3,"Sujeto + negación + “implica necesariamente” + objeto."],
      ["writing","Escribe 55-75 palabras presentando de forma equilibrada dos posturas sobre un cambio lingüístico actual (real o inventado), sin tomar partido explícitamente, distinguiendo descripción de valoración.",[],["por un lado", "por otro", "sin necesariamente"]],
    ]
  },
  {
    id:"es_a1_neighborhood_city", level:"A1", title:"El barrio y la ciudad", emoji:"🏙️", xp:38,
    description:"Aprende el vocabulario de los lugares del barrio y cómo decir dónde están en español.",
    study: {
      vocab: [
        ["el banco", "the bank"],
        ["el supermercado", "the supermarket"],
        ["el parque", "the park"],
        ["la farmacia", "the pharmacy"],
        ["la biblioteca", "the library"],
        ["la parada de autobús", "the bus stop"],
        ["cerca de, lejos de, al lado de", "near, far from, next to"],
      ],
      grammar: [
        ["“Hay” + preposiciones de lugar", "“Hay” (there is/are) se usa para decir que algo existe en un lugar; no cambia con el número. Las preposiciones de lugar indican dónde está.", "Hay una farmacia cerca del parque. / La biblioteca está al lado del banco."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la farmacia” en inglés?",["the bank", "the pharmacy", "the supermarket", "the library"],1,"“Farmacia” es “pharmacy” en inglés."],
      ["mcq","¿Cómo se dice “la parada de autobús” en inglés?",["the library", "the park", "the bank", "the bus stop"],3,"“Parada de autobús” es “bus stop” en inglés."],
      ["fill","Completa: “En mi barrio ___ una biblioteca muy grande.”",["hay", "tiene", "está", "es"],0,"“Hay” se usa para decir que algo existe, sin artículo definido: “hay una biblioteca”."],
      ["translate","Traduce: “The pharmacy is next to the park.”",["La farmacia está cerca de la biblioteca.", "La farmacia está al lado del parque.", "El banco está al lado del parque.", "La farmacia está lejos del parque."],1,"“Next to” = “al lado de”; el sujeto y el lugar deben coincidir con el original."],
      ["arrange","Ordena: [supermercado / lejos / el / no / está]",["El supermercado no está lejos", "supermercado lejos no está El", "supermercado no lejos está El", "no El está supermercado lejos"],0,"Sujeto + negación + verbo + adverbio de lugar."],
      ["writing","Describe en 20-30 palabras tu barrio: qué lugares hay y dónde están (usa “hay”, “cerca de” y “lejos de”).",[],["hay", "cerca de", "lejos de"]],
    ]
  },
  {
    id:"es_a2_celebrations_holidays", level:"A2", title:"Las celebraciones y fiestas", emoji:"🎉", xp:48,
    description:"Aprende vocabulario de celebraciones y fiestas, y a hablar de costumbres con “soler”.",
    study: {
      vocab: [
        ["el cumpleaños", "the birthday"],
        ["la boda", "the wedding"],
        ["la Navidad", "Christmas"],
        ["el Año Nuevo", "New Year"],
        ["celebrar, festejar", "to celebrate"],
        ["hacer un regalo", "to give a gift"],
      ],
      grammar: [
        ["“Soler” + infinitivo para hablar de costumbres", "“Soler” + infinitivo expresa lo que se hace habitualmente; solo se conjuga en presente o imperfecto.", "Solemos reunirnos con la familia en Navidad. / De niño, solía celebrar mi cumpleaños en el parque."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “hacer un regalo” en inglés?",["New Year", "to give a gift", "the wedding", "the birthday"],1,"“Hacer un regalo” es “to give a gift” en inglés."],
      ["mcq","¿Cómo se dice “la boda” en inglés?",["the wedding", "Christmas", "to celebrate", "New Year"],0,"“Boda” es “wedding” en inglés."],
      ["fill","Completa: “Cada Año Nuevo, ___ celebrar con toda la familia.”",["somos", "solemos", "tenemos", "hacemos"],1,"“Soler” + infinitivo expresa una costumbre habitual: “solemos celebrar”."],
      ["translate","Traduce: “We usually give gifts at Christmas.”",["Hacemos un regalo en Navidad.", "Solemos hacer regalos en Navidad.", "Solemos celebrar regalos en Navidad.", "Solemos hacer regalos en el cumpleaños."],1,"“We usually give gifts” = “Solemos hacer regalos”, con “soler” + infinitivo."],
      ["arrange","Ordena: [cumpleaños / celebro / mi / con / amigos]",["con mi Celebro cumpleaños amigos", "Celebro mi cumpleaños con amigos", "con mi amigos Celebro cumpleaños", "cumpleaños con Celebro mi amigos"],1,"Verbo + objeto posesivo + preposición + complemento."],
      ["speaking","Describe en 40-60 palabras cómo sueles celebrar una fiesta importante para ti (cumpleaños, Navidad, Año Nuevo u otra), usando “soler”.",[],["suelo", "celebro", "con"]],
    ]
  },
  {
    id:"es_b1_relationships_friendship", level:"B1", title:"Las relaciones personales y la amistad", emoji:"🤝", xp:62,
    description:"Aprende vocabulario sobre amistad y relaciones, y a dar consejos con “deber” y “tener que”.",
    study: {
      vocab: [
        ["confiar en alguien", "to trust someone"],
        ["llevarse bien/mal con alguien", "to get along well/badly with someone"],
        ["tener algo en común", "to have something in common"],
        ["mantener el contacto", "to keep in touch"],
        ["un amigo/a de confianza", "a close/trustworthy friend"],
        ["hacer las paces después de una discusión", "to make up after an argument"],
      ],
      grammar: [
        ["Consejos con “deber” y “tener que”", "“Deber” + infinitivo da un consejo suave; “tener que” + infinitivo expresa una obligación más fuerte.", "Deberías mantener el contacto con tus amigos. / Tenéis que hacer las paces si queréis seguir siendo amigos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “llevarse bien con alguien” en inglés?",["to have something in common", "to make up after an argument", "to get along well/badly with someone", "a close/trustworthy friend"],2,"“Llevarse bien con alguien” es “to get along well with someone” en inglés."],
      ["mcq","¿Cómo se dice “hacer las paces después de una discusión” en inglés?",["to have something in common", "to get along well/badly with someone", "to trust someone", "to make up after an argument"],3,"“Hacer las paces después de una discusión” es “to make up after an argument” en inglés."],
      ["fill","Completa: “Si quieres conservar esa amistad, ___ mantener el contacto.”",["debes de", "deberá", "debiste", "deberías"],3,"“Deberías” (condicional de “deber”) da un consejo suave en segunda persona."],
      ["translate","Traduce: “You have to trust your friends.”",["Deberías confiar en tus amigos.", "Tienes que confiar en tu familia.", "Tienes que confiar en tus amigos.", "Tienes que llevarte bien con tus amigos."],2,"“You have to trust” = “Tienes que confiar”, con “tener que” + infinitivo."],
      ["arrange","Ordena: [común / mucho / tenemos / en]",["común mucho Tenemos en", "Tenemos mucho común en", "mucho en Tenemos común", "Tenemos mucho en común"],3,"Verbo + cuantificador + preposición fija “en común”."],
      ["writing","Escribe 45-65 palabras sobre una amistad importante para ti: qué tenéis en común y qué consejo le darías a alguien que quiere mantener una amistad así.",[],["tenemos en común", "deberías", "confiar"]],
    ]
  },
  {
    id:"es_b2_remote_work_balance", level:"B2", title:"El trabajo remoto y el equilibrio vida-trabajo", emoji:"💻", xp:84,
    description:"Habla sobre el teletrabajo y la conciliación laboral usando el gerundio en español.",
    study: {
      vocab: [
        ["teletrabajar", "to work remotely"],
        ["el horario flexible", "flexible working hours"],
        ["la desconexión digital", "digital disconnection"],
        ["el agotamiento (burnout)", "burnout"],
        ["conciliar la vida laboral y personal", "to balance work and personal life"],
        ["rendir (ser productivo/a)", "to be productive"],
      ],
      grammar: [
        ["El gerundio para expresar simultaneidad o causa", "El gerundio (-ando/-iendo) expresa una acción simultánea a otra o su causa, sin necesidad de conjunción.", "Trabajando desde casa, ahorro tiempo de desplazamiento. / Muchos sufren agotamiento trabajando sin desconectar."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la desconexión digital” en inglés?",["digital disconnection", "to work remotely", "to be productive", "burnout"],0,"“Desconexión digital” es “digital disconnection” en inglés."],
      ["mcq","¿Cómo se dice “conciliar la vida laboral y personal” en inglés?",["to work remotely", "to balance work and personal life", "to be productive", "digital disconnection"],1,"“Conciliar la vida laboral y personal” es “to balance work and personal life” en inglés."],
      ["fill","Completa: “___ desde casa, muchas personas logran conciliar mejor su vida laboral y personal.”",["teletrabajado", "teletrabajar", "teletrabajando", "teletrabajos"],2,"El gerundio (“teletrabajando”) expresa la circunstancia que permite el resultado que sigue."],
      ["translate","Traduce: “Working without disconnecting can lead to burnout.”",["Trabajar sin desconectar puede evitar el agotamiento.", "Trabajando con horario flexible, se puede llegar al agotamiento.", "Desconectando del trabajo, se puede llegar al agotamiento.", "Trabajando sin desconectar, se puede llegar al agotamiento."],3,"El gerundio “trabajando sin desconectar” expresa la causa del agotamiento."],
      ["arrange","Ordena: [flexible / valoran / un / horario / muchos]",["Muchos valoran un horario flexible", "un valoran flexible horario Muchos", "flexible Muchos horario un valoran", "flexible un horario Muchos valoran"],0,"Sujeto + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe 55-75 palabras sobre las ventajas y desventajas del teletrabajo para el equilibrio vida-trabajo, usando al menos un gerundio de simultaneidad o causa.",[],["teletrabajando", "conciliar", "sin embargo"]],
    ]
  },
  {
    id:"es_c1_negotiation_conflict", level:"C1", title:"La negociación y la resolución de conflictos", emoji:"🤝", xp:92,
    description:"Aprende a negociar y suavizar propuestas con el condicional en un registro formal.",
    study: {
      vocab: [
        ["llegar a un acuerdo", "to reach an agreement"],
        ["ceder terreno", "to give ground/make concessions"],
        ["un punto muerto", "a deadlock/stalemate"],
        ["una postura intransigente", "an inflexible/uncompromising stance"],
        ["buscar un término medio", "to look for a middle ground"],
        ["romper el hielo", "to break the ice"],
      ],
      grammar: [
        ["El condicional para suavizar propuestas", "El condicional simple suaviza peticiones y propuestas en negociaciones, dando la impresión de mayor cortesía y flexibilidad.", "¿Estaría dispuesto a ceder terreno en este punto? / Sería preferible buscar un término medio antes de llegar a un punto muerto."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un punto muerto” en inglés?",["to look for a middle ground", "an inflexible/uncompromising stance", "to give ground/make concessions", "a deadlock/stalemate"],3,"“Un punto muerto” es “a deadlock” o “stalemate” en inglés."],
      ["mcq","¿Cómo se dice “una postura intransigente” en inglés?",["an inflexible/uncompromising stance", "a deadlock/stalemate", "to look for a middle ground", "to give ground/make concessions"],0,"“Una postura intransigente” es “an inflexible/uncompromising stance” en inglés."],
      ["fill","Completa: “___ preferible buscar un término medio antes de llegar a un punto muerto.”",["Será", "Es", "Fue", "Sería"],3,"El condicional “sería” suaviza la afirmación, propia del registro de negociación formal."],
      ["translate","Traduce con registro formal: “Would you be willing to make concessions on this point?”",["¿Estaría dispuesto a ceder terreno en este punto?", "¿Estaría dispuesto a llegar a un acuerdo en este punto?", "¿Estaría dispuesto a romper el hielo en este punto?", "¿Está dispuesto a ceder terreno en este punto?"],0,"El condicional “estaría dispuesto” suaviza la pregunta, más formal que el presente “está dispuesto”."],
      ["arrange","Ordena: [acuerdo / difícil / llegar / será / a / un]",["Será un llegar a difícil acuerdo", "Será difícil llegar a un acuerdo", "Será difícil a llegar acuerdo un", "difícil acuerdo un a Será llegar"],1,"Futuro + adjetivo + infinitivo + complemento."],
      ["writing","Escribe 55-75 palabras describiendo una negociación (real o inventada) en la que ambas partes cedieron terreno para evitar un punto muerto, usando al menos dos condicionales de cortesía.",[],["sería", "estaría dispuesto", "término medio"]],
    ]
  },
  {
    id:"es_c2_corporate_euphemism", level:"C2", title:"El lenguaje corporativo y el eufemismo", emoji:"🏢", xp:100,
    description:"Analiza el eufemismo en el lenguaje corporativo y practica conectores de reformulación.",
    study: {
      vocab: [
        ["un eufemismo", "a euphemism"],
        ["la jerga corporativa", "corporate jargon"],
        ["una reestructuración (eufemismo de despido)", "a restructuring (euphemism for layoffs)"],
        ["suavizar el impacto de un mensaje", "to soften the impact of a message"],
        ["un anglicismo innecesario", "an unnecessary anglicism"],
        ["diluir la responsabilidad de alguien", "to dilute someone's responsibility"],
      ],
      grammar: [
        ["Conectores de reformulación y matización", "Expresiones como “es decir”, “dicho de otro modo” o “en otras palabras” reformulan una idea, a menudo para suavizarla o precisarla — clave para detectar eufemismos.", "La empresa anunció una “reestructuración”, es decir, despidos. / Dicho de otro modo: van a reducir la plantilla."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “diluir la responsabilidad de alguien” en inglés?",["to dilute someone's responsibility", "a euphemism", "to soften the impact of a message", "an unnecessary anglicism"],0,"“Diluir la responsabilidad de alguien” es “to dilute someone's responsibility” en inglés."],
      ["mcq","¿Cómo se dice “una reestructuración (eufemismo de despido)” en inglés?",["to dilute someone's responsibility", "a restructuring (euphemism for layoffs)", "to soften the impact of a message", "an unnecessary anglicism"],1,"“Reestructuración” es “restructuring” en inglés, eufemismo habitual de “layoffs” (despidos)."],
      ["fill","Completa: “La empresa habla de “optimización de recursos”, ___ , de despidos.”",["aunque", "es decir", "por ejemplo", "sin embargo"],1,"“Es decir” reformula la expresión eufemística con su significado literal."],
      ["translate","Traduce con precisión: “Corporate jargon often softens the impact of bad news.”",["La jerga corporativa suele evitar el impacto de las malas noticias.", "La jerga corporativa suele suavizar el impacto de las malas noticias.", "Un eufemismo suele suavizar el impacto de las malas noticias.", "La jerga corporativa suele diluir el impacto de las malas noticias."],1,"“Softens the impact” = “suaviza el impacto”; el sujeto debe ser “la jerga corporativa”."],
      ["arrange","Ordena: [despidos / eufemismo / reestructuración / de / un / es]",["de un es Reestructuración eufemismo despidos", "Reestructuración es un eufemismo de despidos", "de despidos eufemismo es un Reestructuración", "Reestructuración eufemismo es despidos de un"],1,"Sujeto + verbo + artículo + sustantivo + preposición + complemento."],
      ["writing","Escribe 55-75 palabras analizando un eufemismo corporativo real o inventado: qué esconde, por qué se usa y cómo lo reformularías con más claridad, usando al menos un conector de reformulación.",[],["es decir", "eufemismo", "dicho de otro modo"]],
    ]
  },
  {
    id:"es_a1_airport_hotel", level:"A1", title:"En el aeropuerto y el hotel", emoji:"✈️", xp:38,
    description:"Aprende vocabulario de viajes y a hablar de planes inmediatos con “ir a + infinitivo”.",
    study: {
      vocab: [
        ["el pasaporte", "the passport"],
        ["la maleta", "the suitcase"],
        ["el vuelo", "the flight"],
        ["la habitación", "the room"],
        ["la reserva", "the booking"],
        ["facturar el equipaje", "to check in luggage"],
      ],
      grammar: [
        ["“Ir a” + infinitivo para el futuro próximo", "“Ir a” + infinitivo expresa un plan o una acción que va a suceder pronto, muy usado en el habla cotidiana.", "Voy a facturar el equipaje. / Vamos a reservar una habitación para el viernes."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el pasaporte” en inglés?",["to check in luggage", "the flight", "the booking", "the passport"],3,"“Pasaporte” es “passport” en inglés."],
      ["mcq","¿Cómo se dice “facturar el equipaje” en inglés?",["the room", "the suitcase", "the passport", "to check in luggage"],3,"“Facturar el equipaje” es “to check in luggage” en inglés."],
      ["fill","Completa: “Mañana ___ a facturar el equipaje muy temprano.”",["iré a", "he ido", "voy", "voy a"],2,"“Ir a” + infinitivo: “voy a facturar”, aunque en el hueco solo va el verbo “ir” conjugado."],
      ["translate","Traduce: “We are going to book a room for Friday.”",["Vamos a reservar una habitación para el lunes.", "Vamos a facturar una habitación para el viernes.", "Vamos a reservar una habitación para el viernes.", "Vamos a reservar un vuelo para el viernes."],2,"“We are going to book” = “Vamos a reservar”, con “ir a” + infinitivo."],
      ["arrange","Ordena: [pasaporte / voy / mi / a / buscar]",["pasaporte mi buscar a Voy", "Voy a buscar mi pasaporte", "Voy a buscar pasaporte mi", "buscar Voy mi pasaporte a"],1,"Verbo “ir a” + infinitivo + objeto posesivo."],
      ["writing","Describe en 20-30 palabras tus planes para un viaje: qué vas a hacer (facturar equipaje, reservar habitación, etc.) usando “ir a + infinitivo”.",[],["voy a", "vamos a", "reservar"]],
    ]
  },
  {
    id:"es_a2_everyday_tech", level:"A2", title:"La tecnología del día a día", emoji:"📱", xp:48,
    description:"Aprende vocabulario de tecnología cotidiana y a comparar con “tan...como” y “más...que”.",
    study: {
      vocab: [
        ["el wifi", "the wifi"],
        ["la contraseña", "the password"],
        ["la aplicación", "the app"],
        ["cargar el móvil", "to charge the phone"],
        ["descargar", "to download"],
        ["la batería", "the battery"],
      ],
      grammar: [
        ["Comparativos de igualdad y superioridad", "“Tan + adjetivo + como” compara cualidades iguales; “más + adjetivo + que” compara superioridad.", "Esta aplicación es tan rápida como la otra. / Mi batería dura más que la tuya."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la contraseña” en inglés?",["the app", "to charge the phone", "the password", "to download"],2,"“Contraseña” es “password” en inglés."],
      ["mcq","¿Cómo se dice “descargar” en inglés?",["the password", "to charge the phone", "to download", "the battery"],2,"“Descargar” es “download” en inglés."],
      ["fill","Completa: “Esta aplicación es ___ rápida como la otra.”",["tan", "muy", "más", "menos"],0,"“Tan + adjetivo + como” compara dos cosas con la misma cualidad."],
      ["translate","Traduce: “My battery lasts longer than yours.”",["Mi batería dura menos que la tuya.", "Mi batería dura tan como la tuya.", "Mi batería dura más que la tuya.", "Mi wifi dura más que la tuya."],2,"“Lasts longer than” = “dura más que”, comparativo de superioridad."],
      ["arrange","Ordena: [contraseña / segura / necesito / una / más]",["más segura una contraseña Necesito", "Necesito una contraseña más segura", "contraseña una segura más Necesito", "contraseña una Necesito segura más"],1,"Verbo + artículo + sustantivo + comparativo + adjetivo."],
      ["speaking","Describe en 40-60 palabras cómo usas la tecnología cada día, comparando dos aplicaciones o dispositivos con “tan...como” o “más...que”.",[],["tan...como", "más...que", "aplicación"]],
    ]
  },
  {
    id:"es_b1_digital_entertainment", level:"B1", title:"El ocio digital: series y videojuegos", emoji:"🎮", xp:62,
    description:"Aprende vocabulario de entretenimiento digital y a expresar duración con “llevar + gerundio”.",
    study: {
      vocab: [
        ["la serie", "the series/show"],
        ["el videojuego", "the video game"],
        ["la plataforma de streaming", "the streaming platform"],
        ["engancharse a algo", "to get hooked on something"],
        ["el maratón de series", "binge-watching"],
        ["los subtítulos", "the subtitles"],
      ],
      grammar: [
        ["“Llevar + gerundio” para expresar duración", "“Llevar” + tiempo + gerundio expresa cuánto tiempo lleva ocurriendo una acción, similar a “to have been doing something”.", "Llevo dos horas viendo esta serie. / Llevamos todo el fin de semana jugando a videojuegos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “engancharse a algo” en inglés?",["the streaming platform", "binge-watching", "the subtitles", "to get hooked on something"],3,"“Engancharse a algo” es “to get hooked on something” en inglés."],
      ["mcq","¿Cómo se dice “el maratón de series” en inglés?",["the series/show", "binge-watching", "the streaming platform", "to get hooked on something"],1,"“Maratón de series” es “binge-watching” en inglés."],
      ["fill","Completa: “___ dos horas viendo esta serie sin parar.”",["Tengo", "Estoy", "He", "Llevo"],3,"“Llevar” + tiempo + gerundio expresa la duración de una acción que continúa: “llevo dos horas viendo”."],
      ["translate","Traduce: “We have been playing video games all weekend.”",["Llevamos todo el fin de semana jugando a series.", "Llevamos todo el fin de semana viendo videojuegos.", "Llevamos todo el fin de semana jugando a videojuegos.", "Estamos todo el fin de semana jugando a videojuegos."],2,"“Have been playing all weekend” = “Llevamos todo el fin de semana jugando”, con “llevar + gerundio”."],
      ["arrange","Ordena: [enganchado / me / he / a / esta serie]",["Me esta a enganchado he serie", "Me he enganchado a esta serie", "a Me esta serie enganchado he", "Me enganchado esta a serie he"],1,"Sujeto reflexivo + verbo + preposición + complemento."],
      ["writing","Escribe 45-65 palabras sobre una serie o videojuego al que te hayas enganchado, usando “llevar + gerundio” para decir cuánto tiempo llevas con ello.",[],["llevo", "enganchado", "plataforma"]],
    ]
  },
  {
    id:"es_b2_cybersecurity_privacy", level:"B2", title:"La ciberseguridad y la privacidad online", emoji:"🔒", xp:84,
    description:"Habla de ciberseguridad usando oraciones de relativo especificativas y explicativas.",
    study: {
      vocab: [
        ["la ciberseguridad", "cybersecurity"],
        ["hackear/vulnerar un sistema", "to hack a system"],
        ["los datos personales", "personal data"],
        ["una contraseña segura", "a strong password"],
        ["la suplantación de identidad", "identity theft/phishing"],
        ["cifrar la información", "to encrypt information"],
      ],
      grammar: [
        ["Oraciones de relativo especificativas y explicativas", "Las especificativas (sin comas) identifican de qué hablamos y no se pueden omitir; las explicativas (entre comas) añaden información extra y sí se pueden omitir.", "Los datos que compartimos online pueden ser vulnerados. (especificativa) / Mis datos, que comparto poco, están bien protegidos. (explicativa)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la suplantación de identidad” en inglés?",["to hack a system", "to encrypt information", "identity theft/phishing", "cybersecurity"],2,"“Suplantación de identidad” es “identity theft” o “phishing” en inglés."],
      ["mcq","¿Cómo se dice “cifrar la información” en inglés?",["a strong password", "to encrypt information", "personal data", "cybersecurity"],1,"“Cifrar la información” es “to encrypt information” en inglés."],
      ["fill","Completa: “Los datos ___ compartimos online pueden ser vulnerados.”",["que", "quienes", "cuyo", "cuales"],0,"La oración especificativa usa “que” sin comas para identificar de qué datos hablamos."],
      ["translate","Traduce: “My data, which I rarely share, is well protected.”",["Mis datos, que comparto poco, están mal protegidos.", "Mis datos, que hackeo poco, están bien protegidos.", "Mis datos que comparto poco están bien protegidos.", "Mis datos, que comparto poco, están bien protegidos."],3,"La coma marca una explicativa: “mis datos, que comparto poco,” añade información extra sobre todos los datos."],
      ["arrange","Ordena: [segura / necesitas / contraseña / una]",["Necesitas una contraseña segura", "una segura contraseña Necesitas", "segura Necesitas contraseña una", "contraseña segura Necesitas una"],0,"Verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe 55-75 palabras sobre cómo proteges tus datos personales online, usando al menos una oración de relativo especificativa y una explicativa.",[],["que", "los cuales/las cuales", "datos personales"]],
    ]
  },
  {
    id:"es_c1_historical_memory_heritage", level:"C1", title:"La memoria histórica y el patrimonio cultural", emoji:"🏛️", xp:92,
    description:"Analiza la memoria histórica y el patrimonio cultural usando “estar + participio” para estados resultantes.",
    study: {
      vocab: [
        ["el patrimonio cultural", "cultural heritage"],
        ["preservar la memoria histórica", "to preserve historical memory"],
        ["un monumento conmemorativo", "a memorial"],
        ["el legado", "the legacy"],
        ["reescribir la historia", "to rewrite history"],
        ["la identidad colectiva", "collective identity"],
      ],
      grammar: [
        ["“Estar + participio” para el estado resultante", "“Estar” + participio describe el estado resultante de una acción pasada, a diferencia de “ser + participio” que describe la acción pasiva en sí.", "El monumento está dedicado a las víctimas. / La historia está marcada por conflictos internos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el legado” en inglés?",["a memorial", "the legacy", "to rewrite history", "collective identity"],1,"“Legado” es “legacy” en inglés."],
      ["mcq","¿Cómo se dice “reescribir la historia” en inglés?",["to rewrite history", "a memorial", "to preserve historical memory", "cultural heritage"],0,"“Reescribir la historia” es “to rewrite history” en inglés."],
      ["fill","Completa: “El monumento ___ dedicado a las víctimas del conflicto.”",["está", "es", "sea", "fue"],0,"“Estar + participio” describe el estado resultante: “el monumento está dedicado”."],
      ["translate","Traduce: “Collective identity is often shaped by historical memory.”",["La identidad colectiva a menudo está marcada por el legado histórico.", "El patrimonio cultural a menudo está marcado por la memoria histórica.", "La identidad colectiva a menudo está marcada por la memoria histórica.", "La identidad colectiva a menudo es marcada por la memoria histórica."],2,"“Is shaped by” como estado resultante se traduce con “estar marcada por”."],
      ["arrange","Ordena: [patrimonio / preservar / el / cultural / debemos]",["Debemos preservar el patrimonio cultural", "cultural el preservar Debemos patrimonio", "patrimonio cultural preservar el Debemos", "patrimonio preservar Debemos cultural el"],0,"Verbo modal + infinitivo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe 55-75 palabras sobre un monumento o tradición que preserve la memoria histórica de tu comunidad, usando al menos dos construcciones con “estar + participio”.",[],["está dedicado", "está marcado", "patrimonio cultural"]],
    ]
  },
  {
    id:"es_c2_institutional_ambiguity", level:"C2", title:"La ambigüedad calculada en el discurso institucional", emoji:"🏛️", xp:100,
    description:"Analiza la ambigüedad institucional y practica conectores de matización epistémica.",
    study: {
      vocab: [
        ["la ambigüedad calculada", "calculated ambiguity"],
        ["un comunicado institucional", "an institutional statement"],
        ["evitar comprometerse", "to avoid committing oneself"],
        ["la vaguedad deliberada", "deliberate vagueness"],
        ["leer entre líneas", "to read between the lines"],
        ["un lenguaje evasivo", "evasive language"],
      ],
      grammar: [
        ["Conectores de matización epistémica", "Expresiones como “cabe destacar que”, “no cabe duda de que” o “en cierto modo” matizan el grado de certeza o relevancia de una afirmación, típicas del discurso institucional.", "Cabe destacar que el comunicado evita comprometerse con fechas concretas. / En cierto modo, la vaguedad es deliberada."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “leer entre líneas” en inglés?",["to read between the lines", "deliberate vagueness", "evasive language", "calculated ambiguity"],0,"“Leer entre líneas” es “to read between the lines” en inglés."],
      ["mcq","¿Cómo se dice “un lenguaje evasivo” en inglés?",["to avoid committing oneself", "an institutional statement", "evasive language", "deliberate vagueness"],2,"“Un lenguaje evasivo” es “evasive language” en inglés."],
      ["fill","Completa: “___ destacar que el comunicado evita comprometerse con fechas concretas.”",["Puede", "Está", "Hay", "Cabe"],3,"“Cabe destacar que” es un conector fijo de matización epistémica que introduce una observación relevante."],
      ["translate","Traduce con precisión: “In a way, the vagueness is deliberate.”",["En cierto modo, la ambigüedad es calculada.", "De cierto modo, la vaguedad es deliberada.", "En cierto modo, la vaguedad es evasiva.", "En cierto modo, la vaguedad es deliberada."],3,"“In a way” = “en cierto modo”, conector fijo de matización."],
      ["arrange","Ordena: [duda / cabe / de / que / no / es / evasivo / el lenguaje]",["de duda el evasivo es que No lenguaje cabe", "duda lenguaje de No el es evasivo que cabe", "No cabe duda de que el lenguaje es evasivo", "que lenguaje evasivo cabe No es de duda el"],2,"Conector fijo “no cabe duda de que” + subordinada."],
      ["writing","Escribe 55-75 palabras analizando un comunicado institucional real o inventado que use ambigüedad calculada, usando al menos dos conectores de matización epistémica.",[],["cabe destacar que", "no cabe duda de que", "en cierto modo"]],
    ]
  },
  {
    id:"es_a1_sports_exercise", level:"A1", title:"Los deportes y el ejercicio", emoji:"⚽", xp:38,
    description:"Aprende vocabulario de deportes y a expresar gustos con el verbo “gustar”.",
    study: {
      vocab: [
        ["el fútbol", "soccer/football"],
        ["la natación", "swimming"],
        ["correr", "to run"],
        ["el gimnasio", "the gym"],
        ["hacer ejercicio", "to exercise"],
        ["el equipo", "the team"],
      ],
      grammar: [
        ["El verbo “gustar” + infinitivo/sustantivo", "“Gustar” funciona al revés que en inglés: concuerda con lo que gusta, no con la persona. Se usa con pronombres de objeto indirecto (me, te, le, nos, os, les).", "Me gusta nadar. / A ella le gustan los deportes de equipo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la natación” en inglés?",["swimming", "the team", "to exercise", "soccer/football"],0,"“Natación” es “swimming” en inglés."],
      ["mcq","¿Cómo se dice “el equipo” en inglés?",["the team", "to exercise", "the gym", "swimming"],0,"“Equipo” es “team” en inglés."],
      ["fill","Completa: “A mí ___ gusta correr por las mañanas.”",["yo", "le", "me", "te"],2,"“Gustar” usa pronombres de objeto indirecto: “a mí me gusta”."],
      ["translate","Traduce: “She likes team sports.”",["A ella le gustan los deportes individuales.", "A ella le gustan el fútbol de equipo.", "A ella le gustan los deportes de equipo.", "A ella le gusta los deportes de equipo."],2,"“Le gustan” concuerda en plural con “los deportes”, no con “ella”."],
      ["arrange","Ordena: [gimnasio / ejercicio / voy / al / hacer / a]",["Voy al gimnasio a hacer ejercicio", "a Voy gimnasio al hacer ejercicio", "al a ejercicio hacer gimnasio Voy", "al hacer a Voy gimnasio ejercicio"],0,"Verbo + preposición + artículo + sustantivo + preposición + infinitivo."],
      ["writing","Describe en 20-30 palabras qué deportes te gustan y con qué frecuencia haces ejercicio, usando “gustar”.",[],["me gusta", "me gustan", "hacer ejercicio"]],
    ]
  },
  {
    id:"es_a2_household_chores", level:"A2", title:"Los quehaceres domésticos", emoji:"🧹", xp:48,
    description:"Aprende vocabulario de tareas del hogar y a expresar obligación impersonal con “hay que”.",
    study: {
      vocab: [
        ["barrer", "to sweep"],
        ["lavar los platos", "to wash the dishes"],
        ["sacar la basura", "to take out the trash"],
        ["planchar la ropa", "to iron the clothes"],
        ["hacer la cama", "to make the bed"],
        ["pasar la aspiradora", "to vacuum"],
      ],
      grammar: [
        ["“Hay que” + infinitivo para la obligación impersonal", "“Hay que” + infinitivo expresa una obligación general, sin especificar quién debe hacerla, a diferencia de “tener que” que sí lleva sujeto.", "Hay que sacar la basura todos los días. / Antes de salir, hay que hacer la cama."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lavar los platos” en inglés?",["to wash the dishes", "to vacuum", "to iron the clothes", "to sweep"],0,"“Lavar los platos” es “to wash the dishes” en inglés."],
      ["mcq","¿Cómo se dice “pasar la aspiradora” en inglés?",["to iron the clothes", "to vacuum", "to wash the dishes", "to make the bed"],1,"“Pasar la aspiradora” es “to vacuum” en inglés."],
      ["fill","Completa: “Antes de salir de casa, ___ que hacer la cama.”",["es", "está", "hay", "tiene"],2,"“Hay que” + infinitivo expresa una obligación general sin sujeto específico."],
      ["translate","Traduce: “You have to take out the trash every day.”",["Hay que sacar la basura todos los días.", "Hay que sacar la basura una vez a la semana.", "Tienes que sacar la basura todos los días.", "Hay que barrer la basura todos los días."],0,"“You have to” aquí es impersonal en el sentido general, por lo que se traduce mejor con “hay que”."],
      ["arrange","Ordena: [platos / lavar / hay / los / que]",["Hay que lavar los platos", "que Hay lavar los platos", "Hay que los platos lavar", "lavar los platos Hay que"],0,"“Hay que” + infinitivo + complemento."],
      ["speaking","Describe en 40-60 palabras qué quehaceres domésticos hay que hacer en tu casa cada semana, usando “hay que”.",[],["hay que", "cada semana", "en casa"]],
    ]
  },
  {
    id:"es_b1_dating_love", level:"B1", title:"Las citas y el amor", emoji:"💕", xp:62,
    description:"Aprende vocabulario sobre citas y a hacer promesas y predicciones con el futuro simple.",
    study: {
      vocab: [
        ["tener una cita", "to go on a date"],
        ["enamorarse de alguien", "to fall in love with someone"],
        ["romper con alguien", "to break up with someone"],
        ["la pareja", "the partner/couple"],
        ["echar de menos a alguien", "to miss someone"],
        ["comprometerse", "to get engaged/commit"],
      ],
      grammar: [
        ["El futuro simple para promesas y predicciones", "El futuro simple (-é, -ás, -á...) se usa para hacer promesas formales o predecir lo que pasará, más definitivo que “ir a + infinitivo”.", "Te prometo que nunca romperé contigo. / Creo que os comprometeréis pronto."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “enamorarse de alguien” en inglés?",["to go on a date", "to miss someone", "the partner/couple", "to fall in love with someone"],3,"“Enamorarse de alguien” es “to fall in love with someone” en inglés."],
      ["mcq","¿Cómo se dice “echar de menos a alguien” en inglés?",["to get engaged/commit", "the partner/couple", "to miss someone", "to break up with someone"],2,"“Echar de menos a alguien” es “to miss someone” en inglés."],
      ["fill","Completa: “Te prometo que nunca ___ contigo.”",["he roto", "romperé", "rompía", "rompo"],1,"El futuro simple “romperé” expresa una promesa firme sobre algo que no sucederá."],
      ["translate","Traduce: “I think you two will get engaged soon.”",["Creo que os comprometeréis pronto.", "Creo que os comprometéis pronto.", "Creo que os comprometeréis mañana.", "Creo que os enamoraréis pronto."],0,"“Will get engaged” = “os comprometeréis”, futuro simple para una predicción."],
      ["arrange","Ordena: [cita / voy / tener / a / una / mañana]",["Voy a tener una cita mañana", "Voy tener cita mañana una a", "tener cita una mañana Voy a", "cita una a mañana Voy tener"],0,"“Ir a” + infinitivo + artículo + sustantivo + adverbio de tiempo."],
      ["writing","Escribe 45-65 palabras sobre una relación (real o inventada), incluyendo al menos dos verbos en futuro simple para hacer promesas o predicciones.",[],["prometeré/prometerá", "seremos", "pareja"]],
    ]
  },
  {
    id:"es_b2_sustainable_tourism", level:"B2", title:"El turismo sostenible y el overtourism", emoji:"🧳", xp:84,
    description:"Habla sobre turismo sostenible usando “a menos que” y “siempre que” + subjuntivo.",
    study: {
      vocab: [
        ["el overtourism (turismo masivo)", "overtourism"],
        ["saturar un destino turístico", "to overcrowd a tourist destination"],
        ["el turismo sostenible", "sustainable tourism"],
        ["encarecer la vivienda local", "to drive up local housing costs"],
        ["repartir el impacto turístico", "to spread out tourism's impact"],
        ["respetar la cultura local", "to respect the local culture"],
      ],
      grammar: [
        ["“A menos que” y “siempre que” + subjuntivo", "“A menos que” (unless) y “siempre que” (provided that) introducen una condición y van seguidas de subjuntivo.", "El destino seguirá saturado a menos que se regule el turismo. / El turismo será positivo siempre que se respete la cultura local."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “encarecer la vivienda local” en inglés?",["to respect the local culture", "to overcrowd a tourist destination", "to spread out tourism's impact", "to drive up local housing costs"],3,"“Encarecer la vivienda local” es “to drive up local housing costs” en inglés."],
      ["mcq","¿Cómo se dice “repartir el impacto turístico” en inglés?",["overtourism", "to respect the local culture", "to spread out tourism's impact", "sustainable tourism"],2,"“Repartir el impacto turístico” es “to spread out tourism's impact” en inglés."],
      ["fill","Completa: “El destino seguirá saturado a menos que se ___ el turismo.”",["regulará", "regula", "regule", "regularía"],2,"“A menos que” exige subjuntivo: “a menos que se regule”."],
      ["translate","Traduce: “Tourism will be positive provided that the local culture is respected.”",["El turismo será positivo siempre que se encarezca la cultura local.", "El turismo será positivo siempre que se respete la cultura local.", "El turismo será positivo siempre que se respeta la cultura local.", "El turismo será positivo a menos que se respete la cultura local."],1,"“Provided that” = “siempre que”, seguido de subjuntivo: “se respete”."],
      ["arrange","Ordena: [saturados / destinos / muchos / están / turísticos]",["Muchos destinos turísticos están saturados", "destinos están saturados turísticos Muchos", "destinos Muchos están turísticos saturados", "Muchos turísticos están saturados destinos"],0,"Sujeto + verbo + adjetivo."],
      ["writing","Escribe 55-75 palabras sobre el overtourism en un destino que conozcas, usando al menos un “a menos que” y un “siempre que” con subjuntivo.",[],["a menos que", "siempre que", "sostenible"]],
    ]
  },
  {
    id:"es_c1_gastronomy_identity", level:"C1", title:"La gastronomía y la identidad cultural", emoji:"🍽️", xp:92,
    description:"Analiza la gastronomía como identidad cultural usando estructuras enfáticas con “lo que”.",
    study: {
      vocab: [
        ["la denominación de origen", "protected designation of origin"],
        ["un plato emblemático", "an iconic/signature dish"],
        ["la fusión culinaria", "culinary fusion"],
        ["preservar una receta tradicional", "to preserve a traditional recipe"],
        ["apropiarse de una tradición culinaria", "to appropriate a culinary tradition"],
        ["el paladar colectivo", "the collective palate"],
      ],
      grammar: [
        ["Oraciones enfáticas con “lo que”", "“Lo que” + verbo + “es” enfatiza un elemento de la oración, dándole mayor protagonismo, muy usado en registro argumentativo.", "Lo que define a una cultura es su gastronomía. / Lo que preocupa a los chefs locales es la apropiación de sus recetas."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un plato emblemático” en inglés?",["to appropriate a culinary tradition", "an iconic/signature dish", "protected designation of origin", "to preserve a traditional recipe"],1,"“Un plato emblemático” es “an iconic/signature dish” en inglés."],
      ["mcq","¿Cómo se dice “apropiarse de una tradición culinaria” en inglés?",["culinary fusion", "to appropriate a culinary tradition", "the collective palate", "protected designation of origin"],1,"“Apropiarse de una tradición culinaria” es “to appropriate a culinary tradition” en inglés."],
      ["fill","Completa: “Lo que ___ a una cultura es, en gran parte, su gastronomía.”",["definir", "definen", "define", "definiría"],2,"La estructura enfática “lo que + verbo + es” lleva el verbo en singular concordando con “lo que”."],
      ["translate","Traduce con estructura enfática: “What worries local chefs is the appropriation of their recipes.”",["Lo que preocupan a los chefs locales es la apropiación de sus recetas.", "Lo que preocupa a los chefs locales es la apropiación de sus recetas.", "Lo que preocupa a los chefs locales son la apropiación de sus recetas.", "Lo que preocupa a los chefs locales es la fusión de sus recetas."],1,"El verbo “preocupa” concuerda en singular con “lo que”, sujeto de la oración enfática."],
      ["arrange","Ordena: [receta / preservar / esta / debemos / tradicional]",["tradicional esta receta Debemos preservar", "receta tradicional Debemos esta preservar", "preservar Debemos esta tradicional receta", "Debemos preservar esta receta tradicional"],3,"Verbo modal + infinitivo + objeto demostrativo + sustantivo + adjetivo."],
      ["writing","Escribe 55-75 palabras sobre un plato que consideres parte de tu identidad cultural, usando al menos dos estructuras enfáticas con “lo que”.",[],["lo que define", "lo que representa", "identidad cultural"]],
    ]
  },
  {
    id:"es_c2_crisis_rhetoric", level:"C2", title:"La retórica de la crisis y el pánico moral", emoji:"📢", xp:100,
    description:"Analiza la retórica de crisis y practica estructuras de intensificación retórica.",
    study: {
      vocab: [
        ["el pánico moral", "moral panic"],
        ["una crisis fabricada", "a manufactured crisis"],
        ["catastrofizar una situación", "to catastrophize a situation"],
        ["un chivo expiatorio", "a scapegoat"],
        ["desproporcionar una amenaza", "to blow a threat out of proportion"],
        ["un discurso alarmista", "alarmist rhetoric"],
      ],
      grammar: [
        ["Estructuras de intensificación retórica", "“No solo... sino que” y “cada vez más” intensifican una afirmación, acumulando gravedad — recurso típico del discurso de crisis y del pánico moral.", "No solo se exagera la amenaza, sino que se busca un chivo expiatorio. / El discurso alarmista es cada vez más frecuente en los medios."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un chivo expiatorio” en inglés?",["to blow a threat out of proportion", "a manufactured crisis", "to catastrophize a situation", "a scapegoat"],3,"“Un chivo expiatorio” es “a scapegoat” en inglés."],
      ["mcq","¿Cómo se dice “desproporcionar una amenaza” en inglés?",["a manufactured crisis", "to blow a threat out of proportion", "a scapegoat", "alarmist rhetoric"],1,"“Desproporcionar una amenaza” es “to blow a threat out of proportion” en inglés."],
      ["fill","Completa: “No solo se exagera la amenaza, ___ se busca un chivo expiatorio.”",["sino", "pero", "sino que", "aunque"],2,"“No solo... sino que” intensifica una afirmación añadiendo un segundo elemento con verbo propio."],
      ["translate","Traduce con precisión: “Alarmist rhetoric is becoming increasingly common in the media.”",["El pánico moral es cada vez más frecuente en los medios.", "El discurso alarmista es cada vez más frecuente en los medios.", "El discurso alarmista es cada vez más grave en los medios.", "El discurso alarmista es cada vez menos frecuente en los medios."],1,"“Increasingly common” = “cada vez más frecuente”, estructura de intensificación gradual."],
      ["arrange","Ordena: [expiatorio / buscan / un / medios / chivo / los]",["chivo un medios Los buscan expiatorio", "un chivo buscan Los medios expiatorio", "Los medios buscan un chivo expiatorio", "un expiatorio buscan chivo medios Los"],2,"Sujeto + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe 55-75 palabras analizando un caso real o inventado de pánico moral en los medios, usando al menos una estructura “no solo... sino que” y una con “cada vez más”.",[],["no solo... sino que", "cada vez más", "pánico moral"]],
    ]
  },
  {
    id:"es_a1_school_supplies_subjects", level:"A1", title:"En la escuela: útiles y asignaturas", emoji:"🎒", xp:38,
    description:"Aprende vocabulario escolar y a usar correctamente los artículos definidos e indefinidos.",
    study: {
      vocab: [
        ["el cuaderno", "the notebook"],
        ["el lápiz", "the pencil"],
        ["la mochila", "the backpack"],
        ["las matemáticas", "math"],
        ["la historia", "history"],
        ["el/la profesor/a", "the teacher"],
      ],
      grammar: [
        ["Artículos definidos e indefinidos", "Los artículos definidos (el, la, los, las) se usan para algo específico o ya conocido; los indefinidos (un, una, unos, unas) para algo no específico o mencionado por primera vez.", "Tengo un cuaderno nuevo. / El cuaderno está en la mochila."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el lápiz” en inglés?",["the pencil", "the teacher", "math", "the backpack"],0,"“Lápiz” es “pencil” en inglés."],
      ["mcq","¿Cómo se dice “las matemáticas” en inglés?",["the backpack", "math", "the pencil", "the notebook"],1,"“Matemáticas” es “math” en inglés."],
      ["fill","Completa: “Tengo ___ mochila nueva para el colegio.”",["un", "una", "la", "el"],1,"Se usa el artículo indefinido “una” porque es la primera vez que se menciona."],
      ["translate","Traduce: “The notebook is in the backpack.”",["El cuaderno está en la mochila.", "Un cuaderno está en la mochila.", "El lápiz está en la mochila.", "El cuaderno está en el aula."],0,"“The notebook” ya es conocido, por eso se usa el artículo definido “el”."],
      ["arrange","Ordena: [historia / me / gusta / la]",["Me gusta la historia", "historia gusta la Me", "gusta Me historia la", "gusta historia Me la"],0,"Pronombre + verbo “gustar” + artículo definido + sustantivo."],
      ["writing","Describe en 20-30 palabras qué útiles escolares tienes y qué asignatura te gusta más, usando artículos definidos e indefinidos.",[],["un/una", "el/la", "me gusta"]],
    ]
  },
  {
    id:"es_a2_post_office_packages", level:"A2", title:"El correo y los paquetes", emoji:"📦", xp:48,
    description:"Aprende vocabulario postal y a usar pronombres de objeto directo (lo/la/los/las).",
    study: {
      vocab: [
        ["el paquete", "the package"],
        ["la carta", "the letter"],
        ["el sello", "the stamp"],
        ["enviar por correo", "to mail/send"],
        ["el buzón", "the mailbox"],
        ["la dirección", "the address"],
      ],
      grammar: [
        ["Pronombres de objeto directo (lo/la/los/las)", "Los pronombres de objeto directo sustituyen al sustantivo ya mencionado, concordando en género y número, y se colocan antes del verbo conjugado.", "¿La carta? La envié ayer. / ¿Los paquetes? Los recibí esta mañana."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el sello” en inglés?",["the mailbox", "the stamp", "to mail/send", "the letter"],1,"“Sello” es “stamp” en inglés."],
      ["mcq","¿Cómo se dice “el buzón” en inglés?",["the stamp", "the address", "the mailbox", "to mail/send"],2,"“Buzón” es “mailbox” en inglés."],
      ["fill","Completa: “¿El paquete? ___ recibí esta mañana.”",["Le", "Los", "Lo", "La"],2,"“El paquete” es masculino singular, por eso se sustituye con “lo”."],
      ["translate","Traduce: “The letters? I sent them yesterday.”",["¿Los cartas? Las envié ayer.", "¿Las cartas? Los envié ayer.", "¿Las cartas? Las envié ayer.", "¿Las cartas? La envié ayer."],2,"“Las cartas” es femenino plural, por eso se sustituye con “las”."],
      ["arrange","Ordena: [dirección / necesito / tu]",["dirección Necesito tu", "Necesito dirección tu", "dirección tu Necesito", "Necesito tu dirección"],3,"Verbo + objeto posesivo + sustantivo."],
      ["speaking","Describe en 40-60 palabras la última vez que enviaste una carta o un paquete, usando pronombres de objeto directo (lo/la/los/las).",[],["lo envié", "la recibí", "paquete"]],
    ]
  },
  {
    id:"es_b1_movies_theater", level:"B1", title:"Ir al cine y al teatro", emoji:"🎬", xp:62,
    description:"Aprende vocabulario de cine y teatro y a construir oraciones temporales con “cuando”, “mientras” y “antes de que”.",
    study: {
      vocab: [
        ["la entrada/el boleto", "the ticket"],
        ["el estreno", "the premiere"],
        ["el reparto/elenco", "the cast"],
        ["los efectos especiales", "special effects"],
        ["la butaca", "the seat"],
        ["el intermedio", "the intermission"],
      ],
      grammar: [
        ["Oraciones temporales con “cuando”, “mientras” y “antes de que”", "“Cuando” y “mientras” + indicativo describen acciones habituales o simultáneas; “antes de que” exige subjuntivo porque introduce una acción aún no realizada.", "Compro las entradas cuando llego al cine. / Hablamos mientras esperamos el estreno. / Llegamos antes de que empiece la película."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el estreno” en inglés?",["special effects", "the seat", "the premiere", "the cast"],2,"“Estreno” es “premiere” en inglés."],
      ["mcq","¿Cómo se dice “el reparto/elenco” en inglés?",["the ticket", "the intermission", "the cast", "the premiere"],2,"“Reparto/elenco” es “cast” en inglés."],
      ["fill","Completa: “Llegamos antes de que ___ la película.”",["empieza", "empezó", "empiece", "empezará"],2,"“Antes de que” exige subjuntivo porque la acción aún no ha ocurrido: “antes de que empiece”."],
      ["translate","Traduce: “We talk while we wait for the premiere.”",["Hablamos cuando esperamos el estreno.", "Hablamos mientras esperamos el estreno.", "Hablamos mientras esperamos el intermedio.", "Hablamos mientras esperemos el estreno."],1,"“Mientras” + indicativo describe acciones simultáneas: “mientras esperamos”."],
      ["arrange","Ordena: [cine / al / vamos / al / llegar]",["al Vamos cine al llegar", "cine Vamos al llegar al", "Vamos al cine al llegar", "llegar al cine Vamos al"],2,"Verbo + preposición + sustantivo + preposición + infinitivo."],
      ["writing","Escribe 45-65 palabras sobre tu última visita al cine o al teatro, usando al menos dos oraciones temporales con “cuando”, “mientras” o “antes de que”.",[],["cuando", "mientras", "antes de que"]],
    ]
  },
  {
    id:"es_b2_social_activism_protests", level:"B2", title:"El activismo social y las protestas", emoji:"✊", xp:84,
    description:"Habla de activismo social usando el subjuntivo con verbos de influencia (exigir, pedir que).",
    study: {
      vocab: [
        ["una manifestación/protesta", "a protest"],
        ["exigir un cambio", "to demand change"],
        ["firmar una petición", "to sign a petition"],
        ["concienciar sobre algo", "to raise awareness about something"],
        ["un colectivo/organización", "a collective/organization"],
        ["movilizar a la gente", "to mobilize people"],
      ],
      grammar: [
        ["Subjuntivo con verbos de influencia", "Verbos como “exigir”, “pedir” o “sugerir” + “que” requieren subjuntivo en la subordinada porque intentan influir en la acción de otra persona.", "Los manifestantes exigen que el gobierno actúe. / El colectivo pide que se firme la petición."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “concienciar sobre algo” en inglés?",["to sign a petition", "to raise awareness about something", "a collective/organization", "a protest"],1,"“Concienciar sobre algo” es “to raise awareness about something” en inglés."],
      ["mcq","¿Cómo se dice “movilizar a la gente” en inglés?",["a collective/organization", "a protest", "to demand change", "to mobilize people"],3,"“Movilizar a la gente” es “to mobilize people” en inglés."],
      ["fill","Completa: “Los manifestantes exigen que el gobierno ___.”",["actúe", "actuaría", "actuará", "actúa"],0,"“Exigir que” requiere subjuntivo: “exigen que actúe”."],
      ["translate","Traduce: “The collective is asking people to sign the petition.”",["El colectivo pide que la gente firma la petición.", "El colectivo exige que la gente firme la petición.", "El colectivo pide que la gente firme la manifestación.", "El colectivo pide que la gente firme la petición."],3,"“Pedir que” requiere subjuntivo: “pide que firme”."],
      ["arrange","Ordena: [petición / firmar / voy / a / la]",["firmar Voy la a petición", "Voy petición a la firmar", "Voy a firmar la petición", "a la petición firmar Voy"],2,"“Ir a” + infinitivo + artículo + sustantivo."],
      ["writing","Escribe 55-75 palabras sobre una causa social que te importe, usando al menos dos verbos de influencia + subjuntivo (exigir que, pedir que, sugerir que).",[],["exijo que", "pido que", "manifestación"]],
    ]
  },
  {
    id:"es_c1_aging_population_pensions", level:"C1", title:"El envejecimiento poblacional y las pensiones", emoji:"👴", xp:92,
    description:"Analiza el envejecimiento poblacional usando oraciones consecutivas (“tan...que”, “de tal manera que”).",
    study: {
      vocab: [
        ["el envejecimiento poblacional", "population aging"],
        ["el sistema de pensiones", "the pension system"],
        ["la tasa de natalidad", "the birth rate"],
        ["la esperanza de vida", "life expectancy"],
        ["sostener el sistema de pensiones", "to sustain the pension system"],
        ["la brecha generacional", "the generational gap"],
      ],
      grammar: [
        ["Oraciones consecutivas: “tan...que” y “de tal manera que”", "Las oraciones consecutivas expresan una consecuencia derivada de una intensidad o manera. “Tan + adjetivo + que” enfatiza el grado; “de tal manera que” introduce el resultado de una acción.", "La población envejece tan rápido que el sistema de pensiones está en riesgo. / La natalidad ha bajado de tal manera que faltan trabajadores jóvenes."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la tasa de natalidad” en inglés?",["the birth rate", "the generational gap", "life expectancy", "population aging"],0,"“Tasa de natalidad” es “birth rate” en inglés."],
      ["mcq","¿Cómo se dice “sostener el sistema de pensiones” en inglés?",["life expectancy", "the birth rate", "to sustain the pension system", "the generational gap"],2,"“Sostener el sistema de pensiones” es “to sustain the pension system” en inglés."],
      ["fill","Completa: “La población envejece tan rápido ___ el sistema de pensiones está en riesgo.”",["pues", "como", "que", "así"],2,"“Tan + adjetivo/adverbio + que” introduce la consecuencia: “tan rápido que está en riesgo”."],
      ["translate","Traduce con oración consecutiva: “The birth rate has dropped in such a way that young workers are lacking.”",["La natalidad ha bajado de tal manera que sobran trabajadores jóvenes.", "La esperanza de vida ha bajado de tal manera que faltan trabajadores jóvenes.", "La natalidad ha bajado de tal manera que faltan trabajadores jóvenes.", "La natalidad ha bajado tan manera que faltan trabajadores jóvenes."],2,"“In such a way that” = “de tal manera que”, introduciendo la consecuencia."],
      ["arrange","Ordena: [pensiones / preocupa / de / sistema / el / a muchos]",["a El muchos de pensiones preocupa sistema", "muchos preocupa a pensiones El de sistema", "sistema pensiones muchos de a preocupa El", "El sistema de pensiones preocupa a muchos"],3,"Sujeto + verbo + complemento."],
      ["writing","Escribe 55-75 palabras sobre el envejecimiento poblacional en tu país, usando al menos una oración con “tan...que” y otra con “de tal manera que”.",[],["tan...que", "de tal manera que", "envejecimiento"]],
    ]
  },
  {
    id:"es_c2_rhetoric_of_silence", level:"C2", title:"La retórica del silencio y lo no dicho", emoji:"🤐", xp:100,
    description:"Analiza la retórica del silencio y practica la elipsis con fines retóricos.",
    study: {
      vocab: [
        ["el silencio elocuente", "eloquent silence"],
        ["omitir deliberadamente algo", "to deliberately omit something"],
        ["lo no dicho", "the unsaid"],
        ["un vacío discursivo", "a discursive gap"],
        ["dejar algo en suspenso", "to leave something hanging"],
        ["la elipsis retórica", "rhetorical ellipsis"],
      ],
      grammar: [
        ["La elipsis con fines retóricos", "La elipsis omite un elemento que se sobreentiende por el contexto, generando énfasis o dejando una idea deliberadamente incompleta — un recurso poderoso en el discurso político y literario.", "Unos callan por miedo; otros, por complicidad. (se omite “callan”) / Prometió reformas... y silencio. (se omite el verbo esperado)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un vacío discursivo” en inglés?",["a discursive gap", "rhetorical ellipsis", "the unsaid", "to deliberately omit something"],0,"“Un vacío discursivo” es “a discursive gap” en inglés."],
      ["mcq","¿Cómo se dice “dejar algo en suspenso” en inglés?",["to leave something hanging", "rhetorical ellipsis", "eloquent silence", "to deliberately omit something"],0,"“Dejar algo en suspenso” es “to leave something hanging” en inglés."],
      ["fill","Completa: “Unos callan por miedo; otros, por ___.”",["es complicidad", "que complicidad", "complicidad", "callan complicidad"],2,"La elipsis omite el verbo repetido “callan”, dejando solo el complemento: “otros, por complicidad”."],
      ["translate","Traduce con elipsis retórica: “He promised reforms... and silence.”",["Prometió reformas... y ruido.", "Prometió reformas... y el silencio.", "Prometió reformas... y fue silencio.", "Prometió reformas... y silencio."],3,"La elipsis retórica omite el verbo esperado tras los puntos suspensivos, dejando solo “y silencio”."],
      ["arrange","Ordena: [dice / a veces / más / silencio / que / el / las palabras]",["a que veces dice más El silencio palabras las", "que las palabras más silencio El a dice veces", "más las El palabras veces que silencio dice a", "El silencio a veces dice más que las palabras"],3,"Sujeto + adverbio + verbo + comparativo + complemento."],
      ["writing","Escribe 55-75 palabras analizando un ejemplo (real o inventado) de silencio retórico en un discurso, usando al menos una elipsis deliberada.",[],["lo no dicho", "silencio elocuente", "omitir"]],
    ]
  },
  {
    id:"es_a1_time_parts_of_day", level:"A1", title:"La hora y las partes del día", emoji:"🕐", xp:38,
    description:"Aprende a decir la hora y las partes del día con preposiciones de tiempo.",
    study: {
      vocab: [
        ["la mañana", "the morning"],
        ["la tarde", "the afternoon"],
        ["la noche", "the night"],
        ["el mediodía", "noon"],
        ["la medianoche", "midnight"],
        ["en punto", "o'clock/sharp"],
      ],
      grammar: [
        ["“¿Qué hora es?” + preposiciones de tiempo", "Para preguntar la hora se usa “¿Qué hora es?”; para responder, “es la una” (singular) o “son las + número” (plural), con “de la mañana/tarde/noche” para especificar el momento del día.", "Son las tres de la tarde. / Es la una en punto de la madrugada."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la medianoche” en inglés?",["the afternoon", "the night", "midnight", "noon"],2,"“Medianoche” es “midnight” en inglés."],
      ["mcq","¿Cómo se dice “en punto” en inglés?",["midnight", "o'clock/sharp", "the afternoon", "noon"],1,"“En punto” es “o'clock” o “sharp” en inglés."],
      ["fill","Completa: “___ las tres de la tarde.”",["Hay", "Es", "Son", "Está"],2,"Se usa “son” con números plurales: “son las tres”."],
      ["translate","Traduce: “It's one o'clock in the morning.”",["Son la una de la mañana.", "Es la una de la mañana.", "Es la una de la tarde.", "Es las una de la mañana."],1,"Con “la una” (singular) se usa “es”, no “son”."],
      ["arrange","Ordena: [tarde / de / cuatro / son / la / las]",["las cuatro de tarde la Son", "Son de tarde la las cuatro", "de la cuatro las tarde Son", "Son las cuatro de la tarde"],3,"Verbo + artículo + número + preposición + parte del día."],
      ["writing","Describe en 20-30 palabras tu rutina diaria mencionando horas específicas, usando “son las” y “de la mañana/tarde/noche”.",[],["son las", "de la mañana", "de la tarde"]],
    ]
  },
  {
    id:"es_a2_bank_open_account", level:"A2", title:"En el banco: abrir una cuenta", emoji:"🏦", xp:48,
    description:"Aprende vocabulario bancario básico y a usar “poder” para posibilidad y permiso.",
    study: {
      vocab: [
        ["la cuenta bancaria", "the bank account"],
        ["el cajero automático", "the ATM"],
        ["retirar dinero", "to withdraw money"],
        ["depositar dinero", "to deposit money"],
        ["la tarjeta de débito", "the debit card"],
        ["el saldo", "the balance"],
      ],
      grammar: [
        ["“Poder” + infinitivo para posibilidad y permiso", "“Poder” + infinitivo expresa capacidad, posibilidad o permiso, según el contexto.", "¿Puedo abrir una cuenta aquí? / Puedes retirar dinero en cualquier cajero automático."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “retirar dinero” en inglés?",["the bank account", "to withdraw money", "to deposit money", "the debit card"],1,"“Retirar dinero” es “to withdraw money” en inglés."],
      ["mcq","¿Cómo se dice “el saldo” en inglés?",["the balance", "the ATM", "to withdraw money", "the debit card"],0,"“Saldo” es “balance” en inglés."],
      ["fill","Completa: “¿___ abrir una cuenta aquí, por favor?”",["Puedes", "Puedo", "Podemos", "Puede"],1,"Se usa “puedo” en primera persona para pedir permiso: “¿puedo abrir?”."],
      ["translate","Traduce: “You can withdraw money at any ATM.”",["Puedes retirar dinero en cualquier cajero automático.", "Puedes retirar dinero en cualquier banco.", "Puede retirar dinero en cualquier cajero automático.", "Puedes depositar dinero en cualquier cajero automático."],0,"“You can withdraw” = “puedes retirar”, con “poder” + infinitivo."],
      ["arrange","Ordena: [saldo / consultar / mi / quiero]",["Quiero consultar mi saldo", "Quiero saldo consultar mi", "consultar mi Quiero saldo", "saldo mi consultar Quiero"],0,"Verbo + infinitivo + objeto posesivo + sustantivo."],
      ["speaking","Describe en 40-60 palabras cómo abrirías una cuenta bancaria, usando “poder” para pedir permiso o expresar posibilidad.",[],["puedo", "puedes", "cuenta"]],
    ]
  },
  {
    id:"es_b1_train_plane_travel", level:"B1", title:"Viajar en tren y avión: retrasos y cambios", emoji:"🚄", xp:62,
    description:"Aprende vocabulario de viajes largos y a usar “aunque” con indicativo o subjuntivo.",
    study: {
      vocab: [
        ["el retraso", "the delay"],
        ["perder el vuelo/tren", "to miss the flight/train"],
        ["hacer escala", "to make a layover/stopover"],
        ["el andén", "the platform"],
        ["cancelar un vuelo", "to cancel a flight"],
        ["el asiento de ventanilla/pasillo", "the window/aisle seat"],
      ],
      grammar: [
        ["“Aunque” + indicativo o subjuntivo", "“Aunque” + indicativo expresa un hecho conocido o real (concesión real); “aunque” + subjuntivo expresa una posibilidad hipotética o incierta (concesión hipotética).", "Aunque el tren llegó tarde, alcancé el vuelo. (hecho real) / Aunque el vuelo se cancele, tenemos otra opción. (posibilidad incierta)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “hacer escala” en inglés?",["to miss the flight/train", "the window/aisle seat", "the delay", "to make a layover/stopover"],3,"“Hacer escala” es “to make a layover” o “stopover” en inglés."],
      ["mcq","¿Cómo se dice “el andén” en inglés?",["to cancel a flight", "to miss the flight/train", "the platform", "the window/aisle seat"],2,"“Andén” es “platform” en inglés."],
      ["fill","Completa: “Aunque el vuelo se ___, tenemos otra opción de viaje.”",["cancela", "cancele", "canceló", "cancelará"],1,"“Aunque” + subjuntivo expresa una posibilidad incierta: “aunque se cancele”."],
      ["translate","Traduce: “Although the train arrived late, I made the flight.”",["Aunque el tren llegara tarde, alcancé el vuelo.", "Aunque el avión llegó tarde, alcancé el vuelo.", "Aunque el tren llegó tarde, perdí el vuelo.", "Aunque el tren llegó tarde, alcancé el vuelo."],3,"“Although it arrived” describe un hecho real ya sucedido, por eso se usa indicativo: “aunque llegó”."],
      ["arrange","Ordena: [ventanilla / prefiero / de / el asiento]",["Prefiero el asiento de ventanilla", "de el asiento ventanilla Prefiero", "asiento Prefiero el de ventanilla", "el Prefiero asiento de ventanilla"],0,"Verbo + artículo + sustantivo + preposición + complemento."],
      ["writing","Escribe 45-65 palabras sobre un viaje en tren o avión con contratiempos, usando “aunque” con indicativo y con subjuntivo al menos una vez cada uno.",[],["aunque", "retraso", "escala"]],
    ]
  },
  {
    id:"es_b2_sharing_economy_conscious_consumption", level:"B2", title:"La economía colaborativa y el consumo consciente", emoji:"♻️", xp:84,
    description:"Habla de economía colaborativa usando el futuro y el condicional de probabilidad.",
    study: {
      vocab: [
        ["la economía colaborativa", "the sharing economy"],
        ["alquilar en lugar de comprar", "to rent instead of buying"],
        ["el consumo consciente", "conscious consumption"],
        ["compartir recursos", "to share resources"],
        ["la obsolescencia programada", "planned obsolescence"],
        ["reducir el desperdicio", "to reduce waste"],
      ],
      grammar: [
        ["Futuro y condicional de probabilidad", "El futuro simple puede expresar una conjetura sobre el presente (“serán las diez”); el condicional simple expresa una conjetura sobre el pasado (“serían las diez cuando llegó”).", "Ese modelo tendrá unos cinco años de obsolescencia programada. / Con ese consumo, gastarían menos recursos de los que pensaban."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “alquilar en lugar de comprar” en inglés?",["to reduce waste", "to share resources", "the sharing economy", "to rent instead of buying"],3,"“Alquilar en lugar de comprar” es “to rent instead of buying” en inglés."],
      ["mcq","¿Cómo se dice “la obsolescencia programada” en inglés?",["to share resources", "planned obsolescence", "to reduce waste", "conscious consumption"],1,"“Obsolescencia programada” es “planned obsolescence” en inglés."],
      ["fill","Completa: “Ese modelo ___ unos cinco años de obsolescencia programada.”",["tuvo", "tiene", "tendría", "tendrá"],3,"El futuro de probabilidad expresa una conjetura sobre el presente: “tendrá unos cinco años”."],
      ["translate","Traduce con condicional de probabilidad: “With that consumption, they would spend fewer resources than they thought.”",["Con ese consumo, gastarían menos recursos de los que pensaban.", "Con ese consumo, gastarían más recursos de los que pensaban.", "Con ese consumo, gastarán menos recursos de los que pensaban.", "Con ese consumo, gastarían menos dinero de los que pensaban."],0,"El condicional de probabilidad “gastarían” expresa una conjetura sobre una situación pasada o hipotética."],
      ["arrange","Ordena: [desperdicio / debemos / el / reducir]",["desperdicio reducir Debemos el", "reducir desperdicio Debemos el", "Debemos reducir el desperdicio", "reducir el desperdicio Debemos"],2,"Verbo modal + infinitivo + artículo + sustantivo."],
      ["writing","Escribe 55-75 palabras sobre la economía colaborativa y el consumo consciente, usando al menos un futuro y un condicional de probabilidad.",[],["tendrá", "serían", "consumo consciente"]],
    ]
  },
  {
    id:"es_c1_nonverbal_intercultural_communication", level:"C1", title:"El lenguaje no verbal y la comunicación intercultural", emoji:"🤝", xp:92,
    description:"Analiza la comunicación no verbal usando “como si” + subjuntivo.",
    study: {
      vocab: [
        ["el lenguaje corporal", "body language"],
        ["el contacto visual", "eye contact"],
        ["un gesto malinterpretado", "a misinterpreted gesture"],
        ["la proxémica (distancia personal)", "proxemics (personal space)"],
        ["una señal cultural", "a cultural cue"],
        ["el silencio incómodo", "awkward silence"],
      ],
      grammar: [
        ["“Como si” + subjuntivo (imperfecto o pluscuamperfecto)", "“Como si” siempre exige subjuntivo, aunque la comparación se refiera al presente, porque describe algo hipotético o contrario a la realidad.", "Actuó como si entendiera el gesto, aunque no lo entendía. / Reaccionó como si hubiera sido ofendido."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un gesto malinterpretado” en inglés?",["a cultural cue", "awkward silence", "body language", "a misinterpreted gesture"],3,"“Un gesto malinterpretado” es “a misinterpreted gesture” en inglés."],
      ["mcq","¿Cómo se dice “la proxémica (distancia personal)” en inglés?",["a misinterpreted gesture", "awkward silence", "proxemics (personal space)", "body language"],2,"“Proxémica” es “proxemics” en inglés."],
      ["fill","Completa: “Actuó como si ___ el gesto, aunque no lo entendía.”",["entenderá", "entendía", "entendiera", "entiende"],2,"“Como si” exige subjuntivo imperfecto para comparaciones sobre el presente: “como si entendiera”."],
      ["translate","Traduce: “He reacted as if he had been offended.”",["Reaccionó como si fue ofendido.", "Reaccionó como si hubiera sido invitado.", "Reaccionó como si hubiera sido ofendido.", "Reaccionó como si había sido ofendido."],2,"“As if he had been offended” se traduce con subjuntivo pluscuamperfecto: “como si hubiera sido ofendido”."],
      ["arrange","Ordena: [culturas / varía / entre / el contacto visual]",["El contacto visual varía entre culturas", "entre El contacto visual culturas varía", "varía entre culturas El visual contacto", "entre varía El culturas visual contacto"],0,"Sujeto + verbo + preposición + complemento."],
      ["writing","Escribe 55-75 palabras sobre un malentendido intercultural relacionado con el lenguaje no verbal, usando al menos dos estructuras con “como si” + subjuntivo.",[],["como si", "lenguaje corporal", "gesto"]],
    ]
  },
  {
    id:"es_c2_scientific_hedging_uncertainty", level:"C2", title:"La incertidumbre y el lenguaje científico", emoji:"🔬", xp:100,
    description:"Analiza el lenguaje científico usando expresiones de matización epistémica (hedging).",
    study: {
      vocab: [
        ["la incertidumbre estadística", "statistical uncertainty"],
        ["un margen de error", "a margin of error"],
        ["una correlación no implica causalidad", "correlation does not imply causation"],
        ["los resultados preliminares", "preliminary results"],
        ["una hipótesis no confirmada", "an unconfirmed hypothesis"],
        ["matizar una afirmación", "to hedge/qualify a claim"],
      ],
      grammar: [
        ["Expresiones de matización epistémica (hedging)", "Frases como “podría decirse que”, “no es descabellado pensar que” o “los datos sugieren, aunque no confirman, que” matizan el grado de certeza de una afirmación científica, evitando sobregeneralizar.", "Podría decirse que existe una tendencia, aunque los datos son preliminares. / Los resultados sugieren, aunque no confirman, una relación causal."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un margen de error” en inglés?",["correlation does not imply causation", "a margin of error", "preliminary results", "statistical uncertainty"],1,"“Un margen de error” es “a margin of error” en inglés."],
      ["mcq","¿Cómo se dice “una hipótesis no confirmada” en inglés?",["to hedge/qualify a claim", "an unconfirmed hypothesis", "correlation does not imply causation", "preliminary results"],1,"“Una hipótesis no confirmada” es “an unconfirmed hypothesis” en inglés."],
      ["fill","Completa: “___ decirse que existe una tendencia, aunque los datos son preliminares.”",["Puede", "Es", "Podría", "Debe"],2,"“Podría decirse que” es una expresión fija de matización epistémica que suaviza una afirmación."],
      ["translate","Traduce con precisión: “The results suggest, but do not confirm, a causal relationship.”",["Los resultados sugieren, aunque no confirman, una relación causal.", "Los resultados sugieren, aunque confirman, una relación causal.", "Los resultados confirman, aunque no sugieren, una relación causal.", "Los resultados sugieren, aunque no confirman, una correlación estadística."],0,"“Suggest, but do not confirm” se traduce con “sugieren, aunque no confirman”, matizando la certeza."],
      ["arrange","Ordena: [implica / correlación / no / causalidad / una]",["implica correlación Una causalidad no", "Una no implica correlación causalidad", "no correlación causalidad Una implica", "Una correlación no implica causalidad"],3,"Artículo + sustantivo + adverbio + verbo + sustantivo."],
      ["writing","Escribe 55-75 palabras analizando un estudio científico (real o inventado) con resultados preliminares, usando al menos dos expresiones de matización epistémica.",[],["podría decirse que", "los datos sugieren", "incertidumbre"]],
    ]
  },
  {
    id:"es_a1_weather_seasons", level:"A1", title:"El clima y las estaciones", emoji:"☀️", xp:38,
    description:"Aprende a describir el clima y las estaciones del año en español con “hace/está”.",
    study: {
      vocab: [
        ["soleado", "sunny"],
        ["lluvioso", "rainy"],
        ["frío", "cold"],
        ["caluroso", "hot"],
        ["la primavera", "spring"],
        ["el invierno", "winter"],
      ],
      grammar: [
        ["“Hace/Está” para el clima", "Para el clima se usa “hace” + sustantivo (“hace frío”, “hace calor”) o “está” + adjetivo/gerundio (“está soleado”, “está lloviendo”).", "Hoy hace sol. / Está lloviendo en primavera."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cold” en español?",["winter", "sunny", "cold", "frío"],3,"“Cold” es “frío” en español."],
      ["mcq","¿Cómo se dice “rainy” en español?",["hot", "lluvioso", "spring", "winter"],1,"“Rainy” es “lluvioso” en español."],
      ["fill","Completa: “Hoy hace mucho ___, lleva un paraguas.”",["invierno", "calor", "sol", "frío"],3,"“Frío” se usa con “hace”: “hace frío”."],
      ["translate","Traduce: “It's very cold in winter.”",["Hace mucho frío en invierno.", "Está muy frío en invierno.", "Hace mucho calor en invierno.", "Hace mucho frío en verano."],0,"“It's very cold” se traduce como “hace mucho frío”, con “hacer” + sustantivo."],
      ["arrange","Ordena: [sol / hoy / hace]",["hoy sol hace", "sol hoy hace", "hace sol hoy", "hoy hace sol"],2,"Verbo impersonal + sustantivo + adverbio de tiempo."],
      ["writing","Describe en español, en 20-30 palabras, el clima de tu ciudad en las cuatro estaciones, usando “hace” y “está”.",[],["hace", "está", "frío"]],
    ]
  },
  {
    id:"es_a2_pet_care", level:"A2", title:"El cuidado de mascotas", emoji:"🐾", xp:48,
    description:"Aprende vocabulario sobre mascotas y a usar “tener que” para obligaciones en español.",
    study: {
      vocab: [
        ["alimentar a la mascota", "to feed the pet"],
        ["pasear al perro", "to walk the dog"],
        ["el veterinario", "the veterinarian"],
        ["vacunar", "to vaccinate"],
        ["la caja de arena", "the litter box"],
        ["adoptar una mascota", "to adopt a pet"],
      ],
      grammar: [
        ["“Tener que” para obligaciones", "“Tener que” + infinitivo expresa una obligación o necesidad cotidiana.", "Tengo que pasear al perro todas las mañanas. / Ella tiene que alimentar al gato dos veces al día."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the veterinarian” en español?",["to feed the pet", "to vaccinate", "el veterinario", "to walk the dog"],2,"“The veterinarian” es “el veterinario” en español."],
      ["mcq","¿Cómo se dice “to vaccinate” en español?",["to feed the pet", "the litter box", "to adopt a pet", "vacunar"],3,"“To vaccinate” es “vacunar” en español."],
      ["fill","Completa: “___ que pasear al perro todas las mañanas.”",["Tiene", "Tienes", "Tengo", "Tenemos"],2,"“Tener que” se conjuga con “yo” como “tengo que”."],
      ["translate","Traduce: “I have to feed the pet twice a day.”",["Tengo que alimentar a la mascota una vez al día.", "Tengo que pasear a la mascota dos veces al día.", "Tuve que alimentar a la mascota dos veces al día.", "Tengo que alimentar a la mascota dos veces al día."],3,"“I have to feed” se traduce con “tengo que alimentar”, obligación en presente."],
      ["arrange","Ordena: [tiene / perro / ella / pasear / al / que]",["tiene al perro que pasear ella", "ella tiene que pasear al perro", "pasear tiene que perro al ella", "que tiene pasear ella perro al"],1,"Sujeto + “tiene que” + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en español, en 20-30 palabras, tu rutina de cuidado de una mascota usando “tener que”.",[],["tengo que", "tiene que", "mascota"]],
    ]
  },
  {
    id:"es_b1_startups_entrepreneurship", level:"B1", title:"El emprendimiento y las startups", emoji:"🚀", xp:62,
    description:"Aprende vocabulario de emprendimiento y a usar “ir a” para planes en español.",
    study: {
      vocab: [
        ["la startup/empresa emergente", "startup"],
        ["lanzar un producto", "to launch a product"],
        ["el inversionista", "investor"],
        ["el plan de negocios", "business plan"],
        ["asumir un riesgo", "to take a risk"],
        ["escalar un negocio", "to scale a business"],
      ],
      grammar: [
        ["“Ir a” + infinitivo para planes", "“Ir a” + infinitivo expresa un plan o intención ya decidida.", "Vamos a lanzar el producto el próximo mes. / Ella va a buscar inversionistas."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “investor” en español?",["el inversionista", "to scale a business", "to launch a product", "investor"],0,"“Investor” es “el inversionista” en español."],
      ["mcq","¿Cómo se dice “to take a risk” en español?",["asumir un riesgo", "to take a risk", "to scale a business", "to launch a product"],0,"“To take a risk” es “asumir un riesgo” en español."],
      ["fill","Completa: “___ a lanzar el producto el próximo mes.”",["Van", "Vamos", "Va", "Vas"],1,"“Ir a” con “nosotros” se conjuga como “vamos a”."],
      ["translate","Traduce: “We are going to launch the product next month.”",["Lanzamos el producto el próximo mes.", "Vamos a lanzar el producto el próximo mes.", "Vamos a lanzar el producto este mes.", "Vamos a lanzar el negocio el próximo mes."],1,"“We are going to launch” se traduce con “vamos a lanzar”, plan futuro decidido."],
      ["arrange","Ordena: [inversionistas / va / buscar / ella / a]",["ella va a buscar inversionistas", "inversionistas va a buscar ella", "inversionistas ella va buscar a", "a inversionistas ella va buscar"],0,"Sujeto + “va a” + verbo + sustantivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre una idea de startup que te gustaría lanzar, usando “ir a” para tus planes.",[],["voy a", "startup", "inversionistas"]],
    ]
  },
  {
    id:"es_b2_space_exploration", level:"B2", title:"La exploración espacial", emoji:"🚀", xp:84,
    description:"Habla de la exploración espacial usando el futuro perfecto en español.",
    study: {
      vocab: [
        ["la misión espacial", "space mission"],
        ["el astronauta", "astronaut"],
        ["orbitar", "to orbit"],
        ["el lanzamiento de cohete", "rocket launch"],
        ["el espacio exterior", "outer space"],
        ["la estación espacial", "space station"],
      ],
      grammar: [
        ["Futuro perfecto para logros futuros", "El futuro perfecto (“habrá” + participio) describe una acción que se habrá completado antes de un momento futuro determinado.", "Para 2030, los astronautas habrán aterrizado en Marte. / El cohete habrá alcanzado la órbita para entonces."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “space station” en español?",["space station", "la estación espacial", "space mission", "rocket launch"],1,"“Space station” es “la estación espacial” en español."],
      ["mcq","¿Cómo se dice “to orbit” en español?",["rocket launch", "outer space", "orbitar", "space mission"],2,"“To orbit” es “orbitar” en español."],
      ["fill","Completa: “Para 2030, los astronautas ___ aterrizado en Marte.”",["habrán", "habían", "habrían", "han"],0,"El futuro perfecto usa “habrán” + participio: “habrán aterrizado”."],
      ["translate","Traduce: “By 2030, astronauts will have landed on Mars.”",["Para 2030, los astronautas habrán aterrizado en Marte.", "Para 2030, los astronautas aterrizarán en Marte.", "Para 2030, los astronautas han aterrizado en Marte.", "Para 2030, los astronautas habrían aterrizado en Marte."],0,"“Will have landed” se traduce con futuro perfecto: “habrán aterrizado”."],
      ["arrange","Ordena: [pronto / cohete / órbita / el / la / alcanzará]",["cohete pronto órbita el la alcanzará", "pronto la cohete el órbita alcanzará", "el la alcanzará cohete pronto órbita", "el cohete alcanzará la órbita pronto"],3,"Artículo + sustantivo + verbo + artículo + sustantivo + adverbio."],
      ["writing","Escribe en español, en 55-75 palabras, una predicción sobre el futuro de la exploración espacial usando el futuro perfecto (“habrá...”) al menos dos veces.",[],["habrán", "misión espacial", "astronauta"]],
    ]
  },
  {
    id:"es_c1_ai_ethics", level:"C1", title:"La ética y la regulación de la inteligencia artificial", emoji:"🤖", xp:92,
    description:"Analiza la ética de la IA usando la pasiva refleja en registro formal en español.",
    study: {
      vocab: [
        ["la inteligencia artificial", "artificial intelligence"],
        ["el sesgo algorítmico", "algorithmic bias"],
        ["la rendición de cuentas", "accountability"],
        ["la privacidad de datos", "data privacy"],
        ["regular", "to regulate"],
        ["las consecuencias no deseadas", "unintended consequences"],
      ],
      grammar: [
        ["La pasiva refleja en registro formal/académico", "La pasiva refleja (“se” + verbo en 3ª persona) es muy común en español formal para enfatizar la acción sin mencionar al agente.", "Estos sistemas deberían regularse para evitar sesgos. / El sesgo algorítmico se ha documentado en varios estudios."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “accountability” en español?",["la rendición de cuentas", "accountability", "algorithmic bias", "to regulate"],0,"“Accountability” es “rendición de cuentas” en español."],
      ["mcq","¿Cómo se dice “algorithmic bias” en español?",["artificial intelligence", "to regulate", "data privacy", "el sesgo algorítmico"],3,"“Algorithmic bias” es “sesgo algorítmico” en español."],
      ["fill","Completa: “Estos sistemas deberían ___ para evitar sesgos.”",["regularse", "regular", "regulados", "regulando"],0,"La pasiva refleja usa “se” + infinitivo tras un modal: “deberían regularse”."],
      ["translate","Traduce con pasiva refleja: “These systems should be regulated to prevent bias.”",["Estos sistemas deberían regularse para evitar un sesgo.", "Estos sistemas deberían regular para evitar sesgos.", "Estos sistemas deberían regularse para evitar sesgos.", "Estos sistemas deben regularse para evitar sesgos."],2,"“Should be regulated” se traduce con pasiva refleja: “deberían regularse”."],
      ["arrange","Ordena: [regularse / algoritmos / deberían / los]",["los regularse deberían algoritmos", "algoritmos los regularse deberían", "los algoritmos deberían regularse", "los regularse algoritmos deberían"],2,"Artículo + sustantivo + condicional + pasiva refleja."],
      ["writing","Escribe en español, en 55-75 palabras, un argumento ético sobre la inteligencia artificial usando al menos una construcción con pasiva refleja.",[],["deberían regularse", "sesgo algorítmico", "rendición de cuentas"]],
    ]
  },
  {
    id:"es_c2_philosophy_of_mind", level:"C2", title:"La filosofía de la mente y la conciencia", emoji:"🧠", xp:100,
    description:"Reflexiona sobre la conciencia usando oraciones escindidas (estructuras enfáticas) en español.",
    study: {
      vocab: [
        ["la conciencia", "consciousness"],
        ["la experiencia subjetiva", "subjective experience"],
        ["el experimento mental", "thought experiment"],
        ["el libre albedrío", "free will"],
        ["la autoconciencia", "self-awareness"],
        ["el problema mente-cuerpo", "the mind-body problem"],
      ],
      grammar: [
        ["Oraciones escindidas (“lo que... es...”) para énfasis", "Las oraciones escindidas (“lo que... es...”) reorganizan la oración para poner énfasis en un elemento concreto, muy usadas en discurso filosófico y académico.", "Lo que realmente define la conciencia no es solo el comportamiento, sino la experiencia subjetiva."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “thought experiment” en español?",["free will", "el experimento mental", "consciousness", "the mind-body problem"],1,"“Thought experiment” es “el experimento mental” en español."],
      ["mcq","¿Cómo se dice “free will” en español?",["el libre albedrío", "thought experiment", "self-awareness", "the mind-body problem"],0,"“Free will” es “el libre albedrío” en español."],
      ["fill","Completa: “Lo que realmente define la conciencia ___ la experiencia subjetiva, no solo el comportamiento.”",["sea", "es", "era", "son"],1,"En oraciones escindidas con sujeto singular se usa “es”: “lo que define... es”."],
      ["translate","Traduce con estructura enfática: “What truly defines consciousness is not behavior alone, but subjective experience.”",["Lo que define realmente la conciencia no es solo el comportamiento, sino la experiencia subjetiva.", "Lo que realmente define la conciencia es solo el comportamiento, no la experiencia subjetiva.", "Lo que realmente define la conciencia no es solo el comportamiento, sino la experiencia subjetiva.", "Lo que realmente definió la conciencia no es solo el comportamiento, sino la experiencia subjetiva."],2,"La oración escindida mantiene “lo que + verbo + no es... sino...”, con “realmente” antes del verbo."],
      ["arrange","Ordena: [debaten / albedrío / aún / filósofos / el / libre]",["debaten filósofos albedrío libre los aún el", "los filósofos aún debaten el libre albedrío", "libre aún debaten el los filósofos albedrío", "libre los albedrío aún debaten filósofos el"],1,"Artículo + sustantivo + adverbio + verbo + artículo + sustantivo compuesto."],
      ["writing","Escribe en español, en 55-75 palabras, tu propia postura sobre el libre albedrío o la conciencia, usando al menos una oración escindida (“lo que... es...”).",[],["lo que realmente define", "conciencia", "libre albedrío"]],
    ]
  },
  {
    id:"es_a1_garden_plants", level:"A1", title:"El jardín y las plantas", emoji:"🌱", xp:38,
    description:"Aprende vocabulario de jardinería y a dar instrucciones simples en español con el imperativo.",
    study: {
      vocab: [
        ["regar las plantas", "to water the plants"],
        ["la semilla", "the seed"],
        ["crecer", "to grow"],
        ["la flor", "the flower"],
        ["la tierra", "the soil"],
        ["la luz del sol", "sunlight"],
      ],
      grammar: [
        ["El imperativo para instrucciones", "El imperativo (tú) se usa para dar órdenes o instrucciones. La forma negativa usa “no” + subjuntivo.", "Riega las plantas todos los días. / No olvides cerrar la puerta."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the seed” en español?",["sunlight", "the seed", "la semilla", "the soil"],2,"“The seed” es “la semilla” en español."],
      ["mcq","¿Cómo se dice “to grow” en español?",["the flower", "to grow", "sunlight", "crecer"],3,"“To grow” es “crecer” en español."],
      ["fill","Completa: “___ las plantas todos los días, o se morirán.”",["Riegas", "Regar", "Regando", "Riega"],3,"El imperativo (tú) de “regar” es “riega”."],
      ["translate","Traduce: “Water the plants every day.”",["Tú riegas las plantas todos los días.", "Riega las plantas todos los días.", "Riega las plantas todas las semanas.", "Regando las plantas todos los días."],1,"El imperativo comienza directamente con el verbo conjugado: “Riega las plantas...”."],
      ["arrange","Ordena: [olvides / puerta / no / cerrar / la]",["no olvides cerrar la puerta", "cerrar puerta olvides no la", "no puerta la cerrar olvides", "puerta no cerrar olvides la"],0,"“No” + subjuntivo + infinitivo + artículo + sustantivo."],
      ["writing","Describe en español, en 20-30 palabras, instrucciones para cuidar un jardín usando el imperativo.",[],["riega", "no olvides", "crece"]],
    ]
  },
  {
    id:"es_a2_library_books", level:"A2", title:"La biblioteca y los libros", emoji:"📚", xp:48,
    description:"Aprende vocabulario de biblioteca y a narrar en pretérito en español.",
    study: {
      vocab: [
        ["pedir prestado un libro", "to borrow a book"],
        ["el carné de biblioteca", "the library card"],
        ["la fecha de devolución", "the due date"],
        ["el estante", "the bookshelf"],
        ["la novela", "the novel"],
        ["devolver un libro", "to return a book"],
      ],
      grammar: [
        ["Pretérito para narrar", "El pretérito describe acciones completas en el pasado, con un inicio y fin claros.", "Pedí prestada una novela la semana pasada. / Ella devolvió el libro a tiempo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the library card” en español?",["the novel", "el carné de biblioteca", "the bookshelf", "the library card"],1,"“The library card” es “el carné de biblioteca” en español."],
      ["mcq","¿Cómo se dice “the due date” en español?",["the novel", "to return a book", "the bookshelf", "la fecha de devolución"],3,"“The due date” es “la fecha de devolución” en español."],
      ["fill","Completa: “Yo ___ una novela de la biblioteca la semana pasada.”",["pidiendo", "pedí", "pide", "pido"],1,"El pretérito de “pedir” en primera persona es “pedí”."],
      ["translate","Traduce: “She returned the book on time.”",["Ella devolvió el libro tarde.", "Ella devolvió el libro a tiempo.", "Ella devuelve el libro a tiempo.", "Ella devolvió la novela a tiempo."],1,"“Returned” se traduce con pretérito: “devolvió”."],
      ["arrange","Ordena: [estante / en / está / libro / el / el]",["está el libro estante en el", "el en estante el está libro", "estante en el libro está el", "el libro está en el estante"],3,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["speaking","Describe en español, en 40-60 palabras, la última vez que pediste prestado un libro en la biblioteca, usando el pretérito.",[],["pedí prestado", "devolví", "biblioteca"]],
    ]
  },
  {
    id:"es_b1_parenting_childcare", level:"B1", title:"La crianza y el cuidado de bebés", emoji:"👶", xp:62,
    description:"Aprende vocabulario de crianza y a usar el imperfecto para hábitos pasados en español.",
    study: {
      vocab: [
        ["amamantar", "to breastfeed"],
        ["la cuna", "the crib"],
        ["hacer eructar al bebé", "to burp the baby"],
        ["la rutina para dormir", "bedtime routine"],
        ["cuidar niños", "to babysit"],
        ["el pediatra", "the pediatrician"],
      ],
      grammar: [
        ["Pretérito imperfecto para hábitos pasados", "El imperfecto describe hábitos o estados repetidos en el pasado, sin un final marcado.", "El bebé se despertaba cada dos horas. / Visitábamos al pediatra cada mes."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the crib” en español?",["to burp the baby", "the pediatrician", "to breastfeed", "la cuna"],3,"“The crib” es “la cuna” en español."],
      ["mcq","¿Cómo se dice “the pediatrician” en español?",["the crib", "to babysit", "el pediatra", "to breastfeed"],2,"“The pediatrician” es “el pediatra” en español."],
      ["fill","Completa: “El bebé ___ cada dos horas.”",["se despertaba", "se despertó", "despertándose", "se despierta"],0,"El imperfecto describe un hábito repetido en el pasado: “se despertaba”."],
      ["translate","Traduce: “We used to visit the pediatrician every month.”",["Visitábamos al pediatra cada mes.", "Visitamos al pediatra cada mes.", "Visitábamos al dentista cada mes.", "Visitábamos al pediatra cada semana."],0,"“Used to visit” se traduce con imperfecto: “visitábamos”."],
      ["arrange","Ordena: [cuna / dormía / la / en / ella]",["ella en dormía cuna la", "la dormía ella cuna en", "ella dormía en la cuna", "ella dormía cuna la en"],2,"Sujeto + verbo + preposición + artículo + sustantivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre la rutina de cuidado de un bebé que conoces, usando el imperfecto para hábitos pasados.",[],["se despertaba", "cuna", "pediatra"]],
    ]
  },
  {
    id:"es_b2_archaeology_discoveries", level:"B2", title:"La arqueología y los descubrimientos históricos", emoji:"🏺", xp:84,
    description:"Habla de descubrimientos arqueológicos usando el futuro de probabilidad en español.",
    study: {
      vocab: [
        ["el sitio arqueológico", "archaeological site"],
        ["excavar", "to excavate"],
        ["la civilización antigua", "ancient civilization"],
        ["el artefacto", "artifact"],
        ["datar (un hallazgo)", "to date (a find)"],
        ["las ruinas", "ruins"],
      ],
      grammar: [
        ["Futuro y condicional de probabilidad sobre el pasado", "El futuro compuesto (“habrá pertenecido”) o el condicional expresan una deducción o suposición sobre el pasado, equivalentes a “must/might have” en inglés.", "Este artefacto habrá pertenecido a un rey. / El sitio podría haber sido un templo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ancient civilization” en español?",["archaeological site", "ruins", "la civilización antigua", "to excavate"],2,"“Ancient civilization” es “la civilización antigua” en español."],
      ["mcq","¿Cómo se dice “to excavate” en español?",["to date (a find)", "archaeological site", "excavar", "ancient civilization"],2,"“To excavate” es “excavar” en español."],
      ["fill","Completa: “Este artefacto ___ pertenecido a un rey.”",["ha", "había", "habrá", "habría"],2,"El futuro compuesto de probabilidad usa “habrá” + participio: “habrá pertenecido”."],
      ["translate","Traduce: “The site might have been a temple.”",["El sitio podría haber sido un palacio.", "El sitio podría ser un templo.", "El sitio podría haber sido un templo.", "El sitio habrá sido un templo."],2,"“Might have been” se traduce con condicional de probabilidad: “podría haber sido”."],
      ["arrange","Ordena: [construido / antigua / esto / civilización / habrá / una]",["una civilización antigua habrá construido esto", "civilización antigua una construido esto habrá", "esto una civilización habrá construido antigua", "esto construido una habrá antigua civilización"],0,"Artículo + adjetivo + sustantivo + futuro compuesto + pronombre."],
      ["writing","Escribe en español, en 55-75 palabras, una hipótesis sobre un descubrimiento arqueológico imaginario, usando el futuro o condicional de probabilidad al menos dos veces.",[],["habrá sido", "podría haber sido", "artefacto"]],
    ]
  },
  {
    id:"es_c1_neuroscience_brain", level:"C1", title:"Las neurociencias y el cerebro", emoji:"🧬", xp:92,
    description:"Analiza la neurociencia usando estructuras enfáticas de inversión en registro académico en español.",
    study: {
      vocab: [
        ["la vía neuronal", "neural pathway"],
        ["la sinapsis", "synapse"],
        ["la neuroplasticidad", "neuroplasticity"],
        ["la función cognitiva", "cognitive function"],
        ["el neurotransmisor", "neurotransmitter"],
        ["el escáner cerebral", "brain scan"],
      ],
      grammar: [
        ["Inversión enfática con adverbios negativos", "En español formal/académico, colocar un adverbio restrictivo al inicio (“Raramente”, “Solo así”) da énfasis y a veces invierte el orden habitual sujeto-verbo.", "Raramente han encontrado los investigadores evidencia tan clara de neuroplasticidad. / Solo así se explica la función cognitiva."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “neuroplasticity” en español?",["la neuroplasticidad", "brain scan", "neural pathway", "synapse"],0,"“Neuroplasticity” es “la neuroplasticidad” en español."],
      ["mcq","¿Cómo se dice “synapse” en español?",["neuroplasticity", "neurotransmitter", "la sinapsis", "neural pathway"],2,"“Synapse” es “la sinapsis” en español."],
      ["fill","Completa: “Raramente ___ los investigadores evidencia tan clara.”",["han encontrado", "encuentran", "encontraron", "encontrarán"],0,"Tras “raramente” al inicio, se suele usar pretérito perfecto compuesto: “raramente han encontrado”."],
      ["translate","Traduce con estructura enfática: “Rarely have researchers found such clear evidence.”",["Los investigadores han encontrado raramente evidencia tan clara.", "Raramente han encontrado los investigadores evidencia tan clara ahora.", "Raramente han encontrado los investigadores evidencia tan clara.", "Raramente los investigadores han encontrado evidencia tan clara."],2,"La estructura enfática coloca el adverbio primero, seguido del verbo: “raramente han encontrado los investigadores”."],
      ["arrange","Ordena: [se / adapta / solo / así / el / cerebro]",["solo se cerebro adapta así el", "solo así se cerebro el adapta", "solo así se adapta el cerebro", "cerebro solo el se adapta así"],2,"Adverbio + adverbio + pronombre + verbo + artículo + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un párrafo académico sobre el cerebro usando al menos una estructura enfática con adverbio inicial (“raramente...” o “solo así...”).",[],["raramente han encontrado", "neuroplasticidad", "función cognitiva"]],
    ]
  },
  {
    id:"es_c2_behavioral_economics", level:"C2", title:"La economía conductual y los sesgos cognitivos", emoji:"🧩", xp:100,
    description:"Analiza la economía conductual usando nominalización en registro académico en español.",
    study: {
      vocab: [
        ["el sesgo cognitivo", "cognitive bias"],
        ["la aversión a la pérdida", "loss aversion"],
        ["el efecto de anclaje", "anchoring effect"],
        ["la toma de decisiones", "decision-making"],
        ["el comportamiento irracional", "irrational behavior"],
        ["el empujón/incentivo sutil", "nudge"],
      ],
      grammar: [
        ["Nominalización en registro académico", "La nominalización convierte verbos en sustantivos abstractos (“decidir” → “la toma de decisiones”), un rasgo típico del español académico formal.", "La persistencia del sesgo cognitivo afecta la toma de decisiones. / Los investigadores estudian la evitación de la pérdida."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “loss aversion” en español?",["nudge", "irrational behavior", "la aversión a la pérdida", "decision-making"],2,"“Loss aversion” es “la aversión a la pérdida” en español."],
      ["mcq","¿Cómo se dice “anchoring effect” en español?",["decision-making", "el efecto de anclaje", "irrational behavior", "loss aversion"],1,"“Anchoring effect” es “el efecto de anclaje” en español."],
      ["fill","Completa: “La persistencia del sesgo cognitivo afecta la ___.”",["decidiendo", "decisión", "decidir", "toma de decisiones"],3,"La forma nominalizada de “decidir” en este registro académico es “la toma de decisiones”."],
      ["translate","Traduce en registro académico: “Loss aversion affects decision-making.”",["La aversión a la pérdida afecta decidir.", "La aversión a la pérdida afectan la toma de decisiones.", "La pérdida de aversión afecta la toma de decisiones.", "La aversión a la pérdida afecta la toma de decisiones."],3,"“Decision-making” se traduce con la forma nominalizada “la toma de decisiones”, no con el verbo “decidir”."],
      ["arrange","Ordena: [cognitivo / estudian / investigadores / sesgo / el / los]",["los el sesgo investigadores cognitivo estudian", "los investigadores estudian el sesgo cognitivo", "estudian cognitivo investigadores sesgo el los", "el estudian los sesgo cognitivo investigadores"],1,"Artículo + sustantivo + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, un párrafo académico sobre un sesgo cognitivo, usando al menos dos sustantivos nominalizados (como “la toma de decisiones” o “la evitación”).",[],["la toma de decisiones", "sesgo cognitivo", "aversión a la pérdida"]],
    ]
  },
  {
    id:"es_a1_photography_cameras", level:"A1", title:"La fotografía y las cámaras", emoji:"📷", xp:38,
    description:"Aprende vocabulario de fotografía y a usar “poder” para habilidad en español.",
    study: {
      vocab: [
        ["la cámara", "camera"],
        ["la foto", "photo/picture"],
        ["el lente", "lens"],
        ["tomar una foto", "to take a picture"],
        ["el zoom", "zoom"],
        ["la tarjeta de memoria", "memory card"],
      ],
      grammar: [
        ["“Poder” para habilidad", "“Poder” + infinitivo expresa habilidad o capacidad; en negativo se usa “no puede/puedo”.", "Puedo tomar buenas fotos con esta cámara. / Esta cámara no puede hacer zoom muy lejos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lens” en español?",["to take a picture", "lens", "camera", "el lente"],3,"“Lens” es “el lente” en español."],
      ["mcq","¿Cómo se dice “memory card” en español?",["lens", "la tarjeta de memoria", "zoom", "to take a picture"],1,"“Memory card” es “la tarjeta de memoria” en español."],
      ["fill","Completa: “Esta cámara no ___ hacer zoom muy lejos.”",["puedes", "puedo", "pueden", "puede"],3,"“Poder” conjugado en tercera persona singular es “puede”."],
      ["translate","Traduce: “I can take good photos with this camera.”",["No puedo tomar buenas fotos con esta cámara.", "Puedo tomar buenas fotos con esa cámara.", "Puedo tomar buenas fotos con esta cámara.", "Puedo tomé buenas fotos con esta cámara."],2,"“I can take” se traduce con “puedo tomar”, “poder” + infinitivo."],
      ["arrange","Ordena: [lejos / hacer / no / puede / zoom / esta / cámara]",["zoom no puede esta cámara lejos hacer", "esta cámara no puede hacer zoom lejos", "zoom puede lejos cámara esta no hacer", "hacer cámara puede zoom no lejos esta"],1,"Pronombre + sustantivo + negación + verbo + verbo + sustantivo + adverbio."],
      ["writing","Describe en español, en 20-30 palabras, lo que puedes y no puedes hacer con tu cámara o teléfono, usando “poder”.",[],["puedo", "no puede", "cámara"]],
    ]
  },
  {
    id:"es_a2_camping_outdoors", level:"A2", title:"Acampar y las actividades al aire libre", emoji:"🏕️", xp:48,
    description:"Aprende vocabulario de camping y a usar “algo/nada” para cantidades en español.",
    study: {
      vocab: [
        ["la tienda de campaña", "tent"],
        ["el saco de dormir", "sleeping bag"],
        ["la fogata", "campfire"],
        ["el sendero", "hiking trail"],
        ["la mochila", "backpack"],
        ["armar una tienda", "to pitch a tent"],
      ],
      grammar: [
        ["“Algo de/nada de” para cantidades", "“Algo de” se usa en oraciones afirmativas para cantidades indefinidas; “nada de” se usa en negativas.", "Tenemos algo de leña para la fogata. / No nos queda nada de agua."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sleeping bag” en español?",["campfire", "sleeping bag", "to pitch a tent", "el saco de dormir"],3,"“Sleeping bag” es “el saco de dormir” en español."],
      ["mcq","¿Cómo se dice “hiking trail” en español?",["campfire", "el sendero", "backpack", "to pitch a tent"],1,"“Hiking trail” es “el sendero” en español."],
      ["fill","Completa: “No nos queda ___ de agua.”",["algo", "nada", "poco", "mucho"],1,"En oraciones negativas se usa “nada de”: “no nos queda nada de agua”."],
      ["translate","Traduce: “We have some firewood for the campfire.”",["Tenemos algo de leña para la tienda.", "Tenemos nada de leña para la fogata.", "Tengo algo de leña para la fogata.", "Tenemos algo de leña para la fogata."],3,"“Some firewood” en afirmativa se traduce con “algo de leña”."],
      ["arrange","Ordena: [largo / este / sendero / es]",["es este sendero largo", "este sendero es largo", "este es largo sendero", "es largo sendero este"],1,"Pronombre + sustantivo + verbo + adjetivo."],
      ["speaking","Describe en español, en 40-60 palabras, un plan de camping usando “algo de/nada de” para lo que necesitas llevar.",[],["algo de", "nada de", "tienda"]],
    ]
  },
  {
    id:"es_b1_beekeeping_bees", level:"B1", title:"La apicultura y las abejas", emoji:"🐝", xp:62,
    description:"Aprende vocabulario de apicultura y a usar cláusulas relativas en español.",
    study: {
      vocab: [
        ["la colmena", "beehive"],
        ["la miel", "honey"],
        ["picar", "to sting"],
        ["polinizar", "to pollinate"],
        ["el apicultor", "beekeeper"],
        ["la abeja reina", "queen bee"],
      ],
      grammar: [
        ["Cláusulas relativas (que/quien)", "“Que” se usa para personas y cosas; “quien/quienes” se usa específicamente para personas, sobre todo tras coma o preposición.", "El apicultor que cuida esta colmena tiene mucha experiencia. / Las abejas, que polinizan las flores, son esenciales."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “beehive” en español?",["queen bee", "la colmena", "to pollinate", "to sting"],1,"“Beehive” es “la colmena” en español."],
      ["mcq","¿Cómo se dice “to pollinate” en español?",["to pollinate", "beekeeper", "polinizar", "honey"],2,"“To pollinate” es “polinizar” en español."],
      ["fill","Completa: “El apicultor ___ cuida esta colmena tiene mucha experiencia.”",["quien", "cual", "cuyo", "que"],3,"“Que” se usa como relativo general: “el apicultor que cuida”."],
      ["translate","Traduce: “Bees, which pollinate flowers, are essential to farming.”",["Las abejas, que polinizan las flores, es esencial para la agricultura.", "Las abejas, quien polinizan las flores, son esenciales para la agricultura.", "Las abejas, que polinizan las flores, son esenciales para la agricultura.", "Las abejas, que poliniza las flores, son esenciales para la agricultura."],2,"“Which” se traduce con “que” en esta cláusula explicativa: “las abejas, que polinizan...”."],
      ["arrange","Ordena: [colmena / en / que / abejas / viven / la / las]",["las viven abejas que colmena la en", "las abejas que viven en la colmena", "las abejas que la en colmena viven", "la las viven colmena abejas que en"],1,"Artículo + sustantivo + “que” + verbo + preposición + artículo + sustantivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre la importancia de las abejas usando al menos una cláusula relativa (“que/quien”).",[],["que", "quien", "colmena"]],
    ]
  },
  {
    id:"es_b2_cryptocurrency_digital_finance", level:"B2", title:"Las criptomonedas y las finanzas digitales", emoji:"₿", xp:84,
    description:"Habla de criptomonedas usando el condicional compuesto en español.",
    study: {
      vocab: [
        ["la criptomoneda", "cryptocurrency"],
        ["la cadena de bloques", "blockchain"],
        ["la billetera digital", "digital wallet"],
        ["invertir", "to invest"],
        ["la volatilidad", "volatility"],
        ["descentralizado", "decentralized"],
      ],
      grammar: [
        ["Pluscuamperfecto de subjuntivo + condicional compuesto", "Para hipótesis irreales sobre el pasado se usa “si” + pluscuamperfecto de subjuntivo, y “condicional compuesto” (“habría” + participio) en la consecuencia.", "Si hubiera invertido antes, habría ganado más dinero. / Si el mercado no se hubiera desplomado, los precios se habrían mantenido altos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “blockchain” en español?",["digital wallet", "cryptocurrency", "to invest", "la cadena de bloques"],3,"“Blockchain” es “la cadena de bloques” en español."],
      ["mcq","¿Cómo se dice “volatility” en español?",["blockchain", "la volatilidad", "digital wallet", "to invest"],1,"“Volatility” es “la volatilidad” en español."],
      ["fill","Completa: “Si ___ invertido antes, habría ganado más dinero.”",["había", "habría", "hube", "hubiera"],3,"Tras “si” hipotético sobre el pasado se usa pluscuamperfecto de subjuntivo: “si hubiera invertido”."],
      ["translate","Traduce: “If the market hadn't crashed, prices would have stayed high.”",["Si el mercado no se desplomó, los precios se habrían mantenido altos.", "Si el mercado no se hubiera desplomado, los precios se habrían mantenidos altos.", "Si el mercado no se hubiera desplomado, los precios se mantendrían altos.", "Si el mercado no se hubiera desplomado, los precios se habrían mantenido altos."],3,"“Hadn't crashed... would have stayed” se traduce con pluscuamperfecto de subjuntivo + condicional compuesto."],
      ["arrange","Ordena: [arriesgada / es / la / criptomoneda / muy]",["la es muy criptomoneda arriesgada", "criptomoneda es muy arriesgada la", "la criptomoneda es muy arriesgada", "la criptomoneda arriesgada muy es"],2,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, sobre una decisión financiera pasada usando “si hubiera... habría...” al menos dos veces.",[],["si hubiera", "habría", "criptomoneda"]],
    ]
  },
  {
    id:"es_c1_bioethics_gene_editing", level:"C1", title:"La bioética y la edición genética", emoji:"🧬", xp:92,
    description:"Analiza la bioética usando “tan...que/tal...que” para énfasis en español.",
    study: {
      vocab: [
        ["la edición genética", "gene editing"],
        ["el consentimiento informado", "informed consent"],
        ["el ensayo clínico", "clinical trial"],
        ["la modificación genética", "genetic modification"],
        ["el dilema ético", "ethical dilemma"],
        ["manipular el ADN", "to manipulate DNA"],
      ],
      grammar: [
        ["“Tan...que/tal...que” para énfasis", "“Tan” + adjetivo/adverbio + “que” y “tal” + sustantivo + “que” expresan una consecuencia enfática.", "La edición genética es tan poderosa que plantea serias cuestiones éticas. / Es tal el dilema que los expertos aún no se ponen de acuerdo."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “informed consent” en español?",["el consentimiento informado", "ethical dilemma", "to manipulate DNA", "informed consent"],0,"“Informed consent” es “el consentimiento informado” en español."],
      ["mcq","¿Cómo se dice “clinical trial” en español?",["ethical dilemma", "el ensayo clínico", "to manipulate DNA", "informed consent"],1,"“Clinical trial” es “el ensayo clínico” en español."],
      ["fill","Completa: “La edición genética es ___ poderosa que plantea serias cuestiones éticas.”",["tal", "tanto", "muy", "tan"],3,"“Tan” + adjetivo + “que” expresa consecuencia enfática: “tan poderosa que”."],
      ["translate","Traduce con estructura enfática: “It is such a complex issue that experts still disagree.”",["Es un tema tan complejo que los expertos aún no están de acuerdo.", "Es un tema tan complejo que los expertos aún están de acuerdo.", "Es un tema tal complejo que los expertos aún no están de acuerdo.", "Es tan un tema complejo que los expertos aún no están de acuerdo."],0,"“Such a complex issue that” se traduce con “tan complejo que” en español."],
      ["arrange","Ordena: [ético / real / un / esto / dilema / es]",["esto es un dilema ético real", "ético dilema un real esto es", "un real es esto ético dilema", "real esto ético dilema un es"],0,"Pronombre + verbo + artículo + sustantivo + adjetivo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, un argumento sobre la edición genética usando “tan...que” o “tal...que” al menos dos veces.",[],["tan...que", "tal...que", "edición genética"]],
    ]
  },
  {
    id:"es_c2_geopolitics_international_relations", level:"C2", title:"La geopolítica y las relaciones internacionales", emoji:"🌐", xp:100,
    description:"Analiza la geopolítica usando el gerundio y el participio en registro académico en español.",
    study: {
      vocab: [
        ["las relaciones diplomáticas", "diplomatic relations"],
        ["la soberanía", "sovereignty"],
        ["las sanciones", "sanctions"],
        ["el acuerdo bilateral", "bilateral agreement"],
        ["la tensión geopolítica", "geopolitical tension"],
        ["negociar un tratado", "to negotiate a treaty"],
      ],
      grammar: [
        ["Gerundio y participio para registro académico conciso", "El gerundio (“Analizando...”) y las construcciones absolutas con participio (“Ante las crecientes sanciones...”) permiten un estilo más conciso y formal, evitando cláusulas subordinadas completas.", "Analizando los datos, los investigadores concluyeron que las tensiones aumentarían. / Ante las crecientes sanciones, el gobierno cambió su política."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sovereignty” en español?",["la soberanía", "sovereignty", "geopolitical tension", "sanctions"],0,"“Sovereignty” es “la soberanía” en español."],
      ["mcq","¿Cómo se dice “geopolitical tension” en español?",["la tensión geopolítica", "geopolitical tension", "sovereignty", "to negotiate a treaty"],0,"“Geopolitical tension” es “la tensión geopolítica” en español."],
      ["fill","Completa: “___ los datos, los investigadores concluyeron que las tensiones aumentarían.”",["Analizado", "Analizar", "Analizando", "Analizaron"],2,"El gerundio en posición inicial resume una cláusula subordinada: “analizando los datos”."],
      ["translate","Traduce con construcción concisa: “Faced with mounting sanctions, the government changed its policy.”",["Ante las crecientes sanciones, el gobierno cambió su política.", "Ante las crecientes sanciones, el gobierno cambia su política.", "Con las crecientes sanciones, el gobierno cambió su política.", "Ante las creciendo sanciones, el gobierno cambió su política."],0,"“Faced with mounting sanctions” se traduce de forma concisa con “ante las crecientes sanciones”."],
      ["arrange","Ordena: [naciones / tratado / negociarán / las / el]",["naciones negociarán el las tratado", "las naciones negociarán el tratado", "negociarán naciones las tratado el", "tratado naciones el negociarán las"],1,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un párrafo académico sobre geopolítica usando al menos una construcción con gerundio o participio inicial (“Analizando...” o “Ante...”).",[],["analizando", "ante", "soberanía"]],
    ]
  },
  {
    id:"es_a1_hairdresser_personal_care", level:"A1", title:"La peluquería y el cuidado personal", emoji:"💇", xp:38,
    description:"Aprende vocabulario de peluquería y a usar el comparativo y superlativo en español.",
    study: {
      vocab: [
        ["el corte de pelo", "haircut"],
        ["el peluquero/la peluquera", "hairdresser"],
        ["las tijeras", "scissors"],
        ["el pelo corto/largo", "short/long hair"],
        ["recortar", "to trim"],
        ["el espejo", "mirror"],
      ],
      grammar: [
        ["Comparativo y superlativo", "El comparativo se forma con “más/menos... que”, y el superlativo con “el/la más...”.", "Este corte es más corto que el anterior. / Ella tiene el pelo más largo de la familia."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “scissors” en español?",["short/long hair", "to trim", "hairdresser", "las tijeras"],3,"“Scissors” es “las tijeras” en español."],
      ["mcq","¿Cómo se dice “to trim” en español?",["to trim", "recortar", "short/long hair", "scissors"],1,"“To trim” es “recortar” en español."],
      ["fill","Completa: “Este corte es ___ corto que el anterior.”",["más", "menos", "el más", "tan"],0,"El comparativo de superioridad se forma con “más... que”: “más corto que”."],
      ["translate","Traduce: “She has the longest hair in the family.”",["Ella tiene el pelo más largo en la familia.", "Ella tiene el pelo más largo de la familia.", "Ella tiene el pelo más largo que la familia.", "Ella tienen el pelo más largo de la familia."],1,"“The longest... in” se traduce con “el más largo de” en español."],
      ["arrange","Ordena: [peluquería / mejor / ciudad / esta / la / de / es]",["mejor ciudad la es la peluquería esta de", "esta es la mejor peluquería de la ciudad", "la la de ciudad esta es mejor peluquería", "la esta de ciudad la peluquería mejor es"],1,"Pronombre + verbo + artículo + superlativo + sustantivo + preposición + artículo + sustantivo."],
      ["writing","Describe en español, en 20-30 palabras, tu corte de pelo ideal usando comparativos o superlativos.",[],["más corto", "el más largo", "corte de pelo"]],
    ]
  },
  {
    id:"es_a2_car_repair_shop", level:"A2", title:"El taller mecánico y el carro", emoji:"🚗", xp:48,
    description:"Aprende vocabulario del taller mecánico y a usar “mucho/muchos” en español.",
    study: {
      vocab: [
        ["el mecánico", "mechanic"],
        ["la llanta ponchada", "flat tire"],
        ["el motor", "engine"],
        ["arreglar el carro", "to fix the car"],
        ["el repuesto", "spare part"],
        ["el cambio de aceite", "oil change"],
      ],
      grammar: [
        ["“Mucho/muchos” para cantidades", "“Mucho” concuerda en género y número con el sustantivo: “mucho tiempo”, “muchos repuestos”, “mucha agua”.", "Esta reparación necesita muchos repuestos. / No queda mucho tiempo antes del viaje."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “flat tire” en español?",["mechanic", "flat tire", "oil change", "la llanta ponchada"],3,"“Flat tire” es “la llanta ponchada” en español."],
      ["mcq","¿Cómo se dice “spare part” en español?",["oil change", "el repuesto", "mechanic", "flat tire"],1,"“Spare part” es “el repuesto” en español."],
      ["fill","Completa: “No queda ___ tiempo antes del viaje.”",["mucho", "mucha", "muchos", "muchas"],0,"“Tiempo” es masculino singular, así que se usa “mucho”: “mucho tiempo”."],
      ["translate","Traduce: “This repair needs a lot of spare parts.”",["Esta reparación necesita muchas repuestos.", "Esta reparación necesitan muchos repuestos.", "Esta reparación necesita muchos repuestos.", "Esta reparación necesita mucho repuestos."],2,"“Repuestos” es masculino plural, así que se usa “muchos”: “muchos repuestos”."],
      ["arrange","Ordena: [arreglado / mecánico / el / motor / el / ha]",["el mecánico arreglado el ha motor", "el mecánico ha arreglado el motor", "el ha arreglado mecánico motor el", "ha el arreglado mecánico motor el"],1,"Artículo + sustantivo + auxiliar + participio + artículo + sustantivo."],
      ["speaking","Describe en español, en 40-60 palabras, un problema con tu carro usando “mucho/muchos”.",[],["mucho", "muchos", "repuestos"]],
    ]
  },
  {
    id:"es_b1_learning_musical_instrument", level:"B1", title:"La música y aprender un instrumento", emoji:"🎸", xp:62,
    description:"Aprende vocabulario musical y a usar el gerundio y el infinitivo en español.",
    study: {
      vocab: [
        ["practicar escalas", "to practice scales"],
        ["la partitura", "sheet music"],
        ["afinar un instrumento", "to tune an instrument"],
        ["el ritmo", "rhythm"],
        ["el profesor de música", "music teacher"],
        ["actuar/tocar en público", "to perform"],
      ],
      grammar: [
        ["Gerundio vs. infinitivo", "Algunos verbos van seguidos de gerundio (“disfrutar tocando”, con “de” en algunos casos), otros de infinitivo (“querer tocar”).", "Disfruto practicando escalas cada mañana. / Ella quiere tocar frente a una audiencia."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sheet music” en español?",["la partitura", "to tune an instrument", "rhythm", "sheet music"],0,"“Sheet music” es “la partitura” en español."],
      ["mcq","¿Cómo se dice “to tune an instrument” en español?",["to practice scales", "afinar un instrumento", "sheet music", "music teacher"],1,"“To tune an instrument” es “afinar un instrumento” en español."],
      ["fill","Completa: “Disfruto ___ escalas cada mañana.”",["practicando", "practicar", "practicado", "practico"],0,"“Disfrutar” se usa con gerundio en español: “disfruto practicando”."],
      ["translate","Traduce: “She wants to perform in front of an audience.”",["Ella quiere tocando frente a una audiencia.", "Ella quiere tocar frente a un audiencia.", "Ella quieren tocar frente a una audiencia.", "Ella quiere tocar frente a una audiencia."],3,"“Want to perform” se traduce con infinitivo: “quiere tocar”."],
      ["arrange","Ordena: [afinación / necesita / instrumento / este]",["necesita este afinación instrumento", "instrumento afinación este necesita", "necesita instrumento este afinación", "este instrumento necesita afinación"],3,"Pronombre + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre aprender un instrumento musical usando al menos un verbo con gerundio y uno con infinitivo.",[],["disfruto tocando", "quiero aprender", "practicar"]],
    ]
  },
  {
    id:"es_b2_recycling_circular_economy", level:"B2", title:"El reciclaje y la economía circular", emoji:"♻️", xp:84,
    description:"Habla del reciclaje usando el presente de indicativo para verdades generales en español.",
    study: {
      vocab: [
        ["reciclar", "to recycle"],
        ["la economía circular", "circular economy"],
        ["la gestión de residuos", "waste management"],
        ["reutilizar", "to reuse"],
        ["el vertedero", "landfill"],
        ["la materia prima", "raw material"],
      ],
      grammar: [
        ["Presente de indicativo para verdades generales (condicional cero)", "En español, el condicional cero se expresa con “si” + presente de indicativo en ambas cláusulas, para hechos o verdades generales.", "Si reciclas papel, se ahorran árboles. / Los materiales van a un vertedero si no se reutilizan."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “circular economy” en español?",["la economía circular", "raw material", "landfill", "to reuse"],0,"“Circular economy” es “la economía circular” en español."],
      ["mcq","¿Cómo se dice “landfill” en español?",["to reuse", "raw material", "el vertedero", "to recycle"],2,"“Landfill” es “el vertedero” en español."],
      ["fill","Completa: “Si ___ papel, se ahorran árboles.”",["reciclarás", "reciclaste", "reciclas", "reciclando"],2,"El condicional cero usa presente de indicativo en ambas cláusulas: “si reciclas”."],
      ["translate","Traduce: “Materials go to a landfill if they aren't reused.”",["Los materiales fueron a un vertedero si no se reutilizan.", "Los materiales van a un vertedero si no se reutilizaron.", "Los materiales van a un vertedero si no se reutilizan.", "El material van a un vertedero si no se reutilizan."],2,"El condicional cero mantiene presente en ambas cláusulas: “van... si no se reutilizan”."],
      ["arrange","Ordena: [prima / ahorra / reciclar / materia]",["reciclar ahorra materia prima", "reciclar materia prima ahorra", "prima reciclar materia ahorra", "materia reciclar ahorra prima"],0,"Verbo + verbo + sustantivo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, una explicación sobre la economía circular usando el condicional cero (“si... presente”) al menos dos veces.",[],["si reciclas", "si...", "economía circular"]],
    ]
  },
  {
    id:"es_c1_political_philosophy_social_justice", level:"C1", title:"La filosofía política y la justicia social", emoji:"⚖️", xp:92,
    description:"Analiza la justicia social usando el imperfecto de subjuntivo para arrepentimiento en registro formal en español.",
    study: {
      vocab: [
        ["la justicia social", "social justice"],
        ["la desigualdad", "inequality"],
        ["los derechos civiles", "civil rights"],
        ["la redistribución", "redistribution"],
        ["la opresión sistémica", "systemic oppression"],
        ["el bien común", "common good"],
      ],
      grammar: [
        ["“Ojalá” + pluscuamperfecto de subjuntivo para arrepentimiento", "“Ojalá” + pluscuamperfecto de subjuntivo expresa arrepentimiento o el deseo de que algo pasado hubiera sido diferente.", "Ojalá las reformas pasadas hubieran abordado la opresión sistémica. / Ojalá la desigualdad pudiera resolverse solo con políticas."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “inequality” en español?",["inequality", "systemic oppression", "civil rights", "la desigualdad"],3,"“Inequality” es “la desigualdad” en español."],
      ["mcq","¿Cómo se dice “redistribution” en español?",["social justice", "la redistribución", "civil rights", "common good"],1,"“Redistribution” es “la redistribución” en español."],
      ["fill","Completa: “Ojalá las reformas pasadas ___ abordado la opresión sistémica.”",["hubieran", "habían", "hayan", "habrían"],0,"“Ojalá” + pluscuamperfecto de subjuntivo expresa arrepentimiento sobre el pasado: “ojalá... hubieran abordado”."],
      ["translate","Traduce: “Philosophers wish inequality could be solved by policy alone.”",["Los filósofos desearían que la desigualdad pudiera resolverse solo con políticas.", "Los filósofos desearían que la desigualdad puede resolverse solo con políticas.", "Los filósofos desearía que la desigualdad pudiera resolverse solo con políticas.", "Los filósofos desearían que la desigualdad pudiera resolver solo con políticas."],0,"“Wish... could be solved” se traduce con “desearían que... pudiera resolverse”, subjuntivo tras “desear que”."],
      ["arrange","Ordena: [común / debaten / bien / el / filósofos / los]",["común bien los el debaten filósofos", "el común filósofos bien debaten los", "los filósofos debaten el bien común", "filósofos los debaten el común bien"],2,"Artículo + sustantivo + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un argumento sobre justicia social usando “ojalá” al menos dos veces.",[],["ojalá", "hubieran", "justicia social"]],
    ]
  },
  {
    id:"es_c2_cultural_anthropology_rituals", level:"C2", title:"La antropología cultural y los rituales", emoji:"🗿", xp:100,
    description:"Analiza los rituales culturales usando comparativos dobles en español.",
    study: {
      vocab: [
        ["el ritual", "ritual"],
        ["el relativismo cultural", "cultural relativism"],
        ["el rito de iniciación", "rite of passage"],
        ["el parentesco", "kinship"],
        ["la identidad colectiva", "collective identity"],
        ["la tradición oral", "oral tradition"],
      ],
      grammar: [
        ["Comparativos dobles (“cuanto más... más...”)", "La estructura “cuanto más/menos..., más/menos...” expresa cómo dos cosas cambian juntas de forma proporcional.", "Cuanto más estudian los antropólogos los rituales, más entienden la identidad colectiva. / Cuanto más antigua la tradición, más fuerte su influencia."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cultural relativism” en español?",["kinship", "oral tradition", "cultural relativism", "el relativismo cultural"],3,"“Cultural relativism” es “el relativismo cultural” en español."],
      ["mcq","¿Cómo se dice “rite of passage” en español?",["kinship", "collective identity", "rite of passage", "el rito de iniciación"],3,"“Rite of passage” es “el rito de iniciación” en español."],
      ["fill","Completa: “Cuanto ___ estudian los antropólogos los rituales, más entienden la identidad colectiva.”",["más", "mucho", "mejor", "menos"],0,"El comparativo doble repite “cuanto más...más” en ambas cláusulas."],
      ["translate","Traduce con comparativo doble: “The older the tradition, the stronger its influence.”",["Cuanto la tradición más antigua, más fuerte su influencia.", "Cuanto más antigua es la tradición, la más fuerte su influencia.", "Cuanto más antigua la tradición, más fuerte es su influencia.", "Cuanto más antigua la tradición, más fuerte su influencia."],3,"El comparativo doble en español es “cuanto más...más...”, sin verbo obligatorio en la segunda cláusula."],
      ["arrange","Ordena: [marcan / adultez / la / de / los / ritos / iniciación]",["adultez marcan ritos los iniciación de la", "adultez la de ritos los iniciación marcan", "los ritos de iniciación marcan la adultez", "marcan adultez iniciación ritos la los de"],2,"Artículo + sustantivo + preposición + sustantivo + verbo + artículo + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un análisis sobre rituales culturales usando al menos un comparativo doble (“cuanto más... más...”).",[],["cuanto más", "más", "ritual"]],
    ]
  },
  {
    id:"es_a1_hardware_store_tools", level:"A1", title:"En la ferretería: herramientas básicas", emoji:"🔨", xp:38,
    description:"Aprende vocabulario de herramientas y a usar la comparación de igualdad (“tan... como”) en español.",
    study: {
      vocab: [
        ["el martillo", "hammer"],
        ["el destornillador", "screwdriver"],
        ["el clavo", "nail"],
        ["el tornillo", "screw"],
        ["la caja de herramientas", "toolbox"],
        ["la escalera", "ladder"],
      ],
      grammar: [
        ["Comparación de igualdad (“tan... como”)", "“Tan” + adjetivo + “como” expresa que dos cosas son iguales en cierta cualidad.", "Este martillo es tan pesado como aquel. / La escalera no es tan alta como la pared."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “screwdriver” en español?",["hammer", "screw", "toolbox", "el destornillador"],3,"“Screwdriver” es “el destornillador” en español."],
      ["mcq","¿Cómo se dice “ladder” en español?",["ladder", "screwdriver", "hammer", "la escalera"],3,"“Ladder” es “la escalera” en español."],
      ["fill","Completa: “Este martillo es ___ pesado como aquel.”",["tanto", "más", "menos", "tan"],3,"La comparación de igualdad usa “tan + adjetivo + como”: “tan pesado como”."],
      ["translate","Traduce: “The ladder isn't as tall as the wall.”",["La escalera es tan alta como la pared.", "La escalera no es tan alta como la pared.", "La escalera no es más alta que la pared.", "La escalera no es tan alta que la pared."],1,"“Isn't as... as” se traduce con “no es tan... como”."],
      ["arrange","Ordena: [pesada / caja / herramientas / la / muy / es / de]",["la caja herramientas es pesada muy de", "la caja de herramientas es muy pesada", "muy herramientas la pesada es caja de", "muy caja de es pesada la herramientas"],1,"Artículo + sustantivo + preposición + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Describe en español, en 20-30 palabras, comparando dos herramientas usando “tan... como”.",[],["tan pesado como", "tan alta como", "martillo"]],
    ]
  },
  {
    id:"es_a2_laundry_clothing_care", level:"A2", title:"La lavandería y el cuidado de la ropa", emoji:"🧺", xp:48,
    description:"Aprende vocabulario de lavandería y a usar “unos pocos/un poco de” en español.",
    study: {
      vocab: [
        ["la lavadora", "washing machine"],
        ["el detergente", "detergent"],
        ["tender la ropa", "to hang out clothes"],
        ["la mancha", "stain"],
        ["la secadora", "dryer"],
        ["planchar", "to iron"],
      ],
      grammar: [
        ["“Unos pocos/un poco de” para cantidades pequeñas", "“Unos pocos” se usa con sustantivos contables, “un poco de” con incontables, ambos para cantidades pequeñas pero suficientes.", "Necesito un poco de detergente para esta carga. / Hay unas pocas manchas en esta camisa."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “washing machine” en español?",["la lavadora", "stain", "detergent", "dryer"],0,"“Washing machine” es “la lavadora” en español."],
      ["mcq","¿Cómo se dice “stain” en español?",["dryer", "to hang out clothes", "to iron", "la mancha"],3,"“Stain” es “la mancha” en español."],
      ["fill","Completa: “Hay ___ manchas en esta camisa.”",["poco", "unas pocas", "un poco de", "mucha"],1,"“Manchas” es contable plural, así que se usa “unas pocas”: “unas pocas manchas”."],
      ["translate","Traduce: “I need a little detergent for this load.”",["Necesito un poco de detergente para esta carga.", "Necesito unos pocos detergente para esta carga.", "Necesito poco detergente para esta carga.", "Necesito un poco de detergentes para esta carga."],0,"“Detergent” es incontable, así que se usa “un poco de”: “un poco de detergente”."],
      ["arrange","Ordena: [planchar / camisa / hay / que / esta]",["que camisa planchar hay esta", "hay que planchar esta camisa", "que hay planchar esta camisa", "esta hay que camisa planchar"],1,"Verbo impersonal + verbo + artículo + sustantivo."],
      ["speaking","Describe en español, en 40-60 palabras, tu rutina de lavandería usando “unos pocos/un poco de”.",[],["unos pocos", "un poco de", "lavadora"]],
    ]
  },
  {
    id:"es_b1_chess_strategy_games", level:"B1", title:"El ajedrez y los juegos de mesa estratégicos", emoji:"♟️", xp:62,
    description:"Aprende vocabulario de ajedrez y a usar el futuro simple con “si” en español.",
    study: {
      vocab: [
        ["el tablero de ajedrez", "chessboard"],
        ["dar jaque mate", "to checkmate"],
        ["el peón", "pawn"],
        ["mover una pieza", "to move a piece"],
        ["la estrategia", "strategy"],
        ["el oponente", "opponent"],
      ],
      grammar: [
        ["“Si” + presente + futuro simple", "Para consecuencias reales y probables en el futuro se usa “si” + presente de indicativo, y futuro simple en la consecuencia.", "Si mueves esa pieza, perderás la partida. / Si ella planea bien su estrategia, ganará."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to checkmate” en español?",["dar jaque mate", "pawn", "to checkmate", "to move a piece"],0,"“To checkmate” es “dar jaque mate” en español."],
      ["mcq","¿Cómo se dice “pawn” en español?",["strategy", "pawn", "to move a piece", "el peón"],3,"“Pawn” es “el peón” en español."],
      ["fill","Completa: “Si mueves esa pieza, ___ la partida.”",["perderías", "perdiste", "pierdes", "perderás"],3,"Tras “si” + presente, se usa futuro simple en la consecuencia: “si mueves... perderás”."],
      ["translate","Traduce: “If she plans her strategy well, she will win.”",["Si ella planea bien su estrategia, ganará.", "Si ella planeó bien su estrategia, ganará.", "Si ella planea bien su estrategia, gana.", "Si ella planea bien su estrategia, ganaría."],0,"“If... will win” se traduce con “si” + presente + futuro simple: “si planea... ganará”."],
      ["arrange","Ordena: [fuerte / tiene / oponente / un / ella]",["un ella tiene fuerte oponente", "fuerte oponente tiene ella un", "oponente fuerte un ella tiene", "ella tiene un oponente fuerte"],3,"Sujeto + verbo + artículo + sustantivo + adjetivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre una partida de ajedrez usando “si... futuro” al menos dos veces.",[],["si...", "ganará", "ajedrez"]],
    ]
  },
  {
    id:"es_b2_historic_building_restoration", level:"B2", title:"La restauración de edificios históricos", emoji:"🏛️", xp:84,
    description:"Habla de restauración usando la construcción causativa “mandar/hacer + infinitivo” en español.",
    study: {
      vocab: [
        ["restaurar", "to restore"],
        ["el sitio patrimonial", "heritage site"],
        ["la fachada", "facade"],
        ["el andamio", "scaffolding"],
        ["preservar", "to preserve"],
        ["el daño estructural", "structural damage"],
      ],
      grammar: [
        ["Construcción causativa (“mandar/hacer + infinitivo”)", "“Mandar” o “hacer” + infinitivo expresa que alguien más realiza una acción para nosotros, muy común al hablar de reparaciones o servicios.", "La ciudad mandó restaurar la fachada el año pasado. / Están haciendo reparar el techo este mes."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “facade” en español?",["scaffolding", "la fachada", "heritage site", "to restore"],1,"“Facade” es “la fachada” en español."],
      ["mcq","¿Cómo se dice “scaffolding” en español?",["el andamio", "heritage site", "structural damage", "facade"],0,"“Scaffolding” es “el andamio” en español."],
      ["fill","Completa: “La ciudad ___ restaurar la fachada el año pasado.”",["mandó", "manda", "mandará", "mandaba"],0,"La construcción causativa en pasado usa “mandó” + infinitivo: “mandó restaurar”."],
      ["translate","Traduce: “They are getting the roof repaired this month.”",["Hicieron reparar el techo este mes.", "Están haciendo reparado el techo este mes.", "Están mandando reparar el techo este mes por ellos.", "Están haciendo reparar el techo este mes."],3,"“Are getting... repaired” se traduce con “están haciendo reparar”, construcción causativa en presente continuo."],
      ["arrange","Ordena: [preservar / importantes / sitios / patrimoniales]",["preservar sitios patrimoniales importantes", "preservar sitios importantes patrimoniales", "importantes preservar patrimoniales sitios", "sitios importantes preservar patrimoniales"],0,"Infinitivo + sustantivo + adjetivo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, sobre la restauración de un edificio histórico usando la construcción causativa (“mandar/hacer + infinitivo”) al menos dos veces.",[],["mandó restaurar", "están haciendo reparar", "sitio patrimonial"]],
    ]
  },
  {
    id:"es_c1_philosophy_of_science", level:"C1", title:"La filosofía de la ciencia y el método científico", emoji:"🔬", xp:92,
    description:"Analiza el método científico usando cláusulas de propósito (“para que/con el fin de”) en español.",
    study: {
      vocab: [
        ["la hipótesis", "hypothesis"],
        ["la falsabilidad", "falsifiability"],
        ["la evidencia empírica", "empirical evidence"],
        ["la revisión por pares", "peer review"],
        ["replicar un estudio", "to replicate a study"],
        ["el cambio de paradigma", "paradigm shift"],
      ],
      grammar: [
        ["Cláusulas de propósito (“para que/con el fin de”)", "“Con el fin de” + infinitivo y “para que” + subjuntivo expresan el propósito de una acción, típicos del registro formal/académico.", "Los científicos replican estudios con el fin de confirmar resultados. / Los investigadores publican datos para que otros puedan verificarlos."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “falsifiability” en español?",["empirical evidence", "hypothesis", "la falsabilidad", "peer review"],2,"“Falsifiability” es “la falsabilidad” en español."],
      ["mcq","¿Cómo se dice “peer review” en español?",["to replicate a study", "hypothesis", "paradigm shift", "la revisión por pares"],3,"“Peer review” es “la revisión por pares” en español."],
      ["fill","Completa: “Los investigadores publican datos para ___ otros puedan verificarlos.”",["con", "de", "que", "por"],2,"“Para que” + subjuntivo expresa propósito: “para que otros puedan verificarlos”."],
      ["translate","Traduce con cláusula de propósito: “Scientists replicate studies in order to confirm results.”",["Los científicos replican estudios para el fin de confirmar resultados.", "Los científicos replican estudios con el fin de confirman resultados.", "Los científicos replican estudios con el fin confirmar resultados.", "Los científicos replican estudios con el fin de confirmar resultados."],3,"“In order to confirm” en registro formal se traduce con “con el fin de confirmar”."],
      ["arrange","Ordena: [necesita / hipótesis / empírica / toda / evidencia]",["empírica evidencia hipótesis necesita toda", "toda hipótesis necesita evidencia empírica", "toda necesita hipótesis evidencia empírica", "evidencia necesita empírica toda hipótesis"],1,"Adjetivo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, sobre el método científico usando “con el fin de” o “para que” al menos dos veces.",[],["con el fin de", "para que", "hipótesis"]],
    ]
  },
  {
    id:"es_c2_game_theory_strategic_decisions", level:"C2", title:"La teoría de juegos y la toma de decisiones estratégica", emoji:"🎲", xp:100,
    description:"Analiza la teoría de juegos usando “ni... ni” y concesión con “mientras que” en español.",
    study: {
      vocab: [
        ["el equilibrio de Nash", "Nash equilibrium"],
        ["el juego de suma cero", "zero-sum game"],
        ["la matriz de pagos", "payoff matrix"],
        ["la estrategia dominante", "dominant strategy"],
        ["el actor racional", "rational actor"],
        ["el dilema del prisionero", "prisoner's dilemma"],
      ],
      grammar: [
        ["“Ni... ni” y concesión con “mientras que”", "“Ni... ni” niega dos opciones a la vez; “mientras que” introduce un contraste formal entre dos ideas.", "Ni un jugador se beneficia de la traición mutua. / Mientras que la cooperación maximiza la ganancia conjunta, el interés propio a menudo prevalece."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “Nash equilibrium” en español?",["el equilibrio de Nash", "dominant strategy", "payoff matrix", "zero-sum game"],0,"“Nash equilibrium” es “el equilibrio de Nash” en español."],
      ["mcq","¿Cómo se dice “prisoner's dilemma” en español?",["prisoner's dilemma", "rational actor", "el dilema del prisionero", "zero-sum game"],2,"“Prisoner's dilemma” es “el dilema del prisionero” en español."],
      ["fill","Completa: “Ni un jugador ___ beneficia de la traición mutua.”",["se", "lo", "le", "les"],0,"El verbo pronominal “beneficiarse” requiere “se”: “se beneficia”."],
      ["translate","Traduce con concesión formal: “Whereas cooperation maximizes joint gain, self-interest often prevails.”",["Mientras que la cooperación maximice la ganancia conjunta, el interés propio a menudo prevalece.", "Mientras que la cooperación maximiza la ganancia conjunta, el interés propio a menudo prevalezca.", "Mientras la cooperación maximiza la ganancia conjunta, el interés propio a menudo prevalece.", "Mientras que la cooperación maximiza la ganancia conjunta, el interés propio a menudo prevalece."],3,"“Mientras que” (con “que”) es la forma estándar para introducir contraste formal, con indicativo: “prevalece”."],
      ["arrange","Ordena: [dominante / tiene / ningún / estrategia / jugador]",["jugador estrategia tiene dominante ningún", "dominante ningún estrategia tiene jugador", "ningún jugador tiene estrategia dominante", "tiene estrategia jugador dominante ningún"],2,"Pronombre negativo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, un análisis de teoría de juegos usando “ni... ni” y “mientras que” al menos una vez cada uno.",[],["ni...ni", "mientras que", "equilibrio de Nash"]],
    ]
  },
  {
    id:"es_a1_diving_water_sports", level:"A1", title:"El buceo y los deportes acuáticos", emoji:"🤿", xp:38,
    description:"Aprende vocabulario de buceo y a usar preposiciones de lugar en español.",
    study: {
      vocab: [
        ["bucear", "to dive"],
        ["el esnórquel", "snorkel"],
        ["el pez", "fish"],
        ["el arrecife de coral", "coral reef"],
        ["el traje de neopreno", "wetsuit"],
        ["bajo el agua", "underwater"],
      ],
      grammar: [
        ["Preposiciones de lugar (en/sobre/debajo de/al lado de)", "“En” indica dentro de algo, “sobre” indica encima de una superficie, “debajo de” indica abajo, y “al lado de” indica junto a.", "Los peces nadan en el agua. / El arrecife de coral está debajo del barco."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “coral reef” en español?",["wetsuit", "el arrecife de coral", "snorkel", "fish"],1,"“Coral reef” es “el arrecife de coral” en español."],
      ["mcq","¿Cómo se dice “wetsuit” en español?",["el traje de neopreno", "underwater", "snorkel", "wetsuit"],0,"“Wetsuit” es “el traje de neopreno” en español."],
      ["fill","Completa: “El arrecife de coral está ___ del barco.”",["debajo", "al lado", "sobre", "en"],0,"“Debajo de” indica una posición inferior: “debajo del barco”."],
      ["translate","Traduce: “The fish swim in the water.”",["Los peces nadan al lado del agua.", "Los peces nadan sobre el agua.", "Los peces nadan en el agua.", "Los peces nadan debajo el agua."],2,"“In the water” se traduce con “en el agua”, ya que están dentro de ella."],
      ["arrange","Ordena: [barco / lado / al / buzo / del / está / el]",["buzo al del lado barco está el", "el buzo está al lado del barco", "buzo al el está barco lado del", "del está el lado al barco buzo"],1,"Artículo + sustantivo + verbo + preposición + preposición + artículo + sustantivo."],
      ["writing","Describe en español, en 20-30 palabras, lo que ves al bucear usando preposiciones de lugar (en/sobre/debajo de/al lado de).",[],["debajo de", "en", "peces"]],
    ]
  },
  {
    id:"es_a2_origami_crafts", level:"A2", title:"El origami y las manualidades", emoji:"🎨", xp:48,
    description:"Aprende vocabulario de manualidades y a usar secuenciadores en español.",
    study: {
      vocab: [
        ["doblar", "to fold"],
        ["el papel", "paper"],
        ["las tijeras", "scissors"],
        ["el pegamento", "glue"],
        ["el pliegue", "crease"],
        ["la manualidad", "craft"],
      ],
      grammar: [
        ["Secuenciadores (primero, luego, después, finalmente)", "Los secuenciadores organizan los pasos de un proceso en orden: “primero”, “luego/después”, “finalmente”.", "Primero, dobla el papel por la mitad. Luego, haz un pliegue. Finalmente, dobla las esquinas."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “crease” en español?",["el pliegue", "craft", "to fold", "glue"],0,"“Crease” es “el pliegue” en español."],
      ["mcq","¿Cómo se dice “glue” en español?",["el pegamento", "craft", "glue", "to fold"],0,"“Glue” es “el pegamento” en español."],
      ["fill","Completa: “Primero, dobla el papel. ___, haz un pliegue.”",["Primero", "Luego", "Antes", "Finalmente"],1,"“Luego” conecta el segundo paso después de “primero”."],
      ["translate","Traduce: “Finally, fold the corners.”",["Finalmente, doblando las esquinas.", "Finalmente, dobla la esquina.", "Luego, dobla las esquinas.", "Finalmente, dobla las esquinas."],3,"“Finally” se traduce con “Finalmente” al inicio de la oración."],
      ["arrange","Ordena: [tijeras / manualidad / necesita / esta]",["manualidad necesita esta tijeras", "necesita esta tijeras manualidad", "necesita manualidad tijeras esta", "esta manualidad necesita tijeras"],3,"Pronombre + sustantivo + verbo + sustantivo."],
      ["speaking","Describe en español, en 40-60 palabras, los pasos para hacer una manualidad usando secuenciadores (primero, luego, finalmente).",[],["primero", "luego", "finalmente"]],
    ]
  },
  {
    id:"es_b1_paleontology_dinosaurs", level:"B1", title:"La paleontología y los dinosaurios", emoji:"🦴", xp:62,
    description:"Aprende vocabulario de paleontología y a usar “ya/todavía” con el pretérito perfecto en español.",
    study: {
      vocab: [
        ["el fósil", "fossil"],
        ["el hueso de dinosaurio", "dinosaur bone"],
        ["el sitio de excavación", "excavation site"],
        ["extinto", "extinct"],
        ["el esqueleto", "skeleton"],
        ["desenterrar", "to dig up"],
      ],
      grammar: [
        ["“Ya/todavía” con el pretérito perfecto", "“Ya” (already) se usa en afirmativas, “todavía no” (not yet) en negativas, y “todavía” (still) enfatiza una situación que continúa.", "Ya han encontrado el esqueleto. / Todavía no han terminado la excavación. / Los científicos todavía están estudiando el fósil."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “fossil” en español?",["el fósil", "extinct", "to dig up", "excavation site"],0,"“Fossil” es “el fósil” en español."],
      ["mcq","¿Cómo se dice “skeleton” en español?",["to dig up", "el esqueleto", "skeleton", "fossil"],1,"“Skeleton” es “el esqueleto” en español."],
      ["fill","Completa: “___ no han terminado la excavación.”",["Ya", "Aún así", "Todavía", "Siempre"],2,"“Todavía no” equivale a “not yet”: “todavía no han terminado”."],
      ["translate","Traduce: “Scientists are still studying the fossil.”",["Los científicos todavía están estudiando el fósil.", "Los científicos ya están estudiando el fósil.", "Los científicos todavía estudian el fósil ya.", "Los científicos todavía no están estudiando el fósil."],0,"“Are still studying” se traduce con “todavía están estudiando”, presente continuo."],
      ["arrange","Ordena: [esqueleto / encontrado / han / el / ya]",["encontrado esqueleto han el ya", "esqueleto el han ya encontrado", "han esqueleto el ya encontrado", "ya han encontrado el esqueleto"],3,"Adverbio + “han” + participio + artículo + sustantivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre un descubrimiento de dinosaurios usando “ya/todavía” al menos dos veces.",[],["ya", "todavía no", "todavía"]],
    ]
  },
  {
    id:"es_b2_street_art_graffiti", level:"B2", title:"El arte urbano y el grafiti", emoji:"🎨", xp:84,
    description:"Habla de arte urbano usando “a menos que” en español.",
    study: {
      vocab: [
        ["el mural", "mural"],
        ["la pintura en aerosol", "spray paint"],
        ["el espacio público", "public space"],
        ["el vandalismo", "vandalism"],
        ["el artista urbano", "street artist"],
        ["encargar un mural", "to commission a mural"],
      ],
      grammar: [
        ["“A menos que” + subjuntivo", "“A menos que” + subjuntivo expresa una condición negativa: algo sucederá salvo que ocurra otra cosa.", "A menos que la ciudad lo apruebe, el mural se considerará vandalismo. / Ella no pintará a menos que tenga permiso."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “vandalism” en español?",["street artist", "spray paint", "el vandalismo", "public space"],2,"“Vandalism” es “el vandalismo” en español."],
      ["mcq","¿Cómo se dice “to commission a mural” en español?",["public space", "street artist", "encargar un mural", "spray paint"],2,"“To commission a mural” es “encargar un mural” en español."],
      ["fill","Completa: “Ella no pintará a menos que ___ permiso.”",["tenga", "tendrá", "tendría", "tiene"],0,"“A menos que” requiere subjuntivo: “a menos que tenga”."],
      ["translate","Traduce: “Unless the city approves it, the mural will be considered vandalism.”",["A menos que la ciudad lo apruebe, el mural se considerará vandalismo.", "Si la ciudad lo apruebe, el mural se considerará vandalismo.", "A menos que la ciudad lo apruebe, el mural se considera vandalismo.", "A menos que la ciudad lo aprueba, el mural se considerará vandalismo."],0,"“Unless” se traduce con “a menos que” + subjuntivo: “a menos que... apruebe”."],
      ["arrange","Ordena: [talentoso / muy / artista / este / es]",["artista muy es talentoso este", "este artista es muy talentoso", "este muy es artista talentoso", "es talentoso artista muy este"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, sobre el arte urbano usando “a menos que” al menos dos veces.",[],["a menos que", "mural", "artista urbano"]],
    ]
  },
  {
    id:"es_c1_criminology_criminal_justice", level:"C1", title:"La criminología y la justicia penal", emoji:"🔍", xp:92,
    description:"Analiza la criminología usando el futuro/condicional de probabilidad en registro formal en español.",
    study: {
      vocab: [
        ["la evidencia forense", "forensic evidence"],
        ["el sospechoso", "suspect"],
        ["condenar", "to convict"],
        ["la duda razonable", "reasonable doubt"],
        ["la reincidencia", "recidivism"],
        ["la rehabilitación", "rehabilitation"],
      ],
      grammar: [
        ["Podría/puede + infinitivo para posibilidad formal", "“Podría” y “puede” + infinitivo expresan posibilidad; en registro formal/legal, “puede” suele sonar ligeramente más seguro que “podría”.", "La evidencia forense puede apuntar al sospechoso. / Sin rehabilitación, la reincidencia podría aumentar."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “reasonable doubt” en español?",["la duda razonable", "to convict", "reasonable doubt", "recidivism"],0,"“Reasonable doubt” es “la duda razonable” en español."],
      ["mcq","¿Cómo se dice “recidivism” en español?",["reasonable doubt", "rehabilitation", "forensic evidence", "la reincidencia"],3,"“Recidivism” es “la reincidencia” en español."],
      ["fill","Completa: “La evidencia forense ___ apuntar al sospechoso.”",["debe", "puede de", "puede", "podría de"],2,"“Puede” + infinitivo expresa posibilidad formal: “puede apuntar”."],
      ["translate","Traduce con posibilidad formal: “Without rehabilitation, recidivism might increase.”",["Sin rehabilitación, la reincidencia podría aumentar.", "Sin rehabilitación, la reincidencia puede aumentando.", "Sin rehabilitación, la reincidencia debe aumentar.", "Sin rehabilitación, la reincidencia podría aumentado."],0,"“Might increase” se traduce con “podría aumentar”, posibilidad formal en español."],
      ["arrange","Ordena: [condenar / no / al / tribunal / puede / sospechoso / el]",["el sospechoso puede al condenar no tribunal", "el tribunal no puede condenar al sospechoso", "tribunal no sospechoso al puede el condenar", "no al sospechoso el puede condenar tribunal"],1,"Artículo + sustantivo + negación + verbo modal + verbo + preposición + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un análisis sobre justicia penal usando “puede/podría” al menos dos veces.",[],["puede", "podría", "duda razonable"]],
    ]
  },
  {
    id:"es_c2_philosophy_of_language", level:"C2", title:"La filosofía del lenguaje", emoji:"💬", xp:100,
    description:"Analiza la filosofía del lenguaje usando el subjuntivo tras verbos de sugerencia en español.",
    study: {
      vocab: [
        ["el acto de habla", "speech act"],
        ["la referencia", "reference"],
        ["el significado", "meaning"],
        ["la ambigüedad", "ambiguity"],
        ["la relatividad lingüística", "linguistic relativity"],
        ["la proposición", "proposition"],
      ],
      grammar: [
        ["Subjuntivo tras verbos de sugerencia (sugerir/insistir/recomendar que)", "Tras verbos como “sugerir”, “insistir” o “recomendar” + “que”, el verbo siguiente va en subjuntivo, típico del registro formal/académico.", "Los filósofos sugieren que el significado se estudie a través del uso. / El lingüista insiste en que se considere el contexto."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “speech act” en español?",["linguistic relativity", "reference", "meaning", "el acto de habla"],3,"“Speech act” es “el acto de habla” en español."],
      ["mcq","¿Cómo se dice “ambiguity” en español?",["speech act", "linguistic relativity", "reference", "la ambigüedad"],3,"“Ambiguity” es “la ambigüedad” en español."],
      ["fill","Completa: “El lingüista insiste en que se ___ el contexto.”",["consideró", "considerará", "considere", "considera"],2,"El subjuntivo presente sigue a “insistir en que”: “insiste en que se considere”."],
      ["translate","Traduce con subjuntivo: “Philosophers suggest that meaning be studied through use.”",["Los filósofos sugieren que el significado se estudia a través del uso.", "Los filósofos sugieren que el significado se estudiará a través del uso.", "Los filósofos sugieren que el significado se estudie a través del uso.", "Los filósofos sugiere que el significado se estudie a través del uso."],2,"El verbo “sugerir que” requiere subjuntivo presente: “sugieren que... se estudie”."],
      ["arrange","Ordena: [ambigua / esta / oración / es]",["esta oración es ambigua", "esta oración ambigua es", "oración ambigua esta es", "es esta ambigua oración"],0,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Escribe en español, en 55-75 palabras, un argumento sobre filosofía del lenguaje usando el subjuntivo tras “sugerir/insistir/recomendar que” al menos dos veces.",[],["sugiere que", "insiste en que", "significado"]],
    ]
  },
  {
    id:"es_a1_circus_shows", level:"A1", title:"El circo y los espectáculos", emoji:"🎪", xp:38,
    description:"Aprende vocabulario del circo y a usar exclamaciones (“qué.../cómo...”) en español.",
    study: {
      vocab: [
        ["el payaso", "clown"],
        ["la cuerda floja", "tightrope"],
        ["el malabarista", "juggler"],
        ["el acróbata", "acrobat"],
        ["la carpa", "tent"],
        ["asombroso", "amazing"],
      ],
      grammar: [
        ["Exclamaciones (“qué.../cómo...”)", "“Qué” + sustantivo/adjetivo y “Cómo” + verbo expresan sorpresa o admiración de forma exclamativa.", "¡Qué malabarista tan asombroso! / ¡Cómo me asombra este espectáculo!"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “juggler” en español?",["el malabarista", "tent", "acrobat", "tightrope"],0,"“Juggler” es “el malabarista” en español."],
      ["mcq","¿Cómo se dice “acrobat” en español?",["juggler", "tightrope", "el acróbata", "clown"],2,"“Acrobat” es “el acróbata” en español."],
      ["fill","Completa: “¡___ malabarista tan asombroso!”",["Cuánto", "Qué", "Cuán", "Cómo"],1,"“Qué” + sustantivo expresa admiración: “qué malabarista”."],
      ["translate","Traduce: “How amazing this show is!”",["¡Cómo asombroso es este espectáculo!", "¡Qué es asombroso este espectáculo!", "¡Qué asombroso este espectáculo!", "¡Qué asombroso es este espectáculo!"],3,"“How amazing... is!” se traduce con “¡Qué asombroso es...!” en español."],
      ["arrange","Ordena: [cuerda / camina / el / floja / la / payaso / en]",["en cuerda el camina la payaso floja", "cuerda en payaso la floja el camina", "el payaso camina en la cuerda floja", "en cuerda camina floja la payaso el"],2,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en español, en 20-30 palabras, un espectáculo de circo usando exclamaciones (“qué.../cómo...”).",[],["qué", "cómo", "asombroso"]],
    ]
  },
  {
    id:"es_a2_flea_market_bargains", level:"A2", title:"El mercado de pulgas y las gangas", emoji:"🛍️", xp:48,
    description:"Aprende vocabulario de mercados de pulgas y a usar “demasiado/suficiente” en español.",
    study: {
      vocab: [
        ["el mercado de pulgas", "flea market"],
        ["la ganga", "bargain"],
        ["regatear", "to haggle"],
        ["de segunda mano", "secondhand"],
        ["el vendedor", "vendor"],
        ["la antigüedad", "antique"],
      ],
      grammar: [
        ["“Demasiado/suficiente”", "“Demasiado” + adjetivo indica exceso, mientras que “suficiente” indica una cantidad adecuada.", "Esta antigüedad es demasiado cara. / No tengo suficiente dinero para esta ganga."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to haggle” en español?",["flea market", "regatear", "antique", "to haggle"],1,"“To haggle” es “regatear” en español."],
      ["mcq","¿Cómo se dice “vendor” en español?",["to haggle", "el vendedor", "vendor", "antique"],1,"“Vendor” es “el vendedor” en español."],
      ["fill","Completa: “Esta antigüedad es ___ cara.”",["demasiado", "muy mucho", "tan mucho", "suficiente"],0,"“Demasiado” + adjetivo expresa exceso: “demasiado cara”."],
      ["translate","Traduce: “I don't have enough money for this bargain.”",["No tengo suficiente dinero para este ganga.", "No tengo demasiado dinero para esta ganga.", "No tengo suficiente dinero para esta ganga.", "No tengo dinero suficiente para esta bargain."],2,"“Enough money” se traduce con “suficiente dinero”."],
      ["arrange","Ordena: [vendedor / regateo / el / con]",["el con vendedor regateo", "regateo con el vendedor", "vendedor el regateo con", "vendedor regateo con el"],1,"Verbo + preposición + artículo + sustantivo."],
      ["speaking","Describe en español, en 40-60 palabras, una visita a un mercado de pulgas usando “demasiado/suficiente”.",[],["demasiado", "suficiente", "ganga"]],
    ]
  },
  {
    id:"es_b1_genealogy_family_tree", level:"B1", title:"La genealogía y el árbol familiar", emoji:"🌳", xp:62,
    description:"Aprende vocabulario de genealogía y a usar “aunque” en español.",
    study: {
      vocab: [
        ["el árbol familiar", "family tree"],
        ["el antepasado", "ancestor"],
        ["el descendiente", "descendant"],
        ["el acta de nacimiento", "birth certificate"],
        ["el bisabuelo/la bisabuela", "great-grandparent"],
        ["rastrear las raíces", "to trace one's roots"],
      ],
      grammar: [
        ["“Aunque” para concesión", "“Aunque” + indicativo expresa un hecho real conocido; “aunque” + subjuntivo expresa una posibilidad hipotética o desconocida.", "Aunque los registros son antiguos, rastreamos nuestras raíces. / Aunque nunca conoció a su bisabuela, conoce la historia familiar."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ancestor” en español?",["el antepasado", "to trace one's roots", "descendant", "great-grandparent"],0,"“Ancestor” es “el antepasado” en español."],
      ["mcq","¿Cómo se dice “birth certificate” en español?",["el acta de nacimiento", "descendant", "ancestor", "family tree"],0,"“Birth certificate” es “el acta de nacimiento” en español."],
      ["fill","Completa: “___ los registros son antiguos, rastreamos nuestras raíces.”",["Así que", "Aunque", "Porque", "Entonces"],1,"“Aunque” + indicativo (hecho real) introduce la concesión: “aunque los registros son”."],
      ["translate","Traduce: “Even though she never met her great-grandparent, she knows the family history.”",["A pesar nunca conoció a su bisabuela, conoce la historia familiar.", "Aunque nunca conoce a su bisabuela, conoce la historia familiar.", "Aunque nunca conoció a su bisabuela, conoce la historia familiar.", "Aunque nunca conoció a su bisabuela, conozca la historia familiar."],2,"“Even though” se traduce con “aunque” + indicativo, ya que es un hecho conocido."],
      ["arrange","Ordena: [árbol / grande / tiene / familiar / un / ella]",["tiene familiar grande árbol un ella", "ella tiene un árbol familiar grande", "árbol tiene grande familiar un ella", "ella grande familiar árbol tiene un"],1,"Sujeto + verbo + artículo + sustantivo compuesto + adjetivo."],
      ["writing","Escribe en español, en 45-65 palabras, sobre tu árbol familiar usando “aunque” al menos dos veces.",[],["aunque", "árbol familiar", "antepasados"]],
    ]
  },
  {
    id:"es_b2_meteorology_extreme_weather", level:"B2", title:"La meteorología y los fenómenos extremos", emoji:"🌪️", xp:84,
    description:"Habla de fenómenos meteorológicos extremos usando “a pesar de” en español.",
    study: {
      vocab: [
        ["el huracán", "hurricane"],
        ["el tornado", "tornado"],
        ["la sequía", "drought"],
        ["la inundación repentina", "flash flood"],
        ["la velocidad del viento", "wind speed"],
        ["emitir una alerta", "to issue a warning"],
      ],
      grammar: [
        ["“A pesar de” + sustantivo/infinitivo", "“A pesar de” + sustantivo o infinitivo (nunca cláusula conjugada completa) introduce un contraste, similar a “aunque” pero con estructura distinta.", "A pesar de la alerta, mucha gente se quedó cerca de la costa. / A pesar de emitir una alerta, las autoridades no pudieron evitar el daño."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “drought” en español?",["la sequía", "to issue a warning", "flash flood", "wind speed"],0,"“Drought” es “la sequía” en español."],
      ["mcq","¿Cómo se dice “flash flood” en español?",["drought", "to issue a warning", "la inundación repentina", "flash flood"],2,"“Flash flood” es “la inundación repentina” en español."],
      ["fill","Completa: “___ la alerta, mucha gente se quedó cerca de la costa.”",["Porque", "A pesar de", "Aunque", "A pesar"],1,"“A pesar de” + sustantivo (con “de”): “a pesar de la alerta”."],
      ["translate","Traduce: “In spite of issuing a warning, officials couldn't prevent the damage.”",["A pesar de emitir una alerta, las autoridades no pudieron evitar el daño.", "A pesar de emitir una alerta, las autoridades no pueden evitar el daño.", "A pesar emitir una alerta, las autoridades no pudieron evitar el daño.", "A pesar de emitiendo una alerta, las autoridades no pudieron evitar el daño."],0,"“In spite of issuing” se traduce con “a pesar de emitir”, infinitivo tras la preposición."],
      ["arrange","Ordena: [acercándose / huracán / fuerte / un / está]",["huracán acercándose fuerte está un", "acercándose huracán un está fuerte", "un huracán fuerte está acercándose", "un acercándose está huracán fuerte"],2,"Artículo + sustantivo + adjetivo + verbo + gerundio."],
      ["writing","Escribe en español, en 55-75 palabras, sobre un fenómeno meteorológico extremo usando “a pesar de” al menos dos veces.",[],["a pesar de", "huracán", "alerta"]],
    ]
  },
  {
    id:"es_c1_urban_sociology_gentrification", level:"C1", title:"La sociología urbana y la gentrificación", emoji:"🏙️", xp:92,
    description:"Analiza la gentrificación usando el condicional compuesto para crítica del pasado en español.",
    study: {
      vocab: [
        ["la gentrificación", "gentrification"],
        ["el desplazamiento", "displacement"],
        ["la vivienda asequible", "affordable housing"],
        ["la renovación urbana", "urban renewal"],
        ["el alquiler creciente", "rising rent"],
        ["la comunidad local", "local community"],
      ],
      grammar: [
        ["“Debería/no debería haber” para crítica del pasado", "“Debería haber” + participio expresa que algo debió haberse hecho de manera diferente en el pasado, usado para crítica o arrepentimiento.", "La ciudad debería haber protegido la vivienda asequible. / Las autoridades no deberían haber ignorado a la comunidad local."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “displacement” en español?",["urban renewal", "affordable housing", "el desplazamiento", "local community"],2,"“Displacement” es “el desplazamiento” en español."],
      ["mcq","¿Cómo se dice “affordable housing” en español?",["urban renewal", "la vivienda asequible", "gentrification", "rising rent"],1,"“Affordable housing” es “la vivienda asequible” en español."],
      ["fill","Completa: “La ciudad ___ haber protegido la vivienda asequible.”",["deberá", "debe", "debería", "debía"],2,"“Debería haber” + participio expresa crítica del pasado: “debería haber protegido”."],
      ["translate","Traduce: “Officials shouldn't have ignored the local community's concerns.”",["Las autoridades no deberían ignorar las preocupaciones de la comunidad local.", "Las autoridades no deberían haber ignorado las preocupaciones de la comunidad local.", "Las autoridades no deberían haber ignorando las preocupaciones de la comunidad local.", "Las autoridades deberían haber ignorado las preocupaciones de la comunidad local."],1,"“Shouldn't have ignored” se traduce con “no deberían haber ignorado”, participio tras “haber”."],
      ["arrange","Ordena: [preocupa / creciente / a / residentes / el / los / alquiler]",["el alquiler creciente preocupa a los residentes", "creciente residentes los preocupa a el alquiler", "los creciente alquiler residentes a preocupa el", "residentes alquiler los preocupa a creciente el"],0,"Artículo + sustantivo + adjetivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un análisis crítico sobre la gentrificación usando “debería haber/no debería haber” al menos dos veces.",[],["debería haber", "no debería haber", "gentrificación"]],
    ]
  },
  {
    id:"es_c2_epistemology_limits_knowledge", level:"C2", title:"La epistemología y los límites del conocimiento", emoji:"🧭", xp:100,
    description:"Analiza la epistemología usando estructuras enfáticas de secuencia inmediata en español.",
    study: {
      vocab: [
        ["la epistemología", "epistemology"],
        ["la creencia verdadera justificada", "justified true belief"],
        ["el escepticismo", "skepticism"],
        ["la certeza", "certainty"],
        ["el conocimiento a priori", "a priori knowledge"],
        ["la humildad epistémica", "epistemic humility"],
      ],
      grammar: [
        ["“Apenas... cuando/en cuanto...” para secuencia inmediata", "“Apenas... cuando” o “en cuanto” expresan que una acción ocurrió inmediatamente después de otra, un recurso formal similar a “no sooner...than” en inglés.", "Apenas los filósofos propusieron una teoría de la certeza, cuando los escépticos la refutaron. / En cuanto alguien afirma saber algo, surge la duda."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “skepticism” en español?",["epistemic humility", "certainty", "el escepticismo", "epistemology"],2,"“Skepticism” es “el escepticismo” en español."],
      ["mcq","¿Cómo se dice “epistemic humility” en español?",["skepticism", "la humildad epistémica", "certainty", "justified true belief"],1,"“Epistemic humility” es “la humildad epistémica” en español."],
      ["fill","Completa: “Apenas los filósofos propusieron una teoría, ___ los escépticos la refutaron.”",["así", "pues", "que", "cuando"],3,"“Apenas... cuando” forma la estructura de secuencia inmediata: “apenas propusieron, cuando refutaron”."],
      ["translate","Traduce con secuencia inmediata: “No sooner does one claim to know something than doubt arises.”",["En cuanto alguien afirma saber algo, surge la duda.", "En cuanto alguien afirma saber algo, desaparece la duda.", "Apenas alguien afirma saber algo y surge la duda.", "En cuanto alguien afirmó saber algo, surge la duda."],0,"“No sooner... than” se traduce naturalmente con “en cuanto...” en español."],
      ["arrange","Ordena: [certeza / requiere / verdadera / el / conocimiento]",["el conocimiento certeza requiere verdadera", "conocimiento verdadera el requiere certeza", "requiere certeza el verdadera conocimiento", "el conocimiento requiere certeza verdadera"],3,"Artículo + sustantivo + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en español, en 55-75 palabras, un argumento epistemológico usando “apenas... cuando” o “en cuanto” al menos una vez.",[],["apenas...cuando", "en cuanto", "escepticismo"]],
    ]
  },
];
