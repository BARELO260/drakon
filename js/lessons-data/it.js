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
];
