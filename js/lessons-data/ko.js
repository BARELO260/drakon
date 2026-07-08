/* ═══════════════════════════════════════════════════════════
   js/lessons-data/ko.js — Banco de lecciones: COREANO (KO)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.KO = [
  {
    id:"ko_a1_greetings", level:"A1", title:"인사와 소개 (Saludos)", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en coreano.",
    ex:[
      ["mcq", "¿Cómo se dice \"Hello\" de forma formal/estándar en coreano?", ["안녕하세요 (Annyeonghaseyo)","안녕히 주무세요","안녕히 가세요","감사합니다"], 0, "\"안녕하세요\" (annyeonghaseyo) es el saludo estándar cortés, se usa a cualquier hora del día."],
      ["mcq", "Alguien te dice \"어떻게 지내세요?\" (¿cómo estás?). ¿Cuál es una respuesta común?", ["잘 지내요, 감사합니다 (Jal jinaeyo, gamsahamnida)","제 이름은 민수예요","저는 스무 살이에요","안녕히 가세요"], 0, "\"잘 지내요, 감사합니다\" = \"Estoy bien, gracias\". Es la respuesta estándar."],
      ["fill", "Completa: \"안녕하세요! 저는 민수___.\" (Hola, soy Minsu)", ["예요","이에요","해요","있어요"], 0, "Nombres terminados en vocal usan \"예요\": \"저는 민수예요\" = \"Yo soy Minsu\". (Si el nombre termina en consonante se usa \"이에요\")."],
      ["translate", "Traduce al coreano: \"Nice to meet you!\"", ["만나서 반갑습니다 (Mannaseo bangapseumnida)","이름이 뭐예요?","어디에서 왔어요?","내일 봐요"], 0, "\"만나서 반갑습니다\" es la expresión estándar y cortés al conocer a alguien nuevo."],
      ["mcq", "¿Qué significa \"이름이 뭐예요?\" (Ireumi mwoyeyo?)", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"이름이 뭐예요?\" = What's your name? Respuesta: \"제 이름은 ___예요\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["mcq", "¿Cómo te despides si TÚ te vas (a alguien que se queda)?", ["안녕히 계세요 (Annyeonghi gyeseyo)","안녕히 가세요 (Annyeonghi gaseyo)","반갑습니다","고맙습니다"], 0, "\"안녕히 계세요\" se dice cuando TÚ te vas y la otra persona se queda. \"안녕히 가세요\" es al revés: la otra persona se va."],
    ]
  },
  {
    id:"ko_a1_numbers_colors", level:"A1", title:"숫자와 색깔 (Números y colores)", emoji:"🔢", xp:30,
    description:"Aprende los números sino-coreanos del 1 al 10 y colores básicos.",
    ex:[
      ["mcq", "¿Cómo se dice el número 5 (sistema sino-coreano) en coreano?", ["오 (o)","사 (sa)","육 (yuk)","십 (sip)"], 0, "5 = 오 (o). 4 = 사 (sa), 6 = 육 (yuk), 10 = 십 (sip). El coreano tiene dos sistemas numéricos; este es el de origen chino, usado para fechas y números en general."],
      ["mcq", "¿Qué color es \"빨간색 (ppalgansaek)\"?", ["Red","Blue","Green","Yellow"], 0, "빨간색 (ppalgansaek) = red. Otros colores: 파란색 (paransaek, blue), 초록색 (choroksaek, green), 노란색 (noransaek, yellow), 하얀색 (hayansaek, white), 검은색 (geomeunsaek, black).", "🍎 Piensa en una manzana madura."],
      ["mcq", "¿Cómo se dice el número 10 en coreano (sino-coreano)?", ["십 (sip)","구 (gu)","백 (baek)","십일 (sibil)"], 0, "10 = 십 (sip). 9 = 구 (gu), 100 = 백 (baek)."],
      ["mcq", "¿Cómo se dice \"black\" en coreano?", ["검은색 (geomeunsaek)","하얀색 (hayansaek)","회색 (hoesaek)","갈색 (galsaek)"], 0, "검은색 (geomeunsaek) = black. 하얀색 (hayansaek) = white, 회색 (hoesaek) = gray, 갈색 (galsaek) = brown."],
      ["mcq", "¿Cómo se dice el número 3 en coreano (sino-coreano)?", ["삼 (sam)","이 (i)","사 (sa)","육 (yuk)"], 0, "3 = 삼 (sam). 2 = 이 (i), 4 = 사 (sa)."],
      ["translate", "Traduce: \"The sky is blue.\" (하늘이 파란색이에요)", ["하늘이 파란색이에요 (Haneuri paransaegieyo)","하늘이 초록색이에요","집이 파란색이에요","바다가 파란색이에요"], 0, "\"하늘이 파란색이에요\" — 하늘 (haneul) = sky, 파란색 (paransaek) = blue."],
    ]
  },
  {
    id:"ko_a1_particles", level:"A1", title:"기본 조사: 은/는, 이에요 (Partículas básicas)", emoji:"🧩", xp:35,
    description:"Las partículas de tema 은/는 y la cópula 이에요/예요, pilares de la gramática coreana.",
    ex:[
      ["mcq", "\"저___ 학생이에요.\" (I am a student) — el sujeto \"저\" termina en vocal, ¿qué partícula va?", ["는 (neun)","은 (eun)","이 (i)","가 (ga)"], 0, "\"저는 학생이에요\" (Jeoneun haksaengieyo) = \"Yo soy estudiante\". Después de vocal se usa 는 (neun); después de consonante se usa 은 (eun)."],
      ["mcq", "¿Qué función tiene la partícula 은/는 en coreano?", ["Marca el tema de la oración","Es un verbo","Es un número","Es una pregunta"], 0, "은/는 marca el TEMA de la oración (de qué se está hablando), similar a la partícula は del japonés."],
      ["fill", "Completa: \"이것___ 책이에요.\" (This is a book, 이것 termina en consonante)", ["은","는","이","가"], 0, "\"이것은 책이에요\" (Igeoseun chaegieyo) = \"Esto es un libro\". 이것 termina en consonante (ㅅ), por eso se usa 은."],
      ["translate", "Traduce: \"He is Korean.\" (그는 한국 사람이에요)", ["그는 한국 사람이에요 (Geuneun hanguk saramieyo)","그는 한국이에요","그녀는 한국 사람이에요","저는 한국 사람이에요"], 0, "\"그는 한국 사람이에요\" — 그 (geu) = él, 한국 사람 (hanguk saram) = coreano (nacionalidad)."],
      ["mcq", "¿Cuál es el orden básico de la oración coreana?", ["Sujeto + Objeto + Verbo (SOV)","Sujeto + Verbo + Objeto (SVO)","Verbo + Sujeto + Objeto","Objeto + Verbo + Sujeto"], 0, "El coreano sigue el orden SOV, igual que el japonés: el verbo (o 이에요) siempre va al final de la oración."],
      ["mcq", "¿Qué significa aproximadamente \"이에요/예요\" al final de una oración?", ["Es la forma cortés de \"ser/estar\"","Es un pronombre","Es una negación","Es un número"], 0, "\"이에요/예요\" equivale aproximadamente a \"ser/estar\" en un registro cortés, y se usa constantemente en coreano conversacional."],
    ]
  },
];
