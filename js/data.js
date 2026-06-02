/* ═══════════════════════════════════════════════════════════
   lessons_EN_v2.js  —  Lecciones de INGLÉS con personalidad
   Cada lección tiene: intro del personaje, hint visual,
   ejercicios graduales, recompensa de cierre y tips extra.
   ═══════════════════════════════════════════════════════════ */

/* ── Tipos de ejercicio disponibles ──────────────────────────
   choice    → opción múltiple
   fill      → completar (texto libre o con pista)
   order     → ordenar palabras para formar oración
   match     → pares (palabra ↔ definición)  [nuevo]
   pronun    → pronunciación con micrófono
   ─────────────────────────────────────────────────────────── */

function buildLessonsEN() { return [
{
  id:'en_a1_greetings',
  title:'Saludos y presentaciones',
  icon:'👋',
  levelCode:'A1', levelName:'Principiante', levelEmoji:'🌱',
  premium:false, xp:25, maxLives:3, globalNum:1,

  /* Mensaje del personaje que aparece ANTES de empezar */
  intro:{
    char:'merlingo',                       // personaje que habla
    mood:'happy',                          // happy | thinking | excited | proud
    text:'¡Hola! Soy Merlingo 🧙‍♂️ y voy a enseñarte los saludos más importantes. ¡Con estos 10 ejercicios podrás presentarte en inglés sin problemas!',
    tip:'💡 Los nativos usan formas contraídas: "I\'m" en vez de "I am". ¡Úsalas desde el principio!'
  },

  /* Mensaje al TERMINAR la lección */
  outro:{
    char:'merlingo',
    mood:'proud',
    text:'¡Increíble! 🎉 Ya puedes saludar y presentarte en inglés. La próxima vez que veas a alguien, prueba decir "Hi, my name is…" — ¡te sorprenderá lo bien que suena!'
  },

  exercises:[
    /* ── Ejercicio 1: opción múltiple sencillo ── */
    {
      type:'choice',
      difficulty:1,                        // 1=fácil … 5=difícil
      q:'Buenos días en inglés es...',
      context:'🌅 Son las 8 de la mañana. Llegas a la oficina.',
      opts:['Good night','Good morning','Good evening','Goodbye'],
      correct:1,
      exp:'✅ "Good morning" = Buenos días (mañana)\n"Good afternoon" = Buenas tardes\n"Good evening" = Buenas noches (saludo)\n"Good night" = Buenas noches (despedida para dormir)',
      reward:'¡Primer bloque desbloqueado! 🧱'
    },
    /* ── Ejercicio 2 ── */
    {
      type:'choice',
      difficulty:1,
      q:'Alguien te dice "How are you?" — ¿Qué respondes?',
      context:'😊 Tu nuevo compañero de trabajo te saluda en el pasillo.',
      opts:['I am fine, thank you.','I am a student.','My name is Ana.','I am from Mexico.'],
      correct:0,
      exp:'✅ "I\'m fine, thank you" es la respuesta clásica.\nTambién puedes decir: "I\'m good", "Not bad", "Pretty well".\n¿Quieres sonar natural? Di "I\'m doing great!" 😄',
    },
    /* ── Ejercicio 3 ── */
    {
      type:'fill',
      difficulty:1,
      q:'Completa la presentación: "My ___ is Carlos."',
      context:'📛 Estás en una conferencia con tu gafete puesto.',
      hint:'Piensa en lo que dice tu gafete/badge.',
      answer:'name',
      exp:'✅ "My name is…" — presentación formal\n"I\'m…" — presentación informal\nAmbas son correctas, pero "I\'m Carlos" suena más natural en conversación.',
    },
    /* ── Ejercicio 4 ── */
    {
      type:'choice',
      difficulty:1,
      q:'"Nice to meet you" significa...',
      context:'🤝 Es la primera vez que ves a esta persona.',
      opts:['Hasta luego','Mucho gusto / Encantado','¿Cómo estás?','Me llamo...'],
      correct:1,
      exp:'✅ "Nice to meet you" = Mucho gusto / Encantado de conocerte.\nRespondes: "Nice to meet you too!" 👍\nFormal: "It\'s a pleasure to meet you."',
    },
    /* ── Ejercicio 5 ── */
    {
      type:'fill',
      difficulty:2,
      q:'"___ are you from?" — ¿De dónde eres?',
      context:'✈️ Estás en un avión y el pasajero de al lado quiere conocerte.',
      hint:'Pregunta por el lugar/lugar de origen.',
      answer:'Where',
      exp:'✅ "Where are you from?" = ¿De dónde eres?\nResponde: "I\'m from Guatemala / Mexico / Spain…"\nSiguiente pregunta típica: "What do you do?" (¿A qué te dedicas?)',
    },
    /* ── Ejercicio 6: NUEVO TIPO — ordenar palabras ── */
    {
      type:'order',
      difficulty:2,
      q:'Ordena las palabras para formar una despedida informal:',
      context:'📱 Terminas una videollamada con un amigo.',
      words:['you','later','See','!'],
      answer:'See you later !',
      exp:'✅ "See you later!" = ¡Hasta luego! / ¡Nos vemos!\nOtras despedidas: "Bye!", "Take care!", "Talk soon!", "Catch you later!"',
    },
    /* ── Ejercicio 7 ── */
    {
      type:'choice',
      difficulty:2,
      q:'"I am a teacher." ¿Qué información da esta frase?',
      context:'👩‍🏫 Estás en una reunión de padres en la escuela.',
      opts:['Tu nombre','Tu profesión','Tu país de origen','Tu edad'],
      correct:1,
      exp:'✅ "I am a teacher" = Soy profesor/a.\nProfesiones comunes:\n• doctor (médico) • engineer (ingeniero)\n• student (estudiante) • manager (gerente)',
    },
    /* ── Ejercicio 8 ── */
    {
      type:'fill',
      difficulty:2,
      q:'Completa: "I ___ from Guatemala." (Soy de Guatemala)',
      context:'🌎 Alguien te pregunta de dónde eres.',
      hint:'Verbo "to be" con "I".',
      answer:'am',
      exp:'✅ El verbo "to be" cambia según el sujeto:\n• I AM • You ARE • He/She IS • We/They ARE\n¡Este es uno de los verbos MÁS usados en inglés!',
    },
    /* ── Ejercicio 9: NUEVO TIPO — emparejar ── */
    {
      type:'match',
      difficulty:3,
      q:'Empareja cada saludo con su momento del día:',
      context:'🕐 ¿Usas el saludo correcto según la hora?',
      pairs:[
        {id:0,left:'Good morning',  right:'🌅 7am – 12pm'},
        {id:1,left:'Good afternoon',right:'☀️ 12pm – 6pm'},
        {id:2,left:'Good evening',  right:'🌙 6pm – noche'},
        {id:3,left:'Good night',    right:'😴 Al despedirse'},
      ],
      exp:'✅ ¡Los horarios de los saludos en inglés son aproximados!\nEn conversación casual, "Hi!" o "Hey!" funcionan a cualquier hora.',
    },
    /* ── Ejercicio 10: pronunciación ── */
    {
      type:'pronun',
      difficulty:2,
      q:'Pronuncia este saludo en voz alta — ¡el más universal!',
      context:'🎙️ Este es el saludo que reconoce TODO el mundo.',
      word:'Hello',
      phonetic:'/həˈloʊ/',
      tip:'Acento en la segunda sílaba: he-LLO. La "H" se pronuncia suave. ¡Practica 3 veces!',
    },
  ]
},

/* ──────────────────────────────────────── */
,

{
  id:'en_a1_numbers',
  title:'Números del 1 al 100',
  icon:'🔢',
  levelCode:'A1', levelName:'Principiante', levelEmoji:'🌱',
  premium:false, xp:25, maxLives:3, globalNum:2,

  intro:{
    char:'zorrek',
    mood:'excited',
    text:'¡Soy Zorrek! ⚡ Los números son la base de TODO en inglés — precios, fechas, teléfonos, edades. ¡Dominémoslos juntos en esta lección!',
    tip:'💡 Truco: Los números del 13 al 19 terminan en "-teen". Los múltiplos de 10 terminan en "-ty". ¡No los confundas!'
  },
  outro:{
    char:'zorrek',
    mood:'proud',
    text:'¡Tus números ya están cargados! 🔋 Ahora cuando escuches precios o fechas en inglés, los entenderás. ¡Prueba contar hasta 20 en inglés esta noche!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'¿Cómo se escribe el número 15?',
      context:'📱 Alguien te dice su número de apartamento: "apartment fifteen".',
      opts:['fifty','five','fifteen','fifth'],
      correct:2,
      exp:'✅ 15 = fifteen\n⚠️ Confusión frecuente: 15 (fifteen) vs 50 (fifty)\nTruco: si termina en "-teen", son menos de 20.',
    },
    {
      type:'fill', difficulty:1,
      q:'Escribe en inglés: 12',
      context:'🥚 Compras una docena de huevos.',
      hint:'Un número especial, no sigue las reglas normales.',
      answer:'twelve',
      exp:'✅ Los irregulares que DEBES memorizar:\n11 = eleven • 12 = twelve\n13 = thirteen • 20 = twenty\n¡Estos no siguen ninguna regla, solo memoriza!',
    },
    {
      type:'choice', difficulty:1,
      q:'"How much does it cost?" significa...',
      context:'🛒 Estás en una tienda y quieres saber el precio.',
      opts:['¿Cuántos hay?','¿Cuánto cuesta?','¿Cuándo llega?','¿Cuántos años tienes?'],
      correct:1,
      exp:'✅ "How much" = ¿Cuánto? (cantidad o precio)\n"How many" = ¿Cuántos? (cosas que puedes contar)\nEjemplo: "How many apples?" pero "How much water?"',
    },
    {
      type:'fill', difficulty:2,
      q:'Completa: "There are ___ days in a week." (7)',
      context:'📅 Tu jefe te pregunta cuántos días tiene la semana.',
      hint:'Se'n',
      answer:'seven',
      exp:'✅ seven days = 7 días\nLos días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n¡El inglés empieza la semana en domingo en muchos calendarios!',
    },
    {
      type:'choice', difficulty:2,
      q:'¿Qué número es "forty-two"?',
      context:'🚪 El número de tu cuarto de hotel.',
      opts:['24','42','14','40'],
      correct:1,
      exp:'✅ forty = 40, two = 2 → 42\nLos números compuestos llevan guion: twenty-one (21), thirty-five (35), ninety-nine (99)\n¡Solo del 21 al 99!',
    },
    {
      type:'order', difficulty:2,
      q:'Ordena para decir el precio: "dos dólares con cincuenta"',
      context:'☕ Pides un café y cuesta $2.50.',
      words:['fifty','two','dollars','cents'],
      answer:'two dollars fifty cents',
      exp:'✅ Precios en inglés: "two dollars fifty cents"\nInformal: "two fifty" (sin mencionar "dollars")\nTambién: "two dollars and fifty cents" (más formal)',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja el número con su nombre en inglés:',
      context:'📊 Necesitas leer datos de un informe.',
      pairs:[
        {id:0,left:'11', right:'eleven'},
        {id:1,left:'20', right:'twenty'},
        {id:2,left:'50', right:'fifty'},
        {id:3,left:'100',right:'one hundred'},
      ],
      exp:'✅ Recuerda la diferencia:\n• thirteen (13) vs thirty (30)\n• fourteen (14) vs forty (40)\n• fifteen (15) vs fifty (50)',
    },
    {
      type:'fill', difficulty:3,
      q:'"It costs ___ dollars." (It costs $10.)',
      context:'💵 Le explicas el precio a un turista.',
      hint:'Número entre 9 y 11.',
      answer:'ten',
      exp:'✅ Para decir precios: "It costs + número + currency"\n"It costs ten dollars." / "It\'s ten dollars." / "That\'s ten bucks." (informal)',
    },
  ]
},

/* ──────────────────────────────────────── */
,

{
  id:'en_a1_everyday',
  title:'Objetos y colores del día a día',
  icon:'🎨',
  levelCode:'A1', levelName:'Principiante', levelEmoji:'🌱',
  premium:false, xp:25, maxLives:3, globalNum:3,

  intro:{
    char:'merlingo',
    text:'¡Hola de nuevo! 🧙 Antes de poder hablar de cosas complejas, necesitas nombrar lo que te rodea. Esta lección te enseña los objetos y colores más usados en la vida diaria. ¡Son los ladrillos del inglés!',
    tip:'💡 Truco de memorización: cuando veas un objeto hoy, dilo en inglés mentalmente. "Eso es una chair, esa es una window, aquello es a door." ¡Tu cerebro los fijará solos!'
  },
  outro:{
    char:'merlingo',
    text:'¡Excelente! 🧙 Ahora mira tu alrededor y nombra 5 objetos en inglés. Mesa, silla, ventana, teléfono, bolígrafo — ¡ya los sabes todos!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'¿Cómo se dice "silla" en inglés?',
      context:'🪑 Estás en una tienda de muebles y necesitas pedir ayuda.',
      opts:['table','desk','chair','sofa'],
      correct:2,
      exp:'"chair" = silla\n"table" = mesa\n"desk" = escritorio (mesa de trabajo)\n"sofa" = sofá\n\n¡Tip: una "chair" es para UNA persona, un "sofa" es para varias!',
    },
    {
      type:'fill', difficulty:1,
      q:'"Please open the ___." (Abre la ventana, por favor.)',
      context:'🌬️ Hace calor en la clase y el profesor quiere abrir la ventana.',
      hint:'Piensa en lo que ves al mirar afuera de una habitación.',
      answer:'window',
      exp:'"window" = ventana\n"door" = puerta\n"wall" = pared\n"floor" = suelo / piso\n"ceiling" = techo (interior)\n"roof" = techo (exterior)',
    },
    {
      type:'choice', difficulty:1,
      q:'¿Cuál es el color ROJO en inglés?',
      context:'🚦 Estás aprendiendo las señales de tráfico en inglés.',
      opts:['blue','green','red','yellow'],
      correct:2,
      exp:'"red" = rojo 🔴\n"blue" = azul 🔵\n"green" = verde 🟢\n"yellow" = amarillo 🟡\n"white" = blanco ⚪\n"black" = negro ⚫',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja cada objeto con su traducción:',
      context:'🏠 Objetos que encuentras en cualquier habitación.',
      pairs:[
        {id:0, left:'book',   right:'libro'},
        {id:1, left:'phone',  right:'teléfono'},
        {id:2, left:'key',    right:'llave'},
        {id:3, left:'bag',    right:'bolsa / mochila'},
      ],
      exp:'Vocabulario esencial para describir tu entorno:\n"Where is my book?" = ¿Dónde está mi libro?\n"I can\'t find my key." = No encuentro mi llave.\n"Is this your bag?" = ¿Es tuya esta bolsa?',
    },
    {
      type:'fill', difficulty:2,
      q:'El color del cielo (sky) en un día soleado es "___".',
      context:'☀️ Un día perfecto con cielo despejado.',
      hint:'Piensa en el color del mar también.',
      answer:'blue',
      exp:'"blue" = azul\nLight blue = azul claro\nDark blue = azul oscuro\n\n¿Sabías que en inglés también usamos colores como verbos?\n"She blued the fabric." = Tiñó la tela de azul.',
    },
    {
      type:'choice', difficulty:2,
      q:'"The bag is ___." La bolsa es grande.',
      context:'🛍️ Estás describiendo tu mochila nueva.',
      opts:['small','big','old','new'],
      correct:1,
      exp:'"big" / "large" = grande\n"small" / "little" = pequeño/a\n"old" = viejo/a\n"new" = nuevo/a\n"heavy" = pesado/a\n"light" = ligero/a\n\n¡Los adjetivos en inglés NO cambian para masculino/femenino!',
    },
    {
      type:'order', difficulty:2,
      q:'Describe el objeto: "El libro es rojo y grande."',
      context:'📚 Tu amigo no encuentra su libro y lo describes.',
      words:['The','book','is','red','and','big','.'],
      answer:'The book is red and big .',
      exp:'"The + sustantivo + is + adjetivo(s)"\nEn inglés, los adjetivos van ANTES del sustantivo:\n"a red book" (no "a book red")\n"a big chair" (no "a chair big")',
    },
    {
      type:'choice', difficulty:2,
      q:'"What colour is your car?" — Tu carro es negro. ¿Qué respondes?',
      context:'🚗 Tu vecino te pregunta por tu carro nuevo.',
      opts:['It is black.','It is a car.','My car.','Is black.'],
      correct:0,
      exp:'"It is black." = Es negro. ✅\n\nSiempre responde con sujeto + verbo:\n"What colour is it?" → "It is + color."\n"What size is it?" → "It is + size."',
    },
    {
      type:'fill', difficulty:3,
      q:'"I need a ___ of water." (un vaso de agua)',
      context:'💧 Tienes sed y le pides agua a alguien.',
      hint:'El recipiente de vidrio para beber.',
      answer:'glass',
      exp:'"a glass of water" = un vaso de agua\n"a cup of coffee" = una taza de café\n"a bottle of juice" = una botella de jugo\n"a can of soda" = una lata de refresco\n\n¡El contenedor cambia según la bebida!',
    },
    {
      type:'pronun', difficulty:2,
      q:'Pronuncia este color — ¡muy útil y muy mal pronunciado por hispanohablantes!',
      context:'🎨 Un color fundamental que aparece en todas partes.',
      word:'yellow',
      phonetic:"/ˈjeloʊ/",
      tip:'YE-low. La "y" suena como la "y" española de "yo".\nNo digas "ge-low" ni "ze-low". Es YE-low.',
    },
  ]
},

/* ══ A1: Familia y relaciones ════════════════════════════════ */
,

{
  id:'en_a1_family',
  title:'La familia en inglés',
  icon:'👨‍👩‍👧‍👦',
  levelCode:'A1', levelName:'Principiante', levelEmoji:'🌱',
  premium:false, xp:30, maxLives:3, globalNum:4,

  intro:{
    char:'zorrek',
    text:'¡Zorrek aquí! ⚡ La familia es el tema MÁS COMÚN en conversaciones básicas en inglés. "Do you have brothers?" "Are your parents from here?" Aprende estas palabras y nunca más tendrás una conversación incómoda.',
    tip:'💡 Gran diferencia con el español:\nEl inglés NO distingue entre abuelo paterno y materno, tío materno o paterno. Todo es "grandfather", "uncle".\nEl contexto lo aclara si hace falta.'
  },
  outro:{
    char:'zorrek',
    text:'¡Familia dominada! ⚡ La próxima vez que alguien te pregunte "Tell me about your family", ya puedes responder: "I have two brothers, one sister and my parents live in…" ¡Adelante!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'¿Cómo se dice "madre" en inglés?',
      context:'👩 Hablas de tu familia con un nuevo amigo.',
      opts:['father','sister','mother','daughter'],
      correct:2,
      exp:'"mother" = madre (formal) / "mom" / "mum" (informal)\n"father" = padre (formal) / "dad" (informal)\n"mom" es americano, "mum" es británico.',
    },
    {
      type:'match', difficulty:1,
      q:'Empareja cada miembro de la familia:',
      context:'👨‍👩‍👧‍👦 El árbol genealógico básico en inglés.',
      pairs:[
        {id:0, left:'brother',  right:'hermano'},
        {id:1, left:'sister',   right:'hermana'},
        {id:2, left:'son',      right:'hijo'},
        {id:3, left:'daughter', right:'hija'},
      ],
      exp:'"brother/sister" = hermano/a\n"son/daughter" = hijo/a\n"parents" = padres (nunca "fathers" para decir "padres")\n"children" = hijos (en general, no plural de "child" en este contexto)',
    },
    {
      type:'fill', difficulty:1,
      q:'"My ___ is 65 years old." (Mi abuelo tiene 65 años.)',
      context:'👴 Describes a tu abuelo en una conversación.',
      hint:'El padre de tu padre o madre.',
      answer:'grandfather',
      exp:'"grandfather" = abuelo\n"grandmother" = abuela\n"grandparents" = abuelos (ambos)\n"grandchildren" = nietos\n"grandson" = nieto\n"granddaughter" = nieta',
    },
    {
      type:'choice', difficulty:2,
      q:'"Do you have any siblings?" — ¿Qué significa "siblings"?',
      context:'🗣️ Tu nuevo compañero de trabajo te hace esta pregunta.',
      opts:['¿Tienes mascotas?','¿Tienes hermanos?','¿Tienes hijos?','¿Tienes amigos?'],
      correct:1,
      exp:'"siblings" = hermanos en general (hermanos Y hermanas)\n\nEsta palabra es MUY útil porque evita especificar género:\n"I have two siblings." = Tengo dos hermanos.\n(sin decir si son chicos, chicas, o uno de cada uno)',
    },
    {
      type:'fill', difficulty:2,
      q:'"She is my father\'s sister. She is my ___."',
      context:'👩 Tu papá tiene una hermana. ¿Cómo la llamas?',
      hint:'La hermana de tu padre o madre.',
      answer:'aunt',
      exp:'"aunt" = tía (hermana del padre o madre)\n"uncle" = tío (hermano del padre o madre)\n"cousin" = primo/a\n\nNotarás que el inglés no distingue:\n¿Tía materna o paterna? Solo "aunt".',
    },
    {
      type:'order', difficulty:2,
      q:'Forma la oración: "Tengo dos hermanas y un hermano."',
      context:'👨‍👩‍👧‍👦 Te presentas con tu familia.',
      words:['I','have','two','sisters','and','one','brother','.'],
      answer:'I have two sisters and one brother .',
      exp:'"I have + número + familia"\nNota: "one brother" (no "a brother" en listas)\n"Do you have any brothers or sisters?"\n"I have two sisters and one brother." ✅',
    },
    {
      type:'choice', difficulty:2,
      q:'"My parents are married." ¿Qué significa?',
      context:'💍 Hablas del estado civil de tus padres.',
      opts:['Mis padres están divorciados','Mis padres están casados','Mis padres son jóvenes','Mis padres son mayores'],
      correct:1,
      exp:'"married" = casado/a\n"single" = soltero/a\n"divorced" = divorciado/a\n"widowed" = viudo/a\n"engaged" = comprometido/a\n\n"Are your parents together?" = ¿Tus papás están juntos?',
    },
    {
      type:'fill', difficulty:3,
      q:'El hijo de mi hermana es mi ___.',
      context:'👶 Tu hermana tuvo un bebé. ¿Cómo lo llamas?',
      hint:'El hijo de tu hermano o hermana. (terminación similar a "nephew")',
      answer:'nephew',
      exp:'"nephew" = sobrino (hijo de hermano/a)\n"niece" = sobrina (hija de hermano/a)\n\nTruco de memoria:\n"Nephew" empieza con N como "Niño"\n"Niece" empieza con N-I como "Niña"',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja las relaciones familiares políticas:',
      context:'💒 Cuando alguien se casa, la familia crece.',
      pairs:[
        {id:0, left:'mother-in-law', right:'suegra'},
        {id:1, left:'brother-in-law',right:'cuñado'},
        {id:2, left:'stepfather',    right:'padrastro'},
        {id:3, left:'half-sister',   right:'media hermana'},
      ],
      exp:'In-law = familiar político (por matrimonio)\n"mother-in-law" = suegra\n"Step-" = familiar por nuevo matrimonio\n"stepfather" = padrastro\n"Half-" = medio/a hermano/a (mismo padre O madre)',
    },
    {
      type:'pronun', difficulty:2,
      q:'Pronuncia esta palabra — ¡tiene una trampa silenciosa!',
      context:'👩 La madre en inglés formal.',
      word:'mother',
      phonetic:"/ˈmʌðər/",
      tip:'MU-ther. La "th" es sonora (vibra): pon la lengua entre los dientes y haz vibrar la voz.\nLa "o" se pronuncia como la "a" en "mas". MU-ther, no "mo-ther".',
    },
  ]
},

/* ══ A2: Presente continuo (acciones en curso) ═══════════════ */
,

{
  id:'en_a1_prepositions_place',
  title:'Preposiciones de lugar',
  icon:'📍',
  levelCode:'A1', levelName:'Principiante', levelEmoji:'🌱',
  premium:false, xp:30, maxLives:3, globalNum:5,

  intro:{
    char:'merlingo',
    mood:'thinking',
    text:'Las preposiciones de lugar son como un GPS en inglés 🗺️ — sin ellas, nadie sabe dónde estás. ¡Domínalas y podrás dar y seguir instrucciones perfectas!',
    tip:'💡 Visualiza físicamente cada preposición mientras la aprendes. ON = encima con contacto. ABOVE = flotando arriba. ¡Haz el gesto con tu mano!'
  },
  outro:{
    char:'merlingo',
    mood:'excited',
    text:'¡Ya tienes tu mapa mental de preposiciones! 🗺️ Prueba describirle a alguien dónde están las cosas en tu cuarto usando "on", "under", "beside"… ¡La práctica hace al maestro!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'"The book is ___ the table." El libro está SOBRE la mesa.',
      context:'📚 Buscas tu libro y alguien te dice dónde está.',
      opts:['under','on','behind','between'],
      correct:1,
      exp:'✅ ON = sobre/encima de (con contacto físico)\n\nVisualiza: el libro está APOYADO en la mesa.\n\nEjemplos: "keys on the table", "picture on the wall", "shoes on the floor"',
    },
    {
      type:'choice', difficulty:1,
      q:'"The cat is ___ the chair." El gato está DEBAJO de la silla.',
      context:'🐱 Tu gato se escondió. ¿Dónde está?',
      opts:['on','above','under','in front of'],
      correct:2,
      exp:'✅ UNDER = debajo de (con o sin contacto)\nBENEATH = debajo de (más formal, literario)\nBELOW = debajo de (con más distancia)\n\nPara objetos cotidianos: "under" es perfecto.',
    },
    {
      type:'fill', difficulty:2,
      q:'"The bank is ___ the post office." (La banca está AL LADO de la oficina de correos.)',
      context:'🗺️ Le explicas a alguien cómo llegar al banco.',
      hint:'Sinónimo de "next to".',
      answer:'beside',
      exp:'✅ BESIDE = al lado de (sinónimo de NEXT TO)\n\n⚠️ CUIDADO: "beside" ≠ "besides"\n• "The shop is beside the bank." (ubicación)\n• "Besides coffee, I like tea." (además de)',
    },
    {
      type:'choice', difficulty:2,
      q:'"She stood ___ the door." Ella estaba FRENTE A la puerta.',
      context:'🚪 Ella toca el timbre. ¿Dónde está parada?',
      opts:['behind','above','in front of','between'],
      correct:2,
      exp:'✅ IN FRONT OF = delante de / enfrente de\nOpuesto: BEHIND = detrás de\n\n"The car is in front of the house."\n"The garden is behind the house."',
    },
    {
      type:'choice', difficulty:2,
      q:'"The helicopter hovered ___ the house."',
      context:'🚁 Un helicóptero sobrevuela una casa.',
      opts:['below','under','above','beside'],
      correct:2,
      exp:'✅ ABOVE = por encima de (sin contacto, con distancia visible)\nOVER = por encima de (más cercano, o cubriendo)\n\n"Clouds above us" vs "put a blanket over the bed"',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja la preposición con su imagen:',
      context:'🏠 Imagina una casa con objetos alrededor.',
      pairs:[
        {id:0,left:'on',         right:'📖 sobre la mesa'},
        {id:1,left:'under',      right:'🐱 debajo de la silla'},
        {id:2,left:'behind',     right:'🌳 detrás de la casa'},
        {id:3,left:'in front of',right:'🚗 delante de la puerta'},
      ],
      exp:'✅ ¡Ya tienes las 4 preposiciones básicas de lugar!\nPráctica extra: describe tu habitación usando estas 4 preposiciones.',
    },
    {
      type:'fill', difficulty:2,
      q:'"Tara was sitting ___ Ram and Ati." (entre dos personas)',
      context:'🎬 Tres amigos en el cine. Tara está en el medio.',
      hint:'Dos personas específicas = esta preposición.',
      answer:'between',
      exp:'✅ BETWEEN = entre (2 elementos específicos)\nAMONG = entre (3 o más, un grupo)\n\n"Tara sat between Ram and Ati." (2 personas)\n"She was lost among strangers." (grupo)',
    },
    {
      type:'order', difficulty:3,
      q:'Forma la oración: "El libro está sobre la mesa"',
      context:'📚 Describes la posición del libro.',
      words:['The','book','is','on','the','table','.'],
      answer:'The book is on the table .',
      exp:'✅ Estructura: Sujeto + verbo "to be" + preposición + artículo + sustantivo\n"The [thing] is [preposition] the [place]"\n¡Este patrón funciona para casi todas las descripciones de lugar!',
    },
    {
      type:'choice', difficulty:3,
      q:'"The tunnel runs ___ the sea." ¿Qué preposición es más formal aquí?',
      context:'🚇 El Eurotúnel conecta Francia con Inglaterra.',
      opts:['over','above','beneath','beside'],
      correct:2,
      exp:'✅ BENEATH = debajo de (más formal/literario que "under")\n\nEl Eurotúnel corre BENEATH the English Channel.\n"Under" también sería correcto aquí, pero "beneath" suena más profesional en texto escrito.',
    },
    {
      type:'pronun', difficulty:2,
      q:'Pronuncia esta preposición:',
      context:'🗣️ Muy usada para dar direcciones.',
      word:'between',
      phonetic:'/bɪˈtwiːn/',
      tip:'be-TWEEN. Acento en la 2ª sílaba. La "ee" es larga, como en "green".',
    },
  ]
},

/* ════════════════════════════════════════════
   NIVEL A2 — BÁSICO
════════════════════════════════════════════ */
,

{
  id:'en_a2_prepositions_time',
  title:'Preposiciones de tiempo: AT / IN / ON',
  icon:'🕐',
  levelCode:'A2', levelName:'Básico', levelEmoji:'🌿',
  premium:false, xp:35, maxLives:3, globalNum:6,

  intro:{
    char:'kenjiro',
    mood:'thinking',
    text:'¡Kenjiro aquí! ⚔️ AT, IN, ON — tres palabras pequeñas que confunden a TODOS. Pero yo tengo el truco que te las hará imposible de olvidar. ¿Listo para el método del embudo?',
    tip:'💡 EL MÉTODO DEL EMBUDO:\n🔹 IN = período grande (año, mes, estación, parte del día)\n🔹 ON = día específico (día, fecha)\n🔹 AT = momento exacto (hora, mediodía, medianoche)\n¡Cuanto más específico, más pequeño el embudo!'
  },
  outro:{
    char:'kenjiro',
    mood:'proud',
    text:'¡Has dominado AT/IN/ON! ⚔️ Ya no cometerás el error de "on the morning" o "at Monday". Practica escribiendo tu horario semanal en inglés con estas preposiciones.'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'"Let\'s meet ___ 6pm." ¿Qué preposición va con una hora exacta?',
      context:'📅 Organizas una reunión con tu equipo.',
      opts:['in','on','at','during'],
      correct:2,
      exp:'✅ AT + hora exacta\n• at 6pm • at noon • at midnight • at dawn\n\n🔔 Regla: si puedes poner un reloj, usa AT.',
    },
    {
      type:'choice', difficulty:1,
      q:'"He was born ___ 2003." ¿Qué preposición va con un año?',
      context:'📋 Llenas un formulario con tu fecha de nacimiento.',
      opts:['at','on','during','in'],
      correct:3,
      exp:'✅ IN + período largo\n• in 2003 • in July • in summer • in the morning\n\n🔔 Regla: si es un período de tiempo (no un momento exacto), usa IN.',
    },
    {
      type:'choice', difficulty:1,
      q:'"My birthday is ___ Monday." ¿Qué preposición va con un día?',
      context:'🎂 Le dices a alguien cuándo es tu cumpleaños.',
      opts:['in','at','on','since'],
      correct:2,
      exp:'✅ ON + día específico o fecha\n• on Monday • on 7 May • on Christmas Day • on my birthday\n\n🔔 Regla: si puedes marcar un día en el calendario, usa ON.',
    },
    {
      type:'fill', difficulty:2,
      q:'Completa: "He has coffee ___ the morning."',
      context:'☕ Describes la rutina matutina de alguien.',
      hint:'Parte del día = período grande.',
      answer:'in',
      exp:'✅ IN the morning / afternoon / evening\n⚠️ EXCEPCIÓN: AT night (sin "the")\n\n"I work in the morning but relax at night."',
    },
    {
      type:'match', difficulty:2,
      q:'Aplica el método del embudo: ¿AT, IN, u ON?',
      context:'📅 ¿Cuánto "zoom" necesita cada momento?',
      pairs:[
        {id:0,left:'___ Christmas Day',   right:'ON (día específico)'},
        {id:1,left:'___ 2020',            right:'IN (período largo)'},
        {id:2,left:'___ midnight',        right:'AT (momento exacto)'},
        {id:3,left:'___ the afternoon',   right:'IN (parte del día)'},
      ],
      exp:'✅ ¡El embudo nunca falla!\n🔹 IN → año, mes, estación, parte del día\n🔹 ON → día, fecha\n🔹 AT → hora exacta, momentos precisos',
    },
    {
      type:'choice', difficulty:2,
      q:'"I fell asleep ___ the meeting." Me dormí DURANTE la reunión.',
      context:'😴 Una reunión muy aburrida…',
      opts:['since','until','during','for'],
      correct:2,
      exp:'✅ DURING = durante (+ sustantivo)\n"During the meeting", "during the film"\n\n⚠️ "While" + verbo: "while I was watching the film"\nDURING + sustantivo | WHILE + oración',
    },
    {
      type:'fill', difficulty:3,
      q:'Completa: "I haven\'t seen him ___ Monday." (Desde el lunes)',
      context:'📅 Alguien pregunta cuándo fue la última vez que viste a tu amigo.',
      hint:'Punto específico en el pasado (y continúa hasta ahora).',
      answer:'since',
      exp:'✅ SINCE = desde (punto específico en el pasado)\nFOR = durante (período de tiempo)\n\n"I\'ve worked here since 2020." (desde 2020)\n"I\'ve worked here for 3 years." (por 3 años)',
    },
    {
      type:'choice', difficulty:3,
      q:'"We must finish ___ Tuesday." ¿Cuándo es el plazo?',
      context:'⏰ Tu jefe te da una fecha límite.',
      opts:['during','since','at','by'],
      correct:3,
      exp:'✅ BY = antes de / a más tardar\n"Finish by Tuesday" = terminarlo antes del martes (incluido)\n\nPor vs. By:\n"I\'ll be there at 5pm" (llegada exacta)\n"I\'ll be there by 5pm" (a más tardar a las 5)',
    },
    {
      type:'order', difficulty:3,
      q:'Ordena para decir: "El banco abre los lunes a las 9am"',
      context:'🏦 Le explicas el horario del banco a alguien.',
      words:['The','bank','opens','on','Mondays','at','9am','.'],
      answer:'The bank opens on Mondays at 9am .',
      exp:'✅ Cuando usas las dos juntas: ON + día, AT + hora\n"The office is open on weekdays at 9am."\n"The party is on Friday at 8pm."',
    },
    {
      type:'choice', difficulty:3,
      q:'"The meeting continued ___ midnight." La reunión continuó MÁS ALLÁ de medianoche.',
      context:'🌙 Una reunión que se fue muy larga...',
      opts:['until','beyond','past','over'],
      correct:1,
      exp:'✅ BEYOND midnight = más allá de la medianoche (implica sorpresa)\nPAST midnight = después de medianoche (más neutro)\nUNTIL midnight = hasta medianoche (límite exacto)\n\nTodos correctos, con matices diferentes.',
    },
    {
      type:'pronun', difficulty:2,
      q:'Pronuncia esta preposición:',
      context:'⏱️ La más confundida con "do" y "dew".',
      word:'during',
      phonetic:'/ˈdjʊərɪŋ/',
      tip:'DU-ring. La "u" suena como en "you". No confundir con "daring" (atrevido/a).',
    },
  ]
},

/* ──────────────────────────────────────── */
,

{
  id:'en_a2_present_simple',
  title:'Presente simple: rutinas y hábitos',
  icon:'📝',
  levelCode:'A2', levelName:'Básico', levelEmoji:'🌿',
  premium:false, xp:40, maxLives:3, globalNum:7,

  intro:{
    char:'merlingo',
    mood:'excited',
    text:'¡El presente simple es el tiempo verbal más USADO en inglés! 🧙‍♂️ Con él hablas de rutinas, hechos y hábitos. Domínalo y ya tienes el 40% del inglés cotidiano. ¡Vamos!',
    tip:'💡 LA REGLA DE LA "S": Con he/she/it → siempre añade -S al verbo.\n"I work" → "She works"\n"I go" → "He goes"\n¡Ese -s pequeño es la clave!'
  },
  outro:{
    char:'merlingo',
    mood:'proud',
    text:'¡Presente simple: ¡completado! 🎓 Ahora escribe 5 frases sobre tu rutina diaria en inglés. "I wake up at 7am. I drink coffee in the morning…" — ¡tú puedes!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'"She ___ in a bank." Ella trabaja en un banco.',
      context:'👩‍💼 Describes el trabajo de tu amiga.',
      opts:['work','works','working','worked'],
      correct:1,
      exp:'✅ Con he / she / it → añade -S\n"She works" ✓ "He studies" ✓ "It opens" ✓\n\n⚠️ Errores comunes: "she work" ✗ o "she is work" ✗',
    },
    {
      type:'fill', difficulty:1,
      q:'Completa: "They ___ English every day." (estudian)',
      context:'📚 Un grupo de amigos tiene clases diarias.',
      hint:'I/you/we/they → sin cambios al verbo.',
      answer:'study',
      exp:'✅ Con I/you/we/they → verbo sin cambios\n"They study" ✓\n\nNota: study → studies (she studies) — la Y cambia a IE antes del -s.',
    },
    {
      type:'choice', difficulty:2,
      q:'Forma negativa: "He ___ like coffee."',
      context:'☕ Tu compañero rechaza el café en la reunión.',
      opts:["don't","doesn't","isn't",'not'],
      correct:1,
      exp:'✅ Negativo con he/she/it: DOESN\'T + verbo base\n"He doesn\'t like coffee."\n\nCon I/you/we/they: DON\'T\n"I don\'t drink coffee."',
    },
    {
      type:'choice', difficulty:2,
      q:'¿Cuál es la pregunta correcta?',
      context:'🏢 Quieres saber si tu colega trabaja aquí.',
      opts:['Does she works here?','Do she work here?','Does she work here?','Is she work here?'],
      correct:2,
      exp:'✅ Preguntas con he/she/it: DOES + sujeto + VERBO BASE\n"Does she work here?" (NO "Does she works")\n\nEl -s DESAPARECE porque ya está en "Does".',
    },
    {
      type:'fill', difficulty:2,
      q:'Completa: "___ you speak English?" (¿Hablas inglés?)',
      context:'✈️ Estás en el aeropuerto buscando ayuda.',
      hint:'Auxiliar para I/you/we/they.',
      answer:'Do',
      exp:'✅ DO + I/you/we/they\nDOES + he/she/it\n\n"Do you speak English?" ✓\n"Does she speak English?" ✓',
    },
    {
      type:'order', difficulty:2,
      q:'Forma la pregunta: "¿Trabaja ella los domingos?"',
      context:'📅 Quieres saber el horario de trabajo de alguien.',
      words:['Does','she','work','on','Sundays','?'],
      answer:'Does she work on Sundays ?',
      exp:'✅ Estructura de pregunta: DOES + she/he/it + verbo base + ?\n"Does he play football?" ✓\n"Does it cost a lot?" ✓',
    },
    {
      type:'choice', difficulty:2,
      q:'"The bank ___ at 9am." El banco abre a las 9am.',
      context:'🏦 Buscas información sobre el horario del banco.',
      opts:['open','opens','is open','opening'],
      correct:1,
      exp:'✅ "opens" = tercera persona singular\nAlgunos verbos especiales con he/she/it:\n• go → goes • do → does • have → has\n• finish → finishes • watch → watches',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja la forma correcta del verbo con su sujeto:',
      context:'👥 Diferentes personas, diferentes formas.',
      pairs:[
        {id:0,left:'I',      right:'work (sin cambios)'},
        {id:1,left:'She',    right:'works (con -s)'},
        {id:2,left:'They',   right:"don't work (negativo)"},
        {id:3,left:'He',     right:"doesn't work (negativo)"},
      ],
      exp:'✅ ¡Resumen completo del presente simple!\nAfirmativo: I work / She works\nNegativo: I don\'t / She doesn\'t\nPregunta: Do I? / Does she?',
    },
    {
      type:'fill', difficulty:3,
      q:'Completa: "She ___ not work on Sundays."',
      context:'📅 Describes el horario de trabajo de alguien.',
      hint:'Tercera persona singular + negativo.',
      answer:'does',
      exp:'✅ "does not" = "doesn\'t"\nForma completa: "She does not work."\nForma contraída: "She doesn\'t work."\n\nEn conversación, usa siempre la forma contraída.',
    },
    {
      type:'choice', difficulty:3,
      q:'"She always ___ to work by bus." Ella siempre va al trabajo en autobús.',
      context:'🚌 Describes los hábitos de transporte de tu amiga.',
      opts:['go','goes','going','is go'],
      correct:1,
      exp:'✅ "She goes" — go + she = goes\n\nLos adverbios de frecuencia van ANTES del verbo:\nalways → usually → often → sometimes → rarely → never\n"She always goes" ✓ (NO "She goes always")',
    },
  ]
},

/* ════════════════════════════════════════════
   NIVEL B1 — INTERMEDIO
════════════════════════════════════════════ */
,

{
  id:'en_a2_present_continuous',
  title:'Presente continuo: lo que pasa ahora',
  icon:'⏳',
  levelCode:'A2', levelName:'Básico', levelEmoji:'🌿',
  premium:false, xp:35, maxLives:3, globalNum:8,

  intro:{
    char:'kenjiro',
    text:'¡Kenjiro en guardia! ⚔️ El presente continuo es el tiempo para describir lo que ocurre AHORA MISMO. "I am studying English." "She is watching TV." Es uno de los más usados en conversación. ¡Domínalo hoy!',
    tip:'💡 FÓRMULA CLAVE:\nSujeto + AM/IS/ARE + verbo-ING\n"I am working" / "She is running" / "They are eating"\n\nRegla de la -ING: si el verbo termina en -e, quita la e: "write → writing", "make → making"'
  },
  outro:{
    char:'kenjiro',
    text:'¡Presente continuo: completado! ⚔️ Ahora mismo estás LEYENDO estas palabras, APRENDIENDO inglés y PROGRESANDO en Drakón. Describe lo que haces usando "I am + verbo-ING". ¡Funciona!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'"She ___ TV right now." Ella está viendo televisión ahora mismo.',
      context:'📺 Llamas a tu amiga y te dice que está ocupada.',
      opts:['watch','is watching','watches','watched'],
      correct:1,
      exp:'"is watching" = presente continuo (acción EN ESTE MOMENTO)\n\nFórmula: he/she/it + IS + verbo-ING\n"She is watching" ✅\n"She watches" = presente simple (hábito)\n"She is watching" = ahora mismo 📺',
    },
    {
      type:'fill', difficulty:1,
      q:'"I ___ English right now." (Estoy estudiando inglés ahora mismo.)',
      context:'📱 Le dices a alguien lo que haces en este momento.',
      hint:'I + AM + verbo-ing de "study".',
      answer:'am studying',
      exp:'"am studying" = presente continuo con "I"\n\nFórmula completa:\n• I AM + -ing\n• You/We/They ARE + -ing\n• He/She/It IS + -ing\n\n"I am studying, I am learning, I am progressing!" 🚀',
    },
    {
      type:'choice', difficulty:2,
      q:'¿Cuál es la forma -ING correcta del verbo "write"?',
      context:'✍️ Describes que alguien está escribiendo una carta.',
      opts:['writeing','writing','writting','writes'],
      correct:1,
      exp:'"writing" ✅ — cuando el verbo termina en -e, eliminas la e antes de -ing:\nwrite → writing\nmake → making\ncome → coming\nhave → having\n\n⚠️ Excepciones: be → being, see → seeing (doble vocal, no se quita nada)',
    },
    {
      type:'choice', difficulty:2,
      q:'"They ___ lunch at the moment." Están almorzando en este momento.',
      context:'🍽️ Llamas a tus compañeros y están en el comedor.',
      opts:['have','is having','are having','haves'],
      correct:2,
      exp:'"are having" — con they/we/you → ARE + -ing\n\nNota especial: "have" sí puede ser continuo cuando significa "comer/tomar":\n"having lunch" = almorzando\n"having a shower" = duchándose\n"having fun" = divirtiéndose',
    },
    {
      type:'fill', difficulty:2,
      q:'"___ you listening to me?" (¿Me estás escuchando?)',
      context:'🙄 Le preguntas a alguien que parece distraído.',
      hint:'Pregunta en presente continuo con "you".',
      answer:'Are',
      exp:'"Are you listening?" ✅\n\nPreguntas en presente continuo: ARE/IS/AM + sujeto + verbo-ING\n"Are you working?" = ¿Estás trabajando?\n"Is she coming?" = ¿Ella viene?\n"Am I interrupting?" = ¿Estoy interrumpiendo?',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja el presente simple con el continuo — ¿cuándo se usa cada uno?',
      context:'🔍 Esta diferencia es clave para sonar natural.',
      pairs:[
        {id:0, left:'"I eat breakfast every day"', right:'Hábito — Presente Simple'},
        {id:1, left:'"I am eating breakfast now"', right:'Acción en curso — Presente Continuo'},
        {id:2, left:'"She works at Google"',       right:'Hecho permanente — Presente Simple'},
        {id:3, left:'"She is working from home"',  right:'Situación temporal — Continuo'},
      ],
      exp:'Simple vs Continuo:\n✅ Uso SIMPLE para: hábitos, hechos permanentes, verdades\n✅ Uso CONTINUO para: lo que pasa ahora, situaciones temporales\n\n"I live in Madrid." (hecho permanente)\n"I am living with my parents." (temporal)',
    },
    {
      type:'order', difficulty:3,
      q:'Forma la pregunta: "¿Qué estás haciendo ahora mismo?"',
      context:'💬 Le preguntas a tu amigo qué está haciendo.',
      words:['What','are','you','doing','right','now','?'],
      answer:'What are you doing right now ?',
      exp:'"What are you doing?" = ¿Qué estás haciendo? (la más usada en inglés informal)\nRespuesta: "I am + verbo-ing + (complemento)"\n"I am watching a movie." = Estoy viendo una película.',
    },
    {
      type:'fill', difficulty:3,
      q:'"He is not ___ to music." (No está escuchando música.)',
      context:'🎵 Alguien te dice que tu amigo no está con sus auriculares.',
      hint:'Verbo "listen" en forma -ing.',
      answer:'listening',
      exp:'"is not listening" = forma negativa del presente continuo\n\nNegativo: sujeto + AM/IS/ARE + NOT + verbo-ING\n"I am not working." = No estoy trabajando.\n"She isn\'t coming." = Ella no viene.\n"They aren\'t sleeping." = No están durmiendo.',
    },
    {
      type:'choice', difficulty:3,
      q:'¿Cuál de estas frases describe algo que pasa AHORA MISMO?',
      context:'⏰ Identifica la acción del momento presente.',
      opts:[
        '"She usually drinks coffee in the morning."',
        '"She is drinking coffee right now."',
        '"She drank coffee yesterday."',
        '"She will drink coffee tomorrow."',
      ],
      correct:1,
      exp:'"She is drinking coffee right now." ✅\n\nPalabras clave del presente continuo:\n• right now = ahora mismo\n• at the moment = en este momento\n• currently = actualmente\n• today = hoy (como actividad en curso)',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia esta forma verbal — ¡fundamental en conversación!',
      context:'🗣️ La terminación -ing aparece en casi todo el presente continuo.',
      word:'working',
      phonetic:"/ˈwɜːrkɪŋ/",
      tip:'WORK-ing. La "-ing" suena como "ing" rápido, no "een-g".\nEn inglés informal, muchos nativos dicen "workin\'" (sin la g).',
    },
  ]
},

/* ══ A2: Pasado simple — verbos regulares e irregulares ═════ */
,

{
  id:'en_a2_past_simple',
  title:'Pasado simple: lo que ya ocurrió',
  icon:'⏪',
  levelCode:'A2', levelName:'Básico', levelEmoji:'🌿',
  premium:false, xp:40, maxLives:3, globalNum:9,

  intro:{
    char:'merlingo',
    text:'¡Merlingo de vuelta! 🧙 El pasado simple es para hablar de cosas que ya terminaron. "I worked yesterday." "She visited Paris." Hay verbos regulares (fáciles) e irregulares (los que hay que memorizar). ¡Los aprenderemos juntos!',
    tip:'💡 VERBOS REGULARES: solo añade -ED al final.\n"work → worked", "visit → visited", "play → played"\n\nVERBOS IRREGULARES: cambian por completo.\n"go → went", "eat → ate", "have → had", "be → was/were"\n¡Los irregulares son los más usados!'
  },
  outro:{
    char:'merlingo',
    text:'¡Pasado simple dominado! 🧙 Ahora puedes contar historias en inglés. "Yesterday I woke up, had breakfast, went to work and came back tired." Pruébalo con tu propia rutina de ayer. ¡Es más fácil de lo que crees!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'"She ___ to Paris last year." Ella fue a París el año pasado.',
      context:'✈️ Tu amiga te cuenta su viaje del año pasado.',
      opts:['go','goes','went','gone'],
      correct:2,
      exp:'"went" = pasado de "go" (verbo irregular)\n\nIrregulares clave:\ngo → went\nhave → had\nbe → was/were\neat → ate\ncome → came\n\n¡Memoriza estos primero, son los más usados!',
    },
    {
      type:'fill', difficulty:1,
      q:'"I ___ English yesterday." (Estudié inglés ayer.)',
      context:'📚 Le cuentas a alguien lo que hiciste ayer.',
      hint:'Verbo regular "study" en pasado: cambia la y por i + ed.',
      answer:'studied',
      exp:'"studied" ✅ — regla especial:\nSi el verbo termina en consonante + y → cambia y por i + ed:\nstudy → studied\ncarry → carried\ntry → tried\n\nPero: play → played (vocal antes de y, sin cambio)',
    },
    {
      type:'choice', difficulty:2,
      q:'¿Cuál es el pasado correcto de "eat"?',
      context:'🍕 Tu amigo te pregunta qué comiste en el restaurante.',
      opts:['eated','eats','ate','eaten'],
      correct:2,
      exp:'"ate" = pasado de "eat" (irregular)\n\nMás irregulares de comida y acciones cotidianas:\neat → ate\ndrink → drank\nbuy → bought\nmake → made\ntake → took',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja el verbo con su forma en pasado:',
      context:'📖 Los irregulares más importantes del inglés.',
      pairs:[
        {id:0, left:'see',   right:'saw'},
        {id:1, left:'think', right:'thought'},
        {id:2, left:'know',  right:'knew'},
        {id:3, left:'give',  right:'gave'},
      ],
      exp:'Truco: muchos irregulares siguen PATRONES:\nsee/saw, give/gave, drive/drove (vocal cambia)\nthink/thought, buy/bought, bring/brought (-ght pattern)\nknow/knew, grow/grew, blow/blew (-ew pattern)',
    },
    {
      type:'fill', difficulty:2,
      q:'"She ___ not come to the party." (Ella no vino a la fiesta.)',
      context:'🎉 Tu amiga no apareció en la fiesta.',
      hint:'Auxiliar de negación en pasado.',
      answer:'did',
      exp:'"did not come" = "didn\'t come" ✅\n\nNEGATIVO en pasado:\nSujeto + DID NOT (didn\'t) + verbo BASE\n"She didn\'t come." ✅\n"She didn\'t came." ✗ (error común)\n\n¡El verbo principal NO cambia cuando hay "did"!',
    },
    {
      type:'choice', difficulty:2,
      q:'"___ you see the film?" ¿Viste la película?',
      context:'🎬 Tu amigo te pregunta sobre una película reciente.',
      opts:['Was','Were','Did','Have'],
      correct:2,
      exp:'"Did you see the film?" ✅\n\nPREGUNTAS en pasado simple:\nDID + sujeto + verbo BASE\n"Did you eat?" = ¿Comiste?\n"Did she call?" = ¿Llamó?\n"Did they come?" = ¿Vinieron?',
    },
    {
      type:'order', difficulty:3,
      q:'Forma la frase: "Fui al supermercado ayer por la mañana."',
      context:'🛒 Cuentas lo que hiciste ayer.',
      words:['I','went','to','the','supermarket','yesterday','morning','.'],
      answer:'I went to the supermarket yesterday morning .',
      exp:'Expresiones de tiempo en pasado:\nyesterday = ayer\nlast night = anoche\nlast week = la semana pasada\nthree days ago = hace tres días\nin 2020 = en 2020\n\nEstas palabras son señales de que debes usar el PASADO SIMPLE.',
    },
    {
      type:'choice', difficulty:3,
      q:'"When I was a child, I ___ to swim." De niño, solía nadar.',
      context:'👦 Recuerdas tus actividades de la infancia.',
      opts:['used','use','uses','using'],
      correct:0,
      exp:'"used to + verbo" = solía / acostumbraba (en el pasado, ya no)\n"I used to swim." = Solía nadar (pero ya no).\n"She used to live here." = Ella vivía aquí (ya no).\n\n¡MUY común para hablar de la infancia y el pasado!',
    },
    {
      type:'fill', difficulty:3,
      q:'"She ___ born in 1995." (Ella nació en 1995.)',
      context:'📅 Describes cuándo nació tu amiga.',
      hint:'Pasado del verbo "to be" — tercera persona singular.',
      answer:'was',
      exp:'"was" = pasado de "be" (I/he/she/it)\n"were" = pasado de "be" (you/we/they)\n\n"She was born in 1995." ✅\n"They were born in the same year." ✅\n"I was happy." ✅\n"We were tired." ✅',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia el pasado de este verbo irregular clave:',
      context:'👀 El pasado de "see" — lo usarás constantemente.',
      word:'saw',
      phonetic:'/sɔː/',
      tip:'SAW rima con "jaw" (mandíbula) y "law" (ley).\nNo digas "say-oo" ni "saw-oo". Es un sonido abierto: SAW.\nPráctica: "I saw a film yesterday. I saw my friend. I saw it!"',
    },
  ]
},

/* ══ B1: Vocabulario de tecnología y trabajo remoto ═════════ */
,

{
  id:'en_a2_movement',
  title:'Preposiciones de movimiento',
  icon:'🏃',
  levelCode:'A2', levelName:'Básico', levelEmoji:'🌿',
  premium:false, xp:30, maxLives:3, globalNum:10,

  intro:{
    char:'zorrek',
    mood:'excited',
    text:'¡Zorrek en acción! ⚡ Estas preposiciones describen CÓMO y POR DÓNDE se mueven las cosas. Son esenciales para dar y entender direcciones. ¡Sin ellas, te pierdes literalmente!',
    tip:'💡 La clave: piensa en la trayectoria del movimiento.\n• ACROSS = cruzando de lado a lado\n• THROUGH = entrando y saliendo por dentro\n• ALONG = siguiendo una línea\n• INTO/OUT OF = entrando/saliendo'
  },
  outro:{
    char:'zorrek',
    mood:'proud',
    text:'¡Movimiento dominado! ⚡ Prueba describirle a alguien cómo llegar a un lugar usando "go along", "turn across", "walk through". ¡Ya hablas como un nativo dando indicaciones!'
  },

  exercises:[
    {
      type:'choice', difficulty:1,
      q:'"The dog ran ___ the road." El perro cruzó la carretera corriendo.',
      context:'🐕 El perro se escapa. ¡Cruza la carretera de un lado al otro!',
      opts:['along','into','across','through'],
      correct:2,
      exp:'✅ ACROSS = de un lado al otro, cruzando una superficie\n"Drive across the bridge" = cruzar el puente\n"Swim across the lake" = cruzar el lago nadando\n\nImagena una línea que divide dos partes: ACROSS la cruza.',
    },
    {
      type:'choice', difficulty:1,
      q:'"The train goes ___ a tunnel." El tren pasa POR DENTRO del túnel.',
      context:'🚆 El Eurotúnel entre Francia e Inglaterra.',
      opts:['across','over','through','along'],
      correct:2,
      exp:'✅ THROUGH = a través de (entrando y saliendo por el interior)\n"Walk through the door" = pasar por la puerta\n"Drive through the city" = atravesar la ciudad\n\n⚡ ACROSS cruza la superficie. THROUGH cruza el interior.',
    },
    {
      type:'fill', difficulty:1,
      q:'"They ran ___ the hill." (cuesta abajo)',
      context:'⛰️ Jack y Jill bajaron la colina corriendo.',
      hint:'Opuesto de "up".',
      answer:'down',
      exp:'✅ DOWN = hacia abajo (con movimiento)\nUP = hacia arriba\n\n"Run down the stairs" = bajar corriendo las escaleras\n"Climb up the ladder" = subir la escalera\nAmbas indican dirección del movimiento.',
    },
    {
      type:'choice', difficulty:2,
      q:'"We walked ___ the beach for two miles." Caminamos A LO LARGO de la playa.',
      context:'🏖️ Un paseo romántico junto al mar.',
      opts:['across','along','through','over'],
      correct:1,
      exp:'✅ ALONG = a lo largo de (siguiendo una línea o camino)\n"Walk along the river" = caminar a orillas del río\n"Trees along the road" = árboles a lo largo del camino\n\nALONG siempre sigue un camino o borde.',
    },
    {
      type:'choice', difficulty:2,
      q:'"The cat jumped ___ the wall." El gato saltó POR ENCIMA del muro.',
      context:'🐱 El gato escapa del jardín saltando.',
      opts:['under','through','over','along'],
      correct:2,
      exp:'✅ OVER = por encima de (movimiento de un lado al otro)\n"Jump over a fence" = saltar una valla\n"Fly over the mountains" = volar sobre las montañas\n\nOVER implica que cruzas POR ARRIBA de algo.',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja cada preposición con el movimiento que describe:',
      context:'🗺️ Cuatro formas distintas de moverse.',
      pairs:[
        {id:0, left:'INTO',    right:'Entrando al interior'},
        {id:1, left:'OUT OF',  right:'Saliendo del interior'},
        {id:2, left:'TOWARD',  right:'En dirección a'},
        {id:3, left:'AWAY FROM', right:'En dirección opuesta a'},
      ],
      exp:'✅ INTO ↔ OUT OF son opuestos perfectos\nTOWARD ↔ AWAY FROM también\n\n"She walked into the shop." (entró)\n"She walked out of the shop." (salió)\n"He ran toward the exit." (hacia)\n"She moved away from the noise." (alejándose)',
    },
    {
      type:'choice', difficulty:2,
      q:'"My pen rolled ___ the table." Mi pluma cayó de la mesa.',
      context:'✏️ La pluma rueda hasta el borde y cae.',
      opts:['onto','into','off','over'],
      correct:2,
      exp:'✅ OFF = alejándose de una superficie (con movimiento)\n"Fall off the table" = caerse de la mesa\n"Jump off the bridge" = saltar del puente\n\nOFF indica separación de una superficie.',
    },
    {
      type:'order', difficulty:3,
      q:'Ordena para dar indicaciones: "Camina a lo largo de la calle y cruza el parque"',
      context:'🗺️ Le explicas a un turista cómo llegar.',
      words:['Walk','along','the','street','and','cross','the','park','.'],
      answer:'Walk along the street and cross the park .',
      exp:'✅ Dar indicaciones en inglés:\n"Walk along…" = Camina por…\n"Turn left/right" = Dobla a la izquierda/derecha\n"Go through…" = Pasa por dentro de…\n"Cross the street" = Cruza la calle',
    },
    {
      type:'fill', difficulty:3,
      q:'"She walked ___ me and didn\'t even say hello." Pasó a mi lado sin saludar.',
      context:'😶 Tu amiga te ignoró completamente en el pasillo.',
      hint:'Pasar al lado de alguien sin detenerse.',
      answer:'past',
      exp:'✅ PAST = pasar por delante/lado de algo sin detenerse\n"Drive past the school" = pasar con el coche por la escuela\n"Walk past someone" = pasar de largo junto a alguien\n\nNo implica dirección arriba/abajo, solo pasar de largo.',
    },
    {
      type:'pronun', difficulty:2,
      q:'Pronuncia esta preposición — ¡el sonido TH es difícil para hispanohablantes!',
      context:'🎙️ El sonido más famoso del inglés que no existe en español.',
      word:'through',
      phonetic:'/θruː/',
      tip:'La "th" se pronuncia poniendo la lengua entre los dientes y soplando.\nRima con "blue", "do" y "true".\n¡No digas "troo" sin la th!',
    },
  ]
},

/* ══ B1: Vocabulario bancario ════════════════════════════════ */
,

{
  id:'en_b1_business_advertising',
  title:'Publicidad en inglés',
  icon:'📢',
  levelCode:'B1', levelName:'Intermedio', levelEmoji:'🌳',
  premium:false, xp:55, maxLives:3, globalNum:11,

  intro:{
    char:'syntinator',
    mood:'excited',
    text:'¡SYNTINATOR activado! 🤖 Esta lección es para los que quieren hablar de negocios en inglés. La publicidad tiene su propio idioma — y tú vas a aprenderlo HOY.',
    tip:'💡 Vocabulario clave antes de empezar:\n• USP = Unique Selling Proposition\n• AIDA = Attention → Interest → Desire → Action\nEstas siglas aparecen en TODA reunión de marketing internacional.'
  },
  outro:{
    char:'syntinator',
    mood:'proud',
    text:'¡Vocabulario de publicidad: CARGADO! 🤖 Ahora cuando estés en una reunión de marketing, entenderás: "What\'s the USP?", "Who\'s the target audience?", "When is prime time?" ¡Eres imparable!'
  },

  exercises:[
    {
      type:'choice', difficulty:2,
      q:'In advertising, "USP" stands for:',
      context:'🏢 Tu jefe pregunta: "What\'s our USP?" — ¿qué significa?',
      opts:['Universal Sales Plan','Unique Selling Proposition','Unified Service Protocol','User Support Page'],
      correct:1,
      exp:'✅ USP = Unique Selling Proposition\n= Lo que hace ÚNICO a tu producto vs la competencia.\n\nEjemplo: Red Bull\'s USP → "gives you wings" (da energía extrema)',
    },
    {
      type:'choice', difficulty:2,
      q:'"AIDA" in advertising represents:',
      context:'📋 La estrategia detrás de todo buen anuncio.',
      opts:['Advertising, Income, Design, Analysis','Attention, Interest, Desire, Action','Audience, Image, Display, Awareness','Appeal, Impact, Demand, Achievement'],
      correct:1,
      exp:'✅ AIDA = Attention → Interest → Desire → Action\n\nCómo funciona un buen anuncio:\n1. Te LLAMA la atención (attention)\n2. Despierta tu INTERÉS (interest)\n3. Crea un DESEO (desire)\n4. Te impulsa a ACTUAR (action) → ¡compra!',
    },
    {
      type:'fill', difficulty:2,
      q:'A paid advertisement on TV or radio is called a "___".',
      context:'📺 Ves un spot publicitario de Coca-Cola durante el partido.',
      hint:'Suena como algo "comercial".',
      answer:'commercial',
      exp:'✅ commercial = anuncio de TV/radio\nadvertisement (ad) = término general\nbillboard = valla publicitaria (afuera)\nposter = cartel\n\n"The Super Bowl commercials are famous!"',
    },
    {
      type:'choice', difficulty:2,
      q:'"Prime time" refers to:',
      context:'📡 El departamento de medios decide cuándo poner el anuncio.',
      opts:['The cheapest time to advertise','The hours with the largest TV audience','The first ad of the day','A premium type of advertisement'],
      correct:1,
      exp:'✅ Prime time = horas con mayor audiencia televisiva\nGeneralmente: 7pm – 11pm\n\n💰 Los anuncios en prime time son los MÁS CAROS — pero llegan a más gente.',
    },
    {
      type:'match', difficulty:3,
      q:'Conecta cada término con su definición:',
      context:'📚 Vocabulario esencial de publicidad.',
      pairs:[
        {id:0,left:'circulation',   right:'Copias vendidas de una revista'},
        {id:1,left:'target audience',right:'El grupo específico al que va el anuncio'},
        {id:2,left:'features',      right:'Características técnicas del producto'},
        {id:3,left:'benefits',      right:'Ventajas que el producto da al cliente'},
      ],
      exp:'✅ Features vs Benefits — distinción CLAVE:\nFeature: "batería de 5000mAh"\nBenefit: "dura todo el día sin cargar"\n\n¡Los clientes compran BENEFITS, no features!',
    },
    {
      type:'fill', difficulty:3,
      q:'To try to increase sales by publicising a product means to "___ " it.',
      context:'🚀 Tu startup va a lanzar su primer producto.',
      hint:'Rhymes with "emote".',
      answer:'promote',
      exp:'✅ to promote = promocionar / promover\npromotion = promoción (también puede ser un ascenso laboral)\n\n"We need to promote this product before the holidays."',
    },
    {
      type:'choice', difficulty:3,
      q:'A "coupon" in an advertisement is used to:',
      context:'✂️ Ves un recuadro recortable en una revista.',
      opts:['Show the price','Order goods or request samples','Contact the agency','Measure ad success'],
      correct:1,
      exp:'✅ coupon = cupón descuento o recortable\nEl cliente lo corta y envía para pedir:\n• muestras gratis (free samples)\n• descuentos (discounts)\n• información adicional\n\n¡Todavía muy usados en marketing directo!',
    },
    {
      type:'order', difficulty:3,
      q:'Ordena la oración: "El anuncio llega al público objetivo"',
      context:'🎯 Describes el éxito de una campaña.',
      words:['The','advertisement','reaches','the','target','audience','.'],
      answer:'The advertisement reaches the target audience .',
      exp:'✅ "reaches" = tercera persona singular de "reach"\n"The ad reaches millions of people."\n"Our campaign reached the target audience."',
    },
    {
      type:'choice', difficulty:3,
      q:'"The magazine has a circulation of 500,000." This means:',
      context:'📊 Evalúas dónde poner el anuncio de tu empresa.',
      opts:['500,000 people work for the magazine','500,000 copies are sold per period','It costs $500,000 to produce','500,000 ads appear in it'],
      correct:1,
      exp:'✅ circulation = tirada (número de ejemplares distribuidos)\n\n💡 A mayor circulación → más lectores → más valioso el espacio publicitario → más caro el anuncio.',
    },
    {
      type:'fill', difficulty:3,
      q:'The specific group of people an advertisement aims to reach is called the "___ ___".',
      context:'🎯 El equipo de marketing define a quién va dirigida la campaña.',
      hint:'Dos palabras: objetivo + audiencia.',
      answer:'target audience',
      exp:'✅ target audience = público objetivo\nTambién: "target market", "target demographic"\n\nEjemplo: Una app de fitness puede tener como target audience: "mujeres de 25-40 años, activas, con smartphone".',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia esta palabra clave del marketing:',
      context:'📣 La escucharás en TODA reunión internacional.',
      word:'advertisement',
      phonetic:'/ədˈvɜːtɪsmənt/',
      tip:'UK: ad-VER-tis-ment (acento 2ª sílaba)\nUS: AD-ver-tize-ment (acento 1ª sílaba)\n¡Ambas son correctas!',
    },
  ]
},

/* ──────────────────────────────────────── */
,

{
  id:'en_b1_business_employment',
  title:'Vocabulario laboral',
  icon:'💼',
  levelCode:'B1', levelName:'Intermedio', levelEmoji:'🌳',
  premium:false, xp:55, maxLives:3, globalNum:12,

  intro:{
    char:'kenjiro',
    mood:'thinking',
    text:'¿Buscas trabajo en una empresa internacional? ⚔️ Estas palabras pueden aparecer en tu entrevista, tu contrato, o tu primer día. ¡Apréndelas ANTES de que las necesites!',
    tip:'💡 Diferencia importante:\n• resign = renunciar voluntariamente\n• be dismissed / be fired = ser despedido\n• be made redundant = ser despedido por restructuración\n¡No los confundas en una entrevista!'
  },
  outro:{
    char:'kenjiro',
    mood:'excited',
    text:'¡Vocabulario laboral dominado! ⚔️ Ahora si un reclutador te habla de "salary expectations", "perks", o "growth prospects" — ¡sabrás exactamente qué responder!'
  },

  exercises:[
    {
      type:'choice', difficulty:2,
      q:'What is a "curriculum vitae" (CV)?',
      context:'📄 Vas a aplicar a tu trabajo soñado.',
      opts:['Un contrato laboral','Un documento con tu educación y experiencia','Una carta de recomendación','Un reporte de desempeño'],
      correct:1,
      exp:'✅ CV (UK) = résumé (US) = Currículum vitae\n= Documento que resume tu educación + experiencia + habilidades\n\n"I sent my CV to 10 companies." (UK)\n"I updated my résumé." (US)',
    },
    {
      type:'fill', difficulty:2,
      q:'To officially leave your job voluntarily, you "___ " from your position.',
      context:'✉️ Encontraste un trabajo mejor y quieres salir con dignidad.',
      hint:'Empieza con "re-".',
      answer:'resign',
      exp:'✅ to resign = renunciar (voluntariamente)\nresignation letter = carta de renuncia\n\n⚠️ No confundir con:\n• to retire = jubilarse (por edad)\n• to be fired = ser despedido',
    },
    {
      type:'match', difficulty:2,
      q:'¿Qué tipo de despido es cada uno?',
      context:'🏢 La empresa atraviesa momentos difíciles.',
      pairs:[
        {id:0,left:'be dismissed',       right:'Despido por mal desempeño'},
        {id:1,left:'be made redundant',  right:'Despido por restructuración'},
        {id:2,left:'be fired',           right:'Despido informal (US)'},
        {id:3,left:'resign',             right:'Salida voluntaria'},
      ],
      exp:'✅ Las distintas formas de terminar un trabajo:\n• fired / dismissed = despedido (tu culpa)\n• made redundant = tu puesto ya no existe (no es tu culpa)\n• resigned = te fuiste tú solo',
    },
    {
      type:'choice', difficulty:2,
      q:'A "perk" in a job is:',
      context:'🚗 La empresa te ofrece un coche de empresa además del sueldo.',
      opts:['El salario mensual','Un beneficio extra además del salario','El contrato laboral','El período de prueba'],
      correct:1,
      exp:'✅ perk = beneficio extra (informal, de "perquisite")\n\nEjemplos de perks comunes:\n• company car (coche de empresa)\n• free meals (comida gratis)\n• gym membership (gym pagado)\n• work from home (trabajo remoto)',
    },
    {
      type:'fill', difficulty:2,
      q:'A fixed, regular monthly payment from employer to employee is called a "___".',
      context:'💰 Recibes tu pago el mismo día cada mes.',
      hint:'Empieza con "sal-".',
      answer:'salary',
      exp:'✅ salary = salario mensual fijo\nwage = pago por horas (trabajo manual)\npay = término general\n\n"I earn a good salary." (tengo buen sueldo)\n"What are your salary expectations?" (pregunta típica en entrevistas)',
    },
    {
      type:'choice', difficulty:3,
      q:'"Maternity leave" is when:',
      context:'👶 Una empleada acaba de tener un bebé.',
      opts:['Un empleado está de vacaciones','Una mujer se ausenta por tener un bebé','Un empleado está en capacitación','Un empleado trabaja desde casa'],
      correct:1,
      exp:'✅ maternity leave = licencia de maternidad\npaternity leave = licencia de paternidad (para el padre)\nparental leave = licencia parental (término general)\n\n"She\'s on maternity leave for 3 months."',
    },
    {
      type:'order', difficulty:3,
      q:'Forma la frase: "Recibió un bono por buen desempeño"',
      context:'🏆 Tu colega fue reconocido este año.',
      words:['She','received','a','bonus','for','good','performance','.'],
      answer:'She received a bonus for good performance .',
      exp:'✅ bonus = bono / gratificación\nChristmas bonus = aguinaldo\nperformance bonus = bono por desempeño\n\n"The company paid everyone a bonus." ✓',
    },
    {
      type:'choice', difficulty:3,
      q:'"Job prospects" means:',
      context:'🔭 Evalúas si aceptar una oferta de trabajo.',
      opts:['El salario inicial','Las posibilidades de crecimiento y ascenso','Los beneficios del seguro médico','El horario de trabajo'],
      correct:1,
      exp:'✅ prospects = perspectivas / oportunidades de futuro\n\n"This job has good prospects." = tiene posibilidades de crecer\n"What are the promotion prospects?" = ¿cuándo puedo ascender?\n\n¡Pregunta esto en TODA entrevista!',
    },
    {
      type:'fill', difficulty:3,
      q:'To look for and hire new employees is to "___ " them.',
      context:'🔍 La empresa abre 10 nuevas plazas de trabajo.',
      hint:'Empieza con "rec-".',
      answer:'recruit',
      exp:'✅ to recruit = reclutar / contratar\nrecruitment = reclutamiento\nrecruitment agency = agencia de empleo\n\n"We need to recruit 10 new engineers."',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia esta palabra laboral clave:',
      context:'💼 La escucharás en TODA entrevista de trabajo.',
      word:'recruitment',
      phonetic:'/rɪˈkruːtmənt/',
      tip:'re-CROOT-ment. La "ui" suena como "oo" de "zoo". ¡Sin "k" al final!',
    },
  ]
},

/* ════════════════════════════════════════════
   NIVEL B2 — INTERMEDIO ALTO
════════════════════════════════════════════ */
,

{
  id:'en_b1_banking',
  title:'Inglés bancario y financiero',
  icon:'🏦',
  levelCode:'B1', levelName:'Intermedio', levelEmoji:'🌳',
  premium:false, xp:55, maxLives:3, globalNum:13,

  intro:{
    char:'marshal',
    mood:'thinking',
    text:'¡Marshal al habla! 🦸 El dinero habla en todos los idiomas — pero en inglés tiene su vocabulario específico. Estos términos aparecen en cuentas bancarias, tarjetas, préstamos y contratos. ¡Domínalos y nunca firmes algo que no entiendas!',
    tip:'💡 Términos UK vs US a recordar:\n• cheque (UK) = check (US)\n• current account (UK) = checking account (US)\n• deposit account (UK) = savings account (US)\nEl inglés bancario varía según el país.'
  },
  outro:{
    char:'marshal',
    mood:'proud',
    text:'¡Terminología bancaria archivada! 🦸 Ahora cuando abras una cuenta, pidas un préstamo o leas un extracto en inglés, sabrás exactamente qué significa cada término. ¡Tu billetera te lo agradecerá!'
  },

  exercises:[
    {
      type:'choice', difficulty:2,
      q:'"What is the balance of my account?" means:',
      context:'📱 Revisas tu banca en línea después de varios gastos.',
      opts:['¿Cuándo fue creada mi cuenta?','¿Cuál es la diferencia entre créditos y débitos?','¿Cuánto interés pago?','¿Cuándo vence mi tarjeta?'],
      correct:1,
      exp:'✅ balance = saldo\n= La diferencia entre lo que entra (créditos) y lo que sale (débitos)\n\n"Your current balance is $450." = Tu saldo actual es $450.\n"Positive balance" = cuenta con fondos\n"Negative balance" = en números rojos',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja cada término bancario con su significado:',
      context:'🏦 Vocabulario esencial para manejar tu cuenta.',
      pairs:[
        {id:0, left:'debit',    right:'Dinero que SALE de tu cuenta'},
        {id:1, left:'credit',   right:'Dinero que ENTRA a tu cuenta'},
        {id:2, left:'overdraft',right:'Saldo negativo (gastaste más de lo que tienes)'},
        {id:3, left:'interest', right:'Costo del dinero prestado'},
      ],
      exp:'✅ Regla mnemónica:\nDEBIT = dinero que "deja" tu cuenta\nCREDIT = dinero que "crece" en tu cuenta\n\nUn OVERDRAFT es cuando tu balance cae por debajo de cero.',
    },
    {
      type:'fill', difficulty:2,
      q:'An instruction to your bank to make regular automatic payments is called a "standing ___".',
      context:'🏠 Tu renta se paga automáticamente cada mes sin que hagas nada.',
      hint:'Piensa en una "orden" que permanece.',
      answer:'order',
      exp:'✅ standing order = orden permanente / domiciliación fija\n\nDiferencia clave:\n• Standing order: TÚ fijas el monto (no varía)\n• Direct debit: el cobrador puede cambiar el monto\n\n"Set up a standing order for rent" = domiciliar el pago del alquiler',
    },
    {
      type:'choice', difficulty:2,
      q:'An "overdraft" occurs when:',
      context:'😰 Revisas tu cuenta y el saldo aparece en rojo.',
      opts:['Ahorras demasiado dinero','Gastas más de lo que tienes en cuenta','Pagas demasiado interés','Tu tarjeta vence'],
      correct:1,
      exp:'✅ overdraft = sobregiro\n= Cuando retiras más dinero del que tienes disponible\n\n"I went into overdraft this month." = Este mes entré en números rojos.\n\nLos bancos cobran comisiones por esto. ¡Evítalo!',
    },
    {
      type:'choice', difficulty:3,
      q:'What is the difference between a "current account" and a "deposit account"?',
      context:'💼 El banquero te explica los tipos de cuenta disponibles.',
      opts:[
        'Son exactamente lo mismo',
        'Current: para uso diario con retiros libres. Deposit: genera intereses pero con restricciones',
        'Deposit: para uso diario. Current: genera intereses',
        'Current account solo es para empresas',
      ],
      correct:1,
      exp:'✅ Current account (UK) = checking account (US)\n→ Para uso diario: retiros libres, pagos, tarjeta débito\n\nDeposit account (UK) = savings account (US)\n→ Para ahorrar: genera intereses pero puede tener restricciones de retiro\n\n¡Elige según tu objetivo!',
    },
    {
      type:'fill', difficulty:3,
      q:'"To ___ money" means to take it out of your bank account.',
      context:'🏧 Necesitas efectivo y vas al cajero automático.',
      hint:'La acción opuesta a "deposit".',
      answer:'withdraw',
      exp:'✅ to withdraw = retirar (dinero)\nwithdrawal = retiro (sustantivo)\n\n"I need to withdraw $200." = Necesito retirar $200.\n\nForma irregular: withdraw → withdrew → withdrawn\n\nATM (UK: cash dispenser) = cajero automático',
    },
    {
      type:'choice', difficulty:3,
      q:'"Bank charges" are:',
      context:'📋 Revisas tu estado de cuenta y ves un cargo extra.',
      opts:['El saldo de tu cuenta','El interés que ganas en ahorros','Las comisiones que cobra el banco por sus servicios','El límite de tu tarjeta de crédito'],
      correct:2,
      exp:'✅ bank charges = comisiones / cargos bancarios\n= Lo que el banco cobra por mantener tu cuenta o servicios adicionales\n\nEjemplos:\n• Monthly fee = cuota mensual\n• ATM fee = cargo por usar cajero de otro banco\n• Overdraft fee = cargo por sobregiro',
    },
    {
      type:'order', difficulty:3,
      q:'Ordena la frase para pedir el saldo de tu cuenta:',
      context:'📞 Llamas a tu banco para saber tu saldo.',
      words:['What','is','the','balance','of','my','account','?'],
      answer:'What is the balance of my account ?',
      exp:'✅ Frases útiles en el banco:\n"What is my current balance?" = ¿Cuál es mi saldo actual?\n"I\'d like to check my balance." = Quisiera revisar mi saldo.\n"I need a bank statement." = Necesito un estado de cuenta.',
    },
    {
      type:'fill', difficulty:3,
      q:'A "paying-in ___" is a small document recording money you deposit in your account.',
      context:'🏦 Depositas efectivo en ventanilla y el cajero te pide este documento.',
      hint:'Hoja pequeña de papel.',
      answer:'slip',
      exp:'✅ paying-in slip = ficha de depósito (UK)\n= El pequeño formulario que llenas cuando depositas efectivo en ventanilla\n\nEn US: "deposit slip"\n"Please fill out a paying-in slip." = Por favor llene la ficha de depósito.',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia este término bancario clave:',
      context:'🏧 Lo dirás en cada visita al banco o cajero.',
      word:'withdrawal',
      phonetic:'/wɪðˈdrɔːəl/',
      tip:'with-DRAW-al. La "th" es suave (como "with").\n¡Son 3 sílabas! No digas "with-draw-ALL" con acento al final.',
    },
  ]
},

/* ══ B1: Contratos y lenguaje legal ═════════════════════════ */
,

{
  id:'en_b1_contracts',
  title:'Contratos y lenguaje legal',
  icon:'⚖️',
  levelCode:'B1', levelName:'Intermedio', levelEmoji:'🌳',
  premium:false, xp:60, maxLives:3, globalNum:14,

  intro:{
    char:'kenjiro',
    mood:'thinking',
    text:'⚔️ Los contratos en inglés están llenos de palabras arcaicas y frases técnicas. Un error de comprensión puede costarte caro. Hoy te enseño a leer contratos como un abogado — ¡sin serlo!',
    tip:'💡 Palabras "herein-" en contratos:\n• herein = en este documento\n• hereinafter = en adelante (en este documento)\n• hereto = a este documento\nSuenan anticuadas pero aparecen en TODO contrato formal en inglés.'
  },
  outro:{
    char:'kenjiro',
    mood:'proud',
    text:'¡Lenguaje legal archivado! ⚔️ La próxima vez que veas un contrato en inglés, no entres en pánico. Busca las cláusulas, identifica las partes, y entiende las condiciones. ¡Ahora puedes!'
  },

  exercises:[
    {
      type:'choice', difficulty:2,
      q:'"Null and void" in a contract means:',
      context:'📄 El abogado te dice que la cláusula 5 es "null and void".',
      opts:['Válido y vinculante','Sin fuerza legal; el contrato es inválido','Pendiente de aprobación','Sujeto a revisión posterior'],
      correct:1,
      exp:'✅ null and void = nulo y sin efecto\n= El contrato o cláusula NO tiene validez legal\n\n"This agreement shall be null and void if not signed by both parties."\n= Este acuerdo será nulo si no lo firman ambas partes.',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja cada término legal con su definición:',
      context:'📚 Vocabulario fundamental de contratos.',
      pairs:[
        {id:0, left:'clause',       right:'Párrafo específico de un contrato'},
        {id:1, left:'party',        right:'Una de las personas u organizaciones en el acuerdo'},
        {id:2, left:'terms',        right:'Las condiciones del acuerdo'},
        {id:3, left:'arbitration',  right:'Resolución de disputas por un tercero neutral'},
      ],
      exp:'✅ Estructura básica de un contrato:\n• PARTIES: quiénes firman\n• TERMS & CONDITIONS: qué se acuerda\n• CLAUSES: cada punto específico\n• ARBITRATION: cómo se resuelven disputas',
    },
    {
      type:'fill', difficulty:2,
      q:'"Force ___" refers to unforeseeable events that excuse a party from fulfilling a contract.',
      context:'🌪️ Un huracán impidió la entrega de la mercancía.',
      hint:'Del francés: "fuerza mayor".',
      answer:'majeure',
      exp:'✅ Force majeure = fuerza mayor\n= Eventos imprevisibles fuera del control de las partes\n\nEjemplos: terremotos, guerras, pandemias, huelgas generales\n\n"Due to force majeure, the contract is suspended."\n¡Crucial en contratos internacionales!',
    },
    {
      type:'choice', difficulty:3,
      q:'"Whereas" at the beginning of a contract is used to:',
      context:'📋 Las primeras palabras del contrato dicen "WHEREAS the parties agree..."',
      opts:['Cerrar el contrato','Introducir los antecedentes y el contexto del acuerdo','Señalar una cláusula de pago','Indicar la fecha de vencimiento'],
      correct:1,
      exp:'✅ WHEREAS = considerando que / dado que\n= Introduce los ANTECEDENTES del contrato\n\n"WHEREAS Party A is a software company…"\n"WHEREAS Party B wishes to license the software…"\n\nSiempre aparece al inicio para establecer el contexto.',
    },
    {
      type:'choice', difficulty:3,
      q:'"Hereinafter referred to as..." in a contract means:',
      context:'📄 El contrato menciona "XYZ Corp., hereinafter referred to as \'the Company\'".',
      opts:[
        'Anteriormente mencionado como',
        'En adelante denominado como (abreviación para el resto del documento)',
        'Adjunto a este contrato como',
        'En contradicción con',
      ],
      correct:1,
      exp:'✅ hereinafter referred to as = en adelante denominado como\n\nEjemplo: "John Smith, hereinafter referred to as \'the Contractor\'"\n= John Smith, en adelante "el Contratista"\n\nEvita repetir el nombre completo en todo el documento.',
    },
    {
      type:'fill', difficulty:3,
      q:'To specify something as an essential condition is to "___ " it.',
      context:'📝 El contrato especifica exactamente las condiciones de entrega.',
      hint:'Empieza con "stip-".',
      answer:'stipulate',
      exp:'✅ to stipulate = estipular / especificar como condición esencial\nstipulation = estipulación\n\n"The contract stipulates that payment must be made within 30 days."\n= El contrato estipula que el pago debe hacerse en 30 días.',
    },
    {
      type:'choice', difficulty:3,
      q:'"Without prejudice" written on a legal letter means:',
      context:'✉️ El abogado envía una oferta de acuerdo marcada "WITHOUT PREJUDICE".',
      opts:[
        'Con total responsabilidad legal',
        'No puede usarse como evidencia en juicio; permite negociar libremente',
        'Con la aprobación del juez',
        'Acuerdo final y completamente vinculante',
      ],
      correct:1,
      exp:'✅ Without prejudice = sin perjuicio\n= Las cartas marcadas así NO pueden presentarse como evidencia en un tribunal\n\nPermite a las partes negociar y hacer ofertas sin que eso implique admitir responsabilidad.\n\n¡Muy común en negociaciones previas a juicio!',
    },
    {
      type:'order', difficulty:4,
      q:'Ordena la cláusula legal: "Este acuerdo entrará en vigor en la fecha de firma"',
      context:'📜 Cláusula de entrada en vigor del contrato.',
      words:['This','agreement','shall','come','into','force','on','the','date','of','signing','.'],
      answer:'This agreement shall come into force on the date of signing .',
      exp:'✅ "shall" en contratos = obligación formal (diferente al "will" cotidiano)\n"come into force" = entrar en vigor\n\nFrases de contrato frecuentes:\n"shall be binding" = será vinculante\n"shall be terminated" = será rescindido\n"shall not exceed" = no deberá exceder',
    },
    {
      type:'fill', difficulty:4,
      q:'A settlement of a dispute by a person chosen by both parties is called "___ ".',
      context:'🤝 Las dos empresas evitan ir a juicio acordando una resolución externa.',
      hint:'Empieza con "arb-".',
      answer:'arbitration',
      exp:'✅ arbitration = arbitraje\n= Resolución de disputas sin ir a los tribunales\n\nVentajas del arbitraje:\n• Más rápido que un juicio\n• Más privado\n• Árbitro elegido por ambas partes\n\n"Disputes shall be settled by arbitration." = Las disputas se resolverán mediante arbitraje.',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia este término legal — lo escucharás en todo contrato internacional:',
      context:'⚖️ 4 sílabas, acento en la 3ª.',
      word:'arbitration',
      phonetic:'/ˌɑːbɪˈtreɪʃən/',
      tip:'ar-bi-TRAY-shun. Acento en "TRAY".\nNo dudes en practicarlo: es una de las palabras más largas en contratos.',
    },
  ]
},

/* ══ B2: Marketing estratégico ═══════════════════════════════ */
,

{
  id:'en_b1_tech_remote',
  title:'Tecnología y trabajo remoto',
  icon:'💻',
  levelCode:'B1', levelName:'Intermedio', levelEmoji:'🌳',
  premium:false, xp:55, maxLives:3, globalNum:15,

  intro:{
    char:'syntinator',
    text:'¡SYNTINATOR online! 🤖 El trabajo remoto llegó para quedarse, y el 80% de las empresas tech operan en inglés. "Join the call", "share your screen", "I\'ll ping you later" — este vocabulario es TU PASAPORTE al trabajo global.',
    tip:'💡 Frases que escucharás en TODA videollamada de trabajo:\n• "Can you hear me?" = ¿Me escuchas?\n• "You\'re on mute." = Estás silenciado.\n• "Can you share your screen?" = ¿Puedes compartir pantalla?\n• "Let\'s take this offline." = Hablemos aparte.'
  },
  outro:{
    char:'syntinator',
    text:'¡Tech vocabulary loaded! 🤖 Ahora cuando tu jefe diga "let\'s hop on a call" o "I\'ll send you a Slack", entenderás al 100%. ¡Bienvenido al trabajo del futuro!'
  },

  exercises:[
    {
      type:'choice', difficulty:2,
      q:'"You\'re on mute" means:',
      context:'📹 Estás en una videollamada y nadie te escucha.',
      opts:['Tu micrófono está encendido','Tu micrófono está silenciado','Tu cámara está apagada','Tu conexión es mala'],
      correct:1,
      exp:'"You\'re on mute." = Estás silenciado/a.\n\nVocabulario de videollamadas:\n"unmute yourself" = deja de estar silenciado\n"mute yourself" = silenciate\n"turn on/off your camera" = encender/apagar cámara\n"can you hear me?" = ¿me escuchas?',
    },
    {
      type:'fill', difficulty:2,
      q:'"I\'ll ___ you the document by email." (Te enviaré el documento por email.)',
      context:'📧 Terminas una reunión y te comprometes a enviar algo.',
      hint:'Acción de mandar algo digitalmente.',
      answer:'send',
      exp:'"send" = enviar\n"I\'ll send you…" = Te mandaré…\n\nFrases útiles de email en el trabajo:\n"Please find attached…" = Adjunto encontrarás…\n"I\'m following up on…" = Hago seguimiento de…\n"As per my last email…" = Como mencioné en mi último correo…',
    },
    {
      type:'match', difficulty:2,
      q:'Empareja el término tech con su significado:',
      context:'🖥️ Vocabulario esencial del trabajo digital.',
      pairs:[
        {id:0, left:'deadline',   right:'Fecha límite de entrega'},
        {id:1, left:'bandwidth',  right:'Capacidad de trabajo disponible'},
        {id:2, left:'pipeline',   right:'Proyectos o tareas en proceso'},
        {id:3, left:'deliverable',right:'Producto o resultado a entregar'},
      ],
      exp:'"bandwidth" en tecnología = ancho de banda\nPero en trabajo = capacidad de la persona:\n"I don\'t have the bandwidth for that." = No tengo capacidad para eso ahora.\n\nEstos términos vienen del tech pero se usan en cualquier oficina moderna.',
    },
    {
      type:'choice', difficulty:3,
      q:'"Let\'s take this offline." In a meeting context, this means:',
      context:'🤝 Tu jefe dice esto durante una discusión larga en la reunión.',
      opts:[
        'Apagar las computadoras',
        'Hablar de este tema en privado, fuera de la reunión',
        'Continuar el debate en línea',
        'Cancelar la reunión',
      ],
      correct:1,
      exp:'"Take this offline" = Hablemos de esto aparte, fuera de la reunión principal.\n\nOtras frases de reunión:\n"Let\'s circle back to that." = Volvamos a eso más tarde.\n"Can we park that?" = ¿Podemos dejarlo para después?\n"Let\'s action this." = Pongamos esto en marcha.',
    },
    {
      type:'fill', difficulty:3,
      q:'"Can you ___ your screen so everyone can see?" (¿Puedes compartir tu pantalla?)',
      context:'💻 El facilitador de la reunión te pide que muestres tu presentación.',
      hint:'Verbo que significa compartir visualmente.',
      answer:'share',
      exp:'"share your screen" = compartir pantalla\n\nVocabulario de presentación virtual:\n"share my screen" = compartir mi pantalla\n"stop sharing" = dejar de compartir\n"pin the video" = fijar el video\n"spotlight" = destacar a alguien',
    },
    {
      type:'choice', difficulty:3,
      q:'"I\'ll ping you later." In a work context, this means:',
      context:'💬 Tu colega te dice esto al terminar la reunión.',
      opts:[
        'Te llamará por teléfono',
        'Te enviará un mensaje rápido (Slack, Teams, WhatsApp)',
        'Irá a tu escritorio a verte',
        'Te enviará un email formal',
      ],
      correct:1,
      exp:'"ping" = mensaje rápido e informal en apps de trabajo\n"I\'ll ping you on Slack." = Te mando un Slack.\n\nOtros verbos digitales comunes:\n"drop me a line" = mándame un mensaje\n"shoot me an email" = mándame un email\n"reach out" = contactar',
    },
    {
      type:'order', difficulty:3,
      q:'Forma la frase de trabajo remoto más common: "Estoy trabajando desde casa hoy."',
      context:'🏠 Le avisas a tu jefe tu ubicación de trabajo.',
      words:['I','am','working','from','home','today','.'],
      answer:'I am working from home today .',
      exp:'"work from home" (WFH) = trabajar desde casa\n"remote work" = trabajo remoto\n"hybrid work" = trabajo híbrido\n"on-site" = presencial\n"flexible hours" = horario flexible\n\n¡Vocabulario esencial en el mundo laboral actual!',
    },
    {
      type:'choice', difficulty:3,
      q:'"The project is on track." means:',
      context:'📊 El cliente pregunta cómo va el proyecto.',
      opts:[
        'El proyecto está retrasado',
        'El proyecto va según lo planeado',
        'El proyecto fue cancelado',
        'El proyecto necesita más recursos',
      ],
      correct:1,
      exp:'"on track" = según lo planeado, sin problemas\n"off track" = fuera de lo planeado, con problemas\n"behind schedule" = atrasado\n"ahead of schedule" = adelantado\n"on time" = puntual, a tiempo\n\n"Great, the project is on track!" ✅',
    },
    {
      type:'fill', difficulty:4,
      q:'"We need to ___ on the key objectives before the launch." (Alinearnos en los objetivos clave)',
      context:'🎯 Reunión de planificación antes del lanzamiento del producto.',
      hint:'Verbo que significa estar en sincronía / alineados.',
      answer:'align',
      exp:'"align on" = ponernos de acuerdo / alinearnos sobre\n"align the team" = alinear al equipo\n\nOtro vocabulario de estrategia:\n"synergy" = sinergia\n"stakeholder" = parte interesada\n"leverage" = aprovechar/potenciar\n"scalable" = escalable',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia este término tech que escucharás en toda empresa moderna:',
      context:'📊 Un concepto clave en proyectos de cualquier industria.',
      word:'deadline',
      phonetic:"/ˈdedlaɪn/",
      tip:'DEAD-line. "dead" suena como "ded" (no "deed").\nLa "i" en "line" es larga: "layn".\nDEAD-layn. ¡Practica 3 veces!',
    },
  ]
},

/* ══ B2: Inglés avanzado — modales y condicionales ══════════ */
,

{
  id:'en_b2_business_meetings',
  title:'Reuniones y presentaciones',
  icon:'🎤',
  levelCode:'B2', levelName:'Intermedio Alto', levelEmoji:'🌲',
  premium:true, xp:70, maxLives:3, globalNum:16,

  intro:{
    char:'syntinator',
    mood:'thinking',
    text:'¡SYNTINATOR PRO en línea! 🤖 Las reuniones en inglés tienen su propio vocabulario y protocolo. Con este conocimiento, no solo PARTICIPARÁS — LIDERARÁS.',
    tip:'💡 Las frases de señalización son TU ARMA SECRETA en presentaciones:\n• "To start with…" → comienzo\n• "Turning now to…" → cambio de tema\n• "In conclusion…" → cierre\n¡Úsalas y parecerás un nativo!'
  },
  outro:{
    char:'syntinator',
    mood:'proud',
    text:'¡Vocabulario de reuniones: PROCESADO! 🤖 La próxima vez que entres a una junta en inglés, no entrarás a escuchar — entrarás a DOMINAR. "AOB? That\'s me." 🚀'
  },

  exercises:[
    {
      type:'choice', difficulty:3,
      q:'"AOB" at the end of a meeting agenda stands for:',
      context:'📋 El último punto de toda agenda profesional.',
      opts:['Any Official Business','Any Other Business','Annual Operations Board','Agenda of Business'],
      correct:1,
      exp:'✅ AOB = Any Other Business\n= Último punto del orden del día donde se pueden mencionar temas no planeados.\n\nEjemplo: "Under AOB, I\'d like to mention the team lunch."',
    },
    {
      type:'choice', difficulty:3,
      q:'The "minutes" of a meeting are:',
      context:'📝 Al terminar la junta, la secretaria entrega un documento.',
      opts:['La duración en minutos','El registro escrito oficial de la reunión','La agenda previa','La lista de asistentes'],
      correct:1,
      exp:'✅ minutes = actas de reunión (registro oficial)\n\nFrases importantes:\n"Who will take the minutes?" = ¿Quién redacta las actas?\n"According to the minutes…" = Según las actas...',
    },
    {
      type:'fill', difficulty:3,
      q:'When all members agree completely, the decision is "___".',
      context:'🗳️ Todos levantan la mano en favor de la propuesta.',
      hint:'"Una voz, una decisión."',
      answer:'unanimous',
      exp:'✅ unanimous = unánime (100% de acuerdo)\nconsensus = consenso (acuerdo general, pero no necesariamente 100%)\n\n"The vote was unanimous." vs "We reached a consensus."',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja cada frase con su función en una presentación:',
      context:'🎤 Tú das la presentación trimestral ante el directorio.',
      pairs:[
        {id:0,left:'"To start with…"',    right:'Señala el inicio de un tema'},
        {id:1,left:'"Turning now to…"',   right:'Señala cambio de tema'},
        {id:2,left:'"In conclusion…"',    right:'Señala el cierre'},
        {id:3,left:'"For example…"',      right:'Introduce un ejemplo'},
      ],
      exp:'✅ Estas frases se llaman "signposting" o "signalling"\n= Señales de tráfico de tu presentación\n\nHacen que tu audiencia sepa exactamente en qué parte estás. ¡Úsalas SIEMPRE!',
    },
    {
      type:'choice', difficulty:3,
      q:'"A casting vote" is used when:',
      context:'🗳️ La votación quedó 5-5. ¿Qué pasa ahora?',
      opts:['Todos votan en secreto','El presidente desempata','Se cancela la votación','Se repite la votación'],
      correct:1,
      exp:'✅ casting vote = voto de desempate (del presidente)\n\n"The chairman used his casting vote to approve the merger."\n\nEs el poder DEFINITIVO en una votación empatada.',
    },
    {
      type:'fill', difficulty:3,
      q:'A written programme listing all topics for a meeting is called an "___".',
      context:'📅 Te enviaron el documento previo a la reunión.',
      hint:'"or-den del día" en inglés.',
      answer:'agenda',
      exp:'✅ agenda = orden del día\n\n"The first item on the agenda is…" = El primer punto es…\n"Matters arising" = Temas derivados de la última reunión\n"AOB" = Cualquier otro asunto',
    },
    {
      type:'order', difficulty:4,
      q:'Ordena la frase de apertura de una presentación:',
      context:'🎤 Comienzas tu presentación ante 50 personas.',
      words:['To','start','with',',','I\'d','like','to','cover','the','main','findings','.'],
      answer:"To start with , I'd like to cover the main findings .",
      exp:'✅ "To start with, I\'d like to…" — apertura profesional perfecta\n\nOtras aperturas:\n"Good morning, ladies and gentlemen…"\n"Today I\'m going to talk about…"\n"The purpose of this presentation is…"',
    },
    {
      type:'choice', difficulty:4,
      q:'"Body language" in presentations includes:',
      context:'🧠 El coach de comunicación te da este consejo.',
      opts:['Lo que dices con palabras','Expresiones, gestos y postura corporal','El tono y volumen','El contenido de las diapositivas'],
      correct:1,
      exp:'✅ body language = lenguaje corporal\n= Comunicación NO verbal\n\nEstudios dicen que el 55% del impacto viene del cuerpo,\nel 38% del tono de voz, y solo el 7% de las palabras.\n\n¡Tu cuerpo habla más que tus palabras!',
    },
    {
      type:'fill', difficulty:4,
      q:'A "proxy ___" is a vote cast by one person on behalf of another.',
      context:'🗳️ No puedes asistir a la junta de accionistas.',
      hint:'La acción de elegir/votar.',
      answer:'vote',
      exp:'✅ proxy vote = voto delegado / por poder\n= Alguien vota EN TU NOMBRE cuando no puedes asistir.\n\nMuy común en juntas de accionistas (shareholders\' meetings).',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia esta frase de cierre de presentación:',
      context:'🎤 La última cosa que dices antes de Q&A.',
      word:'In conclusion',
      phonetic:'/ɪn kənˈkluːʒən/',
      tip:'in con-CLU-sion. Acento en "clu". Úsala SOLO al cerrar — no la digas varias veces.',
    },
  ]
},


/* ══ A2: Preposiciones de movimiento ═════════════════════════ */
,

{
  id:'en_b2_marketing',
  title:'Marketing estratégico en inglés',
  icon:'📊',
  levelCode:'B2', levelName:'Intermedio Alto', levelEmoji:'🌲',
  premium:true, xp:75, maxLives:3, globalNum:17,

  intro:{
    char:'syntinator',
    mood:'excited',
    text:'¡SYNTINATOR PRO activado! 🤖 El marketing moderno se habla en inglés. SWOT, USP, KPI, ROI — estas siglas aparecen en TODA junta de marketing internacional. Hoy las dominas. ¡Descarga iniciada!',
    tip:'💡 Las 4 Ps del Marketing en inglés:\n• Product (Producto)\n• Price (Precio)\n• Place (Plaza/Distribución)\n• Promotion (Promoción)\nConocidas globalmente como "The Marketing Mix".'
  },
  outro:{
    char:'syntinator',
    mood:'proud',
    text:'¡Marketing Mix procesado! 🤖 Ahora cuando entres a una junta de marketing y escuches "What\'s the USP?", "Show me the SWOT", "What\'s our target segment?" — responderás con total confianza. ¡Eres imparable!'
  },

  exercises:[
    {
      type:'choice', difficulty:3,
      q:'"SWOT analysis" stands for:',
      context:'📊 Tu jefe pide un análisis SWOT antes del lanzamiento.',
      opts:[
        'Sales, Workflow, Operations, Targets',
        'Strengths, Weaknesses, Opportunities, Threats',
        'Strategy, Writing, Objectives, Timeline',
        'Supply, Wholesale, Output, Trade',
      ],
      correct:1,
      exp:'✅ SWOT = Strengths · Weaknesses · Opportunities · Threats\n= Fortalezas · Debilidades · Oportunidades · Amenazas\n\nFortalezas y Debilidades = INTERNAS (puedes controlarlas)\nOportunidades y Amenazas = EXTERNAS (del mercado)\n\n¡Herramienta estratégica fundamental en todo el mundo!',
    },
    {
      type:'fill', difficulty:3,
      q:'The process of introducing a new product to the market for the first time is called a product "___ ".',
      context:'🚀 Apple presenta el nuevo iPhone ante miles de fans.',
      hint:'Lo que hace un cohete al despegar.',
      answer:'launch',
      exp:'✅ product launch = lanzamiento de producto\nto launch = lanzar\n\n"The product launch was a huge success." = El lanzamiento fue un gran éxito.\n"Launch event" = evento de lanzamiento\n"Launch date" = fecha de lanzamiento',
    },
    {
      type:'choice', difficulty:3,
      q:'"Market research" is conducted to:',
      context:'📋 Antes de lanzar el producto, el equipo hace encuestas.',
      opts:[
        'Producir el producto',
        'Estudiar las necesidades y preferencias de los consumidores',
        'Calcular el costo de producción',
        'Contratar al equipo de ventas',
      ],
      correct:1,
      exp:'✅ market research = investigación de mercado\n\nMétodos comunes:\n• Surveys (encuestas)\n• Focus groups (grupos focales)\n• Interviews (entrevistas)\n• Data analysis (análisis de datos)\n\n"We need market research before we launch." = Necesitamos investigación de mercado antes del lanzamiento.',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja cada término de marketing con su definición:',
      context:'💼 Vocabulario esencial para cualquier reunión de marketing.',
      pairs:[
        {id:0, left:'brand',          right:'La identidad y reputación de un producto/empresa'},
        {id:1, left:'consumer',       right:'La persona que usa el producto'},
        {id:2, left:'point of sale',  right:'El lugar donde se vende el producto al público'},
        {id:3, left:'public relations', right:'Gestión de la imagen pública de la empresa'},
      ],
      exp:'✅ Distinción importante:\nConsumer = quien USA el producto\nCustomer = quien COMPRA el producto\n(A veces son la misma persona, a veces no)\n\n"Parents are the customers; children are the consumers" (juguetes)',
    },
    {
      type:'fill', difficulty:3,
      q:'A special symbol or design that officially represents a product is called a "___ ".',
      context:'™ El símbolo que ves junto al nombre de una empresa.',
      hint:'"Trade" + "mark".',
      answer:'trademark',
      exp:'✅ trademark (™) = marca comercial\nregistered trademark (®) = marca registrada oficialmente\n\n"Nike\'s trademark is the swoosh."\n= La marca registrada de Nike es el símbolo swoosh.\n\nProtege la identidad visual de tu empresa legalmente.',
    },
    {
      type:'choice', difficulty:4,
      q:'The "total product" concept includes:',
      context:'📦 El gerente explica qué es realmente lo que venden.',
      opts:[
        'Solo el objeto físico que el cliente compra',
        'Nombre, empaque, instrucciones, garantía, confiabilidad y servicio post-venta',
        'Solo el precio y los canales de distribución',
        'Solo la publicidad y el branding',
      ],
      correct:1,
      exp:'✅ total product = producto total\n= Todo lo que rodea al producto, no solo el objeto físico\n\nIncluye:\n• Core product: el beneficio central\n• Actual product: nombre, diseño, calidad, empaque\n• Augmented product: garantía, servicio post-venta, soporte\n\n¡Los clientes compran la experiencia completa!',
    },
    {
      type:'order', difficulty:4,
      q:'Ordena la pregunta de marketing más importante:',
      context:'🎯 La pregunta que debe responder todo plan de marketing.',
      words:['Who','is','our','target','audience','?'],
      answer:'Who is our target audience ?',
      exp:'✅ target audience = público objetivo\n\nOtras preguntas clave en marketing:\n"What is our USP?" = ¿Cuál es nuestra propuesta de valor única?\n"What is our market share?" = ¿Cuál es nuestra cuota de mercado?\n"What\'s the ROI?" = ¿Cuál es el retorno de inversión?',
    },
    {
      type:'choice', difficulty:4,
      q:'"Distribution" in the marketing mix refers to:',
      context:'🚚 El producto ya está listo. Ahora, ¿cómo llega al cliente?',
      opts:[
        'El precio del producto',
        'El proceso de hacer llegar el producto al consumidor final',
        'El diseño y características del producto',
        'La publicidad en medios digitales',
      ],
      correct:1,
      exp:'✅ Distribution = Plaza (la "P" de Place en el Marketing Mix)\n= Cómo y dónde el producto llega al consumidor\n\nCanales de distribución:\n• Direct: marca → cliente\n• Wholesale: marca → mayorista → minorista → cliente\n• Online: e-commerce, marketplaces\n\nLa distribución puede ser TAN importante como el producto.',
    },
    {
      type:'fill', difficulty:4,
      q:'A company that pays to support an event in exchange for advertising visibility is called a "___ ".',
      context:'⚽ El jersey del equipo lleva el logo de una empresa.',
      hint:'Esta empresa "patrocina" el evento.',
      answer:'sponsor',
      exp:'✅ sponsor = patrocinador\nto sponsor = patrocinar\nsponsorship = patrocinio\n\n"Coca-Cola is the official sponsor of the World Cup."\n= Coca-Cola es el patrocinador oficial de la Copa del Mundo.\n\nA cambio: visibilidad de marca ante millones de personas.',
    },
    {
      type:'pronun', difficulty:3,
      q:'Pronuncia este término — aparece en TODA presentación de marketing:',
      context:'📣 4 sílabas, con un ritmo muy específico.',
      word:'distribution',
      phonetic:'/ˌdɪstrɪˈbjuːʃən/',
      tip:'dis-tri-BU-tion. Acento en "BU".\n4 sílabas: dis · tri · bu · tion\n¡No se dice "dis-tri-bu-CIÓN" con acento español al final!',
    },
  ]
},


/* ════════════════════════════════════════════════════════════
   NUEVAS LECCIONES — A1 / A2 / B1 / B2
════════════════════════════════════════════════════════════ */

/* ══ A1: Colores, formas y objetos cotidianos ════════════════ */
,

{
  id:'en_b2_modals_conditionals',
  title:'Modales y condicionales: matices avanzados',
  icon:'🧩',
  levelCode:'B2', levelName:'Intermedio Alto', levelEmoji:'🌲',
  premium:true, xp:80, maxLives:3, globalNum:18,

  intro:{
    char:'kenjiro',
    text:'¡Kenjiro, nivel élite! ⚔️ Los modales y condicionales son lo que separa el inglés básico del avanzado. "Could you...", "I should have...", "If I were you..." Son la diferencia entre sonar correcto y sonar NATIVO.',
    tip:'💡 MODALES más usados:\n• can/could = poder (capacidad o petición cortés)\n• will/would = voluntad o condicional\n• should = deber / recomendación\n• must/have to = obligación\n• might/may = posibilidad'
  },
  outro:{
    char:'kenjiro',
    text:'¡Modales y condicionales: maestría alcanzada! ⚔️ Ahora puedes hacer peticiones educadas ("Could you..."), dar consejos ("You should..."), y hablar de situaciones hipotéticas ("If I were you..."). ¡Eres casi nativo!'
  },

  exercises:[
    {
      type:'choice', difficulty:3,
      q:'"___ you help me with this?" — petición muy educada y formal.',
      context:'🤝 Necesitas pedirle un favor a tu jefe.',
      opts:['Can','Will','Could','Must'],
      correct:2,
      exp:'"Could you...?" = ¿Podría/podrías...? (más educado)\n"Can you...?" = ¿Puedes...? (informal)\n"Would you mind...?" = ¿Le/te importaría...? (muy formal)\n\nEscala de formalidad:\ncould > would you mind > can',
    },
    {
      type:'fill', difficulty:3,
      q:'"You ___ see a doctor. That cough sounds bad." (Deberías ver a un médico.)',
      context:'🏥 Tu amigo lleva días con tos y no ha ido al médico.',
      hint:'Modal de recomendación fuerte.',
      answer:'should',
      exp:'"should" = deberías (recomendación)\n"must" = debes (obligación fuerte)\n"have to" = tienes que (obligación práctica)\n\n"You should see a doctor." = Consejo\n"You must see a doctor." = Es urgente/obligatorio\n"You have to see a doctor before traveling." = Requisito',
    },
    {
      type:'choice', difficulty:3,
      q:'"If I ___ you, I would apologize." — Si yo fuera tú, me disculparía.',
      context:'💬 Le das un consejo a alguien en una situación difícil.',
      opts:['am','was','were','be'],
      correct:2,
      exp:'"If I were you" = Si yo fuera tú (condicional 2, hipotético)\n\nUsamos "WERE" para TODOS los sujetos en condicionales hipotéticos:\n"If I were rich..." = Si fuera rico...\n"If she were here..." = Si ella estuviera aquí...\n"If he were taller..." = Si él fuera más alto...',
    },
    {
      type:'match', difficulty:3,
      q:'Empareja el modal con su función principal:',
      context:'🎯 Cada modal tiene un matiz diferente.',
      pairs:[
        {id:0, left:'must',   right:'Obligación fuerte / prohibición'},
        {id:1, left:'might',  right:'Posibilidad incierta (50%)'},
        {id:2, left:'should', right:'Consejo o recomendación'},
        {id:3, left:'would',  right:'Condición hipotética'},
      ],
      exp:'MUST: "You must wear a seatbelt." (ley)\nMIGHT: "It might rain." (quizás)\nSHOULD: "You should sleep more." (consejo)\nWOULD: "I would travel if I could." (hipotético)',
    },
    {
      type:'fill', difficulty:4,
      q:'"I ___ have studied more for the exam." (Debí haber estudiado más.)',
      context:'😞 Saliste mal en el examen y te arrepientes.',
      hint:'Modal de arrepentimiento: should + have + participio.',
      answer:'should',
      exp:'"should have + participio" = debí haber... (arrepentimiento)\n\nModales en pasado (arrepentimiento y especulación):\n"should have done" = debí haber hecho\n"could have done" = podría haber hecho\n"would have done" = habría hecho\n"must have been" = debió haber sido',
    },
    {
      type:'choice', difficulty:4,
      q:'"It ___ be John — he\'s the only one with a key." Debe ser John.',
      context:'🔑 Escuchas la puerta abrirse y deduces quién es.',
      opts:['should','might','must','could'],
      correct:2,
      exp:'"must be" = debe ser (deducción lógica muy segura, +90%)\n"might be" = podría ser (posibilidad incierta, ~50%)\n"could be" = puede ser (varias posibilidades)\n"should be" = debería ser (expectativa)\n\n"That must be him." = Seguro que es él. (deducción)',
    },
    {
      type:'order', difficulty:4,
      q:'Forma el condicional 3: "Si hubiera estudiado más, habría aprobado."',
      context:'📚 Reflexionas sobre una oportunidad perdida en el pasado.',
      words:['If','I','had','studied','more',',','I','would','have','passed','.'],
      answer:'If I had studied more , I would have passed .',
      exp:'"If + had + participio, would have + participio" = Condicional 3 (hipotético en pasado, imposible de cambiar)\n\n"If I had studied more, I would have passed." ✅\n= Si hubiera estudiado más, habría aprobado.\n(No estudié → No aprobé → Ya no puedo cambiar)',
    },
    {
      type:'choice', difficulty:4,
      q:'"You ___ smoke here." Está prohibido fumar aquí.',
      context:'🚭 Estás en un lugar donde fumar está prohibido.',
      opts:['should not','might not','must not','would not'],
      correct:2,
      exp:'"must not" (mustn\'t) = está prohibido, no se permite\n"should not" = no deberías (consejo)\n"might not" = puede que no (posibilidad)\n\n"You must not smoke here." = Prohibido fumar aquí. (regla estricta)\n"You shouldn\'t eat so much." = No deberías comer tanto. (consejo)',
    },
    {
      type:'fill', difficulty:4,
      q:'"She ___ be at home by now — she left 2 hours ago." (Ya debería estar en casa.)',
      context:'⏰ Calculas si tu amiga ya llegó a su destino.',
      hint:'Modal de expectativa lógica basada en tiempo.',
      answer:'should',
      exp:'"should be" = debería estar (expectativa basada en lógica o tiempo)\n\nComparativa:\n"She should be home." = Era de esperar que esté en casa. (expectativa)\n"She must be home." = Seguro que está en casa. (deducción muy segura)\n"She might be home." = Quizás está en casa. (incertidumbre)',
    },
    {
      type:'pronun', difficulty:4,
      q:'Pronuncia este modal perfectamente — ¡la "ould" es una trampa!',
      context:'🎯 Fundamental para hacer peticiones corteses en inglés profesional.',
      word:'could',
      phonetic:'/kʊd/',
      tip:'"could" rima con "good" y "wood".\nLa "L" es MUDA — no la pronuncies.\nNo digas "cool-d". Es solo "CUD" (como "kud").\n"Could you help me?" = ¿Podrías ayudarme?',
    },
  ]
}

]; }