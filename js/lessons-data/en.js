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
];
