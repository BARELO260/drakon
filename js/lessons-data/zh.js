/* ═══════════════════════════════════════════════════════════
   js/lessons-data/zh.js — Banco de lecciones: CHINO MANDARÍN (ZH)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.ZH = [
  {
    id:"zh_a1_greetings", level:"A1", title:"问候语 (Saludos)", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en chino mandarín.",
    ex:[
      ["mcq", "¿Cómo se dice \"Hello\" en chino?", ["你好 (Nǐ hǎo)","晚安 (Wǎn'ān)","再见 (Zàijiàn)","谢谢 (Xièxie)"], 0, "\"你好\" (nǐ hǎo) es el saludo universal, se usa a cualquier hora del día."],
      ["mcq", "Alguien te dice \"你好吗？\" (¿cómo estás?). ¿Cuál es una respuesta común?", ["我很好，谢谢 (Wǒ hěn hǎo, xièxie)","我叫王明","我二十岁","再见"], 0, "\"我很好，谢谢\" (Wǒ hěn hǎo, xièxie) = \"Estoy bien, gracias\". Es la respuesta estándar."],
      ["fill", "Completa: \"你好！我___王芳。\" (Hola, me llamo Wang Fang)", ["叫 (jiào)","是 (shì)","有 (yǒu)","去 (qù)"], 0, "\"我叫王芳\" (Wǒ jiào Wáng Fāng) = \"Me llamo Wang Fang\". 叫 (jiào) se usa específicamente para decir tu nombre."],
      ["translate", "Traduce al chino: \"Nice to meet you!\"", ["很高兴认识你 (Hěn gāoxìng rènshi nǐ)","你叫什么名字？","你是哪国人？","明天见"], 0, "\"很高兴认识你\" (Hěn gāoxìng rènshi nǐ) = \"Mucho gusto en conocerte\", la expresión estándar."],
      ["mcq", "¿Qué significa \"你叫什么名字？\" (Nǐ jiào shénme míngzi?)", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"你叫什么名字？\" = What's your name? Respuesta: \"我叫___\" (Wǒ jiào ___).", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["mcq", "¿Cómo te despides de forma común en chino?", ["再见 (Zàijiàn)","你好 (Nǐ hǎo)","谢谢 (Xièxie)","对不起 (Duìbùqǐ)"], 0, "\"再见\" (zàijiàn) es la despedida más común y sirve tanto en contextos formales como informales."],
    ]
  },
  {
    id:"zh_a1_numbers_colors", level:"A1", title:"数字和颜色 (Números y colores)", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 10 y colores básicos en chino.",
    ex:[
      ["mcq", "¿Cómo se dice el número 5 en chino?", ["五 (wǔ)","四 (sì)","六 (liù)","十 (shí)"], 0, "5 = 五 (wǔ). 4 = 四 (sì), 6 = 六 (liù), 10 = 十 (shí)."],
      ["mcq", "¿Qué color es \"红色 (hóngsè)\"?", ["Red","Blue","Green","Yellow"], 0, "红色 (hóngsè) = red. Otros colores: 蓝色 (lánsè, blue), 绿色 (lǜsè, green), 黄色 (huángsè, yellow), 白色 (báisè, white), 黑色 (hēisè, black).", "🍎 Piensa en una manzana madura."],
      ["mcq", "¿Cómo se dice el número 10 en chino?", ["十 (shí)","九 (jiǔ)","百 (bǎi)","十一 (shí yī)"], 0, "10 = 十 (shí). 9 = 九 (jiǔ), 100 = 百 (bǎi)."],
      ["mcq", "¿Cómo se dice \"black\" en chino?", ["黑色 (hēisè)","白色 (báisè)","灰色 (huīsè)","棕色 (zōngsè)"], 0, "黑色 (hēisè) = black. 白色 (báisè) = white, 灰色 (huīsè) = gray, 棕色 (zōngsè) = brown."],
      ["mcq", "¿Cómo se dice el número 3 en chino?", ["三 (sān)","二 (èr)","四 (sì)","六 (liù)"], 0, "3 = 三 (sān). 2 = 二 (èr), 4 = 四 (sì)."],
      ["translate", "Traduce: \"The sky is blue.\" (天空是蓝色的)", ["天空是蓝色的 (Tiānkōng shì lánsè de)","天空是绿色的","房子是蓝色的","海是蓝色的"], 0, "\"天空是蓝色的\" — 天空 (tiānkōng) = sky, 蓝色 (lánsè) = blue, 是...的 es una estructura común para describir cualidades."],
    ]
  },
  {
    id:"zh_a1_shi_basic", level:"A1", title:"“是”的基本用法 (El verbo 是)", emoji:"🧩", xp:35,
    description:"El verbo 是 (shì, \"ser\") y la estructura básica de la oración en chino.",
    ex:[
      ["mcq", "\"我___学生。\" (I am a student) — ¿qué verbo va en el espacio?", ["是 (shì)","有 (yǒu)","在 (zài)","去 (qù)"], 0, "\"我是学生\" (Wǒ shì xuésheng) = \"Yo soy estudiante\". 是 (shì) es el verbo \"ser\" en chino."],
      ["mcq", "¿Qué característica especial tienen los verbos chinos como 是?", ["No cambian según la persona (yo/tú/él...)","Cambian de género","Cambian según el tiempo verbal como en inglés","Siempre van al final de la oración"], 0, "A diferencia del español/inglés, los verbos chinos no se conjugan: 是 (shì) es igual para \"yo soy\", \"tú eres\", \"él es\", etc."],
      ["fill", "Completa: \"这___一本书。\" (This is a book)", ["是","有","叫","在"], 0, "\"这是一本书\" (Zhè shì yī běn shū) = \"Esto es un libro\". 这 (zhè) = esto."],
      ["translate", "Traduce: \"He is Chinese.\" (他是中国人)", ["他是中国人 (Tā shì Zhōngguó rén)","他是中国","她是中国人","我是中国人"], 0, "\"他是中国人\" — 他 (tā) = él, 中国人 (Zhōngguó rén) = chino (nacionalidad)."],
      ["mcq", "Para negar 是 (decir \"no soy/no es\"), ¿qué palabra se usa antes?", ["不 (bù)","没 (méi)","很 (hěn)","也 (yě)"], 0, "\"不是\" (bù shì) = \"no ser\": \"我不是学生\" = \"Yo no soy estudiante\". 不 se usa para negar la mayoría de los verbos."],
      ["mcq", "¿Cuál es el orden básico de la oración china?", ["Sujeto + Verbo + Objeto (SVO)","Sujeto + Objeto + Verbo (SOV)","Verbo + Sujeto + Objeto","Objeto + Sujeto + Verbo"], 0, "El chino sigue el orden SVO, igual que el español y el inglés: Sujeto (我) + Verbo (是) + Objeto (学生)."],
    ]
  },
];
