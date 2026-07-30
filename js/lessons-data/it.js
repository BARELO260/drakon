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
  {
    id:"it_b1_reading_notices", level:"B1", title:"Lettura e decisioni", emoji:"📌", xp:55,
    description:"Estrai informazioni pratiche da avvisi e messaggi quotidiani.",
    study:{
      vocab:[
        ["disponibile su richiesta","available on request"],
        ["soggetto a modifiche","subject to change"],
        ["avere i requisiti","to be eligible"],
        ["la scadenza","deadline"]
      ],
      grammar:[
        ["Lettura selettiva","Cerca prima lo scopo, la condizione e l'azione richiesta.","Le prenotazioni si confermano solo dopo il pagamento."]
      ]
    },
    ex:[
      ["mcq","Avviso: \"I posti del workshop sono riservati ai soci fino a venerdì; poi i posti restanti saranno liberati.\" Cosa deve fare una persona non socia?",["Aspettare fino a venerdì per sapere se restano posti.","Prenotare oggi perché ha la priorità.","Pagare una quota obbligatoria prima di venerdì.","Supporre che il workshop sia annullato."],0,"L'avviso indica una priorità temporanea per i soci, non un'esclusività permanente."],
      ["mcq","Messaggio: \"Invia il modulo entro le 17 di giovedì. Le domande tardive saranno considerate solo se restano posti.\" Qual è l'azione più sicura?",["Inviare il modulo prima delle 17 di giovedì.","Aspettare la conferma che restano posti.","Inviare venerdì perché le domande tardive sono sempre accettate.","Chiamare per annullare la domanda."],0,"\"Entro\" segna una scadenza chiara; \"solo se\" non garantisce l'accettazione tardiva."],
      ["fill","Completa: \"I candidati devono essere ___ per il programma prima di richiedere il finanziamento.\"",["idonei","disponibili","soggetti","scaduti"],0,"\"Idoneo\" significa che soddisfa i requisiti necessari."],
      ["writing","Scrivi un'email di 45-60 parole per chiedere se puoi ancora fare domanda dopo la scadenza.",[],["tardiva","domanda","disponibile"],"Includi un saluto, una richiesta chiara e una chiusura adatta.","Scrivi al coordinatore di un corso che si è chiuso ieri."]
    ]
  },
  {
    id:"it_b1_opinions", level:"B1", title:"Opinioni e punti di vista", emoji:"🎧", xp:58,
    description:"Distingui fatti, preferenze e ragioni in conversazioni quotidiane.",
    study:{
      vocab:[
        ["preferirei","I would rather"],
        ["si scopre che","it turns out"],
        ["vale la pena","it's worth it"],
        ["scoraggiare qualcuno","to put someone off"]
      ],
      grammar:[
        ["Opinione con giustificazione","Una risposta B1 deve includere un'opinione e una ragione.","Preferirei viaggiare in treno perché posso lavorare durante il viaggio."]
      ]
    },
    ex:[
      ["mcq","Leggi: \"Maya si aspettava che il corso fosse difficile, ma si scopre che il feedback settimanale lo rende gestibile.\" Cosa pensa Maya?",["Il corso è impegnativo, ma il supporto la aiuta a seguirlo.","Il corso è troppo facile.","Il feedback rende il corso più difficile.","Ha lasciato il corso per mancanza di supporto."],0,"L'aspettativa iniziale viene contrastata da un bilancio finale più positivo."],
      ["mcq","Quale risposta esprime preferenza e motivo?",["Preferirei incontrarci online perché fa risparmiare tempo di viaggio.","Mi incontro online ieri.","Gli incontri online sono un tempo di viaggio.","Preferisco perché incontri."],0,"La struttura include preferenza, opzione e giustificazione."],
      ["fill","Completa: \"Il prezzo era alto, ma l'esperienza ne ___ la pena.\"",["valeva","preferiva","scopriva","scoraggiava"],0,"L'espressione fissa è \"valerne la pena\"."],
      ["speaking","Parla per 45-60 parole: confronta studiare da solo e studiare con altri. Dai una preferenza, una ragione e uno svantaggio.",[],["preferisco","perché","tuttavia"],"Organizza la risposta: confronto, preferenza, ragione e riserva.","Conversazione con un compagno di classe."]
    ]
  },
  {
    id:"it_b1_storytelling", level:"B1", title:"Raccontare un'esperienza", emoji:"🗺️", xp:60,
    description:"Racconta esperienze passate combinando passato prossimo e imperfetto.",
    study:{
      vocab:[
        ["all'inizio","at first"],
        ["alla fine","eventually"],
        ["inaspettatamente","unexpectedly"],
        ["rendersi conto","to realise"]
      ],
      grammar:[
        ["Passato prossimo vs. imperfetto","L'imperfetto descrive lo sfondo o un'azione in corso; il passato prossimo racconta azioni concluse.","Mentre aspettavamo l'autobus, ha iniziato a piovere."]
      ]
    },
    ex:[
      ["mcq","Quale frase usa correttamente passato prossimo e imperfetto?",["Mentre camminavamo nel parco, abbiamo visto un incidente.","Mentre abbiamo camminato nel parco, vedevamo un incidente.","Mentre camminavamo nel parco, vedevamo un incidente ieri.","Abbiamo camminato nel parco mentre abbiamo visto."],0,"Lo sfondo (camminavamo) va all'imperfetto; l'azione puntuale (abbiamo visto) va al passato prossimo."],
      ["fill","Completa: \"Non mi ___ conto di quanto fosse tardi finché non ho guardato il telefono.\"",["sono reso","rendevo","rendo","rendevo conto"],0,"\"Rendersi conto\" al passato prossimo per un'azione puntuale: \"mi sono reso conto\"."],
      ["translate","Traduci: \"At first I was nervous, but eventually I enjoyed the experience.\"",["All'inizio ero nervoso, ma alla fine ho apprezzato l'esperienza.","All'inizio sono stato nervoso, ma alla fine apprezzavo l'esperienza.","All'inizio ero nervoso, ma alla fine apprezzavo molto l'esperienza.","All'inizio ero nervoso, ma alla fine ho apprezzato dell'esperienza."],0,"Lo stato d'animo di sfondo va all'imperfetto (\"ero\"); l'azione completa va al passato prossimo (\"ho apprezzato\")."],
      ["writing","Scrivi una storia di 80-100 parole su un piano che è cambiato inaspettatamente.",[],["all'inizio","ma","alla fine"],"Controlla che ogni parte faccia avanzare la storia e che i tempi verbali siano coerenti.","Un breve viaggio che non è andato come previsto."]
    ]
  },
  {
    id:"it_b1_agreement", level:"B1", title:"Discutere e trovare un accordo", emoji:"🤝", xp:62,
    description:"Proponi opzioni, rispondi alle idee altrui e negozia una decisione.",
    study:{
      vocab:[
        ["e se...?","shall we...?"],
        ["capisco il tuo punto","I see your point"],
        ["che ne dici di...?","how about...?"],
        ["un compromesso","a compromise"]
      ],
      grammar:[
        ["Linguaggio collaborativo","Per negoziare: proporre, rispondere e cercare un'alternativa condivisa.","Capisco il tuo punto sul costo; che ne dici di scegliere l'opzione più economica?"]
      ]
    },
    ex:[
      ["mcq","Quale risposta costruisce un accordo?",["Capisco il tuo punto sul costo; che ne dici di invitare meno persone?","La tua idea è brutta, quindi vince la mia.","Non capisco nessun punto.","L'opzione economica sono le persone."],0,"Riconosce un'idea e propone un compromesso concreto."],
      ["fill","Completa: \"___ ci vediamo in biblioteca dopo lezione?\"",["E se","Sarebbe","Ha fatto","Ha"],0,"\"E se...?\" è un modo comune per proporre qualcosa."],
      ["mcq","Quale frase esprime un disaccordo cortese?",["Non sono sicuro che funzioni, perché il locale chiude presto.","Non funzionerà mai.","Il tuo locale è terribile.","No, ovviamente no."],0,"Il disaccordo viene attenuato e motivato con una ragione."],
      ["speaking","Parla per 45-60 parole: proponi un piano per il weekend, rispondi a un'obiezione e offri un compromesso.",[],["propongo","perché","compromesso"],"Includi una proposta concreta, una ragione e una risposta collaborativa.","Organizzi un'attività con un amico con poco budget."]
    ]
  },
  {
    id:"it_b1_future_plans", level:"B1", title:"Piani e futuro", emoji:"🗓️", xp:60,
    description:"Parla di piani, intenzioni e previsioni usando diverse forme di futuro.",
    study:{
      vocab:[
        ["ho intenzione di","I intend to"],
        ["tra poco","soon"],
        ["appena posso","as soon as I can"],
        ["è possibile che","it's possible that"]
      ],
      grammar:[
        ["Futuro semplice vs. pensare di + infinito","\"Pensare di + infinito\" esprime un progetto già deciso; il futuro semplice esprime previsioni o decisioni spontanee.","Penso di trasferirmi il mese prossimo. / Credo che domani pioverà."]
      ]
    },
    ex:[
      ["mcq","Quale frase esprime un piano già deciso?",["Penso di iniziare un corso di italiano a settembre.","Inizierò un corso se avrò tempo.","Credo che inizierò qualche corso.","Iniziavo un corso l'anno scorso."],0,"\"Pensare di + infinito\" esprime un progetto già deciso."],
      ["fill","Completa: \"Appena ___ il rapporto, te lo mando.\"",["finisco","finivo","finirò","finivo il"],0,"Dopo \"appena\" per un'azione futura vicina si usa spesso il presente."],
      ["translate","Traduci: \"As soon as I finish the project, I'll call you.\"",["Appena finisco il progetto, ti chiamo.","Quando finivo il progetto, ti chiamo.","Appena finirò il progetto, ti chiamavo.","Se finisco il progetto, ti chiamerò forse."],0,"\"Appena\" + presente introduce una condizione futura vicina."],
      ["writing","Scrivi 45-60 parole sui tuoi piani per il prossimo anno. Usa almeno due espressioni di futuro.",[],["ho intenzione","appena","è possibile"],"Combina almeno due modi di parlare del futuro e giustifica un piano.","Racconti i tuoi piani a un amico."]
    ]
  },
  {
    id:"it_b1_complaints_requests", level:"B1", title:"Reclami e richieste cortesi", emoji:"✉️", xp:60,
    description:"Formula reclami e richieste formali usando il condizionale di cortesia.",
    study:{
      vocab:[
        ["vorrei","I would like"],
        ["potrebbe...?","could you...?"],
        ["mi dispiace informarla","I regret to inform you"],
        ["presentare un reclamo","to file a complaint"]
      ],
      grammar:[
        ["Condizionale di cortesia","\"Vorrei\" e \"potrebbe\" rendono più gentili richieste e reclami formali.","Vorrei sapere perché l'ordine è arrivato in ritardo."]
      ]
    },
    ex:[
      ["mcq","Quale frase è un reclamo formale e cortese?",["Vorrei sapere perché il pacco è arrivato con una settimana di ritardo.","Questo è un disastro totale!","La vostra azienda non fa mai niente bene.","Non intendo pagare nulla."],0,"Formula il reclamo in modo indiretto e rispettoso, senza perdere chiarezza."],
      ["fill","Completa: \"___ mandarmi una copia della fattura, per favore?\"",["Potrebbe","Può","Ha potuto","Posso"],0,"\"Potrebbe\" al condizionale rende la richiesta più gentile e formale."],
      ["translate","Traduci: \"I would like to file a complaint about the service.\"",["Vorrei presentare un reclamo sul servizio.","Voglio lamentare il servizio.","Mi piace presentare un reclamo del servizio.","Presenterei un reclamo il servizio."],0,"\"Vorrei\" + infinito è la formula standard di cortesia."],
      ["writing","Scrivi un'email di reclamo di 50-70 parole su un ordine arrivato incompleto. Usa il condizionale di cortesia.",[],["vorrei","potrebbe","mi dispiace"],"Spiega il problema, formula una richiesta chiara e chiudi in modo cortese.","Un ordine online è arrivato con due articoli mancanti."]
    ]
  },
  {
    id:"it_b2_hypotheticals", level:"B2", title:"Ipotesi e condizioni improbabili", emoji:"🌀", xp:75,
    description:"Esprimi ipotesi poco probabili o irreali con se + congiuntivo imperfetto.",
    study:{
      vocab:[
        ["se avessi","if I had"],
        ["nel caso in cui","in case"],
        ["a meno che","unless"],
        ["supponendo che","assuming that"]
      ],
      grammar:[
        ["Periodo ipotetico della possibilità (secondo tipo)","Per ipotesi poco probabili al presente: se + congiuntivo imperfetto, condizionale presente nella principale.","Se avessi più tempo, viaggerei più spesso."]
      ]
    },
    ex:[
      ["mcq","Quale frase esprime correttamente un'ipotesi poco probabile?",["Se avessi più soldi, comprerei una casa più grande.","Se ho più soldi, comprerei una casa più grande.","Se avessi più soldi, compro una casa più grande.","Se avrei più soldi, comprerei una casa."],0,"Il secondo tipo richiede il congiuntivo imperfetto nella condizione e il condizionale presente nella conseguenza."],
      ["fill","Completa: \"A meno che non ___ uno sforzo extra, non finiremo in tempo.\"",["facciamo","facessimo","faremmo","abbiamo fatto"],0,"'A meno che' richiede il congiuntivo; nel registro standard si usa qui il congiuntivo presente 'facciamo'."],
      ["mcq","Qual è la migliore parafrasi di \"Se fossi in te, non accetterei quell'offerta\"?",["Un consiglio ipotetico: chi parla non accetterebbe l'offerta al posto dell'ascoltatore.","Un ordine diretto.","La descrizione di un fatto passato.","Una promessa per il futuro."],0,"La struttura ipotetica esprime un consiglio, non un fatto né un ordine."],
      ["writing","Scrivi 60-80 parole: descrivi cosa faresti diversamente se potessi rivivere un anno della tua vita. Usa almeno due ipotesi con 'se'.",[],["se avessi","a meno che","supponendo"],"Controlla che ogni ipotesi combini correttamente congiuntivo imperfetto e condizionale.","Riflessione personale per un blog."]
    ]
  },
  {
    id:"it_b2_reported_speech", level:"B2", title:"Discorso indiretto", emoji:"💬", xp:78,
    description:"Riporta ciò che altri hanno detto adattando tempi verbali e indicatori temporali.",
    study:{
      vocab:[
        ["ha detto che","he/she said that"],
        ["ha spiegato che","he/she explained that"],
        ["ha chiesto se","he/she asked whether"],
        ["ha aggiunto che","he/she added that"]
      ],
      grammar:[
        ["Discorso indiretto","Al passato, il futuro diventa condizionale passato e il presente spesso diventa imperfetto.","Ha detto: 'Arriverò in ritardo.' → Ha detto che sarebbe arrivato in ritardo."]
      ]
    },
    ex:[
      ["mcq","Citazione diretta: \"Finirò il rapporto domani.\" Qual è il discorso indiretto corretto?",["Ha detto che avrebbe finito il rapporto il giorno dopo.","Ha detto che finirà il rapporto domani.","Ha detto che finiva il rapporto domani.","Ha detto che finisca il rapporto il giorno dopo."],0,"Il futuro della citazione originale diventa condizionale passato; 'domani' diventa 'il giorno dopo'."],
      ["fill","Completa: \"Mi ha chiesto se ___ disponibile per la riunione di lunedì.\"",["fossi","sono","sarò","sia"],0,"Il presente della citazione originale diventa imperfetto nel discorso indiretto al passato."],
      ["mcq","Cosa cambia di solito passando dal discorso diretto a quello indiretto al passato?",["Il tempo verbale e a volte i marcatori temporali (domani → il giorno dopo).","Solo il soggetto della frase.","Niente cambia mai.","Solo l'ordine delle parole."],0,"Il tempo verbale si sposta indietro nel passato e alcuni marcatori temporali cambiano."],
      ["writing","Riporta al discorso indiretto (50-70 parole) una conversazione recente in cui qualcuno ti ha raccontato i suoi piani.",[],["ha detto che","ha spiegato","ha aggiunto"],"Adatta correttamente tempi verbali e marcatori temporali.","Racconti a un amico cosa ti ha detto un collega."]
    ]
  },
  {
    id:"it_b2_passive_impersonal", level:"B2", title:"Passivo e si passivante", emoji:"⚙️", xp:76,
    description:"Descrivi processi e fatti senza mettere in evidenza chi li compie.",
    study:{
      vocab:[
        ["essere + participio passato","to be + past participle (passive)"],
        ["si + verbo","impersonal/passive 'si' construction"],
        ["essere portato a termine","to be carried out"],
        ["occuparsi di","to be in charge of"]
      ],
      grammar:[
        ["Passivo e si passivante","Il passivo con 'essere' mette in evidenza l'azione; il 'si' passivante è più naturale quando l'agente non è importante.","Il progetto è stato approvato dal comitato. / Si è approvato il progetto."]
      ]
    },
    ex:[
      ["mcq","Quale frase usa correttamente il 'si' passivante?",["Si sono firmati i contratti ieri pomeriggio.","Si è firmato i contratti ieri pomeriggio.","È stato firmato i contratti ieri.","Si firmava i contratti da qualcuno."],0,"Il verbo concorda al plurale con 'i contratti': 'si sono firmati'."],
      ["fill","Completa: \"Il nuovo edificio ___ progettato da un'azienda internazionale.\"",["è stato","si è","ha","era in via di essere"],0,"Con un agente esplicito ('da un'azienda'), si preferisce il passivo con 'essere'."],
      ["mcq","Quando si preferisce il 'si' passivante rispetto al passivo con 'essere'?",["Quando l'agente non è rilevante o non è noto.","Quando si vuole sempre nominare l'agente.","Mai nell'italiano naturale.","Solo nei testi letterari antichi."],0,"Il 'si' passivante è la forma naturale quando l'agente non è rilevante."],
      ["writing","Descrivi in 50-70 parole un processo (per esempio, come si organizza un evento) usando almeno due costruzioni passive o impersonali.",[],["si + verbo","è stato + participio","portato a termine"],"Usa almeno due costruzioni diverse in modo coerente.","Spieghi una procedura a un nuovo membro del team."]
    ]
  },
  {
    id:"it_b2_doubt_probability", level:"B2", title:"Dubbio, probabilità e certezza", emoji:"❓", xp:78,
    description:"Distingui quando usare il congiuntivo o l'indicativo secondo il grado di certezza.",
    study:{
      vocab:[
        ["dubito che","I doubt that"],
        ["non credo che","I don't think that"],
        ["è probabile che","it's likely that"],
        ["può darsi che","it might be that"]
      ],
      grammar:[
        ["Congiuntivo con dubbio e probabilità","I verbi ed espressioni di dubbio o negazione di certezza richiedono il congiuntivo nella subordinata.","Dubito che il progetto sia pronto per venerdì."]
      ]
    },
    ex:[
      ["mcq","Quale frase è grammaticalmente corretta?",["Non credo che la proposta sia fattibile a breve termine.","Non credo che la proposta è fattibile a breve termine.","Non credo che la proposta sarà fattibile a breve termine.","Non credo che la proposta fattibile a breve termine."],0,"\"Non credo che\" nega la certezza, quindi richiede il congiuntivo: \"sia\"."],
      ["fill","Completa: \"Può darsi che ___ già preso la decisione quando arriveremo.\"",["abbiano","hanno","prenderanno","prendevano"],0,"'Può darsi che' + congiuntivo (qui, congiuntivo passato per un'azione precedente)."],
      ["mcq","Quale espressione NON richiede il congiuntivo nella proposizione seguente?",["Sono sicuro che...","Dubito che...","Non credo che...","È possibile che..."],0,"'Sono sicuro che' esprime certezza, quindi si usa l'indicativo, non il congiuntivo."],
      ["speaking","Parla per 60-80 parole: dai la tua opinione sul fatto che il telelavoro diventi la norma. Usa almeno un'espressione di dubbio e una di certezza.",[],["dubito che","è probabile","sono sicuro"],"Alterna correttamente congiuntivo e indicativo secondo il grado di certezza.","Dibattito informale sul futuro del lavoro."]
    ]
  },
  {
    id:"it_b2_contrast_connectors", level:"B2", title:"Connettivi di contrasto", emoji:"⚖️", xp:76,
    description:"Usa 'sebbene' e altri connettivi per sfumare idee e contrastare fatti.",
    study:{
      vocab:[
        ["sebbene","although"],
        ["nonostante","despite"],
        ["tuttavia","however"],
        ["però","but / however"]
      ],
      grammar:[
        ["Connettivi di contrasto","'Sebbene' e 'nonostante' richiedono il congiuntivo, anche per un fatto reale.","Sebbene abbia piovuto, siamo usciti a camminare."]
      ]
    },
    ex:[
      ["mcq","Quale frase usa correttamente 'sebbene'?",["Sebbene il volo abbia subito un ritardo, siamo arrivati in orario alla riunione.","Sebbene il volo ha subito un ritardo, siamo arrivati in orario.","Sebbene il volo subiva un ritardo, siamo arrivati.","Sebbene il volo subirà un ritardo, arriviamo in orario."],0,"'Sebbene' richiede sempre il congiuntivo, anche per un fatto accertato."],
      ["fill","Completa: \"___ il rapporto fosse incompleto, lo abbiamo inviato prima della scadenza.\"",["Nonostante","Tuttavia","Però","Può darsi che"],0,"'Nonostante' introduce una subordinata di contrasto con un fatto reale."],
      ["mcq","Quale connettivo introduce tipicamente una nuova frase invece di una subordinata nella stessa frase?",["Tuttavia","Sebbene","Nonostante","Perché"],0,"'Tuttavia' funziona come connettivo tra frasi, non come subordinante."],
      ["writing","Scrivi un paragrafo di 60-80 parole presentando un'opinione e sfumandola con almeno due connettivi di contrasto diversi.",[],["sebbene","tuttavia","però"],"Combina correttamente i connettivi subordinanti e quelli che uniscono frasi.","Opinione su un tema d'attualità per un forum."]
    ]
  },
  {
    id:"it_b2_debate_nuance", level:"B2", title:"Argomentare con sfumature", emoji:"🗣️", xp:80,
    description:"Costruisci argomenti che riconoscono il punto contrario prima di difendere una posizione.",
    study:{
      vocab:[
        ["da un lato / dall'altro","on one hand / on the other hand"],
        ["è innegabile che","it's undeniable that"],
        ["vale la pena notare che","it's worth noting that"],
        ["in definitiva","ultimately"]
      ],
      grammar:[
        ["Argomentazione sfumata","Un buon argomento B2 riconosce il punto contrario prima di difendere una posizione.","È innegabile che il piano riduca i costi, ma vale la pena notare che comporta anche dei rischi."]
      ]
    },
    ex:[
      ["mcq","Quale struttura mostra un argomento ben sfumato?",["È innegabile che il progetto sia costoso, ma a lungo termine potrebbe risparmiare risorse.","Il progetto è costoso, punto.","Il progetto ovviamente non costa nulla.","Non c'è nessun argomento contro il progetto."],0,"Riconosce un punto contrario prima di sfumarlo con un vantaggio a lungo termine."],
      ["fill","Completa: \"___, la proposta ha più vantaggi che svantaggi.\"",["In definitiva","Sebbene","A meno che","Dubito che"],0,"'In definitiva' si usa per chiudere un argomento con una conclusione generale."],
      ["mcq","Che funzione ha \"vale la pena notare che\" in un argomento?",["Evidenzia un punto che chi parla considera particolarmente rilevante.","Introduce un'ipotesi irreale.","Esprime dubbio totale sul tema.","Chiude la conversazione bruscamente."],0,"È una formula per mettere in risalto un punto rilevante nell'argomento."],
      ["writing","Scrivi un paragrafo argomentativo di 70-90 parole su un tema dibattuto (per esempio, il lavoro da remoto). Riconosci un punto contrario prima di difendere la tua posizione.",[],["da un lato","è innegabile","in definitiva"],"Struttura: riconoscimento del punto contrario, la tua posizione e una conclusione.","Contributo a un dibattito scritto in classe."]
    ]
  },
  {
    id:"it_c1_register_nuance", level:"C1", title:"Registro e sfumatura nei testi formali", emoji:"🎩", xp:88,
    description:"Usa l'attenuazione (hedging) per esprimere affermazioni prudenti in registro formale.",
    study:{
      vocab:[
        ["converrebbe sottolineare che","it would be worth pointing out that"],
        ["sarebbe opportuno precisare che","it would be worth clarifying that"],
        ["essere propensi a pensare che","to be inclined to think that"],
        ["a grandi linee","broadly speaking"]
      ],
      grammar:[
        ["Attenuazione (hedging) nel registro formale","Il condizionale attenua le affermazioni e le rende più prudenti e formali rispetto al presente indicativo.","Converrebbe sostenere che la misura è prematura, sebbene i dati siano ancora limitati."]
      ]
    },
    ex:[
      ["mcq","Quale frase è più adatta a un rapporto formale?",["Converrebbe sottolineare che i risultati, seppur promettenti, richiedono ulteriori analisi.","I risultati sono fantastici, punto.","È chiarissimo per chiunque.","Non c'è altro da dire su questo."],0,"Il registro formale privilegia l'attenuazione e la prudenza argomentativa."],
      ["fill","Completa: \"___ precisare che lo studio si basa su un campione ridotto.\"",["Sarebbe opportuno","È ovvio","Mai","Sempre"],0,"'Sarebbe opportuno' introduce una raccomandazione attenuata, tipica del registro formale."],
      ["mcq","Che effetto produce usare il condizionale invece del presente in un rapporto?",["Attenua l'affermazione e lascia spazio al dubbio ragionevole.","Rende l'affermazione più categorica e sicura.","Cambia completamente il significato.","Non ha alcun effetto stilistico."],0,"Il condizionale attenua l'affermazione senza negarla."],
      ["writing","Scrivi 60-80 parole di un breve rapporto che valuta una proposta, usando almeno due espressioni di attenuazione.",[],["converrebbe sottolineare","sarebbe opportuno","a grandi linee"],"Il registro formale privilegia la prudenza argomentativa rispetto alla certezza assoluta.","Rapporto interno per un comitato direttivo."]
    ]
  },
  {
    id:"it_c1_subjunctive_past", level:"C1", title:"Congiuntivo trapassato", emoji:"⏳", xp:90,
    description:"Esprimi ipotesi irreali al passato con una concordanza dei tempi complessa.",
    study:{
      vocab:[
        ["se l'avessi saputo","if I had known"],
        ["era impossibile che","it was impossible that"],
        ["sarebbe bastato","it would have sufficed"],
        ["solo quando","it wasn't until that"]
      ],
      grammar:[
        ["Congiuntivo trapassato e concordanza dei tempi","Per ipotesi irreali al passato: se + congiuntivo trapassato, condizionale passato nella principale.","Se avessi saputo il rischio, avrei agito diversamente."]
      ]
    },
    ex:[
      ["mcq","Quale frase esprime correttamente un'ipotesi irreale al passato?",["Se avessimo revisionato il contratto in tempo, avremmo evitato il problema.","Se revisioniamo il contratto in tempo, avremmo evitato il problema.","Se avessimo revisionato il contratto in tempo, evitiamo il problema.","Se avremmo revisionato il contratto, avremmo evitato il problema."],0,"Serve il congiuntivo trapassato nella condizione e il condizionale passato nella conseguenza."],
      ["fill","Completa: \"Era impossibile che il team ___ il progetto senza più risorse.\"",["avesse finito","aveva finito","finirebbe","finisca già"],0,"Dopo 'era impossibile che' (dubbio al passato) si usa il congiuntivo; per un'azione precedente, il trapassato congiuntivo."],
      ["mcq","Cosa distingue il congiuntivo trapassato dal congiuntivo imperfetto?",["Il trapassato colloca l'ipotesi in un momento anteriore a un altro punto del passato.","Non c'è nessuna differenza reale tra i due.","Il trapassato si usa solo per il futuro.","Il congiuntivo imperfetto non esiste in italiano."],0,"Il trapassato aggiunge un ulteriore livello temporale anteriore nel passato."],
      ["writing","Scrivi 70-90 parole su una decisione passata che cambieresti. Usa almeno due strutture con il congiuntivo trapassato.",[],["se avessi saputo","sarebbe bastato","solo quando"],"Controlla che le strutture combinino correttamente il congiuntivo trapassato e il condizionale passato.","Riflessione retrospettiva su una decisione professionale."]
    ]
  },
  {
    id:"it_c1_nominalization", level:"C1", title:"Nominalizzazione e stile formale", emoji:"📑", xp:86,
    description:"Trasforma i verbi in sostantivi per ottenere un registro accademico e tecnico.",
    study:{
      vocab:[
        ["l'attuazione di","the implementation of"],
        ["l'assenza di","the absence of"],
        ["dare luogo a","to give rise to"],
        ["comportare","to entail"]
      ],
      grammar:[
        ["Nominalizzazione per un registro formale","Trasformare i verbi in sostantivi (attuare → l'attuazione) è tipico dei testi accademici e tecnici.","L'attuazione tardiva della misura ha dato luogo a ritardi diffusi."]
      ]
    },
    ex:[
      ["mcq","Quale riformulazione è più adatta a un rapporto tecnico?",["L'assenza di coordinamento tra i team ha dato luogo a una duplicazione dei compiti.","Non si sono coordinati, quindi hanno fatto le stesse cose due volte.","I team non si sono parlati, quindi è stato un pasticcio.","È stato un disastro perché nessuno ha comunicato."],0,"La nominalizzazione condensa l'informazione in un tono più oggettivo."],
      ["fill","Completa: \"L'___ di nuove tecnologie comporta costi iniziali elevati.\"",["adozione","adottare","adottando","adottato"],0,"Il sostantivo 'adozione' (nominalizzazione di 'adottare') si integra nella struttura formale con articolo."],
      ["mcq","Quale vantaggio offre la nominalizzazione in un testo tecnico?",["Permette di condensare le informazioni e adottare un tono più oggettivo e impersonale.","Rende il testo più informale e vicino al lettore.","Elimina ogni possibilità di precisione.","Non offre alcun vantaggio reale."],0,"La nominalizzazione è centrale per densità e oggettività nel registro tecnico."],
      ["writing","Riscrivi in 60-80 parole un paragrafo informale su un problema lavorativo, trasformandolo in un frammento di rapporto formale con almeno tre nominalizzazioni.",[],["l'attuazione","l'assenza di","dare luogo a"],"Individua i verbi chiave e trasformali in sostantivi per un tono più formale.","Trasformare un reclamo informale in un rapporto interno."]
    ]
  },
  {
    id:"it_c1_causal_connectors", level:"C1", title:"Connettivi complessi di causa-conseguenza", emoji:"🔗", xp:88,
    description:"Collega cause e conseguenze con precisione usando connettivi avanzati.",
    study:{
      vocab:[
        ["dato che","given that"],
        ["nella misura in cui","insofar as"],
        ["da cui il fatto che","hence / which is why"],
        ["pena","under penalty of"]
      ],
      grammar:[
        ["Connettivi complessi di causa-conseguenza","'Da cui' introduce una conseguenza logica; 'dato che' e 'nella misura in cui' introducono cause con l'indicativo.","Dato che i costi sono aumentati, da cui la revisione del bilancio."]
      ]
    },
    ex:[
      ["mcq","Quale frase usa correttamente 'da cui'?",["I dati erano contraddittori, da cui il ritardo nella pubblicazione del rapporto.","Da cui i dati erano contraddittori, il rapporto è stato ritardato.","I dati, da cui contraddittori, hanno ritardato il rapporto.","Da cui che i dati siano contraddittori, ritardo del rapporto."],0,"'Da cui' introduce direttamente una conseguenza logica, spesso seguita da un sostantivo."],
      ["fill","Completa: \"___ le risorse disponibili, il progetto procederà più lentamente del previsto.\"",["Dato","Da cui","Pena","Converrebbe sottolineare"],0,"'Dato' introduce una causa in modo diretto."],
      ["mcq","Cosa significa approssimativamente 'nella misura in cui'?",["Nella proporzione o nel grado in cui qualcosa accade; equivalente a 'per quanto'.","Esattamente lo stesso di 'sebbene'.","Introduce sempre un'ipotesi irreale.","Si usa solo per parlare di misure fisiche."],0,"Esprime una proporzionalità tra due fatti collegati."],
      ["writing","Scrivi un paragrafo di 70-90 parole spiegando la causa e la conseguenza di una decisione aziendale, usando almeno due connettivi di questa lezione.",[],["dato che","da cui","nella misura in cui"],"Distingui con attenzione i connettivi di causa da quelli di conseguenza.","Analisi causale per un rapporto di gestione."]
    ]
  },
  {
    id:"it_c1_mediation_summary", level:"C1", title:"Mediazione: sintetizzare con precisione", emoji:"🗂️", xp:90,
    description:"Riassumi informazioni complesse conservando le relazioni logiche tra le idee.",
    study:{
      vocab:[
        ["in sintesi","in summary"],
        ["il punto centrale è che","the key point is that"],
        ["conviene sottolineare","it's worth highlighting"],
        ["a grandi linee","broadly / roughly speaking"]
      ],
      grammar:[
        ["Mediazione: sintetizzare con precisione","Un buon riassunto C1 conserva la relazione logica tra le idee (causa, contrasto, condizione), non solo le parole chiave.","A grandi linee, il rapporto conclude che il piano è fattibile, anche se conviene sottolineare i rischi di finanziamento."]
      ]
    },
    ex:[
      ["mcq","Qual è il miglior riassunto per un pubblico con poco tempo?",["A grandi linee, il rapporto raccomanda un'espansione graduale, condizionata all'ottenimento di finanziamenti esterni.","Il rapporto ha molte pagine su espansione, finanziamento e altre cose.","L'espansione sarà perfetta se tutti si impegnano.","Ci sono finanziamento, espansione e un rapporto coinvolti."],0,"Un buon riassunto dà priorità alla decisione, alla condizione e al rischio principale."],
      ["fill","Completa: \"___, lo studio mostra un miglioramento moderato ma costante nei risultati.\"",["In sintesi","Pena","Da cui","Converrebbe"],0,"'In sintesi' introduce una conclusione generale che chiude il riassunto."],
      ["mcq","Cosa distingue una buona mediazione (riassunto) da un semplice elenco di parole chiave?",["Conserva le relazioni logiche (causa, contrasto, condizione) tra le idee originali.","Elimina ogni relazione logica e lascia solo termini isolati.","Deve sempre essere più lungo del testo originale.","Non deve includere alcuna conclusione."],0,"La mediazione richiede di preservare il senso e i collegamenti, non solo il vocabolario."],
      ["writing","Riassumi in 60-80 parole un rapporto immaginario che valuta due opzioni strategiche, indicando la raccomandazione principale e una condizione o rischio.",[],["in sintesi","il punto centrale","conviene sottolineare"],"Dai priorità alla decisione, alla ragione e a una condizione o rischio rilevante.","Sintesi esecutiva per la direzione."]
    ]
  },
  {
    id:"it_c1_concession_refutation", level:"C1", title:"Concessione avanzata e confutazione", emoji:"⚔️", xp:92,
    description:"Riconosci argomenti contrari con forza retorica prima di confutarli con precisione.",
    study:{
      vocab:[
        ["se è vero che... non è meno vero che","while it's true that... it's no less true that"],
        ["lungi dal","far from"],
        ["ciò non toglie che","that doesn't take away that"],
        ["in ultima analisi","ultimately"]
      ],
      grammar:[
        ["Concessione avanzata e confutazione","Queste strutture riconoscono un argomento contrario con forza retorica prima di confutarlo o sfumarlo con precisione.","Se è vero che il piano riduce i costi, non è meno vero che introduce rischi considerevoli."]
      ]
    },
    ex:[
      ["mcq","Quale frase confuta un argomento con maggiore precisione retorica?",["Lungi dal risolvere il problema, la misura potrebbe aggravarlo a lungo termine.","La misura è cattiva, punto.","Non serve a niente, ovviamente.","Tutti sanno che è sbagliata."],0,"'Lungi dal' introduce una confutazione sfumata e argomentata, non una semplice negazione."],
      ["fill","Completa: \"Il progetto ha generato profitti; ___, non ha coperto i costi iniziali.\"",["ciò non toglie che","dato che","da cui","nella misura in cui"],0,"'Ciò non toglie che' introduce una concessione seguita da una sfumatura."],
      ["mcq","Che funzione retorica ha \"se è vero che... non è meno vero che\"?",["Riconosce un punto valido prima di introdurre un'obiezione altrettanto solida.","Nega completamente il primo punto.","Esprime dubbio totale su entrambi i punti.","È una formula puramente informale."],0,"È una struttura di concessione-confutazione tipica del registro argomentativo colto."],
      ["writing","Scrivi un paragrafo di 80-100 parole che confuti con sfumature una posizione su un tema controverso (per esempio, l'automazione del lavoro), usando almeno due strutture di concessione-confutazione.",[],["se è vero che","lungi dal","in ultima analisi"],"Riconosci prima il punto contrario, poi sfumalo o confutalo con precisione.","Articolo di opinione per una rivista specializzata."]
    ]
  },
  {
    id:"it_c2_style_implication", level:"C2", title:"Stile, implicazione e sfumatura", emoji:"🔎", xp:92,
    description:"Interpreta il sottotesto e riformula idee complesse usando l'inversione enfatica e la litote.",
    study:{
      vocab:[
        ["in nessun caso","by no means","Negazione enfatica che anticipa il verbo."],
        ["non essere all'altezza di","to fall short of"],
        ["un presupposto tacito","a tacit assumption"],
        ["sfumare un'affermazione","to qualify a claim"]
      ],
      grammar:[
        ["Inversione dopo una negazione enfatica","Con espressioni negative enfatiche in apertura di frase ('in nessun caso', 'in alcun modo', 'sotto nessun aspetto'), nel registro colto il verbo precede spesso il soggetto.","In nessun caso questi risultati dovrebbero essere considerati definitivi."],
        ["Litote: affermare negando il contrario","Negare il contrario di un'idea è un espediente colto per affermarla con prudenza e sfumatura.","La proposta non è priva di rischi, anche se i suoi benefici sono evidenti."]
      ]
    },
    ex:[
      ["mcq","Quale riformulazione mantiene meglio il senso di «I dati sono suggestivi, non conclusivi»?",["I dati indicano una direzione, ma non bastano per una conclusione definitiva.","I dati dimostrano la conclusione senza alcun dubbio.","Non esiste alcun dato disponibile sull'argomento.","La conclusione è suggestiva, ma i dati sono definitivi."],0,"Mantiene la differenza tra indizio e prova conclusiva."],
      ["fill","Completa l'inversione: «In nessun caso ___ essere considerati definitivi questi risultati.»",["dovrebbero","dovrebbe","dovremmo","dovresti"],0,"Il verbo concorda con il soggetto plurale 'questi risultati': dovrebbero essere considerati."],
      ["mcq","In «La proposta non è priva di rischi», che funzione ha la litote?",["Afferma con sfumatura che la proposta comporta effettivamente un rischio.","Nega completamente che ci sia un rischio.","Afferma che la proposta è totalmente sicura.","Non aggiunge alcun significato."],0,"'Non è priva di' nega il contrario per affermare qualcosa con prudenza."],
      ["translate","Traduci: «By no means should this decision be treated as final.»",["In nessun caso questa decisione dovrebbe essere considerata definitiva.","Questa decisione è definitiva in nessun caso.","Dovrebbe essere considerata in nessun caso questa decisione.","Questa decisione in nessun caso definitiva dovrebbe essere."],0,"'In nessun caso' + inversione è l'equivalente colto di 'by no means'."],
      ["writing","Scrivi 60-80 parole su una decisione aziendale controversa: usa almeno un'inversione enfatica ('in nessun caso'/'in alcun modo') e una litote.",[],["in nessun caso","non è priva di","in alcun modo"],"Il livello C2 unisce precisione argomentativa e strumenti retorici di sfumatura.","Rubrica di opinione per una rivista specializzata."]
    ]
  },
  {
    id:"it_c2_rhetoric_tone", level:"C2", title:"Retorica, tono ed effetto stilistico", emoji:"🎭", xp:94,
    description:"Scegli strumenti retorici e adatta il tono a pubblico, scopo ed effetto desiderato.",
    study:{
      vocab:[
        ["trovare un equilibrio","to strike a balance"],
        ["una domanda retorica","a rhetorical question"],
        ["evocare","to evoke"],
        ["assumersi una responsabilità in modo proporzionato","to acknowledge responsibility proportionately"]
      ],
      grammar:[
        ["Effetto stilistico e scelta lessicale","La scelta di una struttura o di una parola può creare vicinanza, distanza, urgenza o ironia, senza cambiare il contenuto letterale.","Non è del tutto infondato, anche se potrebbe senz'altro essere migliorato."],
        ["Riformulazione per un registro pubblico formale","Un comunicato pubblico riconosce l'impatto, assume una responsabilità proporzionata e propone un'azione verificabile, evitando sia la freddezza che la drammatizzazione.","Riconosciamo il disagio causato e stiamo già adottando misure per evitare che si ripeta."]
      ]
    },
    ex:[
      ["mcq","Che effetto produce di solito la frase «non è del tutto infondato»?",["Un'approvazione cauta e deliberatamente attenuata.","Un'approvazione entusiasta e senza riserve.","Un rifiuto totale dell'idea.","Un'istruzione tecnica priva di giudizio."],0,"La doppia attenuazione crea una valutazione riservata, tipica del registro colto."],
      ["mcq","Quale versione è più adatta a delle scuse pubbliche formali?",["Riconosciamo il disagio causato e stiamo adottando misure immediate per evitare che si ripeta.","Beh, che momento imbarazzante, passerà.","Non è stata affatto colpa nostra.","Tutti commettono errori, non serve insistere."],0,"Il registro formale riconosce l'impatto, assume responsabilità e propone un'azione concreta."],
      ["fill","Completa: «Il discorso cerca di ___ un senso di responsabilità condivisa.»",["evocare","invocare","provocare","revocare"],0,"'Evocare' significa suscitare un sentimento o un'idea in chi ascolta."],
      ["mcq","Qual è lo scopo principale di una domanda retorica in un discorso persuasivo?",["Coinvolgere il pubblico e suggerire una risposta senza formularla esplicitamente.","Chiedere un'informazione che l'oratore realmente non conosce.","Confondere deliberatamente il pubblico.","Cambiare argomento senza farsi notare."],0,"La domanda retorica orienta l'ascoltatore verso una conclusione senza dichiararla direttamente."],
      ["writing","Riformula questo messaggio interno brusco in un comunicato pubblico di 50-70 parole: «La squadra ha fallito, bisogna sistemarlo subito.» Riconosci il problema, evita di drammatizzarlo e proponi un'azione verificabile.",[],["riconosciamo","misure","evitare che si ripeta"],"Valuta proporzione e tono: né eccessiva freddezza né drammatizzazione inutile.","Comunicato: un servizio digitale è rimasto fuori uso per due ore."]
    ]
  },
  {
    id:"it_c2_critical_reading", level:"C2", title:"Lettura critica e implicature", emoji:"🧩", xp:96,
    description:"Interpreta presupposizioni, linguaggio valutativo e conclusioni implicite in testi di opinione.",
    study:{
      vocab:[
        ["lasciar intendere","to imply"],
        ["una riserva","a caveat"],
        ["linguaggio valutativo","loaded language"],
        ["trarre un'inferenza","to draw an inference"]
      ],
      grammar:[
        ["Presupposizione","Una frase può presentare un'idea come già accettata, senza dimostrarla esplicitamente.","Perfino i critici rimasti hanno accettato il piano rivisto."]
      ]
    },
    ex:[
      ["mcq","Cosa presuppone la frase «Perfino i critici rimasti hanno accettato il piano rivisto»?",["Che ci sono stati critici e che alcuni si erano già convinti prima.","Che nessuno ha mai criticato il piano.","Che il piano è stato completamente respinto.","Che non esiste alcun piano rivisto."],0,"'Perfino' e 'rimasti' presentano l'informazione come già condivisa e orientano l'inferenza."],
      ["mcq","Qual è una lettura critica appropriata di «una soluzione audace per un sistema obsoleto»?",["L'aggettivo 'obsoleto' valuta il sistema e predispone il lettore a favore della soluzione.","La frase è completamente neutra e non contiene valutazioni.","La soluzione ha già dimostrato di essere efficace.","Non contiene alcuna valutazione implicita."],0,"'Obsoleto' è linguaggio valutativo, non un fatto dimostrato oggettivamente."],
      ["fill","Completa: «L'articolo include una ___ importante: i risultati non sono stati replicati.»",["riserva","idea","conseguenza","comparazione"],0,"Una 'riserva' limita la portata di un'affermazione."],
      ["mcq","Nella frase «È ora di restituire il buon senso alla politica pubblica», cosa implica il verbo 'restituire'?",["Lascia intendere che il buon senso esisteva prima ed è andato perduto, senza dimostrarlo.","Afferma con dati che la politica attuale manca di buon senso.","È una descrizione neutra, priva di ogni carica valutativa.","Propone una politica concreta e verificabile."],0,"'Restituire' presuppone una perdita precedente, una strategia retorica comune priva di prove."],
      ["speaking","Analizza in 50-70 parole una frase persuasiva a tua scelta: individua una presupposizione, una parola valutativa e un'inferenza ragionevole.",[],["presuppone","linguaggio","inferenza"],"Non basta essere d'accordo o in disaccordo: spiega come il linguaggio orienta l'interpretazione.","Frase di esempio: «È ora di porre fine a questa pratica superata.»"]
    ]
  },
  {
    id:"it_a1_dates_time", level:"A1", title:"Date, giorni e mesi", emoji:"📅", xp:35,
    description:"Impara i giorni della settimana, i mesi e come parlare di date in italiano.",
    study: {
      vocab: [
        ["lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"],
        ["gennaio, febbraio, marzo... dicembre", "January, February, March... December"],
        ["Che giorno è oggi?", "What day is it today?"],
        ["Oggi è il 5 maggio.", "Today is May 5th.", "In italiano: \"il\" + numero + mese, senza \"di\"."],
        ["Quando è il tuo compleanno?", "When is your birthday?"]
      ],
      grammar: [
        ["L'articolo con i giorni", "I giorni della settimana si scrivono in minuscolo e usano \"il\" per un'abitudine.", "Vado in palestra il lunedì. (ogni lunedì)"]
      ]
    },
    ex:[
      ["mcq","Come si dice \"Wednesday\" in italiano?",["Mercoledì","Martedì","Giovedì","Venerdì"],0,"\"Mercoledì\" è il terzo giorno della settimana in italiano."],
      ["mcq","Qual è il modo corretto di chiedere la data di oggi?",["Che giorno è oggi?","Che ora è oggi?","Quanti anni hai?","Dove vivi?"],0,"\"Che giorno è oggi?\" chiede il giorno della settimana o la data."],
      ["fill","Completa: \"Il mio compleanno è ___ 10 marzo.\"",["il","la","in","i"],0,"Con una data precisa si usa \"il\": \"il 10 marzo\"."],
      ["translate","Traduci: \"Today is Monday.\"",["Oggi è lunedì.","Oggi è martedì.","Ieri era lunedì.","Oggi è un lunedì."],0,"\"Today is Monday\" = \"Oggi è lunedì\", senza articolo prima del giorno."],
      ["arrange","Metti in ordine: [palestra / vado / lunedì / in / il]",["Vado in palestra il lunedì","Il lunedì vado in palestra","In palestra vado il lunedì","Vado il lunedì in palestra"],0,"Soggetto + verbo + complemento + \"il lunedì\": \"Vado in palestra il lunedì.\""],
      ["writing","Scrivi 3 frasi (20-30 parole) in italiano sulla tua settimana: che giorno è oggi, quando è il tuo compleanno e cosa fai un giorno specifico.",[],["oggi","compleanno","il"],"Includi almeno un giorno della settimana e un mese. Controlla l'uso dell'articolo \"il\"."]
    ]
  },
  {
    id:"it_a2_directions_transport", level:"A2", title:"In città: indicazioni e trasporti", emoji:"🧭", xp:42,
    description:"Chiedi e dai indicazioni, e parla dei mezzi di trasporto in italiano.",
    study: {
      vocab: [
        ["Come arrivo a...?", "How do I get to...?"],
        ["Vada sempre dritto / Giri a sinistra / a destra", "Go straight ahead / Turn left / right"],
        ["la fermata dell'autobus, la stazione", "the bus stop, the train station"],
        ["È a due isolati da qui.", "It's two blocks from here."],
        ["Quanto tempo ci vuole per arrivare?", "How long does it take to get there?"]
      ],
      grammar: [
        ["L'imperativo per dare indicazioni", "Per dare istruzioni si usa l'imperativo (tu/Lei).", "Vada sempre dritto e giri a destra al semaforo."]
      ]
    },
    ex:[
      ["mcq","Vuoi arrivare al museo. Cosa chiedi?",["Come arrivo al museo?","Che ora è il museo?","Di chi è il museo?","Quanto costa l'autobus?"],0,"\"Come arrivo a...?\" è la domanda standard per chiedere indicazioni."],
      ["mcq","Qualcuno ti dice: \"Vada sempre dritto e giri a sinistra in piazza.\" Cosa devi fare prima?",["Camminare dritto.","Girare a destra.","Prendere l'autobus.","Chiedere di nuovo."],0,"\"Vada sempre dritto\" è la prima istruzione; la svolta viene dopo."],
      ["fill","Completa: \"La stazione ___ a due isolati da qui.\"",["è","sono","ha","fa"],0,"\"È\" concorda con il soggetto singolare \"la stazione\": \"La stazione è a due isolati da qui.\""],
      ["translate","Traduci: \"Turn right at the traffic light.\"",["Giri a destra al semaforo.","Giri a sinistra in piazza.","Vada dritto al semaforo.","Si fermi al semaforo."],0,"\"Turn right\" = \"Giri a destra\"; \"at the traffic light\" = \"al semaforo\"."],
      ["arrange","Metti in ordine: [autobus / prenda / fermata / l' / alla]",["Prenda l'autobus alla fermata","L'autobus prenda alla fermata","Alla fermata prenda l'autobus","Prenda alla fermata l'autobus"],0,"Verbo + oggetto + complemento di luogo: \"Prenda l'autobus alla fermata.\""],
      ["speaking","Spiega in italiano, in 40-60 parole, come arrivare da casa tua a un posto vicino. Usa almeno due indicazioni e un mezzo di trasporto.",[],["giri","dritto","minuti"],"Organizza la spiegazione in ordine: prima, poi, infine."]
    ]
  },
  {
    id:"it_b1_job_interview", level:"B1", title:"Il lavoro: colloqui e routine professionale", emoji:"💼", xp:60,
    description:"Parla della tua esperienza lavorativa e rispondi a domande di colloquio in italiano.",
    study: {
      vocab: [
        ["Di cosa ti occupi?", "What do you do for a living?"],
        ["ho esperienza in...", "I have experience in..."],
        ["i miei punti di forza / di debolezza", "my strengths / weaknesses"],
        ["lavorare in team, rispettare le scadenze", "to work as a team, to meet deadlines"],
        ["un contratto a tempo pieno / parziale", "a full-time / part-time contract"]
      ],
      grammar: [
        ["Il passato prossimo per l'esperienza", "Si usa il passato prossimo per parlare di esperienza lavorativa senza dire esattamente quando.", "Ho lavorato nel servizio clienti per tre anni."],
        ["Connettori per strutturare una risposta", "\"Da un lato... dall'altro\" aiuta a organizzare vantaggi e svantaggi.", "Da un lato mi piace lavorare in team, dall'altro apprezzo un po' di autonomia."]
      ]
    },
    ex:[
      ["mcq","In un colloquio ti chiedono: \"Di cosa ti occupi?\". Qual è una risposta appropriata?",["Lavoro come grafico in un'agenzia.","Sì, grazie, molto bene.","Ho venticinque anni.","Vivo in centro."],0,"\"Di cosa ti occupi?\" chiede la tua professione."],
      ["mcq","Quale risposta descrive meglio un punto di forza in modo professionale?",["Sono bravo a organizzare progetti e rispettare le scadenze.","Sono il migliore di tutti, senza dubbio.","Non ho nessun punto debole.","Lavoro quando ne ho voglia."],0,"Una buona risposta è specifica e verificabile, senza esagerare."],
      ["fill","Completa: \"___ lavorato nelle vendite per due anni.\"",["Ho","Sono","È","Hai"],0,"\"Ho lavorato\" (passato prossimo) descrive un'esperienza passata rilevante oggi."],
      ["translate","Traduci: \"I have experience working in a team.\"",["Ho esperienza nel lavoro di squadra.","Ho esperienza lavoro squadra.","Squadra ho esperienza lavoro.","Ho esperienza lavorando squadra è."],0,"\"I have experience working in a team\" = \"Ho esperienza nel lavoro di squadra.\""],
      ["arrange","Metti in ordine: [piace / lavorare / mi / squadra / in]",["Mi piace lavorare in squadra","Piace mi lavorare in squadra","In squadra mi piace lavorare","Lavorare mi piace in squadra"],0,"\"Mi piace\" + infinito: \"Mi piace lavorare in squadra.\""],
      ["writing","Scrivi in italiano una risposta di colloquio di 45-65 parole alla domanda \"Perché vuoi questo lavoro?\". Menziona la tua esperienza, un punto di forza e la tua motivazione.",[],["esperienza","perché","mi piacerebbe"],"Struttura: esperienza rilevante + punto di forza + motivazione concreta.","Colloquio per un ruolo nel servizio clienti."]
    ]
  },
  {
    id:"it_b2_media_literacy", level:"B2", title:"Media: analizzare le notizie", emoji:"📰", xp:78,
    description:"Distingui fatti da opinioni e valuta l'affidabilità di una notizia in italiano.",
    study: {
      vocab: [
        ["una fonte affidabile / inaffidabile", "a reliable / unreliable source"],
        ["secondo fonti vicine al caso", "according to sources close to the case"],
        ["un titolo sensazionalistico", "a sensationalist headline"],
        ["verificare incrociando le informazioni", "to cross-check information"],
        ["un fatto verificato, un'opinione", "a verified fact, an opinion"]
      ],
      grammar: [
        ["Verbi di attribuzione", "\"Secondo\", \"afferma che\", \"sottolinea che\" indicano da dove proviene un'affermazione e quanta certezza ha.", "Secondo il rapporto, le vendite sono aumentate del 10%."],
        ["Distinguere fatto e opinione", "Un fatto può essere verificato; un'opinione esprime un giudizio di valore.", "L'articolo afferma (opinione) che la misura 'sicuramente' fallirà, anche se i dati (fatto) sono ancora preliminari."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi è un fatto verificabile, non un'opinione?",["Il rapporto mostra che la disoccupazione è scesa del 2% questo trimestre.","Questa politica è chiaramente un disastro.","Tutti sanno che questa misura non funzionerà.","È ovvio che il governo si sbaglia."],0,"Un fatto verificabile cita una fonte e un dato concreto, senza giudizio di valore."],
      ["mcq","Titolo: \"Caos totale! Città sull'orlo della crisi dopo la nuova norma.\" Cosa suggerisce lo stile del titolo?",["Punta a un impatto emotivo più che a un'informazione precisa.","È un riassunto neutrale e oggettivo dei fatti.","Cita una fonte ufficiale verificabile.","Non contiene alcun giudizio di valore."],0,"Il linguaggio esagerato (\"caos totale\", \"sull'orlo della crisi\") è tipico del sensazionalismo."],
      ["fill","Completa: \"___ fonti vicine al progetto, il lancio sarà rinviato di un mese.\"",["Secondo","Sebbene","Perché","Tuttavia"],0,"\"Secondo\" introduce la fonte di un'informazione, indicando che non è un fatto confermato dal media stesso."],
      ["translate","Traduci: \"It is important to cross-check information before sharing it.\"",["È importante verificare incrociando le informazioni prima di condividerle.","È importante condividere le informazioni prima di verificarle.","È importante informazione condividere importante.","Verificare è condividere informazioni importanti prima."],0,"\"Cross-check information\" = \"verificare incrociando le informazioni\"; \"before sharing it\" = \"prima di condividerle\"."],
      ["mcq","Un articolo dice: \"Gli esperti avvertono che la cifra potrebbe essere sovrastimata.\" Che livello di certezza trasmette?",["Una possibilità ragionevole, non una certezza assoluta.","Una certezza totale e verificata.","Un'opinione personale del giornalista senza alcuna fonte.","Un fatto già dimostrato con dati definitivi."],0,"\"Potrebbe essere\" indica probabilità, non un'affermazione categorica."],
      ["writing","Scrivi in italiano un'analisi di 55-75 parole su una notizia (reale o inventata): identifica un fatto verificabile, un'opinione e valuta quanto ti sembra affidabile la fonte.",[],["secondo","fatto","opinione"],"Separa chiaramente cosa è un dato citato e cosa è una valutazione dell'autore."]
    ]
  },
  {
    id:"it_c1_figurative_language", level:"C1", title:"Linguaggio figurato e modi di dire", emoji:"🗯️", xp:88,
    description:"Interpreta modi di dire, metafore ed espressioni idiomatiche comuni in italiano.",
    study: {
      vocab: [
        ["costare un occhio della testa", "to cost an arm and a leg"],
        ["essere tra l'incudine e il martello", "to be between a rock and a hard place"],
        ["prendere in giro qualcuno", "to pull someone's leg"],
        ["non avere peli sulla lingua", "to not mince words"],
        ["darsi una mossa", "to get one's act together"]
      ],
      grammar: [
        ["Interpretare i modi di dire nel contesto", "Il significato di un modo di dire non è quasi mai letterale; va dedotto dal contesto comunicativo.", "\"Questo viaggio mi è costato un occhio della testa\" non parla di un occhio reale, ma di una spesa molto alta."]
      ]
    },
    ex:[
      ["mcq","\"Questa macchina mi è costata un occhio della testa.\" Cosa significa l'espressione?",["È stata molto costosa.","È stata molto economica.","La macchina si è danneggiata.","Ha avuto un incidente."],0,"\"Costare un occhio della testa\" significa che qualcosa ha avuto un prezzo molto alto."],
      ["mcq","Qualcuno dice: \"Sono tra l'incudine e il martello con questa decisione.\" Cosa comunica?",["Si trova davanti a due opzioni difficili, senza una via d'uscita comoda.","Si sente completamente tranquillo riguardo alla sua decisione.","Non ha nessuna opzione da considerare.","Ha già preso la decisione senza alcun dubbio."],0,"L'espressione descrive una situazione senza un'opzione chiaramente buona."],
      ["fill","Completa: \"Smettila di prendermi in ___, so che non è vero.\"",["giro","testa","piede","mano"],0,"\"Prendere in giro qualcuno\" significa scherzare o ingannare in modo leggero."],
      ["translate","Traduci in modo naturale (non letterale): \"No tiene pelos en la lengua.\"",["Non ha peli sulla lingua.","Non ha pelo sulla lingua.","La sua lingua non ha peli.","Lei mai peli lingua avere."],0,"\"No tener pelos en la lengua\" equivale a \"non avere peli sulla lingua\" in italiano."],
      ["mcq","In quale contesto si adatterebbe meglio \"darsi una mossa\"?",["Incoraggiare qualcuno a organizzarsi e agire con più energia.","Spiegare come caricare un dispositivo elettronico.","Descrivere il meteo di una città.","Scusarsi formalmente."],0,"\"Darsi una mossa\" è un'espressione colloquiale per incoraggiare qualcuno ad agire."],
      ["speaking","Scegli un modo di dire di questa lezione e spiega in 45-65 parole in quale situazione lo useresti e cosa significa letteralmente rispetto al suo senso reale.",[],["significa","situazione","letteralmente"],"Distingui chiaramente il senso letterale (a volte assurdo) dal senso idiomatico reale."]
    ]
  },
  {
    id:"it_c2_irony_humor", level:"C2", title:"Ironia, umorismo e ambiguità deliberata", emoji:"😏", xp:94,
    description:"Riconosci ironia, sarcasmo e ambiguità intenzionale nell'italiano di livello avanzato.",
    study: {
      vocab: [
        ["Che fortuna la mia!", "Just my luck! (ironico)"],
        ["con le migliori intenzioni (ironico)", "with the best of intentions (ironic)"],
        ["un doppio senso", "a double meaning"],
        ["dire qualcosa con tono sarcastico", "to say something with a sarcastic tone"],
        ["minimizzare deliberatamente qualcosa", "to understate something"]
      ],
      grammar: [
        ["Marcatori dell'ironia", "L'ironia si segnala di solito con il contesto, l'intonazione o un contrasto evidente tra ciò che si dice e la realtà, non con parole esplicite.", "\"Come sei puntuale!\" detto a chi arriva un'ora tardi è ironico per il contrasto."],
        ["Ambiguità deliberata", "A volte si sceglie un'espressione ambigua apposta per non impegnarsi del tutto su una posizione.", "\"Si potrebbe dire che il progetto ha avuto... risultati interessanti.\""]
      ]
    },
    ex:[
      ["mcq","Qualcuno arriva con un'ora di ritardo e un'altra persona dice: \"Come sei puntuale!\". Cosa comunica davvero?",["Il contrario di ciò che dice: la persona era molto in ritardo.","Un complimento sincero sulla puntualità.","Una domanda sull'ora.","Una scusa per il proprio ritardo."],0,"Il contrasto tra ciò che si dice e la realtà evidente è il segno tipico dell'ironia."],
      ["mcq","\"Con le migliori intenzioni, ha annullato la riunione senza avvisare nessuno.\" Che sfumatura porta \"con le migliori intenzioni\" qui?",["Un tono ironico: segnala che l'azione non è stata davvero ponderata.","Un elogio sincero verso la persona.","Una spiegazione letterale e neutra del fatto.","Una scusa formale da parte del narratore."],0,"Il contrasto tra la frase e l'azione (annullare senza avvisare) genera un effetto ironico."],
      ["fill","\"Si potrebbe dire che il progetto ha avuto... risultati ___.\" (ambiguità deliberata, senza esporsi)",["interessanti","eccellenti","catastrofici","perfetti"],0,"\"Interessanti\" è deliberatamente ambiguo: non conferma né nega il successo del progetto."],
      ["translate","Traduci con la stessa sfumatura ironica: \"Genial, otro lunes.\" (detto con fastidio)",["Fantastico, un altro lunedì.","Il lunedì è un gran giorno.","Che gioia, è venerdì.","Odio totalmente i lunedì."],0,"Il tono ironico si mantiene con \"Fantastico\" seguito da qualcosa di oggettivamente poco entusiasmante."],
      ["mcq","Che funzione ha la minimizzazione in \"Il terremoto ha causato... alcuni danni minori\" quando in realtà è stato devastante?",["Attenua deliberatamente la gravità per creare un effetto ironico o critico.","Descrive la situazione in modo completamente letterale e preciso.","Esagera la portata dell'evento.","Elimina ogni possibile interpretazione ironica."],0,"La minimizzazione contrasta la reale portata con una descrizione ridotta, generando ironia."],
      ["writing","Scrivi in italiano un breve commento (50-70 parole) con ironia sottile su una situazione quotidiana fastidiosa (il traffico, una lunga fila, ecc.), senza insulti né linguaggio esplicito.",[],["che fortuna","fantastico","certo"],"L'ironia deve notarsi dal contrasto tra il tono positivo e la situazione negativa, non affermandolo direttamente."]
    ]
  },
  {
    id:"it_a1_house_rooms", level:"A1", title:"La casa: stanze e mobili", emoji:"🏠", xp:35,
    description:"Impara il vocabolario delle stanze, dei mobili e degli oggetti di una casa in italiano.",
    study: {
      vocab: [
        ["la cucina, il bagno, la camera da letto, il soggiorno", "the kitchen, the bathroom, the bedroom, the living room"],
        ["il letto, il tavolo, la sedia, il divano", "the bed, the table, the chair, the sofa"],
        ["Dov'è la cucina?", "Where is the kitchen?"],
        ["Il letto è in camera da letto.", "The bed is in the bedroom."],
        ["sopra, sotto, accanto a", "on top of, under, next to"]
      ],
      grammar: [
        ["\"C'è / Ci sono\" per situare oggetti", "\"C'è\" (singolare) e \"ci sono\" (plurale) indicano cosa si trova in un luogo.", "C'è un tavolo in cucina. Ci sono due sedie accanto."]
      ]
    },
    ex:[
      ["mcq","Dove dormi di solito?",["In camera da letto.","In cucina.","In bagno.","In soggiorno."],0,"\"La camera da letto\" è la stanza dove si dorme."],
      ["mcq","Qual è il modo corretto di chiedere dove si trova qualcosa?",["Dov'è la cucina?","Cos'è la cucina?","Quando è la cucina?","Chi è la cucina?"],0,"\"Dov'è...?\" chiede dove si trova qualcosa."],
      ["fill","Completa: \"Il divano è ___ alla finestra.\"",["accanto","sopra","sotto","dietro"],0,"\"Accanto a\" indica che due cose sono una vicino all'altra."],
      ["translate","Traduci: \"The bed is in the bedroom.\"",["Il letto è in camera da letto.","Il letto è in cucina.","La sedia è in camera da letto.","Il letto è la camera da letto."],0,"\"The bed is in the bedroom\" = \"Il letto è in camera da letto.\""],
      ["arrange","Metti in ordine: [cucina / tavolo / c'è / in / un]",["C'è un tavolo in cucina","In cucina c'è un tavolo","Un tavolo c'è in cucina","C'è in cucina un tavolo"],0,"\"C'è\" + oggetto + \"in\" + luogo: \"C'è un tavolo in cucina.\""],
      ["writing","Descrivi in 20-30 parole la tua casa o il tuo appartamento in italiano: quali stanze ci sono e quali mobili si trovano in una di esse.",[],["camera da letto","c'è","ci sono"],"Menziona almeno due stanze e due mobili."]
    ]
  },
  {
    id:"it_a2_health_pharmacy", level:"A2", title:"La salute: sintomi e la farmacia", emoji:"💊", xp:44,
    description:"Descrivi sintomi comuni e chiedi aiuto in farmacia o dal medico in italiano.",
    study: {
      vocab: [
        ["Mi fa male la testa / lo stomaco / la gola.", "My head / stomach / throat hurts."],
        ["Ho la febbre, la tosse, la nausea.", "I have a fever, a cough, nausea."],
        ["Ha qualcosa per il mal di testa?", "Do you have something for a headache?"],
        ["Prenda una pastiglia ogni otto ore.", "Take one pill every eight hours."],
        ["prendere appuntamento dal medico", "to make a doctor's appointment"]
      ],
      grammar: [
        ["\"Fare male\" come \"piacere\"", "\"Fare male\" funziona come \"piacere\": concorda con la parte del corpo, non con la persona.", "Mi fa male la testa. / Mi fanno male i piedi."]
      ]
    },
    ex:[
      ["mcq","Hai mal di testa. Cosa dici?",["Mi fa male la testa.","Mi piace la testa.","Ho la testa.","Sono la testa."],0,"\"Mi fa male la testa\" descrive il sintomo con \"fare male\"."],
      ["mcq","In farmacia, cosa chiedi per avere un medicinale?",["Ha qualcosa per il mal di testa?","Dov'è il mal di testa?","Quando è il mal di testa?","Perché ha mal di testa?"],0,"\"Ha qualcosa per...?\" è il modo naturale di chiedere un medicinale."],
      ["fill","Completa: \"Mi ___ i piedi dopo aver corso.\"",["fanno male","fa male","dolore","doloroso"],0,"\"Fare male\" concorda al plurale con \"i piedi\": \"mi fanno male i piedi\"."],
      ["translate","Traduci: \"I have a fever and a cough.\"",["Ho la febbre e la tosse.","Ho febbre e tossa.","Sono febbre e tosse.","Mi fa male febbre e tosse."],0,"\"I have a fever and a cough\" = \"Ho la febbre e la tosse\", con il verbo \"avere\"."],
      ["arrange","Metti in ordine: [otto / ore / pastiglia / ogni / una / prenda]",["Prenda una pastiglia ogni otto ore","Ogni otto ore prenda una pastiglia","Una pastiglia prenda ogni otto ore","Prenda ogni otto ore una pastiglia"],0,"Imperativo + oggetto + frequenza: \"Prenda una pastiglia ogni otto ore.\""],
      ["speaking","Descrivi in italiano, in 40-60 parole, una volta in cui ti sei sentito/a male: quali sintomi avevi e cosa hai fatto.",[],["mi faceva male","avevo","sono andato/a"],"Usa almeno due sintomi e un'azione che hai intrapreso per sentirti meglio."]
    ]
  },
  {
    id:"it_b1_tech_social_media", level:"B1", title:"Tecnologia e social media", emoji:"📱", xp:58,
    description:"Parla dell'uso della tecnologia e dei social media, dei loro vantaggi e rischi, in italiano.",
    study: {
      vocab: [
        ["pubblicare, condividere, commentare", "to post, to share, to comment"],
        ["essere connesso / disconnettersi", "to be online / to log off"],
        ["la privacy, i dati personali", "privacy, personal data"],
        ["dipendere dal telefono", "to be dependent on your phone"],
        ["restare in contatto con", "to keep in touch with"]
      ],
      grammar: [
        ["Confrontare vantaggi e svantaggi", "\"Da un lato... dall'altro\" e \"mentre\" aiutano a confrontare due idee.", "Da un lato i social aiutano a restare in contatto; dall'altro possono portare via molto tempo."]
      ]
    },
    ex:[
      ["mcq","Qual è un vantaggio reale dei social media?",["Aiutano a restare in contatto con amici lontani.","Dicono sempre tutta la verità.","Non influenzano mai la privacy.","Non hanno bisogno di connessione internet."],0,"Restare in contatto con persone lontane è un vantaggio concreto e verificabile."],
      ["mcq","Quale frase esprime preoccupazione per la privacy?",["Mi preoccupa come usano i miei dati personali.","Adoro condividere tutto senza pensarci.","Non uso mai internet.","Pubblico foto ogni cinque minuti."],0,"La preoccupazione per i dati personali è un tema centrale della privacy digitale."],
      ["fill","Completa: \"___ un lato mi piace essere connesso, dall'altro ho bisogno di disconnettermi a volte.\"",["Da","In","Di","A"],0,"\"Da un lato... dall'altro\" è la struttura per confrontare due idee."],
      ["translate","Traduci: \"I try not to depend on my phone too much.\"",["Cerco di non dipendere troppo dal mio telefono.","Cerco di non dipendere molto mio telefono.","Non cerco di dipendere dal mio telefono.","Dipendere dal mio telefono cerco di non."],0,"\"Dipendere da\" + sostantivo: \"dipendere dal mio telefono\"."],
      ["arrange","Metti in ordine: [aiuta / contatto / mi / restare / a / in / con gli amici]",["Mi aiuta a restare in contatto con gli amici","Aiuta mi a restare in contatto con gli amici","In contatto mi aiuta a restare con gli amici","Mi aiuta in contatto a restare con gli amici"],0,"\"Mi aiuta a\" + infinito: \"Mi aiuta a restare in contatto con gli amici.\""],
      ["writing","Scrivi in italiano 45-65 parole sul tuo rapporto con i social media: un vantaggio, un rischio e cosa fai per equilibrarli.",[],["da un lato","dall'altro","privacy"],"Struttura: vantaggio + rischio + un'azione concreta per equilibrare entrambi."]
    ]
  },
  {
    id:"it_b2_ethical_dilemmas", level:"B2", title:"Dilemmi etici: argomentare a favore e contro", emoji:"⚖️", xp:80,
    description:"Presenta e soppesa argomenti su dilemmi etici comuni in italiano.",
    study: {
      vocab: [
        ["a favore di / contro", "in favor of / against"],
        ["da un punto di vista etico", "from an ethical point of view"],
        ["il bene comune, l'interesse individuale", "the common good, individual interest"],
        ["giustificare una decisione", "to justify a decision"],
        ["non c'è una risposta unica", "there is no single answer"]
      ],
      grammar: [
        ["Strutturare un argomento equilibrato", "Presentare prima un argomento, poi quello opposto, e chiudere con una posizione sfumata evita il pregiudizio.", "Alcuni sostengono che..., mentre altri affermano che... A mio parere, entrambe le posizioni hanno un senso."]
      ]
    },
    ex:[
      ["mcq","Quale frase presenta un argomento in modo equilibrato?",["Alcuni sostengono che..., mentre altri affermano che...","Tutti sanno che ho ragione.","È ovvio che l'altra posizione è sbagliata.","Non c'è nessun argomento contrario."],0,"Presentare entrambi i lati prima di dare la propria opinione è tipico di un argomento equilibrato a livello B2."],
      ["mcq","Un dilemma etico tipico è \"il bene comune contro l'interesse individuale\". Cosa significa?",["Un conflitto tra ciò che avvantaggia tutti e ciò che avvantaggia una sola persona.","Una decisione che non riguarda nessuno.","Un argomento senza alcuna importanza sociale.","Una scelta puramente economica senza etica coinvolta."],0,"Il dilemma nasce quando il meglio per la comunità non coincide con il meglio per un individuo."],
      ["fill","Completa: \"___ un punto di vista etico, la decisione è discutibile.\"",["Da","Per","Con","A"],0,"\"Da un punto di vista etico\" è l'espressione standard per introdurre una prospettiva."],
      ["translate","Traduci: \"There is no single answer to this dilemma.\"",["Non c'è una risposta unica a questo dilemma.","Non c'è una risposta unica questo dilemma.","Questo dilemma non c'è una risposta unica.","Una risposta unica non c'è per questo dilemma."],0,"\"There is no single answer\" = \"Non c'è una risposta unica.\""],
      ["mcq","Quale di queste frasi giustifica una decisione in modo ragionato, non emotivo?",["Si è deciso così perché i benefici superavano i rischi a lungo termine.","Si è deciso così e basta.","Si è deciso così perché tutti lo volevano senza pensarci.","Si è deciso così perché è sempre stato fatto così."],0,"Una giustificazione ragionata confronta esplicitamente benefici e rischi."],
      ["writing","Scegli un dilemma etico quotidiano (ad esempio, dire una bugia pietosa) e scrivi in italiano 55-75 parole presentando un argomento a favore, uno contro e la tua conclusione sfumata.",[],["a favore","contro","tuttavia"],"Struttura: argomento a favore + argomento contro + conclusione sfumata, non assoluta."]
    ]
  },
  {
    id:"it_c1_academic_citing", level:"C1", title:"Discorso accademico: citare e parafrasare", emoji:"🎓", xp:90,
    description:"Impara a citare fonti, parafrasare idee ed evitare il plagio in un registro accademico in italiano.",
    study: {
      vocab: [
        ["secondo (autore, anno)", "according to (author, year)"],
        ["come sottolinea/sostiene l'autore", "as the author points out/argues"],
        ["parafrasare un'idea", "to paraphrase an idea"],
        ["citare testualmente", "to quote directly"],
        ["il plagio, le fonti affidabili", "plagiarism, reliable sources"]
      ],
      grammar: [
        ["Verbi per introdurre citazioni altrui", "\"Sostiene che\", \"afferma che\", \"sottolinea che\" variano la sfumatura: non tutti implicano lo stesso grado di certezza.", "L'autore sostiene che la politica sia stata un errore; altri ricercatori, invece, sottolineano sfumature importanti."],
        ["Parafrasare senza copiare la struttura", "Parafrasare implica cambiare sia le parole sia l'ordine delle idee, non solo qualche sinonimo.", "Originale: 'Lo studio dimostra che l'esercizio riduce lo stress.' Parafrasi: 'Secondo la ricerca, l'attività fisica aiuta a diminuire i livelli di stress.'"]
      ]
    },
    ex:[
      ["mcq","Quale di queste opzioni è una parafrasi corretta, non una copia mascherata?",["Secondo la ricerca, l'attività fisica aiuta a diminuire i livelli di stress.","Lo studio dimostra che l'esercizio riduce totalmente lo stress.","Lo studio dimostra in effetti che l'esercizio riduce lo stress.","Dimostra lo studio che riduce lo stress l'esercizio."],0,"Una buona parafrasi cambia struttura e vocabolario, non solo una o due parole."],
      ["mcq","Quale verbo trasmette maggiore distanza critica dall'autore citato?",["L'autore suggerisce che...","L'autore dimostra categoricamente che...","L'autore prova senza dubbio che...","L'autore conferma definitivamente che..."],0,"\"Suggerisce\" indica un'affermazione più cauta, tipica di un'analisi critica rigorosa."],
      ["fill","Completa: \"___ sottolinea il rapporto, la misura ha avuto un impatto limitato.\"",["Come","Perché","Sebbene","Tuttavia"],0,"\"Come sottolinea il rapporto\" introduce un'idea attribuita a una fonte in modo fluido."],
      ["translate","Traduci: \"According to the author, the results are inconclusive.\"",["Secondo l'autore, i risultati sono poco conclusivi.","Secondo l'autore, i risultati sono conclusivi.","L'autore secondo risultati poco conclusivi.","I risultati secondo l'autore sono conclusivi non."],0,"\"According to the author\" = \"Secondo l'autore\"; \"inconclusive\" = \"poco conclusivi\"."],
      ["mcq","Quale di queste pratiche costituisce plagio accademico?",["Copiare una frase testuale senza virgolette né riferimento alla fonte.","Citare testualmente tra virgolette con il relativo riferimento.","Parafrasare un'idea e citare la fonte originale.","Riassumere un articolo menzionando da dove proviene."],0,"Copiare senza virgolette né riferimento, anche una sola frase, è considerato plagio."],
      ["writing","Scrivi in italiano un paragrafo accademico di 55-75 parole che parafrasi (senza copiare) questa idea: 'L'accesso a internet ha cambiato profondamente il modo in cui le persone si informano.' Cita la fonte come (Autore, 2023).",[],["secondo","sostiene","(Autore, 2023)"],"Non copiare la frase originale: cambia struttura e vocabolario mantenendo l'idea."]
    ]
  },
  {
    id:"it_c2_logical_fallacies", level:"C2", title:"Fallacie logiche e persuasione", emoji:"🧠", xp:96,
    description:"Individua fallacie logiche e strategie di persuasione in argomentazioni di alto livello in italiano.",
    study: {
      vocab: [
        ["l'attacco personale (ad hominem)", "ad hominem attack"],
        ["la falsa dicotomia", "false dichotomy"],
        ["la china scivolosa", "slippery slope"],
        ["generalizzare da un solo caso", "to generalize from a single case"],
        ["fare appello all'emozione invece che ai fatti", "to appeal to emotion instead of facts"]
      ],
      grammar: [
        ["Identificare le fallacie nel discorso", "Una fallacia sembra un argomento valido ma la sua struttura logica è difettosa, anche se suona persuasiva.", "\"Se permettiamo questo, presto tutto sfuggirà al controllo\" è una china scivolosa: presuppone una catena di conseguenze senza prove."]
      ]
    },
    ex:[
      ["mcq","\"Non dovresti ascoltare il suo argomento economico: tra l'altro, è una persona sgradevole.\" Che fallacia è questa?",["Attacco personale (ad hominem): screditare la persona, non l'argomento.","Falsa dicotomia: riduce le opzioni a solo due.","China scivolosa: predice una catena di conseguenze.","Generalizzazione affrettata da un solo caso."],0,"L'ad hominem attacca chi propone l'argomento invece di confutare l'argomento stesso."],
      ["mcq","\"O sostieni questa legge esattamente com'è, o non ti importa della sicurezza di nessuno.\" Che fallacia è questa?",["Falsa dicotomia: presenta solo due opzioni quando sono possibili più sfumature.","Un attacco personale contro l'interlocutore.","Un appello all'emozione senza alcun argomento logico.","Una generalizzazione basata su un singolo caso isolato."],0,"La falsa dicotomia nasconde opzioni intermedie valide, presentando solo due estremi."],
      ["fill","\"Se permettiamo questa eccezione, presto crollerà tutto il sistema.\" Questa frase è un esempio di ___.",["china scivolosa","attacco personale","falsa dicotomia","appello all'autorità"],0,"La china scivolosa presuppone, senza prove sufficienti, una catena inevitabile di conseguenze negative."],
      ["translate","Traduci con precisione tecnica: \"This is a classic false dichotomy.\"",["Questa è una classica falsa dicotomia.","Questa è una falsa dicotomia classica è.","Classica questa falsa dicotomia è.","Questa falsa è dicotomia classica."],0,"\"False dichotomy\" si traduce tecnicamente come \"falsa dicotomia\"."],
      ["mcq","Una pubblicità mostra immagini di bambini che piangono per vendere un prodotto di beneficenza senza fornire dati concreti sul suo impatto. Quale strategia usa principalmente?",["Un appello all'emozione invece che ai fatti verificabili.","Un argomento logico rigoroso basato su dati.","Una generalizzazione statistica precisa.","Una citazione da una fonte accademica affidabile."],0,"Usare immagini emotive senza dati concreti significa fare appello all'emozione invece che alla prova."],
      ["writing","Individua e spiega in italiano, in 55-75 parole, una fallacia logica che hai sentito in un dibattito, in una pubblicità o in una discussione recente (reale o inventata). Nomina la fallacia e spiega perché l'argomento è fuorviante nonostante suoni convincente.",[],["fallacia","perché","anche se sembra"],"Nomina esplicitamente il tipo di fallacia (ad hominem, falsa dicotomia, china scivolosa, ecc.) e giustifica la tua identificazione."]
    ]
  },
  {
    id:"it_a1_emotions_feelings", level:"A1", title:"Le emozioni: come ti senti", emoji:"😊", xp:35,
    description:"Impara a esprimere emozioni e sentimenti di base in italiano.",
    study: {
      vocab: [
        ["essere felice, triste, stanco, arrabbiato", "to be happy, sad, tired, angry"],
        ["Come ti senti?", "How do you feel?"],
        ["Sono un po' nervoso/a.", "I'm a bit nervous."],
        ["avere paura, avere sonno, avere fame", "to be afraid, to be sleepy, to be hungry"],
        ["Perché sei triste?", "Why are you sad?"]
      ],
      grammar: [
        ["\"Essere\" con le emozioni", "Le emozioni si esprimono con \"essere\" + aggettivo.", "Sono felice oggi. / È stanca dopo il lavoro."]
      ]
    },
    ex:[
      ["mcq","Come chiedi a qualcuno come si sente?",["Come ti senti?","Come ti chiami?","Dove vivi?","Quanti anni hai?"],0,"\"Come ti senti?\" chiede lo stato emotivo di qualcuno."],
      ["mcq","Hai molto lavoro e poco riposo. Come ti senti?",["Sono stanco/a.","Sono felice.","Ho fame.","Ho freddo."],0,"Molto lavoro e poco riposo portano tipicamente a sentirsi \"stanco/a\"."],
      ["fill","Completa: \"___ un po' nervoso prima dell'esame.\"",["Sono","Sei","Ho","Faccio"],0,"Le emozioni si esprimono con \"essere\": \"Sono un po' nervoso.\""],
      ["translate","Traduci: \"Why are you sad?\"",["Perché sei triste?","Perché essere triste?","Perché tu hai triste?","Perché fai triste?"],0,"\"Why are you sad?\" = \"Perché sei triste?\", con \"essere\" per uno stato emotivo."],
      ["arrange","Metti in ordine: [lavoro / stanca / dopo / sono / il]",["Sono stanca dopo il lavoro","Dopo il lavoro sono stanca","Stanca sono dopo il lavoro","Sono dopo il lavoro stanca"],0,"Soggetto + \"sono\" + aggettivo + complemento di tempo: \"Sono stanca dopo il lavoro.\""],
      ["writing","Scrivi in italiano 20-30 parole descrivendo come ti senti oggi e perché. Usa almeno due emozioni diverse.",[],["sono","perché","mi sento"],"Menziona una ragione concreta per ogni emozione che descrivi."]
    ]
  },
  {
    id:"it_a2_hobbies_weekend", level:"A2", title:"Il tempo libero: hobby e piani per il weekend", emoji:"🎨", xp:44,
    description:"Parla dei tuoi hobby e dei tuoi piani per il fine settimana in italiano.",
    study: {
      vocab: [
        ["Cosa ti piace fare nel tempo libero?", "What do you like to do in your free time?"],
        ["dipingere, suonare uno strumento, fare escursioni", "to paint, to play an instrument, to go hiking"],
        ["Che piani hai per il weekend?", "What plans do you have for the weekend?"],
        ["sto per + infinito / vado a + infinito", "I'm going to + infinitive"],
        ["vedersi con gli amici", "to meet up with friends"]
      ],
      grammar: [
        ["\"Andare a\" + infinito per i piani", "Si usa \"andare a\" + infinito per parlare di piani futuri vicini.", "Sabato vado a vedermi con gli amici."]
      ]
    },
    ex:[
      ["mcq","Come chiedi gli hobby di qualcuno?",["Cosa ti piace fare nel tempo libero?","Che ore sono?","Dove lavori?","Quanti fratelli hai?"],0,"\"Cosa ti piace fare nel tempo libero?\" chiede specificamente gli hobby."],
      ["mcq","Quale di queste frasi descrive un piano futuro vicino?",["Sabato vado a vedermi con gli amici.","Sabato mi sono visto con gli amici.","Sabato mi vedo sempre con gli amici.","Sabato mi vedevo con gli amici."],0,"\"Andare a\" + infinito esprime un piano futuro concreto e vicino."],
      ["fill","Completa: \"Questo weekend ___ a fare escursioni.\"",["vado","sono","ho","faccio"],0,"\"Andare a\" + infinito: \"vado a fare escursioni\"."],
      ["translate","Traduci: \"What plans do you have for the weekend?\"",["Che piani hai per il weekend?","Che piani sei per il weekend?","Che piani fai il weekend hai?","Per il weekend che piani sei?"],0,"\"What plans do you have for the weekend?\" = \"Che piani hai per il weekend?\""],
      ["arrange","Metti in ordine: [strumento / suonare / mi / uno / piace]",["Mi piace suonare uno strumento","Piace mi suonare uno strumento","Uno strumento mi piace suonare","Suonare mi piace uno strumento"],0,"\"Mi piace\" + infinito: \"Mi piace suonare uno strumento.\""],
      ["speaking","Spiega in italiano, in 40-60 parole, i tuoi hobby preferiti e i tuoi piani per il prossimo weekend.",[],["mi piace","vado a","vedermi"],"Menziona almeno due hobby e un piano concreto usando \"vado a\"."]
    ]
  },
  {
    id:"it_b1_environment_sustainability", level:"B1", title:"L'ambiente: abitudini sostenibili", emoji:"🌱", xp:60,
    description:"Parla della tutela dell'ambiente e delle abitudini sostenibili in italiano.",
    study: {
      vocab: [
        ["riciclare, riutilizzare, ridurre i consumi", "to recycle, to reuse, to reduce consumption"],
        ["il cambiamento climatico, l'impronta di carbonio", "climate change, carbon footprint"],
        ["i prodotti monouso", "single-use products"],
        ["risparmiare energia / acqua", "to save energy / water"],
        ["prendere provvedimenti per proteggere il pianeta", "to take steps to protect the planet"]
      ],
      grammar: [
        ["Il futuro semplice per le conseguenze", "Il futuro semplice descrive conseguenze probabili di azioni attuali.", "Se non riduciamo la plastica, l'inquinamento aumenterà."]
      ]
    },
    ex:[
      ["mcq","Quale di queste azioni aiuta a ridurre l'impronta di carbonio?",["Usare i mezzi pubblici invece dell'auto.","Comprare più prodotti monouso.","Lasciare le luci accese tutto il giorno.","Usare l'auto per tragitti molto brevi."],0,"I mezzi pubblici riducono le emissioni individuali di carbonio."],
      ["mcq","Quale frase descrive correttamente una conseguenza futura probabile?",["Se non riduciamo la plastica, l'inquinamento aumenterà.","Se non riduciamo la plastica, l'inquinamento è aumentato.","Se non riduciamo la plastica, l'inquinamento aumenta ieri.","Se non riduciamo la plastica, inquinamento aumentare."],0,"Il futuro semplice (\"aumenterà\") esprime una conseguenza probabile di una condizione attuale."],
      ["fill","Completa: \"È importante ___ acqua, soprattutto in estate.\"",["risparmiare","spendere","buttare","comprare"],0,"\"Risparmiare acqua\" è l'espressione corretta per ridurne il consumo."],
      ["translate","Traduci: \"We should reduce the use of single-use products.\"",["Dovremmo ridurre l'uso di prodotti monouso.","Dovremmo ridurre l'uso di prodotto monouso.","Ridurre dovremmo prodotti monouso l'uso.","Dovremmo usare prodotti monouso ridurre."],0,"\"Single-use products\" = \"prodotti monouso\"; \"we should reduce\" = \"dovremmo ridurre\"."],
      ["arrange","Metti in ordine: [riciclare / importante / è / vetro / il]",["È importante riciclare il vetro","Il vetro è importante riciclare","Importante è riciclare il vetro","È riciclare importante il vetro"],0,"\"È importante\" + infinito + oggetto: \"È importante riciclare il vetro.\""],
      ["writing","Scrivi in italiano 45-65 parole su tre abitudini sostenibili che pratichi o vorresti iniziare a praticare, e perché sono importanti.",[],["riciclare","risparmiare","impronta di carbonio"],"Menziona almeno tre abitudini concrete e una ragione per ciascuna."]
    ]
  },
  {
    id:"it_b2_ai_future_work", level:"B2", title:"Intelligenza artificiale e il futuro del lavoro", emoji:"🤖", xp:80,
    description:"Discuti l'impatto dell'intelligenza artificiale sul lavoro, con argomenti sfumati in italiano.",
    study: {
      vocab: [
        ["automatizzare compiti ripetitivi", "to automate repetitive tasks"],
        ["sostituire posti di lavoro", "to replace jobs"],
        ["adattarsi a nuovi strumenti", "to adapt to new tools"],
        ["generare nuove opportunità di lavoro", "to generate new job opportunities"],
        ["dipende da come viene implementata", "it depends on how it's implemented"]
      ],
      grammar: [
        ["Il futuro anteriore per la speculazione", "\"Avrà\" + participio passato specula su ciò che probabilmente sarà accaduto entro un certo momento futuro.", "Entro il 2030, l'IA avrà cambiato molti settori."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi presenta una posizione sfumata sull'IA e l'occupazione?",["Dipende da come viene implementata: può automatizzare compiti ma anche creare nuovi posti di lavoro.","L'IA distruggerà tutti i lavori, senza eccezioni.","L'IA non influisce affatto sull'occupazione.","Non c'è alcun dubbio sul futuro del lavoro."],0,"Una posizione sfumata riconosce entrambi gli effetti possibili, senza assoluti."],
      ["mcq","Cosa significa \"automatizzare compiti ripetitivi\"?",["Far svolgere a una macchina compiti che prima venivano fatti manualmente e ripetutamente da una persona.","Assumere più persone per compiti ripetitivi.","Eliminare completamente tutti i compiti di un'azienda.","Aumentare lo stipendio di chi svolge compiti ripetitivi."],0,"Automatizzare significa che un sistema svolge il compito al posto di una persona."],
      ["fill","Completa: \"Entro il 2030, l'intelligenza artificiale ___ cambiato molti settori.\"",["avrà","aveva","ha","avrebbe"],0,"Il futuro anteriore (\"avrà cambiato\") specula su qualcosa che probabilmente sarà accaduto entro una data futura."],
      ["translate","Traduci: \"Algunos empleos se automatizarán, pero también se crearán otros nuevos.\"",["Some jobs will be automated, but new ones will also be created.","Some jobs will automate, but new ones will also create.","Jobs some will be automated, but new ones will create.","Some jobs will be automated, but also new ones created."],0,"Entrambe le frasi usano \"will\": \"will be automated\" e \"will be created\"."],
      ["mcq","Quale di queste affermazioni mostra pensiero critico, non un'opinione senza fondamento?",["L'impatto dell'IA sui posti di lavoro dipenderà dal settore e da come viene gestita la transizione.","L'IA è sempre buona per tutti, senza eccezioni.","L'IA è sempre negativa per tutti, senza eccezioni.","Non vale la pena pensare al futuro del lavoro."],0,"Riconoscere che l'impatto dipende da fattori concreti (settore, gestione) è pensiero critico e sfumato."],
      ["writing","Scrivi in italiano 55-75 parole su come pensi che l'intelligenza artificiale cambierà il tuo campo di lavoro o studio nei prossimi anni. Includi un aspetto positivo e uno preoccupante.",[],["automatizzare","dipende da","tuttavia"],"Evita gli assoluti: riconosci sia vantaggi che rischi concreti."]
    ]
  },
  {
    id:"it_c1_advertising_persuasion", level:"C1", title:"Il linguaggio pubblicitario: persuasione e connotazione", emoji:"📢", xp:88,
    description:"Analizza come il linguaggio pubblicitario usa la connotazione e le tecniche di persuasione.",
    study: {
      vocab: [
        ["una connotazione positiva / negativa", "a positive / negative connotation"],
        ["fare appello al desiderio di appartenenza", "to appeal to the desire to belong"],
        ["uno slogan orecchiabile", "a catchy slogan"],
        ["creare un senso di urgenza", "to create a sense of urgency"],
        ["il pubblico di riferimento", "the target audience"]
      ],
      grammar: [
        ["Connotazione contro denotazione", "La denotazione è il significato letterale di una parola; la connotazione è la carica emotiva o culturale associata.", "\"Casa\" (denotazione: edificio) contro \"focolare\" (connotazione: calore, appartenenza)."]
      ]
    },
    ex:[
      ["mcq","Una pubblicità usa la parola \"focolare\" invece di \"casa\". Cosa ottiene con questo?",["Aggiunge una connotazione emotiva di calore e appartenenza.","Cambia completamente il significato letterale.","Elimina qualsiasi interpretazione emotiva.","Non ha alcun effetto sul messaggio."],0,"\"Focolare\" ha connotazioni emotive che \"casa\" non trasmette allo stesso modo."],
      ["mcq","\"Solo 3 pezzi rimasti, acquista ora!\" Quale tecnica di persuasione usa questa frase?",["Creare un senso di urgenza per motivare una decisione rapida.","Fare appello esclusivamente a dati tecnici oggettivi.","Offrire un confronto neutrale con altri prodotti.","Descrivere il prodotto senza alcuna pressione."],0,"Menzionare unità limitate e urgenza spinge a decidere senza pensarci troppo."],
      ["fill","Completa: \"Questa pubblicità è rivolta a un pubblico di ___ molto specifico: giovani professionisti.\"",["riferimento","testo","autore","lettore"],0,"\"Pubblico di riferimento\" è l'espressione standard per indicare l'audience a cui si rivolge un messaggio."],
      ["translate","Traduci: \"The slogan appeals to the desire to belong.\"",["Lo slogan fa appello al desiderio di appartenenza.","Lo slogan appello al desiderio di appartenenza.","Il desiderio di appartenenza fa appello allo slogan.","Lo slogan fare appello al desiderio di appartenenza."],0,"\"Appeals to\" = \"fa appello a\"; \"the desire to belong\" = \"il desiderio di appartenenza\"."],
      ["mcq","Quale di queste parole ha una connotazione più positiva del suo sinonimo più neutro?",["\"Esclusivo\" contro \"limitato\".","\"Prodotto\" contro \"articolo\".","\"Comprare\" contro \"acquisire\".","\"Pubblicità\" contro \"annuncio\"."],0,"\"Esclusivo\" aggiunge una connotazione di prestigio e distinzione che \"limitato\" non trasmette allo stesso modo."],
      ["writing","Scegli una pubblicità reale o inventata e scrivi in italiano 55-75 parole analizzando: quali connotazioni usa, a quale pubblico di riferimento si rivolge e quale tecnica di persuasione impiega.",[],["connotazione","pubblico di riferimento","urgenza"],"Identifica almeno una parola con connotazione specifica e una tecnica di persuasione concreta."]
    ]
  },
  {
    id:"it_c2_political_discourse", level:"C2", title:"Il discorso politico: ambiguità strategica ed eufemismo", emoji:"🎙️", xp:96,
    description:"Analizza l'ambiguità strategica e l'eufemismo nel discorso politico di alto livello in italiano.",
    study: {
      vocab: [
        ["un eufemismo", "a euphemism"],
        ["l'ambiguità strategica", "strategic ambiguity"],
        ["eludere una domanda diretta", "to dodge a direct question"],
        ["un aggiustamento di bilancio (eufemismo per taglio)", "a budget adjustment (euphemism for a cut)"],
        ["impegnarsi senza impegnarsi del tutto", "to commit without fully committing"]
      ],
      grammar: [
        ["Riconoscere l'eufemismo politico", "Un eufemismo sostituisce un'espressione diretta con una più morbida, spesso per attenuare una realtà scomoda.", "\"Aggiustamento di bilancio\" suona più neutrale di \"taglio di spesa\", anche se descrive la stessa cosa."],
        ["Ambiguità strategica", "I politici a volte scelgono deliberatamente frasi vaghe per evitare di impegnarsi su una posizione chiara.", "\"Stiamo valutando tutte le opzioni\" non dice quale opzione verrà effettivamente scelta."]
      ]
    },
    ex:[
      ["mcq","Un politico dice \"aggiustamento di bilancio\" invece di \"taglio di spesa\". Cosa ottiene con questo?",["Attenua l'impatto negativo della misura tramite un eufemismo.","Cambia completamente il significato della misura.","Rende la misura più trasparente e diretta.","Elimina qualsiasi interpretazione negativa possibile."],0,"L'eufemismo attenua la percezione senza cambiare la realtà della misura."],
      ["mcq","\"Stiamo valutando tutte le opzioni\" detto di fronte a una domanda diretta. Che funzione svolge questa frase?",["Elude un impegno chiaro tramite ambiguità strategica.","Dà una risposta completamente trasparente e specifica.","Conferma esattamente quale decisione verrà presa.","Nega categoricamente ogni possibile decisione."],0,"Questa frase evita di impegnarsi su una posizione concreta, mantenendo apparentemente tutte le opzioni aperte."],
      ["fill","Completa: \"Il governo ha annunciato un ___ di bilancio che in realtà comportava tagli importanti.\"",["aggiustamento","aumento","regalo","premio"],0,"\"Aggiustamento di bilancio\" è l'eufemismo tipico per \"taglio\"."],
      ["translate","Traduci con precisione: \"Politicians sometimes commit without fully committing.\"",["I politici a volte si impegnano senza impegnarsi del tutto.","I politici a volte impegnano senza impegnare del tutto.","A volte i politici del tutto si impegnano senza impegnare.","I politici si impegnano a volte del tutto senza impegnarsi."],0,"\"Commit without fully committing\" = \"impegnarsi senza impegnarsi del tutto\", catturando l'ambiguità intenzionale."],
      ["mcq","Quale di queste frasi è un chiaro esempio di ambiguità strategica?",["Non escludiamo nessuna possibilità in questo momento.","Il bilancio sarà ridotto esattamente del 12% quest'anno.","La legge entrerà in vigore il 1° gennaio, senza eccezioni.","Mi dimetterò dal mio incarico la prossima settimana."],0,"\"Non escludiamo nessuna possibilità\" non si impegna a nulla di concreto, lasciando apparentemente tutte le porte aperte."],
      ["writing","Scrivi in italiano 55-75 parole analizzando un eufemismo o un caso di ambiguità strategica che hai osservato in un discorso politico reale o inventato. Spiega quale frase diretta sta evitando e perché.",[],["eufemismo","invece di","evita di impegnarsi"],"Identifica la frase esatta, il significato più diretto che sostituisce, e l'effetto che cerca sul pubblico."]
    ]
  },
  {
    id:"it_a1_money_prices", level:"A1", title:"Numeri ordinali, denaro e prezzi", emoji:"💰", xp:36,
    description:"Impara a parlare di prezzi, denaro e numeri ordinali in italiano.",
    study: {
      vocab: [
        ["primo, secondo, terzo...", "first, second, third..."],
        ["Quanto costa questo?", "How much does this cost?"],
        ["Costa dieci euro.", "It costs ten euros."],
        ["economico, caro", "cheap, expensive"],
        ["pagare in contanti / con carta", "to pay in cash / by card"]
      ],
      grammar: [
        ["\"Costa / Costano\" per i prezzi", "\"Costa\" (singolare) e \"costano\" (plurale) concordano con ciò che si compra.", "Il libro costa dieci euro. I libri costano venti euro."]
      ]
    },
    ex:[
      ["mcq","Come chiedi il prezzo di qualcosa?",["Quanto costa questo?","Cos'è questo?","Dov'è questo?","Quando è questo?"],0,"\"Quanto costa questo?\" è la domanda standard per chiedere un prezzo."],
      ["mcq","Un prodotto da 5 euro è più economico di uno da 50 euro. Quale parola descrive quello da 5 euro?",["Economico.","Caro.","Gratis.","Grande."],0,"\"Economico\" descrive qualcosa di prezzo basso rispetto a un'altra cosa."],
      ["fill","Completa: \"Le scarpe ___ quaranta euro.\"",["costano","costa","è","sono"],0,"\"Costano\" concorda al plurale con \"le scarpe\"."],
      ["translate","Traduci: \"It costs ten euros.\"",["Costa dieci euro.","Costano dieci euro.","È dieci euro.","Ha dieci euro."],0,"\"It costs ten euros\" (singolare) = \"Costa dieci euro.\""],
      ["arrange","Metti in ordine: [carta / pago / con / sempre]",["Pago sempre con carta","Sempre pago con carta","Con carta sempre pago","Pago con carta sempre"],0,"Soggetto + verbo + avverbio + complemento: \"Pago sempre con carta.\""],
      ["writing","Scrivi in italiano 20-30 parole sulle tue abitudini di acquisto: cosa compri normalmente, se preferisci pagare in contanti o con carta, e se cerchi cose economiche.",[],["costa","economico","pago"],"Usa almeno un numero ordinale o un prezzo concreto nella tua risposta."]
    ]
  },
  {
    id:"it_a2_restaurant_ordering", level:"A2", title:"Al ristorante: ordinare e pagare il conto", emoji:"🍽️", xp:45,
    description:"Impara a ordinare cibo, fare domande al cameriere e pagare il conto in un ristorante.",
    study: {
      vocab: [
        ["Vorrei ordinare...", "I would like to order..."],
        ["Cosa mi consiglia?", "What do you recommend?"],
        ["Mi porta il conto, per favore?", "Could you bring me the bill, please?"],
        ["Il servizio è incluso?", "Is the tip included?"],
        ["Per me, il menù del giorno.", "For me, the set menu."]
      ],
      grammar: [
        ["\"Vorrei\" per ordinare con cortesia", "\"Vorrei\" (condizionale di \"volere\") è più formale e cortese di \"voglio\" quando si ordina.", "Vorrei ordinare la zuppa e il pollo, per favore."]
      ]
    },
    ex:[
      ["mcq","Qual è il modo più cortese di ordinare cibo in un ristorante?",["Vorrei ordinare la zuppa, per favore.","Voglio la zuppa subito.","Dammi la zuppa.","Zuppa, ora."],0,"\"Vorrei\" è la forma cortese e formale per ordinare qualcosa."],
      ["mcq","Hai finito di mangiare e vuoi pagare. Cosa dici?",["Mi porta il conto, per favore?","Mi porta il menù, per favore?","Cosa mi consiglia?","Questo tavolo è libero?"],0,"\"Mi porta il conto, per favore?\" è la frase standard per chiedere di pagare."],
      ["fill","Completa: \"___ ordinare il pesce con insalata, per favore.\"",["Vorrei","Voglio subito","Dammi","Ho"],0,"\"Vorrei ordinare\" è la forma cortese standard per fare un ordine."],
      ["translate","Traduci: \"Is the tip included?\"",["Il servizio è incluso?","Il servizio è includere?","Il servizio incluso è?","Incluso è il servizio in?"],0,"\"Is the tip included?\" = \"Il servizio è incluso?\""],
      ["arrange","Metti in ordine: [consiglia / mi / cosa]",["Cosa mi consiglia","Mi cosa consiglia","Consiglia cosa mi","Mi consiglia cosa"],0,"Domanda con \"cosa\" all'inizio: \"Cosa mi consiglia?\""],
      ["speaking","Rappresenta in italiano, in 40-60 parole, una breve conversazione in un ristorante: ordina un piatto, chiedi un consiglio e chiedi il conto alla fine.",[],["vorrei","consiglia","il conto"],"Includi le tre parti: ordine, domanda al cameriere e richiesta del conto."]
    ]
  },
  {
    id:"it_b1_personal_finance", level:"B1", title:"Finanze personali: la banca e il budget", emoji:"🏦", xp:62,
    description:"Parla di conti bancari, risparmio e budget personale in italiano.",
    study: {
      vocab: [
        ["aprire un conto bancario", "to open a bank account"],
        ["fare un budget mensile", "to make a monthly budget"],
        ["risparmiare per un obiettivo", "to save up for a goal"],
        ["le spese fisse e le spese variabili", "fixed expenses and variable expenses"],
        ["chiedere un prestito, pagare a rate", "to take out a loan, to pay in installments"]
      ],
      grammar: [
        ["Il condizionale per i consigli finanziari", "\"Dovresti\" + infinito dà un consiglio senza suonare troppo diretto.", "Dovresti risparmiare almeno il 10% del tuo stipendio ogni mese."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi dà un consiglio finanziario in modo adeguato?",["Dovresti risparmiare un po' ogni mese, anche se poco.","Risparmia subito, non c'è altra opzione.","Il risparmio non serve a niente.","Non riuscirai mai a risparmiare nulla."],0,"\"Dovresti\" + infinito dà un consiglio in modo cortese e ragionevole."],
      ["mcq","Che differenza c'è tra spese fisse e variabili?",["Le fisse si ripetono ogni mese allo stesso importo; le variabili cambiano.","Le fisse cambiano ogni mese; le variabili sono sempre uguali.","Non c'è nessuna differenza reale tra loro.","Le variabili esistono solo per le aziende, non per le persone."],0,"Le spese fisse (l'affitto, per esempio) restano stabili; le variabili (svago, cibo) cambiano ogni mese."],
      ["fill","Completa: \"Sto per ___ un nuovo conto bancario questo mese.\"",["aprire","chiudere","spendere","perdere"],0,"\"Aprire un conto bancario\" è la collocazione corretta per creare un nuovo conto."],
      ["translate","Traduci: \"You should make a monthly budget.\"",["Dovresti fare un budget mensile.","Dovresti fare budget mensile un.","Un budget mensile dovresti fare.","Dovresti un budget mensile fare."],0,"\"You should make a monthly budget\" = \"Dovresti fare un budget mensile.\""],
      ["arrange","Metti in ordine: [risparmiare / obiettivo / per / un / voglio]",["Voglio risparmiare per un obiettivo","Per un obiettivo voglio risparmiare","Risparmiare voglio per un obiettivo","Voglio per un obiettivo risparmiare"],0,"Soggetto + \"voglio\" + infinito + complemento: \"Voglio risparmiare per un obiettivo.\""],
      ["writing","Scrivi in italiano 45-65 parole sul tuo rapporto con il denaro: come organizzi il tuo budget, se risparmi per qualcosa di concreto e un'abitudine finanziaria che vorresti migliorare.",[],["budget","risparmiare","spese"],"Menziona almeno una spesa fissa, una spesa variabile e un obiettivo di risparmio."]
    ]
  },
  {
    id:"it_b2_mental_wellbeing", level:"B2", title:"Benessere e salute mentale: parlarne con sfumature", emoji:"🧘", xp:82,
    description:"Parla del benessere emotivo e della salute mentale con un vocabolario più sfumato in italiano.",
    study: {
      vocab: [
        ["sentirsi sopraffatto/a", "to feel overwhelmed"],
        ["porre dei limiti, prendersi cura di sé", "to set boundaries, to take care of yourself"],
        ["il burnout (esaurimento)", "burnout"],
        ["chiedere aiuto non è un segno di debolezza", "asking for help is not a sign of weakness"],
        ["elaborare le proprie emozioni", "to process one's emotions"]
      ],
      grammar: [
        ["Il congiuntivo con espressioni di raccomandazione", "\"È importante che\" + congiuntivo raccomanda un'azione legata al benessere.", "È importante che tu parli di come ti senti con qualcuno di cui ti fidi."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi usa correttamente il congiuntivo per dare una raccomandazione?",["È importante che tu ti riposi quando ne hai bisogno.","È importante che tu ti riposi quando ne hai bisogno è.","È importante tu ti riposare quando bisogno.","È importante che riposi quando hai bisogno tu."],0,"\"È importante che\" richiede il congiuntivo: \"che tu ti riposi\"."],
      ["mcq","Cosa significa \"sentirsi sopraffatto/a\"?",["Sentire che ci sono troppe cose da gestire allo stesso tempo.","Sentirsi estremamente felice e tranquillo.","Non sentire assolutamente nulla.","Sentire curiosità per qualcosa di nuovo."],0,"\"Sopraffatto\" descrive una sensazione di eccesso di compiti o emozioni difficili da gestire."],
      ["fill","Completa: \"Porre dei ___ è importante per prendersi cura del proprio benessere.\"",["limiti","soldi","vestiti","cibo"],0,"\"Porre dei limiti\" è l'espressione corretta per proteggere il proprio benessere emotivo."],
      ["translate","Traduci: \"Asking for help is not a sign of weakness.\"",["Chiedere aiuto non è un segno di debolezza.","Chiedere aiuto non è una debole segno.","Chiedere aiuto non è segno di debolezza non.","Non chiedere aiuto è un segno di debolezza."],0,"\"Asking for help is not a sign of weakness\" = \"Chiedere aiuto non è un segno di debolezza.\""],
      ["mcq","Quale di queste frasi riflette un'elaborazione sana di un'emozione, non la sua evitazione?",["Riconosco di essere triste e mi do il tempo di capire perché.","Faccio finta che non sia successo nulla e ignoro come mi sento.","Mi distraggo costantemente per non sentire nulla.","Dico a tutti che sto benissimo, anche se non è vero."],0,"Riconoscere ed esplorare un'emozione, invece di evitarla, è un'elaborazione emotiva sana."],
      ["writing","Scrivi in italiano 55-75 parole su una strategia che usi (o vorresti usare) per prenderti cura del tuo benessere emotivo quando ti senti sopraffatto/a.",[],["sopraffatto","limiti","elaborare"],"Usa almeno una struttura di raccomandazione con il congiuntivo (\"è importante che...\")."]
    ]
  },
  {
    id:"it_c1_legal_language", level:"C1", title:"Linguaggio giuridico di base: contratti e clausole", emoji:"📜", xp:90,
    description:"Comprendi il vocabolario e le strutture di base del linguaggio giuridico nei contratti.",
    study: {
      vocab: [
        ["le parti contraenti", "the contracting parties"],
        ["una clausola, un allegato", "a clause, an appendix"],
        ["recedere da un contratto", "to terminate a contract"],
        ["essere soggetto ai termini e condizioni", "to be subject to the terms and conditions"],
        ["in caso di inadempimento", "in the event of a breach"]
      ],
      grammar: [
        ["Il linguaggio formale impersonale nei contratti", "I contratti usano strutture impersonali e passive per suonare oggettivi ed evitare ambiguità su chi agisce.", "Il presente contratto potrà essere risolto da ciascuna delle parti con un preavviso di 30 giorni."],
        ["\"Nel caso in cui\" + congiuntivo", "Questa struttura formale introduce condizioni giuridiche ipotetiche.", "Nel caso in cui una delle parti non rispetti quanto concordato, si applicherà una penale."]
      ]
    },
    ex:[
      ["mcq","Cosa significa \"recedere da un contratto\"?",["Terminare o annullare un contratto prima del previsto.","Firmare un nuovo contratto.","Modificare solo una clausola del contratto.","Rinnovare automaticamente un contratto."],0,"\"Recedere\" significa porre fine a un contratto, generalmente prima della sua scadenza naturale."],
      ["mcq","Quale di queste frasi usa correttamente il linguaggio formale impersonale tipico di un contratto?",["Il presente contratto potrà essere risolto da ciascuna delle parti.","Chiunque può rompere questo contratto se vuole.","Qualcuno può cancellarlo quando ne ha voglia.","Si può cancellare il contratto così, senza motivo."],0,"Il linguaggio contrattuale formale usa costruzioni passive e impersonali, evitando un tono colloquiale."],
      ["fill","Completa: \"___ caso in cui una delle parti non rispetti quanto concordato, si applicherà una penale.\"",["Nel","Perché","Sebbene","Tuttavia"],0,"\"Nel caso in cui\" + congiuntivo introduce una condizione giuridica ipotetica."],
      ["translate","Traduci: \"The contract is subject to the terms and conditions described in Appendix A.\"",["Il contratto è soggetto ai termini e condizioni descritti nell'Allegato A.","Il contratto è soggetto i termini e condizioni descritti nell'Allegato A.","Il contratto è soggetto ai termini e condizioni nell'Allegato A descritti.","Soggetto il contratto è ai termini dell'Allegato A."],0,"\"Subject to\" = \"soggetto a\"; \"described in Appendix A\" = \"descritti nell'Allegato A\"."],
      ["mcq","Cosa sono \"le parti contraenti\"?",["Le persone o entità che firmano e si impegnano in un contratto.","Solo la persona che redige il contratto.","Le sezioni o i capitoli di un contratto.","I testimoni che non firmano il contratto."],0,"\"Le parti contraenti\" si riferisce a chi firma il contratto e assume obblighi in esso."],
      ["writing","Scrivi in italiano 55-75 parole redigendo una clausola semplice di un contratto fittizio (per esempio, sui termini di consegna o le condizioni di cancellazione), usando un registro formale e impersonale.",[],["le parti","nel caso in cui","recedere"],"Usa almeno una costruzione passiva o impersonale, propria del registro giuridico formale."]
    ]
  },
  {
    id:"it_c2_literary_criticism", level:"C2", title:"Critica letteraria: voce narrativa e stile", emoji:"📖", xp:97,
    description:"Analizza la voce narrativa, lo stile e le scelte formali di un testo letterario in italiano.",
    study: {
      vocab: [
        ["la voce narrativa", "the narrative voice"],
        ["un narratore affidabile / inaffidabile", "a reliable / unreliable narrator"],
        ["il punto di vista (prima, terza persona)", "point of view (first, third person)"],
        ["il tono e il registro di un testo", "the tone and register of a text"],
        ["una tecnica narrativa (flashback, ellissi)", "a narrative technique (flashback, ellipsis)"]
      ],
      grammar: [
        ["Analizzare le scelte formali dell'autore", "L'analisi letteraria avanzata collega una scelta formale (punto di vista, tempo verbale) al suo effetto sul lettore.", "L'uso della prima persona crea vicinanza, ma limita anche la prospettiva a ciò che il narratore può sapere o percepire."]
      ]
    },
    ex:[
      ["mcq","Cosa caratterizza un \"narratore inaffidabile\"?",["La sua versione dei fatti può essere di parte, incompleta o fuorviante.","Dice sempre la verità assoluta su tutto ciò che accade.","Non ha mai un'opinione sui fatti che narra.","Compare solo in testi scientifici, mai nella narrativa."],0,"Un narratore inaffidabile offre una prospettiva che il lettore deve mettere in dubbio, per parzialità, ignoranza o inganno."],
      ["mcq","Che effetto produce solitamente la narrazione in prima persona?",["Crea vicinanza con il narratore, ma limita la prospettiva a ciò che sa.","Elimina qualsiasi connessione emotiva con il lettore.","Garantisce sempre una visione oggettiva dei fatti.","Si usa solo in testi non letterari."],0,"La prima persona avvicina il lettore al narratore, a costo di una visione necessariamente parziale dei fatti."],
      ["fill","Completa: \"L'uso di un ___ interrompe la cronologia per mostrare un evento del passato.\"",["flashback","epilogo","prologo","indice"],0,"Un \"flashback\" è la tecnica narrativa che interrompe la cronologia lineare per mostrare il passato."],
      ["translate","Traduci con precisione tecnica: \"La mancanza di affidabilità del narratore costringe il lettore a mettere in dubbio ogni affermazione.\"",["The narrator's unreliability forces the reader to question every claim.","The narrator unreliability force the reader question every claim.","The unreliable narrator force to question reader every claim is.","Question every claim forces the narrator's unreliability the reader."],0,"\"Mancanza di affidabilità\" si traduce tecnicamente come \"unreliability\"."],
      ["mcq","Quale di queste analisi collega correttamente una scelta formale al suo effetto sul lettore?",["Il presente narrativo crea una sensazione di immediatezza, come se i fatti accadessero proprio ora.","L'autore ha usato il presente perché è più facile da scrivere.","Il presente non ha alcun effetto su come viene percepita la storia.","Il presente si usa solo in poesia, mai nella narrativa."],0,"Una buona analisi letteraria collega la scelta formale (tempo verbale) a un effetto concreto sull'esperienza di lettura."],
      ["writing","Scegli un racconto, un romanzo o una storia che conosci (o inventane uno breve) e scrivi in italiano 55-75 parole analizzando la sua voce narrativa: punto di vista, affidabilità del narratore e un effetto che questo produce sul lettore.",[],["voce narrativa","punto di vista","effetto"],"Collega esplicitamente una scelta formale dell'autore a un effetto concreto sulla lettura, non limitarti a descrivere la trama."]
    ]
  },
  {
    id:"it_a1_professions_jobs", level:"A1", title:"Le professioni: cosa fai nella vita?", emoji:"👩‍⚕️", xp:36,
    description:"Impara il vocabolario di base delle professioni e a parlare del tuo lavoro in italiano.",
    study: {
      vocab: [
        ["medico, insegnante, ingegnere, cameriere/a", "doctor, teacher, engineer, waiter/waitress"],
        ["Cosa fai nella vita?", "What do you do for a living?"],
        ["Sono studente/essa / Lavoro in un ufficio.", "I'm a student / I work in an office."],
        ["Dove lavori?", "Where do you work?"],
        ["lavorare come + professione", "to work as + profession"]
      ],
      grammar: [
        ["\"Essere\" con le professioni (senza articolo)", "Con le professioni, \"essere\" non porta l'articolo indeterminativo, a differenza dell'inglese.", "Sono insegnante. (non \"Sono un insegnante\")"]
      ]
    },
    ex:[
      ["mcq","Come chiedi la professione di qualcuno?",["Cosa fai nella vita?","Come ti chiami?","Dove vivi?","Quanti anni hai?"],0,"\"Cosa fai nella vita?\" chiede specificamente la professione."],
      ["mcq","Qual è la forma corretta per dire la propria professione in italiano?",["Sono insegnante.","Sono un insegnante.","Ho insegnante.","Faccio insegnante."],0,"In italiano, \"essere\" + professione non porta l'articolo: \"Sono insegnante.\""],
      ["fill","Completa: \"Mia sorella ___ medica in un ospedale.\"",["è","ha","fa","lavora è"],0,"\"Essere\" si usa per le professioni: \"Mia sorella è medica.\""],
      ["translate","Traduci: \"I work in an office.\"",["Lavoro in un ufficio.","Lavoro un ufficio.","Sono lavoro in un ufficio.","Lavoro di un ufficio."],0,"\"I work in an office\" = \"Lavoro in un ufficio.\""],
      ["arrange","Metti in ordine: [cameriere / lavoro / ristorante / come / in / un]",["Lavoro come cameriere in un ristorante","Come cameriere lavoro in un ristorante","Lavoro in un ristorante come cameriere","In un ristorante lavoro come cameriere"],0,"\"Lavoro come\" + professione + \"in\" + luogo: \"Lavoro come cameriere in un ristorante.\""],
      ["writing","Scrivi in italiano 20-30 parole sulla tua professione (reale o immaginata) e dove lavori. Menziona almeno due compiti che svolgi sul lavoro.",[],["sono","lavoro","come"],"Usa \"essere\" per la professione e \"lavorare in/come\" per il luogo o il ruolo."]
    ]
  },
  {
    id:"it_a2_describing_people", level:"A2", title:"Descrivere persone: aspetto e personalità", emoji:"🧑‍🤝‍🧑", xp:46,
    description:"Impara a descrivere l'aspetto fisico e la personalità di altre persone in italiano.",
    study: {
      vocab: [
        ["alto/a, basso/a, magro/a", "tall, short, slim"],
        ["ha i capelli lunghi/corti, porta gli occhiali", "has long/short hair, wears glasses"],
        ["è simpatico/a, timido/a, divertente", "is nice, shy, funny"],
        ["assomiglia a sua madre/suo padre", "looks like his/her mother/father"],
        ["Com'è il tuo migliore amico/la tua migliore amica?", "What is your best friend like?"]
      ],
      grammar: [
        ["\"Essere\" per le caratteristiche, \"avere\" e \"portare\" per i tratti fisici", "\"Essere\" descrive la personalità e i tratti stabili; \"avere\" e \"portare\" descrivono parti del corpo o accessori.", "È molto simpatica, ha i capelli lunghi e porta gli occhiali."]
      ]
    },
    ex:[
      ["mcq","Come chiedi com'è la personalità di qualcuno?",["Com'è il tuo migliore amico?","Come stai?","Che ore sono?","Di dove sei?"],0,"\"Com'è...?\" chiede le caratteristiche o la personalità di qualcuno."],
      ["mcq","Quale di queste frasi descrive correttamente l'aspetto fisico di qualcuno?",["Ha i capelli corti e porta gli occhiali.","È i capelli corti e porta gli occhiali.","Ha simpatico e alto.","È ha gli occhiali."],0,"\"Avere\" si usa per le parti del corpo (\"ha i capelli corti\") e \"portare\" per gli accessori (\"porta gli occhiali\")."],
      ["fill","Completa: \"Mio fratello ___ molto divertente e fa sempre scherzi.\"",["è","ha","porta","fa"],0,"\"Essere\" descrive un tratto di personalità stabile: \"è molto divertente\"."],
      ["translate","Traduci: \"She has long hair and wears glasses.\"",["Ha i capelli lunghi e porta gli occhiali.","È i capelli lunghi e porta gli occhiali.","Ha capelli lunghi ed è occhiali.","Porta i capelli lunghi e ha gli occhiali messi."],0,"\"Has long hair\" = \"ha i capelli lunghi\"; \"wears glasses\" = \"porta gli occhiali\"."],
      ["arrange","Metti in ordine: [madre / assomiglia / sua / a]",["Assomiglia a sua madre","A sua madre assomiglia","Sua madre assomiglia a","Assomiglia sua a madre"],0,"\"Assomiglia a\" + persona: \"Assomiglia a sua madre.\""],
      ["speaking","Descrivi in italiano, in 40-60 parole, una persona che conosci bene: il suo aspetto fisico e tre tratti della sua personalità.",[],["ha","è","porta"],"Includi almeno due tratti fisici e due di personalità."]
    ]
  },
  {
    id:"it_b1_education_learning", level:"B1", title:"L'istruzione: sistemi scolastici e abitudini di studio", emoji:"🎒", xp:60,
    description:"Parla di sistemi educativi, metodi di studio ed esperienze scolastiche in italiano.",
    study: {
      vocab: [
        ["l'istruzione obbligatoria / superiore", "compulsory / higher education"],
        ["superare/bocciare un esame", "to pass/fail an exam"],
        ["memorizzare contro capire", "to memorize versus to understand"],
        ["un piano di studi, una materia", "a curriculum, a school subject"],
        ["imparare al proprio ritmo", "to learn at your own pace"]
      ],
      grammar: [
        ["I comparativi per confrontare sistemi", "\"Più... di/che\", \"meno... di/che\" e \"tanto... quanto\" servono per confrontare metodi o sistemi educativi.", "Questo sistema è più pratico di quello tradizionale, anche se non è tanto strutturato quanto quello."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi confronta correttamente due sistemi educativi?",["Questo sistema è più pratico di quello tradizionale.","Questo sistema è pratico più tradizionale.","Questo sistema è tanto pratico tradizionale.","Questo sistema più pratico è di tradizionale."],0,"\"Più... di\" è la struttura comparativa corretta in italiano."],
      ["mcq","Che differenza c'è tra memorizzare e capire?",["Memorizzare significa ripetere informazioni; capire implica coglierne il significato e applicarlo.","Sono esattamente la stessa cosa, senza alcuna differenza.","Memorizzare è sempre meglio di capire.","Capire è più veloce di memorizzare."],0,"Memorizzare è trattenere dati; capire implica un'elaborazione più profonda del significato."],
      ["fill","Completa: \"Ho studiato molto, ma comunque ___ l'esame.\"",["ho bocciato","ho superato","ho memorizzato","ho capito"],0,"Il contesto (\"ma comunque\") suggerisce un risultato negativo: \"ho bocciato l'esame\" (nel senso di essere bocciato)."],
      ["translate","Traduci: \"I prefer to learn at my own pace.\"",["Preferisco imparare al mio ritmo.","Preferisco imparare mio ritmo.","Preferisco a imparare mio ritmo.","Preferisco mio ritmo imparare a."],0,"\"To learn at your own pace\" = \"imparare al proprio ritmo\"."],
      ["arrange","Metti in ordine: [preferita / materia / è / matematica / la mia]",["La mia materia preferita è matematica","È la mia materia preferita matematica","Matematica è la mia materia preferita","La mia preferita materia è matematica"],0,"Soggetto + \"è\" + complemento: \"La mia materia preferita è matematica.\""],
      ["writing","Scrivi in italiano 45-65 parole confrontando due modi di studiare o due sistemi educativi che conosci (per esempio, lezioni in presenza contro online), e di' quale preferisci e perché.",[],["più...di","capire","al mio ritmo"],"Usa almeno una struttura comparativa esplicita."]
    ]
  },
  {
    id:"it_b2_sustainable_cities", level:"B2", title:"Città sostenibili: urbanistica e mobilità", emoji:"🚲", xp:82,
    description:"Discuti proposte di urbanistica e mobilità sostenibile nelle città, con argomenti sfumati in italiano.",
    study: {
      vocab: [
        ["i mezzi pubblici, la pista ciclabile", "public transport, the bike lane"],
        ["pedonalizzare il centro città", "to pedestrianize the city center"],
        ["ridurre il traffico e l'inquinamento", "to reduce traffic and pollution"],
        ["uno spazio verde, una zona pedonale", "a green space, a pedestrian zone"],
        ["investire in infrastrutture sostenibili", "to invest in sustainable infrastructure"]
      ],
      grammar: [
        ["Il congiuntivo con espressioni di dubbio o opinione", "\"Non credo che\" e \"è possibile che\" richiedono il congiuntivo per esprimere dubbio o opinione su proposte urbanistiche.", "Non credo che pedonalizzare tutto il centro sia l'unica soluzione possibile."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi usa correttamente il congiuntivo per esprimere dubbio?",["Non credo che questa misura sia sufficiente da sola.","Non credo che questa misura è sufficiente da sola.","Non credo questa misura sia sufficiente.","Non credo che questa misura essere sufficiente."],0,"\"Non credo che\" richiede il congiuntivo: \"che...sia\"."],
      ["mcq","Cosa significa \"pedonalizzare il centro città\"?",["Limitare o eliminare il traffico veicolare per dare priorità ai pedoni.","Costruire più strade nel centro.","Aumentare il numero di auto consentite nel centro.","Eliminare tutti i negozi dal centro."],0,"\"Pedonalizzare\" significa trasformare uno spazio per l'uso prioritario dei pedoni, limitando i veicoli."],
      ["fill","Completa: \"È possibile che la pista ciclabile ___ il traffico in quella zona.\"",["riduca","riduce","ridurrà","ha ridotto"],0,"\"È possibile che\" richiede il congiuntivo: \"che riduca\"."],
      ["translate","Traduci: \"Investing in public transport reduces pollution in the long term.\"",["Investire nei mezzi pubblici riduce l'inquinamento a lungo termine.","Investire nei mezzi pubblici ridurre l'inquinamento a lungo termine.","Investire mezzi pubblici in riduce l'inquinamento lungo termine.","Riduce investire nei mezzi pubblici l'inquinamento a lungo termine."],0,"\"Investing in public transport reduces pollution\" = \"Investire nei mezzi pubblici riduce l'inquinamento.\""],
      ["mcq","Quale di queste frasi presenta una posizione sfumata sulla mobilità urbana?",["Dipende dal contesto: in alcune città l'auto è ancora necessaria, in altre no.","L'auto dovrebbe essere vietata ovunque senza eccezioni.","I mezzi pubblici non funzionano mai bene in nessuna città.","Non c'è nessuna soluzione possibile per il traffico urbano."],0,"Una posizione sfumata riconosce che la soluzione dipende dal contesto specifico di ogni città."],
      ["writing","Scrivi in italiano 55-75 parole proponendo un miglioramento di mobilità sostenibile per una città che conosci, spiegando un beneficio e una possibile difficoltà nell'implementarlo.",[],["è possibile che","pedonale","mezzi pubblici"],"Usa almeno una struttura con il congiuntivo di dubbio o opinione."]
    ]
  },
  {
    id:"it_c1_science_communication", level:"C1", title:"Divulgazione scientifica: comunicare con precisione", emoji:"🔬", xp:90,
    description:"Impara a comunicare informazioni scientifiche complesse in modo chiaro e preciso in italiano, senza perdere rigore.",
    study: {
      vocab: [
        ["semplificare senza distorcere", "to simplify without distorting"],
        ["un risultato preliminare contro uno confermato", "a preliminary finding versus a confirmed one"],
        ["le evidenze scientifiche suggeriscono che...", "scientific evidence suggests that..."],
        ["un'analogia utile per spiegare qualcosa di complesso", "a useful analogy to explain something complex"],
        ["evitare il sensazionalismo scientifico", "to avoid scientific sensationalism"]
      ],
      grammar: [
        ["Verbi sfumati per comunicare l'incertezza scientifica", "\"Suggerisce\", \"indica\", \"potrebbe spiegare\" trasmettono diversi gradi di certezza scientifica, più precisi di \"prova\" o \"dimostra\".", "Lo studio suggerisce un possibile legame, ma non dimostra la causalità."]
      ]
    },
    ex:[
      ["mcq","Quale di queste frasi comunica un risultato scientifico con la sfumatura corretta?",["Lo studio suggerisce un possibile legame, ma non dimostra la causalità.","Lo studio dimostra in modo definitivo che questo causa quello.","Gli scienziati sanno già tutto su questo argomento.","Questo risultato è sicuro al cento per cento, senza alcun dubbio."],0,"\"Suggerisce\" e \"non dimostra la causalità\" riflettono con precisione il livello reale di certezza di un risultato preliminare."],
      ["mcq","Perché è importante \"semplificare senza distorcere\" nella divulgazione scientifica?",["Perché semplificare troppo può cambiare il significato reale del risultato.","Perché la scienza non dovrebbe mai essere spiegata a persone non esperte.","Perché i dettagli tecnici non contano affatto.","Perché ogni semplificazione è automaticamente sbagliata."],0,"Semplificare è necessario per raggiungere più pubblico, ma distorcere il significato originale è un grave errore di divulgazione."],
      ["fill","Completa: \"Questo è un risultato ___: servono altri studi per confermarlo.\"",["preliminare","confermato","definitivo","assoluto"],0,"\"Preliminare\" indica che il risultato non è ancora confermato in modo conclusivo."],
      ["translate","Traduci: \"Scientific evidence suggests that this treatment could be effective.\"",["Le evidenze scientifiche suggeriscono che questo trattamento potrebbe essere efficace.","Le evidenze scientifiche suggeriscono questo trattamento potrebbe efficace.","Suggeriscono le evidenze scientifiche che trattamento potrebbe essere efficace.","Le evidenze scientifiche suggeriscono che questo trattamento essere efficace potrebbe."],0,"\"Scientific evidence suggests that\" = \"Le evidenze scientifiche suggeriscono che\", seguito da \"potrebbe essere\" per esprimere possibilità."],
      ["mcq","Un titolo dice \"La scienza lo conferma: questo frutto cura il cancro!\" basandosi su un solo studio preliminare sui topi. Qual è il problema di questo titolo?",["Esagera un risultato preliminare e limitato come se fosse una certezza assoluta applicabile agli esseri umani.","È un esempio perfetto di divulgazione scientifica rigorosa.","Non contiene alcun sensazionalismo.","Riflette accuratamente il livello di evidenza disponibile."],0,"Il titolo trasforma un risultato preliminare sui topi in un'affermazione assoluta sugli esseri umani, un chiaro caso di sensazionalismo."],
      ["writing","Scegli una scoperta scientifica (reale o inventata) e scrivi in italiano 55-75 parole spiegandola in modo chiaro e accessibile, usando un'analogia e mantenendo la sfumatura corretta di certezza (evita parole come \"dimostra\" se il risultato è preliminare).",[],["suggerisce","preliminare","è come"],"Includi almeno un'analogia e un verbo sfumato che rifletta correttamente il livello di certezza."]
    ]
  },
  {
    id:"it_c2_speech_acts_pragmatics", level:"C2", title:"Pragmatica: cosa facciamo dicendo qualcosa", emoji:"💭", xp:98,
    description:"Analizza gli atti linguistici e la pragmatica in italiano: la differenza tra ciò che si dice e ciò che si fa dicendolo.",
    study: {
      vocab: [
        ["un atto linguistico (richiesta, promessa, ordine)", "a speech act (request, promise, order)"],
        ["il significato letterale contro il significato inteso", "literal meaning versus intended meaning"],
        ["un atto linguistico indiretto", "an indirect speech act"],
        ["le condizioni di felicità di un atto linguistico", "the felicity conditions of a speech act"],
        ["implicare qualcosa senza dirlo esplicitamente", "to imply something without saying it explicitly"]
      ],
      grammar: [
        ["Atti linguistici diretti contro indiretti", "Un atto linguistico indiretto usa una forma grammaticale (come una domanda) per svolgere un'altra funzione (come una richiesta).", "\"Potresti chiudere la finestra?\" ha la forma di una domanda, ma la sua funzione reale è una richiesta, non chiedere informazioni."]
      ]
    },
    ex:[
      ["mcq","\"Potresti passarmi il sale?\" durante una cena. Che atto linguistico è, in realtà?",["Una richiesta indiretta, anche se ha la forma di una domanda.","Una vera domanda sulla capacità dell'altra persona.","Un ordine diretto ed esplicito.","Una promessa riguardo al futuro."],0,"Anche se ha la forma grammaticale di una domanda sulla capacità, la sua funzione reale è chiedere che qualcuno passi il sale: è una richiesta indiretta."],
      ["mcq","Un capo dice a un dipendente: \"Fa un po' freddo qui, no?\" vicino a una finestra aperta. Cosa sta probabilmente facendo con questo enunciato?",["Sta chiedendo indirettamente che qualcuno chiuda la finestra.","Sta semplicemente commentando il tempo senza altre intenzioni.","Sta chiedendo la temperatura esatta della stanza.","Sta ordinando esplicitamente di spegnere il riscaldamento."],0,"Il commento funziona come una richiesta indiretta affinché qualcuno chiuda la finestra, senza dirlo esplicitamente."],
      ["fill","Completa: \"Dire 'prometto' ad alta voce non basta; devono anche essere soddisfatte certe ___ perché la promessa sia valida.\"",["condizioni di felicità","regole grammaticali","norme ortografiche","domande retoriche"],0,"Le \"condizioni di felicità\" sono i requisiti contestuali (sincerità, capacità, ecc.) perché un atto linguistico funzioni correttamente."],
      ["translate","Traduci con precisione tecnica: \"Questo è un atto linguistico indiretto: la sua forma letterale non corrisponde alla sua funzione intesa.\"",["This is an indirect speech act: its literal form doesn't match its intended function.","This is indirect speech act literal form doesn't match function.","It's a speech act this indirect that doesn't match literal function.","This speech act is indirect its form doesn't function match."],0,"\"Atto linguistico indiretto\" = \"indirect speech act\"; \"forma letterale\" = \"literal form\"; \"funzione intesa\" = \"intended function\"."],
      ["mcq","Quale di questi enunciati implica qualcosa senza dirlo esplicitamente?",["\"Alcuni studenti hanno superato l'esame.\" (implica che non tutti l'hanno superato)","\"Tutti gli studenti hanno superato l'esame.\"","\"L'esame era lunedì alle nove.\"","\"Ci sono trenta studenti in classe.\""],0,"\"Alcuni\" implica pragmaticamente \"non tutti\", anche se non lo afferma letteralmente; è un'implicatura conversazionale classica."],
      ["writing","Scrivi in italiano 55-75 parole analizzando un atto linguistico indiretto di una conversazione quotidiana (reale o inventata): cosa è stato detto letteralmente, quale funzione pragmatica svolgeva in realtà, e come l'hai capito dal contesto.",[],["atto linguistico","letteralmente","in realtà"],"Distingui esplicitamente tra la forma grammaticale letterale dell'enunciato e la sua funzione pragmatica reale."]
    ]
  },
];
