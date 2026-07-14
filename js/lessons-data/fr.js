/* ═══════════════════════════════════════════════════════════
   js/lessons-data/fr.js — Banco de lecciones: FRANCÉS (FR)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.FR = [
  {
    id:"fr_a1_greetings", level:"A1", title:"Salutations et présentations", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en francés.",
    study: {
      vocab: [
        ["Bonjour / Bonsoir", "Good morning / Good evening"],
        ["Salut / Au revoir", "Hi / Goodbye", "\"Salut\" es informal."],
        ["Enchanté(e)!", "Nice to meet you!"],
        ["Je m'appelle...", "My name is..."],
        ["Comment ça va?", "How are you?", "Respuesta: \"Ça va bien, merci\""]
      ],
      grammar: [
        ["El verbo \"être\" (ser/estar)", "Je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.", "Je suis professeur. Elle est de Paris."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en francés?", ["Bonjour","Bonsoir","Bonne nuit","Au revoir"], 0, "\"Bonjour\" se usa durante todo el día hasta la tarde-noche. \"Bonsoir\" se usa al caer la tarde/noche.", "☀️ Son las 9 de la mañana y llegas a la oficina."],
      ["mcq", "Alguien te dice \"Comment ça va?\". ¿Cuál es una respuesta común?", ["Ça va bien, merci","Je m'appelle Paul","J'ai vingt ans","À bientôt"], 0, "\"Ça va bien, merci\" es la respuesta estándar. También puedes decir \"Très bien, et toi?\""],
      ["fill", "Completa: \"Bonjour ! Je ___ Marie. Je ___ de Paris.\"", ["m'appelle / viens","suis / appelle","es / viens","suis / suis"], 0, "\"Je m'appelle Marie\" (me llamo) y \"Je viens de Paris\" (vengo de). \"S'appeler\" y \"venir\" son verbos distintos, ambos en primera persona."],
      ["translate", "Traduce al francés: \"Nice to meet you!\"", ["Enchanté(e) !","Comment tu t'appelles ?","D'où viens-tu ?","À demain !"], 0, "\"Enchanté(e) !\" es la expresión estándar al conocer a alguien nuevo."],
      ["mcq", "¿Qué significa \"Comment tu t'appelles ?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"Comment tu t'appelles ?\" = What's your name? Respuesta: \"Je m'appelle ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena: [suis / professeur / je / un]", ["Je suis un professeur","Un suis je professeur","Professeur je suis un","Je un suis professeur"], 0, "En francés el orden es: Sujeto + Verbo + Complemento. → \"Je suis un professeur.\" (Soy profesor.)"],
    ]
  },
  {
    id:"fr_a1_numbers_colors", level:"A1", title:"Nombres et couleurs", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 20 y colores básicos en francés.",
    study: {
      vocab: [
        ["un, deux, trois... vingt", "one, two, three... twenty"],
        ["rouge, bleu, vert, jaune", "red, blue, green, yellow"],
        ["blanc, noir", "white, black"],
        ["J'ai ___ ans", "I am ___ years old", "Se usa el verbo \"avoir\" (tener), no \"être\"."]
      ],
      grammar: [
        ["Concordancia de género en los colores", "Los adjetivos de color concuerdan en género (masculino/femenino) con el sustantivo.", "un chat noir / une voiture noire."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en francés?", ["Quinze","Cinquante","Cinq","Seize"], 0, "15 = quinze. Ojo: 50 = cinquante, 5 = cinq. Los números del 11 al 16 tienen formas propias."],
      ["mcq", "¿Qué color es \"rouge\"?", ["Red","Blue","Green","Yellow"], 0, "Rouge = red. Otros colores: bleu (blue), vert (green), jaune (yellow), blanc (white), noir (black).", "🍎 Piensa en una manzana madura."],
      ["fill", "Completa: \"J'___ vingt ans.\" (I am 20 years old)", ["ai","suis","es","a"], 0, "\"J'ai vingt ans\" = I am twenty years old. En francés la edad se expresa con el verbo \"avoir\" (tener), no \"être\" (ser)."],
      ["translate", "Traduce: \"The sky is blue.\"", ["Le ciel est bleu","Le ciel est vert","La maison est bleue","La mer est bleue"], 0, "\"Le ciel est bleu.\" — ciel = sky, bleu = blue."],
      ["mcq", "¿Cómo se dice \"black\" en francés?", ["Noir","Blanc","Gris","Marron"], 0, "Noir = black. Blanc = white, gris = gray, marron = brown."],
      ["arrange", "Ordena: [chats / ai / deux / j']", ["J'ai deux chats","Deux j'ai chats","Chats j'ai deux","Deux chats j'ai"], 0, "\"J'ai deux chats.\" = I have two cats. Sujeto+verbo (j'ai) + cantidad (deux) + sustantivo (chats)."],
    ]
  },
  {
    id:"fr_a1_etre_avoir", level:"A1", title:"Être et avoir", emoji:"🧩", xp:35,
    description:"Los dos verbos más importantes del francés: ser/estar y tener.",
    study: {
      vocab: [
        ["être", "to be", "Identidad, características."],
        ["avoir", "to have", "También se usa para la edad."],
        ["étudiant, professeur", "student, teacher"]
      ],
      grammar: [
        ["Être vs. Avoir", "\"Être\" (ser/estar) y \"avoir\" (tener) son los dos verbos más comunes. La edad se expresa con \"avoir\", no \"être\".", "Je suis étudiant. / J'ai vingt ans."]
      ]
    },
    ex:[
      ["mcq", "\"Je ___ étudiant.\" (I am a student)", ["suis","ai","es","est"], 0, "\"Être\" (ser/estar) en primera persona es \"suis\": \"Je suis étudiant.\""],
      ["mcq", "\"Elle ___ vingt-cinq ans.\" (She is 25 years old)", ["a","est","ai","es"], 0, "La edad en francés se expresa con \"avoir\": \"Elle a vingt-cinq ans.\" (literalmente: ella tiene 25 años)."],
      ["fill", "Completa: \"Nous ___ français.\" (We are French)", ["sommes","avons","êtes","sont"], 0, "\"Être\" en primera persona plural es \"sommes\": \"Nous sommes français.\""],
      ["translate", "Traduce: \"They have a car.\"", ["Ils ont une voiture","Ils sont une voiture","Ils ont un voiture","Elles est une voiture"], 0, "\"Avoir\" en tercera persona plural es \"ont\": \"Ils ont une voiture.\""],
      ["mcq", "¿Qué verbo se usa para la edad en francés?", ["Avoir (tener)","Être (ser/estar)","Aller (ir)","Faire (hacer)"], 0, "En francés se dice literalmente \"tener X años\" (avoir X ans), a diferencia del español que también usa \"tener\" pero del inglés que usa \"to be\"."],
      ["arrange", "Ordena: [heureux / très / je / suis]", ["Je suis très heureux","Très je suis heureux","Heureux très je suis","Je très suis heureux"], 0, "\"Je suis très heureux.\" = I am very happy. Sujeto+verbo (je suis) + intensificador (très) + adjetivo (heureux)."],
    ]
  },
  {
    id:"fr_a1_family_home", level:"A1", title:"Famille et maison", emoji:"🏠", xp:30,
    description:"Vocabulario de familia y de la casa en francés.",
    study: {
      vocab: [
        ["père, mère", "father, mother"],
        ["frère, sœur", "brother, sister"],
        ["fils, fille", "son, daughter"],
        ["chambre, cuisine, salon", "bedroom, kitchen, living room"],
        ["salle de bain, jardin", "bathroom, garden"]
      ],
      grammar: [
        ["Adjetivos posesivos", "Mon/ma/mes, ton/ta/tes, son/sa/ses concuerdan en género y número con el objeto poseído (no con el poseedor).", "Mon père (masc.) / Ma mère (fem.) / Mes parents (plural)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"mother\" en francés?", ["Mère","Père","Sœur","Grand-mère"], 0, "Mère = mother. Père = father, sœur = sister, grand-mère = grandmother."],
      ["mcq", "¿Qué habitación es \"la cuisine\"?", ["Kitchen","Bedroom","Bathroom","Garden"], 0, "La cuisine = kitchen. La chambre = bedroom, la salle de bain = bathroom, le jardin = garden."],
      ["fill", "Completa: \"___ frère habite à Paris.\" (My brother)", ["Mon","Ma","Mes","Son"], 0, "\"Mon frère\" = my brother. Se usa \"mon\" (no \"ma\") porque \"frère\" es masculino."],
      ["translate", "Traduce: \"My family is big.\"", ["Ma famille est grande","Ma famille est petite","Mes familles sont grandes","Sa famille est grande"], 0, "\"Ma famille est grande.\" — \"famille\" es femenino, por eso \"ma\" (no \"mon\")."],
      ["mcq", "¿Cómo se dice \"grandparents\" en francés?", ["Grands-parents","Parents","Oncle et tante","Cousins"], 0, "Grands-parents = grandparents. Parents = parents, oncle et tante = aunt and uncle, cousins = cousins."],
      ["arrange", "Ordena: [trois / j'ai / frères]", ["J'ai trois frères","Trois j'ai frères","Frères j'ai trois","Trois frères j'ai"], 0, "\"J'ai trois frères.\" = I have three brothers. Sujeto+verbo (j'ai) + cantidad + sustantivo."],
    ]
  },
  {
    id:"fr_a1_food_restaurant", level:"A1", title:"Nourriture et restaurants", emoji:"🍽️", xp:35,
    description:"Pide comida y desenvuélvete en un restaurante en francés.",
    study: {
      vocab: [
        ["le menu", "the menu"],
        ["Je voudrais...", "I would like...", "Forma cortés de pedir."],
        ["l'addition, s'il vous plaît", "the bill, please"],
        ["l'eau, le pain", "water, bread"],
        ["délicieux/délicieuse", "delicious"]
      ],
      grammar: [
        ["\"Je voudrais\" para pedir con cortesía", "\"Je voudrais\" (condicional de vouloir) es más educado que \"je veux\" al pedir algo.", "Je voudrais un café, s'il vous plaît. (Más cortés que \"Je veux un café\".)"]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"the menu\" en francés?", ["Le menu","L'addition","Le plat","La table"], 0, "Le menu = the menu. L'addition = the bill, le plat = the dish, la table = the table."],
      ["fill", "Completa: \"___ un café, s'il vous plaît.\" (I would like)", ["Je voudrais","Je veux","Je voulais","Je voudra"], 0, "\"Je voudrais\" es la forma más cortés para pedir algo en un restaurante."],
      ["mcq", "¿Qué significa \"l'addition, s'il vous plaît\"?", ["The bill, please","The menu, please","The table, please","The water, please"], 0, "\"L'addition, s'il vous plaît\" = the bill, please. Se usa al terminar de comer."],
      ["translate", "Traduce: \"This dish is delicious.\"", ["Ce plat est délicieux","Ce plat est délicieuse","Cette plat est délicieux","Ce plat délicieux est"], 0, "\"Ce plat est délicieux.\" — \"plat\" es masculino, por eso \"délicieux\" (no \"délicieuse\")."],
      ["mcq", "¿Cómo se dice \"waiter\" en francés?", ["Serveur","Cuisinier","Client","Propriétaire"], 0, "Serveur = waiter (serveuse para mujer). Cuisinier = cook, client = customer."],
      ["arrange", "Ordena: [d'eau / voudrais / un / verre / je]", ["Je voudrais un verre d'eau","Un verre je voudrais d'eau","D'eau je voudrais un verre","Verre d'eau je voudrais un"], 0, "\"Je voudrais un verre d'eau.\" = I would like a glass of water."],
    ]
  },
  {
    id:"fr_a1_daily_routine", level:"A1", title:"Routine quotidienne", emoji:"⏰", xp:35,
    description:"Habla sobre tu día: mañana, tarde y noche en francés.",
    study: {
      vocab: [
        ["se réveiller", "to wake up"],
        ["se lever", "to get up"],
        ["prendre le petit-déjeuner / déjeuner / dîner", "to have breakfast/lunch/dinner"],
        ["aller au travail", "to go to work"],
        ["tous les jours", "every day"]
      ],
      grammar: [
        ["Verbos reflexivos (pronominales) en presente", "Verbos como \"se réveiller\" y \"se lever\" llevan un pronombre reflexivo (me, te, se...) que cambia según la persona.", "Je me réveille à 7h. / Elle se lève tôt."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I wake up at 7\"?", ["Je me réveille à 7h","Tu te réveilles à 7h","Il se réveille à 7h","Se réveiller à 7h"], 0, "\"Je me réveille à 7h.\" — primera persona del verbo reflexivo \"se réveiller\": je + me + réveille."],
      ["fill", "Completa: \"Elle ___ à 8h.\" (gets up)", ["se lève","me lève","te lèves","lever"], 0, "\"Se lève\" = tercera persona de \"se lever\" (se + lève)."],
      ["mcq", "¿Qué significa \"prendre le petit-déjeuner\"?", ["To have breakfast","To have lunch","To have dinner","To sleep"], 0, "Prendre le petit-déjeuner = to have breakfast. Déjeuner = to have lunch, dîner = to have dinner."],
      ["translate", "Traduce: \"I go to work at 9.\"", ["Je vais au travail à 9h","Je vais travailler 9h","Il va au travail à 9h","Je vais au travail 9h"], 0, "\"Je vais au travail à 9h.\" — \"aller au + lugar\" y \"à + hora\" para indicar el momento."],
      ["mcq", "¿Cómo se dice \"every day\" en francés?", ["Tous les jours","Un jour","Un jour peut-être","L'autre jour"], 0, "Tous les jours = every day. Un jour = one day."],
      ["arrange", "Ordena: [heures / dix / je / dors / à]", ["Je dors à dix heures","À dix heures je dors","Dix heures je dors à","Je à dix heures dors"], 0, "\"Je dors à dix heures.\" = I sleep at ten. Sujeto+verbo (je dors) + preposición + hora."],
    ]
  },
];
