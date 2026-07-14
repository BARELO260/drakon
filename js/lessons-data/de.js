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
];
