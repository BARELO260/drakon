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
];
