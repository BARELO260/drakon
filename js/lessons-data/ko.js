/* ═══════════════════════════════════════════════════════════
   js/lessons-data/ko.js — Banco de lecciones: COREANO (KO)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.KO = [
  {
    id:"ko_a1_greetings", level:"A1", title:"인사와 소개 (Saludos)", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en coreano.",
    study: {
      vocab: [
        ["안녕하세요 (annyeonghaseyo)", "Hello (formal/estándar)"],
        ["안녕히 가세요 / 계세요", "Goodbye (si se va / si se queda)"],
        ["만나서 반갑습니다", "Nice to meet you"],
        ["제 이름은... (je ireumeun...)", "My name is..."],
        ["어떻게 지내세요?", "How are you?", "Respuesta: \"잘 지내요, 감사합니다\""]
      ],
      grammar: [
        ["이에요/예요 — cópula cortés", "Equivale a \"ser/estar\" en un registro cortés. Se usa 예요 tras vocal y 이에요 tras consonante.", "저는 민수예요. (Yo soy Minsu.)"]
      ]
    },
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
    study: {
      vocab: [
        ["일, 이, 삼... 십 (il, i, sam... sip)", "one, two, three... ten", "Sistema sino-coreano."],
        ["빨간색 (ppalgansaek), 파란색 (paransaek)", "red, blue"],
        ["초록색 (choroksaek), 노란색 (noransaek)", "green, yellow"],
        ["하얀색 (hayansaek), 검은색 (geomeunsaek)", "white, black"]
      ],
      grammar: [
        ["색 al final de los nombres de color", "Muchos colores en coreano terminan en 색 (saek, \"color\"): 빨간색 = \"color rojo\".", "빨간색 사과 (una manzana de color rojo)."]
      ]
    },
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
    study: {
      vocab: [
        ["은/는 (eun/neun)", "partícula de tema", "은 tras consonante, 는 tras vocal."],
        ["이에요/예요", "cópula cortés (ser/estar)"],
        ["이것 (igeot)", "this (esto)"]
      ],
      grammar: [
        ["Orden SOV, igual que el japonés", "El coreano coloca el verbo (o 이에요) siempre al final de la oración.", "저는 학생이에요. (Yo, [en cuanto a mí], estudiante soy.)"]
      ]
    },
    ex:[
      ["mcq", "\"저___ 학생이에요.\" (I am a student) — el sujeto \"저\" termina en vocal, ¿qué partícula va?", ["는 (neun)","은 (eun)","이 (i)","가 (ga)"], 0, "\"저는 학생이에요\" (Jeoneun haksaengieyo) = \"Yo soy estudiante\". Después de vocal se usa 는 (neun); después de consonante se usa 은 (eun)."],
      ["mcq", "¿Qué función tiene la partícula 은/는 en coreano?", ["Marca el tema de la oración","Es un verbo","Es un número","Es una pregunta"], 0, "은/는 marca el TEMA de la oración (de qué se está hablando), similar a la partícula は del japonés."],
      ["fill", "Completa: \"이것___ 책이에요.\" (This is a book, 이것 termina en consonante)", ["은","는","이","가"], 0, "\"이것은 책이에요\" (Igeoseun chaegieyo) = \"Esto es un libro\". 이것 termina en consonante (ㅅ), por eso se usa 은."],
      ["translate", "Traduce: \"He is Korean.\" (그는 한국 사람이에요)", ["그는 한국 사람이에요 (Geuneun hanguk saramieyo)","그는 한국이에요","그녀는 한국 사람이에요","저는 한국 사람이에요"], 0, "\"그는 한국 사람이에요\" — 그 (geu) = él, 한국 사람 (hanguk saram) = coreano (nacionalidad)."],
      ["mcq", "¿Cuál es el orden básico de la oración coreana?", ["Sujeto + Objeto + Verbo (SOV)","Sujeto + Verbo + Objeto (SVO)","Verbo + Sujeto + Objeto","Objeto + Verbo + Sujeto"], 0, "El coreano sigue el orden SOV, igual que el japonés: el verbo (o 이에요) siempre va al final de la oración."],
      ["mcq", "¿Qué significa aproximadamente \"이에요/예요\" al final de una oración?", ["Es la forma cortés de \"ser/estar\"","Es un pronombre","Es una negación","Es un número"], 0, "\"이에요/예요\" equivale aproximadamente a \"ser/estar\" en un registro cortés, y se usa constantemente en coreano conversacional."],
    ]
  },
  {
    id:"ko_a1_family_home", level:"A1", title:"가족과 집 (Familia y casa)", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en coreano.",
    study: {
      vocab: [
        ["아버지 / 아빠 (abeoji / appa)", "father (formal / papá)"],
        ["어머니 / 엄마 (eomeoni / eomma)", "mother (formal / mamá)"],
        ["형/오빠, 누나/언니", "older brother (dicho por hombre/mujer), older sister (dicho por hombre/mujer)", "El coreano distingue según el género de quien habla."],
        ["침실 (chimsil), 부엌 (bueok)", "bedroom, kitchen"],
        ["화장실 (hwajangsil), 정원 (jeongwon)", "bathroom, garden"]
      ],
      grammar: [
        ["Palabras de familia según el género del hablante", "Para \"hermano mayor\", un hombre dice 형 (hyeong) y una mujer dice 오빠 (oppa). Para \"hermana mayor\", un hombre dice 누나 (nuna) y una mujer dice 언니 (unni).", "(hombre hablando) 형이 있어요. / (mujer hablando) 오빠가 있어요. — ambos significan \"tengo un hermano mayor\"."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" (formal) en coreano?", ["어머니 (eomeoni)","아버지 (abeoji)","언니 (unni)","할머니 (halmeoni)"], 0, "어머니 (eomeoni) = mother (formal). 아버지 (abeoji) = father, 언니 (unni) = older sister (dicho por mujer), 할머니 (halmeoni) = grandmother."],
      ["mcq", "¿Qué habitación es \"부엌 (bueok)\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "부엌 (bueok) = kitchen. 침실 (chimsil) = bedroom, 화장실 (hwajangsil) = bathroom, 정원 (jeongwon) = garden."],
      ["mcq", "Si eres HOMBRE, ¿cómo dices \"hermano mayor\"?", ["형 (hyeong)","오빠 (oppa)","누나 (nuna)","언니 (unni)"], 0, "Un hombre usa 형 (hyeong) para \"hermano mayor\". Una mujer usaría 오빠 (oppa) para lo mismo."],
      ["mcq", "¿Cómo se dice \"grandparents\" en coreano?", ["조부모님 (jobumonim)","부모님 (bumonim)","삼촌과 이모","사촌"], 0, "조부모님 (jobumonim) = grandparents. 부모님 (bumonim) = parents, 삼촌과 이모 = uncle and aunt, 사촌 = cousin."],
      ["translate", "Traduce: \"This is my father.\" (이분은 제 아버지예요)", ["이분은 제 아버지예요 (Ibuneun je abeojieyo)","이분은 제 어머니예요","그분은 제 아버지예요","이분은 제 형이에요"], 0, "\"이분은 제 아버지예요\" — 이분 (esta persona, respetuoso) + 제 (mi, forma humilde) + 아버지 (padre)."],
      ["mcq", "¿Qué palabra coreana significa \"mi\" en forma humilde/cortés?", ["제 (je)","나의 (naui)","저의 (jeoui)","내 (nae)"], 0, "제 (je) es la forma humilde/cortés de \"mi\", usada en contextos formales o de respeto, como al hablar de tu familia con otras personas."],
    ]
  },
  {
    id:"ko_a1_food_restaurant", level:"A1", title:"음식과 식당 (Comida y restaurantes)", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en coreano.",
    study: {
      vocab: [
        ["메뉴 (menyu)", "the menu"],
        ["___ 주세요 (___ juseyo)", "___, please (al pedir algo)", "Se coloca después del sustantivo."],
        ["계산서 주세요", "the bill, please"],
        ["물 (mul), 빵 (ppang)", "water, bread"],
        ["맛있어요 (masisseoyo)", "delicious / it's tasty"]
      ],
      grammar: [
        ["\"~ 주세요\" para pedir algo cortésmente", "Se añade 주세요 (por favor, deme) después de lo que quieres pedir. Es la forma más común y cortés en restaurantes.", "커피 주세요. (Café, por favor. / Deme un café.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en coreano?", ["메뉴 (menyu)","계산서 (gyesanseo)","접시 (jeopsi)","테이블 (teibeul)"], 0, "메뉴 (menyu) = the menu (del inglés \"menu\"). 계산서 = the bill, 접시 = the plate, 테이블 = the table."],
      ["fill", "Completa: \"커피 ___.\" (Coffee, please)", ["주세요 (juseyo)","이에요 (ieyo)","있어요 (isseoyo)","예요 (yeyo)"], 0, "\"커피 주세요\" — 주세요 (por favor, deme) se añade después de lo que pides."],
      ["mcq", "¿Qué significa \"계산서 주세요\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"계산서 주세요\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This is delicious.\" (이거 맛있어요)", ["이거 맛있어요 (Igeo masisseoyo)","이거 맛없어요","저거 맛있어요","맛있어요 이거"], 0, "\"이거 맛있어요\" — 이거 (esto, coloquial) + 맛있어요 (delicioso/sabroso)."],
      ["mcq", "¿Cómo se dice \"water\" en coreano?", ["물 (mul)","빵 (ppang)","차 (cha)","커피 (keopi)"], 0, "물 (mul) = water. 빵 (ppang) = bread, 차 (cha) = tea, 커피 (keopi) = coffee."],
      ["mcq", "¿Qué significa \"맛있어요\" (masisseoyo)?", ["Delicious / tasty","Expensive","Cold","Big"], 0, "맛있어요 (masisseoyo) = delicious/tasty. Es una de las expresiones más usadas al comer en Corea."],
    ]
  },
  {
    id:"ko_a1_daily_routine", level:"A1", title:"하루 일과 (Rutina diaria)", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en coreano.",
    study: {
      vocab: [
        ["일어나요 (ireonayo)", "to wake up / get up", "En coreano, un solo verbo cubre ambas ideas."],
        ["아침을 먹어요", "to have breakfast", "Literalmente: comer el desayuno."],
        ["회사에 가요", "to go to work", "Literalmente: ir a la empresa."],
        ["자요 (jayo)", "to sleep / go to bed"],
        ["매일 (maeil)", "every day"]
      ],
      grammar: [
        ["Verbos en forma 요 (yo) — presente cortés", "La terminación 요 (yo) hace que un verbo suene cortés en presente/futuro, usada en la mayoría de conversaciones cotidianas.", "7시에 일어나요. (Me levanto a las 7.)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["7시에 일어나요 (Ilgopsie ireonayo)","7시에 자요","7시에 먹어요","일어나요 7시에"], 0, "\"7시에 일어나요\" — 7시에 (a las 7) + 일어나요 (me levanto)."],
      ["mcq", "¿Qué significa \"아침을 먹어요\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "아침을 먹어요 = to have breakfast (literalmente: comer el desayuno). 점심을 먹어요 = lunch, 저녁을 먹어요 = dinner."],
      ["mcq", "¿Cómo se dice \"to go to work\" en coreano?", ["회사에 가요 (Hoesae gayo)","집에 가요","학교에 가요","가게에 가요"], 0, "회사에 가요 = to go to work (a la empresa). 집에 가요 = to go home, 학교에 가요 = to go to school."],
      ["mcq", "¿Cómo se dice \"every day\" en coreano?", ["매일 (maeil)","하루 (haru)","오늘 (oneul)","어제 (eoje)"], 0, "매일 (maeil) = every day. 하루 = one day/a day, 오늘 = today, 어제 = yesterday."],
      ["mcq", "¿Qué terminación cortés llevan los verbos en presente coloquial?", ["요 (yo)","다 (da)","까 (kka)","니 (ni)"], 0, "La terminación 요 (yo) es la forma cortés estándar de presente/futuro en conversación diaria: 가요, 먹어요, 자요."],
      ["translate", "Traduce: \"I sleep at ten.\" (10시에 자요)", ["10시에 자요 (열si-e jayo)","10시에 일어나요","10시에 먹어요","자요 10시에"], 0, "\"10시에 자요\" — 10시에 (a las 10) + 자요 (duermo/me acuesto)."],
    ]
  },
];
