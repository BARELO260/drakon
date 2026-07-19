/* ═══════════════════════════════════════════════════════════
   js/lessons-data/it.js — Banco de lecciones: ITALIANO (IT)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.IT = [
  {
    id:"it_a1_greetings", level:"A1", title:"Saluti e presentazioni", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en italiano.",
    study: {
      vocab: [
        ["Buongiorno / Buonasera", "Good morning / Good evening"],
        ["Ciao / Arrivederci", "Hi / Goodbye", "\"Ciao\" es informal, sirve para saludar y despedirse."],
        ["Piacere!", "Nice to meet you!"],
        ["Mi chiamo...", "My name is..."],
        ["Come stai?", "How are you?", "Respuesta: \"Sto bene, grazie\""]
      ],
      grammar: [
        ["El verbo \"essere\" (ser/estar)", "Io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.", "Io sono insegnante. Lei è di Roma."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en italiano?", ["Buongiorno","Buonasera","Buonanotte","Arrivederci"], 0, "\"Buongiorno\" se usa desde la mañana hasta media tarde. \"Buonasera\" se usa al caer la tarde/noche.", "☀️ Son las 9 de la mañana y llegas a la oficina."],
      ["mcq", "Alguien te dice \"Come stai?\". ¿Cuál es una respuesta común?", ["Sto bene, grazie","Mi chiamo Paolo","Ho vent'anni","A presto"], 0, "\"Sto bene, grazie\" es la respuesta estándar. También puedes decir \"Bene, e tu?\""],
      ["fill", "Completa: \"Ciao! Mi ___ Anna. ___ di Roma.\"", ["chiamo / Vengo","chiama / Vieni","chiamo / Sono","chiami / Vengo"], 0, "\"Mi chiamo Anna\" (me llamo) y \"Vengo di Roma\" (vengo de). \"Chiamarsi\" y \"venire\" son verbos distintos, ambos en primera persona."],
      ["translate", "Traduce al italiano: \"Nice to meet you!\"", ["Piacere!","Come ti chiami?","Di dove sei?","A domani!"], 0, "\"Piacere!\" es la expresión estándar al conocer a alguien nuevo."],
      ["mcq", "¿Qué significa \"Come ti chiami?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"Come ti chiami?\" = What's your name? Respuesta: \"Mi chiamo ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena: [sono / un / insegnante / io]", ["Io sono un insegnante","Un sono io insegnante","Insegnante io sono un","Sono io un insegnante"], 0, "En italiano el orden es: Sujeto (opcional) + Verbo + Complemento. → \"Io sono un insegnante.\" (Soy profesor.)"],
    ]
  },
  {
    id:"it_a1_numbers_colors", level:"A1", title:"Numeri e colori", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 20 y colores básicos en italiano.",
    study: {
      vocab: [
        ["uno, due, tre... venti", "one, two, three... twenty"],
        ["rosso, blu, verde, giallo", "red, blue, green, yellow"],
        ["bianco, nero", "white, black"],
        ["Ho ___ anni", "I am ___ years old", "Se usa el verbo \"avere\" (tener), no \"essere\"."]
      ],
      grammar: [
        ["Concordancia de género en los colores", "Los colores concuerdan en género y número con el sustantivo que describen.", "una macchina rossa / un fiore rosso."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en italiano?", ["Quindici","Cinquanta","Cinque","Sedici"], 0, "15 = quindici. Ojo: 50 = cinquanta, 5 = cinque."],
      ["mcq", "¿Qué color es \"rosso\"?", ["Red","Blue","Green","Yellow"], 0, "Rosso = red. Otros colores: blu (blue), verde (green), giallo (yellow), bianco (white), nero (black).", "🍎 Piensa en una manzana madura."],
      ["fill", "Completa: \"Ho ___ anni.\" (I am 20 years old)", ["vent'","venti","ventuno","dieci"], 0, "\"Ho vent'anni\" = I am twenty years old. En italiano la edad se expresa con el verbo \"avere\" (tener), no \"essere\" (ser)."],
      ["translate", "Traduce: \"The sky is blue.\"", ["Il cielo è blu","Il cielo è verde","La casa è blu","Il mare è blu"], 0, "\"Il cielo è blu.\" — cielo = sky, blu = blue."],
      ["mcq", "¿Cómo se dice \"black\" en italiano?", ["Nero","Bianco","Grigio","Marrone"], 0, "Nero = black. Bianco = white, grigio = gray, marrone = brown."],
      ["arrange", "Ordena: [due / ho / gatti]", ["Ho due gatti","Due ho gatti","Gatti ho due","Due gatti ho"], 0, "\"Ho due gatti.\" = I have two cats. Verbo (ho) + cantidad (due) + sustantivo (gatti)."],
    ]
  },
  {
    id:"it_a1_essere_avere", level:"A1", title:"Essere e avere", emoji:"🧩", xp:35,
    description:"Los dos verbos más importantes del italiano: ser/estar y tener.",
    study: {
      vocab: [
        ["essere", "to be"],
        ["avere", "to have", "También se usa para la edad."],
        ["studente, insegnante", "student, teacher"]
      ],
      grammar: [
        ["Essere vs. Avere", "Los dos verbos más importantes del italiano. La edad se expresa con \"avere\" (como en español).", "Sono studente. / Ho venticinque anni."]
      ]
    },
    ex:[
      ["mcq", "\"Io ___ studente.\" (I am a student)", ["sono","ho","sei","è"], 0, "\"Essere\" (ser/estar) en primera persona es \"sono\": \"Io sono studente.\""],
      ["mcq", "\"Lei ___ venticinque anni.\" (She is 25 years old)", ["ha","è","ho","hai"], 0, "La edad en italiano se expresa con \"avere\": \"Lei ha venticinque anni.\" (literalmente: ella tiene 25 años)."],
      ["fill", "Completa: \"Noi ___ italiani.\" (We are Italian)", ["siamo","abbiamo","siete","sono"], 0, "\"Essere\" en primera persona plural es \"siamo\": \"Noi siamo italiani.\""],
      ["translate", "Traduce: \"They have a car.\"", ["Loro hanno una macchina","Loro sono una macchina","Loro ha una macchina","Lei hanno una macchina"], 0, "\"Avere\" en tercera persona plural es \"hanno\": \"Loro hanno una macchina.\""],
      ["mcq", "¿Qué verbo se usa para la edad en italiano?", ["Avere (tener)","Essere (ser/estar)","Andare (ir)","Fare (hacer)"], 0, "En italiano se dice literalmente \"tener X años\" (avere X anni), igual que en español."],
      ["arrange", "Ordena: [molto / sono / felice / io]", ["Io sono molto felice","Molto io sono felice","Felice molto io sono","Io molto sono felice"], 0, "\"Io sono molto felice.\" = I am very happy. Sujeto (io) + verbo (sono) + intensificador (molto) + adjetivo (felice)."],
    ]
  },
  {
    id:"it_a1_family_home", level:"A1", title:"Famiglia e casa", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en italiano.",
    study: {
      vocab: [
        ["padre, madre", "father, mother"],
        ["fratello, sorella", "brother, sister"],
        ["figlio, figlia", "son, daughter"],
        ["camera da letto, cucina, soggiorno", "bedroom, kitchen, living room"],
        ["bagno, giardino", "bathroom, garden"]
      ],
      grammar: [
        ["Adjetivos posesivos", "Mio/mia, tuo/tua, suo/sua concuerdan en género y número con lo que poseen (no con el poseedor).", "Mio padre (masc.) / Mia madre (fem.) / I miei genitori (plural)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" en italiano?", ["Madre","Padre","Sorella","Nonna"], 0, "Madre = mother. Padre = father, sorella = sister, nonna = grandmother."],
      ["mcq", "¿Qué habitación es \"la cucina\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "La cucina = kitchen. La camera da letto = bedroom, il bagno = bathroom, il giardino = garden."],
      ["fill", "Completa: \"___ fratello vive a Roma.\" (My brother)", ["Mio","Mia","Miei","Suo"], 0, "\"Mio fratello\" = my brother. \"Fratello\" es masculino, por eso \"mio\" (no \"mia\")."],
      ["translate", "Traduce: \"My family is big.\"", ["La mia famiglia è grande","La mia famiglia è piccola","Le mie famiglie sono grandi","La sua famiglia è grande"], 0, "\"La mia famiglia è grande.\" — \"famiglia\" es femenino singular, por eso \"la mia\"."],
      ["mcq", "¿Cómo se dice \"grandparents\" en italiano?", ["Nonni","Genitori","Zii","Cugini"], 0, "Nonni = grandparents. Genitori = parents, zii = aunts/uncles, cugini = cousins."],
      ["arrange", "Ordena: [tre / ho / fratelli]", ["Ho tre fratelli","Tre ho fratelli","Fratelli ho tre","Tre fratelli ho"], 0, "\"Ho tre fratelli.\" = I have three brothers. Verbo + cantidad + sustantivo."],
    ]
  },
  {
    id:"it_a1_food_restaurant", level:"A1", title:"Cibo e ristoranti", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en italiano.",
    study: {
      vocab: [
        ["il menù", "the menu"],
        ["Vorrei...", "I would like...", "Forma cortés de pedir."],
        ["il conto, per favore", "the bill, please"],
        ["l'acqua, il pane", "water, bread"],
        ["delizioso/a", "delicious"]
      ],
      grammar: [
        ["\"Vorrei\" para pedir con cortesía", "\"Vorrei\" (condicional de volere) es más educado que \"voglio\" al pedir algo.", "Vorrei un caffè, per favore. (Más cortés que \"Voglio un caffè\".)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en italiano?", ["Il menù","Il conto","Il piatto","Il tavolo"], 0, "Il menù = the menu. Il conto = the bill, il piatto = the dish, il tavolo = the table."],
      ["fill", "Completa: \"___ un caffè, per favore.\" (I would like)", ["Vorrei","Voglio","Volevo","Vorrò"], 0, "\"Vorrei\" es la forma más cortés para pedir algo en un restaurante."],
      ["mcq", "¿Qué significa \"il conto, per favore\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"Il conto, per favore\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This dish is delicious.\"", ["Questo piatto è delizioso","Questo piatto è cattivo","Questa piatto è delizioso","Delizioso è questo piatto"], 0, "\"Questo piatto è delizioso.\" — \"piatto\" es masculino, por eso \"delizioso\" y \"questo\"."],
      ["mcq", "¿Cómo se dice \"waiter\" en italiano?", ["Cameriere","Cuoco","Cliente","Proprietario"], 0, "Cameriere = waiter (cameriera para mujer). Cuoco = cook, cliente = customer."],
      ["arrange", "Ordena: [d'acqua / vorrei / un / bicchiere]", ["Vorrei un bicchiere d'acqua","Un bicchiere vorrei d'acqua","D'acqua vorrei un bicchiere","Bicchiere d'acqua vorrei un"], 0, "\"Vorrei un bicchiere d'acqua.\" = I would like a glass of water."],
    ]
  },
  {
    id:"it_a1_daily_routine", level:"A1", title:"Routine quotidiana", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en italiano.",
    study: {
      vocab: [
        ["svegliarsi", "to wake up"],
        ["alzarsi", "to get up"],
        ["fare colazione / pranzare / cenare", "to have breakfast/lunch/dinner"],
        ["andare al lavoro", "to go to work"],
        ["ogni giorno", "every day"]
      ],
      grammar: [
        ["Verbos reflexivos en presente", "Verbos como \"svegliarsi\" y \"alzarsi\" llevan un pronombre reflexivo (mi, ti, si) que cambia según la persona.", "Io mi sveglio alle 7. / Lei si alza presto."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["Mi sveglio alle 7","Ti svegli alle 7","Si sveglia alle 7","Svegliarsi alle 7"], 0, "\"Mi sveglio alle 7.\" — primera persona del verbo reflexivo \"svegliarsi\": mi + sveglio."],
      ["fill", "Completa: \"Lei ___ alle 8.\" (gets up)", ["si alza","mi alzo","ti alzi","alzare"], 0, "\"Si alza\" = tercera persona de \"alzarsi\" (si + alza)."],
      ["mcq", "¿Qué significa \"fare colazione\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "Fare colazione = to have breakfast. Pranzare = to have lunch, cenare = to have dinner."],
      ["translate", "Traduce: \"I go to work at 9.\"", ["Vado al lavoro alle 9","Vado a lavorare le 9","Va al lavoro alle 9","Vado al lavoro le 9"], 0, "\"Vado al lavoro alle 9.\" — \"andare al + lugar\" y \"alle + hora\" para indicar el momento."],
      ["mcq", "¿Cómo se dice \"every day\" en italiano?", ["Ogni giorno","Un giorno","Qualche giorno","L'altro giorno"], 0, "Ogni giorno = every day. Un giorno = one day."],
      ["arrange", "Ordena: [dieci / dormo / alle]", ["Dormo alle dieci","Alle dieci dormo","Dieci dormo alle","Alle dormo dieci"], 0, "\"Dormo alle dieci.\" = I sleep at ten. Verbo + preposición + hora."],
    ]
  },
  {
    id:"it_a2_shopping_clothes", level:"A2", title:"Fare shopping e i vestiti", emoji:"🛍️", xp:40,
    description:"Aprende a comprar ropa, preguntar precios y tallas en italiano.",
    study: {
      vocab: [
        ["la camicia, la maglietta", "shirt, t-shirt"],
        ["i pantaloni, la gonna", "pants, skirt"],
        ["le scarpe", "shoes"],
        ["Quanto costa?", "How much does it cost?"],
        ["la taglia", "size"],
        ["provare (qualcosa)", "to try on (something)"]
      ],
      grammar: [
        ["Comparativo: più/meno...di", "Se usan para comparar dos cosas.", "Questa camicia è più cara di quella."],
        ["El verbo \"stare\" con i vestiti", "\"Stare\" describe cómo le queda la ropa a alguien.", "Queste scarpe mi stanno strette (piccole)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"How much does it cost?\" en italiano?", ["Quanto costa?","Che taglia hai?","Dov'è?","Ti piace?"], 0, "\"Quanto costa?\" se usa para preguntar el precio de algo."],
      ["fill", "Completa: \"Questa gonna è ___ cara ___ quella.\" (more...than)", ["più / di","meno / di","così / come","molto / di"], 0, "\"Più...di\" se usa para comparaciones de superioridad: \"più cara di\" = more expensive than."],
      ["mcq", "¿Qué significa \"provare un vestito\"?", ["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], 0, "\"Provare\" = to try on. Se usa antes de comprar, para ver si la talla es correcta."],
      ["translate", "Traduce al italiano: \"These shoes are too small for me.\"", ["Queste scarpe mi stanno strette","Queste scarpe sono grandi","Questi vestiti sono cari","Queste scarpe costano molto"], 0, "\"Mi stanno strette\" describe cómo le sienta la prenda a la persona."],
      ["mcq", "¿Cómo se dice \"shirt\" en italiano?", ["Camicia","Pantaloni","Gonna","Scarpa"], 0, "Camicia = shirt. Pantaloni = pants, gonna = skirt, scarpa = shoe."],
      ["arrange", "Ordena: [è / questa / la / mia / taglia]", ["Questa è la mia taglia","La mia taglia è questa","È questa la mia taglia","Taglia la è questa mia"], 0, "\"Questa è la mia taglia.\" = This is my size."],
    ]
  },
  {
    id:"it_a2_weather_seasons", level:"A2", title:"Il tempo e le stagioni", emoji:"🌦️", xp:40,
    description:"Habla del clima y las estaciones del año en italiano.",
    study: {
      vocab: [
        ["fa caldo / freddo", "it's hot / cold"],
        ["piove, nevica", "it rains, it snows"],
        ["l'estate, l'inverno, la primavera, l'autunno", "summer, winter, spring, autumn"],
        ["è nuvoloso / soleggiato", "it's cloudy / sunny"]
      ],
      grammar: [
        ["Verbi impersonali del tempo", "\"Fare\", \"piovere\" y \"nevicare\" se usan en tercera persona sin sujeto explícito.", "Fa molto caldo oggi. Piove."],
        ["Stare + gerundio (presente progressivo)", "Describe una acción en curso en este momento.", "Sta piovendo proprio adesso."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"it's cold\" en italiano?", ["Fa freddo","Fa caldo","È soleggiato","Piove"], 0, "Fa freddo = it's cold. Fa caldo = it's hot."],
      ["fill", "Completa: \"In inverno, a volte ___.\" (it snows)", ["nevica","piove","fa caldo","è soleggiato"], 0, "Nevica = it snows, del verbo \"nevicare\", típico del invierno."],
      ["mcq", "¿Qué estación sigue a la primavera (la primavera)?", ["L'estate","L'inverno","L'autunno","La primavera"], 0, "El orden de las estaciones es: la primavera, l'estate, l'autunno, l'inverno."],
      ["translate", "Traduce al italiano: \"It's raining right now.\"", ["Sta piovendo proprio adesso","Pioverà domani","Fa freddo adesso","Ha piovuto ieri"], 0, "\"Stare + gerundio\" (presente progresivo) describe una acción en curso ahora mismo."],
      ["mcq", "¿Cómo se dice \"sunny\" en italiano?", ["Soleggiato","Nuvoloso","Piovoso","Nevoso"], 0, "Soleggiato = sunny. Nuvoloso = cloudy, piovoso = rainy, nevoso = snowy."],
      ["arrange", "Ordena: [oggi / molto / caldo / fa]", ["Fa molto caldo oggi","Oggi fa molto caldo","Caldo fa molto oggi","Molto fa caldo oggi"], 0, "\"Fa molto caldo oggi.\" = It's very hot today."],
    ]
  },
  {
    id:"it_a2_passato_prossimo_ieri", level:"A2", title:"Ieri: il passato prossimo", emoji:"📅", xp:45,
    description:"Aprende a hablar de acciones terminadas en el pasado con el passato prossimo.",
    study: {
      vocab: [
        ["ieri, ieri sera, la settimana scorsa", "yesterday, last night, last week"],
        ["ho mangiato, hai mangiato, ha mangiato", "I ate, you ate, he/she ate"],
        ["sono andato/a, sei andato/a", "I went, you went"],
        ["Cosa hai fatto?", "What did you do?"]
      ],
      grammar: [
        ["Passato prossimo con \"avere\"", "Sujeto + avere (conjugado) + participio pasado.", "Ho mangiato una mela."],
        ["Passato prossimo con \"essere\"", "Los verbos de movimiento (andare, venire...) usan \"essere\"; el participio concuerda con el sujeto.", "Sono andato/a al cinema ieri."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I ate\" en italiano?", ["Ho mangiato","Mangio","Mangerò","Mangiando"], 0, "Ho mangiato = I ate (passato prossimo). Mangio = I eat (presente)."],
      ["fill", "Completa: \"Ieri sono ___ al cinema con i miei amici.\" (went)", ["andato/a","vado","andrò","andavo"], 0, "\"Andare\" es un verbo de movimiento, por eso el passato prossimo se forma con \"essere\": sono + andato/a."],
      ["mcq", "¿Qué auxiliar se usa con \"mangiare\" en el passato prossimo?", ["Avere","Essere","Andare","Fare"], 0, "La mayoría de los verbos, incluido \"mangiare\", usan \"avere\" como auxiliar en el passato prossimo."],
      ["translate", "Traduce al italiano: \"What did you do last night?\"", ["Cosa hai fatto ieri sera?","Cosa fai adesso?","Cosa farai domani?","Cosa fai sempre?"], 0, "\"Cosa hai fatto\" usa el passato prossimo de \"fare\" para preguntar por una acción terminada."],
      ["mcq", "¿Cómo se dice \"last week\" en italiano?", ["La settimana scorsa","Questa settimana","La prossima settimana","Tutti i giorni"], 0, "La settimana scorsa = last week. Questa settimana = this week."],
      ["arrange", "Ordena: [una / ho / mela / mangiato]", ["Ho mangiato una mela","Una ho mangiato mela","Mela una ho mangiato","Ho mela mangiato una"], 0, "\"Ho mangiato una mela.\" = I ate an apple."],
    ]
  },
];
