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
    id:"de_b1_reading_notices", level:"B1", title:"Lesen und Entscheidungen", emoji:"📌", xp:55,
    description:"Entnimm praktische Informationen aus Hinweisen und Nachrichten des Alltags.",
    study:{
      vocab:[
        ["auf Anfrage erhältlich","available on request"],
        ["Änderungen vorbehalten","subject to change"],
        ["die Voraussetzungen erfüllen","to be eligible"],
        ["die Frist","deadline"]
      ],
      grammar:[
        ["Selektives Lesen","Suche zuerst nach Zweck, Bedingung und geforderter Handlung.","Buchungen werden erst nach Zahlungseingang bestätigt."]
      ]
    },
    ex:[
      ["mcq","Hinweis: \"Die Workshop-Plätze sind bis Freitag für Mitglieder reserviert; danach werden die restlichen Plätze freigegeben.\" Was sollte eine Person tun, die kein Mitglied ist?",["Bis Freitag warten, um zu erfahren, ob noch Plätze frei sind.","Heute buchen, weil sie Priorität hat.","Vor Freitag eine Pflichtgebühr zahlen.","Annehmen, dass der Workshop abgesagt ist."],0,"Der Hinweis zeigt eine zeitlich begrenzte Priorität für Mitglieder, keine dauerhafte Exklusivität."],
      ["mcq","Nachricht: \"Bitte reichen Sie das Formular bis Donnerstag 17 Uhr ein. Verspätete Bewerbungen werden nur berücksichtigt, wenn noch Plätze frei sind.\" Was ist die sicherste Handlung?",["Das Formular vor Donnerstag 17 Uhr einreichen.","Warten, bis bestätigt wird, dass Plätze frei sind.","Am Freitag einreichen, weil verspätete Bewerbungen immer akzeptiert werden.","Anrufen, um die Bewerbung zu stornieren."],0,"\"Bis\" markiert eine klare Frist; \"nur wenn\" garantiert keine verspätete Annahme."],
      ["fill","Ergänze: \"Bewerber müssen für das Programm ___ sein, bevor sie eine Förderung beantragen können.\"",["berechtigt","verfügbar","vorbehalten","begrenzt"],0,"\"Berechtigt\" bedeutet, dass jemand die nötigen Voraussetzungen erfüllt."],
      ["writing","Schreib eine E-Mail (45-60 Wörter) und frag, ob du dich noch nach der Frist bewerben kannst.",[],["verspätet","Bewerbung","verfügbar"],"Nutze eine Anrede, eine klare Bitte und einen passenden Schluss.","Du schreibst an den Kursleiter eines Kurses, der gestern geschlossen hat."]
    ]
  },
  {
    id:"de_b1_opinions", level:"B1", title:"Meinungen und Standpunkte", emoji:"🎧", xp:58,
    description:"Unterscheide Fakten, Vorlieben und Gründe in alltäglichen Gesprächen.",
    study:{
      vocab:[
        ["ich würde lieber","I would rather"],
        ["es stellt sich heraus","it turns out"],
        ["es lohnt sich","it's worth it"],
        ["jemanden abschrecken","to put someone off"]
      ],
      grammar:[
        ["Begründete Meinung","Eine B1-Antwort sollte eine Meinung und einen Grund enthalten.","Ich würde lieber mit dem Zug reisen, weil ich unterwegs arbeiten kann."]
      ]
    },
    ex:[
      ["mcq","Lies: \"Maya erwartete, dass der Kurs schwierig sein würde, aber es stellt sich heraus, dass das wöchentliche Feedback ihn machbar macht.\" Was denkt Maya?",["Der Kurs ist anspruchsvoll, aber die Unterstützung hilft ihr.","Der Kurs ist zu einfach.","Das Feedback macht den Kurs schwieriger.","Sie hat den Kurs wegen fehlender Unterstützung abgebrochen."],0,"Die anfängliche Erwartung wird durch eine positivere Erfahrung kontrastiert."],
      ["mcq","Welche Antwort drückt Präferenz und Grund aus?",["Ich würde lieber online treffen, weil es Reisezeit spart.","Ich treffe online gestern.","Online-Treffen sind eine Reisezeit.","Ich bevorzuge weil Treffen."],0,"Die Struktur enthält Präferenz, Option und Begründung."],
      ["fill","Ergänze: \"Der Preis war hoch, aber die Erfahrung war es ___.\"",["wert","lieber","heraus","abschreckend"],0,"Der feste Ausdruck ist \"es wert sein\"."],
      ["speaking","Sprich 45-60 Wörter: vergleiche allein lernen und mit anderen lernen. Nenne eine Präferenz, einen Grund und einen Nachteil.",[],["ich bevorzuge","weil","allerdings"],"Strukturiere deine Antwort: Vergleich, Präferenz, Grund und Einschränkung.","Gespräch mit einem Klassenkameraden."]
    ]
  },
  {
    id:"de_b1_storytelling", level:"B1", title:"Eine Erfahrung erzählen", emoji:"🗺️", xp:60,
    description:"Erzähle vergangene Erfahrungen mit Perfekt und Präteritum.",
    study:{
      vocab:[
        ["zuerst","at first"],
        ["schließlich","eventually"],
        ["unerwartet","unexpectedly"],
        ["bemerken","to realise"]
      ],
      grammar:[
        ["Perfekt vs. Präteritum im Erzählen","Präteritum beschreibt oft den Hintergrund (besonders bei \"sein\", \"haben\", Modalverben); das Perfekt erzählt abgeschlossene Handlungen in der gesprochenen Sprache.","Während wir auf den Bus warteten, fing es an zu regnen."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz verwendet Hintergrund und Handlung korrekt?",["Während wir im Park spazierten, sahen wir einen Unfall.","Während wir im Park spazierten sind, haben wir einen Unfall gesehen.","Während wir im Park spazieren, sahen wir einen Unfall gestern.","Wir spazierten im Park, während wir einen Unfall sahen."],0,"Der Hintergrund (spazierten) steht im Präteritum; die punktuelle Handlung (sahen) ebenfalls, da beide im selben Erzählregister stehen."],
      ["fill","Ergänze: \"Ich ___ nicht, wie spät es war, bis ich auf mein Handy schaute.\"",["bemerkte","bemerke","habe bemerkt gewesen","bemerken"],0,"Präteritum \"bemerkte\" passt zum erzählenden Hintergrund."],
      ["translate","Übersetze: \"At first I was nervous, but eventually I enjoyed the experience.\"",["Zuerst war ich nervös, aber schließlich habe ich die Erfahrung genossen.","Zuerst bin ich nervös gewesen, aber schließlich genoss ich die Erfahrung.","Zuerst war ich nervös, aber schließlich genoss ich die Erfahrung sehr.","Zuerst war ich nervös, aber schließlich habe ich genossen die Erfahrung."],0,"Der Hintergrundzustand steht im Präteritum (\"war\"), die abgeschlossene Handlung im Perfekt (\"habe genossen\")."],
      ["writing","Schreib eine Geschichte (80-100 Wörter) über einen Plan, der sich unerwartet änderte.",[],["zuerst","aber","schließlich"],"Achte darauf, dass jeder Teil die Geschichte voranbringt und die Zeitformen konsistent sind.","Eine kurze Reise, die nicht wie geplant verlief."]
    ]
  },
  {
    id:"de_b1_agreement", level:"B1", title:"Diskutieren und sich einigen", emoji:"🤝", xp:62,
    description:"Schlage Optionen vor, reagiere auf fremde Ideen und verhandle eine Entscheidung.",
    study:{
      vocab:[
        ["wollen wir...?","shall we...?"],
        ["ich verstehe deinen Punkt","I see your point"],
        ["wie wäre es mit...?","how about...?"],
        ["ein Kompromiss","a compromise"]
      ],
      grammar:[
        ["Kooperative Sprache","Beim Verhandeln: vorschlagen, reagieren und eine gemeinsame Alternative suchen.","Ich verstehe deinen Punkt zu den Kosten; wie wäre es, die günstigere Option zu wählen?"]
      ]
    },
    ex:[
      ["mcq","Welche Antwort baut Einigung auf?",["Ich verstehe deinen Punkt zu den Kosten; wie wäre es, weniger Leute einzuladen?","Deine Idee ist schlecht, also gewinnt meine.","Ich verstehe keinen Punkt.","Die günstigere Option sind die Leute."],0,"Erkennt eine Idee an und schlägt einen konkreten Kompromiss vor."],
      ["fill","Ergänze: \"___ wir uns nach dem Unterricht in der Bibliothek?\"",["Treffen","Würden","Trafen","Haben"],0,"\"Treffen wir uns...?\" ist eine übliche Vorschlagsform im Präsens."],
      ["mcq","Welcher Satz drückt höflichen Widerspruch aus?",["Ich bin nicht sicher, ob das klappt, weil der Ort früh schließt.","Das wird nie funktionieren.","Dein Ort ist furchtbar.","Nein, natürlich nicht."],0,"Der Widerspruch wird abgemildert und mit einem Grund begründet."],
      ["speaking","Sprich 45-60 Wörter: schlage einen Plan fürs Wochenende vor, reagiere auf einen Einwand und biete einen Kompromiss an.",[],["ich schlage vor","weil","Kompromiss"],"Nutze einen konkreten Vorschlag, einen Grund und eine kooperative Antwort.","Du organisierst eine Aktivität mit einem Freund mit wenig Budget."]
    ]
  },
  {
    id:"de_b1_future_plans", level:"B1", title:"Pläne und Zukunft", emoji:"🗓️", xp:60,
    description:"Sprich über Pläne, Absichten und Vermutungen mit verschiedenen Zukunftsformen.",
    study:{
      vocab:[
        ["ich habe vor","I intend to"],
        ["bald","soon"],
        ["sobald ich kann","as soon as I can"],
        ["es ist möglich, dass","it's possible that"]
      ],
      grammar:[
        ["Präsens für Pläne vs. werden-Futur","Im Deutschen drückt oft das Präsens mit Zeitangabe geplante Handlungen aus; \"werden\" + Infinitiv drückt Vermutungen aus.","Ich ziehe nächsten Monat um. / Ich glaube, es wird morgen regnen."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz drückt einen bereits entschiedenen Plan aus?",["Ich beginne im September einen Italienischkurs.","Ich werde einen Kurs beginnen, wenn ich Zeit habe.","Ich glaube, ich werde irgendeinen Kurs beginnen.","Ich begann letztes Jahr einen Kurs."],0,"Das Präsens mit Zeitangabe drückt hier einen bereits entschiedenen Plan aus."],
      ["fill","Ergänze: \"Sobald ich den Bericht ___, schicke ich ihn dir.\"",["fertig habe","fertig hatte","fertig haben werde","fertig hätte"],0,"Nach \"sobald\" für eine nahe Zukunft steht im Deutschen oft das Präsens."],
      ["translate","Übersetze: \"As soon as I finish the project, I'll call you.\"",["Sobald ich das Projekt fertig habe, rufe ich dich an.","Als ich das Projekt fertig hatte, rufe ich an.","Sobald ich das Projekt fertig hatte, werde ich anrufen.","Wenn ich das Projekt fertig habe, rief ich an."],0,"\"Sobald\" + Präsens drückt eine nahe zukünftige Bedingung aus."],
      ["writing","Schreib 45-60 Wörter über deine Pläne für nächstes Jahr. Benutze mindestens zwei Zukunftsausdrücke.",[],["ich habe vor","sobald","es ist möglich"],"Kombiniere mindestens zwei Arten, über die Zukunft zu sprechen, und begründe einen Plan.","Du erzählst einem Freund von deinen Plänen."]
    ]
  },
  {
    id:"de_b1_complaints_requests", level:"B1", title:"Beschwerden und höfliche Bitten", emoji:"✉️", xp:60,
    description:"Formuliere Beschwerden und formelle Bitten mit dem Konjunktiv II der Höflichkeit.",
    study:{
      vocab:[
        ["ich hätte gern","I would like"],
        ["könnten Sie...?","could you...?"],
        ["ich bedaure, Ihnen mitteilen zu müssen","I regret to inform you"],
        ["eine Beschwerde einreichen","to file a complaint"]
      ],
      grammar:[
        ["Konjunktiv II der Höflichkeit","\"Hätte gern\" und \"könnten\" machen Bitten und formelle Beschwerden höflicher.","Ich hätte gern gewusst, warum die Bestellung sich verspätet hat."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz ist eine höfliche, formelle Beschwerde?",["Ich hätte gern gewusst, warum das Paket eine Woche zu spät angekommen ist.","Das ist eine totale Katastrophe!","Ihre Firma macht nie etwas richtig.","Ich zahle gar nichts."],0,"Formuliert die Beschwerde indirekt und respektvoll, ohne an Klarheit zu verlieren."],
      ["fill","Ergänze: \"___ Sie mir bitte eine Kopie der Rechnung schicken?\"",["Könnten","Können","Konnten","Kann"],0,"\"Könnten\" im Konjunktiv II macht die Bitte höflicher und formeller."],
      ["translate","Übersetze: \"I would like to file a complaint about the service.\"",["Ich möchte mich über den Service beschweren.","Ich will beschweren über den Service.","Ich mag eine Beschwerde des Service einreichen.","Ich würde eine Beschwerde den Service einreichen."],0,"\"Ich möchte\" + Infinitiv ist die Standardformel für höfliche Beschwerden."],
      ["writing","Schreib eine Beschwerde-E-Mail (50-70 Wörter) über eine unvollständige Bestellung. Benutze höfliche Konjunktivformen.",[],["ich hätte gern","könnten Sie","ich bedaure"],"Erkläre das Problem, formuliere eine klare Bitte und schließe höflich.","Eine Online-Bestellung kam mit zwei fehlenden Artikeln an."]
    ]
  },
  {
    id:"de_b2_hypotheticals", level:"B2", title:"Hypothesen und irreale Bedingungen", emoji:"🌀", xp:75,
    description:"Drücke unwahrscheinliche oder irreale Hypothesen mit dem Konjunktiv II aus.",
    study:{
      vocab:[
        ["wenn ich hätte","if I had"],
        ["falls","in case"],
        ["es sei denn","unless"],
        ["angenommen, dass","assuming that"]
      ],
      grammar:[
        ["Irrealer Konditionalsatz (Typ 2)","Für unwahrscheinliche oder irreale Hypothesen in der Gegenwart: wenn + Konjunktiv II, Hauptsatz mit würde + Infinitiv (oder Konjunktiv II bei häufigen Verben).","Wenn ich mehr Zeit hätte, würde ich öfter reisen."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz drückt eine unwahrscheinliche Hypothese korrekt aus?",["Wenn ich mehr Geld hätte, würde ich ein größeres Haus kaufen.","Wenn ich mehr Geld habe, würde ich ein größeres Haus kaufen.","Wenn ich mehr Geld hätte, kaufe ich ein größeres Haus.","Wenn ich mehr Geld würde haben, kaufte ich ein Haus."],0,"Typ 2 verlangt Konjunktiv II im wenn-Satz und würde + Infinitiv (oder Konjunktiv II) im Hauptsatz."],
      ["fill","Ergänze: \"Es sei denn, wir ___ einen Sondereinsatz, schaffen wir es nicht rechtzeitig.\"",["machen","machten","würden machen","gemacht"],0,"Nach der festen Wendung 'es sei denn' folgt ein Nebensatz im Indikativ: 'wir machen'."],
      ["mcq","Was ist die beste Umschreibung von \"Wenn ich du wäre, würde ich das Angebot nicht annehmen\"?",["Ein hypothetischer Rat: der Sprecher würde das Angebot an der Stelle des Hörers nicht annehmen.","Ein direkter Befehl.","Eine Beschreibung einer vergangenen Tatsache.","Ein Versprechen für die Zukunft."],0,"Die hypothetische Struktur drückt einen Rat aus, keine Tatsache und keinen Befehl."],
      ["writing","Schreib 60-80 Wörter: beschreibe, was du anders machen würdest, wenn du ein Jahr deines Lebens wiederholen könntest. Benutze mindestens zwei Hypothesen mit 'wenn'.",[],["wenn ich hätte","es sei denn","angenommen"],"Achte darauf, dass jede Hypothese Konjunktiv II korrekt mit würde/Konjunktiv II kombiniert.","Persönliche Reflexion für einen Blog."]
    ]
  },
  {
    id:"de_b2_reported_speech", level:"B2", title:"Indirekte Rede", emoji:"💬", xp:78,
    description:"Gib wieder, was andere gesagt haben, mit dem passenden Modus und Zeitangaben.",
    study:{
      vocab:[
        ["er sagte, dass","he said that"],
        ["sie erklärte, dass","she explained that"],
        ["er fragte, ob","he asked whether"],
        ["sie fügte hinzu, dass","she added that"]
      ],
      grammar:[
        ["Indirekte Rede mit Konjunktiv I","In formeller indirekter Rede wird oft der Konjunktiv I verwendet, besonders wenn er sich vom Indikativ unterscheidet.","Sie sagte: 'Ich komme später.' → Sie sagte, sie komme später."]
      ]
    },
    ex:[
      ["mcq","Direkte Rede: \"Ich werde den Bericht morgen fertigstellen.\" Was ist die korrekte indirekte Rede?",["Er sagte, er werde den Bericht am nächsten Tag fertigstellen.","Er sagte, er wird den Bericht morgen fertigstellen.","Er sagte, er würde den Bericht morgen fertigstellen gestern.","Er sagte, er fertigstellt den Bericht morgen."],0,"Konjunktiv I ('werde') und die Zeitangabe ändern sich zu 'am nächsten Tag'."],
      ["fill","Ergänze: \"Sie fragte, ob ich am Montag für das Treffen ___.\"",["verfügbar sei","verfügbar bin","verfügbar werde sein","verfügbar war"],0,"Im indirekten Fragesatz mit 'ob' steht oft der Konjunktiv I der Gegenwart: 'sei'."],
      ["mcq","Was ändert sich normalerweise beim Wechsel von direkter zu indirekter Rede in der Vergangenheit?",["Der Modus (oft Konjunktiv I) und manchmal Zeitangaben (morgen → am nächsten Tag).","Nur das Subjekt des Satzes.","Nichts ändert sich jemals.","Nur die Wortstellung."],0,"Der Modus wechselt oft zum Konjunktiv I und manche Zeitangaben passen sich an."],
      ["writing","Berichte in indirekter Rede (50-70 Wörter) ein kürzliches Gespräch, in dem dir jemand seine Pläne erzählt hat.",[],["er sagte, dass","sie erklärte","sie fügte hinzu"],"Passe Modus und Zeitangaben korrekt an.","Du erzählst einem Freund, was dir ein Kollege gesagt hat."]
    ]
  },
  {
    id:"de_b2_passive_impersonal", level:"B2", title:"Passiv und man-Konstruktion", emoji:"⚙️", xp:76,
    description:"Beschreibe Prozesse und Fakten, ohne zu betonen, wer sie ausführt.",
    study:{
      vocab:[
        ["werden + Partizip II","to be + past participle (passive)"],
        ["man + Verb","impersonal 'one' construction"],
        ["durchgeführt werden","to be carried out"],
        ["zuständig sein für","to be in charge of"]
      ],
      grammar:[
        ["Passiv und man-Konstruktion","Das Passiv mit 'werden' betont den Vorgang; 'man' ist eine natürliche informelle Alternative, wenn der Handelnde unwichtig ist.","Das Projekt wurde vom Ausschuss genehmigt. / Man genehmigte das Projekt."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz verwendet das Passiv korrekt?",["Die Verträge wurden gestern Nachmittag unterschrieben.","Die Verträge wurde gestern Nachmittag unterschrieben.","Die Verträge werden gestern Nachmittag unterschrieben.","Die Verträge sind gestern Nachmittag unterschreiben."],0,"Präteritum Passiv Plural: 'wurden' + Partizip II ('unterschrieben')."],
      ["fill","Ergänze: \"Das neue Gebäude ___ von einem internationalen Unternehmen entworfen.\"",["wurde","wird","hat","ist"],0,"Präteritum Passiv: 'wurde' + Partizip II ('entworfen')."],
      ["mcq","Wann wird die man-Konstruktion oft als natürliche Alternative zum Passiv verwendet?",["Wenn der Handelnde nicht wichtig oder unbekannt ist, besonders in gesprochener Sprache.","Wenn man den Handelnden immer nennen möchte.","Nie im natürlichen Deutsch.","Nur in alten literarischen Texten."],0,"'Man' ist im gesprochenen Deutsch sehr häufig, wenn der Handelnde unwichtig ist."],
      ["writing","Beschreibe in 50-70 Wörtern einen Prozess (zum Beispiel, wie eine Veranstaltung organisiert wird) und benutze mindestens zwei Passiv- oder man-Konstruktionen.",[],["man + Verb","wurde + Partizip","durchgeführt"],"Benutze mindestens zwei verschiedene Konstruktionen stimmig.","Du erklärst einem neuen Teammitglied einen Ablauf."]
    ]
  },
  {
    id:"de_b2_probability", level:"B2", title:"Vermutung und Wahrscheinlichkeit", emoji:"❓", xp:78,
    description:"Drücke Vermutungen mit Modalverben und passenden Adverbien aus.",
    study:{
      vocab:[
        ["wahrscheinlich","probably"],
        ["es könnte sein, dass","it could be that"],
        ["vermutlich","presumably"],
        ["das kann nicht stimmen","that can't be right"]
      ],
      grammar:[
        ["Vermutungen mit Modalverben","Deutsch drückt Vermutung oft mit Modalverben (könnte, dürfte, muss) statt mit einem eigenen Modus.","Er könnte schon zu Hause sein. / Sie muss den Zug verpasst haben."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz drückt eine höfliche, unsichere Vermutung aus?",["Der Vorschlag könnte machbar sein, aber wir brauchen mehr Daten.","Der Vorschlag ist absolut machbar, ohne Zweifel.","Der Vorschlag ist niemals machbar.","Der Vorschlag machbar sein könnte vielleicht."],0,"'Könnte' + Infinitiv drückt eine vorsichtige, unsichere Vermutung aus."],
      ["fill","Ergänze: \"Sie ___ die Entscheidung schon getroffen haben, als wir ankommen.\"",["dürfte","darf","durfte","dürfen"],0,"'Dürfte' + Infinitiv Perfekt drückt eine vorsichtige Vermutung über die Vergangenheit aus."],
      ["mcq","Welcher Ausdruck zeigt Sicherheit, keine Vermutung?",["Ich bin sicher, dass...","Es könnte sein, dass...","Vermutlich...","Wahrscheinlich..."],0,"'Ich bin sicher, dass' drückt Gewissheit aus, keine Vermutung."],
      ["speaking","Sprich 60-80 Wörter: äußere deine Meinung dazu, ob Homeoffice zur Norm wird. Benutze mindestens einen Ausdruck der Vermutung und einen der Sicherheit.",[],["könnte sein","wahrscheinlich","ich bin sicher"],"Wechsle passend zwischen vorsichtiger Vermutung und Sicherheit.","Informelle Diskussion über die Zukunft der Arbeit."]
    ]
  },
  {
    id:"de_b2_contrast_connectors", level:"B2", title:"Kontrastive Konnektoren", emoji:"⚖️", xp:76,
    description:"Nutze 'obwohl' und andere Konnektoren, um Ideen zu differenzieren und Fakten zu kontrastieren.",
    study:{
      vocab:[
        ["obwohl","although"],
        ["trotzdem","nevertheless"],
        ["dennoch","yet / still"],
        ["jedoch","however"]
      ],
      grammar:[
        ["Kontrastive Konnektoren","'Obwohl' leitet einen Nebensatz ein (Verb am Ende); 'trotzdem', 'dennoch' und 'jedoch' stehen typischerweise in einem eigenen Hauptsatz.","Obwohl der Flug sich verspätete, kamen wir pünktlich zum Meeting."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz verwendet 'obwohl' korrekt (Verbstellung)?",["Obwohl der Bericht unvollständig war, haben wir ihn rechtzeitig geschickt.","Obwohl der Bericht war unvollständig, haben wir ihn geschickt.","Obwohl unvollständig war der Bericht, wir haben ihn geschickt.","Obwohl der Bericht unvollständig, war er geschickt."],0,"Nach 'obwohl' steht das konjugierte Verb am Satzende."],
      ["fill","Ergänze: \"Der Bericht war unvollständig; wir haben ihn ___ rechtzeitig geschickt.\"",["trotzdem","obwohl","es sei denn","damit"],0,"'Trotzdem' steht in einem eigenen Hauptsatz mit normaler Verb-Zweit-Stellung."],
      ["mcq","Welcher Konnektor braucht KEINEN eigenen Nebensatz mit Verb am Ende (im Gegensatz zu 'obwohl')?",["Jedoch","Obwohl","Weil","Damit"],0,"'Jedoch' steht meist in einem eigenständigen Hauptsatz, nicht in einem Nebensatz."],
      ["writing","Schreib einen Absatz von 60-80 Wörtern: präsentiere eine Meinung und relativiere sie mit mindestens zwei verschiedenen Kontrastkonnektoren.",[],["obwohl","trotzdem","jedoch"],"Kombiniere korrekt Nebensatz- und Hauptsatzkonnektoren.","Meinung zu einem aktuellen Thema für ein Forum."]
    ]
  },
  {
    id:"de_b2_debate_nuance", level:"B2", title:"Differenziert argumentieren", emoji:"🗣️", xp:80,
    description:"Baue Argumente auf, die den Gegenpunkt anerkennen, bevor sie eine Position verteidigen.",
    study:{
      vocab:[
        ["einerseits / andererseits","on one hand / on the other hand"],
        ["es lässt sich nicht leugnen, dass","it can't be denied that"],
        ["es ist erwähnenswert, dass","it's worth noting that"],
        ["letztendlich","ultimately"]
      ],
      grammar:[
        ["Differenzierte Argumentation","Ein gutes B2-Argument erkennt den Gegenpunkt an, bevor es die eigene Position verteidigt.","Es lässt sich nicht leugnen, dass der Plan Kosten senkt, aber es ist erwähnenswert, dass er auch Risiken birgt."]
      ]
    },
    ex:[
      ["mcq","Welche Struktur zeigt ein gut differenziertes Argument?",["Es lässt sich nicht leugnen, dass das Projekt teuer ist, aber langfristig könnte es Ressourcen sparen.","Das Projekt ist teuer, Punkt.","Das Projekt kostet offensichtlich nichts.","Es gibt kein einziges Gegenargument zum Projekt."],0,"Erkennt einen Gegenpunkt an und relativiert ihn mit einem langfristigen Vorteil."],
      ["fill","Ergänze: \"___ hat der Vorschlag mehr Vor- als Nachteile.\"",["Letztendlich","Obwohl","Es sei denn","Ich bezweifle"],0,"'Letztendlich' wird benutzt, um ein Argument mit einer allgemeinen Schlussfolgerung zu schließen."],
      ["mcq","Welche Funktion hat 'es ist erwähnenswert, dass' in einem Argument?",["Es hebt einen Punkt hervor, den der Sprecher für besonders relevant hält.","Es führt eine irreale Hypothese ein.","Es drückt völligen Zweifel am Thema aus.","Es beendet das Gespräch abrupt."],0,"Es ist eine Formel, um einen relevanten Punkt im Argument hervorzuheben."],
      ["writing","Schreib einen argumentativen Absatz von 70-90 Wörtern zu einem umstrittenen Thema (z. B. Homeoffice). Erkenne einen Gegenpunkt an, bevor du deine Position verteidigst.",[],["einerseits","es lässt sich nicht leugnen","letztendlich"],"Struktur: Anerkennung des Gegenpunkts, eigene Position, Schlussfolgerung.","Beitrag zu einer schriftlichen Diskussion im Unterricht."]
    ]
  },
  {
    id:"de_c1_register_nuance", level:"C1", title:"Register und Nuance in formellen Texten", emoji:"🎩", xp:88,
    description:"Nutze Abschwächung (Hedging), um vorsichtige Aussagen im gehobenen Register zu formulieren.",
    study:{
      vocab:[
        ["es wäre angebracht zu betonen, dass","it would be worth pointing out that"],
        ["es wäre sinnvoll zu differenzieren, dass","it would be worth clarifying that"],
        ["dazu neigen zu glauben, dass","to be inclined to think that"],
        ["im Großen und Ganzen","broadly speaking"]
      ],
      grammar:[
        ["Abschwächung (Hedging) im gehobenen Register","Der Konjunktiv II schwächt Aussagen ab und macht sie vorsichtiger und formeller als der Indikativ Präsens.","Es wäre angebracht zu argumentieren, dass die Maßnahme verfrüht ist, auch wenn die Datenlage noch begrenzt ist."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz passt am besten zu einem formellen Bericht?",["Es wäre angebracht zu betonen, dass die Ergebnisse, obwohl vielversprechend, weiterer Analyse bedürfen.","Die Ergebnisse sind super, Punkt.","Das ist doch für jeden klar.","Dazu gibt es nichts weiter zu sagen."],0,"Das formelle Register bevorzugt Abschwächung und argumentative Vorsicht."],
      ["fill","Ergänze: \"___ zu differenzieren, dass die Studie auf einer kleinen Stichprobe basiert.\"",["Es wäre sinnvoll","Es ist offensichtlich","Niemals","Immer"],0,"'Es wäre sinnvoll' leitet eine abgeschwächte Empfehlung ein, typisch für das formelle Register."],
      ["mcq","Welchen Effekt hat der Konjunktiv II statt des Indikativs Präsens in einem Bericht?",["Er schwächt die Aussage ab und lässt Raum für begründeten Zweifel.","Er macht die Aussage kategorischer und sicherer.","Er ändert die Bedeutung völlig.","Er hat keinerlei stilistischen Effekt."],0,"Der Konjunktiv II mildert die Aussage, ohne sie zu verneinen."],
      ["writing","Schreib 60-80 Wörter eines kurzen Berichts, der einen Vorschlag bewertet, und benutze mindestens zwei abschwächende Ausdrücke.",[],["es wäre angebracht","es wäre sinnvoll","im Großen und Ganzen"],"Das formelle Register bevorzugt argumentative Vorsicht gegenüber absoluter Gewissheit.","Interner Bericht für ein Führungsgremium."]
    ]
  },
  {
    id:"de_c1_subjunctive_past", level:"C1", title:"Konjunktiv II der Vergangenheit", emoji:"⏳", xp:90,
    description:"Drücke irreale Hypothesen in der Vergangenheit mit komplexer Zeitabstimmung aus.",
    study:{
      vocab:[
        ["wenn ich es gewusst hätte","if I had known"],
        ["es war unmöglich, dass","it was impossible that"],
        ["es hätte genügt","it would have sufficed"],
        ["erst als","it wasn't until that"]
      ],
      grammar:[
        ["Konjunktiv II der Vergangenheit","Für irreale Hypothesen in der Vergangenheit: wenn + Konjunktiv II Plusquamperfekt (hätte/wäre + Partizip II) in beiden Satzteilen.","Wenn ich das Risiko gekannt hätte, hätte ich anders gehandelt."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz drückt eine irreale Hypothese in der Vergangenheit korrekt aus?",["Wenn wir den Vertrag rechtzeitig geprüft hätten, hätten wir das Problem vermieden.","Wenn wir den Vertrag rechtzeitig prüfen, hätten wir das Problem vermieden.","Wenn wir den Vertrag rechtzeitig geprüft hätten, vermeiden wir das Problem.","Wenn wir den Vertrag geprüft haben würden, hätten wir es vermieden."],0,"Beide Satzteile brauchen den Konjunktiv II der Vergangenheit (hätten + Partizip II)."],
      ["fill","Ergänze: \"Es war unmöglich, dass das Team das Projekt ohne mehr Ressourcen ___.\"",["hätte beenden können","beendet hatte","beenden würde","schon beendet"],0,"Nach 'es war unmöglich, dass' (Zweifel in der Vergangenheit) steht der Konjunktiv II der Vergangenheit."],
      ["mcq","Was unterscheidet den Konjunktiv II der Vergangenheit vom Konjunktiv II der Gegenwart?",["Der Konjunktiv II der Vergangenheit versetzt die Hypothese in einen früheren Zeitpunkt.","Es gibt keinen wirklichen Unterschied.","Der Konjunktiv II der Vergangenheit wird nur für die Zukunft verwendet.","Der Konjunktiv II der Gegenwart existiert im Deutschen nicht."],0,"Er fügt eine zusätzliche zeitliche Ebene innerhalb der Vergangenheit hinzu."],
      ["writing","Schreib 70-90 Wörter über eine vergangene Entscheidung, die du ändern würdest. Benutze mindestens zwei Strukturen mit Konjunktiv II der Vergangenheit.",[],["wenn ich gewusst hätte","es hätte genügt","erst als"],"Achte darauf, dass beide Satzteile korrekt im Konjunktiv II der Vergangenheit stehen.","Rückblickende Reflexion über eine berufliche Entscheidung."]
    ]
  },
  {
    id:"de_c1_nominalization", level:"C1", title:"Nominalisierung und formeller Stil", emoji:"📑", xp:86,
    description:"Verwandle Verben in Substantive, um ein akademisches und technisches Register zu erreichen.",
    study:{
      vocab:[
        ["die Umsetzung von","the implementation of"],
        ["das Fehlen von","the absence of"],
        ["führen zu","to give rise to"],
        ["mit sich bringen","to entail"]
      ],
      grammar:[
        ["Nominalisierung für ein formelles Register","Verben in Substantive umzuwandeln (umsetzen → die Umsetzung) ist typisch für akademische und technische Texte.","Die späte Umsetzung der Maßnahme führte zu weitverbreiteten Verzögerungen."]
      ]
    },
    ex:[
      ["mcq","Welche Umformulierung passt am besten zu einem technischen Bericht?",["Das Fehlen von Koordination zwischen den Teams führte zu doppelter Arbeit.","Sie haben sich nicht abgesprochen, deshalb haben sie Sachen doppelt gemacht.","Die Teams haben nicht miteinander geredet, also war es chaotisch.","Es war eine Katastrophe, weil niemand kommuniziert hat."],0,"Die Nominalisierung verdichtet die Information in einem objektiveren Ton."],
      ["fill","Ergänze: \"Die ___ neuer Technologien bringt hohe Anfangskosten mit sich.\"",["Einführung","Einführen","Eingeführt","Einzuführen"],0,"Das Substantiv 'Einführung' (Nominalisierung von 'einführen') passt zur formellen Struktur mit Artikel."],
      ["mcq","Welchen Vorteil bietet die Nominalisierung in einem technischen Text?",["Sie ermöglicht es, Informationen zu verdichten und einen objektiveren, unpersönlicheren Ton anzunehmen.","Sie macht den Text informeller und persönlicher.","Sie schließt jede Präzision aus.","Sie bringt keinen wirklichen Vorteil."],0,"Nominalisierung ist zentral für Dichte und Objektivität im technischen Register."],
      ["writing","Schreib 60-80 Wörter: forme einen informellen Absatz über ein Arbeitsproblem in einen formellen Berichtsauszug mit mindestens drei Nominalisierungen um.",[],["die Umsetzung","das Fehlen von","führen zu"],"Erkenne die Schlüsselverben und wandle sie in Substantive für einen formelleren Ton um.","Eine informelle Beschwerde in einen internen Bericht umwandeln."]
    ]
  },
  {
    id:"de_c1_causal_connectors", level:"C1", title:"Komplexe Kausal- und Folgekonnektoren", emoji:"🔗", xp:88,
    description:"Verknüpfe Ursachen und Folgen präzise mit fortgeschrittenen Konnektoren.",
    study:{
      vocab:[
        ["angesichts der Tatsache, dass","given the fact that"],
        ["insofern als","insofar as"],
        ["weshalb","which is why"],
        ["unter Androhung von","under penalty of"]
      ],
      grammar:[
        ["Komplexe Kausal- und Folgekonnektoren","'Weshalb' leitet eine logische Folge ein; 'angesichts der Tatsache, dass' und 'insofern als' leiten eine Ursache ein.","Angesichts der Tatsache, dass die Kosten gestiegen sind, wurde das Budget überarbeitet, weshalb Einsparungen nötig wurden."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz verwendet 'weshalb' korrekt?",["Die Daten waren widersprüchlich, weshalb sich die Veröffentlichung des Berichts verzögerte.","Weshalb die Daten widersprüchlich waren, verzögerte sich der Bericht.","Die Daten, weshalb widersprüchlich, verzögerten den Bericht.","Weshalb dass die Daten widersprüchlich sind, Verzögerung des Berichts."],0,"'Weshalb' leitet direkt eine logische Folge im Hauptsatz ein."],
      ["fill","Ergänze: \"___ der verfügbaren Ressourcen wird das Projekt langsamer voranschreiten als geplant.\"",["Angesichts","Weshalb","Unter Androhung von","Es wäre angebracht"],0,"'Angesichts' leitet direkt eine Ursache ein."],
      ["mcq","Was bedeutet 'insofern als' ungefähr?",["In dem Maße oder Grad, in dem etwas zutrifft; ähnlich wie 'in dem Ausmaß, in dem'.","Genau dasselbe wie 'obwohl'.","Leitet immer eine irreale Hypothese ein.","Wird nur für physische Maße verwendet."],0,"Drückt eine Proportionalität zwischen zwei verbundenen Tatsachen aus."],
      ["writing","Schreib einen Absatz von 70-90 Wörtern, der Ursache und Folge einer unternehmerischen Entscheidung erklärt, und benutze mindestens zwei Konnektoren dieser Lektion.",[],["angesichts der Tatsache","weshalb","insofern als"],"Unterscheide sorgfältig zwischen Ursachen- und Folgekonnektoren.","Ursachenanalyse für einen Managementbericht."]
    ]
  },
  {
    id:"de_c1_mediation_summary", level:"C1", title:"Mediation: präzise zusammenfassen", emoji:"🗂️", xp:90,
    description:"Fasse komplexe Informationen zusammen und bewahre dabei die logischen Beziehungen zwischen Ideen.",
    study:{
      vocab:[
        ["zusammenfassend","in summary"],
        ["der zentrale Punkt ist, dass","the key point is that"],
        ["es ist hervorzuheben, dass","it's worth highlighting that"],
        ["grob gesagt","broadly / roughly speaking"]
      ],
      grammar:[
        ["Mediation: präzise zusammenfassen","Eine gute C1-Zusammenfassung bewahrt die logische Beziehung zwischen Ideen (Ursache, Kontrast, Bedingung), nicht nur Schlüsselwörter.","Grob gesagt kommt der Bericht zu dem Schluss, dass der Plan machbar ist, wobei die Finanzierungsrisiken hervorzuheben sind."]
      ]
    },
    ex:[
      ["mcq","Was ist die beste Zusammenfassung für ein Publikum mit wenig Zeit?",["Grob gesagt empfiehlt der Bericht eine schrittweise Expansion, abhängig von externer Finanzierung.","Der Bericht hat viele Seiten über Expansion, Finanzierung und andere Dinge.","Die Expansion wird perfekt sein, wenn sich alle anstrengen.","Es gibt Finanzierung, Expansion und einen Bericht."],0,"Eine gute Zusammenfassung priorisiert Entscheidung, Bedingung und Hauptrisiko."],
      ["fill","Ergänze: \"___ zeigt die Studie eine moderate, aber stetige Verbesserung der Ergebnisse.\"",["Zusammenfassend","Unter Androhung von","Weshalb","Es wäre angebracht"],0,"'Zusammenfassend' leitet eine allgemeine Schlussfolgerung ein, die die Zusammenfassung abschließt."],
      ["mcq","Was unterscheidet eine gute Mediation (Zusammenfassung) von einer bloßen Liste von Schlüsselwörtern?",["Sie bewahrt die logischen Beziehungen (Ursache, Kontrast, Bedingung) zwischen den ursprünglichen Ideen.","Sie beseitigt jede logische Beziehung und lässt nur isolierte Begriffe übrig.","Sie muss immer länger sein als der Originaltext.","Sie darf keinerlei Schlussfolgerung enthalten."],0,"Mediation verlangt, Sinn und Verbindungen zu bewahren, nicht nur Vokabeln."],
      ["writing","Fasse in 60-80 Wörtern einen fiktiven Bericht zusammen, der zwei strategische Optionen bewertet, und nenne die Hauptempfehlung sowie eine Bedingung oder ein Risiko.",[],["zusammenfassend","der zentrale Punkt","es ist hervorzuheben"],"Priorisiere Entscheidung, Grund und eine relevante Bedingung oder Risiko.","Executive Summary für die Geschäftsleitung."]
    ]
  },
  {
    id:"de_c1_concession_refutation", level:"C1", title:"Fortgeschrittene Konzession und Widerlegung", emoji:"⚔️", xp:92,
    description:"Erkenne Gegenargumente rhetorisch an, bevor du sie präzise widerlegst.",
    study:{
      vocab:[
        ["zwar... aber","admittedly... but"],
        ["keineswegs","by no means"],
        ["das schließt nicht aus, dass","that doesn't rule out that"],
        ["letztlich","ultimately"]
      ],
      grammar:[
        ["Fortgeschrittene Konzession und Widerlegung","Diese Strukturen erkennen ein Gegenargument rhetorisch an, bevor sie es präzise widerlegen oder differenzieren.","Zwar senkt der Plan die Kosten, aber das schließt nicht aus, dass er erhebliche Risiken birgt."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz widerlegt ein Argument mit größerer rhetorischer Präzision?",["Die Maßnahme ist keineswegs eine Lösung des Problems, sondern könnte es langfristig verschärfen.","Die Maßnahme ist einfach schlecht.","Das bringt offensichtlich nichts.","Jeder weiß, dass das schlecht ist."],0,"'Keineswegs' leitet eine differenzierte, argumentierte Widerlegung ein, keine bloße Verneinung."],
      ["fill","Ergänze: \"Das Projekt erzielte Gewinne; ___ deckte es nicht die Anfangskosten.\"",["das schließt jedoch nicht aus, dass es","angesichts der Tatsache, dass","weshalb","insofern als"],0,"'Das schließt jedoch nicht aus, dass' leitet eine Konzession gefolgt von einer Differenzierung ein."],
      ["mcq","Welche rhetorische Funktion erfüllt 'zwar... aber'?",["Es erkennt einen gültigen Punkt an, bevor es einen ebenso soliden Einwand einführt.","Es verneint den ersten Punkt vollständig.","Es drückt völligen Zweifel an beiden Punkten aus.","Es ist eine rein informelle Formel."],0,"Es ist eine typische Konzessions-Widerlegungs-Struktur im gehobenen argumentativen Register."],
      ["writing","Schreib einen Absatz von 80-100 Wörtern, der differenziert eine Position zu einem kontroversen Thema widerlegt (z. B. die Automatisierung von Arbeitsplätzen), und benutze mindestens zwei Konzessions-Widerlegungs-Strukturen.",[],["zwar... aber","keineswegs","letztlich"],"Erkenne zuerst den Gegenpunkt an und differenziere oder widerlege ihn dann präzise.","Meinungsartikel für eine Fachzeitschrift."]
    ]
  },
  {
    id:"de_c2_style_implication", level:"C2", title:"Stil, Implikation und Nuance", emoji:"🔎", xp:92,
    description:"Interpretiere Subtext und formuliere komplexe Ideen mit emphatischer Inversion und Litotes um.",
    study:{
      vocab:[
        ["keinesfalls","by no means","Emphatische Verneinung, die die Verb-Subjekt-Stellung umkehrt."],
        ["hinter etwas zurückbleiben","to fall short of"],
        ["eine stillschweigende Annahme","a tacit assumption"],
        ["eine Aussage relativieren","to qualify a claim"]
      ],
      grammar:[
        ["Inversion nach emphatischer Verneinung","Steht eine emphatische Verneinung ('keinesfalls', 'unter keinen Umständen', 'auf keinen Fall') am Satzanfang, folgt im gehobenen Stil die Inversion von Verb und Subjekt.","Keinesfalls sollten diese Ergebnisse als endgültig betrachtet werden."],
        ["Litotes: durch doppelte Verneinung bestätigen","Das Gegenteil einer Idee zu verneinen ist ein gehobenes Mittel, um sie vorsichtig und nuanciert zu bestätigen.","Der Vorschlag ist nicht ohne Risiko, auch wenn seine Vorteile offensichtlich sind."]
      ]
    },
    ex:[
      ["mcq","Welche Umformulierung bewahrt den Sinn von „Die Daten sind hinweisend, nicht schlüssig“ am besten?",["Die Daten deuten in eine Richtung, reichen aber nicht für eine endgültige Schlussfolgerung.","Die Daten beweisen die Schlussfolgerung zweifelsfrei.","Es liegen überhaupt keine Daten vor.","Die Schlussfolgerung ist hinweisend, aber die Daten sind endgültig."],0,"Bewahrt den Unterschied zwischen Hinweis und schlüssigem Beweis."],
      ["fill","Vervollständige die Inversion: „Keinesfalls ___ diese Ergebnisse als endgültig betrachtet werden.“",["sollten","sollte","würden","werden"],0,"Das Verb stimmt mit dem Plural-Subjekt 'diese Ergebnisse' überein: sollten betrachtet werden."],
      ["mcq","Welche Funktion hat die Litotes in „Der Vorschlag ist nicht ohne Risiko“?",["Sie bestätigt nuanciert, dass der Vorschlag tatsächlich ein Risiko birgt.","Sie verneint vollständig, dass ein Risiko besteht.","Sie behauptet, der Vorschlag sei völlig sicher.","Sie fügt keine zusätzliche Bedeutung hinzu."],0,"'Nicht ohne' verneint das Gegenteil, um etwas vorsichtig zu bestätigen."],
      ["translate","Übersetze: „By no means should this decision be treated as final.“",["Keinesfalls sollte diese Entscheidung als endgültig betrachtet werden.","Diese Entscheidung ist keinesfalls endgültig behandelt.","Sollte keinesfalls diese Entscheidung als endgültig gelten.","Diese Entscheidung keinesfalls endgültig sollte betrachtet werden."],0,"„Keinesfalls“ + Inversion ist die gehobene Entsprechung von „by no means“."],
      ["writing","Schreibe 60-80 Wörter über eine umstrittene Unternehmensentscheidung: Verwende mindestens eine emphatische Inversion ('keinesfalls'/'unter keinen Umständen') und eine Litotes.",[],["keinesfalls","nicht ohne","unter keinen Umständen"],"Das C2-Niveau verbindet argumentative Präzision mit rhetorischen Mitteln der Nuancierung.","Meinungskolumne für eine Fachzeitschrift."]
    ]
  },
  {
    id:"de_c2_rhetoric_tone", level:"C2", title:"Rhetorik, Ton und stilistische Wirkung", emoji:"🎭", xp:94,
    description:"Wähle rhetorische Mittel und passe den Ton an Publikum, Zweck und gewünschte Wirkung an.",
    study:{
      vocab:[
        ["ein Gleichgewicht finden","to strike a balance"],
        ["eine rhetorische Frage","a rhetorical question"],
        ["hervorrufen","to evoke"],
        ["Verantwortung angemessen übernehmen","to acknowledge responsibility proportionately"]
      ],
      grammar:[
        ["Stilistische Wirkung und Wortwahl","Die Wahl einer Struktur oder eines Wortes kann Nähe, Distanz, Dringlichkeit oder Ironie erzeugen, ohne den wörtlichen Inhalt zu verändern.","Das ist nicht ganz unbegründet, auch wenn es sicherlich verbessert werden könnte."],
        ["Umformulierung für ein formelles öffentliches Register","Eine öffentliche Mitteilung erkennt die Auswirkung an, übernimmt angemessen Verantwortung und schlägt eine überprüfbare Maßnahme vor, ohne übermäßige Kälte oder Dramatisierung.","Wir bedauern die entstandenen Unannehmlichkeiten und ergreifen bereits Maßnahmen, damit sich das nicht wiederholt."]
      ]
    },
    ex:[
      ["mcq","Welche Wirkung erzeugt der Satz „das ist nicht ganz unbegründet“ meist?",["Eine vorsichtige, bewusst abgeschwächte Zustimmung.","Eine begeisterte, vorbehaltlose Zustimmung.","Eine völlige Ablehnung der Idee.","Eine technische Anweisung ohne Bewertung."],0,"Die doppelte Abschwächung erzeugt eine zurückhaltende Bewertung, typisch für den gehobenen Stil."],
      ["mcq","Welche Version passt am besten zu einer formellen öffentlichen Entschuldigung?",["Wir bedauern die entstandenen Unannehmlichkeiten und ergreifen sofort Maßnahmen, damit sich das nicht wiederholt.","Na ja, das war peinlich, wird schon wieder.","Das war überhaupt nicht unsere Schuld.","Jeder macht Fehler, das muss man nicht weiter kommentieren."],0,"Das formelle Register erkennt die Auswirkung an, übernimmt Verantwortung und schlägt eine konkrete Maßnahme vor."],
      ["fill","Vervollständige: „Die Rede versucht, ein Gefühl gemeinsamer Verantwortung ___.“",["hervorzurufen","herbeizurufen","hervorzubringen","zurückzurufen"],0,"'Hervorrufen' bedeutet, ein Gefühl oder eine Vorstellung beim Zuhörer zu wecken."],
      ["mcq","Was ist der Hauptzweck einer rhetorischen Frage in einer überzeugenden Rede?",["Das Publikum einzubeziehen und eine Antwort nahezulegen, ohne sie ausdrücklich zu formulieren.","Eine Information zu erfragen, die der Redner tatsächlich nicht kennt.","Das Publikum absichtlich zu verwirren.","Unauffällig das Thema zu wechseln."],0,"Die rhetorische Frage lenkt den Zuhörer zu einer Schlussfolgerung, ohne sie direkt auszusprechen."],
      ["writing","Formuliere diese schroffe interne Nachricht in eine öffentliche Mitteilung von 50-70 Wörtern um: „Das Team hat versagt, das muss sofort repariert werden.“ Erkenne das Problem an, dramatisiere es nicht und schlage eine überprüfbare Maßnahme vor.",[],["wir bedauern","Maßnahmen","damit sich das nicht wiederholt"],"Bewerte Verhältnismäßigkeit und Ton: weder übermäßige Kälte noch unnötige Dramatisierung.","Mitteilung: Ein digitaler Dienst war zwei Stunden lang ausgefallen."]
    ]
  },
  {
    id:"de_c2_critical_reading", level:"C2", title:"Kritisches Lesen und Implikaturen", emoji:"🧩", xp:96,
    description:"Interpretiere Präsuppositionen, wertende Sprache und implizite Schlussfolgerungen in Meinungstexten.",
    study:{
      vocab:[
        ["andeuten","to imply"],
        ["ein Vorbehalt","a caveat"],
        ["wertende Sprache","loaded language"],
        ["eine Schlussfolgerung ziehen","to draw an inference"]
      ],
      grammar:[
        ["Präsupposition","Ein Satz kann eine Idee als bereits akzeptiert darstellen, ohne sie ausdrücklich zu belegen.","Sogar die verbliebenen Kritiker akzeptierten den überarbeiteten Plan."]
      ]
    },
    ex:[
      ["mcq","Was setzt der Satz „Sogar die verbliebenen Kritiker akzeptierten den überarbeiteten Plan“ voraus?",["Dass es Kritiker gab und einige sich schon vorher überzeugen ließen.","Dass niemand den Plan jemals kritisiert hat.","Dass der Plan vollständig abgelehnt wurde.","Dass es keinen überarbeiteten Plan gibt."],0,"'Sogar' und 'verbliebenen' präsentieren Information als bereits geteilt und lenken die Schlussfolgerung."],
      ["mcq","Was ist eine angemessene kritische Lesart von „eine mutige Lösung für ein veraltetes System“?",["Das Adjektiv 'veraltet' bewertet das System und stimmt den Leser positiv für die Lösung.","Der Satz ist völlig neutral und enthält keine Wertung.","Die Lösung hat sich bereits als wirksam erwiesen.","Er enthält keinerlei implizite Bewertung."],0,"'Veraltet' ist wertende Sprache, kein objektiv nachgewiesener Fakt."],
      ["fill","Vervollständige: „Der Artikel enthält einen wichtigen ___: Die Ergebnisse wurden nicht reproduziert.“",["Vorbehalt","Gedanken","Folge","Vergleich"],0,"Ein 'Vorbehalt' schränkt die Reichweite einer Aussage ein."],
      ["mcq","Beim Satz „Es ist Zeit, der öffentlichen Politik wieder gesunden Menschenverstand zu geben“ – was impliziert 'wieder geben'?",["Es deutet an, dass gesunder Menschenverstand vorher existierte und verloren ging, ohne dies zu belegen.","Es behauptet mit Daten, dass der aktuellen Politik der Menschenverstand fehlt.","Es ist eine neutrale Beschreibung ohne jede Wertung.","Es schlägt eine konkrete, überprüfbare Politik vor."],0,"'Wieder geben' setzt einen früheren Verlust voraus – eine gängige rhetorische Strategie ohne Beleg."],
      ["speaking","Analysiere in 50-70 Wörtern einen überzeugenden Satz deiner Wahl: identifiziere eine Präsupposition, ein wertendes Wort und eine angemessene Schlussfolgerung.",[],["setzt voraus","Sprache","Schlussfolgerung"],"Es reicht nicht, zuzustimmen oder abzulehnen: erkläre, wie die Sprache die Interpretation lenkt.","Beispielsatz: „Es ist Zeit, dieser veralteten Praxis ein Ende zu setzen.“"]
    ]
  },
  {
    id:"de_a1_dates_time", level:"A1", title:"Daten, Wochentage und Monate", emoji:"📅", xp:35,
    description:"Lerne die Wochentage, die Monate und wie man auf Deutsch über Daten spricht.",
    study: {
      vocab: [
        ["Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"],
        ["Januar, Februar, März... Dezember", "January, February, March... December"],
        ["Welcher Tag ist heute?", "What day is it today?"],
        ["Heute ist der 5. Mai.", "Today is May 5th.", "Auf Deutsch: \"der\" + Ordnungszahl + Monat."],
        ["Wann hast du Geburtstag?", "When is your birthday?"]
      ],
      grammar: [
        ["Präposition \"am\" mit Wochentagen", "Mit Wochentagen und Daten benutzt man \"am\".", "Am Montag habe ich einen Termin. Ich gehe am Montag ins Fitnessstudio."]
      ]
    },
    ex:[
      ["mcq","Wie sagt man \"Wednesday\" auf Deutsch?",["Mittwoch","Dienstag","Donnerstag","Freitag"],0,"\"Mittwoch\" ist der dritte Tag der Woche auf Deutsch."],
      ["mcq","Wie fragt man richtig, welcher Tag heute ist?",["Welcher Tag ist heute?","Wie spät ist heute?","Wie alt bist du heute?","Wo wohnst du heute?"],0,"\"Welcher Tag ist heute?\" fragt nach dem Wochentag oder Datum."],
      ["fill","Ergänze: \"Mein Geburtstag ist ___ 10. März.\"",["am","im","um","an"],0,"Mit einem genauen Datum benutzt man \"am\": \"am 10. März\"."],
      ["translate","Übersetze: \"Today is Monday.\"",["Heute ist Montag.","Heute ist Dienstag.","Gestern war Montag.","Heute ist ein Montag."],0,"\"Today is Monday\" = \"Heute ist Montag\", ohne Artikel vor dem Wochentag."],
      ["arrange","Bringe in die richtige Reihenfolge: [gehe / Montag / ich / Fitnessstudio / am / ins]",["Ich gehe am Montag ins Fitnessstudio","Am Montag gehe ich ins Fitnessstudio","Ins Fitnessstudio gehe ich am Montag","Ich am Montag gehe ins Fitnessstudio"],0,"Subjekt + Verb + Zeitangabe + Ort: \"Ich gehe am Montag ins Fitnessstudio.\" oder \"Am Montag gehe ich ins Fitnessstudio.\" (beide korrekt, hier wählen wir Variante mit Subjekt zuerst)."],
      ["writing","Schreibe 3 Sätze (20-30 Wörter) auf Deutsch über deine Woche: welcher Tag heute ist, wann dein Geburtstag ist, und was du an einem bestimmten Tag machst.",[],["heute","Geburtstag","am"],"Verwende mindestens einen Wochentag und einen Monat. Achte auf die Präposition \"am\"."]
    ]
  },
  {
    id:"de_a2_directions_transport", level:"A2", title:"In der Stadt: Wegbeschreibung und Verkehrsmittel", emoji:"🧭", xp:42,
    description:"Frage nach dem Weg, gib Wegbeschreibungen und sprich über Verkehrsmittel auf Deutsch.",
    study: {
      vocab: [
        ["Wie komme ich zu...?", "How do I get to...?"],
        ["Gehen Sie geradeaus / Biegen Sie links / rechts ab", "Go straight ahead / Turn left / right"],
        ["die Bushaltestelle, der Bahnhof", "the bus stop, the train station"],
        ["Es ist zwei Straßen von hier entfernt.", "It's two blocks from here."],
        ["Wie lange dauert es, dorthin zu kommen?", "How long does it take to get there?"]
      ],
      grammar: [
        ["Der Imperativ für Wegbeschreibungen", "Für Anweisungen benutzt man den Imperativ (Sie/du).", "Gehen Sie geradeaus und biegen Sie an der Ampel rechts ab."]
      ]
    },
    ex:[
      ["mcq","Du möchtest zum Museum. Was fragst du?",["Wie komme ich zum Museum?","Wie spät ist das Museum?","Wem gehört das Museum?","Wie viel kostet der Bus?"],0,"\"Wie komme ich zu...?\" ist die Standardfrage, um nach dem Weg zu fragen."],
      ["mcq","Jemand sagt dir: \"Gehen Sie geradeaus und biegen Sie am Platz links ab.\" Was machst du zuerst?",["Geradeaus gehen.","Rechts abbiegen.","Den Bus nehmen.","Noch einmal fragen."],0,"\"Gehen Sie geradeaus\" ist die erste Anweisung; das Abbiegen kommt danach."],
      ["fill","Ergänze: \"Der Bahnhof ___ zwei Straßen von hier entfernt.\"",["ist","sind","hat","macht"],0,"\"Ist\" stimmt mit dem Singular \"der Bahnhof\" überein: \"Der Bahnhof ist zwei Straßen von hier entfernt.\""],
      ["translate","Übersetze: \"Turn right at the traffic light.\"",["Biegen Sie an der Ampel rechts ab.","Biegen Sie am Platz links ab.","Gehen Sie an der Ampel geradeaus.","Halten Sie an der Ampel."],0,"\"Turn right\" = \"rechts abbiegen\"; \"at the traffic light\" = \"an der Ampel\"."],
      ["arrange","Bringe in die richtige Reihenfolge: [Bus / nehmen / Haltestelle / den / an / der / Sie]",["Nehmen Sie den Bus an der Haltestelle","Der Bus nehmen Sie an der Haltestelle","An der Haltestelle nehmen Sie den Bus","Nehmen an der Haltestelle Sie den Bus"],0,"Verb + Objekt + Ortsangabe: \"Nehmen Sie den Bus an der Haltestelle.\""],
      ["speaking","Erkläre auf Deutsch in 40-60 Wörtern, wie man von deinem Zuhause zu einem nahegelegenen Ort kommt. Benutze mindestens zwei Anweisungen und ein Verkehrsmittel.",[],["biegen","geradeaus","Minuten"],"Ordne die Erklärung: zuerst, dann, schließlich."]
    ]
  },
  {
    id:"de_b1_job_interview", level:"B1", title:"Arbeit: Vorstellungsgespräche und Berufsalltag", emoji:"💼", xp:60,
    description:"Sprich über deine Berufserfahrung und beantworte Fragen im Vorstellungsgespräch auf Deutsch.",
    study: {
      vocab: [
        ["Was machen Sie beruflich?", "What do you do for a living?"],
        ["ich habe Erfahrung in...", "I have experience in..."],
        ["meine Stärken / Schwächen", "my strengths / weaknesses"],
        ["im Team arbeiten, Fristen einhalten", "to work as a team, to meet deadlines"],
        ["ein Vollzeit- / Teilzeitvertrag", "a full-time / part-time contract"]
      ],
      grammar: [
        ["Perfekt für Erfahrung", "Man benutzt das Perfekt, um über berufliche Erfahrung zu sprechen, ohne den genauen Zeitpunkt zu nennen.", "Ich habe drei Jahre im Kundenservice gearbeitet."],
        ["Konnektoren zum Strukturieren einer Antwort", "\"Einerseits... andererseits\" hilft, Vor- und Nachteile zu ordnen.", "Einerseits mag ich Teamarbeit, andererseits schätze ich etwas Autonomie."]
      ]
    },
    ex:[
      ["mcq","Im Vorstellungsgespräch wirst du gefragt: \"Was machen Sie beruflich?\". Was ist eine passende Antwort?",["Ich arbeite als Grafikdesigner in einer Agentur.","Ja, danke, sehr gut.","Ich bin fünfundzwanzig Jahre alt.","Ich wohne in der Innenstadt."],0,"\"Was machen Sie beruflich?\" fragt nach deinem Beruf."],
      ["mcq","Welche Antwort beschreibt eine Stärke am professionellsten?",["Ich bin gut darin, Projekte zu organisieren und Fristen einzuhalten.","Ich bin zweifellos der Beste von allen.","Ich habe keine Schwächen.","Ich arbeite, wann ich Lust habe."],0,"Eine gute Antwort ist konkret und überprüfbar, ohne zu übertreiben."],
      ["fill","Ergänze: \"Ich ___ zwei Jahre im Verkauf gearbeitet.\"",["habe","bin","ist","sind"],0,"\"Ich habe gearbeitet\" (Perfekt) beschreibt relevante Berufserfahrung."],
      ["translate","Übersetze: \"I have experience working in a team.\"",["Ich habe Erfahrung in der Teamarbeit.","Ich habe Erfahrung Team arbeiten.","Team ich habe Erfahrung Arbeit.","Ich habe Erfahrung arbeiten Team ist."],0,"\"I have experience working in a team\" = \"Ich habe Erfahrung in der Teamarbeit.\""],
      ["arrange","Bringe in die richtige Reihenfolge: [arbeite / gern / im / ich / Team]",["Ich arbeite gern im Team","Gern arbeite ich im Team","Im Team arbeite ich gern","Arbeite ich gern im Team"],0,"Subjekt + Verb + \"gern\" + Ort: \"Ich arbeite gern im Team.\""],
      ["writing","Schreibe auf Deutsch eine Antwort von 45-65 Wörtern auf die Frage \"Warum möchten Sie diese Stelle?\". Erwähne deine Erfahrung, eine Stärke und deine Motivation.",[],["Erfahrung","weil","ich möchte"],"Struktur: relevante Erfahrung + Stärke + konkrete Motivation.","Vorstellungsgespräch für eine Stelle im Kundenservice."]
    ]
  },
  {
    id:"de_b2_media_literacy", level:"B2", title:"Medien: Nachrichten analysieren", emoji:"📰", xp:78,
    description:"Unterscheide Fakten von Meinungen und bewerte die Glaubwürdigkeit einer Nachricht auf Deutsch.",
    study: {
      vocab: [
        ["eine zuverlässige / unzuverlässige Quelle", "a reliable / unreliable source"],
        ["laut Quellen, die dem Fall nahestehen", "according to sources close to the case"],
        ["eine reißerische Schlagzeile", "a sensationalist headline"],
        ["Informationen gegenprüfen", "to cross-check information"],
        ["eine überprüfte Tatsache, eine Meinung", "a verified fact, an opinion"]
      ],
      grammar: [
        ["Zuschreibungsverben", "\"Laut\", \"behauptet, dass\", \"weist darauf hin, dass\" zeigen, woher eine Aussage stammt und wie sicher sie ist.", "Laut dem Bericht stiegen die Verkäufe um 10 %."],
        ["Fakt und Meinung unterscheiden", "Ein Fakt lässt sich überprüfen; eine Meinung drückt ein Werturteil aus.", "Der Artikel behauptet (Meinung), die Maßnahme werde 'zweifellos' scheitern, obwohl die Daten (Fakt) noch vorläufig sind."]
      ]
    },
    ex:[
      ["mcq","Welcher dieser Sätze ist eine überprüfbare Tatsache, keine Meinung?",["Der Bericht zeigt, dass die Arbeitslosigkeit in diesem Quartal um 2 % gesunken ist.","Diese Politik ist eindeutig eine Katastrophe.","Jeder weiß, dass diese Maßnahme nicht funktionieren wird.","Es ist offensichtlich, dass die Regierung falsch liegt."],0,"Eine überprüfbare Tatsache zitiert eine Quelle und konkrete Daten, ohne Werturteil."],
      ["mcq","Schlagzeile: „Totales Chaos! Stadt am Rande des Zusammenbruchs nach neuer Regel.“ Was legt der Stil der Schlagzeile nahe?",["Sie zielt auf emotionale Wirkung statt präzise Information ab.","Es ist eine neutrale, objektive Zusammenfassung der Fakten.","Sie zitiert eine überprüfbare offizielle Quelle.","Sie enthält kein Werturteil."],0,"Die übertriebene Sprache (\"totales Chaos\", \"am Rande des Zusammenbruchs\") ist typisch für Sensationsjournalismus."],
      ["fill","Ergänze: \"___ Quellen, die dem Projekt nahestehen, wird die Einführung um einen Monat verzögert.\"",["Laut","Obwohl","Weil","Jedoch"],0,"\"Laut\" führt die Quelle einer Information ein und zeigt, dass sie nicht vom Medium selbst bestätigt wurde."],
      ["translate","Übersetze: \"It is important to cross-check information before sharing it.\"",["Es ist wichtig, Informationen gegenzuprüfen, bevor man sie teilt.","Es ist wichtig, Informationen zu teilen, bevor man sie prüft.","Es ist wichtig Information teilen wichtig.","Gegenprüfen ist Informationen wichtig teilen davor."],0,"\"Cross-check information\" = \"Informationen gegenprüfen\"; \"before sharing it\" = \"bevor man sie teilt\"."],
      ["mcq","Ein Artikel sagt: „Experten warnen, dass die Zahl überschätzt sein könnte.“ Welchen Grad an Sicherheit vermittelt das?",["Eine begründete Möglichkeit, keine absolute Gewissheit.","Eine vollständige, bestätigte Gewissheit.","Eine persönliche Meinung des Journalisten ohne jede Quelle.","Eine bereits mit endgültigen Daten bewiesene Tatsache."],0,"\"Könnte sein\" zeigt Wahrscheinlichkeit an, keine kategorische Behauptung."],
      ["writing","Schreibe auf Deutsch eine Analyse von 55-75 Wörtern über eine Nachricht (real oder erfunden): identifiziere eine überprüfbare Tatsache, eine Meinung und bewerte, wie glaubwürdig dir die Quelle erscheint.",[],["laut","Tatsache","Meinung"],"Trenne klar, was ein zitiertes Datum ist und was eine Wertung des Autors."]
    ]
  },
  {
    id:"de_c1_figurative_language", level:"C1", title:"Bildliche Sprache und Redewendungen", emoji:"🗯️", xp:88,
    description:"Interpretiere gängige Redewendungen und Metaphern im Deutschen.",
    study: {
      vocab: [
        ["ein Vermögen kosten", "to cost an arm and a leg"],
        ["zwischen Baum und Borke stecken", "to be between a rock and a hard place"],
        ["jemanden auf den Arm nehmen", "to pull someone's leg"],
        ["kein Blatt vor den Mund nehmen", "to not mince words"],
        ["sich am Riemen reißen", "to get one's act together"]
      ],
      grammar: [
        ["Redewendungen im Kontext interpretieren", "Die Bedeutung einer Redewendung ist fast nie wörtlich; man muss sie aus dem Kontext erschließen.", "\"Diese Reise hat ein Vermögen gekostet\" spricht nicht von echtem Vermögen, sondern von sehr hohen Kosten."]
      ]
    },
    ex:[
      ["mcq","\"Dieses Auto hat ein Vermögen gekostet.\" Was bedeutet der Ausdruck?",["Es war sehr teuer.","Es war sehr billig.","Das Auto wurde beschädigt.","Es hatte einen Unfall."],0,"\"Ein Vermögen kosten\" bedeutet, dass etwas sehr teuer war."],
      ["mcq","Jemand sagt: \"Ich stecke bei dieser Entscheidung zwischen Baum und Borke.\" Was drückt das aus?",["Die Person steht vor zwei schwierigen Optionen ohne bequemen Ausweg.","Die Person fühlt sich völlig ruhig bei ihrer Entscheidung.","Die Person hat keine Optionen zu bedenken.","Die Person hat die Entscheidung bereits ohne Zweifel getroffen."],0,"Der Ausdruck beschreibt eine Situation ohne eindeutig gute Option."],
      ["fill","Ergänze: \"Hör auf, mich auf den ___ zu nehmen, ich weiß, dass es nicht wahr ist.\"",["Arm","Fuß","Kopf","Rücken"],0,"\"Jemanden auf den Arm nehmen\" bedeutet, jemanden auf harmlose Weise zu necken oder zu täuschen."],
      ["translate","Übersetze natürlich (nicht wörtlich): \"She doesn't mince her words.\"",["Sie nimmt kein Blatt vor den Mund.","Sie hat kein Blatt vor dem Mund.","Ihr Mund hat kein Blatt.","Sie niemals Blatt Mund nehmen."],0,"\"To not mince words\" entspricht \"kein Blatt vor den Mund nehmen\" im Deutschen."],
      ["mcq","In welchem Kontext passt \"sich am Riemen reißen\" am besten?",["Jemanden ermutigen, sich zusammenzureißen und fokussierter zu handeln.","Erklären, wie man ein elektronisches Gerät auflädt.","Das Wetter einer Stadt beschreiben.","Sich formell entschuldigen."],0,"\"Sich am Riemen reißen\" ist ein umgangssprachlicher Ausdruck, um jemanden zur Disziplin zu ermutigen."],
      ["speaking","Wähle eine Redewendung aus dieser Lektion und erkläre in 45-65 Wörtern, in welcher Situation du sie benutzen würdest, und was sie wörtlich gegenüber ihrer wirklichen Bedeutung heißt.",[],["bedeutet","Situation","wörtlich"],"Unterscheide klar zwischen der wörtlichen Bedeutung (manchmal absurd) und der tatsächlichen idiomatischen Bedeutung."]
    ]
  },
  {
    id:"de_c2_irony_humor", level:"C2", title:"Ironie, Humor und bewusste Mehrdeutigkeit", emoji:"😏", xp:94,
    description:"Erkenne Ironie, Sarkasmus und beabsichtigte Mehrdeutigkeit im fortgeschrittenen Deutsch.",
    study: {
      vocab: [
        ["Na, so ein Glück!", "Just my luck! (ironisch)"],
        ["in bester Absicht (ironisch)", "with the best of intentions (ironic)"],
        ["ein Doppelsinn", "a double meaning"],
        ["etwas mit spöttischem Unterton sagen", "to say something with a sarcastic tone"],
        ["etwas bewusst untertreiben", "to understate something"]
      ],
      grammar: [
        ["Marker der Ironie", "Ironie zeigt sich meist durch Kontext, Betonung oder einen klaren Gegensatz zwischen Gesagtem und Realität, nicht durch explizite Worte.", "\"Wie pünktlich du bist!\" zu jemandem gesagt, der eine Stunde zu spät kommt, ist wegen des Kontrasts ironisch."],
        ["Bewusste Mehrdeutigkeit", "Manchmal wählt man absichtlich eine mehrdeutige Formulierung, um sich nicht ganz festzulegen.", "\"Man könnte sagen, das Projekt hatte... interessante Ergebnisse.\""]
      ]
    },
    ex:[
      ["mcq","Jemand kommt eine Stunde zu spät, und eine andere Person sagt: \"Wie pünktlich du bist!\". Was wird wirklich ausgedrückt?",["Das Gegenteil dessen, was gesagt wird: die Person war sehr spät.","Ein aufrichtiges Kompliment zur Pünktlichkeit.","Eine Frage nach der Uhrzeit.","Eine Entschuldigung für die eigene Verspätung."],0,"Der Kontrast zwischen dem Gesagten und der offensichtlichen Realität ist das typische Merkmal von Ironie."],
      ["mcq","\"In bester Absicht sagte er das Treffen ab, ohne jemanden zu informieren.\" Welche Nuance bringt \"in bester Absicht\" hier?",["Einen ironischen Ton: er zeigt, dass die Handlung nicht wirklich durchdacht war.","Ein aufrichtiges Lob für die Person.","Eine wörtliche, neutrale Erklärung des Ereignisses.","Eine formelle Entschuldigung des Erzählers."],0,"Der Kontrast zwischen der Aussage und der Handlung (absagen ohne zu informieren) erzeugt einen ironischen Effekt."],
      ["fill","\"Man könnte sagen, das Projekt hatte... ___ Ergebnisse.\" (bewusste Mehrdeutigkeit, ohne sich festzulegen)",["interessante","exzellente","katastrophale","perfekte"],0,"\"Interessante\" ist bewusst mehrdeutig: es bestätigt oder verneint den Erfolg des Projekts nicht."],
      ["translate","Übersetze mit derselben ironischen Nuance: \"Genial, otro lunes.\" (mit Verdruss gesagt)",["Toll, schon wieder Montag.","Montag ist ein toller Tag.","Was für eine Freude, es ist Freitag.","Ich hasse Montage total."],0,"Der ironische Ton bleibt erhalten mit \"Toll\", gefolgt von etwas objektiv wenig Aufregendem."],
      ["mcq","Welche Funktion hat die Untertreibung in „Das Erdbeben verursachte... einige kleinere Schäden“, wenn es in Wirklichkeit verheerend war?",["Sie mildert bewusst den Ernst, um einen ironischen oder kritischen Effekt zu erzeugen.","Sie beschreibt die Situation völlig wörtlich und präzise.","Sie übertreibt das Ausmaß des Ereignisses.","Sie schließt jede ironische Interpretation aus."],0,"Die Untertreibung kontrastiert das reale Ausmaß mit einer minimierten Beschreibung und erzeugt so Ironie."],
      ["writing","Schreibe auf Deutsch einen kurzen Kommentar (50-70 Wörter) mit feiner Ironie über eine lästige Alltagssituation (Stau, lange Warteschlange usw.), ohne Beleidigungen oder explizite Sprache.",[],["so ein glück","toll","natürlich"],"Die Ironie sollte durch den Kontrast zwischen positivem Ton und negativer Situation erkennbar sein, nicht durch direkte Aussage."]
    ]
  },
  {
    id:"de_a1_house_rooms", level:"A1", title:"Das Haus: Zimmer und Möbel", emoji:"🏠", xp:35,
    description:"Lerne den Wortschatz für Zimmer, Möbel und Gegenstände in einem Haus auf Deutsch.",
    study: {
      vocab: [
        ["die Küche, das Badezimmer, das Schlafzimmer, das Wohnzimmer", "the kitchen, the bathroom, the bedroom, the living room"],
        ["das Bett, der Tisch, der Stuhl, das Sofa", "the bed, the table, the chair, the sofa"],
        ["Wo ist die Küche?", "Where is the kitchen?"],
        ["Das Bett ist im Schlafzimmer.", "The bed is in the bedroom."],
        ["auf, unter, neben", "on top of, under, next to"]
      ],
      grammar: [
        ["\"Es gibt\" für Gegenstände in einem Raum", "\"Es gibt\" + Akkusativ beschreibt, was sich in einem Raum befindet.", "Es gibt einen Tisch in der Küche. Es gibt zwei Stühle daneben."]
      ]
    },
    ex:[
      ["mcq","Wo schläfst du normalerweise?",["Im Schlafzimmer.","In der Küche.","Im Badezimmer.","Im Wohnzimmer."],0,"\"Das Schlafzimmer\" ist der Raum, in dem man schläft."],
      ["mcq","Wie fragt man richtig, wo sich etwas befindet?",["Wo ist die Küche?","Was ist die Küche?","Wann ist die Küche?","Wer ist die Küche?"],0,"\"Wo ist...?\" fragt nach dem Ort von etwas."],
      ["fill","Ergänze: \"Das Sofa ist ___ dem Fenster.\"",["neben","auf","unter","hinter"],0,"\"Neben\" zeigt an, dass zwei Dinge nebeneinander sind."],
      ["translate","Übersetze: \"The bed is in the bedroom.\"",["Das Bett ist im Schlafzimmer.","Das Bett ist in der Küche.","Der Stuhl ist im Schlafzimmer.","Das Bett ist das Schlafzimmer."],0,"\"The bed is in the bedroom\" = \"Das Bett ist im Schlafzimmer.\""],
      ["arrange","Bringe in die richtige Reihenfolge: [Küche / einen / gibt / es / Tisch / der / in]",["Es gibt einen Tisch in der Küche","In der Küche gibt es einen Tisch","Einen Tisch es gibt in der Küche","Es einen Tisch gibt in der Küche"],0,"\"Es gibt\" + Objekt + \"in\" + Ort: \"Es gibt einen Tisch in der Küche.\""],
      ["writing","Beschreibe auf Deutsch in 20-30 Wörtern deine Wohnung oder dein Haus: welche Zimmer es gibt und welche Möbel in einem davon stehen.",[],["Schlafzimmer","es gibt"],"Erwähne mindestens zwei Zimmer und zwei Möbelstücke."]
    ]
  },
  {
    id:"de_a2_health_pharmacy", level:"A2", title:"Gesundheit: Symptome und die Apotheke", emoji:"💊", xp:44,
    description:"Beschreibe häufige Symptome und bitte auf Deutsch in der Apotheke oder beim Arzt um Hilfe.",
    study: {
      vocab: [
        ["Mein Kopf / Bauch / Hals tut weh.", "My head / stomach / throat hurts."],
        ["Ich habe Fieber, Husten, Übelkeit.", "I have a fever, a cough, nausea."],
        ["Haben Sie etwas gegen Kopfschmerzen?", "Do you have something for a headache?"],
        ["Nehmen Sie alle acht Stunden eine Tablette.", "Take one pill every eight hours."],
        ["einen Arzttermin vereinbaren", "to make a doctor's appointment"]
      ],
      grammar: [
        ["\"Weh tun\" für Schmerzen", "\"[Körperteil] tut/tun mir weh\" ist die natürliche Form, um Schmerzen auszudrücken.", "Mein Kopf tut mir weh. / Meine Füße tun mir weh."]
      ]
    },
    ex:[
      ["mcq","Du hast Kopfschmerzen. Was sagst du?",["Mein Kopf tut mir weh.","Ich mag meinen Kopf.","Ich habe meinen Kopf.","Ich bin mein Kopf."],0,"\"Mein Kopf tut mir weh\" beschreibt das Symptom mit \"weh tun\"."],
      ["mcq","In der Apotheke: Wie fragst du nach einem Medikament?",["Haben Sie etwas gegen Kopfschmerzen?","Wo sind die Kopfschmerzen?","Wann sind die Kopfschmerzen?","Warum haben Sie Kopfschmerzen?"],0,"\"Haben Sie etwas gegen...?\" ist die natürliche Art, ein Medikament zu erfragen."],
      ["fill","Ergänze: \"Meine Füße ___ nach dem Laufen weh.\"",["tun","tut","tue","tuen"],0,"\"Füße\" ist Plural, deshalb \"tun\": \"Meine Füße tun weh.\""],
      ["translate","Übersetze: \"I have a fever and a cough.\"",["Ich habe Fieber und Husten.","Ich bin Fieber und Husten.","Ich mag Fieber und Husten.","Mein Fieber und Husten tut weh."],0,"\"I have a fever and a cough\" = \"Ich habe Fieber und Husten\", mit dem Verb \"haben\"."],
      ["arrange","Bringe in die richtige Reihenfolge: [acht / Stunden / Tablette / eine / nehmen / Sie / alle]",["Nehmen Sie alle acht Stunden eine Tablette","Alle acht Stunden nehmen Sie eine Tablette","Eine Tablette nehmen Sie alle acht Stunden","Nehmen Sie eine Tablette alle acht Stunden"],0,"Imperativ + Häufigkeit + Objekt: \"Nehmen Sie alle acht Stunden eine Tablette.\""],
      ["speaking","Beschreibe auf Deutsch in 40-60 Wörtern, wann du dich einmal krank gefühlt hast: welche Symptome du hattest und was du getan hast.",[],["tat weh","hatte","ging"],"Benutze mindestens zwei Symptome und eine Handlung, die du unternommen hast, um dich besser zu fühlen."]
    ]
  },
  {
    id:"de_b1_tech_social_media", level:"B1", title:"Technologie und soziale Medien", emoji:"📱", xp:58,
    description:"Sprich über die Nutzung von Technologie und sozialen Medien, ihre Vorteile und Risiken, auf Deutsch.",
    study: {
      vocab: [
        ["posten, teilen, kommentieren", "to post, to share, to comment"],
        ["online sein / sich abmelden", "to be online / to log off"],
        ["die Privatsphäre, persönliche Daten", "privacy, personal data"],
        ["vom Handy abhängig sein", "to be dependent on your phone"],
        ["mit jemandem in Kontakt bleiben", "to keep in touch with"]
      ],
      grammar: [
        ["Vor- und Nachteile vergleichen", "\"Einerseits... andererseits\" und \"während\" helfen, zwei Ideen zu vergleichen.", "Einerseits helfen soziale Medien, in Kontakt zu bleiben; andererseits können sie viel Zeit kosten."]
      ]
    },
    ex:[
      ["mcq","Was ist ein echter Vorteil sozialer Medien?",["Sie helfen, mit weit entfernten Freunden in Kontakt zu bleiben.","Sie sagen immer die ganze Wahrheit über alles.","Sie beeinträchtigen nie die Privatsphäre.","Sie brauchen keine Internetverbindung."],0,"Mit weit entfernten Personen in Kontakt zu bleiben ist ein konkreter, überprüfbarer Vorteil."],
      ["mcq","Welcher Satz drückt Sorge um die Privatsphäre aus?",["Mich beunruhigt, wie sie meine persönlichen Daten nutzen.","Ich liebe es, alles ohne nachzudenken zu teilen.","Ich benutze nie das Internet.","Ich poste alle fünf Minuten Fotos."],0,"Die Sorge um persönliche Daten ist ein zentrales Thema der digitalen Privatsphäre."],
      ["fill","Ergänze: \"___ ist es toll, online zu sein, andererseits muss ich mich manchmal abmelden.\"",["Einerseits","Innerhalb","Davon","Daran"],0,"\"Einerseits... andererseits\" ist die Struktur, um zwei Ideen zu vergleichen."],
      ["translate","Übersetze: \"Ich versuche, nicht zu sehr von meinem Handy abhängig zu sein.\"",["I try not to depend on my phone too much.","I try not depend too much my phone.","Not I try to depend on my phone.","Depend on my phone I try not too much."],0,"\"Abhängig sein von\" = \"to depend on\": \"I try not to depend on my phone too much.\""],
      ["arrange","Bringe in die richtige Reihenfolge: [hilft / Kontakt / mir / es / im / zu / bleiben / mit Freunden]",["Es hilft mir im Kontakt mit Freunden zu bleiben","Hilft es mir im Kontakt mit Freunden zu bleiben","Im Kontakt hilft es mir mit Freunden zu bleiben","Es mir hilft im Kontakt mit Freunden zu bleiben"],0,"\"Es hilft mir\" + zu-Infinitiv: \"Es hilft mir, im Kontakt mit Freunden zu bleiben.\""],
      ["writing","Schreibe auf Deutsch 45-65 Wörter über deine Beziehung zu sozialen Medien: ein Vorteil, ein Risiko und was du tust, um beides auszugleichen.",[],["einerseits","andererseits","Privatsphäre"],"Struktur: Vorteil + Risiko + eine konkrete Handlung, um beides auszugleichen."]
    ]
  },
  {
    id:"de_b2_ethical_dilemmas", level:"B2", title:"Ethische Dilemmata: dafür und dagegen argumentieren", emoji:"⚖️", xp:80,
    description:"Präsentiere und wäge Argumente zu ethischen Alltagsdilemmata auf Deutsch ab.",
    study: {
      vocab: [
        ["dafür / dagegen", "in favor of / against"],
        ["aus ethischer Sicht", "from an ethical point of view"],
        ["das Gemeinwohl, das individuelle Interesse", "the common good, individual interest"],
        ["eine Entscheidung rechtfertigen", "to justify a decision"],
        ["es gibt keine eindeutige Antwort", "there is no single answer"]
      ],
      grammar: [
        ["Ein ausgewogenes Argument strukturieren", "Zuerst ein Argument präsentieren, dann das gegenteilige, und mit einer differenzierten Position abschließen, vermeidet Voreingenommenheit.", "Manche argumentieren, dass..., während andere behaupten, dass... Meiner Meinung nach haben beide Positionen etwas für sich."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz präsentiert ein Argument ausgewogen?",["Manche argumentieren, dass..., während andere behaupten, dass...","Jeder weiß, dass ich recht habe.","Es ist offensichtlich, dass die andere Position falsch ist.","Es gibt überhaupt kein Gegenargument."],0,"Beide Seiten vor der eigenen Meinung darzustellen ist typisch für ein ausgewogenes Argument auf B2-Niveau."],
      ["mcq","Ein typisches ethisches Dilemma ist „das Gemeinwohl gegenüber dem individuellen Interesse“. Was bedeutet das?",["Ein Konflikt zwischen dem, was allen nützt, und dem, was einer einzelnen Person nützt.","Eine Entscheidung, die niemanden betrifft.","Ein Thema ohne jede soziale Bedeutung.","Eine rein wirtschaftliche Wahl ohne jede Ethik."],0,"Das Dilemma entsteht, wenn das Beste für die Gemeinschaft nicht mit dem Besten für eine Einzelperson übereinstimmt."],
      ["fill","Ergänze: \"___ ethischer Sicht ist die Entscheidung diskutabel.\"",["Aus","Für","Durch","Mit"],0,"\"Aus ethischer Sicht\" ist der Standardausdruck, um eine Perspektive einzuführen."],
      ["translate","Übersetze: \"There is no single answer to this dilemma.\"",["Es gibt keine eindeutige Antwort auf dieses Dilemma.","Es gibt keine eindeutige Antwort dieses Dilemma.","Dieses Dilemma es gibt keine eindeutige Antwort.","Eine eindeutige Antwort gibt es nicht für dieses Dilemma."],0,"\"There is no single answer\" = \"Es gibt keine eindeutige Antwort.\""],
      ["mcq","Welcher dieser Sätze rechtfertigt eine Entscheidung auf begründete, nicht emotionale Weise?",["Man entschied sich so, weil die Vorteile die langfristigen Risiken überwogen.","Man entschied sich einfach so, Punkt.","Man entschied sich so, weil alle es wollten, ohne nachzudenken.","Man entschied sich so, weil man es schon immer so gemacht hat."],0,"Eine begründete Rechtfertigung vergleicht explizit Nutzen und Risiken."],
      ["writing","Wähle ein alltägliches ethisches Dilemma (zum Beispiel eine Notlüge) und schreibe auf Deutsch 55-75 Wörter mit einem Argument dafür, einem dagegen und deiner differenzierten Schlussfolgerung.",[],["dafür","dagegen","jedoch"],"Struktur: Argument dafür + Argument dagegen + differenzierte, nicht absolute Schlussfolgerung."]
    ]
  },
  {
    id:"de_c1_academic_citing", level:"C1", title:"Akademischer Diskurs: zitieren und paraphrasieren", emoji:"🎓", xp:90,
    description:"Lerne, Quellen zu zitieren, Ideen zu paraphrasieren und Plagiate in einem akademischen Register zu vermeiden.",
    study: {
      vocab: [
        ["laut (Autor, Jahr)", "according to (author, year)"],
        ["wie der Autor betont/argumentiert", "as the author points out/argues"],
        ["eine Idee paraphrasieren", "to paraphrase an idea"],
        ["wörtlich zitieren", "to quote directly"],
        ["das Plagiat, zuverlässige Quellen", "plagiarism, reliable sources"]
      ],
      grammar: [
        ["Verben zur Einführung fremder Zitate", "\"Argumentiert, dass\", \"behauptet, dass\", \"weist darauf hin, dass\" variieren die Nuance: nicht alle implizieren denselben Grad an Sicherheit.", "Der Autor argumentiert, die Politik sei ein Fehler gewesen; andere Forscher weisen jedoch auf wichtige Nuancen hin."],
        ["Paraphrasieren ohne die Struktur zu kopieren", "Paraphrasieren bedeutet, sowohl die Wörter als auch die Reihenfolge der Ideen zu ändern, nicht nur einzelne Synonyme.", "Original: 'Die Studie zeigt, dass Sport Stress reduziert.' Paraphrase: 'Laut der Forschung hilft körperliche Aktivität, das Stressniveau zu senken.'"]
      ]
    },
    ex:[
      ["mcq","Welche dieser Optionen ist eine korrekte Paraphrase, keine getarnte Kopie?",["Laut der Forschung hilft körperliche Aktivität, das Stressniveau zu senken.","Die Studie zeigt, dass Sport den Stress vollständig reduziert.","Die Studie zeigt tatsächlich, dass Sport den Stress reduziert.","Zeigt die Studie, dass reduziert Stress den Sport."],0,"Eine gute Paraphrase ändert Struktur und Wortschatz, nicht nur ein oder zwei Wörter."],
      ["mcq","Welches Verb vermittelt die größte kritische Distanz zum zitierten Autor?",["Der Autor deutet an, dass...","Der Autor beweist kategorisch, dass...","Der Autor zeigt zweifelsfrei, dass...","Der Autor bestätigt endgültig, dass..."],0,"\"Deutet an\" zeigt eine vorsichtigere Aussage, typisch für eine rigorose kritische Analyse."],
      ["fill","Ergänze: \"___ der Bericht betont, hatte die Maßnahme eine begrenzte Wirkung.\"",["Wie","Weil","Obwohl","Jedoch"],0,"\"Wie der Bericht betont\" führt eine einer Quelle zugeschriebene Idee flüssig ein."],
      ["translate","Übersetze: \"Laut dem Autor sind die Ergebnisse wenig aussagekräftig.\"",["According to the author, the results are inconclusive.","According to the author, the results are conclusive.","The author according results inconclusive is.","The results according to the author are conclusive not."],0,"\"Laut dem Autor\" = \"According to the author\"; \"wenig aussagekräftig\" = \"inconclusive\"."],
      ["mcq","Welche dieser Praktiken stellt ein akademisches Plagiat dar?",["Einen wörtlichen Satz ohne Anführungszeichen oder Quellenangabe kopieren.","Wörtlich mit Anführungszeichen und Quellenangabe zitieren.","Eine Idee paraphrasieren und die Originalquelle nennen.","Einen Artikel zusammenfassen und die Herkunft nennen."],0,"Etwas ohne Anführungszeichen oder Quellenangabe zu kopieren, selbst nur einen Satz, gilt als Plagiat."],
      ["writing","Schreibe auf Deutsch einen akademischen Absatz von 55-75 Wörtern, der diese Idee paraphrasiert (ohne zu kopieren): 'Der Internetzugang hat die Art, wie Menschen sich informieren, tiefgreifend verändert.' Zitiere die Quelle als (Autor, 2023).",[],["laut","argumentiert","(Autor, 2023)"],"Kopiere nicht den Originalsatz: ändere Struktur und Wortschatz, während du die Idee bewahrst."]
    ]
  },
  {
    id:"de_c2_logical_fallacies", level:"C2", title:"Logische Fehlschlüsse und Überzeugungskraft", emoji:"🧠", xp:96,
    description:"Erkenne logische Fehlschlüsse und Überzeugungsstrategien in anspruchsvollen Argumenten auf Deutsch.",
    study: {
      vocab: [
        ["der persönliche Angriff (ad hominem)", "ad hominem attack"],
        ["die falsche Dichotomie", "false dichotomy"],
        ["die abschüssige Bahn (Dammbruchargument)", "slippery slope"],
        ["von einem einzelnen Fall aus verallgemeinern", "to generalize from a single case"],
        ["an die Emotion statt an Fakten appellieren", "to appeal to emotion instead of facts"]
      ],
      grammar: [
        ["Fehlschlüsse im Diskurs erkennen", "Ein Fehlschluss wirkt wie ein gültiges Argument, aber seine logische Struktur ist fehlerhaft, auch wenn er überzeugend klingt.", "\"Wenn wir das erlauben, wird bald alles außer Kontrolle geraten\" ist ein Dammbruchargument: es nimmt eine Kette von Konsequenzen ohne Beweise an."]
      ]
    },
    ex:[
      ["mcq","\"Du solltest sein wirtschaftliches Argument nicht anhören — außerdem ist er ein unangenehmer Mensch.\" Welcher Fehlschluss ist das?",["Ad-hominem-Angriff: er diskreditiert die Person, nicht das Argument.","Falsche Dichotomie: reduziert die Optionen auf nur zwei.","Dammbruchargument: sagt eine Kette von Konsequenzen voraus.","Voreilige Verallgemeinerung von einem einzelnen Fall."],0,"Der Ad-hominem-Angriff greift den Urheber des Arguments an, statt das Argument selbst zu widerlegen."],
      ["mcq","\"Entweder du unterstützt dieses Gesetz genau so, wie es ist, oder dir ist niemandes Sicherheit wichtig.\" Welcher Fehlschluss ist das?",["Falsche Dichotomie: sie präsentiert nur zwei Optionen, obwohl mehr Nuancen möglich sind.","Ein persönlicher Angriff gegen den Zuhörer.","Ein Appell an die Emotion ohne jedes logische Argument.","Eine Verallgemeinerung auf Basis eines einzelnen isolierten Falls."],0,"Die falsche Dichotomie verbirgt gültige Zwischenoptionen und präsentiert nur zwei Extreme."],
      ["fill","\"Wenn wir diese Ausnahme zulassen, wird bald das ganze System zusammenbrechen.\" Dieser Satz ist ein Beispiel für ___.",["ein Dammbruchargument","einen Ad-hominem-Angriff","eine falsche Dichotomie","einen Autoritätsappell"],0,"Das Dammbruchargument nimmt ohne ausreichenden Beweis eine unvermeidliche Kette negativer Konsequenzen an."],
      ["translate","Übersetze mit technischer Präzision: \"This is a classic false dichotomy.\"",["Das ist eine klassische falsche Dichotomie.","Das ist eine falsche klassische Dichotomie ist.","Klassisch ist diese falsche Dichotomie.","Diese falsche ist klassische Dichotomie."],0,"\"False dichotomy\" wird technisch als \"falsche Dichotomie\" übersetzt."],
      ["mcq","Eine Werbung zeigt Bilder weinender Kinder, um ein Wohltätigkeitsprodukt zu verkaufen, ohne konkrete Daten über dessen Wirkung zu geben. Welche Strategie nutzt sie hauptsächlich?",["Einen Appell an die Emotion statt an überprüfbare Fakten.","Ein rigoroses logisches Argument auf Datenbasis.","Eine präzise statistische Verallgemeinerung.","Ein Zitat aus einer zuverlässigen akademischen Quelle."],0,"Emotionale Bilder ohne konkrete Daten zu nutzen bedeutet, an die Emotion statt an die Beweise zu appellieren."],
      ["writing","Identifiziere und erkläre auf Deutsch in 55-75 Wörtern einen logischen Fehlschluss, den du kürzlich in einer Debatte, Werbung oder Diskussion gehört hast (real oder erfunden). Benenne den Fehlschluss und erkläre, warum das Argument trotz seiner Überzeugungskraft irreführend ist.",[],["Fehlschluss","weil","obwohl es scheint"],"Benenne explizit die Art des Fehlschlusses (Ad hominem, falsche Dichotomie, Dammbruchargument usw.) und begründe deine Einordnung."]
    ]
  },
  {
    id:"de_a1_emotions_feelings", level:"A1", title:"Gefühle: wie du dich fühlst", emoji:"😊", xp:35,
    description:"Lerne, grundlegende Emotionen und Gefühle auf Deutsch auszudrücken.",
    study: {
      vocab: [
        ["glücklich, traurig, müde, wütend sein", "to be happy, sad, tired, angry"],
        ["Wie fühlst du dich?", "How do you feel?"],
        ["Ich bin ein bisschen nervös.", "I'm a bit nervous."],
        ["Angst haben, müde sein, Hunger haben", "to be afraid, to be sleepy, to be hungry"],
        ["Warum bist du traurig?", "Why are you sad?"]
      ],
      grammar: [
        ["\"Sein\" mit Emotionen", "Emotionen werden mit \"sein\" + Adjektiv ausgedrückt.", "Ich bin heute glücklich. / Sie ist nach der Arbeit müde."]
      ]
    },
    ex:[
      ["mcq","Wie fragst du jemanden, wie er sich fühlt?",["Wie fühlst du dich?","Wie heißt du?","Wo wohnst du?","Wie alt bist du?"],0,"\"Wie fühlst du dich?\" fragt nach dem emotionalen Zustand von jemandem."],
      ["mcq","Du hast viel Arbeit und wenig Erholung. Wie fühlst du dich?",["Ich bin müde.","Ich bin glücklich.","Ich habe Hunger.","Mir ist kalt."],0,"Viel Arbeit und wenig Erholung führen typischerweise dazu, sich \"müde\" zu fühlen."],
      ["fill","Ergänze: \"Ich ___ ein bisschen nervös vor der Prüfung.\"",["bin","bist","habe","mache"],0,"Emotionen werden mit \"sein\" ausgedrückt: \"Ich bin ein bisschen nervös.\""],
      ["translate","Übersetze: \"Why are you sad?\"",["Warum bist du traurig?","Warum bist du trauriges?","Warum du bist traurig?","Warum hast du traurig?"],0,"\"Why are you sad?\" = \"Warum bist du traurig?\", mit \"sein\" für einen emotionalen Zustand."],
      ["arrange","Bringe in die richtige Reihenfolge: [Arbeit / müde / nach / ich / bin / der]",["Ich bin müde nach der Arbeit","Nach der Arbeit bin ich müde","Müde bin ich nach der Arbeit","Ich bin nach der Arbeit müde"],0,"Subjekt + \"bin\" + Adjektiv + Zeitangabe, oder Zeitangabe zuerst: \"Nach der Arbeit bin ich müde.\""],
      ["writing","Schreibe auf Deutsch 20-30 Wörter darüber, wie du dich heute fühlst und warum. Benutze mindestens zwei verschiedene Emotionen.",[],["ich bin","weil","ich fühle mich"],"Nenne einen konkreten Grund für jede beschriebene Emotion."]
    ]
  },
  {
    id:"de_a2_hobbies_weekend", level:"A2", title:"Freizeit: Hobbys und Wochenendpläne", emoji:"🎨", xp:44,
    description:"Sprich über deine Hobbys und deine Pläne für das Wochenende auf Deutsch.",
    study: {
      vocab: [
        ["Was machst du gern in deiner Freizeit?", "What do you like to do in your free time?"],
        ["malen, ein Instrument spielen, wandern", "to paint, to play an instrument, to go hiking"],
        ["Was hast du für das Wochenende geplant?", "What plans do you have for the weekend?"],
        ["ich werde... / ich habe vor zu...", "I'm going to + infinitive"],
        ["sich mit Freunden treffen", "to meet up with friends"]
      ],
      grammar: [
        ["Präsens mit Zeitangabe für Pläne", "Im Deutschen wird oft das Präsens mit einer Zeitangabe benutzt, um nahe Zukunftspläne auszudrücken.", "Am Samstag treffe ich mich mit Freunden."]
      ]
    },
    ex:[
      ["mcq","Wie fragst du nach den Hobbys von jemandem?",["Was machst du gern in deiner Freizeit?","Wie spät ist es?","Wo arbeitest du?","Wie viele Geschwister hast du?"],0,"\"Was machst du gern in deiner Freizeit?\" fragt konkret nach Hobbys."],
      ["mcq","Welcher Satz beschreibt einen nahen Zukunftsplan?",["Am Samstag treffe ich mich mit Freunden.","Am Samstag habe ich mich mit Freunden getroffen.","Am Samstag treffe ich mich immer mit Freunden.","Am Samstag traf ich mich mit Freunden."],0,"Präsens + Zeitangabe (\"am Samstag\") drückt einen konkreten, nahen Zukunftsplan aus."],
      ["fill","Ergänze: \"Dieses Wochenende ___ ich wandern.\"",["gehe","bin","habe","mache"],0,"Präsens für Pläne: \"Dieses Wochenende gehe ich wandern.\""],
      ["translate","Übersetze: \"What plans do you have for the weekend?\"",["Was hast du für das Wochenende geplant?","Was hast du für das Wochenende sein?","Was du für das Wochenende geplant hast?","Für das Wochenende was hast du geplant sein?"],0,"\"What plans do you have for the weekend?\" = \"Was hast du für das Wochenende geplant?\""],
      ["arrange","Bringe in die richtige Reihenfolge: [Instrument / spiele / gern / ich / ein]",["Ich spiele gern ein Instrument","Gern spiele ich ein Instrument","Ein Instrument spiele ich gern","Ich gern spiele ein Instrument"],0,"Subjekt + Verb + \"gern\" + Objekt: \"Ich spiele gern ein Instrument.\""],
      ["speaking","Erkläre auf Deutsch, in 40-60 Wörtern, deine liebsten Hobbys und deine Pläne für das nächste Wochenende.",[],["ich mag","ich werde","treffen"],"Erwähne mindestens zwei Hobbys und einen konkreten Plan."]
    ]
  },
  {
    id:"de_b1_environment_sustainability", level:"B1", title:"Umwelt: nachhaltige Gewohnheiten", emoji:"🌱", xp:60,
    description:"Sprich über Umweltschutz und nachhaltige Gewohnheiten auf Deutsch.",
    study: {
      vocab: [
        ["recyceln, wiederverwenden, den Konsum reduzieren", "to recycle, to reuse, to reduce consumption"],
        ["der Klimawandel, der CO2-Fußabdruck", "climate change, carbon footprint"],
        ["Einwegprodukte", "single-use products"],
        ["Energie / Wasser sparen", "to save energy / water"],
        ["Maßnahmen ergreifen, um den Planeten zu schützen", "to take steps to protect the planet"]
      ],
      grammar: [
        ["Futur I für Konsequenzen", "Futur I mit \"werden\" beschreibt wahrscheinliche Folgen aktueller Handlungen.", "Wenn wir den Plastikverbrauch nicht reduzieren, wird die Verschmutzung zunehmen."]
      ]
    },
    ex:[
      ["mcq","Welche dieser Handlungen hilft, den CO2-Fußabdruck zu reduzieren?",["Öffentliche Verkehrsmittel statt Auto nutzen.","Mehr Einwegprodukte kaufen.","Das Licht den ganzen Tag anlassen.","Das Auto für sehr kurze Strecken benutzen."],0,"Öffentliche Verkehrsmittel reduzieren die individuellen CO2-Emissionen."],
      ["mcq","Welcher Satz beschreibt korrekt eine wahrscheinliche Zukunftsfolge?",["Wenn wir den Plastikverbrauch nicht reduzieren, wird die Verschmutzung zunehmen.","Wenn wir den Plastikverbrauch nicht reduzieren, nahm die Verschmutzung zu.","Wenn wir den Plastikverbrauch nicht reduzieren, nimmt die Verschmutzung gestern zu.","Wenn wir den Plastikverbrauch nicht reduzieren, Verschmutzung zunehmen."],0,"Futur I (\"wird zunehmen\") drückt eine wahrscheinliche Konsequenz einer aktuellen Bedingung aus."],
      ["fill","Ergänze: \"Es ist wichtig, Wasser zu ___, besonders im Sommer.\"",["sparen","ausgeben","wegwerfen","kaufen"],0,"\"Wasser sparen\" ist der korrekte Ausdruck, um den Verbrauch zu reduzieren."],
      ["translate","Übersetze: \"We should reduce the use of single-use products.\"",["Wir sollten den Gebrauch von Einwegprodukten reduzieren.","Wir sollten den Gebrauch Einwegprodukte reduzieren.","Reduzieren wir sollten Einwegprodukte den Gebrauch.","Wir sollten Einwegprodukte den Gebrauch reduzieren."],0,"\"Single-use products\" = \"Einwegprodukte\"; \"we should reduce\" = \"wir sollten reduzieren\"."],
      ["arrange","Bringe in die richtige Reihenfolge: [wichtig / recyceln / ist / Glas / zu / es]",["Es ist wichtig, Glas zu recyceln","Glas ist es wichtig zu recyceln","Wichtig ist es, Glas zu recyceln","Es ist zu recyceln wichtig Glas"],0,"\"Es ist wichtig, ... zu\" + Objekt + Infinitiv: \"Es ist wichtig, Glas zu recyceln.\""],
      ["writing","Schreibe auf Deutsch 45-65 Wörter über drei nachhaltige Gewohnheiten, die du praktizierst oder gerne beginnen würdest, und warum sie wichtig sind.",[],["recyceln","sparen","CO2-Fußabdruck"],"Nenne mindestens drei konkrete Gewohnheiten und je einen Grund dafür."]
    ]
  },
  {
    id:"de_b2_ai_future_work", level:"B2", title:"Künstliche Intelligenz und die Zukunft der Arbeit", emoji:"🤖", xp:80,
    description:"Diskutiere die Auswirkungen künstlicher Intelligenz auf die Arbeit mit differenzierten Argumenten auf Deutsch.",
    study: {
      vocab: [
        ["repetitive Aufgaben automatisieren", "to automate repetitive tasks"],
        ["Arbeitsplätze ersetzen", "to replace jobs"],
        ["sich an neue Werkzeuge anpassen", "to adapt to new tools"],
        ["neue Arbeitsmöglichkeiten schaffen", "to generate new job opportunities"],
        ["es kommt darauf an, wie es umgesetzt wird", "it depends on how it's implemented"]
      ],
      grammar: [
        ["Futur II für Spekulation", "\"Wird ... haben\" spekuliert darüber, was bis zu einem bestimmten Zeitpunkt wahrscheinlich geschehen sein wird.", "Bis 2030 wird KI viele Branchen verändert haben."]
      ]
    },
    ex:[
      ["mcq","Welcher Satz präsentiert eine differenzierte Position zu KI und Beschäftigung?",["Es kommt darauf an, wie sie umgesetzt wird: sie kann Aufgaben automatisieren, aber auch neue Arbeitsplätze schaffen.","KI wird alle Arbeitsplätze zerstören, ohne Ausnahme.","KI beeinflusst die Beschäftigung überhaupt nicht.","Es gibt keinen Zweifel an der Zukunft der Arbeit."],0,"Eine differenzierte Position erkennt beide möglichen Effekte an, ohne Absolutheiten."],
      ["mcq","Was bedeutet \"repetitive Aufgaben automatisieren\"?",["Eine Maschine Aufgaben erledigen lassen, die früher manuell und wiederholt von einer Person erledigt wurden.","Mehr Leute für repetitive Aufgaben einstellen.","Alle Aufgaben eines Unternehmens vollständig eliminieren.","Das Gehalt derer erhöhen, die repetitive Aufgaben erledigen."],0,"Automatisieren bedeutet, dass ein System die Aufgabe anstelle einer Person übernimmt."],
      ["fill","Ergänze: \"Bis 2030 ___ künstliche Intelligenz viele Branchen verändert haben.\"",["wird","hatte","hat","würde"],0,"Futur II (\"wird ... verändert haben\") spekuliert über etwas, das bis zu einem zukünftigen Zeitpunkt wahrscheinlich geschehen sein wird."],
      ["translate","Übersetze: \"Algunos empleos se automatizarán, pero también se crearán otros nuevos.\"",["Some jobs will be automated, but new ones will also be created.","Some jobs will automate, but new ones will also create.","Jobs some will be automated, but new ones will create.","Some jobs will be automated, but also new ones created."],0,"Beide Sätze verwenden \"will\": \"will be automated\" und \"will be created\"."],
      ["mcq","Welche dieser Aussagen zeigt kritisches Denken, keine unbegründete Meinung?",["Die Auswirkung von KI auf die Beschäftigung wird von der Branche und dem Umgang mit dem Wandel abhängen.","KI ist immer gut für alle, ohne Ausnahme.","KI ist immer schlecht für alle, ohne Ausnahme.","Es lohnt sich nicht, über die Zukunft der Arbeit nachzudenken."],0,"Zu erkennen, dass die Auswirkung von konkreten Faktoren (Branche, Umgang) abhängt, ist kritisches und differenziertes Denken."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter darüber, wie künstliche Intelligenz deiner Meinung nach dein Arbeits- oder Studienfeld in den nächsten Jahren verändern wird. Nenne einen positiven und einen besorgniserregenden Aspekt.",[],["automatisieren","hängt ab von","jedoch"],"Vermeide Absolutheiten: erkenne sowohl konkrete Vorteile als auch Risiken an."]
    ]
  },
  {
    id:"de_c1_advertising_persuasion", level:"C1", title:"Werbesprache: Überzeugung und Konnotation", emoji:"📢", xp:88,
    description:"Analysiere, wie Werbesprache Konnotation und Überzeugungstechniken auf Deutsch nutzt.",
    study: {
      vocab: [
        ["eine positive / negative Konnotation", "a positive / negative connotation"],
        ["an das Zugehörigkeitsgefühl appellieren", "to appeal to the desire to belong"],
        ["ein eingängiger Slogan", "a catchy slogan"],
        ["ein Gefühl der Dringlichkeit erzeugen", "to create a sense of urgency"],
        ["die Zielgruppe", "the target audience"]
      ],
      grammar: [
        ["Konnotation versus Denotation", "Die Denotation ist die wörtliche Bedeutung eines Wortes; die Konnotation ist die damit verbundene emotionale oder kulturelle Aufladung.", "\"Haus\" (Denotation: Gebäude) versus \"Zuhause\" (Konnotation: Wärme, Zugehörigkeit)."]
      ]
    },
    ex:[
      ["mcq","Eine Werbung benutzt das Wort \"Zuhause\" statt \"Haus\". Was erreicht sie damit?",["Sie fügt eine emotionale Konnotation von Wärme und Zugehörigkeit hinzu.","Sie ändert die wörtliche Bedeutung vollständig.","Sie eliminiert jede emotionale Interpretation.","Sie hat keinerlei Wirkung auf die Botschaft."],0,"\"Zuhause\" hat emotionale Konnotationen, die \"Haus\" nicht in gleicher Weise vermittelt."],
      ["mcq","„Nur noch 3 Stück auf Lager, jetzt kaufen!“ Welche Überzeugungstechnik nutzt dieser Satz?",["Ein Gefühl der Dringlichkeit erzeugen, um eine schnelle Entscheidung zu fördern.","Ausschließlich an objektive technische Daten appellieren.","Einen neutralen Vergleich mit anderen Produkten anbieten.","Das Produkt ohne jeden Druck beschreiben."],0,"Begrenzte Stückzahl und Dringlichkeit zu erwähnen drängt zu einer schnellen Entscheidung."],
      ["fill","Ergänze: \"Diese Werbung richtet sich an eine sehr spezifische Ziel___: junge Berufstätige.\"",["gruppe","text","autor","leser"],0,"\"Zielgruppe\" ist der Standardausdruck für die Adressaten einer Botschaft."],
      ["translate","Übersetze: \"The slogan appeals to the desire to belong.\"",["Der Slogan appelliert an das Zugehörigkeitsgefühl.","Der Slogan appelliert das Zugehörigkeitsgefühl.","Das Zugehörigkeitsgefühl appelliert an den Slogan.","Der Slogan appellieren an das Zugehörigkeitsgefühl."],0,"\"Appeals to\" = \"appelliert an\"; \"the desire to belong\" = \"das Zugehörigkeitsgefühl\"."],
      ["mcq","Welches dieser Wörter hat eine positivere Konnotation als sein neutraleres Synonym?",["\"Exklusiv\" versus \"begrenzt\".","\"Produkt\" versus \"Artikel\".","\"Kaufen\" versus \"erwerben\".","\"Werbung\" versus \"Anzeige\"."],0,"\"Exklusiv\" fügt eine Konnotation von Prestige und Distinktion hinzu, die \"begrenzt\" nicht in gleicher Weise vermittelt."],
      ["writing","Wähle eine reale oder erfundene Werbung und schreibe auf Deutsch 55-75 Wörter über: welche Konnotationen sie nutzt, an welche Zielgruppe sie sich richtet und welche Überzeugungstechnik sie einsetzt.",[],["Konnotation","Zielgruppe","Dringlichkeit"],"Identifiziere mindestens ein Wort mit spezifischer Konnotation und eine konkrete Überzeugungstechnik."]
    ]
  },
  {
    id:"de_c2_political_discourse", level:"C2", title:"Politischer Diskurs: strategische Mehrdeutigkeit und Euphemismus", emoji:"🎙️", xp:96,
    description:"Analysiere strategische Mehrdeutigkeit und Euphemismus im anspruchsvollen politischen Diskurs auf Deutsch.",
    study: {
      vocab: [
        ["ein Euphemismus", "a euphemism"],
        ["strategische Mehrdeutigkeit", "strategic ambiguity"],
        ["einer direkten Frage ausweichen", "to dodge a direct question"],
        ["eine Haushaltsanpassung (Euphemismus für Kürzung)", "a budget adjustment (euphemism for a cut)"],
        ["sich festlegen, ohne sich ganz festzulegen", "to commit without fully committing"]
      ],
      grammar: [
        ["Politischen Euphemismus erkennen", "Ein Euphemismus ersetzt einen direkten Ausdruck durch einen milderen, oft um eine unangenehme Realität abzumildern.", "\"Haushaltsanpassung\" klingt neutraler als \"Ausgabenkürzung\", obwohl es dasselbe beschreibt."],
        ["Strategische Mehrdeutigkeit", "Politiker wählen manchmal absichtlich vage Formulierungen, um sich nicht auf eine klare Position festzulegen.", "\"Wir prüfen alle Optionen\" sagt nicht, welche Option tatsächlich gewählt wird."]
      ]
    },
    ex:[
      ["mcq","Ein Politiker sagt \"Haushaltsanpassung\" statt \"Ausgabenkürzung\". Was erreicht er damit?",["Er mildert die negative Wirkung der Maßnahme durch einen Euphemismus.","Er ändert die Bedeutung der Maßnahme vollständig.","Er macht die Maßnahme transparenter und direkter.","Er beseitigt jede mögliche negative Interpretation."],0,"Der Euphemismus mildert die Wahrnehmung, ohne die Realität der Maßnahme zu ändern."],
      ["mcq","„Wir prüfen alle Optionen“, gesagt auf eine direkte Frage. Welche Funktion erfüllt dieser Satz?",["Er weicht einer klaren Festlegung durch strategische Mehrdeutigkeit aus.","Er gibt eine vollständig transparente und spezifische Antwort.","Er bestätigt genau, welche Entscheidung getroffen wird.","Er verneint jede mögliche Entscheidung kategorisch."],0,"Dieser Satz vermeidet eine konkrete Festlegung und hält scheinbar alle Optionen offen."],
      ["fill","Ergänze: \"Die Regierung kündigte eine Haushalts___ an, die in Wirklichkeit erhebliche Kürzungen bedeutete.\"",["anpassung","erhöhung","geschenk","preis"],0,"\"Haushaltsanpassung\" ist der typische Euphemismus für \"Kürzung\"."],
      ["translate","Übersetze mit Präzision: \"Politicians sometimes commit without fully committing.\"",["Politiker legen sich manchmal fest, ohne sich ganz festzulegen.","Politiker legen manchmal fest ohne ganz festlegen.","Manchmal Politiker sich ganz festlegen ohne festlegen.","Politiker legen sich manchmal ganz fest ohne festlegen."],0,"\"Commit without fully committing\" = \"sich festlegen, ohne sich ganz festzulegen\", was die beabsichtigte Mehrdeutigkeit einfängt."],
      ["mcq","Welcher dieser Sätze ist ein klares Beispiel für strategische Mehrdeutigkeit?",["Wir schließen derzeit keine Möglichkeit aus.","Das Budget wird dieses Jahr um genau 12 % gekürzt.","Das Gesetz tritt am 1. Januar ohne Ausnahmen in Kraft.","Ich werde nächste Woche von meinem Amt zurücktreten."],0,"\"Wir schließen keine Möglichkeit aus\" legt sich auf nichts Konkretes fest und lässt scheinbar alle Türen offen."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter über einen Euphemismus oder einen Fall strategischer Mehrdeutigkeit, den du in einer realen oder erfundenen politischen Rede beobachtet hast. Erkläre, welchen direkteren Ausdruck er vermeidet und warum.",[],["Euphemismus","anstatt","vermeidet Festlegung"],"Identifiziere den genauen Ausdruck, die direktere Bedeutung, die er ersetzt, und die beabsichtigte Wirkung auf das Publikum."]
    ]
  },
  {
    id:"de_a1_money_prices", level:"A1", title:"Ordnungszahlen, Geld und Preise", emoji:"💰", xp:36,
    description:"Lerne, auf Deutsch über Preise, Geld und Ordnungszahlen zu sprechen.",
    study: {
      vocab: [
        ["erste, zweite, dritte...", "first, second, third..."],
        ["Wie viel kostet das?", "How much does this cost?"],
        ["Das kostet zehn Euro.", "It costs ten euros."],
        ["billig, teuer", "cheap, expensive"],
        ["bar bezahlen / mit Karte bezahlen", "to pay in cash / by card"]
      ],
      grammar: [
        ["\"Kosten\" für Preise", "\"Kostet\" (Singular) und \"kosten\" (Plural) stimmen mit dem Gekauften überein.", "Das Buch kostet zehn Euro. Die Bücher kosten zwanzig Euro."]
      ]
    },
    ex:[
      ["mcq","Wie fragst du nach dem Preis von etwas?",["Wie viel kostet das?","Was ist das?","Wo ist das?","Wann ist das?"],0,"\"Wie viel kostet das?\" ist die Standardfrage, um nach einem Preis zu fragen."],
      ["mcq","Ein Produkt für 5 Euro ist günstiger als eines für 50 Euro. Welches Wort beschreibt das für 5 Euro?",["Billig.","Teuer.","Kostenlos.","Groß."],0,"\"Billig\" beschreibt etwas mit niedrigem Preis im Vergleich zu etwas anderem."],
      ["fill","Ergänze: \"Die Schuhe ___ vierzig Euro.\"",["kosten","kostet","ist","sind"],0,"\"Kosten\" stimmt im Plural mit \"die Schuhe\" überein."],
      ["translate","Übersetze: \"It costs ten euros.\"",["Das kostet zehn Euro.","Das kosten zehn Euro.","Es ist zehn Euro kostet.","Das hat zehn Euro."],0,"\"It costs ten euros\" (Singular) = \"Das kostet zehn Euro.\""],
      ["arrange","Bringe in die richtige Reihenfolge: [Karte / immer / ich / mit / zahle]",["Ich zahle immer mit Karte","Immer zahle ich mit Karte","Mit Karte zahle ich immer","Ich zahle mit Karte immer"],0,"Subjekt + Verb + Adverb + Ergänzung: \"Ich zahle immer mit Karte.\""],
      ["writing","Schreibe auf Deutsch 20-30 Wörter über deine Einkaufsgewohnheiten: was du normalerweise kaufst, ob du lieber bar oder mit Karte zahlst, und ob du günstige Dinge suchst.",[],["kostet","billig","zahle"],"Benutze mindestens eine Ordnungszahl oder einen konkreten Preis in deiner Antwort."]
    ]
  },
  {
    id:"de_a2_restaurant_ordering", level:"A2", title:"Im Restaurant: bestellen und bezahlen", emoji:"🍽️", xp:45,
    description:"Lerne, Essen zu bestellen, dem Kellner Fragen zu stellen und die Rechnung zu bezahlen.",
    study: {
      vocab: [
        ["Ich möchte gerne bestellen...", "I would like to order..."],
        ["Was empfehlen Sie?", "What do you recommend?"],
        ["Könnten wir die Rechnung bekommen, bitte?", "Could you bring me the bill, please?"],
        ["Ist das Trinkgeld inbegriffen?", "Is the tip included?"],
        ["Für mich das Tagesmenü.", "For me, the set menu."]
      ],
      grammar: [
        ["\"Möchte\" für höfliche Bestellungen", "\"Möchte\" ist höflicher als \"will\" beim Bestellen.", "Ich möchte gerne die Suppe und das Hähnchen bestellen, bitte."]
      ]
    },
    ex:[
      ["mcq","Was ist die höflichste Art, in einem Restaurant zu bestellen?",["Ich möchte gerne die Suppe bestellen, bitte.","Ich will die Suppe jetzt.","Geben Sie mir die Suppe.","Suppe, sofort."],0,"\"Ich möchte\" ist die höfliche und formelle Art, etwas zu bestellen."],
      ["mcq","Du bist fertig mit dem Essen und möchtest zahlen. Was sagst du?",["Könnten wir die Rechnung bekommen, bitte?","Könnten wir die Speisekarte bekommen, bitte?","Was empfehlen Sie?","Ist dieser Tisch frei?"],0,"\"Könnten wir die Rechnung bekommen, bitte?\" ist der Standardsatz, um zu bezahlen."],
      ["fill","Ergänze: \"Ich ___ gerne den Fisch mit Salat bestellen, bitte.\"",["möchte","will jetzt","gebe","habe"],0,"\"Ich möchte gerne bestellen\" ist die höfliche Standardform, um zu bestellen."],
      ["translate","Übersetze: \"Ist das Trinkgeld inbegriffen?\"",["Is the tip included?","Is the tip include?","The tip is included is?","Included is the tip in?"],0,"\"Ist das Trinkgeld inbegriffen?\" = \"Is the tip included?\""],
      ["arrange","Bringe in die richtige Reihenfolge: [empfehlen / Sie / was]",["Was empfehlen Sie","Sie was empfehlen","Empfehlen was Sie","Sie empfehlen was"],0,"Frage mit \"was\" am Anfang: \"Was empfehlen Sie?\""],
      ["speaking","Stelle auf Deutsch, in 40-60 Wörtern, ein kurzes Gespräch in einem Restaurant dar: bestelle ein Gericht, frage nach einer Empfehlung und bitte am Ende um die Rechnung.",[],["möchte","empfehlen","die Rechnung"],"Enthält alle drei Teile: Bestellung, Frage an den Kellner und Bitte um die Rechnung."]
    ]
  },
  {
    id:"de_b1_personal_finance", level:"B1", title:"Persönliche Finanzen: die Bank und das Budget", emoji:"🏦", xp:62,
    description:"Sprich über Bankkonten, Sparen und persönliches Budget auf Deutsch.",
    study: {
      vocab: [
        ["ein Bankkonto eröffnen", "to open a bank account"],
        ["ein monatliches Budget erstellen", "to make a monthly budget"],
        ["für ein Ziel sparen", "to save up for a goal"],
        ["feste Ausgaben und variable Ausgaben", "fixed expenses and variable expenses"],
        ["einen Kredit aufnehmen, in Raten zahlen", "to take out a loan, to pay in installments"]
      ],
      grammar: [
        ["\"Sollte\" für finanzielle Ratschläge", "\"Sollte\" + Infinitiv gibt einen Rat, ohne zu direkt zu klingen.", "Du solltest mindestens 10% deines Gehalts jeden Monat sparen."]
      ]
    },
    ex:[
      ["mcq","Welcher dieser Sätze gibt einen finanziellen Rat auf angemessene Weise?",["Du solltest jeden Monat ein bisschen sparen, auch wenn es wenig ist.","Spare sofort, es gibt keine andere Option.","Sparen bringt überhaupt nichts.","Du wirst nie etwas sparen können."],0,"\"Solltest\" + Infinitiv gibt einen Rat auf höfliche und vernünftige Weise."],
      ["mcq","Was ist der Unterschied zwischen festen und variablen Ausgaben?",["Feste wiederholen sich jeden Monat mit dem gleichen Betrag; variable ändern sich.","Feste ändern sich jeden Monat; variable sind immer gleich.","Es gibt keinen wirklichen Unterschied zwischen ihnen.","Variable gibt es nur bei Unternehmen, nicht bei Privatpersonen."],0,"Feste Ausgaben (zum Beispiel Miete) bleiben stabil; variable (Freizeit, Essen) ändern sich von Monat zu Monat."],
      ["fill","Ergänze: \"Ich werde diesen Monat ein neues Bankkonto ___.\"",["eröffnen","schließen","ausgeben","verlieren"],0,"\"Ein Bankkonto eröffnen\" ist die korrekte Kollokation, um ein neues Konto zu erstellen."],
      ["translate","Übersetze: \"You should make a monthly budget.\"",["Du solltest ein monatliches Budget erstellen.","Du solltest monatliches Budget ein erstellen.","Ein monatliches Budget du solltest erstellen.","Du solltest ein monatliches Budget erstellst."],0,"\"You should make a monthly budget\" = \"Du solltest ein monatliches Budget erstellen.\""],
      ["arrange","Bringe in die richtige Reihenfolge: [sparen / Ziel / für / ein / möchte / ich]",["Ich möchte für ein Ziel sparen","Für ein Ziel möchte ich sparen","Sparen möchte ich für ein Ziel","Ich möchte sparen für ein Ziel"],0,"Subjekt + \"möchte\" + Ergänzung + Infinitiv: \"Ich möchte für ein Ziel sparen.\" oder \"Für ein Ziel möchte ich sparen.\""],
      ["writing","Schreibe auf Deutsch 45-65 Wörter über deine Beziehung zu Geld: wie du dein Budget organisierst, ob du für etwas Konkretes sparst und eine finanzielle Gewohnheit, die du gerne verbessern würdest.",[],["Budget","sparen","Ausgaben"],"Nenne mindestens eine feste Ausgabe, eine variable Ausgabe und ein Sparziel."]
    ]
  },
  {
    id:"de_b2_mental_wellbeing", level:"B2", title:"Wohlbefinden und mentale Gesundheit: differenziert sprechen", emoji:"🧘", xp:82,
    description:"Sprich über emotionales Wohlbefinden und mentale Gesundheit mit differenziertem Wortschatz auf Deutsch.",
    study: {
      vocab: [
        ["sich überfordert fühlen", "to feel overwhelmed"],
        ["Grenzen setzen, für sich selbst sorgen", "to set boundaries, to take care of yourself"],
        ["das Burnout", "burnout"],
        ["um Hilfe zu bitten ist kein Zeichen von Schwäche", "asking for help is not a sign of weakness"],
        ["seine Emotionen verarbeiten", "to process one's emotions"]
      ],
      grammar: [
        ["\"Es ist wichtig, dass\" + Konjunktiv/Präsens", "\"Es ist wichtig, dass\" leitet eine Empfehlung im Zusammenhang mit Wohlbefinden ein.", "Es ist wichtig, dass du mit jemandem, dem du vertraust, darüber sprichst, wie du dich fühlst."]
      ]
    },
    ex:[
      ["mcq","Welcher dieser Sätze gibt eine Empfehlung klar und natürlich wieder?",["Es ist wichtig, dass du dich ausruhst, wenn du es brauchst.","Wichtig ist, dass du dich ausruhen wenn brauchen.","Es wichtig ist dass du ausruhst wenn brauchst.","Ist wichtig du dich ausruhst wenn du brauchst."],0,"\"Es ist wichtig, dass du dich ausruhst\" ist die natürliche Struktur, um eine Empfehlung zu geben."],
      ["mcq","Was bedeutet \"sich überfordert fühlen\"?",["Das Gefühl haben, dass es zu viele Dinge gleichzeitig zu bewältigen gibt.","Sich extrem glücklich und ruhig fühlen.","Absolut nichts fühlen.","Neugier auf etwas Neues empfinden."],0,"\"Überfordert\" beschreibt ein Gefühl von zu vielen Aufgaben oder schwer zu bewältigenden Emotionen."],
      ["fill","Ergänze: \"___ setzen ist wichtig, um dein Wohlbefinden zu schützen.\"",["Grenzen","Geld","Kleidung","Essen"],0,"\"Grenzen setzen\" ist der korrekte Ausdruck, um das eigene emotionale Wohlbefinden zu schützen."],
      ["translate","Übersetze: \"Um Hilfe zu bitten ist kein Zeichen von Schwäche.\"",["Asking for help is not a sign of weakness.","Ask for help is not sign of weakness.","Asking help for is not a weakness sign.","Not asking for help is a sign of weakness."],0,"\"Um Hilfe zu bitten ist kein Zeichen von Schwäche\" = \"Asking for help is not a sign of weakness.\""],
      ["mcq","Welcher dieser Sätze spiegelt eine gesunde Verarbeitung einer Emotion wider, nicht deren Vermeidung?",["Ich erkenne an, dass ich traurig bin, und gebe mir Zeit zu verstehen, warum.","Ich tue so, als wäre nichts, und ignoriere, wie ich mich fühle.","Ich lenke mich ständig ab, um nichts zu fühlen.","Ich sage allen, dass es mir bestens geht, auch wenn das nicht stimmt."],0,"Eine Emotion anzuerkennen und zu erforschen, statt sie zu vermeiden, ist eine gesunde emotionale Verarbeitung."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter über eine Strategie, die du nutzt (oder gerne nutzen würdest), um dein emotionales Wohlbefinden zu pflegen, wenn du dich überfordert fühlst.",[],["überfordert","Grenzen","verarbeiten"],"Benutze mindestens eine Empfehlungsstruktur (\"es ist wichtig, dass...\")."]
    ]
  },
  {
    id:"de_c1_legal_language", level:"C1", title:"Grundlegende Rechtssprache: Verträge und Klauseln", emoji:"📜", xp:90,
    description:"Verstehe den Wortschatz und die Grundstrukturen der Rechtssprache in Verträgen auf Deutsch.",
    study: {
      vocab: [
        ["die Vertragsparteien", "the contracting parties"],
        ["eine Klausel, ein Anhang", "a clause, an appendix"],
        ["einen Vertrag kündigen", "to terminate a contract"],
        ["den Allgemeinen Geschäftsbedingungen unterliegen", "to be subject to the terms and conditions"],
        ["im Falle eines Verstoßes", "in the event of a breach"]
      ],
      grammar: [
        ["Das formelle unpersönliche Sprache in Verträgen", "Verträge nutzen unpersönliche und passive Strukturen, um objektiv zu klingen und Mehrdeutigkeit darüber zu vermeiden, wer handelt.", "Dieser Vertrag kann von jeder der Parteien mit einer Frist von 30 Tagen gekündigt werden."],
        ["\"Für den Fall, dass\" für Rechtsbedingungen", "Diese formelle Struktur leitet hypothetische rechtliche Bedingungen ein.", "Für den Fall, dass eine der Parteien gegen diese Vereinbarung verstößt, wird eine Vertragsstrafe fällig."]
      ]
    },
    ex:[
      ["mcq","Was bedeutet \"einen Vertrag kündigen\"?",["Einen Vertrag vor dem erwarteten Ende beenden oder aufheben.","Einen neuen Vertrag unterschreiben.","Nur eine Klausel des Vertrags ändern.","Einen Vertrag automatisch verlängern."],0,"\"Kündigen\" bedeutet, einen Vertrag zu beenden, in der Regel vor seinem natürlichen Ablauf."],
      ["mcq","Welcher dieser Sätze verwendet korrekt die formelle unpersönliche Sprache, die typisch für einen Vertrag ist?",["Dieser Vertrag kann von jeder der Parteien gekündigt werden.","Jeder kann diesen Vertrag einfach brechen, wenn er will.","Jemand kann das kündigen, wann immer er Lust hat.","Man kann den Vertrag einfach so kündigen."],0,"Die formelle Vertragssprache verwendet passive und unpersönliche Konstruktionen und vermeidet einen umgangssprachlichen Ton."],
      ["fill","Ergänze: \"___ den Fall, dass eine der Parteien gegen diese Vereinbarung verstößt, wird eine Vertragsstrafe fällig.\"",["Für","Wegen","Obwohl","Jedoch"],0,"\"Für den Fall, dass\" leitet eine hypothetische rechtliche Bedingung ein."],
      ["translate","Übersetze: \"Der Vertrag unterliegt den in Anhang A beschriebenen Bedingungen.\"",["The contract is subject to the terms and conditions described in Appendix A.","The contract is subject the terms and conditions described in Appendix A.","The contract is subject to terms and conditions in Appendix A described.","Subject the contract is to the terms of Appendix A."],0,"\"Unterliegt\" = \"is subject to\"; \"in Anhang A beschrieben\" = \"described in Appendix A\"."],
      ["mcq","Was sind \"die Vertragsparteien\"?",["Die Personen oder Einheiten, die einen Vertrag unterzeichnen und sich verpflichten.","Nur die Person, die den Vertrag verfasst.","Die Abschnitte oder Kapitel eines Vertrags.","Die Zeugen, die den Vertrag nicht unterzeichnen."],0,"\"Die Vertragsparteien\" bezieht sich auf diejenigen, die den Vertrag unterzeichnen und Verpflichtungen darin übernehmen."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter und verfasse eine einfache Klausel eines fiktiven Vertrags (zum Beispiel über Lieferfristen oder Stornierungsbedingungen), in einem formellen, unpersönlichen Register.",[],["die Parteien","für den Fall, dass","kündigen"],"Benutze mindestens eine passive oder unpersönliche Konstruktion, typisch für das formelle Rechtsregister."]
    ]
  },
  {
    id:"de_c2_literary_criticism", level:"C2", title:"Literaturkritik: Erzählstimme und Stil", emoji:"📖", xp:97,
    description:"Analysiere die Erzählstimme, den Stil und die formalen Entscheidungen eines literarischen Textes auf Deutsch.",
    study: {
      vocab: [
        ["die Erzählstimme", "the narrative voice"],
        ["ein zuverlässiger / unzuverlässiger Erzähler", "a reliable / unreliable narrator"],
        ["die Erzählperspektive (Ich-Form, dritte Person)", "point of view (first, third person)"],
        ["der Ton und das Register eines Textes", "the tone and register of a text"],
        ["eine Erzähltechnik (Rückblende, Ellipse)", "a narrative technique (flashback, ellipsis)"]
      ],
      grammar: [
        ["Formale Entscheidungen des Autors analysieren", "Fortgeschrittene Literaturanalyse verbindet eine formale Entscheidung (Perspektive, Zeitform) mit ihrer Wirkung auf den Leser.", "Der Gebrauch der Ich-Perspektive schafft Nähe, begrenzt aber auch die Perspektive auf das, was der Erzähler wissen oder wahrnehmen kann."]
      ]
    },
    ex:[
      ["mcq","Was zeichnet einen \"unzuverlässigen Erzähler\" aus?",["Seine Darstellung der Ereignisse kann verzerrt, unvollständig oder irreführend sein.","Er sagt immer die absolute Wahrheit über alles.","Er hat nie eine Meinung zu den Ereignissen, die er erzählt.","Er kommt nur in wissenschaftlichen Texten vor, nie in Fiktion."],0,"Ein unzuverlässiger Erzähler bietet eine Perspektive, die der Leser hinterfragen muss, wegen Verzerrung, Unwissen oder Täuschung."],
      ["mcq","Welche Wirkung erzeugt die Ich-Perspektive normalerweise?",["Sie schafft Nähe zum Erzähler, begrenzt aber die Perspektive auf das, was er weiß.","Sie beseitigt jede emotionale Verbindung zum Leser.","Sie garantiert immer eine objektive Sicht der Ereignisse.","Sie wird nur in nicht-literarischen Texten verwendet."],0,"Die Ich-Perspektive bringt den Leser dem Erzähler näher, auf Kosten einer notwendigerweise partiellen Sicht der Ereignisse."],
      ["fill","Ergänze: \"Der Gebrauch einer ___ unterbricht die Chronologie, um ein vergangenes Ereignis zu zeigen.\"",["Rückblende","Nachwort","Vorwort","Inhaltsverzeichnis"],0,"Eine \"Rückblende\" (Flashback) ist die Erzähltechnik, die die lineare Chronologie unterbricht, um die Vergangenheit zu zeigen."],
      ["translate","Übersetze mit technischer Präzision: \"Die Unzuverlässigkeit des Erzählers zwingt den Leser, jede Behauptung zu hinterfragen.\"",["The narrator's unreliability forces the reader to question every claim.","The narrator unreliability force the reader question every claim.","The unreliable narrator force to question reader every claim is.","Question every claim forces the narrator's unreliability the reader."],0,"\"Unzuverlässigkeit\" wird technisch als \"unreliability\" übersetzt."],
      ["mcq","Welche dieser Analysen verbindet korrekt eine formale Entscheidung mit ihrer Wirkung auf den Leser?",["Das erzählerische Präsens erzeugt ein Gefühl der Unmittelbarkeit, als würden die Ereignisse gerade jetzt geschehen.","Der Autor benutzte das Präsens, weil es leichter zu schreiben ist.","Das Präsens hat keinerlei Wirkung darauf, wie die Geschichte wahrgenommen wird.","Das Präsens wird nur in der Lyrik verwendet, nie in der Erzählung."],0,"Eine gute Literaturanalyse verknüpft die formale Entscheidung (Zeitform) mit einer konkreten Wirkung auf das Leseerlebnis."],
      ["writing","Wähle eine Erzählung, einen Roman oder eine Geschichte, die du kennst (oder erfinde eine kurze) und schreibe auf Deutsch 55-75 Wörter über ihre Erzählstimme: Perspektive, Zuverlässigkeit des Erzählers und eine Wirkung, die dies beim Leser erzeugt.",[],["Erzählstimme","Perspektive","Wirkung"],"Verbinde explizit eine formale Entscheidung des Autors mit einer konkreten Wirkung auf die Lektüre, beschreibe nicht nur die Handlung."]
    ]
  },
  {
    id:"de_a1_professions_jobs", level:"A1", title:"Berufe: Was machst du beruflich?", emoji:"👩‍⚕️", xp:36,
    description:"Lerne den grundlegenden Wortschatz für Berufe und wie man über seinen Job spricht.",
    study: {
      vocab: [
        ["Arzt/Ärztin, Lehrer/in, Ingenieur/in, Kellner/in", "doctor, teacher, engineer, waiter/waitress"],
        ["Was machst du beruflich?", "What do you do for a living?"],
        ["Ich bin Student(in) / Ich arbeite in einem Büro.", "I'm a student / I work in an office."],
        ["Wo arbeitest du?", "Where do you work?"],
        ["als + Beruf arbeiten", "to work as + profession"]
      ],
      grammar: [
        ["\"Sein\" mit Berufen (ohne Artikel)", "Bei Berufen benutzt \"sein\" keinen unbestimmten Artikel, anders als im Englischen.", "Ich bin Lehrer. (nicht \"Ich bin ein Lehrer\")"]
      ]
    },
    ex:[
      ["mcq","Wie fragst du nach dem Beruf von jemandem?",["Was machst du beruflich?","Wie heißt du?","Wo wohnst du?","Wie alt bist du?"],0,"\"Was machst du beruflich?\" fragt konkret nach dem Beruf oder der Tätigkeit."],
      ["mcq","Wie sagt man seinen Beruf korrekt auf Deutsch?",["Ich bin Lehrer.","Ich bin ein Lehrer.","Ich habe Lehrer.","Ich mache Lehrer."],0,"Auf Deutsch benutzt \"sein\" + Beruf keinen Artikel: \"Ich bin Lehrer.\""],
      ["fill","Ergänze: \"Meine Schwester ___ Ärztin in einem Krankenhaus.\"",["ist","hat","macht","arbeitet ist"],0,"\"Sein\" wird für Berufe benutzt: \"Meine Schwester ist Ärztin.\""],
      ["translate","Übersetze: \"I work in an office.\"",["Ich arbeite in einem Büro.","Ich arbeite ein Büro.","Ich bin Arbeit in einem Büro.","Ich arbeite von einem Büro."],0,"\"I work in an office\" = \"Ich arbeite in einem Büro.\""],
      ["arrange","Bringe in die richtige Reihenfolge: [Kellner / arbeite / Restaurant / als / in / einem / ich]",["Ich arbeite als Kellner in einem Restaurant","Als Kellner arbeite ich in einem Restaurant","Ich arbeite in einem Restaurant als Kellner","In einem Restaurant arbeite ich als Kellner"],0,"\"Ich arbeite als\" + Beruf + \"in\" + Ort: \"Ich arbeite als Kellner in einem Restaurant.\""],
      ["writing","Schreibe auf Deutsch 20-30 Wörter über deinen Beruf (echt oder erfunden) und wo du arbeitest. Nenne mindestens zwei Aufgaben, die du bei der Arbeit erledigst.",[],["ich bin","ich arbeite","als"],"Benutze \"sein\" für den Beruf und \"arbeiten in/als\" für den Ort oder die Rolle."]
    ]
  },
  {
    id:"de_a2_describing_people", level:"A2", title:"Personen beschreiben: Aussehen und Persönlichkeit", emoji:"🧑‍🤝‍🧑", xp:46,
    description:"Lerne, das äußere Erscheinungsbild und die Persönlichkeit anderer Personen auf Deutsch zu beschreiben.",
    study: {
      vocab: [
        ["groß, klein, schlank", "tall, short, slim"],
        ["hat lange/kurze Haare, trägt eine Brille", "has long/short hair, wears glasses"],
        ["ist nett, schüchtern, lustig", "is nice, shy, funny"],
        ["sieht seiner Mutter/seinem Vater ähnlich", "looks like his/her mother/father"],
        ["Wie ist dein bester Freund / deine beste Freundin?", "What is your best friend like?"]
      ],
      grammar: [
        ["\"Sein\" für Eigenschaften, \"haben\" und \"tragen\" für körperliche Merkmale", "\"Sein\" beschreibt Persönlichkeit und stabile Eigenschaften; \"haben\" und \"tragen\" beschreiben Körperteile oder Accessoires.", "Sie ist sehr nett, hat lange Haare und trägt eine Brille."]
      ]
    },
    ex:[
      ["mcq","Wie fragst du nach der Persönlichkeit von jemandem?",["Wie ist dein bester Freund?","Wie geht es dir?","Wie spät ist es?","Woher kommst du?"],0,"\"Wie ist...?\" fragt nach den Eigenschaften oder der Persönlichkeit von jemandem."],
      ["mcq","Welcher dieser Sätze beschreibt korrekt das äußere Erscheinungsbild von jemandem?",["Er hat kurze Haare und trägt eine Brille.","Er ist kurze Haare und trägt eine Brille.","Er hat nett und groß.","Er ist hat Brille."],0,"\"Haben\" wird für Körperteile (\"hat kurze Haare\") und \"tragen\" für Accessoires (\"trägt eine Brille\") benutzt."],
      ["fill","Ergänze: \"Mein Bruder ___ sehr lustig und macht immer Witze.\"",["ist","hat","trägt","macht"],0,"\"Ist\" beschreibt ein stabiles Persönlichkeitsmerkmal: \"ist sehr lustig\"."],
      ["translate","Übersetze: \"Sie hat lange Haare und trägt eine Brille.\"",["She has long hair and wears glasses.","She is long hair and wears glasses.","She has long hair and is glasses.","She wears long hair and has glasses on."],0,"\"Hat lange Haare\" = \"has long hair\"; \"trägt eine Brille\" = \"wears glasses\"."],
      ["arrange","Bringe in die richtige Reihenfolge: [Mutter / ähnlich / sieht / ihrer / sie]",["Sie sieht ihrer Mutter ähnlich","Ihrer Mutter sieht sie ähnlich","Ähnlich sieht sie ihrer Mutter","Sie ihrer Mutter sieht ähnlich"],0,"\"Sieht ... ähnlich\" + Person im Dativ: \"Sie sieht ihrer Mutter ähnlich.\""],
      ["speaking","Beschreibe auf Deutsch, in 40-60 Wörtern, eine Person, die du gut kennst: ihr äußeres Erscheinungsbild und drei Persönlichkeitsmerkmale.",[],["hat","ist","trägt"],"Erwähne mindestens zwei körperliche Merkmale und zwei Persönlichkeitsmerkmale."]
    ]
  },
  {
    id:"de_b1_education_learning", level:"B1", title:"Bildung: Schulsysteme und Lerngewohnheiten", emoji:"🎒", xp:60,
    description:"Sprich über Bildungssysteme, Lernmethoden und Schulerfahrungen auf Deutsch.",
    study: {
      vocab: [
        ["die Schulpflicht / Hochschulbildung", "compulsory / higher education"],
        ["eine Prüfung bestehen/nicht bestehen", "to pass/fail an exam"],
        ["auswendig lernen im Vergleich zu verstehen", "to memorize versus to understand"],
        ["ein Lehrplan, ein Schulfach", "a curriculum, a school subject"],
        ["in deinem eigenen Tempo lernen", "to learn at your own pace"]
      ],
      grammar: [
        ["Komparative zum Vergleichen von Systemen", "\"Mehr... als\", \"weniger... als\" und \"so... wie\" dienen dazu, Lernmethoden oder Bildungssysteme zu vergleichen.", "Dieses System ist praktischer als das traditionelle, obwohl es nicht so strukturiert ist wie jenes."]
      ]
    },
    ex:[
      ["mcq","Welcher dieser Sätze vergleicht korrekt zwei Bildungssysteme?",["Dieses System ist praktischer als das traditionelle.","Dieses System ist praktisch mehr als traditionell.","Dieses System ist so praktisch das traditionelle.","Dieses System praktischer ist als traditionell."],0,"\"Praktischer als\" ist die korrekte Komparativstruktur im Deutschen."],
      ["mcq","Was ist der Unterschied zwischen Auswendiglernen und Verstehen?",["Auswendiglernen bedeutet, Informationen zu wiederholen; Verstehen bedeutet, ihre Bedeutung zu erfassen und anzuwenden.","Sie sind genau dasselbe, ohne jeden Unterschied.","Auswendiglernen ist immer besser als Verstehen.","Verstehen ist schneller als Auswendiglernen."],0,"Auswendiglernen ist das Behalten von Daten; Verstehen erfordert eine tiefere Verarbeitung der Bedeutung."],
      ["fill","Ergänze: \"Ich habe viel gelernt, aber trotzdem die Prüfung ___.\"",["nicht bestanden","bestanden","auswendig gelernt","verstanden"],0,"Der Kontext (\"aber trotzdem\") deutet auf ein negatives Ergebnis hin: \"nicht bestanden\"."],
      ["translate","Übersetze: \"Ich lerne lieber in meinem eigenen Tempo.\"",["I prefer to learn at my own pace.","I prefer learn my own pace.","I prefer to learning my own pace.","I prefer my own pace to learn at."],0,"\"In meinem eigenen Tempo lernen\" = \"to learn at my own pace\"."],
      ["arrange","Bringe in die richtige Reihenfolge: [Lieblingsfach / ist / Mathematik / mein]",["Mein Lieblingsfach ist Mathematik","Ist mein Lieblingsfach Mathematik","Mathematik ist mein Lieblingsfach","Mein ist Lieblingsfach Mathematik"],0,"Subjekt + \"ist\" + Ergänzung: \"Mein Lieblingsfach ist Mathematik.\""],
      ["writing","Schreibe auf Deutsch 45-65 Wörter über zwei Lernmethoden oder zwei Bildungssysteme, die du kennst (zum Beispiel Präsenzunterricht versus Online-Unterricht), und sage, welche du bevorzugst und warum.",[],["praktischer als","verstehen","in meinem eigenen Tempo"],"Benutze mindestens eine explizite Vergleichsstruktur."]
    ]
  },
  {
    id:"de_b2_sustainable_cities", level:"B2", title:"Nachhaltige Städte: Stadtplanung und Mobilität", emoji:"🚲", xp:82,
    description:"Diskutiere Vorschläge zu Stadtplanung und nachhaltiger Mobilität in Städten mit differenzierten Argumenten.",
    study: {
      vocab: [
        ["der öffentliche Nahverkehr, der Radweg", "public transport, the bike lane"],
        ["das Stadtzentrum zur Fußgängerzone machen", "to pedestrianize the city center"],
        ["Verkehr und Umweltverschmutzung reduzieren", "to reduce traffic and pollution"],
        ["eine Grünfläche, eine Fußgängerzone", "a green space, a pedestrian zone"],
        ["in nachhaltige Infrastruktur investieren", "to invest in sustainable infrastructure"]
      ],
      grammar: [
        ["Konjunktiv II mit \"es wäre wichtig, dass\"", "\"Es wäre wichtig, dass\" + Konjunktiv II drückt eine differenzierte Empfehlung aus.", "Es wäre wichtig, dass Städte in zuverlässigen öffentlichen Nahverkehr investierten."]
      ]
    },
    ex:[
      ["mcq","Welcher dieser Sätze präsentiert ein formell gut strukturiertes Argument?",["Es wäre wichtig, dass Städte in zuverlässigen öffentlichen Nahverkehr investieren.","Städte investieren wichtig öffentlichen Nahverkehr.","Es wichtig Städte investieren öffentlichen Nahverkehr.","Wichtig ist dass Städte öffentlichen Nahverkehr investieren."],0,"\"Es wäre wichtig, dass\" gefolgt vom Verb ist die korrekte formelle Struktur."],
      ["mcq","Was bedeutet \"das Stadtzentrum zur Fußgängerzone machen\"?",["Den Fahrzeugverkehr einschränken oder entfernen, um Fußgänger zu priorisieren.","Mehr Straßen im Zentrum bauen.","Die Anzahl der im Zentrum erlaubten Autos erhöhen.","Alle Geschäfte aus dem Zentrum entfernen."],0,"\"Zur Fußgängerzone machen\" bedeutet, einen Raum für die vorrangige Nutzung durch Fußgänger umzuwandeln, wobei Fahrzeuge eingeschränkt werden."],
      ["fill","Ergänze: \"Der Radweg könnte den Verkehr in diesem Gebiet ___.\"",["reduzieren","reduziert","reduzierend","reduziert haben"],0,"Nach \"könnte\" folgt der Infinitiv: \"könnte ... reduzieren\"."],
      ["translate","Übersetze: \"Investitionen in den öffentlichen Nahverkehr reduzieren langfristig die Umweltverschmutzung.\"",["Investing in public transport reduces pollution in the long term.","Investing in public transport reduce pollution in the long term.","Invest in public transport reduces pollution long term.","Reduces investing in public transport pollution long term."],0,"\"Investitionen in den öffentlichen Nahverkehr reduzieren die Umweltverschmutzung\" = \"Investing in public transport reduces pollution.\""],
      ["mcq","Welcher dieser Sätze präsentiert eine differenzierte Position zur urbanen Mobilität?",["Es hängt vom Kontext ab: In manchen Städten ist das Auto noch notwendig, in anderen nicht.","Autos sollten überall ohne Ausnahme verboten werden.","Öffentlicher Nahverkehr funktioniert in keiner Stadt gut.","Es gibt keine mögliche Lösung für den städtischen Verkehr."],0,"Eine differenzierte Position erkennt an, dass die Lösung vom spezifischen Kontext jeder Stadt abhängt."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter mit einem Vorschlag zur nachhaltigen Mobilität für eine Stadt, die du kennst, und erkläre einen Vorteil und eine mögliche Schwierigkeit bei der Umsetzung.",[],["es wäre wichtig, dass","Fußgänger","öffentlicher Nahverkehr"],"Benutze mindestens eine formelle Empfehlungsstruktur."]
    ]
  },
  {
    id:"de_c1_science_communication", level:"C1", title:"Wissenschaftskommunikation: präzise vermitteln", emoji:"🔬", xp:90,
    description:"Lerne, komplexe wissenschaftliche Informationen auf Deutsch klar und präzise zu vermitteln, ohne an Genauigkeit zu verlieren.",
    study: {
      vocab: [
        ["vereinfachen, ohne zu verzerren", "to simplify without distorting"],
        ["ein vorläufiges Ergebnis im Vergleich zu einem bestätigten", "a preliminary finding versus a confirmed one"],
        ["wissenschaftliche Belege deuten darauf hin, dass...", "scientific evidence suggests that..."],
        ["eine nützliche Analogie, um etwas Komplexes zu erklären", "a useful analogy to explain something complex"],
        ["wissenschaftlichen Sensationalismus vermeiden", "to avoid scientific sensationalism"]
      ],
      grammar: [
        ["Abstufende Verben zur Vermittlung wissenschaftlicher Unsicherheit", "\"Deutet darauf hin\", \"weist darauf hin\", \"könnte erklären\" vermitteln unterschiedliche Grade wissenschaftlicher Gewissheit, präziser als \"beweist\" oder \"zeigt eindeutig\".", "Die Studie deutet auf einen möglichen Zusammenhang hin, beweist aber keine Kausalität."]
      ]
    },
    ex:[
      ["mcq","Welcher dieser Sätze vermittelt ein wissenschaftliches Ergebnis mit der richtigen Nuance?",["Die Studie deutet auf einen möglichen Zusammenhang hin, beweist aber keine Kausalität.","Die Studie beweist definitiv, dass dies jenes verursacht.","Wissenschaftler wissen bereits alles über dieses Thema.","Dieses Ergebnis ist hundertprozentig sicher, ohne jeden Zweifel."],0,"\"Deutet auf einen möglichen Zusammenhang hin\" und \"beweist keine Kausalität\" spiegeln präzise das reale Sicherheitsniveau eines vorläufigen Ergebnisses wider."],
      ["mcq","Warum ist es wichtig, in der Wissenschaftskommunikation \"zu vereinfachen, ohne zu verzerren\"?",["Weil übermäßige Vereinfachung die reale Bedeutung des Ergebnisses verändern kann.","Weil Wissenschaft niemals Laien erklärt werden sollte.","Weil technische Details überhaupt keine Rolle spielen.","Weil jede Vereinfachung automatisch falsch ist."],0,"Vereinfachen ist nötig, um mehr Menschen zu erreichen, aber die ursprüngliche Bedeutung zu verzerren ist ein schwerer Fehler in der Wissenschaftskommunikation."],
      ["fill","Ergänze: \"Dies ist ein ___ Ergebnis: weitere Studien sind nötig, um es zu bestätigen.\"",["vorläufiges","bestätigtes","endgültiges","absolutes"],0,"\"Vorläufig\" zeigt an, dass das Ergebnis noch nicht abschließend bestätigt ist."],
      ["translate","Übersetze: \"Scientific evidence suggests that this treatment could be effective.\"",["Wissenschaftliche Belege deuten darauf hin, dass diese Behandlung wirksam sein könnte.","Wissenschaftliche Belege deuten darauf hin diese Behandlung wirksam sein könnte.","Deuten wissenschaftliche Belege darauf hin dass Behandlung wirksam sein könnte.","Wissenschaftliche Belege deuten darauf hin, dass diese Behandlung sein könnte wirksam."],0,"\"Scientific evidence suggests that\" = \"Wissenschaftliche Belege deuten darauf hin, dass\", gefolgt von \"könnte sein\", um Möglichkeit auszudrücken."],
      ["mcq","Eine Schlagzeile sagt „Die Wissenschaft bestätigt es: Diese Frucht heilt Krebs!“ basierend auf nur einer vorläufigen Studie an Mäusen. Was ist das Problem mit dieser Schlagzeile?",["Sie übertreibt ein begrenztes, vorläufiges Ergebnis, als wäre es eine absolute, auf Menschen anwendbare Gewissheit.","Es ist ein perfektes Beispiel für rigorose Wissenschaftskommunikation.","Sie enthält überhaupt keinen Sensationalismus.","Sie spiegelt genau das verfügbare Evidenzniveau wider."],0,"Die Schlagzeile verwandelt ein vorläufiges Ergebnis an Mäusen in eine absolute Aussage über Menschen — ein klarer Fall von Sensationalismus."],
      ["writing","Wähle eine wissenschaftliche Entdeckung (real oder erfunden) und schreibe auf Deutsch 55-75 Wörter, die sie klar und zugänglich erklären, mithilfe einer Analogie und unter Beibehaltung der richtigen Sicherheitsnuance (vermeide Wörter wie \"beweist\", wenn das Ergebnis vorläufig ist).",[],["deutet darauf hin","vorläufig","ist wie"],"Enthält mindestens eine Analogie und ein abstufendes Verb, das das Sicherheitsniveau korrekt widerspiegelt."]
    ]
  },
  {
    id:"de_c2_speech_acts_pragmatics", level:"C2", title:"Pragmatik: was wir tun, indem wir etwas sagen", emoji:"💭", xp:98,
    description:"Analysiere Sprechakte und Pragmatik auf Deutsch: den Unterschied zwischen dem, was gesagt wird, und dem, was durch das Sagen getan wird.",
    study: {
      vocab: [
        ["ein Sprechakt (Bitte, Versprechen, Befehl)", "a speech act (request, promise, order)"],
        ["die wörtliche Bedeutung im Vergleich zur beabsichtigten Bedeutung", "literal meaning versus intended meaning"],
        ["ein indirekter Sprechakt", "an indirect speech act"],
        ["die Gelingensbedingungen eines Sprechakts", "the felicity conditions of a speech act"],
        ["etwas implizieren, ohne es explizit zu sagen", "to imply something without saying it explicitly"]
      ],
      grammar: [
        ["Direkte versus indirekte Sprechakte", "Ein indirekter Sprechakt nutzt eine grammatische Form (wie eine Frage), um eine andere Funktion (wie eine Bitte) zu erfüllen.", "\"Könntest du das Fenster schließen?\" hat die Form einer Frage, aber ihre eigentliche Funktion ist eine Bitte, nicht die Frage nach einer Fähigkeit."]
      ]
    },
    ex:[
      ["mcq","\"Könntest du mir das Salz reichen?\" bei einem Abendessen. Was für ein Sprechakt ist das eigentlich?",["Eine indirekte Bitte, auch wenn sie die Form einer Frage hat.","Eine echte Frage nach der Fähigkeit der anderen Person.","Ein direkter, expliziter Befehl.","Ein Versprechen für die Zukunft."],0,"Obwohl sie grammatisch die Form einer Frage nach einer Fähigkeit hat, ist ihre eigentliche Funktion, jemanden zu bitten, das Salz zu reichen: es ist eine indirekte Bitte."],
      ["mcq","Ein Chef sagt zu einem Angestellten: „Es ist hier etwas kalt, oder?“ in der Nähe eines offenen Fensters. Was tut er damit wahrscheinlich?",["Er bittet indirekt jemanden, das Fenster zu schließen.","Er kommentiert einfach das Wetter ohne weitere Absicht.","Er fragt nach der genauen Temperatur des Raumes.","Er befiehlt explizit, die Heizung auszuschalten."],0,"Der Kommentar fungiert als indirekte Bitte, dass jemand das Fenster schließt, ohne es explizit zu sagen."],
      ["fill","Ergänze: \"'Ich verspreche es' laut zu sagen reicht nicht aus; auch bestimmte ___ müssen erfüllt sein, damit das Versprechen gültig ist.\"",["Gelingensbedingungen","Grammatikregeln","Rechtschreibregeln","rhetorische Fragen"],0,"Die \"Gelingensbedingungen\" sind die kontextuellen Voraussetzungen (Aufrichtigkeit, Fähigkeit usw.), damit ein Sprechakt korrekt funktioniert."],
      ["translate","Übersetze mit technischer Präzision: \"Dies ist ein indirekter Sprechakt: seine wörtliche Form entspricht nicht seiner beabsichtigten Funktion.\"",["This is an indirect speech act: its literal form doesn't match its intended function.","This is indirect speech act literal form doesn't match function.","It's a speech act this indirect that doesn't match literal function.","This speech act is indirect its form doesn't function match."],0,"\"Indirekter Sprechakt\" = \"indirect speech act\"; \"wörtliche Form\" = \"literal form\"; \"beabsichtigte Funktion\" = \"intended function\"."],
      ["mcq","Welche dieser Aussagen impliziert etwas, ohne es explizit zu sagen?",["\"Einige Studenten haben die Prüfung bestanden.\" (impliziert, dass nicht alle bestanden haben)","\"Alle Studenten haben die Prüfung bestanden.\"","\"Die Prüfung war am Montag um neun Uhr.\"","\"Es gibt dreißig Studenten in der Klasse.\""],0,"\"Einige\" impliziert pragmatisch \"nicht alle\", obwohl es das nicht wörtlich behauptet; das ist eine klassische konversationelle Implikatur."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter, die einen indirekten Sprechakt aus einem alltäglichen Gespräch (real oder erfunden) analysieren: was wörtlich gesagt wurde, welche pragmatische Funktion es eigentlich erfüllte, und wie du das aus dem Kontext erkannt hast.",[],["Sprechakt","wörtlich","in Wirklichkeit"],"Unterscheide explizit zwischen der wörtlichen grammatischen Form der Aussage und ihrer tatsächlichen pragmatischen Funktion."]
    ]
  },
];
