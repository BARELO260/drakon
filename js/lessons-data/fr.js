/* ═══════════════════════════════════════════════════════════
   js/lessons-data/fr.js — Banco de lecciones: FRANCÉS (FR)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.FR = [
  {
    id:"fr_a1_greetings", level:"A1", title:"Salutations et présentations", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en francés.",
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
    ex:[
      ["mcq", "\"Je ___ étudiant.\" (I am a student)", ["suis","ai","es","est"], 0, "\"Être\" (ser/estar) en primera persona es \"suis\": \"Je suis étudiant.\""],
      ["mcq", "\"Elle ___ vingt-cinq ans.\" (She is 25 years old)", ["a","est","ai","es"], 0, "La edad en francés se expresa con \"avoir\": \"Elle a vingt-cinq ans.\" (literalmente: ella tiene 25 años)."],
      ["fill", "Completa: \"Nous ___ français.\" (We are French)", ["sommes","avons","êtes","sont"], 0, "\"Être\" en primera persona plural es \"sommes\": \"Nous sommes français.\""],
      ["translate", "Traduce: \"They have a car.\"", ["Ils ont une voiture","Ils sont une voiture","Ils ont un voiture","Elles est une voiture"], 0, "\"Avoir\" en tercera persona plural es \"ont\": \"Ils ont une voiture.\""],
      ["mcq", "¿Qué verbo se usa para la edad en francés?", ["Avoir (tener)","Être (ser/estar)","Aller (ir)","Faire (hacer)"], 0, "En francés se dice literalmente \"tener X años\" (avoir X ans), a diferencia del español que también usa \"tener\" pero del inglés que usa \"to be\"."],
      ["arrange", "Ordena: [heureux / très / je / suis]", ["Je suis très heureux","Très je suis heureux","Heureux très je suis","Je très suis heureux"], 0, "\"Je suis très heureux.\" = I am very happy. Sujeto+verbo (je suis) + intensificador (très) + adjetivo (heureux)."],
    ]
  },
];
