/* ═══════════════════════════════════════════════════════════
   js/lessons-data/zh.js — Banco de lecciones: CHINO MANDARÍN (ZH)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.ZH = [
  {
    id:"zh_a1_greetings", level:"A1", title:"问候语 (Saludos)", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en chino mandarín.",
    study: {
      vocab: [
        ["你好 (nǐ hǎo)", "Hello", "Sirve a cualquier hora."],
        ["再见 (zàijiàn)", "Goodbye"],
        ["很高兴认识你", "Nice to meet you"],
        ["我叫... (wǒ jiào...)", "My name is..."],
        ["你好吗？ (nǐ hǎo ma?)", "How are you?", "Respuesta: \"我很好，谢谢\""]
      ],
      grammar: [
        ["Los verbos chinos no se conjugan", "A diferencia del español/inglés, un verbo como 是 (shì, \"ser\") es igual sin importar la persona (yo/tú/él...).", "我是学生。/ 你是学生。/ 他是学生。(misma forma del verbo)"]
      ]
    },
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
    study: {
      vocab: [
        ["一、二、三...十 (yī, èr, sān...shí)", "one, two, three... ten"],
        ["红色 (hóngsè), 蓝色 (lánsè)", "red, blue"],
        ["绿色 (lǜsè), 黄色 (huángsè)", "green, yellow"],
        ["白色 (báisè), 黑色 (hēisè)", "white, black"]
      ],
      grammar: [
        ["色 (sè) al final de los nombres de color", "Muchos nombres de color en chino terminan en 色 (sè, \"color\"): 红色 = \"color rojo\".", "红色的苹果 (una manzana de color rojo)."]
      ]
    },
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
    study: {
      vocab: [
        ["是 (shì)", "to be / ser"],
        ["不是 (bù shì)", "not to be / no ser"],
        ["这 / 那 (zhè / nà)", "this / that"]
      ],
      grammar: [
        ["Orden SVO igual que el español", "El chino sigue el orden Sujeto+Verbo+Objeto, igual que el español/inglés, lo que facilita mucho la estructura básica.", "我是学生。(Sujeto: 我, Verbo: 是, Objeto: 学生)"]
      ]
    },
    ex:[
      ["mcq", "\"我___学生。\" (I am a student) — ¿qué verbo va en el espacio?", ["是 (shì)","有 (yǒu)","在 (zài)","去 (qù)"], 0, "\"我是学生\" (Wǒ shì xuésheng) = \"Yo soy estudiante\". 是 (shì) es el verbo \"ser\" en chino."],
      ["mcq", "¿Qué característica especial tienen los verbos chinos como 是?", ["No cambian según la persona (yo/tú/él...)","Cambian de género","Cambian según el tiempo verbal como en inglés","Siempre van al final de la oración"], 0, "A diferencia del español/inglés, los verbos chinos no se conjugan: 是 (shì) es igual para \"yo soy\", \"tú eres\", \"él es\", etc."],
      ["fill", "Completa: \"这___一本书。\" (This is a book)", ["是","有","叫","在"], 0, "\"这是一本书\" (Zhè shì yī běn shū) = \"Esto es un libro\". 这 (zhè) = esto."],
      ["translate", "Traduce: \"He is Chinese.\" (他是中国人)", ["他是中国人 (Tā shì Zhōngguó rén)","他是中国","她是中国人","我是中国人"], 0, "\"他是中国人\" — 他 (tā) = él, 中国人 (Zhōngguó rén) = chino (nacionalidad)."],
      ["mcq", "Para negar 是 (decir \"no soy/no es\"), ¿qué palabra se usa antes?", ["不 (bù)","没 (méi)","很 (hěn)","也 (yě)"], 0, "\"不是\" (bù shì) = \"no ser\": \"我不是学生\" = \"Yo no soy estudiante\". 不 se usa para negar la mayoría de los verbos."],
      ["mcq", "¿Cuál es el orden básico de la oración china?", ["Sujeto + Verbo + Objeto (SVO)","Sujeto + Objeto + Verbo (SOV)","Verbo + Sujeto + Objeto","Objeto + Sujeto + Verbo"], 0, "El chino sigue el orden SVO, igual que el español y el inglés: Sujeto (我) + Verbo (是) + Objeto (学生)."],
    ]
  },
  {
    id:"zh_a1_family_home", level:"A1", title:"家庭和家 (Familia y casa)", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en chino.",
    study: {
      vocab: [
        ["爸爸 (bàba), 妈妈 (māma)", "father, mother (coloquial)"],
        ["哥哥 (gēge), 姐姐 (jiějie)", "older brother, older sister"],
        ["弟弟 (dìdi), 妹妹 (mèimei)", "younger brother, younger sister"],
        ["卧室 (wòshì), 厨房 (chúfáng)", "bedroom, kitchen"],
        ["浴室 (yùshì), 花园 (huāyuán)", "bathroom, garden"]
      ],
      grammar: [
        ["El chino distingue hermano mayor/menor", "A diferencia del español, el chino usa palabras distintas según si el hermano/a es mayor o menor que tú — no existe una palabra genérica para \"hermano\".", "哥哥 (hermano mayor) vs. 弟弟 (hermano menor)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" (coloquial) en chino?", ["妈妈 (māma)","爸爸 (bàba)","姐姐 (jiějie)","奶奶 (nǎinai)"], 0, "妈妈 (māma) = mother. 爸爸 (bàba) = father, 姐姐 (jiějie) = older sister, 奶奶 (nǎinai) = grandmother."],
      ["mcq", "¿Qué habitación es \"厨房 (chúfáng)\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "厨房 (chúfáng) = kitchen. 卧室 (wòshì) = bedroom, 浴室 (yùshì) = bathroom, 花园 (huāyuán) = garden."],
      ["mcq", "¿Cómo se dice \"older brother\" en chino?", ["哥哥 (gēge)","弟弟 (dìdi)","姐姐 (jiějie)","妹妹 (mèimei)"], 0, "哥哥 (gēge) = older brother. 弟弟 (dìdi) = younger brother, 姐姐 = older sister, 妹妹 = younger sister."],
      ["mcq", "¿Cómo se dice \"grandparents\" (paternos) en chino?", ["爷爷奶奶 (yéye nǎinai)","爸爸妈妈","叔叔阿姨","表哥表姐"], 0, "爷爷奶奶 (yéye nǎinai) = paternal grandfather and grandmother. 爸爸妈妈 = parents, 叔叔阿姨 = uncle and aunt."],
      ["translate", "Traduce: \"This is my father.\" (这是我爸爸)", ["这是我爸爸 (Zhè shì wǒ bàba)","这是我妈妈","那是我爸爸","这是我哥哥"], 0, "\"这是我爸爸\" — 我 (wǒ, mi/yo) + 爸爸 (bàba, papá), sin partícula posesiva adicional en lenguaje coloquial."],
      ["mcq", "¿Qué partícula se usa formalmente para posesión (\"mi padre\" → 我的爸爸)?", ["的 (de)","是 (shì)","了 (le)","吗 (ma)"], 0, "的 (de) indica posesión, como \"'s\" en inglés: 我的爸爸 = my father (aunque en coloquial a veces se omite con familiares cercanos)."],
    ]
  },
  {
    id:"zh_a1_food_restaurant", level:"A1", title:"食物和餐厅 (Comida y restaurantes)", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en chino.",
    study: {
      vocab: [
        ["菜单 (càidān)", "the menu"],
        ["我要... (wǒ yào...)", "I want.../I'll have...", "Forma común y directa de pedir."],
        ["买单 (mǎidān)", "the bill, please", "Literalmente: pagar la cuenta."],
        ["水 (shuǐ), 面包 (miànbāo)", "water, bread"],
        ["好吃 (hǎochī)", "delicious"]
      ],
      grammar: [
        ["\"我要\" para pedir en un restaurante", "我要 (wǒ yào, literalmente \"yo quiero\") es la forma más común y directa de pedir algo en un restaurante chino, no suena brusca como en español.", "我要一杯咖啡。(Quiero/Voy a pedir un café.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en chino?", ["菜单 (càidān)","买单 (mǎidān)","盘子 (pánzi)","桌子 (zhuōzi)"], 0, "菜单 (càidān) = the menu. 买单 (mǎidān) = the bill, 盘子 (pánzi) = the plate, 桌子 (zhuōzi) = the table."],
      ["fill", "Completa: \"我___一杯咖啡。\" (I want a coffee)", ["要 (yào)","是 (shì)","有 (yǒu)","在 (zài)"], 0, "\"我要一杯咖啡\" — 要 (yào) = querer/pedir algo."],
      ["mcq", "¿Qué significa \"买单\" (mǎidān)?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"买单\" (mǎidān) = the bill / pagar la cuenta. Se dice al terminar de comer."],
      ["translate", "Traduce: \"This is delicious.\" (这个很好吃)", ["这个很好吃 (Zhège hěn hǎochī)","这个很难吃","那个很好吃","好吃这个很"], 0, "\"这个很好吃\" — 这个 (zhège, esto) + 很 (hěn, muy) + 好吃 (hǎochī, delicioso)."],
      ["mcq", "¿Cómo se dice \"water\" en chino?", ["水 (shuǐ)","面包 (miànbāo)","茶 (chá)","咖啡 (kāfēi)"], 0, "水 (shuǐ) = water. 面包 (miànbāo) = bread, 茶 (chá) = tea, 咖啡 (kāfēi) = coffee."],
      ["mcq", "¿Qué significa \"好吃\" (hǎochī)?", ["Delicious","Expensive","Cold","Big"], 0, "好吃 (hǎochī) = delicious/tasty (literalmente \"bueno de comer\")."],
    ]
  },
  {
    id:"zh_a1_daily_routine", level:"A1", title:"日常生活 (Rutina diaria)", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en chino.",
    study: {
      vocab: [
        ["起床 (qǐchuáng)", "to wake up / get out of bed"],
        ["吃早饭 (chī zǎofàn)", "to have breakfast"],
        ["上班 (shàngbān)", "to go to work"],
        ["睡觉 (shuìjiào)", "to sleep / go to bed"],
        ["每天 (měitiān)", "every day"]
      ],
      grammar: [
        ["Los verbos chinos no cambian de forma", "起床, 吃, 上班 y 睡觉 se usan exactamente igual sin importar el sujeto (yo/tú/él) — solo cambia el pronombre delante.", "我起床。/ 你起床。/ 他起床。(mismo verbo siempre)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["我七点起床 (Wǒ qī diǎn qǐchuáng)","我七点睡觉","我七点吃饭","起床我七点"], 0, "\"我七点起床\" — 我 (yo) + 七点 (a las 7) + 起床 (levantarse). En chino la hora va ANTES del verbo."],
      ["mcq", "¿Qué significa \"吃早饭\" (chī zǎofàn)?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "吃早饭 = to have breakfast (literalmente: comer comida-de-la-mañana). 吃午饭 = lunch, 吃晚饭 = dinner."],
      ["mcq", "¿Cómo se dice \"to go to work\" en chino?", ["上班 (shàngbān)","回家 (huíjiā)","上学 (shàngxué)","去商店"], 0, "上班 (shàngbān) = to go to work. 回家 (huíjiā) = to go home, 上学 (shàngxué) = to go to school."],
      ["mcq", "¿Cómo se dice \"every day\" en chino?", ["每天 (měitiān)","一天 (yītiān)","今天 (jīntiān)","昨天 (zuótiān)"], 0, "每天 (měitiān) = every day. 一天 = one day, 今天 = today, 昨天 = yesterday."],
      ["mcq", "¿Dónde va la hora en una oración china (\"me levanto a las 7\")?", ["Antes del verbo","Después del verbo","Al final de la oración, siempre","Al principio, con 是"], 0, "En chino, las expresiones de tiempo van generalmente ANTES del verbo, a diferencia del español/inglés."],
      ["translate", "Traduce: \"I sleep at ten.\" (我十点睡觉)", ["我十点睡觉 (Wǒ shí diǎn shuìjiào)","我十点起床","他十点睡觉","睡觉我十点"], 0, "\"我十点睡觉\" — 我 + 十点 (a las 10) + 睡觉 (dormir/acostarse)."],
    ]
  },
];
