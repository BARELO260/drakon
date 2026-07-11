/* ═══════════════════════════════════════════════════════════
   js/lessons-data/jp.js — Banco de lecciones: JAPONÉS (código de idioma: JP)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.JP = [
  {
    id:"jp_a1_greetings", level:"A1", title:"あいさつ (Saludos)", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en japonés.",
    study: {
      vocab: [
        ["おはようございます (ohayou gozaimasu)", "Good morning"],
        ["こんにちは (konnichiwa)", "Hello (durante el día)"],
        ["さようなら (sayounara)", "Goodbye (formal)"],
        ["よろしくお願いします", "Nice to meet you (please treat me well)"],
        ["お元気ですか？", "How are you?", "Respuesta: \"元気です、ありがとう\""]
      ],
      grammar: [
        ["です (desu) — la cópula cortés", "Equivale aproximadamente a \"ser/estar\" en un registro cortés, y va al final de la oración.", "田中です。(Soy Tanaka.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en japonés?", ["おはようございます (Ohayou gozaimasu)","こんばんは (Konbanwa)","おやすみなさい (Oyasumi nasai)","さようなら (Sayounara)"], 0, "\"おはようございます\" (ohayou gozaimasu) se usa por la mañana. \"こんにちは\" (konnichiwa) es el saludo general del día, \"こんばんは\" (konbanwa) es de noche."],
      ["mcq", "Alguien te dice \"お元気ですか？\" (¿Cómo estás?). ¿Cuál es una respuesta común?", ["元気です、ありがとう (Genki desu, arigatou)","私の名前は田中です","二十歳です","またね"], 0, "\"元気です、ありがとう\" (genki desu, arigatou) = \"Estoy bien, gracias\". Es la respuesta estándar."],
      ["fill", "Completa: \"はじめまして。田中___。\" (Encantado, soy Tanaka)", ["です","ます","でした","だ"], 0, "\"田中です\" = \"soy Tanaka\". \"です\" es la partícula/cópula que corresponde aproximadamente a \"ser/estar\" en forma cortés."],
      ["translate", "Traduce al japonés: \"Nice to meet you!\"", ["よろしくお願いします (Yoroshiku onegaishimasu)","お名前は？(Onamae wa?)","どこから来ましたか？","また明日"], 0, "\"よろしくお願いします\" es la expresión estándar al conocer a alguien nuevo (literalmente \"por favor, trátame bien\")."],
      ["mcq", "¿Qué significa \"お名前は何ですか？\" (Onamae wa nan desu ka?)", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"お名前は何ですか？\" = What's your name? Respuesta: \"私の名前は___です\" (Watashi no namae wa ___ desu).", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["mcq", "¿Cómo te despides de forma informal en japonés?", ["じゃあね (Jaa ne)","おはよう (Ohayou)","すみません (Sumimasen)","ください (Kudasai)"], 0, "\"じゃあね\" (jaa ne) es una despedida informal y común entre amigos. \"さようなら\" es más formal/definitiva."],
    ]
  },
  {
    id:"jp_a1_numbers_colors", level:"A1", title:"数字と色 (Números y colores)", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 10 y colores básicos en japonés.",
    study: {
      vocab: [
        ["いち、に、さん... じゅう (ichi, ni, san... juu)", "one, two, three... ten"],
        ["赤 (aka), 青 (ao)", "red, blue"],
        ["緑 (midori), 黄色 (kiiro)", "green, yellow"],
        ["白 (shiro), 黒 (kuro)", "white, black"]
      ],
      grammar: [
        ["La partícula は (wa) marca el tema", "は (se pronuncia \"wa\") indica de qué trata la oración, no es el sujeto gramatical estricto sino el tema.", "空は青いです。(En cuanto al cielo, es azul.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 5 en japonés?", ["ご (go)","し (shi)","ろく (roku)","じゅう (juu)"], 0, "5 = ご (go). 4 = し/よん (shi/yon), 6 = ろく (roku), 10 = じゅう (juu)."],
      ["mcq", "¿Qué color es \"赤 (aka)\"?", ["Red","Blue","Green","Yellow"], 0, "赤 (aka) = red. Otros colores: 青 (ao, blue), 緑 (midori, green), 黄色 (kiiro, yellow), 白 (shiro, white), 黒 (kuro, black).", "🍎 Piensa en una manzana madura."],
      ["mcq", "¿Cómo se dice el número 10 en japonés?", ["じゅう (juu)","きゅう (kyuu)","ひゃく (hyaku)","じゅういち"], 0, "10 = じゅう (juu). 9 = きゅう (kyuu), 100 = ひゃく (hyaku)."],
      ["mcq", "¿Cómo se dice \"black\" en japonés?", ["黒 (kuro)","白 (shiro)","灰色 (haiiro)","茶色 (chairo)"], 0, "黒 (kuro) = black. 白 (shiro) = white, 灰色 (haiiro) = gray, 茶色 (chairo) = brown."],
      ["mcq", "¿Cómo se dice el número 3 en japonés?", ["さん (san)","に (ni)","し (shi)","ろく (roku)"], 0, "3 = さん (san). 2 = に (ni), 4 = し/よん (shi/yon)."],
      ["translate", "Traduce: \"The sky is blue.\" (空は青いです)", ["空は青いです (Sora wa aoi desu)","空は緑です (Sora wa midori desu)","家は青いです","海は青いです"], 0, "\"空は青いです\" — 空 (sora) = sky, 青い (aoi) = blue. La partícula は marca el tema de la oración."],
    ]
  },
  {
    id:"jp_a1_wa_desu", level:"A1", title:"は・です の基本 (Estructura básica)", emoji:"🧩", xp:35,
    description:"La estructura fundamental del japonés: la partícula は (wa) y la cópula です (desu).",
    study: {
      vocab: [
        ["は (wa)", "partícula de tema"],
        ["です (desu)", "cópula cortés (ser/estar)"],
        ["か (ka)", "partícula de pregunta", "Se añade al final."]
      ],
      grammar: [
        ["Orden SOV (Sujeto-Objeto-Verbo)", "El japonés coloca el verbo (o です) siempre al final de la oración, a diferencia del español/inglés.", "私は学生です。(Yo, [en cuanto a mí], estudiante soy.)"]
      ]
    },
    ex:[
      ["mcq", "\"私___学生です。\" (I am a student) — ¿qué partícula va en el espacio?", ["は (wa)","を (wo)","に (ni)","が (ga)"], 0, "\"私は学生です\" (Watashi wa gakusei desu) = \"Yo soy estudiante\". La partícula は (se pronuncia \"wa\") marca el tema de la oración."],
      ["mcq", "¿Qué función tiene \"です\" (desu) al final de una oración?", ["Es la forma cortés de \"ser/estar\"","Es un pronombre","Es una pregunta","Es un número"], 0, "\"です\" (desu) equivale aproximadamente a \"ser/estar\" en un registro cortés y neutro, y va al final de la oración."],
      ["fill", "Completa: \"これ___本です。\" (This is a book)", ["は","を","に","も"], 0, "\"これは本です\" (Kore wa hon desu) = \"Esto es un libro\". これ (kore) = esto, 本 (hon) = libro."],
      ["translate", "Traduce: \"He is Japanese.\" (彼は日本人です)", ["彼は日本人です (Kare wa nihonjin desu)","彼女は日本人です","彼は日本です","私は日本人です"], 0, "\"彼は日本人です\" — 彼 (kare) = él, 日本人 (nihonjin) = japonés (nacionalidad)."],
      ["mcq", "Para hacer una pregunta cortés en japonés, ¿qué partícula se añade al final?", ["か (ka)","は (wa)","です (desu)","ね (ne)"], 0, "Añadir か (ka) al final de una oración con です la convierte en pregunta: \"学生ですか？\" = \"¿Eres estudiante?\""],
      ["mcq", "¿Cuál es el orden básico de la oración japonesa?", ["Sujeto + Objeto + Verbo (SOV)","Sujeto + Verbo + Objeto (SVO)","Verbo + Sujeto + Objeto","Objeto + Verbo + Sujeto"], 0, "El japonés sigue el orden SOV: el verbo (o です) siempre va al final de la oración, a diferencia del español/inglés (SVO)."],
    ]
  },
  {
    id:"jp_a1_family_home", level:"A1", title:"家族と家 (Familia y casa)", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en japonés.",
    study: {
      vocab: [
        ["父 (chichi), 母 (haha)", "father, mother (de tu propia familia)"],
        ["兄 (ani), 姉 (ane)", "older brother, older sister"],
        ["弟 (otouto), 妹 (imouto)", "younger brother, younger sister"],
        ["寝室 (shinshitsu), 台所 (daidokoro)", "bedroom, kitchen"],
        ["お風呂 (ofuro), 庭 (niwa)", "bath/bathroom, garden"]
      ],
      grammar: [
        ["Vocabulario de familia: propio vs. ajeno", "El japonés usa palabras distintas para hablar de tu propia familia (父, humilde) y la familia de otra persona (お父さん, respetuosa).", "私の父です。(Es mi padre.) / あなたのお父さんですか？(¿Es su padre?)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" (de tu propia familia) en japonés?", ["母 (haha)","父 (chichi)","姉 (ane)","祖母 (sobo)"], 0, "母 (haha) = mother (humilde, de tu propia familia). 父 (chichi) = father, 姉 (ane) = older sister, 祖母 (sobo) = grandmother."],
      ["mcq", "¿Qué habitación es \"台所 (daidokoro)\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "台所 (daidokoro) = kitchen. 寝室 (shinshitsu) = bedroom, お風呂 (ofuro) = bath, 庭 (niwa) = garden."],
      ["mcq", "¿Cómo se dice \"older brother\" en japonés?", ["兄 (ani)", "弟 (otouto)", "姉 (ane)", "妹 (imouto)"], 0, "兄 (ani) = older brother (propio). 弟 (otouto) = younger brother, 姉 (ane) = older sister, 妹 (imouto) = younger sister."],
      ["mcq", "¿Cómo se dice \"grandparents\" en japonés?", ["祖父母 (sofubo)","両親 (ryoushin)","おじさん","いとこ"], 0, "祖父母 (sofubo) = grandparents. 両親 (ryoushin) = parents, おじさん = uncle, いとこ = cousin."],
      ["translate", "Traduce: \"This is my father.\" (これは私の父です)", ["これは私の父です (Kore wa watashi no chichi desu)","これは私の母です","それは私の父です","これは私の兄です"], 0, "\"これは私の父です\" — の (no) indica posesión: 私の父 = mi padre."],
      ["mcq", "¿Qué partícula indica posesión en japonés (\"mi padre\")?", ["の (no)","は (wa)","を (wo)","が (ga)"], 0, "の (no) se usa para indicar posesión, como \"'s\" en inglés o \"de\" en español: 私の父 = my father."],
    ]
  },
  {
    id:"jp_a1_food_restaurant", level:"A1", title:"食べ物とレストラン (Comida y restaurantes)", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en japonés.",
    study: {
      vocab: [
        ["メニュー (menyuu)", "the menu"],
        ["___をください (___ o kudasai)", "___, please (al pedir algo)", "Se coloca después del sustantivo."],
        ["お会計をお願いします", "the bill, please"],
        ["水 (mizu), パン (pan)", "water, bread"],
        ["おいしい (oishii)", "delicious"]
      ],
      grammar: [
        ["\"〜をください\" para pedir algo", "Se añade を (partícula de objeto) + ください (por favor, deme) después de lo que quieres pedir.", "コーヒーをください。(Café, por favor. / Deme un café.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en japonés?", ["メニュー (menyuu)","お会計 (okaikei)","お皿 (osara)","テーブル (teeburu)"], 0, "メニュー (menyuu) = the menu (del inglés \"menu\"). お会計 = the bill, お皿 = the plate, テーブル = the table."],
      ["fill", "Completa: \"コーヒー___ください。\" (Coffee, please)", ["を (wo)","は (wa)","が (ga)","に (ni)"], 0, "\"コーヒーをください\" — を marca el objeto directo antes de \"ください\" (por favor)."],
      ["mcq", "¿Qué significa \"お会計をお願いします\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"お会計をお願いします\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This is delicious.\" (これはおいしいです)", ["これはおいしいです (Kore wa oishii desu)","これはまずいです","それはおいしいです","おいしいこれです"], 0, "\"これはおいしいです\" — これ (kore) = esto, おいしい (oishii) = delicious."],
      ["mcq", "¿Cómo se dice \"water\" en japonés?", ["水 (mizu)","パン (pan)","お茶 (ocha)","コーヒー (koohii)"], 0, "水 (mizu) = water. パン (pan) = bread, お茶 (ocha) = tea, コーヒー (koohii) = coffee."],
      ["mcq", "¿Qué significa \"おいしい\" (oishii)?", ["Delicious","Expensive","Cold","Big"], 0, "おいしい (oishii) = delicious/tasty. Es uno de los adjetivos más usados al comer en Japón."],
    ]
  },
  {
    id:"jp_a1_daily_routine", level:"A1", title:"一日の流れ (Rutina diaria)", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en japonés.",
    study: {
      vocab: [
        ["起きます (okimasu)", "to wake up / get up", "En japonés, un solo verbo cubre ambas ideas."],
        ["朝ごはんを食べます", "to have breakfast", "Literalmente: comer el desayuno."],
        ["仕事に行きます", "to go to work"],
        ["寝ます (nemasu)", "to sleep / go to bed"],
        ["毎日 (mainichi)", "every day"]
      ],
      grammar: [
        ["Verbos en forma ます (masu) — presente cortés", "La forma ます es la conjugación cortés de presente/futuro, usada en la mayoría de conversaciones cotidianas.", "７時に起きます。(Me levanto a las 7.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["7時に起きます (Shichi-ji ni okimasu)","7時に寝ます","7時に食べます","起きます7時に"], 0, "\"7時に起きます\" — 〜時に (a las... en punto) + 起きます (me levanto)."],
      ["mcq", "¿Qué significa \"朝ごはんを食べます\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "朝ごはんを食べます = to have breakfast (literalmente: comer el desayuno)."],
      ["mcq", "¿Cómo se dice \"to go to work\" en japonés?", ["仕事に行きます (Shigoto ni ikimasu)","家に帰ります","学校に行きます","店に行きます"], 0, "仕事に行きます = to go to work. 家に帰ります = to go home, 学校に行きます = to go to school."],
      ["mcq", "¿Cómo se dice \"every day\" en japonés?", ["毎日 (mainichi)","一日 (ichinichi)","今日 (kyou)","明日 (ashita)"], 0, "毎日 (mainichi) = every day. 一日 = one day, 今日 = today, 明日 = tomorrow."],
      ["mcq", "¿Qué terminación tienen los verbos en la forma cortés de presente?", ["ます (masu)","です (desu)","たい (tai)","ない (nai)"], 0, "Los verbos en forma cortés de presente/futuro terminan en ます (masu): 起きます, 食べます, 行きます."],
      ["translate", "Traduce: \"I sleep at ten.\" (10時に寝ます)", ["10時に寝ます (Juu-ji ni nemasu)","10時に起きます","10時に食べます","寝ます10時に"], 0, "\"10時に寝ます\" — 〜時に + 寝ます (duermo/me acuesto)."],
    ]
  },
];
