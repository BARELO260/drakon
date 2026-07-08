/* ═══════════════════════════════════════════════════════════
   js/lessons-data/ru.js — Banco de lecciones: RUSO (RU)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.RU = [
  {
    id:"ru_a1_greetings", level:"A1", title:"Приветствия и знакомство", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en ruso.",
    ex:[
      ["mcq", "¿Cómo se dice \"Hello\" (saludo neutro/formal) en ruso?", ["Здравствуйте","Спокойной ночи","До свидания","Пока"], 0, "\"Здравствуйте\" es el saludo formal universal. Entre amigos se puede usar \"Привет\" (informal)."],
      ["mcq", "Alguien te dice \"Как дела?\" (¿cómo estás?). ¿Cuál es una respuesta común?", ["Хорошо, спасибо","Меня зовут Иван","Мне двадцать лет","До встречи"], 0, "\"Хорошо, спасибо\" (bien, gracias) es la respuesta estándar."],
      ["fill", "Completa: \"Привет! Меня ___ Анна.\" (Hi! My name is Anna)", ["зовут","зову","звать","зовет"], 0, "\"Меня зовут Анна\" es la forma estándar de decir tu nombre (literalmente \"me llaman Anna\")."],
      ["translate", "Traduce al ruso: \"Nice to meet you!\"", ["Приятно познакомиться!","Как тебя зовут?","Откуда ты?","До завтра!"], 0, "\"Приятно познакомиться!\" es la expresión estándar al conocer a alguien nuevo."],
      ["mcq", "¿Qué significa \"Как тебя зовут?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"Как тебя зовут?\" = What's your name? Respuesta: \"Меня зовут ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["mcq", "¿Cómo te despides de forma informal en ruso?", ["Пока","Здравствуйте","Спасибо","Извините"], 0, "\"Пока\" (chau) es informal y muy común entre amigos. \"До свидания\" es más formal."],
    ]
  },
  {
    id:"ru_a1_numbers_colors", level:"A1", title:"Числа и цвета", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 10 y colores básicos en ruso.",
    ex:[
      ["mcq", "¿Cómo se dice el número 5 en ruso?", ["Пять","Пятьдесят","Десять","Четыре"], 0, "5 = пять. Ojo: 50 = пятьдесят (parecido pero no igual)."],
      ["mcq", "¿Qué color es \"красный\"?", ["Red","Blue","Green","Yellow"], 0, "Красный = red. Otros colores: синий (blue), зелёный (green), жёлтый (yellow), белый (white), чёрный (black).", "🍎 Piensa en una manzana madura."],
      ["mcq", "¿Cómo se dice el número 10 en ruso?", ["Десять","Девять","Десятка","Сто"], 0, "10 = десять. 9 = девять, 100 = сто."],
      ["mcq", "¿Cómo se dice \"black\" en ruso?", ["Чёрный","Белый","Серый","Коричневый"], 0, "Чёрный = black. Белый = white, серый = gray, коричневый = brown."],
      ["translate", "Traduce: \"The sky is blue.\" (Небо синее)", ["Небо синее","Небо зелёное","Дом синий","Море синее"], 0, "\"Небо синее.\" — небо = sky, синее (forma neutra de синий) = blue."],
      ["mcq", "¿Cómo se dice el número 3 en ruso?", ["Три","Тридцать","Второй","Четыре"], 0, "3 = три. Ojo: 30 = тридцать es diferente."],
    ]
  },
  {
    id:"ru_a1_pronouns", level:"A1", title:"Местоимения и \"быть\"", emoji:"🧩", xp:35,
    description:"Los pronombres personales y el verbo \"ser/estar\" en ruso (que se omite en presente).",
    ex:[
      ["mcq", "¿Cómo se dice \"I\" (yo) en ruso?", ["Я","Ты","Он","Мы"], 0, "\"Я\" = yo. Ты = tú, он = él, мы = nosotros."],
      ["mcq", "En presente, ¿qué palabra se usa para \"soy/eres/es\" en ruso? (\"Я студент\")", ["Ninguna, se omite","Есть","Быть","Он"], 0, "En ruso, el verbo \"ser/estar\" (быть) se OMITE en tiempo presente: \"Я студент\" = \"Yo (soy) estudiante\", sin verbo explícito."],
      ["mcq", "¿Cómo se dice \"we\" (nosotros) en ruso?", ["Мы","Вы","Они","Ты"], 0, "\"Мы\" = nosotros. Вы = ustedes/usted, они = ellos."],
      ["translate", "Traduce: \"She is a doctor.\" (sin verbo, como en ruso)", ["Она врач","Она есть врач","Он врач","Она быть врач"], 0, "\"Она врач.\" (ella médico) — en presente no se usa verbo \"ser\" en ruso."],
      ["mcq", "¿Cómo se dice \"they\" (ellos) en ruso?", ["Они","Он","Она","Оно"], 0, "\"Они\" = ellos/ellas. Он = él, она = ella, оно = ello (neutro)."],
      ["mcq", "¿Cómo se dice \"you\" informal (tú) en ruso?", ["Ты","Вы","Мы","Я"], 0, "\"Ты\" es informal (tú). \"Вы\" es formal o plural (usted/ustedes)."],
    ]
  },
];
