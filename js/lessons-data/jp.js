/* ═══════════════════════════════════════════════════════════
   js/lessons-data/jp.js — Banco de lecciones: JAPONÉS (código de idioma: JP)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.JP = [
  {
    id:"jp_a1_greetings", level:"A1", title:"あいさつ (Saludos)", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en japonés.",
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
    ex:[
      ["mcq", "\"私___学生です。\" (I am a student) — ¿qué partícula va en el espacio?", ["は (wa)","を (wo)","に (ni)","が (ga)"], 0, "\"私は学生です\" (Watashi wa gakusei desu) = \"Yo soy estudiante\". La partícula は (se pronuncia \"wa\") marca el tema de la oración."],
      ["mcq", "¿Qué función tiene \"です\" (desu) al final de una oración?", ["Es la forma cortés de \"ser/estar\"","Es un pronombre","Es una pregunta","Es un número"], 0, "\"です\" (desu) equivale aproximadamente a \"ser/estar\" en un registro cortés y neutro, y va al final de la oración."],
      ["fill", "Completa: \"これ___本です。\" (This is a book)", ["は","を","に","も"], 0, "\"これは本です\" (Kore wa hon desu) = \"Esto es un libro\". これ (kore) = esto, 本 (hon) = libro."],
      ["translate", "Traduce: \"He is Japanese.\" (彼は日本人です)", ["彼は日本人です (Kare wa nihonjin desu)","彼女は日本人です","彼は日本です","私は日本人です"], 0, "\"彼は日本人です\" — 彼 (kare) = él, 日本人 (nihonjin) = japonés (nacionalidad)."],
      ["mcq", "Para hacer una pregunta cortés en japonés, ¿qué partícula se añade al final?", ["か (ka)","は (wa)","です (desu)","ね (ne)"], 0, "Añadir か (ka) al final de una oración con です la convierte en pregunta: \"学生ですか？\" = \"¿Eres estudiante?\""],
      ["mcq", "¿Cuál es el orden básico de la oración japonesa?", ["Sujeto + Objeto + Verbo (SOV)","Sujeto + Verbo + Objeto (SVO)","Verbo + Sujeto + Objeto","Objeto + Verbo + Sujeto"], 0, "El japonés sigue el orden SOV: el verbo (o です) siempre va al final de la oración, a diferencia del español/inglés (SVO)."],
    ]
  },
];
