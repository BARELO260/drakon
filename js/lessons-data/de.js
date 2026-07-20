/* ═══════════════════════════════════════════════════════════
   js/lessons-data/de.js — Banco de lecciones: ALEMÁN (DE)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.DE = [
  {
    id:"de_a1_greetings", level:"A1", title:"Begrüßungen und Vorstellungen", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en alemán.",
    study: {
      vocab: [
        ["Guten Morgen / Guten Abend", "Good morning / Good evening"],
        ["Hallo / Auf Wiedersehen", "Hello / Goodbye"],
        ["Freut mich!", "Nice to meet you!"],
        ["Ich heiße...", "My name is..."],
        ["Wie geht's?", "How are you?", "Respuesta: \"Mir geht es gut, danke\""]
      ],
      grammar: [
        ["El verbo \"sein\" (ser/estar)", "Ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind.", "Ich bin Lehrer. Sie ist aus Berlin."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en alemán?", ["Guten Morgen","Guten Abend","Gute Nacht","Auf Wiedersehen"], 0, "\"Guten Morgen\" se usa por la mañana. \"Guten Tag\" es de mediodía en adelante, y \"Guten Abend\" al caer la tarde.", "☀️ Son las 9 de la mañana y llegas a la oficina."],
      ["mcq", "Alguien te dice \"Wie geht's?\". ¿Cuál es una respuesta común?", ["Mir geht es gut, danke","Ich heiße Paul","Ich bin zwanzig Jahre alt","Bis bald"], 0, "\"Mir geht es gut, danke\" es la respuesta estándar. También puedes decir \"Gut, und dir?\""],
      ["fill", "Completa: \"Hallo! Ich ___ Anna. Ich ___ aus Berlin.\"", ["heiße / komme","bin / heiße","bist / kommst","heißt / komme"], 0, "\"Ich heiße Anna\" (me llamo) y \"Ich komme aus Berlin\" (vengo de). Ambos verbos van en primera persona singular."],
      ["translate", "Traduce al alemán: \"Nice to meet you!\"", ["Freut mich!","Wie heißt du?","Woher kommst du?","Bis morgen!"], 0, "\"Freut mich!\" (literalmente \"me alegra\") es la expresión estándar al conocer a alguien."],
      ["mcq", "¿Qué significa \"Wie heißt du?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"Wie heißt du?\" = What's your name? Respuesta: \"Ich heiße ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena: [bin / Lehrer / ich / ein]", ["Ich bin ein Lehrer","Ein bin ich Lehrer","Lehrer ich bin ein","Bin ich ein Lehrer"], 0, "En alemán el orden en afirmaciones simples es: Sujeto + Verbo + Complemento. → \"Ich bin ein Lehrer.\" (Soy profesor.)"],
    ]
  },
  {
    id:"de_a1_numbers_colors", level:"A1", title:"Zahlen und Farben", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 20 y colores básicos en alemán.",
    study: {
      vocab: [
        ["eins, zwei, drei... zwanzig", "one, two, three... twenty"],
        ["rot, blau, grün, gelb", "red, blue, green, yellow"],
        ["weiß, schwarz", "white, black"],
        ["Ich bin ___ Jahre alt", "I am ___ years old", "El alemán sí usa \"sein\" para la edad, como el inglés."]
      ],
      grammar: [
        ["Los sustantivos alemanes siempre se escriben con mayúscula", "A diferencia del español/inglés, TODOS los sustantivos en alemán llevan mayúscula inicial, no solo los nombres propios.", "die Farbe (el color), das Auto (el coche)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en alemán?", ["Fünfzehn","Fünfzig","Fünf","Vierzehn"], 0, "15 = fünfzehn. Ojo: 50 = fünfzig, 5 = fünf. Del 13 al 19 se añade \"-zehn\" al número base."],
      ["mcq", "¿Qué color es \"rot\"?", ["Red","Blue","Green","Yellow"], 0, "Rot = red. Otros colores: blau (blue), grün (green), gelb (yellow), weiß (white), schwarz (black).", "🍎 Piensa en una manzana madura."],
      ["fill", "Completa: \"Ich ___ zwanzig Jahre alt.\" (I am 20 years old)", ["bin","habe","bist","hat"], 0, "\"Ich bin zwanzig Jahre alt\" = I am twenty years old. A diferencia del español/francés, el alemán sí usa \"sein\" (ser/estar) para la edad, igual que el inglés."],
      ["translate", "Traduce: \"The sky is blue.\"", ["Der Himmel ist blau","Der Himmel ist grün","Das Haus ist blau","Das Meer ist blau"], 0, "\"Der Himmel ist blau.\" — Himmel = sky, blau = blue."],
      ["mcq", "¿Cómo se dice \"black\" en alemán?", ["Schwarz","Weiß","Grau","Braun"], 0, "Schwarz = black. Weiß = white, grau = gray, braun = brown."],
      ["arrange", "Ordena: [zwei / ich / Katzen / habe]", ["Ich habe zwei Katzen","Zwei ich habe Katzen","Katzen ich habe zwei","Habe ich zwei Katzen"], 0, "\"Ich habe zwei Katzen.\" = I have two cats. Sujeto (ich) + verbo (habe) + cantidad (zwei) + sustantivo (Katzen)."],
    ]
  },
  {
    id:"de_a1_sein_haben", level:"A1", title:"Sein und haben", emoji:"🧩", xp:35,
    description:"Los dos verbos más importantes del alemán: ser/estar y tener.",
    study: {
      vocab: [
        ["sein", "to be"],
        ["haben", "to have"],
        ["Student, Lehrer", "student, teacher"]
      ],
      grammar: [
        ["Sein vs. Haben", "Los dos verbos más importantes del alemán. \"Sein\" para identidad y edad; \"haben\" para posesión.", "Ich bin 20 Jahre alt. / Ich habe ein Auto."]
      ]
    },
    ex:[
      ["mcq", "\"Ich ___ Student.\" (I am a student)", ["bin","habe","bist","ist"], 0, "\"Sein\" (ser/estar) en primera persona es \"bin\": \"Ich bin Student.\""],
      ["mcq", "\"Sie ___ ein Auto.\" (She has a car)", ["hat","ist","habe","sind"], 0, "\"Haben\" (tener) en tercera persona singular es \"hat\": \"Sie hat ein Auto.\""],
      ["fill", "Completa: \"Wir ___ Deutsche.\" (We are German)", ["sind","haben","seid","ist"], 0, "\"Sein\" en primera persona plural es \"sind\": \"Wir sind Deutsche.\""],
      ["translate", "Traduce: \"They have a house.\"", ["Sie haben ein Haus","Sie sind ein Haus","Sie hat ein Haus","Sie haben eine Haus"], 0, "\"Haben\" en tercera persona plural es \"haben\": \"Sie haben ein Haus.\""],
      ["mcq", "¿Qué verbo se usa para decir la edad en alemán?", ["Sein (ser/estar)","Haben (tener)","Gehen (ir)","Machen (hacer)"], 0, "En alemán, igual que en inglés, la edad se expresa con \"sein\": \"Ich bin 20 Jahre alt\" (soy/tengo 20 años, literalmente \"soy 20 años viejo\")."],
      ["arrange", "Ordena: [sehr / bin / glücklich / ich]", ["Ich bin sehr glücklich","Sehr ich bin glücklich","Glücklich sehr ich bin","Ich sehr bin glücklich"], 0, "\"Ich bin sehr glücklich.\" = I am very happy. Sujeto (ich) + verbo (bin) + intensificador (sehr) + adjetivo (glücklich)."],
    ]
  },
  {
    id:"de_a1_family_home", level:"A1", title:"Familie und Zuhause", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en alemán.",
    study: {
      vocab: [
        ["Vater, Mutter", "father, mother"],
        ["Bruder, Schwester", "brother, sister"],
        ["Sohn, Tochter", "son, daughter"],
        ["Schlafzimmer, Küche, Wohnzimmer", "bedroom, kitchen, living room"],
        ["Badezimmer, Garten", "bathroom, garden"]
      ],
      grammar: [
        ["Adjetivos posesivos", "Mein/meine, dein/deine, sein/seine concuerdan en género con el sustantivo que sigue (no con el poseedor).", "Mein Vater (masc.) / Meine Mutter (fem.)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" en alemán?", ["Mutter","Vater","Schwester","Großmutter"], 0, "Mutter = mother. Vater = father, Schwester = sister, Großmutter = grandmother."],
      ["mcq", "¿Qué habitación es \"die Küche\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "Die Küche = kitchen. Das Schlafzimmer = bedroom, das Badezimmer = bathroom, der Garten = garden."],
      ["fill", "Completa: \"___ Bruder wohnt in Berlin.\" (My brother)", ["Mein","Meine","Meinen","Sein"], 0, "\"Mein Bruder\" = my brother. \"Bruder\" es masculino, por eso \"mein\" (no \"meine\")."],
      ["translate", "Traduce: \"My family is big.\"", ["Meine Familie ist groß","Meine Familie ist klein","Mein Familie ist groß","Meine Familien sind groß"], 0, "\"Meine Familie ist groß.\" — \"Familie\" es femenino, por eso \"meine\" (no \"mein\")."],
      ["mcq", "¿Cómo se dice \"grandparents\" en alemán?", ["Großeltern","Eltern","Onkel und Tante","Cousins"], 0, "Großeltern = grandparents. Eltern = parents, Onkel und Tante = aunt and uncle."],
      ["arrange", "Ordena: [drei / ich / Brüder / habe]", ["Ich habe drei Brüder","Drei ich habe Brüder","Brüder ich habe drei","Habe ich drei Brüder"], 0, "\"Ich habe drei Brüder.\" = I have three brothers. Sujeto (ich) + verbo (habe) + cantidad + sustantivo."],
    ]
  },
  {
    id:"de_a1_food_restaurant", level:"A1", title:"Essen und Restaurants", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en alemán.",
    study: {
      vocab: [
        ["die Speisekarte", "the menu"],
        ["Ich hätte gern...", "I would like...", "Forma cortés de pedir."],
        ["die Rechnung, bitte", "the bill, please"],
        ["das Wasser, das Brot", "water, bread"],
        ["lecker", "delicious"]
      ],
      grammar: [
        ["\"Ich hätte gern\" para pedir con cortesía", "\"Ich hätte gern\" (literalmente \"tendría gusto en\") es más educado que \"ich will\" al pedir algo.", "Ich hätte gern einen Kaffee, bitte. (Más cortés que \"Ich will einen Kaffee\".)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en alemán?", ["Die Speisekarte","Die Rechnung","Der Teller","Der Tisch"], 0, "Die Speisekarte = the menu. Die Rechnung = the bill, der Teller = the plate, der Tisch = the table."],
      ["fill", "Completa: \"___ einen Kaffee, bitte.\" (I would like)", ["Ich hätte gern","Ich will","Ich hatte","Ich werde"], 0, "\"Ich hätte gern\" es la forma más cortés para pedir algo en un restaurante."],
      ["mcq", "¿Qué significa \"die Rechnung, bitte\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"Die Rechnung, bitte\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This dish is delicious.\"", ["Dieses Gericht ist lecker","Dieses Gericht ist schlecht","Dieser Gericht ist lecker","Lecker ist dieses Gericht"], 0, "\"Dieses Gericht ist lecker.\" — Gericht (plato) es neutro, por eso \"dieses\"."],
      ["mcq", "¿Cómo se dice \"waiter\" en alemán?", ["Kellner","Koch","Kunde","Besitzer"], 0, "Kellner = waiter (Kellnerin para mujer). Koch = cook, Kunde = customer."],
      ["arrange", "Ordena: [Wasser / gern / ich / hätte / ein / Glas]", ["Ich hätte gern ein Glas Wasser","Ein Glas ich hätte gern Wasser","Wasser ich hätte gern ein Glas","Gern hätte ich Wasser ein Glas"], 0, "\"Ich hätte gern ein Glas Wasser.\" = I would like a glass of water."],
    ]
  },
  {
    id:"de_a1_daily_routine", level:"A1", title:"Tagesablauf", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en alemán.",
    study: {
      vocab: [
        ["aufwachen", "to wake up"],
        ["aufstehen", "to get up"],
        ["frühstücken / zu Mittag essen / zu Abend essen", "to have breakfast/lunch/dinner"],
        ["zur Arbeit gehen", "to go to work"],
        ["jeden Tag", "every day"]
      ],
      grammar: [
        ["Verbos separables en presente", "Muchos verbos de rutina son \"separables\": el prefijo (auf-) se separa y va al final de la oración en presente.", "Ich stehe um 7 Uhr auf. (aufstehen → stehe...auf)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["Ich wache um 7 Uhr auf","Du wachst um 7 Uhr auf","Er wacht um 7 Uhr auf","Aufwachen um 7 Uhr"], 0, "\"Ich wache um 7 Uhr auf.\" — el verbo separable \"aufwachen\" se divide: wache...auf."],
      ["fill", "Completa: \"Sie ___ um 8 Uhr ___.\" (gets up)", ["steht / auf","stehe / auf","stehst / auf","aufstehen"], 0, "\"Sie steht um 8 Uhr auf.\" — \"aufstehen\" se separa: steht...auf."],
      ["mcq", "¿Qué significa \"frühstücken\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "Frühstücken = to have breakfast. Zu Mittag essen = to have lunch, zu Abend essen = to have dinner."],
      ["translate", "Traduce: \"I go to work at 9.\"", ["Ich gehe um 9 Uhr zur Arbeit","Ich gehe zur Arbeit 9 Uhr","Er geht um 9 Uhr zur Arbeit","Ich um 9 Uhr gehe zur Arbeit"], 0, "\"Ich gehe um 9 Uhr zur Arbeit.\" — \"zur Arbeit gehen\" y \"um + hora\" para indicar el momento."],
      ["mcq", "¿Cómo se dice \"every day\" en alemán?", ["Jeden Tag","Ein Tag","Irgendwann","Der andere Tag"], 0, "Jeden Tag = every day. Ein Tag = one day."],
      ["arrange", "Ordena: [Uhr / ich / zehn / schlafe / um]", ["Ich schlafe um zehn Uhr","Um zehn Uhr ich schlafe","Zehn Uhr ich schlafe um","Ich um zehn Uhr schlafe"], 0, "\"Ich schlafe um zehn Uhr.\" = I sleep at ten. Sujeto (ich) + verbo (schlafe) + preposición + hora."],
    ]
  },
  {
    id:"de_a2_shopping_clothes", level:"A2", title:"Einkaufen und Kleidung", emoji:"🛍️", xp:40,
    description:"Aprende a comprar ropa, preguntar precios y tallas en alemán.",
    study: {
      vocab: [
        ["das Hemd, das T-Shirt", "shirt, t-shirt"],
        ["die Hose, der Rock", "pants, skirt"],
        ["die Schuhe", "shoes"],
        ["Wie viel kostet das?", "How much does it cost?"],
        ["die Größe", "size"],
        ["anprobieren", "to try on (something)"]
      ],
      grammar: [
        ["Komparativ: ...er als", "Se forma añadiendo \"-er\" al adjetivo, seguido de \"als\".", "Dieses Hemd ist billiger als das da."],
        ["El verbo \"passen\"", "\"Passen\" describe cómo le queda la ropa a alguien.", "Diese Schuhe passen mir nicht (sind zu klein)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"How much does it cost?\" en alemán?", ["Wie viel kostet das?","Welche Größe hast du?","Wo ist das?","Gefällt dir das?"], 0, "\"Wie viel kostet das?\" se usa para preguntar el precio de algo."],
      ["fill", "Completa: \"Dieser Rock ist ___ teuer ___ jener.\" (more...than)", ["teurer / als","weniger / als","so / wie","sehr / als"], 0, "El comparativo alemán añade \"-er\" al adjetivo y usa \"als\": teurer als = more expensive than."],
      ["mcq", "¿Qué significa \"anprobieren\"?", ["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], 0, "\"Anprobieren\" = to try on. Se usa antes de comprar, para ver si la talla es correcta."],
      ["translate", "Traduce al alemán: \"These shoes are too small for me.\"", ["Diese Schuhe sind mir zu klein","Diese Schuhe sind groß","Diese Kleidung ist teuer","Diese Schuhe kosten viel"], 0, "\"Mir zu klein\" describe cómo le sienta la prenda a la persona (dativo: mir)."],
      ["mcq", "¿Cómo se dice \"shirt\" en alemán?", ["Hemd","Hose","Rock","Schuh"], 0, "Hemd = shirt. Hose = pants, Rock = skirt, Schuh = shoe."],
      ["arrange", "Ordena: [meine / das / Größe / ist]", ["Das ist meine Größe","Meine Größe ist das","Ist das meine Größe","Größe ist das meine"], 0, "\"Das ist meine Größe.\" = This is my size."],
    ]
  },
  {
    id:"de_a2_weather_seasons", level:"A2", title:"Wetter und Jahreszeiten", emoji:"🌦️", xp:40,
    description:"Habla del clima y las estaciones del año en alemán.",
    study: {
      vocab: [
        ["es ist heiß / kalt", "it's hot / cold"],
        ["es regnet, es schneit", "it rains, it snows"],
        ["der Sommer, der Winter, der Frühling, der Herbst", "summer, winter, spring, autumn"],
        ["es ist bewölkt / sonnig", "it's cloudy / sunny"]
      ],
      grammar: [
        ["Unpersönliches \"es\" beim Wetter", "\"Es\" funciona como sujeto impersonal con los verbos del clima.", "Es regnet heute. Es ist sehr kalt."],
        ["Präsens für aktuelle Handlungen", "El alemán usa el presente simple para acciones en curso (no existe un tiempo continuo).", "Es regnet gerade jetzt."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"it's cold\" en alemán?", ["Es ist kalt","Es ist heiß","Es ist sonnig","Es regnet"], 0, "Es ist kalt = it's cold. Es ist heiß = it's hot."],
      ["fill", "Completa: \"Im Winter ___ es manchmal.\" (it snows)", ["schneit","regnet","ist heiß","ist sonnig"], 0, "Es schneit = it snows, del verbo \"schneien\", típico del invierno."],
      ["mcq", "¿Qué estación sigue a la primavera (der Frühling)?", ["Der Sommer","Der Winter","Der Herbst","Der Frühling"], 0, "El orden de las estaciones es: der Frühling, der Sommer, der Herbst, der Winter."],
      ["translate", "Traduce al alemán: \"It's raining right now.\"", ["Es regnet gerade jetzt","Es regnet morgen","Es ist jetzt kalt","Es hat geregnet"], 0, "El alemán usa el presente simple (\"es regnet\") con \"gerade jetzt\" para expresar una acción en curso."],
      ["mcq", "¿Cómo se dice \"sunny\" en alemán?", ["Sonnig","Bewölkt","Regnerisch","Verschneit"], 0, "Sonnig = sunny. Bewölkt = cloudy, regnerisch = rainy, verschneit = snowy."],
      ["arrange", "Ordena: [heute / ist / kalt / sehr / es]", ["Es ist heute sehr kalt","Heute ist es sehr kalt","Kalt ist es sehr heute","Sehr es ist kalt heute"], 0, "\"Es ist heute sehr kalt.\" = It's very cold today."],
    ]
  },
  {
    id:"de_a2_perfekt_gestern", level:"A2", title:"Gestern: das Perfekt", emoji:"📅", xp:45,
    description:"Aprende a hablar de acciones terminadas en el pasado con el Perfekt.",
    study: {
      vocab: [
        ["gestern, gestern Abend, letzte Woche", "yesterday, last night, last week"],
        ["ich habe gegessen, du hast gegessen", "I ate, you ate"],
        ["ich bin gegangen, du bist gegangen", "I went, you went"],
        ["Was hast du gemacht?", "What did you do?"]
      ],
      grammar: [
        ["Perfekt mit \"haben\"", "Sujeto + haben (conjugado) + participio II.", "Ich habe einen Apfel gegessen."],
        ["Perfekt mit \"sein\"", "Los verbos de movimiento (gehen, fahren...) usan \"sein\".", "Ich bin gestern ins Kino gegangen."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I ate\" en alemán?", ["Ich habe gegessen","Ich esse","Ich werde essen","Beim Essen"], 0, "Ich habe gegessen = I ate (Perfekt). Ich esse = I eat (presente)."],
      ["fill", "Completa: \"Gestern bin ich ins Kino ___.\" (went)", ["gegangen","gehe","werde gehen","ging"], 0, "\"Gehen\" es un verbo de movimiento, por eso el Perfekt se forma con \"sein\": bin + gegangen."],
      ["mcq", "¿Qué auxiliar se usa con \"essen\" en el Perfekt?", ["Haben","Sein","Werden","Können"], 0, "La mayoría de los verbos, incluido \"essen\", usan \"haben\" como auxiliar en el Perfekt."],
      ["translate", "Traduce al alemán: \"What did you do last night?\"", ["Was hast du gestern Abend gemacht?","Was machst du jetzt?","Was wirst du morgen machen?","Was machst du immer?"], 0, "\"Was hast du gemacht\" usa el Perfekt de \"machen\" para preguntar por una acción terminada."],
      ["mcq", "¿Cómo se dice \"last week\" en alemán?", ["Letzte Woche","Diese Woche","Nächste Woche","Jeden Tag"], 0, "Letzte Woche = last week. Diese Woche = this week."],
      ["arrange", "Ordena: [einen / ich / gegessen / habe / Apfel]", ["Ich habe einen Apfel gegessen","Einen ich habe Apfel gegessen","Apfel einen ich habe gegessen","Ich einen habe Apfel gegessen"], 0, "\"Ich habe einen Apfel gegessen.\" = I ate an apple."],
    ]
  },
  {
    id:"de_b1_future_plans", level:"B1", title:"Die Zukunft: Pläne und Vorhersagen", emoji:"🔮", xp:50,
    description:"Habla de planes futuros y predicciones usando el Futur I en alemán.",
    study: {
      vocab: [
        ["morgen, nächste Woche, nächstes Jahr", "tomorrow, next week, next year"],
        ["ich werde reisen, du wirst studieren, er/sie wird leben", "I will travel, you will study, he/she will live"],
        ["werden + Infinitiv (Futur I)", "will + infinitive"],
        ["wahrscheinlich, sicherlich", "probably, surely"]
      ],
      grammar: [
        ["Futur I: werden + Infinitiv", "Sujeto + werden (conjugado) + infinitivo al final de la frase.", "Ich werde nächstes Jahr nach Japan reisen."],
        ["Präsens für geplante Zukunft", "El alemán también usa el presente + expresión temporal para planes cercanos.", "Ich studiere heute Abend."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I will travel\" en alemán?", ["Ich werde reisen","Ich reise","Ich reiste","Beim Reisen"], 0, "Ich werde reisen = I will travel (Futur I). Ich reise = I travel (presente)."],
      ["fill", "Completa: \"Nächstes Jahr ___ ich nach Spanien ___.\" (I will travel)", ["werde / reisen","reise / -","reiste / -","würde / reisen"], 0, "El Futur I se forma con \"werden\" conjugado y el infinitivo al final: werde ... reisen."],
      ["mcq", "¿Cuál es la estructura del Futur I?", ["werden (conjugado) + infinitivo al final","haben + participio","sein + Adjektiv","Modalverb + Infinitiv"], 0, "El Futur I siempre usa \"werden\" conjugado, con el infinitivo del verbo principal al final de la frase."],
      ["translate", "Traduce al alemán: \"She will study medicine next year.\"", ["Sie wird nächstes Jahr Medizin studieren","Sie studiert Medizin","Sie hat Medizin studiert","Sie studiert gerade Medizin"], 0, "\"Wird ... studieren\" es el Futur I en tercera persona."],
      ["mcq", "¿Cómo se dice \"next week\" en alemán?", ["Nächste Woche","Letzte Woche","Diese Woche","Jeden Tag"], 0, "Nächste Woche = next week. Letzte Woche = last week."],
      ["arrange", "Ordena: [morgen / werde / arbeiten / ich]", ["Ich werde morgen arbeiten","Morgen werde ich arbeiten","Arbeiten werde ich morgen","Ich morgen werde arbeiten"], 0, "\"Ich werde morgen arbeiten.\" = I will work tomorrow."],
    ]
  },
  {
    id:"de_b1_travel_directions", level:"B1", title:"Reisen und Wegbeschreibungen", emoji:"🧭", xp:52,
    description:"Pide y da indicaciones para llegar a un lugar en alemán.",
    study: {
      vocab: [
        ["der Flughafen, der Bahnhof", "airport, train station"],
        ["Wie komme ich zu... ?", "How do I get to...?"],
        ["biegen Sie rechts/links ab, gehen Sie geradeaus", "turn right/left, go straight"],
        ["einen Flug/ein Hotel buchen", "to book a flight/hotel"]
      ],
      grammar: [
        ["Formeller Imperativ (Sie)", "Se usa para dar indicaciones formales: biegen Sie ab, gehen Sie, nehmen Sie.", "Biegen Sie rechts an der Ecke ab."],
        ["Präpositionen des Ortes", "in der Nähe von, weit von, neben, gegenüber.", "Das Hotel ist in der Nähe vom Bahnhof."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"How do I get to the airport?\" en alemán?", ["Wie komme ich zum Flughafen?","Wo wohnen Sie?","Wie spät ist es?","Wie viel kostet das?"], 0, "\"Wie komme ich zu...?\" se usa para pedir indicaciones de cómo llegar a un lugar."],
      ["fill", "Completa: \"___ Sie rechts an der Ampel ___.\" (turn)", ["Biegen / ab","Gehen / -","Kommen / -","Fahren / ab"], 0, "\"Abbiegen\" es un verbo separable: Biegen Sie ... ab."],
      ["mcq", "¿Qué significa \"geradeaus gehen\"?", ["To go straight ahead","To turn right","To turn left","To stop"], 0, "Geradeaus gehen = to go straight ahead."],
      ["translate", "Traduce al alemán: \"The hotel is next to the train station.\"", ["Das Hotel ist neben dem Bahnhof","Das Hotel ist weit vom Bahnhof","Das Hotel ist im Bahnhof","Der Bahnhof ist im Hotel"], 0, "\"Neben\" = next to, describe la ubicación relativa entre dos lugares (con dativo aquí)."],
      ["mcq", "¿Cómo se dice \"to book a flight\" en alemán?", ["Einen Flug buchen","Einen Flug verpassen","Einen Flug stornieren","Einen Flug bezahlen"], 0, "Einen Flug buchen = to book a flight. Verpassen = to miss, stornieren = to cancel."],
      ["arrange", "Ordena: [rechts / Sie / biegen / ab]", ["Biegen Sie rechts ab","Rechts biegen Sie ab","Ab biegen Sie rechts","Biegen ab Sie rechts"], 0, "\"Biegen Sie rechts ab.\" = Turn right. Verbo separable: Biegen...ab."],
    ]
  },
  {
    id:"de_b1_advice_recommendations", level:"B1", title:"Ratschläge und Empfehlungen geben", emoji:"💡", xp:54,
    description:"Aprende a dar consejos y recomendaciones en alemán.",
    study: {
      vocab: [
        ["du solltest", "you should"],
        ["ich empfehle dir, ... zu ...", "I recommend that you"],
        ["es ist wichtig, dass", "it's important that"],
        ["an deiner Stelle", "if I were you (in your place)"]
      ],
      grammar: [
        ["\"Sollen\" im Konjunktiv II für Ratschläge", "\"Du solltest\" + infinitivo expresa un consejo directo.", "Du solltest dich mehr ausruhen."],
        ["\"An deiner Stelle\" + Konjunktiv II", "Estructura fija para dar consejos hipotéticos.", "An deiner Stelle würde ich mit ihr sprechen."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"You should rest more\" en alemán?", ["Du solltest dich mehr ausruhen","Du ruhst dich mehr aus","Du hast dich mehr ausgeruht","Sich mehr ausruhend"], 0, "\"Du solltest\" (Konjunktiv II de sollen) + infinitivo es la forma estándar de dar un consejo."],
      ["fill", "Completa: \"___ würde ich mit dem Chef sprechen.\" (If I were you)", ["An deiner Stelle","An meiner Stelle","Deine Stelle","Ich bin du"], 0, "\"An deiner Stelle\" es la expresión fija para dar un consejo hipotético en alemán."],
      ["mcq", "¿Qué significa \"ich empfehle dir zu studieren\"?", ["I recommend that you study","I studied with you","You recommend I study","I will study with you"], 0, "\"Ich empfehle dir zu\" + infinitivo expresa una recomendación dirigida a otra persona."],
      ["translate", "Traduce al alemán: \"It's important that you arrive early.\"", ["Es ist wichtig, dass du früh ankommst","Es ist wichtig, spät anzukommen","Du bist früh wichtig angekommen","Es ist wichtig, dass du früh angekommen bist"], 0, "\"Es ist wichtig, dass\" + presente expresa una condición actual importante."],
      ["mcq", "¿Cómo se dice \"if I were you\" en alemán?", ["An deiner Stelle","An meiner Stelle","Wenn ich du bin","Wenn du ich bist"], 0, "\"An deiner Stelle\" es la expresión fija para dar un consejo hipotético."],
      ["arrange", "Ordena: [mehr / solltest / schlafen / du]", ["Du solltest mehr schlafen","Mehr solltest du schlafen","Schlafen solltest du mehr","Du solltest schlafen mehr"], 0, "\"Du solltest mehr schlafen.\" = You should sleep more."],
    ]
  },
];
