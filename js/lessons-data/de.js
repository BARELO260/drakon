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
  {
    id:"de_a1_animals_nature", level:"A1", title:"Tiere und die Natur", emoji:"🐾", xp:36,
    description:"Lerne den Wortschatz für gängige Tiere und die Natur auf Deutsch.",
    study: {
      vocab: [
        ["der Hund", "the dog"],
        ["die Katze", "the cat"],
        ["der Vogel", "the bird"],
        ["das Pferd", "the horse"],
        ["der Fisch", "the fish"],
        ["die Kuh", "the cow"],
        ["der Wald, der Berg, der Fluss", "the forest, the mountain, the river"],
      ],
      grammar: [
        ["Das grammatische Geschlecht bei Tieren", "Tiernamen haben ein festes grammatisches Geschlecht (der/die/das), das nicht immer dem biologischen Geschlecht entspricht.", "der Hund, die Katze, das Pferd — unabhängig vom biologischen Geschlecht des Tieres."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „das Pferd“ auf Englisch?",["the horse", "the cat", "the bird", "the dog"],0,"„Pferd“ heißt „horse“ auf Englisch."],
      ["mcq","Wie sagt man „der Vogel“ auf Englisch?",["the dog", "the cow", "the fish", "the bird"],3,"„Vogel“ heißt „bird“ auf Englisch."],
      ["fill","Completa: “Ich gehe sonntags gern im ___ spazieren.”",["Katze", "Fisch", "Kuh", "Wald"],3,"„Im Wald spazieren gehen“ ist eine typische Aktivität in der Natur."],
      ["translate","Übersetze: „The dog is very friendly.“",["Die Katze ist sehr freundlich.", "Der Vogel ist sehr freundlich.", "Der Hund ist sehr freundlich.", "Das Pferd ist sehr freundlich."],2,"„The dog“ = „der Hund“; „friendly“ = „freundlich“."],
      ["arrange","Bringe in die richtige Reihenfolge: [schwarze / eine / habe / Katze / ich]",["Ich habe eine schwarze Katze", "Katze habe Ich schwarze eine", "schwarze habe eine Katze Ich", "habe schwarze Katze eine Ich"],0,"Subjekt + Verb + Artikel + Adjektiv + Substantiv."],
      ["writing","Schreibe auf Deutsch 20-30 Wörter über ein Tier, das du magst, und einen Ort in der Natur, den du gerne besuchst.",[],["ich mag", "der Wald", "das Tier"]],
    ]
  },
  {
    id:"de_a2_body_parts", level:"A2", title:"Der menschliche Körper: Körperteile", emoji:"🦴", xp:46,
    description:"Lerne die Körperteile und wie man Schmerzen oder körperliche Merkmale beschreibt.",
    study: {
      vocab: [
        ["der Kopf", "the head"],
        ["der Arm", "the arm"],
        ["das Bein", "the leg"],
        ["die Hand", "the hand"],
        ["der Fuß", "the foot"],
        ["der Rücken", "the back"],
      ],
      grammar: [
        ["„Weh tun“ mit Dativpronomen", "„[Körperteil] tut mir weh“ ist die natürliche Struktur, um Schmerzen auszudrücken.", "Der Rücken tut mir weh. / Die Füße tun mir weh."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „der Rücken“ auf Englisch?",["the back", "the hand", "the head", "the leg"],0,"„Rücken“ heißt „back“ auf Englisch."],
      ["mcq","Wie sagt man „der Fuß“ auf Englisch?",["the head", "the hand", "the arm", "the foot"],3,"„Fuß“ heißt „foot“ auf Englisch."],
      ["fill","Completa: “Der ___ tut mir nach dem Laufen sehr weh.”",["Hand", "Bein", "Rücken", "Kopf"],2,"Laufen verursacht oft Rückenschmerzen, wenn man sich nicht gut aufwärmt."],
      ["translate","Übersetze: „My hand hurts.“",["Mein Bein tut mir weh.", "Mein Arm tut mir weh.", "Mein Fuß tut mir weh.", "Meine Hand tut mir weh."],3,"„My hand hurts“ = „Meine Hand tut mir weh.“"],
      ["arrange","Bringe in die richtige Reihenfolge: [weh / Bein / mir / tut / mein]",["Bein tut Mein mir weh", "tut mir weh Bein Mein", "Bein weh Mein tut mir", "Mein Bein tut mir weh"],3,"Subjekt (Körperteil) + „tut mir weh“."],
      ["speaking","Beschreibe auf Deutsch, in 40-60 Wörtern, einen Schmerz, den du einmal hattest: welcher Körperteil wehtat und was du getan hast.",[],["tat weh", "mein Bein", "ich ging zum Arzt"]],
    ]
  },
  {
    id:"de_b1_sports_fitness", level:"B1", title:"Sport und körperliche Aktivität", emoji:"🏃", xp:60,
    description:"Sprich über Sport, Trainingsroutinen und Fitnessgewohnheiten auf Deutsch.",
    study: {
      vocab: [
        ["Fußball", "soccer/football"],
        ["das Schwimmen", "swimming"],
        ["Tennis", "tennis"],
        ["laufen", "to run"],
        ["Gewichte heben", "to lift weights"],
        ["Yoga machen", "to do yoga"],
      ],
      grammar: [
        ["„Normalerweise“ + Präsens für Gewohnheiten", "„Normalerweise“ mit dem Präsens drückt eine gewohnheitsmäßige Handlung aus.", "Ich laufe normalerweise dreimal pro Woche."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „Gewichte heben“ auf Englisch?",["to run", "to do yoga", "swimming", "to lift weights"],3,"„Gewichte heben“ heißt „to lift weights“."],
      ["mcq","Wie sagt man „das Schwimmen“ auf Englisch?",["swimming", "to run", "tennis", "soccer/football"],0,"„Schwimmen“ heißt „swimming“."],
      ["fill","Completa: “Ich ___ normalerweise dreimal pro Woche, um fit zu bleiben.”",["Tennis", "Fußball", "Schwimmen", "laufe"],3,"„Normalerweise“ + Präsens („laufe“) beschreibt eine Gewohnheit."],
      ["translate","Übersetze: „Suelo hacer yoga los domingos.“",["I usually play tennis on Sundays.", "I usually do yoga on Sundays.", "I usually lift weights on Sundays.", "I usually do yoga on Saturdays."],1,"„Suelo hacer yoga“ = „I usually do yoga“; „los domingos“ = “on Sundays“."],
      ["arrange","Bringe in die richtige Reihenfolge: [fit / bleiben / um / laufe / ich]",["fit bleiben Ich zu laufe, um", "bleiben um laufe, fit Ich zu", "Ich laufe, um fit zu bleiben", "laufe, Ich zu fit bleiben um"],2,"Subjekt + Verb + „um ... zu“ + Adjektiv."],
      ["writing","Schreibe auf Deutsch 45-65 Wörter über deine Beziehung zum Sport: welche Aktivität du machst, wie oft und warum du sie magst (oder nicht).",[],["normalerweise", "fit bleiben", "ich mache"]],
    ]
  },
  {
    id:"de_b2_smart_home_tech", level:"B2", title:"Das intelligente Zuhause: Hausautomation und Geräte", emoji:"💡", xp:82,
    description:"Sprich über smarte Geräte und Hausautomation mit differenzierten Meinungen auf Deutsch.",
    study: {
      vocab: [
        ["ein smarter Lautsprecher", "a smart speaker"],
        ["ein programmierbares Thermostat", "a programmable thermostat"],
        ["eine Sicherheitskamera", "a security camera"],
        ["per Sprache steuern", "to control by voice"],
        ["Hausaufgaben automatisieren", "to automate household tasks"],
        ["ein Datenschutzrisiko", "a privacy risk"],
      ],
      grammar: [
        ["Futur I für technologische Vorhersagen", "„Werden“ + Infinitiv beschreibt vernünftige Vorhersagen darüber, wie sich Technologie entwickeln wird.", "In ein paar Jahren werden mehr Haushalte vernetzte Geräte haben."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „ein Datenschutzrisiko“ auf Englisch?",["a privacy risk", "a smart speaker", "a security camera", "a thermostat"],0,"„Datenschutzrisiko“ heißt „privacy risk“."],
      ["mcq","Wie sagt man „Hausaufgaben automatisieren“ auf Englisch?",["a smart speaker", "to control by voice", "a privacy risk", "to automate household tasks"],3,"„Hausaufgaben automatisieren“ heißt „to automate household tasks“."],
      ["fill","Completa: “Ein programmierbares Thermostat kann Energie ___, wenn es gut eingestellt ist.”",["kaputtmachen", "verlieren", "sparen", "verschwenden"],2,"Ein gut eingestelltes Thermostat hilft, Energie zu sparen, nicht zu verschwenden."],
      ["translate","Übersetze: „Smart speakers can be controlled by voice.“",["Smarte Lautsprecher können per Sprache gesteuert werden.", "Thermostate können per Text gesteuert werden.", "Sicherheitskameras können per Sprache gesteuert werden.", "Smarte Lautsprecher können per Text gesteuert werden."],0,"„Controlled by voice“ = „per Sprache gesteuert“."],
      ["arrange","Bringe in die richtige Reihenfolge: [ein / kann / darstellen / Datenschutzrisiko / es]",["ein Es darstellen Datenschutzrisiko kann", "Es kann ein Datenschutzrisiko darstellen", "Datenschutzrisiko darstellen Es kann ein", "Es ein Datenschutzrisiko darstellen kann"],1,"Subjekt + „kann“ + Objekt + „darstellen“: „Es kann ein Datenschutzrisiko darstellen.“"],
      ["writing","Schreibe auf Deutsch 55-75 Wörter über ein smartes Gerät, das du zu Hause nutzen würdest (oder bereits nutzt): welchen Vorteil es bietet und welches Datenschutzrisiko es haben könnte.",[],["automatisieren", "Datenschutzrisiko", "per Sprache"]],
    ]
  },
  {
    id:"de_c1_workplace_communication", level:"C1", title:"Die Arbeitswelt: Besprechungen und Korrespondenz", emoji:"🤝", xp:90,
    description:"Beherrsche den Wortschatz und die typischen Formeln für Besprechungen und formelle E-Mails auf Deutsch.",
    study: {
      vocab: [
        ["eine Besprechung einberufen", "to call a meeting"],
        ["ein Dokument anhängen", "to attach a document"],
        ["wir freuen uns auf Ihre Antwort", "we look forward to your response"],
        ["einen offenen Punkt wieder aufgreifen", "to follow up on a pending item"],
        ["eine Einigung erzielen", "to reach an agreement"],
        ["eine Besprechung verschieben", "to postpone a meeting"],
      ],
      grammar: [
        ["Höflichkeitsformeln in formellen E-Mails", "Feste Formeln wie „Wir freuen uns auf Ihre Antwort“ geben einen professionellen Abschluss, ohne abrupt zu klingen.", "Anbei finden Sie den angeforderten Bericht. Wir freuen uns auf Ihre Antwort."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „eine Einigung erzielen“ auf Englisch?",["to call a meeting", "to reach an agreement", "to attach a document", "to postpone a meeting"],1,"„Eine Einigung erzielen“ heißt „to reach an agreement“."],
      ["mcq","Wie sagt man „eine Besprechung verschieben“ auf Englisch?",["to attach a document", "to reach an agreement", "to call a meeting", "to postpone a meeting"],3,"„Eine Besprechung verschieben“ heißt „to postpone a meeting“."],
      ["fill","Completa: “Bevor wir die Besprechung beenden, möchte ich gern einen offenen Punkt von letzter Woche ___.”",["verschieben", "anhängen", "einberufen", "aufgreifen"],3,"„Einen offenen Punkt wieder aufgreifen“ bedeutet, darauf zurückzukommen."],
      ["translate","Übersetze: „Ich habe den angeforderten Bericht angehängt.“",["I'm calling the requested report.", "I'm postponing the requested report.", "I'm attaching the requested report.", "I'm attaching the requested email."],2,"„Ich habe angehängt“ = „I'm attaching“; „den angeforderten Bericht“ = „the requested report“."],
      ["arrange","Bringe in die richtige Reihenfolge: [Antwort / auf / freuen / Ihre / wir / uns]",["Wir freuen auf Ihre uns Antwort", "Ihre Wir Antwort uns freuen auf", "Antwort Wir auf uns Ihre freuen", "Wir freuen uns auf Ihre Antwort"],3,"Feste Formel zum Abschluss einer formellen E-Mail."],
      ["writing","Schreibe auf Deutsch eine kurze formelle E-Mail (55-75 Wörter), in der du eine Besprechung einberufst, einen offenen Punkt erwähnst und mit einer formellen Höflichkeitsformel schließt.",[],["ich berufe ein", "offener Punkt", "wir freuen uns auf"]],
    ]
  },
  {
    id:"de_c2_register_synonyms", level:"C2", title:"Register und Stil: Synonyme je nach Kontext", emoji:"🔤", xp:98,
    description:"Wähle das passende Synonym je nach Register (formell, neutral, umgangssprachlich) auf Deutsch.",
    study: {
      vocab: [
        ["erlangen (formell) / bekommen (neutral)", "to obtain / to get"],
        ["versterben (formell) / sterben (neutral) / abkratzen (umgangssprachlich)", "to pass away / to die / to kick the bucket"],
        ["ersuchen (formell) / bitten (neutral)", "to request / to ask for"],
        ["residieren (formell) / wohnen (neutral)", "to reside / to live"],
        ["dennoch (formell) / aber (neutral)", "however / but"],
      ],
      grammar: [
        ["Register je nach kommunikativem Kontext wählen", "Dieselbe Idee kann mit sehr unterschiedlichen Wörtern ausgedrückt werden, je nachdem, ob der Kontext formell, neutral oder umgangssprachlich ist; das falsche Wort zu wählen bricht die Kohärenz des Textes.", "In einem Bericht: „Die Information wurde erlangt.“ Im Gespräch unter Freunden: „Ich hab's bekommen.“"],
      ]
    },
    ex:[
      ["mcq","In einem offiziellen Bericht: Welches Wort ist für „Informationen erlangen“ am passendsten?",["Erlangen", "Schnappen", "Ergattern", "Kriegen"],0,"„Erlangen“ ist das formelle Register, das für einen offiziellen Bericht passt."],
      ["mcq","In einem informellen Gespräch unter Freunden: Welches Verb klingt für „sterben“ am natürlichsten?",["Abkratzen", "Versterben", "Dahinscheiden", "Verscheiden"],0,"„Abkratzen“ ist umgangssprachlich und würde in ein informelles Gespräch passen; die anderen sind zu formell oder gehoben."],
      ["fill","Completa: “In einem formellen Brief sagt man „___ setzen wir das Projekt fort“, nicht „aber“.”",["dennoch", "jedoch aber", "trotzdem", "aber"],0,"„Dennoch“ ist der formelle Konnektor, der „aber“ entspricht."],
      ["translate","Übersetze mit dem korrekten formellen Register: „We reside in Madrid.“",["Wir wohnen in Madrid.", "Wir bleiben in Madrid.", "Wir residieren in Madrid.", "Wir sind aus Madrid."],2,"„Reside“ wird im formellen Register mit „residieren“ übersetzt, nicht mit dem neutralen „wohnen“."],
      ["arrange","Bringe in die richtige Reihenfolge (formelles Register): [wurde / die Information / erbeten]",["Information wurde Die erbeten", "Die Information wurde erbeten", "erbeten wurde Information Die", "Die wurde erbeten Information"],1,"Passivkonstruktion, typisch für das formelle/administrative Register."],
      ["writing","Schreibe auf Deutsch dieselbe kurze Nachricht („ich brauche, dass du mir die Datei schickst“) in zwei verschiedenen Registern: einem formellen (für einen Chef) und einem umgangssprachlichen (für einen Freund), in insgesamt 55-75 Wörtern.",[],["formell", "umgangssprachlich", "ich ersuche"]],
    ]
  },
  {
    id:"de_a1_clothing_colors", level:"A1", title:"Kleidung und Farben", emoji:"👕", xp:37,
    description:"Lerne den Wortschatz für Kleidungsstücke und wie man sie mit Farben kombiniert.",
    study: {
      vocab: [
        ["das Hemd", "the shirt"],
        ["die Hose", "the pants/trousers"],
        ["die Schuhe", "the shoes"],
        ["das Kleid", "the dress"],
        ["die Jacke", "the jacket"],
        ["der Rock", "the skirt"],
        ["rot, blau, grün, schwarz, weiß", "red, blue, green, black, white"],
      ],
      grammar: [
        ["Adjektivendungen bei Farben", "Farbadjektive bekommen im Deutschen eine Endung, die vom Artikel und vom Fall abhängt.", "ein rotes Kleid / schwarze Schuhe / das grüne Hemd"],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Jacke“ auf Englisch?",["the pants/trousers", "the shirt", "the jacket", "the skirt"],2,"„Jacke“ heißt „jacket“ auf Englisch."],
      ["mcq","Wie sagt man „die Schuhe“ auf Englisch?",["the dress", "the shoes", "the shirt", "the skirt"],1,"„Schuhe“ heißt „shoes“ auf Englisch."],
      ["fill","Completa: “Ich trage ein ___ Hemd und eine schwarze Hose.”",["blaue", "blauen", "blau", "blaues"],3,"„Hemd“ ist sächlich, daher die Endung: „ein blaues Hemd“."],
      ["translate","Übersetze: „I'm wearing a red dress.“",["Ich trage rote Schuhe.", "Ich trage einen roten Rock.", "Ich trage ein rotes Hemd.", "Ich trage ein rotes Kleid."],3,"„I'm wearing“ = „Ich trage“; „a red dress“ = „ein rotes Kleid“."],
      ["arrange","Bringe in die richtige Reihenfolge: [schwarze / habe / ich / Schuhe]",["Ich habe schwarze Schuhe", "Ich Schuhe schwarze habe", "schwarze Ich Schuhe habe", "Ich habe Schuhe schwarze"],0,"Subjekt + Verb + Adjektiv + Substantiv (Pluralendung ohne Artikel)."],
      ["writing","Beschreibe auf Deutsch, in 20-30 Wörtern, die Kleidung, die du heute trägst, und nenne mindestens drei Kleidungsstücke und ihre Farben.",[],["ich trage", "-farben", "und"]],
    ]
  },
  {
    id:"de_a2_fruits_vegetables", level:"A2", title:"Obst und Gemüse", emoji:"🥦", xp:47,
    description:"Lerne den Wortschatz für Obst und Gemüse und wie man auf Deutsch über gesunde Ernährung spricht.",
    study: {
      vocab: [
        ["der Apfel", "the apple"],
        ["die Banane", "the banana"],
        ["die Karotte", "the carrot"],
        ["die Tomate", "the tomato"],
        ["der Salat", "the lettuce"],
        ["die Orange", "the orange"],
      ],
      grammar: [
        ["„Viel“ und „wenig“ für Mengen", "„Viel“ und „wenig“ bleiben vor unzählbaren Substantiven im Singular unverändert.", "Ich esse viel Obst und wenig Fleisch."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Karotte“ auf Englisch?",["the carrot", "the orange", "the banana", "the apple"],0,"„Karotte“ heißt „carrot“ auf Englisch."],
      ["mcq","Wie sagt man „die Banane“ auf Englisch?",["the carrot", "the banana", "the tomato", "the lettuce"],1,"„Banane“ heißt „banana“ auf Englisch."],
      ["fill","Completa: “Ich esse jeden Tag ___ Obst, um gesund zu bleiben.”",["wenig", "viel", "viele", "wenige"],1,"„Obst“ ist unzählbar, daher „viel Obst“ (unveränderlich)."],
      ["translate","Übersetze: „I eat little meat and a lot of vegetables.“",["Ich esse wenig Fleisch und viel Gemüse.", "Ich esse viel Fleisch und viel Gemüse.", "Ich esse wenig Fleisch und wenig Gemüse.", "Ich esse wenig Obst und viel Gemüse."],0,"„Little meat“ = „wenig Fleisch“; „a lot of vegetables“ = „viel Gemüse“."],
      ["arrange","Bringe in die richtige Reihenfolge: [Apfel / Banane / mag / und / ich]",["Ich mag Apfel und Banane", "mag Ich Apfel und Banane", "Banane und Ich mag Apfel", "Ich mag Apfel Banane und"],0,"Subjekt + Verb + Objekt (zwei durch „und“ verbundene Substantive)."],
      ["speaking","Beschreibe auf Deutsch, in 40-60 Wörtern, deine übliche Ernährung: welches Obst und Gemüse du normalerweise isst und wie oft.",[],["ich esse", "oft", "Gemüse"]],
    ]
  },
  {
    id:"de_b1_cooking_recipes", level:"B1", title:"Kochen: Verben und einfache Rezepte", emoji:"🍳", xp:61,
    description:"Lerne Kochverben und wie man die Schritte eines einfachen Rezepts auf Deutsch erklärt.",
    study: {
      vocab: [
        ["schneiden, schälen", "to cut, to peel"],
        ["kochen, braten", "to boil, to fry"],
        ["die Zutaten mischen", "to mix the ingredients"],
        ["nach Geschmack Salz hinzufügen", "to add salt to taste"],
        ["den Teig ruhen lassen", "to let the dough rest"],
        ["den Ofen vorheizen", "to preheat the oven"],
      ],
      grammar: [
        ["Der Imperativ für Rezeptanweisungen", "Rezepte benutzen den Imperativ (Sie-Form), um Schritt für Schritt Anweisungen zu geben.", "Schneiden Sie das Gemüse, kochen Sie das Wasser und fügen Sie Salz nach Geschmack hinzu."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Zutaten mischen“ auf Englisch?",["to boil, to fry", "to preheat the oven", "to mix the ingredients", "to cut, to peel"],2,"„Die Zutaten mischen“ heißt „to mix the ingredients“."],
      ["mcq","Wie sagt man „den Ofen vorheizen“ auf Englisch?",["to cut, to peel", "to add salt to taste", "to let the dough rest", "to preheat the oven"],3,"„Den Ofen vorheizen“ heißt „to preheat the oven“."],
      ["fill","Completa: “Vor dem Backen muss man den Ofen auf 180 Grad ___.”",["kochen", "vorheizen", "braten", "mischen"],1,"„Den Ofen vorheizen“ ist der typische vorherige Schritt vor dem Backen."],
      ["translate","Übersetze: „Lassen Sie den Teig zehn Minuten ruhen.“",["Let the dough cut for ten minutes.", "Let the dough rest for ten minutes.", "Let the dough boil for ten minutes.", "Let the dough fry for ten minutes."],1,"„Lassen Sie den Teig ruhen“ = „Let the dough rest“."],
      ["arrange","Bringe in die richtige Reihenfolge: [Geschmack / Salz / nach / Sie / fügen / hinzu]",["Fügen Sie hinzu Salz Geschmack nach", "Salz Sie hinzu nach Fügen Geschmack", "Geschmack nach Fügen hinzu Sie Salz", "Fügen Sie Salz nach Geschmack hinzu"],3,"Imperativ + Objekt + feste Wendung „nach Geschmack“."],
      ["writing","Schreibe auf Deutsch 45-65 Wörter über die Schritte eines einfachen Rezepts, das du kannst, und benutze mindestens drei Kochverben im Imperativ.",[],["schneiden Sie", "fügen Sie hinzu", "lassen Sie ruhen"]],
    ]
  },
  {
    id:"de_b2_art_world", level:"B2", title:"Die Welt der Kunst: Malerei, Musik und Film", emoji:"🎨", xp:83,
    description:"Sprich über Kunst, Musik und Film und drücke differenzierte Meinungen auf Deutsch aus.",
    study: {
      vocab: [
        ["ein Meisterwerk", "a masterpiece"],
        ["die Inszenierung", "the staging/mise-en-scène"],
        ["eine bewegende Darbietung", "a moving performance"],
        ["der Stil eines Künstlers", "an artist's style"],
        ["einen bleibenden Eindruck hinterlassen", "to leave a lasting impression"],
        ["überbewertet/unterbewertet sein", "to be overrated/underrated"],
      ],
      grammar: [
        ["„Ich glaube nicht, dass“ + Konjunktiv II zur Abschwächung einer Meinung", "„Ich glaube nicht, dass“ kann mit Konjunktiv II oder Indikativ folgen, um eine differenzierte Meinung auszudrücken.", "Ich glaube nicht, dass dieser Film so gut ist, wie alle sagen."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „eine bewegende Darbietung“ auf Englisch?",["an artist's style", "a moving performance", "a masterpiece", "a lasting impression"],1,"„Eine bewegende Darbietung“ heißt „a moving performance“."],
      ["mcq","Wie sagt man „überbewertet sein“ auf Englisch?",["to be overrated", "to leave an impression", "to be underrated", "an artist's style"],0,"„Überbewertet sein“ heißt „to be overrated“."],
      ["fill","Completa: “Ich glaube nicht, dass dieser Film so gut ___, wie alle sagen.”",["ist", "gewesen", "war", "sein wird"],0,"Im Indikativ Präsens: „ich glaube nicht, dass...ist“."],
      ["translate","Übersetze: „Esta interpretación me dejó una impresión duradera.“",["This staging left me overrated.", "This performance left a lasting impression on me.", "This style left a lasting impression on me.", "This performance left a masterpiece on me."],1,"„Dejó una impresión duradera“ = „left a lasting impression“."],
      ["arrange","Bringe in die richtige Reihenfolge: [Meisterwerk / ein / ist / das]",["Das ist ein Meisterwerk", "Das ein ist Meisterwerk", "Meisterwerk ist Das ein", "ist ein Meisterwerk Das"],0,"Subjekt + „ist“ + Artikel + Substantiv."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter über deine Meinung zu einem Kunstwerk, Film oder Lied (real oder erfunden): was du davon hältst und warum, mit einer differenzierten Position.",[],["ich finde, dass", "ich glaube nicht, dass", "einen Eindruck"]],
    ]
  },
  {
    id:"de_c1_giving_feedback", level:"C1", title:"Konstruktive Kritik: Feedback geben und erhalten", emoji:"🗨️", xp:91,
    description:"Lerne, auf Deutsch konstruktives und professionelles Feedback zu geben und zu erhalten.",
    study: {
      vocab: [
        ["einen Verbesserungspunkt ansprechen", "to point out an area for improvement"],
        ["Stärken vor der Kritik anerkennen", "to acknowledge strengths before criticism"],
        ["Kritik konkret formulieren", "to phrase criticism in concrete terms"],
        ["offen für Feedback sein", "to be open to feedback"],
        ["Kritik persönlich nehmen", "to take criticism personally"],
        ["eine Lösung vorschlagen, nicht nur das Problem nennen", "to propose a solution, not just point out the problem"],
      ],
      grammar: [
        ["Abschwächende Formulierungen für Kritik", "Ausdrücke wie „Sie könnten vielleicht in Erwägung ziehen“ oder „ein Vorschlag wäre“ mildern Kritik ab, ohne an Klarheit zu verlieren.", "Sie könnten vielleicht in Erwägung ziehen, den Bericht umzustrukturieren; ein Vorschlag wäre, mit den Schlussfolgerungen zu beginnen."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „Kritik konkret formulieren“ auf Englisch?",["to take criticism personally", "to point out an area for improvement", "to phrase criticism in concrete terms", "to be open to feedback"],2,"„Kritik konkret formulieren“ heißt „to phrase criticism in concrete terms“."],
      ["mcq","Wie sagt man „Kritik persönlich nehmen“ auf Englisch?",["to take criticism personally", "to be open to feedback", "to propose a solution", "to acknowledge strengths"],0,"„Kritik persönlich nehmen“ heißt „to take criticism personally“."],
      ["fill","Completa: “Bevor man Kritik übt, ist es eine gute Idee, die Stärken der Arbeit ___.”",["zu kritisieren", "zu verstecken", "anzuerkennen", "zu ignorieren"],2,"„Stärken vor der Kritik anerkennen“ sorgt dafür, dass das Feedback besser angenommen wird."],
      ["translate","Übersetze: „Ein Vorschlag wäre, mit den Schlussfolgerungen zu beginnen.“",["One criticism would be to start with the conclusions.", "One suggestion would be to finish with the conclusions.", "One problem would be to start with the conclusions.", "One suggestion would be to start with the conclusions."],3,"„Ein Vorschlag wäre“ = „One suggestion would be to“."],
      ["arrange","Bringe in die richtige Reihenfolge: [Problem / schlage / nur / das / eine Lösung / nicht / nenne / vor]",["Nenne nicht nur das Problem, schlage eine Lösung vor", "nur eine das Nenne Lösung nicht vor Problem, schlage", "nicht Lösung schlage Problem, vor das eine nur Nenne", "nicht das Problem, Nenne Lösung eine schlage vor nur"],0,"Kontraststruktur: „nicht nur... [Verb]“ + „[Verb]... eine Lösung“."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter mit konstruktivem Feedback zu einer Arbeit (real oder erfunden): erkenne eine Stärke an, nenne einen konkreten Verbesserungspunkt und schlage eine Lösung vor.",[],["ich erkenne an, dass", "Sie könnten vielleicht", "ein Vorschlag wäre"]],
    ]
  },
  {
    id:"de_c2_inclusive_language", level:"C2", title:"Inklusive Sprache und der Wandel der Sprache", emoji:"🌐", xp:99,
    description:"Analysiere die Debatte um inklusive Sprache und wie sich Sprachen mit der Gesellschaft entwickeln.",
    study: {
      vocab: [
        ["inklusive Sprache", "inclusive language"],
        ["eine lebendige Sprache entwickelt sich durch den Gebrauch", "a living language evolves with use"],
        ["Präskriptivismus versus Deskriptivismus", "prescriptivism versus descriptivism"],
        ["ein Neologismus wird ins Wörterbuch aufgenommen", "a neologism is added to the dictionary"],
        ["Widerstand gegen einen Sprachwandel erzeugen", "to generate resistance to a linguistic change"],
        ["ein Argument impliziert nicht zwangsläufig eine politische Haltung", "an argument doesn't necessarily imply a political stance"],
      ],
      grammar: [
        ["Eine sprachliche Debatte ohne Voreingenommenheit darstellen", "Eine rigorose Analyse trennt die Beschreibung des Phänomens (wie sich die Sprache verändert) von der persönlichen Bewertung (ob der Wandel übernommen werden sollte).", "Aus deskriptivistischer Sicht wird der Wandel ohne Urteil dokumentiert; aus präskriptivistischer Sicht wird bewertet, ob er standardisiert werden sollte."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „Präskriptivismus versus Deskriptivismus“ auf Englisch?",["inclusive language", "linguistic change", "a neologism", "prescriptivism versus descriptivism"],3,"„Präskriptivismus versus Deskriptivismus“ heißt „prescriptivism versus descriptivism“."],
      ["mcq","Wie sagt man „ein Neologismus wird ins Wörterbuch aufgenommen“ auf Englisch?",["a living language evolves with use", "inclusive language", "to generate resistance", "a neologism is added to the dictionary"],3,"„Ein Neologismus wird ins Wörterbuch aufgenommen“ heißt „a neologism is added to the dictionary“."],
      ["fill","Completa: “Der Deskriptivismus konzentriert sich darauf zu dokumentieren, wie Menschen tatsächlich sprechen, nicht darauf, wie sie sprechen ___.”",["sollten", "können", "pflegen", "wollen"],0,"Der Deskriptivismus beschreibt den tatsächlichen Gebrauch, ohne Normen darüber zu diktieren, wie man „sollte“ sprechen."],
      ["translate","Übersetze mit Präzision: „Eine lebendige Sprache entwickelt sich durch den Gebrauch, ob es uns gefällt oder nicht.“",["A living language evolves with use, whether we like it or not.", "A dead language evolves with use, whether we like it or not.", "A living language evolves with use, even if it doesn't change.", "A living language evolves without use, whether we like it or not."],0,"„Ob es uns gefällt oder nicht“ wird idiomatisch als „whether we like it or not“ übersetzt."],
      ["arrange","Bringe in die richtige Reihenfolge: [zwangsläufig / impliziert / eine politische / nicht / Haltung / ein Argument]",["Ein Argument impliziert nicht zwangsläufig eine politische Haltung", "zwangsläufig impliziert Argument Haltung politische eine Ein nicht", "nicht Argument Haltung impliziert politische Ein zwangsläufig eine", "Ein eine Haltung Argument impliziert politische nicht zwangsläufig"],0,"Subjekt + Verneinung + „impliziert zwangsläufig“ + Objekt."],
      ["writing","Schreibe auf Deutsch 55-75 Wörter, die zwei Positionen zu einem aktuellen Sprachwandel (real oder erfunden) ausgewogen darstellen, ohne explizit Partei zu ergreifen, und unterscheide dabei Beschreibung von Bewertung.",[],["einerseits", "andererseits", "ohne zwangsläufig"]],
    ]
  },
  {
    id:"de_a1_neighborhood_city", level:"A1", title:"Das Viertel und die Stadt", emoji:"🏙️", xp:38,
    description:"Lerne den Wortschatz für Orte im Viertel und wie man auf Deutsch sagt, wo sie sind.",
    study: {
      vocab: [
        ["die Bank", "the bank"],
        ["der Supermarkt", "the supermarket"],
        ["der Park", "the park"],
        ["die Apotheke", "the pharmacy"],
        ["die Bibliothek", "the library"],
        ["die Bushaltestelle", "the bus stop"],
        ["in der Nähe von, weit weg von, neben", "near, far from, next to"],
      ],
      grammar: [
        ["„Es gibt“ + Ortspräpositionen", "„Es gibt“ (there is/are) drückt aus, dass etwas an einem Ort existiert; es folgt immer der Akkusativ. Ortspräpositionen zeigen, wo sich etwas befindet.", "Es gibt eine Apotheke in der Nähe des Parks. / Die Bibliothek ist neben der Bank."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Apotheke“ auf Englisch?",["the supermarket", "the bank", "the pharmacy", "the park"],2,"„Apotheke“ heißt auf Englisch „pharmacy“."],
      ["mcq","Wie sagt man „die Bushaltestelle“ auf Englisch?",["the bank", "the park", "the bus stop", "the library"],2,"„Bushaltestelle“ heißt auf Englisch „bus stop“."],
      ["fill","Completa: “In meinem Viertel ___ es eine sehr große Bibliothek.”",["hat", "sein", "ist", "gibt"],3,"„Es gibt“ drückt aus, dass etwas existiert, mit Akkusativ: „es gibt eine Bibliothek“."],
      ["translate","Übersetze: „The pharmacy is next to the park.“",["Die Apotheke ist weit weg vom Park.", "Die Bank ist neben dem Park.", "Die Apotheke ist in der Nähe der Bibliothek.", "Die Apotheke ist neben dem Park."],3,"„Next to“ = „neben“; Subjekt und Ort müssen dem Original entsprechen."],
      ["arrange","Bring in die richtige Reihenfolge: [Supermarkt / weit / der / nicht / ist]",["Der Supermarkt ist nicht weit", "Supermarkt weit nicht Der ist", "Supermarkt nicht ist Der weit", "ist Supermarkt nicht weit Der"],0,"Subjekt + Verb + Negation + Ortsadverb."],
      ["writing","Beschreibe in 20-30 Wörtern dein Viertel: welche Orte es gibt und wo sie sind (benutze „es gibt“, „in der Nähe von“ und „weit weg von“).",[],["es gibt", "in der Nähe von", "weit weg von"]],
    ]
  },
  {
    id:"de_a2_celebrations_holidays", level:"A2", title:"Feste und Feiern", emoji:"🎉", xp:48,
    description:"Lerne Wortschatz zu Festen und wie man mit „pflegen zu“ über Gewohnheiten spricht.",
    study: {
      vocab: [
        ["der Geburtstag", "the birthday"],
        ["die Hochzeit", "the wedding"],
        ["Weihnachten", "Christmas"],
        ["das Neujahr", "New Year"],
        ["feiern", "to celebrate"],
        ["ein Geschenk machen", "to give a gift"],
      ],
      grammar: [
        ["Gewohnheiten mit „normalerweise“ + Präsens ausdrücken", "Im Deutschen drückt man Gewohnheiten meist mit einem Adverb wie „normalerweise“ oder „gewöhnlich“ plus Präsens aus, statt mit einem eigenen Modalverb.", "Wir feiern Weihnachten normalerweise mit der ganzen Familie. / Als Kind habe ich meinen Geburtstag gewöhnlich im Park gefeiert."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „ein Geschenk machen“ auf Englisch?",["to give a gift", "Christmas", "New Year", "the wedding"],0,"„Ein Geschenk machen“ heißt auf Englisch „to give a gift“."],
      ["mcq","Wie sagt man „die Hochzeit“ auf Englisch?",["New Year", "Christmas", "to celebrate", "the wedding"],3,"„Hochzeit“ heißt auf Englisch „wedding“."],
      ["fill","Completa: “Jedes Neujahr feiern wir ___ mit der ganzen Familie.”",["kaum", "schon", "einmal", "normalerweise"],3,"„Normalerweise“ + Präsens drückt eine gewohnheitsmäßige Handlung aus."],
      ["translate","Übersetze: „We usually give gifts at Christmas.“",["Wir machen ein Geschenk an Weihnachten.", "Wir feiern normalerweise Geschenke an Weihnachten.", "Wir machen normalerweise Geschenke am Geburtstag.", "Wir machen normalerweise Geschenke an Weihnachten."],3,"„We usually give gifts“ = „Wir machen normalerweise Geschenke“, mit Adverb + Präsens."],
      ["arrange","Bring in die richtige Reihenfolge: [Geburtstag / ich / meinen / feiere / mit Freunden]",["feiere Geburtstag meinen mit Ich Freunden", "feiere Geburtstag Ich meinen Freunden mit", "feiere mit Ich Freunden meinen Geburtstag", "Ich feiere meinen Geburtstag mit Freunden"],3,"Subjekt + Verb + Possessivobjekt + Präposition + Ergänzung."],
      ["speaking","Beschreibe in 40-60 Wörtern, wie du normalerweise ein wichtiges Fest feierst (Geburtstag, Weihnachten, Neujahr o.a.), und benutze „normalerweise“.",[],["normalerweise", "ich feiere", "mit"]],
    ]
  },
  {
    id:"de_b1_relationships_friendship", level:"B1", title:"Persönliche Beziehungen und Freundschaft", emoji:"🤝", xp:62,
    description:"Lerne Wortschatz zu Freundschaft und wie man mit „sollte“ und „müssen“ Ratschläge gibt.",
    study: {
      vocab: [
        ["jemandem vertrauen", "to trust someone"],
        ["mit jemandem gut/schlecht auskommen", "to get along well/badly with someone"],
        ["etwas gemeinsam haben", "to have something in common"],
        ["in Kontakt bleiben", "to keep in touch"],
        ["ein vertrauenswürdiger Freund / eine vertrauenswürdige Freundin", "a close/trustworthy friend"],
        ["sich nach einem Streit versöhnen", "to make up after an argument"],
      ],
      grammar: [
        ["Ratschläge mit „sollte“ und „müssen“", "„Sollte“ (Konjunktiv II von „sollen“) gibt einen sanften Ratschlag; „müssen“ drückt eine stärkere Verpflichtung aus.", "Du solltest mit deinen Freunden in Kontakt bleiben. / Ihr müsst euch versöhnen, wenn ihr Freunde bleiben wollt."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „mit jemandem gut auskommen“ auf Englisch?",["a close/trustworthy friend", "to make up after an argument", "to trust someone", "to get along well/badly with someone"],3,"„Mit jemandem gut auskommen“ heißt auf Englisch „to get along well with someone“."],
      ["mcq","Wie sagt man „sich nach einem Streit versöhnen“ auf Englisch?",["to make up after an argument", "a close/trustworthy friend", "to keep in touch", "to get along well/badly with someone"],0,"„Sich nach einem Streit versöhnen“ heißt auf Englisch „to make up after an argument“."],
      ["fill","Completa: “Wenn du diese Freundschaft behalten willst, ___ du in Kontakt bleiben.”",["musstest", "sollst", "wirst", "solltest"],3,"„Solltest“ (Konjunktiv II von „sollen“) gibt einen sanften Ratschlag in der zweiten Person."],
      ["translate","Übersetze: „You have to trust your friends.“",["Du musst mit deinen Freunden gut auskommen.", "Du musst deiner Familie vertrauen.", "Du musst deinen Freunden vertrauen.", "Du solltest deinen Freunden vertrauen."],2,"„You have to trust“ = „Du musst vertrauen“, mit „müssen“ + Infinitiv."],
      ["arrange","Bring in die richtige Reihenfolge: [gemeinsam / viel / wir / haben]",["Wir viel haben gemeinsam", "gemeinsam haben Wir viel", "Wir haben viel gemeinsam", "gemeinsam viel Wir haben"],2,"Subjekt + Verb + Quantifikator + Adverb „gemeinsam“."],
      ["writing","Schreibe 45-65 Wörter über eine wichtige Freundschaft für dich: was ihr gemeinsam habt und welchen Ratschlag du jemandem geben würdest, der so eine Freundschaft bewahren möchte.",[],["wir haben gemeinsam", "du solltest", "vertrauen"]],
    ]
  },
  {
    id:"de_b2_remote_work_balance", level:"B2", title:"Homeoffice und Work-Life-Balance", emoji:"💻", xp:84,
    description:"Sprich über Homeoffice und Work-Life-Balance mit Partizipialkonstruktionen auf Deutsch.",
    study: {
      vocab: [
        ["im Homeoffice arbeiten", "to work remotely"],
        ["flexible Arbeitszeiten", "flexible working hours"],
        ["die digitale Abschaltung", "digital disconnection"],
        ["das Burnout", "burnout"],
        ["Berufs- und Privatleben vereinbaren", "to balance work and personal life"],
        ["produktiv sein", "to be productive"],
      ],
      grammar: [
        ["Das Partizip I für Gleichzeitigkeit oder Ursache", "Das Partizip I (Verbstamm + -end) kann als Adverbialkonstruktion eine gleichzeitige Handlung oder deren Ursache ausdrücken, ähnlich einem Gerundium.", "Von zu Hause arbeitend, spart man Fahrzeit. / Ständig arbeitend ohne abzuschalten, erleiden viele ein Burnout."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die digitale Abschaltung“ auf Englisch?",["burnout", "to work remotely", "to balance work and personal life", "digital disconnection"],3,"„Digitale Abschaltung“ heißt auf Englisch „digital disconnection“."],
      ["mcq","Wie sagt man „Berufs- und Privatleben vereinbaren“ auf Englisch?",["flexible working hours", "to balance work and personal life", "burnout", "digital disconnection"],1,"„Berufs- und Privatleben vereinbaren“ heißt auf Englisch „to balance work and personal life“."],
      ["fill","Completa: “Von zu Hause ___ , schaffen es viele Menschen, Berufs- und Privatleben besser zu vereinbaren.”",["gearbeitet", "Arbeit", "arbeiten", "arbeitend"],3,"Das Partizip I („arbeitend“) drückt den Umstand aus, der das folgende Ergebnis ermöglicht."],
      ["translate","Übersetze: „Working without disconnecting can lead to burnout.“",["Mit flexiblen Arbeitszeiten arbeitend, kann man ein Burnout erleiden.", "Vom Arbeiten abschaltend, kann man ein Burnout erleiden.", "Ohne abzuschalten zu arbeiten kann ein Burnout vermeiden.", "Ohne abzuschalten arbeitend, kann man ein Burnout erleiden."],3,"Das Partizip I „ohne abzuschalten arbeitend“ drückt die Ursache des Burnouts aus."],
      ["arrange","Bring in die richtige Reihenfolge: [Arbeitszeiten / schätzen / flexible / viele]",["Viele Arbeitszeiten flexible schätzen", "Viele schätzen flexible Arbeitszeiten", "schätzen flexible Viele Arbeitszeiten", "Arbeitszeiten flexible Viele schätzen"],1,"Subjekt + Verb + Adjektiv + Substantiv."],
      ["writing","Schreibe 55-75 Wörter über die Vor- und Nachteile von Homeoffice für die Work-Life-Balance und benutze mindestens eine Partizipialkonstruktion für Gleichzeitigkeit oder Ursache.",[],["arbeitend", "vereinbaren", "jedoch"]],
    ]
  },
  {
    id:"de_c1_negotiation_conflict", level:"C1", title:"Verhandlung und Konfliktlösung", emoji:"🤝", xp:92,
    description:"Lerne zu verhandeln und Vorschläge im formellen Register mit dem Konjunktiv II abzuschwächen.",
    study: {
      vocab: [
        ["eine Einigung erzielen", "to reach an agreement"],
        ["Zugeständnisse machen", "to give ground/make concessions"],
        ["eine Sackgasse", "a deadlock/stalemate"],
        ["eine kompromisslose Haltung", "an inflexible/uncompromising stance"],
        ["einen Mittelweg suchen", "to look for a middle ground"],
        ["das Eis brechen", "to break the ice"],
      ],
      grammar: [
        ["Der Konjunktiv II zur Abschwächung von Vorschlägen", "Der Konjunktiv II (würde/wäre) schwächt Bitten und Vorschläge in Verhandlungen ab und wirkt höflicher und flexibler.", "Wären Sie bereit, an diesem Punkt Zugeständnisse zu machen? / Es wäre besser, einen Mittelweg zu suchen, bevor man in eine Sackgasse gerät."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „eine Sackgasse“ auf Englisch?",["to break the ice", "to give ground/make concessions", "an inflexible/uncompromising stance", "a deadlock/stalemate"],3,"„Eine Sackgasse“ heißt auf Englisch „a deadlock“ oder „stalemate“."],
      ["mcq","Wie sagt man „eine kompromisslose Haltung“ auf Englisch?",["to reach an agreement", "a deadlock/stalemate", "an inflexible/uncompromising stance", "to give ground/make concessions"],2,"„Eine kompromisslose Haltung“ heißt auf Englisch „an inflexible/uncompromising stance“."],
      ["fill","Completa: “Es ___ besser, einen Mittelweg zu suchen, bevor man in eine Sackgasse gerät.”",["ist", "war", "wäre", "wird"],2,"Der Konjunktiv II „wäre“ schwächt die Aussage ab, typisch für das formelle Verhandlungsregister."],
      ["translate","Übersetze im formellen Register: „Would you be willing to make concessions on this point?“",["Wären Sie bereit, an diesem Punkt Zugeständnisse zu machen?", "Sind Sie bereit, an diesem Punkt Zugeständnisse zu machen?", "Wären Sie bereit, an diesem Punkt das Eis zu brechen?", "Wären Sie bereit, an diesem Punkt eine Einigung zu erzielen?"],0,"Der Konjunktiv II „wären Sie bereit“ schwächt die Frage ab, formeller als das Präsens „sind Sie bereit“."],
      ["arrange","Bring in die richtige Reihenfolge: [schwierig / eine / wird / Einigung / es / sein / zu erzielen]",["eine schwierig zu sein wird erzielen Es Einigung", "wird zu erzielen Einigung schwierig sein eine Es", "Es wird schwierig sein eine Einigung zu erzielen", "erzielen Einigung eine schwierig sein zu wird Es"],2,"Futur + Adjektiv + Infinitivkonstruktion + Ergänzung."],
      ["writing","Schreibe 55-75 Wörter über eine (reale oder erfundene) Verhandlung, bei der beide Seiten Zugeständnisse machten, um eine Sackgasse zu vermeiden, und benutze mindestens zwei höfliche Konjunktiv-II-Formen.",[],["wäre", "wären Sie bereit", "Mittelweg"]],
    ]
  },
  {
    id:"de_c2_corporate_euphemism", level:"C2", title:"Unternehmenssprache und Euphemismus", emoji:"🏢", xp:100,
    description:"Analysiere Euphemismen in der Unternehmenssprache und übe Umformulierungskonnektoren.",
    study: {
      vocab: [
        ["ein Euphemismus", "a euphemism"],
        ["der Unternehmensjargon", "corporate jargon"],
        ["eine Umstrukturierung (Euphemismus für Entlassungen)", "a restructuring (euphemism for layoffs)"],
        ["die Wirkung einer Nachricht abmildern", "to soften the impact of a message"],
        ["ein unnötiger Anglizismus", "an unnecessary anglicism"],
        ["jemandes Verantwortung verwässern", "to dilute someone's responsibility"],
      ],
      grammar: [
        ["Umformulierungskonnektoren", "Ausdrücke wie „das heißt“, „mit anderen Worten“ oder „anders gesagt“ formulieren eine Idee um, oft um sie abzumildern oder zu präzisieren — entscheidend, um Euphemismen zu erkennen.", "Das Unternehmen kündigte eine „Umstrukturierung“ an, das heißt Entlassungen. / Mit anderen Worten: Sie werden die Belegschaft verkleinern."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „jemandes Verantwortung verwässern“ auf Englisch?",["to dilute someone's responsibility", "a euphemism", "an unnecessary anglicism", "a restructuring (euphemism for layoffs)"],0,"„Jemandes Verantwortung verwässern“ heißt auf Englisch „to dilute someone's responsibility“."],
      ["mcq","Wie sagt man „eine Umstrukturierung (Euphemismus für Entlassungen)“ auf Englisch?",["a euphemism", "a restructuring (euphemism for layoffs)", "to dilute someone's responsibility", "an unnecessary anglicism"],1,"„Umstrukturierung“ heißt auf Englisch „restructuring“, üblicher Euphemismus für „layoffs“ (Entlassungen)."],
      ["fill","Completa: “Das Unternehmen spricht von „Ressourcenoptimierung“, ___ von Entlassungen.”",["allerdings", "zum Beispiel", "das heißt", "obwohl"],2,"„Das heißt“ formuliert den euphemistischen Ausdruck mit seiner wörtlichen Bedeutung um."],
      ["translate","Übersetze präzise: „Corporate jargon often softens the impact of bad news.“",["Ein Euphemismus mildert oft die Wirkung schlechter Nachrichten ab.", "Unternehmensjargon vermeidet oft die Wirkung schlechter Nachrichten.", "Unternehmensjargon verwässert oft die Wirkung schlechter Nachrichten.", "Unternehmensjargon mildert oft die Wirkung schlechter Nachrichten ab."],3,"„Softens the impact“ = „mildert die Wirkung ab“; das Subjekt muss „Unternehmensjargon“ sein."],
      ["arrange","Bring in die richtige Reihenfolge: [Entlassungen / Euphemismus / Umstrukturierung / ein / für / ist]",["Euphemismus ein Entlassungen ist für Umstrukturierung", "Umstrukturierung ist ein Euphemismus für Entlassungen", "Umstrukturierung Entlassungen ist für ein Euphemismus", "Euphemismus Umstrukturierung Entlassungen ein ist für"],1,"Subjekt + Verb + Artikel + Substantiv + Präposition + Ergänzung."],
      ["writing","Schreibe 55-75 Wörter über einen realen oder erfundenen Unternehmenseuphemismus: was er verbirgt, warum er benutzt wird und wie du ihn klarer umformulieren würdest, mit mindestens einem Umformulierungskonnektor.",[],["das heißt", "Euphemismus", "mit anderen Worten"]],
    ]
  },
  {
    id:"de_a1_airport_hotel", level:"A1", title:"Am Flughafen und im Hotel", emoji:"✈️", xp:38,
    description:"Lerne Reisevokabular und wie man mit „werden“ + Infinitiv über nahe Pläne spricht.",
    study: {
      vocab: [
        ["der Reisepass", "the passport"],
        ["der Koffer", "the suitcase"],
        ["der Flug", "the flight"],
        ["das Zimmer", "the room"],
        ["die Reservierung", "the booking"],
        ["das Gepäck einchecken", "to check in luggage"],
      ],
      grammar: [
        ["„Werden“ + Infinitiv für nahe Zukunft", "Im Alltag drückt man nahe Pläne oft mit Präsens + Zeitangabe aus, aber „werden“ + Infinitiv betont die Absicht.", "Ich werde das Gepäck einchecken. / Wir werden für Freitag ein Zimmer reservieren."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „der Reisepass“ auf Englisch?",["the suitcase", "to check in luggage", "the flight", "the passport"],3,"„Reisepass“ heißt auf Englisch „passport“."],
      ["mcq","Wie sagt man „das Gepäck einchecken“ auf Englisch?",["the room", "to check in luggage", "the flight", "the booking"],1,"„Das Gepäck einchecken“ heißt auf Englisch „to check in luggage“."],
      ["fill","Completa: “Morgen ___ ich das Gepäck sehr früh einchecken.”",["werde", "wurde", "werden", "bin"],0,"„Werden“ + Infinitiv: „ich werde einchecken“, „werden“ wird nach dem Subjekt konjugiert."],
      ["translate","Übersetze: „We are going to book a room for Friday.“",["Wir werden für Freitag ein Zimmer einchecken.", "Wir werden für Freitag ein Zimmer reservieren.", "Wir werden für Montag ein Zimmer reservieren.", "Wir werden für Freitag einen Flug reservieren."],1,"„We are going to book“ = „Wir werden reservieren“, mit „werden“ + Infinitiv."],
      ["arrange","Bring in die richtige Reihenfolge: [Reisepass / werde / meinen / suchen / ich]",["werde meinen suchen Reisepass Ich", "Reisepass suchen Ich werde meinen", "Reisepass Ich werde meinen suchen", "Ich werde meinen Reisepass suchen"],3,"Subjekt + „werden“ + Possessivobjekt + Infinitiv."],
      ["writing","Beschreibe in 20-30 Wörtern deine Reisepläne: was du tun wirst (Gepäck einchecken, Zimmer reservieren usw.) und benutze „werden“ + Infinitiv.",[],["ich werde", "wir werden", "reservieren"]],
    ]
  },
  {
    id:"de_a2_everyday_tech", level:"A2", title:"Die Technik des Alltags", emoji:"📱", xp:48,
    description:"Lerne alltägliches Technik-Vokabular und wie man mit „so...wie“ und „...er als“ vergleicht.",
    study: {
      vocab: [
        ["das WLAN", "the wifi"],
        ["das Passwort", "the password"],
        ["die App", "the app"],
        ["das Handy aufladen", "to charge the phone"],
        ["herunterladen", "to download"],
        ["der Akku", "the battery"],
      ],
      grammar: [
        ["Vergleiche mit „so...wie“ und dem Komparativ „...er als“", "„So + Adjektiv + wie“ vergleicht gleiche Eigenschaften; der Komparativ (Adjektiv + „-er“) + „als“ vergleicht eine Überlegenheit.", "Diese App ist so schnell wie die andere. / Mein Akku hält länger als deiner."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „das Passwort“ auf Englisch?",["the wifi", "to download", "the battery", "the password"],3,"„Passwort“ heißt auf Englisch „password“."],
      ["mcq","Wie sagt man „herunterladen“ auf Englisch?",["to charge the phone", "to download", "the app", "the battery"],1,"„Herunterladen“ heißt auf Englisch „download“."],
      ["fill","Completa: “Diese App ist ___ schnell wie die andere.”",["mehr", "weniger", "sehr", "so"],3,"„So + Adjektiv + wie“ vergleicht zwei Dinge mit der gleichen Eigenschaft."],
      ["translate","Übersetze: „My battery lasts longer than yours.“",["Mein Akku hält so lang wie deiner.", "Mein WLAN hält länger als deiner.", "Mein Akku hält kürzer als deiner.", "Mein Akku hält länger als deiner."],3,"„Lasts longer than“ = „hält länger als“, Komparativ der Überlegenheit."],
      ["arrange","Bring in die richtige Reihenfolge: [Passwort / brauche / ein / sichereres / ich]",["brauche ein Ich Passwort sichereres", "Ich brauche ein sichereres Passwort", "sichereres Ich brauche ein Passwort", "brauche Ich ein Passwort sichereres"],1,"Subjekt + Verb + Artikel + Komparativ + Substantiv."],
      ["speaking","Beschreibe in 40-60 Wörtern, wie du Technik im Alltag nutzt, und vergleiche zwei Apps oder Geräte mit „so...wie“ oder dem Komparativ „...er als“.",[],["so...wie", "...er als", "App"]],
    ]
  },
  {
    id:"de_b1_digital_entertainment", level:"B1", title:"Digitale Unterhaltung: Serien und Videospiele", emoji:"🎮", xp:62,
    description:"Lerne Vokabular zu digitaler Unterhaltung und wie man mit „schon seit“ Dauer ausdrückt.",
    study: {
      vocab: [
        ["die Serie", "the series/show"],
        ["das Videospiel", "the video game"],
        ["die Streaming-Plattform", "the streaming platform"],
        ["von etwas süchtig werden", "to get hooked on something"],
        ["das Serienmarathon", "binge-watching"],
        ["die Untertitel", "the subtitles"],
      ],
      grammar: [
        ["„Schon seit“ + Präsens für die Dauer", "„Schon seit“ + Zeitangabe + Präsens drückt aus, wie lange eine Handlung schon andauert, ähnlich wie „to have been doing something“.", "Ich schaue diese Serie schon seit zwei Stunden. / Wir spielen schon seit dem ganzen Wochenende Videospiele."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „von etwas süchtig werden“ auf Englisch?",["the video game", "the streaming platform", "binge-watching", "to get hooked on something"],3,"„Von etwas süchtig werden“ heißt auf Englisch „to get hooked on something“."],
      ["mcq","Wie sagt man „das Serienmarathon“ auf Englisch?",["the series/show", "the subtitles", "to get hooked on something", "binge-watching"],3,"„Serienmarathon“ heißt auf Englisch „binge-watching“."],
      ["fill","Completa: “Ich schaue diese Serie ___ zwei Stunden ohne Pause.”",["habe seit", "vor", "schon seit", "bin seit"],2,"„Schon seit“ + Präsens drückt die Dauer einer andauernden Handlung aus: „ich schaue schon seit zwei Stunden“."],
      ["translate","Übersetze: „We have been playing video games all weekend.“",["Wir schauen schon seit dem ganzen Wochenende Videospiele.", "Wir spielen schon seit dem ganzen Wochenende Serien.", "Wir haben das ganze Wochenende Videospiele gespielt.", "Wir spielen schon seit dem ganzen Wochenende Videospiele."],3,"„Have been playing all weekend“ = „Wir spielen schon seit dem ganzen Wochenende“, mit „schon seit“ + Präsens."],
      ["arrange","Bring in die richtige Reihenfolge: [süchtig / bin / ich / geworden / nach dieser Serie]",["Serie dieser geworden bin süchtig Ich nach", "Ich bin süchtig geworden nach dieser Serie", "bin Ich dieser geworden süchtig Serie nach", "Serie geworden bin süchtig dieser nach Ich"],1,"Subjekt + Verb + Adjektiv + Partizip + Präposition + Ergänzung."],
      ["writing","Schreibe 45-65 Wörter über eine Serie oder ein Videospiel, nach dem du süchtig geworden bist, und benutze „schon seit“, um zu sagen, wie lange schon.",[],["schon seit", "süchtig", "Plattform"]],
    ]
  },
  {
    id:"de_b2_cybersecurity_privacy", level:"B2", title:"Cybersicherheit und Online-Privatsphäre", emoji:"🔒", xp:84,
    description:"Sprich über Cybersicherheit mit bestimmenden und erläuternden Relativsätzen.",
    study: {
      vocab: [
        ["die Cybersicherheit", "cybersecurity"],
        ["ein System hacken", "to hack a system"],
        ["die personenbezogenen Daten", "personal data"],
        ["ein sicheres Passwort", "a strong password"],
        ["der Identitätsdiebstahl", "identity theft/phishing"],
        ["Informationen verschlüsseln", "to encrypt information"],
      ],
      grammar: [
        ["Bestimmende und erläuternde Relativsätze", "Bestimmende Relativsätze (ohne Komma-Pause im Sinn) grenzen ein und sind notwendig; erläuternde Relativsätze (mit Kommas, zusätzliche Info) fügen extra Information hinzu und können weggelassen werden.", "Die Daten, die wir online teilen, können gehackt werden. (bestimmend) / Meine Daten, die ich kaum teile, sind gut geschützt. (erläuternd)"],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „der Identitätsdiebstahl“ auf Englisch?",["to encrypt information", "to hack a system", "identity theft/phishing", "a strong password"],2,"„Identitätsdiebstahl“ heißt auf Englisch „identity theft“ oder „phishing“."],
      ["mcq","Wie sagt man „Informationen verschlüsseln“ auf Englisch?",["cybersecurity", "to encrypt information", "a strong password", "personal data"],1,"„Informationen verschlüsseln“ heißt auf Englisch „to encrypt information“."],
      ["fill","Completa: “Die Daten, ___ wir online teilen, können gehackt werden.”",["was", "deren", "wer", "die"],3,"Der Relativsatz benutzt „die“ (Plural, Akkusativ) um zu bestimmen, von welchen Daten die Rede ist."],
      ["translate","Übersetze: „My data, which I rarely share, is well protected.“",["Meine Daten die ich kaum teile sind gut geschützt.", "Meine Daten, die ich kaum hacke, sind gut geschützt.", "Meine Daten, die ich kaum teile, sind gut geschützt.", "Meine Daten, die ich kaum teile, sind schlecht geschützt."],2,"Die Kommas markieren einen erläuternden Relativsatz: „meine Daten, die ich kaum teile,“ fügt zusätzliche Information hinzu."],
      ["arrange","Bring in die richtige Reihenfolge: [Passwort / brauchst / ein / sicheres / du]",["sicheres brauchst ein Du Passwort", "Du brauchst ein sicheres Passwort", "Passwort ein sicheres brauchst Du", "Passwort Du ein sicheres brauchst"],1,"Subjekt + Verb + Artikel + Adjektiv + Substantiv."],
      ["writing","Schreibe 55-75 Wörter darüber, wie du deine persönlichen Daten online schützt, und benutze mindestens einen bestimmenden und einen erläuternden Relativsatz.",[],["die", "der/die/das", "personenbezogene Daten"]],
    ]
  },
  {
    id:"de_c1_historical_memory_heritage", level:"C1", title:"Das kollektive Gedächtnis und das Kulturerbe", emoji:"🏛️", xp:92,
    description:"Analysiere das kollektive Gedächtnis und Kulturerbe mit „sein“ + Partizip II für resultierende Zustände.",
    study: {
      vocab: [
        ["das Kulturerbe", "cultural heritage"],
        ["das historische Gedächtnis bewahren", "to preserve historical memory"],
        ["ein Gedenkdenkmal", "a memorial"],
        ["das Vermächtnis", "the legacy"],
        ["die Geschichte umschreiben", "to rewrite history"],
        ["die kollektive Identität", "collective identity"],
      ],
      grammar: [
        ["„Sein“ + Partizip II für den resultierenden Zustand", "„Sein“ + Partizip II beschreibt den resultierenden Zustand einer vergangenen Handlung, im Unterschied zum Vorgangspassiv mit „werden“.", "Das Denkmal ist den Opfern gewidmet. / Die Geschichte ist von inneren Konflikten geprägt."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „das Vermächtnis“ auf Englisch?",["to preserve historical memory", "the legacy", "collective identity", "a memorial"],1,"„Vermächtnis“ heißt auf Englisch „legacy“."],
      ["mcq","Wie sagt man „die Geschichte umschreiben“ auf Englisch?",["cultural heritage", "to preserve historical memory", "to rewrite history", "the legacy"],2,"„Die Geschichte umschreiben“ heißt auf Englisch „to rewrite history“."],
      ["fill","Completa: “Das Denkmal ___ den Opfern des Konflikts gewidmet.”",["wird", "war", "sei", "ist"],3,"„Sein“ + Partizip II beschreibt den resultierenden Zustand: „das Denkmal ist gewidmet“."],
      ["translate","Übersetze: „Collective identity is often shaped by historical memory.“",["Die kollektive Identität wird oft vom historischen Gedächtnis geprägt.", "Die kollektive Identität ist oft vom historischen Gedächtnis geprägt.", "Das Kulturerbe ist oft vom historischen Gedächtnis geprägt.", "Die kollektive Identität ist oft vom Vermächtnis geprägt."],1,"„Is shaped by“ als resultierender Zustand wird mit „ist geprägt von“ übersetzt."],
      ["arrange","Bring in die richtige Reihenfolge: [Kulturerbe / bewahren / das / müssen / wir]",["Wir müssen das Kulturerbe bewahren", "bewahren das Kulturerbe müssen Wir", "das bewahren müssen Kulturerbe Wir", "bewahren das Wir müssen Kulturerbe"],0,"Subjekt + Modalverb + Artikel + Substantiv + Infinitiv."],
      ["writing","Schreibe 55-75 Wörter über ein Denkmal oder eine Tradition, die das historische Gedächtnis deiner Gemeinschaft bewahrt, und benutze mindestens zwei „sein + Partizip II“-Konstruktionen.",[],["ist gewidmet", "ist geprägt", "Kulturerbe"]],
    ]
  },
  {
    id:"de_c2_institutional_ambiguity", level:"C2", title:"Kalkulierte Ambiguität im institutionellen Diskurs", emoji:"🏛️", xp:100,
    description:"Analysiere institutionelle Ambiguität und übe epistemische Abschwächungskonnektoren.",
    study: {
      vocab: [
        ["die kalkulierte Ambiguität", "calculated ambiguity"],
        ["eine institutionelle Erklärung", "an institutional statement"],
        ["sich nicht festlegen wollen", "to avoid committing oneself"],
        ["die bewusste Vagheit", "deliberate vagueness"],
        ["zwischen den Zeilen lesen", "to read between the lines"],
        ["eine ausweichende Sprache", "evasive language"],
      ],
      grammar: [
        ["Epistemische Abschwächungskonnektoren", "Ausdrücke wie „es sei betont, dass“, „es besteht kein Zweifel, dass“ oder „in gewisser Weise“ nuancieren den Grad der Gewissheit oder Relevanz einer Aussage, typisch für institutionellen Diskurs.", "Es sei betont, dass sich die Erklärung nicht auf konkrete Termine festlegt. / In gewisser Weise ist die Vagheit bewusst."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „zwischen den Zeilen lesen“ auf Englisch?",["to avoid committing oneself", "calculated ambiguity", "to read between the lines", "deliberate vagueness"],2,"„Zwischen den Zeilen lesen“ heißt auf Englisch „to read between the lines“."],
      ["mcq","Wie sagt man „eine ausweichende Sprache“ auf Englisch?",["evasive language", "to read between the lines", "calculated ambiguity", "to avoid committing oneself"],0,"„Eine ausweichende Sprache“ heißt auf Englisch „evasive language“."],
      ["fill","Completa: “Es ___ betont, dass sich die Erklärung nicht auf konkrete Termine festlegt.”",["war", "ist", "sei", "wird"],2,"„Es sei betont, dass“ ist ein fester epistemischer Konnektor im Konjunktiv I, der eine relevante Beobachtung einführt."],
      ["translate","Übersetze präzise: „In a way, the vagueness is deliberate.“",["In gewisser Weise ist die Ambiguität kalkuliert.", "In gewisser Weise ist die Vagheit bewusst.", "In gewisser Weise ist die Vagheit ausweichend.", "Auf gewisser Weise ist die Vagheit bewusst."],1,"„In a way“ = „in gewisser Weise“, fester Konnektor der Abschwächung."],
      ["arrange","Bring in die richtige Reihenfolge: [Zweifel / kein / dass / besteht / die Sprache / ausweichend ist]",["ist Zweifel Es die besteht dass ausweichend kein Sprache", "ausweichend dass die besteht ist Zweifel Sprache Es kein", "Zweifel dass ist Es besteht ausweichend kein die Sprache", "Es besteht kein Zweifel dass die Sprache ausweichend ist"],3,"Fester Konnektor „es besteht kein Zweifel, dass“ + Nebensatz."],
      ["writing","Schreibe 55-75 Wörter über eine reale oder erfundene institutionelle Erklärung, die kalkulierte Ambiguität nutzt, und benutze mindestens zwei epistemische Abschwächungskonnektoren.",[],["es sei betont, dass", "es besteht kein Zweifel, dass", "in gewisser Weise"]],
    ]
  },
  {
    id:"de_a1_sports_exercise", level:"A1", title:"Sport und Bewegung", emoji:"⚽", xp:38,
    description:"Lerne Sport-Vokabular und wie man mit „gern” Vorlieben ausdrückt.",
    study: {
      vocab: [
        ["der Fußball", "soccer/football"],
        ["das Schwimmen", "swimming"],
        ["laufen", "to run"],
        ["das Fitnessstudio", "the gym"],
        ["Sport treiben", "to exercise"],
        ["das Team", "the team"],
      ],
      grammar: [
        ["„Gern” + Verb für Vorlieben", "Im Deutschen drückt man Vorlieben mit dem Adverb „gern” nach dem Verb aus, statt mit einem eigenen Verb wie „mögen” + Infinitiv.", "Ich schwimme gern. / Sie mag Mannschaftssport."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „das Schwimmen” auf Englisch?",["swimming", "the team", "soccer/football", "to exercise"],0,"„Schwimmen” heißt auf Englisch „swimming”."],
      ["mcq","Wie sagt man „das Team” auf Englisch?",["the team", "to exercise", "swimming", "to run"],0,"„Team” heißt auf Englisch „team”."],
      ["fill","Completa: “Ich laufe ___ am Morgen.”",["gute", "gern", "gerne mag", "mögen"],1,"„Gern” steht nach dem konjugierten Verb, um eine Vorliebe auszudrücken: „ich laufe gern”."],
      ["translate","Übersetze: „She likes team sports.“",["Sie mögen Mannschaftssport.", "Er mag Mannschaftssport.", "Sie mag Mannschaftssport.", "Sie mag Einzelsport."],2,"„Sie mag” stimmt mit dem Subjekt „sie” (Singular) überein."],
      ["arrange","Bring in die richtige Reihenfolge: [ins / gehe / ich / Fitnessstudio / Sport zu treiben]",["Sport ins Ich zu Fitnessstudio treiben gehe", "Fitnessstudio ins treiben gehe zu Sport Ich", "zu gehe Fitnessstudio treiben Ich Sport ins", "Ich gehe ins Fitnessstudio Sport zu treiben"],3,"Subjekt + Verb + Präposition + Substantiv + Infinitivkonstruktion."],
      ["writing","Beschreibe in 20-30 Wörtern, welche Sportarten du gern machst und wie oft du Sport treibst, und benutze „gern”.",[],["ich...gern", "Sport treiben", "Fußball"]],
    ]
  },
  {
    id:"de_a2_household_chores", level:"A2", title:"Die Hausarbeit", emoji:"🧹", xp:48,
    description:"Lerne Vokabular zur Hausarbeit und wie man mit „man muss” eine unpersönliche Pflicht ausdrückt.",
    study: {
      vocab: [
        ["fegen", "to sweep"],
        ["das Geschirr spülen", "to wash the dishes"],
        ["den Müll rausbringen", "to take out the trash"],
        ["die Kleidung bügeln", "to iron the clothes"],
        ["das Bett machen", "to make the bed"],
        ["staubsaugen", "to vacuum"],
      ],
      grammar: [
        ["„Man muss” + Infinitiv für unpersönliche Pflicht", "„Man” + „müssen” + Infinitiv drückt eine allgemeine Pflicht aus, ohne eine bestimmte Person zu nennen.", "Man muss jeden Tag den Müll rausbringen. / Bevor man geht, muss man das Bett machen."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „das Geschirr spülen” auf Englisch?",["to vacuum", "to make the bed", "to take out the trash", "to wash the dishes"],3,"„Das Geschirr spülen” heißt auf Englisch „to wash the dishes”."],
      ["mcq","Wie sagt man „staubsaugen” auf Englisch?",["to sweep", "to vacuum", "to iron the clothes", "to wash the dishes"],1,"„Staubsaugen” heißt auf Englisch „to vacuum”."],
      ["fill","Completa: “Bevor man das Haus verlässt, ___ man das Bett machen.”",["ist", "muss", "hat", "wird"],1,"„Man muss” + Infinitiv ist eine feste unpersönliche Konstruktion: „man muss machen”."],
      ["translate","Übersetze: „You have to take out the trash every day.“",["Man muss einmal pro Woche den Müll rausbringen.", "Du musst jeden Tag den Müll rausbringen.", "Man muss jeden Tag den Müll fegen.", "Man muss jeden Tag den Müll rausbringen."],3,"„You have to” ist hier unpersönlich gemeint und wird am besten mit „man muss” übersetzt."],
      ["arrange","Bring in die richtige Reihenfolge: [Geschirr / muss / spülen / man / das]",["Geschirr das muss spülen Man", "Geschirr das Man spülen muss", "Man spülen muss Geschirr das", "Man muss das Geschirr spülen"],3,"„Man muss” + Objekt + Infinitiv."],
      ["speaking","Beschreibe in 40-60 Wörtern, welche Hausarbeit man bei dir zu Hause jede Woche machen muss, und benutze „man muss”.",[],["man muss", "jede Woche", "zu Hause"]],
    ]
  },
  {
    id:"de_b1_dating_love", level:"B1", title:"Verabredungen und die Liebe", emoji:"💕", xp:62,
    description:"Lerne Vokabular zu Verabredungen und wie man mit dem Futur I Versprechen und Vorhersagen macht.",
    study: {
      vocab: [
        ["ein Date haben", "to go on a date"],
        ["sich in jemanden verlieben", "to fall in love with someone"],
        ["mit jemandem Schluss machen", "to break up with someone"],
        ["der Partner/die Partnerin", "the partner/couple"],
        ["jemanden vermissen", "to miss someone"],
        ["sich verloben/binden", "to get engaged/commit"],
      ],
      grammar: [
        ["Das Futur I für Versprechen und Vorhersagen", "Das Futur I („werden” + Infinitiv) drückt formelle Versprechen oder Vorhersagen aus, endgültiger als das Präsens mit Zeitangabe.", "Ich verspreche dir, dass ich nie mit dir Schluss machen werde. / Ich glaube, ihr werdet euch bald verloben."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „sich in jemanden verlieben” auf Englisch?",["the partner/couple", "to fall in love with someone", "to break up with someone", "to get engaged/commit"],1,"„Sich in jemanden verlieben” heißt auf Englisch „to fall in love with someone”."],
      ["mcq","Wie sagt man „jemanden vermissen” auf Englisch?",["to miss someone", "to break up with someone", "to fall in love with someone", "to go on a date"],0,"„Jemanden vermissen” heißt auf Englisch „to miss someone”."],
      ["fill","Completa: “Ich verspreche dir, dass ich nie mit dir Schluss machen ___.”",["habe", "machte", "werde", "mache"],2,"Das Futur I „werde ... machen” drückt ein festes Versprechen über etwas Zukünftiges aus."],
      ["translate","Übersetze: „I think you two will get engaged soon.“",["Ich glaube, ihr verlobt euch bald.", "Ich glaube, ihr werdet euch bald verloben.", "Ich glaube, ihr werdet euch bald verlieben.", "Ich glaube, ihr werdet euch morgen verloben."],1,"„Will get engaged” = „werdet euch verloben”, Futur I für eine Vorhersage."],
      ["arrange","Bring in die richtige Reihenfolge: [Date / werde / morgen / ich / haben / ein]",["morgen haben Date werde Ich ein", "morgen haben werde Date Ich ein", "morgen Date Ich werde haben ein", "Ich werde morgen ein Date haben"],3,"Subjekt + Futur I + Zeitangabe + Artikel + Substantiv."],
      ["writing","Schreibe 45-65 Wörter über eine Beziehung (real oder erfunden) und benutze mindestens zwei Verben im Futur I für Versprechen oder Vorhersagen.",[],["werde/wird versprechen", "werden sein", "Partner"]],
    ]
  },
  {
    id:"de_b2_sustainable_tourism", level:"B2", title:"Nachhaltiger Tourismus und Overtourism", emoji:"🧳", xp:84,
    description:"Sprich über nachhaltigen Tourismus mit „es sei denn” und „vorausgesetzt, dass” + Konjunktiv/Indikativ.",
    study: {
      vocab: [
        ["der Overtourism", "overtourism"],
        ["ein Reiseziel überlasten", "to overcrowd a tourist destination"],
        ["der nachhaltige Tourismus", "sustainable tourism"],
        ["die lokalen Mieten in die Höhe treiben", "to drive up local housing costs"],
        ["die touristischen Auswirkungen verteilen", "to spread out tourism's impact"],
        ["die lokale Kultur respektieren", "to respect the local culture"],
      ],
      grammar: [
        ["„Es sei denn” und „vorausgesetzt, dass” für Bedingungen", "„Es sei denn” (unless) und „vorausgesetzt, dass” (provided that) leiten eine Bedingung ein; nach „es sei denn” folgt oft der Konjunktiv I in formellem Stil.", "Das Reiseziel bleibt überlastet, es sei denn, der Tourismus werde reguliert. / Tourismus ist positiv, vorausgesetzt, dass die lokale Kultur respektiert wird."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die lokalen Mieten in die Höhe treiben” auf Englisch?",["sustainable tourism", "to respect the local culture", "to spread out tourism's impact", "to drive up local housing costs"],3,"„Die lokalen Mieten in die Höhe treiben” heißt auf Englisch „to drive up local housing costs”."],
      ["mcq","Wie sagt man „die touristischen Auswirkungen verteilen” auf Englisch?",["to drive up local housing costs", "to respect the local culture", "sustainable tourism", "to spread out tourism's impact"],3,"„Die touristischen Auswirkungen verteilen” heißt auf Englisch „to spread out tourism's impact”."],
      ["fill","Completa: “Das Reiseziel bleibt überlastet, es sei denn, der Tourismus ___ reguliert.”",["wird", "sei", "würde", "war"],0,"„Es sei denn” leitet eine Bedingung ein, hier mit Indikativ Präsens Passiv: „es sei denn, ... wird reguliert”."],
      ["translate","Übersetze: „Tourism will be positive provided that the local culture is respected.“",["Tourismus ist positiv, vorausgesetzt, dass die lokale Kultur respektiert wird.", "Tourismus ist positiv, es sei denn, die lokale Kultur wird respektiert.", "Tourismus war positiv, vorausgesetzt, dass die lokale Kultur respektiert wird.", "Tourismus ist positiv, vorausgesetzt, dass die lokale Kultur ignoriert wird."],0,"„Provided that” = „vorausgesetzt, dass”, gefolgt vom Nebensatz „respektiert wird”."],
      ["arrange","Bring in die richtige Reihenfolge: [Reiseziele / viele / sind / touristische / überlastet]",["touristische Reiseziele Viele sind überlastet", "Viele touristische Reiseziele sind überlastet", "Reiseziele überlastet touristische sind Viele", "Reiseziele Viele sind touristische überlastet"],1,"Subjekt + Verb + Adjektiv."],
      ["writing","Schreibe 55-75 Wörter über Overtourism an einem Reiseziel, das du kennst, und benutze mindestens ein „es sei denn” und ein „vorausgesetzt, dass”.",[],["es sei denn", "vorausgesetzt, dass", "nachhaltig"]],
    ]
  },
  {
    id:"de_c1_gastronomy_identity", level:"C1", title:"Gastronomie und kulturelle Identität", emoji:"🍽️", xp:92,
    description:"Analysiere Gastronomie als kulturelle Identität mit betonten Konstruktionen wie „was ... ist”.",
    study: {
      vocab: [
        ["die geschützte Herkunftsbezeichnung", "protected designation of origin"],
        ["ein emblematisches Gericht", "an iconic/signature dish"],
        ["die kulinarische Fusion", "culinary fusion"],
        ["ein traditionelles Rezept bewahren", "to preserve a traditional recipe"],
        ["sich eine kulinarische Tradition aneignen", "to appropriate a culinary tradition"],
        ["der kollektive Gaumen", "the collective palate"],
      ],
      grammar: [
        ["Betonte Konstruktionen mit „was ... ist”", "„Was ... ist” hebt ein Satzelement hervor und verleiht ihm mehr Gewicht, typisch für argumentative Texte.", "Was eine Kultur definiert, ist ihre Gastronomie. / Was lokale Köche beunruhigt, ist die Aneignung ihrer Rezepte."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „ein emblematisches Gericht” auf Englisch?",["an iconic/signature dish", "to preserve a traditional recipe", "the collective palate", "to appropriate a culinary tradition"],0,"„Ein emblematisches Gericht” heißt auf Englisch „an iconic/signature dish”."],
      ["mcq","Wie sagt man „sich eine kulinarische Tradition aneignen” auf Englisch?",["the collective palate", "culinary fusion", "protected designation of origin", "to appropriate a culinary tradition"],3,"„Sich eine kulinarische Tradition aneignen” heißt auf Englisch „to appropriate a culinary tradition”."],
      ["fill","Completa: “Was eine Kultur ___ , ist zu großen Teilen ihre Gastronomie.”",["definierte", "definiert", "definieren", "definieren würde"],1,"Die betonte Konstruktion „was ... ist” verlangt das Verb im Singular, übereinstimmend mit „was”."],
      ["translate","Übersetze mit betonter Konstruktion: „What worries local chefs is the appropriation of their recipes.“",["Was lokale Köche beunruhigt, ist die Aneignung ihrer Rezepte.", "Was lokale Köche beunruhigt, ist die Fusion ihrer Rezepte.", "Was lokale Köche beunruhigt, sind die Aneignung ihrer Rezepte.", "Was lokale Köche beunruhigen, ist die Aneignung ihrer Rezepte."],0,"Das Verb „beunruhigt” steht im Singular, übereinstimmend mit „was”, dem Subjekt des Satzes."],
      ["arrange","Bring in die richtige Reihenfolge: [Rezept / bewahren / dieses / müssen / wir / traditionelle]",["traditionelle Wir Rezept müssen bewahren dieses", "bewahren traditionelle müssen dieses Rezept Wir", "müssen bewahren Wir traditionelle Rezept dieses", "Wir müssen dieses traditionelle Rezept bewahren"],3,"Subjekt + Modalverb + Objekt + Adjektiv + Substantiv + Infinitiv."],
      ["writing","Schreibe 55-75 Wörter über ein Gericht, das du als Teil deiner kulturellen Identität betrachtest, und benutze mindestens zwei betonte Konstruktionen mit „was ... ist”.",[],["was...definiert", "was...darstellt", "kulturelle Identität"]],
    ]
  },
  {
    id:"de_c2_crisis_rhetoric", level:"C2", title:"Die Rhetorik der Krise und die moralische Panik", emoji:"📢", xp:100,
    description:"Analysiere Krisenrhetorik und übe rhetorische Intensivierungsstrukturen.",
    study: {
      vocab: [
        ["die moralische Panik", "moral panic"],
        ["eine erfundene Krise", "a manufactured crisis"],
        ["eine Situation dramatisieren", "to catastrophize a situation"],
        ["ein Sündenbock", "a scapegoat"],
        ["eine Bedrohung überzeichnen", "to blow a threat out of proportion"],
        ["eine alarmistische Rhetorik", "alarmist rhetoric"],
      ],
      grammar: [
        ["Rhetorische Intensivierungsstrukturen", "„Nicht nur ... sondern auch” und „immer mehr” intensivieren eine Aussage durch Steigerung — typisches Mittel der Krisenrhetorik und moralischen Panik.", "Die Bedrohung wird nicht nur übertrieben, sondern man sucht auch einen Sündenbock. / Alarmistische Rhetorik wird in den Medien immer häufiger."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „ein Sündenbock” auf Englisch?",["to blow a threat out of proportion", "to catastrophize a situation", "a scapegoat", "a manufactured crisis"],2,"„Ein Sündenbock” heißt auf Englisch „a scapegoat”."],
      ["mcq","Wie sagt man „eine Bedrohung überzeichnen” auf Englisch?",["alarmist rhetoric", "to blow a threat out of proportion", "a manufactured crisis", "moral panic"],1,"„Eine Bedrohung überzeichnen” heißt auf Englisch „to blow a threat out of proportion”."],
      ["fill","Completa: “Die Bedrohung wird nicht nur übertrieben, ___ man sucht auch einen Sündenbock.”",["also", "denn", "sondern", "aber"],2,"„Nicht nur ... sondern auch” intensiviert eine Aussage durch ein zweites Element mit eigenem Verb."],
      ["translate","Übersetze präzise: „Alarmist rhetoric is becoming increasingly common in the media.“",["Alarmistische Rhetorik wird in den Medien immer seltener.", "Alarmistische Rhetorik wird in den Medien immer häufiger.", "Moralische Panik wird in den Medien immer häufiger.", "Alarmistische Rhetorik wird in den Medien immer ernster."],1,"„Increasingly common” = „immer häufiger”, Struktur der graduellen Intensivierung."],
      ["arrange","Bring in die richtige Reihenfolge: [Sündenbock / suchen / einen / die Medien]",["suchen Medien einen Die Sündenbock", "Die Medien suchen einen Sündenbock", "Die suchen Sündenbock einen Medien", "suchen einen Medien Die Sündenbock"],1,"Subjekt + Verb + Artikel + Substantiv."],
      ["writing","Schreibe 55-75 Wörter über einen realen oder erfundenen Fall moralischer Panik in den Medien, und benutze mindestens eine „nicht nur ... sondern auch”-Struktur und eine mit „immer mehr”.",[],["nicht nur...sondern auch", "immer mehr", "moralische Panik"]],
    ]
  },
  {
    id:"de_a1_school_supplies_subjects", level:"A1", title:"In der Schule: Materialien und Fächer", emoji:"🎒", xp:38,
    description:"Lerne Schulvokabular und wie man bestimmte und unbestimmte Artikel richtig benutzt.",
    study: {
      vocab: [
        ["das Heft", "the notebook"],
        ["der Bleistift", "the pencil"],
        ["der Rucksack", "the backpack"],
        ["die Mathematik", "math"],
        ["die Geschichte", "history"],
        ["der Lehrer/die Lehrerin", "the teacher"],
      ],
      grammar: [
        ["Bestimmte und unbestimmte Artikel", "Bestimmte Artikel (der, die, das) bezeichnen etwas Bekanntes oder Spezifisches; unbestimmte Artikel (ein, eine) bezeichnen etwas Unspezifisches oder zum ersten Mal Erwähntes.", "Ich habe ein neues Heft. / Das Heft ist im Rucksack."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „der Bleistift” auf Englisch?",["the backpack", "history", "the pencil", "the teacher"],2,"„Bleistift” heißt auf Englisch „pencil”."],
      ["mcq","Wie sagt man „die Mathematik” auf Englisch?",["the notebook", "history", "math", "the pencil"],2,"„Mathematik” heißt auf Englisch „math”."],
      ["fill","Completa: “Ich habe ___ neuen Rucksack für die Schule.”",["ein", "den", "der", "einen"],3,"Der unbestimmte Artikel „einen” (Akkusativ maskulin) wird benutzt, weil es zum ersten Mal erwähnt wird."],
      ["translate","Übersetze: „The notebook is in the backpack.“",["Der Bleistift ist im Rucksack.", "Das Heft ist im Rucksack.", "Ein Heft ist im Rucksack.", "Das Heft ist im Klassenzimmer."],1,"„The notebook” ist bereits bekannt, deshalb wird der bestimmte Artikel „das” benutzt."],
      ["arrange","Bring in die richtige Reihenfolge: [Geschichte / sehr / ich / mag]",["sehr mag Ich Geschichte", "sehr Geschichte Ich mag", "Ich mag sehr Geschichte", "Ich mag Geschichte sehr"],3,"Subjekt + Verb + Substantiv + Adverb."],
      ["writing","Beschreibe in 20-30 Wörtern, welche Schulsachen du hast und welches Fach dir am besten gefällt, und benutze bestimmte und unbestimmte Artikel.",[],["ein/eine", "der/die/das", "ich mag"]],
    ]
  },
  {
    id:"de_a2_post_office_packages", level:"A2", title:"Die Post und die Pakete", emoji:"📦", xp:48,
    description:"Lerne Postvokabular und wie man Akkusativ-Objektpronomen (ihn/sie/es) benutzt.",
    study: {
      vocab: [
        ["das Paket", "the package"],
        ["der Brief", "the letter"],
        ["die Briefmarke", "the stamp"],
        ["mit der Post schicken", "to mail/send"],
        ["der Briefkasten", "the mailbox"],
        ["die Adresse", "the address"],
      ],
      grammar: [
        ["Akkusativ-Objektpronomen (ihn/sie/es)", "Objektpronomen ersetzen ein bereits genanntes Substantiv im Akkusativ und stimmen in Genus und Numerus überein.", "Den Brief? Ich habe ihn gestern verschickt. / Die Pakete? Ich habe sie heute Morgen bekommen."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Briefmarke” auf Englisch?",["the mailbox", "the letter", "the package", "the stamp"],3,"„Briefmarke” heißt auf Englisch „stamp”."],
      ["mcq","Wie sagt man „der Briefkasten” auf Englisch?",["the address", "the letter", "the mailbox", "the package"],2,"„Briefkasten” heißt auf Englisch „mailbox”."],
      ["fill","Completa: “Das Paket? Ich habe ___ heute Morgen bekommen.”",["ihn", "es", "sie", "ihm"],1,"„Das Paket” ist Neutrum Singular, deshalb wird es mit „es” ersetzt."],
      ["translate","Übersetze: „The letters? I sent them yesterday.“",["Der Brief? Ich habe sie gestern verschickt.", "Die Briefe? Ich habe es gestern verschickt.", "Die Briefe? Ich habe sie morgen verschickt.", "Die Briefe? Ich habe sie gestern verschickt."],3,"„Die Briefe” ist Plural, deshalb wird es mit „sie” ersetzt."],
      ["arrange","Bring in die richtige Reihenfolge: [Adresse / brauche / deine / ich]",["Ich brauche deine Adresse", "Adresse brauche deine Ich", "deine Ich Adresse brauche", "deine brauche Adresse Ich"],0,"Subjekt + Verb + Possessivobjekt + Substantiv."],
      ["speaking","Beschreibe in 40-60 Wörtern, wann du zuletzt einen Brief oder ein Paket verschickt hast, und benutze Akkusativ-Objektpronomen (ihn/sie/es).",[],["ich habe ihn/sie/es", "Paket", "verschickt"]],
    ]
  },
  {
    id:"de_b1_movies_theater", level:"B1", title:"Ins Kino und ins Theater gehen", emoji:"🎬", xp:62,
    description:"Lerne Kino- und Theatervokabular und wie man Zeitsätze mit „wenn”, „während” und „bevor” bildet.",
    study: {
      vocab: [
        ["die Eintrittskarte", "the ticket"],
        ["die Premiere", "the premiere"],
        ["die Besetzung", "the cast"],
        ["die Spezialeffekte", "special effects"],
        ["der Sitzplatz", "the seat"],
        ["die Pause", "the intermission"],
      ],
      grammar: [
        ["Zeitsätze mit „wenn”, „während” und „bevor”", "„Wenn” und „während” + Präsens beschreiben gewohnheitsmäßige oder gleichzeitige Handlungen; „bevor” leitet eine Handlung ein, die noch nicht stattgefunden hat.", "Ich kaufe die Karten, wenn ich im Kino ankomme. / Wir reden, während wir auf die Premiere warten. / Wir kommen an, bevor der Film beginnt."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Premiere” auf Englisch?",["the seat", "the premiere", "the cast", "the ticket"],1,"„Premiere” heißt auf Englisch „premiere”."],
      ["mcq","Wie sagt man „die Besetzung” auf Englisch?",["the seat", "the intermission", "the premiere", "the cast"],3,"„Besetzung” heißt auf Englisch „cast”."],
      ["fill","Completa: “Wir kommen an, ___ der Film beginnt.”",["wenn", "nachdem", "bevor", "während"],2,"„Bevor” leitet eine Handlung ein, die noch nicht stattgefunden hat: „bevor der Film beginnt”."],
      ["translate","Übersetze: „We talk while we wait for the premiere.“",["Wir reden, bevor wir auf die Premiere warten.", "Wir reden, während wir auf die Pause warten.", "Wir reden, wenn wir auf die Premiere warten.", "Wir reden, während wir auf die Premiere warten."],3,"„Während” + Präsens beschreibt gleichzeitige Handlungen: „während wir warten”."],
      ["arrange","Bring in die richtige Reihenfolge: [Kino / gehen / wir / oft / ins]",["Wir gehen oft ins Kino", "gehen oft Kino Wir ins", "gehen Kino ins oft Wir", "ins Wir oft Kino gehen"],0,"Subjekt + Verb + Adverb + Präposition + Substantiv."],
      ["writing","Schreibe 45-65 Wörter über deinen letzten Besuch im Kino oder Theater und benutze mindestens zwei Zeitsätze mit „wenn”, „während” oder „bevor”.",[],["wenn", "während", "bevor"]],
    ]
  },
  {
    id:"de_b2_social_activism_protests", level:"B2", title:"Sozialer Aktivismus und Proteste", emoji:"✊", xp:84,
    description:"Sprich über sozialen Aktivismus mit dem Konjunktiv/„dass”-Sätzen nach Verben der Einflussnahme.",
    study: {
      vocab: [
        ["eine Demonstration", "a protest"],
        ["Veränderung fordern", "to demand change"],
        ["eine Petition unterschreiben", "to sign a petition"],
        ["für etwas sensibilisieren", "to raise awareness about something"],
        ["ein Kollektiv/eine Organisation", "a collective/organization"],
        ["Menschen mobilisieren", "to mobilize people"],
      ],
      grammar: [
        ["„Dass”-Sätze nach Verben der Einflussnahme", "Verben wie „fordern”, „verlangen” oder „vorschlagen” + „dass” leiten einen Nebensatz ein, der oft im Konjunktiv I steht, um formell eine Handlung von jemand anderem zu beeinflussen.", "Die Demonstranten fordern, dass die Regierung handle. / Das Kollektiv verlangt, dass die Petition unterschrieben werde."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „für etwas sensibilisieren” auf Englisch?",["a collective/organization", "to sign a petition", "to mobilize people", "to raise awareness about something"],3,"„Für etwas sensibilisieren” heißt auf Englisch „to raise awareness about something”."],
      ["mcq","Wie sagt man „Menschen mobilisieren” auf Englisch?",["to sign a petition", "to demand change", "to mobilize people", "a collective/organization"],2,"„Menschen mobilisieren” heißt auf Englisch „to mobilize people”."],
      ["fill","Completa: “Die Demonstranten fordern, dass die Regierung ___.”",["handelte", "wird handeln", "handle", "handelt"],2,"Nach „fordern, dass” steht formell der Konjunktiv I: „dass... handle”."],
      ["translate","Übersetze: „The collective is asking people to sign the petition.“",["Das Kollektiv verlangt, dass die Menschen die Petition unterschreiben.", "Das Kollektiv fordert, dass die Menschen die Petition unterschreiben.", "Das Kollektiv verlangt, dass die Menschen die Demonstration unterschreiben.", "Das Kollektiv verlangt, dass die Menschen die Petition unterschrieben."],0,"„Verlangen, dass” leitet den Nebensatz mit dem geforderten Verb ein: „dass... unterschreiben”."],
      ["arrange","Bring in die richtige Reihenfolge: [Petition / werde / die / unterschreiben]",["Die Petition werde ich unterschreiben", "unterschreiben Petition werde Die ich", "Petition ich unterschreiben werde Die", "werde Die unterschreiben ich Petition"],0,"Objekt + Hilfsverb + Subjekt + Infinitiv."],
      ["writing","Schreibe 55-75 Wörter über eine soziale Sache, die dir wichtig ist, und benutze mindestens zwei Verben der Einflussnahme + „dass”-Satz (fordern, dass; verlangen, dass).",[],["ich fordere, dass", "ich verlange, dass", "Demonstration"]],
    ]
  },
  {
    id:"de_c1_aging_population_pensions", level:"C1", title:"Die alternde Bevölkerung und die Renten", emoji:"👴", xp:92,
    description:"Analysiere die alternde Bevölkerung mit Konsekutivsätzen („so...dass”, „derart...dass”).",
    study: {
      vocab: [
        ["die alternde Bevölkerung", "population aging"],
        ["das Rentensystem", "the pension system"],
        ["die Geburtenrate", "the birth rate"],
        ["die Lebenserwartung", "life expectancy"],
        ["das Rentensystem aufrechterhalten", "to sustain the pension system"],
        ["die Generationenkluft", "the generational gap"],
      ],
      grammar: [
        ["Konsekutivsätze: „so...dass” und „derart...dass”", "Konsekutivsätze drücken eine Folge aus einer Intensität oder Art aus. „So + Adjektiv + dass” betont den Grad; „derart...dass” leitet das Ergebnis einer Handlung ein.", "Die Bevölkerung altert so schnell, dass das Rentensystem gefährdet ist. / Die Geburtenrate ist derart gesunken, dass junge Arbeitskräfte fehlen."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Geburtenrate” auf Englisch?",["population aging", "the birth rate", "life expectancy", "the generational gap"],1,"„Geburtenrate” heißt auf Englisch „birth rate”."],
      ["mcq","Wie sagt man „das Rentensystem aufrechterhalten” auf Englisch?",["the birth rate", "life expectancy", "to sustain the pension system", "population aging"],2,"„Das Rentensystem aufrechterhalten” heißt auf Englisch „to sustain the pension system”."],
      ["fill","Completa: “Die Bevölkerung altert so schnell, ___ das Rentensystem gefährdet ist.”",["denn", "wie", "so", "dass"],3,"„So + Adjektiv/Adverb + dass” leitet die Konsequenz ein: „so schnell, dass gefährdet ist”."],
      ["translate","Übersetze mit Konsekutivsatz: „The birth rate has dropped in such a way that young workers are lacking.“",["Die Lebenserwartung ist derart gesunken, dass junge Arbeitskräfte fehlen.", "Die Geburtenrate ist derart gesunken, dass zu viele junge Arbeitskräfte da sind.", "Die Geburtenrate ist derart gesunken, dass junge Arbeitskräfte fehlen.", "Die Geburtenrate ist so gesunken, dass junge Arbeitskräfte fehlen."],2,"„In such a way that” = „derart...dass”, leitet die Konsequenz ein."],
      ["arrange","Bring in die richtige Reihenfolge: [Rentensystem / viele / beunruhigt / das]",["Das beunruhigt viele Rentensystem", "viele Das Rentensystem beunruhigt", "Das Rentensystem beunruhigt viele", "viele Rentensystem beunruhigt Das"],2,"Subjekt + Verb + Objekt."],
      ["writing","Schreibe 55-75 Wörter über die alternde Bevölkerung in deinem Land, und benutze mindestens einen Satz mit „so...dass” und einen mit „derart...dass”.",[],["so...dass", "derart...dass", "Bevölkerung"]],
    ]
  },
  {
    id:"de_c2_rhetoric_of_silence", level:"C2", title:"Die Rhetorik des Schweigens und des Ungesagten", emoji:"🤐", xp:100,
    description:"Analysiere die Rhetorik des Schweigens und übe die Ellipse zu rhetorischen Zwecken.",
    study: {
      vocab: [
        ["das beredte Schweigen", "eloquent silence"],
        ["etwas bewusst auslassen", "to deliberately omit something"],
        ["das Ungesagte", "the unsaid"],
        ["eine diskursive Leerstelle", "a discursive gap"],
        ["etwas offenlassen", "to leave something hanging"],
        ["die rhetorische Ellipse", "rhetorical ellipsis"],
      ],
      grammar: [
        ["Die Ellipse zu rhetorischen Zwecken", "Die Ellipse lässt ein aus dem Kontext verständliches Element weg und erzeugt Nachdruck oder lässt eine Idee bewusst unvollständig — ein starkes Mittel im politischen und literarischen Diskurs.", "Manche schweigen aus Angst; andere aus Komplizenschaft. (das Verb „schweigen” wird weggelassen) / Er versprach Reformen... und Schweigen. (das erwartete Verb wird weggelassen)"],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „eine diskursive Leerstelle” auf Englisch?",["eloquent silence", "a discursive gap", "to leave something hanging", "rhetorical ellipsis"],1,"„Eine diskursive Leerstelle” heißt auf Englisch „a discursive gap”."],
      ["mcq","Wie sagt man „etwas offenlassen” auf Englisch?",["eloquent silence", "to leave something hanging", "to deliberately omit something", "rhetorical ellipsis"],1,"„Etwas offenlassen” heißt auf Englisch „to leave something hanging”."],
      ["fill","Completa: “Manche schweigen aus Angst; andere aus ___.”",["Komplizenschaft", "ist Komplizenschaft", "schweigen Komplizenschaft", "dass Komplizenschaft"],0,"Die Ellipse lässt das wiederholte Verb „schweigen” weg und behält nur die Ergänzung: „andere aus Komplizenschaft”."],
      ["translate","Übersetze mit rhetorischer Ellipse: „He promised reforms... and silence.“",["Er versprach Reformen... und war Schweigen.", "Er versprach Reformen... und ein Schweigen.", "Er versprach Reformen... und Lärm.", "Er versprach Reformen... und Schweigen."],3,"Die rhetorische Ellipse lässt das erwartete Verb nach den Auslassungspunkten weg und behält nur „und Schweigen”."],
      ["arrange","Bring in die richtige Reihenfolge: [Worte / manchmal / sagt / mehr / das Schweigen / als die]",["Das Schweigen sagt manchmal mehr als die Worte", "als die sagt manchmal Worte Schweigen Das mehr", "manchmal Das als die mehr Worte Schweigen sagt", "mehr Worte sagt Das die Schweigen als manchmal"],0,"Subjekt + Verb + Adverb + Komparativ + Ergänzung."],
      ["writing","Schreibe 55-75 Wörter über ein reales oder erfundenes Beispiel rhetorischen Schweigens in einer Rede, und benutze mindestens eine bewusste Ellipse.",[],["das Ungesagte", "beredtes Schweigen", "auslassen"]],
    ]
  },
  {
    id:"de_a1_time_parts_of_day", level:"A1", title:"Die Uhrzeit und die Tageszeiten", emoji:"🕐", xp:38,
    description:"Lerne, die Uhrzeit und die Tageszeiten mit Zeitpräpositionen zu sagen.",
    study: {
      vocab: [
        ["der Morgen", "the morning"],
        ["der Nachmittag", "the afternoon"],
        ["die Nacht", "the night"],
        ["der Mittag", "noon"],
        ["die Mitternacht", "midnight"],
        ["Uhr/pünktlich", "o'clock/sharp"],
      ],
      grammar: [
        ["„Wie spät ist es?” + Zeitpräpositionen", "Um nach der Uhrzeit zu fragen, sagt man „Wie spät ist es?”; zur Antwort „es ist ein Uhr” oder „es ist + Zahl + Uhr”, mit „morgens/nachmittags/abends” zur genaueren Angabe.", "Es ist drei Uhr nachmittags. / Es ist ein Uhr pünktlich morgens."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „die Mitternacht” auf Englisch?",["the afternoon", "midnight", "o'clock/sharp", "the morning"],1,"„Mitternacht” heißt auf Englisch „midnight”."],
      ["mcq","Wie sagt man „Uhr/pünktlich” auf Englisch?",["the morning", "midnight", "o'clock/sharp", "the night"],2,"„Uhr/pünktlich” heißt auf Englisch „o'clock” oder „sharp”."],
      ["fill","Completa: “___ ist drei Uhr nachmittags.”",["Sie", "Er", "Es", "Das"],2,"Für die Uhrzeit benutzt man immer „es”: „es ist drei Uhr”."],
      ["translate","Übersetze: „It's one o'clock in the morning.“",["Es ist zwei Uhr morgens.", "Es ist ein Uhr morgens.", "Es ist eins Uhr morgens.", "Es ist ein Uhr nachmittags."],1,"Bei „ein Uhr” wird „ein” ohne Endung verwendet, nicht „eins”."],
      ["arrange","Bring in die richtige Reihenfolge: [Uhr / vier / es / nachmittags / ist]",["Es ist nachmittags vier Uhr", "vier ist nachmittags Es Uhr", "Es ist vier Uhr nachmittags", "ist nachmittags Es vier Uhr"],2,"Subjekt + Verb + Zahl + Substantiv + Tageszeit."],
      ["writing","Beschreibe in 20-30 Wörtern deine tägliche Routine mit konkreten Uhrzeiten, und benutze „es ist” und „morgens/nachmittags/abends”.",[],["es ist", "morgens", "nachmittags"]],
    ]
  },
  {
    id:"de_a2_bank_open_account", level:"A2", title:"Bei der Bank: ein Konto eröffnen", emoji:"🏦", xp:48,
    description:"Lerne grundlegendes Bankvokabular und wie man „können” für Möglichkeit und Erlaubnis benutzt.",
    study: {
      vocab: [
        ["das Bankkonto", "the bank account"],
        ["der Geldautomat", "the ATM"],
        ["Geld abheben", "to withdraw money"],
        ["Geld einzahlen", "to deposit money"],
        ["die Debitkarte", "the debit card"],
        ["der Kontostand", "the balance"],
      ],
      grammar: [
        ["„Können” + Infinitiv für Möglichkeit und Erlaubnis", "„Können” + Infinitiv drückt je nach Kontext Fähigkeit, Möglichkeit oder Erlaubnis aus.", "Kann ich hier ein Konto eröffnen? / Du kannst an jedem Geldautomaten Geld abheben."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „Geld abheben” auf Englisch?",["the bank account", "the ATM", "to withdraw money", "the debit card"],2,"„Geld abheben” heißt auf Englisch „to withdraw money”."],
      ["mcq","Wie sagt man „der Kontostand” auf Englisch?",["the bank account", "to withdraw money", "the balance", "to deposit money"],2,"„Kontostand” heißt auf Englisch „balance”."],
      ["fill","Completa: “___ ich hier bitte ein Konto eröffnen?”",["Könnt", "Kannst", "Können", "Kann"],3,"In der ersten Person benutzt man „kann” um Erlaubnis zu erfragen: „kann ich eröffnen”."],
      ["translate","Übersetze: „You can withdraw money at any ATM.“",["Du kannst an jeder Bank Geld abheben.", "Du kannst an jedem Geldautomaten Geld abheben.", "Du kannst an jedem Geldautomaten Geld einzahlen.", "Du musst an jedem Geldautomaten Geld abheben."],1,"„You can withdraw” = „du kannst abheben”, mit „können” + Infinitiv."],
      ["arrange","Bring in die richtige Reihenfolge: [Kontostand / prüfen / meinen / möchte / ich]",["Ich möchte meinen Kontostand prüfen", "prüfen Ich meinen möchte Kontostand", "meinen möchte Kontostand prüfen Ich", "möchte meinen prüfen Ich Kontostand"],0,"Subjekt + Verb + Possessivobjekt + Substantiv + Infinitiv."],
      ["speaking","Beschreibe in 40-60 Wörtern, wie du ein Bankkonto eröffnen würdest, und benutze „können” um Erlaubnis zu erfragen oder Möglichkeit auszudrücken.",[],["ich kann", "du kannst", "Konto"]],
    ]
  },
  {
    id:"de_b1_train_plane_travel", level:"B1", title:"Zug- und Flugreisen: Verspätungen und Änderungen", emoji:"🚄", xp:62,
    description:"Lerne Vokabular für lange Reisen und wie man „obwohl” und „auch wenn” benutzt.",
    study: {
      vocab: [
        ["die Verspätung", "the delay"],
        ["den Flug/Zug verpassen", "to miss the flight/train"],
        ["einen Zwischenstopp machen", "to make a layover/stopover"],
        ["der Bahnsteig", "the platform"],
        ["einen Flug stornieren", "to cancel a flight"],
        ["der Fenster-/Gangplatz", "the window/aisle seat"],
      ],
      grammar: [
        ["„Obwohl” und „auch wenn” für Zugeständnisse", "„Obwohl” leitet eine reale, bekannte Tatsache ein; „auch wenn” kann sich auf eine reale oder hypothetische Situation beziehen, beide mit Indikativ im Deutschen.", "Obwohl der Zug zu spät ankam, habe ich meinen Flug erreicht. / Auch wenn der Flug storniert wird, haben wir eine andere Option."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „einen Zwischenstopp machen” auf Englisch?",["the platform", "the window/aisle seat", "to miss the flight/train", "to make a layover/stopover"],3,"„Einen Zwischenstopp machen” heißt auf Englisch „to make a layover” oder „stopover”."],
      ["mcq","Wie sagt man „der Bahnsteig” auf Englisch?",["the platform", "the window/aisle seat", "to miss the flight/train", "to make a layover/stopover"],0,"„Bahnsteig” heißt auf Englisch „platform”."],
      ["fill","Completa: “Obwohl der Zug zu spät ___, habe ich meinen Flug erreicht.”",["anzukommen", "ankommen wird", "ankam", "ankommt"],2,"„Obwohl” leitet eine reale, vergangene Tatsache mit Indikativ Präteritum ein: „obwohl... ankam”."],
      ["translate","Übersetze: „Even if the flight is cancelled, we have another option.“",["Obwohl der Flug storniert wird, haben wir eine andere Option.", "Auch wenn der Flug storniert würde, haben wir eine andere Option.", "Auch wenn der Flug storniert wird, haben wir eine andere Option.", "Auch wenn der Zug storniert wird, haben wir eine andere Option."],2,"„Even if” = „auch wenn”, mit Indikativ: „auch wenn der Flug storniert wird”."],
      ["arrange","Bring in die richtige Reihenfolge: [Fensterplatz / bevorzuge / den / ich]",["Ich bevorzuge Fensterplatz den", "Ich bevorzuge den Fensterplatz", "Fensterplatz bevorzuge Ich den", "bevorzuge den Fensterplatz Ich"],1,"Subjekt + Verb + Artikel + Substantiv."],
      ["writing","Schreibe 45-65 Wörter über eine Zug- oder Flugreise mit Zwischenfällen, und benutze mindestens einmal „obwohl” und einmal „auch wenn”.",[],["obwohl", "auch wenn", "Verspätung"]],
    ]
  },
  {
    id:"de_b2_sharing_economy_conscious_consumption", level:"B2", title:"Die Sharing Economy und der bewusste Konsum", emoji:"♻️", xp:84,
    description:"Sprich über die Sharing Economy mit Futur und Konjunktiv II der Vermutung.",
    study: {
      vocab: [
        ["die Sharing Economy", "the sharing economy"],
        ["mieten statt kaufen", "to rent instead of buying"],
        ["der bewusste Konsum", "conscious consumption"],
        ["Ressourcen teilen", "to share resources"],
        ["die geplante Obsoleszenz", "planned obsolescence"],
        ["Verschwendung reduzieren", "to reduce waste"],
      ],
      grammar: [
        ["Futur und Konjunktiv II der Vermutung", "Das Futur I kann eine Vermutung über die Gegenwart ausdrücken („es wird zehn Uhr sein”); der Konjunktiv II mit „würde” drückt eine Vermutung über eine hypothetische Situation aus.", "Dieses Modell wird wohl etwa fünf Jahre geplante Obsoleszenz haben. / Bei diesem Konsum würden sie weniger Ressourcen verbrauchen als gedacht."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „mieten statt kaufen” auf Englisch?",["to share resources", "to rent instead of buying", "to reduce waste", "the sharing economy"],1,"„Mieten statt kaufen” heißt auf Englisch „to rent instead of buying”."],
      ["mcq","Wie sagt man „die geplante Obsoleszenz” auf Englisch?",["to rent instead of buying", "planned obsolescence", "conscious consumption", "the sharing economy"],1,"„Geplante Obsoleszenz” heißt auf Englisch „planned obsolescence”."],
      ["fill","Completa: “Dieses Modell ___ wohl etwa fünf Jahre geplante Obsoleszenz haben.”",["wird", "hat", "hatte", "würde"],0,"Das Futur der Vermutung drückt eine Annahme über die Gegenwart aus: „wird... haben”."],
      ["translate","Übersetze mit Konjunktiv II der Vermutung: „With that consumption, they would spend fewer resources than they thought.“",["Bei diesem Konsum würden sie weniger Ressourcen verbrauchen als gedacht.", "Bei diesem Konsum würden sie mehr Ressourcen verbrauchen als gedacht.", "Bei diesem Konsum würden sie weniger Geld verbrauchen als gedacht.", "Bei diesem Konsum werden sie weniger Ressourcen verbrauchen als gedacht."],0,"Der Konjunktiv II der Vermutung „würden verbrauchen” drückt eine Annahme über eine hypothetische Situation aus."],
      ["arrange","Bring in die richtige Reihenfolge: [Verschwendung / müssen / die / reduzieren / wir]",["Verschwendung die reduzieren Wir müssen", "Wir reduzieren müssen die Verschwendung", "Wir müssen die Verschwendung reduzieren", "reduzieren Wir die Verschwendung müssen"],2,"Subjekt + Modalverb + Artikel + Substantiv + Infinitiv."],
      ["writing","Schreibe 55-75 Wörter über die Sharing Economy und bewussten Konsum, und benutze mindestens ein Futur und einen Konjunktiv II der Vermutung.",[],["wird...haben", "würden", "bewusster Konsum"]],
    ]
  },
  {
    id:"de_c1_nonverbal_intercultural_communication", level:"C1", title:"Nonverbale Sprache und interkulturelle Kommunikation", emoji:"🤝", xp:92,
    description:"Analysiere nonverbale Kommunikation mit „als ob” + Konjunktiv II.",
    study: {
      vocab: [
        ["die Körpersprache", "body language"],
        ["der Augenkontakt", "eye contact"],
        ["eine missverstandene Geste", "a misinterpreted gesture"],
        ["die Proxemik (persönlicher Abstand)", "proxemics (personal space)"],
        ["ein kulturelles Signal", "a cultural cue"],
        ["das unangenehme Schweigen", "awkward silence"],
      ],
      grammar: [
        ["„Als ob” + Konjunktiv II", "„Als ob” verlangt immer den Konjunktiv II, auch wenn sich der Vergleich auf die Gegenwart bezieht, weil es etwas Hypothetisches oder der Realität Widersprechendes beschreibt.", "Er handelte, als ob er die Geste verstünde, obwohl er sie nicht verstand. / Sie reagierte, als ob sie beleidigt worden wäre."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „eine missverstandene Geste” auf Englisch?",["awkward silence", "body language", "a cultural cue", "a misinterpreted gesture"],3,"„Eine missverstandene Geste” heißt auf Englisch „a misinterpreted gesture”."],
      ["mcq","Wie sagt man „die Proxemik (persönlicher Abstand)” auf Englisch?",["awkward silence", "eye contact", "proxemics (personal space)", "body language"],2,"„Proxemik” heißt auf Englisch „proxemics”."],
      ["fill","Completa: “Er handelte, als ob er die Geste ___, obwohl er sie nicht verstand.”",["verstehen wird", "verstand", "verstünde", "versteht"],2,"„Als ob” verlangt den Konjunktiv II für einen Vergleich zur Gegenwart: „als ob er verstünde”."],
      ["translate","Übersetze: „She reacted as if she had been offended.“",["Sie reagierte, als ob sie beleidigt worden wäre.", "Sie reagierte, als ob sie beleidigt war.", "Sie reagierte, als ob sie eingeladen worden wäre.", "Sie reagierte, als ob sie beleidigt ist."],0,"„As if she had been offended” wird mit Konjunktiv II Plusquamperfekt übersetzt: „als ob sie beleidigt worden wäre”."],
      ["arrange","Bring in die richtige Reihenfolge: [Kulturen / variiert / zwischen / der Augenkontakt]",["Der Augenkontakt Kulturen zwischen variiert", "Der Augenkontakt variiert zwischen Kulturen", "variiert Augenkontakt zwischen Kulturen Der", "variiert zwischen Augenkontakt Der Kulturen"],1,"Subjekt + Verb + Präposition + Substantiv."],
      ["writing","Schreibe 55-75 Wörter über ein interkulturelles Missverständnis in Bezug auf nonverbale Kommunikation, und benutze mindestens zwei Konstruktionen mit „als ob”.",[],["als ob", "Körpersprache", "Geste"]],
    ]
  },
  {
    id:"de_c2_scientific_hedging_uncertainty", level:"C2", title:"Die Unsicherheit und die wissenschaftliche Sprache", emoji:"🔬", xp:100,
    description:"Analysiere wissenschaftliche Sprache mit Ausdrücken epistemischer Abschwächung (Hedging).",
    study: {
      vocab: [
        ["die statistische Unsicherheit", "statistical uncertainty"],
        ["eine Fehlerspanne", "a margin of error"],
        ["Korrelation impliziert keine Kausalität", "correlation does not imply causation"],
        ["vorläufige Ergebnisse", "preliminary results"],
        ["eine unbestätigte Hypothese", "an unconfirmed hypothesis"],
        ["eine Aussage abschwächen", "to hedge/qualify a claim"],
      ],
      grammar: [
        ["Ausdrücke epistemischer Abschwächung (Hedging)", "Ausdrücke wie „man könnte sagen, dass”, „es wäre nicht abwegig zu denken, dass” oder „die Daten deuten darauf hin, ohne zu bestätigen, dass” schwächen den Gewissheitsgrad einer wissenschaftlichen Aussage ab und vermeiden Übergeneralisierung.", "Man könnte sagen, dass es einen Trend gibt, obwohl die Daten vorläufig sind. / Die Ergebnisse deuten auf einen kausalen Zusammenhang hin, ohne ihn zu bestätigen."],
      ]
    },
    ex:[
      ["mcq","Wie sagt man „eine Fehlerspanne” auf Englisch?",["to hedge/qualify a claim", "an unconfirmed hypothesis", "correlation does not imply causation", "a margin of error"],3,"„Eine Fehlerspanne” heißt auf Englisch „a margin of error”."],
      ["mcq","Wie sagt man „eine unbestätigte Hypothese” auf Englisch?",["statistical uncertainty", "preliminary results", "a margin of error", "an unconfirmed hypothesis"],3,"„Eine unbestätigte Hypothese” heißt auf Englisch „an unconfirmed hypothesis”."],
      ["fill","Completa: “Man ___ sagen, dass es einen Trend gibt, obwohl die Daten vorläufig sind.”",["muss", "wird", "kann", "könnte"],3,"„Man könnte sagen, dass” ist ein fester Ausdruck epistemischer Abschwächung, der eine Aussage abmildert."],
      ["translate","Übersetze präzise: „The results suggest, but do not confirm, a causal relationship.“",["Die Ergebnisse deuten auf einen kausalen Zusammenhang hin, ohne ihn zu bestätigen.", "Die Ergebnisse deuten auf eine statistische Korrelation hin, ohne sie zu bestätigen.", "Die Ergebnisse deuten auf einen kausalen Zusammenhang hin und bestätigen ihn.", "Die Ergebnisse bestätigen einen kausalen Zusammenhang, ohne darauf hinzudeuten."],0,"„Suggest, but do not confirm” wird mit „deuten hin, ohne zu bestätigen” übersetzt, was die Gewissheit abschwächt."],
      ["arrange","Bring in die richtige Reihenfolge: [Kausalität / keine / impliziert / Korrelation]",["impliziert Korrelation Kausalität keine", "Korrelation impliziert Kausalität keine", "Korrelation impliziert keine Kausalität", "Kausalität impliziert keine Korrelation"],2,"Subjekt + Verb + Negation + Objekt."],
      ["writing","Schreibe 55-75 Wörter über eine (reale oder erfundene) wissenschaftliche Studie mit vorläufigen Ergebnissen, und benutze mindestens zwei Ausdrücke epistemischer Abschwächung.",[],["man könnte sagen, dass", "die Daten deuten darauf hin", "Unsicherheit"]],
    ]
  },
  {
    id:"de_a1_weather_seasons", level:"A1", title:"Das Wetter und die Jahreszeiten", emoji:"☀️", xp:38,
    description:"Lerne, das Wetter und die Jahreszeiten auf Deutsch mit “es ist/es regnet” zu beschreiben.",
    study: {
      vocab: [
        ["sonnig", "sunny"],
        ["regnerisch", "rainy"],
        ["kalt", "cold"],
        ["heiß", "hot"],
        ["der Frühling", "spring"],
        ["der Winter", "winter"],
      ],
      grammar: [
        ["“Es ist” für das Wetter", "Für das Wetter wird das unpersönliche “es” + “ist” + Adjektiv verwendet: “es ist sonnig”, “es ist kalt”. Für Regen: “es regnet” (unpersönliches Verb).", "Heute ist es sonnig. / Im Frühling regnet es."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cold” en alemán?",["kalt", "sunny", "hot", "rainy"],0,"“Cold” es “kalt” en alemán."],
      ["mcq","¿Cómo se dice “rainy” en alemán?",["hot", "rainy", "regnerisch", "cold"],2,"“Rainy” es “regnerisch” en alemán."],
      ["fill","Completa: “Heute ist es sehr ___, nimm einen Regenschirm mit.”",["sonnig", "kalt", "heiß", "regnerisch"],3,"“Regnerisch” describe un clima con lluvia: “es ist regnerisch”."],
      ["translate","Traduce: “It's very cold in winter.”",["Im Winter ist es sehr kalt.", "Im Winter ist es sehr heiß.", "Im Winter wird es sehr kalt.", "Im Sommer ist es sehr kalt."],0,"“It's very cold” se traduce como “es ist sehr kalt”, con el pronombre impersonal “es”."],
      ["arrange","Ordena: [sonnig / heute / ist / es]",["es ist heute sonnig", "heute ist es sonnig", "sonnig ist heute es", "heute sonnig es ist"],1,"Adverbio de tiempo + verbo + pronombre impersonal + adjetivo."],
      ["writing","Describe en alemán, en 20-30 palabras, el clima de tu ciudad en las cuatro estaciones, usando “es ist”.",[],["es ist", "sonnig", "kalt"]],
    ]
  },
  {
    id:"de_a2_pet_care", level:"A2", title:"Die Haustierpflege", emoji:"🐾", xp:48,
    description:"Aprende vocabulario sobre mascotas y a usar “müssen” para obligaciones en alemán.",
    study: {
      vocab: [
        ["das Haustier füttern", "to feed the pet"],
        ["den Hund ausführen", "to walk the dog"],
        ["der Tierarzt", "the veterinarian"],
        ["impfen", "to vaccinate"],
        ["die Katzentoilette", "the litter box"],
        ["ein Haustier adoptieren", "to adopt a pet"],
      ],
      grammar: [
        ["“Müssen” para obligaciones", "“Müssen” + infinitivo al final expresa una obligación o necesidad cotidiana.", "Ich muss jeden Morgen den Hund ausführen. / Sie muss die Katze zweimal am Tag füttern."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the veterinarian” en alemán?",["to adopt a pet", "to feed the pet", "to walk the dog", "der Tierarzt"],3,"“The veterinarian” es “der Tierarzt” en alemán."],
      ["mcq","¿Cómo se dice “to vaccinate” en alemán?",["to walk the dog", "impfen", "the veterinarian", "to vaccinate"],1,"“To vaccinate” es “impfen” en alemán."],
      ["fill","Completa: “Ich ___ jeden Morgen den Hund ausführen.”",["musst", "müsst", "müssen", "muss"],3,"“Müssen” con “ich” se conjuga como “ich muss”."],
      ["translate","Traduce: “I have to feed the pet twice a day.”",["Ich muss das Haustier zweimal am Tag ausführen.", "Ich muss das Haustier zweimal am Tag füttern.", "Ich musste das Haustier zweimal am Tag füttern.", "Ich muss das Haustier einmal am Tag füttern."],1,"“I have to feed” se traduce con “ich muss füttern”, obligación en presente."],
      ["arrange","Ordena: [muss / Hund / sie / ausführen / den]",["ausführen den sie muss hund", "muss sie ausführen hund den", "sie hund den ausführen muss", "sie muss den hund ausführen"],3,"Sujeto + “muss” + artículo + sustantivo + infinitivo."],
      ["writing","Describe en alemán, en 20-30 palabras, tu rutina de cuidado de una mascota usando “müssen”.",[],["ich muss", "sie muss", "Haustier"]],
    ]
  },
  {
    id:"de_b1_startups_entrepreneurship", level:"B1", title:"Unternehmertum und Start-ups", emoji:"🚀", xp:62,
    description:"Aprende vocabulario de emprendimiento y a usar “werden” (futuro) para planes en alemán.",
    study: {
      vocab: [
        ["das Start-up", "startup"],
        ["ein Produkt auf den Markt bringen", "to launch a product"],
        ["der Investor", "investor"],
        ["der Geschäftsplan", "business plan"],
        ["ein Risiko eingehen", "to take a risk"],
        ["ein Unternehmen skalieren", "to scale a business"],
      ],
      grammar: [
        ["“Werden” + Infinitiv para planes futuros", "“Werden” + infinitivo al final expresa un plan o intención decidida para el futuro.", "Wir werden das Produkt nächsten Monat auf den Markt bringen. / Sie wird nach Investoren suchen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “investor” en alemán?",["der Investor", "business plan", "to scale a business", "startup"],0,"“Investor” es “der Investor” en alemán."],
      ["mcq","¿Cómo se dice “to take a risk” en alemán?",["to scale a business", "to launch a product", "ein Risiko eingehen", "business plan"],2,"“To take a risk” es “ein Risiko eingehen” en alemán."],
      ["fill","Completa: “Wir ___ das Produkt nächsten Monat auf den Markt bringen.”",["würden", "wurde", "werden", "wird"],2,"“Werden” con “wir” se conjuga como “wir werden”."],
      ["translate","Traduce: “We are going to launch the product next month.”",["Wir werden das Produkt diesen Monat auf den Markt bringen.", "Wir bringen das Produkt nächsten Monat auf den Markt.", "Wir werden das Produkt nächsten Monat auf den Markt bringen.", "Wir werden das Unternehmen nächsten Monat auf den Markt bringen."],2,"“We are going to launch” se traduce con “wir werden... bringen”, futuro con “werden”."],
      ["arrange","Ordena: [wird / Investoren / sie / suchen / nach]",["investoren suchen sie nach wird", "sie wird nach investoren suchen", "investoren sie suchen nach wird", "investoren sie wird nach suchen"],1,"Sujeto + “wird” + preposición + sustantivo + infinitivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre una idea de startup que te gustaría lanzar, usando “werden” para tus planes.",[],["ich werde", "Start-up", "Investoren"]],
    ]
  },
  {
    id:"de_b2_space_exploration", level:"B2", title:"Die Weltraumforschung", emoji:"🚀", xp:84,
    description:"Habla de la exploración espacial usando el Futur II en alemán.",
    study: {
      vocab: [
        ["die Weltraummission", "space mission"],
        ["der Astronaut", "astronaut"],
        ["umkreisen", "to orbit"],
        ["der Raketenstart", "rocket launch"],
        ["der Weltraum", "outer space"],
        ["die Raumstation", "space station"],
      ],
      grammar: [
        ["Futur II para logros futuros", "El Futur II (“werden” + participio + “haben/sein”) describe una acción que se habrá completado antes de un momento futuro determinado.", "Bis 2030 werden Astronauten auf dem Mars gelandet sein. / Die Rakete wird die Umlaufbahn bis dahin erreicht haben."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “space station” en alemán?",["space mission", "rocket launch", "space station", "die Raumstation"],3,"“Space station” es “die Raumstation” en alemán."],
      ["mcq","¿Cómo se dice “to orbit” en alemán?",["to orbit", "umkreisen", "outer space", "astronaut"],1,"“To orbit” es “umkreisen” en alemán."],
      ["fill","Completa: “Bis 2030 ___ Astronauten auf dem Mars gelandet sein.”",["sind", "werden", "waren", "würden"],1,"El Futur II usa “werden” + participio + “sein/haben”: “werden... gelandet sein”."],
      ["translate","Traduce: “By 2030, astronauts will have landed on Mars.”",["Bis 2030 würden Astronauten auf dem Mars gelandet sein.", "Bis 2030 werden Astronauten auf dem Mars gelandet sein.", "Bis 2030 sind Astronauten auf dem Mars gelandet.", "Bis 2030 werden Astronauten auf dem Mars landen."],1,"“Will have landed” se traduce con Futur II: “werden... gelandet sein”."],
      ["arrange","Ordena: [bald / Rakete / Umlaufbahn / erreicht / die / die]",["erreicht die die umlaufbahn rakete bald", "die bald erreicht rakete umlaufbahn die", "erreicht umlaufbahn rakete bald die die", "die rakete erreicht bald die umlaufbahn"],3,"Artículo + sustantivo + verbo + adverbio + artículo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, una predicción sobre el futuro de la exploración espacial usando el Futur II (“werden... gelandet sein”) al menos dos veces.",[],["werden", "Weltraummission", "Astronaut"]],
    ]
  },
  {
    id:"de_c1_ai_ethics", level:"C1", title:"Die Ethik und Regulierung der künstlichen Intelligenz", emoji:"🤖", xp:92,
    description:"Analiza la ética de la IA usando el Passiv en registro formal en alemán.",
    study: {
      vocab: [
        ["die künstliche Intelligenz", "artificial intelligence"],
        ["die algorithmische Verzerrung", "algorithmic bias"],
        ["die Rechenschaftspflicht", "accountability"],
        ["der Datenschutz", "data privacy"],
        ["regulieren", "to regulate"],
        ["die unbeabsichtigten Folgen", "unintended consequences"],
      ],
      grammar: [
        ["Das Passiv in formellem/akademischem Register", "Das Passiv (“werden” + Partizip II) se usa en alemán formal para enfatizar la acción o el objeto en lugar de quién la realiza.", "Diese Systeme sollten reguliert werden, um Verzerrungen zu vermeiden. / Algorithmische Verzerrung wurde in mehreren Studien dokumentiert."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “accountability” en alemán?",["to regulate", "unintended consequences", "algorithmic bias", "die Rechenschaftspflicht"],3,"“Accountability” es “die Rechenschaftspflicht” en alemán."],
      ["mcq","¿Cómo se dice “algorithmic bias” en alemán?",["die algorithmische Verzerrung", "artificial intelligence", "unintended consequences", "accountability"],0,"“Algorithmic bias” es “die algorithmische Verzerrung” en alemán."],
      ["fill","Completa: “Diese Systeme sollten reguliert ___, um Verzerrungen zu vermeiden.”",["worden", "werden", "wird", "sein"],1,"El Passiv con modal usa “sollten” + participio + “werden”: “sollten reguliert werden”."],
      ["translate","Traduce con Passiv: “These systems should be regulated to prevent bias.”",["Diese Systeme sollten regulieren, um Verzerrungen zu vermeiden.", "Diese Systeme sollten reguliert werden, um Verzerrungen zu vermeiden.", "Diese Systeme müssen reguliert werden, um Verzerrungen zu vermeiden.", "Diese Systeme sollten reguliert werden, um eine Verzerrung zu vermeiden."],1,"“Should be regulated” se traduce con Passiv: “sollten reguliert werden”."],
      ["arrange","Ordena: [reguliert / Algorithmen / werden / sollten]",["sollten algorithmen reguliert werden", "sollten reguliert algorithmen werden", "algorithmen sollten reguliert werden", "reguliert werden sollten algorithmen"],2,"Sujeto + Konjunktiv II modal + participio + “werden”."],
      ["writing","Escribe en alemán, en 55-75 palabras, un argumento ético sobre la inteligencia artificial usando al menos una construcción en Passiv.",[],["sollten reguliert werden", "algorithmische Verzerrung", "Rechenschaftspflicht"]],
    ]
  },
  {
    id:"de_c2_philosophy_of_mind", level:"C2", title:"Die Philosophie des Geistes und das Bewusstsein", emoji:"🧠", xp:100,
    description:"Reflexiona sobre la conciencia usando Spaltsätze (estructuras enfáticas) en alemán.",
    study: {
      vocab: [
        ["das Bewusstsein", "consciousness"],
        ["die subjektive Erfahrung", "subjective experience"],
        ["das Gedankenexperiment", "thought experiment"],
        ["der freie Wille", "free will"],
        ["das Selbstbewusstsein", "self-awareness"],
        ["das Leib-Seele-Problem", "the mind-body problem"],
      ],
      grammar: [
        ["Spaltsätze (“was... ist...”) para énfasis", "Los Spaltsätze (“was... ist...”) reorganizan la oración para poner énfasis en un elemento concreto, muy usados en discurso filosófico y académico.", "Was das Bewusstsein wirklich definiert, ist nicht nur Verhalten, sondern subjektive Erfahrung."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “thought experiment” en alemán?",["the mind-body problem", "das Gedankenexperiment", "subjective experience", "thought experiment"],1,"“Thought experiment” es “das Gedankenexperiment” en alemán."],
      ["mcq","¿Cómo se dice “free will” en alemán?",["thought experiment", "der freie Wille", "free will", "subjective experience"],1,"“Free will” es “der freie Wille” en alemán."],
      ["fill","Completa: “Was das Bewusstsein wirklich definiert, ___ nicht nur Verhalten.”",["ist", "war", "sind", "sei"],0,"En Spaltsätze con sujeto singular se usa “ist”: “was definiert... ist”."],
      ["translate","Traduce con estructura enfática: “What truly defines consciousness is not behavior alone, but subjective experience.”",["Was das Bewusstsein wirklich definiert, ist nicht nur Verhalten, sondern subjektive Erfahrung.", "Was das Bewusstsein wirklich definiert, ist nur Verhalten, nicht subjektive Erfahrung.", "Was das Bewusstsein definiert wirklich, ist nicht nur Verhalten, sondern subjektive Erfahrung.", "Was das Bewusstsein wirklich definierte, ist nicht nur Verhalten, sondern subjektive Erfahrung."],0,"El Spaltsatz mantiene “was + verbo, ist nicht nur... sondern...”, con “wirklich” antes del verbo."],
      ["arrange","Ordena: [Willen / diskutieren / freien / immer / noch / Philosophen / den]",["philosophen diskutieren immer noch den freien willen", "immer freien philosophen willen den noch diskutieren", "freien immer noch philosophen diskutieren den willen", "philosophen den noch freien diskutieren immer willen"],0,"Sujeto + verbo + adverbio + adverbio + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, tu propia postura sobre el libre albedrío o la conciencia, usando al menos un Spaltsatz (“was... ist...”).",[],["was wirklich definiert", "Bewusstsein", "freier Wille"]],
    ]
  },
  {
    id:"de_a1_garden_plants", level:"A1", title:"Der Garten und die Pflanzen", emoji:"🌱", xp:38,
    description:"Lerne Gartenvokabular und einfache Anweisungen mit dem Imperativ auf Deutsch.",
    study: {
      vocab: [
        ["die Pflanzen gießen", "to water the plants"],
        ["der Samen", "the seed"],
        ["wachsen", "to grow"],
        ["die Blume", "the flower"],
        ["die Erde", "the soil"],
        ["das Sonnenlicht", "sunlight"],
      ],
      grammar: [
        ["Der Imperativ für Anweisungen", "Der Imperativ (du-Form) wird für Befehle oder Anweisungen benutzt. Die negative Form nutzt “nicht”.", "Gieß die Pflanzen jeden Tag. / Vergiss nicht, das Tor zu schließen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the seed” en alemán?",["der Samen", "to grow", "to water the plants", "the flower"],0,"“The seed” es “der Samen” en alemán."],
      ["mcq","¿Cómo se dice “to grow” en alemán?",["sunlight", "the seed", "wachsen", "to grow"],2,"“To grow” es “wachsen” en alemán."],
      ["fill","Completa: “___ die Pflanzen jeden Tag, sonst sterben sie.”",["Gießen", "Gießend", "Gieß", "Gießt"],2,"El imperativo (du) de “gießen” es “gieß”."],
      ["translate","Traduce: “Water the plants every day.”",["Du gießt die Pflanzen jeden Tag.", "Gieß die Pflanzen jede Woche.", "Gießen die Pflanzen jeden Tag.", "Gieß die Pflanzen jeden Tag."],3,"El imperativo comienza directamente con el verbo conjugado: “Gieß die Pflanzen...”."],
      ["arrange","Ordena: [vergiss / Tor / das / nicht / schließen / zu]",["zu tor vergiss nicht das schließen", "zu das nicht schließen vergiss tor", "das vergiss tor zu schließen nicht", "vergiss nicht das tor zu schließen"],3,"“Vergiss nicht” + “zu” + infinitivo + artículo + sustantivo."],
      ["writing","Describe en alemán, en 20-30 palabras, instrucciones para cuidar un jardín usando el imperativo.",[],["gieß", "vergiss nicht", "wächst"]],
    ]
  },
  {
    id:"de_a2_library_books", level:"A2", title:"Die Bibliothek und die Bücher", emoji:"📚", xp:48,
    description:"Lerne Bibliotheksvokabular und erzähle im Perfekt auf Deutsch.",
    study: {
      vocab: [
        ["ein Buch ausleihen", "to borrow a book"],
        ["der Bibliotheksausweis", "the library card"],
        ["das Rückgabedatum", "the due date"],
        ["das Bücherregal", "the bookshelf"],
        ["der Roman", "the novel"],
        ["ein Buch zurückgeben", "to return a book"],
      ],
      grammar: [
        ["Perfekt zum Erzählen", "El Perfekt (“haben/sein” + Partizip II) describe acciones completas en el pasado.", "Ich habe letzte Woche einen Roman ausgeliehen. / Sie hat das Buch pünktlich zurückgegeben."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the library card” en alemán?",["to return a book", "the library card", "der Bibliotheksausweis", "the novel"],2,"“The library card” es “der Bibliotheksausweis” en alemán."],
      ["mcq","¿Cómo se dice “the due date” en alemán?",["to borrow a book", "das Rückgabedatum", "the library card", "the novel"],1,"“The due date” es “das Rückgabedatum” en alemán."],
      ["fill","Completa: “Ich ___ letzte Woche einen Roman ausgeliehen.”",["habe", "hatte", "hast", "habend"],0,"El Perfekt con “ich” usa “habe” + Partizip II: “ich habe ausgeliehen”."],
      ["translate","Traduce: “She returned the book on time.”",["Sie hat den Roman pünktlich zurückgegeben.", "Sie gibt das Buch pünktlich zurück.", "Sie hat das Buch pünktlich zurückgegeben.", "Sie hat das Buch spät zurückgegeben."],2,"“Returned” se traduce con Perfekt: “hat zurückgegeben”."],
      ["arrange","Ordena: [Regal / im / Buch / das / ist]",["das buch ist im regal", "ist das regal buch im", "ist buch regal das im", "im das buch regal ist"],0,"Artículo + sustantivo + verbo + preposición + sustantivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, la última vez que pediste prestado un libro en la biblioteca, usando el Perfekt.",[],["ich habe ausgeliehen", "zurückgegeben", "Bibliothek"]],
    ]
  },
  {
    id:"de_b1_parenting_childcare", level:"B1", title:"Elternschaft und Kinderbetreuung", emoji:"👶", xp:62,
    description:"Lerne Vokabular über Kinderbetreuung und benutze das Präteritum von “pflegen” für vergangene Gewohnheiten auf Deutsch.",
    study: {
      vocab: [
        ["stillen", "to breastfeed"],
        ["das Kinderbett", "the crib"],
        ["dem Baby ein Bäuerchen machen", "to burp the baby"],
        ["die Schlafenszeit-Routine", "bedtime routine"],
        ["babysitten", "to babysit"],
        ["der Kinderarzt", "the pediatrician"],
      ],
      grammar: [
        ["“Früher” + Präteritum para hábitos pasados", "“Früher” + verbo en Präteritum expresa un hábito que ya no es cierto en el presente, similar a “used to” en inglés.", "Das Baby wachte früher alle zwei Stunden auf. / Wir besuchten den Kinderarzt früher jeden Monat."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “the crib” en alemán?",["the crib", "to burp the baby", "das Kinderbett", "to breastfeed"],2,"“The crib” es “das Kinderbett” en alemán."],
      ["mcq","¿Cómo se dice “the pediatrician” en alemán?",["der Kinderarzt", "to breastfeed", "to babysit", "the crib"],0,"“The pediatrician” es “der Kinderarzt” en alemán."],
      ["fill","Completa: “Das Baby ___ früher alle zwei Stunden auf.”",["wachend", "wachte", "wacht", "gewacht"],1,"El Präteritum de “aufwachen” es “wachte... auf”."],
      ["translate","Traduce: “We used to visit the pediatrician every month.”",["Wir besuchten den Zahnarzt früher jeden Monat.", "Wir besuchten den Kinderarzt früher jede Woche.", "Wir besuchen den Kinderarzt jeden Monat.", "Wir besuchten den Kinderarzt früher jeden Monat."],3,"“Used to visit” se traduce con “früher” + Präteritum: “besuchten... früher”."],
      ["arrange","Ordena: [Kinderbett / schlief / im / sie]",["sie im schlief kinderbett", "im sie kinderbett schlief", "sie schlief im kinderbett", "sie kinderbett schlief im"],2,"Sujeto + verbo + preposición + sustantivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre la rutina de cuidado de un bebé que conoces, usando “früher” + Präteritum para hábitos pasados.",[],["früher", "Kinderbett", "Kinderarzt"]],
    ]
  },
  {
    id:"de_b2_archaeology_discoveries", level:"B2", title:"Die Archäologie und historische Entdeckungen", emoji:"🏺", xp:84,
    description:"Habla de descubrimientos arqueológicos usando modales de deducción en alemán.",
    study: {
      vocab: [
        ["die archäologische Stätte", "archaeological site"],
        ["ausgraben", "to excavate"],
        ["die alte Zivilisation", "ancient civilization"],
        ["das Artefakt", "artifact"],
        ["datieren (einen Fund)", "to date (a find)"],
        ["die Ruinen", "ruins"],
      ],
      grammar: [
        ["Modalverben der Vermutung über die Vergangenheit", "“Muss” + Partizip II + “haben/sein” expresa una deducción fuerte sobre el pasado; “könnte” expresa una posibilidad menos segura.", "Dieses Artefakt muss einem König gehört haben. / Die Stätte könnte ein Tempel gewesen sein."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ancient civilization” en alemán?",["to excavate", "artifact", "die alte Zivilisation", "ruins"],2,"“Ancient civilization” es “die alte Zivilisation” en alemán."],
      ["mcq","¿Cómo se dice “to excavate” en alemán?",["ruins", "ausgraben", "ancient civilization", "artifact"],1,"“To excavate” es “ausgraben” en alemán."],
      ["fill","Completa: “Dieses Artefakt ___ einem König gehört haben.”",["kann", "wird", "muss", "soll"],2,"“Muss” + participio + “haben” expresa una deducción fuerte: “muss... gehört haben”."],
      ["translate","Traduce: “The site might have been a temple.”",["Die Stätte könnte ein Tempel gewesen sein.", "Die Stätte könnte ein Tempel sein.", "Die Stätte muss ein Tempel gewesen sein.", "Die Stätte könnte ein Palast gewesen sein."],0,"“Might have been” se traduce con posibilidad menos segura: “könnte... gewesen sein”."],
      ["arrange","Ordena: [gebaut / alte / diese / eine / Zivilisation / haben / muss]",["alte eine gebaut muss haben zivilisation diese", "zivilisation gebaut diese muss haben alte eine", "eine alte zivilisation muss diese gebaut haben", "haben eine muss alte diese zivilisation gebaut"],2,"Artículo + adjetivo + sustantivo + modal + pronombre + participio + “haben”."],
      ["writing","Escribe en alemán, en 55-75 palabras, una hipótesis sobre un descubrimiento arqueológico imaginario, usando modales de deducción (“muss... gewesen sein”, “könnte... gewesen sein”) al menos dos veces.",[],["muss gewesen sein", "könnte gewesen sein", "Artefakt"]],
    ]
  },
  {
    id:"de_c1_neuroscience_brain", level:"C1", title:"Die Neurowissenschaften und das Gehirn", emoji:"🧬", xp:92,
    description:"Analiza la neurociencia usando la inversión enfática en registro académico en alemán.",
    study: {
      vocab: [
        ["die neuronale Bahn", "neural pathway"],
        ["die Synapse", "synapse"],
        ["die Neuroplastizität", "neuroplasticity"],
        ["die kognitive Funktion", "cognitive function"],
        ["der Neurotransmitter", "neurotransmitter"],
        ["die Hirnscan", "brain scan"],
      ],
      grammar: [
        ["Inversion nach Adverbien für die Betonung", "En alemán formal/académico, cuando un adverbio (“Selten”, “Nur so”) inicia la oración, el verbo conjugado va inmediatamente después (orden V2), invirtiendo el orden habitual.", "Selten haben Forscher so klare Beweise für Neuroplastizität gefunden. / Nur so lässt sich die kognitive Funktion erklären."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “neuroplasticity” en alemán?",["die Neuroplastizität", "cognitive function", "brain scan", "neuroplasticity"],0,"“Neuroplasticity” es “die Neuroplastizität” en alemán."],
      ["mcq","¿Cómo se dice “synapse” en alemán?",["neurotransmitter", "cognitive function", "brain scan", "die Synapse"],3,"“Synapse” es “die Synapse” en alemán."],
      ["fill","Completa: “Selten ___ Forscher so klare Beweise gefunden.”",["hatten", "hat", "haben", "habend"],2,"Tras “Selten” al inicio, el verbo conjugado va en segunda posición: “selten haben Forscher gefunden”."],
      ["translate","Traduce con inversión: “Rarely have researchers found such clear evidence.”",["Forscher haben selten so klare Beweise gefunden.", "Selten haben Forscher so klare Beweise gefunden.", "Selten haben Forscher so unklare Beweise gefunden.", "Selten Forscher haben so klare Beweise gefunden."],1,"El orden V2 alemán coloca el verbo conjugado justo tras el adverbio inicial: “selten haben Forscher”."],
      ["arrange","Ordena: [gut / sich / Gehirn / das / passt / an]",["passt gut an das gehirn sich", "passt gehirn gut an das sich", "das gehirn passt sich gut an", "gut das an passt sich gehirn"],2,"Artículo + sustantivo + pronombre reflexivo + verbo + adverbio + partícula."],
      ["writing","Escribe en alemán, en 55-75 palabras, un párrafo académico sobre el cerebro usando al menos una estructura de inversión enfática con “selten” o “nur so”.",[],["selten haben", "Neuroplastizität", "kognitive Funktion"]],
    ]
  },
  {
    id:"de_c2_behavioral_economics", level:"C2", title:"Die Verhaltensökonomie und kognitive Verzerrungen", emoji:"🧩", xp:100,
    description:"Analiza la economía conductual usando nominalización en registro académico en alemán.",
    study: {
      vocab: [
        ["die kognitive Verzerrung", "cognitive bias"],
        ["die Verlustaversion", "loss aversion"],
        ["der Ankereffekt", "anchoring effect"],
        ["die Entscheidungsfindung", "decision-making"],
        ["das irrationale Verhalten", "irrational behavior"],
        ["der sanfte Anstoß", "nudge"],
      ],
      grammar: [
        ["Nominalisierung im akademischen Register", "La nominalización convierte verbos en sustantivos abstractos (“entscheiden” → “die Entscheidungsfindung”), un rasgo típico del alemán académico formal.", "Die Persistenz der kognitiven Verzerrung beeinflusst die Entscheidungsfindung. / Forscher untersuchen die Vermeidung von Verlusten."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “loss aversion” en alemán?",["loss aversion", "die Verlustaversion", "decision-making", "nudge"],1,"“Loss aversion” es “die Verlustaversion” en alemán."],
      ["mcq","¿Cómo se dice “anchoring effect” en alemán?",["der Ankereffekt", "cognitive bias", "irrational behavior", "anchoring effect"],0,"“Anchoring effect” es “der Ankereffekt” en alemán."],
      ["fill","Completa: “Die Persistenz der kognitiven Verzerrung beeinflusst die ___.”",["Entschieden", "Entscheidungsfindung", "Entscheiden", "Entscheidung"],1,"La forma nominalizada de “entscheiden” en este registro académico es “die Entscheidungsfindung”."],
      ["translate","Traduce en registro académico: “Loss aversion affects decision-making.”",["Die Verlustaversion beeinflusst das Entscheiden.", "Die Verlustaversion beeinflusst die Entscheidungsfindung.", "Die Verlustaversion beeinflussen die Entscheidungsfindung.", "Die Aversion des Verlustes beeinflusst die Entscheidungsfindung."],1,"“Decision-making” se traduce con la forma nominalizada “die Entscheidungsfindung”, no con el verbo “entscheiden”."],
      ["arrange","Ordena: [Verzerrung / untersuchen / Forscher / kognitive / die]",["forscher untersuchen die kognitive verzerrung", "kognitive untersuchen die forscher verzerrung", "die forscher kognitive untersuchen verzerrung", "forscher die kognitive verzerrung untersuchen"],0,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un párrafo académico sobre un sesgo cognitivo, usando al menos dos sustantivos nominalizados (como “die Entscheidungsfindung” o “die Vermeidung”).",[],["die Entscheidungsfindung", "kognitive Verzerrung", "Verlustaversion"]],
    ]
  },
  {
    id:"de_a1_photography_cameras", level:"A1", title:"Die Fotografie und die Kameras", emoji:"📷", xp:38,
    description:"Lerne Fotografie-Vokabular und benutze “können” für Fähigkeit auf Deutsch.",
    study: {
      vocab: [
        ["die Kamera", "camera"],
        ["das Foto", "photo/picture"],
        ["das Objektiv", "lens"],
        ["ein Foto machen", "to take a picture"],
        ["der Zoom", "zoom"],
        ["die Speicherkarte", "memory card"],
      ],
      grammar: [
        ["“Können” für Fähigkeit", "“Können” + infinitivo al final expresa habilidad o capacidad; en negativo se usa “kann nicht”.", "Ich kann mit dieser Kamera gute Fotos machen. / Diese Kamera kann nicht sehr weit zoomen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “lens” en alemán?",["das Objektiv", "memory card", "lens", "zoom"],0,"“Lens” es “das Objektiv” en alemán."],
      ["mcq","¿Cómo se dice “memory card” en alemán?",["die Speicherkarte", "to take a picture", "lens", "memory card"],0,"“Memory card” es “die Speicherkarte” en alemán."],
      ["fill","Completa: “Diese Kamera ___ nicht sehr weit zoomen.”",["könnt", "kannst", "können", "kann"],3,"“Können” conjugado en tercera persona singular es “kann”."],
      ["translate","Traduce: “I can take good photos with this camera.”",["Ich kann mit jener Kamera gute Fotos machen.", "Ich kann mit dieser Kamera gute Fotos machen.", "Ich kann mit dieser Kamera gute Fotos gemacht.", "Ich kann nicht mit dieser Kamera gute Fotos machen."],1,"“I can take” se traduce con “ich kann machen”, “können” + infinitivo al final."],
      ["arrange","Ordena: [weit / kann / nicht / kamera / diese / zoomen / sehr]",["diese kamera kann nicht sehr weit zoomen", "zoomen diese nicht kamera weit sehr kann", "kamera kann nicht sehr diese weit zoomen", "weit kann kamera diese nicht sehr zoomen"],0,"Sujeto + modal + “nicht” + adverbio + adverbio + infinitivo."],
      ["writing","Describe en alemán, en 20-30 palabras, lo que puedes y no puedes hacer con tu cámara o teléfono, usando “können”.",[],["ich kann", "kann nicht", "Kamera"]],
    ]
  },
  {
    id:"de_a2_camping_outdoors", level:"A2", title:"Camping und Outdoor-Aktivitäten", emoji:"🏕️", xp:48,
    description:"Lerne Camping-Vokabular und benutze “etwas/kein” für Mengen auf Deutsch.",
    study: {
      vocab: [
        ["das Zelt", "tent"],
        ["der Schlafsack", "sleeping bag"],
        ["das Lagerfeuer", "campfire"],
        ["der Wanderweg", "hiking trail"],
        ["der Rucksack", "backpack"],
        ["ein Zelt aufbauen", "to pitch a tent"],
      ],
      grammar: [
        ["“Etwas/kein” für Mengen", "“Etwas” se usa en afirmativas para cantidades indefinidas; “kein/keine” se usa en negativas.", "Wir haben etwas Holz für das Lagerfeuer. / Wir haben kein Wasser mehr."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sleeping bag” en alemán?",["hiking trail", "campfire", "sleeping bag", "der Schlafsack"],3,"“Sleeping bag” es “der Schlafsack” en alemán."],
      ["mcq","¿Cómo se dice “hiking trail” en alemán?",["sleeping bag", "tent", "to pitch a tent", "der Wanderweg"],3,"“Hiking trail” es “der Wanderweg” en alemán."],
      ["fill","Completa: “Wir haben ___ Wasser mehr.”",["wenig", "kein", "viel", "etwas"],1,"En oraciones negativas se usa “kein”: “wir haben kein Wasser mehr”."],
      ["translate","Traduce: “We have some firewood for the campfire.”",["Wir haben etwas Holz für das Lagerfeuer.", "Wir hat etwas Holz für das Lagerfeuer.", "Wir haben etwas Holz für das Zelt.", "Wir haben kein Holz für das Lagerfeuer."],0,"“Some firewood” en afirmativa se traduce con “etwas Holz”."],
      ["arrange","Ordena: [lang / Wanderweg / ist / dieser]",["dieser wanderweg ist lang", "ist wanderweg dieser lang", "dieser lang wanderweg ist", "dieser ist wanderweg lang"],0,"Pronombre + sustantivo + verbo + adjetivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, un plan de camping usando “etwas/kein” para lo que necesitas llevar.",[],["etwas", "kein", "Zelt"]],
    ]
  },
  {
    id:"de_b1_beekeeping_bees", level:"B1", title:"Die Imkerei und die Bienen", emoji:"🐝", xp:62,
    description:"Lerne Imkerei-Vokabular und benutze Relativsätze auf Deutsch.",
    study: {
      vocab: [
        ["der Bienenstock", "beehive"],
        ["der Honig", "honey"],
        ["stechen", "to sting"],
        ["bestäuben", "to pollinate"],
        ["der Imker", "beekeeper"],
        ["die Bienenkönigin", "queen bee"],
      ],
      grammar: [
        ["Relativsätze (der/die/das)", "Los pronombres relativos alemanes (“der, die, das”) concuerdan en género y número con el sustantivo al que se refieren, y su caso depende de su función en la cláusula.", "Der Imker, der diesen Bienenstock betreut, ist sehr erfahren. / Bienen, die Blumen bestäuben, sind für die Landwirtschaft wichtig."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “beehive” en alemán?",["der Bienenstock", "to pollinate", "honey", "to sting"],0,"“Beehive” es “der Bienenstock” en alemán."],
      ["mcq","¿Cómo se dice “to pollinate” en alemán?",["queen bee", "to pollinate", "beehive", "bestäuben"],3,"“To pollinate” es “bestäuben” en alemán."],
      ["fill","Completa: “Der Imker, ___ diesen Bienenstock betreut, ist sehr erfahren.”",["das", "den", "die", "der"],3,"El sujeto masculino “der Imker” requiere el relativo “der” en nominativo."],
      ["translate","Traduce: “Bees, which pollinate flowers, are essential to farming.”",["Bienen, der Blumen bestäuben, sind für die Landwirtschaft wichtig.", "Bienen, die Blumen bestäubt, sind für die Landwirtschaft wichtig.", "Bienen, die Blumen bestäuben, ist für die Landwirtschaft wichtig.", "Bienen, die Blumen bestäuben, sind für die Landwirtschaft wichtig."],3,"“Which” con sujeto plural “Bienen” se traduce con el relativo “die”: “bienen, die bestäuben”."],
      ["arrange","Ordena: [leben / Stock / Bienen / im / die]",["bienen leben im stock die", "die stock bienen im leben", "die bienen leben im stock", "bienen leben im die stock"],2,"Artículo + sustantivo + verbo + preposición + sustantivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre la importancia de las abejas usando al menos un pronombre relativo (“der/die/das”).",[],["der", "die", "Bienenstock"]],
    ]
  },
  {
    id:"de_b2_cryptocurrency_digital_finance", level:"B2", title:"Kryptowährungen und digitale Finanzen", emoji:"₿", xp:84,
    description:"Habla de criptomonedas usando el Konjunktiv II der Vergangenheit en alemán.",
    study: {
      vocab: [
        ["die Kryptowährung", "cryptocurrency"],
        ["die Blockchain", "blockchain"],
        ["die digitale Geldbörse", "digital wallet"],
        ["investieren", "to invest"],
        ["die Volatilität", "volatility"],
        ["dezentralisiert", "decentralized"],
      ],
      grammar: [
        ["Konjunktiv II der Vergangenheit para hipótesis irreales", "Para hipótesis irreales sobre el pasado se usa “wenn” + Plusquamperfekt (Konjunktiv II), y “würde/hätte” en la consecuencia.", "Wenn ich früher investiert hätte, hätte ich mehr Geld verdient. / Wenn der Markt nicht eingebrochen wäre, wären die Preise hoch geblieben."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “blockchain” en alemán?",["die Blockchain", "cryptocurrency", "to invest", "volatility"],0,"“Blockchain” es “die Blockchain” en alemán."],
      ["mcq","¿Cómo se dice “volatility” en alemán?",["cryptocurrency", "die Volatilität", "to invest", "digital wallet"],1,"“Volatility” es “die Volatilität” en alemán."],
      ["fill","Completa: “Wenn ich früher investiert ___, hätte ich mehr Geld verdient.”",["hatte", "würde", "habe", "hätte"],3,"El Konjunktiv II de la Vergangenheit usa “hätte” + participio: “wenn ich investiert hätte”."],
      ["translate","Traduce: “If the market hadn't crashed, prices would have stayed high.”",["Wenn der Markt nicht eingebrochen wäre, waren die Preise hoch geblieben.", "Wenn der Markt nicht eingebrochen wäre, wären die Preise hoch geblieben.", "Wenn der Markt nicht einbricht, wären die Preise hoch geblieben.", "Wenn der Markt nicht eingebrochen wäre, würden die Preise hoch bleiben."],1,"“Hadn't crashed... would have stayed” se traduce con Konjunktiv II de la Vergangenheit: “wäre eingebrochen... wären geblieben”."],
      ["arrange","Ordena: [riskant / ist / Kryptowährung / sehr / die]",["die kryptowährung ist sehr riskant", "die riskant sehr kryptowährung ist", "sehr die riskant kryptowährung ist", "kryptowährung riskant die ist sehr"],0,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre una decisión financiera pasada usando “wenn ich... hätte...” al menos dos veces.",[],["wenn ich", "hätte", "Kryptowährung"]],
    ]
  },
  {
    id:"de_c1_bioethics_gene_editing", level:"C1", title:"Die Bioethik und die Genom-Editierung", emoji:"🧬", xp:92,
    description:"Analiza la bioética usando “so...dass/derart...dass” para énfasis en alemán.",
    study: {
      vocab: [
        ["die Genom-Editierung", "gene editing"],
        ["die informierte Einwilligung", "informed consent"],
        ["die klinische Studie", "clinical trial"],
        ["die genetische Veränderung", "genetic modification"],
        ["das ethische Dilemma", "ethical dilemma"],
        ["die DNA manipulieren", "to manipulate DNA"],
      ],
      grammar: [
        ["“So...dass/derart...dass” para énfasis", "“So” + adjetivo/adverbio + “dass” expresa una consecuencia enfática, típica del registro formal/académico.", "Die Genom-Editierung ist so mächtig, dass sie ernste ethische Fragen aufwirft. / Es ist ein derart komplexes Dilemma, dass Experten noch uneinig sind."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “informed consent” en alemán?",["die informierte Einwilligung", "genetic modification", "ethical dilemma", "gene editing"],0,"“Informed consent” es “die informierte Einwilligung” en alemán."],
      ["mcq","¿Cómo se dice “clinical trial” en alemán?",["die klinische Studie", "informed consent", "to manipulate DNA", "genetic modification"],0,"“Clinical trial” es “die klinische Studie” en alemán."],
      ["fill","Completa: “Die Genom-Editierung ist ___ mächtig, dass sie ernste ethische Fragen aufwirft.”",["zu", "so", "sehr", "derart"],1,"“So” + adjetivo + “dass” expresa consecuencia enfática: “so mächtig, dass”."],
      ["translate","Traduce con estructura enfática: “It is such a complex issue that experts still disagree.”",["Es ist ein derart komplexes Dilemma, dass Experten noch einig sind.", "Es ist ein derart komplexes Dilemma, dass Experten noch uneinig sind.", "Es ist ein so komplexes Dilemma, dass Experten noch einig sind.", "Es ist derart ein komplexes Dilemma, dass Experten noch uneinig sind."],1,"“Such a complex issue that” se traduce con “derart komplexes Dilemma, dass”."],
      ["arrange","Ordena: [ethisches / ist / reales / dies / ein / Dilemma]",["dilemma reales ist dies ethisches ein", "dilemma ethisches ein reales dies ist", "ein ethisches dies reales dilemma ist", "dies ist ein reales ethisches dilemma"],3,"Pronombre + verbo + artículo + adjetivo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un argumento sobre la edición genética usando “so...dass” o “derart...dass” al menos dos veces.",[],["so...dass", "derart...dass", "Genom-Editierung"]],
    ]
  },
  {
    id:"de_c2_geopolitics_international_relations", level:"C2", title:"Die Geopolitik und die internationalen Beziehungen", emoji:"🌐", xp:100,
    description:"Analiza la geopolítica usando el Partizip I/II en registro académico en alemán.",
    study: {
      vocab: [
        ["die diplomatischen Beziehungen", "diplomatic relations"],
        ["die Souveränität", "sovereignty"],
        ["die Sanktionen", "sanctions"],
        ["das bilaterale Abkommen", "bilateral agreement"],
        ["die geopolitische Spannung", "geopolitical tension"],
        ["einen Vertrag aushandeln", "to negotiate a treaty"],
      ],
      grammar: [
        ["Partizipialkonstruktionen für ein knappes akademisches Register", "Las construcciones de participio (“Nach Analyse der Daten...”, “Angesichts der zunehmenden Sanktionen...”) reemplazan cláusulas subordinadas completas para un estilo más conciso y formal.", "Nach Analyse der Daten kamen die Forscher zu dem Schluss, dass die Spannungen zunehmen würden. / Angesichts der zunehmenden Sanktionen änderte die Regierung ihre Politik."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sovereignty” en alemán?",["bilateral agreement", "die Souveränität", "geopolitical tension", "sovereignty"],1,"“Sovereignty” es “die Souveränität” en alemán."],
      ["mcq","¿Cómo se dice “geopolitical tension” en alemán?",["geopolitical tension", "diplomatic relations", "die geopolitische Spannung", "bilateral agreement"],2,"“Geopolitical tension” es “die geopolitische Spannung” en alemán."],
      ["fill","Completa: “___ der zunehmenden Sanktionen änderte die Regierung ihre Politik.”",["Angesichts", "Trotz", "Wegen", "Während"],0,"“Angesichts” + genitivo introduce esta construcción concisa formal: “angesichts der Sanktionen”."],
      ["translate","Traduce con construcción concisa: “Having analyzed the data, researchers concluded that tensions would rise.”",["Nach der Analyse Daten kamen die Forscher zu dem Schluss, dass die Spannungen zunehmen würden.", "Nach Analysieren der Daten kamen die Forscher zu dem Schluss, dass die Spannungen zunehmen würden.", "Nach Analyse der Daten kamen die Forscher zu dem Schluss, dass die Spannungen zunehmen würden.", "Nach Analyse der Daten kommen die Forscher zu dem Schluss, dass die Spannungen zunehmen würden."],2,"La construcción concisa formal usa “nach Analyse der Daten” (sustantivo, no infinitivo)."],
      ["arrange","Ordena: [aushandeln / Vertrag / Nationen / werden / den / die]",["den die aushandeln werden nationen vertrag", "die nationen werden den vertrag aushandeln", "den aushandeln vertrag werden nationen die", "werden aushandeln vertrag die den nationen"],1,"Artículo + sustantivo + auxiliar + artículo + sustantivo + infinitivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un párrafo académico sobre geopolítica usando al menos una construcción concisa con “nach...” o “angesichts...”.",[],["nach Analyse", "angesichts", "Souveränität"]],
    ]
  },
  {
    id:"de_a1_hairdresser_personal_care", level:"A1", title:"Der Friseur und die Körperpflege", emoji:"💇", xp:38,
    description:"Lerne Friseur-Vokabular und benutze den Komparativ und Superlativ auf Deutsch.",
    study: {
      vocab: [
        ["der Haarschnitt", "haircut"],
        ["der Friseur/die Friseurin", "hairdresser"],
        ["die Schere", "scissors"],
        ["kurze/lange Haare", "short/long hair"],
        ["stutzen", "to trim"],
        ["der Spiegel", "mirror"],
      ],
      grammar: [
        ["Komparativ und Superlativ", "El comparativo se forma con “-er”, y el superlativo con “am... -sten”.", "Dieser Haarschnitt ist kürzer als der letzte. / Sie hat die längsten Haare in der Familie."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “scissors” en alemán?",["mirror", "to trim", "hairdresser", "die Schere"],3,"“Scissors” es “die Schere” en alemán."],
      ["mcq","¿Cómo se dice “to trim” en alemán?",["stutzen", "short/long hair", "haircut", "to trim"],0,"“To trim” es “stutzen” en alemán."],
      ["fill","Completa: “Dieser Haarschnitt ist ___ als der letzte.”",["kürzeste", "am kürzesten", "kürzer", "kurz"],2,"El comparativo de “kurz” es “kürzer” + “als”."],
      ["translate","Traduce: “She has the longest hair in the family.”",["Sie hat die längsten Haare in der Familien.", "Sie hat die längste Haare in der Familie.", "Sie hat die längeren Haare in der Familie.", "Sie hat die längsten Haare in der Familie."],3,"“The longest” con sustantivo plural se traduce con “die längsten”."],
      ["arrange","Ordena: [beste / Stadt / dies / der / Friseur / ist / in]",["friseur der in stadt beste der dies ist", "stadt der beste dies der in friseur ist", "dies ist der beste friseur in der stadt", "in der stadt friseur beste dies ist der"],2,"Pronombre + verbo + artículo + superlativo + sustantivo + preposición + artículo + sustantivo."],
      ["writing","Describe en alemán, en 20-30 palabras, tu corte de pelo ideal usando comparativos o superlativos.",[],["kürzer", "am längsten", "Haarschnitt"]],
    ]
  },
  {
    id:"de_a2_car_repair_shop", level:"A2", title:"Die Autowerkstatt und das Auto", emoji:"🚗", xp:48,
    description:"Lerne Vokabular der Autowerkstatt und benutze “viel/viele” auf Deutsch.",
    study: {
      vocab: [
        ["der Mechaniker", "mechanic"],
        ["der Platten", "flat tire"],
        ["der Motor", "engine"],
        ["das Auto reparieren", "to fix the car"],
        ["das Ersatzteil", "spare part"],
        ["der Ölwechsel", "oil change"],
      ],
      grammar: [
        ["“Viel/viele” für Mengen", "“Viel” se usa con sustantivos incontables singulares, “viele” con sustantivos contables plurales.", "Diese Reparatur braucht viele Ersatzteile. / Es bleibt nicht viel Zeit vor der Reise."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “flat tire” en alemán?",["mechanic", "spare part", "der Platten", "to fix the car"],2,"“Flat tire” es “der Platten” en alemán."],
      ["mcq","¿Cómo se dice “spare part” en alemán?",["spare part", "das Ersatzteil", "to fix the car", "flat tire"],1,"“Spare part” es “das Ersatzteil” en alemán."],
      ["fill","Completa: “Es bleibt nicht ___ Zeit vor der Reise.”",["viele", "wenige", "viel", "einige"],2,"“Zeit” es incontable singular, así que se usa “viel”: “viel Zeit”."],
      ["translate","Traduce: “This repair needs a lot of spare parts.”",["Diese Reparatur braucht viele Ersatzteil.", "Diese Reparatur brauchen viele Ersatzteile.", "Diese Reparatur braucht viele Ersatzteile.", "Diese Reparatur braucht viel Ersatzteile."],2,"“Spare parts” (plural) se traduce con “viele Ersatzteile”."],
      ["arrange","Ordena: [repariert / Mechaniker / Motor / hat / den / der]",["der mechaniker hat den motor repariert", "hat der motor den repariert mechaniker", "motor der repariert den hat mechaniker", "motor repariert den mechaniker hat der"],0,"Artículo + sustantivo + auxiliar + artículo + sustantivo + participio."],
      ["speaking","Describe en alemán, en 40-60 palabras, un problema con tu carro usando “viel/viele”.",[],["viel", "viele", "Ersatzteile"]],
    ]
  },
  {
    id:"de_b1_learning_musical_instrument", level:"B1", title:"Die Musik und ein Instrument lernen", emoji:"🎸", xp:62,
    description:"Lerne Musikvokabular und die Infinitivkonstruktion mit “zu” auf Deutsch.",
    study: {
      vocab: [
        ["Tonleitern üben", "to practice scales"],
        ["die Noten", "sheet music"],
        ["ein Instrument stimmen", "to tune an instrument"],
        ["der Rhythmus", "rhythm"],
        ["der Musiklehrer", "music teacher"],
        ["auftreten", "to perform"],
      ],
      grammar: [
        ["Infinitiv mit “zu”", "Muchos verbos alemanes van seguidos de “zu” + infinitivo al final de la oración, sobre todo tras verbos como “versuchen” o “wollen” (este último sin “zu”).", "Ich übe gern jeden Morgen Tonleitern zu spielen. / Sie will vor einem Publikum auftreten."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “sheet music” en alemán?",["to perform", "to practice scales", "rhythm", "die Noten"],3,"“Sheet music” es “die Noten” en alemán."],
      ["mcq","¿Cómo se dice “to tune an instrument” en alemán?",["to perform", "music teacher", "ein Instrument stimmen", "to practice scales"],2,"“To tune an instrument” es “ein Instrument stimmen” en alemán."],
      ["fill","Completa: “Sie ___ vor einem Publikum auftreten.”",["möchte zu", "kann zu", "will", "muss zu"],2,"“Wollen” va seguido de infinitivo SIN “zu”: “will auftreten”."],
      ["translate","Traduce: “She wants to perform in front of an audience.”",["Sie willst vor einem Publikum auftreten.", "Sie will vor einem Publikum zu auftreten.", "Sie will vor ein Publikum auftreten.", "Sie will vor einem Publikum auftreten."],3,"“Wollen” nunca lleva “zu” antes del infinitivo: “will auftreten”, no “will zu auftreten”."],
      ["arrange","Ordena: [stimmen / Instrument / muss / dieses / man]",["stimmen muss man instrument dieses", "man muss dieses instrument stimmen", "muss stimmen man instrument dieses", "dieses stimmen instrument muss man"],1,"Sujeto + modal + pronombre + sustantivo + infinitivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre aprender un instrumento musical usando al menos una construcción con “zu” + infinitivo.",[],["üben zu", "versuchen zu", "auftreten"]],
    ]
  },
  {
    id:"de_b2_recycling_circular_economy", level:"B2", title:"Recycling und die Kreislaufwirtschaft", emoji:"♻️", xp:84,
    description:"Habla del reciclaje usando el presente para verdades generales (Konditional null) en alemán.",
    study: {
      vocab: [
        ["recyceln", "to recycle"],
        ["die Kreislaufwirtschaft", "circular economy"],
        ["die Abfallwirtschaft", "waste management"],
        ["wiederverwenden", "to reuse"],
        ["die Mülldeponie", "landfill"],
        ["der Rohstoff", "raw material"],
      ],
      grammar: [
        ["Präsens für allgemeine Wahrheiten (Konditional null)", "En alemán, el condicional cero se expresa con “wenn” + presente en ambas cláusulas, para hechos o verdades generales.", "Wenn man Papier recycelt, spart das Bäume. / Materialien landen auf einer Mülldeponie, wenn sie nicht wiederverwendet werden."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “circular economy” en alemán?",["to recycle", "circular economy", "die Kreislaufwirtschaft", "waste management"],2,"“Circular economy” es “die Kreislaufwirtschaft” en alemán."],
      ["mcq","¿Cómo se dice “landfill” en alemán?",["landfill", "raw material", "waste management", "die Mülldeponie"],3,"“Landfill” es “die Mülldeponie” en alemán."],
      ["fill","Completa: “Wenn man Papier ___, spart das Bäume.”",["recycelt hat", "recycelt", "recycelte", "recyceln"],1,"El condicional cero usa presente en ambas cláusulas: “wenn man recycelt”."],
      ["translate","Traduce: “Materials go to a landfill if they aren't reused.”",["Materialien landen auf einer Mülldeponie, wenn sie nicht wiederverwendet wurden.", "Materialien landen auf einer Mülldeponie, wenn sie nicht wiederverwendet werden.", "Material landen auf einer Mülldeponie, wenn sie nicht wiederverwendet werden.", "Materialien landeten auf einer Mülldeponie, wenn sie nicht wiederverwendet werden."],1,"El condicional cero mantiene presente en ambas cláusulas: “landen... wenn sie werden”."],
      ["arrange","Ordena: [Rohstoffe / spart / Recycling]",["recycling rohstoffe spart", "rohstoffe recycling spart", "recycling spart rohstoffe", "spart rohstoffe recycling"],2,"Sujeto + verbo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, una explicación sobre la economía circular usando “wenn... Präsens” al menos dos veces.",[],["wenn man recycelt", "wenn...", "Kreislaufwirtschaft"]],
    ]
  },
  {
    id:"de_c1_political_philosophy_social_justice", level:"C1", title:"Die politische Philosophie und soziale Gerechtigkeit", emoji:"⚖️", xp:92,
    description:"Analiza la justicia social usando “wenn nur/hätte” para arrepentimiento en registro formal en alemán.",
    study: {
      vocab: [
        ["die soziale Gerechtigkeit", "social justice"],
        ["die Ungleichheit", "inequality"],
        ["die Bürgerrechte", "civil rights"],
        ["die Umverteilung", "redistribution"],
        ["die systemische Unterdrückung", "systemic oppression"],
        ["das Gemeinwohl", "common good"],
      ],
      grammar: [
        ["“Wenn nur” + Plusquamperfekt für Bedauern", "“Wenn nur” + Plusquamperfekt (Konjunktiv II) expresa arrepentimiento o el deseo de que algo pasado hubiera sido diferente.", "Wenn nur frühere Reformen die systemische Unterdrückung angegangen wären. / Philosophen wünschten sich, Ungleichheit könnte allein durch Politik gelöst werden."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “inequality” en alemán?",["civil rights", "social justice", "common good", "die Ungleichheit"],3,"“Inequality” es “die Ungleichheit” en alemán."],
      ["mcq","¿Cómo se dice “redistribution” en alemán?",["inequality", "social justice", "die Umverteilung", "systemic oppression"],2,"“Redistribution” es “die Umverteilung” en alemán."],
      ["fill","Completa: “Wenn nur frühere Reformen die Unterdrückung ___ wären.”",["angegangen", "angeht", "angehen", "angegangen haben"],0,"El Plusquamperfekt (Konjunktiv II) con “sein” usa participio + “wären”: “angegangen wären”."],
      ["translate","Traduce: “Philosophers wish inequality could be solved by policy alone.”",["Philosoph wünschten sich, Ungleichheit könnte allein durch Politik gelöst werden.", "Philosophen wünschten sich, Ungleichheit kann allein durch Politik gelöst werden.", "Philosophen wünschten sich, Ungleichheit könnte allein durch Politik lösen.", "Philosophen wünschten sich, Ungleichheit könnte allein durch Politik gelöst werden."],3,"“Wish... could be solved” se traduce con Konjunktiv II: “wünschten sich... könnte gelöst werden”."],
      ["arrange","Ordena: [Gemeinwohl / diskutieren / das / Philosophen]",["gemeinwohl diskutieren das philosophen", "das philosophen diskutieren gemeinwohl", "philosophen diskutieren das gemeinwohl", "das philosophen gemeinwohl diskutieren"],2,"Sujeto + verbo + artículo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un argumento sobre justicia social usando “wenn nur” al menos dos veces.",[],["wenn nur", "wären", "soziale Gerechtigkeit"]],
    ]
  },
  {
    id:"de_c2_cultural_anthropology_rituals", level:"C2", title:"Die Kulturanthropologie und die Rituale", emoji:"🗿", xp:100,
    description:"Analiza los rituales culturales usando comparativos dobles en alemán.",
    study: {
      vocab: [
        ["das Ritual", "ritual"],
        ["der Kulturrelativismus", "cultural relativism"],
        ["der Übergangsritus", "rite of passage"],
        ["die Verwandtschaft", "kinship"],
        ["die kollektive Identität", "collective identity"],
        ["die mündliche Überlieferung", "oral tradition"],
      ],
      grammar: [
        ["Doppelte Komparative (“je... desto...”)", "La estructura “je + comparativo, desto + comparativo” expresa cómo dos cosas cambian juntas de forma proporcional.", "Je mehr Anthropologen Rituale untersuchen, desto mehr verstehen sie die kollektive Identität. / Je älter die Tradition, desto stärker ihr Einfluss."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cultural relativism” en alemán?",["oral tradition", "ritual", "kinship", "der Kulturrelativismus"],3,"“Cultural relativism” es “der Kulturrelativismus” en alemán."],
      ["mcq","¿Cómo se dice “rite of passage” en alemán?",["rite of passage", "ritual", "der Übergangsritus", "cultural relativism"],2,"“Rite of passage” es “der Übergangsritus” en alemán."],
      ["fill","Completa: “Je ___ Anthropologen Rituale untersuchen, desto mehr verstehen sie die kollektive Identität.”",["meiste", "viele", "mehr", "viel"],2,"El comparativo doble usa “je mehr... desto mehr” en ambas cláusulas."],
      ["translate","Traduce con comparativo doble: “The older the tradition, the stronger its influence.”",["Je älter die Tradition, desto stark ihr Einfluss.", "Je älter die Tradition, desto stärker ihr Einfluss.", "Je alt die Tradition, desto stärker ihr Einfluss.", "Je älter die Tradition ist, ihr Einfluss ist stärker."],1,"El comparativo doble alemán usa “je + comparativo, desto + comparativo”, sin verbo obligatorio."],
      ["arrange","Ordena: [Erwachsensein / markieren / Übergangsriten / das]",["das erwachsensein markieren übergangsriten", "markieren das erwachsensein übergangsriten", "übergangsriten markieren das erwachsensein", "übergangsriten das erwachsensein markieren"],2,"Sustantivo + verbo + artículo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre rituales culturales usando al menos un comparativo doble (“je... desto...”).",[],["je mehr", "desto mehr", "Ritual"]],
    ]
  },
  {
    id:"de_a1_hardware_store_tools", level:"A1", title:"Im Baumarkt: grundlegende Werkzeuge", emoji:"🔨", xp:38,
    description:"Lerne Werkzeug-Vokabular und benutze den Gleichheitsvergleich (“so... wie”) auf Deutsch.",
    study: {
      vocab: [
        ["der Hammer", "hammer"],
        ["der Schraubenzieher", "screwdriver"],
        ["der Nagel", "nail"],
        ["die Schraube", "screw"],
        ["der Werkzeugkasten", "toolbox"],
        ["die Leiter", "ladder"],
      ],
      grammar: [
        ["Gleichheitsvergleich (“so... wie”)", "“So” + adjetivo + “wie” expresa que dos cosas son iguales en cierta cualidad.", "Dieser Hammer ist so schwer wie jener. / Die Leiter ist nicht so hoch wie die Mauer."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “screwdriver” en alemán?",["nail", "der Schraubenzieher", "ladder", "toolbox"],1,"“Screwdriver” es “der Schraubenzieher” en alemán."],
      ["mcq","¿Cómo se dice “ladder” en alemán?",["nail", "screwdriver", "die Leiter", "ladder"],2,"“Ladder” es “die Leiter” en alemán."],
      ["fill","Completa: “Dieser Hammer ist ___ schwer wie jener.”",["so", "als", "mehr", "sehr"],0,"El comparativo de igualdad usa “so + adjetivo + wie”: “so schwer wie”."],
      ["translate","Traduce: “The ladder isn't as tall as the wall.”",["Die Leiter ist nicht so hoch als die Mauer.", "Die Leiter ist so hoch wie die Mauer.", "Die Leiter ist nicht so hoch wie die Mauer.", "Die Leiter ist nicht mehr hoch wie die Mauer."],2,"“Isn't as... as” se traduce con “nicht so... wie”."],
      ["arrange","Ordena: [schwer / Werkzeugkasten / ist / der / sehr]",["werkzeugkasten schwer der sehr ist", "der ist werkzeugkasten sehr schwer", "der schwer sehr werkzeugkasten ist", "der werkzeugkasten ist sehr schwer"],3,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Describe en alemán, en 20-30 palabras, comparando dos herramientas usando “so... wie”.",[],["so schwer wie", "so hoch wie", "Hammer"]],
    ]
  },
  {
    id:"de_a2_laundry_clothing_care", level:"A2", title:"Die Wäscherei und die Kleiderpflege", emoji:"🧺", xp:48,
    description:"Lerne Wäscherei-Vokabular und benutze “ein paar/ein bisschen” auf Deutsch.",
    study: {
      vocab: [
        ["die Waschmaschine", "washing machine"],
        ["das Waschmittel", "detergent"],
        ["die Wäsche aufhängen", "to hang out clothes"],
        ["der Fleck", "stain"],
        ["der Wäschetrockner", "dryer"],
        ["bügeln", "to iron"],
      ],
      grammar: [
        ["“Ein paar/ein bisschen” für kleine Mengen", "“Ein paar” se usa con sustantivos contables, “ein bisschen” con incontables, ambos para cantidades pequeñas pero suficientes.", "Ich brauche ein bisschen Waschmittel für diese Ladung. / Es gibt ein paar Flecken auf diesem Hemd."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “washing machine” en alemán?",["to hang out clothes", "die Waschmaschine", "to iron", "stain"],1,"“Washing machine” es “die Waschmaschine” en alemán."],
      ["mcq","¿Cómo se dice “stain” en alemán?",["to iron", "washing machine", "der Fleck", "detergent"],2,"“Stain” es “der Fleck” en alemán."],
      ["fill","Completa: “Es gibt ___ Flecken auf diesem Hemd.”",["ein paar", "ein bisschen", "viel", "wenig"],0,"“Flecken” es contable plural, así que se usa “ein paar”: “ein paar Flecken”."],
      ["translate","Traduce: “I need a little detergent for this load.”",["Ich brauche bisschen Waschmittel für diese Ladung.", "Ich brauche ein paar Waschmittel für diese Ladung.", "Ich brauche ein bisschen Waschmittels für diese Ladung.", "Ich brauche ein bisschen Waschmittel für diese Ladung."],3,"“Waschmittel” es incontable, así que se usa “ein bisschen”: “ein bisschen Waschmittel”."],
      ["arrange","Ordena: [gebügelt / muss / werden / dieses / Hemd]",["dieses hemd muss gebügelt werden", "werden gebügelt hemd muss dieses", "dieses hemd gebügelt werden muss", "werden dieses gebügelt muss hemd"],0,"Sujeto + modal + participio + “werden”."],
      ["speaking","Describe en alemán, en 40-60 palabras, tu rutina de lavandería usando “ein paar/ein bisschen”.",[],["ein paar", "ein bisschen", "Waschmaschine"]],
    ]
  },
  {
    id:"de_b1_chess_strategy_games", level:"B1", title:"Schach und strategische Brettspiele", emoji:"♟️", xp:62,
    description:"Lerne Schach-Vokabular und benutze den Konditionalsatz Typ 1 (reale Zukunft) auf Deutsch.",
    study: {
      vocab: [
        ["das Schachbrett", "chessboard"],
        ["Schachmatt setzen", "to checkmate"],
        ["der Bauer", "pawn"],
        ["eine Figur ziehen", "to move a piece"],
        ["die Strategie", "strategy"],
        ["der Gegner", "opponent"],
      ],
      grammar: [
        ["Konditionalsatz Typ 1 (“wenn” + Präsens, “werden”)", "Para consecuencias reales y probables en el futuro se usa “wenn” + presente, y “werden” + infinitivo en la consecuencia.", "Wenn du diese Figur ziehst, wirst du das Spiel verlieren. / Wenn sie ihre Strategie gut plant, wird sie gewinnen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to checkmate” en alemán?",["to move a piece", "chessboard", "Schachmatt setzen", "opponent"],2,"“To checkmate” es “Schachmatt setzen” en alemán."],
      ["mcq","¿Cómo se dice “pawn” en alemán?",["chessboard", "to checkmate", "to move a piece", "der Bauer"],3,"“Pawn” es “der Bauer” en alemán."],
      ["fill","Completa: “Wenn du diese Figur ziehst, ___ du das Spiel verlieren.”",["hast", "wirst", "würdest", "wirdst"],1,"El futuro con “du” usa “wirst” + infinitivo: “wirst verlieren”."],
      ["translate","Traduce: “If she plans her strategy well, she will win.”",["Wenn sie ihre Strategie gut plante, wird sie gewinnen.", "Wenn sie ihre Strategie gut plant, wird sie gewinnen.", "Wenn sie ihre Strategie gut plant, würde sie gewinnen.", "Wenn sie ihre Strategie gut plant, gewinnt sie."],1,"“If... will win” se traduce con “wenn” + presente + “werden”: “wenn sie plant... wird sie gewinnen”."],
      ["arrange","Ordena: [starken / hat / Gegner / einen / sie]",["starken einen gegner hat sie", "sie hat einen starken gegner", "starken einen gegner sie hat", "gegner starken einen hat sie"],1,"Sujeto + verbo + artículo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre una partida de ajedrez usando “wenn... wird...” al menos dos veces.",[],["wenn du", "wird", "Schach"]],
    ]
  },
  {
    id:"de_b2_historic_building_restoration", level:"B2", title:"Die Restaurierung historischer Gebäude", emoji:"🏛️", xp:84,
    description:"Habla de restauración usando la construcción con “lassen” en alemán.",
    study: {
      vocab: [
        ["restaurieren", "to restore"],
        ["die Kulturerbestätte", "heritage site"],
        ["die Fassade", "facade"],
        ["das Gerüst", "scaffolding"],
        ["bewahren", "to preserve"],
        ["der Strukturschaden", "structural damage"],
      ],
      grammar: [
        ["Konstruktion mit “lassen” (etwas machen lassen)", "“Lassen” + infinitivo al final expresa que alguien más realiza una acción para nosotros, muy común al hablar de reparaciones o servicios.", "Die Stadt ließ die Fassade letztes Jahr restaurieren. / Sie lassen das Dach diesen Monat reparieren."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “facade” en alemán?",["heritage site", "die Fassade", "to preserve", "to restore"],1,"“Facade” es “die Fassade” en alemán."],
      ["mcq","¿Cómo se dice “scaffolding” en alemán?",["das Gerüst", "structural damage", "heritage site", "to restore"],0,"“Scaffolding” es “das Gerüst” en alemán."],
      ["fill","Completa: “Die Stadt ließ die Fassade letztes Jahr ___.”",["restauriert werden", "restauriere", "restaurieren", "restauriert"],2,"La construcción con “lassen” usa infinitivo al final: “ließ... restaurieren”."],
      ["translate","Traduce: “They are getting the roof repaired this month.”",["Sie lassen das Dach diesen Monat reparieren.", "Sie lassen das Dach diesen Monat repariert.", "Sie lässt das Dach diesen Monat reparieren.", "Sie ließen das Dach diesen Monat reparieren schon."],0,"“Are getting... repaired” se traduce con “lassen” + infinitivo: “lassen... reparieren”."],
      ["arrange","Ordena: [Kulturerbestätten / wichtige / bewahren / zu]",["wichtige kulturerbestätten zu bewahren", "wichtige bewahren zu kulturerbestätten", "kulturerbestätten wichtige zu bewahren", "wichtige kulturerbestätten bewahren zu"],0,"Adjetivo + sustantivo + “zu” + infinitivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre la restauración de un edificio histórico usando “lassen” + infinitivo al menos dos veces.",[],["ließ... restaurieren", "lassen... reparieren", "Kulturerbestätte"]],
    ]
  },
  {
    id:"de_c1_philosophy_of_science", level:"C1", title:"Die Wissenschaftsphilosophie und die wissenschaftliche Methode", emoji:"🔬", xp:92,
    description:"Analiza el método científico usando cláusulas de propósito (“um... zu/damit”) en alemán.",
    study: {
      vocab: [
        ["die Hypothese", "hypothesis"],
        ["die Falsifizierbarkeit", "falsifiability"],
        ["empirische Belege", "empirical evidence"],
        ["die Peer-Review", "peer review"],
        ["eine Studie replizieren", "to replicate a study"],
        ["der Paradigmenwechsel", "paradigm shift"],
      ],
      grammar: [
        ["Finalsätze (“um... zu/damit”)", "“Um... zu” + infinitivo (mismo sujeto) y “damit” + cláusula (sujetos distintos) expresan el propósito de una acción.", "Wissenschaftler replizieren Studien, um Ergebnisse zu bestätigen. / Forscher veröffentlichen Daten, damit andere sie überprüfen können."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “falsifiability” en alemán?",["to replicate a study", "die Falsifizierbarkeit", "hypothesis", "empirical evidence"],1,"“Falsifiability” es “die Falsifizierbarkeit” en alemán."],
      ["mcq","¿Cómo se dice “peer review” en alemán?",["to replicate a study", "paradigm shift", "die Peer-Review", "peer review"],2,"“Peer review” es “die Peer-Review” en alemán."],
      ["fill","Completa: “Forscher veröffentlichen Daten, ___ andere sie überprüfen können.”",["damit", "obwohl", "weil", "um"],0,"“Damit” introduce propósito cuando el sujeto de ambas cláusulas es distinto: “damit andere... können”."],
      ["translate","Traduce con cláusula de propósito: “Scientists replicate studies in order to confirm results.”",["Wissenschaftler repliziert Studien, um Ergebnisse zu bestätigen.", "Wissenschaftler replizieren Studien, damit Ergebnisse zu bestätigen.", "Wissenschaftler replizieren Studien, um Ergebnisse zu bestätigen.", "Wissenschaftler replizieren Studien, um Ergebnisse bestätigen."],2,"“In order to confirm” (mismo sujeto) se traduce con “um... zu bestätigen”."],
      ["arrange","Ordena: [Belege / braucht / Hypothese / empirische / jede]",["empirische jede belege hypothese braucht", "hypothese empirische jede belege braucht", "jede braucht hypothese belege empirische", "jede hypothese braucht empirische belege"],3,"Adjetivo + sustantivo + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre el método científico usando “um... zu” o “damit” al menos dos veces.",[],["um...zu", "damit", "Hypothese"]],
    ]
  },
  {
    id:"de_c2_game_theory_strategic_decisions", level:"C2", title:"Die Spieltheorie und strategische Entscheidungsfindung", emoji:"🎲", xp:100,
    description:"Analiza la teoría de juegos usando “weder... noch” y concesión con “während” en alemán.",
    study: {
      vocab: [
        ["das Nash-Gleichgewicht", "Nash equilibrium"],
        ["das Nullsummenspiel", "zero-sum game"],
        ["die Auszahlungsmatrix", "payoff matrix"],
        ["die dominante Strategie", "dominant strategy"],
        ["der rationale Akteur", "rational actor"],
        ["das Gefangenendilemma", "prisoner's dilemma"],
      ],
      grammar: [
        ["“Weder... noch” y concesión con “während”", "“Weder... noch” niega dos opciones a la vez; “während” introduce un contraste formal entre dos ideas.", "Weder der eine noch der andere Spieler profitiert vom gegenseitigen Verrat. / Während Kooperation den gemeinsamen Gewinn maximiert, setzt sich oft Eigeninteresse durch."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “Nash equilibrium” en alemán?",["rational actor", "dominant strategy", "das Nash-Gleichgewicht", "Nash equilibrium"],2,"“Nash equilibrium” es “das Nash-Gleichgewicht” en alemán."],
      ["mcq","¿Cómo se dice “prisoner's dilemma” en alemán?",["prisoner's dilemma", "payoff matrix", "dominant strategy", "das Gefangenendilemma"],3,"“Prisoner's dilemma” es “das Gefangenendilemma” en alemán."],
      ["fill","Completa: “Weder der eine ___ der andere Spieler profitiert vom Verrat.”",["noch", "oder", "und", "als"],0,"La estructura “weder... noch” requiere “noch” en la segunda parte."],
      ["translate","Traduce con concesión formal: “Whereas cooperation maximizes joint gain, self-interest often prevails.”",["Während Kooperation den gemeinsamen Gewinn maximiert, setzt sich oft Eigeninteresse durch.", "Obwohl Kooperation den gemeinsamen Gewinn maximiert, setzt sich oft Eigeninteresse durch.", "Während Kooperation den gemeinsamen Gewinn maximiert, setzt sich Eigeninteresse oft durch.", "Während Kooperation den gemeinsamen Gewinn maximieren, setzt sich oft Eigeninteresse durch."],0,"“Während” introduce el contraste formal seguido del verbo en segunda posición tras la cláusula: “während Kooperation... maximiert, setzt sich...”."],
      ["arrange","Ordena: [dominante / Strategie / Spieler / hat / kein]",["kein strategie hat dominante spieler", "kein spieler hat dominante strategie", "kein dominante hat spieler strategie", "dominante spieler hat strategie kein"],1,"Pronombre negativo + sustantivo + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis de teoría de juegos usando “weder... noch” y “während” al menos una vez cada uno.",[],["weder...noch", "während", "Nash-Gleichgewicht"]],
    ]
  },
  {
    id:"de_a1_diving_water_sports", level:"A1", title:"Tauchen und Wassersport", emoji:"🤿", xp:38,
    description:"Lerne Tauch-Vokabular und benutze Präpositionen des Ortes auf Deutsch.",
    study: {
      vocab: [
        ["tauchen", "to dive"],
        ["der Schnorchel", "snorkel"],
        ["der Fisch", "fish"],
        ["das Korallenriff", "coral reef"],
        ["der Taucheranzug", "wetsuit"],
        ["unter Wasser", "underwater"],
      ],
      grammar: [
        ["Präpositionen des Ortes (in/auf/unter/neben)", "“In” indica dentro de algo, “auf” indica encima de una superficie, “unter” indica debajo, y “neben” indica al lado. Con posición (dónde) usan dativo.", "Die Fische schwimmen im Wasser. / Das Korallenriff ist unter dem Boot."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “coral reef” en alemán?",["fish", "coral reef", "underwater", "das Korallenriff"],3,"“Coral reef” es “das Korallenriff” en alemán."],
      ["mcq","¿Cómo se dice “wetsuit” en alemán?",["snorkel", "underwater", "der Taucheranzug", "to dive"],2,"“Wetsuit” es “der Taucheranzug” en alemán."],
      ["fill","Completa: “Das Korallenriff ist ___ dem Boot.”",["neben", "auf", "in", "unter"],3,"“Unter” indica una posición debajo de algo: “unter dem Boot”."],
      ["translate","Traduce: “The fish swim in the water.”",["Die Fische schwimmen im Wasser.", "Die Fische schwimmen auf dem Wasser.", "Die Fische schwimmen unter das Wasser.", "Die Fische schwimmen neben dem Wasser."],0,"“In the water” se traduce con “im Wasser” (in dem = im), ya que están dentro de ella."],
      ["arrange","Ordena: [Boot / neben / Taucher / dem / ist / der]",["der taucher ist neben dem boot", "dem der boot neben ist taucher", "neben taucher der boot dem ist", "neben taucher der ist dem boot"],0,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en alemán, en 20-30 palabras, lo que ves al bucear usando preposiciones de lugar (in/auf/unter/neben).",[],["unter", "im", "Fische"]],
    ]
  },
  {
    id:"de_a2_origami_crafts", level:"A2", title:"Origami und Bastelarbeiten", emoji:"🎨", xp:48,
    description:"Lerne Bastel-Vokabular und benutze Reihenfolgewörter auf Deutsch.",
    study: {
      vocab: [
        ["falten", "to fold"],
        ["das Papier", "paper"],
        ["die Schere", "scissors"],
        ["der Klebstoff", "glue"],
        ["die Falte", "crease"],
        ["die Bastelarbeit", "craft"],
      ],
      grammar: [
        ["Reihenfolgewörter (zuerst, dann, danach, schließlich)", "Los secuenciadores organizan los pasos de un proceso en orden: “zuerst” (primero), “dann/danach” (luego), “schließlich” (finalmente).", "Zuerst falte das Papier in der Mitte. Dann mache eine Falte. Schließlich falte die Ecken."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “crease” en alemán?",["scissors", "paper", "die Falte", "glue"],2,"“Crease” es “die Falte” en alemán."],
      ["mcq","¿Cómo se dice “glue” en alemán?",["der Klebstoff", "to fold", "crease", "glue"],0,"“Glue” es “der Klebstoff” en alemán."],
      ["fill","Completa: “Zuerst falte das Papier. ___ mache eine Falte.”",["Vorher", "Dann", "Zuerst", "Schließlich"],1,"“Dann” conecta el segundo paso después de “zuerst”."],
      ["translate","Traduce: “Finally, fold the corners.”",["Schließlich faltend die Ecken.", "Schließlich falte die Ecken.", "Dann falte die Ecken.", "Schließlich falte die Ecke."],1,"“Finally” se traduce con “Schließlich” al inicio de la oración."],
      ["arrange","Ordena: [Bastelarbeit / braucht / Schere / diese / eine]",["schere diese bastelarbeit eine braucht", "braucht diese schere eine bastelarbeit", "diese bastelarbeit braucht eine schere", "eine schere bastelarbeit diese braucht"],2,"Pronombre + sustantivo + verbo + artículo + sustantivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, los pasos para hacer una manualidad usando secuenciadores (zuerst, dann, schließlich).",[],["zuerst", "dann", "schließlich"]],
    ]
  },
  {
    id:"de_b1_paleontology_dinosaurs", level:"B1", title:"Die Paläontologie und die Dinosaurier", emoji:"🦴", xp:62,
    description:"Lerne Paläontologie-Vokabular und benutze “schon/noch nicht/immer noch” mit dem Perfekt auf Deutsch.",
    study: {
      vocab: [
        ["das Fossil", "fossil"],
        ["der Dinosaurierknochen", "dinosaur bone"],
        ["die Ausgrabungsstätte", "excavation site"],
        ["ausgestorben", "extinct"],
        ["das Skelett", "skeleton"],
        ["ausgraben", "to dig up"],
      ],
      grammar: [
        ["“Schon/noch nicht/immer noch” mit dem Perfekt", "“Schon” (ya) se usa en afirmativas, “noch nicht” (todavía no) en negativas, y “immer noch” (todavía) enfatiza una situación que continúa.", "Sie haben das Skelett schon gefunden. / Sie haben die Ausgrabung noch nicht beendet. / Wissenschaftler untersuchen das Fossil immer noch."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “fossil” en alemán?",["excavation site", "das Fossil", "dinosaur bone", "extinct"],1,"“Fossil” es “das Fossil” en alemán."],
      ["mcq","¿Cómo se dice “skeleton” en alemán?",["excavation site", "to dig up", "das Skelett", "skeleton"],2,"“Skeleton” es “das Skelett” en alemán."],
      ["fill","Completa: “Sie haben die Ausgrabung ___ beendet.”",["noch nicht", "nie", "schon", "immer noch"],0,"“Noch nicht” equivale a “not yet”: “haben... noch nicht beendet”."],
      ["translate","Traduce: “Scientists are still studying the fossil.”",["Wissenschaftler haben das Fossil immer noch untersucht.", "Wissenschaftler untersuchen das Fossil immer noch.", "Wissenschaftler untersuchen das Fossil schon.", "Wissenschaftler untersuchen das Fossil noch nicht."],1,"“Are still studying” se traduce con “immer noch” + presente: “untersuchen... immer noch”."],
      ["arrange","Ordena: [Skelett / schon / haben / das / gefunden / sie]",["gefunden haben skelett schon sie das", "skelett sie schon gefunden das haben", "sie haben das skelett schon gefunden", "das haben schon gefunden sie skelett"],2,"Sujeto + “haben” + artículo + sustantivo + adverbio + participio."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre un descubrimiento de dinosaurios usando “schon/noch nicht/immer noch” al menos dos veces.",[],["schon", "noch nicht", "immer noch"]],
    ]
  },
  {
    id:"de_b2_street_art_graffiti", level:"B2", title:"Straßenkunst und Graffiti", emoji:"🎨", xp:84,
    description:"Habla de arte urbano usando “wenn... nicht/außer wenn” en alemán.",
    study: {
      vocab: [
        ["das Wandgemälde", "mural"],
        ["die Sprühfarbe", "spray paint"],
        ["der öffentliche Raum", "public space"],
        ["der Vandalismus", "vandalism"],
        ["der Straßenkünstler", "street artist"],
        ["ein Wandgemälde in Auftrag geben", "to commission a mural"],
      ],
      grammar: [
        ["“Außer wenn/wenn... nicht” para condición negativa", "“Außer wenn” o “wenn... nicht” expresan una condición negativa, equivalentes a “unless” en inglés.", "Außer wenn die Stadt es genehmigt, gilt das Wandgemälde als Vandalismus. / Sie malt nicht, außer wenn sie eine Genehmigung hat."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “vandalism” en alemán?",["der Vandalismus", "vandalism", "spray paint", "street artist"],0,"“Vandalism” es “der Vandalismus” en alemán."],
      ["mcq","¿Cómo se dice “to commission a mural” en alemán?",["mural", "street artist", "ein Wandgemälde in Auftrag geben", "to commission a mural"],2,"“To commission a mural” es “ein Wandgemälde in Auftrag geben” en alemán."],
      ["fill","Completa: “Sie malt nicht, ___ sie eine Genehmigung hat.”",["wenn", "weil", "außer wenn", "obwohl"],2,"“Außer wenn” expresa la condición negativa: “malt nicht, außer wenn sie hat”."],
      ["translate","Traduce: “Unless the city approves it, the mural will be considered vandalism.”",["Außer wenn die Stadt es genehmigt, gilt das Wandgemälde als Vandalismus.", "Wenn die Stadt es genehmigt, gilt das Wandgemälde als Vandalismus.", "Außer wenn die Stadt es nicht genehmigt, gilt das Wandgemälde als Vandalismus.", "Außer wenn die Stadt es genehmigt, galt das Wandgemälde als Vandalismus."],0,"“Unless” se traduce con “Außer wenn”, que ya incluye la negación implícita."],
      ["arrange","Ordena: [talentiert / sehr / Künstler / ist / dieser]",["dieser künstler ist sehr talentiert", "künstler ist sehr talentiert dieser", "ist talentiert künstler sehr dieser", "sehr ist künstler talentiert dieser"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre el arte urbano usando “Außer wenn” al menos dos veces.",[],["außer wenn", "Wandgemälde", "Straßenkünstler"]],
    ]
  },
  {
    id:"de_c1_criminology_criminal_justice", level:"C1", title:"Die Kriminologie und die Strafjustiz", emoji:"🔍", xp:92,
    description:"Analiza la criminología usando “können/mögen” para posibilidad en registro formal en alemán.",
    study: {
      vocab: [
        ["forensische Beweise", "forensic evidence"],
        ["der Verdächtige", "suspect"],
        ["verurteilen", "to convict"],
        ["der begründete Zweifel", "reasonable doubt"],
        ["die Rückfälligkeit", "recidivism"],
        ["die Rehabilitation", "rehabilitation"],
      ],
      grammar: [
        ["“Könnte/könnten” para posibilidad formal", "“Könnte” (Konjunktiv II de “können”) expresa posibilidad en registro formal/legal, similar a “may/might” en inglés.", "Die forensischen Beweise könnten auf den Verdächtigen hindeuten. / Ohne Rehabilitation könnte die Rückfälligkeit zunehmen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “reasonable doubt” en alemán?",["der begründete Zweifel", "forensic evidence", "suspect", "to convict"],0,"“Reasonable doubt” es “der begründete Zweifel” en alemán."],
      ["mcq","¿Cómo se dice “recidivism” en alemán?",["reasonable doubt", "to convict", "recidivism", "die Rückfälligkeit"],3,"“Recidivism” es “die Rückfälligkeit” en alemán."],
      ["fill","Completa: “Die forensischen Beweise ___ auf den Verdächtigen hindeuten.”",["müssen", "könnten", "sollen", "werden"],1,"“Könnten” expresa posibilidad formal: “könnten hindeuten”."],
      ["translate","Traduce con posibilidad formal: “Without rehabilitation, recidivism might increase.”",["Ohne Rehabilitation kann die Rückfälligkeit zunehmend.", "Ohne Rehabilitation muss die Rückfälligkeit zunehmen.", "Ohne Rehabilitation könnte die Rückfälligkeit zugenommen.", "Ohne Rehabilitation könnte die Rückfälligkeit zunehmen."],3,"“Might increase” se traduce con “könnte zunehmen”, posibilidad formal en alemán."],
      ["arrange","Ordena: [verurteilen / Verdächtigen / Gericht / kann / den / nicht / das]",["verurteilen kann das nicht den verdächtigen gericht", "das gericht kann den verdächtigen nicht verurteilen", "verurteilen den das verdächtigen gericht kann nicht", "das den kann verurteilen gericht nicht verdächtigen"],1,"Artículo + sustantivo + modal + artículo + sustantivo + negación + verbo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre justicia penal usando “könnte/könnten” al menos dos veces.",[],["könnte", "könnten", "begründeter Zweifel"]],
    ]
  },
  {
    id:"de_c2_philosophy_of_language", level:"C2", title:"Die Sprachphilosophie", emoji:"💬", xp:100,
    description:"Analiza la filosofía del lenguaje usando el Konjunktiv I en discurso indirecto formal en alemán.",
    study: {
      vocab: [
        ["der Sprechakt", "speech act"],
        ["die Referenz", "reference"],
        ["die Bedeutung", "meaning"],
        ["die Mehrdeutigkeit", "ambiguity"],
        ["die sprachliche Relativität", "linguistic relativity"],
        ["die Proposition", "proposition"],
      ],
      grammar: [
        ["Konjunktiv I en discurso académico indirecto", "El Konjunktiv I se usa en alemán formal/académico para reportar afirmaciones ajenas sin adoptar su verdad, muy común al citar teorías filosóficas.", "Der Philosoph behauptet, die Bedeutung entstehe durch den Gebrauch. / Manche Linguisten argumentieren, der Kontext sei entscheidend."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “speech act” en alemán?",["speech act", "reference", "meaning", "der Sprechakt"],3,"“Speech act” es “der Sprechakt” en alemán."],
      ["mcq","¿Cómo se dice “ambiguity” en alemán?",["linguistic relativity", "die Mehrdeutigkeit", "meaning", "reference"],1,"“Ambiguity” es “die Mehrdeutigkeit” en alemán."],
      ["fill","Completa: “Manche Linguisten argumentieren, der Kontext ___ entscheidend.”",["war", "sei", "ist", "wäre"],1,"El Konjunktiv I de “sein” es “sei”, usado en discurso indirecto formal: “der Kontext sei entscheidend”."],
      ["translate","Traduce con Konjunktiv I: “The philosopher claims that meaning arises through use.”",["Der Philosoph behauptete, die Bedeutung entstehe durch den Gebrauch.", "Der Philosoph behauptet, die Bedeutung entsteht durch den Gebrauch.", "Der Philosoph behauptet, die Bedeutung entstünde durch den Gebrauch.", "Der Philosoph behauptet, die Bedeutung entstehe durch den Gebrauch."],3,"El Konjunktiv I de “entstehen” es “entstehe”, usado tras “behauptet, dass/∅”."],
      ["arrange","Ordena: [mehrdeutig / Satz / dieser / ist]",["mehrdeutig dieser satz ist", "mehrdeutig dieser ist satz", "ist dieser mehrdeutig satz", "dieser satz ist mehrdeutig"],3,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un argumento sobre filosofía del lenguaje usando el Konjunktiv I al menos dos veces.",[],["behauptet, sei", "argumentiert, entstehe", "Bedeutung"]],
    ]
  },
  {
    id:"de_a1_circus_shows", level:"A1", title:"Der Zirkus und die Vorstellungen", emoji:"🎪", xp:38,
    description:"Lerne Zirkus-Vokabular und benutze Ausrufe (“was für.../wie...”) auf Deutsch.",
    study: {
      vocab: [
        ["der Clown", "clown"],
        ["das Hochseil", "tightrope"],
        ["der Jongleur", "juggler"],
        ["der Akrobat", "acrobat"],
        ["das Zelt", "tent"],
        ["erstaunlich", "amazing"],
      ],
      grammar: [
        ["Ausrufe (“was für.../wie...”)", "“Was für ein/eine” + sustantivo y “Wie” + adjetivo expresan sorpresa o admiración de forma exclamativa.", "Was für ein erstaunlicher Jongleur! / Wie erstaunlich diese Show ist!"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “juggler” en alemán?",["der Jongleur", "amazing", "tent", "clown"],0,"“Juggler” es “der Jongleur” en alemán."],
      ["mcq","¿Cómo se dice “acrobat” en alemán?",["der Akrobat", "amazing", "tightrope", "acrobat"],0,"“Acrobat” es “der Akrobat” en alemán."],
      ["fill","Completa: “___ ein erstaunlicher Jongleur!”",["Was für", "Wie für", "Was", "Wie"],0,"“Was für ein” + sustantivo masculino expresa admiración: “was für ein Jongleur”."],
      ["translate","Traduce: “How amazing this show is!”",["Wie erstaunlich diese Show ist!", "Wie erstaunlich ist diese Show!", "Wie erstaunlich diese Show!", "Was für erstaunlich diese Show ist!"],0,"“How amazing... is!” se traduce con “Wie erstaunlich... ist!”, con el verbo al final."],
      ["arrange","Ordena: [Hochseil / geht / dem / auf / Clown / der]",["der clown geht auf dem hochseil", "der hochseil geht dem clown auf", "clown hochseil dem der geht auf", "clown der hochseil dem auf geht"],0,"Artículo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en alemán, en 20-30 palabras, un espectáculo de circo usando exclamaciones (“was für.../wie...”).",[],["was für", "wie", "erstaunlich"]],
    ]
  },
  {
    id:"de_a2_flea_market_bargains", level:"A2", title:"Der Flohmarkt und die Schnäppchen", emoji:"🛍️", xp:48,
    description:"Lerne Flohmarkt-Vokabular und benutze “zu/genug” auf Deutsch.",
    study: {
      vocab: [
        ["der Flohmarkt", "flea market"],
        ["das Schnäppchen", "bargain"],
        ["feilschen", "to haggle"],
        ["gebraucht", "secondhand"],
        ["der Verkäufer", "vendor"],
        ["die Antiquität", "antique"],
      ],
      grammar: [
        ["“Zu/genug”", "“Zu” + adjetivo indica exceso (“demasiado”), mientras que “adjetivo + genug” indica suficiencia (“lo suficientemente”).", "Diese Antiquität ist zu teuer. / Ich habe nicht genug Geld für dieses Schnäppchen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “to haggle” en alemán?",["vendor", "antique", "feilschen", "secondhand"],2,"“To haggle” es “feilschen” en alemán."],
      ["mcq","¿Cómo se dice “vendor” en alemán?",["flea market", "to haggle", "bargain", "der Verkäufer"],3,"“Vendor” es “der Verkäufer” en alemán."],
      ["fill","Completa: “Diese Antiquität ist ___ teuer.”",["genug", "so viel", "zu", "sehr viel"],2,"“Zu” + adjetivo expresa exceso: “zu teuer”."],
      ["translate","Traduce: “I don't have enough money for this bargain.”",["Ich habe nicht zu Geld für dieses Schnäppchen.", "Ich habe nicht genug Geld für dieses Schnäppchen.", "Ich habe genug nicht Geld für dieses Schnäppchen.", "Ich habe nicht genug Geld für diese Schnäppchen."],1,"“Enough money” se traduce con “genug Geld” (genug después del sustantivo cuando modifica adjetivo, antes con sustantivos)."],
      ["arrange","Ordena: [feilsche / Verkäufer / dem / mit / ich]",["feilsche mit ich verkäufer dem", "mit feilsche ich dem verkäufer", "ich dem feilsche verkäufer mit", "ich feilsche mit dem verkäufer"],3,"Sujeto + verbo + preposición + artículo + sustantivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, una visita a un mercado de pulgas usando “zu/genug”.",[],["zu", "genug", "Schnäppchen"]],
    ]
  },
  {
    id:"de_b1_genealogy_family_tree", level:"B1", title:"Die Genealogie und der Stammbaum", emoji:"🌳", xp:62,
    description:"Lerne Genealogie-Vokabular und benutze “obwohl” auf Deutsch.",
    study: {
      vocab: [
        ["der Stammbaum", "family tree"],
        ["der Vorfahre", "ancestor"],
        ["der Nachkomme", "descendant"],
        ["die Geburtsurkunde", "birth certificate"],
        ["der Urgroßelternteil", "great-grandparent"],
        ["seine Wurzeln zurückverfolgen", "to trace one's roots"],
      ],
      grammar: [
        ["“Obwohl” para concesión", "“Obwohl” + cláusula (verbo al final) introduce un contraste o concesión, equivalente a “although” en inglés.", "Obwohl die Unterlagen alt sind, haben wir unsere Wurzeln zurückverfolgt. / Obwohl sie ihre Urgroßmutter nie kennengelernt hat, kennt sie die Familiengeschichte."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “ancestor” en alemán?",["descendant", "der Vorfahre", "family tree", "ancestor"],1,"“Ancestor” es “der Vorfahre” en alemán."],
      ["mcq","¿Cómo se dice “birth certificate” en alemán?",["great-grandparent", "to trace one's roots", "descendant", "die Geburtsurkunde"],3,"“Birth certificate” es “die Geburtsurkunde” en alemán."],
      ["fill","Completa: “Obwohl die Unterlagen alt ___, haben wir unsere Wurzeln zurückverfolgt.”",["sind", "sein", "seien", "waren"],0,"“Obwohl” + cláusula con verbo al final en presente indicativo: “obwohl... sind”."],
      ["translate","Traduce: “Even though she never met her great-grandparent, she knows the family history.”",["Obwohl sie ihre Urgroßmutter nie kennenlernt hat, kennt sie die Familiengeschichte.", "Obwohl sie ihre Urgroßmutter nie kennengelernt hat, kennt sie die Familiengeschichte.", "Obwohl sie ihre Urgroßmutter nie kennengelernt hat, kannte sie die Familiengeschichte.", "Obwohl sie ihre Urgroßmutter kennengelernt hat nie, kennt sie die Familiengeschichte."],1,"“Even though” se traduce con “obwohl”, con el participio antes del auxiliar al final: “kennengelernt hat”."],
      ["arrange","Ordena: [großen / hat / Stammbaum / einen / sie]",["sie hat einen großen stammbaum", "stammbaum einen hat sie großen", "großen stammbaum einen sie hat", "hat großen stammbaum einen sie"],0,"Sujeto + verbo + artículo + adjetivo + sustantivo compuesto."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre tu árbol familiar usando “obwohl” al menos dos veces.",[],["obwohl", "Stammbaum", "Vorfahren"]],
    ]
  },
  {
    id:"de_b2_meteorology_extreme_weather", level:"B2", title:"Die Meteorologie und extreme Wetterphänomene", emoji:"🌪️", xp:84,
    description:"Habla de fenómenos meteorológicos extremos usando “trotz” en alemán.",
    study: {
      vocab: [
        ["der Hurrikan", "hurricane"],
        ["der Tornado", "tornado"],
        ["die Dürre", "drought"],
        ["die Sturzflut", "flash flood"],
        ["die Windgeschwindigkeit", "wind speed"],
        ["eine Warnung herausgeben", "to issue a warning"],
      ],
      grammar: [
        ["“Trotz” + Genitiv/sustantivo", "“Trotz” + genitivo (o dativo en habla coloquial) introduce un contraste, similar a “obwohl” pero con sustantivo en lugar de cláusula.", "Trotz der Warnung blieben viele Menschen an der Küste. / Trotz der herausgegebenen Warnung konnten die Behörden den Schaden nicht verhindern."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “drought” en alemán?",["flash flood", "die Dürre", "drought", "hurricane"],1,"“Drought” es “die Dürre” en alemán."],
      ["mcq","¿Cómo se dice “flash flood” en alemán?",["wind speed", "tornado", "die Sturzflut", "drought"],2,"“Flash flood” es “die Sturzflut” en alemán."],
      ["fill","Completa: “___ der Warnung blieben viele Menschen an der Küste.”",["Trotzdem", "Trotz", "Wegen", "Obwohl"],1,"“Trotz” + genitivo: “trotz der Warnung”."],
      ["translate","Traduce: “In spite of issuing a warning, officials couldn't prevent the damage.”",["Trotz die herausgegebene Warnung konnten die Behörden den Schaden nicht verhindern.", "Trotz der herausgegebenen Warnung konnten die Behörden den Schaden nicht verhindern.", "Trotz der herausgegebenen Warnung können die Behörden den Schaden nicht verhindern.", "Trotz der Warnung herausgegeben konnten die Behörden den Schaden nicht verhindern."],1,"“In spite of issuing” se traduce con “trotz” + sustantivo/participio en genitivo: “trotz der herausgegebenen Warnung”."],
      ["arrange","Ordena: [nähert / Hurrikan / starker / sich / ein]",["ein starker hurrikan nähert sich", "sich starker ein nähert hurrikan", "starker sich ein hurrikan nähert", "sich ein starker hurrikan nähert"],0,"Artículo + adjetivo + sustantivo + pronombre reflexivo + verbo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre un fenómeno meteorológico extremo usando “trotz” al menos dos veces.",[],["trotz", "Hurrikan", "Warnung"]],
    ]
  },
  {
    id:"de_c1_urban_sociology_gentrification", level:"C1", title:"Die Stadtsoziologie und die Gentrifizierung", emoji:"🏙️", xp:92,
    description:"Analiza la gentrificación usando “hätte... sollen” para crítica del pasado en alemán.",
    study: {
      vocab: [
        ["die Gentrifizierung", "gentrification"],
        ["die Verdrängung", "displacement"],
        ["der bezahlbare Wohnraum", "affordable housing"],
        ["die Stadterneuerung", "urban renewal"],
        ["die steigende Miete", "rising rent"],
        ["die lokale Gemeinschaft", "local community"],
      ],
      grammar: [
        ["“Hätte... sollen” para crítica del pasado", "“Hätte” + participio + “sollen” expresa que algo debió haberse hecho de manera diferente en el pasado, usado para crítica o arrepentimiento.", "Die Stadt hätte bezahlbaren Wohnraum schützen sollen. / Die Behörden hätten die Anliegen der Gemeinschaft nicht ignorieren sollen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “displacement” en alemán?",["local community", "urban renewal", "die Verdrängung", "gentrification"],2,"“Displacement” es “die Verdrängung” en alemán."],
      ["mcq","¿Cómo se dice “affordable housing” en alemán?",["urban renewal", "der bezahlbare Wohnraum", "displacement", "affordable housing"],1,"“Affordable housing” es “der bezahlbare Wohnraum” en alemán."],
      ["fill","Completa: “Die Stadt ___ bezahlbaren Wohnraum schützen sollen.”",["habe", "würde", "hat", "hätte"],3,"“Hätte... sollen” expresa crítica del pasado: “hätte... schützen sollen”."],
      ["translate","Traduce: “Officials shouldn't have ignored the local community's concerns.”",["Die Behörden sollten die Anliegen der Gemeinschaft nicht ignorieren.", "Die Behörden hätten die Anliegen der Gemeinschaft ignorieren sollen.", "Die Behörden hätten die Anliegen der Gemeinschaft nicht ignoriert sollen.", "Die Behörden hätten die Anliegen der Gemeinschaft nicht ignorieren sollen."],3,"“Shouldn't have ignored” se traduce con “hätten... nicht ignorieren sollen”, doble infinitivo al final."],
      ["arrange","Ordena: [Miete / beunruhigt / die / steigende / Bewohner]",["die steigende miete beunruhigt bewohner", "bewohner die steigende miete beunruhigt", "bewohner die beunruhigt miete steigende", "bewohner miete die beunruhigt steigende"],0,"Artículo + adjetivo + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis crítico sobre la gentrificación usando “hätte... sollen” al menos dos veces.",[],["hätte...sollen", "hätten...sollen", "Gentrifizierung"]],
    ]
  },
  {
    id:"de_c2_epistemology_limits_knowledge", level:"C2", title:"Die Erkenntnistheorie und die Grenzen des Wissens", emoji:"🧭", xp:100,
    description:"Analiza la epistemología usando la inversión “kaum... als” en alemán.",
    study: {
      vocab: [
        ["die Erkenntnistheorie", "epistemology"],
        ["die gerechtfertigte wahre Meinung", "justified true belief"],
        ["der Skeptizismus", "skepticism"],
        ["die Gewissheit", "certainty"],
        ["das Wissen a priori", "a priori knowledge"],
        ["die epistemische Demut", "epistemic humility"],
      ],
      grammar: [
        ["Inversión con “kaum... als”", "“Kaum... als” expresa que una acción ocurrió inmediatamente después de otra; al colocar “kaum” al inicio, se invierte el orden verbo-sujeto, muy formal.", "Kaum hatten Philosophen eine Theorie der Gewissheit vorgeschlagen, als Skeptiker sie infrage stellten. / Kaum behauptet man, etwas zu wissen, als Zweifel entstehen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “skepticism” en alemán?",["der Skeptizismus", "epistemology", "a priori knowledge", "justified true belief"],0,"“Skepticism” es “der Skeptizismus” en alemán."],
      ["mcq","¿Cómo se dice “epistemic humility” en alemán?",["epistemic humility", "skepticism", "epistemology", "die epistemische Demut"],3,"“Epistemic humility” es “die epistemische Demut” en alemán."],
      ["fill","Completa: “Kaum ___ Philosophen eine Theorie vorgeschlagen, als Skeptiker sie infrage stellten.”",["waren", "hatten", "hätten", "haben"],1,"Tras “kaum” al inicio, se invierte con “hatten” + participio: “kaum hatten... vorgeschlagen”."],
      ["translate","Traduce con inversión: “No sooner does one claim to know something than doubt arises.”",["Kaum behauptet man, etwas zu wissen, als Zweifel verschwinden.", "Man behauptet kaum, etwas zu wissen, als Zweifel entstehen.", "Kaum behauptet man, etwas zu wissen, als Zweifel entstehen.", "Kaum behauptete man, etwas zu wissen, als Zweifel entstehen."],2,"“Kaum” al inicio invierte el orden con el verbo en segunda posición: “kaum behauptet man”."],
      ["arrange","Ordena: [wahre / erfordert / Gewissheit / Wissen]",["wissen erfordert wahre gewissheit", "gewissheit wahre wissen erfordert", "erfordert gewissheit wissen wahre", "wahre wissen erfordert gewissheit"],0,"Sustantivo + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un argumento epistemológico usando “kaum... als” al menos una vez.",[],["kaum", "als", "Skeptizismus"]],
    ]
  },
  {
    id:"de_a1_birdwatching", level:"A1", title:"Die Ornithologie und die Vogelbeobachtung", emoji:"🦜", xp:38,
    description:"Lerne Vogelbeobachtungs-Vokabular und benutze Possessivpronomen auf Deutsch.",
    study: {
      vocab: [
        ["das Fernglas", "binoculars"],
        ["das Nest", "nest"],
        ["die Feder", "feather"],
        ["der Schnabel", "beak"],
        ["fliegen", "to fly"],
        ["der Flügel", "wing"],
      ],
      grammar: [
        ["Possessivpronomen (mein/dein/sein/ihr/unser/ihr)", "Los pronombres posesivos alemanes concuerdan en género, número y caso con el sustantivo que sigue.", "Mein Fernglas ist neu. / Der Vogel benutzt seine Flügel zum Fliegen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “nest” en alemán?",["to fly", "das Nest", "beak", "binoculars"],1,"“Nest” es “das Nest” en alemán."],
      ["mcq","¿Cómo se dice “beak” en alemán?",["beak", "nest", "to fly", "der Schnabel"],3,"“Beak” es “der Schnabel” en alemán."],
      ["fill","Completa: “Der Vogel benutzt ___ Flügel zum Fliegen.”",["seine", "ihr", "ihre", "sein"],0,"“Flügel” (plural, acusativo) con posesivo masculino singular “er” usa “seine”."],
      ["translate","Traduce: “My binoculars are new.”",["Mein Fernglas ist neu.", "Mein Ferngläser ist neu.", "Mein Fernglas sind neu.", "Meine Fernglas ist neu."],0,"“My” se traduce con “mein” ante “Fernglas” (neutro singular)."],
      ["arrange","Ordena: [Nest / Baum / ist / im / ihr]",["im ihr baum nest ist", "ihr nest ist im baum", "ist ihr nest im baum", "im baum ist ihr nest"],1,"Posesivo + sustantivo + verbo + preposición + artículo + sustantivo."],
      ["writing","Describe en alemán, en 20-30 palabras, un ave que viste usando posesivos (mein/sein/ihr).",[],["sein", "meine", "Flügel"]],
    ]
  },
  {
    id:"de_a2_pottery_ceramics", level:"A2", title:"Die Töpferei und die Keramik", emoji:"🏺", xp:48,
    description:"Lerne Töpferei-Vokabular und benutze “wie viel/wie viele” auf Deutsch.",
    study: {
      vocab: [
        ["der Ton", "clay"],
        ["die Töpferscheibe", "pottery wheel"],
        ["der Brennofen", "kiln"],
        ["formen", "to shape"],
        ["die Glasur", "glaze"],
        ["die Schüssel", "bowl"],
      ],
      grammar: [
        ["“Wie viel/wie viele”", "“Wie viel” se usa con sustantivos incontables, “wie viele” con sustantivos contables, para preguntar cantidad.", "Wie viel Ton brauchst du? / Wie viele Schüsseln hast du gemacht?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “kiln” en alemán?",["glaze", "der Brennofen", "kiln", "pottery wheel"],1,"“Kiln” es “der Brennofen” en alemán."],
      ["mcq","¿Cómo se dice “glaze” en alemán?",["pottery wheel", "die Glasur", "to shape", "bowl"],1,"“Glaze” es “die Glasur” en alemán."],
      ["fill","Completa: “___ Ton brauchst du?”",["Wie viel", "Wie viele", "Wie viel von", "Wie"],0,"“Ton” es incontable, así que se usa “wie viel”: “wie viel Ton”."],
      ["translate","Traduce: “How many bowls did you make?”",["Wie viel Schüsseln hast du gemacht?", "Wie viele Schüsseln hast du gemacht?", "Wie viele Schüssel hast du gemacht?", "Wie viele Schüsseln du hast gemacht?"],1,"“Schüsseln” es contable plural, así que se usa “wie viele”: “wie viele Schüsseln”."],
      ["arrange","Ordena: [Töpferscheibe / benutzt / der / die / Töpfer]",["der töpferscheibe die benutzt töpfer", "der die töpferscheibe benutzt töpfer", "der töpfer benutzt die töpferscheibe", "töpferscheibe töpfer die der benutzt"],2,"Artículo + sustantivo + verbo + artículo + sustantivo compuesto."],
      ["speaking","Describe en alemán, en 40-60 palabras, una pieza de cerámica que te gustaría hacer usando “wie viel/wie viele”.",[],["wie viel", "wie viele", "Ton"]],
    ]
  },
  {
    id:"de_b1_martial_arts_aikido", level:"B1", title:"Die Kampfkünste und Aikido", emoji:"🥋", xp:62,
    description:"Lerne Kampfkunst-Vokabular und benutze “sowohl...als auch/entweder...oder” auf Deutsch.",
    study: {
      vocab: [
        ["die Kampfkunst", "martial arts"],
        ["der schwarze Gürtel", "black belt"],
        ["die Technik", "technique"],
        ["der Griff des Gegners", "opponent's grip"],
        ["das Gleichgewicht", "balance"],
        ["das Dojo", "dojo"],
      ],
      grammar: [
        ["“Sowohl...als auch/entweder...oder”", "“Sowohl... als auch” conecta dos elementos afirmando ambos; “entweder... oder” presenta dos opciones alternativas.", "Aikido erfordert sowohl Kraft als auch Gleichgewicht. / Du kannst entweder morgens oder abends trainieren."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “black belt” en alemán?",["martial arts", "opponent's grip", "black belt", "der schwarze Gürtel"],3,"“Black belt” es “der schwarze Gürtel” en alemán."],
      ["mcq","¿Cómo se dice “balance” en alemán?",["martial arts", "das Gleichgewicht", "opponent's grip", "dojo"],1,"“Balance” es “das Gleichgewicht” en alemán."],
      ["fill","Completa: “Aikido erfordert ___ Kraft als auch Gleichgewicht.”",["entweder", "beide", "sowohl", "weder"],2,"“Sowohl... als auch” conecta dos elementos: “sowohl Kraft als auch Gleichgewicht”."],
      ["translate","Traduce: “You can practice either in the morning or in the evening.”",["Du kannst entweder morgens und abends trainieren.", "Du kannst entweder morgens oder abends trainieren.", "Du kannst sowohl morgens oder abends trainieren.", "Du kannst entweder morgens oder abends trainierst."],1,"“Either... or” se traduce con “entweder... oder” en alemán."],
      ["arrange","Ordena: [schwierig / diese / sehr / ist / Technik]",["schwierig ist sehr technik diese", "diese technik ist sehr schwierig", "ist sehr technik diese schwierig", "schwierig diese ist technik sehr"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre practicar un arte marcial usando “sowohl...als auch” o “entweder...oder” al menos dos veces.",[],["sowohl...als auch", "entweder...oder", "Aikido"]],
    ]
  },
  {
    id:"de_b2_mycology_mushrooms", level:"B2", title:"Die Mykologie und die Pilze", emoji:"🍄", xp:84,
    description:"Habla de micología usando “als ob” en alemán.",
    study: {
      vocab: [
        ["der Pilz", "mushroom"],
        ["die Spore", "spore"],
        ["essbar", "edible"],
        ["giftig", "poisonous"],
        ["der Pilz/Schimmel", "fungus"],
        ["das Myzel", "mycelium"],
      ],
      grammar: [
        ["“Als ob” + Konjunktiv II", "“Als ob” se usa con Konjunktiv II para expresar una comparación hipotética, aunque se refiera al presente.", "Dieser Pilz sieht aus, als ob er giftig wäre. / Das Myzel breitet sich aus, als ob es einen eigenen Willen hätte."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “spore” en alemán?",["mycelium", "mushroom", "spore", "die Spore"],3,"“Spore” es “die Spore” en alemán."],
      ["mcq","¿Cómo se dice “mycelium” en alemán?",["das Myzel", "spore", "poisonous", "fungus"],0,"“Mycelium” es “das Myzel” en alemán."],
      ["fill","Completa: “Dieser Pilz sieht aus, als ob er giftig ___.”",["war", "sei", "ist", "wäre"],3,"“Als ob” requiere Konjunktiv II: “als ob er... wäre”."],
      ["translate","Traduce: “The mycelium spreads as though it had a mind of its own.”",["Das Myzel breitet aus, als ob es einen eigenen Willen hätte.", "Das Myzel breitet sich aus, als ob es einen eigenen Willen hätte.", "Das Myzel breitet sich aus, als ob es einen eigenen Willen hat.", "Das Myzel breitet sich aus, als ob es einen eigenen Willen würde."],1,"“As though it had” se traduce con Konjunktiv II: “als ob es... hätte”."],
      ["arrange","Ordena: [essbar / dieser / nicht / ist / Pilz]",["nicht essbar pilz ist dieser", "dieser ist pilz essbar nicht", "dieser pilz ist nicht essbar", "essbar pilz nicht dieser ist"],2,"Pronombre + sustantivo + verbo + negación + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre un hongo interesante usando “als ob” al menos dos veces.",[],["als ob", "Pilz", "giftig"]],
    ]
  },
  {
    id:"de_c1_marine_biology_ocean_ecosystems", level:"C1", title:"Die Meeresbiologie und die Meeresökosysteme", emoji:"🐠", xp:92,
    description:"Analiza los ecosistemas marinos usando “vorausgesetzt, dass/solange” en alemán.",
    study: {
      vocab: [
        ["das Meeresökosystem", "marine ecosystem"],
        ["die Biodiversität", "biodiversity"],
        ["die Nahrungskette", "food chain"],
        ["die Korallenbleiche", "coral bleaching"],
        ["die Meeresart", "marine species"],
        ["die Ozeanversauerung", "ocean acidification"],
      ],
      grammar: [
        ["“Vorausgesetzt, dass/solange” para condiciones", "“Vorausgesetzt, dass” y “solange” expresan una condición necesaria, equivalentes a “provided that” en inglés.", "Die marine Biodiversität kann sich erholen, vorausgesetzt, dass die Verschmutzung abnimmt. / Korallenriffe überleben, solange die Wassertemperaturen stabil bleiben."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “biodiversity” en alemán?",["die Biodiversität", "marine ecosystem", "food chain", "marine species"],0,"“Biodiversity” es “die Biodiversität” en alemán."],
      ["mcq","¿Cómo se dice “coral bleaching” en alemán?",["die Korallenbleiche", "coral bleaching", "marine ecosystem", "biodiversity"],0,"“Coral bleaching” es “die Korallenbleiche” en alemán."],
      ["fill","Completa: “Korallenriffe überleben, ___ die Wassertemperaturen stabil bleiben.”",["solange", "obwohl", "außer", "trotzdem"],0,"“Solange” expresa una condición necesaria: “überleben, solange... bleiben”."],
      ["translate","Traduce: “Marine biodiversity can recover, provided that pollution decreases.”",["Die marine Biodiversität kann sich erholen, vorausgesetzt, dass die Verschmutzung abnimmt.", "Die marine Biodiversität kann sich erholen, vorausgesetzt die Verschmutzung abnimmt.", "Die marine Biodiversität kann sich erholen, vorausgesetzt, dass die Verschmutzung abnehmen.", "Die marine Biodiversität kann erholen, vorausgesetzt, dass die Verschmutzung abnimmt."],0,"“Provided that” se traduce con “vorausgesetzt, dass” + verbo al final: “dass... abnimmt”."],
      ["arrange","Ordena: [Nahrungskette / die / stört / Verschmutzung / die]",["nahrungskette die die verschmutzung stört", "die verschmutzung stört die nahrungskette", "verschmutzung die nahrungskette die stört", "die nahrungskette die stört verschmutzung"],1,"Artículo + sustantivo + verbo + artículo + sustantivo compuesto."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre los ecosistemas marinos usando “vorausgesetzt, dass” o “solange” al menos dos veces.",[],["vorausgesetzt, dass", "solange", "Meeresökosystem"]],
    ]
  },
  {
    id:"de_c2_cartography_history_of_maps", level:"C2", title:"Die Kartografie und die Geschichte der Karten", emoji:"🗺️", xp:100,
    description:"Analiza la cartografía usando “wäre da nicht/ohne” en alemán.",
    study: {
      vocab: [
        ["der Kartograf", "cartographer"],
        ["die Projektion", "projection"],
        ["unerforschtes Gebiet", "uncharted territory"],
        ["der Maßstab", "scale"],
        ["das Navigationsinstrument", "navigational instrument"],
        ["kartieren", "to chart"],
      ],
      grammar: [
        ["“Wäre da nicht/ohne” para condición formal", "“Wäre da nicht” y “ohne” + sustantivo expresan una condición hipotética formal, equivalentes a “were it not for” en inglés.", "Wären da nicht die frühen Kartografen gewesen, wäre die Erkundung unmöglich gewesen. / Ohne Satellitenbilder wären moderne Karten weit weniger genau."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “cartographer” en alemán?",["navigational instrument", "to chart", "der Kartograf", "scale"],2,"“Cartographer” es “der Kartograf” en alemán."],
      ["mcq","¿Cómo se dice “uncharted territory” en alemán?",["projection", "uncharted territory", "unerforschtes Gebiet", "navigational instrument"],2,"“Uncharted territory” es “unerforschtes Gebiet” en alemán."],
      ["fill","Completa: “___ Satellitenbilder wären moderne Karten weit weniger genau.”",["Ohne", "Wegen", "Mit", "Trotz"],0,"“Ohne” + sustantivo expresa la condición hipotética: “ohne Satellitenbilder”."],
      ["translate","Traduce con estructura formal: “Were it not for early cartographers, exploration would have been impossible.”",["Wären da nicht die frühen Kartografen gewesen, ist die Erkundung unmöglich gewesen.", "Wäre da nicht die frühen Kartografen gewesen, wäre die Erkundung unmöglich gewesen.", "Wären da nicht die frühen Kartografen gewesen, wäre die Erkundung unmöglich gewesen.", "Wären da nicht die frühen Kartografen, wäre die Erkundung unmöglich gewesen."],2,"“Were it not for” se traduce con “wären da nicht... gewesen”, concordando en plural con “Kartografen”."],
      ["arrange","Ordena: [genau / diese / sehr / ist / Projektion]",["sehr ist genau projektion diese", "projektion diese ist sehr genau", "ist diese projektion sehr genau", "diese projektion ist sehr genau"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un argumento sobre la historia de la cartografía usando “ohne” con este sentido condicional al menos una vez.",[],["ohne", "Kartograf", "Projektion"]],
    ]
  },
  {
    id:"de_a1_tailoring_sewing", level:"A1", title:"Die Schneiderei und das Nähen", emoji:"🧵", xp:38,
    description:"Lerne Näh-Vokabular und benutze einfache reflexive Verben auf Deutsch.",
    study: {
      vocab: [
        ["die Nadel", "needle"],
        ["der Faden", "thread"],
        ["nähen", "to sew"],
        ["anprobieren", "to try on"],
        ["der Knopf", "button"],
        ["der Schneider", "tailor"],
      ],
      grammar: [
        ["Einfache reflexive Verben", "Deutsche reflexive Verben benutzen “mich/dich/sich/uns/euch/sich”; “anprobieren” (Kleidung) braucht im Deutschen kein Reflexivpronomen, anders als im Spanischen.", "Ich probiere die Jacke an. / Sie näht den Knopf selbst an."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “needle” en alemán?",["thread", "die Nadel", "to sew", "tailor"],1,"“Needle” es “die Nadel” en alemán."],
      ["mcq","¿Cómo se dice “thread” en alemán?",["needle", "tailor", "to sew", "der Faden"],3,"“Thread” es “der Faden” en alemán."],
      ["fill","Completa: “Ich probiere die Jacke ___.”",["mit", "auf", "an", "aus"],2,"“Anprobieren” es un verbo separable: “probiere... an”."],
      ["translate","Traduce: “I try on the jacket.”",["Ich probiere mich die Jacke an.", "Ich probiere die Jacke an.", "Ich probiere an die Jacke.", "Ich probiere die Jacke."],1,"“Try on” se traduce con el verbo separable “anprobieren”: “probiere... an”, sin pronombre reflexivo."],
      ["arrange","Ordena: [Knopf / näht / Schneider / den / der]",["knopf der schneider den näht", "knopf der den schneider näht", "der schneider näht den knopf", "den der näht schneider knopf"],2,"Artículo + sustantivo + verbo + artículo + sustantivo."],
      ["writing","Describe en alemán, en 20-30 palabras, cómo te pruebas ropa nueva usando “anprobieren”.",[],["probiere an", "Nadel", "Faden"]],
    ]
  },
  {
    id:"de_a2_rock_climbing_mountaineering", level:"A2", title:"Das Klettern und das Bergsteigen", emoji:"🧗", xp:48,
    description:"Lerne Kletter-Vokabular und benutze “seit... schon” für Dauer auf Deutsch.",
    study: {
      vocab: [
        ["das Seil", "rope"],
        ["der Klettergurt", "harness"],
        ["der Gipfel", "summit"],
        ["die Klippe", "cliff"],
        ["klettern", "to climb"],
        ["der Griff", "grip"],
      ],
      grammar: [
        ["“Schon seit... ” + presente para duración continua", "El alemán expresa una acción que empezó en el pasado y continúa usando el presente + “schon seit” + tiempo, a diferencia del inglés que usa presente perfecto continuo.", "Wir klettern schon seit drei Stunden. / Sie trainiert schon seit einem Jahr für den Gipfel."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “harness” en alemán?",["der Klettergurt", "grip", "summit", "cliff"],0,"“Harness” es “der Klettergurt” en alemán."],
      ["mcq","¿Cómo se dice “cliff” en alemán?",["cliff", "die Klippe", "grip", "summit"],1,"“Cliff” es “die Klippe” en alemán."],
      ["fill","Completa: “Wir klettern ___ seit drei Stunden.”",["noch", "seit", "schon", "vor"],2,"“Schon seit” + tiempo expresa duración continua: “schon seit drei Stunden”."],
      ["translate","Traduce: “She has been training for the summit all year.”",["Sie trainierte schon seit einem Jahr für den Gipfel.", "Sie hat trainiert schon seit einem Jahr für den Gipfel.", "Sie trainiert schon vor einem Jahr für den Gipfel.", "Sie trainiert schon seit einem Jahr für den Gipfel."],3,"“Has been training” se traduce con presente + “schon seit”: “trainiert schon seit einem Jahr”."],
      ["arrange","Ordena: [neues / braucht / Kletterer / der / Seil]",["kletterer der braucht neues seil", "braucht seil kletterer der neues", "der braucht seil neues kletterer", "der kletterer braucht neues seil"],3,"Artículo + sustantivo + verbo + adjetivo + sustantivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, una experiencia de escalada usando “schon seit”.",[],["schon seit", "klettern", "Gipfel"]],
    ]
  },
  {
    id:"de_b1_coin_collecting_numismatics", level:"B1", title:"Die Numismatik und das Münzensammeln", emoji:"🪙", xp:62,
    description:"Lerne Numismatik-Vokabular und benutze “sich gewöhnen an/gewöhnt sein an” auf Deutsch.",
    study: {
      vocab: [
        ["die Münze", "coin"],
        ["die Münzprägeanstalt", "mint"],
        ["die seltene Münze", "rare coin"],
        ["die Sammlung", "collection"],
        ["die Währung", "currency"],
        ["schätzen (Wert)", "to appraise"],
      ],
      grammar: [
        ["“Gewöhnt sein an/sich gewöhnen an”", "“Gewöhnt sein an” + Akkusativ expresa un hábito ya establecido; “sich gewöhnen an” expresa el proceso de acostumbrarse.", "Ich bin daran gewöhnt, alte Münzen zu schätzen. / Es dauerte, sich daran zu gewöhnen, seltene Währungen zu sammeln."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “mint” en alemán?",["mint", "die Münzprägeanstalt", "collection", "coin"],1,"“Mint” es “die Münzprägeanstalt” en alemán."],
      ["mcq","¿Cómo se dice “to appraise” en alemán?",["currency", "schätzen (Wert)", "to appraise", "collection"],1,"“To appraise” es “schätzen” en alemán."],
      ["fill","Completa: “Ich bin daran ___, alte Münzen zu schätzen.”",["gewöhnte", "gewöhnt", "gewöhnen", "gewöhnst"],1,"“Gewöhnt sein an” usa el participio “gewöhnt”: “bin daran gewöhnt”."],
      ["translate","Traduce: “It took time to get used to collecting rare currency.”",["Es dauerte, sich daran gewöhnen, seltene Währungen zu sammeln.", "Es dauerte, sich daran zu gewöhnen, seltene Währungen zu sammeln.", "Es dauerte, sich daran zu gewöhnt, seltene Währungen zu sammeln.", "Es dauert, sich daran zu gewöhnen, seltene Währungen zu sammeln."],1,"“Get used to collecting” se traduce con “sich daran gewöhnen, zu sammeln”, infinitivo con “zu”."],
      ["arrange","Ordena: [seltene / hat / Münzsammlung / eine / sie]",["hat sie eine münzsammlung seltene", "eine seltene sie münzsammlung hat", "sie hat eine seltene münzsammlung", "münzsammlung hat sie seltene eine"],2,"Sujeto + verbo + artículo + adjetivo + sustantivo compuesto."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre coleccionar monedas usando “gewöhnt sein an/sich gewöhnen an” al menos dos veces.",[],["gewöhnt sein an", "sich gewöhnen an", "Münzsammlung"]],
    ]
  },
  {
    id:"de_b2_seismology_earthquakes", level:"B2", title:"Die Seismologie und die Erdbeben", emoji:"🌋", xp:84,
    description:"Habla de sismología usando preguntas indirectas en alemán.",
    study: {
      vocab: [
        ["das Erdbeben", "earthquake"],
        ["das Seismograph", "seismograph"],
        ["das Epizentrum", "epicenter"],
        ["die Magnitude", "magnitude"],
        ["die tektonische Platte", "tectonic plate"],
        ["das Nachbeben", "aftershock"],
      ],
      grammar: [
        ["Indirekte Fragen", "Las preguntas indirectas alemanas (“ich frage mich, ob...”, “weißt du, ob...”) van con el verbo conjugado al final de la cláusula subordinada.", "Ich frage mich, ob das Epizentrum nahe der Stadt war. / Weißt du, wie stark die Magnitude war?"],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “epicenter” en alemán?",["das Epizentrum", "tectonic plate", "seismograph", "magnitude"],0,"“Epicenter” es “das Epizentrum” en alemán."],
      ["mcq","¿Cómo se dice “tectonic plate” en alemán?",["magnitude", "tectonic plate", "die tektonische Platte", "seismograph"],2,"“Tectonic plate” es “die tektonische Platte” en alemán."],
      ["fill","Completa: “Weißt du, wie stark die Magnitude ___?”",["ist es", "war es", "war", "es war"],2,"En la pregunta indirecta el verbo va al final: “wie stark die Magnitude war”."],
      ["translate","Traduce con pregunta indirecta: “I wonder if the epicenter was near the city.”",["Ich frage mich, dass das Epizentrum nahe der Stadt war.", "Ich frage mich, ob war das Epizentrum nahe der Stadt.", "Ich frage mich, ob das Epizentrum nahe der Stadt ist.", "Ich frage mich, ob das Epizentrum nahe der Stadt war."],3,"La pregunta indirecta usa “ob” + verbo al final: “ob das Epizentrum... war”."],
      ["arrange","Ordena: [kleines / gespürt / haben / Nachbeben / wir / ein]",["wir haben ein kleines nachbeben gespürt", "kleines gespürt nachbeben wir ein haben", "nachbeben gespürt kleines haben wir ein", "nachbeben ein haben wir kleines gespürt"],0,"Sujeto + auxiliar + artículo + adjetivo + sustantivo + participio."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre un terremoto usando al menos dos preguntas indirectas (“ich frage mich, ob...”, “weißt du...”).",[],["ich frage mich, ob", "weißt du", "Erdbeben"]],
    ]
  },
  {
    id:"de_c1_paleography_ancient_manuscripts", level:"C1", title:"Die Paläographie und die alten Handschriften", emoji:"📜", xp:92,
    description:"Analiza la paleografía usando “wer auch immer/was auch immer” en alemán.",
    study: {
      vocab: [
        ["das Manuskript", "manuscript"],
        ["der Schreiber", "scribe"],
        ["das Pergament", "parchment"],
        ["der illuminierte Text", "illuminated text"],
        ["der Schreibstil", "handwriting style"],
        ["entziffern", "to decipher"],
      ],
      grammar: [
        ["“Wer auch immer/was auch immer”", "“Wer auch immer” equivale a “quienquiera que”, y “was auch immer” equivale a “lo que sea que”, sin necesidad de antecedente específico.", "Wer auch immer dieses Manuskript entziffert, wird Geschichte schreiben. / Was auch immer der Schreiber beabsichtigte, die Bedeutung ist heute verloren."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “scribe” en alemán?",["illuminated text", "to decipher", "manuscript", "der Schreiber"],3,"“Scribe” es “der Schreiber” en alemán."],
      ["mcq","¿Cómo se dice “parchment” en alemán?",["to decipher", "das Pergament", "illuminated text", "parchment"],1,"“Parchment” es “das Pergament” en alemán."],
      ["fill","Completa: “___ dieses Manuskript entziffert, wird Geschichte schreiben.”",["Wessen", "Wer auch immer", "Wie auch immer", "Was auch immer"],1,"“Wer auch immer” se refiere a una persona no especificada: “wer auch immer entziffert”."],
      ["translate","Traduce con esta estructura: “Whatever the scribe intended, the meaning is now lost.”",["Was auch immer der Schreiber beabsichtigte, die Bedeutung war heute verloren.", "Was auch immer der Schreiber beabsichtigte, die Bedeutung ist heute verloren.", "Was auch immer der Schreiber beabsichtigt, die Bedeutung ist heute verloren.", "Was der Schreiber beabsichtigte, die Bedeutung ist heute verloren."],1,"“Whatever” se traduce con “was auch immer” + verbo en Präteritum: “was auch immer... beabsichtigte”."],
      ["arrange","Ordena: [wunderschön / ist / Manuskript / dieses / illuminiert]",["dieses wunderschön ist manuskript illuminiert", "manuskript illuminiert wunderschön ist dieses", "ist illuminiert dieses wunderschön manuskript", "dieses manuskript ist wunderschön illuminiert"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre un manuscrito antiguo usando “wer auch immer/was auch immer” al menos dos veces.",[],["wer auch immer", "was auch immer", "Manuskript"]],
    ]
  },
  {
    id:"de_c2_global_supply_chain_logistics", level:"C2", title:"Die Logistik und die globale Lieferkette", emoji:"📦", xp:100,
    description:"Analiza la cadena de suministro usando estructuras enfáticas de sorpresa en alemán.",
    study: {
      vocab: [
        ["die Lieferkette", "supply chain"],
        ["der Engpass", "bottleneck"],
        ["die Fracht", "freight"],
        ["das Lager", "warehouse"],
        ["die Logistikstörung", "logistics disruption"],
        ["die Just-in-Time-Lieferung", "just-in-time delivery"],
      ],
      grammar: [
        ["Emphatische Überraschungsstrukturen (kaum jemand ahnte)", "“Kaum jemand ahnte” o “niemand hatte erwartet” al inicio enfatizan que algo fue una sorpresa total, equivalente a “little did... know” en inglés.", "Kaum jemand ahnte, wie zerbrechlich die Lieferkette war. / Niemand hatte eine so schwere Logistikstörung erwartet."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “bottleneck” en alemán?",["der Engpass", "warehouse", "supply chain", "just-in-time delivery"],0,"“Bottleneck” es “der Engpass” en alemán."],
      ["mcq","¿Cómo se dice “just-in-time delivery” en alemán?",["just-in-time delivery", "bottleneck", "logistics disruption", "die Just-in-Time-Lieferung"],3,"“Just-in-time delivery” es “die Just-in-Time-Lieferung” en alemán."],
      ["fill","Completa: “Kaum jemand ___, wie zerbrechlich die Lieferkette war.”",["ahnen", "ahnte", "ahnt", "geahnt"],1,"“Kaum jemand ahnte” usa Präteritum para describir la falta de anticipación."],
      ["translate","Traduce con estructura enfática: “Little did anyone expect such a severe logistics disruption.”",["Jemand hatte eine so schwere Logistikstörung erwartet.", "Niemand hatte eine so schwere Logistikstörung erwartet.", "Niemand hat eine so schwere Logistikstörung erwartet.", "Niemand hatte eine so schwere Logistikstörung erwarten."],1,"“Little did anyone expect” se traduce naturalmente con “niemand hatte... erwartet”, Plusquamperfekt en alemán."],
      ["arrange","Ordena: [lagert / Waren / Lager / das]",["lager lagert das waren", "lagert das waren lager", "lager waren lagert das", "das lager lagert waren"],3,"Artículo + sustantivo + verbo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre la cadena de suministro global usando “kaum jemand ahnte/niemand hatte erwartet” al menos una vez.",[],["kaum jemand ahnte", "Lieferkette", "Engpass"]],
    ]
  },
  {
    id:"de_a1_ham_radio_telecommunications", level:"A1", title:"Der Amateurfunk und die Telekommunikation", emoji:"📻", xp:38,
    description:"Lerne Amateurfunk-Vokabular und benutze “es gibt” auf Deutsch.",
    study: {
      vocab: [
        ["das Funksignal", "radio signal"],
        ["die Antenne", "antenna"],
        ["die Frequenz", "frequency"],
        ["das Mikrofon", "microphone"],
        ["senden", "to transmit"],
        ["das Rauschen", "static"],
      ],
      grammar: [
        ["“Es gibt” para indicar existencia", "“Es gibt” + acusativo se usa para indicar la existencia de algo, sin importar si es singular o plural.", "Es gibt viel Rauschen auf dieser Frequenz. / Es gibt zwei Antennen auf dem Dach."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “antenna” en alemán?",["die Antenne", "radio signal", "microphone", "static"],0,"“Antenna” es “die Antenne” en alemán."],
      ["mcq","¿Cómo se dice “static” en alemán?",["radio signal", "microphone", "frequency", "das Rauschen"],3,"“Static” es “das Rauschen” en alemán."],
      ["fill","Completa: “___ zwei Antennen auf dem Dach.”",["Es sind", "Es hat", "Es gibst", "Es gibt"],3,"“Es gibt” + acusativo indica existencia: “es gibt zwei Antennen”."],
      ["translate","Traduce: “There is a lot of static on this frequency.”",["Es hat viel Rauschen auf dieser Frequenz.", "Es gibt viele Rauschen auf dieser Frequenz.", "Es gibt viel Rauschen auf diese Frequenz.", "Es gibt viel Rauschen auf dieser Frequenz."],3,"“There is a lot of static” se traduce con “es gibt viel Rauschen”."],
      ["arrange","Ordena: [schwach / dieses / signal / ist]",["signal dieses ist schwach", "dieses signal ist schwach", "signal schwach ist dieses", "ist dieses schwach signal"],1,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Describe en alemán, en 20-30 palabras, un equipo de radioafición usando “es gibt”.",[],["es gibt", "Antenne", "Frequenz"]],
    ]
  },
  {
    id:"de_a2_astrology_horoscopes", level:"A2", title:"Die Astrologie und die Horoskope", emoji:"🔮", xp:48,
    description:"Lerne Astrologie-Vokabular und benutze “werden” für Vorhersagen auf Deutsch.",
    study: {
      vocab: [
        ["das Horoskop", "horoscope"],
        ["das Sternzeichen", "zodiac sign"],
        ["der Wahrsager/die Wahrsagerin", "fortune teller"],
        ["die Sternkarte", "star chart"],
        ["die Vorhersage", "prediction"],
        ["das Schicksal", "destiny"],
      ],
      grammar: [
        ["“Werden” + infinitivo para vorhersagen", "“Werden” + infinitivo al final se usa para hacer predicciones sobre el futuro basadas en opinión o creencia.", "Dieses Horoskop sagt, du wirst eine gute Woche haben. / Die Wahrsagerin denkt, sie wird bald die Liebe finden."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “zodiac sign” en alemán?",["das Sternzeichen", "destiny", "zodiac sign", "prediction"],0,"“Zodiac sign” es “das Sternzeichen” en alemán."],
      ["mcq","¿Cómo se dice “destiny” en alemán?",["fortune teller", "horoscope", "star chart", "das Schicksal"],3,"“Destiny” es “das Schicksal” en alemán."],
      ["fill","Completa: “Dieses Horoskop sagt, du ___ eine gute Woche haben.”",["wirst", "hast", "wirdst", "würdest"],0,"“Werden” con “du” se conjuga como “du wirst”."],
      ["translate","Traduce: “The fortune teller thinks she will find love soon.”",["Die Wahrsagerin denkt, sie wird bald die Liebe gefunden.", "Die Wahrsagerin denkt, sie wird bald die Liebe finden.", "Die Wahrsagerin denkt, sie findet bald die Liebe.", "Die Wahrsagerin dachte, sie wird bald die Liebe finden."],1,"“Will find” se traduce con “werden” + infinitivo: “wird... finden”."],
      ["arrange","Ordena: [interessant / Sternkarte / diese / ist]",["ist diese interessant sternkarte", "ist interessant diese sternkarte", "sternkarte diese interessant ist", "diese sternkarte ist interessant"],3,"Pronombre + sustantivo + verbo + adjetivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, tu horóscopo de esta semana usando “werden” para predicciones.",[],["wird", "Horoskop", "Vorhersage"]],
    ]
  },
  {
    id:"de_b1_skydiving_extreme_sports", level:"B1", title:"Das Fallschirmspringen und Extremsportarten", emoji:"🪂", xp:62,
    description:"Lerne Extremsport-Vokabular und benutze “es schaffen” auf Deutsch.",
    study: {
      vocab: [
        ["der Fallschirm", "parachute"],
        ["der freie Fall", "free fall"],
        ["der Adrenalinschub", "adrenaline rush"],
        ["springen", "to jump"],
        ["das Bungee-Jumping", "bungee jumping"],
        ["der Extremsport", "extreme sport"],
      ],
      grammar: [
        ["“Es schaffen” + zu + infinitivo", "“Es schaffen, zu” + infinitivo expresa que alguien logró hacer algo difícil.", "Sie hat es geschafft, den Fallschirm rechtzeitig zu öffnen. / Er hat es geschafft, seine Höhenangst zu überwinden."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “free fall” en alemán?",["adrenaline rush", "free fall", "der freie Fall", "extreme sport"],2,"“Free fall” es “der freie Fall” en alemán."],
      ["mcq","¿Cómo se dice “adrenaline rush” en alemán?",["free fall", "parachute", "extreme sport", "der Adrenalinschub"],3,"“Adrenaline rush” es “der Adrenalinschub” en alemán."],
      ["fill","Completa: “Sie hat es geschafft, den Fallschirm rechtzeitig ___ öffnen.”",["an", "zu", "um zu", "es zu"],1,"“Es schaffen, zu” + infinitivo: “geschafft,... zu öffnen”."],
      ["translate","Traduce: “He succeeded in overcoming his fear of heights.”",["Er hat es geschafft, seine Höhenangst zu überwinden.", "Er schafft es, seine Höhenangst zu überwinden.", "Er hat es geschafft, seine Höhenangst zu überwunden.", "Er hat es geschafft, seine Höhenangst überwinden."],0,"“Succeed in overcoming” se traduce con “es schaffen, zu überwinden”."],
      ["arrange","Ordena: [spannend / dieser / sehr / ist / Sport]",["ist sport dieser spannend sehr", "sehr dieser spannend ist sport", "dieser ist sehr sport spannend", "dieser sport ist sehr spannend"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre un deporte extremo usando “es schaffen, zu” al menos dos veces.",[],["es geschafft", "Extremsport", "Fallschirm"]],
    ]
  },
  {
    id:"de_b2_entomology_insects", level:"B2", title:"Die Entomologie und die Insekten", emoji:"🐛", xp:84,
    description:"Habla de entomología usando “zusätzlich zu/sowie” en alemán.",
    study: {
      vocab: [
        ["das Insekt", "insect"],
        ["das Außenskelett", "exoskeleton"],
        ["die Metamorphose", "metamorphosis"],
        ["die Fühler (Insekt)", "antenna (insect)"],
        ["die Larve", "larva"],
        ["der Bestäuber", "pollinator"],
      ],
      grammar: [
        ["“Zusätzlich zu/sowie”", "“Zusätzlich zu” + sustantivo/gerundio nominal y “sowie” añaden información extra, similares a “besides” en inglés.", "Zusätzlich zur Bestäubung von Blumen produzieren Bienen Honig. / Käfer sowie Schmetterlinge durchlaufen eine Metamorphose."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “exoskeleton” en alemán?",["metamorphosis", "larva", "das Außenskelett", "exoskeleton"],2,"“Exoskeleton” es “das Außenskelett” en alemán."],
      ["mcq","¿Cómo se dice “metamorphosis” en alemán?",["pollinator", "metamorphosis", "die Metamorphose", "larva"],2,"“Metamorphosis” es “die Metamorphose” en alemán."],
      ["fill","Completa: “___ zur Bestäubung von Blumen produzieren Bienen Honig.”",["Zusätzlich von", "Sowie", "Zusätzlich", "Außerdem zu"],2,"“Zusätzlich zu” introduce información extra: “zusätzlich zur Bestäubung”."],
      ["translate","Traduce: “Beetles, as well as butterflies, undergo metamorphosis.”",["Käfer sowie Schmetterlinge durchlaufen eine Metamorphose.", "Käfer sowie Schmetterlinge durchläuft eine Metamorphose.", "Käfer zusätzlich Schmetterlinge durchlaufen eine Metamorphose.", "Käfer sowie Schmetterlinge durchliefen eine Metamorphose."],0,"“As well as” se traduce con “sowie” en este contexto."],
      ["arrange","Ordena: [wichtige / Bienen / sind / Bestäuber]",["wichtige bienen sind bestäuber", "bestäuber sind bienen wichtige", "bienen wichtige sind bestäuber", "bienen sind wichtige bestäuber"],3,"Sujeto + verbo + adjetivo + sustantivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre los insectos usando “zusätzlich zu” o “sowie” al menos dos veces.",[],["zusätzlich zu", "sowie", "Insekt"]],
    ]
  },
  {
    id:"de_c1_intellectual_property_law", level:"C1", title:"Das Recht des geistigen Eigentums", emoji:"©️", xp:92,
    description:"Analiza la propiedad intelectual usando “ungeachtet” en registro legal formal en alemán.",
    study: {
      vocab: [
        ["das Urheberrecht", "copyright"],
        ["das Patent", "patent"],
        ["die Marke", "trademark"],
        ["die Verletzung", "infringement"],
        ["der Lizenzvertrag", "licensing agreement"],
        ["das geistige Eigentum", "intellectual property"],
      ],
      grammar: [
        ["“Ungeachtet” para concesión legal formal", "“Ungeachtet” + genitivo (registro muy formal/legal) expresa una concesión, equivalente a “trotz” pero típico de textos jurídicos.", "Ungeachtet des Patents setzte das Unternehmen die Produktion fort. / Die Marke bleibt gültig, ungeachtet des Rechtsstreits."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “infringement” en alemán?",["infringement", "copyright", "die Verletzung", "intellectual property"],2,"“Infringement” es “die Verletzung” en alemán."],
      ["mcq","¿Cómo se dice “licensing agreement” en alemán?",["trademark", "infringement", "intellectual property", "der Lizenzvertrag"],3,"“Licensing agreement” es “der Lizenzvertrag” en alemán."],
      ["fill","Completa: “___ des Patents setzte das Unternehmen die Produktion fort.”",["Trotzdem", "Obwohl", "Wegen", "Ungeachtet"],3,"“Ungeachtet” + genitivo: “ungeachtet des Patents”."],
      ["translate","Traduce con registro legal formal: “The trademark remains valid, notwithstanding the dispute.”",["Die Marke bleibt gültig, ungeachtet des Rechtsstreit.", "Die Marke bleibt gültig, ungeachtet der Rechtsstreits.", "Die Marke blieb gültig, ungeachtet des Rechtsstreits.", "Die Marke bleibt gültig, ungeachtet des Rechtsstreits."],3,"“Notwithstanding” en este contexto formal se traduce con “ungeachtet” + genitivo."],
      ["arrange","Ordena: [geltend / Verletzung / Unternehmen / machte / das]",["das geltend verletzung machte unternehmen", "das unternehmen machte verletzung geltend", "machte verletzung geltend unternehmen das", "das unternehmen verletzung machte geltend"],1,"Artículo + sustantivo + verbo + sustantivo + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre propiedad intelectual usando “ungeachtet” al menos dos veces.",[],["ungeachtet", "Patent", "Urheberrecht"]],
    ]
  },
  {
    id:"de_c2_geology_minerals", level:"C2", title:"Die Geologie und die Minerale", emoji:"💎", xp:100,
    description:"Analiza la geología usando “weit davon entfernt zu” en alemán.",
    study: {
      vocab: [
        ["die Mineralvorkommen", "mineral deposit"],
        ["die kristalline Struktur", "crystalline structure"],
        ["das Sedimentgestein", "sedimentary rock"],
        ["die tektonische Verschiebung", "tectonic shift"],
        ["das Eruptivgestein", "igneous rock"],
        ["die mineralische Zusammensetzung", "mineral composition"],
      ],
      grammar: [
        ["“Weit davon entfernt zu” para concesión enfática", "“Weit davon entfernt zu” + infinitivo expresa que algo es completamente lo contrario de lo esperado, un recurso enfático de registro formal.", "Weit davon entfernt, stabil zu sein, verändert sich diese Gesteinsformation ständig. / Weit davon entfernt, die Debatte zu klären, warf die Entdeckung neue Fragen auf."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “crystalline structure” en alemán?",["die kristalline Struktur", "mineral deposit", "igneous rock", "crystalline structure"],0,"“Crystalline structure” es “die kristalline Struktur” en alemán."],
      ["mcq","¿Cómo se dice “sedimentary rock” en alemán?",["igneous rock", "das Sedimentgestein", "sedimentary rock", "crystalline structure"],1,"“Sedimentary rock” es “das Sedimentgestein” en alemán."],
      ["fill","Completa: “Weit davon entfernt, stabil ___ sein, verändert sich diese Formation ständig.”",["es zu", "um zu", "an", "zu"],3,"“Weit davon entfernt, zu” + infinitivo: “entfernt, stabil zu sein”."],
      ["translate","Traduce con estructura enfática: “Far from settling the debate, the discovery raised new questions.”",["Weit davon entfernt, die Debatte zu klären, warf die Entdeckung neue Fragen auf.", "Weit davon entfernt, die Debatte zu klären, wirft die Entdeckung neue Fragen auf.", "Weit entfernt, die Debatte zu klären, warf die Entdeckung neue Fragen auf.", "Weit davon entfernt, die Debatte zu klären, warf die Entdeckung alte Fragen auf."],0,"“Far from settling” se traduce con “weit davon entfernt, zu klären”."],
      ["arrange","Ordena: [selten / Mineral / sehr / ist / dieses]",["dieses mineral ist sehr selten", "selten sehr dieses mineral ist", "ist mineral sehr selten dieses", "sehr ist mineral dieses selten"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre geología usando “weit davon entfernt zu” al menos una vez.",[],["weit davon entfernt", "Mineralvorkommen", "Sedimentgestein"]],
    ]
  },
  {
    id:"de_a1_coffee_tasting_cafes", level:"A1", title:"Die Kaffeeverkostung und die Cafés", emoji:"☕", xp:38,
    description:"Lerne Kaffee-Vokabular und benutze “ich hätte gern” auf Deutsch.",
    study: {
      vocab: [
        ["die Kaffeebohne", "coffee bean"],
        ["die Röstung", "roast"],
        ["das Aroma", "aroma"],
        ["der Barista", "barista"],
        ["aufbrühen", "to brew"],
        ["die Tasse", "cup"],
      ],
      grammar: [
        ["“Ich hätte gern” para peticiones corteses", "“Ich hätte gern” (Konjunktiv II) es una forma cortés de pedir algo, más formal que “ich will”.", "Ich hätte gern eine Tasse Kaffee, bitte. / Sie möchte die dunkle Röstung probieren."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “roast” en alemán?",["barista", "to brew", "die Röstung", "aroma"],2,"“Roast” es “die Röstung” en alemán."],
      ["mcq","¿Cómo se dice “barista” en alemán?",["barista", "aroma", "coffee bean", "der Barista"],3,"“Barista” es “der Barista” en alemán."],
      ["fill","Completa: “Ich ___ gern eine Tasse Kaffee, bitte.”",["habe", "würde", "hätte", "hatte"],2,"“Ich hätte gern” es la forma cortés de pedir: “ich hätte gern”."],
      ["translate","Traduce: “She would like to try the dark roast.”",["Sie möchte die helle Röstung probieren.", "Sie will die dunkle Röstung probieren bitte.", "Sie möchte die dunkle Röstung probiert.", "Sie möchte die dunkle Röstung probieren."],3,"“Would like to try” se traduce con “möchte probieren”."],
      ["arrange","Ordena: [stark / riecht / dieser / Kaffee]",["dieser kaffee riecht stark", "stark riecht kaffee dieser", "dieser stark riecht kaffee", "stark kaffee dieser riecht"],0,"Pronombre + sustantivo + verbo + adjetivo."],
      ["writing","Describe en alemán, en 20-30 palabras, tu pedido ideal en una cafetería usando “ich hätte gern”.",[],["ich hätte gern", "Kaffee", "Barista"]],
    ]
  },
  {
    id:"de_a2_antique_furniture_restoration", level:"A2", title:"Die Restaurierung antiker Möbel", emoji:"🪑", xp:48,
    description:"Lerne Möbelrestaurierungs-Vokabular und benutze “jemanden etwas machen lassen” auf Deutsch.",
    study: {
      vocab: [
        ["das antike Möbelstück", "antique furniture"],
        ["der Lack", "varnish"],
        ["das Schleifpapier", "sandpaper"],
        ["restaurieren", "to restore"],
        ["die Holzmaserung", "wood grain"],
        ["die Werkstatt", "workshop"],
      ],
      grammar: [
        ["“Jemanden etwas machen lassen”", "“Lassen” + persona + infinitivo expresa permitir que alguien haga algo.", "Lass den Lack über Nacht trocknen. / Sie lässt ihren Assistenten das Möbelstück schleifen."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “varnish” en alemán?",["der Lack", "wood grain", "varnish", "sandpaper"],0,"“Varnish” es “der Lack” en alemán."],
      ["mcq","¿Cómo se dice “sandpaper” en alemán?",["antique furniture", "das Schleifpapier", "workshop", "to restore"],1,"“Sandpaper” es “das Schleifpapier” en alemán."],
      ["fill","Completa: “Sie lässt ihren Assistenten das Möbelstück ___.”",["geschliffen", "schleift", "schleifen", "zu schleifen"],2,"“Lassen” + persona + infinitivo sin “zu”: “lässt... schleifen”."],
      ["translate","Traduce: “Let the varnish dry overnight.”",["Lass den Lack über Nacht getrocknet.", "Lass den Lack über Nacht zu trocknen.", "Lass den Lack über Nacht trocknen.", "Lässt den Lack über Nacht trocknen."],2,"“Let... dry” se traduce con “lass... trocknen”, infinitivo sin “zu”."],
      ["arrange","Ordena: [sehr / ist / Möbelstück / alt / dieses]",["dieses möbelstück ist sehr alt", "alt dieses sehr möbelstück ist", "alt ist sehr dieses möbelstück", "alt ist dieses sehr möbelstück"],0,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["speaking","Describe en alemán, en 40-60 palabras, un proyecto de restauración de muebles usando “lassen + persona + infinitivo”.",[],["lässt", "restaurieren", "Lack"]],
    ]
  },
  {
    id:"de_b1_lexicography_dictionaries", level:"B1", title:"Die Lexikografie und die Wörterbücher", emoji:"📖", xp:62,
    description:"Lerne Lexikografie-Vokabular und benutze “anstatt” auf Deutsch.",
    study: {
      vocab: [
        ["der Wörterbucheintrag", "dictionary entry"],
        ["die Definition", "definition"],
        ["die Etymologie", "etymology"],
        ["das Stichwort", "headword"],
        ["das Synonym", "synonym"],
        ["das Anwendungsbeispiel", "usage example"],
      ],
      grammar: [
        ["“Anstatt” + zu + infinitivo para preferencia", "“Anstatt... zu” + infinitivo expresa preferencia por una opción sobre otra.", "Sie wählte eine moderne Definition anstatt der alten. / Anstatt zu raten, schau die Etymologie nach."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “etymology” en alemán?",["synonym", "headword", "dictionary entry", "die Etymologie"],3,"“Etymology” es “die Etymologie” en alemán."],
      ["mcq","¿Cómo se dice “headword” en alemán?",["headword", "das Stichwort", "dictionary entry", "synonym"],1,"“Headword” es “das Stichwort” en alemán."],
      ["fill","Completa: “Anstatt ___ raten, schau die Etymologie nach.”",["zum", "an", "um zu", "zu"],3,"“Anstatt... zu” + infinitivo introduce la alternativa evitada: “anstatt zu raten”."],
      ["translate","Traduce: “Rather than guessing, look up the etymology.”",["Anstatt raten, schau die Etymologie nach.", "Anstatt zu raten, schau die Etymologie nach.", "Statt dass raten, schau die Etymologie nach.", "Anstatt zu raten, schaute die Etymologie nach."],1,"“Rather than guessing” se traduce con “anstatt zu raten”, infinitivo con “zu”."],
      ["arrange","Ordena: [nützlich / ist / dieses / sehr / Beispiel]",["dieses ist sehr nützlich beispiel", "dieses beispiel ist sehr nützlich", "dieses beispiel ist nützlich sehr", "nützlich ist beispiel dieses sehr"],1,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 45-65 palabras, sobre el uso de diccionarios usando “anstatt... zu” al menos dos veces.",[],["anstatt zu", "Wörterbuch", "Definition"]],
    ]
  },
  {
    id:"de_b2_medical_radiology_imaging", level:"B2", title:"Die medizinische Radiologie und die Bildgebung", emoji:"🩻", xp:84,
    description:"Habla de radiología usando “für den Fall, dass” en alemán.",
    study: {
      vocab: [
        ["die Röntgenaufnahme", "X-ray"],
        ["die MRT-Untersuchung", "MRI scan"],
        ["der Radiologe/die Radiologin", "radiologist"],
        ["das Kontrastmittel", "contrast dye"],
        ["die Diagnose", "diagnosis"],
        ["die Strahlenbelastung", "radiation exposure"],
      ],
      grammar: [
        ["“Für den Fall, dass” para precaución", "“Für den Fall, dass” + verbo al final expresa una precaución tomada para un posible evento futuro, sin implicar condición estricta.", "Der Radiologe ordnete eine MRT an, für den Fall, dass die Röntgenaufnahme etwas übersah. / Bring deine früheren Aufnahmen mit, für den Fall, dass der Arzt sie braucht."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “MRI scan” en alemán?",["contrast dye", "radiologist", "diagnosis", "die MRT-Untersuchung"],3,"“MRI scan” es “die MRT-Untersuchung” en alemán."],
      ["mcq","¿Cómo se dice “contrast dye” en alemán?",["das Kontrastmittel", "contrast dye", "MRI scan", "radiologist"],0,"“Contrast dye” es “das Kontrastmittel” en alemán."],
      ["fill","Completa: “Bring deine früheren Aufnahmen mit, für den Fall, dass der Arzt sie ___.”",["braucht", "brauche", "gebraucht", "brauchte"],0,"“Für den Fall, dass” + presente al final: “für den Fall, dass... braucht”."],
      ["translate","Traduce: “The radiologist ordered an MRI in case the X-ray missed something.”",["Der Radiologe ordnet eine MRT an, für den Fall, dass die Röntgenaufnahme etwas übersah.", "Der Radiologe ordnete eine MRT an, für den Fall, dass die Röntgenaufnahme etwas übersah.", "Der Radiologe ordnete eine MRT an, wenn die Röntgenaufnahme etwas übersah.", "Der Radiologe ordnete eine MRT an, für den Fall, dass die Röntgenaufnahme etwas übersieht."],1,"“In case” se traduce con “für den Fall, dass”, expresando precaución."],
      ["arrange","Ordena: [klar / Diagnose / sehr / ist / die]",["die diagnose ist sehr klar", "sehr klar die ist diagnose", "klar diagnose ist sehr die", "die sehr ist klar diagnose"],0,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, sobre un procedimiento de radiología usando “für den Fall, dass” al menos dos veces.",[],["für den Fall, dass", "Röntgenaufnahme", "Diagnose"]],
    ]
  },
  {
    id:"de_c1_virology_pandemics", level:"C1", title:"Die Virologie und die Pandemien", emoji:"🦠", xp:92,
    description:"Analiza la virología usando “selbst wenn” en alemán.",
    study: {
      vocab: [
        ["der Virusstamm", "virus strain"],
        ["der Ausbruch", "outbreak"],
        ["die Herdenimmunität", "herd immunity"],
        ["die Impfstoffwirksamkeit", "vaccine efficacy"],
        ["die Übertragungsrate", "transmission rate"],
        ["die Mutation", "mutation"],
      ],
      grammar: [
        ["“Selbst wenn” para concesión hipotética", "“Selbst wenn” + Konjunktiv II expresa que algo será cierto incluso en una situación hipotética o improbable, a diferencia de “obwohl” (hecho real).", "Selbst wenn die Impfstoffwirksamkeit sinken würde, könnte die Herdenimmunität helfen. / Das Virus würde sich ausbreiten, selbst wenn die Übertragungsraten leicht sänken."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “outbreak” en alemán?",["der Ausbruch", "outbreak", "virus strain", "herd immunity"],0,"“Outbreak” es “der Ausbruch” en alemán."],
      ["mcq","¿Cómo se dice “herd immunity” en alemán?",["herd immunity", "outbreak", "die Herdenimmunität", "vaccine efficacy"],2,"“Herd immunity” es “die Herdenimmunität” en alemán."],
      ["fill","Completa: “Selbst wenn die Wirksamkeit sinken ___, könnte die Herdenimmunität helfen.”",["würde", "würden", "wird", "wurde"],0,"“Selbst wenn” con hipótesis usa Konjunktiv II: “selbst wenn... würde”."],
      ["translate","Traduce con concesión hipotética: “The virus would spread even if transmission rates fell slightly.”",["Das Virus würde sich ausbreiten, selbst wenn die Übertragungsraten leicht sinken.", "Das Virus würde sich ausbreiten, selbst wenn die Übertragungsraten leicht sänken.", "Das Virus würde sich ausbreiten, obwohl die Übertragungsraten leicht sänken.", "Das Virus würde sich ausbreiten, selbst wenn die Übertragungsraten leicht stiegen."],1,"“Even if” con condición hipotética se traduce con “selbst wenn” + Konjunktiv II."],
      ["arrange","Ordena: [besorgniserregend / diese / ist / Mutation / sehr]",["ist sehr diese besorgniserregend mutation", "besorgniserregend diese ist mutation sehr", "besorgniserregend diese ist sehr mutation", "diese mutation ist sehr besorgniserregend"],3,"Pronombre + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre virología usando “selbst wenn” al menos dos veces.",[],["selbst wenn", "Ausbruch", "Herdenimmunität"]],
    ]
  },
  {
    id:"de_c2_central_banking_monetary_policy", level:"C2", title:"Die Zentralbank und die Geldpolitik", emoji:"🏦", xp:100,
    description:"Analiza la política monetaria usando “insofern als/insoweit” en alemán.",
    study: {
      vocab: [
        ["der Zinssatz", "interest rate"],
        ["das Inflationsziel", "inflation target"],
        ["die quantitative Lockerung", "quantitative easing"],
        ["die Geldpolitik", "monetary policy"],
        ["die Zentralbank", "central bank"],
        ["das Konjunkturprogramm", "fiscal stimulus"],
      ],
      grammar: [
        ["“Insofern als/insoweit” para calificar", "“Insofern als” e “insoweit” expresan una limitación o condición parcial, típicas del registro académico/formal, equivalentes a “insofar as” en inglés.", "Insofern als die Inflation stabil bleibt, sind Zinssenkungen möglich. / Die Politik funktioniert insoweit, als Banken großzügiger Kredite vergeben."],
      ]
    },
    ex:[
      ["mcq","¿Cómo se dice “quantitative easing” en alemán?",["die quantitative Lockerung", "inflation target", "interest rate", "monetary policy"],0,"“Quantitative easing” es “die quantitative Lockerung” en alemán."],
      ["mcq","¿Cómo se dice “fiscal stimulus” en alemán?",["das Konjunkturprogramm", "fiscal stimulus", "quantitative easing", "interest rate"],0,"“Fiscal stimulus” es “das Konjunkturprogramm” en alemán."],
      ["fill","Completa: “___ die Inflation stabil bleibt, sind Zinssenkungen möglich.”",["So als", "Soweit dass", "Insofern als", "Insofern dass"],2,"“Insofern als” expresa una limitación condicional: “insofern als... bleibt”."],
      ["translate","Traduce con calificador formal: “The policy works to the extent that banks lend more freely.”",["Die Politik funktioniert insofern dass Banken großzügiger Kredite vergeben.", "Die Politik funktionierte insoweit, als Banken großzügiger Kredite vergeben.", "Die Politik funktioniert insoweit, als Banken weniger großzügig Kredite vergeben.", "Die Politik funktioniert insoweit, als Banken großzügiger Kredite vergeben."],3,"“To the extent that” se traduce con “insoweit, als” en alemán."],
      ["arrange","Ordena: [sehr / Zinssatz / hoch / der / ist]",["zinssatz ist hoch der sehr", "der zinssatz ist sehr hoch", "sehr ist hoch der zinssatz", "der ist sehr hoch zinssatz"],1,"Artículo + sustantivo + verbo + adverbio + adjetivo."],
      ["writing","Escribe en alemán, en 55-75 palabras, un análisis sobre política monetaria usando “insofern als” o “insoweit” al menos una vez.",[],["insofern als", "Geldpolitik", "Zentralbank"]],
    ]
  },
];
