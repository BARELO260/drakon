/* ═══════════════════════════════════════════════════════════
   js/lessons-data/ru.js — Banco de lecciones: RUSO (RU)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.RU = [
  {
    id:"ru_a1_greetings", level:"A1", title:"Приветствия и знакомство", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en ruso.",
    study: {
      vocab: [
        ["Здравствуйте", "Hello (formal)"],
        ["Привет / Пока", "Hi / Bye (informal)"],
        ["Приятно познакомиться!", "Nice to meet you!"],
        ["Меня зовут...", "My name is...", "Literalmente: \"me llaman\""],
        ["Как дела?", "How are you?", "Respuesta: \"Хорошо, спасибо\""]
      ],
      grammar: [
        ["El verbo \"ser\" se omite en presente", "En ruso, a diferencia del español/inglés, no se usa un verbo \"ser/estar\" explícito en tiempo presente.", "Я студент. (Yo [soy] estudiante — sin verbo)"]
      ]
    },
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
    study: {
      vocab: [
        ["один, два, три... десять", "one, two, three... ten"],
        ["красный, синий, зелёный, жёлтый", "red, blue, green, yellow"],
        ["белый, чёрный", "white, black"]
      ],
      grammar: [
        ["Los adjetivos concuerdan en género", "Los colores cambian su terminación según el género del sustantivo: masculino (-ый), femenino (-ая), neutro (-ое).", "красный дом (masc.) / красная машина (fem.) / красное небо (neutro)."]
      ]
    },
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
    study: {
      vocab: [
        ["я, ты, он/она, мы, вы, они", "I, you, he/she, we, you(pl), they"],
        ["быть", "to be", "Se omite en presente."]
      ],
      grammar: [
        ["Pronombres personales", "Los pronombres personales rusos no cambian de forma tanto como en otros idiomas, pero es clave memorizarlos para conjugar verbos correctamente.", "Я студент. Мы студенты."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I\" (yo) en ruso?", ["Я","Ты","Он","Мы"], 0, "\"Я\" = yo. Ты = tú, он = él, мы = nosotros."],
      ["mcq", "En presente, ¿qué palabra se usa para \"soy/eres/es\" en ruso? (\"Я студент\")", ["Ninguna, se omite","Есть","Быть","Он"], 0, "En ruso, el verbo \"ser/estar\" (быть) se OMITE en tiempo presente: \"Я студент\" = \"Yo (soy) estudiante\", sin verbo explícito."],
      ["mcq", "¿Cómo se dice \"we\" (nosotros) en ruso?", ["Мы","Вы","Они","Ты"], 0, "\"Мы\" = nosotros. Вы = ustedes/usted, они = ellos."],
      ["translate", "Traduce: \"She is a doctor.\" (sin verbo, como en ruso)", ["Она врач","Она есть врач","Он врач","Она быть врач"], 0, "\"Она врач.\" (ella médico) — en presente no se usa verbo \"ser\" en ruso."],
      ["mcq", "¿Cómo se dice \"they\" (ellos) en ruso?", ["Они","Он","Она","Оно"], 0, "\"Они\" = ellos/ellas. Он = él, она = ella, оно = ello (neutro)."],
      ["mcq", "¿Cómo se dice \"you\" informal (tú) en ruso?", ["Ты","Вы","Мы","Я"], 0, "\"Ты\" es informal (tú). \"Вы\" es formal o plural (usted/ustedes)."],
    ]
  },
  {
    id:"ru_a1_family_home", level:"A1", title:"Семья и дом (Familia y casa)", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en ruso.",
    study: {
      vocab: [
        ["отец, мать", "father, mother"],
        ["брат, сестра", "brother, sister"],
        ["сын, дочь", "son, daughter"],
        ["спальня, кухня, гостиная", "bedroom, kitchen, living room"],
        ["ванная, сад", "bathroom, garden"]
      ],
      grammar: [
        ["Pronombres posesivos", "Мой (mi, masc.), моя (mi, fem.), моё (mi, neutro) concuerdan en género con el sustantivo poseído.", "мой отец (masc.) / моя мать (fem.)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" en ruso?", ["Мать","Отец","Сестра","Бабушка"], 0, "Мать = mother. Отец = father, сестра = sister, бабушка = grandmother."],
      ["mcq", "¿Qué habitación es \"кухня\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "Кухня = kitchen. Спальня = bedroom, ванная = bathroom, сад = garden."],
      ["mcq", "¿Cómo se dice \"my brother\" en ruso?", ["Мой брат","Моя брат","Моё брат","Мои брат"], 0, "\"Мой брат\" = my brother. \"Брат\" es masculino, por eso \"мой\"."],
      ["mcq", "¿Cómo se dice \"grandparents\" en ruso?", ["Бабушка и дедушка","Родители","Дядя и тётя","Двоюродные братья"], 0, "Бабушка и дедушка = grandmother and grandfather (grandparents). Родители = parents."],
      ["mcq", "¿Cómo se dice \"son\" en ruso?", ["Сын","Дочь","Брат","Отец"], 0, "Сын = son. Дочь = daughter."],
      ["translate", "Traduce: \"My family is big.\" (Моя семья большая)", ["Моя семья большая","Мой семья большая","Моё семья большая","Моя семья большой"], 0, "\"Моя семья большая.\" — семья (familia) es femenino, por eso \"моя\" y \"большая\"."],
    ]
  },
  {
    id:"ru_a1_food_restaurant", level:"A1", title:"Еда и рестораны (Comida y restaurantes)", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en ruso.",
    study: {
      vocab: [
        ["меню", "the menu"],
        ["Я хотел(а) бы...", "I would like...", "Forma cortés de pedir."],
        ["счёт, пожалуйста", "the bill, please"],
        ["вода, хлеб", "water, bread"],
        ["вкусно", "delicious"]
      ],
      grammar: [
        ["\"Я хотел(а) бы\" para pedir con cortesía", "Forma condicional/cortés de \"хотеть\" (querer). \"Хотел\" si eres hombre, \"хотела\" si eres mujer.", "Я хотел бы кофе, пожалуйста. (hombre) / Я хотела бы кофе, пожалуйста. (mujer)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en ruso?", ["Меню","Счёт","Тарелка","Стол"], 0, "Меню = the menu. Счёт = the bill, тарелка = the plate, стол = the table."],
      ["mcq", "¿Qué significa \"счёт, пожалуйста\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"Счёт, пожалуйста\" = the bill, please. Se usa al terminar de comer."],
      ["mcq", "¿Cómo se dice \"waiter\" en ruso?", ["Официант","Повар","Клиент","Владелец"], 0, "Официант = waiter (официантка para mujer). Повар = cook, клиент = customer."],
      ["mcq", "¿Cómo se dice \"water\" en ruso?", ["Вода","Хлеб","Кофе","Чай"], 0, "Вода = water. Хлеб = bread, кофе = coffee, чай = tea."],
      ["mcq", "¿Cómo se dice \"delicious\" en ruso?", ["Вкусно","Плохо","Дорого","Быстро"], 0, "Вкусно = delicious. Плохо = bad, дорого = expensive, быстро = fast."],
      ["mcq", "¿Qué frase usarías para pedir algo cortésmente?", ["Я хотел бы кофе, пожалуйста","Дай кофе","Кофе сейчас","Хочу кофе быстро"], 0, "\"Я хотел бы кофе, пожалуйста\" es cortés. Las demás opciones suenan bruscas o imperativas."],
    ]
  },
  {
    id:"ru_a1_daily_routine", level:"A1", title:"Распорядок дня (Rutina diaria)", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en ruso.",
    study: {
      vocab: [
        ["просыпаться", "to wake up"],
        ["вставать", "to get up"],
        ["завтракать / обедать / ужинать", "to have breakfast/lunch/dinner"],
        ["идти на работу", "to go to work"],
        ["каждый день", "every day"]
      ],
      grammar: [
        ["Verbos de rutina en presente", "Los verbos rusos se conjugan según la persona; en presente no se usa un verbo \"ser/estar\" auxiliar, solo el verbo principal conjugado.", "Я встаю в семь. (Yo me levanto a las siete.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up\"?", ["Я просыпаюсь","Ты просыпаешься","Он просыпается","Просыпаться"], 0, "\"Я просыпаюсь\" — primera persona del verbo \"просыпаться\"."],
      ["mcq", "¿Qué significa \"завтракать\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "Завтракать = to have breakfast. Обедать = to have lunch, ужинать = to have dinner."],
      ["mcq", "¿Cómo se dice \"to go to work\" en ruso?", ["Идти на работу","Идти домой","Идти в школу","Идти в магазин"], 0, "Идти на работу = to go to work. Идти домой = to go home."],
      ["mcq", "¿Cómo se dice \"every day\" en ruso?", ["Каждый день","Один день","Когда-нибудь","Вчера"], 0, "Каждый день = every day. Один день = one day, вчера = yesterday."],
      ["mcq", "¿Cómo se dice \"to get up\" en ruso?", ["Вставать","Ложиться","Есть","Работать"], 0, "Вставать = to get up. Ложиться = to lie down/go to bed, есть = to eat."],
      ["translate", "Traduce: \"I go to work at 9.\" (Я иду на работу в девять)", ["Я иду на работу в девять","Я иду домой в девять","Он идёт на работу в девять","Я иду на работу девять"], 0, "\"Я иду на работу в девять.\" — идти на работу + в + hora."],
    ]
  },
];
