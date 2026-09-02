/* ═══════════════════════════════════════════════════════════
   js/lessons-data/en.js — Banco de lecciones: INGLÉS (EN)
   ═══════════════════════════════════════════════════════════
   Ver js/lessons-data/README.md para el formato y cómo agregar
   lecciones nuevas. Se registra en LESSON_BANKS.EN; lessons.js
   lo consume con el mismo motor genérico usado por todos los
   idiomas.
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.EN = [
  {
    id:"a1_greetings", level:"A1", title:"Saludos y presentaciones", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en inglés.",
    study: {
      vocab: [
        ["Good morning / afternoon / evening", "Buenos días / tardes / noches", "Según la hora del día."],
        ["Hello / Hi", "Hola", "\"Hi\" es más informal que \"Hello\"."],
        ["Goodbye / Bye", "Adiós / Chau", "\"Bye\" es informal."],
        ["My name is...", "Me llamo..."],
        ["Nice to meet you!", "¡Mucho gusto!", "Se usa al conocer a alguien por primera vez."],
        ["How are you?", "¿Cómo estás?", "Respuesta típica: \"I'm fine, thank you!\""]
      ],
      grammar: [
        ["El verbo \"to be\" (am / is / are)", "Es el verbo \"ser/estar\". Se conjuga distinto según el sujeto: I am, you are, he/she/it is, we/you/they are.", "I am Carlos. → She is from Spain. → They are students."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Buenos días\" en inglés?", ["Good morning","Good night","Good evening","Goodbye"], 0, "\"Good morning\" se usa desde que amanece hasta el mediodía. \"Good afternoon\" es de 12 a 6pm, y \"Good evening\" de 6pm en adelante.", "☀️ Son las 9 de la mañana. Llegas a la oficina y ves a un compañero."],
      ["mcq", "Alguien te dice \"How are you?\". ¿Cuál es la respuesta más común?", ["I'm fine, thank you!","I am a student","My name is María","See you later"], 0, "\"I'm fine, thank you!\" es la respuesta estándar. También puedes decir \"I'm good, thanks!\" o \"Not bad, thanks!\"", "💬 Te encuentras a un conocido en la calle."],
      ["fill", "Completa la presentación: \"Hi! ___ name is Carlos. I ___ from Mexico.\"", ["My / am","I / is","Your / are","His / am"], 0, "Para hablar de ti mismo usas \"My\" (mi) y \"am\" (primera persona del verbo to be). → \"My name is Carlos. I am from Mexico.\""],
      ["translate", "Traduce al inglés: \"Mucho gusto en conocerte.\"", ["Nice to meet you!","How old are you?","Where are you from?","See you tomorrow!"], 0, "\"Nice to meet you!\" es la frase estándar cuando conoces a alguien. También se dice \"Pleased to meet you!\" en contextos más formales."],
      ["mcq", "¿Qué significa \"What's your name?\"", ["¿Cómo te llamas?","¿De dónde eres?","¿Cuántos años tienes?","¿Dónde vives?"], 0, "\"What's your name?\" = \"¿Cómo te llamas?\". Respuesta: \"My name is ___\" o simplemente \"I'm ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena las palabras: [am / I / teacher / a]", ["I am a teacher","A I am teacher","Teacher am I a","Am I a teacher"], 0, "En inglés el orden es: Sujeto + Verbo + Complemento. → \"I am a teacher.\" (Yo soy un/a profesor/a.)"],
      ["mcq", "¿Cómo se dice \"adiós\" de forma informal en inglés?", ["Bye!","Hello!","Sorry!","Please!"], 0, "\"Bye!\" es informal y muy común. También puedes decir \"See you!\", \"See you later!\", \"Take care!\" o \"Catch you later!\"", "👋 Te despides de un amigo al final del día."],
      ["fill", "\"___ are you?\" — \"I'm 25 years old.\"", ["How old","How many","What age","Who"], 0, "\"How old are you?\" = ¿Cuántos años tienes? Respuesta: \"I'm [número] years old.\" No olvides \"years old\" al final."],
      ["translate", "Traduce: \"¿De dónde eres?\"", ["Where are you from?","How are you?","What do you do?","Who are you?"], 0, "\"Where are you from?\" = ¿De dónde eres? Respuesta: \"I'm from [país/ciudad].\" Por ejemplo: \"I'm from Spain.\""],
      ["mcq", "Tu jefe entra a la reunión. ¿Cuál es el saludo más apropiado?", ["Good afternoon!","Hey!","What's up?","Yo!"], 0, "\"Good afternoon!\" es formal y apropiado para las tardes (12pm–6pm). En contextos informales con amigos puedes decir \"Hey!\" o \"What's up?\"", "🏢 Contexto formal, son las 3 de la tarde."],
      ["fill", "\"Nice to meet you!\" — \"Nice to meet ___, too!\"", ["you","me","him","them"], 0, "La respuesta correcta es \"Nice to meet you, too!\" — repites \"you\" porque te refieres a la persona que tienes enfrente."],
      ["arrange", "Ordena: [from / I / Mexico / am]", ["I am from Mexico","Mexico am I from","From Mexico I am","Am I from Mexico"], 0, "\"I am from Mexico.\" — Sujeto (I) + Verbo (am) + Complemento (from Mexico). En inglés el sujeto siempre va primero en oraciones afirmativas."],
    ]
  },
  {
    id:"a1_numbers_colors", level:"A1", title:"Números, colores y objetos", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 100, colores básicos y objetos cotidianos.",
    study: {
      vocab: [
        ["one, two, three... twenty", "uno, dos, tres... veinte", "13-19 terminan en \"-teen\"."],
        ["red, blue, green, yellow", "rojo, azul, verde, amarillo"],
        ["white, black", "blanco, negro"],
        ["a pen, a pencil, a notebook", "un bolígrafo, un lápiz, un cuaderno"],
        ["the table, the chair", "la mesa, la silla", "\"The\" = artículo definido."]
      ],
      grammar: [
        ["El adjetivo va ANTES del sustantivo", "A diferencia del español, en inglés el color/adjetivo siempre se coloca delante del sustantivo que describe.", "a red car (un coche rojo) — NO \"a car red\"."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en inglés?", ["Fifteen","Fifty","Five","Fiveteen"], 0, "15 = fifteen. Ojo: 50 = fifty. Los números del 13 al 19 terminan en \"-teen\": thirteen (13), fourteen (14), fifteen (15)..."],
      ["mcq", "¿Qué color es \"red\"?", ["Rojo","Azul","Verde","Amarillo"], 0, "Red = rojo. Otros colores básicos: blue (azul), green (verde), yellow (amarillo), white (blanco), black (negro).", "🍎 Piensa en una manzana madura."],
      ["translate", "Traduce: \"Hay tres sillas azules en la sala.\"", ["There are three blue chairs in the living room.","There is three blue chair in the living room.","There are three chairs blue in the living room.","Is three blue chairs in the living room."], 0, "\"There are\" (hay — plural), \"three\" (tres), \"blue chairs\" (sillas azules — el adjetivo va ANTES del sustantivo en inglés), \"in the living room\" (en la sala)."],
      ["fill", "\"How ___ books do you have?\" — \"I have five books.\"", ["many","much","old","big"], 0, "\"How many\" se usa con cosas que se pueden contar (libros, personas, objetos). \"How much\" se usa con cosas incontables (agua, dinero, tiempo)."],
      ["mcq", "¿Qué significa \"a pen\"?", ["un bolígrafo","un lápiz","un cuaderno","una regla"], 0, "\"A pen\" = un bolígrafo/pluma. \"A pencil\" = un lápiz. \"A notebook\" = un cuaderno. \"A ruler\" = una regla.", "✏️ Estás en clase y necesitas escribir algo."],
      ["mcq", "¿Cómo se dice \"la mesa\" en inglés?", ["The table","The chair","The desk","The door"], 0, "\"The table\" = la mesa. \"The chair\" = la silla. \"The desk\" = el escritorio. \"The door\" = la puerta. \"The\" es el artículo definido en inglés."],
      ["arrange", "Ordena: [car / have / red / a / I]", ["I have a red car","I have a car red","Red car I have a","A red I have car"], 0, "\"I have a red car.\" — En inglés el adjetivo (red) siempre va ANTES del sustantivo (car). No como en español: \"un coche ROJO\" → en inglés: \"a RED car\"."],
      ["fill", "\"___ is your favorite color?\" — \"My favorite color is blue.\"", ["What","How","Where","Who"], 0, "\"What is your favorite color?\" = ¿Cuál es tu color favorito? \"What\" (qué/cuál) se usa para preguntar sobre cosas, colores, nombres, etc."],
      ["mcq", "¿Cuánto es \"twenty + thirty\" en inglés?", ["Fifty","Forty","Sixty","Seventy"], 0, "20 (twenty) + 30 (thirty) = 50 (fifty). Recuerda: 40 = forty, 60 = sixty, 70 = seventy, 80 = eighty, 90 = ninety."],
      ["translate", "Traduce: \"El cielo es azul y el sol es amarillo.\"", ["The sky is blue and the sun is yellow.","The sky is yellow and the sun is blue.","Sky is blue and sun is yellow.","The sky are blue and the sun are yellow."], 0, "\"The sky is blue\" — usamos \"is\" (singular). \"The sun is yellow\" — también singular. Los adjetivos no cambian de forma en inglés (no hay masculino/femenino)."],
    ]
  },
  {
    id:"a1_daily_routine", level:"A1", title:"Rutina diaria", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche.",
    study: {
      vocab: [
        ["wake up", "despertarse", "Phrasal verb."],
        ["get up", "levantarse"],
        ["have breakfast/lunch/dinner", "desayunar/almorzar/cenar"],
        ["go to work / go to bed", "ir al trabajo / irse a dormir"],
        ["every day", "todos los días"]
      ],
      grammar: [
        ["Presente simple para rutinas", "Se usa para hábitos y rutinas. Con \"he/she/it\" el verbo lleva \"-s\" al final.", "I wake up at 7. → She wakes up at 7."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Me despierto a las 7\"?", ["I wake up at 7","I woke up at 7","I wake at 7 up","I am wake up at 7"], 0, "\"I wake up at 7.\" — \"wake up\" es un phrasal verb que significa despertar(se). El presente simple sin \"s\" al final porque el sujeto es \"I\"."],
      ["fill", "\"Every morning I ___ breakfast at home.\"", ["have","has","am having","to have"], 0, "Con \"I\" usamos \"have\" (no \"has\"). \"Has\" va con he/she/it. → \"I have breakfast\" = desayuno. Otros verbos de rutina: eat, drink, go, take."],
      ["mcq", "¿Qué significa \"I go to work by bus\"?", ["Voy al trabajo en autobús","Trabajo en un autobús","El autobús va al trabajo","Voy a casa en autobús"], 0, "\"I go to work by bus\" = Voy al trabajo en autobús. \"By + transporte\": by bus, by car, by train, by subway/metro. A pie = on foot.", "🚌 Describes cómo llegas al trabajo."],
      ["arrange", "Ordena: [at / I / usually / lunch / 1pm / have]", ["I usually have lunch at 1pm","I have usually lunch at 1pm","Usually I have at 1pm lunch","I lunch have usually at 1pm"], 0, "\"I usually have lunch at 1pm.\" — Los adverbios de frecuencia (usually, always, often, never) van ANTES del verbo principal pero DESPUÉS del verbo \"to be\"."],
      ["translate", "Traduce: \"Me ducho por las mañanas.\"", ["I take a shower in the morning.","I take a bath in the morning.","I shower to the morning.","In the morning I am showering."], 0, "\"I take a shower\" = me ducho. \"I take a bath\" = me baño (en bañera). \"In the morning\" = por las mañanas. Recuerda: en inglés americano se dice \"take a shower\", en British también \"have a shower\"."],
      ["mcq", "¿Cuál es la forma correcta para decir tu horario?", ["I finish work at 6 o'clock","I finish work in 6 o'clock","I finish work on 6 o'clock","I finish work at the 6"], 0, "Para horas usamos la preposición \"at\": at 6 o'clock, at noon, at midnight, at 8:30. \"In\" se usa para períodos: in the morning, in the afternoon. \"On\" para días: on Monday.", "📅 Te preguntan a qué hora terminas de trabajar."],
      ["fill", "\"After dinner, I ___ TV for an hour.\"", ["watch","see","look","view"], 0, "\"Watch TV\" = ver la televisión. En inglés: \"watch\" para TV/películas/deportes en directo, \"see\" para películas en el cine, \"look at\" para observar algo estático."],
      ["mcq", "¿Qué significa \"I go to bed early on weekdays\"?", ["Me acuesto temprano entre semana","Me levanto temprano entre semana","Trabajo temprano entre semana","Como temprano entre semana"], 0, "\"Go to bed\" = acostarse. \"Early\" = temprano. \"Weekdays\" = días entre semana (lunes a viernes). \"Weekend\" = fin de semana."],
      ["translate", "Traduce: \"Los sábados duermo hasta tarde.\"", ["On Saturdays I sleep late.","On Saturday I sleep until late.","In Saturdays I sleep late.","Saturdays I sleeping late."], 0, "\"On Saturdays\" (los sábados — usamos \"on\" con días). \"I sleep late\" = duermo hasta tarde. También correcto: \"I sleep in on Saturdays\" (phrasal verb coloquial)."],
      ["arrange", "Ordena: [never / I / coffee / drink]", ["I never drink coffee","Never I drink coffee","I drink never coffee","I drink coffee never"], 0, "\"I never drink coffee.\" — \"Never\" (nunca) es un adverbio de frecuencia. Va ANTES del verbo principal. Frecuencia: always (100%) > usually > often > sometimes > rarely > never (0%)."],
      ["mcq", "¿Qué frase describe mejor esta imagen? 🧑‍💻 [persona trabajando en computadora]", ["He is working on his computer","He works on his computer always","He worked on computer","He is work on his computer"], 0, "\"He is working\" = present continuous (estar haciendo algo AHORA). Se forma con: am/is/are + verbo-ING. Se usa para acciones que ocurren en este momento."],
      ["fill", "\"___ the evening, I read books or listen to music.\"", ["In","At","On","By"], 0, "\"In the evening\" = por las tardes/noches. Las preposiciones de tiempo: IN the morning/afternoon/evening, AT night/noon/midnight, ON Monday/weekends."],
    ]
  },
  {
    id:"a1_food_drink", level:"A1", title:"Comida y restaurantes", emoji:"🍽️", xp:35,
    description:"Pide comida, habla de lo que te gusta y maneja un menú en inglés.",
    study: {
      vocab: [
        ["menu", "menú"],
        ["I would like...", "Quisiera...", "Forma cortés de pedir algo."],
        ["the bill, please", "la cuenta, por favor"],
        ["waiter / waitress", "mesero / mesera"],
        ["delicious", "delicioso"]
      ],
      grammar: [
        ["\"Would like\" para pedidos corteses", "\"Would like\" es más formal/cortés que \"want\" al pedir algo en un restaurante.", "I would like a coffee, please. (No: \"I want a coffee\" — suena brusco.)"]
      ]
    },
    ex:[
      ["mcq", "Estás en un restaurante. ¿Cómo pides la cuenta?", ["Can I have the bill, please?","Can I have the menu, please?","I want to pay now!","Give me the money!"], 0, "\"Can I have the bill, please?\" = ¿Me puede traer la cuenta? En EE.UU. también se dice \"check\" en vez de \"bill\". Siempre añade \"please\" para sonar educado.", "🍽️ Ya terminaste de comer y quieres pagar."],
      ["fill", "\"I ___ like some water, please.\" (pedir amablemente)", ["would","will","am","can"], 0, "\"I would like\" = me gustaría / quisiera. Es más educado que \"I want\". Forma corta: \"I'd like some water, please.\" Úsalo siempre en restaurantes y tiendas."],
      ["translate", "Traduce: \"¿Cuál es el plato del día?\"", ["What's the dish of the day?","What's the meal today?","What is today special?","Which dish is today?"], 0, "\"What's the dish of the day?\" o también \"What's today's special?\" — ambas son correctas y muy usadas en restaurantes de países angloparlantes."],
      ["mcq", "¿Qué significa \"I'm a vegetarian. I don't eat meat.\"?", ["Soy vegetariano. No como carne.","Me gusta la carne. Como mucha.","Soy vegetariano. No como verduras.","No soy vegetariano. Como carne."], 0, "\"I'm a vegetarian\" = soy vegetariano/a. \"I don't eat meat\" = no como carne. \"Don't\" = do not, la negación en presente simple con I/you/we/they."],
      ["mcq", "¿Cómo se pregunta si hay opciones sin gluten?", ["Do you have gluten-free options?","Have you gluten-free food?","Is there no gluten?","You have options without gluten?"], 0, "\"Do you have...?\" es la forma correcta de preguntar en presente simple. También puedes decir \"Is there anything gluten-free on the menu?\"", "🌾 Tienes intolerancia al gluten."],
      ["arrange", "Ordena: [spicy / like / food / I / don't]", ["I don't like spicy food","I like don't spicy food","Don't I like spicy food","I don't spicy like food"], 0, "\"I don't like spicy food.\" — Negación: I + don't + like + objeto. Recuerda que en inglés el adjetivo (spicy) va antes del sustantivo (food)."],
      ["fill", "\"For dessert, I'll ___ the chocolate cake.\"", ["have","take","eat","want"], 0, "En restaurantes es muy común decir \"I'll have the...\" para pedir algo. \"I'll have the chocolate cake\" suena natural y educado. \"I want\" suena más brusco."],
      ["mcq", "El mesero pregunta: \"How would you like your steak?\" ¿Qué está preguntando?", ["¿Cómo quieres el filete (término de cocción)?","¿Te gustó el filete?","¿Quieres pedir un filete?","¿Cuántos filetes quieres?"], 0, "Pregunta por el punto de cocción: rare (rojo/jugoso), medium rare, medium, well done (bien cocido). Muy importante saberlo en restaurantes angloparlantes."],
      ["translate", "Traduce: \"Quisiera una mesa para dos personas, por favor.\"", ["I'd like a table for two, please.","I want a table for two people, please.","Give me a table for two, please.","Can I have two tables, please?"], 0, "\"I'd like a table for two, please.\" — \"I'd like\" (I would like) es la forma más educada y natural de pedir. \"A table for two\" = una mesa para dos."],
      ["fill", "\"Excuse me, this soup is ___. Can I have a fresh one?\" (la sopa está fría)", ["cold","cool","hot","warm"], 0, "\"Cold\" = frío (temperatura baja, incómodo). \"Cool\" = fresco/agradablemente frío. \"Hot\" = caliente. \"Warm\" = tibio/cálido. Si la sopa no está bien, dices \"it's cold\"."],
      ["mcq", "¿Cómo dejas propina y dices que la comida estuvo deliciosa?", ["\"The food was delicious! Keep the change.\"","\"Food good. Here money.\"","\"I liked the food. Give change.\"","\"Delicious! No change needed.\""], 0, "\"The food was delicious!\" = ¡La comida estuvo deliciosa! \"Keep the change\" = quédese con el cambio (al dejar propina). Muy natural y educado.", "😋 Acabas de comer en un restaurante en Londres."],
      ["translate", "Traduce: \"¿Puedo ver la carta de vinos?\"", ["Can I see the wine list?","I want to see wine card?","Can I look the wine list?","Give me the wine list?"], 0, "\"Can I see the wine list?\" — \"see\" es correcto aquí. También: \"Could I have a look at the wine list?\" (más formal). \"Wine list\" = carta de vinos."],
    ]
  },
  {
    id:"a2_past_simple", level:"A2", title:"Pasado simple: contar experiencias", emoji:"📅", xp:40,
    description:"Aprende a hablar de lo que hiciste ayer, la semana pasada y en el pasado.",
    study: {
      vocab: [
        ["yesterday, last week, last year", "ayer, la semana pasada, el año pasado"],
        ["go → went", "ir → fui/fue", "Verbo irregular."],
        ["see → saw", "ver → vi/vio", "Verbo irregular."],
        ["work → worked", "trabajar → trabajé/trabajó", "Verbo regular: +ed."]
      ],
      grammar: [
        ["Pasado simple", "Verbos regulares añaden \"-ed\". Los irregulares cambian de forma y hay que memorizarlos. Para negativo/pregunta se usa \"did\".", "I worked yesterday. / I went to Paris. / Did you see her?"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Ayer fui al supermercado\"?", ["Yesterday I went to the supermarket.","Yesterday I go to the supermarket.","Yesterday I gone to the supermarket.","Yesterday I goed to the supermarket."], 0, "\"Go\" es irregular: go → went. Verbos irregulares comunes: go→went, buy→bought, eat→ate, see→saw, have→had. ¡Son los más usados en conversación!"],
      ["fill", "\"Last night I ___ a great movie on Netflix.\"", ["watched","watch","watching","have watched"], 0, "\"Watched\" es el pasado simple de \"watch\" (verbo regular: +ed). \"Last night\" nos indica que es pasado. Verbos regulares: watch→watched, play→played, work→worked."],
      ["translate", "Traduce: \"No salí de casa el fin de semana pasado.\"", ["I didn't go out last weekend.","I don't go out last weekend.","I not went out last weekend.","I didn't went out last weekend."], 0, "Negación en pasado simple: didn't + verbo en BASE (infinitivo sin \"to\"). ¡Importante! Después de \"didn't\" el verbo vuelve a su forma base: \"didn't go\" (NO \"didn't went\")."],
      ["mcq", "Tu amigo te pregunta: \"Did you enjoy the concert?\" ¿Cómo respondes que sí?", ["Yes, I did! It was amazing!","Yes, I enjoyed.","Yes, I do.","Yes, it did."], 0, "En pasado simple, las respuestas cortas usan \"did/didn't\": \"Yes, I did!\" / \"No, I didn't.\" Añadir \"It was amazing!\" hace la respuesta más natural."],
      ["arrange", "Ordena: [did / you / where / go / last / summer?]", ["Where did you go last summer?","Where you did go last summer?","Where did you went last summer?","Did you where go last summer?"], 0, "Preguntas en pasado: Palabra interrogativa + did + sujeto + verbo base. → \"Where did you go?\" El verbo después de \"did\" siempre es la forma base (go, not went)."],
      ["fill", "\"She ___ (buy) a new dress for the party.\"", ["bought","buyed","buy","was buying"], 0, "\"Buy\" es irregular: buy → bought. Más irregulares esenciales: think→thought, bring→brought, teach→taught, catch→caught."],
      ["translate", "Traduce: \"¿Cuándo llegaste a Madrid?\"", ["When did you arrive in Madrid?","When you arrived in Madrid?","When did you arrived in Madrid?","Since when you arrive in Madrid?"], 0, "\"When did you arrive?\" — preposición \"in\" con ciudades y países: arrive IN Madrid, arrive IN Spain. \"Arrive AT\" se usa con lugares específicos: arrive AT the airport."],
      ["mcq", "¿Cuál frase está correctamente escrita en pasado?", ["We had a great time at the party.","We have a great time at the party.","We haved a great time at the party.","We did have great time at the party."], 0, "\"Have\" → \"had\" (irregular). \"We had a great time\" = lo pasamos genial / nos divertimos mucho. Una frase muy útil para hablar de experiencias pasadas."],
      ["fill", "\"___ you call me last night? I didn't hear my phone.\"", ["Did","Do","Were","Have"], 0, "Preguntas en pasado simple: Did + sujeto + verbo base. \"Did you call...?\" = ¿Me llamaste...? Respuesta: \"Yes, I did.\" / \"No, I didn't.\""],
      ["mcq", "Estás contando tus vacaciones. ¿Cuál frase es correcta?", ["I went to Cancún and stayed at a beautiful hotel.","I go to Cancún and stay at a beautiful hotel.","I went to Cancún and I stay at a beautiful hotel.","I was go to Cancún and stay at a beautiful hotel."], 0, "Cuando describes una secuencia de eventos pasados, todos los verbos van en pasado: \"went... stayed...\" Las dos acciones ocurrieron en el mismo viaje pasado.", "🏖️ Vacaciones en Cancún, México."],
      ["arrange", "Ordena: [didn't / she / yesterday / work]", ["She didn't work yesterday.","She work didn't yesterday.","Yesterday she didn't worked.","Didn't she work yesterday"], 0, "\"She didn't work yesterday.\" — Negación: sujeto + didn't + verbo base. El adverbio de tiempo (yesterday) va al final. ¡No cambies \"work\" a \"worked\" después de didn't!"],
      ["translate", "Traduce: \"El año pasado aprendí mucho inglés.\"", ["Last year I learned a lot of English.","Last year I learn a lot of English.","The last year I learned much English.","Last year I did learned a lot of English."], 0, "\"Last year\" (el año pasado) → pasado simple. \"A lot of\" = mucho/a (con sustantivos contables e incontables). \"Much\" sólo se usa en negativas/preguntas: \"I didn't learn much.\""],
    ]
  },
  {
    id:"a2_shopping", level:"A2", title:"De compras", emoji:"🛍️", xp:40,
    description:"Compra ropa, pide tallas, pregunta precios y devuelve productos.",
    study: {
      vocab: [
        ["size (small/medium/large)", "talla (chica/mediana/grande)"],
        ["try on", "probarse (ropa)"],
        ["price / expensive / cheap", "precio / caro / barato"],
        ["refund / receipt", "reembolso / recibo"]
      ],
      grammar: [
        ["Comparativos", "Adjetivos cortos añaden \"-er\" (+than). Adjetivos largos usan \"more...than\".", "This shirt is cheaper than that one. / This jacket is more expensive than that one."]
      ]
    },
    ex:[
      ["mcq", "Estás en una tienda de ropa. ¿Cómo preguntas si tienen tu talla?", ["Do you have this in a medium?","Have you this in medium size?","Is there this in medium?","Can I have this medium?"], 0, "\"Do you have this in a medium/large/small?\" es la pregunta estándar. Las tallas en inglés: XS, S (small), M (medium), L (large), XL, XXL.", "👕 Ves una camiseta que te gusta."],
      ["fill", "\"Can I ___ this on? I'd like to try it before buying.\"", ["try","put","wear","take"], 0, "\"Try on\" = probarse (ropa). \"Can I try this on?\" = ¿Me puedo probar esto? También puedes decir \"Is there a fitting room?\" = ¿Hay probadores?"],
      ["translate", "Traduce: \"¿Cuánto cuesta este abrigo?\"", ["How much does this coat cost?","How many costs this coat?","What is the price for this coat?","How much is costing this coat?"], 0, "\"How much does it cost?\" = ¿Cuánto cuesta? También muy común: \"How much is it?\" o \"What's the price?\" \"Cost\" usa \"does\" en preguntas (presente simple, 3ª persona)."],
      ["mcq", "El dependiente dice: \"It's on sale, 30% off.\" ¿Qué significa?", ["Está rebajado, con 30% de descuento.","Cuesta 30% más que antes.","Hay 30 unidades disponibles.","El precio original era 30."], 0, "\"On sale\" = en oferta/rebajado. \"30% off\" = 30% de descuento. Vocabulario útil: discount (descuento), sale (rebaja), half price (mitad de precio), buy one get one free (2x1)."],
      ["arrange", "Ordena: [I / this / like / would / in / black]", ["I would like this in black.","I like would this in black.","This I would like black in.","Would I like this in black."], 0, "\"I would like this in black.\" = Quisiera esto en negro. Muy útil para pedir un producto en otro color o talla: \"I would like this in [color/size].\""],
      ["mcq", "¿Cómo preguntas si aceptan tarjeta de crédito?", ["Do you accept credit cards?","Can you take my credit card?","Is credit card okay?","Do you have credit card?"], 0, "\"Do you accept credit cards?\" es la forma más común. También: \"Can I pay by card?\" o \"Do you take card payments?\" Recuerda que en muchos países \"card\" significa tanto débito como crédito."],
      ["fill", "\"I'd like to ___ this shirt. It has a stain on it.\" (devolver)", ["return","bring back","give back","take back"], 0, "\"Return\" = devolver (en tiendas). También \"bring back\" es correcto coloquialmente. \"I'd like to return this\" = Quisiera devolver esto. \"It has a stain\" = tiene una mancha."],
      ["mcq", "La dependienta dice: \"Sorry, we're out of stock in your size.\" ¿Qué pasó?", ["No tienen tu talla disponible.","Tu talla no existe en esa ropa.","La tienda está cerrada.","El producto es muy caro."], 0, "\"Out of stock\" = agotado / sin existencias. \"In your size\" = en tu talla. Otras frases: \"in stock\" (disponible), \"back in stock soon\" (disponible pronto), \"sold out\" (agotado)."],
      ["translate", "Traduce: \"¿Tienen algo más barato?\"", ["Do you have anything cheaper?","Do you have something more cheap?","Have you anything less expensive?","Is there anything more cheap?"], 0, "\"Anything cheaper\" — \"cheap\" → comparativo: \"cheaper\". En preguntas y negativas usamos \"anything\" (algo), no \"something\". \"Do you have anything...?\" es muy natural."],
      ["fill", "\"The fitting rooms are ___ the back of the store.\" (al fondo)", ["at","in","on","by"], 0, "\"At the back\" = al fondo. Preposiciones de lugar en tiendas: at the front (al frente), in the middle (en el medio), on the right/left (a la derecha/izquierda), upstairs/downstairs (arriba/abajo)."],
      ["mcq", "Quieres saber si la camiseta se puede lavar a máquina. ¿Cómo lo preguntas?", ["Can this be machine washed?","Can I wash this in machine?","Is this washable in machine?","Can this go in a washing machine?"], 0, "\"Can this be machine washed?\" o \"Is this machine washable?\" — ambas son correctas. También puedes mirar la etiqueta de cuidado (care label) que suele tener símbolos universales."],
      ["arrange", "Ordena: [receipt / I / a / need / please / ,]", ["I need a receipt, please.","Please I need a receipt.","I please need a receipt.","A receipt I need, please."], 0, "\"I need a receipt, please.\" — \"Receipt\" (recibo/ticket). Siempre pide el recibo porque lo necesitas si quieres devolver algo. \"Please\" al final suena natural y educado."],
    ]
  },
  {
    id:"a2_travel", level:"A2", title:"Viajes y transporte", emoji:"✈️", xp:40,
    description:"Navega aeropuertos, hoteles y transporte público en inglés.",
    study: {
      vocab: [
        ["airport / boarding pass", "aeropuerto / pase de abordar"],
        ["luggage / suitcase", "equipaje / maleta"],
        ["check-in", "registro/facturación"],
        ["platform (train)", "andén"]
      ],
      grammar: [
        ["Futuro con \"going to\"", "Se usa para planes ya decididos antes de hablar.", "I'm going to travel to Japan next month."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo preguntas dónde está la puerta de embarque?", ["Where is gate B7, please?","Where is the boarding door B7?","How do I find gate B7?","Both A and C are correct."], 3, "Tanto \"Where is gate B7?\" como \"How do I find gate B7?\" son correctas y naturales. En aeropuertos puedes preguntar directamente por el número de puerta.", "✈️ Estás en el aeropuerto con tu boarding pass."],
      ["fill", "\"I'd like to ___ a room for two nights, please.\"", ["book","reserve","make","All of the above"], 3, "\"Book a room\" y \"reserve a room\" son igualmente correctas y muy comunes. \"Make a reservation\" también funciona. Las tres opciones son naturales en hoteles."],
      ["translate", "Traduce: \"¿Está incluido el desayuno?\"", ["Is breakfast included?","Does breakfast include?","Is breakfast including?","Breakfast is included?"], 0, "\"Is breakfast included?\" — pasiva del verbo \"include\". En hoteles también preguntas: \"Is Wi-Fi included?\", \"Is parking included?\", \"Is there a gym?\" (¿Hay gimnasio?)"],
      ["mcq", "En la aduana te preguntan: \"What is the purpose of your visit?\" ¿Qué te están preguntando?", ["¿Cuál es el motivo de tu visita?","¿Cuánto tiempo te quedas?","¿Tienes algo que declarar?","¿De dónde vienes?"], 0, "\"Purpose of your visit\" = motivo de tu visita. Respuestas comunes: \"Tourism/vacation\" (turismo), \"Business\" (negocios), \"Visiting family/friends\" (visitar familia/amigos)."],
      ["arrange", "Ordena: [a / to / ticket / I'd / buy / like / one-way]", ["I'd like to buy a one-way ticket.","I'd like to buy a ticket one-way.","I like to would buy a one-way ticket.","I'd buy like to a one-way ticket."], 0, "\"One-way ticket\" = billete de ida. \"Round-trip ticket\" (AmE) / \"Return ticket\" (BrE) = billete de ida y vuelta. \"I'd like to buy a round-trip ticket to London.\""],
      ["mcq", "Tu vuelo ha sido cancelado. ¿Qué le dices al agente de la aerolínea?", ["My flight has been cancelled. Can you rebook me on the next available flight?","My flight is cancelled. I want another flight now.","The flight doesn't go. What to do?","Cancel! I need new flight!"], 0, "\"My flight has been cancelled. Can you rebook me...?\" — Usa present perfect para explicar la situación y \"can you\" para hacer la petición educadamente. \"Rebook\" = reservar de nuevo."],
      ["fill", "\"Excuse me, does this bus ___ to the city center?\"", ["go","arrive","travel","drive"], 0, "\"Does this bus go to...?\" es la forma más natural de preguntar la ruta. También: \"Does this train stop at...?\" (¿Para este tren en...?). \"Go to\" indica destino."],
      ["translate", "Traduce: \"Perdí mi equipaje. ¿Qué debo hacer?\"", ["I've lost my luggage. What should I do?","I lose my luggage. What I should do?","My luggage is lost. What I do?","I lost luggage. What should I do?"], 0, "\"I've lost\" (present perfect) es más natural que simple past para algo que acaba de ocurrir. \"Luggage\" = equipaje (incontable, no se dice \"luggages\"). \"Should\" = deber."],
      ["mcq", "El hotel dice que tu habitación no está lista (check-in a las 3pm y son las 12pm). ¿Qué preguntas?", ["Can I leave my luggage here while I wait?","Can I stay in the lobby until 3?","Where can I eat nearby?","All of the above are fine."], 3, "Las tres son preguntas perfectamente válidas en esta situación. \"Can I leave my luggage here?\" (dejar el equipaje), \"stay in the lobby\" (esperar en el lobby), preguntar dónde comer. ¡Sé flexible!"],
      ["fill", "\"The check-___ time is 12pm and check-___ is at 3pm.\"", ["out / in","in / out","off / on","on / off"], 0, "\"Check-out\" (dejar la habitación) es a las 12pm. \"Check-in\" (llegar y registrarse) a las 3pm. En hoteles: early check-in (llegada anticipada), late check-out (salida tardía)."],
      ["translate", "Traduce: \"¿Cuánto tarda el tren al aeropuerto?\"", ["How long does the train to the airport take?","How much time takes the train to the airport?","How long is the train to the airport?","How many minutes the train to the airport?"], 0, "\"How long does it take?\" = ¿Cuánto tarda/toma? Muy útil para preguntar duración. Respuesta: \"It takes about 30 minutes.\" / \"It's a 30-minute ride.\""],
      ["mcq", "¿Qué significa \"The flight is delayed by two hours\"?", ["El vuelo tiene un retraso de dos horas.","El vuelo fue cancelado dos horas antes.","El vuelo llega dos horas antes.","El vuelo dura dos horas."], 0, "\"Delayed\" = retrasado. \"By two hours\" = por dos horas. Vocabulario de aeropuerto: delayed (retrasado), on time (a tiempo), cancelled (cancelado), gate (puerta), boarding (embarque)."],
    ]
  },
  {
    id:"b1_present_perfect", level:"B1", title:"Present Perfect: experiencias y noticias", emoji:"🎯", xp:50,
    description:"Domina el present perfect para hablar de experiencias, noticias recientes y cambios.",
    study: {
      vocab: [
        ["have/has + past participle", "haber + participio", "Ej: have visited, has eaten."],
        ["ever / never", "alguna vez / nunca"],
        ["just / already / yet", "recién / ya / todavía (negativo/pregunta)"]
      ],
      grammar: [
        ["Present Perfect", "Conecta el pasado con el presente: experiencias sin tiempo específico, o resultados recientes. Se forma con have/has + participio pasado.", "I have visited Japan twice. / She has just arrived."]
      ]
    },
    ex:[
      ["mcq", "¿Cuál es la diferencia entre estas dos frases? A) \"I have eaten sushi.\" B) \"I ate sushi yesterday.\"", ["A habla de experiencia de vida; B de cuándo ocurrió exactamente.","A es más formal que B.","B es incorrecto en inglés.","No hay diferencia real."], 0, "Present perfect (A) = experiencia de vida, sin tiempo específico. Past simple (B) = momento concreto en el pasado. \"Have you ever eaten sushi?\" / \"Yes, I ate it last year.\""],
      ["fill", "\"I ___ never ___ (visit) New York, but I really want to go.\"", ["have / visited","did / visit","have / visit","had / visited"], 0, "\"I have never visited New York.\" — Con \"never/ever/already/yet\" usamos present perfect. La estructura: have/has + participio pasado. \"Visited\" es el participio de \"visit\"."],
      ["translate", "Traduce: \"¿Alguna vez has probado la comida etíope?\"", ["Have you ever tried Ethiopian food?","Did you ever try Ethiopian food?","Have you ever eat Ethiopian food?","Did you try ever Ethiopian food?"], 0, "\"Have you ever...?\" = ¿Alguna vez has...? — Present perfect con \"ever\". Respuesta: \"Yes, I have!\" o \"No, I haven't, but I'd love to try it!\""],
      ["mcq", "Tu amigo dice: \"I've just arrived at the airport.\" ¿Qué significa \"just\" aquí?", ["Que acaba de llegar (hace muy poco)","Que llegó exactamente a tiempo","Que solo llegó él, sin nadie más","Que llegó justo antes del vuelo"], 0, "\"Just\" con present perfect = acaba de / hace muy poco. \"I've just eaten\" = acabo de comer. \"She's just called\" = acaba de llamar. Indica una acción muy reciente."],
      ["fill", "\"The team ___ (win) three championships so far this season.\"", ["has won","won","have won","had won"], 0, "\"The team has won\" — sujeto singular (team) → \"has\". \"So far\" (hasta ahora) es una señal clave del present perfect. Otras señales: already, yet, recently, lately, since, for."],
      ["mcq", "¿Cuál frase es correcta?", ["She has lived in Paris for five years.","She lives in Paris since five years.","She has lived in Paris since five years.","She lived in Paris for five years."], 0, "\"For\" + período de tiempo (for five years, for two months). \"Since\" + punto de inicio (since 2019, since Monday). \"She has lived here for five years\" = lleva cinco años viviendo aquí (y sigue)."],
      ["translate", "Traduce: \"Todavía no he terminado el informe.\"", ["I haven't finished the report yet.","I didn't finish the report yet.","I haven't finished yet the report.","I still don't finish the report."], 0, "\"Yet\" en negativas = todavía no. Va al FINAL de la frase. \"Yet\" en preguntas = ya: \"Have you finished yet?\" (¿Ya terminaste?). \"Already\" en afirmativas = ya: \"I've already finished.\""],
      ["fill", "\"___ you heard the news? They're opening a new restaurant downtown!\"", ["Have","Did","Are","Do"], 0, "\"Have you heard...?\" — Present perfect para noticias recientes o algo que acaba de ocurrir. \"Have you heard?\" suena más natural que \"Did you hear?\" cuando la noticia es muy reciente."],
      ["mcq", "Dices: \"This is the best pizza I have ever eaten.\" ¿Qué expresas?", ["Es la mejor pizza que has comido en toda tu vida.","Es la mejor pizza que comiste el año pasado.","Comiste una pizza muy buena hace tiempo.","Quieres comer más pizza."], 0, "\"The best/worst/most [adj] I have ever [verbo]\" = es la mayor/mejor/peor experiencia de mi vida. Superlativo + present perfect con \"ever\" = experiencia de vida máxima."],
      ["arrange", "Ordena: [changed / a / lot / the / has / city]", ["The city has changed a lot.","The city changed has a lot.","Has the city changed a lot.","The city has a lot changed."], 0, "\"The city has changed a lot.\" — Present perfect para hablar de cambios hasta el presente. \"A lot\" va al final. También: \"The city has changed significantly/dramatically.\""],
      ["translate", "Traduce: \"Llevan tres horas esperando.\"", ["They've been waiting for three hours.","They have waited for three hours.","They are waiting since three hours.","They wait for three hours."], 0, "\"They've been waiting\" = present perfect continuous. Se usa para acciones que empezaron en el pasado y siguen ahora (con énfasis en la duración). \"For three hours\" indica cuánto tiempo."],
      ["mcq", "¿Cuándo usarías \"I've been to Japan\" vs \"I'm going to Japan\"?", ["\"I've been to Japan\" = ya fui; \"I'm going\" = voy a ir en el futuro.","\"I've been to Japan\" = quiero ir; \"I'm going\" = ya fui.","Son la misma idea expresada diferente.","\"I've been\" = vivo allí; \"I'm going\" = visité."], 0, "\"I've been to Japan\" (present perfect) = fui y volví, es una experiencia pasada. \"I'm going to Japan\" (present continuous) = tengo planes de ir. Contextos muy diferentes."],
    ]
  },
  {
    id:"b1_opinions", level:"B1", title:"Opiniones y debate", emoji:"💬", xp:50,
    description:"Expresa opiniones, acuerdo y desacuerdo con fluidez y educación.",
    study: {
      vocab: [
        ["I think that...", "Creo que..."],
        ["In my opinion...", "En mi opinión..."],
        ["I agree / I disagree", "Estoy de acuerdo / No estoy de acuerdo"],
        ["On the other hand...", "Por otro lado..."]
      ],
      grammar: [
        ["Verbos modales para opinar con matices", "\"Should\" (deber/recomendación) y \"might\" (posibilidad) suavizan una opinión.", "I think we should consider both options. / That might not be true."]
      ]
    },
    ex:[
      ["mcq", "¿Cuál es la forma más educada de expresar una opinión contraria?", ["I see your point, but I think there might be another way to look at this.","You're wrong. That's a bad idea.","No, I disagree completely.","That's not right at all."], 0, "\"I see your point, but...\" = reconoces su punto de vista antes de presentar el tuyo. Esto mantiene la conversación constructiva. En inglés profesional, el \"softening\" es fundamental.", "🤝 Estás en una reunión de trabajo."],
      ["fill", "\"___ my opinion, social media has both positive and negative effects.\"", ["In","From","On","At"], 0, "\"In my opinion\" = en mi opinión. Otras formas de introducir tu opinión: \"I think...\", \"I believe...\", \"To my mind...\", \"As far as I'm concerned...\", \"Personally, I feel that...\""],
      ["translate", "Traduce: \"Estoy completamente de acuerdo contigo.\"", ["I completely agree with you.","I am complete in agreement with you.","I agree you completely.","I'm agreeing completely with you."], 0, "\"I completely agree with you.\" — También: \"I totally agree!\", \"Absolutely!\", \"Exactly!\", \"That's a great point!\", \"You're absolutely right.\" Para acuerdo parcial: \"I agree up to a point...\""],
      ["mcq", "Alguien dice algo con lo que no estás de acuerdo. ¿Cuál respuesta es más efectiva en un debate?", ["\"That's an interesting perspective. However, I'd argue that...\"","\"No, you're wrong.\"","\"I don't think so.\"","\"That doesn't make sense.\""], 0, "\"That's an interesting perspective. However, I'd argue that...\" — Primero valoras su punto (engagement), luego presentas tu contraargumento (however). Esta estructura es clave en debates formales."],
      ["fill", "\"What do you ___ about working from home? I think it's great!\"", ["think","say","feel about","believe"], 0, "\"What do you think about...?\" = ¿Qué piensas de...? Es la pregunta de opinión más natural en inglés. También: \"What's your take on...?\" (más informal) o \"What are your thoughts on...?\""],
      ["arrange", "Ordena: [it / that / not / seem / does / fair]", ["That doesn't seem fair.","It doesn't seem that fair.","That seem doesn't fair.","Doesn't that seem fair."], 0, "\"That doesn't seem fair.\" = Eso no parece justo. \"Doesn't seem\" es más suave que \"isn't\" — sirve para expresar opinión sin ser muy absoluto. \"It doesn't seem fair\" también es correcta (opción B)."],
      ["translate", "Traduce: \"Por un lado... por otro lado...\"", ["On one hand... on the other hand...","On one side... on the other side...","In one hand... in the other hand...","For one hand... for the other hand..."], 0, "\"On one hand... on the other hand...\" — esta expresión es esencial para presentar dos perspectivas en un debate o ensayo. Nota: \"on the other hand\" siempre va con \"the\"."],
      ["mcq", "Te preguntan tu opinión sobre el cambio climático. ¿Cómo estructuras tu respuesta en inglés?", ["\"Well, I think it's one of the most pressing issues we face today. In my view, we need to act urgently.\"","\"Climate change is bad. We must stop it.\"","\"I agree with climate change being a problem.\"","\"Yes, climate change. It's happening.\""], 0, "La primera respuesta usa: \"I think\" (opinión) + \"In my view\" (refuerzo) + \"we need to\" (recomendación). Es articulada, usa conectores y desarrolla la idea. Las otras son demasiado cortas o incorrectas."],
      ["fill", "\"I'm not ___ sure about that. Can you explain your reasoning?\"", ["entirely","complete","totally not","full"], 0, "\"I'm not entirely sure\" = no estoy del todo seguro/a. \"Entirely\" suaviza el desacuerdo y abre el diálogo. Otros modificadores: \"I'm not completely convinced\", \"I'm somewhat skeptical about that.\""],
      ["mcq", "¿Cuál frase expresa mejor un desacuerdo parcial?", ["\"You make a fair point, although I'd say the situation is a bit more complex.\"","\"Yes, but no.\"","\"I partially agree but also disagree at the same time.\"","\"Maybe yes, maybe no, it's complicated.\""], 0, "\"You make a fair point, although...\" — reconoces el argumento (\"fair point\") y introduces un matiz (\"although\"). Esto demuestra pensamiento crítico y fluidez. Muy valorado en inglés B1+."],
      ["translate", "Traduce: \"Desde mi punto de vista, la tecnología ha mejorado nuestra calidad de vida.\"", ["From my point of view, technology has improved our quality of life.","From my point of view, technology improved our quality of life.","In my point of view, technology has improved our quality of life.","From my point of view, technology improve our quality of life."], 0, "\"From my point of view\" = desde mi punto de vista. \"Has improved\" (present perfect) = ha mejorado (con efecto hasta el presente). \"Quality of life\" = calidad de vida."],
      ["arrange", "Ordena: [both / arguments / valid / there / are / sides / on]", ["There are valid arguments on both sides.","Both sides there are valid arguments.","There are arguments valid on both sides.","Valid arguments are there on both sides."], 0, "\"There are valid arguments on both sides.\" — Reconocer ambos lados de un debate es señal de madurez comunicativa. Otras formas: \"Both sides have merit.\", \"I can see both perspectives.\""],
    ]
  },
  {
    id:"b2_conditionals", level:"B2", title:"Condicionales: situaciones reales e imaginarias", emoji:"🔀", xp:60,
    description:"Domina los condicionales para hablar de posibilidades, hipótesis y arrepentimientos.",
    study: {
      vocab: [
        ["if / unless", "si / a menos que"],
        ["would / wish", "condicional \"-ía\" / desearía"]
      ],
      grammar: [
        ["Los 4 condicionales", "Zero: verdades generales (if + presente, presente). First: futuro posible (if + presente, will). Second: hipótesis presente/futura (if + pasado, would). Third: pasado irreal (if + had+participio, would have+participio).", "If it rains, I stay home. / If I win, I will travel. / If I won, I would travel. / If I had studied, I would have passed."]
      ]
    },
    ex:[
      ["mcq", "¿Cuál es la diferencia entre estas frases? A) \"If it rains, I'll stay home.\" B) \"If it rained, I would stay home.\"", ["A es una situación real posible; B es una hipótesis imaginaria.","A es pasado y B es futuro.","A es más formal que B.","No hay diferencia real en inglés moderno."], 0, "Condicional 1 (If + present, will + infinitivo): situación posible/real. Condicional 2 (If + past simple, would + infinitivo): hipótesis imaginaria o poco probable. ¡La diferencia es clave!"],
      ["fill", "\"If I ___ (be) the president, I would invest more in education.\"", ["were","was","am","would be"], 0, "\"If I were...\" — En condicional 2, con el verbo \"to be\" se usa \"were\" para TODAS las personas (incluido I, he, she, it). \"Were\" es la forma formal correcta. \"Was\" es coloquialmente aceptado pero \"were\" es el estándar."],
      ["translate", "Traduce: \"Si hubiera estudiado más, habría aprobado el examen.\"", ["If I had studied more, I would have passed the exam.","If I studied more, I would pass the exam.","If I have studied more, I will have passed the exam.","If I had studied more, I would pass the exam."], 0, "Condicional 3: If + past perfect (had + participio), would have + participio. Se usa para hablar de situaciones pasadas que NO ocurrieron y sus consecuencias imaginarias. Expresa arrepentimiento o especulación."],
      ["mcq", "Tu amigo dice: \"I wish I hadn't eaten so much.\" ¿Qué expresa?", ["Se arrepiente de haber comido tanto.","Desea comer más en el futuro.","Está feliz de haber comido tanto.","No quiere comer más hoy."], 0, "\"I wish + past perfect\" = me arrepiento de algo pasado que no puedo cambiar. \"I wish I hadn't eaten so much\" = ojalá no hubiera comido tanto. \"I wish + past simple\" = deseo sobre el presente: \"I wish I spoke Spanish.\""],
      ["fill", "\"___ you happen to find my keys, please call me right away.\"", ["Should","If","Would","Were"], 0, "\"Should you find my keys...\" = \"If you should find my keys...\" — es una forma formal/escrita del condicional 1 con inversión. Se invierte el sujeto y el auxiliar: Should + sujeto + infinitivo."],
      ["mcq", "Una persona te aconseja: \"If I were you, I'd apply for that job.\" ¿Qué te están diciendo?", ["En tu lugar, yo solicitaría ese trabajo.","Quieren solicitar ese trabajo.","Te dicen que ya solicitaron ese trabajo.","Creen que no deberías solicitar ese trabajo."], 0, "\"If I were you...\" = en tu lugar / yo que tú... Es una de las formas más comunes de dar consejo en inglés. Se usa condicional 2 aunque sea consejo real, porque te pones hipotéticamente en la posición del otro."],
      ["translate", "Traduce: \"A menos que llueva, iremos a la playa.\"", ["Unless it rains, we'll go to the beach.","If it doesn't rain, we'll go to the beach.","Both A and B are correct.","Except if it rains, we will go to the beach."], 2, "Tanto \"unless it rains\" (a menos que llueva) como \"if it doesn't rain\" (si no llueve) son correctas y significan lo mismo. \"Unless\" = \"if not\" — muy útil para no repetir siempre \"if\"."],
      ["fill", "\"What ___ you do if you won the lottery?\" \"I'd travel the world!\"", ["would","will","do","did"], 0, "\"What would you do if...?\" — La pregunta está en condicional 2 (situación imaginaria). La respuesta también usa \"would\" (I'd = I would). \"Won\" (pasado de win) confirma que es hipotético."],
      ["mcq", "¿Cuál frase expresa un deseo imposible o muy improbable sobre el presente?", ["I wish I could fly.","I hope I can fly.","If I fly, I will be happy.","I want to fly someday."], 0, "\"I wish I could fly.\" — \"wish + could\" expresa un deseo imposible o muy improbable en el presente. \"I hope I can\" es para cosas posibles. \"Wish\" + modal en pasado = fantasía/deseo inalcanzable."],
      ["arrange", "Ordena: [had / he / earlier / arrived / if / caught / he / would / have / the / train]", ["If he had arrived earlier, he would have caught the train.","He would have caught the train if he had arrived earlier.","Both A and B are correct.","If he arrived earlier, he would catch the train."], 2, "En el condicional 3, la cláusula \"if\" puede ir al principio o al final de la oración. Ambas son igualmente correctas. Cuando la cláusula \"if\" va primero, se usa coma. Cuando va al final, no se necesita coma."],
      ["translate", "Traduce: \"Si siguieras practicando, mejorarías mucho más rápido.\"", ["If you kept practicing, you would improve much faster.","If you keep practicing, you will improve much faster.","If you had kept practicing, you would have improved faster.","If you would keep practicing, you would improve faster."], 0, "\"If you kept practicing, you would improve\" — condicional 2 (hipotético en el presente/futuro). Nota: \"If you keep practicing, you will improve\" (Condicional 1) también es válido si se ve como posibilidad real."],
      ["mcq", "\"Had I known about the traffic, I would have left earlier.\" ¿Qué estructura gramatical es esta?", ["Condicional 3 con inversión formal (sin \"if\")","Condicional 2 con \"had\"","Past perfect simple","Mixed conditional"], 0, "\"Had I known...\" = \"If I had known...\" — inversión formal del condicional 3. Se omite \"if\" y se invierte el sujeto con el auxiliar \"had\". Común en inglés escrito formal. \"Were I to...\" y \"Should you...\" funcionan igual."],
    ]
  },
  {
    id:"b2_professional", level:"B2", title:"Inglés profesional y entrevistas", emoji:"💼", xp:60,
    description:"Domina el inglés en contextos laborales, reuniones y entrevistas de trabajo.",
    study: {
      vocab: [
        ["résumé / CV", "currículum"],
        ["job interview", "entrevista de trabajo"],
        ["deadline", "fecha límite"],
        ["salary / negotiate", "salario / negociar"]
      ],
      grammar: [
        ["Modales para cortesía formal", "\"Would\" y \"could\" suavizan peticiones en contextos profesionales.", "Would you be able to send the report today? / Could we discuss the salary?"]
      ]
    },
    ex:[
      ["mcq", "En una entrevista te preguntan: \"Tell me about yourself.\" ¿Cuál es la mejor respuesta?", ["\"I'm a marketing professional with 5 years of experience. I specialize in digital campaigns and have a track record of increasing engagement by 40%.\"","\"Well, I was born in 1990 and I studied business... I have a dog named Max...\"","\"I'm a hard worker and I really need this job.\"","\"I already sent my CV. You can read it there.\""], 0, "\"Tell me about yourself\" = habla de tu trayectoria profesional relevante. Estructura ideal: título/rol → años de experiencia → especialidad → logro concreto. Breve, profesional y con datos.", "🎯 Primera pregunta de tu entrevista para un puesto de marketing."],
      ["fill", "\"I'd like to ___ on the progress we've made in Q3.\" (en una reunión)", ["update you","tell you","say you","inform for you"], 0, "\"Update you on...\" = informarte sobre / darte una actualización sobre. Vocabulario de reuniones: brief you on (ponerte al día), walk you through (explicarte paso a paso), touch base on (abordar brevemente)."],
      ["translate", "Traduce: \"Eso está fuera de mi área de responsabilidad.\"", ["That's outside my area of responsibility.","That's not in my area.","I don't have responsibility for that.","That is not my problem."], 0, "\"That's outside my area of responsibility\" es profesional y claro. También: \"That's not within my remit\" (BrE, muy formal) o \"That falls outside my scope.\" Evita \"that's not my problem\" en contexto laboral."],
      ["mcq", "Tu jefe dice: \"Let's circle back to this.\" ¿Qué quiere decir?", ["Retomar este tema más tarde.","Ir en círculos con el argumento.","Cancelar la discusión.","Repetir lo que se dijo antes."], 0, "\"Circle back\" = retomar algo más adelante. Jerga corporativa común: \"touch base\" (ponerse en contacto), \"synergy\" (sinergia), \"bandwidth\" (capacidad/tiempo disponible), \"deliverable\" (entregable), \"moving forward\" (de ahora en adelante)."],
      ["fill", "\"Could you please ___ me in on what was discussed at yesterday's meeting?\"", ["fill","put","give","catch"], 0, "\"Fill me in on...\" = ponerme al día sobre / contarme lo que pasó. Muy usado en contextos laborales. \"Could you fill me in?\" suena educado y profesional."],
      ["mcq", "¿Cómo respondes profesionalmente a un email que pide algo que no puedes hacer?", ["\"Thank you for reaching out. Unfortunately, I'm unable to accommodate this request at this time. However, I'd be happy to suggest an alternative...\"","\"No, I can't do that.\"","\"This is not possible.\"","\"Sorry but no, too busy.\""], 0, "Un rechazo profesional tiene tres partes: 1) agradecer el contacto, 2) declinar con \"unfortunately I'm unable to\", 3) ofrecer alternativa. Esto mantiene la relación profesional positiva."],
      ["arrange", "Ordena (email formal): [to / writing / I / you / regarding / am / the / proposal / submitted / recently]", ["I am writing to you regarding the recently submitted proposal.","I am writing you to regarding the proposal recently submitted.","Writing to you I am regarding the recently submitted proposal.","Regarding the proposal I am writing to you recently submitted."], 0, "\"I am writing to you regarding...\" — apertura clásica de email formal. Otras: \"I am writing in response to...\", \"I am writing to follow up on...\", \"I hope this email finds you well.\""],
      ["translate", "Traduce: \"¿Podría enviarme eso por escrito?\"", ["Could you send that to me in writing?","Can you write me that?","Could you send me that written?","Would you put in writing that for me?"], 0, "\"Could you send that to me in writing?\" — \"in writing\" = por escrito (email, carta). \"Could\" es más formal y educado que \"can\" en contextos profesionales."],
      ["mcq", "En una reunión te preguntan tu opinión sobre una propuesta que no entiendes bien. ¿Qué dices?", ["\"Could you clarify what you mean by that? I want to make sure I fully understand before commenting.\"","\"I don't understand. Explain again.\"","\"No comment.\"","\"I agree with everything.\""], 0, "\"Could you clarify...?\" = ¿Podría aclarar...? Pedir aclaraciones muestra inteligencia, no ignorancia. \"Before commenting\" indica responsabilidad y profesionalismo. Nunca finjas entender algo que no entiendes."],
      ["fill", "\"We need to ___ a decision by Friday, or we'll miss the deadline.\"", ["make","take","do","reach"], 0, "\"Make a decision\" = tomar una decisión. En inglés: MAKE a decision/mistake/effort/progress, TAKE action/responsibility/notes, DO work/business/research. Estas combinaciones (collocations) son esenciales."],
      ["mcq", "Te piden describir una fortaleza en una entrevista. ¿Cuál respuesta es más efectiva?", ["\"One of my key strengths is problem-solving. For example, in my last role I identified a workflow inefficiency that was costing the team 3 hours per week, and I implemented a solution that reduced that to 20 minutes.\"","\"I'm a hard worker and very dedicated.\"","\"I'm good at many things, like working in teams and being organized.\"","\"My strength is that I always try my best.\""], 0, "La técnica STAR: Situation, Task, Action, Result. Dar ejemplos concretos con datos (\"3 hours\", \"20 minutes\") hace la respuesta memorable y creíble. \"Hard worker\" sin ejemplos no convence a ningún entrevistador."],
      ["translate", "Traduce: \"Les haré saber en cuanto tenga noticias.\"", ["I'll keep you posted as soon as I hear back.","I will say you when I know something.","I'll tell you when I have news.","As soon as I know, I say you."], 0, "\"Keep you posted\" = mantenerte informado/a. \"As soon as I hear back\" = en cuanto reciba respuesta. Ambas expresiones son muy profesionales. \"Hear back from someone\" = recibir respuesta de alguien."],
    ]
  },
  {
    id:"a2_family_home", level:"A2", title:"Familia y hogar", emoji:"🏠", xp:35,
    description:"Habla de tu familia y describe tu casa.",
    study: {
      vocab: [
        ["parents, siblings, grandparents", "padres, hermanos, abuelos"],
        ["bedroom, kitchen, living room", "dormitorio, cocina, sala"],
        ["bathroom, garden", "baño, jardín"]
      ],
      grammar: [
        ["Adjetivos posesivos", "My, your, his, her, its, our, their — van antes del sustantivo y no cambian según género/número del objeto.", "This is my house. Her brother lives here."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo preguntas cuántos hermanos tiene alguien?", ["How many siblings do you have?","How old are you?","Where do you live?","What's your job?"], 0, "\"Siblings\" significa hermanos/hermanas en general. También puedes preguntar \"Do you have any brothers or sisters?\"", "👨‍👩‍👧 Estás conociendo a la familia de tu pareja."],
      ["fill", "\"This is my ___. She is my father's mother.\"", ["grandmother","aunt","sister","cousin"], 0, "\"Grandmother\" (abuela) es la madre de tu padre o madre. \"Grandfather\" es el abuelo."],
      ["translate", "Traduce: \"Vivo con mis padres y mi hermano menor.\"", ["I live with my parents and my younger brother.","I live alone with my brother.","My parents live with me.","I have a younger brother."], 0, "\"Younger brother\" = hermano menor, \"older brother\" = hermano mayor. \"Parents\" = padres (ambos)."],
      ["mcq", "¿Qué habitación usas para cocinar?", ["The kitchen","The bathroom","The bedroom","The living room"], 0, "\"Kitchen\" = cocina. \"Living room\" = sala, \"bedroom\" = habitación, \"bathroom\" = baño.", "🍳 Describes tu casa a un amigo extranjero."],
      ["arrange", "Ordena: [has / house / a / garden / my]", ["My house has a garden","A garden has my house","House my has a garden","Garden a has my house"], 0, "\"My house has a garden.\" — Sujeto + verbo (has) + objeto. \"Garden\" = jardín."],
      ["fill", "\"My parents ___ married for 20 years.\"", ["have been","are","have","is"], 0, "\"Have been married\" se usa para hablar de una acción/estado que empezó en el pasado y continúa. \"They have been married for 20 years.\""],
      ["mcq", "¿Cómo se dice \"hijo único\" en inglés?", ["Only child","Single kid","Alone son","One child"], 0, "\"Only child\" es la expresión correcta para \"hijo único\", sin importar si es niño o niña.", "🙋 Alguien te pregunta si tienes hermanos."],
      ["translate", "Traduce: \"Nuestra casa tiene tres habitaciones.\"", ["Our house has three bedrooms.","Our house is three bedrooms.","We have three houses.","Three bedrooms are ours."], 0, "\"Bedroom\" = habitación/dormitorio (donde duermes), no confundir con \"room\" que es cualquier cuarto en general."],
    ]
  },
  {
    id:"a2_weather_plans", level:"A2", title:"Clima y planes", emoji:"🌦️", xp:35,
    description:"Habla del clima y haz planes futuros.",
    study: {
      vocab: [
        ["sunny, rainy, cloudy, windy", "soleado, lluvioso, nublado, ventoso"],
        ["hot / cold / warm", "caluroso / frío / templado"],
        ["What's the weather like?", "¿Cómo está el clima?"]
      ],
      grammar: [
        ["Will vs. Going to (futuro)", "\"Will\" para decisiones espontáneas/predicciones. \"Going to\" para planes ya decididos.", "I think it will rain. / I'm going to bring an umbrella (ya lo decidí)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo preguntas cómo está el clima?", ["What's the weather like?","How is the day?","What time is it?","Where is it?"], 0, "\"What's the weather like?\" es la forma estándar de preguntar por el clima. Responde: \"It's sunny/rainy/cold...\"", "☁️ Vas a salir de viaje y quieres saber si necesitas paraguas."],
      ["fill", "\"It ___ raining, so take an umbrella.\"", ["is","are","be","was"], 0, "Para describir el clima actual usamos \"it is\" (it's). \"It's raining\" = está lloviendo."],
      ["translate", "Traduce: \"Voy a viajar el próximo fin de semana.\"", ["I'm going to travel next weekend.","I traveled last weekend.","I travel every weekend.","I will traveled next weekend."], 0, "\"Going to + verbo\" se usa para planes futuros ya decididos. \"Next weekend\" = el próximo fin de semana."],
      ["mcq", "Alguien dice \"It's freezing today!\" ¿Qué significa?", ["Hace mucho frío","Hace mucho calor","Está soleado","Está nublado"], 0, "\"Freezing\" significa que hace un frío extremo, casi bajo cero. \"Boiling/scorching\" se usa para calor extremo.", "🥶 Sales a la calle en invierno."],
      ["arrange", "Ordena: [tomorrow / sunny / be / will / it]", ["It will be sunny tomorrow","Tomorrow it sunny will be","Will it be sunny tomorrow","Sunny it will be tomorrow"], 0, "\"It will be sunny tomorrow.\" — usamos \"will\" para predicciones sobre el clima futuro."],
      ["fill", "\"What are you going to ___ this weekend?\"", ["do","doing","did","does"], 0, "Después de \"going to\" siempre va el verbo en infinitivo sin \"to\": \"going to do\", \"going to travel\", etc."],
      ["mcq", "¿Cómo respondes si no tienes planes aún?", ["I haven't decided yet","I am nothing","I don't have time never","I no plans"], 0, "\"I haven't decided yet\" = todavía no he decidido. Es una respuesta natural y común.", "🤔 Un amigo te pregunta qué harás el sábado."],
    ]
  },
  {
    id:"b1_health_body", level:"B1", title:"Salud y el cuerpo", emoji:"🩺", xp:40,
    description:"Describe síntomas y habla de salud con más naturalidad.",
    study: {
      vocab: [
        ["head, stomach, back, throat", "cabeza, estómago, espalda, garganta"],
        ["I have a headache/fever", "Tengo dolor de cabeza/fiebre"],
        ["it hurts", "duele"]
      ],
      grammar: [
        ["\"Should\" para consejos de salud", "\"Should\" se usa para dar consejos o recomendaciones.", "You should see a doctor. / You shouldn't skip meals."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo le dices al doctor que te duele la cabeza?", ["I have a headache","I am a headache","I feel head","My head is sick"], 0, "\"I have a headache\" = tengo dolor de cabeza. Igual: \"I have a stomachache\" (dolor de estómago), \"I have a sore throat\" (dolor de garganta).", "🏥 Estás en la consulta del médico."],
      ["fill", "\"You should ___ more water if you have a fever.\"", ["drink","eat","take","have"], 0, "\"Drink water\" = tomar agua. \"Should\" se usa para dar consejos o recomendaciones."],
      ["translate", "Traduce: \"Me he sentido enfermo desde ayer.\"", ["I have felt sick since yesterday.","I feel sick yesterday.","I was sick since yesterday.","I am sick from yesterday."], 0, "\"Have felt\" (presente perfecto) se usa para una condición que empezó en el pasado y continúa. \"Since yesterday\" = desde ayer."],
      ["mcq", "¿Qué significa \"I'm feeling under the weather\"?", ["Me siento un poco mal","Hace mal clima","Estoy muy feliz","Tengo mucha energía"], 0, "Es una expresión idiomática común que significa sentirse ligeramente enfermo o de mal ánimo, no literal sobre el clima.", "💬 Un compañero de trabajo te pregunta cómo estás."],
      ["arrange", "Ordena: [see / should / a doctor / you]", ["You should see a doctor","Should you see a doctor","See you should a doctor","A doctor should see you"], 0, "\"You should see a doctor.\" — Sujeto + should + verbo + objeto. Es un consejo directo."],
      ["fill", "\"How long ___ you been feeling this way?\"", ["have","has","did","do"], 0, "Con \"how long\" + presente perfecto usamos \"have\" con I/you/we/they: \"How long have you been feeling...\""],
      ["mcq", "¿Cómo pides una cita médica?", ["I'd like to make an appointment","I want a doctor now","Give me appointment","I need see doctor"], 0, "\"I'd like to make an appointment\" es la forma educada y estándar de pedir una cita.", "☎️ Llamas a la clínica para agendar consulta."],
      ["translate", "Traduce: \"El médico me recetó unas pastillas.\"", ["The doctor prescribed me some pills.","The doctor gave me a pill.","I prescribed the doctor pills.","The doctor sells pills."], 0, "\"Prescribe\" = recetar (uso médico específico). \"Pills\" = pastillas."],
    ]
  },
  {
    id:"b2_work_negotiation", level:"B2", title:"Negociación y trabajo", emoji:"🤝", xp:45,
    description:"Vocabulario avanzado para el entorno laboral y negociaciones.",
    study: {
      vocab: [
        ["proposal / offer", "propuesta / oferta"],
        ["compromise", "acuerdo mutuo/ceder"],
        ["terms and conditions", "términos y condiciones"],
        ["willing to", "dispuesto a"]
      ],
      grammar: [
        ["Lenguaje condicional para negociar", "Usar \"would\" y condicionales suaviza las propuestas en una negociación.", "We would be willing to negotiate if you could lower the price."]
      ]
    },
    ex:[
      ["mcq", "En una negociación, ¿qué significa \"to reach a compromise\"?", ["Llegar a un acuerdo intermedio","Romper el trato","Ganar todo sin ceder","Cancelar la reunión"], 0, "\"To reach a compromise\" significa que ambas partes ceden algo para llegar a un acuerdo justo para todos.", "💼 Estás en una junta discutiendo términos de un contrato."],
      ["fill", "\"If I ___ you, I would negotiate a higher salary.\"", ["were","was","am","be"], 0, "En condicionales hipotéticos (segundo condicional) se usa \"were\" para todas las personas, incluso \"I\": \"If I were you...\""],
      ["translate", "Traduce: \"Necesitamos llegar a un acuerdo antes del viernes.\"", ["We need to reach an agreement before Friday.","We need an agreement Friday.","We agree before Friday needed.","Before Friday we need agreement."], 0, "\"Reach an agreement\" = llegar a un acuerdo. \"Before Friday\" = antes del viernes."],
      ["mcq", "¿Qué significa \"to be on the same page\" en un contexto laboral?", ["Estar de acuerdo/entender lo mismo","Estar leyendo el mismo documento","Trabajar en el mismo escritorio","Tener el mismo puesto"], 0, "Es una expresión idiomática que significa que todos entienden y están de acuerdo con la misma idea o plan.", "📊 El jefe pregunta si todo el equipo entiende la estrategia."],
      ["arrange", "Ordena: [deadline / postpone / to / need / the / we]", ["We need to postpone the deadline","We postpone need to the deadline","To postpone we need the deadline","The deadline we need to postpone"], 0, "\"We need to postpone the deadline.\" — \"Postpone\" = posponer/aplazar."],
      ["fill", "\"She has extensive experience ___ project management.\"", ["in","on","at","for"], 0, "\"Experience in [área]\" es la preposición correcta: \"experience in marketing\", \"experience in sales\", etc."],
      ["mcq", "¿Cómo propones formalmente una idea en una junta?", ["I'd like to propose that we...","I want that...","Give me idea for...","My idea is do this"], 0, "\"I'd like to propose that...\" es una forma formal y profesional de presentar una propuesta en una reunión.", "🗣️ Es tu turno de hablar en la junta directiva."],
      ["translate", "Traduce: \"Estamos dispuestos a negociar los términos.\"", ["We are willing to negotiate the terms.","We want negotiate terms.","We negotiate are willing terms.","Terms we are negotiate willing."], 0, "\"Willing to\" = dispuesto a. \"Negotiate the terms\" = negociar los términos."],
    ]
  },
  {
    id:"a1_dates_time", level:"A1", title:"Fechas, días y meses", emoji:"📅", xp:35,
    description:"Aprende los días de la semana, los meses y cómo hablar de fechas en inglés.",
    study: {
      vocab: [
        ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "lunes, martes, miércoles, jueves, viernes, sábado, domingo"],
        ["January, February, March... December", "enero, febrero, marzo... diciembre"],
        ["What day is it today?", "¿Qué día es hoy?"],
        ["Today is May 5th.", "Hoy es 5 de mayo.", "En inglés se dice \"the fifth of May\" o \"May fifth\", con el ordinal."],
        ["When is your birthday?", "¿Cuándo es tu cumpleaños?"]
      ],
      grammar: [
        ["Preposiciones de tiempo: on / in / at", "\"On\" con días, \"in\" con meses o años, \"at\" con horas.", "I have a meeting on Monday, in May, at 3 p.m."]
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice \"miércoles\" en inglés?",["Wednesday","Tuesday","Thursday","Friday"],0,"\"Wednesday\" es el tercer día de la semana en inglés (la semana empieza en Sunday o Monday según el país)."],
      ["mcq","¿Cuál es la forma correcta de preguntar qué día es hoy?",["What day is it today?","What time is it today?","How old is today?","Where is today?"],0,"\"What day is it today?\" pregunta por el día de la semana o la fecha."],
      ["fill","Completa: \"My birthday is ___ March.\"",["in","on","at","to"],0,"Se usa \"in\" con meses: \"in March\"."],
      ["translate","Traduce: \"Hoy es lunes.\"",["Today is Monday.","Today is Tuesday.","Yesterday was Monday.","Today is a Monday."],0,"\"Hoy es lunes\" = \"Today is Monday\", sin artículo antes del día."],
      ["arrange","Ordena: [gym / I / Mondays / the / go to / on]",["I go to the gym on Mondays","On Mondays I the gym go to","I the gym go to on Mondays","Go I to the gym on Mondays"],0,"Sujeto + verbo + complemento + \"on Mondays\": \"I go to the gym on Mondays.\""],
      ["writing","Escribe 3 oraciones (20-30 palabras) en inglés sobre tu semana: qué día es hoy, cuándo es tu cumpleaños y qué haces un día concreto.",[],["today","birthday","on"],"Incluye al menos un día de la semana y un mes. Revisa el uso de \"on\" e \"in\"."]
    ]
  },
  {
    id:"a2_directions_transport", level:"A2", title:"En la ciudad: direcciones y transporte", emoji:"🧭", xp:42,
    description:"Pide y da indicaciones, y habla sobre medios de transporte en inglés.",
    study: {
      vocab: [
        ["How do I get to...?", "¿Cómo llego a...?"],
        ["Go straight ahead / Turn left / right", "Sigue todo recto / Gira a la izquierda / a la derecha"],
        ["the bus stop, the train station", "la parada de autobús, la estación de tren"],
        ["It's two blocks from here.", "Está a dos cuadras de aquí."],
        ["How long does it take to get there?", "¿Cuánto tarda en llegar?"]
      ],
      grammar: [
        ["El imperativo para dar indicaciones", "En inglés las instrucciones usan el verbo base, sin sujeto.", "Go straight ahead and turn right at the light."]
      ]
    },
    ex:[
      ["mcq","Quieres llegar al museo. ¿Qué preguntas en inglés?",["How do I get to the museum?","What time is the museum?","Whose museum is it?","How much is the bus?"],0,"\"How do I get to...?\" es la pregunta estándar para pedir indicaciones."],
      ["mcq","Alguien te dice: \"Go straight ahead and turn left at the square.\" ¿Qué debes hacer primero?",["Walk in a straight line.","Turn right.","Take the bus.","Ask again."],0,"\"Go straight ahead\" es la primera instrucción; el giro viene después."],
      ["fill","Completa: \"The station ___ two blocks from here.\"",["is","are","has","do"],0,"\"Is\" concuerda con el sujeto singular \"the station\": \"The station is two blocks from here.\""],
      ["translate","Traduce: \"Gira a la derecha en el semáforo.\"",["Turn right at the traffic light.","Turn left at the square.","Go straight at the light.","Stop at the light."],0,"\"Gira a la derecha\" = \"Turn right\"; \"en el semáforo\" = \"at the traffic light\"."],
      ["arrange","Ordena: [bus / take / stop / the / at / the]",["Take the bus at the stop","The stop take the bus at","At the bus take the stop","Take at the stop the bus"],0,"Verbo + objeto + complemento de lugar: \"Take the bus at the stop.\""],
      ["speaking","Explica en inglés, en 40-60 palabras, cómo llegar de tu casa a un lugar cercano. Usa al menos dos indicaciones y un medio de transporte.",[],["turn","straight","minutes"],"Organiza la explicación en orden: first, then, finally."]
    ]
  },
  {
    id:"b1_job_interview", level:"B1", title:"El trabajo: entrevistas y rutina laboral", emoji:"💼", xp:60,
    description:"Habla sobre tu experiencia laboral y responde preguntas de entrevista en inglés.",
    study: {
      vocab: [
        ["What do you do for a living?", "¿A qué te dedicas?"],
        ["I have experience in...", "tengo experiencia en..."],
        ["my strengths / weaknesses", "mis puntos fuertes / débiles"],
        ["to work as a team, to meet deadlines", "trabajar en equipo, cumplir con los plazos"],
        ["a full-time / part-time contract", "un contrato de tiempo completo / parcial"]
      ],
      grammar: [
        ["Present perfect para experiencia", "Se usa \"have/has + participio\" para hablar de experiencia sin decir exactamente cuándo.", "I have worked in customer service for three years."],
        ["Conectores para estructurar una respuesta", "\"On the one hand... on the other hand\" ayuda a organizar ventajas y desventajas.", "On the one hand I enjoy teamwork; on the other, I value some autonomy."]
      ]
    },
    ex:[
      ["mcq","En una entrevista te preguntan: \"What do you do for a living?\". ¿Cuál es una respuesta apropiada?",["I work as a graphic designer at an agency.","Yes, thank you, very well.","I am twenty-five years old.","I live downtown."],0,"\"What do you do for a living?\" pregunta por tu profesión u ocupación."],
      ["mcq","¿Qué respuesta describe mejor un punto fuerte de forma profesional?",["I'm good at organising projects and meeting deadlines.","I'm the best of everyone, no doubt.","I don't have any weaknesses.","I work whenever I feel like it."],0,"Una buena respuesta es específica y verificable, sin exagerar."],
      ["fill","Completa: \"I ___ worked in sales for two years.\"",["have","am","is","do"],0,"\"I have worked\" (present perfect) describe experiencia pasada relevante hoy."],
      ["translate","Traduce: \"Tengo experiencia trabajando en equipo.\"",["I have experience working in a team.","I have experience work team.","I team experience have working.","I have working experience in a team is."],0,"\"Tengo experiencia + gerundio\" = \"I have experience + -ing\": \"I have experience working in a team.\""],
      ["arrange","Ordena: [like / working / I / team / a / in]",["I like working in a team","Like I working in a team","In a team I like working","Working I like in a team"],0,"\"I like\" + gerundio: \"I like working in a team.\""],
      ["writing","Escribe en inglés una respuesta de entrevista de 45-65 palabras a la pregunta \"Why do you want this job?\". Menciona tu experiencia, un punto fuerte y tu motivación.",[],["experience","because","I would like"],"Estructura: experiencia relevante + punto fuerte + motivación concreta.","Entrevista para un puesto de atención al cliente."]
    ]
  },
  {
    id:"b2_media_literacy", level:"B2", title:"Medios de comunicación: analizar noticias", emoji:"📰", xp:78,
    description:"Distingue hechos de opiniones y evalúa la fiabilidad de una noticia en inglés.",
    study: {
      vocab: [
        ["a reliable / unreliable source", "una fuente fiable / poco fiable"],
        ["according to sources close to the case", "según fuentes cercanas al caso"],
        ["a sensationalist headline", "un titular sensacionalista"],
        ["to cross-check information", "contrastar la información"],
        ["a verified fact, an opinion", "un dato verificado, una opinión"]
      ],
      grammar: [
        ["Verbos de atribución", "\"According to\", \"claims that\", \"points out that\" indican de dónde viene una afirmación y cuánta certeza tiene.", "According to the report, sales increased by 10%."],
        ["Distinguir hecho de opinión", "Un hecho se puede verificar; una opinión expresa un juicio de valor.", "The article claims (opinion) the policy will 'definitely' fail, though the data (fact) is still preliminary."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases es un hecho verificable, no una opinión?",["The report shows that unemployment fell by 2% this quarter.","This policy is clearly a disaster.","Everyone knows this measure won't work.","It's obvious the government is wrong."],0,"Un hecho verificable cita una fuente y un dato concreto, sin juicio de valor."],
      ["mcq","Titular: \"Total chaos! City on the brink after new rule.\" ¿Qué sugiere el estilo del titular?",["It aims for emotional impact rather than precise information.","It is a neutral, objective summary of the facts.","It cites a verifiable official source.","It contains no value judgement at all."],0,"El lenguaje exagerado (\"total chaos\", \"on the brink\") es típico del sensacionalismo."],
      ["fill","Completa: \"___ sources close to the project, the launch will be delayed by a month.\"",["According to","Although","Because","However"],0,"\"According to\" introduce la fuente de una información, indicando que no es un hecho confirmado por el propio medio."],
      ["translate","Traduce: \"Es importante contrastar la información antes de compartirla.\"",["It is important to cross-check information before sharing it.","It is important to share information before checking it.","It is important information sharing important.","Cross-checking is sharing information important before."],0,"\"Contrastar la información\" = \"cross-check information\"; \"antes de compartirla\" = \"before sharing it\"."],
      ["mcq","Un artículo dice: \"Experts warn the figure could be overestimated.\" ¿Qué nivel de certeza transmite?",["A reasonable possibility, not an absolute certainty.","A total, verified certainty.","A personal opinion of the journalist with no source.","A fact already proven with final data."],0,"\"Could be\" indica probabilidad, no una afirmación categórica."],
      ["writing","Escribe en inglés un análisis de 55-75 palabras sobre una noticia (real o inventada): identifica un hecho verificable, una opinión y evalúa qué tan fiable te parece la fuente.",[],["according to","fact","opinion"],"Separa claramente qué es un dato citado y qué es una valoración del autor."]
    ]
  },
  {
    id:"c1_figurative_language", level:"C1", title:"Lenguaje figurado y modismos", emoji:"🗯️", xp:88,
    description:"Interpreta modismos, metáforas y expresiones idiomáticas comunes en inglés.",
    study: {
      vocab: [
        ["to cost an arm and a leg", "costar un ojo de la cara"],
        ["to be between a rock and a hard place", "estar entre la espada y la pared"],
        ["to pull someone's leg", "tomar el pelo a alguien"],
        ["to not mince words", "no tener pelos en la lengua"],
        ["to get one's act together", "ponerse las pilas"]
      ],
      grammar: [
        ["Interpretar modismos en contexto", "El significado de un modismo casi nunca es literal; hay que inferirlo del contexto comunicativo.", "\"This trip cost me an arm and a leg\" no habla de partes del cuerpo reales, sino de un gasto muy alto."]
      ]
    },
    ex:[
      ["mcq","\"This car cost me an arm and a leg.\" ¿Qué significa la expresión?",["It was very expensive.","It was very cheap.","The car got damaged.","It had an accident."],0,"\"To cost an arm and a leg\" significa que algo tuvo un precio muy alto."],
      ["mcq","Alguien dice: \"I'm between a rock and a hard place with this decision.\" ¿Qué transmite?",["They face two difficult options, with no comfortable way out.","They feel completely calm about their decision.","They have no options to consider at all.","They already made the decision without any doubt."],0,"La expresión describe una situación sin una opción claramente buena."],
      ["fill","Completa: \"Stop pulling my ___, I know it's not true.\"",["leg","foot","arm","eye"],0,"\"To pull someone's leg\" significa bromear o engañar de forma ligera."],
      ["translate","Traduce de forma natural (no literal): \"No tiene pelos en la lengua.\"",["She doesn't mince her words.","She doesn't have hairs on her tongue.","Her tongue has no hairs.","She never mince words her."],0,"\"No tener pelos en la lengua\" equivale a \"to not mince words\" en inglés."],
      ["mcq","¿En qué contexto encajaría mejor \"get your act together\"?",["Encouraging someone to become more organised and focused.","Explaining how to charge an electronic device.","Describing the weather in a city.","Apologising formally."],0,"\"Get your act together\" es una expresión coloquial para animar a alguien a organizarse."],
      ["speaking","Elige un modismo en inglés de esta lección y explica en 45-65 palabras en qué situación lo usarías y qué significa literalmente frente a su sentido real.",[],["means","situation","literally"],"Distingue claramente el sentido literal (a veces absurdo) del sentido idiomático real."]
    ]
  },
  {
    id:"c2_irony_humor", level:"C2", title:"Ironía, humor y ambigüedad deliberada", emoji:"😏", xp:94,
    description:"Reconoce ironía, sarcasmo y ambigüedad intencional en el inglés de nivel avanzado.",
    study: {
      vocab: [
        ["Just my luck!", "¡Qué suerte la mía! (irónico)"],
        ["with the best of intentions (ironic)", "con la mejor de las intenciones (irónico)"],
        ["a double meaning", "un doble sentido"],
        ["to say something with a sarcastic tone", "decir algo con retintín"],
        ["to understate something", "quedarse corto al describir algo (ironía)"]
      ],
      grammar: [
        ["Marcadores de ironía", "La ironía suele señalarse con el contexto, la entonación o un contraste evidente entre lo dicho y la realidad, no con palabras explícitas.", "\"How punctual of you!\" said to someone an hour late is ironic because of the contrast."],
        ["Ambigüedad deliberada", "A veces se elige una expresión ambigua a propósito para no comprometerse del todo con una postura.", "\"You could say the project had... interesting results.\""]
      ]
    },
    ex:[
      ["mcq","Alguien llega una hora tarde y otra persona dice: \"How punctual of you!\". ¿Qué comunica realmente?",["The opposite of what is said: the person was very late.","A sincere compliment about punctuality.","A question about the time.","An apology for their own lateness."],0,"El contraste entre lo dicho y la realidad evidente es la marca típica de la ironía."],
      ["mcq","\"With the best of intentions, he cancelled the meeting without telling anyone.\" ¿Qué matiz aporta \"with the best of intentions\" aquí?",["An ironic tone: it signals the action wasn't really well considered.","A sincere compliment towards the person.","A literal, neutral explanation of the event.","A formal apology from the narrator."],0,"El contraste entre la frase y la acción (cancelar sin avisar) genera un efecto irónico."],
      ["fill","\"You could say the project had... ___ results.\" (ambigüedad deliberada, sin comprometerse)",["interesting","excellent","catastrophic","perfect"],0,"\"Interesting\" es deliberadamente ambiguo: no confirma ni niega el éxito del proyecto."],
      ["translate","Traduce con el mismo matiz irónico: \"Genial, otro lunes.\" (dicho con fastidio)",["Great, another Monday.","Monday is a great day.","What joy, it's Friday.","I totally hate Mondays."],0,"El tono irónico se mantiene con \"Great\" seguido de algo objetivamente poco emocionante."],
      ["mcq","¿Qué función cumple el understatement en \"The earthquake caused... some minor damage\" cuando en realidad fue devastador?",["It deliberately softens the severity to create an ironic or critical effect.","It describes the situation in a completely literal and precise way.","It exaggerates the magnitude of the event.","It removes any possible ironic interpretation."],0,"El understatement contrasta la magnitud real con una descripción minimizada, generando ironía."],
      ["writing","Escribe en inglés un breve comentario (50-70 palabras) con ironía sutil sobre una situación cotidiana molesta (el tráfico, una fila larga, etc.), sin usar insultos ni lenguaje explícito.",[],["just my luck","great","of course"],"La ironía debe notarse por el contraste entre el tono positivo y la situación negativa, no por afirmarlo directamente."]
    ]
  },
  {
    id:"b2_passive_formal", level:"B2", title:"Voz pasiva y estilo formal", emoji:"⚙️", xp:76,
    description:"Usa la voz pasiva en inglés para describir procesos e informes de manera formal.",
    study: {
      vocab: [
        ["to be carried out", "llevarse a cabo"],
        ["to be approved / rejected", "ser aprobado / rechazado"],
        ["it is estimated that...", "se estima que..."],
        ["to be scheduled for", "estar programado para"]
      ],
      grammar: [
        ["La voz pasiva: be + participio", "Se usa cuando el agente de la acción es irrelevante o desconocido, típico en informes formales.", "The survey was conducted last month. (no importa exactamente quién lo hizo)"]
      ]
    },
    ex:[
      ["mcq","¿Qué versión es más apropiada para un informe formal?",["The new policy was approved by the board last week.","The board approved the new policy, they did it last week.","Someone approved the policy I think.","The board, it approved the policy last week yes."],0,"La voz pasiva enfoca la acción y el resultado, típico del registro formal de informes."],
      ["fill","Completa: \"The results ___ published next month.\"",["will be","will","are being do","have"],0,"Futuro en pasiva: \"will be + participio\": \"The results will be published next month.\""],
      ["mcq","\"It is estimated that costs will rise by 5%.\" ¿Qué función cumple \"it is estimated that\"?",["Presenta una cifra como una proyección, no como un hecho certero.","Confirma la cifra como un hecho ya verificado.","Elimina toda duda sobre la cifra.","Indica que la cifra es opinión personal del autor."],0,"\"It is estimated that\" atenúa la certeza de una cifra, marcándola como proyección."],
      ["translate","Traduce: \"La reunión está programada para el viernes.\"",["The meeting is scheduled for Friday.","The meeting schedules for Friday.","Friday is scheduled the meeting.","The meeting is schedule on Friday."],0,"\"Estar programado para\" = \"to be scheduled for\": \"The meeting is scheduled for Friday.\""],
      ["writing","Escribe en inglés un breve párrafo de informe (45-65 palabras) usando voz pasiva para describir un proceso (una investigación, un lanzamiento, una decisión).",[],["was","is scheduled","it is estimated"],"Usa al menos dos construcciones en voz pasiva y mantén un tono formal e impersonal."]
    ]
  },
  {
    id:"c1_concession_hedging", level:"C1", title:"Concesión avanzada y matización", emoji:"⚔️", xp:90,
    description:"Reconoce un punto válido del argumento contrario antes de matizar tu propia postura, con precisión.",
    study: {
      vocab: [
        ["granted that / while it is true that", "si bien es cierto que"],
        ["that said / that being said", "dicho esto"],
        ["to a certain extent", "hasta cierto punto"],
        ["this does not necessarily mean that", "esto no significa necesariamente que"]
      ],
      grammar: [
        ["Concesión seguida de matización", "Reconocer un punto válido antes de introducir una reserva da credibilidad al argumento.", "While it is true that the plan reduces costs, that does not necessarily mean it is the best option."]
      ]
    },
    ex:[
      ["mcq","¿Qué opción concede un punto y luego lo matiza con precisión?",["While it is true that sales increased, this does not necessarily mean the strategy was effective.","Sales increased, so the strategy was clearly the best one.","The strategy failed completely, no doubt about it.","Sales increased because of luck, obviously."],0,"Reconoce el hecho (ventas subieron) y matiza la conclusión que se puede extraer de él."],
      ["fill","Completa: \"___ that the report is thorough, it fails to address the main risk.\"",["Granted","Because","So","Then"],0,"\"Granted that\" introduce una concesión formal antes de una crítica."],
      ["mcq","\"To a certain extent, the criticism is fair.\" ¿Qué matiz aporta \"to a certain extent\"?",["Acepta parcialmente el punto, sin comprometerse del todo con él.","Rechaza por completo la crítica.","Acepta la crítica de forma absoluta y total.","No tiene relación con el grado de acuerdo."],0,"\"To a certain extent\" limita el alcance de la concesión, aceptando solo una parte."],
      ["translate","Traduce: \"Esto no significa necesariamente que la propuesta sea la mejor.\"",["This does not necessarily mean that the proposal is the best one.","This means necessarily that the proposal is not the best.","The proposal necessarily means this is not the best.","Necessarily, this proposal does not mean the best."],0,"\"Esto no significa necesariamente que\" = \"This does not necessarily mean that\", seguido de subjuntivo/indicativo según el registro."],
      ["speaking","Elige una postura con la que estés parcialmente de acuerdo y explica en 45-70 palabras: concede un punto válido del lado contrario, y luego matiza tu propia posición con una reserva concreta.",[],["granted","that said","to a certain extent"],"Estructura: concesión clara + matización específica, evitando el \"sí, pero\" simplista."]
    ]
  },
  {
    id:"a1_house_rooms", level:"A1", title:"La casa: habitaciones y muebles", emoji:"🏠", xp:35,
    description:"Aprende el vocabulario de las habitaciones, los muebles y los objetos de una casa en inglés.",
    study: {
      vocab: [
        ["the kitchen, the bathroom, the bedroom, the living room", "la cocina, el baño, el dormitorio, el salón"],
        ["the bed, the table, the chair, the sofa", "la cama, la mesa, la silla, el sofá"],
        ["Where is the kitchen?", "¿Dónde está la cocina?"],
        ["The bed is in the bedroom.", "La cama está en el dormitorio."],
        ["on top of, under, next to", "encima de, debajo de, al lado de"]
      ],
      grammar: [
        ["\"There is / There are\" para ubicar objetos", "Se usa \"there is\" (singular) y \"there are\" (plural) para decir qué hay en un lugar.", "There is a table in the kitchen. There are two chairs next to it."]
      ]
    },
    ex:[
      ["mcq","¿Dónde duermes normalmente?",["In the bedroom.","In the kitchen.","In the bathroom.","In the living room."],0,"\"The bedroom\" es la habitación donde se duerme."],
      ["mcq","¿Cuál es la pregunta correcta para saber dónde está algo?",["Where is the kitchen?","What is the kitchen?","When is the kitchen?","Who is the kitchen?"],0,"\"Where is...?\" pregunta por la ubicación de algo."],
      ["fill","Completa: \"The sofa is ___ the window.\"",["next to","on","under","behind"],0,"\"Next to\" indica que dos cosas están juntas, una al lado de la otra."],
      ["translate","Traduce: \"La cama está en el dormitorio.\"",["The bed is in the bedroom.","The bed is in the kitchen.","The chair is in the bedroom.","The bed is the bedroom."],0,"\"La cama está en el dormitorio\" = \"The bed is in the bedroom.\""],
      ["arrange","Ordena: [kitchen / a / table / there / in / is / the]",["There is a table in the kitchen","In the kitchen there is a table","A table there is in the kitchen","There a table is in the kitchen"],0,"\"There is\" + objeto + \"in\" + lugar: \"There is a table in the kitchen.\""],
      ["writing","Describe en inglés, en 20-30 palabras, tu casa o apartamento: qué habitaciones tiene y qué muebles hay en una de ellas.",[],["bedroom","there is","there are"],"Menciona al menos dos habitaciones y dos muebles."]
    ]
  },
  {
    id:"a2_health_pharmacy", level:"A2", title:"La salud: síntomas y la farmacia", emoji:"💊", xp:44,
    description:"Describe síntomas comunes y pide ayuda en la farmacia o con el médico en inglés.",
    study: {
      vocab: [
        ["My head / stomach / throat hurts.", "Me duele la cabeza / el estómago / la garganta."],
        ["I have a fever, a cough, nausea.", "Tengo fiebre, tos, náuseas."],
        ["Do you have something for a headache?", "¿Tiene algo para el dolor de cabeza?"],
        ["Take one pill every eight hours.", "Tómese una pastilla cada ocho horas."],
        ["to make a doctor's appointment", "pedir cita con el médico"]
      ],
      grammar: [
        ["\"Hurt\" para describir dolor", "\"My + parte del cuerpo + hurts/hurt\" es la forma natural de expresar dolor en inglés.", "My head hurts. / My feet hurt."]
      ]
    },
    ex:[
      ["mcq","Tienes dolor de cabeza. ¿Qué dices en inglés?",["My head hurts.","I like my head.","I have my head.","I am my head."],0,"\"My head hurts\" describe el síntoma con el verbo \"hurt\"."],
      ["mcq","En la farmacia, ¿qué preguntas para pedir un medicamento?",["Do you have something for a headache?","Where is the headache?","When is the headache?","Why do you have a headache?"],0,"\"Do you have something for...?\" es la forma natural de pedir un medicamento."],
      ["fill","Completa: \"My feet ___ after running.\"",["hurt","hurts","pain","painful"],0,"\"Feet\" es plural, así que el verbo es \"hurt\" sin \"-s\"."],
      ["translate","Traduce: \"Tengo fiebre y tos.\"",["I have a fever and a cough.","I have fever and cough.","I am fever and cough.","My fever and cough hurt."],0,"\"Tengo fiebre y tos\" = \"I have a fever and a cough\", con el verbo \"have\"."],
      ["arrange","Ordena: [eight / take / pill / hours / one / every]",["Take one pill every eight hours","Every eight hours take one pill","One pill take every eight hours","Take every eight hours one pill"],0,"Imperativo + objeto + frecuencia: \"Take one pill every eight hours.\""],
      ["speaking","Describe en inglés, en 40-60 palabras, una vez que te sentiste mal: qué síntomas tenías y qué hiciste.",[],["hurt","had","went"],"Usa al menos dos síntomas y una acción que tomaste para sentirte mejor."]
    ]
  },
  {
    id:"b1_tech_social_media", level:"B1", title:"Tecnología y redes sociales", emoji:"📱", xp:58,
    description:"Habla sobre el uso de la tecnología y las redes sociales, sus ventajas y sus riesgos, en inglés.",
    study: {
      vocab: [
        ["to post, to share, to comment", "publicar, compartir, comentar"],
        ["to be online / to log off", "estar conectado / desconectarse"],
        ["privacy, personal data", "la privacidad, los datos personales"],
        ["to be dependent on your phone", "depender del teléfono"],
        ["to keep in touch with", "mantenerse en contacto con"]
      ],
      grammar: [
        ["Comparar ventajas y desventajas", "\"On the one hand... on the other hand\" y \"whereas\" ayudan a comparar dos ideas.", "On the one hand, social media helps you keep in touch; on the other, it can take up a lot of time."]
      ]
    },
    ex:[
      ["mcq","¿Cuál es una ventaja real de las redes sociales?",["They help you keep in touch with friends far away.","They always tell the whole truth.","They never affect your privacy.","They don't need an internet connection."],0,"Mantenerse en contacto con personas lejanas es una ventaja concreta y verificable."],
      ["mcq","¿Qué frase expresa preocupación por la privacidad?",["I'm worried about how they use my personal data.","I love sharing everything without thinking.","I never use the internet.","I post photos every five minutes."],0,"La preocupación por los datos personales es un tema central de privacidad digital."],
      ["fill","Completa: \"___ the one hand I like being online, on the other I need to log off sometimes.\"",["On","In","At","For"],0,"\"On the one hand... on the other\" es la estructura para comparar dos ideas."],
      ["translate","Traduce: \"Intento no depender demasiado de mi teléfono.\"",["I try not to depend on my phone too much.","I try not depend too much my phone.","Not I try to depend on my phone.","Depend on my phone I try not too much."],0,"\"Depender de\" = \"to depend on\": \"I try not to depend on my phone too much.\""],
      ["arrange","Ordena: [keep / helps / touch / me / in / it / with friends]",["It helps me keep in touch with friends","Helps it me keep in touch with friends","In touch it helps me keep with friends","It keep helps me in touch with friends"],0,"\"It helps me\" + infinitivo: \"It helps me keep in touch with friends.\""],
      ["writing","Escribe en inglés 45-65 palabras sobre tu relación con las redes sociales: una ventaja, un riesgo y qué haces para equilibrarlo.",[],["on the one hand","on the other hand","privacy"],"Estructura: ventaja + riesgo + una acción concreta para equilibrar ambos."]
    ]
  },
  {
    id:"b2_ethical_dilemmas", level:"B2", title:"Dilemas éticos: argumentar a favor y en contra", emoji:"⚖️", xp:80,
    description:"Presenta y contrapesa argumentos sobre dilemas éticos comunes en inglés.",
    study: {
      vocab: [
        ["in favor of / against", "a favor de / en contra de"],
        ["from an ethical point of view", "desde un punto de vista ético"],
        ["the common good, individual interest", "el bien común, el interés individual"],
        ["to justify a decision", "justificar una decisión"],
        ["there is no single answer", "no hay una respuesta única"]
      ],
      grammar: [
        ["Estructurar un argumento equilibrado", "Presentar primero un argumento, luego el contrario, y cerrar con una postura matizada evita el sesgo.", "Some argue that..., while others maintain that... In my opinion, both sides have a point."]
      ]
    },
    ex:[
      ["mcq","¿Qué frase presenta un argumento de forma equilibrada?",["Some argue that..., while others maintain that...","Everyone knows I'm right.","It's obvious the other side is wrong.","There's no argument against it at all."],0,"Presentar ambos lados antes de opinar es propio de un argumento equilibrado en B2."],
      ["mcq","Un dilema ético típico es \"el bien común frente al interés individual\". ¿Qué significa esto?",["A conflict between what benefits everyone and what benefits one person.","A decision that affects no one.","A topic with no social importance at all.","A purely economic choice with no ethics involved."],0,"El dilema surge cuando lo mejor para la comunidad no coincide con lo mejor para un individuo."],
      ["fill","Completa: \"___ an ethical point of view, the decision is debatable.\"",["From","For","By","With"],0,"\"From an ethical point of view\" es la expresión estándar para introducir una perspectiva."],
      ["translate","Traduce: \"No hay una respuesta única para este dilema.\"",["There is no single answer to this dilemma.","There is no single answer this dilemma.","This dilemma there is no single answer.","A single answer there is no for this dilemma."],0,"\"No hay una respuesta única\" = \"There is no single answer\"."],
      ["mcq","¿Cuál de estas frases justifica una decisión de forma razonada, no emocional?",["It was decided that way because the benefits outweighed the long-term risks.","It was decided that way just because.","It was decided that way because everyone wanted it without thinking.","It was decided that way because that's how it's always been done."],0,"Una justificación razonada compara beneficios y riesgos de forma explícita."],
      ["writing","Elige un dilema ético cotidiano (por ejemplo, decir una mentira piadosa) y escribe en inglés 55-75 palabras presentando un argumento a favor, uno en contra y tu conclusión matizada.",[],["in favor of","against","however"],"Estructura: argumento a favor + argumento en contra + conclusión matizada, no absoluta."]
    ]
  },
  {
    id:"c1_academic_citing", level:"C1", title:"Discurso académico: citar y parafrasear", emoji:"🎓", xp:90,
    description:"Aprende a citar fuentes, parafrasear ideas y evitar el plagio en un registro académico en inglés.",
    study: {
      vocab: [
        ["according to (author, year)", "según (autor, año)"],
        ["as the author points out/argues", "como señala/sostiene el autor"],
        ["to paraphrase an idea", "parafrasear una idea"],
        ["to quote directly", "citar textualmente"],
        ["plagiarism, reliable sources", "el plagio, las fuentes fiables"]
      ],
      grammar: [
        ["Verbos para introducir citas ajenas", "\"Argues that\", \"claims that\", \"points out that\" varían el matiz: no todos implican el mismo grado de certeza.", "The author argues that the policy was a mistake; other researchers, however, point out important nuances."],
        ["Parafrasear sin copiar la estructura", "Parafrasear implica cambiar tanto las palabras como el orden de las ideas, no solo sinónimos sueltos.", "Original: 'The study shows that exercise reduces stress.' Paraphrase: 'According to the research, physical activity helps lower stress levels.'"]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas opciones es una paráfrasis correcta, no una copia disimulada?",["According to the research, physical activity helps lower stress levels.","The study shows that exercise totally reduces stress.","The study clearly shows that exercise reduces stress.","Shows the study that reduces stress the exercise."],0,"Una buena paráfrasis cambia estructura y vocabulario, no solo una o dos palabras."],
      ["mcq","¿Qué verbo transmite mayor distancia crítica del autor citado?",["The author suggests that...","The author categorically proves that...","The author undeniably demonstrates that...","The author definitively confirms that..."],0,"\"Suggests\" indica una afirmación más cautelosa, propia de un análisis crítico riguroso."],
      ["fill","Completa: \"___ the report points out, the measure had a limited impact.\"",["As","Because","Although","However"],0,"\"As the report points out\" introduce una idea atribuida a una fuente de forma fluida."],
      ["translate","Traduce: \"Según el autor, los resultados son poco concluyentes.\"",["According to the author, the results are inconclusive.","According to the author, the results are conclusive.","The author according results inconclusive is.","The results according to the author are conclusive not."],0,"\"Según el autor\" = \"According to the author\"; \"poco concluyentes\" = \"inconclusive\"."],
      ["mcq","¿Cuál de estas prácticas constituye plagio académico?",["Copying a direct sentence without quotation marks or a source reference.","Quoting directly with quotation marks and a reference.","Paraphrasing an idea and citing the original source.","Summarising an article while mentioning where it comes from."],0,"Copiar sin comillas ni referencia, aunque sea una sola frase, se considera plagio."],
      ["writing","Escribe en inglés un párrafo académico de 55-75 palabras que parafrasee (sin copiar) esta idea: 'Internet access has profoundly changed how people get informed.' Cita la fuente como (Author, 2023).",[],["according to","argues","(Author, 2023)"],"No copies la frase original: cambia estructura y vocabulario mientras conservas la idea."]
    ]
  },
  {
    id:"c2_logical_fallacies", level:"C2", title:"Falacias lógicas y persuasión", emoji:"🧠", xp:96,
    description:"Detecta falacias lógicas y estrategias de persuasión en argumentos de alto nivel en inglés.",
    study: {
      vocab: [
        ["ad hominem attack", "el ataque personal (ad hominem)"],
        ["false dichotomy", "la falsa dicotomía"],
        ["slippery slope", "la pendiente resbaladiza"],
        ["to generalize from a single case", "generalizar a partir de un solo caso"],
        ["to appeal to emotion instead of facts", "apelar a la emoción en vez de a los hechos"]
      ],
      grammar: [
        ["Identificar falacias en el discurso", "Una falacia parece un argumento válido pero su estructura lógica es defectuosa, aunque suene persuasiva.", "\"If we allow this, everything will soon spiral out of control\" is a slippery slope: it assumes a chain of consequences without evidence."]
      ]
    },
    ex:[
      ["mcq","\"You shouldn't listen to his economic argument — besides, he's an unpleasant person.\" ¿Qué falacia es esta?",["Ad hominem attack: it discredits the person, not the argument.","False dichotomy: it reduces the options to only two.","Slippery slope: it predicts a chain of consequences.","Hasty generalization from a single case."],0,"El ad hominem ataca al emisor del argumento en vez de refutar el argumento mismo."],
      ["mcq","\"Either you support this law exactly as it is, or you don't care about anyone's safety.\" ¿Qué falacia es esta?",["False dichotomy: it presents only two options when more nuance is possible.","A personal attack against the listener.","An appeal to emotion with no logical argument.","A generalization based on a single isolated case."],0,"La falsa dicotomía oculta opciones intermedias válidas, presentando solo dos extremos."],
      ["fill","\"If we allow this exception, the whole system will soon collapse.\" This sentence is an example of ___.",["a slippery slope","an ad hominem attack","a false dichotomy","an appeal to authority"],0,"El \"slippery slope\" asume, sin evidencia suficiente, una cadena inevitable de consecuencias negativas."],
      ["translate","Traduce con precisión técnica: \"Esta es una falsa dicotomía clásica.\"",["This is a classic false dichotomy.","This is a false classic dichotomy is.","Classic this false dichotomy is.","This false is classic dichotomy."],0,"\"Falsa dicotomía\" se traduce técnicamente como \"false dichotomy\"."],
      ["mcq","Un anuncio muestra imágenes de niños llorando para vender un producto de caridad sin dar datos concretos sobre su impacto. ¿Qué estrategia usa principalmente?",["An appeal to emotion rather than verifiable facts.","A rigorous logical argument based on data.","A precise statistical generalization.","A citation from a reliable academic source."],0,"Usar imágenes emotivas sin datos concretos es apelar a la emoción en vez de a la evidencia."],
      ["writing","Identifica y explica en inglés, en 55-75 palabras, una falacia lógica que hayas escuchado en un debate, anuncio o discusión reciente (real o inventada). Nombra la falacia y explica por qué el argumento es engañoso pese a sonar convincente.",[],["fallacy","because","although it seems"],"Nombra explícitamente el tipo de falacia (ad hominem, false dichotomy, slippery slope, etc.) y justifica tu identificación."]
    ]
  },
  {
    id:"b1_complaints_requests", level:"B1", title:"Quejas y peticiones corteses", emoji:"🙏", xp:56,
    description:"Aprende a quejarte y a pedir cosas de forma educada en inglés, en distintos registros.",
    study: {
      vocab: [
        ["I'm afraid there's a problem with...", "Me temo que hay un problema con..."],
        ["Would you mind + gerundio...?", "¿Te importaría + infinitivo...?"],
        ["Could you possibly...?", "¿Podrías por casualidad...?"],
        ["I'd like to make a complaint about...", "Me gustaría presentar una queja sobre..."],
        ["Thank you for your understanding.", "Gracias por su comprensión."]
      ],
      grammar: [
        ["Peticiones corteses con \"could\" y \"would you mind\"", "\"Could you...?\" y \"Would you mind + -ing?\" suavizan una petición directa.", "Would you mind closing the window? / Could you send me the invoice, please?"]
      ]
    },
    ex:[
      ["mcq","¿Cuál es la forma más cortés de pedir algo?",["Would you mind closing the window?","Close the window now.","Window. Close it.","You must close the window."],0,"\"Would you mind + -ing?\" es una de las formas más corteses de pedir algo en inglés."],
      ["mcq","Quieres quejarte formalmente de un servicio. ¿Qué frase usas?",["I'd like to make a complaint about the service.","The service is terrible, obviously.","I hate this service.","Your service, it's bad."],0,"\"I'd like to make a complaint about...\" es la forma estándar y formal de presentar una queja."],
      ["fill","Completa: \"___ you possibly send me the invoice today?\"",["Could","Would","Should","Must"],0,"\"Could you possibly...?\" es una petición cortés y ligeramente más enfática que \"could you...?\"."],
      ["translate","Traduce: \"Me temo que hay un problema con su pedido.\"",["I'm afraid there's a problem with your order.","I afraid there's a problem your order.","There's a problem I'm afraid with order.","Your order I'm afraid problem there's."],0,"\"Me temo que\" = \"I'm afraid that\", una forma cortés de introducir malas noticias."],
      ["arrange","Ordena: [mind / window / would / closing / the / you]",["Would you mind closing the window","You would mind closing the window","Closing the window would you mind","Mind would you closing the window"],0,"\"Would you mind\" + gerundio: \"Would you mind closing the window?\""],
      ["writing","Escribe en inglés un correo breve (45-65 palabras) quejándote educadamente de un problema con un pedido y pidiendo una solución.",[],["I'm afraid","would you mind","thank you for your understanding"],"Mantén un tono cortés incluso al quejarte: explica el problema, pide una solución concreta y agradece."]
    ]
  },
  {
    id:"b2_reported_speech", level:"B2", title:"Estilo indirecto: informar lo que otros dijeron", emoji:"🗣️", xp:78,
    description:"Transforma preguntas, órdenes y afirmaciones al estilo indirecto en inglés.",
    study: {
      vocab: [
        ["She said (that) she was tired.", "Dijo que estaba cansada."],
        ["He told me to wait.", "Me dijo que esperara."],
        ["They asked if I had finished.", "Preguntaron si había terminado."],
        ["reporting verbs: say, tell, ask, explain", "verbos de reporte: decir, contar, preguntar, explicar"]
      ],
      grammar: [
        ["El retroceso de tiempos verbales (backshift)", "En estilo indirecto, los tiempos verbales suelen retroceder un paso: presente → pasado, pasado → pluscuamperfecto.", "Direct: \"I am tired.\" → Reported: She said she was tired."],
        ["\"Say\" vs \"tell\"", "\"Tell\" necesita un objeto directo (a quién se le dice algo); \"say\" no lo necesita.", "She told me the news. / She said the news was good."]
      ]
    },
    ex:[
      ["mcq","Estilo directo: \"I am tired,\" she said. ¿Cuál es la versión correcta en estilo indirecto?",["She said (that) she was tired.","She said (that) she is tired.","She said (that) I was tired.","She say she was tired."],0,"El presente \"am\" retrocede a pasado \"was\" en estilo indirecto (backshift)."],
      ["mcq","¿Cuál es la diferencia principal entre \"say\" y \"tell\"?",["\"Tell\" necesita un objeto directo (a quién); \"say\" no lo necesita.","\"Say\" siempre necesita un objeto directo y \"tell\" nunca.","No hay ninguna diferencia entre ambos verbos.","\"Tell\" solo se usa en preguntas."],0,"\"Tell\" requiere a quién se dice algo (tell me, tell him); \"say\" no lo requiere necesariamente."],
      ["fill","Estilo directo: \"Wait here,\" he said to me. Estilo indirecto: \"He told me ___ wait there.\"",["to","that","if","for"],0,"Las órdenes en estilo indirecto usan \"tell someone to + infinitivo\": \"He told me to wait there.\""],
      ["translate","Traduce al estilo indirecto en inglés: \"Preguntaron si yo había terminado.\"",["They asked if I had finished.","They asked if I have finished.","They ask if I had finished.","They asked if I finished had."],0,"Preguntas indirectas con \"if\" + sujeto + verbo; el pasado simple retrocede a pluscuamperfecto: \"had finished\"."],
      ["mcq","Estilo directo: \"Don't touch that,\" she said. ¿Cuál es la versión correcta en estilo indirecto?",["She told me not to touch that.","She said me not touch that.","She told not touch that.","She said to not touching that."],0,"Las órdenes negativas usan \"tell someone not to + infinitivo\": \"She told me not to touch that.\""],
      ["writing","Escribe en inglés 45-65 palabras contando (en estilo indirecto) una conversación real o inventada: qué dijo alguien, qué preguntó y qué te pidió que hicieras.",[],["said that","asked if","told me to"],"Usa al menos las tres estructuras: afirmación, pregunta y orden, todas en estilo indirecto."]
    ]
  },
  {
    id:"c1_causal_connectors", level:"C1", title:"Conectores complejos de causa-consecuencia", emoji:"🔗", xp:88,
    description:"Usa conectores avanzados de causa y consecuencia para dar cohesión a un texto formal en inglés.",
    study: {
      vocab: [
        ["given that / on the grounds that", "dado que / por el hecho de que"],
        ["as a result / consequently", "como resultado / en consecuencia"],
        ["this, in turn, leads to...", "esto, a su vez, lleva a..."],
        ["due to the fact that", "debido al hecho de que"]
      ],
      grammar: [
        ["Conectores causales formales", "\"Given that\" y \"on the grounds that\" introducen una causa en un registro formal, más elaborado que \"because\".", "The proposal was rejected on the grounds that it lacked sufficient funding."],
        ["Cadenas de consecuencia", "\"This, in turn, leads to...\" conecta una consecuencia con la siguiente, mostrando una cadena causal.", "Prices rose, which, in turn, led to lower consumer spending."]
      ]
    },
    ex:[
      ["mcq","¿Qué conector es más apropiado en un informe formal para introducir una causa?",["Given that funding was limited, the project was postponed.","Because money, the project was postponed.","The project, so it was postponed because money.","Postponed the project was because of money reasons."],0,"\"Given that\" es un conector causal formal apropiado para informes."],
      ["mcq","\"Prices rose, which, in turn, led to lower consumer spending.\" ¿Qué función cumple \"in turn\"?",["Muestra que un efecto se convierte en la causa del siguiente, en una cadena.","Contradice la idea anterior por completo.","Introduce una opinión personal del autor.","Elimina cualquier relación causal entre las ideas."],0,"\"In turn\" señala que un resultado se convierte en la causa de otro efecto posterior."],
      ["fill","Completa: \"The measure was criticized ___ the grounds that it disproportionately affected small businesses.\"",["on","in","for","with"],0,"\"On the grounds that\" es la colocación fija correcta."],
      ["translate","Traduce: \"Como resultado, las ventas cayeron un 15% ese trimestre.\"",["As a result, sales fell by 15% that quarter.","As a result, sales fell 15% that quarter is.","Result as, sales fell by 15% that quarter.","Sales as a result fell by 15% that quarter is."],0,"\"Como resultado\" = \"As a result\", seguido de la consecuencia."],
      ["mcq","¿Cuál de estas frases muestra una cadena de consecuencias, no una sola causa aislada?",["Costs increased, which, in turn, led to layoffs, which further reduced morale.","Costs increased because of inflation.","The company had high costs last year.","Inflation caused costs to increase this year."],0,"Una cadena causal conecta varios efectos sucesivos, no solo una relación causa-efecto simple."],
      ["writing","Escribe en inglés un párrafo formal de 55-75 palabras que explique una cadena de causa-consecuencia (por ejemplo: un cambio de política y sus efectos en cadena). Usa al menos dos conectores causales avanzados.",[],["given that","as a result","in turn"],"Muestra una cadena: causa inicial → efecto → segundo efecto derivado del primero."]
    ]
  },
  {
    id:"a1_emotions_feelings", level:"A1", title:"Las emociones: cómo te sientes", emoji:"😊", xp:35,
    description:"Aprende a expresar emociones y sentimientos básicos en inglés.",
    study: {
      vocab: [
        ["to be happy, sad, tired, angry", "estar feliz, triste, cansado, enfadado"],
        ["How do you feel?", "¿Cómo te sientes?"],
        ["I'm a bit nervous.", "Estoy un poco nervioso/a."],
        ["to be afraid, to be sleepy, to be hungry", "tener miedo, tener sueño, tener hambre"],
        ["Why are you sad?", "¿Por qué estás triste?"]
      ],
      grammar: [
        ["\"To be\" con emociones", "En inglés, las emociones se expresan con \"to be\" + adjetivo.", "I am happy today. / She is tired after work."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas a alguien cómo se siente en inglés?",["How do you feel?","What's your name?","Where do you live?","How old are you?"],0,"\"How do you feel?\" pregunta por el estado emocional de alguien."],
      ["mcq","Tienes mucho trabajo y poco descanso. ¿Cómo te sientes?",["I'm tired.","I'm happy.","I'm hungry.","I'm cold."],0,"Mucho trabajo y poco descanso llevan típicamente a sentirse \"tired\"."],
      ["fill","Completa: \"I ___ a bit nervous before the exam.\"",["am","is","have","do"],0,"\"I am\" concuerda con el sujeto \"I\": \"I am a bit nervous.\""],
      ["translate","Traduce: \"¿Por qué estás triste?\"",["Why are you sad?","Why are you sadly?","Why you are sad?","Why is you sad?"],0,"\"¿Por qué estás triste?\" = \"Why are you sad?\", con \"are\" para el sujeto \"you\"."],
      ["arrange","Ordena: [tired / work / after / I'm]",["I'm tired after work","After work I'm tired","Tired I'm after work","I'm after work tired"],0,"Sujeto + \"am\" + adjetivo + complemento de tiempo: \"I'm tired after work.\""],
      ["writing","Escribe en inglés 20-30 palabras describiendo cómo te sientes hoy y por qué. Usa al menos dos emociones distintas.",[],["I am","because","I feel"],"Menciona una razón concreta para cada emoción que describas."]
    ]
  },
  {
    id:"a2_hobbies_weekend", level:"A2", title:"El ocio: aficiones y planes de fin de semana", emoji:"🎨", xp:44,
    description:"Habla de tus aficiones y de tus planes para el fin de semana en inglés.",
    study: {
      vocab: [
        ["What do you like to do in your free time?", "¿Qué te gusta hacer en tu tiempo libre?"],
        ["to paint, to play an instrument, to go hiking", "pintar, tocar un instrumento, hacer senderismo"],
        ["What plans do you have for the weekend?", "¿Qué planes tienes para el fin de semana?"],
        ["I'm going to + infinitivo", "voy a + infinitivo"],
        ["to meet up with friends", "quedar con amigos"]
      ],
      grammar: [
        ["\"Be going to\" para planes", "Se usa \"be going to\" + infinitivo para hablar de planes futuros cercanos.", "On Saturday I'm going to meet up with friends."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas por las aficiones de alguien en inglés?",["What do you like to do in your free time?","What time is it?","Where do you work?","How many siblings do you have?"],0,"\"What do you like to do in your free time?\" pregunta específicamente por las aficiones."],
      ["mcq","¿Cuál de estas frases describe un plan futuro cercano?",["On Saturday I'm going to meet up with friends.","On Saturday I met up with friends.","On Saturday I always meet up with friends.","On Saturday I was meeting up with friends."],0,"\"Be going to\" + infinitivo expresa un plan futuro concreto y cercano."],
      ["fill","Completa: \"This weekend I ___ going to go hiking.\"",["am","is","do","have"],0,"\"I am going to\" es la forma correcta para el sujeto \"I\"."],
      ["translate","Traduce: \"¿Qué planes tienes para el fin de semana?\"",["What plans do you have for the weekend?","What plans are you for the weekend?","What plans you have the weekend for?","For the weekend what plans are you?"],0,"\"¿Qué planes tienes para el fin de semana?\" = \"What plans do you have for the weekend?\""],
      ["arrange","Ordena: [instrument / play / an / I / like / to]",["I like to play an instrument","Like I to play an instrument","An instrument I like to play","I to play like an instrument"],0,"\"I like\" + infinitivo: \"I like to play an instrument.\""],
      ["speaking","Explica en inglés, en 40-60 palabras, tus aficiones favoritas y tus planes para el próximo fin de semana.",[],["I like","I'm going to","meet up"],"Menciona al menos dos aficiones y un plan concreto usando \"going to\"."]
    ]
  },
  {
    id:"b1_environment_sustainability", level:"B1", title:"El medio ambiente: hábitos sostenibles", emoji:"🌱", xp:60,
    description:"Habla sobre el cuidado del medio ambiente y los hábitos sostenibles en inglés.",
    study: {
      vocab: [
        ["to recycle, to reuse, to reduce consumption", "reciclar, reutilizar, reducir el consumo"],
        ["climate change, carbon footprint", "el cambio climático, la huella de carbono"],
        ["single-use products", "los productos de un solo uso"],
        ["to save energy / water", "ahorrar energía / agua"],
        ["to take steps to protect the planet", "tomar medidas para proteger el planeta"]
      ],
      grammar: [
        ["El futuro simple para consecuencias", "El futuro simple con \"will\" describe consecuencias probables de acciones actuales.", "If we don't reduce plastic, pollution will increase."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas acciones ayuda a reducir la huella de carbono?",["Using public transport instead of a car.","Buying more single-use products.","Leaving the lights on all day.","Using the car for very short trips."],0,"El transporte público reduce las emisiones individuales de carbono."],
      ["mcq","¿Qué frase describe correctamente una consecuencia futura probable?",["If we don't reduce plastic, pollution will increase.","If we don't reduce plastic, pollution increased.","If we don't reduce plastic, pollution increases yesterday.","If we don't reduce plastic, pollution to increase."],0,"El futuro simple (\"will increase\") expresa una consecuencia probable de una condición actual."],
      ["fill","Completa: \"It's important to ___ water, especially in summer.\"",["save","spend","waste","buy"],0,"\"Save water\" es la expresión correcta para reducir su consumo."],
      ["translate","Traduce: \"Deberíamos reducir el uso de productos de un solo uso.\"",["We should reduce the use of single-use products.","We should reduce the use single-use products of.","Reduce we should the use of single-use products.","We should use single-use products reduce."],0,"\"Productos de un solo uso\" = \"single-use products\"; \"deberíamos reducir\" = \"we should reduce\"."],
      ["arrange","Ordena: [important / recycle / glass / it's / to]",["It's important to recycle glass","Glass it's important to recycle","Important it's to recycle glass","It's to recycle important glass"],0,"\"It's important to\" + infinitivo + objeto: \"It's important to recycle glass.\""],
      ["writing","Escribe en inglés 45-65 palabras sobre tres hábitos sostenibles que practicas o te gustaría empezar a practicar, y por qué son importantes.",[],["recycle","save","carbon footprint"],"Menciona al menos tres hábitos concretos y una razón para cada uno."]
    ]
  },
  {
    id:"b2_ai_future_work", level:"B2", title:"Inteligencia artificial y el futuro del trabajo", emoji:"🤖", xp:80,
    description:"Discute el impacto de la inteligencia artificial en el trabajo, con argumentos matizados en inglés.",
    study: {
      vocab: [
        ["to automate repetitive tasks", "automatizar tareas repetitivas"],
        ["to replace jobs", "sustituir puestos de trabajo"],
        ["to adapt to new tools", "adaptarse a nuevas herramientas"],
        ["to generate new job opportunities", "generar nuevas oportunidades laborales"],
        ["it depends on how it's implemented", "depende de cómo se implemente"]
      ],
      grammar: [
        ["El futuro perfecto para especulación", "\"Will have\" + participio especula sobre lo que probablemente haya ocurrido para cierto momento futuro.", "By 2030, AI will have changed many industries."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases presenta una postura matizada sobre la IA y el empleo?",["It depends on how it's implemented: it can automate tasks but also create new jobs.","AI is going to destroy all jobs, no exceptions.","AI doesn't affect employment at all.","There's no doubt about the future of work."],0,"Una postura matizada reconoce ambos efectos posibles, sin absolutos."],
      ["mcq","¿Qué significa \"to automate repetitive tasks\"?",["To make a machine do tasks a person used to do manually and repeatedly.","To hire more people for repetitive tasks.","To completely eliminate all tasks in a company.","To increase the salary of people doing repetitive tasks."],0,"Automatizar significa que un sistema realiza la tarea en lugar de una persona."],
      ["fill","Completa: \"By 2030, artificial intelligence ___ have changed many industries.\"",["will","had","has","would"],0,"El futuro perfecto (\"will have changed\") especula sobre algo que probablemente habrá ocurrido para una fecha futura."],
      ["translate","Traduce: \"Algunos empleos se automatizarán, pero también se crearán otros nuevos.\"",["Some jobs will be automated, but new ones will also be created.","Some jobs will automate, but new ones will also create.","Jobs some will be automated, but new ones will create.","Some jobs will be automated, but also new ones created."],0,"Ambas cláusulas van con \"will\": \"will be automated\" y \"will be created\"."],
      ["mcq","¿Cuál de estas afirmaciones muestra pensamiento crítico, no una opinión sin fundamento?",["The impact of AI on jobs will depend on the sector and how the transition is managed.","AI is always good for everyone, no exceptions.","AI is always bad for everyone, no exceptions.","It's not worth thinking about the future of work."],0,"Reconocer que el impacto depende de factores concretos (sector, gestión) es pensamiento crítico y matizado."],
      ["writing","Escribe en inglés 55-75 palabras sobre cómo crees que la inteligencia artificial cambiará tu campo de trabajo o estudio en los próximos años. Incluye un aspecto positivo y uno preocupante.",[],["automate","depends on","however"],"Evita los absolutos: reconoce tanto ventajas como riesgos concretos."]
    ]
  },
  {
    id:"c1_advertising_persuasion", level:"C1", title:"El lenguaje publicitario: persuasión y connotación", emoji:"📢", xp:88,
    description:"Analiza cómo el lenguaje publicitario en inglés usa la connotación y las técnicas de persuasión.",
    study: {
      vocab: [
        ["a positive / negative connotation", "una connotación positiva / negativa"],
        ["to appeal to the desire to belong", "apelar al deseo de pertenencia"],
        ["a catchy slogan", "un eslogan pegadizo"],
        ["to create a sense of urgency", "crear una sensación de urgencia"],
        ["the target audience", "el público objetivo"]
      ],
      grammar: [
        ["Connotación frente a denotación", "La denotación es el significado literal de una palabra; la connotación es la carga emocional o cultural asociada.", "\"House\" (denotación: edificio) frente a \"home\" (connotación: calidez, pertenencia)."]
      ]
    },
    ex:[
      ["mcq","Un anuncio usa la palabra \"home\" en vez de \"house\". ¿Qué logra con esto?",["Añade una connotación emocional de calidez y pertenencia.","Cambia completamente el significado literal.","Elimina cualquier interpretación emocional.","No tiene ningún efecto en el mensaje."],0,"\"Home\" tiene connotaciones emocionales que \"house\" no transmite, aunque el significado literal sea similar."],
      ["mcq","\"Only 3 left in stock, buy now!\" ¿Qué técnica de persuasión usa esta frase?",["Create a sense of urgency to prompt a quick decision.","Appeal exclusively to objective technical data.","Offer a neutral comparison with other products.","Describe the product without any pressure."],0,"Mencionar unidades limitadas y urgencia empuja a decidir sin pensarlo demasiado."],
      ["fill","Completa: \"This ad targets a very specific ___ audience: young professionals.\"",["target","text","author","reader"],0,"\"Target audience\" es la expresión estándar para referirse a la audiencia a la que se dirige un mensaje."],
      ["translate","Traduce: \"El eslogan apela al deseo de pertenencia.\"",["The slogan appeals to the desire to belong.","The slogan appeal to the desire to belong.","The desire to belong appeals to the slogan.","The slogan appeals the desire to belong."],0,"\"Apela a\" = \"appeals to\"; \"el deseo de pertenencia\" = \"the desire to belong\"."],
      ["mcq","¿Cuál de estas palabras tiene una connotación más positiva que su sinónimo más neutral?",["\"Exclusive\" versus \"limited\".","\"Product\" versus \"item\".","\"Buy\" versus \"purchase\".","\"Ad\" versus \"advertisement\"."],0,"\"Exclusive\" añade una connotación de prestigio y distinción que \"limited\" no transmite igual."],
      ["writing","Elige un anuncio real o inventado y escribe en inglés 55-75 palabras analizando: qué connotaciones usa, a qué público objetivo se dirige y qué técnica de persuasión emplea.",[],["connotation","target audience","urgency"],"Identifica al menos una palabra con connotación específica y una técnica de persuasión concreta."]
    ]
  },
  {
    id:"c2_political_discourse", level:"C2", title:"El discurso político: ambigüedad estratégica y eufemismo", emoji:"🎙️", xp:96,
    description:"Analiza la ambigüedad estratégica y el eufemismo en el discurso político de alto nivel en inglés.",
    study: {
      vocab: [
        ["a euphemism", "un eufemismo"],
        ["strategic ambiguity", "la ambigüedad estratégica"],
        ["to dodge a direct question", "evadir una pregunta directa"],
        ["a budget adjustment (euphemism for a cut)", "un ajuste presupuestario (eufemismo por recorte)"],
        ["to commit without fully committing", "comprometerse sin comprometerse del todo"]
      ],
      grammar: [
        ["Reconocer el eufemismo político", "Un eufemismo sustituye una expresión directa por otra más suave, a menudo para suavizar una realidad incómoda.", "\"Budget adjustment\" suena más neutral que \"spending cut\", aunque describa lo mismo."],
        ["Ambigüedad estratégica", "Los políticos a veces eligen deliberadamente frases vagas para evitar comprometerse con una postura clara.", "\"We are evaluating all options\" no dice qué opción se tomará realmente."]
      ]
    },
    ex:[
      ["mcq","Un político dice \"budget adjustment\" en vez de \"spending cut\". ¿Qué logra con esto?",["It softens the negative impact of the measure through a euphemism.","It completely changes the meaning of the measure.","It makes the measure more transparent and direct.","It removes any possible negative interpretation."],0,"El eufemismo suaviza la percepción sin cambiar la realidad de la medida."],
      ["mcq","\"We are evaluating all options\" said in response to a direct question. ¿Qué función cumple esta frase?",["It dodges a clear commitment through strategic ambiguity.","It gives a completely transparent and specific answer.","It confirms exactly which decision will be made.","It flatly denies any possible decision."],0,"Esta frase evita comprometerse con una postura concreta, manteniendo todas las opciones abiertas en apariencia."],
      ["fill","Completa: \"The government announced a budget ___ that actually meant significant cuts.\"",["adjustment","increase","gift","prize"],0,"\"Budget adjustment\" es el eufemismo típico para \"spending cut\"."],
      ["translate","Traduce con precisión: \"Los políticos a veces se comprometen sin comprometerse del todo.\"",["Politicians sometimes commit without fully committing.","Politicians sometimes commit without commit fully.","Sometimes politicians fully commit without committing.","Politicians commit sometimes without fully commit."],0,"\"Comprometerse sin comprometerse del todo\" = \"to commit without fully committing\", capturando la ambigüedad intencional."],
      ["mcq","¿Cuál de estas frases es un ejemplo claro de ambigüedad estratégica?",["We're not ruling out any possibility at this time.","The budget will be cut by exactly 12% this year.","The law will take effect on January 1st, with no exceptions.","I will resign from my position next week."],0,"\"We're not ruling out any possibility\" no compromete a nada concreto, dejando todas las puertas abiertas."],
      ["writing","Escribe en inglés 55-75 palabras analizando un eufemismo o un caso de ambigüedad estratégica que hayas visto en un discurso político real o inventado. Explica qué frase directa estaría evitando y por qué.",[],["euphemism","instead of","avoids committing"],"Identifica la frase exacta, el significado más directo que sustituye, y el efecto que busca en la audiencia."]
    ]
  },
  {
    id:"a1_money_prices", level:"A1", title:"Números ordinales, dinero y precios", emoji:"💰", xp:36,
    description:"Aprende a hablar de precios, dinero y números ordinales en inglés.",
    study: {
      vocab: [
        ["first, second, third...", "primero, segundo, tercero..."],
        ["How much does this cost?", "¿Cuánto cuesta esto?"],
        ["It costs ten euros.", "Cuesta diez euros."],
        ["cheap, expensive", "barato, caro"],
        ["to pay in cash / by card", "pagar en efectivo / con tarjeta"]
      ],
      grammar: [
        ["\"Cost\" para precios", "\"Cost\" no cambia con el sujeto en presente simple (verbo irregular sin -s en tercera persona).", "The book costs ten euros. The books cost twenty euros."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas el precio de algo en inglés?",["How much does this cost?","What is this?","Where is this?","When is this?"],0,"\"How much does this cost?\" es la pregunta estándar para pedir un precio."],
      ["mcq","Un producto de 5 euros es más barato que uno de 50 euros. ¿Qué palabra describe el de 5 euros?",["Cheap.","Expensive.","Free.","Big."],0,"\"Cheap\" describe algo de precio bajo en comparación con otra cosa."],
      ["fill","Completa: \"The shoes ___ forty euros.\"",["cost","costs","are","is"],0,"\"Cost\" no lleva \"-s\" en tercera persona plural con \"shoes\"."],
      ["translate","Traduce: \"Cuesta diez euros.\"",["It costs ten euros.","It cost ten euros.","It costs ten euro.","It is ten euros cost."],0,"\"Cuesta diez euros\" (singular) = \"It costs ten euros.\""],
      ["arrange","Ordena: [card / always / by / I / pay]",["I always pay by card","Always I pay by card","By card always I pay","I pay by card always"],0,"Sujeto + adverbio + verbo + complemento: \"I always pay by card.\""],
      ["writing","Escribe en inglés 20-30 palabras sobre tus hábitos de compra: qué cosas compras normalmente, si prefieres pagar en efectivo o con tarjeta, y si buscas cosas baratas.",[],["costs","cheap","pay"],"Usa al menos un número ordinal o un precio concreto en tu respuesta."]
    ]
  },
  {
    id:"a2_restaurant_ordering", level:"A2", title:"En el restaurante: pedir y pagar la cuenta", emoji:"🍽️", xp:45,
    description:"Aprende a pedir comida, hacer preguntas al camarero y pagar la cuenta en un restaurante en inglés.",
    study: {
      vocab: [
        ["I would like to order...", "Quisiera pedir..."],
        ["What do you recommend?", "¿Qué me recomienda?"],
        ["Could you bring me the bill, please?", "¿Me trae la cuenta, por favor?"],
        ["Is the tip included?", "¿Está incluida la propina?"],
        ["For me, the set menu.", "Para mí, el menú del día."]
      ],
      grammar: [
        ["\"Would like\" para pedir con cortesía", "\"Would like\" es más formal y cortés que \"want\" al pedir algo.", "I would like to order the soup and the chicken, please."]
      ]
    },
    ex:[
      ["mcq","¿Cuál es la forma más cortés de pedir comida en un restaurante en inglés?",["I would like to order the soup, please.","Give me the soup now.","I want soup now.","Soup, now."],0,"\"I would like\" es la forma cortés y formal de pedir algo."],
      ["mcq","Terminaste de comer y quieres pagar. ¿Qué dices en inglés?",["Could you bring me the bill, please?","Could you bring me the menu, please?","What do you recommend?","Is this table free?"],0,"\"Could you bring me the bill, please?\" es la frase estándar para pedir pagar."],
      ["fill","Completa: \"I ___ like to order the fish with salad, please.\"",["would","want now","give","have"],0,"\"I would like\" es la forma cortés estándar para hacer un pedido."],
      ["translate","Traduce: \"¿Está incluida la propina?\"",["Is the tip included?","Is the tip include?","The tip is included is?","Included is the tip in?"],0,"\"¿Está incluida la propina?\" = \"Is the tip included?\""],
      ["arrange","Ordena: [recommend / you / do / what]",["What do you recommend","You what do recommend","Recommend what do you","You recommend what do"],0,"Pregunta con \"what\" al inicio: \"What do you recommend?\""],
      ["speaking","Representa en inglés, en 40-60 palabras, una conversación breve en un restaurante: pide un plato, pregunta por una recomendación y pide la cuenta al final.",[],["would like","recommend","the bill"],"Incluye las tres partes: pedido, pregunta al camarero y solicitud de la cuenta."]
    ]
  },
  {
    id:"b1_personal_finance", level:"B1", title:"Finanzas personales: el banco y el presupuesto", emoji:"🏦", xp:62,
    description:"Habla sobre cuentas bancarias, ahorro y presupuesto personal en inglés.",
    study: {
      vocab: [
        ["to open a bank account", "abrir una cuenta bancaria"],
        ["to make a monthly budget", "hacer un presupuesto mensual"],
        ["to save up for a goal", "ahorrar para un objetivo"],
        ["fixed expenses and variable expenses", "los gastos fijos y los gastos variables"],
        ["to take out a loan, to pay in installments", "pedir un préstamo, pagar a plazos"]
      ],
      grammar: [
        ["\"Should\" para consejos financieros", "\"Should\" + infinitivo da un consejo sin sonar demasiado directo.", "You should save at least 10% of your salary each month."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases da un consejo financiero de forma adecuada?",["You should save a little every month, even if it's small.","Save right now, there's no other option.","Saving is completely useless.","You'll never be able to save anything."],0,"\"Should\" + infinitivo da un consejo de forma cortés y razonable."],
      ["mcq","¿Qué diferencia hay entre gastos fijos y variables?",["Fixed expenses repeat every month at the same amount; variable ones change.","Fixed expenses change every month; variable ones are always the same.","There's no real difference between them.","Variable expenses only exist in businesses, not for individuals."],0,"Los gastos fijos (alquiler, por ejemplo) se mantienen estables; los variables (ocio, comida) cambian mes a mes."],
      ["fill","Completa: \"I'm going to ___ a new bank account this month.\"",["open","close","spend","lose"],0,"\"Open a bank account\" es la colocación correcta para crear una cuenta nueva."],
      ["translate","Traduce: \"Deberías hacer un presupuesto mensual.\"",["You should make a monthly budget.","You should make budget monthly a.","A monthly budget you should make.","You should a monthly budget make."],0,"\"Deberías hacer un presupuesto mensual\" = \"You should make a monthly budget.\""],
      ["arrange","Ordena: [save / a / for / goal / want / I / to]",["I want to save for a goal","For a goal I want to save","Save I want to for a goal","I want for a goal to save"],0,"Sujeto + \"want to\" + infinitivo + complemento: \"I want to save for a goal.\""],
      ["writing","Escribe en inglés 45-65 palabras sobre tu relación con el dinero: cómo organizas tu presupuesto, si ahorras para algo concreto y algún hábito financiero que te gustaría mejorar.",[],["budget","save","expenses"],"Menciona al menos un gasto fijo, un gasto variable y una meta de ahorro."]
    ]
  },
  {
    id:"b2_mental_wellbeing", level:"B2", title:"Bienestar y salud mental: hablar con matices", emoji:"🧘", xp:82,
    description:"Habla sobre el bienestar emocional y la salud mental con un vocabulario más matizado en inglés.",
    study: {
      vocab: [
        ["to feel overwhelmed", "sentirse abrumado/a"],
        ["to set boundaries, to take care of yourself", "poner límites, cuidar de uno mismo"],
        ["burnout", "el agotamiento (burnout)"],
        ["asking for help is not a sign of weakness", "pedir ayuda no es un signo de debilidad"],
        ["to process one's emotions", "procesar las emociones"]
      ],
      grammar: [
        ["\"It's important that\" + subjuntivo", "En inglés formal, \"it's important that\" puede ir seguido del subjuntivo (forma base del verbo), aunque en el habla informal se usa a menudo el indicativo.", "It's important that you talk to someone you trust about how you feel."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases da una recomendación de forma clara y natural?",["It's important that you rest when you need to.","Important is that you rest when needing.","It important that you resting when need.","Is important you rest when you needing."],0,"\"It's important that you rest\" es la estructura natural para dar una recomendación."],
      ["mcq","¿Qué significa \"to feel overwhelmed\"?",["To feel like there are too many things to handle at once.","To feel extremely happy and calm.","To feel absolutely nothing.","To feel curious about something new."],0,"\"Overwhelmed\" describe una sensación de exceso de tareas o emociones difíciles de manejar."],
      ["fill","Completa: \"Setting ___ is important to protect your wellbeing.\"",["boundaries","money","clothes","food"],0,"\"Setting boundaries\" es la expresión correcta para proteger el propio bienestar emocional."],
      ["translate","Traduce: \"Pedir ayuda no es un signo de debilidad.\"",["Asking for help is not a sign of weakness.","Ask for help is not sign of weakness.","Asking help for is not a weakness sign.","Not asking for help is a sign of weakness."],0,"\"Pedir ayuda no es un signo de debilidad\" = \"Asking for help is not a sign of weakness.\""],
      ["mcq","¿Cuál de estas frases refleja procesar una emoción de forma saludable, no evitarla?",["I recognise that I'm sad and I give myself time to understand why.","I pretend nothing is wrong and ignore how I feel.","I constantly distract myself so I don't feel anything.","I tell everyone I'm perfectly fine, even when I'm not."],0,"Reconocer y explorar una emoción, en vez de evitarla, es un procesamiento emocional saludable."],
      ["writing","Escribe en inglés 55-75 palabras sobre una estrategia que uses (o te gustaría usar) para cuidar tu bienestar emocional cuando te sientes abrumado/a.",[],["overwhelmed","boundaries","process"],"Usa al menos una estructura de recomendación (\"it's important that...\")."]
    ]
  },
  {
    id:"c1_legal_language", level:"C1", title:"Lenguaje jurídico básico: contratos y cláusulas", emoji:"📜", xp:90,
    description:"Comprende el vocabulario y las estructuras básicas del lenguaje jurídico en contratos, en inglés.",
    study: {
      vocab: [
        ["the contracting parties", "las partes contratantes"],
        ["a clause, an appendix", "una cláusula, un anexo"],
        ["to terminate a contract", "rescindir un contrato"],
        ["to be subject to the terms and conditions", "estar sujeto a los términos y condiciones"],
        ["in the event of a breach", "en caso de incumplimiento"]
      ],
      grammar: [
        ["El lenguaje formal impersonal en contratos", "Los contratos en inglés usan estructuras pasivas y modales como \"shall\" para sonar objetivos.", "This contract may be terminated by either party with 30 days' notice."],
        ["\"In the event that\" para condiciones legales", "Esta estructura formal introduce condiciones legales hipotéticas.", "In the event that either party breaches this agreement, a penalty shall apply."]
      ]
    },
    ex:[
      ["mcq","¿Qué significa \"to terminate a contract\"?",["To end or cancel a contract before its expected completion.","To sign a new contract.","To modify only one clause of the contract.","To automatically renew a contract."],0,"\"Terminate\" significa poner fin a un contrato, generalmente antes de su vencimiento natural."],
      ["mcq","¿Cuál de estas frases usa correctamente el lenguaje formal impersonal típico de un contrato?",["This contract may be terminated by either party.","Anyone can just break this contract if they want.","Someone can cancel this whenever they feel like it.","You can cancel the contract just because."],0,"El lenguaje contractual formal usa construcciones pasivas y modales formales, evitando un tono coloquial."],
      ["fill","Completa: \"___ the event that either party breaches this agreement, a penalty shall apply.\"",["In","Because of","Although","However"],0,"\"In the event that\" introduce una condición legal hipotética."],
      ["translate","Traduce: \"El contrato está sujeto a los términos y condiciones descritos en el Anexo A.\"",["The contract is subject to the terms and conditions described in Appendix A.","The contract is subject the terms and conditions described in Appendix A.","The contract is subject to terms and conditions in Appendix A described.","Subject the contract is to the terms of Appendix A."],0,"\"Sujeto a\" = \"subject to\"; \"descritos en el Anexo A\" = \"described in Appendix A\"."],
      ["mcq","¿Qué son \"the contracting parties\"?",["The people or entities that sign and commit to a contract.","Only the person who drafts the contract.","The sections or chapters of a contract.","The witnesses who don't sign the contract."],0,"\"The contracting parties\" se refiere a quienes firman el contrato y asumen obligaciones en él."],
      ["writing","Escribe en inglés 55-75 palabras redactando una cláusula sencilla de un contrato ficticio (por ejemplo, sobre plazos de entrega o condiciones de cancelación), usando un registro formal e impersonal.",[],["the parties","in the event that","terminate"],"Usa al menos una construcción pasiva o modal formal (\"shall\", \"may be\"), propia del registro jurídico formal."]
    ]
  },
  {
    id:"c2_literary_criticism", level:"C2", title:"Crítica literaria: voz narrativa y estilo", emoji:"📖", xp:97,
    description:"Analiza la voz narrativa, el estilo y las decisiones formales de un texto literario en inglés.",
    study: {
      vocab: [
        ["the narrative voice", "la voz narrativa"],
        ["a reliable / unreliable narrator", "un narrador fiable / poco fiable"],
        ["point of view (first, third person)", "el punto de vista (primera, tercera persona)"],
        ["the tone and register of a text", "el tono y el registro de un texto"],
        ["a narrative technique (flashback, ellipsis)", "una técnica narrativa (flashback, elipsis)"]
      ],
      grammar: [
        ["Analizar decisiones formales del autor", "El análisis literario avanzado conecta una elección formal (punto de vista, tiempo verbal) con su efecto en el lector.", "The use of first person creates intimacy, but also limits the perspective to what the narrator can know or perceive."]
      ]
    },
    ex:[
      ["mcq","¿Qué caracteriza a un \"unreliable narrator\"?",["Their account of events may be biased, incomplete, or misleading.","They always tell the absolute truth about everything.","They never have an opinion on the events they narrate.","They only appear in scientific texts, never in fiction."],0,"Un narrador poco fiable ofrece una perspectiva que el lector debe cuestionar, por sesgo, ignorancia o engaño."],
      ["mcq","¿Qué efecto suele producir la narración en primera persona?",["It creates closeness with the narrator, but limits the perspective to what they know.","It removes any emotional connection with the reader.","It always guarantees an objective view of events.","It is only used in non-literary texts."],0,"La primera persona acerca al lector al narrador, a costa de una visión necesariamente parcial de los hechos."],
      ["fill","Completa: \"The use of a ___ interrupts the chronology to show a past event.\"",["flashback","epilogue","prologue","index"],0,"Un \"flashback\" es la técnica narrativa que interrumpe la cronología lineal para mostrar el pasado."],
      ["translate","Traduce con precisión técnica: \"La falta de fiabilidad del narrador obliga al lector a cuestionar cada afirmación.\"",["The narrator's unreliability forces the reader to question every claim.","The narrator unreliability force the reader question every claim.","The unreliable narrator force to question reader every claim is.","Question every claim forces the narrator's unreliability the reader."],0,"\"Falta de fiabilidad\" se traduce técnicamente como \"unreliability\"."],
      ["mcq","¿Cuál de estos análisis conecta correctamente una decisión formal con su efecto en el lector?",["Present-tense narration creates a sense of immediacy, as if events were happening right now.","The author used present tense because it's easier to write.","Present tense has no effect on how the story is perceived.","Present tense is only used in poetry, never in narrative."],0,"Un buen análisis literario vincula la elección formal (tiempo verbal) con un efecto concreto en la experiencia de lectura."],
      ["writing","Elige un cuento, novela o relato que conozcas (o inventa uno breve) y escribe en inglés 55-75 palabras analizando su voz narrativa: punto de vista, fiabilidad del narrador y un efecto que esto produce en el lector.",[],["narrative voice","point of view","effect"],"Conecta explícitamente una decisión formal del autor con un efecto concreto en la lectura, no solo describas la trama."]
    ]
  },
  {
    id:"a1_professions_jobs", level:"A1", title:"Las profesiones: ¿a qué te dedicas?", emoji:"👩‍⚕️", xp:36,
    description:"Aprende el vocabulario básico de las profesiones y a hablar de tu trabajo en inglés.",
    study: {
      vocab: [
        ["doctor, teacher, engineer, waiter/waitress", "médico/a, profesor/a, ingeniero/a, camarero/a"],
        ["What do you do for a living?", "¿A qué te dedicas?"],
        ["I'm a student / I work in an office.", "Soy estudiante / Trabajo en una oficina."],
        ["Where do you work?", "¿Dónde trabajas?"],
        ["to work as + profession", "trabajar de/como + profesión"]
      ],
      grammar: [
        ["\"To be\" con profesiones (con artículo)", "En inglés, \"to be\" + profesión SÍ lleva artículo indefinido \"a/an\", a diferencia del español.", "I am a teacher. (no \"I am teacher\")"]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas la profesión de alguien en inglés?",["What do you do for a living?","What's your name?","Where do you live?","How old are you?"],0,"\"What do you do for a living?\" pregunta específicamente por la profesión u ocupación."],
      ["mcq","¿Cuál es la forma correcta de decir tu profesión en inglés?",["I am a teacher.","I am teacher.","I have teacher.","I do teacher."],0,"En inglés, \"to be\" + profesión lleva artículo: \"I am a teacher.\""],
      ["fill","Completa: \"My sister ___ a doctor at a hospital.\"",["is","has","does","are"],0,"\"Is\" concuerda con \"my sister\": \"My sister is a doctor.\""],
      ["translate","Traduce: \"Trabajo en una oficina.\"",["I work in an office.","I work an office.","I am work in an office.","I work of an office."],0,"\"Trabajo en una oficina\" = \"I work in an office.\""],
      ["arrange","Ordena: [waiter / work / restaurant / a / as / a / I / in]",["I work as a waiter in a restaurant","As a waiter I work in a restaurant","I work in a restaurant as a waiter","In a restaurant I work as a waiter"],0,"\"I work as\" + profesión + \"in\" + lugar: \"I work as a waiter in a restaurant.\""],
      ["writing","Escribe en inglés 20-30 palabras sobre tu profesión (real o imaginada) y dónde trabajas. Menciona al menos dos tareas que haces en tu trabajo.",[],["I am a","I work","I work as"],"Usa \"to be a\" para la profesión y \"work in/as\" para el lugar o rol."]
    ]
  },
  {
    id:"a2_describing_people", level:"A2", title:"Describir personas: apariencia y personalidad", emoji:"🧑‍🤝‍🧑", xp:46,
    description:"Aprende a describir el aspecto físico y la personalidad de otras personas en inglés.",
    study: {
      vocab: [
        ["tall, short, slim", "alto/a, bajo/a, delgado/a"],
        ["has long/short hair, wears glasses", "tiene el pelo largo/corto, lleva gafas"],
        ["is nice, shy, funny", "es simpático/a, tímido/a, divertido/a"],
        ["looks like his/her mother/father", "se parece a su madre/padre"],
        ["What is your best friend like?", "¿Cómo es tu mejor amigo/a?"]
      ],
      grammar: [
        ["\"To be\" para características, \"to have\" y \"to wear\" para rasgos físicos", "\"To be\" describe personalidad y rasgos estables; \"to have\" y \"to wear\" describen partes del cuerpo o accesorios.", "She is very nice, has long hair, and wears glasses."]
      ]
    },
    ex:[
      ["mcq","¿Cómo preguntas cómo es la personalidad de alguien en inglés?",["What is your best friend like?","How are you?","What time is it?","Where are you from?"],0,"\"What is... like?\" pregunta por las características o la personalidad de alguien."],
      ["mcq","¿Cuál de estas frases describe correctamente el aspecto físico de alguien?",["He has short hair and wears glasses.","He is short hair and wears glasses.","He has nice and tall.","He is has glasses."],0,"\"Have\" se usa para partes del cuerpo (\"has short hair\") y \"wear\" para accesorios (\"wears glasses\")."],
      ["fill","Completa: \"My brother ___ very funny and always makes jokes.\"",["is","has","wears","does"],0,"\"Is\" describe un rasgo de personalidad estable: \"is very funny\"."],
      ["translate","Traduce: \"Tiene el pelo largo y lleva gafas.\"",["She has long hair and wears glasses.","She is long hair and wears glasses.","She has long hair and is glasses.","She wears long hair and has glasses on."],0,"\"Tiene el pelo largo\" = \"has long hair\"; \"lleva gafas\" = \"wears glasses\"."],
      ["arrange","Ordena: [mother / looks / like / her / she]",["She looks like her mother","Like her mother she looks","Looks she like her mother","She her mother looks like"],0,"\"Looks like\" + persona: \"She looks like her mother.\""],
      ["speaking","Describe en inglés, en 40-60 palabras, a una persona que conoces bien: su aspecto físico y tres rasgos de su personalidad.",[],["has","is","wears"],"Incluye al menos dos rasgos físicos y dos de personalidad."]
    ]
  },
  {
    id:"b1_education_learning", level:"B1", title:"La educación: sistemas escolares y hábitos de estudio", emoji:"🎒", xp:60,
    description:"Habla sobre sistemas educativos, métodos de estudio y experiencias escolares en inglés.",
    study: {
      vocab: [
        ["compulsory / higher education", "la educación obligatoria / superior"],
        ["to pass/fail an exam", "aprobar/suspender un examen"],
        ["to memorize versus to understand", "memorizar frente a comprender"],
        ["a curriculum, a school subject", "un plan de estudios, una asignatura"],
        ["to learn at your own pace", "aprender a tu propio ritmo"]
      ],
      grammar: [
        ["Comparativos para comparar sistemas", "\"More... than\", \"less... than\" y \"as... as\" sirven para comparar métodos o sistemas educativos.", "This system is more practical than the traditional one, although it's not as structured as that one."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases compara correctamente dos sistemas educativos?",["This system is more practical than the traditional one.","This system is practical more than traditional.","This system is as practical the traditional.","This system more practical is than traditional."],0,"\"More... than\" es la estructura comparativa correcta en inglés."],
      ["mcq","¿Qué diferencia hay entre memorizar y comprender?",["Memorizing is repeating information; understanding means grasping its meaning and applying it.","They are exactly the same, with no difference.","Memorizing is always better than understanding.","Understanding is faster than memorizing."],0,"Memorizar es retener datos; comprender implica un procesamiento más profundo del significado."],
      ["fill","Completa: \"I studied a lot, but I still ___ the exam.\"",["failed","passed","memorized","understood"],0,"El contexto (\"but I still\") sugiere un resultado negativo: \"failed the exam\"."],
      ["translate","Traduce: \"Prefiero aprender a mi propio ritmo.\"",["I prefer to learn at my own pace.","I prefer learn my own pace.","I prefer to learning my own pace.","I prefer my own pace to learn at."],0,"\"Aprender a mi propio ritmo\" = \"to learn at my own pace\"."],
      ["arrange","Ordena: [favorite / subject / is / mathematics / my]",["My favorite subject is mathematics","Is my favorite subject mathematics","Mathematics is my favorite subject","My subject favorite is mathematics"],0,"Sujeto + \"is\" + complemento: \"My favorite subject is mathematics.\""],
      ["writing","Escribe en inglés 45-65 palabras comparando dos formas de estudiar o dos sistemas educativos que conozcas (por ejemplo, clases presenciales frente a online), y di cuál prefieres y por qué.",[],["more...than","understand","at my own pace"],"Usa al menos una estructura comparativa explícita."]
    ]
  },
  {
    id:"b2_sustainable_cities", level:"B2", title:"Ciudades sostenibles: urbanismo y movilidad", emoji:"🚲", xp:82,
    description:"Discute propuestas de urbanismo y movilidad sostenible en las ciudades, con argumentos matizados en inglés.",
    study: {
      vocab: [
        ["public transport, the bike lane", "el transporte público, el carril bici"],
        ["to pedestrianize the city center", "peatonalizar el centro de la ciudad"],
        ["to reduce traffic and pollution", "reducir el tráfico y la contaminación"],
        ["a green space, a pedestrian zone", "un espacio verde, una zona peatonal"],
        ["to invest in sustainable infrastructure", "invertir en infraestructura sostenible"]
      ],
      grammar: [
        ["El subjuntivo con \"it's important that\"", "Aunque el inglés usa poco el subjuntivo, expresiones como \"it's crucial that\" pueden ir seguidas de la forma base del verbo en registro formal.", "It's crucial that cities invest in reliable public transport."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases presenta un argumento formal y bien estructurado?",["It's crucial that cities invest in reliable public transport.","Cities invest important that public transport.","It important cities invest public transport.","Crucial is that cities public transport invest."],0,"\"It's crucial that\" seguido del verbo es la estructura formal correcta."],
      ["mcq","¿Qué significa \"to pedestrianize the city center\"?",["To restrict or remove vehicle traffic to prioritize people walking.","To build more roads in the center.","To increase the number of cars allowed in the center.","To remove all shops from the center."],0,"\"Pedestrianize\" significa convertir un espacio para uso prioritario de peatones, limitando vehículos."],
      ["fill","Completa: \"The bike lane might ___ traffic in that area.\"",["reduce","reduces","reducing","reduced"],0,"Después de \"might\" se usa el infinitivo sin \"to\": \"might reduce\"."],
      ["translate","Traduce: \"Invertir en transporte público reduce la contaminación a largo plazo.\"",["Investing in public transport reduces pollution in the long term.","Investing in public transport reduce pollution in the long term.","Invest in public transport reduces pollution long term.","Reduces investing in public transport pollution long term."],0,"\"Invertir en transporte público reduce la contaminación\" = \"Investing in public transport reduces pollution.\""],
      ["mcq","¿Cuál de estas frases presenta una postura matizada sobre la movilidad urbana?",["It depends on the context: in some cities cars are still necessary, in others they aren't.","Cars should be banned everywhere without exception.","Public transport never works well in any city.","There's no possible solution for urban traffic."],0,"Una postura matizada reconoce que la solución depende del contexto específico de cada ciudad."],
      ["writing","Escribe en inglés 55-75 palabras proponiendo una mejora de movilidad sostenible para una ciudad que conozcas, explicando un beneficio y una posible dificultad de implementarla.",[],["it's crucial that","pedestrian","public transport"],"Usa al menos una estructura formal de recomendación."]
    ]
  },
  {
    id:"c1_science_communication", level:"C1", title:"Divulgación científica: comunicar con precisión", emoji:"🔬", xp:90,
    description:"Aprende a comunicar información científica compleja de forma clara y precisa en inglés, sin perder rigor.",
    study: {
      vocab: [
        ["to simplify without distorting", "simplificar sin distorsionar"],
        ["a preliminary finding versus a confirmed one", "un hallazgo preliminar frente a uno confirmado"],
        ["scientific evidence suggests that...", "la evidencia científica sugiere que..."],
        ["a useful analogy to explain something complex", "una analogía útil para explicar algo complejo"],
        ["to avoid scientific sensationalism", "evitar el sensacionalismo científico"]
      ],
      grammar: [
        ["Verbos de matiz para comunicar incertidumbre científica", "\"Suggests\", \"indicates\", \"could explain\" transmiten distintos grados de certeza científica, más precisos que \"proves\" o \"demonstrates\".", "The study suggests a possible link, but it doesn't prove causation."]
      ]
    },
    ex:[
      ["mcq","¿Cuál de estas frases comunica un hallazgo científico con el matiz correcto?",["The study suggests a possible link, but doesn't prove causation.","The study definitively proves this causes that.","Scientists already know everything about this topic.","This finding is one hundred percent certain, no doubt at all."],0,"\"Suggests\" y \"doesn't prove causation\" reflejan con precisión el nivel real de certeza de un hallazgo preliminar."],
      ["mcq","¿Por qué es importante \"simplificar sin distorsionar\" en la divulgación científica?",["Because oversimplifying can change the real meaning of the finding.","Because science should never be explained to non-experts.","Because technical details don't matter at all.","Because any simplification is automatically incorrect."],0,"Simplificar es necesario para llegar a más público, pero distorsionar el significado original es un error grave de divulgación."],
      ["fill","Completa: \"This is a ___ finding: more studies are needed to confirm it.\"",["preliminary","confirmed","definitive","absolute"],0,"\"Preliminary\" indica que el hallazgo aún no está confirmado de forma concluyente."],
      ["translate","Traduce: \"La evidencia científica sugiere que este tratamiento podría ser eficaz.\"",["Scientific evidence suggests that this treatment could be effective.","Scientific evidence suggests this treatment could effective.","Suggests scientific evidence that treatment could be effective.","Scientific evidence suggests that this treatment be effective could."],0,"\"La evidencia científica sugiere que\" = \"Scientific evidence suggests that\", seguido de \"could be\" para expresar posibilidad."],
      ["mcq","Un titular dice \"Science confirms it: this fruit cures cancer!\" basándose en un solo estudio preliminar en ratones. ¿Qué problema tiene este titular?",["It exaggerates a limited, preliminary finding as if it were an absolute certainty applicable to humans.","It's a perfect example of rigorous science communication.","It contains no sensationalism whatsoever.","It accurately reflects the level of evidence available."],0,"El titular convierte un hallazgo preliminar en ratones en una afirmación absoluta sobre humanos, un caso claro de sensacionalismo."],
      ["writing","Elige un descubrimiento científico (real o inventado) y escribe en inglés 55-75 palabras explicándolo de forma clara y accesible, usando una analogía y manteniendo el matiz correcto de certeza (evita palabras como \"proves\" si el hallazgo es preliminar).",[],["suggests","preliminary","is like"],"Incluye al menos una analogía y un verbo de matiz que refleje correctamente el nivel de certeza."]
    ]
  },
  {
    id:"c2_speech_acts_pragmatics", level:"C2", title:"Pragmática: lo que hacemos al decir algo", emoji:"💭", xp:98,
    description:"Analiza los actos de habla y la pragmática en inglés: la diferencia entre lo que se dice y lo que se hace al decirlo.",
    study: {
      vocab: [
        ["a speech act (request, promise, order)", "un acto de habla (petición, promesa, orden)"],
        ["literal meaning versus intended meaning", "el significado literal frente al significado pretendido"],
        ["an indirect speech act", "un acto de habla indirecto"],
        ["the felicity conditions of a speech act", "las condiciones de felicidad de un acto de habla"],
        ["to imply something without saying it explicitly", "implicar algo sin decirlo explícitamente"]
      ],
      grammar: [
        ["Actos de habla directos frente a indirectos", "Un acto de habla indirecto usa una forma gramatical (como una pregunta) para realizar otra función (como una petición).", "\"Could you close the window?\" has the form of a question, but its real function is a request, not asking for information."]
      ]
    },
    ex:[
      ["mcq","\"Could you pass the salt?\" en una cena. ¿Qué acto de habla es esto, en realidad?",["An indirect request, even though it has the form of a question.","A genuine question about the other person's ability.","A direct, explicit order.","A promise about the future."],0,"Aunque tiene forma gramatical de pregunta sobre capacidad, su función real es pedir que alguien pase la sal: es una petición indirecta."],
      ["mcq","Un jefe dice a un empleado: \"It's a bit cold in here, isn't it?\" cerca de una ventana abierta. ¿Qué probablemente está haciendo con este enunciado?",["Indirectly asking someone to close the window.","Simply commenting on the weather with no other intention.","Asking about the exact temperature of the room.","Explicitly ordering the heating to be turned off."],0,"El comentario funciona como una petición indirecta para que alguien cierre la ventana, sin decirlo explícitamente."],
      ["fill","Completa: \"Saying 'I promise' out loud isn't enough; certain ___ must also be met for the promise to be valid.\"",["felicity conditions","grammar rules","spelling rules","rhetorical questions"],0,"Las \"felicity conditions\" son los requisitos contextuales (sinceridad, capacidad, etc.) para que un acto de habla funcione correctamente."],
      ["translate","Traduce con precisión técnica: \"Este es un acto de habla indirecto: su forma literal no coincide con su función pretendida.\"",["This is an indirect speech act: its literal form doesn't match its intended function.","This is indirect speech act literal form doesn't match function.","It's a speech act this indirect that doesn't match literal function.","This speech act is indirect its form doesn't function match."],0,"\"Acto de habla indirecto\" = \"indirect speech act\"; \"forma literal\" = \"literal form\"; \"función pretendida\" = \"intended function\"."],
      ["mcq","¿Cuál de estos enunciados implica algo sin decirlo explícitamente?",["\"Some students passed the exam.\" (implies not all did)","\"All students passed the exam.\"","\"The exam was on Monday at nine.\"","\"There are thirty students in the class.\""],0,"\"Some\" implica pragmáticamente \"not all\", aunque no lo afirme literalmente; es una implicatura conversacional clásica."],
      ["writing","Escribe en inglés 55-75 palabras analizando un acto de habla indirecto de una conversación cotidiana (real o inventada): qué se dijo literalmente, qué función pragmática cumplía en realidad, y cómo lo supiste por el contexto.",[],["speech act","literally","in reality"],"Distingue explícitamente entre la forma gramatical literal del enunciado y su función pragmática real."]
    ]
  },
  {
    id:"a1_animals_nature", level:"A1", title:"Los animales y la naturaleza", emoji:"🐾", xp:36,
    description:"Aprende el vocabulario de animales comunes y la naturaleza en inglés.",
    study: {
      vocab: [
        ["the dog", "el perro"],
        ["the cat", "el gato"],
        ["the bird", "el pájaro"],
        ["the horse", "el caballo"],
        ["the fish", "el pez"],
        ["the cow", "la vaca"],
        ["the forest, the mountain, the river", "el bosque, la montaña, el río"],
      ],
      grammar: [
        ["Plural de sustantivos de animales", "La mayoría añade “-s” en plural, pero algunos son irregulares.", "one fish, two fish (invariable) / one horse, two horses (regular)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el caballo” en inglés?",["the horse", "the bird", "the dog", "the cat"],0,"“Caballo” es “horse” en inglés."],
      ["mcq","¿Cómo se dice “el pájaro” en inglés?",["the dog", "the cow", "the bird", "the fish"],2,"“Pájaro” es “bird” en inglés."],
      ["fill","Completa: “I like walking in the ___ on Sundays.”",["fish", "forest", "cat", "cow"],1,"“Walking in the forest” es una actividad típica en la naturaleza."],
      ["translate","Traduce: “El perro es muy simpático.”",["The horse is very friendly.", "The bird is very friendly.", "The cat is very friendly.", "The dog is very friendly."],3,"“El perro” = “the dog”; “simpático” = “friendly”."],
      ["arrange","Ordena: [black / have / cat / I / a]",["I have a black cat", "cat a I have black", "cat black a I have", "cat I black a have"],0,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés 20-30 palabras sobre un animal que te guste y un lugar de la naturaleza que te guste visitar.",[],["I like", "the forest", "animal"]],
    ]
  },
  {
    id:"a2_body_parts", level:"A2", title:"El cuerpo humano: partes del cuerpo", emoji:"🦴", xp:46,
    description:"Aprende las partes del cuerpo y a describir dolores o características físicas en inglés.",
    study: {
      vocab: [
        ["the head", "la cabeza"],
        ["the arm", "el brazo"],
        ["the leg", "la pierna"],
        ["the hand", "la mano"],
        ["the foot", "el pie"],
        ["the back", "la espalda"],
      ],
      grammar: [
        ["“My” + parte del cuerpo + “hurts”", "En inglés se usa el posesivo (“my”), no el artículo, con partes del cuerpo.", "My back hurts. (no “The back hurts me”)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la espalda” en inglés?",["the head", "the hand", "the leg", "the back"],3,"“Espalda” es “back” en inglés."],
      ["mcq","¿Cómo se dice “el pie” en inglés?",["the arm", "the foot", "the hand", "the head"],1,"“Pie” es “foot” en inglés."],
      ["fill","Completa: “My ___ hurts a lot after running.”",["back", "leg", "head", "hand"],0,"Correr suele causar dolor de espalda si no se calienta bien."],
      ["translate","Traduce: “Me duele la mano.”",["My leg hurts.", "My arm hurts.", "My foot hurts.", "My hand hurts."],3,"“Me duele la mano” = “My hand hurts”, con el posesivo “my”."],
      ["arrange","Ordena: [leg / hurts / my]",["My hurts leg", "leg My hurts", "My leg hurts", "hurts leg My"],2,"“My” + parte del cuerpo + “hurts”."],
      ["speaking","Describe en inglés, en 40-60 palabras, un dolor que hayas tenido: qué parte del cuerpo te dolía y qué hiciste.",[],["hurt", "my leg", "I went to the doctor"]],
    ]
  },
  {
    id:"b1_sports_fitness", level:"B1", title:"Los deportes y la actividad física", emoji:"🏃", xp:60,
    description:"Habla sobre deportes, rutinas de ejercicio y hábitos de actividad física en inglés.",
    study: {
      vocab: [
        ["soccer/football", "el fútbol"],
        ["swimming", "la natación"],
        ["tennis", "el tenis"],
        ["to run", "correr"],
        ["to lift weights", "levantar pesas"],
        ["to do yoga", "hacer yoga"],
      ],
      grammar: [
        ["“Usually” + presente simple para hábitos", "“Usually” con el presente simple expresa una acción habitual.", "I usually run three times a week."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “levantar pesas” en inglés?",["swimming", "to do yoga", "to lift weights", "to run"],2,"“Levantar pesas” es “to lift weights”."],
      ["mcq","¿Cómo se dice “la natación” en inglés?",["swimming", "to run", "tennis", "soccer/football"],0,"“Natación” es “swimming”."],
      ["fill","Completa: “I usually ___ three times a week to stay fit.”",["soccer", "run", "swimming", "tennis"],1,"“Usually” + presente simple (“run”) describe un hábito."],
      ["translate","Traduce: “Suelo hacer yoga los domingos.”",["I usually do yoga on Sundays.", "I usually lift weights on Sundays.", "I usually do yoga on Saturdays.", "I usually play tennis on Sundays."],0,"“Suelo hacer yoga” = “I usually do yoga”; “los domingos” = “on Sundays”."],
      ["arrange","Ordena: [fit / stay / to / I / run]",["I to stay fit run", "fit stay to run I", "I to run fit stay", "I run to stay fit"],3,"Sujeto + verbo + “to” + infinitivo + complemento."],
      ["writing","Escribe en inglés 45-65 palabras sobre tu relación con el deporte: qué actividad practicas, con qué frecuencia y por qué te gusta (o no).",[],["I usually", "stay fit", "I practice"]],
    ]
  },
  {
    id:"b2_smart_home_tech", level:"B2", title:"La casa inteligente: domótica y dispositivos", emoji:"💡", xp:82,
    description:"Habla sobre dispositivos inteligentes y domótica, con opiniones matizadas en inglés.",
    study: {
      vocab: [
        ["a smart speaker", "un altavoz inteligente"],
        ["a programmable thermostat", "un termostato programable"],
        ["a security camera", "una cámara de seguridad"],
        ["to control by voice", "controlar por voz"],
        ["to automate household tasks", "automatizar tareas del hogar"],
        ["a privacy risk", "un riesgo de privacidad"],
      ],
      grammar: [
        ["El futuro simple para predicciones tecnológicas", "“Will” describe predicciones razonables sobre cómo evolucionará la tecnología.", "In a few years, more homes will have connected devices."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un riesgo de privacidad” en inglés?",["a smart speaker", "a privacy risk", "a thermostat", "a security camera"],1,"“Riesgo de privacidad” es “privacy risk”."],
      ["mcq","¿Cómo se dice “automatizar tareas del hogar” en inglés?",["to automate household tasks", "to control by voice", "a smart speaker", "a privacy risk"],0,"“Automatizar tareas del hogar” es “to automate household tasks”."],
      ["fill","Completa: “A programmable thermostat can ___ energy if it's set up well.”",["break", "save", "lose", "waste"],1,"Un termostato bien configurado ayuda a ahorrar energía, no a gastarla."],
      ["translate","Traduce: “Los altavoces inteligentes se pueden controlar por voz.”",["Thermostats can be controlled by text.", "Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Smart speakers can be controlled by voice."],3,"“Controlar por voz” = “controlled by voice”."],
      ["arrange","Ordena: [pose / can / risk / it / a privacy]",["can It privacy pose risk a", "It can pose a privacy risk", "privacy can pose risk a It", "It can risk pose privacy a"],1,"Sujeto + “can” + “pose” + objeto: “It can pose a privacy risk.”"],
      ["writing","Escribe en inglés 55-75 palabras sobre un dispositivo inteligente que usarías (o ya usas) en casa: qué ventaja te ofrece y qué riesgo de privacidad podría tener.",[],["automate", "privacy risk", "by voice"]],
    ]
  },
  {
    id:"c1_workplace_communication", level:"C1", title:"El mundo laboral: reuniones y correspondencia", emoji:"🤝", xp:90,
    description:"Domina el vocabulario y las fórmulas típicas de reuniones y correos profesionales en inglés.",
    study: {
      vocab: [
        ["to call a meeting", "convocar una reunión"],
        ["to attach a document", "adjuntar un documento"],
        ["we look forward to your response", "quedamos a la espera de su respuesta"],
        ["to follow up on a pending item", "retomar un punto pendiente"],
        ["to reach an agreement", "llegar a un acuerdo"],
        ["to postpone a meeting", "posponer una reunión"],
      ],
      grammar: [
        ["Fórmulas de cortesía en correos formales", "Frases fijas como “We look forward to your response” dan un cierre profesional sin sonar brusco.", "Please find the requested report attached. We look forward to your response."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “llegar a un acuerdo” en inglés?",["to postpone a meeting", "to attach a document", "to call a meeting", "to reach an agreement"],3,"“Llegar a un acuerdo” es “to reach an agreement”."],
      ["mcq","¿Cómo se dice “posponer una reunión” en inglés?",["to postpone a meeting", "to call a meeting", "to attach a document", "to reach an agreement"],0,"“Posponer una reunión” es “to postpone a meeting”."],
      ["fill","Completa: “Before we close the meeting, I'd like to ___ on a pending item from last week.”",["postpone", "call", "follow up", "attach"],2,"“To follow up on a pending item” significa volver a tratarlo."],
      ["translate","Traduce: “Adjunto el informe solicitado.”",["I'm calling the requested report.", "I'm attaching the requested email.", "I'm attaching the requested report.", "I'm postponing the requested report."],2,"“Adjunto” = “I'm attaching”; “el informe solicitado” = “the requested report”."],
      ["arrange","Ordena: [response / your / to / we / look forward]",["We look forward to your response", "your look forward to We response", "to look your We forward response", "to look response forward your We"],0,"Fórmula fija de cierre de correo profesional."],
      ["writing","Escribe en inglés un correo profesional breve (55-75 palabras) convocando una reunión, mencionando un punto pendiente y cerrando con una fórmula de cortesía formal.",[],["I'm calling", "pending item", "we look forward to"]],
    ]
  },
  {
    id:"c2_register_synonyms", level:"C2", title:"Registro y estilo: sinónimos según el contexto", emoji:"🔤", xp:98,
    description:"Elige el sinónimo adecuado según el registro (formal, neutro, coloquial) en inglés.",
    study: {
      vocab: [
        ["to obtain (formal) / to get (neutral)", "obtener (formal) / conseguir (neutro)"],
        ["to pass away (formal) / to die (neutral) / to kick the bucket (coloquial)", "fallecer / morir / palmarla"],
        ["to request (formal) / to ask for (neutral)", "solicitar / pedir"],
        ["to reside (formal) / to live (neutral)", "residir / vivir"],
        ["however (formal) / but (neutral)", "no obstante / pero"],
      ],
      grammar: [
        ["Elegir registro según el contexto comunicativo", "La misma idea puede expresarse con palabras muy distintas según se trate de un contexto formal, neutro o coloquial; usar la palabra equivocada rompe la coherencia del texto.", "In a report: “Information was obtained.” In casual speech: “I got it.”"],
      ]
    },
    ex:[
      ["mcq","En un informe oficial, ¿qué palabra es más apropiada para “obtener información”?",["Obtain", "Grab", "Snag", "Score"],0,"“Obtain” es el registro formal apropiado para un informe oficial."],
      ["mcq","En una conversación informal entre amigos, ¿qué expresión suena más natural para “morir”?",["Kick the bucket", "Pass away", "Perish", "Expire"],0,"“Kick the bucket” es coloquial y encajaría en una conversación informal; los otros son demasiado formales o técnicos."],
      ["fill","Completa: “In a formal letter you say “___, we are moving forward with the project”, not “but”.”",["but", "yet", "however", "still"],2,"“However” es el conector formal equivalente a “pero”."],
      ["translate","Traduce con el registro formal correcto: “Residimos en Madrid.”",["We reside in Madrid.", "We stay in Madrid.", "We live in Madrid.", "We are from Madrid."],0,"“Residimos” en un registro formal se traduce como “reside”, no el neutro “live”."],
      ["arrange","Ordena (registro formal): [was / requested / information / the]",["was requested information The", "The information was requested", "The was requested information", "was The requested information"],1,"Construcción pasiva, típica del registro formal/administrativo."],
      ["writing","Escribe en inglés el mismo mensaje breve (“I need you to send me the file”) en dos registros distintos: uno formal (para un jefe) y uno coloquial (para un amigo), en 55-75 palabras en total.",[],["formal", "informal", "I request"]],
    ]
  },
  {
    id:"a1_clothing_colors", level:"A1", title:"La ropa y los colores", emoji:"👕", xp:37,
    description:"Aprende el vocabulario de las prendas de ropa y cómo combinarlas con colores en inglés.",
    study: {
      vocab: [
        ["the shirt", "la camisa"],
        ["the pants/trousers", "el pantalón"],
        ["the shoes", "los zapatos"],
        ["the dress", "el vestido"],
        ["the jacket", "la chaqueta"],
        ["the skirt", "la falda"],
        ["red, blue, green, black, white", "rojo, azul, verde, negro, blanco"],
      ],
      grammar: [
        ["Adjetivos de color antes del sustantivo", "En inglés, el adjetivo de color va siempre antes del sustantivo y no cambia de forma.", "a red dress / black shoes / a green shirt"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la chaqueta” en inglés?",["the pants/trousers", "the skirt", "the shirt", "the jacket"],3,"“Chaqueta” es “jacket” en inglés."],
      ["mcq","¿Cómo se dice “los zapatos” en inglés?",["the dress", "the shirt", "the skirt", "the shoes"],3,"“Zapatos” es “shoes” en inglés."],
      ["fill","Completa: “I'm wearing a ___ shirt and black pants.”",["blueish", "blue", "bluely", "blues"],1,"En inglés el adjetivo de color no cambia de forma: “a blue shirt”."],
      ["translate","Traduce: “Llevo un vestido rojo.”",["I'm wearing a red skirt.", "I'm wearing a red dress.", "I'm wearing a red shirt.", "I'm wearing red shoes."],1,"“Llevo” = “I'm wearing”; “un vestido rojo” = “a red dress”."],
      ["arrange","Ordena: [black / have / I / shoes]",["shoes black I have", "have black shoes I", "have shoes black I", "I have black shoes"],3,"Sujeto + verbo + adjetivo + sustantivo (sin artículo en plural genérico)."],
      ["writing","Describe en inglés, en 20-30 palabras, la ropa que llevas hoy, mencionando al menos tres prendas y sus colores.",[],["I'm wearing", "color", "and"]],
    ]
  },
  {
    id:"a2_fruits_vegetables", level:"A2", title:"Frutas y verduras", emoji:"🥦", xp:47,
    description:"Aprende el vocabulario de frutas y verduras y a hablar de una alimentación saludable en inglés.",
    study: {
      vocab: [
        ["the apple", "la manzana"],
        ["the banana", "el plátano"],
        ["the carrot", "la zanahoria"],
        ["the tomato", "el tomate"],
        ["the lettuce", "la lechuga"],
        ["the orange", "la naranja"],
      ],
      grammar: [
        ["“A lot of”, “little/few” para cantidades", "“Little” se usa con incontables, “few” con contables, y “a lot of” funciona con ambos.", "I eat a lot of fruit and little meat."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la zanahoria” en inglés?",["the apple", "the banana", "the carrot", "the orange"],2,"“Zanahoria” es “carrot” en inglés."],
      ["mcq","¿Cómo se dice “el plátano” en inglés?",["the lettuce", "the tomato", "the banana", "the carrot"],2,"“Plátano” es “banana” en inglés."],
      ["fill","Completa: “I eat a lot of fruit every day to stay ___.”",["healthy", "tired", "hungry", "sick"],0,"“Comer mucha fruta” normalmente se relaciona con estar “healthy” (sano)."],
      ["translate","Traduce: “Como poca carne y muchas verduras.”",["I eat little meat and a lot of vegetables.", "I eat little meat and little vegetables.", "I eat little fruit and a lot of vegetables.", "I eat a lot of meat and a lot of vegetables."],0,"“Poca carne” = “little meat”; “muchas verduras” = “a lot of vegetables”."],
      ["arrange","Ordena: [tomato / salad / and / has / lettuce / the]",["has salad The lettuce tomato and", "The salad has tomato and lettuce", "lettuce tomato The and has salad", "The lettuce salad and has tomato"],1,"Sujeto + verbo + objeto (dos sustantivos unidos por “and”)."],
      ["speaking","Describe en inglés, en 40-60 palabras, tu dieta habitual: qué frutas y verduras comes normalmente y con qué frecuencia.",[],["I eat", "often", "vegetables"]],
    ]
  },
  {
    id:"b1_cooking_recipes", level:"B1", title:"La cocina: verbos y recetas simples", emoji:"🍳", xp:61,
    description:"Aprende verbos de cocina y a explicar los pasos de una receta sencilla en inglés.",
    study: {
      vocab: [
        ["to cut, to peel", "cortar, pelar"],
        ["to boil, to fry", "hervir, freír"],
        ["to mix the ingredients", "mezclar los ingredientes"],
        ["to add salt to taste", "añadir sal al gusto"],
        ["to let the dough rest", "dejar reposar la masa"],
        ["to preheat the oven", "precalentar el horno"],
      ],
      grammar: [
        ["El imperativo para dar instrucciones de receta", "Las recetas en inglés usan el imperativo (verbo base, sin sujeto) para dar instrucciones paso a paso.", "Cut the vegetables, boil the water, and add salt to taste."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “mezclar los ingredientes” en inglés?",["to boil, to fry", "to mix the ingredients", "to cut, to peel", "to preheat the oven"],1,"“Mezclar los ingredientes” es “to mix the ingredients”."],
      ["mcq","¿Cómo se dice “precalentar el horno” en inglés?",["to preheat the oven", "to let the dough rest", "to cut, to peel", "to add salt to taste"],0,"“Precalentar el horno” es “to preheat the oven”."],
      ["fill","Completa: “Before baking, you need to ___ the oven to 180 degrees.”",["mix", "preheat", "fry", "boil"],1,"“Precalentar el horno” es el paso previo típico antes de hornear."],
      ["translate","Traduce: “Deje reposar la masa durante diez minutos.”",["Let the dough rest for ten minutes.", "Let the dough fry for ten minutes.", "Let the dough cut for ten minutes.", "Let the dough boil for ten minutes."],0,"“Deje reposar la masa” = “Let the dough rest”."],
      ["arrange","Ordena: [taste / salt / add / to]",["salt Add taste to", "to taste salt Add", "Add salt to taste", "Add to salt taste"],2,"Imperativo + objeto + expresión fija “to taste”."],
      ["writing","Escribe en inglés 45-65 palabras explicando los pasos de una receta sencilla que sepas hacer, usando al menos tres verbos de cocina en imperativo.",[],["cut", "add", "let it rest"]],
    ]
  },
  {
    id:"b2_art_world", level:"B2", title:"El mundo del arte: pintura, música y cine", emoji:"🎨", xp:83,
    description:"Habla sobre arte, música y cine, expresando opiniones y valoraciones matizadas en inglés.",
    study: {
      vocab: [
        ["a masterpiece", "una obra maestra"],
        ["the staging/mise-en-scène", "la puesta en escena"],
        ["a moving performance", "una interpretación conmovedora"],
        ["an artist's style", "el estilo de un artista"],
        ["to leave a lasting impression", "dejar una impresión duradera"],
        ["to be overrated/underrated", "estar sobrevalorado/infravalorado"],
      ],
      grammar: [
        ["“I don't think” + presente para matizar una opinión", "“I don't think that” seguido del presente (no del subjuntivo, que apenas se usa en inglés) expresa una opinión matizada de desacuerdo.", "I don't think this film is as good as they say."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “una interpretación conmovedora” en inglés?",["an artist's style", "a masterpiece", "a lasting impression", "a moving performance"],3,"“Una interpretación conmovedora” es “a moving performance”."],
      ["mcq","¿Cómo se dice “estar sobrevalorado” en inglés?",["to be underrated", "an artist's style", "to be overrated", "to leave an impression"],2,"“Estar sobrevalorado” es “to be overrated”."],
      ["fill","Completa: “I don't think this film ___ as good as everyone says.”",["is", "being", "was", "will be"],0,"“I don't think that” va seguido de presente simple: “that...is”."],
      ["translate","Traduce: “Esta interpretación me dejó una impresión duradera.”",["This performance left a masterpiece on me.", "This performance left a lasting impression on me.", "This style left a lasting impression on me.", "This staging left me overrated."],1,"“Dejó una impresión duradera” = “left a lasting impression”."],
      ["arrange","Ordena: [masterpiece / this / a / is]",["is a This masterpiece", "masterpiece is a This", "a masterpiece This is", "This is a masterpiece"],3,"Sujeto + “is” + artículo + sustantivo."],
      ["writing","Escribe en inglés 55-75 palabras dando tu opinión sobre una obra de arte, película o canción (real o inventada): qué te pareció y por qué, matizando tu postura.",[],["I think that", "I don't think", "an impression"]],
    ]
  },
  {
    id:"c1_giving_feedback", level:"C1", title:"La crítica constructiva: dar y recibir feedback", emoji:"🗨️", xp:91,
    description:"Aprende a dar y recibir retroalimentación de forma constructiva y profesional en inglés.",
    study: {
      vocab: [
        ["to point out an area for improvement", "señalar un punto de mejora"],
        ["to acknowledge strengths before criticism", "reconocer los aciertos antes de las críticas"],
        ["to phrase criticism in concrete terms", "formular la crítica en términos concretos"],
        ["to be open to feedback", "estar abierto/a a la retroalimentación"],
        ["to take criticism personally", "tomarse la crítica de forma personal"],
        ["to propose a solution, not just point out the problem", "proponer una solución, no solo señalar el problema"],
      ],
      grammar: [
        ["Mitigadores para suavizar una crítica", "Expresiones como “you might want to consider” o “one suggestion would be” suavizan una crítica sin perder claridad.", "You might want to consider restructuring the report; one suggestion would be to start with the conclusions."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “formular la crítica en términos concretos” en inglés?",["to take criticism personally", "to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback"],1,"“Formular la crítica en términos concretos” es “to phrase criticism in concrete terms”."],
      ["mcq","¿Cómo se dice “tomarse la crítica de forma personal” en inglés?",["to take criticism personally", "to be open to feedback", "to propose a solution", "to acknowledge strengths"],0,"“Tomarse la crítica de forma personal” es “to take criticism personally”."],
      ["fill","Completa: “Before giving criticism, it's a good idea to ___ the strengths of the work.”",["criticize", "hide", "ignore", "acknowledge"],3,"“Reconocer los aciertos antes de las críticas” hace que el feedback sea mejor recibido."],
      ["translate","Traduce: “Una sugerencia sería empezar con las conclusiones.”",["One problem would be to start with the conclusions.", "One suggestion would be to finish with the conclusions.", "One suggestion would be to start with the conclusions.", "One criticism would be to start with the conclusions."],2,"“Una sugerencia sería” = “One suggestion would be to”."],
      ["arrange","Ordena: [problem / propose / just / a / point / solution / don't / out / the]",["point propose just out solution problem, the Don't a", "Don't just point out the problem, propose a solution", "Don't solution the out propose a just point problem,", "just solution problem, out point propose a the Don't"],1,"Estructura de contraste: “don't just... [verbo]” + “[verbo]... a solution”."],
      ["writing","Escribe en inglés 55-75 palabras dando feedback constructivo sobre un trabajo (real o inventado): reconoce un acierto, señala un punto de mejora concreto y propón una solución.",[],["I acknowledge that", "you might want to", "one suggestion would be"]],
    ]
  },
  {
    id:"c2_inclusive_language", level:"C2", title:"El lenguaje inclusivo y la evolución del idioma", emoji:"🌐", xp:99,
    description:"Analiza el debate sobre el lenguaje inclusivo y cómo evolucionan las lenguas con la sociedad, en inglés.",
    study: {
      vocab: [
        ["inclusive language", "el lenguaje inclusivo"],
        ["a living language evolves with use", "una lengua viva evoluciona con el uso"],
        ["prescriptivism versus descriptivism", "prescriptivismo frente a descriptivismo"],
        ["a neologism is added to the dictionary", "un neologismo se incorpora al diccionario"],
        ["to generate resistance to a linguistic change", "generar resistencia frente a un cambio lingüístico"],
        ["an argument doesn't necessarily imply a political stance", "un argumento no implica necesariamente una postura política"],
      ],
      grammar: [
        ["Presentar un debate lingüístico sin sesgo", "Un análisis riguroso separa la descripción del fenómeno (cómo cambia la lengua) de la valoración personal (si el cambio debería adoptarse o no).", "From a descriptivist view, the change is documented without judgement; from a prescriptivist view, it's assessed whether it should be standardized."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “prescriptivismo frente a descriptivismo” en inglés?",["inclusive language", "linguistic change", "prescriptivism versus descriptivism", "a neologism"],2,"“Prescriptivismo frente a descriptivismo” es “prescriptivism versus descriptivism”."],
      ["mcq","¿Cómo se dice “un neologismo se incorpora al diccionario” en inglés?",["to generate resistance", "inclusive language", "a living language evolves with use", "a neologism is added to the dictionary"],3,"“Un neologismo se incorpora al diccionario” es “a neologism is added to the dictionary”."],
      ["fill","Completa: “Descriptivism focuses on documenting how people actually speak, not on dictating how they ___ speak.”",["can", "should", "tend to", "want to"],1,"El descriptivismo describe el uso real, sin dictar normas sobre cómo “debería” hablarse."],
      ["translate","Traduce con precisión: “Una lengua viva evoluciona con el uso, nos guste o no.”",["A living language evolves without use, whether we like it or not.", "A living language evolves with use, even if it doesn't change.", "A living language evolves with use, whether we like it or not.", "A dead language evolves with use, whether we like it or not."],2,"“Nos guste o no” se traduce idiomáticamente como “whether we like it or not”."],
      ["arrange","Ordena: [imply / necessarily / a / doesn't / an argument / political stance]",["An argument doesn't necessarily imply a political stance", "argument stance An a doesn't political necessarily imply", "a necessarily argument An stance doesn't imply political", "necessarily argument stance a doesn't imply political An"],0,"Sujeto + negación + “necessarily imply” + objeto."],
      ["writing","Escribe en inglés 55-75 palabras presentando de forma equilibrada dos posturas sobre un cambio lingüístico actual (real o inventado), sin tomar partido explícitamente, distinguiendo descripción de valoración.",[],["on the one hand", "on the other", "without necessarily"]],
    ]
  },
  {
    id:"a1_neighborhood_city", level:"A1", title:"El barrio y la ciudad", emoji:"🏙️", xp:38,
    description:"Aprende el vocabulario de los lugares del barrio y cómo decir dónde están en inglés.",
    study: {
      vocab: [
        ["the bank", "el banco"],
        ["the supermarket", "el supermercado"],
        ["the park", "el parque"],
        ["the pharmacy", "la farmacia"],
        ["the library", "la biblioteca"],
        ["the bus stop", "la parada de autobús"],
        ["near, far from, next to", "cerca de, lejos de, al lado de"],
      ],
      grammar: [
        ["“There is/are” + preposiciones de lugar", "En inglés, “there is” (singular) y “there are” (plural) se usan para decir que algo existe en un lugar; el verbo concuerda con el sustantivo que sigue.", "There is a pharmacy near the park. / The library is next to the bank."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la farmacia” en inglés?",["the pharmacy", "el banco", "el supermercado", "la parada de autobús"],0,"“Farmacia” es “pharmacy” en inglés."],
      ["mcq","¿Cómo se dice “la parada de autobús” en inglés?",["the bus stop", "la parada de autobús", "la biblioteca", "el parque"],0,"“Parada de autobús” es “bus stop” en inglés."],
      ["fill","Completa: “There ___ a very big library in my neighborhood.”",["be", "is", "have", "are"],1,"“There is” se usa con un sustantivo singular: “there is a library”."],
      ["translate","Traduce: “La farmacia está al lado del parque.”",["The pharmacy is next to the park.", "The pharmacy is near the library.", "The bank is next to the park.", "The pharmacy is far from the park."],0,"“Al lado de” = “next to”; el sujeto y el lugar deben coincidir con el original."],
      ["arrange","Ordena: [not / the / far / supermarket / is]",["far not the supermarket is", "the far not is supermarket", "the supermarket is not far", "far the not is supermarket"],2,"Sujeto + verbo + negación + adverbio de lugar."],
      ["writing","Describe en inglés, en 20-30 palabras, tu barrio: qué lugares hay y dónde están (usa “there is/are”, “near” y “far from”).",[],["there is", "near", "far from"]],
    ]
  },
  {
    id:"a2_celebrations_holidays", level:"A2", title:"Las celebraciones y fiestas", emoji:"🎉", xp:48,
    description:"Aprende vocabulario de celebraciones y a hablar de costumbres con “usually”.",
    study: {
      vocab: [
        ["the birthday", "el cumpleaños"],
        ["the wedding", "la boda"],
        ["Christmas", "la Navidad"],
        ["New Year", "el Año Nuevo"],
        ["to celebrate", "celebrar, festejar"],
        ["to give a gift", "hacer un regalo"],
      ],
      grammar: [
        ["“Usually” + presente simple para hablar de costumbres", "En inglés, un adverbio de frecuencia como “usually” + presente simple expresa lo que se hace habitualmente.", "We usually celebrate with family at Christmas. / As a kid, I usually celebrated my birthday at the park."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “hacer un regalo” en inglés?",["to give a gift", "la Navidad", "el cumpleaños", "la boda"],0,"“Hacer un regalo” es “to give a gift” en inglés."],
      ["mcq","¿Cómo se dice “la boda” en inglés?",["el Año Nuevo", "the wedding", "hacer un regalo", "celebrar, festejar"],1,"“Boda” es “wedding” en inglés."],
      ["fill","Completa: “We ___ celebrate with the whole family every New Year.”",["usual", "use to", "usually", "used"],2,"“Usually” + presente simple expresa una costumbre habitual: “we usually celebrate”."],
      ["translate","Traduce: “Solemos hacer regalos en Navidad.”",["We usually celebrate gifts at Christmas.", "We usually give gifts at the birthday.", "We usually give gifts at Christmas.", "We give a gift at Christmas."],2,"“Solemos hacer regalos” = “We usually give gifts”, con “usually” + presente simple."],
      ["arrange","Ordena: [birthday / celebrate / friends / I / my / with]",["with my birthday I friends celebrate", "friends with my celebrate birthday I", "I celebrate my birthday with friends", "friends my celebrate with birthday I"],2,"Sujeto + verbo + objeto posesivo + preposición + complemento."],
      ["speaking","Describe en inglés, en 40-60 palabras, cómo sueles celebrar una fiesta importante para ti (cumpleaños, Navidad, Año Nuevo u otra), usando “usually”.",[],["I usually", "I celebrate", "with"]],
    ]
  },
  {
    id:"b1_relationships_friendship", level:"B1", title:"Las relaciones personales y la amistad", emoji:"🤝", xp:62,
    description:"Aprende vocabulario sobre amistad y a dar consejos con “should” y “have to”.",
    study: {
      vocab: [
        ["to trust someone", "confiar en alguien"],
        ["to get along well/badly with someone", "llevarse bien/mal con alguien"],
        ["to have something in common", "tener algo en común"],
        ["to keep in touch", "mantener el contacto"],
        ["a close/trustworthy friend", "un amigo/a de confianza"],
        ["to make up after an argument", "hacer las paces después de una discusión"],
      ],
      grammar: [
        ["Consejos con “should” y “have to”", "“Should” + infinitivo sin “to” da un consejo suave; “have to” + infinitivo expresa una obligación más fuerte.", "You should keep in touch with your friends. / You have to make up if you want to stay friends."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “llevarse bien con alguien” en inglés?",["un amigo/a de confianza", "llevarse bien/mal con alguien", "mantener el contacto", "to get along well/badly with someone"],3,"“Llevarse bien con alguien” es “to get along well with someone” en inglés."],
      ["mcq","¿Cómo se dice “hacer las paces después de una discusión” en inglés?",["llevarse bien/mal con alguien", "tener algo en común", "confiar en alguien", "to make up after an argument"],3,"“Hacer las paces después de una discusión” es “to make up after an argument” en inglés."],
      ["fill","Completa: “If you want to keep that friendship, you ___ stay in touch.”",["must to", "has to", "should", "would"],2,"“Should” + infinitivo sin “to” da un consejo suave: “you should stay in touch”."],
      ["translate","Traduce: “Tienes que confiar en tus amigos.”",["You have to get along with your friends.", "You have to trust your friends.", "You should trust your friends.", "You have to trust your family."],1,"“Tienes que confiar” = “You have to trust”, con “have to” + infinitivo."],
      ["arrange","Ordena: [common / a / lot / have / in / we]",["we have a lot in common", "a have lot common we in", "lot we have a in common", "we have common lot in a"],0,"Sujeto + verbo + cuantificador + preposición fija “in common”."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre una amistad importante para ti: qué tenéis en común y qué consejo le darías a alguien que quiere mantener una amistad así.",[],["we have in common", "you should", "trust"]],
    ]
  },
  {
    id:"b2_remote_work_balance", level:"B2", title:"El trabajo remoto y el equilibrio vida-trabajo", emoji:"💻", xp:84,
    description:"Habla sobre el teletrabajo y la conciliación laboral usando el gerundio en inglés.",
    study: {
      vocab: [
        ["to work remotely", "teletrabajar"],
        ["flexible working hours", "el horario flexible"],
        ["digital disconnection", "la desconexión digital"],
        ["burnout", "el agotamiento"],
        ["to balance work and personal life", "conciliar la vida laboral y personal"],
        ["to be productive", "rendir (ser productivo/a)"],
      ],
      grammar: [
        ["El gerundio (-ing) para expresar simultaneidad o causa", "En inglés, una frase con gerundio (-ing) al inicio puede expresar una acción simultánea a otra o su causa, sin necesidad de conjunción.", "Working from home, you save commuting time. / Many suffer burnout working without ever disconnecting."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la desconexión digital” en inglés?",["el horario flexible", "digital disconnection", "rendir (ser productivo/a)", "la desconexión digital"],1,"“Desconexión digital” es “digital disconnection” en inglés."],
      ["mcq","¿Cómo se dice “conciliar la vida laboral y personal” en inglés?",["la desconexión digital", "to balance work and personal life", "el horario flexible", "rendir (ser productivo/a)"],1,"“Conciliar la vida laboral y personal” es “to balance work and personal life” en inglés."],
      ["fill","Completa: “___ from home, many people manage to balance work and personal life better.”",["Working", "Work", "Works", "Worked"],0,"El gerundio (“Working”) al inicio de la frase expresa la circunstancia que permite el resultado que sigue."],
      ["translate","Traduce: “Trabajando sin desconectar, se puede llegar al agotamiento.”",["Disconnecting from work can lead to burnout.", "Working without disconnecting can lead to burnout.", "Working with flexible hours can lead to burnout.", "Working can avoid burnout without disconnecting."],1,"El gerundio “working without disconnecting” expresa la causa del agotamiento."],
      ["arrange","Ordena: [flexible / hours / many / value / working]",["many value flexible working hours", "many flexible value working hours", "flexible many hours working value", "hours value many working flexible"],0,"Sujeto + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre las ventajas y desventajas del teletrabajo para el equilibrio vida-trabajo, usando al menos un gerundio de simultaneidad o causa.",[],["working", "balance", "however"]],
    ]
  },
  {
    id:"c1_negotiation_conflict", level:"C1", title:"La negociación y la resolución de conflictos", emoji:"🤝", xp:92,
    description:"Aprende a negociar y suavizar propuestas con “would” en un registro formal en inglés.",
    study: {
      vocab: [
        ["to reach an agreement", "llegar a un acuerdo"],
        ["to give ground/make concessions", "ceder terreno"],
        ["a deadlock/stalemate", "un punto muerto"],
        ["an inflexible/uncompromising stance", "una postura intransigente"],
        ["to look for a middle ground", "buscar un término medio"],
        ["to break the ice", "romper el hielo"],
      ],
      grammar: [
        ["“Would” para suavizar propuestas", "En un registro formal de negociación, “would” suaviza peticiones y propuestas, dando una impresión de mayor cortesía y flexibilidad.", "Would you be willing to make concessions on this point? / It would be preferable to look for a middle ground before reaching a deadlock."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un punto muerto” en inglés?",["ceder terreno", "a deadlock/stalemate", "un punto muerto", "romper el hielo"],1,"“Un punto muerto” es “a deadlock” o “stalemate” en inglés."],
      ["mcq","¿Cómo se dice “una postura intransigente” en inglés?",["buscar un término medio", "romper el hielo", "an inflexible/uncompromising stance", "llegar a un acuerdo"],2,"“Una postura intransigente” es “an inflexible/uncompromising stance” en inglés."],
      ["fill","Completa: “It ___ be preferable to look for a middle ground before reaching a deadlock.”",["is", "would", "will", "was"],1,"“Would” suaviza la afirmación, propio del registro de negociación formal."],
      ["translate","Traduce con registro formal: “¿Estaría dispuesto a ceder terreno en este punto?”",["Are you willing to make concessions on this point?", "Would you be willing to reach an agreement on this point?", "Would you be willing to make concessions on this point?", "Would you be willing to break the ice on this point?"],2,"“Would you be willing” suaviza la pregunta, más formal que el presente “are you willing”."],
      ["arrange","Ordena: [agreement / be / difficult / reach / an / to / will / it]",["be will agreement reach difficult to an it", "an to be it agreement reach will difficult", "difficult agreement it an to be will reach", "it will be difficult to reach an agreement"],3,"Futuro + adjetivo + infinitivo + complemento."],
      ["writing","Escribe en inglés, en 55-75 palabras, describiendo una negociación (real o inventada) en la que ambas partes cedieron terreno para evitar un punto muerto, usando al menos dos “would” de cortesía.",[],["would", "would you be willing", "middle ground"]],
    ]
  },
  {
    id:"c2_corporate_euphemism", level:"C2", title:"El lenguaje corporativo y el eufemismo", emoji:"🏢", xp:100,
    description:"Analiza el eufemismo en el lenguaje corporativo y practica conectores de reformulación en inglés.",
    study: {
      vocab: [
        ["a euphemism", "un eufemismo"],
        ["corporate jargon", "la jerga corporativa"],
        ["a restructuring (euphemism for layoffs)", "una reestructuración (eufemismo de despido)"],
        ["to soften the impact of a message", "suavizar el impacto de un mensaje"],
        ["an unnecessary anglicism", "un anglicismo innecesario"],
        ["to dilute someone's responsibility", "diluir la responsabilidad de alguien"],
      ],
      grammar: [
        ["Conectores de reformulación", "Expresiones como “that is (to say)”, “in other words” o “put differently” reformulan una idea, a menudo para suavizarla o precisarla — clave para detectar eufemismos.", "The company announced a “restructuring”, that is, layoffs. / In other words: they will reduce headcount."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “diluir la responsabilidad de alguien” en inglés?",["una reestructuración (eufemismo de despido)", "suavizar el impacto de un mensaje", "un anglicismo innecesario", "to dilute someone's responsibility"],3,"“Diluir la responsabilidad de alguien” es “to dilute someone's responsibility” en inglés."],
      ["mcq","¿Cómo se dice “una reestructuración (eufemismo de despido)” en inglés?",["suavizar el impacto de un mensaje", "a restructuring (euphemism for layoffs)", "la jerga corporativa", "diluir la responsabilidad de alguien"],1,"“Reestructuración” es “restructuring” en inglés, eufemismo habitual de “layoffs” (despidos)."],
      ["fill","Completa: “The company talks about ‘resource optimization’, that ___ , layoffs.”",["for example", "is", "however", "although"],1,"“That is” reformula la expresión eufemística con su significado literal."],
      ["translate","Traduce con precisión: “La jerga corporativa suele suavizar el impacto de las malas noticias.”",["Corporate jargon often dilutes the impact of bad news.", "Corporate jargon often avoids the impact of bad news.", "A euphemism often softens the impact of bad news.", "Corporate jargon often softens the impact of bad news."],3,"“Suaviza el impacto” = “softens the impact”; el sujeto debe ser “corporate jargon”."],
      ["arrange","Ordena: [euphemism / for / restructuring / layoffs / is / a]",["a is euphemism layoffs for restructuring", "restructuring a layoffs is euphemism for", "restructuring is a euphemism for layoffs", "layoffs euphemism a is for restructuring"],2,"Sujeto + verbo + artículo + sustantivo + preposición + complemento."],
      ["writing","Escribe en inglés, en 55-75 palabras, analizando un eufemismo corporativo real o inventado: qué esconde, por qué se usa y cómo lo reformularías con más claridad, usando al menos un conector de reformulación.",[],["that is", "euphemism", "in other words"]],
    ]
  },
  {
    id:"a1_airport_hotel", level:"A1", title:"En el aeropuerto y el hotel", emoji:"✈️", xp:38,
    description:"Aprende vocabulario de viajes y a hablar de planes inmediatos con “going to” en inglés.",
    study: {
      vocab: [
        ["the passport", "el pasaporte"],
        ["the suitcase", "la maleta"],
        ["the flight", "el vuelo"],
        ["the room", "la habitación"],
        ["the booking", "la reserva"],
        ["to check in luggage", "facturar el equipaje"],
      ],
      grammar: [
        ["“Going to” + infinitivo para el futuro próximo", "En inglés, “to be going to” + verbo base expresa un plan o una acción que va a suceder pronto.", "I am going to check in my luggage. / We are going to book a room for Friday."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el pasaporte” en inglés?",["el vuelo", "la habitación", "the passport", "la reserva"],2,"“Pasaporte” es “passport” en inglés."],
      ["mcq","¿Cómo se dice “facturar el equipaje” en inglés?",["to check in luggage", "la reserva", "la habitación", "el pasaporte"],0,"“Facturar el equipaje” es “to check in luggage” en inglés."],
      ["fill","Completa: “Tomorrow I ___ going to check in my luggage very early.”",["is", "am", "are", "be"],1,"“I am going to” usa el verbo “to be” conjugado con “I”: “I am going to”."],
      ["translate","Traduce: “Vamos a reservar una habitación para el viernes.”",["We are going to book a flight for Friday.", "We are going to check in a room for Friday.", "We are going to book a room for Friday.", "We are going to book a room for Monday."],2,"“Vamos a reservar” = “We are going to book”, con “going to” + infinitivo."],
      ["arrange","Ordena: [going / I / to / passport / my / am / find]",["to going my passport I find am", "I my find going to passport am", "I am going to find my passport", "I am to going passport my find"],2,"Sujeto + “to be” + “going to” + infinitivo + objeto posesivo."],
      ["writing","Describe en inglés, en 20-30 palabras, tus planes de viaje: qué vas a hacer (check in luggage, book a room, etc.) usando “going to”.",[],["I am going to", "we are going to", "book"]],
    ]
  },
  {
    id:"a2_everyday_tech", level:"A2", title:"La tecnología del día a día", emoji:"📱", xp:48,
    description:"Aprende vocabulario de tecnología cotidiana y a comparar con “as...as” y “more...than”.",
    study: {
      vocab: [
        ["the wifi", "el wifi"],
        ["the password", "la contraseña"],
        ["the app", "la aplicación"],
        ["to charge the phone", "cargar el móvil"],
        ["to download", "descargar"],
        ["the battery", "la batería"],
      ],
      grammar: [
        ["Comparativos de igualdad y superioridad", "“As + adjetivo + as” compara cualidades iguales; “adjetivo + -er + than” o “more + adjetivo + than” compara superioridad.", "This app is as fast as the other one. / My battery lasts longer than yours."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la contraseña” en inglés?",["cargar el móvil", "la batería", "the password", "descargar"],2,"“Contraseña” es “password” en inglés."],
      ["mcq","¿Cómo se dice “descargar” en inglés?",["el wifi", "to download", "la contraseña", "cargar el móvil"],1,"“Descargar” es “download” en inglés."],
      ["fill","Completa: “This app is ___ fast as the other one.”",["very", "more", "less", "as"],3,"“As + adjetivo + as” compara dos cosas con la misma cualidad."],
      ["translate","Traduce: “Mi batería dura más que la tuya.”",["My battery lasts shorter than yours.", "My battery lasts as long as yours.", "My wifi lasts longer than yours.", "My battery lasts longer than yours."],3,"“Dura más que” = “lasts longer than”, comparativo de superioridad."],
      ["arrange","Ordena: [need / a / more / password / I / secure]",["I need a more secure password", "I a secure password more need", "I more secure password need a", "need a more I password secure"],0,"Sujeto + verbo + artículo + comparativo + adjetivo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, cómo usas la tecnología cada día, comparando dos aplicaciones o dispositivos con “as...as” o “more...than”.",[],["as...as", "more...than", "app"]],
    ]
  },
  {
    id:"b1_digital_entertainment", level:"B1", title:"El ocio digital: series y videojuegos", emoji:"🎮", xp:62,
    description:"Aprende vocabulario de entretenimiento digital y a expresar duración con el presente perfecto continuo.",
    study: {
      vocab: [
        ["the series/show", "la serie"],
        ["the video game", "el videojuego"],
        ["the streaming platform", "la plataforma de streaming"],
        ["to get hooked on something", "engancharse a algo"],
        ["binge-watching", "el maratón de series"],
        ["the subtitles", "los subtítulos"],
      ],
      grammar: [
        ["Presente perfecto continuo para expresar duración", "“Have/has been” + gerundio expresa cuánto tiempo lleva ocurriendo una acción que continúa en el presente, equivalente a “llevar + gerundio”.", "I have been watching this series for two hours. / We have been playing video games all weekend."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “engancharse a algo” en inglés?",["to get hooked on something", "engancharse a algo", "el maratón de series", "los subtítulos"],0,"“Engancharse a algo” es “to get hooked on something” en inglés."],
      ["mcq","¿Cómo se dice “el maratón de series” en inglés?",["binge-watching", "el videojuego", "el maratón de series", "engancharse a algo"],0,"“Maratón de series” es “binge-watching” en inglés."],
      ["fill","Completa: “I ___ been watching this series for two hours straight.”",["have", "was", "has", "am"],0,"El presente perfecto continuo con “I” usa “have been”: “I have been watching”."],
      ["translate","Traduce: “Llevamos todo el fin de semana jugando a videojuegos.”",["We have been playing series all weekend.", "We have been playing video games all weekend.", "We played video games all weekend.", "We have been watching video games all weekend."],1,"“Llevamos jugando” = “We have been playing”, presente perfecto continuo."],
      ["arrange","Ordena: [hooked / I / on / have / this series / gotten]",["hooked series have I on this gotten", "I have gotten hooked on this series", "have on series this hooked I gotten", "series on I hooked gotten have this"],1,"Sujeto + “have” + participio + adjetivo + preposición + complemento."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre una serie o videojuego al que te hayas enganchado, usando el presente perfecto continuo para decir cuánto tiempo llevas con ello.",[],["I have been", "hooked", "platform"]],
    ]
  },
  {
    id:"b2_cybersecurity_privacy", level:"B2", title:"La ciberseguridad y la privacidad online", emoji:"🔒", xp:84,
    description:"Habla de ciberseguridad usando oraciones de relativo especificativas y explicativas en inglés.",
    study: {
      vocab: [
        ["cybersecurity", "la ciberseguridad"],
        ["to hack a system", "hackear/vulnerar un sistema"],
        ["personal data", "los datos personales"],
        ["a strong password", "una contraseña segura"],
        ["identity theft/phishing", "la suplantación de identidad"],
        ["to encrypt information", "cifrar la información"],
      ],
      grammar: [
        ["Oraciones de relativo especificativas y explicativas", "Las especificativas (sin comas) identifican de qué hablamos y usan “that/which/who”; las explicativas (entre comas) añaden información extra y solo usan “which/who”, nunca “that”.", "The data that we share online can be hacked. (especificativa) / My data, which I rarely share, is well protected. (explicativa)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la suplantación de identidad” en inglés?",["la suplantación de identidad", "hackear/vulnerar un sistema", "identity theft/phishing", "una contraseña segura"],2,"“Suplantación de identidad” es “identity theft” o “phishing” en inglés."],
      ["mcq","¿Cómo se dice “cifrar la información” en inglés?",["to encrypt information", "la suplantación de identidad", "los datos personales", "hackear/vulnerar un sistema"],0,"“Cifrar la información” es “to encrypt information” en inglés."],
      ["fill","Completa: “The data ___ we share online can be hacked.”",["that", "whom", "who", "whose"],0,"La oración especificativa usa “that” sin comas para identificar de qué datos hablamos."],
      ["translate","Traduce: “Mis datos, que comparto poco, están bien protegidos.”",["My data, which I rarely share, is well protected.", "My data, which I rarely hack, is well protected.", "My data that I rarely share is well protected.", "My data, which I rarely share, is poorly protected."],0,"La coma marca una explicativa: “my data, which I rarely share,” añade información extra."],
      ["arrange","Ordena: [need / a / you / strong / password]",["you need a strong password", "strong you password need a", "you strong password need a", "password need you strong a"],0,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre cómo proteges tus datos personales online, usando al menos una oración de relativo especificativa y una explicativa.",[],["that", "which", "personal data"]],
    ]
  },
  {
    id:"c1_historical_memory_heritage", level:"C1", title:"La memoria histórica y el patrimonio cultural", emoji:"🏛️", xp:92,
    description:"Analiza la memoria histórica y el patrimonio cultural usando “to be” + participio para estados resultantes en inglés.",
    study: {
      vocab: [
        ["cultural heritage", "el patrimonio cultural"],
        ["to preserve historical memory", "preservar la memoria histórica"],
        ["a memorial", "un monumento conmemorativo"],
        ["the legacy", "el legado"],
        ["to rewrite history", "reescribir la historia"],
        ["collective identity", "la identidad colectiva"],
      ],
      grammar: [
        ["“To be” + participio para el estado resultante", "“To be” + participio pasado describe el estado resultante de una acción pasada, funcionando como un adjetivo.", "The memorial is dedicated to the victims. / History is marked by internal conflicts."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el legado” en inglés?",["el legado", "the legacy", "preservar la memoria histórica", "reescribir la historia"],1,"“Legado” es “legacy” en inglés."],
      ["mcq","¿Cómo se dice “reescribir la historia” en inglés?",["to rewrite history", "reescribir la historia", "el legado", "el patrimonio cultural"],0,"“Reescribir la historia” es “to rewrite history” en inglés."],
      ["fill","Completa: “The memorial ___ dedicated to the victims of the conflict.”",["is", "has", "was", "being"],0,"“To be” + participio describe el estado resultante: “the memorial is dedicated”."],
      ["translate","Traduce: “La identidad colectiva a menudo está marcada por la memoria histórica.”",["Collective identity is often shaped by historical memory.", "Collective identity was often shaped by historical memory.", "Collective identity is often shaped by the legacy.", "Cultural heritage is often shaped by historical memory."],0,"“Está marcada por” como estado resultante se traduce con “is shaped by”."],
      ["arrange","Ordena: [preserve / we / must / cultural heritage]",["cultural we heritage must preserve", "must we heritage cultural preserve", "we cultural preserve heritage must", "we must preserve cultural heritage"],3,"Sujeto + verbo modal + infinitivo + sustantivo + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un monumento o tradición que preserve la memoria histórica de tu comunidad, usando al menos dos construcciones con “to be” + participio.",[],["is dedicated", "is shaped", "cultural heritage"]],
    ]
  },
  {
    id:"c2_institutional_ambiguity", level:"C2", title:"La ambigüedad calculada en el discurso institucional", emoji:"🏛️", xp:100,
    description:"Analiza la ambigüedad institucional y practica conectores de matización epistémica en inglés.",
    study: {
      vocab: [
        ["calculated ambiguity", "la ambigüedad calculada"],
        ["an institutional statement", "un comunicado institucional"],
        ["to avoid committing oneself", "evitar comprometerse"],
        ["deliberate vagueness", "la vaguedad deliberada"],
        ["to read between the lines", "leer entre líneas"],
        ["evasive language", "un lenguaje evasivo"],
      ],
      grammar: [
        ["Conectores de matización epistémica", "Expresiones como “it is worth noting that”, “there is no doubt that” o “in a way” matizan el grado de certeza o relevancia de una afirmación, típicas del discurso institucional.", "It is worth noting that the statement avoids committing to specific dates. / In a way, the vagueness is deliberate."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “leer entre líneas” en inglés?",["to read between the lines", "un lenguaje evasivo", "un comunicado institucional", "leer entre líneas"],0,"“Leer entre líneas” es “to read between the lines” en inglés."],
      ["mcq","¿Cómo se dice “un lenguaje evasivo” en inglés?",["un lenguaje evasivo", "la vaguedad deliberada", "evasive language", "la ambigüedad calculada"],2,"“Un lenguaje evasivo” es “evasive language” en inglés."],
      ["fill","Completa: “It is worth noting ___ the statement avoids committing to specific dates.”",["what", "that", "so", "which"],1,"“It is worth noting that” es un conector fijo de matización epistémica que introduce una observación relevante."],
      ["translate","Traduce con precisión: “En cierto modo, la vaguedad es deliberada.”",["In one way, the vagueness is deliberate.", "In a way, the vagueness is evasive.", "In a way, the vagueness is deliberate.", "In a way, the ambiguity is calculated."],2,"“En cierto modo” = “in a way”, conector fijo de matización."],
      ["arrange","Ordena: [doubt / there / no / is / that / the language / is evasive]",["doubt the evasive is that no there language is", "that language is no evasive there doubt is the", "there is no doubt that the language is evasive", "doubt evasive there that is is the language no"],2,"Conector fijo “there is no doubt that” + subordinada."],
      ["writing","Escribe en inglés, en 55-75 palabras, analizando un comunicado institucional real o inventado que use ambigüedad calculada, usando al menos dos conectores de matización epistémica.",[],["it is worth noting that", "there is no doubt that", "in a way"]],
    ]
  },
  {
    id:"a1_sports_exercise", level:"A1", title:"Los deportes y el ejercicio", emoji:"⚽", xp:38,
    description:"Aprende vocabulario de deportes y a expresar gustos con “to like” en inglés.",
    study: {
      vocab: [
        ["soccer/football", "el fútbol"],
        ["swimming", "la natación"],
        ["to run", "correr"],
        ["the gym", "el gimnasio"],
        ["to exercise", "hacer ejercicio"],
        ["the team", "el equipo"],
      ],
      grammar: [
        ["El verbo “to like” + gerundio/sustantivo", "En inglés, “to like” concuerda con la persona que tiene el gusto (a diferencia de “gustar” en español) y va seguido de gerundio (-ing) o sustantivo.", "I like swimming. / She likes team sports."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la natación” en inglés?",["correr", "el gimnasio", "swimming", "el equipo"],2,"“Natación” es “swimming” en inglés."],
      ["mcq","¿Cómo se dice “el equipo” en inglés?",["the team", "el equipo", "correr", "hacer ejercicio"],0,"“Equipo” es “team” en inglés."],
      ["fill","Completa: “I ___ running in the morning.”",["likes", "liking", "like", "to like"],2,"Con el sujeto “I”, el verbo es “like”: “I like running”."],
      ["translate","Traduce: “A ella le gustan los deportes de equipo.”",["She likes team sports.", "She like team sports.", "They like team sports.", "She likes individual sports."],0,"“Le gustan” concuerda con el sujeto “ella” = “she likes”, con “-s” en tercera persona."],
      ["arrange","Ordena: [gym / go / to / I / the / to exercise]",["I go to the gym to exercise", "go to to I exercise the gym", "the exercise go gym I to to", "go the to exercise to gym I"],0,"Sujeto + verbo + preposición + artículo + sustantivo + infinitivo."],
      ["writing","Describe en inglés, en 20-30 palabras, qué deportes te gustan y con qué frecuencia haces ejercicio, usando “to like”.",[],["I like", "exercise", "sports"]],
    ]
  },
  {
    id:"a2_household_chores", level:"A2", title:"Los quehaceres domésticos", emoji:"🧹", xp:48,
    description:"Aprende vocabulario de tareas del hogar y a expresar obligación impersonal con “you have to”.",
    study: {
      vocab: [
        ["to sweep", "barrer"],
        ["to wash the dishes", "lavar los platos"],
        ["to take out the trash", "sacar la basura"],
        ["to iron the clothes", "planchar la ropa"],
        ["to make the bed", "hacer la cama"],
        ["to vacuum", "pasar la aspiradora"],
      ],
      grammar: [
        ["“You have to” para la obligación impersonal general", "En inglés, “you have to” + infinitivo se usa de forma impersonal para expresar una obligación general, sin referirse a un “tú” concreto.", "You have to take out the trash every day. / Before leaving, you have to make the bed."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lavar los platos” en inglés?",["lavar los platos", "planchar la ropa", "to wash the dishes", "hacer la cama"],2,"“Lavar los platos” es “to wash the dishes” en inglés."],
      ["mcq","¿Cómo se dice “pasar la aspiradora” en inglés?",["planchar la ropa", "to vacuum", "lavar los platos", "sacar la basura"],1,"“Pasar la aspiradora” es “to vacuum” en inglés."],
      ["fill","Completa: “Before leaving the house, you ___ to make the bed.”",["are", "have", "is", "has"],1,"“You have to” usa “have”, no “has”, porque el sujeto es “you”."],
      ["translate","Traduce: “Hay que sacar la basura todos los días.”",["You have to take out the trash every week.", "There is to take out the trash every day.", "You have to sweep the trash every day.", "You have to take out the trash every day."],3,"“Hay que sacar” en sentido impersonal se traduce con “you have to take out”."],
      ["arrange","Ordena: [the dishes / have to / wash / you]",["to dishes the have wash you", "have wash to dishes you the", "have wash dishes you to the", "you have to wash the dishes"],3,"Sujeto + “have to” + infinitivo + complemento."],
      ["speaking","Describe en inglés, en 40-60 palabras, qué quehaceres domésticos hay que hacer en tu casa cada semana, usando “have to”.",[],["you have to", "every week", "at home"]],
    ]
  },
  {
    id:"b1_dating_love", level:"B1", title:"Las citas y el amor", emoji:"💕", xp:62,
    description:"Aprende vocabulario sobre citas y a hacer promesas y predicciones con “will”.",
    study: {
      vocab: [
        ["to go on a date", "tener una cita"],
        ["to fall in love with someone", "enamorarse de alguien"],
        ["to break up with someone", "romper con alguien"],
        ["the partner/couple", "la pareja"],
        ["to miss someone", "echar de menos a alguien"],
        ["to get engaged/commit", "comprometerse"],
      ],
      grammar: [
        ["“Will” para promesas y predicciones", "“Will” + infinitivo sin “to” se usa para hacer promesas formales o predecir lo que pasará, más definitivo que “going to”.", "I promise I will never break up with you. / I think you two will get engaged soon."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “enamorarse de alguien” en inglés?",["enamorarse de alguien", "to fall in love with someone", "romper con alguien", "la pareja"],1,"“Enamorarse de alguien” es “to fall in love with someone” en inglés."],
      ["mcq","¿Cómo se dice “echar de menos a alguien” en inglés?",["echar de menos a alguien", "comprometerse", "to miss someone", "tener una cita"],2,"“Echar de menos a alguien” es “to miss someone” en inglés."],
      ["fill","Completa: “I promise I ___ never break up with you.”",["will", "am", "would", "have"],0,"“Will” + infinitivo sin “to” expresa una promesa firme sobre algo que no sucederá."],
      ["translate","Traduce: “Creo que os comprometeréis pronto.”",["I think you two will fall in love soon.", "I think you two get engaged soon.", "I think you two will get engaged tomorrow.", "I think you two will get engaged soon."],3,"“Os comprometeréis” = “will get engaged”, con “will” para una predicción."],
      ["arrange","Ordena: [a date / going / tomorrow / I'm / to have]",["I'm a tomorrow to going have date", "I'm going to have a date tomorrow", "going a date tomorrow to have I'm", "going date to tomorrow have a I'm"],1,"Sujeto + “going to” + infinitivo + artículo + sustantivo + adverbio de tiempo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre una relación (real o inventada), usando al menos dos verbos con “will” para hacer promesas o predicciones.",[],["I will", "we will", "partner"]],
    ]
  },
  {
    id:"b2_sustainable_tourism", level:"B2", title:"El turismo sostenible y el overtourism", emoji:"🧳", xp:84,
    description:"Habla sobre turismo sostenible usando “unless” y “provided that” en inglés.",
    study: {
      vocab: [
        ["overtourism", "el overtourism (turismo masivo)"],
        ["to overcrowd a tourist destination", "saturar un destino turístico"],
        ["sustainable tourism", "el turismo sostenible"],
        ["to drive up local housing costs", "encarecer la vivienda local"],
        ["to spread out tourism's impact", "repartir el impacto turístico"],
        ["to respect the local culture", "respetar la cultura local"],
      ],
      grammar: [
        ["“Unless” y “provided that” para condiciones", "“Unless” (a menos que) y “provided that” (siempre que) introducen una condición, seguidas de presente simple en inglés (no subjuntivo, a diferencia del español).", "The destination will stay overcrowded unless tourism is regulated. / Tourism will be positive provided that the local culture is respected."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “encarecer la vivienda local” en inglés?",["to drive up local housing costs", "repartir el impacto turístico", "respetar la cultura local", "encarecer la vivienda local"],0,"“Encarecer la vivienda local” es “to drive up local housing costs” en inglés."],
      ["mcq","¿Cómo se dice “repartir el impacto turístico” en inglés?",["encarecer la vivienda local", "to spread out tourism's impact", "respetar la cultura local", "el turismo sostenible"],1,"“Repartir el impacto turístico” es “to spread out tourism's impact” en inglés."],
      ["fill","Completa: “The destination will stay overcrowded ___ tourism is regulated.”",["provided", "because", "although", "unless"],3,"“Unless” introduce la condición negativa: “unless tourism is regulated”."],
      ["translate","Traduce: “El turismo será positivo siempre que se respete la cultura local.”",["Tourism will be positive provided that the local culture is ignored.", "Tourism will be positive provided that the local culture is respected.", "Tourism will be positive unless the local culture is respected.", "Tourism was positive provided that the local culture is respected."],1,"“Siempre que” = “provided that”, seguido de presente simple: “is respected”."],
      ["arrange","Ordena: [tourist destinations / are / many / overcrowded]",["are many overcrowded destinations tourist", "many tourist destinations are overcrowded", "tourist overcrowded destinations many are", "destinations are tourist many overcrowded"],1,"Sujeto + verbo + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre el overtourism en un destino que conozcas, usando al menos un “unless” y un “provided that”.",[],["unless", "provided that", "sustainable"]],
    ]
  },
  {
    id:"c1_gastronomy_identity", level:"C1", title:"La gastronomía y la identidad cultural", emoji:"🍽️", xp:92,
    description:"Analiza la gastronomía como identidad cultural usando oraciones hendidas (cleft sentences) con “what”.",
    study: {
      vocab: [
        ["protected designation of origin", "la denominación de origen"],
        ["an iconic/signature dish", "un plato emblemático"],
        ["culinary fusion", "la fusión culinaria"],
        ["to preserve a traditional recipe", "preservar una receta tradicional"],
        ["to appropriate a culinary tradition", "apropiarse de una tradición culinaria"],
        ["the collective palate", "el paladar colectivo"],
      ],
      grammar: [
        ["Oraciones hendidas con “what”", "“What” + verbo + “is” enfatiza un elemento de la oración, dándole mayor protagonismo, muy usado en registro argumentativo en inglés.", "What defines a culture is its cuisine. / What worries local chefs is the appropriation of their recipes."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un plato emblemático” en inglés?",["preservar una receta tradicional", "un plato emblemático", "an iconic/signature dish", "apropiarse de una tradición culinaria"],2,"“Un plato emblemático” es “an iconic/signature dish” en inglés."],
      ["mcq","¿Cómo se dice “apropiarse de una tradición culinaria” en inglés?",["to appropriate a culinary tradition", "la denominación de origen", "apropiarse de una tradición culinaria", "el paladar colectivo"],0,"“Apropiarse de una tradición culinaria” es “to appropriate a culinary tradition” en inglés."],
      ["fill","Completa: “What ___ a culture is, to a great extent, its cuisine.”",["define", "defined", "defines", "defining"],2,"La oración hendida “what + verbo + is” lleva el verbo en tercera persona singular: “what defines”."],
      ["translate","Traduce con oración hendida: “Lo que preocupa a los chefs locales es la apropiación de sus recetas.”",["What worries local chefs is the appropriation of their recipes.", "What worries local chefs are the appropriation of their recipes.", "What worry local chefs is the appropriation of their recipes.", "What worries local chefs is the fusion of their recipes."],0,"El verbo “worries” lleva “-s” de tercera persona singular, concordando con “what”."],
      ["arrange","Ordena: [must / this / preserve / recipe / we / traditional]",["must recipe this we traditional preserve", "must traditional we recipe this preserve", "preserve must we traditional recipe this", "we must preserve this traditional recipe"],3,"Sujeto + verbo modal + infinitivo + objeto demostrativo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un plato que consideres parte de tu identidad cultural, usando al menos dos oraciones hendidas con “what”.",[],["what defines", "what represents", "cultural identity"]],
    ]
  },
  {
    id:"c2_crisis_rhetoric", level:"C2", title:"La retórica de la crisis y el pánico moral", emoji:"📢", xp:100,
    description:"Analiza la retórica de crisis y practica estructuras de intensificación retórica en inglés.",
    study: {
      vocab: [
        ["moral panic", "el pánico moral"],
        ["a manufactured crisis", "una crisis fabricada"],
        ["to catastrophize a situation", "catastrofizar una situación"],
        ["a scapegoat", "un chivo expiatorio"],
        ["to blow a threat out of proportion", "desproporcionar una amenaza"],
        ["alarmist rhetoric", "un discurso alarmista"],
      ],
      grammar: [
        ["Estructuras de intensificación retórica", "“Not only... but also” y “increasingly” intensifican una afirmación, acumulando gravedad — recurso típico del discurso de crisis y del pánico moral en inglés.", "Not only is the threat exaggerated, but a scapegoat is also sought. / Alarmist rhetoric is becoming increasingly common in the media."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un chivo expiatorio” en inglés?",["a scapegoat", "el pánico moral", "catastrofizar una situación", "una crisis fabricada"],0,"“Un chivo expiatorio” es “a scapegoat” en inglés."],
      ["mcq","¿Cómo se dice “desproporcionar una amenaza” en inglés?",["un discurso alarmista", "desproporcionar una amenaza", "to blow a threat out of proportion", "el pánico moral"],2,"“Desproporcionar una amenaza” es “to blow a threat out of proportion” en inglés."],
      ["fill","Completa: “Not only is the threat exaggerated, ___ a scapegoat is also sought.”",["although", "and", "so", "but"],3,"“Not only... but also” intensifica una afirmación añadiendo un segundo elemento."],
      ["translate","Traduce con precisión: “El discurso alarmista es cada vez más frecuente en los medios.”",["Moral panic is becoming increasingly common in the media.", "Alarmist rhetoric is becoming increasingly rare in the media.", "Alarmist rhetoric is becoming increasingly severe in the media.", "Alarmist rhetoric is becoming increasingly common in the media."],3,"“Cada vez más frecuente” = “increasingly common”, estructura de intensificación gradual."],
      ["arrange","Ordena: [media / a / seek / scapegoat / the]",["seek the scapegoat media a", "seek the media scapegoat a", "the media seek a scapegoat", "media the seek scapegoat a"],2,"Sujeto + verbo + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, analizando un caso real o inventado de pánico moral en los medios, usando al menos una estructura “not only... but also” y una con “increasingly”.",[],["not only... but also", "increasingly", "moral panic"]],
    ]
  },
  {
    id:"b1_volunteering_community", level:"B1", title:"El voluntariado y el trabajo comunitario", emoji:"🤲", xp:62,
    description:"Aprende vocabulario sobre voluntariado y a hablar de hábitos pasados con “used to”.",
    study: {
      vocab: [
        ["to volunteer", "hacer voluntariado"],
        ["a non-profit organization", "una organización sin fines de lucro"],
        ["to raise funds", "recaudar fondos"],
        ["a food drive", "una colecta de alimentos"],
        ["to give back to the community", "retribuir a la comunidad"],
        ["a shelter", "un refugio"],
      ],
      grammar: [
        ["“Used to” para hábitos pasados", "“Used to” + infinitivo sin “to” expresa una acción habitual en el pasado que ya no ocurre, similar a “solía” en español.", "I used to volunteer at a shelter every weekend. / She used to organize food drives in college."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “recaudar fondos” en inglés?",["una organización sin fines de lucro", "to raise funds", "una colecta de alimentos", "retribuir a la comunidad"],1,"“Recaudar fondos” es “to raise funds” en inglés."],
      ["mcq","¿Cómo se dice “retribuir a la comunidad” en inglés?",["una colecta de alimentos", "recaudar fondos", "hacer voluntariado", "to give back to the community"],3,"“Retribuir a la comunidad” es “to give back to the community” en inglés."],
      ["fill","Completa: “I ___ to volunteer at a shelter every weekend.”",["am used", "use", "was using", "used"],3,"“Used to” + infinitivo expresa un hábito pasado: “I used to volunteer”."],
      ["translate","Traduce: “Ella solía organizar colectas de alimentos en la universidad.”",["She used to organize food drives at work.", "She used to raise food drives in college.", "She uses to organize food drives in college.", "She used to organize food drives in college."],3,"“Solía organizar” = “used to organize”, con “used to” + infinitivo."],
      ["arrange","Ordena: [funds / to / want / raise / we]",["we want to raise funds", "to funds we raise want", "raise want we funds to", "raise we to want funds"],0,"Sujeto + verbo + infinitivo + complemento."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre una experiencia de voluntariado (real o inventada), usando “used to” para describir hábitos pasados.",[],["I used to", "volunteer", "community"]],
    ]
  },
  {
    id:"b1_renting_apartment", level:"B1", title:"Alquilar un apartamento", emoji:"🏠", xp:62,
    description:"Aprende vocabulario sobre alquiler de vivienda y a usar pronombres relativos “who/which/that”.",
    study: {
      vocab: [
        ["the landlord/landlady", "el propietario/la propietaria"],
        ["the tenant", "el inquilino/la inquilina"],
        ["the lease/rental agreement", "el contrato de alquiler"],
        ["the security deposit", "el depósito de garantía"],
        ["to sign a contract", "firmar un contrato"],
        ["utilities included", "servicios incluidos"],
      ],
      grammar: [
        ["Pronombres relativos “who”, “which” y “that”", "“Who” se usa para personas, “which” para cosas, y “that” puede sustituir a ambos en oraciones especificativas, sin coma.", "The landlord who owns this building lives nearby. / The apartment that I rented has utilities included."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el contrato de alquiler” en inglés?",["el depósito de garantía", "el inquilino/la inquilina", "firmar un contrato", "the lease/rental agreement"],3,"“Contrato de alquiler” es “lease” o “rental agreement” en inglés."],
      ["mcq","¿Cómo se dice “el depósito de garantía” en inglés?",["el contrato de alquiler", "servicios incluidos", "el depósito de garantía", "the security deposit"],3,"“Depósito de garantía” es “security deposit” en inglés."],
      ["fill","Completa: “The landlord ___ owns this building lives nearby.”",["who", "whose", "whom", "which"],0,"“Who” se usa para referirse a personas: “the landlord who owns”."],
      ["translate","Traduce: “El apartamento que alquilé tiene servicios incluidos.”",["The tenant that I rented has utilities included.", "The apartment that I rented has utilities excluded.", "The apartment that I rented has utilities included.", "The apartment who I rented has utilities included."],2,"“Que alquilé” se refiere a una cosa (el apartamento), por lo que se usa “that” o “which”."],
      ["arrange","Ordena: [before / sign / read / the / lease / you]",["you read the lease before you sign", "lease before you the you read sign", "sign you the before lease read you", "you read you lease the sign before"],0,"Sujeto + verbo + artículo + sustantivo + conector temporal + sujeto + verbo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre cómo buscarías un apartamento para alquilar, usando al menos dos oraciones con “who”, “which” o “that”.",[],["that", "which", "landlord"]],
    ]
  },
  {
    id:"b2_personal_goals_habits", level:"B2", title:"Metas personales y la construcción de hábitos", emoji:"🎯", xp:84,
    description:"Habla de metas personales usando “so that” e “in order to” para expresar propósito.",
    study: {
      vocab: [
        ["to set a goal", "fijar una meta"],
        ["to build a habit", "construir un hábito"],
        ["consistency", "la constancia"],
        ["to track progress", "hacer seguimiento del progreso"],
        ["to stay motivated", "mantenerse motivado/a"],
        ["a setback", "un contratiempo/retroceso"],
      ],
      grammar: [
        ["“So that” y “in order to” para expresar propósito", "“In order to” + infinitivo y “so that” + cláusula (con sujeto propio) expresan el propósito de una acción; “so that” se usa cuando el sujeto de la segunda parte es distinto.", "I track my progress in order to stay motivated. / She writes down her goals so that she doesn't forget them."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “hacer seguimiento del progreso” en inglés?",["la constancia", "to track progress", "un contratiempo/retroceso", "fijar una meta"],1,"“Hacer seguimiento del progreso” es “to track progress” en inglés."],
      ["mcq","¿Cómo se dice “un contratiempo/retroceso” en inglés?",["fijar una meta", "a setback", "hacer seguimiento del progreso", "un contratiempo/retroceso"],1,"“Un contratiempo/retroceso” es “a setback” en inglés."],
      ["fill","Completa: “She writes down her goals ___ she doesn't forget them.”",["because", "so that", "although", "in order to"],1,"“So that” introduce una cláusula con sujeto propio para expresar propósito: “so that she doesn't forget”."],
      ["translate","Traduce: “Hago seguimiento de mi progreso para mantenerme motivado.”",["I track my progress in order to stay motivated.", "I track my progress in order to stay unmotivated.", "I track my progress so that stay motivated.", "I track my progress in order stay motivated."],0,"“Para mantenerme motivado” = “in order to stay motivated”, con “in order to” + infinitivo."],
      ["arrange","Ordena: [habit / build / takes / a / time / new]",["a new habit takes time to build", "time takes habit new a to build", "to build a new takes habit time", "build new takes time a to habit"],0,"Artículo + adjetivo + sustantivo + verbo + sustantivo + infinitivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre una meta personal que tengas, usando al menos un “in order to” y un “so that” para expresar propósito.",[],["in order to", "so that", "goal"]],
    ]
  },
  {
    id:"c1_public_speaking_presentations", level:"C1", title:"Hablar en público y las presentaciones", emoji:"🎤", xp:92,
    description:"Aprende a dar énfasis en presentaciones formales usando la inversión (“never have I...”).",
    study: {
      vocab: [
        ["stage fright", "el miedo escénico"],
        ["to engage the audience", "captar la atención del público"],
        ["a compelling argument", "un argumento convincente"],
        ["to make eye contact", "hacer contacto visual"],
        ["a rhetorical question", "una pregunta retórica"],
        ["to command the room", "dominar la sala/el escenario"],
      ],
      grammar: [
        ["Inversión para dar énfasis", "En un registro muy formal, colocar un adverbio negativo o restrictivo al principio de la oración invierte el orden sujeto-verbo, dando énfasis dramático.", "Never have I seen a more compelling argument. / Rarely does a speaker command the room like she does."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “captar la atención del público” en inglés?",["el miedo escénico", "hacer contacto visual", "dominar la sala/el escenario", "to engage the audience"],3,"“Captar la atención del público” es “to engage the audience” en inglés."],
      ["mcq","¿Cómo se dice “dominar la sala/el escenario” en inglés?",["un argumento convincente", "el miedo escénico", "to command the room", "una pregunta retórica"],2,"“Dominar la sala/el escenario” es “to command the room” en inglés."],
      ["fill","Completa: “Never ___ I seen a more compelling argument.”",["did", "do", "have", "had"],2,"La inversión con “never” requiere el auxiliar antes del sujeto: “never have I seen”."],
      ["translate","Traduce con inversión: “Rarely does a speaker command the room like she does.”",["Rarely does a speaker command the room like she does.", "Rarely does a speaker commands the room like she does.", "Rarely a speaker does command the room like she does.", "Rarely a speaker commands the room like she does."],0,"La inversión con “rarely” lleva el auxiliar “does” antes del sujeto: “rarely does a speaker”."],
      ["arrange","Ordena: [audience / important / engage / it's / the / to]",["engage important the to audience it's", "to important the it's audience engage", "important engage to audience it's the", "it's important to engage the audience"],3,"Sujeto expletivo + verbo + adjetivo + infinitivo + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre cómo prepararías una presentación importante, usando al menos una estructura de inversión (“never have I...”, “rarely does...”).",[],["never have I", "rarely does", "audience"]],
    ]
  },
  {
    id:"c1_cultural_taboos_norms", level:"C1", title:"Los tabúes culturales en el mundo", emoji:"🌍", xp:92,
    description:"Analiza tabúes culturales usando “despite” e “in spite of” + gerundio.",
    study: {
      vocab: [
        ["a cultural taboo", "un tabú cultural"],
        ["to cause offense", "ofender/causar ofensa"],
        ["a social norm", "una norma social"],
        ["to challenge a convention", "desafiar una convención"],
        ["culturally sensitive", "culturalmente sensible"],
        ["an unspoken rule", "una regla tácita"],
      ],
      grammar: [
        ["“Despite” e “in spite of” + gerundio", "“Despite” e “in spite of” expresan contraste y van seguidas de un sustantivo o gerundio (no de una oración con sujeto y verbo conjugado, a diferencia de “although”).", "Despite knowing the local customs, he still caused offense. / In spite of being culturally sensitive, mistakes can happen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “desafiar una convención” en inglés?",["to challenge a convention", "ofender/causar ofensa", "una norma social", "desafiar una convención"],0,"“Desafiar una convención” es “to challenge a convention” en inglés."],
      ["mcq","¿Cómo se dice “una regla tácita” en inglés?",["un tabú cultural", "una regla tácita", "an unspoken rule", "culturalmente sensible"],2,"“Una regla tácita” es “an unspoken rule” en inglés."],
      ["fill","Completa: “Despite ___ the local customs, he still caused offense.”",["knowing", "known", "knows", "know"],0,"“Despite” va seguido de gerundio: “despite knowing”."],
      ["translate","Traduce: “A pesar de ser culturalmente sensible, pueden ocurrir errores.”",["Despite of being culturally sensitive, mistakes can happen.", "In spite of being culturally sensitive, mistakes can happen.", "In spite of being culturally insensitive, mistakes can happen.", "In spite of be culturally sensitive, mistakes can happen."],1,"“In spite of” + gerundio: “in spite of being”."],
      ["arrange","Ordena: [taboo / cultures / varies / by / what's]",["cultures taboo what's varies by", "what's taboo varies by cultures", "cultures what's by varies taboo", "varies cultures what's by taboo"],1,"Sujeto + verbo + preposición + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un tabú cultural que conozcas de otro país, usando al menos un “despite” y un “in spite of” + gerundio.",[],["despite", "in spite of", "taboo"]],
    ]
  },
  {
    id:"c1_gig_economy_freelancing", level:"C1", title:"La economía de plataformas y el trabajo autónomo", emoji:"💼", xp:92,
    description:"Habla sobre trabajo autónomo usando “would rather” y “had better”.",
    study: {
      vocab: [
        ["freelancing", "el trabajo autónomo/freelance"],
        ["the gig economy", "la economía de plataformas"],
        ["job security", "la estabilidad laboral"],
        ["to be your own boss", "ser tu propio jefe"],
        ["irregular income", "ingresos irregulares"],
        ["to juggle multiple clients", "hacer malabares con varios clientes"],
      ],
      grammar: [
        ["“Would rather” y “had better” para preferencias y consejos urgentes", "“Would rather” + infinitivo sin “to” expresa una preferencia; “had better” + infinitivo sin “to” da un consejo urgente, casi una advertencia.", "I would rather freelance than have a 9-to-5 job. / You had better save money if your income is irregular."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ser tu propio jefe” en inglés?",["ingresos irregulares", "hacer malabares con varios clientes", "ser tu propio jefe", "to be your own boss"],3,"“Ser tu propio jefe” es “to be your own boss” en inglés."],
      ["mcq","¿Cómo se dice “hacer malabares con varios clientes” en inglés?",["la economía de plataformas", "to juggle multiple clients", "hacer malabares con varios clientes", "ingresos irregulares"],1,"“Hacer malabares con varios clientes” es “to juggle multiple clients” en inglés."],
      ["fill","Completa: “You ___ better save money if your income is irregular.”",["would", "have", "had", "should to"],2,"“Had better” + infinitivo sin “to” da un consejo urgente: “you had better save”."],
      ["translate","Traduce: “Preferiría trabajar de forma autónoma que tener un trabajo de 9 a 5.”",["I would rather to freelance than have a 9-to-5 job.", "I would rather freelance than have a 9-to-5 job.", "I had better freelance than have a 9-to-5 job.", "I would rather freelance than having a 9-to-5 job."],1,"“Would rather” + infinitivo sin “to”: “would rather freelance”."],
      ["arrange","Ordena: [security / lacks / freelancing / job / often]",["freelancing security often job lacks", "job freelancing security lacks often", "often freelancing job lacks security", "freelancing often lacks job security"],3,"Sujeto + adverbio + verbo + sustantivo compuesto."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre las ventajas y desventajas del trabajo autónomo, usando al menos un “would rather” y un “had better”.",[],["would rather", "had better", "freelance"]],
    ]
  },
  {
    id:"c1_urban_planning_public_spaces", level:"C1", title:"El urbanismo y los espacios públicos", emoji:"🏙️", xp:92,
    description:"Analiza el urbanismo usando la voz pasiva con verbos modales.",
    study: {
      vocab: [
        ["urban planning", "el urbanismo/planificación urbana"],
        ["a pedestrian zone", "una zona peatonal"],
        ["green spaces", "espacios verdes"],
        ["to revitalize a neighborhood", "revitalizar un barrio"],
        ["public transportation network", "la red de transporte público"],
        ["urban sprawl", "la expansión urbana descontrolada"],
      ],
      grammar: [
        ["La voz pasiva con verbos modales", "“Modal + be + participio” combina un verbo modal con la voz pasiva, muy usado en discurso técnico y de planificación urbana.", "Green spaces should be prioritized in urban planning. / Public transportation must be improved to reduce sprawl."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “revitalizar un barrio” en inglés?",["el urbanismo/planificación urbana", "revitalizar un barrio", "una zona peatonal", "to revitalize a neighborhood"],3,"“Revitalizar un barrio” es “to revitalize a neighborhood” en inglés."],
      ["mcq","¿Cómo se dice “la expansión urbana descontrolada” en inglés?",["la red de transporte público", "revitalizar un barrio", "espacios verdes", "urban sprawl"],3,"“La expansión urbana descontrolada” es “urban sprawl” en inglés."],
      ["fill","Completa: “Green spaces should ___ prioritized in urban planning.”",["is", "been", "being", "be"],3,"El modal + “be” + participio forma la voz pasiva: “should be prioritized”."],
      ["translate","Traduce: “El transporte público debe mejorarse para reducir la expansión urbana.”",["Public transportation must be improving to reduce sprawl.", "Public transportation must improve to reduce sprawl.", "Public transportation must be improved to reduce sprawl.", "Public transportation must be improved to increase sprawl."],2,"“Debe mejorarse” = “must be improved”, voz pasiva con modal."],
      ["arrange","Ordena: [walkable / cities / more / becoming / are]",["more cities are becoming walkable", "becoming more walkable cities are", "becoming are cities walkable more", "cities are becoming more walkable"],3,"Sujeto + verbo + comparativo + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre cómo debería mejorarse el urbanismo en tu ciudad, usando al menos dos construcciones de voz pasiva con verbos modales.",[],["should be", "must be", "urban planning"]],
    ]
  },
  {
    id:"c2_philosophy_happiness", level:"C2", title:"La filosofía de la felicidad", emoji:"😊", xp:100,
    description:"Explora la filosofía de la felicidad usando el modo subjuntivo en inglés formal.",
    study: {
      vocab: [
        ["fulfillment", "la plenitud/realización"],
        ["hedonic adaptation", "la adaptación hedónica"],
        ["a fleeting pleasure", "un placer fugaz"],
        ["the pursuit of happiness", "la búsqueda de la felicidad"],
        ["existential contentment", "la satisfacción existencial"],
        ["to derive meaning from something", "extraer significado de algo"],
      ],
      grammar: [
        ["El modo subjuntivo en inglés formal", "En un registro formal, después de verbos y expresiones como “it is essential that” o “it is vital that”, el verbo va en subjuntivo (forma base, sin “-s” ni conjugación).", "It is essential that happiness be understood beyond fleeting pleasure. / Philosophers suggest that one seek meaning rather than comfort."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un placer fugaz” en inglés?",["extraer significado de algo", "la búsqueda de la felicidad", "a fleeting pleasure", "un placer fugaz"],2,"“Un placer fugaz” es “a fleeting pleasure” en inglés."],
      ["mcq","¿Cómo se dice “extraer significado de algo” en inglés?",["la plenitud/realización", "la satisfacción existencial", "to derive meaning from something", "un placer fugaz"],2,"“Extraer significado de algo” es “to derive meaning from something” en inglés."],
      ["fill","Completa: “It is essential that happiness ___ understood beyond fleeting pleasure.”",["was", "is", "be", "being"],2,"El subjuntivo formal usa la forma base del verbo, sin conjugar: “that happiness be understood”."],
      ["translate","Traduce con subjuntivo formal: “Los filósofos sugieren que uno busque significado en lugar de comodidad.”",["Philosophers suggest that one seeks meaning rather than comfort.", "Philosophers suggest that one sought meaning rather than comfort.", "Philosophers suggest that one seek comfort rather than meaning.", "Philosophers suggest that one seek meaning rather than comfort."],3,"El subjuntivo formal “that one seek” usa la forma base, sin “-s”."],
      ["arrange","Ordena: [is / than / more / happiness / possessions]",["is possessions happiness than more", "is happiness than more possessions", "happiness is more than possessions", "than is more happiness possessions"],2,"Sujeto + verbo + comparativo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre qué significa la felicidad para ti, usando al menos dos estructuras con subjuntivo formal (“it is essential that...”, “it is vital that...”).",[],["it is essential that", "it is vital that", "fulfillment"]],
    ]
  },
  {
    id:"c2_satire_social_commentary", level:"C2", title:"La sátira y la crítica social", emoji:"🎭", xp:100,
    description:"Analiza la sátira y la crítica social usando condicionales mixtos en inglés.",
    study: {
      vocab: [
        ["satire", "la sátira"],
        ["to poke fun at something", "burlarse de algo"],
        ["a caricature", "una caricatura"],
        ["social commentary", "la crítica/comentario social"],
        ["to expose hypocrisy", "poner al descubierto la hipocresía"],
        ["biting wit", "el ingenio mordaz"],
      ],
      grammar: [
        ["Condicionales mixtos", "Los condicionales mixtos combinan una condición en un tiempo con un resultado en otro, como una condición pasada con resultado presente, típicos del registro reflexivo y crítico.", "If satirists hadn't exposed that hypocrisy, we wouldn't see it so clearly today. / If she were less witty, her satire wouldn't have had such an impact."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “burlarse de algo” en inglés?",["burlarse de algo", "to poke fun at something", "una caricatura", "el ingenio mordaz"],1,"“Burlarse de algo” es “to poke fun at something” en inglés."],
      ["mcq","¿Cómo se dice “poner al descubierto la hipocresía” en inglés?",["to expose hypocrisy", "la sátira", "una caricatura", "la crítica/comentario social"],0,"“Poner al descubierto la hipocresía” es “to expose hypocrisy” en inglés."],
      ["fill","Completa: “If satirists ___ exposed that hypocrisy, we wouldn't see it so clearly today.”",["didn't", "haven't", "wouldn't", "hadn't"],3,"El condicional mixto usa pasado perfecto en la condición: “if satirists hadn't exposed”."],
      ["translate","Traduce con condicional mixto: “Si ella fuera menos ingeniosa, su sátira no habría tenido tanto impacto.”",["If she were more witty, her satire wouldn't have had such an impact.", "If she were less witty, her satire hadn't had such an impact.", "If she were less witty, her satire wouldn't have had such an impact.", "If she was less witty, her satire wouldn't have had such an impact."],2,"El condicional mixto combina “if + were” (presente irreal) con “wouldn't have had” (resultado pasado)."],
      ["arrange","Ordena: [hypocrisy / satire / exposes / often / social]",["satire hypocrisy exposes often social", "often satire exposes social hypocrisy", "satire social often hypocrisy exposes", "satire often exposes social hypocrisy"],3,"Sujeto + adverbio + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, analizando una obra satírica que conozcas, usando al menos una estructura de condicional mixto.",[],["if...hadn't", "wouldn't have", "satire"]],
    ]
  },
  {
    id:"c2_language_evolution_slang", level:"C2", title:"La evolución del argot y el cambio lingüístico", emoji:"🗣️", xp:100,
    description:"Analiza la evolución del argot usando oraciones de relativo nominal (“whatever”, “whoever”).",
    study: {
      vocab: [
        ["slang", "el argot/jerga"],
        ["to fall out of use", "caer en desuso"],
        ["a linguistic trend", "una tendencia lingüística"],
        ["to coin a term", "acuñar un término"],
        ["generational language gap", "la brecha lingüística generacional"],
        ["to gain mainstream acceptance", "ganar aceptación general"],
      ],
      grammar: [
        ["Oraciones de relativo nominal con “whatever/whoever”", "“Whatever”, “whoever” y “whichever” funcionan como pronombres relativos que incluyen su propio antecedente, sin necesidad de un sustantivo previo.", "Whatever slang gains mainstream acceptance eventually changes meaning. / Whoever coins a term rarely controls how it evolves."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “caer en desuso” en inglés?",["la brecha lingüística generacional", "una tendencia lingüística", "acuñar un término", "to fall out of use"],3,"“Caer en desuso” es “to fall out of use” en inglés."],
      ["mcq","¿Cómo se dice “acuñar un término” en inglés?",["la brecha lingüística generacional", "to coin a term", "ganar aceptación general", "el argot/jerga"],1,"“Acuñar un término” es “to coin a term” en inglés."],
      ["fill","Completa: “___ slang gains mainstream acceptance eventually changes meaning.”",["Whichever one", "Whatever", "That", "What"],1,"“Whatever” funciona como sujeto sin antecedente previo: “whatever slang gains acceptance”."],
      ["translate","Traduce con relativo nominal: “Quien sea que acuñe un término rara vez controla cómo evoluciona.”",["Whoever coin a term rarely controls how it evolves.", "Whoever coins a term rarely controls how it evolves.", "Whoever coins a term rarely control how it evolves.", "Whatever coins a term rarely controls how it evolves."],1,"“Whoever” + verbo en tercera persona singular: “whoever coins”."],
      ["arrange","Ordena: [changes / language / constantly / generations / across]",["language changes constantly across generations", "across changes generations language constantly", "language generations across constantly changes", "across constantly changes generations language"],0,"Sujeto + verbo + adverbio + preposición + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre cómo ha cambiado el argot entre generaciones, usando al menos una oración de relativo nominal (“whatever”, “whoever”, “whichever”).",[],["whatever", "whoever", "slang"]],
    ]
  },
  {
    id:"a1_school_supplies_subjects", level:"A1", title:"En la escuela: útiles y asignaturas", emoji:"🎒", xp:38,
    description:"Aprende vocabulario escolar y a usar correctamente los artículos “a/an” y “the” en inglés.",
    study: {
      vocab: [
        ["the notebook", "el cuaderno"],
        ["the pencil", "el lápiz"],
        ["the backpack", "la mochila"],
        ["math", "las matemáticas"],
        ["history", "la historia"],
        ["the teacher", "el/la profesor/a"],
      ],
      grammar: [
        ["Artículos “a/an” y “the”", "“A/an” se usa para algo no específico o mencionado por primera vez; “the” se usa para algo específico o ya conocido por ambos hablantes.", "I have a new notebook. / The notebook is in the backpack."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el lápiz” en inglés?",["la mochila", "las matemáticas", "la historia", "the pencil"],3,"“Lápiz” es “pencil” en inglés."],
      ["mcq","¿Cómo se dice “las matemáticas” en inglés?",["math", "la mochila", "el/la profesor/a", "las matemáticas"],0,"“Matemáticas” es “math” en inglés."],
      ["fill","Completa: “I have ___ new backpack for school.”",["the", "an", "a", "some"],2,"Se usa “a” porque es la primera vez que se menciona y “backpack” empieza con consonante."],
      ["translate","Traduce: “El cuaderno está en la mochila.”",["The pencil is in the backpack.", "A notebook is in the backpack.", "The notebook is in the classroom.", "The notebook is in the backpack."],3,"“El cuaderno” ya es conocido, por eso se usa el artículo definido “the”."],
      ["arrange","Ordena: [history / I / a lot / like]",["a I like lot history", "history like lot a I", "lot a history I like", "I like history a lot"],3,"Sujeto + verbo + sustantivo + adverbio."],
      ["writing","Describe en inglés, en 20-30 palabras, qué útiles escolares tienes y qué asignatura te gusta más, usando “a/an” y “the”.",[],["a/an", "the", "I like"]],
    ]
  },
  {
    id:"a2_post_office_packages", level:"A2", title:"El correo y los paquetes", emoji:"📦", xp:48,
    description:"Aprende vocabulario postal y a usar pronombres de objeto directo (it/them) en inglés.",
    study: {
      vocab: [
        ["the package", "el paquete"],
        ["the letter", "la carta"],
        ["the stamp", "el sello"],
        ["to mail/send", "enviar por correo"],
        ["the mailbox", "el buzón"],
        ["the address", "la dirección"],
      ],
      grammar: [
        ["Pronombres de objeto directo (it/them)", "“It” sustituye a un sustantivo singular ya mencionado; “them” sustituye a un sustantivo plural. Se colocan después del verbo, nunca antes como en español.", "The package? I received it this morning. / The letters? I sent them yesterday."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el sello” en inglés?",["el buzón", "the stamp", "la carta", "la dirección"],1,"“Sello” es “stamp” en inglés."],
      ["mcq","¿Cómo se dice “el buzón” en inglés?",["el sello", "the mailbox", "enviar por correo", "el buzón"],1,"“Buzón” es “mailbox” en inglés."],
      ["fill","Completa: “The package? I received ___ this morning.”",["it", "him", "her", "them"],0,"“The package” es singular, por eso se sustituye con “it”."],
      ["translate","Traduce: “¿Las cartas? Las envié ayer.”",["The letters? I sent it yesterday.", "The letter? I sent them yesterday.", "The letters? I sent them yesterday.", "The letters? I sent they yesterday."],2,"“Las cartas” es plural, por eso se sustituye con “them”, colocado después del verbo."],
      ["arrange","Ordena: [need / I / address / your]",["address your need I", "I need your address", "need address I your", "your need I address"],1,"Sujeto + verbo + objeto posesivo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, la última vez que enviaste una carta o un paquete, usando “it” y “them”.",[],["I sent it", "I received them", "package"]],
    ]
  },
  {
    id:"b1_movies_theater", level:"B1", title:"Ir al cine y al teatro", emoji:"🎬", xp:62,
    description:"Aprende vocabulario de cine y teatro y a construir oraciones temporales con “when”, “while” y “before”.",
    study: {
      vocab: [
        ["the ticket", "la entrada/el boleto"],
        ["the premiere", "el estreno"],
        ["the cast", "el reparto/elenco"],
        ["special effects", "los efectos especiales"],
        ["the seat", "la butaca"],
        ["the intermission", "el intermedio"],
      ],
      grammar: [
        ["Oraciones temporales con “when”, “while” y “before”", "“When” y “while” + presente simple describen acciones habituales o simultáneas; “before” introduce una acción posterior a la principal, siempre con presente simple para el futuro cercano.", "I buy the tickets when I arrive at the theater. / We talk while we wait for the premiere. / We arrive before the movie starts."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el estreno” en inglés?",["la entrada/el boleto", "el intermedio", "el estreno", "the premiere"],3,"“Estreno” es “premiere” en inglés."],
      ["mcq","¿Cómo se dice “el reparto/elenco” en inglés?",["la entrada/el boleto", "los efectos especiales", "the cast", "el intermedio"],2,"“Reparto/elenco” es “cast” en inglés."],
      ["fill","Completa: “We arrive before the movie ___.”",["will start", "starts", "started", "start"],1,"Con “before” se usa presente simple aunque se refiera al futuro cercano: “before the movie starts”."],
      ["translate","Traduce: “Hablamos mientras esperamos el estreno.”",["We talk while we wait for the premiere.", "We talk when we wait for the premiere.", "We talked while we wait for the premiere.", "We talk while we wait for the intermission."],0,"“Mientras” + presente simple describe acciones simultáneas: “while we wait”."],
      ["arrange","Ordena: [often / go / we / to the movies]",["we often go to the movies", "movies we the to often go", "go often movies the to we", "movies to go the we often"],0,"Sujeto + adverbio + verbo + preposición + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre tu última visita al cine o al teatro, usando al menos dos oraciones temporales con “when”, “while” o “before”.",[],["when", "while", "before"]],
    ]
  },
  {
    id:"b2_social_activism_protests", level:"B2", title:"El activismo social y las protestas", emoji:"✊", xp:84,
    description:"Habla de activismo social usando estructuras con “demand/ask that” + subjuntivo en inglés.",
    study: {
      vocab: [
        ["a protest", "una manifestación/protesta"],
        ["to demand change", "exigir un cambio"],
        ["to sign a petition", "firmar una petición"],
        ["to raise awareness about something", "concienciar sobre algo"],
        ["a collective/organization", "un colectivo/organización"],
        ["to mobilize people", "movilizar a la gente"],
      ],
      grammar: [
        ["“Demand/ask that” + subjuntivo en inglés", "Después de verbos como “demand” o “ask” + “that”, el inglés formal usa el subjuntivo: la forma base del verbo, sin “-s” ni conjugación, incluso en tercera persona singular.", "The protesters demand that the government act. / The collective asks that the petition be signed."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “concienciar sobre algo” en inglés?",["to raise awareness about something", "una manifestación/protesta", "concienciar sobre algo", "movilizar a la gente"],0,"“Concienciar sobre algo” es “to raise awareness about something” en inglés."],
      ["mcq","¿Cómo se dice “movilizar a la gente” en inglés?",["exigir un cambio", "to mobilize people", "un colectivo/organización", "concienciar sobre algo"],1,"“Movilizar a la gente” es “to mobilize people” en inglés."],
      ["fill","Completa: “The protesters demand that the government ___.”",["act", "acted", "will act", "acts"],0,"El subjuntivo inglés usa la forma base del verbo, sin “-s”: “demand that the government act”."],
      ["translate","Traduce: “El colectivo pide que la gente firme la petición.”",["The collective asks that people sign the protest.", "The collective demands that people sign the petition.", "The collective asks that people signs the petition.", "The collective asks that people sign the petition."],3,"El subjuntivo inglés “that people sign” usa la forma base, sin “-s”."],
      ["arrange","Ordena: [petition / I'm / sign / going to / the]",["I'm going to sign the petition", "petition sign to the going I'm", "petition sign to going the I'm", "I'm petition going sign to the"],0,"Sujeto + “going to” + infinitivo + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre una causa social que te importe, usando al menos dos estructuras con “demand/ask that” + subjuntivo.",[],["I demand that", "I ask that", "protest"]],
    ]
  },
  {
    id:"c1_aging_population_pensions", level:"C1", title:"El envejecimiento poblacional y las pensiones", emoji:"👴", xp:92,
    description:"Analiza el envejecimiento poblacional usando oraciones consecutivas con “so...that” y “such...that” en inglés.",
    study: {
      vocab: [
        ["population aging", "el envejecimiento poblacional"],
        ["the pension system", "el sistema de pensiones"],
        ["the birth rate", "la tasa de natalidad"],
        ["life expectancy", "la esperanza de vida"],
        ["to sustain the pension system", "sostener el sistema de pensiones"],
        ["the generational gap", "la brecha generacional"],
      ],
      grammar: [
        ["Oraciones consecutivas: “so...that” y “such...that”", "“So + adjetivo + that” enfatiza el grado de una cualidad y su consecuencia; “such + sustantivo + that” hace lo mismo pero con un sustantivo.", "The population is aging so fast that the pension system is at risk. / It's such a drop in births that young workers are lacking."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la tasa de natalidad” en inglés?",["el sistema de pensiones", "la tasa de natalidad", "the birth rate", "el envejecimiento poblacional"],2,"“Tasa de natalidad” es “birth rate” en inglés."],
      ["mcq","¿Cómo se dice “sostener el sistema de pensiones” en inglés?",["la esperanza de vida", "la brecha generacional", "to sustain the pension system", "la tasa de natalidad"],2,"“Sostener el sistema de pensiones” es “to sustain the pension system” en inglés."],
      ["fill","Completa: “The population is aging so fast ___ the pension system is at risk.”",["for", "as", "that", "so"],2,"“So + adjetivo + that” introduce la consecuencia: “so fast that... is at risk”."],
      ["translate","Traduce con oración consecutiva: “La natalidad ha bajado de tal manera que faltan trabajadores jóvenes.”",["It's such a drop in life expectancy that young workers are lacking.", "It's so a drop in births that young workers are lacking.", "It's such a drop in births that young workers are increasing.", "It's such a drop in births that young workers are lacking."],3,"“Such + sustantivo + that” introduce la consecuencia con un sustantivo: “such a drop... that”."],
      ["arrange","Ordena: [worries / the pension / system / many / people]",["many system people worries pension the", "the pension system worries many people", "many pension system the worries people", "pension many the system worries people"],1,"Sujeto + verbo + complemento."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre el envejecimiento poblacional en tu país, usando al menos una oración con “so...that” y una con “such...that”.",[],["so...that", "such...that", "aging population"]],
    ]
  },
  {
    id:"c2_rhetoric_of_silence", level:"C2", title:"La retórica del silencio y lo no dicho", emoji:"🤐", xp:100,
    description:"Analiza la retórica del silencio y practica la elipsis con fines retóricos en inglés.",
    study: {
      vocab: [
        ["eloquent silence", "el silencio elocuente"],
        ["to deliberately omit something", "omitir deliberadamente algo"],
        ["the unsaid", "lo no dicho"],
        ["a discursive gap", "un vacío discursivo"],
        ["to leave something hanging", "dejar algo en suspenso"],
        ["rhetorical ellipsis", "la elipsis retórica"],
      ],
      grammar: [
        ["La elipsis con fines retóricos en inglés", "La elipsis omite un elemento que se sobreentiende por el contexto, generando énfasis o dejando una idea deliberadamente incompleta — un recurso poderoso en el discurso político y literario en inglés.", "Some stay silent out of fear; others, out of complicity. (se omite “stay silent”) / He promised reforms... and silence. (se omite el verbo esperado)"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un vacío discursivo” en inglés?",["lo no dicho", "un vacío discursivo", "a discursive gap", "omitir deliberadamente algo"],2,"“Un vacío discursivo” es “a discursive gap” en inglés."],
      ["mcq","¿Cómo se dice “dejar algo en suspenso” en inglés?",["dejar algo en suspenso", "to leave something hanging", "un vacío discursivo", "omitir deliberadamente algo"],1,"“Dejar algo en suspenso” es “to leave something hanging” en inglés."],
      ["fill","Completa: “Some stay silent out of fear; others, out of ___.”",["complicity", "is complicity", "that complicity", "stay silent complicity"],0,"La elipsis omite el verbo repetido “stay silent”, dejando solo el complemento: “others, out of complicity”."],
      ["translate","Traduce con elipsis retórica: “Prometió reformas... y silencio.”",["He promised reforms... and was silence.", "He promised reforms... and noise.", "He promised reforms... and a silence.", "He promised reforms... and silence."],3,"La elipsis retórica omite el verbo esperado tras los puntos suspensivos, dejando solo “and silence”."],
      ["arrange","Ordena: [says / silence / sometimes / more / than / words]",["words more sometimes silence says than", "sometimes words silence than says more", "silence sometimes says more than words", "words more says sometimes than silence"],2,"Sujeto + adverbio + verbo + comparativo + complemento."],
      ["writing","Escribe en inglés, en 55-75 palabras, analizando un ejemplo (real o inventado) de silencio retórico en un discurso, usando al menos una elipsis deliberada.",[],["the unsaid", "eloquent silence", "omit"]],
    ]
  },
  {
    id:"a1_time_parts_of_day", level:"A1", title:"La hora y las partes del día", emoji:"🕐", xp:38,
    description:"Aprende a decir la hora y las partes del día en inglés con “o'clock” y preposiciones de tiempo.",
    study: {
      vocab: [
        ["the morning", "la mañana"],
        ["the afternoon", "la tarde"],
        ["the night", "la noche"],
        ["noon", "el mediodía"],
        ["midnight", "la medianoche"],
        ["o'clock/sharp", "en punto"],
      ],
      grammar: [
        ["“What time is it?” + preposiciones de tiempo", "Para preguntar la hora se usa “What time is it?”; para responder, “it's + hora” + “o'clock” si es en punto, con “in the morning/afternoon/at night” para especificar el momento.", "It's three o'clock in the afternoon. / It's one o'clock sharp in the morning."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la medianoche” en inglés?",["midnight", "o'clock/sharp", "noon", "the night"],0,"“Medianoche” es “midnight” en inglés."],
      ["mcq","¿Cómo se dice “en punto” en inglés?",["o'clock/sharp", "midnight", "the night", "noon"],0,"“En punto” es “o'clock” o “sharp” en inglés."],
      ["fill","Completa: “It's three ___ in the afternoon.”",["o'clock", "hour", "hours", "clock"],0,"“O'clock” se usa después del número para indicar la hora exacta: “three o'clock”."],
      ["translate","Traduce: “Es la una de la mañana.”",["It's two o'clock in the morning.", "It's one o'clock at night.", "It's one o'clock in the morning.", "It's one o'clock in the afternoon."],2,"“De la mañana” se traduce con “in the morning”, no “at night”."],
      ["arrange","Ordena: [it's / afternoon / four / the / in / o'clock]",["four the in it's o'clock afternoon", "it's afternoon o'clock in the four", "o'clock four afternoon the in it's", "it's four o'clock in the afternoon"],3,"Sujeto + verbo + número + “o'clock” + preposición + parte del día."],
      ["writing","Describe en inglés, en 20-30 palabras, tu rutina diaria mencionando horas específicas, usando “it's” y “o'clock”.",[],["it's", "o'clock", "in the morning"]],
    ]
  },
  {
    id:"a2_bank_open_account", level:"A2", title:"En el banco: abrir una cuenta", emoji:"🏦", xp:48,
    description:"Aprende vocabulario bancario básico y a usar “can” para posibilidad y permiso.",
    study: {
      vocab: [
        ["the bank account", "la cuenta bancaria"],
        ["the ATM", "el cajero automático"],
        ["to withdraw money", "retirar dinero"],
        ["to deposit money", "depositar dinero"],
        ["the debit card", "la tarjeta de débito"],
        ["the balance", "el saldo"],
      ],
      grammar: [
        ["“Can” + infinitivo para posibilidad y permiso", "“Can” + infinitivo sin “to” expresa capacidad, posibilidad o permiso, según el contexto.", "Can I open an account here? / You can withdraw money at any ATM."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “retirar dinero” en inglés?",["la tarjeta de débito", "retirar dinero", "to withdraw money", "el cajero automático"],2,"“Retirar dinero” es “to withdraw money” en inglés."],
      ["mcq","¿Cómo se dice “el saldo” en inglés?",["depositar dinero", "the balance", "el saldo", "la cuenta bancaria"],1,"“Saldo” es “balance” en inglés."],
      ["fill","Completa: “___ I open an account here, please?”",["Can", "Am", "Will", "Do"],0,"Se usa “can” para pedir permiso: “can I open”."],
      ["translate","Traduce: “Puedes retirar dinero en cualquier cajero automático.”",["You can deposit money at any ATM.", "You can withdraw money at any ATM.", "You can withdraw money at any bank.", "You must withdraw money at any ATM."],1,"“Puedes retirar” = “you can withdraw”, con “can” + infinitivo."],
      ["arrange","Ordena: [check / balance / want / my / to / I]",["I to my balance check want", "want to check balance I my", "I want to check my balance", "want my I check balance to"],2,"Sujeto + verbo + infinitivo + objeto posesivo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, cómo abrirías una cuenta bancaria, usando “can” para pedir permiso o expresar posibilidad.",[],["I can", "you can", "account"]],
    ]
  },
  {
    id:"b1_train_plane_travel", level:"B1", title:"Viajar en tren y avión: retrasos y cambios", emoji:"🚄", xp:62,
    description:"Aprende vocabulario de viajes largos y a usar “although” y “even if” en inglés.",
    study: {
      vocab: [
        ["the delay", "el retraso"],
        ["to miss the flight/train", "perder el vuelo/tren"],
        ["to make a layover/stopover", "hacer escala"],
        ["the platform", "el andén"],
        ["to cancel a flight", "cancelar un vuelo"],
        ["the window/aisle seat", "el asiento de ventanilla/pasillo"],
      ],
      grammar: [
        ["“Although” y “even if” en inglés", "“Although” introduce un hecho real y conocido; “even if” expresa una concesión hipotética o incierta. Ambas van seguidas de presente simple en inglés, sin subjuntivo.", "Although the train arrived late, I made the flight. / Even if the flight is cancelled, we have another option."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “hacer escala” en inglés?",["to make a layover/stopover", "el retraso", "hacer escala", "el andén"],0,"“Hacer escala” es “to make a layover” o “stopover” en inglés."],
      ["mcq","¿Cómo se dice “el andén” en inglés?",["the platform", "hacer escala", "perder el vuelo/tren", "el retraso"],0,"“Andén” es “platform” en inglés."],
      ["fill","Completa: “Even if the flight ___ cancelled, we have another option.”",["will be", "would be", "is", "was"],2,"“Even if” va seguido de presente simple en inglés, incluso para una posibilidad futura: “even if it is cancelled”."],
      ["translate","Traduce: “Aunque el tren llegó tarde, alcancé el vuelo.”",["Although the train arrived late, I made the flight.", "Although the train arrived late, I missed the flight.", "Although the plane arrived late, I made the flight.", "Although the train arrives late, I made the flight."],0,"“Aunque llegó” describe un hecho real ya sucedido, con pasado simple: “although it arrived”."],
      ["arrange","Ordena: [prefer / seat / window / the / I]",["the I seat window prefer", "I prefer the window seat", "seat the prefer window I", "I seat prefer the window"],1,"Sujeto + verbo + artículo + sustantivo compuesto."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre un viaje en tren o avión con contratiempos, usando “although” y “even if” al menos una vez cada uno.",[],["although", "even if", "delay"]],
    ]
  },
  {
    id:"b2_sharing_economy_conscious_consumption", level:"B2", title:"La economía colaborativa y el consumo consciente", emoji:"♻️", xp:84,
    description:"Habla de economía colaborativa usando “will” y “would” de probabilidad en inglés.",
    study: {
      vocab: [
        ["the sharing economy", "la economía colaborativa"],
        ["to rent instead of buying", "alquilar en lugar de comprar"],
        ["conscious consumption", "el consumo consciente"],
        ["to share resources", "compartir recursos"],
        ["planned obsolescence", "la obsolescencia programada"],
        ["to reduce waste", "reducir el desperdicio"],
      ],
      grammar: [
        ["“Will” y “would” de probabilidad", "“Will” puede expresar una conjetura sobre el presente (“that will be about five years old”); “would” expresa una conjetura sobre una situación hipotética o pasada.", "That model will have about five years of planned obsolescence. / With that consumption, they would use fewer resources than expected."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “alquilar en lugar de comprar” en inglés?",["compartir recursos", "la obsolescencia programada", "to rent instead of buying", "el consumo consciente"],2,"“Alquilar en lugar de comprar” es “to rent instead of buying” en inglés."],
      ["mcq","¿Cómo se dice “la obsolescencia programada” en inglés?",["compartir recursos", "reducir el desperdicio", "el consumo consciente", "planned obsolescence"],3,"“Obsolescencia programada” es “planned obsolescence” en inglés."],
      ["fill","Completa: “That model ___ have about five years of planned obsolescence.”",["will", "is", "would", "has"],0,"“Will” de probabilidad expresa una conjetura sobre el presente: “will have about five years”."],
      ["translate","Traduce con “would” de probabilidad: “Con ese consumo, gastarían menos recursos de los que pensaban.”",["With that consumption, they would use more resources than expected.", "With that consumption, they will use fewer resources than expected.", "With that consumption, they would spend less money than expected.", "With that consumption, they would use fewer resources than expected."],3,"El “would” de probabilidad expresa una conjetura sobre una situación hipotética: “they would use”."],
      ["arrange","Ordena: [reduce / must / waste / we]",["must reduce we waste", "we must reduce waste", "reduce must waste we", "we waste must reduce"],1,"Sujeto + verbo modal + infinitivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre la economía colaborativa y el consumo consciente, usando al menos un “will” y un “would” de probabilidad.",[],["will have", "would", "conscious consumption"]],
    ]
  },
  {
    id:"c1_nonverbal_intercultural_communication", level:"C1", title:"El lenguaje no verbal y la comunicación intercultural", emoji:"🤝", xp:92,
    description:"Analiza la comunicación no verbal usando “as if” + pasado/pasado perfecto en inglés.",
    study: {
      vocab: [
        ["body language", "el lenguaje corporal"],
        ["eye contact", "el contacto visual"],
        ["a misinterpreted gesture", "un gesto malinterpretado"],
        ["proxemics (personal space)", "la proxémica (distancia personal)"],
        ["a cultural cue", "una señal cultural"],
        ["awkward silence", "el silencio incómodo"],
      ],
      grammar: [
        ["“As if” + pasado/pasado perfecto", "“As if” se usa con pasado simple para comparaciones sobre el presente, y con pasado perfecto para comparaciones sobre algo anterior, siempre describiendo algo hipotético.", "He acted as if he understood the gesture, although he didn't. / She reacted as if she had been offended."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un gesto malinterpretado” en inglés?",["a misinterpreted gesture", "el contacto visual", "el silencio incómodo", "la proxémica (distancia personal)"],0,"“Un gesto malinterpretado” es “a misinterpreted gesture” en inglés."],
      ["mcq","¿Cómo se dice “la proxémica (distancia personal)” en inglés?",["el lenguaje corporal", "la proxémica (distancia personal)", "una señal cultural", "proxemics (personal space)"],3,"“Proxémica” es “proxemics” en inglés."],
      ["fill","Completa: “He acted as if he ___ the gesture, although he didn't.”",["has understood", "understood", "understands", "will understand"],1,"“As if” con pasado simple compara con el presente: “as if he understood”."],
      ["translate","Traduce: “Reaccionó como si hubiera sido ofendido.”",["She reacted as if she had been invited.", "She reacted as if she has been offended.", "She reacted as if she was offended.", "She reacted as if she had been offended."],3,"“Como si hubiera sido ofendido” se traduce con pasado perfecto: “as if she had been offended”."],
      ["arrange","Ordena: [varies / eye contact / across / cultures]",["contact cultures across eye varies", "eye contact varies across cultures", "cultures across eye contact varies", "cultures across contact eye varies"],1,"Sujeto + verbo + preposición + complemento."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un malentendido intercultural relacionado con el lenguaje no verbal, usando al menos dos estructuras con “as if”.",[],["as if", "body language", "gesture"]],
    ]
  },
  {
    id:"c2_scientific_hedging_uncertainty", level:"C2", title:"La incertidumbre y el lenguaje científico", emoji:"🔬", xp:100,
    description:"Analiza el lenguaje científico usando expresiones de matización epistémica (hedging) en inglés.",
    study: {
      vocab: [
        ["statistical uncertainty", "la incertidumbre estadística"],
        ["a margin of error", "un margen de error"],
        ["correlation does not imply causation", "una correlación no implica causalidad"],
        ["preliminary results", "los resultados preliminares"],
        ["an unconfirmed hypothesis", "una hipótesis no confirmada"],
        ["to hedge/qualify a claim", "matizar una afirmación"],
      ],
      grammar: [
        ["Expresiones de matización epistémica (hedging) en inglés", "Frases como “it could be argued that”, “it wouldn't be unreasonable to think that” o “the data suggest, but do not confirm, that” matizan el grado de certeza de una afirmación científica en inglés académico.", "It could be argued that a trend exists, although the data are preliminary. / The results suggest, but do not confirm, a causal relationship."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “un margen de error” en inglés?",["una hipótesis no confirmada", "a margin of error", "matizar una afirmación", "los resultados preliminares"],1,"“Un margen de error” es “a margin of error” en inglés."],
      ["mcq","¿Cómo se dice “una hipótesis no confirmada” en inglés?",["la incertidumbre estadística", "un margen de error", "an unconfirmed hypothesis", "una hipótesis no confirmada"],2,"“Una hipótesis no confirmada” es “an unconfirmed hypothesis” en inglés."],
      ["fill","Completa: “It could be ___ that a trend exists, although the data are preliminary.”",["argued", "argues", "argue", "arguing"],0,"“It could be argued that” es una expresión fija de matización epistémica con participio pasado."],
      ["translate","Traduce con precisión: “Los resultados sugieren, aunque no confirman, una relación causal.”",["The results suggest, but do not confirm, a causal relationship.", "The results suggest, and confirm, a causal relationship.", "The results suggest, but do not confirm, a statistical correlation.", "The results confirm, but do not suggest, a causal relationship."],0,"“Sugieren, aunque no confirman” se traduce con “suggest, but do not confirm”, matizando la certeza."],
      ["arrange","Ordena: [imply / correlation / causation / doesn't]",["doesn't imply correlation causation", "causation doesn't correlation imply", "correlation doesn't imply causation", "causation correlation doesn't imply"],2,"Sujeto + verbo negativo + objeto."],
      ["writing","Escribe en inglés, en 55-75 palabras, analizando un estudio científico (real o inventado) con resultados preliminares, usando al menos dos expresiones de matización epistémica.",[],["it could be argued that", "the data suggest", "uncertainty"]],
    ]
  },
  {
    id:"a1_weather_seasons", level:"A1", title:"El clima y las estaciones", emoji:"☀️", xp:38,
    description:"Aprende a describir el clima y las estaciones del año en inglés con “it's”.",
    study: {
      vocab: [
        ["sunny", "soleado"],
        ["rainy", "lluvioso"],
        ["cold", "frío"],
        ["hot", "caluroso"],
        ["spring", "primavera"],
        ["winter", "invierno"],
      ],
      grammar: [
        ["“It's” + adjetivo para el clima", "Para describir el clima se usa el pronombre impersonal “it” + “is”: “it's sunny”, “it's cold”. Con lluvia se usa el gerundio: “it's raining”.", "It's sunny today. / It's raining in spring."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “frío” en inglés?",["rainy", "spring", "cold", "hot"],2,"“Frío” es “cold” en inglés."],
      ["mcq","¿Cómo se dice “lluvioso” en inglés?",["winter", "hot", "sunny", "rainy"],3,"“Lluvioso” es “rainy” en inglés."],
      ["fill","Completa: “It's very ___ today, take an umbrella.”",["rainy", "spring", "cold", "hot"],0,"“Rainy” describe un clima con lluvia: “it's rainy”."],
      ["translate","Traduce: “Hace mucho frío en invierno.”",["It's very hot in winter.", "It's very cold in summer.", "It's very sunny in winter.", "It's very cold in winter."],3,"“Hace frío” se traduce con “it's cold”, usando el pronombre impersonal “it”."],
      ["arrange","Ordena: [today / sunny / it's]",["today it's sunny", "it's today sunny", "today sunny it's", "it's sunny today"],3,"Pronombre impersonal + verbo + adjetivo + adverbio de tiempo."],
      ["writing","Describe en inglés, en 20-30 palabras, el clima de tu ciudad en las cuatro estaciones, usando “it's” + adjetivo.",[],["it's", "sunny", "cold"]],
    ]
  },
  {
    id:"a2_pet_care", level:"A2", title:"El cuidado de mascotas", emoji:"🐾", xp:48,
    description:"Aprende vocabulario sobre mascotas y a usar “have to/has to” para obligaciones en inglés.",
    study: {
      vocab: [
        ["to feed the pet", "alimentar a la mascota"],
        ["to walk the dog", "pasear al perro"],
        ["the veterinarian", "el veterinario"],
        ["to vaccinate", "vacunar"],
        ["the litter box", "la caja de arena"],
        ["to adopt a pet", "adoptar una mascota"],
      ],
      grammar: [
        ["“Have to/has to” para obligaciones", "“Have to” (o “has to” con él/ella) + infinitivo expresa una obligación o necesidad cotidiana.", "I have to walk the dog every morning. / She has to feed the cat twice a day."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “veterinario” en inglés?",["to vaccinate", "to walk the dog", "the veterinarian", "the litter box"],2,"“Veterinario” es “the veterinarian” en inglés."],
      ["mcq","¿Cómo se dice “vacunar” en inglés?",["the veterinarian", "to walk the dog", "to vaccinate", "to adopt a pet"],2,"“Vacunar” es “to vaccinate” en inglés."],
      ["fill","Completa: “I ___ to walk the dog every morning.”",["having", "had", "has", "have"],3,"“Have to” se usa con “I”: “I have to walk”."],
      ["translate","Traduce: “Tengo que alimentar a la mascota dos veces al día.”",["I have to feed the pet once a day.", "I have to walk the pet twice a day.", "I had to feed the pet twice a day.", "I have to feed the pet twice a day."],3,"“Tengo que alimentar” se traduce con “I have to feed”, obligación en presente."],
      ["arrange","Ordena: [has / dog / she / walk / to / the]",["walk she the has to dog", "she has to walk the dog", "to the she walk dog has", "she has to walk dog the"],1,"Sujeto + “has to” + verbo + artículo + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, tu rutina de cuidado de una mascota usando “have to/has to”.",[],["have to", "has to", "pet"]],
    ]
  },
  {
    id:"b1_startups_entrepreneurship", level:"B1", title:"El emprendimiento y las startups", emoji:"🚀", xp:62,
    description:"Aprende vocabulario de emprendimiento y a usar “going to” para planes en inglés.",
    study: {
      vocab: [
        ["startup", "startup/empresa emergente"],
        ["to launch a product", "lanzar un producto"],
        ["investor", "inversionista"],
        ["business plan", "plan de negocios"],
        ["to take a risk", "asumir un riesgo"],
        ["to scale a business", "escalar un negocio"],
      ],
      grammar: [
        ["“Going to” para planes e intenciones", "“Be going to” + infinitivo expresa un plan o intención ya decidida.", "We are going to launch the product next month. / She is going to look for investors."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “inversionista” en inglés?",["investor", "to launch a product", "to scale a business", "startup"],0,"“Inversionista” es “investor” en inglés."],
      ["mcq","¿Cómo se dice “asumir un riesgo” en inglés?",["to scale a business", "startup", "investor", "to take a risk"],3,"“Asumir un riesgo” es “to take a risk” en inglés."],
      ["fill","Completa: “We ___ going to launch the product next month.”",["is", "were", "was", "are"],3,"“Going to” con “we” usa “are”: “we are going to”."],
      ["translate","Traduce: “Vamos a lanzar el producto el próximo mes.”",["We are going to launch the business next month.", "We are going to launch the product next month.", "We are launching the product next month.", "We are going to launch the product this month."],1,"“Vamos a lanzar” se traduce con “we are going to launch”, plan futuro decidido."],
      ["arrange","Ordena: [going / investors / she / for / to / is / look]",["she going for investors is look to", "look for she investors is going to", "she is going to look for investors", "for is investors she to going look"],2,"Sujeto + “is going to” + verbo + preposición + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre una idea de startup que te gustaría lanzar, usando “going to” para tus planes.",[],["going to", "startup", "investors"]],
    ]
  },
  {
    id:"b2_space_exploration", level:"B2", title:"La exploración espacial", emoji:"🚀", xp:84,
    description:"Habla de la exploración espacial usando el futuro perfecto en inglés.",
    study: {
      vocab: [
        ["space mission", "misión espacial"],
        ["astronaut", "astronauta"],
        ["to orbit", "orbitar"],
        ["rocket launch", "lanzamiento de cohete"],
        ["outer space", "el espacio exterior"],
        ["space station", "estación espacial"],
      ],
      grammar: [
        ["Futuro perfecto para logros futuros", "El futuro perfecto (“will have” + participio) describe una acción que se habrá completado antes de un momento futuro determinado.", "By 2030, astronauts will have landed on Mars. / The rocket will have reached orbit by then."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “estación espacial” en inglés?",["space station", "rocket launch", "to orbit", "astronaut"],0,"“Estación espacial” es “space station” en inglés."],
      ["mcq","¿Cómo se dice “orbitar” en inglés?",["to orbit", "rocket launch", "astronaut", "space mission"],0,"“Orbitar” es “to orbit” en inglés."],
      ["fill","Completa: “By 2030, astronauts ___ have landed on Mars.”",["had", "will", "would", "have"],1,"El futuro perfecto usa “will have” + participio: “will have landed”."],
      ["translate","Traduce: “Para 2030, los astronautas habrán aterrizado en Marte.”",["By 2030, astronauts have landed on Mars.", "By 2030, astronauts would have landed on Mars.", "By 2030, astronauts will have landed on Mars.", "By 2030, astronauts will land on Mars."],2,"“Habrán aterrizado” se traduce con futuro perfecto: “will have landed”."],
      ["arrange","Ordena: [soon / rocket / will / orbit / the / reach]",["orbit reach soon will the rocket", "orbit the soon will reach rocket", "the rocket will reach orbit soon", "the will rocket reach soon orbit"],2,"Sujeto + “will” + verbo + sustantivo + adverbio."],
      ["writing","Escribe en inglés, en 55-75 palabras, una predicción sobre el futuro de la exploración espacial usando el futuro perfecto (“will have...”) al menos dos veces.",[],["will have", "space mission", "astronaut"]],
    ]
  },
  {
    id:"c1_ai_ethics", level:"C1", title:"La ética y la regulación de la inteligencia artificial", emoji:"🤖", xp:92,
    description:"Analiza la ética de la IA usando la voz pasiva en registro formal en inglés.",
    study: {
      vocab: [
        ["artificial intelligence", "inteligencia artificial"],
        ["algorithmic bias", "sesgo algorítmico"],
        ["accountability", "rendición de cuentas"],
        ["data privacy", "privacidad de datos"],
        ["to regulate", "regular"],
        ["unintended consequences", "consecuencias no deseadas"],
      ],
      grammar: [
        ["Voz pasiva en registro formal/académico", "La voz pasiva (“to be” + participio) se usa en inglés formal para enfatizar la acción o el objeto en lugar de quién la realiza, común en discurso académico y ético.", "These systems should be regulated to prevent bias. / Algorithmic bias has been documented in several studies."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sesgo algorítmico” en inglés?",["accountability", "artificial intelligence", "to regulate", "algorithmic bias"],3,"“Sesgo algorítmico” es “algorithmic bias” en inglés."],
      ["mcq","¿Cómo se dice “rendición de cuentas” en inglés?",["artificial intelligence", "accountability", "to regulate", "algorithmic bias"],1,"“Rendición de cuentas” es “accountability” en inglés."],
      ["fill","Completa: “These systems should ___ regulated to prevent bias.”",["are", "be", "being", "been"],1,"La voz pasiva con modal usa “should be” + participio: “should be regulated”."],
      ["translate","Traduce con voz pasiva: “Estos sistemas deberían regularse para evitar sesgos.”",["These systems should be regulated to prevent biases only.", "These systems should regulate to prevent bias.", "These systems should be regulated to prevent bias.", "These systems must be regulated to prevent bias."],2,"“Deberían regularse” se traduce con voz pasiva: “should be regulated”, no con “must” ni voz activa."],
      ["arrange","Ordena: [regulated / algorithms / be / should]",["regulated algorithms be should", "algorithms be should regulated", "be regulated algorithms should", "algorithms should be regulated"],3,"Sujeto + modal + “be” + participio."],
      ["writing","Escribe en inglés, en 55-75 palabras, un argumento ético sobre la inteligencia artificial usando al menos una construcción en voz pasiva.",[],["should be regulated", "algorithmic bias", "accountability"]],
    ]
  },
  {
    id:"c2_philosophy_of_mind", level:"C2", title:"La filosofía de la mente y la conciencia", emoji:"🧠", xp:100,
    description:"Reflexiona sobre la conciencia usando oraciones hendidas (cleft sentences) en inglés.",
    study: {
      vocab: [
        ["consciousness", "la conciencia"],
        ["subjective experience", "la experiencia subjetiva"],
        ["thought experiment", "el experimento mental"],
        ["free will", "el libre albedrío"],
        ["self-awareness", "la autoconciencia"],
        ["the mind-body problem", "el problema mente-cuerpo"],
      ],
      grammar: [
        ["Oraciones hendidas (cleft sentences) para énfasis", "Las cleft sentences (“What... is...”, “It is... that...”) reorganizan la oración para poner énfasis en un elemento concreto, muy usadas en discurso filosófico y académico.", "What truly defines consciousness is not behavior alone, but subjective experience. / It is subjective experience, not behavior alone, that truly defines consciousness."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “experimento mental” en inglés?",["consciousness", "free will", "the mind-body problem", "thought experiment"],3,"“Experimento mental” es “thought experiment” en inglés."],
      ["mcq","¿Cómo se dice “libre albedrío” en inglés?",["subjective experience", "free will", "the mind-body problem", "consciousness"],1,"“Libre albedrío” es “free will” en inglés."],
      ["fill","Completa: “What truly defines consciousness ___ not behavior alone, but subjective experience.”",["are", "was", "is", "be"],2,"En cleft sentences con sujeto singular se usa “is”: “what defines... is”."],
      ["translate","Traduce con estructura enfática: “Lo que realmente define la conciencia no es solo el comportamiento, sino la experiencia subjetiva.”",["What truly defines consciousness is behavior alone, not subjective experience.", "What truly defined consciousness is not behavior alone, but subjective experience.", "What truly defines consciousness is not behavior alone, but subjective experience.", "What defines consciousness truly is not behavior alone, but subjective experience."],2,"La cleft sentence mantiene “what + verbo + is + complemento”, con “truly” antes del verbo."],
      ["arrange","Ordena: [debate / free / still / philosophers / will]",["still philosophers will free debate", "will still debate philosophers free", "still philosophers debate free will", "philosophers still debate free will"],3,"Sujeto + adverbio + verbo + sustantivo compuesto."],
      ["writing","Escribe en inglés, en 55-75 palabras, tu propia postura sobre el libre albedrío o la conciencia, usando al menos una oración hendida (“what... is...” o “it is... that...”).",[],["what truly defines", "consciousness", "free will"]],
    ]
  },
  {
    id:"a1_garden_plants", level:"A1", title:"El jardín y las plantas", emoji:"🌱", xp:38,
    description:"Aprende vocabulario de jardinería y a dar instrucciones simples en inglés con el imperativo.",
    study: {
      vocab: [
        ["to water the plants", "regar las plantas"],
        ["the seed", "la semilla"],
        ["to grow", "crecer"],
        ["the flower", "la flor"],
        ["the soil", "la tierra"],
        ["sunlight", "la luz del sol"],
      ],
      grammar: [
        ["El imperativo para instrucciones", "El imperativo usa el verbo sin sujeto para dar órdenes o instrucciones. La forma negativa usa “don't” + verbo.", "Water the plants every day. / Don't forget to close the gate."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la semilla” en inglés?",["to water the plants", "the seed", "the soil", "to grow"],1,"“La semilla” es “the seed” en inglés."],
      ["mcq","¿Cómo se dice “crecer” en inglés?",["the soil", "to water the plants", "to grow", "sunlight"],2,"“Crecer” es “to grow” en inglés."],
      ["fill","Completa: “___ the plants every day, or they will die.”",["Water", "Waters", "To water", "Watering"],0,"El imperativo usa el verbo base sin sujeto: “Water the plants”."],
      ["translate","Traduce: “Riega las plantas todos los días.”",["Water the plants every week.", "You water the plants every day.", "Water the plants every day.", "Watering the plants every day."],2,"El imperativo comienza directamente con el verbo: “Water the plants...”."],
      ["arrange","Ordena: [forget / gate / to / don't / the / close]",["gate don't forget to close the", "don't forget to close the gate", "gate close forget to the don't", "forget to close don't gate the"],1,"“Don't” + verbo + infinitivo + artículo + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, instrucciones para cuidar un jardín usando el imperativo.",[],["water", "don't", "grow"]],
    ]
  },
  {
    id:"a2_library_books", level:"A2", title:"La biblioteca y los libros", emoji:"📚", xp:48,
    description:"Aprende vocabulario de biblioteca y a narrar en pasado simple en inglés.",
    study: {
      vocab: [
        ["to borrow a book", "pedir prestado un libro"],
        ["the library card", "el carné de biblioteca"],
        ["the due date", "la fecha de devolución"],
        ["the bookshelf", "el estante"],
        ["the novel", "la novela"],
        ["to return a book", "devolver un libro"],
      ],
      grammar: [
        ["Pasado simple para narrar", "El pasado simple (verbos regulares + “-ed”, o formas irregulares) describe acciones completas en el pasado.", "I borrowed a novel last week. / She returned the book on time."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “el carné de biblioteca” en inglés?",["to return a book", "the library card", "the novel", "the bookshelf"],1,"“El carné de biblioteca” es “the library card” en inglés."],
      ["mcq","¿Cómo se dice “la fecha de devolución” en inglés?",["to return a book", "the novel", "the bookshelf", "the due date"],3,"“La fecha de devolución” es “the due date” en inglés."],
      ["fill","Completa: “I ___ a novel from the library last week.”",["borrows", "borrow", "borrowed", "borrowing"],2,"El pasado simple de “borrow” es “borrowed” (regular, +ed)."],
      ["translate","Traduce: “Ella devolvió el libro a tiempo.”",["She returns the book on time.", "She returned the book on time.", "She returned the novel on time.", "She returned the book late."],1,"“Devolvió” se traduce con pasado simple: “returned”."],
      ["arrange","Ordena: [shelf / on / the / is / book / the]",["the on shelf is book the", "on shelf book the is the", "the book is on the shelf", "on the shelf book is the"],2,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, la última vez que pediste prestado un libro en la biblioteca, usando el pasado simple.",[],["borrowed", "returned", "library"]],
    ]
  },
  {
    id:"b1_parenting_childcare", level:"B1", title:"La crianza y el cuidado de bebés", emoji:"👶", xp:62,
    description:"Aprende vocabulario de crianza y a usar “used to” para hábitos pasados en inglés.",
    study: {
      vocab: [
        ["to breastfeed", "amamantar"],
        ["the crib", "la cuna"],
        ["to burp the baby", "hacer eructar al bebé"],
        ["bedtime routine", "rutina para dormir"],
        ["to babysit", "cuidar niños"],
        ["the pediatrician", "el pediatra"],
      ],
      grammar: [
        ["“Used to” para hábitos pasados", "“Used to” + infinitivo describe hábitos o estados que ya no son ciertos en el presente.", "The baby used to wake up every two hours. / We used to visit the pediatrician every month."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “la cuna” en inglés?",["to babysit", "to burp the baby", "the crib", "bedtime routine"],2,"“La cuna” es “the crib” en inglés."],
      ["mcq","¿Cómo se dice “el pediatra” en inglés?",["the pediatrician", "to burp the baby", "the crib", "to babysit"],0,"“El pediatra” es “the pediatrician” en inglés."],
      ["fill","Completa: “The baby ___ to wake up every two hours.”",["used", "using", "uses", "use"],0,"“Used to” se forma con “used” + “to” + infinitivo, sin cambiar según el sujeto."],
      ["translate","Traduce: “Solíamos visitar al pediatra cada mes.”",["We used to visit the pediatrician every month.", "We used to visit the pediatrician every week.", "We used to visit the dentist every month.", "We use to visit the pediatrician every month."],0,"“Solíamos visitar” se traduce con “used to visit”, hábito pasado que ya no ocurre."],
      ["arrange","Ordena: [used / crib / sleep / the / to / in / she]",["she used to sleep in the crib", "the sleep used to in crib she", "to used crib the sleep in she", "in crib to sleep the she used"],0,"Sujeto + “used to” + verbo + preposición + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre la rutina de cuidado de un bebé que conoces, usando “used to” para hábitos pasados.",[],["used to", "crib", "pediatrician"]],
    ]
  },
  {
    id:"b2_archaeology_discoveries", level:"B2", title:"La arqueología y los descubrimientos históricos", emoji:"🏺", xp:84,
    description:"Habla de descubrimientos arqueológicos usando modales de deducción en inglés.",
    study: {
      vocab: [
        ["archaeological site", "sitio arqueológico"],
        ["to excavate", "excavar"],
        ["ancient civilization", "civilización antigua"],
        ["artifact", "artefacto"],
        ["to date (a find)", "datar (un hallazgo)"],
        ["ruins", "ruinas"],
      ],
      grammar: [
        ["Modales de deducción sobre el pasado", "“Must have” + participio expresa una deducción fuerte sobre el pasado; “might/could have” expresa una posibilidad menos segura.", "This artifact must have belonged to a king. / The site might have been a temple."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “civilización antigua” en inglés?",["ancient civilization", "ruins", "to date (a find)", "artifact"],0,"“Civilización antigua” es “ancient civilization” en inglés."],
      ["mcq","¿Cómo se dice “excavar” en inglés?",["ruins", "artifact", "to date (a find)", "to excavate"],3,"“Excavar” es “to excavate” en inglés."],
      ["fill","Completa: “This artifact ___ have belonged to a king.”",["must", "will", "can", "should"],0,"“Must have” + participio expresa una deducción fuerte: “must have belonged”."],
      ["translate","Traduce: “El sitio podría haber sido un templo.”",["The site must have been a temple.", "The site might have been a palace.", "The site might have been a temple.", "The site might be a temple."],2,"“Podría haber sido” expresa posibilidad menos segura: “might have been”."],
      ["arrange","Ordena: [have / civilization / this / ancient / built / an]",["civilization ancient an must this built have", "an ancient civilization must have built this", "built civilization have this ancient must an", "built must this civilization an ancient have"],1,"Artículo + adjetivo + sustantivo + modal + participio + pronombre."],
      ["writing","Escribe en inglés, en 55-75 palabras, una hipótesis sobre un descubrimiento arqueológico imaginario, usando modales de deducción (“must have...”, “might have...”) al menos dos veces.",[],["must have", "might have", "artifact"]],
    ]
  },
  {
    id:"c1_neuroscience_brain", level:"C1", title:"Las neurociencias y el cerebro", emoji:"🧬", xp:92,
    description:"Analiza la neurociencia usando inversión para énfasis en registro académico en inglés.",
    study: {
      vocab: [
        ["neural pathway", "vía neuronal"],
        ["synapse", "sinapsis"],
        ["neuroplasticity", "neuroplasticidad"],
        ["cognitive function", "función cognitiva"],
        ["neurotransmitter", "neurotransmisor"],
        ["brain scan", "escáner cerebral"],
      ],
      grammar: [
        ["Inversión para énfasis en registro académico", "En inglés formal/académico, ciertos adverbios negativos o restrictivos al inicio de la oración (“Rarely”, “Not only”) invierten el orden sujeto-verbo para dar énfasis.", "Rarely have researchers found such clear evidence of neuroplasticity. / Not only does the brain adapt, but it also repairs itself."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “neuroplasticidad” en inglés?",["cognitive function", "neuroplasticity", "neural pathway", "synapse"],1,"“Neuroplasticidad” es “neuroplasticity” en inglés."],
      ["mcq","¿Cómo se dice “sinapsis” en inglés?",["neuroplasticity", "neurotransmitter", "synapse", "neural pathway"],2,"“Sinapsis” es “synapse” en inglés."],
      ["fill","Completa: “Rarely ___ researchers found such clear evidence of neuroplasticity.”",["have", "had", "having", "has"],0,"Tras “Rarely” al inicio, se invierte el orden: “rarely have researchers found”."],
      ["translate","Traduce con inversión: “Raramente los investigadores han encontrado evidencia tan clara.”",["Rarely have researchers found such clear evidence.", "Researchers have rarely found such clear evidence.", "Rarely have researchers find such clear evidence.", "Rarely researchers have found such clear evidence."],0,"La inversión coloca el auxiliar “have” antes del sujeto: “rarely have researchers found”."],
      ["arrange","Ordena: [adapt / brain / does / only / not / the]",["not only does the brain adapt", "does only adapt the not brain", "only does not adapt the brain", "does brain not adapt the only"],0,"Adverbio + auxiliar + artículo + sustantivo + verbo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un párrafo académico sobre el cerebro usando al menos una estructura de inversión (“Rarely...” o “Not only...”).",[],["rarely have", "not only does", "neuroplasticity"]],
    ]
  },
  {
    id:"c2_behavioral_economics", level:"C2", title:"La economía conductual y los sesgos cognitivos", emoji:"🧩", xp:100,
    description:"Analiza la economía conductual usando nominalización en registro académico en inglés.",
    study: {
      vocab: [
        ["cognitive bias", "sesgo cognitivo"],
        ["loss aversion", "aversión a la pérdida"],
        ["anchoring effect", "efecto de anclaje"],
        ["decision-making", "toma de decisiones"],
        ["irrational behavior", "comportamiento irracional"],
        ["nudge", "empujón/incentivo sutil"],
      ],
      grammar: [
        ["Nominalización en registro académico", "La nominalización convierte verbos o adjetivos en sustantivos abstractos (“decide” → “decision-making”), un rasgo típico del inglés académico formal.", "The persistence of cognitive bias affects decision-making. / Researchers study the avoidance of loss, known as loss aversion."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “aversión a la pérdida” en inglés?",["loss aversion", "cognitive bias", "anchoring effect", "nudge"],0,"“Aversión a la pérdida” es “loss aversion” en inglés."],
      ["mcq","¿Cómo se dice “efecto de anclaje” en inglés?",["anchoring effect", "irrational behavior", "cognitive bias", "loss aversion"],0,"“Efecto de anclaje” es “anchoring effect” en inglés."],
      ["fill","Completa: “The persistence of cognitive bias affects ___.”",["decide", "decided", "deciding", "decision-making"],3,"La forma nominalizada de “decide” en este registro académico es “decision-making”."],
      ["translate","Traduce en registro académico: “La aversión a la pérdida afecta la toma de decisiones.”",["Loss aversion affects deciding.", "Loss aversion affect decision-making.", "Losing aversion affects decision-making.", "Loss aversion affects decision-making."],3,"“La toma de decisiones” se traduce con la forma nominalizada “decision-making”, no con el verbo “decide”."],
      ["arrange","Ordena: [bias / study / researchers / cognitive]",["researchers study cognitive bias", "study bias cognitive researchers", "cognitive researchers bias study", "study cognitive researchers bias"],0,"Sujeto + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un párrafo académico sobre un sesgo cognitivo, usando al menos dos sustantivos nominalizados (como “decision-making” o “avoidance”).",[],["decision-making", "cognitive bias", "loss aversion"]],
    ]
  },
  {
    id:"a1_photography_cameras", level:"A1", title:"La fotografía y las cámaras", emoji:"📷", xp:38,
    description:"Aprende vocabulario de fotografía y a usar “can/can't” para habilidad en inglés.",
    study: {
      vocab: [
        ["camera", "cámara"],
        ["photo/picture", "foto"],
        ["lens", "lente"],
        ["to take a picture", "tomar una foto"],
        ["zoom", "zoom"],
        ["memory card", "tarjeta de memoria"],
      ],
      grammar: [
        ["“Can/can't” para habilidad", "“Can” + infinitivo sin “to” expresa habilidad o capacidad; “can't” es la forma negativa.", "I can take good photos with this camera. / This camera can't zoom very far."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lente” en inglés?",["photo/picture", "memory card", "lens", "to take a picture"],2,"“Lente” es “lens” en inglés."],
      ["mcq","¿Cómo se dice “tarjeta de memoria” en inglés?",["camera", "memory card", "zoom", "to take a picture"],1,"“Tarjeta de memoria” es “memory card” en inglés."],
      ["fill","Completa: “This camera ___ zoom very far.”",["won't", "isn't", "doesn't", "can't"],3,"“Can't” + infinitivo expresa incapacidad: “can't zoom”."],
      ["translate","Traduce: “Puedo tomar buenas fotos con esta cámara.”",["I can took good photos with this camera.", "I can take good photos with that camera.", "I can take good photos with this camera.", "I can't take good photos with this camera."],2,"“Puedo tomar” se traduce con “can” + infinitivo: “can take”."],
      ["arrange","Ordena: [zoom / camera / this / far / can't / very]",["can't far zoom camera very this", "very far zoom can't camera this", "this camera can't zoom very far", "camera far zoom very this can't"],2,"Sujeto + “can't” + verbo + adverbio + adverbio."],
      ["writing","Describe en inglés, en 20-30 palabras, lo que puedes y no puedes hacer con tu cámara o teléfono, usando “can/can't”.",[],["can", "can't", "camera"]],
    ]
  },
  {
    id:"a2_camping_outdoors", level:"A2", title:"Acampar y las actividades al aire libre", emoji:"🏕️", xp:48,
    description:"Aprende vocabulario de camping y a usar “some/any” para cantidades en inglés.",
    study: {
      vocab: [
        ["tent", "tienda de campaña"],
        ["sleeping bag", "saco de dormir"],
        ["campfire", "fogata"],
        ["hiking trail", "sendero"],
        ["backpack", "mochila"],
        ["to pitch a tent", "armar una tienda"],
      ],
      grammar: [
        ["“Some/any” para cantidades", "“Some” se usa en oraciones afirmativas para cantidades indefinidas; “any” se usa en negativas y preguntas.", "We have some firewood for the campfire. / We don't have any water left."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “saco de dormir” en inglés?",["backpack", "campfire", "hiking trail", "sleeping bag"],3,"“Saco de dormir” es “sleeping bag” en inglés."],
      ["mcq","¿Cómo se dice “sendero” en inglés?",["tent", "sleeping bag", "hiking trail", "campfire"],2,"“Sendero” es “hiking trail” en inglés."],
      ["fill","Completa: “We don't have ___ water left.”",["some", "much", "no", "any"],3,"En oraciones negativas se usa “any”: “don't have any water”."],
      ["translate","Traduce: “Tenemos algo de leña para la fogata.”",["We have any firewood for the campfire.", "We has some firewood for the campfire.", "We have some firewood for the campfire.", "We have some firewood for the tent."],2,"“Algo de leña” en afirmativa se traduce con “some”: “have some firewood”."],
      ["arrange","Ordena: [trail / this / the / hiking / long / is]",["trail this long hiking is", "this hiking trail is long", "hiking long is trail this", "this long hiking is trail"],1,"Pronombre + sustantivo + verbo + adjetivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, un plan de camping usando “some/any” para lo que necesitas llevar.",[],["some", "any", "tent"]],
    ]
  },
  {
    id:"b1_beekeeping_bees", level:"B1", title:"La apicultura y las abejas", emoji:"🐝", xp:62,
    description:"Aprende vocabulario de apicultura y a usar cláusulas relativas en inglés.",
    study: {
      vocab: [
        ["beehive", "colmena"],
        ["honey", "miel"],
        ["to sting", "picar"],
        ["to pollinate", "polinizar"],
        ["beekeeper", "apicultor"],
        ["queen bee", "abeja reina"],
      ],
      grammar: [
        ["Cláusulas relativas (who/which/that)", "Las cláusulas relativas añaden información sobre un sustantivo: “who” para personas, “which” para cosas, “that” para ambos en registro informal.", "The beekeeper who manages this hive is very experienced. / Bees, which pollinate flowers, are essential to farming."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “colmena” en inglés?",["beehive", "beekeeper", "to pollinate", "honey"],0,"“Colmena” es “beehive” en inglés."],
      ["mcq","¿Cómo se dice “polinizar” en inglés?",["to pollinate", "beekeeper", "honey", "to sting"],0,"“Polinizar” es “to pollinate” en inglés."],
      ["fill","Completa: “The beekeeper ___ manages this hive is very experienced.”",["which", "whose", "who", "where"],2,"“Who” se usa para personas: “the beekeeper who manages”."],
      ["translate","Traduce: “Las abejas, que polinizan las flores, son esenciales para la agricultura.”",["Bees, which pollinates flowers, are essential to farming.", "Bees, which pollinate flowers, are essential to farming.", "Bees, which pollinate flowers, is essential to farming.", "Bees, who pollinate flowers, are essential to farming."],1,"“Which” se usa para cosas/animales en cláusula explicativa: “bees, which pollinate...”."],
      ["arrange","Ordena: [hive / bees / that / live / the / in]",["the bees that live in the hive", "bees the the hive live in that", "hive the in live the bees that", "the in the live bees that hive"],0,"Artículo + sustantivo + “that” + verbo + preposición + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre la importancia de las abejas usando al menos una cláusula relativa (“who/which/that”).",[],["which", "who", "beehive"]],
    ]
  },
  {
    id:"b2_cryptocurrency_digital_finance", level:"B2", title:"Las criptomonedas y las finanzas digitales", emoji:"₿", xp:84,
    description:"Habla de criptomonedas usando el tercer condicional en inglés.",
    study: {
      vocab: [
        ["cryptocurrency", "criptomoneda"],
        ["blockchain", "cadena de bloques"],
        ["digital wallet", "billetera digital"],
        ["to invest", "invertir"],
        ["volatility", "volatilidad"],
        ["decentralized", "descentralizado"],
      ],
      grammar: [
        ["Tercer condicional (pasado irreal)", "El tercer condicional (“if” + pasado perfecto, “would have” + participio) describe una situación hipotética en el pasado que no ocurrió.", "If I had invested earlier, I would have made more money. / If the market hadn't crashed, prices would have stayed high."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cadena de bloques” en inglés?",["decentralized", "cryptocurrency", "blockchain", "digital wallet"],2,"“Cadena de bloques” es “blockchain” en inglés."],
      ["mcq","¿Cómo se dice “volatilidad” en inglés?",["digital wallet", "volatility", "decentralized", "cryptocurrency"],1,"“Volatilidad” es “volatility” en inglés."],
      ["fill","Completa: “If I ___ invested earlier, I would have made more money.”",["have", "had", "has", "would have"],1,"El tercer condicional usa “if” + “had” + participio: “if I had invested”."],
      ["translate","Traduce: “Si el mercado no se hubiera desplomado, los precios se habrían mantenido altos.”",["If the market hadn't crashed, prices had stayed high.", "If the market hadn't crashed, prices would stay high.", "If the market didn't crash, prices would have stayed high.", "If the market hadn't crashed, prices would have stayed high."],3,"El tercer condicional usa “if” + pasado perfecto, “would have” + participio: “hadn't crashed... would have stayed”."],
      ["arrange","Ordena: [risky / very / cryptocurrency / is]",["very risky is cryptocurrency", "risky cryptocurrency very is", "very is cryptocurrency risky", "cryptocurrency is very risky"],3,"Sujeto + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre una decisión financiera pasada usando el tercer condicional (“if I had... I would have...”) al menos dos veces.",[],["if I had", "would have", "cryptocurrency"]],
    ]
  },
  {
    id:"c1_bioethics_gene_editing", level:"C1", title:"La bioética y la edición genética", emoji:"🧬", xp:92,
    description:"Analiza la bioética usando “so...that/such...that” para énfasis en inglés.",
    study: {
      vocab: [
        ["gene editing", "edición genética"],
        ["informed consent", "consentimiento informado"],
        ["clinical trial", "ensayo clínico"],
        ["genetic modification", "modificación genética"],
        ["ethical dilemma", "dilema ético"],
        ["to manipulate DNA", "manipular el ADN"],
      ],
      grammar: [
        ["“So...that/such...that” para énfasis", "“So” + adjetivo/adverbio + “that” y “such” + sustantivo + “that” expresan una consecuencia enfática.", "Gene editing is so powerful that it raises serious ethical questions. / It is such a complex issue that experts still disagree."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “consentimiento informado” en inglés?",["ethical dilemma", "to manipulate DNA", "informed consent", "gene editing"],2,"“Consentimiento informado” es “informed consent” en inglés."],
      ["mcq","¿Cómo se dice “ensayo clínico” en inglés?",["clinical trial", "genetic modification", "gene editing", "informed consent"],0,"“Ensayo clínico” es “clinical trial” en inglés."],
      ["fill","Completa: “Gene editing is ___ powerful that it raises serious ethical questions.”",["very", "too", "such", "so"],3,"“So” + adjetivo + “that” expresa consecuencia enfática: “so powerful that”."],
      ["translate","Traduce con estructura enfática: “Es un tema tan complejo que los expertos aún no están de acuerdo.”",["It is such a complex issue that experts still disagree.", "It is so complex issue that experts still disagree.", "It is such complex issue that experts still disagree.", "It is such a complex issue that experts still agree."],0,"“Such” + artículo + sustantivo + “that” expresa consecuencia enfática: “such a complex issue that”."],
      ["arrange","Ordena: [dilemma / is / ethical / this / real / a]",["ethical real dilemma is a this", "dilemma ethical a real this is", "this is a real ethical dilemma", "ethical is this a dilemma real"],2,"Pronombre + verbo + artículo + adjetivo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un argumento sobre la edición genética usando “so...that” o “such...that” al menos dos veces.",[],["so...that", "such...that", "gene editing"]],
    ]
  },
  {
    id:"c2_geopolitics_international_relations", level:"C2", title:"La geopolítica y las relaciones internacionales", emoji:"🌐", xp:100,
    description:"Analiza la geopolítica usando cláusulas de participio en registro académico en inglés.",
    study: {
      vocab: [
        ["diplomatic relations", "relaciones diplomáticas"],
        ["sovereignty", "soberanía"],
        ["sanctions", "sanciones"],
        ["bilateral agreement", "acuerdo bilateral"],
        ["geopolitical tension", "tensión geopolítica"],
        ["to negotiate a treaty", "negociar un tratado"],
      ],
      grammar: [
        ["Cláusulas de participio para registro académico conciso", "Las cláusulas de participio (“Having analyzed...”, “Faced with...”) reemplazan cláusulas subordinadas completas para un estilo más conciso y formal.", "Having analyzed the data, researchers concluded that tensions would rise. / Faced with mounting sanctions, the government changed its policy."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “soberanía” en inglés?",["bilateral agreement", "to negotiate a treaty", "diplomatic relations", "sovereignty"],3,"“Soberanía” es “sovereignty” en inglés."],
      ["mcq","¿Cómo se dice “tensión geopolítica” en inglés?",["sanctions", "geopolitical tension", "sovereignty", "diplomatic relations"],1,"“Tensión geopolítica” es “geopolitical tension” en inglés."],
      ["fill","Completa: “___ analyzed the data, researchers concluded that tensions would rise.”",["Had", "To have", "Having", "Have"],2,"La cláusula de participio perfecto usa “Having” + participio: “having analyzed”."],
      ["translate","Traduce con cláusula de participio: “Ante las crecientes sanciones, el gobierno cambió su política.”",["Faced with mounting sanctions, the government changed its policy.", "Faced by mounting sanctions, the government changed its policy.", "Facing with mounting sanctions, the government changed its policy.", "Faced with mounting sanctions, the government changes its policy."],0,"La cláusula de participio pasado usa “Faced with”, no “facing with” ni “faced by” en este contexto."],
      ["arrange","Ordena: [treaty / negotiate / nations / the / will]",["the nations will negotiate the treaty", "negotiate the nations treaty the will", "treaty will the nations negotiate the", "negotiate will the the nations treaty"],0,"Artículo + sustantivo + auxiliar + verbo + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un párrafo académico sobre geopolítica usando al menos una cláusula de participio (“Having...” o “Faced with...”).",[],["having analyzed", "faced with", "sovereignty"]],
    ]
  },
  {
    id:"a1_hairdresser_personal_care", level:"A1", title:"La peluquería y el cuidado personal", emoji:"💇", xp:38,
    description:"Aprende vocabulario de peluquería y a usar el comparativo y superlativo en inglés.",
    study: {
      vocab: [
        ["haircut", "corte de pelo"],
        ["hairdresser", "peluquero/a"],
        ["scissors", "tijeras"],
        ["short/long hair", "pelo corto/largo"],
        ["to trim", "recortar"],
        ["mirror", "espejo"],
      ],
      grammar: [
        ["Comparativo y superlativo", "Los adjetivos cortos forman el comparativo con “-er” y el superlativo con “-est”; los largos usan “more/most”.", "This haircut is shorter than my last one. / She has the longest hair in the family."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “tijeras” en inglés?",["haircut", "to trim", "mirror", "scissors"],3,"“Tijeras” es “scissors” en inglés."],
      ["mcq","¿Cómo se dice “recortar” en inglés?",["mirror", "to trim", "scissors", "short/long hair"],1,"“Recortar” es “to trim” en inglés."],
      ["fill","Completa: “This haircut is ___ than my last one.”",["more short", "short", "shortest", "shorter"],3,"El comparativo de “short” (adjetivo corto) es “shorter” + “than”."],
      ["translate","Traduce: “Ella tiene el pelo más largo de la familia.”",["She has the longer hair in the family.", "She has the longest hair of the family.", "She have the longest hair in the family.", "She has the longest hair in the family."],3,"“El más largo” se traduce con el superlativo: “the longest”."],
      ["arrange","Ordena: [hairdresser / the / best / in / town / is / this]",["in town hairdresser best this the is", "this is the in town best hairdresser", "in is town best hairdresser the this", "this is the best hairdresser in town"],3,"Pronombre + verbo + artículo + superlativo + sustantivo + preposición + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, tu corte de pelo ideal usando comparativos o superlativos.",[],["shorter", "the longest", "haircut"]],
    ]
  },
  {
    id:"a2_car_repair_shop", level:"A2", title:"El taller mecánico y el carro", emoji:"🚗", xp:48,
    description:"Aprende vocabulario del taller mecánico y a usar “much/many/a lot of” en inglés.",
    study: {
      vocab: [
        ["mechanic", "mecánico"],
        ["flat tire", "llanta ponchada"],
        ["engine", "motor"],
        ["to fix the car", "arreglar el carro"],
        ["spare part", "repuesto"],
        ["oil change", "cambio de aceite"],
      ],
      grammar: [
        ["“Much/many/a lot of” para cantidades", "“Much” se usa con sustantivos incontables, “many” con contables, y “a lot of” con ambos, sobre todo en afirmativas.", "This repair needs a lot of spare parts. / There isn't much time before the trip."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “llanta ponchada” en inglés?",["mechanic", "spare part", "to fix the car", "flat tire"],3,"“Llanta ponchada” es “flat tire” en inglés."],
      ["mcq","¿Cómo se dice “repuesto” en inglés?",["spare part", "engine", "to fix the car", "flat tire"],0,"“Repuesto” es “spare part” en inglés."],
      ["fill","Completa: “There isn't ___ time before the trip.”",["much", "a lot", "many", "few"],0,"“Time” es incontable, así que se usa “much”: “isn't much time”."],
      ["translate","Traduce: “Esta reparación necesita muchos repuestos.”",["This repair needs much spare parts.", "This repair needs a lot of spare part.", "This repair need a lot of spare parts.", "This repair needs a lot of spare parts."],3,"“Muchos repuestos” (contable, plural) se traduce con “a lot of spare parts”."],
      ["arrange","Ordena: [engine / has / mechanic / the / fixed]",["fixed has the engine mechanic the", "the mechanic has fixed the engine", "the the has fixed mechanic engine", "mechanic fixed the engine the has"],1,"Artículo + sustantivo + auxiliar + participio + artículo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, un problema con tu carro usando “much/many/a lot of”.",[],["much", "many", "a lot of"]],
    ]
  },
  {
    id:"b1_learning_musical_instrument", level:"B1", title:"La música y aprender un instrumento", emoji:"🎸", xp:62,
    description:"Aprende vocabulario musical y la diferencia entre gerundio e infinitivo en inglés.",
    study: {
      vocab: [
        ["to practice scales", "practicar escalas"],
        ["sheet music", "partitura"],
        ["to tune an instrument", "afinar un instrumento"],
        ["rhythm", "ritmo"],
        ["music teacher", "profesor de música"],
        ["to perform", "actuar/tocar en público"],
      ],
      grammar: [
        ["Gerundio vs. infinitivo", "Algunos verbos van seguidos de gerundio (“enjoy playing”), otros de infinitivo (“want to play”), y algunos cambian de sentido según cuál usen.", "I enjoy practicing scales every morning. / She wants to perform in front of an audience."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “partitura” en inglés?",["to practice scales", "to tune an instrument", "to perform", "sheet music"],3,"“Partitura” es “sheet music” en inglés."],
      ["mcq","¿Cómo se dice “afinar un instrumento” en inglés?",["to perform", "sheet music", "to tune an instrument", "music teacher"],2,"“Afinar un instrumento” es “to tune an instrument” en inglés."],
      ["fill","Completa: “I enjoy ___ scales every morning.”",["practice", "practicing", "practiced", "to practice"],1,"“Enjoy” se usa siempre con gerundio: “enjoy practicing”."],
      ["translate","Traduce: “Ella quiere actuar frente a una audiencia.”",["She wants to perform in front of an audience.", "She wants performing in front of an audience.", "She want to perform in front of an audience.", "She wants to perform in front of a audience."],0,"“Want” se usa con infinitivo: “wants to perform”."],
      ["arrange","Ordena: [tune / needs / instrument / this]",["this tune needs instrument", "tune this needs instrument", "tune needs this instrument", "this instrument needs tune"],3,"Pronombre + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre aprender un instrumento musical usando al menos un verbo con gerundio y uno con infinitivo.",[],["enjoy playing", "want to learn", "practice"]],
    ]
  },
  {
    id:"b2_recycling_circular_economy", level:"B2", title:"El reciclaje y la economía circular", emoji:"♻️", xp:84,
    description:"Habla del reciclaje usando el condicional cero para verdades generales en inglés.",
    study: {
      vocab: [
        ["to recycle", "reciclar"],
        ["circular economy", "economía circular"],
        ["waste management", "gestión de residuos"],
        ["to reuse", "reutilizar"],
        ["landfill", "vertedero"],
        ["raw material", "materia prima"],
      ],
      grammar: [
        ["Condicional cero para verdades generales", "El condicional cero (“if” + presente simple, presente simple) describe hechos o verdades generales, sin importar el momento.", "If you recycle paper, it saves trees. / Materials go to a landfill if they aren't reused."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “economía circular” en inglés?",["to recycle", "circular economy", "waste management", "raw material"],1,"“Economía circular” es “circular economy” en inglés."],
      ["mcq","¿Cómo se dice “vertedero” en inglés?",["to reuse", "circular economy", "landfill", "to recycle"],2,"“Vertedero” es “landfill” en inglés."],
      ["fill","Completa: “If you ___ paper, it saves trees.”",["recycle", "recycled", "will recycle", "recycling"],0,"El condicional cero usa presente simple en ambas cláusulas: “if you recycle”."],
      ["translate","Traduce: “Los materiales van a un vertedero si no se reutilizan.”",["Materials go to a landfill if they aren't reused.", "Material go to a landfill if they aren't reused.", "Materials went to a landfill if they aren't reused.", "Materials go to a landfill if they weren't reused."],0,"El condicional cero mantiene presente simple: “go... if they aren't reused”."],
      ["arrange","Ordena: [raw / saves / recycling / material]",["material recycling raw saves", "material saves raw recycling", "recycling saves raw material", "raw saves recycling material"],2,"Sujeto + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, una explicación sobre la economía circular usando el condicional cero al menos dos veces.",[],["if you recycle", "if...", "circular economy"]],
    ]
  },
  {
    id:"c1_political_philosophy_social_justice", level:"C1", title:"La filosofía política y la justicia social", emoji:"⚖️", xp:92,
    description:"Analiza la justicia social usando “wish/if only” para arrepentimiento en registro formal en inglés.",
    study: {
      vocab: [
        ["social justice", "justicia social"],
        ["inequality", "desigualdad"],
        ["civil rights", "derechos civiles"],
        ["redistribution", "redistribución"],
        ["systemic oppression", "opresión sistémica"],
        ["common good", "bien común"],
      ],
      grammar: [
        ["“Wish/if only” para arrepentimiento", "“Wish” o “if only” + pasado simple/perfecto expresan arrepentimiento o el deseo de que algo fuera diferente.", "Philosophers wish inequality could be solved by policy alone. / If only past reforms had addressed systemic oppression."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “desigualdad” en inglés?",["systemic oppression", "civil rights", "inequality", "social justice"],2,"“Desigualdad” es “inequality” en inglés."],
      ["mcq","¿Cómo se dice “redistribución” en inglés?",["common good", "social justice", "redistribution", "inequality"],2,"“Redistribución” es “redistribution” en inglés."],
      ["fill","Completa: “If only past reforms ___ addressed systemic oppression.”",["would have", "has", "had", "have"],2,"“If only” + pasado perfecto expresa arrepentimiento sobre el pasado: “if only... had addressed”."],
      ["translate","Traduce: “Los filósofos desearían que la desigualdad pudiera resolverse solo con políticas.”",["Philosophers wish inequality can be solved by policy alone.", "Philosophers wish inequality could be solving by policy alone.", "Philosophers wishes inequality could be solved by policy alone.", "Philosophers wish inequality could be solved by policy alone."],3,"“Wish” + pasado simple/modal expresa un deseo sobre el presente: “wish... could be solved”."],
      ["arrange","Ordena: [good / common / debate / the / philosophers]",["common debate good philosophers the", "debate common the philosophers good", "philosophers debate the common good", "philosophers common the good debate"],2,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un argumento sobre justicia social usando “wish” o “if only” al menos dos veces.",[],["wish", "if only", "social justice"]],
    ]
  },
  {
    id:"c2_cultural_anthropology_rituals", level:"C2", title:"La antropología cultural y los rituales", emoji:"🗿", xp:100,
    description:"Analiza los rituales culturales usando comparativos dobles en inglés.",
    study: {
      vocab: [
        ["ritual", "ritual"],
        ["cultural relativism", "relativismo cultural"],
        ["rite of passage", "rito de iniciación"],
        ["kinship", "parentesco"],
        ["collective identity", "identidad colectiva"],
        ["oral tradition", "tradición oral"],
      ],
      grammar: [
        ["Comparativos dobles (“the more... the more...”)", "La estructura “the + comparativo, the + comparativo” expresa cómo dos cosas cambian juntas de forma proporcional.", "The more anthropologists study rituals, the more they understand collective identity. / The older the tradition, the stronger its influence."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “relativismo cultural” en inglés?",["cultural relativism", "rite of passage", "kinship", "collective identity"],0,"“Relativismo cultural” es “cultural relativism” en inglés."],
      ["mcq","¿Cómo se dice “rito de iniciación” en inglés?",["oral tradition", "cultural relativism", "rite of passage", "ritual"],2,"“Rito de iniciación” es “rite of passage” en inglés."],
      ["fill","Completa: “The ___ anthropologists study rituals, the more they understand collective identity.”",["most", "many", "more", "much"],2,"El comparativo doble repite “the more...the more” en ambas cláusulas."],
      ["translate","Traduce con comparativo doble: “Entre más antigua la tradición, más fuerte su influencia.”",["The older the tradition, more stronger its influence.", "The older the tradition, the stronger its influence.", "The more old the tradition, the stronger its influence.", "The older is the tradition, the stronger its influence."],1,"El comparativo doble con adjetivo corto usa “the older... the stronger”, sin “is” ni “more”."],
      ["arrange","Ordena: [passage / mark / rites / adulthood / of]",["rites of passage mark adulthood", "mark adulthood passage rites of", "rites mark passage adulthood of", "rites passage adulthood mark of"],0,"Sustantivo + preposición + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis sobre rituales culturales usando al menos un comparativo doble (“the more... the more...”).",[],["the more", "the more", "ritual"]],
    ]
  },
  {
    id:"a1_hardware_store_tools", level:"A1", title:"En la ferretería: herramientas básicas", emoji:"🔨", xp:38,
    description:"Aprende vocabulario de herramientas y a usar la comparación de igualdad (“as...as”) en inglés.",
    study: {
      vocab: [
        ["hammer", "martillo"],
        ["screwdriver", "destornillador"],
        ["nail", "clavo"],
        ["screw", "tornillo"],
        ["toolbox", "caja de herramientas"],
        ["ladder", "escalera"],
      ],
      grammar: [
        ["Comparación de igualdad (“as...as”)", "“As” + adjetivo + “as” expresa que dos cosas son iguales en cierta cualidad.", "This hammer is as heavy as that one. / The ladder isn't as tall as the wall."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “destornillador” en inglés?",["nail", "screwdriver", "screw", "hammer"],1,"“Destornillador” es “screwdriver” en inglés."],
      ["mcq","¿Cómo se dice “escalera” en inglés?",["screwdriver", "ladder", "hammer", "screw"],1,"“Escalera” es “ladder” en inglés."],
      ["fill","Completa: “This hammer is ___ heavy as that one.”",["more", "so", "than", "as"],3,"La comparación de igualdad usa “as + adjetivo + as”: “as heavy as”."],
      ["translate","Traduce: “La escalera no es tan alta como la pared.”",["The ladder isn't as tall than the wall.", "The ladder is as tall as the wall.", "The ladder isn't so tall than the wall.", "The ladder isn't as tall as the wall."],3,"“No es tan... como” se traduce con “isn't as... as”."],
      ["arrange","Ordena: [toolbox / heavy / the / is / very]",["very the toolbox heavy is", "the heavy very toolbox is", "the toolbox is very heavy", "the toolbox very heavy is"],2,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Describe en inglés, en 20-30 palabras, comparando dos herramientas usando “as...as”.",[],["as heavy as", "as tall as", "hammer"]],
    ]
  },
  {
    id:"a2_laundry_clothing_care", level:"A2", title:"La lavandería y el cuidado de la ropa", emoji:"🧺", xp:48,
    description:"Aprende vocabulario de lavandería y a usar “a few/a little” en inglés.",
    study: {
      vocab: [
        ["washing machine", "lavadora"],
        ["detergent", "detergente"],
        ["to hang out clothes", "tender la ropa"],
        ["stain", "mancha"],
        ["dryer", "secadora"],
        ["to iron", "planchar"],
      ],
      grammar: [
        ["“A few/a little” para cantidades pequeñas", "“A few” se usa con sustantivos contables, “a little” con incontables, ambos para cantidades pequeñas pero suficientes.", "I need a little detergent for this load. / There are a few stains on this shirt."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lavadora” en inglés?",["detergent", "stain", "dryer", "washing machine"],3,"“Lavadora” es “washing machine” en inglés."],
      ["mcq","¿Cómo se dice “mancha” en inglés?",["stain", "dryer", "to hang out clothes", "washing machine"],0,"“Mancha” es “stain” en inglés."],
      ["fill","Completa: “There are ___ stains on this shirt.”",["much", "a few", "a little", "many"],1,"“Stains” es contable plural, así que se usa “a few”: “a few stains”."],
      ["translate","Traduce: “Necesito un poco de detergente para esta carga.”",["I need a few detergent for this load.", "I need a little detergent for this load.", "I need little detergent for this load.", "I need a little detergents for this load."],1,"“Detergent” es incontable, así que se usa “a little”: “a little detergent”."],
      ["arrange","Ordena: [ironed / needs / this / shirt / be / to]",["be shirt to needs this ironed", "this shirt needs to be ironed", "to this needs ironed shirt be", "needs this shirt ironed be to"],1,"Sujeto + verbo + “to be” + participio."],
      ["speaking","Describe en inglés, en 40-60 palabras, tu rutina de lavandería usando “a few/a little”.",[],["a few", "a little", "washing machine"]],
    ]
  },
  {
    id:"b1_chess_strategy_games", level:"B1", title:"El ajedrez y los juegos de mesa estratégicos", emoji:"♟️", xp:62,
    description:"Aprende vocabulario de ajedrez y a usar el primer condicional en inglés.",
    study: {
      vocab: [
        ["chessboard", "tablero de ajedrez"],
        ["to checkmate", "dar jaque mate"],
        ["pawn", "peón"],
        ["to move a piece", "mover una pieza"],
        ["strategy", "estrategia"],
        ["opponent", "oponente"],
      ],
      grammar: [
        ["Primer condicional (futuro real)", "El primer condicional (“if” + presente simple, “will” + infinitivo) describe una consecuencia real y probable en el futuro.", "If you move that piece, you'll lose the game. / If she plans her strategy well, she will win."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “dar jaque mate” en inglés?",["to checkmate", "opponent", "chessboard", "pawn"],0,"“Dar jaque mate” es “to checkmate” en inglés."],
      ["mcq","¿Cómo se dice “peón” en inglés?",["strategy", "opponent", "pawn", "to move a piece"],2,"“Peón” es “pawn” en inglés."],
      ["fill","Completa: “If you move that piece, you ___ lose the game.”",["won't", "will", "do", "would"],1,"El primer condicional usa “if” + presente, “will” + infinitivo: “if you move... you will lose”."],
      ["translate","Traduce: “Si ella planea bien su estrategia, ganará.”",["If she plans her strategy well, she wins.", "If she planned her strategy well, she will win.", "If she plans her strategy well, she would win.", "If she plans her strategy well, she will win."],3,"El primer condicional usa presente en la cláusula “if”, y “will” en la consecuencia: “if she plans... she will win”."],
      ["arrange","Ordena: [strong / a / has / opponent / she]",["she has a strong opponent", "opponent has a strong she", "opponent strong a she has", "a has she strong opponent"],0,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre una partida de ajedrez usando el primer condicional (“if...will...”) al menos dos veces.",[],["if you", "will", "chess"]],
    ]
  },
  {
    id:"b2_historic_building_restoration", level:"B2", title:"La restauración de edificios históricos", emoji:"🏛️", xp:84,
    description:"Habla de restauración usando la voz causativa (“have/get something done”) en inglés.",
    study: {
      vocab: [
        ["to restore", "restaurar"],
        ["heritage site", "sitio patrimonial"],
        ["facade", "fachada"],
        ["scaffolding", "andamio"],
        ["to preserve", "preservar"],
        ["structural damage", "daño estructural"],
      ],
      grammar: [
        ["Voz causativa (“have/get something done”)", "“Have/get” + objeto + participio expresa que alguien más realiza una acción para nosotros, muy común al hablar de reparaciones o servicios.", "The city had the facade restored last year. / They are getting the roof repaired this month."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “fachada” en inglés?",["facade", "scaffolding", "to preserve", "heritage site"],0,"“Fachada” es “facade” en inglés."],
      ["mcq","¿Cómo se dice “andamio” en inglés?",["to restore", "to preserve", "scaffolding", "facade"],2,"“Andamio” es “scaffolding” en inglés."],
      ["fill","Completa: “The city had the facade ___ last year.”",["restore", "restored", "restores", "restoring"],1,"La voz causativa usa “had” + objeto + participio: “had the facade restored”."],
      ["translate","Traduce: “Están haciendo reparar el techo este mes.”",["They are getting the roof repair this month.", "They got the roof repairing this month.", "They are getting the roof repaired this month.", "They are having the roof repaired this month by they."],2,"“Están haciendo reparar” se traduce con voz causativa: “are getting... repaired”."],
      ["arrange","Ordena: [preserve / important / heritage / sites / to]",["to preserve important heritage sites", "heritage to important sites preserve", "preserve to important heritage sites", "heritage preserve to important sites"],0,"Infinitivo + adjetivo + sustantivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre la restauración de un edificio histórico usando la voz causativa (“have/get something done”) al menos dos veces.",[],["had... restored", "getting... repaired", "heritage site"]],
    ]
  },
  {
    id:"c1_philosophy_of_science", level:"C1", title:"La filosofía de la ciencia y el método científico", emoji:"🔬", xp:92,
    description:"Analiza el método científico usando cláusulas de propósito (“in order to/so that”) en inglés.",
    study: {
      vocab: [
        ["hypothesis", "hipótesis"],
        ["falsifiability", "falsabilidad"],
        ["empirical evidence", "evidencia empírica"],
        ["peer review", "revisión por pares"],
        ["to replicate a study", "replicar un estudio"],
        ["paradigm shift", "cambio de paradigma"],
      ],
      grammar: [
        ["Cláusulas de propósito (“in order to/so that”)", "“In order to” + infinitivo y “so that” + cláusula expresan el propósito de una acción, típicos del registro formal/académico.", "Scientists replicate studies in order to confirm results. / Researchers publish data so that others can verify it."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “falsabilidad” en inglés?",["empirical evidence", "falsifiability", "peer review", "paradigm shift"],1,"“Falsabilidad” es “falsifiability” en inglés."],
      ["mcq","¿Cómo se dice “revisión por pares” en inglés?",["paradigm shift", "empirical evidence", "falsifiability", "peer review"],3,"“Revisión por pares” es “peer review” en inglés."],
      ["fill","Completa: “Researchers publish data ___ that others can verify it.”",["because", "in order", "so", "for"],2,"“So that” + cláusula expresa propósito: “publish data so that others can verify”."],
      ["translate","Traduce con cláusula de propósito: “Los científicos replican estudios para confirmar resultados.”",["Scientists replicate studies in order to confirm results.", "Scientists replicate studies for to confirm results.", "Scientists replicate studies in order confirm results.", "Scientists replicate studies in order to confirming results."],0,"“Para confirmar” en registro formal se traduce con “in order to confirm”."],
      ["arrange","Ordena: [needs / hypothesis / evidence / empirical / every]",["needs every hypothesis evidence empirical", "needs every empirical hypothesis evidence", "empirical every hypothesis evidence needs", "every hypothesis needs empirical evidence"],3,"Adjetivo + sustantivo + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre el método científico usando “in order to” o “so that” al menos dos veces.",[],["in order to", "so that", "hypothesis"]],
    ]
  },
  {
    id:"c2_game_theory_strategic_decisions", level:"C2", title:"La teoría de juegos y la toma de decisiones estratégica", emoji:"🎲", xp:100,
    description:"Analiza la teoría de juegos usando “neither...nor” y concesión con “whereas/while” en inglés.",
    study: {
      vocab: [
        ["Nash equilibrium", "equilibrio de Nash"],
        ["zero-sum game", "juego de suma cero"],
        ["payoff matrix", "matriz de pagos"],
        ["dominant strategy", "estrategia dominante"],
        ["rational actor", "actor racional"],
        ["prisoner's dilemma", "dilema del prisionero"],
      ],
      grammar: [
        ["“Neither...nor” y concesión con “whereas/while”", "“Neither...nor” niega dos opciones a la vez; “whereas/while” introducen un contraste formal entre dos ideas.", "Neither player benefits from mutual betrayal. / Whereas cooperation maximizes joint gain, self-interest often prevails."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “equilibrio de Nash” en inglés?",["payoff matrix", "Nash equilibrium", "prisoner's dilemma", "zero-sum game"],1,"“Equilibrio de Nash” es “Nash equilibrium” en inglés."],
      ["mcq","¿Cómo se dice “dilema del prisionero” en inglés?",["prisoner's dilemma", "Nash equilibrium", "zero-sum game", "dominant strategy"],0,"“Dilema del prisionero” es “prisoner's dilemma” en inglés."],
      ["fill","Completa: “Neither player benefits ___ mutual betrayal.”",["from", "with", "of", "for"],0,"“Benefit from” es la colocación correcta: “benefits from mutual betrayal”."],
      ["translate","Traduce con concesión formal: “Mientras la cooperación maximiza la ganancia conjunta, el interés propio a menudo prevalece.”",["Whereas cooperation maximizes a joint gain, self-interest often prevails.", "While cooperation maximize joint gain, self-interest often prevails.", "Whereas cooperation maximizes joint gain, self-interest often prevail.", "Whereas cooperation maximizes joint gain, self-interest often prevails."],3,"“Whereas” + presente simple concuerda con el sujeto: “cooperation maximizes”."],
      ["arrange","Ordena: [dominant / a / has / neither / strategy / player]",["neither a has player strategy dominant", "neither player has a dominant strategy", "dominant a player neither strategy has", "has dominant a neither strategy player"],1,"“Neither” + sustantivo + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis de teoría de juegos usando “neither...nor” y “whereas/while” al menos una vez cada uno.",[],["neither...nor", "whereas", "Nash equilibrium"]],
    ]
  },
  {
    id:"a1_diving_water_sports", level:"A1", title:"El buceo y los deportes acuáticos", emoji:"🤿", xp:38,
    description:"Aprende vocabulario de buceo y a usar preposiciones de lugar en inglés.",
    study: {
      vocab: [
        ["to dive", "bucear"],
        ["snorkel", "esnórquel"],
        ["fish", "pez"],
        ["coral reef", "arrecife de coral"],
        ["wetsuit", "traje de neopreno"],
        ["underwater", "bajo el agua"],
      ],
      grammar: [
        ["Preposiciones de lugar (in/on/under/next to)", "“In” indica dentro de algo, “on” indica sobre una superficie, “under” indica debajo, y “next to” indica al lado.", "The fish swim in the water. / The coral reef is under the boat."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “arrecife de coral” en inglés?",["coral reef", "wetsuit", "snorkel", "underwater"],0,"“Arrecife de coral” es “coral reef” en inglés."],
      ["mcq","¿Cómo se dice “traje de neopreno” en inglés?",["underwater", "wetsuit", "fish", "coral reef"],1,"“Traje de neopreno” es “wetsuit” en inglés."],
      ["fill","Completa: “The coral reef is ___ the boat.”",["under", "next", "in", "on"],0,"“Under” indica una posición debajo de algo: “under the boat”."],
      ["translate","Traduce: “Los peces nadan en el agua.”",["The fish swim in the water.", "The fish swim next to the water.", "The fish swim on the water.", "The fish swim under the water is."],0,"“En el agua” se traduce con “in the water”, ya que están dentro de ella."],
      ["arrange","Ordena: [next / boat / is / the / to / diver / the]",["next boat is to the the diver", "next to the the boat is diver", "the diver is next to the boat", "to is the next diver the boat"],2,"Artículo + sustantivo + verbo + preposición + preposición + artículo + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, lo que ves al bucear usando preposiciones de lugar (in/on/under/next to).",[],["under", "in", "fish"]],
    ]
  },
  {
    id:"a2_origami_crafts", level:"A2", title:"El origami y las manualidades", emoji:"🎨", xp:48,
    description:"Aprende vocabulario de manualidades y a usar secuenciadores en inglés.",
    study: {
      vocab: [
        ["to fold", "doblar"],
        ["paper", "papel"],
        ["scissors", "tijeras"],
        ["glue", "pegamento"],
        ["crease", "pliegue"],
        ["craft", "manualidad"],
      ],
      grammar: [
        ["Secuenciadores (first, then, after that, finally)", "Los secuenciadores organizan los pasos de un proceso en orden: “first” (primero), “then/after that” (luego), “finally” (finalmente).", "First, fold the paper in half. Then, make a crease. Finally, fold the corners."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “pliegue” en inglés?",["paper", "to fold", "craft", "crease"],3,"“Pliegue” es “crease” en inglés."],
      ["mcq","¿Cómo se dice “pegamento” en inglés?",["to fold", "glue", "crease", "scissors"],1,"“Pegamento” es “glue” en inglés."],
      ["fill","Completa: “First, fold the paper. ___, make a crease.”",["Then", "Before", "First", "Finally"],0,"“Then” conecta el segundo paso después de “first”."],
      ["translate","Traduce: “Finalmente, dobla las esquinas.”",["Finally, fold the corners.", "Then, fold the corners.", "Finally, folding the corners.", "Finally, fold the corner."],0,"“Finalmente” se traduce con “Finally” al inicio de la oración."],
      ["arrange","Ordena: [scissors / craft / needs / this]",["craft needs this scissors", "needs craft scissors this", "this craft needs scissors", "this scissors craft needs"],2,"Pronombre + sustantivo + verbo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, los pasos para hacer una manualidad usando secuenciadores (first, then, finally).",[],["first", "then", "finally"]],
    ]
  },
  {
    id:"b1_paleontology_dinosaurs", level:"B1", title:"La paleontología y los dinosaurios", emoji:"🦴", xp:62,
    description:"Aprende vocabulario de paleontología y a usar “already/yet/still” con el presente perfecto en inglés.",
    study: {
      vocab: [
        ["fossil", "fósil"],
        ["dinosaur bone", "hueso de dinosaurio"],
        ["excavation site", "sitio de excavación"],
        ["extinct", "extinto"],
        ["skeleton", "esqueleto"],
        ["to dig up", "desenterrar"],
      ],
      grammar: [
        ["“Already/yet/still” con el presente perfecto", "“Already” (ya) se usa en afirmativas, “yet” (todavía/aún no) en negativas y preguntas, y “still” (todavía) enfatiza una situación que continúa.", "They have already found the skeleton. / They haven't finished the excavation yet. / Scientists are still studying the fossil."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “fósil” en inglés?",["skeleton", "to dig up", "excavation site", "fossil"],3,"“Fósil” es “fossil” en inglés."],
      ["mcq","¿Cómo se dice “esqueleto” en inglés?",["excavation site", "to dig up", "skeleton", "fossil"],2,"“Esqueleto” es “skeleton” en inglés."],
      ["fill","Completa: “They haven't finished the excavation ___.”",["already", "just", "yet", "still"],2,"“Yet” se usa al final de oraciones negativas: “haven't finished... yet”."],
      ["translate","Traduce: “Los científicos todavía están estudiando el fósil.”",["Scientists are already studying the fossil.", "Scientists are still studying the fossil.", "Scientists are still study the fossil.", "Scientists are yet studying the fossil."],1,"“Todavía están” se traduce con “still” + presente continuo: “are still studying”."],
      ["arrange","Ordena: [skeleton / already / the / found / have / they]",["have found already the they skeleton", "the they already skeleton have found", "they have already found the skeleton", "skeleton the found already they have"],2,"Sujeto + “have” + “already” + participio + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre un descubrimiento de dinosaurios usando “already/yet/still” al menos dos veces.",[],["already", "yet", "still"]],
    ]
  },
  {
    id:"b2_street_art_graffiti", level:"B2", title:"El arte urbano y el grafiti", emoji:"🎨", xp:84,
    description:"Habla de arte urbano usando “unless” en inglés.",
    study: {
      vocab: [
        ["mural", "mural"],
        ["spray paint", "pintura en aerosol"],
        ["public space", "espacio público"],
        ["vandalism", "vandalismo"],
        ["street artist", "artista urbano"],
        ["to commission a mural", "encargar un mural"],
      ],
      grammar: [
        ["“Unless” para condiciones negativas", "“Unless” equivale a “if not” y expresa que algo sucederá a menos que ocurra otra cosa.", "Unless the city approves it, the mural will be considered vandalism. / She won't paint unless she has permission."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “vandalismo” en inglés?",["public space", "to commission a mural", "vandalism", "street artist"],2,"“Vandalismo” es “vandalism” en inglés."],
      ["mcq","¿Cómo se dice “encargar un mural” en inglés?",["mural", "public space", "to commission a mural", "spray paint"],2,"“Encargar un mural” es “to commission a mural” en inglés."],
      ["fill","Completa: “She won't paint ___ she has permission.”",["because", "unless", "if", "although"],1,"“Unless” equivale a “if not”: “won't paint unless she has”."],
      ["translate","Traduce: “A menos que la ciudad lo apruebe, el mural se considerará vandalismo.”",["Unless the city approves it, the mural is considered vandalism.", "Unless the city approves it, the mural will be considered vandalism.", "Unless the city doesn't approve it, the mural will be considered vandalism.", "If the city approves it, the mural will be considered vandalism."],1,"“A menos que” se traduce con “unless”, que ya incluye la negación implícita."],
      ["arrange","Ordena: [talented / very / is / artist / this]",["artist very this is talented", "very talented artist this is", "this artist is very talented", "this talented is artist very"],2,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre el arte urbano usando “unless” al menos dos veces.",[],["unless", "mural", "street artist"]],
    ]
  },
  {
    id:"c1_criminology_criminal_justice", level:"C1", title:"La criminología y la justicia penal", emoji:"🔍", xp:92,
    description:"Analiza la criminología usando “may/might” para posibilidad en registro formal en inglés.",
    study: {
      vocab: [
        ["forensic evidence", "evidencia forense"],
        ["suspect", "sospechoso"],
        ["to convict", "condenar"],
        ["reasonable doubt", "duda razonable"],
        ["recidivism", "reincidencia"],
        ["rehabilitation", "rehabilitación"],
      ],
      grammar: [
        ["“May/might” para posibilidad formal", "“May” y “might” expresan posibilidad; en registro formal/legal, “may” suele sonar ligeramente más seguro que “might”.", "The forensic evidence may point to the suspect. / Without rehabilitation, recidivism might increase."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “duda razonable” en inglés?",["rehabilitation", "to convict", "reasonable doubt", "suspect"],2,"“Duda razonable” es “reasonable doubt” en inglés."],
      ["mcq","¿Cómo se dice “reincidencia” en inglés?",["to convict", "recidivism", "reasonable doubt", "rehabilitation"],1,"“Reincidencia” es “recidivism” en inglés."],
      ["fill","Completa: “The forensic evidence ___ point to the suspect.”",["will", "must", "can", "may"],3,"“May” + infinitivo sin “to” expresa posibilidad formal: “may point to”."],
      ["translate","Traduce con posibilidad formal: “Without rehabilitation, recidivism might increase.”",["Sin rehabilitación, la reincidencia puede aumentando.", "Sin rehabilitación, la reincidencia debe aumentar.", "Sin rehabilitación, la reincidencia podría aumentar.", "Sin rehabilitación, la reincidencia podría aumentado."],2,"“Might increase” se traduce con “podría aumentar”, posibilidad formal en español."],
      ["arrange","Ordena: [convict / cannot / court / suspect / the / the]",["court convict cannot suspect the the", "cannot the suspect convict court the", "the convict the suspect cannot court", "the court cannot convict the suspect"],3,"Artículo + sustantivo + modal + verbo + artículo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis sobre justicia penal usando “may/might” al menos dos veces.",[],["may", "might", "reasonable doubt"]],
    ]
  },
  {
    id:"c2_philosophy_of_language", level:"C2", title:"La filosofía del lenguaje", emoji:"💬", xp:100,
    description:"Analiza la filosofía del lenguaje usando el subjuntivo mandativo en inglés.",
    study: {
      vocab: [
        ["speech act", "acto de habla"],
        ["reference", "referencia"],
        ["meaning", "significado"],
        ["ambiguity", "ambigüedad"],
        ["linguistic relativity", "relatividad lingüística"],
        ["proposition", "proposición"],
      ],
      grammar: [
        ["Subjuntivo mandativo (“that + forma base”)", "Tras verbos como “suggest”, “insist” o “recommend” + “that”, el verbo siguiente va en forma base, sin importar el sujeto, en registro formal.", "Philosophers suggest that meaning be studied through use. / The linguist insists that context be considered."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “acto de habla” en inglés?",["ambiguity", "proposition", "speech act", "linguistic relativity"],2,"“Acto de habla” es “speech act” en inglés."],
      ["mcq","¿Cómo se dice “ambigüedad” en inglés?",["reference", "ambiguity", "linguistic relativity", "meaning"],1,"“Ambigüedad” es “ambiguity” en inglés."],
      ["fill","Completa: “The linguist insists that context ___ considered.”",["was", "is", "being", "be"],3,"El subjuntivo mandativo usa la forma base “be”, no “is”: “insists that context be considered”."],
      ["translate","Traduce con subjuntivo mandativo: “Philosophers suggest that meaning be studied through use.”",["Los filósofos sugieren que el significado se estudie a través del uso.", "Los filósofos sugieren que el significado es estudiado a través del uso.", "Los filósofos sugieren que el significado se estudiará a través del uso.", "Los filósofos sugieren que el significado se estudia a través del uso."],0,"El equivalente español usa subjuntivo presente: “sugieren que... se estudie”."],
      ["arrange","Ordena: [ambiguous / this / is / sentence]",["is sentence this ambiguous", "is ambiguous this sentence", "ambiguous this is sentence", "this sentence is ambiguous"],3,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un argumento sobre filosofía del lenguaje usando el subjuntivo mandativo (“suggest/insist/recommend that... + forma base”) al menos dos veces.",[],["suggest that", "insist that", "meaning"]],
    ]
  },
  {
    id:"a1_circus_shows", level:"A1", title:"El circo y los espectáculos", emoji:"🎪", xp:38,
    description:"Aprende vocabulario del circo y a usar exclamaciones (“what a.../how...”) en inglés.",
    study: {
      vocab: [
        ["clown", "payaso"],
        ["tightrope", "cuerda floja"],
        ["juggler", "malabarista"],
        ["acrobat", "acróbata"],
        ["tent", "carpa"],
        ["amazing", "asombroso"],
      ],
      grammar: [
        ["Exclamaciones (“what a.../how...”)", "“What a” + sustantivo y “How” + adjetivo expresan sorpresa o admiración de forma exclamativa.", "What an amazing juggler! / How amazing this show is!"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “malabarista” en inglés?",["tightrope", "amazing", "tent", "juggler"],3,"“Malabarista” es “juggler” en inglés."],
      ["mcq","¿Cómo se dice “acróbata” en inglés?",["tent", "amazing", "acrobat", "clown"],2,"“Acróbata” es “acrobat” en inglés."],
      ["fill","Completa: “___ amazing juggler!”",["What a", "How", "How an", "What an"],3,"“What an” + sustantivo que empieza con vocal expresa admiración: “what an amazing juggler”."],
      ["translate","Traduce: “¡Qué asombroso es este espectáculo!”",["How amazing this show is!", "What amazing this show is!", "How amazing is this show!", "How amazing this show!"],0,"“¡Qué asombroso es!” se traduce con “How amazing... is!”, con el verbo al final."],
      ["arrange","Ordena: [tightrope / on / walks / the / clown]",["on walks the the tightrope clown", "the clown walks on the tightrope", "on the walks tightrope clown the", "the the tightrope clown on walks"],1,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, un espectáculo de circo usando exclamaciones (“what a.../how...”).",[],["what a", "how", "amazing"]],
    ]
  },
  {
    id:"a2_flea_market_bargains", level:"A2", title:"El mercado de pulgas y las gangas", emoji:"🛍️", xp:48,
    description:"Aprende vocabulario de mercados de pulgas y a usar “too/enough” en inglés.",
    study: {
      vocab: [
        ["flea market", "mercado de pulgas"],
        ["bargain", "ganga"],
        ["to haggle", "regatear"],
        ["secondhand", "de segunda mano"],
        ["vendor", "vendedor"],
        ["antique", "antigüedad"],
      ],
      grammar: [
        ["“Too/enough”", "“Too” + adjetivo indica exceso (“demasiado”), mientras que “adjetivo + enough” indica suficiencia (“lo suficientemente”).", "This antique is too expensive. / I don't have enough money for this bargain."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “regatear” en inglés?",["bargain", "to haggle", "secondhand", "vendor"],1,"“Regatear” es “to haggle” en inglés."],
      ["mcq","¿Cómo se dice “vendedor” en inglés?",["to haggle", "secondhand", "vendor", "antique"],2,"“Vendedor” es “vendor” en inglés."],
      ["fill","Completa: “This antique is ___ expensive.”",["enough", "so much", "very much", "too"],3,"“Too” + adjetivo expresa exceso: “too expensive”."],
      ["translate","Traduce: “No tengo suficiente dinero para esta ganga.”",["I don't have enough money for this bargain.", "I don't have money enough for this bargain.", "I don't have enough money for this ganga.", "I don't have too money for this bargain."],0,"“Suficiente dinero” se traduce con “enough money” (enough antes del sustantivo)."],
      ["arrange","Ordena: [vendor / haggle / the / with / I]",["the I haggle with vendor", "the with vendor haggle I", "vendor haggle with the I", "I haggle with the vendor"],3,"Sujeto + verbo + preposición + artículo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, una visita a un mercado de pulgas usando “too/enough”.",[],["too", "enough", "bargain"]],
    ]
  },
  {
    id:"b1_genealogy_family_tree", level:"B1", title:"La genealogía y el árbol familiar", emoji:"🌳", xp:62,
    description:"Aprende vocabulario de genealogía y a usar “although/even though” en inglés.",
    study: {
      vocab: [
        ["family tree", "árbol familiar"],
        ["ancestor", "antepasado"],
        ["descendant", "descendiente"],
        ["birth certificate", "acta de nacimiento"],
        ["great-grandparent", "bisabuelo/a"],
        ["to trace one's roots", "rastrear las raíces"],
      ],
      grammar: [
        ["“Although/even though” para concesión", "“Although” y “even though” introducen un contraste o concesión, con “even though” siendo más enfático.", "Although the records are old, we traced our roots. / Even though she never met her great-grandparent, she knows the family history."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “antepasado” en inglés?",["birth certificate", "ancestor", "descendant", "great-grandparent"],1,"“Antepasado” es “ancestor” en inglés."],
      ["mcq","¿Cómo se dice “acta de nacimiento” en inglés?",["descendant", "birth certificate", "to trace one's roots", "ancestor"],1,"“Acta de nacimiento” es “birth certificate” en inglés."],
      ["fill","Completa: “___ the records are old, we traced our roots.”",["Despite", "Because", "Although", "So"],2,"“Although” + cláusula completa introduce la concesión: “although the records are old”."],
      ["translate","Traduce: “Aunque nunca conoció a su bisabuela, conoce la historia familiar.”",["Even though she never met her great-grandparent, she know the family history.", "Even she never met her great-grandparent, she knows the family history.", "Although though she never met her great-grandparent, she knows the family history.", "Even though she never met her great-grandparent, she knows the family history."],3,"“Aunque” se traduce con “even though”, forma más enfática que “although”."],
      ["arrange","Ordena: [tree / large / a / has / family / she]",["a has family she large tree", "she has a large family tree", "large family she tree a has", "a tree has large she family"],1,"Sujeto + verbo + artículo + adjetivo + sustantivo compuesto."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre tu árbol familiar usando “although/even though” al menos dos veces.",[],["although", "even though", "family tree"]],
    ]
  },
  {
    id:"b2_meteorology_extreme_weather", level:"B2", title:"La meteorología y los fenómenos extremos", emoji:"🌪️", xp:84,
    description:"Habla de fenómenos meteorológicos extremos usando “despite/in spite of” en inglés.",
    study: {
      vocab: [
        ["hurricane", "huracán"],
        ["tornado", "tornado"],
        ["drought", "sequía"],
        ["flash flood", "inundación repentina"],
        ["wind speed", "velocidad del viento"],
        ["to issue a warning", "emitir una alerta"],
      ],
      grammar: [
        ["“Despite/in spite of” + sustantivo/gerundio", "“Despite” e “in spite of” + sustantivo o gerundio (nunca cláusula completa) introducen un contraste, similares a “although” pero con estructura distinta.", "Despite the warning, many people stayed near the coast. / In spite of issuing a warning, officials couldn't prevent the damage."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sequía” en inglés?",["drought", "flash flood", "wind speed", "tornado"],0,"“Sequía” es “drought” en inglés."],
      ["mcq","¿Cómo se dice “inundación repentina” en inglés?",["hurricane", "flash flood", "to issue a warning", "wind speed"],1,"“Inundación repentina” es “flash flood” en inglés."],
      ["fill","Completa: “___ the warning, many people stayed near the coast.”",["Because", "Despite of", "Although", "Despite"],3,"“Despite” + sustantivo (sin “of”): “despite the warning”."],
      ["translate","Traduce: “A pesar de emitir una alerta, las autoridades no pudieron evitar el daño.”",["In spite issuing a warning, officials couldn't prevent the damage.", "In spite of issuing a warning, officials couldn't prevent the damage.", "In spite of issue a warning, officials couldn't prevent the damage.", "In spite of issuing a warning, officials can't prevent the damage."],1,"“A pesar de emitir” se traduce con “in spite of issuing”, gerundio tras la preposición."],
      ["arrange","Ordena: [approaching / hurricane / a / is / strong]",["a strong hurricane is approaching", "hurricane strong is a approaching", "a strong approaching is hurricane", "strong a hurricane is approaching"],0,"Artículo + adjetivo + sustantivo + verbo + gerundio."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un fenómeno meteorológico extremo usando “despite/in spite of” al menos dos veces.",[],["despite", "in spite of", "hurricane"]],
    ]
  },
  {
    id:"c1_urban_sociology_gentrification", level:"C1", title:"La sociología urbana y la gentrificación", emoji:"🏙️", xp:92,
    description:"Analiza la gentrificación usando “should have” para crítica del pasado en inglés.",
    study: {
      vocab: [
        ["gentrification", "gentrificación"],
        ["displacement", "desplazamiento"],
        ["affordable housing", "vivienda asequible"],
        ["urban renewal", "renovación urbana"],
        ["rising rent", "alquiler creciente"],
        ["local community", "comunidad local"],
      ],
      grammar: [
        ["“Should have” para crítica o arrepentimiento del pasado", "“Should have” + participio expresa que algo debió haberse hecho de manera diferente en el pasado, usado para crítica o arrepentimiento.", "The city should have protected affordable housing. / Officials shouldn't have ignored the local community's concerns."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “desplazamiento” en inglés?",["displacement", "urban renewal", "rising rent", "local community"],0,"“Desplazamiento” es “displacement” en inglés."],
      ["mcq","¿Cómo se dice “vivienda asequible” en inglés?",["affordable housing", "rising rent", "gentrification", "displacement"],0,"“Vivienda asequible” es “affordable housing” en inglés."],
      ["fill","Completa: “The city ___ have protected affordable housing.”",["must", "could of", "would", "should"],3,"“Should have” + participio expresa crítica del pasado: “should have protected”."],
      ["translate","Traduce: “Las autoridades no deberían haber ignorado las preocupaciones de la comunidad local.”",["Officials shouldn't have ignored the local community's concerns.", "Officials should have ignored the local community's concerns.", "Officials shouldn't ignore the local community's concerns.", "Officials shouldn't have ignore the local community's concerns."],0,"“No deberían haber ignorado” se traduce con “shouldn't have ignored”, participio tras “have”."],
      ["arrange","Ordena: [rising / concerns / rent / residents]",["rising concerns residents rent", "rent residents rising concerns", "rent concerns rising residents", "rising rent concerns residents"],3,"Adjetivo + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis crítico sobre la gentrificación usando “should have” al menos dos veces.",[],["should have", "shouldn't have", "gentrification"]],
    ]
  },
  {
    id:"c2_epistemology_limits_knowledge", level:"C2", title:"La epistemología y los límites del conocimiento", emoji:"🧭", xp:100,
    description:"Analiza la epistemología usando la inversión “no sooner...than” en inglés.",
    study: {
      vocab: [
        ["epistemology", "epistemología"],
        ["justified true belief", "creencia verdadera justificada"],
        ["skepticism", "escepticismo"],
        ["certainty", "certeza"],
        ["a priori knowledge", "conocimiento a priori"],
        ["epistemic humility", "humildad epistémica"],
      ],
      grammar: [
        ["Inversión con “no sooner...than”", "“No sooner... than” expresa que una acción ocurrió inmediatamente después de otra; al colocarse al inicio, invierte el orden sujeto-verbo, muy formal.", "No sooner had philosophers proposed a theory of certainty than skeptics challenged it. / No sooner does one claim to know something than doubt arises."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “escepticismo” en inglés?",["certainty", "a priori knowledge", "skepticism", "epistemic humility"],2,"“Escepticismo” es “skepticism” en inglés."],
      ["mcq","¿Cómo se dice “humildad epistémica” en inglés?",["a priori knowledge", "epistemic humility", "epistemology", "certainty"],1,"“Humildad epistémica” es “epistemic humility” en inglés."],
      ["fill","Completa: “No sooner ___ philosophers proposed a theory than skeptics challenged it.”",["were", "had", "did", "have"],1,"“No sooner” al inicio invierte el orden con “had” + participio: “no sooner had philosophers proposed”."],
      ["translate","Traduce con inversión: “No sooner does one claim to know something than doubt arises.”",["En cuanto uno afirma saber algo, desaparece la duda.", "En cuanto uno afirmó saber algo, surge la duda.", "En cuanto uno afirma saber algo, surge la duda.", "Apenas uno afirma que sabe algo, surge la duda de eso."],2,"“No sooner... than” se traduce naturalmente con “en cuanto...” en español, sin inversión."],
      ["arrange","Ordena: [certainty / true / requires / knowledge]",["certainty knowledge true requires", "knowledge requires true certainty", "knowledge true requires certainty", "requires true certainty knowledge"],1,"Sustantivo + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un argumento epistemológico usando la inversión “no sooner...than” al menos una vez.",[],["no sooner", "than", "skepticism"]],
    ]
  },
  {
    id:"a1_birdwatching", level:"A1", title:"La ornitología y la observación de aves", emoji:"🦜", xp:38,
    description:"Aprende vocabulario de observación de aves y a usar pronombres posesivos en inglés.",
    study: {
      vocab: [
        ["binoculars", "binoculares"],
        ["nest", "nido"],
        ["feather", "pluma"],
        ["beak", "pico"],
        ["to fly", "volar"],
        ["wing", "ala"],
      ],
      grammar: [
        ["Pronombres posesivos (my/your/his/her/its/our/their)", "Los pronombres posesivos indican a quién pertenece algo y van antes del sustantivo.", "My binoculars are new. / The bird uses its wings to fly."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “nido” en inglés?",["binoculars", "nest", "to fly", "beak"],1,"“Nido” es “nest” en inglés."],
      ["mcq","¿Cómo se dice “pico” en inglés?",["nest", "beak", "wing", "binoculars"],1,"“Pico” es “beak” en inglés."],
      ["fill","Completa: “The bird uses ___ wings to fly.”",["its", "it's", "his", "their"],0,"“Its” (sin apóstrofe) es el posesivo de “it”: “its wings”."],
      ["translate","Traduce: “Mis binoculares son nuevos.”",["My binocular are new.", "My binoculars is new.", "My binoculars are new.", "Mine binoculars are new."],2,"“Mis” se traduce con “my” antes del sustantivo: “my binoculars”."],
      ["arrange","Ordena: [nest / their / is / tree / in / the]",["their nest is in the tree", "tree the their in nest is", "the is nest their tree in", "their tree in the nest is"],0,"Posesivo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, un ave que viste usando pronombres posesivos (my/its/their).",[],["its", "my", "wings"]],
    ]
  },
  {
    id:"a2_pottery_ceramics", level:"A2", title:"La cerámica y la alfarería", emoji:"🏺", xp:48,
    description:"Aprende vocabulario de cerámica y a usar “how much/how many” en inglés.",
    study: {
      vocab: [
        ["clay", "arcilla"],
        ["pottery wheel", "torno de alfarero"],
        ["kiln", "horno de cerámica"],
        ["to shape", "moldear"],
        ["glaze", "esmalte"],
        ["bowl", "cuenco"],
      ],
      grammar: [
        ["“How much/how many”", "“How much” se usa con sustantivos incontables, “how many” con sustantivos contables, para preguntar cantidad.", "How much clay do you need? / How many bowls did you make?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “horno de cerámica” en inglés?",["pottery wheel", "kiln", "bowl", "clay"],1,"“Horno de cerámica” es “kiln” en inglés."],
      ["mcq","¿Cómo se dice “esmalte” en inglés?",["pottery wheel", "glaze", "to shape", "clay"],1,"“Esmalte” es “glaze” en inglés."],
      ["fill","Completa: “___ clay do you need?”",["How", "How much of", "How many", "How much"],3,"“Clay” es incontable, así que se usa “how much”: “how much clay”."],
      ["translate","Traduce: “¿Cuántos cuencos hiciste?”",["How many bowls you did make?", "How many bowls did you make?", "How much bowls did you make?", "How many bowl did you make?"],1,"“Cuencos” es contable plural, así que se usa “how many”: “how many bowls”."],
      ["arrange","Ordena: [wheel / uses / potter / the / pottery / the]",["the potter uses the pottery wheel", "potter the wheel uses the pottery", "the the pottery wheel potter uses", "pottery uses the the potter wheel"],0,"Artículo + sustantivo + verbo + artículo + sustantivo compuesto."],
      ["speaking","Describe en inglés, en 40-60 palabras, una pieza de cerámica que te gustaría hacer usando “how much/how many”.",[],["how much", "how many", "clay"]],
    ]
  },
  {
    id:"b1_martial_arts_aikido", level:"B1", title:"Las artes marciales y el aikido", emoji:"🥋", xp:62,
    description:"Aprende vocabulario de artes marciales y a usar “both...and/either...or” en inglés.",
    study: {
      vocab: [
        ["martial arts", "artes marciales"],
        ["black belt", "cinturón negro"],
        ["technique", "técnica"],
        ["opponent's grip", "agarre del oponente"],
        ["balance", "equilibrio"],
        ["dojo", "dojo"],
      ],
      grammar: [
        ["“Both...and/either...or”", "“Both... and” conecta dos elementos afirmando ambos; “either... or” presenta dos opciones alternativas.", "Aikido requires both strength and balance. / You can practice either in the morning or in the evening."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cinturón negro” en inglés?",["black belt", "martial arts", "dojo", "technique"],0,"“Cinturón negro” es “black belt” en inglés."],
      ["mcq","¿Cómo se dice “equilibrio” en inglés?",["dojo", "black belt", "martial arts", "balance"],3,"“Equilibrio” es “balance” en inglés."],
      ["fill","Completa: “Aikido requires ___ strength and balance.”",["neither", "both", "and", "either"],1,"“Both... and” conecta dos elementos: “both strength and balance”."],
      ["translate","Traduce: “Puedes practicar en la mañana o en la tarde.”",["You can practice either in the morning or the evening in.", "You can practice either in the morning or in the evening.", "You can practice both in the morning or in the evening.", "You can practice either in the morning and in the evening."],1,"“O... o” se traduce con “either... or” en inglés."],
      ["arrange","Ordena: [technique / this / difficult / very / is]",["is technique this difficult very", "technique this is very difficult", "technique difficult is very this", "this technique is very difficult"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre practicar un arte marcial usando “both...and” o “either...or” al menos dos veces.",[],["both...and", "either...or", "aikido"]],
    ]
  },
  {
    id:"b2_mycology_mushrooms", level:"B2", title:"La micología y los hongos", emoji:"🍄", xp:84,
    description:"Habla de micología usando “as if/as though” en inglés.",
    study: {
      vocab: [
        ["mushroom", "hongo"],
        ["spore", "espora"],
        ["edible", "comestible"],
        ["poisonous", "venenoso"],
        ["fungus", "hongo/moho"],
        ["mycelium", "micelio"],
      ],
      grammar: [
        ["“As if/as though”", "“As if” y “as though” expresan una comparación hipotética, a menudo seguidas de pasado simple aunque se refieran al presente.", "This mushroom looks as if it were poisonous. / The mycelium spreads as though it had a mind of its own."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “espora” en inglés?",["mushroom", "mycelium", "poisonous", "spore"],3,"“Espora” es “spore” en inglés."],
      ["mcq","¿Cómo se dice “micelio” en inglés?",["spore", "mycelium", "edible", "poisonous"],1,"“Micelio” es “mycelium” en inglés."],
      ["fill","Completa: “This mushroom looks as if it ___ poisonous.”",["is", "be", "was", "were"],3,"Tras “as if” hipotético se prefiere “were” (no “was”) en registro formal, sin importar el sujeto."],
      ["translate","Traduce: “The mycelium spreads as though it had a mind of its own.”",["El micelio se extiende como si tiene mente propia.", "El micelio se extiende como si tuviera mente propia.", "El micelio se extiende como si tuviera una mente propio.", "El micelio se extiende como si tendría mente propia."],1,"“As though it had” se traduce con “como si tuviera”, subjuntivo imperfecto en español."],
      ["arrange","Ordena: [edible / this / is / mushroom / not]",["not edible this mushroom is", "this mushroom is not edible", "mushroom not is this edible", "is this not mushroom edible"],1,"Pronombre + sustantivo + verbo + negación + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un hongo interesante usando “as if/as though” al menos dos veces.",[],["as if", "as though", "mushroom"]],
    ]
  },
  {
    id:"c1_marine_biology_ocean_ecosystems", level:"C1", title:"La biología marina y los ecosistemas oceánicos", emoji:"🐠", xp:92,
    description:"Analiza los ecosistemas marinos usando “provided that/as long as” en inglés.",
    study: {
      vocab: [
        ["marine ecosystem", "ecosistema marino"],
        ["biodiversity", "biodiversidad"],
        ["food chain", "cadena alimenticia"],
        ["coral bleaching", "blanqueamiento de coral"],
        ["marine species", "especie marina"],
        ["ocean acidification", "acidificación oceánica"],
      ],
      grammar: [
        ["“Provided that/as long as” para condiciones", "“Provided that” y “as long as” expresan una condición necesaria, equivalentes a “only if”, comunes en registro formal.", "Marine biodiversity can recover, provided that pollution decreases. / Coral reefs survive as long as ocean temperatures remain stable."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “biodiversidad” en inglés?",["food chain", "marine ecosystem", "ocean acidification", "biodiversity"],3,"“Biodiversidad” es “biodiversity” en inglés."],
      ["mcq","¿Cómo se dice “blanqueamiento de coral” en inglés?",["marine ecosystem", "biodiversity", "ocean acidification", "coral bleaching"],3,"“Blanqueamiento de coral” es “coral bleaching” en inglés."],
      ["fill","Completa: “Coral reefs survive ___ ocean temperatures remain stable.”",["although", "despite", "unless", "as long as"],3,"“As long as” expresa una condición necesaria: “survive as long as... remain stable”."],
      ["translate","Traduce: “La biodiversidad marina puede recuperarse, siempre que la contaminación disminuya.”",["Marine biodiversity can recover, provided that pollution decreases.", "Marine biodiversity can recover, provided pollution decreases.", "Marine biodiversity can recovers, provided that pollution decreases.", "Marine biodiversity can recover, provided that pollution decrease."],0,"“Siempre que” se traduce con “provided that” + presente simple: “provided that... decreases”."],
      ["arrange","Ordena: [chain / disrupts / the / pollution / food]",["the pollution chain disrupts food", "pollution the food disrupts chain", "disrupts the chain food pollution", "pollution disrupts the food chain"],3,"Sujeto + verbo + artículo + sustantivo compuesto."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre los ecosistemas marinos usando “provided that” o “as long as” al menos dos veces.",[],["provided that", "as long as", "marine ecosystem"]],
    ]
  },
  {
    id:"c2_cartography_history_of_maps", level:"C2", title:"La cartografía y la historia de los mapas", emoji:"🗺️", xp:100,
    description:"Analiza la cartografía usando “were it not for/but for” en inglés.",
    study: {
      vocab: [
        ["cartographer", "cartógrafo"],
        ["projection", "proyección"],
        ["uncharted territory", "territorio inexplorado"],
        ["scale", "escala"],
        ["navigational instrument", "instrumento de navegación"],
        ["to chart", "trazar/cartografiar"],
      ],
      grammar: [
        ["“Were it not for/but for” para condición formal", "“Were it not for” y “but for” + sustantivo expresan una condición hipotética muy formal, equivalente a “if it weren't for”.", "Were it not for early cartographers, exploration would have been impossible. / But for satellite imagery, modern maps would be far less accurate."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cartógrafo” en inglés?",["cartographer", "uncharted territory", "scale", "navigational instrument"],0,"“Cartógrafo” es “cartographer” en inglés."],
      ["mcq","¿Cómo se dice “territorio inexplorado” en inglés?",["cartographer", "projection", "scale", "uncharted territory"],3,"“Territorio inexplorado” es “uncharted territory” en inglés."],
      ["fill","Completa: “___ it not for early cartographers, exploration would have been impossible.”",["Is", "Were", "Was", "Be"],1,"“Were it not for” es una estructura fija con inversión formal: “were it not for”."],
      ["translate","Traduce con estructura formal: “But for satellite imagery, modern maps would be far less accurate.”",["Sin ser por las imágenes satelitales, los mapas modernos serían mucho menos precisos.", "De no ser por las imágenes satelitales, los mapas modernos son mucho menos precisos.", "De no ser por las imágenes satelitales, los mapas modernos serían mucho menos precisos.", "De no ser las imágenes satelitales, los mapas modernos serían mucho menos precisos."],2,"“But for” se traduce con “de no ser por”, seguido de condicional en la consecuencia."],
      ["arrange","Ordena: [precise / this / very / projection / is]",["this projection is very precise", "projection is precise this very", "projection very this is precise", "is this projection precise very"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un argumento sobre la historia de la cartografía usando “were it not for” o “but for” al menos una vez.",[],["were it not for", "but for", "cartographer"]],
    ]
  },
  {
    id:"a1_tailoring_sewing", level:"A1", title:"La sastrería y la costura", emoji:"🧵", xp:38,
    description:"Aprende vocabulario de costura y a usar verbos reflexivos básicos en inglés.",
    study: {
      vocab: [
        ["needle", "aguja"],
        ["thread", "hilo"],
        ["to sew", "coser"],
        ["to try on", "probarse (ropa)"],
        ["button", "botón"],
        ["tailor", "sastre"],
      ],
      grammar: [
        ["Verbos reflexivos básicos", "En inglés, algunos verbos reflexivos usan “myself/yourself/himself/herself”, pero “try on” (probarse ropa) no necesita pronombre reflexivo, a diferencia del español.", "I try on the jacket. / She sews the button herself."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “aguja” en inglés?",["tailor", "button", "thread", "needle"],3,"“Aguja” es “needle” en inglés."],
      ["mcq","¿Cómo se dice “hilo” en inglés?",["thread", "to sew", "button", "needle"],0,"“Hilo” es “thread” en inglés."],
      ["fill","Completa: “She sews the button ___.”",["himself", "herself", "itself", "themself"],1,"“Herself” concuerda con el sujeto femenino “she”."],
      ["translate","Traduce: “Me pruebo la chaqueta.”",["I try on the jacket.", "I try on myself the jacket.", "I try myself on the jacket.", "I try the jacket on myself."],0,"“Try on” no lleva pronombre reflexivo en inglés, a diferencia del español “me pruebo”."],
      ["arrange","Ordena: [button / sews / tailor / the / the]",["the tailor sews the button", "the sews button tailor the", "sews tailor the the button", "the the button tailor sews"],0,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["writing","Describe en inglés, en 20-30 palabras, cómo te pruebas ropa nueva usando “try on”.",[],["try on", "needle", "thread"]],
    ]
  },
  {
    id:"a2_rock_climbing_mountaineering", level:"A2", title:"La escalada y el montañismo", emoji:"🧗", xp:48,
    description:"Aprende vocabulario de escalada y a usar el presente perfecto continuo en inglés.",
    study: {
      vocab: [
        ["rope", "cuerda"],
        ["harness", "arnés"],
        ["summit", "cima"],
        ["cliff", "acantilado"],
        ["to climb", "escalar"],
        ["grip", "agarre"],
      ],
      grammar: [
        ["Presente perfecto continuo (have/has been + gerundio)", "El presente perfecto continuo describe una acción que comenzó en el pasado y sigue ocurriendo, con énfasis en su duración.", "We have been climbing for three hours. / She has been training for the summit all year."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “arnés” en inglés?",["to climb", "harness", "summit", "rope"],1,"“Arnés” es “harness” en inglés."],
      ["mcq","¿Cómo se dice “acantilado” en inglés?",["cliff", "rope", "summit", "harness"],0,"“Acantilado” es “cliff” en inglés."],
      ["fill","Completa: “We have ___ climbing for three hours.”",["was", "being", "be", "been"],3,"El presente perfecto continuo usa “have been” + gerundio: “have been climbing”."],
      ["translate","Traduce: “Ella ha estado entrenando para la cima todo el año.”",["She has been train for the summit all year.", "She has training for the summit all year.", "She have been training for the summit all year.", "She has been training for the summit all year."],3,"“Ha estado entrenando” se traduce con presente perfecto continuo: “has been training”."],
      ["arrange","Ordena: [rope / new / a / needs / climber / the]",["the climber needs a new rope", "needs a new rope the climber", "a new climber rope needs the", "new a needs rope the climber"],0,"Artículo + sustantivo + verbo + artículo + adjetivo + sustantivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, una experiencia de escalada usando el presente perfecto continuo.",[],["have been", "climbing", "summit"]],
    ]
  },
  {
    id:"b1_coin_collecting_numismatics", level:"B1", title:"La numismática y el coleccionismo de monedas", emoji:"🪙", xp:62,
    description:"Aprende vocabulario de numismática y a usar “get used to/be used to” en inglés.",
    study: {
      vocab: [
        ["coin", "moneda"],
        ["mint", "casa de moneda"],
        ["rare coin", "moneda rara"],
        ["collection", "colección"],
        ["currency", "moneda/divisa"],
        ["to appraise", "tasar"],
      ],
      grammar: [
        ["“Get used to/be used to”", "“Be used to” + gerundio expresa un hábito ya establecido; “get used to” + gerundio expresa el proceso de acostumbrarse.", "I am used to appraising old coins. / It took time to get used to collecting rare currency."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “casa de moneda” en inglés?",["to appraise", "collection", "mint", "coin"],2,"“Casa de moneda” es “mint” en inglés."],
      ["mcq","¿Cómo se dice “tasar” en inglés?",["rare coin", "to appraise", "mint", "coin"],1,"“Tasar” es “to appraise” en inglés."],
      ["fill","Completa: “I am used to ___ old coins.”",["appraised", "appraisal", "appraise", "appraising"],3,"“Be used to” + gerundio: “used to appraising”."],
      ["translate","Traduce: “Tomó tiempo acostumbrarse a coleccionar divisas raras.”",["It took time to get used collecting rare currency.", "It take time to get used to collecting rare currency.", "It took time to get used to collecting rare currency.", "It took time to get used to collect rare currency."],2,"“Acostumbrarse a coleccionar” se traduce con “get used to collecting”, gerundio tras la preposición “to”."],
      ["arrange","Ordena: [collection / has / rare / a / she / coin]",["she has a rare coin collection", "has rare she a coin collection", "she rare a coin collection has", "collection rare a has she coin"],0,"Sujeto + verbo + artículo + adjetivo + sustantivo compuesto."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre coleccionar monedas usando “be used to/get used to” al menos dos veces.",[],["used to", "get used to", "coin collection"]],
    ]
  },
  {
    id:"b2_seismology_earthquakes", level:"B2", title:"La sismología y los terremotos", emoji:"🌋", xp:84,
    description:"Habla de sismología usando preguntas indirectas en inglés.",
    study: {
      vocab: [
        ["earthquake", "terremoto"],
        ["seismograph", "sismógrafo"],
        ["epicenter", "epicentro"],
        ["magnitude", "magnitud"],
        ["tectonic plate", "placa tectónica"],
        ["aftershock", "réplica"],
      ],
      grammar: [
        ["Preguntas indirectas", "Las preguntas indirectas (“I wonder if...”, “Do you know whether...”) mantienen el orden sujeto-verbo normal, sin inversión, a diferencia de las preguntas directas.", "I wonder if the epicenter was near the city. / Do you know how strong the magnitude was?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “epicentro” en inglés?",["epicenter", "earthquake", "tectonic plate", "aftershock"],0,"“Epicentro” es “epicenter” en inglés."],
      ["mcq","¿Cómo se dice “placa tectónica” en inglés?",["seismograph", "aftershock", "epicenter", "tectonic plate"],3,"“Placa tectónica” es “tectonic plate” en inglés."],
      ["fill","Completa: “Do you know how strong the magnitude ___?”",["was", "was it", "it was", "is it"],0,"Las preguntas indirectas mantienen el orden sujeto-verbo: “how strong the magnitude was”."],
      ["translate","Traduce con pregunta indirecta: “Me pregunto si el epicentro estuvo cerca de la ciudad.”",["I wonder that the epicenter was near the city.", "I wonder if was the epicenter near the city.", "I wonder if the epicenter is near the city.", "I wonder if the epicenter was near the city."],3,"La pregunta indirecta mantiene el orden normal: “if the epicenter was”, sin inversión."],
      ["arrange","Ordena: [aftershock / a / felt / we / small]",["felt small we a aftershock", "aftershock we felt small a", "aftershock a we small felt", "we felt a small aftershock"],3,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un terremoto usando al menos dos preguntas indirectas (“I wonder if...”, “do you know...”).",[],["I wonder if", "do you know", "earthquake"]],
    ]
  },
  {
    id:"c1_paleography_ancient_manuscripts", level:"C1", title:"La paleografía y los manuscritos antiguos", emoji:"📜", xp:92,
    description:"Analiza la paleografía usando pronombres relativos libres (whoever/whatever/whichever) en inglés.",
    study: {
      vocab: [
        ["manuscript", "manuscrito"],
        ["scribe", "escriba"],
        ["parchment", "pergamino"],
        ["illuminated text", "texto iluminado"],
        ["handwriting style", "estilo caligráfico"],
        ["to decipher", "descifrar"],
      ],
      grammar: [
        ["Pronombres relativos libres (whoever/whatever/whichever)", "“Whoever”, “whatever” y “whichever” funcionan como “la persona que”, “lo que sea que” y “el que sea que”, sin necesidad de antecedente.", "Whoever deciphers this manuscript will make history. / Whatever the scribe intended, the meaning is now lost."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “escriba” en inglés?",["scribe", "to decipher", "illuminated text", "handwriting style"],0,"“Escriba” es “scribe” en inglés."],
      ["mcq","¿Cómo se dice “pergamino” en inglés?",["handwriting style", "scribe", "to decipher", "parchment"],3,"“Pergamino” es “parchment” en inglés."],
      ["fill","Completa: “___ deciphers this manuscript will make history.”",["Whoever", "Whatever", "Whose", "Whichever"],0,"“Whoever” se refiere a una persona no especificada: “whoever deciphers”."],
      ["translate","Traduce con pronombre relativo libre: “Whatever the scribe intended, the meaning is now lost.”",["Sea lo que sea que el escriba haya querido decir, el significado ahora se ha perdido.", "Lo que el escriba quiso decir, el significado ahora se ha perdido.", "Sea lo que sea que el escriba haya querido decir, el significado ahora se pierde.", "Sea lo que el escriba haya querido decir, el significado ahora se ha perdido."],0,"“Whatever” se traduce con “sea lo que sea que”, subjuntivo en español."],
      ["arrange","Ordena: [illuminated / this / is / manuscript / beautifully]",["this illuminated beautifully manuscript is", "this manuscript is beautifully illuminated", "is beautifully illuminated manuscript this", "manuscript beautifully illuminated is this"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre un manuscrito antiguo usando “whoever/whatever/whichever” al menos dos veces.",[],["whoever", "whatever", "manuscript"]],
    ]
  },
  {
    id:"c2_global_supply_chain_logistics", level:"C2", title:"La logística y la cadena de suministro global", emoji:"📦", xp:100,
    description:"Analiza la cadena de suministro usando la inversión enfática “little did...” en inglés.",
    study: {
      vocab: [
        ["supply chain", "cadena de suministro"],
        ["bottleneck", "cuello de botella"],
        ["freight", "flete/carga"],
        ["warehouse", "almacén"],
        ["logistics disruption", "interrupción logística"],
        ["just-in-time delivery", "entrega justo a tiempo"],
      ],
      grammar: [
        ["Inversión enfática con “little did...”", "“Little did” al inicio de la oración invierte el orden sujeto-verbo para enfatizar que algo fue una sorpresa o no se anticipó.", "Little did companies know how fragile the supply chain was. / Little did anyone expect such a severe logistics disruption."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cuello de botella” en inglés?",["freight", "just-in-time delivery", "warehouse", "bottleneck"],3,"“Cuello de botella” es “bottleneck” en inglés."],
      ["mcq","¿Cómo se dice “entrega justo a tiempo” en inglés?",["supply chain", "bottleneck", "just-in-time delivery", "freight"],2,"“Entrega justo a tiempo” es “just-in-time delivery” en inglés."],
      ["fill","Completa: “Little ___ companies know how fragile the supply chain was.”",["did", "does", "do", "had"],0,"“Little did” al inicio invierte con “did” + sujeto + infinitivo: “little did companies know”."],
      ["translate","Traduce con inversión enfática: “Little did anyone expect such a severe logistics disruption.”",["Alguien esperaba una interrupción logística tan grave.", "Nadie esperaba una interrupción logística tan grave.", "Nadie esperó una interrupción logística tan severa.", "Poco esperaba nadie una interrupción logística tan grave."],1,"“Little did anyone expect” se traduce naturalmente con “nadie esperaba” en español, sin inversión literal."],
      ["arrange","Ordena: [warehouse / goods / the / stores]",["stores goods the warehouse", "warehouse goods stores the", "the warehouse stores goods", "warehouse goods the stores"],2,"Artículo + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis sobre la cadena de suministro global usando “little did...” al menos una vez.",[],["little did", "supply chain", "bottleneck"]],
    ]
  },
  {
    id:"a1_ham_radio_telecommunications", level:"A1", title:"La radioafición y las telecomunicaciones", emoji:"📻", xp:38,
    description:"Aprende vocabulario de radioafición y a usar “there is/there are” en inglés.",
    study: {
      vocab: [
        ["radio signal", "señal de radio"],
        ["antenna", "antena"],
        ["frequency", "frecuencia"],
        ["microphone", "micrófono"],
        ["to transmit", "transmitir"],
        ["static", "interferencia"],
      ],
      grammar: [
        ["“There is/there are”", "“There is” se usa con sustantivos singulares o incontables, “there are” con sustantivos plurales, para indicar existencia.", "There is a lot of static on this frequency. / There are two antennas on the roof."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “antena” en inglés?",["static", "microphone", "antenna", "radio signal"],2,"“Antena” es “antenna” en inglés."],
      ["mcq","¿Cómo se dice “interferencia” en inglés?",["frequency", "to transmit", "static", "radio signal"],2,"“Interferencia” es “static” en inglés."],
      ["fill","Completa: “___ two antennas on the roof.”",["There are", "It is", "There is", "They are"],0,"“Antennas” es plural, así que se usa “there are”."],
      ["translate","Traduce: “Hay mucha interferencia en esta frecuencia.”",["It has a lot of static on this frequency.", "There is a lot of statics on this frequency.", "There is a lot of static on this frequency.", "There are a lot of static on this frequency."],2,"“Static” es incontable, así que se usa “there is”: “there is a lot of static”."],
      ["arrange","Ordena: [signal / weak / a / is / this]",["weak this is signal", "this weak signal is", "this signal is weak", "this signal weak is"],2,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Describe en inglés, en 20-30 palabras, un equipo de radioafición usando “there is/there are”.",[],["there is", "there are", "antenna"]],
    ]
  },
  {
    id:"a2_astrology_horoscopes", level:"A2", title:"La astrología y los horóscopos", emoji:"🔮", xp:48,
    description:"Aprende vocabulario de astrología y a usar “will” para predicciones en inglés.",
    study: {
      vocab: [
        ["horoscope", "horóscopo"],
        ["zodiac sign", "signo zodiacal"],
        ["fortune teller", "adivino/a"],
        ["star chart", "carta astral"],
        ["prediction", "predicción"],
        ["destiny", "destino"],
      ],
      grammar: [
        ["“Will” para predicciones", "“Will” + infinitivo se usa para hacer predicciones sobre el futuro basadas en opinión o creencia, no en evidencia presente.", "This horoscope says you will have a good week. / The fortune teller thinks she will find love soon."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “signo zodiacal” en inglés?",["star chart", "prediction", "destiny", "zodiac sign"],3,"“Signo zodiacal” es “zodiac sign” en inglés."],
      ["mcq","¿Cómo se dice “destino” en inglés?",["zodiac sign", "fortune teller", "destiny", "star chart"],2,"“Destino” es “destiny” en inglés."],
      ["fill","Completa: “This horoscope says you ___ have a good week.”",["are", "would", "going to", "will"],3,"“Will” + infinitivo expresa predicción: “you will have”."],
      ["translate","Traduce: “The fortune teller thinks she will find love soon.”",["El adivino piensa que ella encuentra el amor pronto.", "El adivino piensa que ella encontrará el amor pronto.", "El adivino piensa que ella encontraría el amor pronto.", "El adivino piensa que ella va a encontrar el amor pronto ya."],1,"“Will find” se traduce con futuro simple: “encontrará”."],
      ["arrange","Ordena: [chart / star / interesting / is / this]",["this star chart is interesting", "this star is chart interesting", "chart star interesting this is", "star this interesting is chart"],0,"Pronombre + sustantivo + sustantivo + verbo + adjetivo."],
      ["speaking","Describe en inglés, en 40-60 palabras, tu horóscopo de esta semana usando “will” para predicciones.",[],["will", "horoscope", "prediction"]],
    ]
  },
  {
    id:"b1_skydiving_extreme_sports", level:"B1", title:"El paracaidismo y los deportes extremos", emoji:"🪂", xp:62,
    description:"Aprende vocabulario de deportes extremos y a usar “manage to/succeed in” en inglés.",
    study: {
      vocab: [
        ["parachute", "paracaídas"],
        ["free fall", "caída libre"],
        ["adrenaline rush", "subidón de adrenalina"],
        ["to jump", "saltar"],
        ["bungee jumping", "salto en bungee"],
        ["extreme sport", "deporte extremo"],
      ],
      grammar: [
        ["“Manage to/succeed in”", "“Manage to” + infinitivo y “succeed in” + gerundio expresan que alguien logró hacer algo difícil.", "She managed to open the parachute in time. / He succeeded in overcoming his fear of heights."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “caída libre” en inglés?",["free fall", "to jump", "bungee jumping", "adrenaline rush"],0,"“Caída libre” es “free fall” en inglés."],
      ["mcq","¿Cómo se dice “subidón de adrenalina” en inglés?",["bungee jumping", "to jump", "adrenaline rush", "extreme sport"],2,"“Subidón de adrenalina” es “adrenaline rush” en inglés."],
      ["fill","Completa: “She managed ___ open the parachute in time.”",["to", "in", "of", "for"],0,"“Manage to” + infinitivo: “managed to open”."],
      ["translate","Traduce: “Él logró superar su miedo a las alturas.”",["He succeeded in overcome his fear of heights.", "He succeeded in overcoming his fear of heights.", "He managed in overcoming his fear of heights.", "He succeeded to overcome his fear of heights."],1,"“Succeed in” + gerundio: “succeeded in overcoming”."],
      ["arrange","Ordena: [thrilling / sport / this / very / is]",["very this thrilling sport is", "this sport is very thrilling", "is very thrilling this sport", "this thrilling sport very is"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 45-65 palabras, sobre un deporte extremo usando “manage to” o “succeed in” al menos dos veces.",[],["manage to", "succeed in", "parachute"]],
    ]
  },
  {
    id:"b2_entomology_insects", level:"B2", title:"La entomología y los insectos", emoji:"🐛", xp:84,
    description:"Habla de entomología usando “in addition to/as well as” en inglés.",
    study: {
      vocab: [
        ["insect", "insecto"],
        ["exoskeleton", "exoesqueleto"],
        ["metamorphosis", "metamorfosis"],
        ["antenna (insect)", "antena (insecto)"],
        ["larva", "larva"],
        ["pollinator", "polinizador"],
      ],
      grammar: [
        ["“In addition to/as well as”", "“In addition to” y “as well as” + sustantivo o gerundio añaden información extra, similares a “besides”.", "In addition to pollinating flowers, bees produce honey. / Beetles, as well as butterflies, undergo metamorphosis."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “exoesqueleto” en inglés?",["pollinator", "exoskeleton", "antenna (insect)", "insect"],1,"“Exoesqueleto” es “exoskeleton” en inglés."],
      ["mcq","¿Cómo se dice “metamorfosis” en inglés?",["exoskeleton", "antenna (insect)", "metamorphosis", "pollinator"],2,"“Metamorfosis” es “metamorphosis” en inglés."],
      ["fill","Completa: “___ pollinating flowers, bees produce honey.”",["Besides that", "As well", "Add to", "In addition to"],3,"“In addition to” + gerundio introduce información extra: “in addition to pollinating”."],
      ["translate","Traduce: “Beetles, as well as butterflies, undergo metamorphosis.”",["Los escarabajos, así como las mariposas, pasa por la metamorfosis.", "Los escarabajos así como las mariposas pasan la metamorfosis.", "Los escarabajos, además las mariposas, pasan por la metamorfosis.", "Los escarabajos, así como las mariposas, pasan por la metamorfosis."],3,"“As well as” se traduce con “así como” en este contexto."],
      ["arrange","Ordena: [pollinators / important / bees / are]",["bees are important pollinators", "bees pollinators are important", "are important bees pollinators", "pollinators important are bees"],0,"Sujeto + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, sobre los insectos usando “in addition to” o “as well as” al menos dos veces.",[],["in addition to", "as well as", "insect"]],
    ]
  },
  {
    id:"c1_intellectual_property_law", level:"C1", title:"El derecho de propiedad intelectual", emoji:"©️", xp:92,
    description:"Analiza la propiedad intelectual usando “notwithstanding” en inglés.",
    study: {
      vocab: [
        ["copyright", "derecho de autor"],
        ["patent", "patente"],
        ["trademark", "marca registrada"],
        ["infringement", "infracción"],
        ["licensing agreement", "acuerdo de licencia"],
        ["intellectual property", "propiedad intelectual"],
      ],
      grammar: [
        ["“Notwithstanding” para concesión legal formal", "“Notwithstanding” + sustantivo (registro muy formal/legal) expresa una concesión, equivalente a “despite” pero típico de textos jurídicos.", "Notwithstanding the patent, the company continued production. / The trademark remains valid, notwithstanding the dispute."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “infracción” en inglés?",["licensing agreement", "infringement", "intellectual property", "copyright"],1,"“Infracción” es “infringement” en inglés."],
      ["mcq","¿Cómo se dice “acuerdo de licencia” en inglés?",["copyright", "intellectual property", "patent", "licensing agreement"],3,"“Acuerdo de licencia” es “licensing agreement” en inglés."],
      ["fill","Completa: “___ the patent, the company continued production.”",["Despite of", "Notwithstanding", "Although", "Because of"],1,"“Notwithstanding” + sustantivo (sin preposición adicional): “notwithstanding the patent”."],
      ["translate","Traduce con registro legal formal: “The trademark remains valid, notwithstanding the dispute.”",["La marca registrada seguía siendo válida, a pesar de la disputa.", "La marca registrada sigue siendo válida, a pesar la disputa.", "La marca registrada sigue válida, a pesar de la disputa por eso.", "La marca registrada sigue siendo válida, a pesar de la disputa."],3,"“Notwithstanding” en este contexto formal se traduce con “a pesar de”."],
      ["arrange","Ordena: [infringement / claimed / company / the]",["infringement claimed the company", "the company claimed infringement", "the infringement claimed company", "infringement company claimed the"],1,"Artículo + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis sobre propiedad intelectual usando “notwithstanding” al menos dos veces.",[],["notwithstanding", "patent", "copyright"]],
    ]
  },
  {
    id:"c2_geology_minerals", level:"C2", title:"La geología y los minerales", emoji:"💎", xp:100,
    description:"Analiza la geología usando “far from + gerundio” en inglés.",
    study: {
      vocab: [
        ["mineral deposit", "yacimiento mineral"],
        ["crystalline structure", "estructura cristalina"],
        ["sedimentary rock", "roca sedimentaria"],
        ["tectonic shift", "desplazamiento tectónico"],
        ["igneous rock", "roca ígnea"],
        ["mineral composition", "composición mineral"],
      ],
      grammar: [
        ["“Far from + gerundio” para concesión enfática", "“Far from” + gerundio expresa que algo es completamente lo contrario de lo esperado, un recurso enfático de registro formal.", "Far from being stable, this rock formation shifts constantly. / Far from settling the debate, the discovery raised new questions."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “estructura cristalina” en inglés?",["sedimentary rock", "mineral composition", "crystalline structure", "igneous rock"],2,"“Estructura cristalina” es “crystalline structure” en inglés."],
      ["mcq","¿Cómo se dice “roca sedimentaria” en inglés?",["crystalline structure", "tectonic shift", "sedimentary rock", "mineral deposit"],2,"“Roca sedimentaria” es “sedimentary rock” en inglés."],
      ["fill","Completa: “Far from ___ stable, this rock formation shifts constantly.”",["being", "is", "be", "to be"],0,"“Far from” + gerundio: “far from being stable”."],
      ["translate","Traduce con estructura enfática: “Far from settling the debate, the discovery raised new questions.”",["Lejos de resolver el debate, el descubrimiento plantea nuevas preguntas.", "Lejos de resolver el debate, el descubrimiento planteó viejas preguntas.", "Lejos resolver el debate, el descubrimiento planteó nuevas preguntas.", "Lejos de resolver el debate, el descubrimiento planteó nuevas preguntas."],3,"“Far from settling” se traduce con “lejos de resolver”, gerundio tras la preposición “de”."],
      ["arrange","Ordena: [rare / this / mineral / very / is]",["rare very is mineral this", "this mineral is very rare", "mineral very rare is this", "this rare mineral very is"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en inglés, en 55-75 palabras, un análisis sobre geología usando “far from + gerundio” al menos una vez.",[],["far from", "mineral deposit", "sedimentary rock"]],
    ]
  },
];
