/* ═══════════════════════════════════════════════════════════
   js/lessons-data/it.js — Banco de lecciones: ITALIANO (IT)
   ═══════════════════════════════════════════════════════════ */

window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS.IT = [
  {
    id:"it_a1_greetings", level:"A1", title:"Saluti e presentazioni", emoji:"👋", xp:30,
    description:"Aprende a saludar y presentarte en italiano.",
    ex:[
      ["mcq", "¿Cómo se dice \"Good morning\" en italiano?", ["Buongiorno","Buonasera","Buonanotte","Arrivederci"], 0, "\"Buongiorno\" se usa desde la mañana hasta media tarde. \"Buonasera\" se usa al caer la tarde/noche.", "☀️ Son las 9 de la mañana y llegas a la oficina."],
      ["mcq", "Alguien te dice \"Come stai?\". ¿Cuál es una respuesta común?", ["Sto bene, grazie","Mi chiamo Paolo","Ho vent'anni","A presto"], 0, "\"Sto bene, grazie\" es la respuesta estándar. También puedes decir \"Bene, e tu?\""],
      ["fill", "Completa: \"Ciao! Mi ___ Anna. ___ di Roma.\"", ["chiamo / Vengo","chiama / Vieni","chiamo / Sono","chiami / Vengo"], 0, "\"Mi chiamo Anna\" (me llamo) y \"Vengo di Roma\" (vengo de). \"Chiamarsi\" y \"venire\" son verbos distintos, ambos en primera persona."],
      ["translate", "Traduce al italiano: \"Nice to meet you!\"", ["Piacere!","Come ti chiami?","Di dove sei?","A domani!"], 0, "\"Piacere!\" es la expresión estándar al conocer a alguien nuevo."],
      ["mcq", "¿Qué significa \"Come ti chiami?\"?", ["What's your name?","Where are you from?","How old are you?","Where do you live?"], 0, "\"Come ti chiami?\" = What's your name? Respuesta: \"Mi chiamo ___\".", "🏫 Un nuevo compañero de clase te pregunta algo."],
      ["arrange", "Ordena: [sono / un / insegnante / io]", ["Io sono un insegnante","Un sono io insegnante","Insegnante io sono un","Sono io un insegnante"], 0, "En italiano el orden es: Sujeto (opcional) + Verbo + Complemento. → \"Io sono un insegnante.\" (Soy profesor.)"],
    ]
  },
  {
    id:"it_a1_numbers_colors", level:"A1", title:"Numeri e colori", emoji:"🔢", xp:30,
    description:"Aprende números del 1 al 20 y colores básicos en italiano.",
    ex:[
      ["mcq", "¿Cómo se dice el número 15 en italiano?", ["Quindici","Cinquanta","Cinque","Sedici"], 0, "15 = quindici. Ojo: 50 = cinquanta, 5 = cinque."],
      ["mcq", "¿Qué color es \"rosso\"?", ["Red","Blue","Green","Yellow"], 0, "Rosso = red. Otros colores: blu (blue), verde (green), giallo (yellow), bianco (white), nero (black).", "🍎 Piensa en una manzana madura."],
      ["fill", "Completa: \"Ho ___ anni.\" (I am 20 years old)", ["vent'","venti","ventuno","dieci"], 0, "\"Ho vent'anni\" = I am twenty years old. En italiano la edad se expresa con el verbo \"avere\" (tener), no \"essere\" (ser)."],
      ["translate", "Traduce: \"The sky is blue.\"", ["Il cielo è blu","Il cielo è verde","La casa è blu","Il mare è blu"], 0, "\"Il cielo è blu.\" — cielo = sky, blu = blue."],
      ["mcq", "¿Cómo se dice \"black\" en italiano?", ["Nero","Bianco","Grigio","Marrone"], 0, "Nero = black. Bianco = white, grigio = gray, marrone = brown."],
      ["arrange", "Ordena: [due / ho / gatti]", ["Ho due gatti","Due ho gatti","Gatti ho due","Due gatti ho"], 0, "\"Ho due gatti.\" = I have two cats. Verbo (ho) + cantidad (due) + sustantivo (gatti)."],
    ]
  },
  {
    id:"it_a1_essere_avere", level:"A1", title:"Essere e avere", emoji:"🧩", xp:35,
    description:"Los dos verbos más importantes del italiano: ser/estar y tener.",
    ex:[
      ["mcq", "\"Io ___ studente.\" (I am a student)", ["sono","ho","sei","è"], 0, "\"Essere\" (ser/estar) en primera persona es \"sono\": \"Io sono studente.\""],
      ["mcq", "\"Lei ___ venticinque anni.\" (She is 25 years old)", ["ha","è","ho","hai"], 0, "La edad en italiano se expresa con \"avere\": \"Lei ha venticinque anni.\" (literalmente: ella tiene 25 años)."],
      ["fill", "Completa: \"Noi ___ italiani.\" (We are Italian)", ["siamo","abbiamo","siete","sono"], 0, "\"Essere\" en primera persona plural es \"siamo\": \"Noi siamo italiani.\""],
      ["translate", "Traduce: \"They have a car.\"", ["Loro hanno una macchina","Loro sono una macchina","Loro ha una macchina","Lei hanno una macchina"], 0, "\"Avere\" en tercera persona plural es \"hanno\": \"Loro hanno una macchina.\""],
      ["mcq", "¿Qué verbo se usa para la edad en italiano?", ["Avere (tener)","Essere (ser/estar)","Andare (ir)","Fare (hacer)"], 0, "En italiano se dice literalmente \"tener X años\" (avere X anni), igual que en español."],
      ["arrange", "Ordena: [molto / sono / felice / io]", ["Io sono molto felice","Molto io sono felice","Felice molto io sono","Io molto sono felice"], 0, "\"Io sono molto felice.\" = I am very happy. Sujeto (io) + verbo (sono) + intensificador (molto) + adjetivo (felice)."],
    ]
  },
];
