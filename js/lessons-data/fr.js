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
  {
    id:"fr_a2_shopping_clothes", level:"A2", title:"Faire du shopping et les vêtements", emoji:"🛍️", xp:40,
    description:"Aprende a comprar ropa, preguntar precios y tallas en francés.",
    study: {
      vocab: [
        ["la chemise, le t-shirt", "shirt, t-shirt"],
        ["le pantalon, la jupe", "pants, skirt"],
        ["les chaussures", "shoes"],
        ["Combien ça coûte ?", "How much does it cost?"],
        ["la taille", "size"],
        ["essayer (quelque chose)", "to try on (something)"]
      ],
      grammar: [
        ["Comparatifs: plus/moins...que", "Se usan para comparar dos cosas.", "Cette chemise est plus chère que celle-là."],
        ["El verbo \"aller\" con la ropa", "En francés se usa \"aller\" (quedar bien/mal) en vez de \"quedar\".", "Ces chaussures me vont mal (sont trop petites)."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"How much does it cost?\" en francés?", ["Combien ça coûte ?","Quelle taille fais-tu ?","Où est-ce ?","Tu aimes ça ?"], 0, "\"Combien ça coûte ?\" se usa para preguntar el precio de algo."],
      ["fill", "Completa: \"Cette jupe est ___ chère ___ celle-là.\" (more...than)", ["plus / que","moins / de","aussi / que","très / que"], 0, "\"Plus...que\" se usa para comparaciones de superioridad: \"plus chère que\" = more expensive than."],
      ["mcq", "¿Qué significa \"essayer un vêtement\"?", ["To try on clothes","To buy clothes","To wash clothes","To fold clothes"], 0, "\"Essayer\" = to try on. Se usa antes de comprar, para ver si la talla es correcta."],
      ["translate", "Traduce al francés: \"These shoes are too small for me.\"", ["Ces chaussures sont trop petites pour moi","Ces chaussures sont grandes","Ces vêtements sont chers","Ces chaussures coûtent cher"], 0, "\"Trop petites pour moi\" describe cómo le sienta la prenda a la persona."],
      ["mcq", "¿Cómo se dice \"shirt\" en francés?", ["Chemise","Pantalon","Jupe","Chaussure"], 0, "Chemise = shirt. Pantalon = pants, jupe = skirt, chaussure = shoe."],
      ["arrange", "Ordena: [taille / ma / c'est / exactement]", ["C'est exactement ma taille","Ma taille c'est exactement","Exactement c'est ma taille","Taille ma c'est exactement"], 0, "\"C'est exactement ma taille.\" = This is exactly my size."],
    ]
  },
  {
    id:"fr_a2_weather_seasons", level:"A2", title:"La météo et les saisons", emoji:"🌦️", xp:40,
    description:"Habla del clima y las estaciones del año en francés.",
    study: {
      vocab: [
        ["il fait chaud / froid", "it's hot / cold"],
        ["il pleut, il neige", "it rains, it snows"],
        ["l'été, l'hiver, le printemps, l'automne", "summer, winter, spring, autumn"],
        ["il fait nuageux / ensoleillé", "it's cloudy / sunny"]
      ],
      grammar: [
        ["Verbes impersonnels de la météo", "\"Il\" impersonal + verbo, sin sujeto real.", "Il fait très chaud aujourd'hui. Il pleut."],
        ["Être en train de + infinitif", "Describe una acción en curso en este momento.", "Il est en train de pleuvoir."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"it's cold\" en francés?", ["Il fait froid","Il fait chaud","Il fait beau","Il pleut"], 0, "Il fait froid = it's cold. Il fait chaud = it's hot."],
      ["fill", "Completa: \"En hiver, parfois ___.\" (it snows)", ["il neige","il pleut","il fait chaud","il fait beau"], 0, "Il neige = it snows, del verbo \"neiger\", típico del invierno."],
      ["mcq", "¿Qué estación sigue a la primavera (le printemps)?", ["L'été","L'hiver","L'automne","Le printemps"], 0, "El orden de las estaciones es: le printemps, l'été, l'automne, l'hiver."],
      ["translate", "Traduce al francés: \"It's raining right now.\"", ["Il est en train de pleuvoir","Il va pleuvoir demain","Il fait froid maintenant","Il a plu hier"], 0, "\"Être en train de\" (presente continuo) describe una acción en curso ahora mismo."],
      ["mcq", "¿Cómo se dice \"sunny\" en francés?", ["Ensoleillé","Nuageux","Pluvieux","Neigeux"], 0, "Ensoleillé = sunny. Nuageux = cloudy, pluvieux = rainy, neigeux = snowy."],
      ["arrange", "Ordena: [aujourd'hui / il / chaud / fait / très]", ["Il fait très chaud aujourd'hui","Aujourd'hui il fait très chaud","Chaud il fait très aujourd'hui","Très il fait chaud aujourd'hui"], 0, "\"Il fait très chaud aujourd'hui.\" = It's very hot today."],
    ]
  },
  {
    id:"fr_a2_passe_compose_hier", level:"A2", title:"Hier: le passé composé", emoji:"📅", xp:45,
    description:"Aprende a hablar de acciones terminadas en el pasado con el passé composé.",
    study: {
      vocab: [
        ["hier, hier soir, la semaine dernière", "yesterday, last night, last week"],
        ["j'ai mangé, tu as mangé, il/elle a mangé", "I ate, you ate, he/she ate"],
        ["je suis allé(e), tu es allé(e)", "I went, you went"],
        ["Qu'est-ce que tu as fait ?", "What did you do?"]
      ],
      grammar: [
        ["Le passé composé avec \"avoir\"", "Sujeto + avoir (conjugado) + participio pasado.", "J'ai mangé une pomme. Tu as parlé."],
        ["Le passé composé avec \"être\"", "Los verbos de movimiento (aller, venir...) usan \"être\"; el participio concuerda con el sujeto.", "Je suis allé(e) au cinéma hier."]
      ]
    },
    ex:[
      ["mcq", "¿Cómo se dice \"I ate\" en francés?", ["J'ai mangé","Je mange","Je mangerai","En mangeant"], 0, "J'ai mangé = I ate (passé composé). Je mange = I eat (presente)."],
      ["fill", "Completa: \"Hier, ___ au cinéma avec mes amis.\" (I went)", ["je suis allé(e)","je vais","j'irai","j'allais"], 0, "\"Aller\" es un verbo de movimiento, por eso el passé composé se forma con \"être\": je suis allé(e)."],
      ["mcq", "¿Qué auxiliar se usa con \"manger\" en el passé composé?", ["Avoir","Être","Aller","Faire"], 0, "La mayoría de los verbos, incluido \"manger\", usan \"avoir\" como auxiliar en el passé composé."],
      ["translate", "Traduce al francés: \"What did you do last night?\"", ["Qu'est-ce que tu as fait hier soir ?","Qu'est-ce que tu fais maintenant ?","Qu'est-ce que tu feras demain ?","Qu'est-ce que tu fais toujours ?"], 0, "\"Qu'est-ce que tu as fait\" usa el passé composé de \"faire\" para preguntar por una acción terminada."],
      ["mcq", "¿Cómo se dice \"last week\" en francés?", ["La semaine dernière","Cette semaine","La semaine prochaine","Tous les jours"], 0, "La semaine dernière = last week. Cette semaine = this week."],
      ["arrange", "Ordena: [une / j'ai / pomme / mangé]", ["J'ai mangé une pomme","Une j'ai mangé pomme","Pomme une j'ai mangé","J'ai pomme mangé une"], 0, "\"J'ai mangé une pomme.\" = I ate an apple."],
    ]
  },
  {
    id:"fr_b1_reading_notices", level:"B1", title:"Lecture et décisions", emoji:"📌", xp:55,
    description:"Extrais des informations pratiques d'avis et de messages courants.",
    study:{
      vocab:[
        ["disponible sur demande","available on request"],
        ["sous réserve de modification","subject to change"],
        ["remplir les conditions","to be eligible"],
        ["la date limite","deadline"]
      ],
      grammar:[
        ["Lecture sélective","Cherche d'abord le but du texte, la condition et l'action requise.","Les réservations ne sont confirmées qu'après réception du paiement."]
      ]
    },
    ex:[
      ["mcq","Avis : \"Les places de l'atelier sont réservées aux membres jusqu'à vendredi ; les places restantes seront ensuite libérées.\" Que doit faire une personne non membre ?",["Attendre jusqu'à vendredi pour savoir s'il reste des places.","Réserver aujourd'hui car elle est prioritaire.","Payer une cotisation obligatoire avant vendredi.","Supposer que l'atelier est annulé."],0,"L'avis indique une priorité temporaire pour les membres, pas une exclusivité permanente."],
      ["mcq","Message : \"Envoyez le formulaire avant 17h jeudi. Les candidatures tardives ne seront examinées que s'il reste des places.\" Quelle est l'action la plus sûre ?",["Envoyer le formulaire avant 17h jeudi.","Attendre la confirmation qu'il reste des places.","Envoyer vendredi car les candidatures tardives sont toujours acceptées.","Appeler pour annuler la candidature."],0,"\"Avant\" marque une échéance claire ; \"seulement si\" ne garantit pas l'acceptation tardive."],
      ["fill","Complète : \"Les candidats doivent ___ pour le programme avant de demander une bourse.\"",["être éligibles","être disponibles","être soumis","être limités"],0,"\"Éligible\" signifie qu'on remplit les conditions nécessaires."],
      ["writing","Écris un e-mail de 45-60 mots pour demander si tu peux encore t'inscrire après la date limite.",[],["tardive","candidature","disponible"],"Inclus une salutation, une demande claire et une formule de politesse.","Tu écris au coordinateur d'un cours qui a fermé hier."]
    ]
  },
  {
    id:"fr_b1_opinions", level:"B1", title:"Opinions et points de vue", emoji:"🎧", xp:58,
    description:"Distingue faits, préférences et raisons dans des conversations courantes.",
    study:{
      vocab:[
        ["je préférerais","I would rather"],
        ["il s'avère que","it turns out"],
        ["ça vaut le coup","it's worth it"],
        ["décourager quelqu'un","to put someone off"]
      ],
      grammar:[
        ["Opinion justifiée","Une réponse B1 doit inclure une opinion et une raison.","Je préférerais voyager en train parce que je peux travailler pendant le trajet."]
      ]
    },
    ex:[
      ["mcq","Lis : \"Maya pensait que le cours serait difficile, mais il s'avère que le feedback hebdomadaire le rend gérable.\" Que pense Maya ?",["Le cours est exigeant, mais le soutien l'aide à suivre.","Le cours est trop facile.","Le feedback rend le cours plus difficile.","Elle a abandonné le cours par manque de soutien."],0,"Le contraste entre l'attente initiale et le bilan final est plus positif."],
      ["mcq","Quelle réponse exprime une préférence et une raison ?",["Je préférerais me réunir en ligne parce que ça économise du temps de trajet.","Je me réunis en ligne hier.","Les réunions en ligne sont un temps de trajet.","Je préfère parce que réunions."],0,"La structure inclut préférence, option et justification."],
      ["fill","Complète : \"Le prix était élevé, mais l'expérience ___ le coup.\"",["valait","préférait","s'avérait","décourageait"],0,"L'expression fixe est \"valoir le coup\"."],
      ["speaking","Parle pendant 45-60 mots : compare étudier seul et étudier à plusieurs. Donne une préférence, une raison et un inconvénient.",[],["je préfère","parce que","cependant"],"Organise ta réponse : comparaison, préférence, raison et réserve.","Conversation avec un camarade de classe."]
    ]
  },
  {
    id:"fr_b1_storytelling", level:"B1", title:"Raconter une expérience", emoji:"🗺️", xp:60,
    description:"Raconte des expériences passées en combinant passé composé et imparfait.",
    study:{
      vocab:[
        ["au début","at first"],
        ["finalement","eventually"],
        ["de façon inattendue","unexpectedly"],
        ["se rendre compte","to realise"]
      ],
      grammar:[
        ["Passé composé vs. imparfait","L'imparfait décrit le contexte ou une action en cours ; le passé composé raconte des actions terminées.","Pendant que nous attendions le bus, il a commencé à pleuvoir."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase utilise correctement le passé composé et l'imparfait ?",["Pendant que nous marchions dans le parc, nous avons vu un accident.","Pendant que nous avons marché dans le parc, nous voyions un accident.","Pendant que nous marchions dans le parc, nous voyions un accident hier.","Nous avons marché dans le parc pendant que nous avons vu."],0,"Le contexte (marchions) va à l'imparfait ; l'action ponctuelle (avons vu) va au passé composé."],
      ["fill","Complète : \"Je ne ___ pas compte de l'heure qu'il était jusqu'à ce que j'ai regardé mon téléphone.\"",["me suis rendu","me rendais","me rends","rendais"],0,"\"Se rendre compte\" au passé composé pour une action ponctuelle : \"je me suis rendu compte\"."],
      ["translate","Traduis : \"At first I was nervous, but eventually I enjoyed the experience.\"",["Au début j'étais nerveux, mais finalement j'ai apprécié l'expérience.","Au début j'ai été nerveux, mais finalement j'appréciais l'expérience.","Au début j'étais nerveux, mais finalement j'appréciais l'expérience.","Au début j'étais nerveux, mais finalement j'ai apprécié de l'expérience."],0,"L'état d'esprit de fond va à l'imparfait (\"j'étais\") ; l'action complète va au passé composé (\"j'ai apprécié\")."],
      ["writing","Écris une histoire de 80-100 mots sur un projet qui a changé de façon inattendue.",[],["au début","mais","finalement"],"Vérifie que chaque partie fait avancer l'histoire et que les temps sont cohérents.","Un court voyage qui ne s'est pas passé comme prévu."]
    ]
  },
  {
    id:"fr_b1_agreement", level:"B1", title:"Discuter et trouver un accord", emoji:"🤝", xp:62,
    description:"Propose des options, réagis aux idées des autres et négocie une décision.",
    study:{
      vocab:[
        ["et si...?","shall we...?"],
        ["je comprends ton point de vue","I see your point"],
        ["et pourquoi pas...?","how about...?"],
        ["un compromis","a compromise"]
      ],
      grammar:[
        ["Langage de collaboration","Pour négocier : proposer, répondre et chercher une alternative partagée.","Je comprends ton point de vue sur le coût ; et pourquoi pas choisir l'option la moins chère ?"]
      ]
    },
    ex:[
      ["mcq","Quelle réponse construit un accord ?",["Je comprends ton point de vue sur le coût ; et pourquoi pas inviter moins de monde ?","Ton idée est mauvaise, donc c'est la mienne qui gagne.","Je ne comprends aucun point de vue.","L'option la moins chère, c'est les gens."],0,"Reconnaît une idée et propose un compromis concret."],
      ["fill","Complète : \"___ nous nous retrouvons à la bibliothèque après les cours ?\"",["Et si","Serait","A fait","A"],0,"\"Et si...?\" est une façon courante de proposer quelque chose."],
      ["mcq","Quelle phrase exprime un désaccord poli ?",["Je ne suis pas sûr que ça marche, car le lieu ferme tôt.","Ça ne marchera jamais.","Ton lieu est nul.","Non, évidemment pas."],0,"Le désaccord est adouci et justifié par une raison."],
      ["speaking","Parle pendant 45-60 mots : propose un plan pour le week-end, réponds à une objection et propose un compromis.",[],["je propose","parce que","compromis"],"Inclus une proposition concrète, une raison et une réponse collaborative.","Tu organises une activité avec un ami qui a peu de budget."]
    ]
  },
  {
    id:"fr_b1_future_plans", level:"B1", title:"Projets et futur", emoji:"🗓️", xp:60,
    description:"Parle de projets, d'intentions et de prévisions avec différentes formes de futur.",
    study:{
      vocab:[
        ["j'ai l'intention de","I intend to"],
        ["bientôt","soon"],
        ["dès que je peux","as soon as I can"],
        ["il est possible que","it's possible that"]
      ],
      grammar:[
        ["Futur proche vs. futur simple","\"Aller + infinitif\" exprime un projet déjà décidé ; le futur simple exprime une prédiction ou une décision spontanée.","Je vais déménager le mois prochain. / Je pense qu'il pleuvra demain."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase exprime un projet déjà décidé ?",["Je vais commencer un cours d'italien en septembre.","Je commencerai un cours si j'ai le temps.","Je pense que je commencerai un cours.","Je commençais un cours l'année dernière."],0,"\"Aller + infinitif\" s'utilise pour les projets déjà décidés."],
      ["fill","Complète : \"Dès que je ___ le rapport, je te l'envoie.\"",["termine","termines","terminerai","terminais"],0,"Après \"dès que\" pour une action future proche, le présent est courant en français."],
      ["translate","Traduis : \"As soon as I finish the project, I'll call you.\"",["Dès que je finis le projet, je t'appellerai.","Quand je finissais le projet, je t'appelle.","Dès que je finirai le projet, je t'appelais.","Si je finis le projet, je t'appellerai peut-être."],0,"\"Dès que\" + présent introduit une condition future proche."],
      ["writing","Écris 45-60 mots sur tes projets pour l'année prochaine. Utilise au moins deux expressions de futur.",[],["j'ai l'intention","dès que","il est possible"],"Combine au moins deux façons de parler du futur et justifie un projet.","Tu racontes tes projets à un ami."]
    ]
  },
  {
    id:"fr_b1_complaints_requests", level:"B1", title:"Plaintes et demandes polies", emoji:"✉️", xp:60,
    description:"Formule des plaintes et des demandes formelles avec le conditionnel de politesse.",
    study:{
      vocab:[
        ["je voudrais","I would like"],
        ["pourriez-vous...?","could you...?"],
        ["je regrette de vous informer","I regret to inform you"],
        ["déposer une plainte","to file a complaint"]
      ],
      grammar:[
        ["Conditionnel de politesse","\"Voudrais\" et \"pourriez\" adoucissent les demandes et les plaintes formelles.","Je voudrais savoir pourquoi la commande est arrivée en retard."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase est une plainte formelle et polie ?",["Je voudrais savoir pourquoi le colis est arrivé avec une semaine de retard.","C'est un désastre total !","Votre entreprise ne fait jamais rien de bien.","Je ne compte rien payer."],0,"Formule la plainte de façon indirecte et respectueuse, sans perdre en clarté."],
      ["fill","Complète : \"___-vous m'envoyer une copie de la facture, s'il vous plaît ?\"",["Pourriez","Pouvez","A pu","Peux"],0,"\"Pourriez\" au conditionnel adoucit la demande et la rend plus formelle."],
      ["translate","Traduis : \"I would like to file a complaint about the service.\"",["Je voudrais déposer une plainte concernant le service.","Je veux plaindre le service.","J'aime déposer une plainte du service.","Je déposerais une plainte le service."],0,"\"Je voudrais\" + infinitif est la formule standard de politesse."],
      ["writing","Écris un e-mail de plainte de 50-70 mots sur une commande arrivée incomplète. Utilise le conditionnel de politesse.",[],["je voudrais","pourriez-vous","je regrette"],"Explique le problème, formule une demande claire et termine poliment.","Une commande en ligne est arrivée avec deux articles manquants."]
    ]
  },
  {
    id:"fr_b2_hypotheticals", level:"B2", title:"Hypothèses et conditions improbables", emoji:"🌀", xp:75,
    description:"Exprime des hypothèses peu probables ou irréelles avec si + imparfait.",
    study:{
      vocab:[
        ["si j'avais","if I had"],
        ["au cas où","in case"],
        ["à moins que","unless"],
        ["en supposant que","assuming that"]
      ],
      grammar:[
        ["Hypothèse irréelle (type 2)","Pour des hypothèses peu probables au présent : si + imparfait, conditionnel présent dans la principale.","Si j'avais plus de temps, je voyagerais plus souvent."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase exprime correctement une hypothèse peu probable ?",["Si j'avais plus d'argent, j'achèterais une maison plus grande.","Si j'ai plus d'argent, j'achèterais une maison plus grande.","Si j'avais plus d'argent, j'achète une maison plus grande.","Si j'aurais plus d'argent, j'achèterais une maison."],0,"Le type 2 exige l'imparfait dans la condition et le conditionnel présent dans la conséquence."],
      ["fill","Complète : \"À moins que nous ne ___ un effort supplémentaire, nous ne finirons pas à temps.\"",["fassions","faisons","ferions","avons fait"],0,"\"À moins que\" est toujours suivi du subjonctif."],
      ["mcq","Quelle est la meilleure paraphrase de « Si j'étais toi, je n'accepterais pas cette offre » ?",["Un conseil hypothétique : le locuteur n'accepterait pas l'offre à la place de l'auditeur.","Un ordre direct.","La description d'un fait passé.","Une promesse pour l'avenir."],0,"La structure hypothétique exprime un conseil, pas un fait ni un ordre."],
      ["writing","Écris 60-80 mots : décris ce que tu ferais différemment si tu pouvais revivre une année de ta vie. Utilise au moins deux hypothèses avec 'si'.",[],["si j'avais","à moins que","en supposant"],"Vérifie que chaque hypothèse combine correctement l'imparfait et le conditionnel.","Réflexion personnelle pour un blog."]
    ]
  },
  {
    id:"fr_b2_reported_speech", level:"B2", title:"Discours indirect", emoji:"💬", xp:78,
    description:"Rapporte ce que d'autres ont dit en adaptant temps verbaux et marqueurs temporels.",
    study:{
      vocab:[
        ["il a dit que","he said that"],
        ["elle a expliqué que","she explained that"],
        ["il a demandé si","he asked whether"],
        ["elle a ajouté que","she added that"]
      ],
      grammar:[
        ["Discours indirect","Au passé, le futur devient conditionnel et le présent devient souvent imparfait.","Elle a dit : « J'arriverai en retard. » → Elle a dit qu'elle arriverait en retard."]
      ]
    },
    ex:[
      ["mcq","Citation directe : « Je finirai le rapport demain. » Quel est le discours indirect correct ?",["Il a dit qu'il finirait le rapport le lendemain.","Il a dit qu'il finira le rapport demain.","Il a dit qu'il finissait le rapport demain.","Il a dit qu'il finisse le rapport le lendemain."],0,"Le futur de la citation originale devient conditionnel ; 'demain' devient 'le lendemain'."],
      ["fill","Complète : \"Elle m'a demandé si j'___ disponible pour la réunion de lundi.\"",["étais","suis","serai","sois"],0,"Le présent de la citation originale devient imparfait dans le discours indirect au passé."],
      ["mcq","Qu'est-ce qui change généralement en passant du discours direct à l'indirect au passé ?",["Le temps verbal et parfois les marqueurs temporels (demain → le lendemain).","Seulement le sujet de la phrase.","Rien ne change jamais.","Seulement l'ordre des mots."],0,"Le temps verbal recule dans le passé et certains marqueurs temporels changent."],
      ["writing","Rapporte au discours indirect (50-70 mots) une conversation récente où quelqu'un t'a raconté ses projets.",[],["il a dit que","elle a expliqué","elle a ajouté"],"Adapte correctement les temps verbaux et les marqueurs temporels.","Tu racontes à un ami ce qu'un collègue t'a dit."]
    ]
  },
  {
    id:"fr_b2_passive_impersonal", level:"B2", title:"Voix passive et construction avec 'on'", emoji:"⚙️", xp:76,
    description:"Décris des processus et des faits sans insister sur qui les réalise.",
    study:{
      vocab:[
        ["être + participe passé","to be + past participle (passive)"],
        ["on + verbe","impersonal 'one' construction"],
        ["être mené à bien","to be carried out"],
        ["être chargé de","to be in charge of"]
      ],
      grammar:[
        ["Voix passive et construction avec 'on'","La voix passive met l'accent sur l'action ou le résultat ; 'on' est une alternative naturelle et informelle quand l'agent n'est pas important.","Le projet a été approuvé par le comité. / On a approuvé le projet."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase utilise correctement la voix passive ?",["Les contrats ont été signés hier après-midi.","Les contrats ont été signé hier après-midi.","Les contrats sont signés hier après-midi.","Les contrats ont été signer hier."],0,"Le participe passé s'accorde au pluriel avec 'les contrats' : 'signés'."],
      ["fill","Complète : \"Le nouveau bâtiment ___ conçu par une entreprise internationale.\"",["a été","est","a","était en train d'être"],0,"Passé composé passif : 'a été' + participe passé ('conçu')."],
      ["mcq","Quand utilise-t-on souvent 'on' comme alternative naturelle à la voix passive ?",["Quand l'agent n'est pas important ou inconnu, surtout à l'oral.","Quand on veut toujours nommer l'agent.","Jamais en français naturel.","Seulement dans les textes littéraires anciens."],0,"'On' est très fréquent à l'oral quand l'agent importe peu."],
      ["writing","Décris en 50-70 mots un processus (par exemple, comment on organise un événement) en utilisant au moins deux constructions passives ou avec 'on'.",[],["on + verbe","a été + participe","mené à bien"],"Utilise au moins deux constructions différentes de façon cohérente.","Tu expliques une procédure à un nouveau collègue."]
    ]
  },
  {
    id:"fr_b2_doubt_probability", level:"B2", title:"Doute, probabilité et certitude", emoji:"❓", xp:78,
    description:"Distingue quand utiliser le subjonctif ou l'indicatif selon le degré de certitude.",
    study:{
      vocab:[
        ["je doute que","I doubt that"],
        ["je ne pense pas que","I don't think that"],
        ["il est probable que","it's likely that"],
        ["il se peut que","it might be that"]
      ],
      grammar:[
        ["Subjonctif avec le doute et la probabilité","Les verbes et expressions de doute ou de négation de certitude demandent le subjonctif dans la subordonnée.","Je doute que le projet soit prêt pour vendredi."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase est grammaticalement correcte ?",["Je ne pense pas que la proposition soit viable à court terme.","Je ne pense pas que la proposition est viable à court terme.","Je ne pense pas que la proposition sera viable à court terme.","Je ne pense pas que la proposition viable à court terme."],0,"\"Je ne pense pas que\" nie la certitude, donc exige le subjonctif : \"soit\"."],
      ["fill","Complète : \"Il se peut qu'ils ___ déjà pris la décision quand nous arriverons.\"",["aient","ont","prendront","prenaient"],0,"\"Il se peut que\" + subjonctif (ici, subjonctif passé pour une action antérieure)."],
      ["mcq","Quelle expression n'exige PAS le subjonctif dans la proposition suivante ?",["Je suis sûr que...","Je doute que...","Je ne pense pas que...","Il est possible que..."],0,"\"Je suis sûr que\" exprime une certitude, donc l'indicatif est utilisé, pas le subjonctif."],
      ["speaking","Parle pendant 60-80 mots : donne ton avis sur le fait que le télétravail devienne la norme. Utilise au moins une expression de doute et une de certitude.",[],["je doute que","il est probable","je suis sûr"],"Alterne correctement le subjonctif et l'indicatif selon le degré de certitude.","Débat informel sur l'avenir du travail."]
    ]
  },
  {
    id:"fr_b2_contrast_connectors", level:"B2", title:"Connecteurs de contraste", emoji:"⚖️", xp:76,
    description:"Utilise 'bien que' et d'autres connecteurs pour nuancer des idées et contraster des faits.",
    study:{
      vocab:[
        ["bien que","although"],
        ["malgré","despite"],
        ["cependant","however"],
        ["néanmoins","nevertheless"]
      ],
      grammar:[
        ["Connecteurs de contraste","'Bien que' est toujours suivi du subjonctif, même pour un fait réel.","Bien qu'il ait plu, nous sommes sortis marcher."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase utilise correctement 'bien que' ?",["Bien que le vol ait été retardé, nous sommes arrivés à l'heure à la réunion.","Bien que le vol a été retardé, nous sommes arrivés à l'heure.","Bien que le vol était retardé, nous sommes arrivés.","Bien que le vol sera retardé, nous arrivons à l'heure."],0,"'Bien que' est toujours suivi du subjonctif, même pour un fait avéré."],
      ["fill","Complète : \"___ le rapport était incomplet, nous l'avons envoyé avant la date limite.\"",["Malgré le fait que","Cependant","Néanmoins","Il se peut que"],0,"\"Malgré le fait que\" introduit une subordonnée de contraste avec un fait réel."],
      ["mcq","Quel connecteur introduit typiquement une nouvelle phrase plutôt qu'une subordonnée dans la même phrase ?",["Cependant","Bien que","Malgré","Parce que"],0,"'Cependant' fonctionne comme connecteur entre phrases, pas comme subordonnant."],
      ["writing","Écris un paragraphe de 60-80 mots présentant une opinion et la nuançant avec au moins deux connecteurs de contraste différents.",[],["bien que","cependant","néanmoins"],"Combine correctement les connecteurs subordonnants et ceux qui relient des phrases.","Opinion sur un sujet d'actualité pour un forum."]
    ]
  },
  {
    id:"fr_b2_debate_nuance", level:"B2", title:"Argumenter avec nuance", emoji:"🗣️", xp:80,
    description:"Construis des arguments qui reconnaissent le point contraire avant de défendre une position.",
    study:{
      vocab:[
        ["d'un côté / de l'autre","on one hand / on the other hand"],
        ["il est indéniable que","it's undeniable that"],
        ["il convient de noter que","it's worth noting that"],
        ["en définitive","ultimately"]
      ],
      grammar:[
        ["Argumentation nuancée","Un bon argument B2 reconnaît le point contraire avant de défendre une position.","Il est indéniable que le plan réduit les coûts, mais il convient de noter qu'il comporte aussi des risques."]
      ]
    },
    ex:[
      ["mcq","Quelle structure montre un argument bien nuancé ?",["Il est indéniable que le projet est coûteux, mais à long terme il pourrait économiser des ressources.","Le projet est coûteux, point final.","Le projet ne coûte évidemment rien.","Il n'y a aucun argument contre le projet."],0,"Reconnaît un point contraire avant de le nuancer avec un avantage à long terme."],
      ["fill","Complète : \"___, la proposition a plus d'avantages que d'inconvénients.\"",["En définitive","Bien que","À moins que","Je doute que"],0,"\"En définitive\" sert à conclure un argument par une conclusion générale."],
      ["mcq","Quelle fonction a « il convient de noter que » dans un argument ?",["Il met en avant un point que le locuteur juge particulièrement pertinent.","Il introduit une hypothèse irréelle.","Il exprime un doute total sur le sujet.","Il termine la conversation abruptement."],0,"C'est une formule pour souligner un point pertinent dans l'argument."],
      ["writing","Écris un paragraphe argumentatif de 70-90 mots sur un sujet débattu (par exemple, le télétravail). Reconnais un point contraire avant de défendre ta position.",[],["d'un côté","il est indéniable","en définitive"],"Structure : reconnaissance du point contraire, ta position et une conclusion.","Contribution à un débat écrit en classe."]
    ]
  },
  {
    id:"fr_c1_register_nuance", level:"C1", title:"Registre et nuance dans les textes formels", emoji:"🎩", xp:88,
    description:"Utilise l'atténuation (hedging) pour exprimer des affirmations prudentes en registre soutenu.",
    study:{
      vocab:[
        ["il conviendrait de souligner que","it would be worth pointing out that"],
        ["il serait bon de nuancer que","it would be worth clarifying that"],
        ["avoir tendance à penser que","to be inclined to think that"],
        ["de manière générale","broadly speaking"]
      ],
      grammar:[
        ["Atténuation (hedging) en registre soutenu","Le conditionnel atténue les affirmations et les rend plus prudentes et formelles que le présent de l'indicatif.","Il conviendrait d'avancer que la mesure est prématurée, bien que les données restent limitées."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase convient le mieux à un rapport formel ?",["Il conviendrait de souligner que les résultats, bien que prometteurs, nécessitent une analyse plus poussée.","Les résultats sont géniaux, point final.","C'est évident pour tout le monde.","Il n'y a rien d'autre à dire là-dessus."],0,"Le registre soutenu privilégie l'atténuation et la prudence argumentative."],
      ["fill","Complète : \"___ nuancer que l'étude repose sur un échantillon restreint.\"",["Il conviendrait de","C'est évident de","Jamais de","Toujours de"],0,"\"Il conviendrait de\" introduit une recommandation atténuée, propre au registre soutenu."],
      ["mcq","Quel effet produit l'utilisation du conditionnel plutôt que le présent dans un rapport ?",["Il atténue l'affirmation et laisse place au doute raisonnable.","Il rend l'affirmation plus catégorique et sûre.","Il change complètement le sens.","Il n'a aucun effet stylistique."],0,"Le conditionnel adoucit l'affirmation sans la nier."],
      ["writing","Rédige 60-80 mots d'un court rapport évaluant une proposition, en utilisant au moins deux expressions d'atténuation.",[],["il conviendrait","aurait tendance à penser","de manière générale"],"Le registre soutenu privilégie la prudence argumentative sur la certitude absolue.","Rapport interne pour un comité de direction."]
    ]
  },
  {
    id:"fr_c1_subjunctive_past", level:"C1", title:"Plus-que-parfait et concordance des temps", emoji:"⏳", xp:90,
    description:"Exprime des hypothèses irréelles au passé avec une concordance temporelle complexe.",
    study:{
      vocab:[
        ["si j'avais su","if I had known"],
        ["il était impossible que","it was impossible that"],
        ["il aurait suffi de","it would have sufficed to"],
        ["ce n'est que lorsque","it wasn't until that"]
      ],
      grammar:[
        ["Plus-que-parfait et subjonctif passé","Pour une hypothèse irréelle au passé : si + plus-que-parfait de l'indicatif, conditionnel passé dans la principale. Le subjonctif passé apparaît après une expression de doute au passé.","Si j'avais su le risque, j'aurais agi autrement."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase exprime correctement une hypothèse irréelle au passé ?",["Si nous avions révisé le contrat à temps, nous aurions évité le problème.","Si nous révisons le contrat à temps, nous aurions évité le problème.","Si nous avions révisé le contrat à temps, nous évitons le problème.","Si nous aurions révisé le contrat, nous aurions évité le problème."],0,"Structure standard : si + plus-que-parfait (indicatif), conditionnel passé dans la principale."],
      ["fill","Complète : \"Il était impossible que l'équipe ___ le projet sans plus de ressources.\"",["ait terminé","avait terminé","terminerait","termine déjà"],0,"Après 'il était impossible que' (expression de doute), le subjonctif passé 'ait terminé' est requis."],
      ["mcq","Dans une phrase avec 'si' au passé, quel mode utilise-t-on, contrairement à l'espagnol ou l'italien ?",["L'indicatif (plus-que-parfait), jamais le subjonctif après 'si'.","Le subjonctif plus-que-parfait, comme en espagnol.","L'impératif.","Le conditionnel dans les deux propositions."],0,"En français, la proposition avec 'si' reste toujours à l'indicatif."],
      ["writing","Écris 70-90 mots sur une décision passée que tu changerais. Utilise au moins une hypothèse avec 'si' + plus-que-parfait et une expression de doute avec le subjonctif passé.",[],["si j'avais su","il aurait suffi","ce n'est que lorsque"],"Distingue bien la structure avec 'si' (indicatif) de celle avec une expression de doute (subjonctif).","Réflexion rétrospective sur une décision professionnelle."]
    ]
  },
  {
    id:"fr_c1_nominalization", level:"C1", title:"Nominalisation et style soutenu", emoji:"📑", xp:86,
    description:"Transforme des verbes en noms pour obtenir un registre académique et technique.",
    study:{
      vocab:[
        ["la mise en œuvre de","the implementation of"],
        ["l'absence de","the absence of"],
        ["donner lieu à","to give rise to"],
        ["entraîner","to entail"]
      ],
      grammar:[
        ["Nominalisation pour un registre soutenu","Transformer un verbe en nom (mettre en œuvre → la mise en œuvre) est typique des textes académiques et techniques.","La mise en œuvre tardive de la mesure a donné lieu à des retards généralisés."]
      ]
    },
    ex:[
      ["mcq","Quelle reformulation convient le mieux à un rapport technique ?",["L'absence de coordination entre les équipes a donné lieu à une duplication des tâches.","Ils ne se sont pas coordonnés, donc ils ont refait les mêmes choses.","Les équipes ne se sont pas parlé, donc c'était le bazar.","C'était un désastre parce que personne n'a communiqué."],0,"La nominalisation condense l'information dans un ton plus objectif."],
      ["fill","Complète : \"L'___ de nouvelles technologies entraîne des coûts initiaux élevés.\"",["adoption","adopter","adoptant","adopté"],0,"Le nom 'adoption' (nominalisation d''adopter') s'intègre à la structure formelle avec article."],
      ["mcq","Quel avantage apporte la nominalisation dans un texte technique ?",["Elle permet de condenser l'information et d'adopter un ton plus objectif et impersonnel.","Elle rend le texte plus informel et proche du lecteur.","Elle élimine toute possibilité de précision.","Elle n'apporte aucun avantage réel."],0,"La nominalisation est essentielle à la densité et à l'objectivité du registre technique."],
      ["writing","Réécris en 60-80 mots un paragraphe informel sur un problème professionnel, en le transformant en extrait de rapport formel avec au moins trois nominalisations.",[],["la mise en œuvre","l'absence de","donner lieu à"],"Repère les verbes clés et transforme-les en noms pour un ton plus formel.","Transformer une plainte informelle en rapport interne."]
    ]
  },
  {
    id:"fr_c1_causal_connectors", level:"C1", title:"Connecteurs complexes de cause-conséquence", emoji:"🔗", xp:88,
    description:"Enchaîne causes et conséquences avec précision grâce à des connecteurs avancés.",
    study:{
      vocab:[
        ["étant donné que","given that"],
        ["dans la mesure où","insofar as"],
        ["d'où le fait que","hence / which is why"],
        ["sous peine de","under penalty of / at the risk of"]
      ],
      grammar:[
        ["Connecteurs complexes de cause-conséquence","'D'où' introduit une conséquence logique ; 'étant donné que' et 'dans la mesure où' introduisent des causes à l'indicatif.","Étant donné que les coûts ont augmenté, d'où la révision du budget."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase utilise correctement 'd'où' ?",["Les données étaient contradictoires, d'où le retard de la publication du rapport.","D'où les données étaient contradictoires, le rapport a été retardé.","Les données, d'où contradictoires, ont retardé le rapport.","D'où que les données soient contradictoires, retard du rapport."],0,"'D'où' introduit directement une conséquence logique, souvent suivie d'un nom."],
      ["fill","Complète : \"___ les ressources disponibles, le projet avancera plus lentement que prévu.\"",["Étant donné","D'où","Sous peine de","Il conviendrait de souligner"],0,"'Étant donné' introduit une cause de façon directe."],
      ["mcq","Que signifie approximativement 'dans la mesure où' ?",["Dans la proportion ou le degré où quelque chose se produit ; équivalent à 'pour autant que'.","Exactement la même chose que 'bien que'.","Introduit toujours une hypothèse irréelle.","S'utilise seulement pour parler de mesures physiques."],0,"Exprime une proportionnalité entre deux faits liés."],
      ["writing","Écris un paragraphe de 70-90 mots expliquant la cause et la conséquence d'une décision d'entreprise, en utilisant au moins deux connecteurs de cette leçon.",[],["étant donné que","d'où","dans la mesure où"],"Distingue avec soin les connecteurs de cause et ceux de conséquence.","Analyse causale pour un rapport de gestion."]
    ]
  },
  {
    id:"fr_c1_mediation_summary", level:"C1", title:"Médiation : synthétiser avec précision", emoji:"🗂️", xp:90,
    description:"Résume une information complexe en conservant les relations logiques entre les idées.",
    study:{
      vocab:[
        ["en synthèse","in summary"],
        ["le point central est que","the key point is that"],
        ["il convient de souligner","it's worth highlighting"],
        ["dans les grandes lignes","broadly / roughly speaking"]
      ],
      grammar:[
        ["Médiation : synthétiser avec précision","Un bon résumé C1 conserve la relation logique entre les idées (cause, contraste, condition), pas seulement les mots-clés.","Dans les grandes lignes, le rapport conclut que le plan est viable, même s'il convient de souligner les risques de financement."]
      ]
    },
    ex:[
      ["mcq","Quel est le meilleur résumé pour une audience pressée par le temps ?",["Dans les grandes lignes, le rapport recommande une expansion progressive, conditionnée à l'obtention d'un financement externe.","Le rapport a beaucoup de pages sur l'expansion, le financement et d'autres choses.","L'expansion sera parfaite si tout le monde fait des efforts.","Il y a du financement, de l'expansion et un rapport impliqués."],0,"Un bon résumé priorise la décision, la condition et le risque principal."],
      ["fill","Complète : \"___, l'étude montre une amélioration modérée mais constante des résultats.\"",["En synthèse","Sous peine de","D'où","Il conviendrait"],0,"\"En synthèse\" introduit une conclusion générale qui clôt le résumé."],
      ["mcq","Qu'est-ce qui distingue une bonne médiation (résumé) d'une simple liste de mots-clés ?",["Elle conserve les relations logiques (cause, contraste, condition) entre les idées originales.","Elle élimine toute relation logique et ne garde que des termes isolés.","Elle doit toujours être plus longue que le texte original.","Elle ne doit inclure aucune conclusion."],0,"La médiation exige de préserver le sens et les liens, pas seulement le vocabulaire."],
      ["writing","Résume en 60-80 mots un rapport imaginaire évaluant deux options stratégiques, en indiquant la recommandation principale et une condition ou un risque.",[],["en synthèse","le point central","il convient de souligner"],"Priorise la décision, la raison et une condition ou un risque pertinent.","Résumé exécutif pour la direction."]
    ]
  },
  {
    id:"fr_c1_concession_refutation", level:"C1", title:"Concession avancée et réfutation", emoji:"⚔️", xp:92,
    description:"Reconnais des arguments contraires avec force rhétorique avant de les réfuter avec précision.",
    study:{
      vocab:[
        ["certes... il n'en demeure pas moins que","admittedly... it's no less true that"],
        ["loin de","far from"],
        ["cela n'empêche pas que","that doesn't prevent"],
        ["en dernière instance","ultimately / in the last resort"]
      ],
      grammar:[
        ["Concession avancée et réfutation","Ces structures reconnaissent un argument contraire avec force rhétorique avant de le réfuter ou de le nuancer avec précision.","Certes le plan réduit les coûts, il n'en demeure pas moins qu'il introduit des risques considérables."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase réfute un argument avec le plus de précision rhétorique ?",["Loin de résoudre le problème, la mesure pourrait l'aggraver à long terme.","La mesure est mauvaise, c'est tout.","Ça ne sert à rien, c'est évident.","Tout le monde sait que c'est mauvais."],0,"'Loin de' introduit une réfutation nuancée et argumentée, pas une simple négation."],
      ["fill","Complète : \"Le projet a généré des bénéfices ; ___, il n'a pas couvert les coûts initiaux.\"",["cela n'empêche pas de reconnaître que","étant donné que","d'où","dans la mesure où"],0,"'Cela n'empêche pas de reconnaître que' introduit une concession suivie d'une nuance."],
      ["mcq","Quelle fonction rhétorique remplit « certes... il n'en demeure pas moins que » ?",["Reconnaître un point valable avant d'introduire une objection tout aussi solide.","Nier complètement le premier point.","Exprimer un doute total sur les deux points.","C'est une formule purement informelle."],0,"C'est une structure de concession-réfutation caractéristique du registre argumentatif soutenu."],
      ["writing","Écris un paragraphe de 80-100 mots qui réfute avec nuance une position sur un sujet controversé (par exemple, l'automatisation de l'emploi), en utilisant au moins deux structures de concession-réfutation.",[],["certes","loin de","en dernière instance"],"Reconnais d'abord le point contraire, puis nuance-le ou réfute-le avec précision.","Article d'opinion pour une revue spécialisée."]
    ]
  },
  {
    id:"fr_c2_style_implication", level:"C2", title:"Style, implication et nuance", emoji:"🔎", xp:92,
    description:"Interprète le sous-entendu et reformule des idées complexes grâce à l'inversion emphatique et à la litote.",
    study:{
      vocab:[
        ["en aucun cas","by no means","Négation emphatique qui inverse le sujet et le verbe."],
        ["être en deçà de","to fall short of"],
        ["un présupposé tacite","a tacit assumption"],
        ["nuancer une affirmation","to qualify a claim"]
      ],
      grammar:[
        ["Inversion après une négation emphatique","Après une expression négative emphatique en tête de phrase ('en aucun cas', 'à aucun moment', 'nulle part'), le sujet et le verbe s'inversent en registre soutenu.","En aucun cas ces résultats ne sauraient être considérés comme définitifs."],
        ["La litote : affirmer en niant le contraire","Nier le contraire d'une idée est un procédé soutenu pour l'affirmer avec prudence et nuance.","Cette proposition n'est pas sans risque, même si ses bénéfices sont évidents."]
      ]
    },
    ex:[
      ["mcq","Quelle reformulation garde le mieux le sens de « Les données sont suggestives, non concluantes » ?",["Les données vont dans un sens, mais ne suffisent pas pour conclure définitivement.","Les données prouvent la conclusion sans aucun doute.","Aucune donnée n'est disponible sur le sujet.","La conclusion est suggestive, mais les données sont définitives."],0,"Conserve la distinction entre indice et preuve concluante."],
      ["fill","Complète l'inversion : « En aucun cas ces résultats ne ___ être considérés comme définitifs. »",["sauraient","sauraient-ils","saurait","sauront"],0,"Le verbe s'accorde avec le sujet pluriel 'ces résultats' : ne sauraient être."],
      ["mcq","Dans « Cette proposition n'est pas sans risque », quelle est la fonction de la litote ?",["Affirmer avec nuance que la proposition comporte bien un risque.","Nier totalement que la proposition comporte un risque.","Affirmer que la proposition est totalement sûre.","N'apporter aucun sens supplémentaire."],0,"« N'est pas sans » nie le contraire pour affirmer quelque chose avec prudence."],
      ["translate","Traduis : « By no means should this decision be treated as final. »",["En aucun cas cette décision ne devrait être considérée comme définitive.","Cette décision est définitive en aucun cas.","Devrait être considérée en aucun cas cette décision.","Cette décision en aucun cas définitive devrait être."],0,"« En aucun cas » + inversion est l'équivalent soutenu de « by no means »."],
      ["writing","Rédige 60-80 mots sur une décision d'entreprise controversée : utilise au moins une inversion emphatique ('en aucun cas'/'à aucun moment') et une litote.",[],["en aucun cas","n'est pas sans","à aucun moment"],"Le niveau C2 combine précision argumentative et procédés rhétoriques de nuance.","Chronique d'opinion pour une revue spécialisée."]
    ]
  },
  {
    id:"fr_c2_rhetoric_tone", level:"C2", title:"Rhétorique, ton et effet stylistique", emoji:"🎭", xp:94,
    description:"Choisis des procédés rhétoriques et ajuste le ton selon l'auditoire, l'intention et l'effet recherché.",
    study:{
      vocab:[
        ["trouver un équilibre","to strike a balance"],
        ["une question rhétorique","a rhetorical question"],
        ["évoquer","to evoke"],
        ["assumer une responsabilité de façon proportionnée","to acknowledge responsibility proportionately"]
      ],
      grammar:[
        ["Effet stylistique et choix lexical","Le choix d'une structure ou d'un mot peut créer de la proximité, de la distance, de l'urgence ou de l'ironie, sans changer le contenu littéral.","Ce n'est pas entièrement infondé, même si cela pourrait sans doute être amélioré."],
        ["Reformulation pour un registre public formel","Un communiqué public reconnaît l'impact, assume une responsabilité proportionnée et propose une action vérifiable, sans froideur excessive ni dramatisation.","Nous reconnaissons la gêne occasionnée et mettons déjà en place des mesures pour éviter que cela se reproduise."]
      ]
    },
    ex:[
      ["mcq","Quel effet produit généralement la phrase « ce n'est pas entièrement infondé » ?",["Une approbation prudente et délibérément atténuée.","Une approbation enthousiaste et sans réserve.","Un rejet total de l'idée.","Une instruction technique sans jugement."],0,"La double atténuation crée une appréciation réservée, typique du registre soutenu."],
      ["mcq","Quelle version convient le mieux à des excuses publiques formelles ?",["Nous reconnaissons la gêne occasionnée et prenons des mesures immédiates pour éviter que cela se reproduise.","Bon, ce moment était gênant, ça passera.","Ce n'était absolument pas de notre faute.","Tout le monde fait des erreurs, inutile d'insister."],0,"Le registre formel reconnaît l'impact, assume une responsabilité et propose une action concrète."],
      ["fill","Complète : « Le discours cherche à ___ un sentiment de responsabilité partagée. »",["évoquer","invoquer","provoquer","révoquer"],0,"'Évoquer' signifie susciter un sentiment ou une idée chez l'auditeur."],
      ["mcq","Quel est le principal objectif d'une question rhétorique dans un discours persuasif ?",["Impliquer l'auditoire et suggérer une réponse sans la formuler explicitement.","Demander une information que l'orateur ignore réellement.","Semer volontairement la confusion dans l'auditoire.","Changer de sujet discrètement."],0,"La question rhétorique oriente l'auditeur vers une conclusion sans l'énoncer directement."],
      ["writing","Reformule ce message interne brusque en communiqué public de 50-70 mots : « L'équipe a échoué, il faut réparer ça tout de suite. » Reconnais le problème, évite de le dramatiser et propose une action vérifiable.",[],["nous reconnaissons","mesures","éviter que cela se reproduise"],"Évalue la proportion et le ton : ni froideur excessive ni dramatisation inutile.","Communiqué : un service numérique a été interrompu pendant deux heures."]
    ]
  },
  {
    id:"fr_c2_critical_reading", level:"C2", title:"Lecture critique et sous-entendus", emoji:"🧩", xp:96,
    description:"Interprète les présupposés, le langage orienté et les conclusions implicites dans des textes d'opinion.",
    study:{
      vocab:[
        ["laisser entendre","to imply"],
        ["une réserve","a caveat"],
        ["un langage orienté","loaded language"],
        ["tirer une inférence","to draw an inference"]
      ],
      grammar:[
        ["Présupposition","Une phrase peut présenter une idée comme déjà admise, sans la démontrer explicitement.","Même les critiques restants ont accepté le plan révisé."]
      ]
    },
    ex:[
      ["mcq","Que présuppose la phrase « Même les critiques restants ont accepté le plan révisé » ?",["Qu'il y a eu des critiques et que certains s'étaient déjà ralliés avant.","Que personne n'a jamais critiqué le plan.","Que le plan a été entièrement rejeté.","Qu'aucun plan révisé n'existe."],0,"« Même » et « restants » présentent l'information comme déjà partagée et orientent l'inférence."],
      ["mcq","Quelle est une lecture critique appropriée de « une solution audacieuse à un système dépassé » ?",["L'adjectif 'dépassé' évalue le système et prédispose le lecteur en faveur de la solution.","La phrase est totalement neutre et ne comporte aucun jugement.","La solution a déjà prouvé son efficacité.","Elle ne contient aucune évaluation implicite."],0,"'Dépassé' est un langage orienté, pas un fait démontré objectivement."],
      ["fill","Complète : « L'article comporte une ___ importante : les résultats n'ont pas été reproduits. »",["réserve","idée","conséquence","comparaison"],0,"Une 'réserve' limite la portée d'une affirmation."],
      ["mcq","Dans « Il est temps de redonner du bon sens à la politique publique », qu'implique le verbe 'redonner' ?",["Il laisse entendre que le bon sens existait avant et a été perdu, sans le démontrer.","Il affirme avec des données que la politique actuelle manque de bon sens.","C'est une description neutre, sans aucune charge évaluative.","Il propose une politique concrète et vérifiable."],0,"'Redonner' présuppose une perte antérieure, une stratégie rhétorique courante sans preuve."],
      ["speaking","Analyse en 50-70 mots une phrase persuasive de ton choix : identifie un présupposé, un mot orienté et une inférence raisonnable.",[],["présuppose","langage","inférence"],"Il ne suffit pas d'être d'accord ou en désaccord : explique comment le langage oriente l'interprétation.","Phrase d'exemple : « Il est temps de mettre fin à cette pratique dépassée. »"]
    ]
  },
  {
    id:"fr_a1_dates_time", level:"A1", title:"Dates, jours et mois", emoji:"📅", xp:35,
    description:"Apprends les jours de la semaine, les mois et comment parler des dates en français.",
    study: {
      vocab: [
        ["lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"],
        ["janvier, février, mars... décembre", "January, February, March... December"],
        ["Quel jour sommes-nous aujourd'hui ?", "What day is it today?"],
        ["Aujourd'hui, c'est le 5 mai.", "Today is May 5th.", "En français: \"le\" + numéro + mois, sans \"de\"."],
        ["C'est quand, ton anniversaire ?", "When is your birthday?"]
      ],
      grammar: [
        ["L'article avec les jours", "Les jours de la semaine s'écrivent en minuscule et utilisent \"le\" pour une habitude.", "Je vais à la salle de sport le lundi. (chaque lundi)"]
      ]
    },
    ex:[
      ["mcq","Comment dit-on \"Wednesday\" en français ?",["Mercredi","Mardi","Jeudi","Vendredi"],0,"\"Mercredi\" est le troisième jour de la semaine en français."],
      ["mcq","Quelle est la bonne façon de demander la date d'aujourd'hui ?",["Quel jour sommes-nous aujourd'hui ?","Quelle heure est-il ?","Quel âge as-tu ?","Où habites-tu ?"],0,"\"Quel jour sommes-nous ?\" sert à demander le jour ou la date."],
      ["fill","Complète : \"Mon anniversaire est ___ 10 mars.\"",["le","la","en","les"],0,"Avec une date précise, on utilise \"le\" : \"le 10 mars\"."],
      ["translate","Traduis : \"Today is Monday.\"",["Aujourd'hui, c'est lundi.","Aujourd'hui, c'est mardi.","Hier, c'était lundi.","Aujourd'hui, c'est un lundi."],0,"\"Today is Monday\" = \"Aujourd'hui, c'est lundi\", sans article devant le jour."],
      ["arrange","Remets dans l'ordre : [salle / vais / je / lundi / la / à / de sport / le]",["Je vais à la salle de sport le lundi","Le lundi vais je à la salle de sport","À la salle de sport je vais le lundi","Je le lundi vais à la salle de sport"],0,"Sujet + verbe + complément + \"le lundi\" : \"Je vais à la salle de sport le lundi.\""],
      ["writing","Écris 3 phrases (20-30 mots) en français sur ta semaine : quel jour on est, quand est ton anniversaire, et ce que tu fais un jour précis.",[],["aujourd'hui","anniversaire","le"],"Inclus au moins un jour de la semaine et un mois. Vérifie l'usage de \"le\"."]
    ]
  },
  {
    id:"fr_a2_directions_transport", level:"A2", title:"En ville : indications et transports", emoji:"🧭", xp:42,
    description:"Demande et donne des indications, et parle des moyens de transport en français.",
    study: {
      vocab: [
        ["Comment est-ce que je vais à... ?", "How do I get to...?"],
        ["Continuez tout droit / Tournez à gauche / à droite", "Go straight ahead / Turn left / right"],
        ["l'arrêt de bus, la gare", "the bus stop, the train station"],
        ["C'est à deux rues d'ici.", "It's two blocks from here."],
        ["Combien de temps ça prend pour y aller ?", "How long does it take to get there?"]
      ],
      grammar: [
        ["L'impératif pour donner des indications", "Pour donner des instructions, on utilise l'impératif (vous/tu).", "Continuez tout droit et tournez à droite au feu."]
      ]
    },
    ex:[
      ["mcq","Tu veux aller au musée. Que demandes-tu ?",["Comment est-ce que je vais au musée ?","Quelle heure est le musée ?","À qui est le musée ?","Combien coûte le bus ?"],0,"\"Comment est-ce que je vais à...?\" est la question standard pour demander son chemin."],
      ["mcq","Quelqu'un te dit : \"Continuez tout droit et tournez à gauche sur la place.\" Que dois-tu faire en premier ?",["Marcher tout droit.","Tourner à droite.","Prendre le bus.","Redemander."],0,"\"Continuez tout droit\" est la première instruction ; le virage vient après."],
      ["fill","Complète : \"La gare ___ à deux rues d'ici.\"",["est","es","a","fait"],0,"\"Est\" s'accorde avec le sujet singulier \"la gare\" : \"La gare est à deux rues d'ici.\""],
      ["translate","Traduis : \"Turn right at the traffic light.\"",["Tournez à droite au feu.","Tournez à gauche sur la place.","Continuez tout droit au feu.","Arrêtez-vous au feu."],0,"\"Turn right\" = \"Tournez à droite\" ; \"at the traffic light\" = \"au feu\"."],
      ["arrange","Remets dans l'ordre : [bus / prenez / arrêt / le / à / l']",["Prenez le bus à l'arrêt","Le bus prenez à l'arrêt","À l'arrêt prenez le bus","Prenez à l'arrêt le bus"],0,"Verbe + objet + complément de lieu : \"Prenez le bus à l'arrêt.\""],
      ["speaking","Explique en français, en 40-60 mots, comment aller de chez toi à un endroit proche. Utilise au moins deux indications et un moyen de transport.",[],["tournez","tout droit","minutes"],"Organise l'explication dans l'ordre : d'abord, ensuite, enfin."]
    ]
  },
  {
    id:"fr_b1_job_interview", level:"B1", title:"Le travail : entretiens et routine professionnelle", emoji:"💼", xp:60,
    description:"Parle de ton expérience professionnelle et réponds à des questions d'entretien en français.",
    study: {
      vocab: [
        ["Que faites-vous dans la vie ?", "What do you do for a living?"],
        ["j'ai de l'expérience en...", "I have experience in..."],
        ["mes points forts / faibles", "my strengths / weaknesses"],
        ["travailler en équipe, respecter les délais", "to work as a team, to meet deadlines"],
        ["un contrat à temps plein / partiel", "a full-time / part-time contract"]
      ],
      grammar: [
        ["Le passé composé pour l'expérience", "On utilise le passé composé pour parler d'une expérience professionnelle passée.", "J'ai travaillé dans le service client pendant trois ans."],
        ["Connecteurs pour structurer une réponse", "\"D'un côté... de l'autre\" aide à organiser avantages et inconvénients.", "D'un côté j'aime le travail d'équipe ; de l'autre, j'apprécie une certaine autonomie."]
      ]
    },
    ex:[
      ["mcq","En entretien, on te demande : \"Que faites-vous dans la vie ?\". Quelle est une réponse appropriée ?",["Je travaille comme graphiste dans une agence.","Oui, merci, très bien.","J'ai vingt-cinq ans.","J'habite au centre-ville."],0,"\"Que faites-vous dans la vie ?\" demande ta profession ou ton métier."],
      ["mcq","Quelle réponse décrit le mieux un point fort de façon professionnelle ?",["Je suis doué pour organiser des projets et respecter les délais.","Je suis le meilleur de tous, sans aucun doute.","Je n'ai aucun point faible.","Je travaille quand j'en ai envie."],0,"Une bonne réponse est précise et vérifiable, sans exagération."],
      ["fill","Complète : \"J'___ travaillé dans la vente pendant deux ans.\"",["ai","es","est","suis"],0,"\"J'ai travaillé\" (passé composé) décrit une expérience passée pertinente aujourd'hui."],
      ["translate","Traduis : \"I have experience working in a team.\"",["J'ai de l'expérience en travail d'équipe.","J'ai expérience travail équipe.","Équipe j'ai de l'expérience travail.","J'ai de l'expérience travailler équipe est."],0,"\"I have experience working in a team\" = \"J'ai de l'expérience en travail d'équipe.\""],
      ["arrange","Remets dans l'ordre : [aime / travailler / équipe / j' / en]",["J'aime travailler en équipe","Aime j'travailler en équipe","En équipe j'aime travailler","Travailler j'aime en équipe"],0,"\"J'aime\" + infinitif : \"J'aime travailler en équipe.\""],
      ["writing","Écris en français une réponse d'entretien de 45-65 mots à la question \"Pourquoi voulez-vous ce poste ?\". Mentionne ton expérience, un point fort et ta motivation.",[],["expérience","parce que","j'aimerais"],"Structure : expérience pertinente + point fort + motivation concrète.","Entretien pour un poste dans le service client."]
    ]
  },
  {
    id:"fr_b2_media_literacy", level:"B2", title:"Médias : analyser les informations", emoji:"📰", xp:78,
    description:"Distingue les faits des opinions et évalue la fiabilité d'une nouvelle en français.",
    study: {
      vocab: [
        ["une source fiable / peu fiable", "a reliable / unreliable source"],
        ["selon des sources proches du dossier", "according to sources close to the case"],
        ["un titre sensationnaliste", "a sensationalist headline"],
        ["recouper les informations", "to cross-check information"],
        ["un fait vérifié, une opinion", "a verified fact, an opinion"]
      ],
      grammar: [
        ["Verbes d'attribution", "\"Selon\", \"affirme que\", \"souligne que\" indiquent d'où vient une affirmation et son degré de certitude.", "Selon le rapport, les ventes ont augmenté de 10 %."],
        ["Distinguer fait et opinion", "Un fait peut être vérifié ; une opinion exprime un jugement de valeur.", "L'article affirme (opinion) que la mesure va 'sans doute' échouer, alors que les données (fait) restent préliminaires."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases est un fait vérifiable, et non une opinion ?",["Le rapport montre que le chômage a baissé de 2 % ce trimestre.","Cette politique est clairement un désastre.","Tout le monde sait que cette mesure ne marchera pas.","Il est évident que le gouvernement a tort."],0,"Un fait vérifiable cite une source et une donnée concrète, sans jugement de valeur."],
      ["mcq","Titre : « Chaos total ! La ville au bord de la crise après une nouvelle règle. » Que suggère le style du titre ?",["Il vise un impact émotionnel plutôt qu'une information précise.","C'est un résumé neutre et objectif des faits.","Il cite une source officielle vérifiable.","Il ne contient aucun jugement de valeur."],0,"Le langage exagéré (\"chaos total\", \"au bord de la crise\") est typique du sensationnalisme."],
      ["fill","Complète : \"___ des sources proches du projet, le lancement sera retardé d'un mois.\"",["Selon","Bien que","Parce que","Cependant"],0,"\"Selon\" introduit la source d'une information, signalant qu'elle n'est pas confirmée par le média lui-même."],
      ["translate","Traduis : \"It is important to cross-check information before sharing it.\"",["Il est important de recouper les informations avant de les partager.","Il est important de partager les informations avant de les vérifier.","Il est important information partager important.","Recouper c'est partager des informations importantes avant."],0,"\"Cross-check information\" = \"recouper les informations\" ; \"before sharing it\" = \"avant de les partager.\""],
      ["mcq","Un article dit : « Les experts avertissent que le chiffre pourrait être surestimé. » Quel degré de certitude cela transmet-il ?",["Une possibilité raisonnable, pas une certitude absolue.","Une certitude totale et vérifiée.","Une opinion personnelle du journaliste sans aucune source.","Un fait déjà prouvé avec des données définitives."],0,"\"Pourrait être\" indique une probabilité, pas une affirmation catégorique."],
      ["writing","Écris en français une analyse de 55-75 mots sur une nouvelle (réelle ou inventée) : identifie un fait vérifiable, une opinion, et évalue la fiabilité de la source.",[],["selon","fait","opinion"],"Sépare clairement ce qui est une donnée citée et ce qui est un jugement de l'auteur."]
    ]
  },
  {
    id:"fr_c1_figurative_language", level:"C1", title:"Langage figuré et expressions idiomatiques", emoji:"🗯️", xp:88,
    description:"Interprète des expressions idiomatiques et des métaphores courantes en français.",
    study: {
      vocab: [
        ["coûter les yeux de la tête", "to cost an arm and a leg"],
        ["être entre le marteau et l'enclume", "to be between a rock and a hard place"],
        ["se moquer de quelqu'un", "to pull someone's leg"],
        ["ne pas mâcher ses mots", "to not mince words"],
        ["se prendre en main", "to get one's act together"]
      ],
      grammar: [
        ["Interpréter les expressions en contexte", "Le sens d'une expression idiomatique n'est presque jamais littéral ; il faut le déduire du contexte.", "\"Ce voyage m'a coûté les yeux de la tête\" ne parle pas d'yeux réels, mais d'une dépense très élevée."]
      ]
    },
    ex:[
      ["mcq","\"Cette voiture m'a coûté les yeux de la tête.\" Que signifie l'expression ?",["Elle était très chère.","Elle était très bon marché.","La voiture a été endommagée.","Elle a eu un accident."],0,"\"Coûter les yeux de la tête\" signifie qu'une chose avait un prix très élevé."],
      ["mcq","Quelqu'un dit : \"Je suis entre le marteau et l'enclume avec cette décision.\" Que transmet cette phrase ?",["La personne fait face à deux options difficiles, sans issue confortable.","La personne se sent totalement sereine à propos de sa décision.","La personne n'a aucune option à considérer.","La personne a déjà pris sa décision sans aucun doute."],0,"L'expression décrit une situation sans option clairement bonne."],
      ["fill","Complète : \"Arrête de te ___ de moi, je sais que ce n'est pas vrai.\"",["moquer","rire","jouer","amuser"],0,"\"Se moquer de quelqu'un\" (dans ce sens léger) équivaut à \"to pull someone's leg\"."],
      ["translate","Traduis de façon naturelle (pas littérale) : \"No tiene pelos en la lengua.\"",["Elle ne mâche pas ses mots.","Elle n'a pas de poils sur la langue.","Sa langue n'a pas de poils.","Elle jamais mâche mots pas."],0,"\"No tener pelos en la lengua\" équivaut à \"ne pas mâcher ses mots\" en français."],
      ["mcq","Dans quel contexte \"se prendre en main\" conviendrait-il le mieux ?",["Encourager quelqu'un à devenir plus organisé et déterminé.","Expliquer comment charger un appareil électronique.","Décrire la météo d'une ville.","S'excuser formellement."],0,"\"Se prendre en main\" est une expression familière pour encourager quelqu'un à s'organiser."],
      ["speaking","Choisis une expression française de cette leçon et explique en 45-65 mots dans quelle situation tu l'utiliserais, et son sens littéral face à son sens réel.",[],["signifie","situation","littéralement"],"Distingue clairement le sens littéral (parfois absurde) du sens idiomatique réel."]
    ]
  },
  {
    id:"fr_c2_irony_humor", level:"C2", title:"Ironie, humour et ambiguïté délibérée", emoji:"😏", xp:94,
    description:"Reconnaît l'ironie, le sarcasme et l'ambiguïté intentionnelle dans un français de niveau avancé.",
    study: {
      vocab: [
        ["Quelle chance, tiens !", "Just my luck! (ironique)"],
        ["avec les meilleures intentions du monde (ironique)", "with the best of intentions (ironic)"],
        ["un double sens", "a double meaning"],
        ["dire quelque chose sur un ton sarcastique", "to say something with a sarcastic tone"],
        ["minimiser volontairement quelque chose (litote)", "to understate something"]
      ],
      grammar: [
        ["Marqueurs de l'ironie", "L'ironie se signale souvent par le contexte, l'intonation ou un contraste évident entre ce qui est dit et la réalité, plutôt que par des mots explicites.", "\"Comme tu es ponctuel !\" dit à quelqu'un arrivé en retard est ironique à cause du contraste."],
        ["Ambiguïté délibérée", "On choisit parfois une expression ambiguë exprès pour ne pas s'engager pleinement sur une position.", "\"On pourrait dire que le projet a eu... des résultats intéressants.\""]
      ]
    },
    ex:[
      ["mcq","Quelqu'un arrive en retard d'une heure et une autre personne dit : \"Comme tu es ponctuel !\". Que communique vraiment cette phrase ?",["Le contraire de ce qui est dit : la personne était très en retard.","Un compliment sincère sur la ponctualité.","Une question sur l'heure.","Des excuses pour son propre retard."],0,"Le contraste entre ce qui est dit et la réalité évidente est la marque typique de l'ironie."],
      ["mcq","\"Avec les meilleures intentions du monde, il a annulé la réunion sans prévenir personne.\" Quelle nuance apporte cette expression ici ?",["Un ton ironique : elle signale que l'action n'a pas été vraiment réfléchie.","Un compliment sincère envers la personne.","Une explication littérale et neutre du fait.","Des excuses formelles de la part du narrateur."],0,"Le contraste entre la phrase et l'action (annuler sans prévenir) crée un effet ironique."],
      ["fill","\"On pourrait dire que le projet a eu... des résultats ___.\" (ambiguïté délibérée, sans s'engager)",["intéressants","excellents","catastrophiques","parfaits"],0,"\"Intéressants\" est délibérément ambigu : cela ne confirme ni ne nie le succès du projet."],
      ["translate","Traduis avec la même nuance ironique : \"Genial, otro lunes.\" (dit avec agacement)",["Super, encore un lundi.","Le lundi est un jour formidable.","Quelle joie, c'est vendredi.","Je déteste totalement les lundis."],0,"Le ton ironique se maintient avec \"Super\" suivi de quelque chose d'objectivement peu enthousiasmant."],
      ["mcq","Quelle fonction remplit la litote dans \"Le séisme a causé... quelques dégâts mineurs\" alors qu'il fut en réalité dévastateur ?",["Elle minimise délibérément la gravité pour créer un effet ironique ou critique.","Elle décrit la situation de façon totalement littérale et précise.","Elle exagère l'ampleur de l'événement.","Elle élimine toute interprétation ironique possible."],0,"La litote contraste l'ampleur réelle avec une description minimisée, créant un effet ironique."],
      ["writing","Écris en français un court commentaire (50-70 mots) avec une ironie subtile sur une situation quotidienne agaçante (les embouteillages, une longue file d'attente...), sans insultes ni langage explicite.",[],["quelle chance","super","bien sûr"],"L'ironie doit se percevoir par le contraste entre le ton positif et la situation négative, pas en l'affirmant directement."]
    ]
  },
  {
    id:"fr_a1_house_rooms", level:"A1", title:"La maison : pièces et meubles", emoji:"🏠", xp:35,
    description:"Apprends le vocabulaire des pièces, des meubles et des objets d'une maison en français.",
    study: {
      vocab: [
        ["la cuisine, la salle de bain, la chambre, le salon", "the kitchen, the bathroom, the bedroom, the living room"],
        ["le lit, la table, la chaise, le canapé", "the bed, the table, the chair, the sofa"],
        ["Où est la cuisine ?", "Where is the kitchen?"],
        ["Le lit est dans la chambre.", "The bed is in the bedroom."],
        ["sur, sous, à côté de", "on top of, under, next to"]
      ],
      grammar: [
        ["\"Il y a\" pour situer des objets", "\"Il y a\" s'utilise pour dire ce qui se trouve dans un lieu, au singulier comme au pluriel.", "Il y a une table dans la cuisine. Il y a deux chaises à côté."]
      ]
    },
    ex:[
      ["mcq","Où dors-tu normalement ?",["Dans la chambre.","Dans la cuisine.","Dans la salle de bain.","Dans le salon."],0,"\"La chambre\" est la pièce où l'on dort."],
      ["mcq","Quelle est la bonne façon de demander où se trouve quelque chose ?",["Où est la cuisine ?","Qu'est-ce que la cuisine ?","Quand est la cuisine ?","Qui est la cuisine ?"],0,"\"Où est... ?\" sert à demander où se trouve quelque chose."],
      ["fill","Complète : \"Le canapé est ___ la fenêtre.\"",["à côté de","sur","sous","derrière"],0,"\"À côté de\" indique que deux choses sont l'une près de l'autre."],
      ["translate","Traduis : \"The bed is in the bedroom.\"",["Le lit est dans la chambre.","Le lit est dans la cuisine.","La chaise est dans la chambre.","Le lit est la chambre."],0,"\"The bed is in the bedroom\" = \"Le lit est dans la chambre.\""],
      ["arrange","Remets dans l'ordre : [cuisine / table / a / la / une / dans / il / y]",["Il y a une table dans la cuisine","Dans la cuisine il y a une table","La cuisine il y a une table dans","Une table il y a dans la cuisine"],0,"\"Il y a\" + objet + \"dans\" + lieu : \"Il y a une table dans la cuisine.\""],
      ["writing","Décris en 20-30 mots ta maison ou ton appartement en français : quelles pièces il y a et quels meubles se trouvent dans l'une d'elles.",[],["chambre","il y a"],"Mentionne au moins deux pièces et deux meubles."]
    ]
  },
  {
    id:"fr_a2_health_pharmacy", level:"A2", title:"La santé : symptômes et la pharmacie", emoji:"💊", xp:44,
    description:"Décris des symptômes courants et demande de l'aide à la pharmacie ou chez le médecin en français.",
    study: {
      vocab: [
        ["J'ai mal à la tête / au ventre / à la gorge.", "My head / stomach / throat hurts."],
        ["J'ai de la fièvre, je tousse, j'ai des nausées.", "I have a fever, a cough, nausea."],
        ["Avez-vous quelque chose contre le mal de tête ?", "Do you have something for a headache?"],
        ["Prenez un comprimé toutes les huit heures.", "Take one pill every eight hours."],
        ["prendre rendez-vous chez le médecin", "to make a doctor's appointment"]
      ],
      grammar: [
        ["\"Avoir mal à\" pour décrire la douleur", "\"Avoir mal à\" + article contracté (au/à la/à l') exprime une douleur.", "J'ai mal à la tête. / J'ai mal aux pieds."]
      ]
    },
    ex:[
      ["mcq","Tu as mal à la tête. Que dis-tu ?",["J'ai mal à la tête.","J'aime ma tête.","J'ai ma tête.","Je suis ma tête."],0,"\"J'ai mal à la tête\" décrit le symptôme avec \"avoir mal à\"."],
      ["mcq","À la pharmacie, que demandes-tu pour obtenir un médicament ?",["Avez-vous quelque chose contre le mal de tête ?","Où est le mal de tête ?","Quand est le mal de tête ?","Pourquoi avez-vous mal à la tête ?"],0,"\"Avez-vous quelque chose contre... ?\" est la façon naturelle de demander un médicament."],
      ["fill","Complète : \"J'ai mal ___ pieds après avoir couru.\"",["aux","au","à la","à l'"],0,"\"Pieds\" est pluriel, donc on utilise \"aux\" : \"J'ai mal aux pieds.\""],
      ["translate","Traduis : \"I have a fever and a cough.\"",["J'ai de la fièvre et je tousse.","J'ai fièvre et tousse.","Je suis fièvre et je tousse.","J'ai mal fièvre et tousse."],0,"\"I have a fever and a cough\" = \"J'ai de la fièvre et je tousse.\""],
      ["arrange","Remets dans l'ordre : [huit / heures / comprimé / toutes / un / prenez / les]",["Prenez un comprimé toutes les huit heures","Toutes les huit heures prenez un comprimé","Un comprimé prenez toutes les huit heures","Prenez toutes les huit heures un comprimé"],0,"Impératif + objet + fréquence : \"Prenez un comprimé toutes les huit heures.\""],
      ["speaking","Décris en français, en 40-60 mots, une fois où tu t'es senti(e) mal : quels symptômes tu avais et ce que tu as fait.",[],["j'avais mal","j'avais","je suis allé(e)"],"Utilise au moins deux symptômes et une action que tu as prise pour te sentir mieux."]
    ]
  },
  {
    id:"fr_b1_tech_social_media", level:"B1", title:"Technologie et réseaux sociaux", emoji:"📱", xp:58,
    description:"Parle de l'usage de la technologie et des réseaux sociaux, de leurs avantages et de leurs risques.",
    study: {
      vocab: [
        ["publier, partager, commenter", "to post, to share, to comment"],
        ["être connecté / se déconnecter", "to be online / to log off"],
        ["la vie privée, les données personnelles", "privacy, personal data"],
        ["dépendre de son téléphone", "to be dependent on your phone"],
        ["rester en contact avec", "to keep in touch with"]
      ],
      grammar: [
        ["Comparer avantages et inconvénients", "\"D'un côté... de l'autre\" et \"alors que\" aident à comparer deux idées.", "D'un côté les réseaux aident à rester en contact ; de l'autre, ils peuvent prendre beaucoup de temps."]
      ]
    },
    ex:[
      ["mcq","Quel est un avantage réel des réseaux sociaux ?",["Ils aident à rester en contact avec des amis éloignés.","Ils disent toujours toute la vérité.","Ils n'affectent jamais la vie privée.","Ils ne nécessitent aucune connexion internet."],0,"Rester en contact avec des personnes éloignées est un avantage concret et vérifiable."],
      ["mcq","Quelle phrase exprime une préoccupation pour la vie privée ?",["Je m'inquiète de la façon dont ils utilisent mes données personnelles.","J'adore tout partager sans réfléchir.","Je n'utilise jamais internet.","Je publie des photos toutes les cinq minutes."],0,"La préoccupation pour les données personnelles est un thème central de la vie privée numérique."],
      ["fill","Complète : \"___ un côté j'aime être connecté, de l'autre j'ai besoin de me déconnecter parfois.\"",["D'","En","De","À"],0,"\"D'un côté... de l'autre\" est la structure pour comparer deux idées."],
      ["translate","Traduis : \"I try not to depend on my phone too much.\"",["J'essaie de ne pas trop dépendre de mon téléphone.","J'essaie de ne pas dépendre beaucoup mon téléphone.","Je n'essaie pas dépendre de mon téléphone.","Dépendre de mon téléphone j'essaie de ne pas."],0,"\"Dépendre de\" + nom : \"dépendre de mon téléphone\"."],
      ["arrange","Remets dans l'ordre : [contact / m'aide / rester / à / en / avec des amis]",["Ça m'aide à rester en contact avec des amis","M'aide ça à rester en contact avec des amis","À rester m'aide ça en contact avec des amis","Ça m'aide en contact à rester avec des amis"],0,"\"Ça m'aide à\" + infinitif : \"Ça m'aide à rester en contact avec des amis.\""],
      ["writing","Écris en français 45-65 mots sur ta relation avec les réseaux sociaux : un avantage, un risque et ce que tu fais pour équilibrer les deux.",[],["d'un côté","de l'autre","vie privée"],"Structure : avantage + risque + une action concrète pour équilibrer les deux."]
    ]
  },
  {
    id:"fr_b2_ethical_dilemmas", level:"B2", title:"Dilemmes éthiques : argumenter pour et contre", emoji:"⚖️", xp:80,
    description:"Présente et pèse des arguments sur des dilemmes éthiques courants en français.",
    study: {
      vocab: [
        ["pour / contre", "in favor of / against"],
        ["d'un point de vue éthique", "from an ethical point of view"],
        ["le bien commun, l'intérêt individuel", "the common good, individual interest"],
        ["justifier une décision", "to justify a decision"],
        ["il n'y a pas de réponse unique", "there is no single answer"]
      ],
      grammar: [
        ["Structurer un argument équilibré", "Présenter d'abord un argument, puis le contraire, et conclure avec une position nuancée évite le parti pris.", "Certains soutiennent que..., alors que d'autres affirment que... À mon avis, les deux positions ont du sens."]
      ]
    },
    ex:[
      ["mcq","Quelle phrase présente un argument de façon équilibrée ?",["Certains soutiennent que..., alors que d'autres affirment que...","Tout le monde sait que j'ai raison.","Il est évident que l'autre position a tort.","Il n'y a aucun argument contraire."],0,"Présenter les deux côtés avant de donner son avis est propre à un argument équilibré au niveau B2."],
      ["mcq","Un dilemme éthique typique est « le bien commun face à l'intérêt individuel ». Que signifie cela ?",["Un conflit entre ce qui profite à tous et ce qui profite à une seule personne.","Une décision qui n'affecte personne.","Un sujet sans aucune importance sociale.","Un choix purement économique sans aucune éthique."],0,"Le dilemme surgit quand le meilleur pour la communauté ne coïncide pas avec le meilleur pour un individu."],
      ["fill","Complète : \"___ un point de vue éthique, la décision est discutable.\"",["D'","Pour","Par","Avec"],0,"\"D'un point de vue éthique\" est l'expression standard pour introduire une perspective."],
      ["translate","Traduis : \"There is no single answer to this dilemma.\"",["Il n'y a pas de réponse unique à ce dilemme.","Il n'y a pas une réponse unique ce dilemme.","Ce dilemme il n'y a pas de réponse unique.","Une réponse unique il n'y a pas pour ce dilemme."],0,"\"There is no single answer\" = \"Il n'y a pas de réponse unique.\""],
      ["mcq","Laquelle de ces phrases justifie une décision de façon raisonnée, non émotionnelle ?",["Cette décision a été prise parce que les bénéfices dépassaient les risques à long terme.","Cette décision a été prise comme ça, un point c'est tout.","Cette décision a été prise parce que tout le monde le voulait sans réfléchir.","Cette décision a été prise parce que c'est ce qu'on a toujours fait."],0,"Une justification raisonnée compare explicitement bénéfices et risques."],
      ["writing","Choisis un dilemme éthique quotidien (par exemple, dire un pieux mensonge) et écris en français 55-75 mots présentant un argument pour, un argument contre et ta conclusion nuancée.",[],["pour","contre","cependant"],"Structure : argument pour + argument contre + conclusion nuancée, non absolue."]
    ]
  },
  {
    id:"fr_c1_academic_citing", level:"C1", title:"Discours académique : citer et paraphraser", emoji:"🎓", xp:90,
    description:"Apprends à citer des sources, paraphraser des idées et éviter le plagiat dans un registre académique.",
    study: {
      vocab: [
        ["selon (auteur, année)", "according to (author, year)"],
        ["comme le souligne/soutient l'auteur", "as the author points out/argues"],
        ["paraphraser une idée", "to paraphrase an idea"],
        ["citer textuellement", "to quote directly"],
        ["le plagiat, les sources fiables", "plagiarism, reliable sources"]
      ],
      grammar: [
        ["Verbes pour introduire des citations", "\"Soutient que\", \"affirme que\", \"souligne que\" varient la nuance : tous n'impliquent pas le même degré de certitude.", "L'auteur soutient que la politique fut une erreur ; d'autres chercheurs, cependant, soulignent des nuances importantes."],
        ["Paraphraser sans copier la structure", "Paraphraser implique de changer à la fois les mots et l'ordre des idées, pas seulement quelques synonymes.", "Original : « L'étude montre que l'exercice réduit le stress. » Paraphrase : « Selon la recherche, l'activité physique aide à diminuer les niveaux de stress. »"]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces options est une paraphrase correcte, pas une copie déguisée ?",["Selon la recherche, l'activité physique aide à diminuer les niveaux de stress.","L'étude montre que l'exercice réduit totalement le stress.","L'étude montre en effet que l'exercice réduit le stress.","Montre l'étude que réduit le stress l'exercice."],0,"Une bonne paraphrase change la structure et le vocabulaire, pas seulement un ou deux mots."],
      ["mcq","Quel verbe transmet la plus grande distance critique vis-à-vis de l'auteur cité ?",["L'auteur suggère que...","L'auteur prouve catégoriquement que...","L'auteur démontre sans aucun doute que...","L'auteur confirme définitivement que..."],0,"\"Suggère\" indique une affirmation plus prudente, propre à une analyse critique rigoureuse."],
      ["fill","Complète : \"___ le souligne le rapport, la mesure a eu un impact limité.\"",["Comme","Parce que","Bien que","Cependant"],0,"\"Comme le souligne le rapport\" introduit une idée attribuée à une source de façon fluide."],
      ["translate","Traduis : \"According to the author, the results are inconclusive.\"",["Selon l'auteur, les résultats sont peu concluants.","Selon l'auteur, les résultats sont concluants.","L'auteur selon résultats peu concluants.","Les résultats selon l'auteur sont concluants pas."],0,"\"According to the author\" = \"Selon l'auteur\" ; \"inconclusive\" = \"peu concluants\"."],
      ["mcq","Laquelle de ces pratiques constitue un plagiat académique ?",["Copier une phrase textuelle sans guillemets ni référence à la source.","Citer textuellement entre guillemets avec sa référence.","Paraphraser une idée et citer la source originale.","Résumer un article en mentionnant d'où il provient."],0,"Copier sans guillemets ni référence, même une seule phrase, est considéré comme du plagiat."],
      ["writing","Écris un paragraphe académique de 55-75 mots en français qui paraphrase (sans copier) cette idée : « L'accès à internet a profondément changé la façon dont les gens s'informent. » Cite la source comme (Auteur, 2023).",[],["selon","soutient","(Auteur, 2023)"],"Ne copie pas la phrase originale : change la structure et le vocabulaire tout en conservant l'idée."]
    ]
  },
  {
    id:"fr_c2_logical_fallacies", level:"C2", title:"Sophismes logiques et persuasion", emoji:"🧠", xp:96,
    description:"Détecte les sophismes logiques et les stratégies de persuasion dans des arguments de haut niveau.",
    study: {
      vocab: [
        ["l'attaque personnelle (ad hominem)", "ad hominem attack"],
        ["la fausse dichotomie", "false dichotomy"],
        ["la pente glissante", "slippery slope"],
        ["généraliser à partir d'un seul cas", "to generalize from a single case"],
        ["faire appel à l'émotion plutôt qu'aux faits", "to appeal to emotion instead of facts"]
      ],
      grammar: [
        ["Identifier les sophismes dans le discours", "Un sophisme ressemble à un argument valide mais sa structure logique est défectueuse, même s'il sonne persuasif.", "\"Si nous permettons cela, tout deviendra bientôt incontrôlable\" est une pente glissante : cela suppose une chaîne de conséquences sans preuve."]
      ]
    },
    ex:[
      ["mcq","\"Tu ne devrais pas écouter son argument économique : de toute façon, c'est quelqu'un de désagréable.\" Quel sophisme est-ce ?",["Attaque personnelle (ad hominem) : elle discrédite la personne, pas l'argument.","Fausse dichotomie : elle réduit les options à seulement deux.","Pente glissante : elle prédit une chaîne de conséquences.","Généralisation hâtive à partir d'un seul cas."],0,"L'ad hominem attaque l'émetteur de l'argument plutôt que de réfuter l'argument lui-même."],
      ["mcq","\"Soit tu soutiens cette loi exactement telle quelle, soit la sécurité de personne ne t'importe.\" Quel sophisme est-ce ?",["Fausse dichotomie : elle présente seulement deux options alors que plus de nuances sont possibles.","Une attaque personnelle contre l'interlocuteur.","Un appel à l'émotion sans aucun argument logique.","Une généralisation basée sur un seul cas isolé."],0,"La fausse dichotomie cache des options intermédiaires valides, en présentant seulement deux extrêmes."],
      ["fill","\"Si nous permettons cette exception, tout le système s'effondrera bientôt.\" Cette phrase est un exemple de ___.",["pente glissante","attaque personnelle","fausse dichotomie","appel à l'autorité"],0,"La pente glissante suppose, sans preuve suffisante, une chaîne inévitable de conséquences négatives."],
      ["translate","Traduis avec précision technique : \"This is a classic false dichotomy.\"",["C'est une fausse dichotomie classique.","C'est une dichotomie fausse classique est.","Classique cette fausse dichotomie est.","Cette fausse est dichotomie classique."],0,"\"False dichotomy\" se traduit techniquement par \"fausse dichotomie\"."],
      ["mcq","Une publicité montre des images d'enfants qui pleurent pour vendre un produit de charité sans donner de données concrètes sur son impact. Quelle stratégie utilise-t-elle principalement ?",["Un appel à l'émotion plutôt qu'aux faits vérifiables.","Un argument logique rigoureux basé sur des données.","Une généralisation statistique précise.","Une citation d'une source académique fiable."],0,"Utiliser des images émotionnelles sans données concrètes, c'est faire appel à l'émotion plutôt qu'à la preuve."],
      ["writing","Identifie et explique en français, en 55-75 mots, un sophisme logique que tu as entendu dans un débat, une publicité ou une discussion récente (réelle ou inventée). Nomme le sophisme et explique pourquoi l'argument est trompeur malgré son apparence convaincante.",[],["sophisme","parce que","bien que cela semble"],"Nomme explicitement le type de sophisme (ad hominem, fausse dichotomie, pente glissante, etc.) et justifie ton identification."]
    ]
  },
  {
    id:"fr_a1_emotions_feelings", level:"A1", title:"Les émotions : comment tu te sens", emoji:"😊", xp:35,
    description:"Apprends à exprimer des émotions et des sentiments de base en français.",
    study: {
      vocab: [
        ["être content, triste, fatigué, en colère", "to be happy, sad, tired, angry"],
        ["Comment tu te sens ?", "How do you feel?"],
        ["Je suis un peu nerveux/nerveuse.", "I'm a bit nervous."],
        ["avoir peur, avoir sommeil, avoir faim", "to be afraid, to be sleepy, to be hungry"],
        ["Pourquoi es-tu triste ?", "Why are you sad?"]
      ],
      grammar: [
        ["\"Être\" avec les émotions", "Les émotions s'expriment avec \"être\" + adjectif.", "Je suis content aujourd'hui. / Elle est fatiguée après le travail."]
      ]
    },
    ex:[
      ["mcq","Comment demandes-tu à quelqu'un comment il se sent ?",["Comment tu te sens ?","Comment tu t'appelles ?","Où habites-tu ?","Quel âge as-tu ?"],0,"\"Comment tu te sens ?\" demande l'état émotionnel de quelqu'un."],
      ["mcq","Tu as beaucoup de travail et peu de repos. Comment te sens-tu ?",["Je suis fatigué(e).","Je suis content(e).","J'ai faim.","J'ai froid."],0,"Beaucoup de travail et peu de repos mènent typiquement à se sentir \"fatigué(e)\"."],
      ["fill","Complète : \"Je ___ un peu nerveux avant l'examen.\"",["suis","es","ai","fais"],0,"Les émotions s'expriment avec \"être\" : \"Je suis un peu nerveux.\""],
      ["translate","Traduis : \"Why are you sad?\"",["Pourquoi es-tu triste ?","Pourquoi être tu triste ?","Pourquoi tu as triste ?","Pourquoi fais-tu triste ?"],0,"\"Why are you sad?\" = \"Pourquoi es-tu triste ?\", avec \"être\" pour un état émotionnel."],
      ["arrange","Remets dans l'ordre : [travail / fatiguée / après / je / suis / le]",["Je suis fatiguée après le travail","Après le travail je suis fatiguée","Fatiguée je suis après le travail","Je suis après le travail fatiguée"],0,"Sujet + \"suis\" + adjectif + complément de temps : \"Je suis fatiguée après le travail.\""],
      ["writing","Écris en français 20-30 mots décrivant comment tu te sens aujourd'hui et pourquoi. Utilise au moins deux émotions différentes.",[],["je suis","parce que","je me sens"],"Mentionne une raison concrète pour chaque émotion que tu décris."]
    ]
  },
  {
    id:"fr_a2_hobbies_weekend", level:"A2", title:"Les loisirs : passe-temps et plans du week-end", emoji:"🎨", xp:44,
    description:"Parle de tes loisirs et de tes plans pour le week-end en français.",
    study: {
      vocab: [
        ["Qu'est-ce que tu aimes faire pendant ton temps libre ?", "What do you like to do in your free time?"],
        ["peindre, jouer d'un instrument, faire de la randonnée", "to paint, to play an instrument, to go hiking"],
        ["Quels sont tes plans pour le week-end ?", "What plans do you have for the weekend?"],
        ["je vais + infinitif", "I'm going to + infinitive"],
        ["retrouver des amis", "to meet up with friends"]
      ],
      grammar: [
        ["\"Aller\" + infinitif pour les projets", "On utilise \"aller\" + infinitif pour parler de projets proches dans le futur.", "Samedi je vais retrouver des amis."]
      ]
    },
    ex:[
      ["mcq","Comment demandes-tu les loisirs de quelqu'un ?",["Qu'est-ce que tu aimes faire pendant ton temps libre ?","Quelle heure est-il ?","Où travailles-tu ?","Combien de frères et sœurs as-tu ?"],0,"\"Qu'est-ce que tu aimes faire pendant ton temps libre ?\" demande spécifiquement les loisirs."],
      ["mcq","Laquelle de ces phrases décrit un projet futur proche ?",["Samedi je vais retrouver des amis.","Samedi j'ai retrouvé des amis.","Samedi je retrouve toujours des amis.","Samedi je retrouvais des amis."],0,"\"Aller\" + infinitif exprime un projet futur concret et proche."],
      ["fill","Complète : \"Ce week-end je ___ faire de la randonnée.\"",["vais","suis","ai","fais"],0,"\"Aller\" + infinitif : \"je vais faire de la randonnée\"."],
      ["translate","Traduis : \"What plans do you have for the weekend?\"",["Quels sont tes plans pour le week-end ?","Quels sont tes plans es le week-end ?","Quels plans tu fais le week-end as ?","Pour le week-end quels plans es-tu ?"],0,"\"What plans do you have for the weekend?\" = \"Quels sont tes plans pour le week-end ?\""],
      ["arrange","Remets dans l'ordre : [instrument / jouer / d'un / j'aime]",["J'aime jouer d'un instrument","Aime j'jouer d'un instrument","D'un instrument j'aime jouer","Jouer j'aime d'un instrument"],0,"\"J'aime\" + infinitif : \"J'aime jouer d'un instrument.\""],
      ["speaking","Explique en français, en 40-60 mots, tes loisirs préférés et tes plans pour le prochain week-end.",[],["j'aime","je vais","retrouver"],"Mentionne au moins deux loisirs et un projet concret en utilisant \"je vais\"."]
    ]
  },
  {
    id:"fr_b1_environment_sustainability", level:"B1", title:"L'environnement : habitudes durables", emoji:"🌱", xp:60,
    description:"Parle de la protection de l'environnement et des habitudes durables en français.",
    study: {
      vocab: [
        ["recycler, réutiliser, réduire la consommation", "to recycle, to reuse, to reduce consumption"],
        ["le changement climatique, l'empreinte carbone", "climate change, carbon footprint"],
        ["les produits à usage unique", "single-use products"],
        ["économiser l'énergie / l'eau", "to save energy / water"],
        ["prendre des mesures pour protéger la planète", "to take steps to protect the planet"]
      ],
      grammar: [
        ["Le futur simple pour les conséquences", "Le futur simple décrit des conséquences probables d'actions actuelles.", "Si nous ne réduisons pas le plastique, la pollution augmentera."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces actions aide à réduire l'empreinte carbone ?",["Utiliser les transports en commun au lieu de la voiture.","Acheter plus de produits à usage unique.","Laisser les lumières allumées toute la journée.","Utiliser la voiture pour de très courts trajets."],0,"Les transports en commun réduisent les émissions individuelles de carbone."],
      ["mcq","Quelle phrase décrit correctement une conséquence future probable ?",["Si nous ne réduisons pas le plastique, la pollution augmentera.","Si nous ne réduisons pas le plastique, la pollution a augmenté.","Si nous ne réduisons pas le plastique, la pollution augmente hier.","Si nous ne réduisons pas le plastique, pollution augmenter."],0,"Le futur simple (\"augmentera\") exprime une conséquence probable d'une condition actuelle."],
      ["fill","Complète : \"Il est important d'___ l'eau, surtout en été.\"",["économiser","dépenser","jeter","acheter"],0,"\"Économiser l'eau\" est l'expression correcte pour réduire sa consommation."],
      ["translate","Traduis : \"We should reduce the use of single-use products.\"",["Nous devrions réduire l'utilisation de produits à usage unique.","Nous devrions réduire l'utilisation de produit à usage unique.","Réduire nous devrions produits à usage unique l'utilisation.","Nous devrions utiliser produits à usage unique réduire."],0,"\"Single-use products\" = \"produits à usage unique\" ; \"we should reduce\" = \"nous devrions réduire\"."],
      ["arrange","Remets dans l'ordre : [recycler / important / est / le verre / il]",["Il est important de recycler le verre","Le verre il est important de recycler","Important il est de recycler le verre","Il est de recycler important le verre"],0,"\"Il est important de\" + infinitif + objet : \"Il est important de recycler le verre.\""],
      ["writing","Écris en français 45-65 mots sur trois habitudes durables que tu pratiques ou aimerais commencer à pratiquer, et pourquoi elles sont importantes.",[],["recycler","économiser","empreinte carbone"],"Mentionne au moins trois habitudes concrètes et une raison pour chacune."]
    ]
  },
  {
    id:"fr_b2_ai_future_work", level:"B2", title:"L'intelligence artificielle et l'avenir du travail", emoji:"🤖", xp:80,
    description:"Discute de l'impact de l'intelligence artificielle sur le travail, avec des arguments nuancés en français.",
    study: {
      vocab: [
        ["automatiser des tâches répétitives", "to automate repetitive tasks"],
        ["remplacer des postes de travail", "to replace jobs"],
        ["s'adapter à de nouveaux outils", "to adapt to new tools"],
        ["générer de nouvelles opportunités professionnelles", "to generate new job opportunities"],
        ["ça dépend de la façon dont c'est mis en œuvre", "it depends on how it's implemented"]
      ],
      grammar: [
        ["Le futur antérieur pour la spéculation", "\"Aura\" + participe passé spécule sur ce qui se sera probablement produit à un moment futur donné.", "D'ici 2030, l'IA aura changé de nombreux secteurs."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases présente une position nuancée sur l'IA et l'emploi ?",["Ça dépend de la façon dont c'est mis en œuvre : ça peut automatiser des tâches mais aussi créer des emplois.","L'IA va détruire tous les emplois, sans exception.","L'IA n'affecte absolument pas l'emploi.","Il n'y a aucun doute sur l'avenir du travail."],0,"Une position nuancée reconnaît les deux effets possibles, sans absolus."],
      ["mcq","Que signifie \"automatiser des tâches répétitives\" ?",["Faire qu'une machine effectue des tâches qu'une personne faisait auparavant manuellement et de façon répétée.","Embaucher plus de personnes pour des tâches répétitives.","Éliminer complètement toutes les tâches d'une entreprise.","Augmenter le salaire de ceux qui font des tâches répétitives."],0,"Automatiser signifie qu'un système effectue la tâche à la place d'une personne."],
      ["fill","Complète : \"D'ici 2030, l'intelligence artificielle ___ changé de nombreux secteurs.\"",["aura","avait","a","aurait"],0,"Le futur antérieur (\"aura changé\") spécule sur quelque chose qui se sera probablement produit d'ici une date future."],
      ["translate","Traduis : \"Some jobs will be automated, but new ones will also be created.\"",["Certains emplois seront automatisés, mais de nouveaux seront aussi créés.","Certains emplois automatiseront, mais nouveaux créeront aussi.","Seront automatisés certains emplois, mais nouveaux créeront.","Certains emplois seront automatisés, mais aussi nouveaux créés."],0,"Les deux propositions sont au futur simple : \"seront automatisés\" et \"seront créés\"."],
      ["mcq","Laquelle de ces affirmations montre une pensée critique, et non une opinion sans fondement ?",["L'impact de l'IA sur l'emploi dépendra du secteur et de la façon dont la transition est gérée.","L'IA est toujours bonne pour tout le monde, sans exception.","L'IA est toujours mauvaise pour tout le monde, sans exception.","Ça ne vaut pas la peine de penser à l'avenir du travail."],0,"Reconnaître que l'impact dépend de facteurs concrets (secteur, gestion) relève d'une pensée critique et nuancée."],
      ["writing","Écris en français 55-75 mots sur la façon dont tu penses que l'intelligence artificielle changera ton domaine de travail ou d'études dans les prochaines années. Inclus un aspect positif et un préoccupant.",[],["automatiser","dépend de","cependant"],"Évite les absolus : reconnais à la fois les avantages et les risques concrets."]
    ]
  },
  {
    id:"fr_c1_advertising_persuasion", level:"C1", title:"Le langage publicitaire : persuasion et connotation", emoji:"📢", xp:88,
    description:"Analyse comment le langage publicitaire utilise la connotation et les techniques de persuasion.",
    study: {
      vocab: [
        ["une connotation positive / négative", "a positive / negative connotation"],
        ["faire appel au désir d'appartenance", "to appeal to the desire to belong"],
        ["un slogan accrocheur", "a catchy slogan"],
        ["créer un sentiment d'urgence", "to create a sense of urgency"],
        ["le public cible", "the target audience"]
      ],
      grammar: [
        ["Connotation face à dénotation", "La dénotation est le sens littéral d'un mot ; la connotation est la charge émotionnelle ou culturelle associée.", "\"Maison\" (dénotation : bâtiment) face à \"foyer\" (connotation : chaleur, appartenance)."]
      ]
    },
    ex:[
      ["mcq","Une publicité utilise le mot \"foyer\" au lieu de \"maison\". Qu'obtient-elle ainsi ?",["Elle ajoute une connotation émotionnelle de chaleur et d'appartenance.","Elle change complètement le sens littéral.","Elle élimine toute interprétation émotionnelle.","Elle n'a aucun effet sur le message."],0,"\"Foyer\" a des connotations émotionnelles que \"maison\" ne transmet pas de la même façon."],
      ["mcq","« Plus que 3 en stock, achetez maintenant ! » Quelle technique de persuasion utilise cette phrase ?",["Créer un sentiment d'urgence pour motiver une décision rapide.","Faire appel exclusivement à des données techniques objectives.","Offrir une comparaison neutre avec d'autres produits.","Décrire le produit sans aucune pression."],0,"Mentionner un stock limité et l'urgence pousse à décider sans trop réfléchir."],
      ["fill","Complète : \"Cette publicité s'adresse à un public ___ très spécifique : les jeunes professionnels.\"",["cible","texte","auteur","lecteur"],0,"\"Public cible\" est l'expression standard pour désigner l'audience visée par un message."],
      ["translate","Traduis : \"The slogan appeals to the desire to belong.\"",["Le slogan fait appel au désir d'appartenance.","Le slogan appel au désir d'appartenance.","Le désir d'appartenance fait appel au slogan.","Le slogan faire appel au désir d'appartenance."],0,"\"Appeals to\" = \"fait appel à\" ; \"the desire to belong\" = \"le désir d'appartenance\"."],
      ["mcq","Laquelle de ces expressions a une connotation plus positive que son synonyme plus neutre ?",["\"Exclusif\" face à \"limité\".","\"Produit\" face à \"article\".","\"Acheter\" face à \"acquérir\".","\"Publicité\" face à \"annonce\"."],0,"\"Exclusif\" ajoute une connotation de prestige et de distinction que \"limité\" ne transmet pas de la même façon."],
      ["writing","Choisis une publicité réelle ou inventée et écris en français 55-75 mots analysant : quelles connotations elle utilise, à quel public cible elle s'adresse et quelle technique de persuasion elle emploie.",[],["connotation","public cible","urgence"],"Identifie au moins un mot avec une connotation spécifique et une technique de persuasion concrète."]
    ]
  },
  {
    id:"fr_c2_political_discourse", level:"C2", title:"Le discours politique : ambiguïté stratégique et euphémisme", emoji:"🎙️", xp:96,
    description:"Analyse l'ambiguïté stratégique et l'euphémisme dans le discours politique de haut niveau.",
    study: {
      vocab: [
        ["un euphémisme", "a euphemism"],
        ["l'ambiguïté stratégique", "strategic ambiguity"],
        ["éluder une question directe", "to dodge a direct question"],
        ["un ajustement budgétaire (euphémisme pour une coupe)", "a budget adjustment (euphemism for a cut)"],
        ["s'engager sans vraiment s'engager", "to commit without fully committing"]
      ],
      grammar: [
        ["Reconnaître l'euphémisme politique", "Un euphémisme remplace une expression directe par une autre plus douce, souvent pour adoucir une réalité inconfortable.", "\"Ajustement budgétaire\" sonne plus neutre que \"coupe budgétaire\", bien que ça décrive la même chose."],
        ["Ambiguïté stratégique", "Les politiciens choisissent parfois délibérément des phrases vagues pour éviter de s'engager sur une position claire.", "\"Nous évaluons toutes les options\" ne dit pas quelle option sera réellement retenue."]
      ]
    },
    ex:[
      ["mcq","Un politicien dit « ajustement budgétaire » au lieu de « coupe budgétaire ». Qu'obtient-il ainsi ?",["Il adoucit l'impact négatif de la mesure grâce à un euphémisme.","Il change complètement le sens de la mesure.","Il rend la mesure plus transparente et directe.","Il élimine toute interprétation négative possible."],0,"L'euphémisme adoucit la perception sans changer la réalité de la mesure."],
      ["mcq","« Nous évaluons toutes les options » dit face à une question directe. Quelle fonction remplit cette phrase ?",["Elle élude un engagement clair grâce à une ambiguïté stratégique.","Elle donne une réponse totalement transparente et spécifique.","Elle confirme exactement quelle décision sera prise.","Elle nie catégoriquement toute décision possible."],0,"Cette phrase évite de s'engager sur une position concrète, en gardant en apparence toutes les options ouvertes."],
      ["fill","Complète : \"Le gouvernement a annoncé un ___ budgétaire qui impliquait en réalité des coupes importantes.\"",["ajustement","aumentation","cadeau","prix"],0,"\"Ajustement budgétaire\" est l'euphémisme typique pour \"coupe\"."],
      ["translate","Traduis avec précision : \"Politicians sometimes commit without fully committing.\"",["Les politiciens s'engagent parfois sans vraiment s'engager.","Les politiciens engagent parfois sans engager vraiment.","Parfois les politiciens vraiment s'engagent sans engager.","Les politiciens s'engagent parfois vraiment sans s'engager."],0,"\"Commit without fully committing\" = \"s'engager sans vraiment s'engager\", capturant l'ambiguïté intentionnelle."],
      ["mcq","Laquelle de ces phrases est un exemple clair d'ambiguïté stratégique ?",["Nous n'excluons aucune possibilité pour le moment.","Le budget sera réduit exactement de 12 % cette année.","La loi entrera en vigueur le 1er janvier, sans exception.","Je démissionnerai de mon poste la semaine prochaine."],0,"\"Nous n'excluons aucune possibilité\" n'engage à rien de concret, laissant toutes les portes ouvertes."],
      ["writing","Écris en français 55-75 mots analysant un euphémisme ou un cas d'ambiguïté stratégique que tu as observé dans un discours politique réel ou inventé. Explique quelle phrase directe il évite et pourquoi.",[],["euphémisme","au lieu de","évite de s'engager"],"Identifie la phrase exacte, le sens plus direct qu'elle remplace, et l'effet recherché sur l'audience."]
    ]
  },
  {
    id:"fr_a1_money_prices", level:"A1", title:"Nombres ordinaux, argent et prix", emoji:"💰", xp:36,
    description:"Apprends à parler de prix, d'argent et de nombres ordinaux en français.",
    study: {
      vocab: [
        ["premier, deuxième, troisième...", "first, second, third..."],
        ["Combien ça coûte ?", "How much does this cost?"],
        ["Ça coûte dix euros.", "It costs ten euros."],
        ["bon marché, cher", "cheap, expensive"],
        ["payer en espèces / par carte", "to pay in cash / by card"]
      ],
      grammar: [
        ["\"Coûter\" pour les prix", "\"Coûte\" (singulier) et \"coûtent\" (pluriel) s'accordent avec ce qui est acheté.", "Le livre coûte dix euros. Les livres coûtent vingt euros."]
      ]
    },
    ex:[
      ["mcq","Comment demandes-tu le prix de quelque chose ?",["Combien ça coûte ?","Qu'est-ce que c'est ?","Où est-ce ?","Quand est-ce ?"],0,"\"Combien ça coûte ?\" est la question standard pour demander un prix."],
      ["mcq","Un produit à 5 euros est moins cher qu'un à 50 euros. Quel mot décrit celui à 5 euros ?",["Bon marché.","Cher.","Gratuit.","Grand."],0,"\"Bon marché\" décrit quelque chose de prix bas par rapport à autre chose."],
      ["fill","Complète : \"Les chaussures ___ quarante euros.\"",["coûtent","coûte","est","sont"],0,"\"Coûtent\" s'accorde au pluriel avec \"les chaussures\"."],
      ["translate","Traduis : \"It costs ten euros.\"",["Ça coûte dix euros.","Ça coûtent dix euros.","C'est dix euros coûte.","Ça a dix euros."],0,"\"It costs ten euros\" (singulier) = \"Ça coûte dix euros.\""],
      ["arrange","Remets dans l'ordre : [carte / je / toujours / par / paie]",["Je paie toujours par carte","Toujours je paie par carte","Par carte toujours je paie","Je paie par carte toujours"],0,"Sujet + verbe + adverbe + complément : \"Je paie toujours par carte.\""],
      ["writing","Écris en français 20-30 mots sur tes habitudes d'achat : ce que tu achètes normalement, si tu préfères payer en espèces ou par carte, et si tu cherches des choses bon marché.",[],["coûte","bon marché","paie"],"Utilise au moins un nombre ordinal ou un prix concret dans ta réponse."]
    ]
  },
  {
    id:"fr_a2_restaurant_ordering", level:"A2", title:"Au restaurant : commander et payer l'addition", emoji:"🍽️", xp:45,
    description:"Apprends à commander, poser des questions au serveur et payer l'addition dans un restaurant.",
    study: {
      vocab: [
        ["Je voudrais commander...", "I would like to order..."],
        ["Qu'est-ce que vous me conseillez ?", "What do you recommend?"],
        ["L'addition, s'il vous plaît ?", "Could you bring me the bill, please?"],
        ["Le service est-il compris ?", "Is the tip included?"],
        ["Pour moi, le menu du jour.", "For me, the set menu."]
      ],
      grammar: [
        ["\"Je voudrais\" pour commander poliment", "\"Je voudrais\" (conditionnel de \"vouloir\") est plus poli que \"je veux\" pour commander.", "Je voudrais commander la soupe et le poulet, s'il vous plaît."]
      ]
    },
    ex:[
      ["mcq","Quelle est la façon la plus polie de commander dans un restaurant ?",["Je voudrais commander la soupe, s'il vous plaît.","Je veux la soupe maintenant.","Donnez-moi la soupe.","Soupe, maintenant."],0,"\"Je voudrais\" est la forme polie et formelle pour commander quelque chose."],
      ["mcq","Tu as fini de manger et tu veux payer. Que dis-tu ?",["L'addition, s'il vous plaît ?","Le menu, s'il vous plaît ?","Qu'est-ce que vous me conseillez ?","Cette table est-elle libre ?"],0,"\"L'addition, s'il vous plaît ?\" est la phrase standard pour demander à payer."],
      ["fill","Complète : \"Je ___ commander le poisson avec de la salade, s'il vous plaît.\"",["voudrais","veux maintenant","donne","ai"],0,"\"Je voudrais commander\" est la forme polie standard pour passer une commande."],
      ["translate","Traduis : \"Is the tip included?\"",["Le service est-il compris ?","Le service est compris ?","Est le service compris-il ?","Compris est-il le service ?"],0,"\"Is the tip included?\" = \"Le service est-il compris ?\""],
      ["arrange","Remets dans l'ordre : [conseillez / vous / que / me / qu'est-ce]",["Qu'est-ce que vous me conseillez","Vous qu'est-ce que me conseillez","Me conseillez qu'est-ce que vous","Que vous me conseillez qu'est-ce"],0,"Question avec \"qu'est-ce que\" au début : \"Qu'est-ce que vous me conseillez ?\""],
      ["speaking","Représente en français, en 40-60 mots, une conversation brève dans un restaurant : commande un plat, demande une recommandation et demande l'addition à la fin.",[],["je voudrais","conseillez","l'addition"],"Inclus les trois parties : commande, question au serveur et demande de l'addition."]
    ]
  },
  {
    id:"fr_b1_personal_finance", level:"B1", title:"Finances personnelles : la banque et le budget", emoji:"🏦", xp:62,
    description:"Parle de comptes bancaires, d'épargne et de budget personnel en français.",
    study: {
      vocab: [
        ["ouvrir un compte bancaire", "to open a bank account"],
        ["faire un budget mensuel", "to make a monthly budget"],
        ["économiser pour un objectif", "to save up for a goal"],
        ["les dépenses fixes et les dépenses variables", "fixed expenses and variable expenses"],
        ["contracter un prêt, payer en plusieurs fois", "to take out a loan, to pay in installments"]
      ],
      grammar: [
        ["Le conditionnel pour des conseils financiers", "\"Tu devrais\" + infinitif donne un conseil sans paraître trop direct.", "Tu devrais économiser au moins 10 % de ton salaire chaque mois."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases donne un conseil financier de façon appropriée ?",["Tu devrais économiser un peu chaque mois, même si c'est peu.","Économise maintenant, il n'y a pas d'autre option.","Épargner ne sert à rien.","Tu ne pourras jamais rien économiser."],0,"\"Tu devrais\" + infinitif donne un conseil de façon polie et raisonnable."],
      ["mcq","Quelle est la différence entre dépenses fixes et variables ?",["Les fixes se répètent chaque mois au même montant ; les variables changent.","Les fixes changent chaque mois ; les variables sont toujours identiques.","Il n'y a aucune différence réelle entre elles.","Les variables n'existent que pour les entreprises, pas pour les particuliers."],0,"Les dépenses fixes (le loyer, par exemple) restent stables ; les variables (loisirs, nourriture) changent chaque mois."],
      ["fill","Complète : \"Je vais ___ un nouveau compte bancaire ce mois-ci.\"",["ouvrir","fermer","dépenser","perdre"],0,"\"Ouvrir un compte bancaire\" est la collocation correcte pour créer un nouveau compte."],
      ["translate","Traduis : \"You should make a monthly budget.\"",["Tu devrais faire un budget mensuel.","Tu devrais faire budget mensuel un.","Un budget mensuel tu devrais faire.","Tu devrais un budget mensuel faire."],0,"\"You should make a monthly budget\" = \"Tu devrais faire un budget mensuel.\""],
      ["arrange","Remets dans l'ordre : [économiser / objectif / pour / un / veux / je]",["Je veux économiser pour un objectif","Pour un objectif je veux économiser","Économiser je veux pour un objectif","Je veux pour un objectif économiser"],0,"Sujet + \"veux\" + infinitif + complément : \"Je veux économiser pour un objectif.\""],
      ["writing","Écris en français 45-65 mots sur ta relation avec l'argent : comment tu organises ton budget, si tu économises pour quelque chose de concret et une habitude financière que tu aimerais améliorer.",[],["budget","économiser","dépenses"],"Mentionne au moins une dépense fixe, une dépense variable et un objectif d'épargne."]
    ]
  },
  {
    id:"fr_b2_mental_wellbeing", level:"B2", title:"Bien-être et santé mentale : parler avec nuance", emoji:"🧘", xp:82,
    description:"Parle du bien-être émotionnel et de la santé mentale avec un vocabulaire plus nuancé en français.",
    study: {
      vocab: [
        ["se sentir dépassé(e)", "to feel overwhelmed"],
        ["poser des limites, prendre soin de soi", "to set boundaries, to take care of yourself"],
        ["l'épuisement professionnel (burn-out)", "burnout"],
        ["demander de l'aide n'est pas un signe de faiblesse", "asking for help is not a sign of weakness"],
        ["traiter ses émotions", "to process one's emotions"]
      ],
      grammar: [
        ["Le subjonctif avec les expressions de recommandation", "\"Il est important que\" + subjonctif recommande une action liée au bien-être.", "Il est important que tu parles de ce que tu ressens à quelqu'un de confiance."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases utilise correctement le subjonctif pour donner une recommandation ?",["Il est important que tu te reposes quand tu en as besoin.","Il est important que tu te reposes quand tu as besoin de.","Il important que tu te reposer quand besoin.","Il est important tu te reposes quand as besoin."],0,"\"Il est important que\" exige le subjonctif : \"que tu te reposes\"."],
      ["mcq","Que signifie \"se sentir dépassé(e)\" ?",["Sentir qu'il y a trop de choses à gérer à la fois.","Se sentir extrêmement heureux et calme.","Ne rien ressentir du tout.","Ressentir de la curiosité pour quelque chose de nouveau."],0,"\"Dépassé\" décrit une sensation de trop-plein de tâches ou d'émotions difficiles à gérer."],
      ["fill","Complète : \"Poser des ___ est important pour prendre soin de ton bien-être.\"",["limites","argent","vêtements","nourriture"],0,"\"Poser des limites\" est l'expression correcte pour protéger son propre bien-être émotionnel."],
      ["translate","Traduis : \"Asking for help is not a sign of weakness.\"",["Demander de l'aide n'est pas un signe de faiblesse.","Demander de l'aide n'est pas une faible signe.","Demander de l'aide n'est signe de faiblesse pas.","Ne pas demander de l'aide est un signe de faiblesse."],0,"\"Asking for help is not a sign of weakness\" = \"Demander de l'aide n'est pas un signe de faiblesse.\""],
      ["mcq","Laquelle de ces phrases reflète un traitement sain d'une émotion, et non son évitement ?",["Je reconnais que je suis triste et je me donne du temps pour comprendre pourquoi.","Je fais comme si de rien n'était et j'ignore ce que je ressens.","Je me distrais constamment pour ne rien ressentir.","Je dis à tout le monde que je vais parfaitement bien, même si ce n'est pas vrai."],0,"Reconnaître et explorer une émotion, plutôt que de l'éviter, est un traitement émotionnel sain."],
      ["writing","Écris en français 55-75 mots sur une stratégie que tu utilises (ou aimerais utiliser) pour prendre soin de ton bien-être émotionnel quand tu te sens dépassé(e).",[],["dépassé","limites","traiter"],"Utilise au moins une structure de recommandation avec le subjonctif (\"il est important que...\")."]
    ]
  },
  {
    id:"fr_c1_legal_language", level:"C1", title:"Langage juridique de base : contrats et clauses", emoji:"📜", xp:90,
    description:"Comprends le vocabulaire et les structures de base du langage juridique dans les contrats.",
    study: {
      vocab: [
        ["les parties contractantes", "the contracting parties"],
        ["une clause, une annexe", "a clause, an appendix"],
        ["résilier un contrat", "to terminate a contract"],
        ["être soumis aux termes et conditions", "to be subject to the terms and conditions"],
        ["en cas de manquement", "in the event of a breach"]
      ],
      grammar: [
        ["Le langage formel impersonnel dans les contrats", "Les contrats utilisent des structures impersonnelles et passives pour paraître objectifs et éviter l'ambiguïté sur qui agit.", "Le présent contrat pourra être résilié par l'une ou l'autre des parties moyennant un préavis de 30 jours."],
        ["\"Dans le cas où\" + conditionnel", "Cette structure formelle introduit des conditions juridiques hypothétiques.", "Dans le cas où l'une des parties manquerait à ses obligations, une pénalité s'appliquerait."]
      ]
    },
    ex:[
      ["mcq","Que signifie \"résilier un contrat\" ?",["Mettre fin ou annuler un contrat avant son terme prévu.","Signer un nouveau contrat.","Modifier seulement une clause du contrat.","Renouveler automatiquement un contrat."],0,"\"Résilier\" signifie mettre fin à un contrat, généralement avant son échéance naturelle."],
      ["mcq","Laquelle de ces phrases utilise correctement le langage formel impersonnel typique d'un contrat ?",["Le présent contrat pourra être résilié par l'une ou l'autre des parties.","N'importe qui peut casser ce contrat s'il le veut.","Quelqu'un peut annuler ça quand il en a envie.","On peut annuler le contrat comme ça, sans raison."],0,"Le langage contractuel formel utilise des constructions passives et impersonnelles, en évitant un ton familier."],
      ["fill","Complète : \"___ le cas où l'une des parties manquerait à ses obligations, une pénalité s'appliquerait.\"",["Dans","Parce que","Bien que","Cependant"],0,"\"Dans le cas où\" + conditionnel introduit une condition juridique hypothétique."],
      ["translate","Traduis : \"The contract is subject to the terms and conditions described in Appendix A.\"",["Le contrat est soumis aux termes et conditions décrits dans l'Annexe A.","Le contrat est soumis les termes et conditions décrits dans l'Annexe A.","Le contrat est soumis aux termes et conditions dans l'Annexe A décrits.","Soumis le contrat est aux termes de l'Annexe A."],0,"\"Subject to\" = \"soumis à\" ; \"described in Appendix A\" = \"décrits dans l'Annexe A\"."],
      ["mcq","Que sont \"les parties contractantes\" ?",["Les personnes ou entités qui signent et s'engagent dans un contrat.","Seulement la personne qui rédige le contrat.","Les sections ou chapitres d'un contrat.","Les témoins qui ne signent pas le contrat."],0,"\"Les parties contractantes\" désigne ceux qui signent le contrat et en assument les obligations."],
      ["writing","Écris en français 55-75 mots en rédigeant une clause simple d'un contrat fictif (par exemple, sur les délais de livraison ou les conditions d'annulation), en utilisant un registre formel et impersonnel.",[],["les parties","dans le cas où","résilier"],"Utilise au moins une construction passive ou impersonnelle, propre au registre juridique formel."]
    ]
  },
  {
    id:"fr_c2_literary_criticism", level:"C2", title:"Critique littéraire : voix narrative et style", emoji:"📖", xp:97,
    description:"Analyse la voix narrative, le style et les choix formels d'un texte littéraire en français.",
    study: {
      vocab: [
        ["la voix narrative", "the narrative voice"],
        ["un narrateur fiable / peu fiable", "a reliable / unreliable narrator"],
        ["le point de vue (première, troisième personne)", "point of view (first, third person)"],
        ["le ton et le registre d'un texte", "the tone and register of a text"],
        ["une technique narrative (analepse, ellipse)", "a narrative technique (flashback, ellipsis)"]
      ],
      grammar: [
        ["Analyser les choix formels de l'auteur", "L'analyse littéraire avancée relie un choix formel (point de vue, temps verbal) à son effet sur le lecteur.", "L'usage de la première personne crée de la proximité, mais limite aussi la perspective à ce que le narrateur peut savoir ou percevoir."]
      ]
    },
    ex:[
      ["mcq","Qu'est-ce qui caractérise un \"narrateur peu fiable\" ?",["Sa version des faits peut être biaisée, incomplète ou trompeuse.","Il dit toujours la vérité absolue sur tout ce qui se passe.","Il n'a jamais d'opinion sur les faits qu'il raconte.","Il n'apparaît que dans des textes scientifiques, jamais en fiction."],0,"Un narrateur peu fiable offre une perspective que le lecteur doit questionner, par biais, ignorance ou tromperie."],
      ["mcq","Quel effet produit généralement la narration à la première personne ?",["Elle crée une proximité avec le narrateur, mais limite la perspective à ce qu'il sait.","Elle supprime toute connexion émotionnelle avec le lecteur.","Elle garantit toujours une vision objective des faits.","Elle n'est utilisée que dans les textes non littéraires."],0,"La première personne rapproche le lecteur du narrateur, au prix d'une vision nécessairement partielle des faits."],
      ["fill","Complète : \"L'utilisation d'une ___ interrompt la chronologie pour montrer un événement passé.\"",["analepse","postface","préface","table des matières"],0,"Une \"analepse\" (flashback) est la technique narrative qui interrompt la chronologie linéaire pour montrer le passé."],
      ["translate","Traduis avec précision technique : \"The narrator's unreliability forces the reader to question every claim.\"",["Le manque de fiabilité du narrateur oblige le lecteur à questionner chaque affirmation.","Le manque fiabilité narrateur oblige lecteur questionner affirmation.","Le narrateur peu fiable oblige questionner au lecteur chaque affirmation est.","Questionner chaque affirmation oblige le manque de fiabilité du narrateur au lecteur."],0,"\"Unreliability\" se traduit par \"manque de fiabilité\"; la structure doit sonner naturelle en français académique."],
      ["mcq","Laquelle de ces analyses relie correctement un choix formel à son effet sur le lecteur ?",["Le présent narratif crée une sensation d'immédiateté, comme si les faits se déroulaient maintenant.","L'auteur a utilisé le présent parce que c'est plus facile à écrire.","Le présent n'a aucun effet sur la perception de l'histoire.","Le présent n'est utilisé qu'en poésie, jamais dans le récit."],0,"Une bonne analyse littéraire relie le choix formel (temps verbal) à un effet concret sur l'expérience de lecture."],
      ["writing","Choisis un conte, un roman ou un récit que tu connais (ou invente-en un bref) et écris en français 55-75 mots analysant sa voix narrative : point de vue, fiabilité du narrateur et un effet que cela produit sur le lecteur.",[],["voix narrative","point de vue","effet"],"Relie explicitement un choix formel de l'auteur à un effet concret sur la lecture, ne te contente pas de décrire l'intrigue."]
    ]
  },
  {
    id:"fr_a1_professions_jobs", level:"A1", title:"Les métiers : qu'est-ce que tu fais dans la vie ?", emoji:"👩‍⚕️", xp:36,
    description:"Apprends le vocabulaire de base des métiers et à parler de ton travail en français.",
    study: {
      vocab: [
        ["médecin, professeur/e, ingénieur/e, serveur/serveuse", "doctor, teacher, engineer, waiter/waitress"],
        ["Qu'est-ce que tu fais dans la vie ?", "What do you do for a living?"],
        ["Je suis étudiant(e) / Je travaille dans un bureau.", "I'm a student / I work in an office."],
        ["Où travailles-tu ?", "Where do you work?"],
        ["travailler comme + métier", "to work as + profession"]
      ],
      grammar: [
        ["\"Être\" avec les métiers (sans article)", "Avec les métiers, \"être\" ne prend pas d'article indéfini, contrairement à l'anglais.", "Je suis professeur. (pas \"Je suis un professeur\")"]
      ]
    },
    ex:[
      ["mcq","Comment demandes-tu la profession de quelqu'un ?",["Qu'est-ce que tu fais dans la vie ?","Comment tu t'appelles ?","Où habites-tu ?","Quel âge as-tu ?"],0,"\"Qu'est-ce que tu fais dans la vie ?\" demande spécifiquement la profession."],
      ["mcq","Quelle est la forme correcte pour dire ta profession en français ?",["Je suis professeur.","Je suis un professeur.","J'ai professeur.","Je fais professeur."],0,"En français, \"être\" + métier ne prend pas d'article : \"Je suis professeur.\""],
      ["fill","Complète : \"Ma sœur ___ médecin dans un hôpital.\"",["est","a","fait","travaille est"],0,"\"Être\" s'utilise pour les métiers : \"Ma sœur est médecin.\""],
      ["translate","Traduis : \"I work in an office.\"",["Je travaille dans un bureau.","Je travaille un bureau.","Je suis travail dans un bureau.","Je travaille de bureau."],0,"\"I work in an office\" = \"Je travaille dans un bureau.\""],
      ["arrange","Remets dans l'ordre : [serveur / travaille / restaurant / comme / dans / un]",["Je travaille comme serveur dans un restaurant","Comme serveur je travaille dans un restaurant","Je travaille dans un restaurant comme serveur","Dans un restaurant je travaille comme serveur"],0,"\"Je travaille comme\" + métier + \"dans\" + lieu : \"Je travaille comme serveur dans un restaurant.\""],
      ["writing","Écris en français 20-30 mots sur ta profession (réelle ou imaginée) et où tu travailles. Mentionne au moins deux tâches que tu fais au travail.",[],["je suis","je travaille","comme"],"Utilise \"être\" pour la profession et \"travailler dans/comme\" pour le lieu ou le rôle."]
    ]
  },
  {
    id:"fr_a2_describing_people", level:"A2", title:"Décrire des personnes : apparence et personnalité", emoji:"🧑‍🤝‍🧑", xp:46,
    description:"Apprends à décrire l'apparence physique et la personnalité d'autres personnes en français.",
    study: {
      vocab: [
        ["grand(e), petit(e), mince", "tall, short, slim"],
        ["a les cheveux longs/courts, porte des lunettes", "has long/short hair, wears glasses"],
        ["est sympathique, timide, drôle", "is nice, shy, funny"],
        ["ressemble à sa mère/son père", "looks like his/her mother/father"],
        ["Comment est ton/ta meilleur(e) ami(e) ?", "What is your best friend like?"]
      ],
      grammar: [
        ["\"Être\" pour les caractéristiques, \"avoir\" et \"porter\" pour les traits physiques", "\"Être\" décrit la personnalité et les traits stables ; \"avoir\" et \"porter\" décrivent des parties du corps ou des accessoires.", "Elle est très sympathique, a les cheveux longs et porte des lunettes."]
      ]
    },
    ex:[
      ["mcq","Comment demandes-tu la personnalité de quelqu'un ?",["Comment est ton meilleur ami ?","Comment vas-tu ?","Quelle heure est-il ?","D'où viens-tu ?"],0,"\"Comment est... ?\" demande les caractéristiques ou la personnalité de quelqu'un."],
      ["mcq","Laquelle de ces phrases décrit correctement l'apparence physique de quelqu'un ?",["Il a les cheveux courts et porte des lunettes.","Il est les cheveux courts et porte des lunettes.","Il a sympathique et grand.","Il est a des lunettes."],0,"\"Avoir\" s'utilise pour les parties du corps (\"a les cheveux courts\") et \"porter\" pour les accessoires (\"porte des lunettes\")."],
      ["fill","Complète : \"Mon frère ___ très drôle et fait toujours des blagues.\"",["est","a","porte","fait"],0,"\"Être\" décrit un trait de personnalité stable : \"est très drôle\"."],
      ["translate","Traduis : \"She has long hair and wears glasses.\"",["Elle a les cheveux longs et porte des lunettes.","Elle est les cheveux longs et porte des lunettes.","Elle a cheveux longs et est lunettes.","Elle porte les cheveux longs et a des lunettes mises."],0,"\"Has long hair\" = \"a les cheveux longs\" ; \"wears glasses\" = \"porte des lunettes\"."],
      ["arrange","Remets dans l'ordre : [mère / ressemble / sa / à / elle]",["Elle ressemble à sa mère","À sa mère elle ressemble","Ressemble elle à sa mère","Elle à sa mère ressemble"],0,"\"Ressemble à\" + personne : \"Elle ressemble à sa mère.\""],
      ["speaking","Décris en français, en 40-60 mots, une personne que tu connais bien : son apparence physique et trois traits de sa personnalité.",[],["a","est","porte"],"Inclus au moins deux traits physiques et deux de personnalité."]
    ]
  },
  {
    id:"fr_b1_education_learning", level:"B1", title:"L'éducation : systèmes scolaires et habitudes d'étude", emoji:"🎒", xp:60,
    description:"Parle des systèmes éducatifs, des méthodes d'étude et des expériences scolaires en français.",
    study: {
      vocab: [
        ["l'éducation obligatoire / supérieure", "compulsory / higher education"],
        ["réussir/échouer à un examen", "to pass/fail an exam"],
        ["mémoriser face à comprendre", "to memorize versus to understand"],
        ["un programme d'études, une matière", "a curriculum, a school subject"],
        ["apprendre à son propre rythme", "to learn at your own pace"]
      ],
      grammar: [
        ["Les comparatifs pour comparer des systèmes", "\"Plus... que\", \"moins... que\" et \"aussi... que\" servent à comparer des méthodes ou des systèmes éducatifs.", "Ce système est plus pratique que le traditionnel, bien qu'il ne soit pas aussi structuré que celui-là."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases compare correctement deux systèmes éducatifs ?",["Ce système est plus pratique que le traditionnel.","Ce système est pratique plus le traditionnel.","Ce système est aussi pratique le traditionnel.","Ce système plus pratique est que traditionnel."],0,"\"Plus... que\" est la structure comparative correcte en français."],
      ["mcq","Quelle est la différence entre mémoriser et comprendre ?",["Mémoriser, c'est répéter de l'information ; comprendre implique saisir son sens et l'appliquer.","C'est exactement la même chose, sans aucune différence.","Mémoriser est toujours mieux que comprendre.","Comprendre est plus rapide que mémoriser."],0,"Mémoriser consiste à retenir des données ; comprendre implique un traitement plus profond du sens."],
      ["fill","Complète : \"J'ai beaucoup étudié, mais j'ai quand même ___ l'examen.\"",["échoué à","réussi","mémorisé","compris"],0,"Le contexte (\"mais quand même\") suggère un résultat négatif : \"échoué à l'examen\"."],
      ["translate","Traduis : \"I prefer to learn at my own pace.\"",["Je préfère apprendre à mon propre rythme.","Je préfère apprendre mon propre rythme.","Je préfère à apprendre mon propre rythme.","Je préfère mon propre rythme apprendre à."],0,"\"To learn at your own pace\" = \"apprendre à son propre rythme\"."],
      ["arrange","Remets dans l'ordre : [matière / préférée / est / mathématiques / ma]",["Ma matière préférée est mathématiques","Est ma matière préférée mathématiques","Mathématiques est ma matière préférée","Ma préférée matière est mathématiques"],0,"Sujet + \"est\" + complément : \"Ma matière préférée est mathématiques.\""],
      ["writing","Écris en français 45-65 mots comparant deux façons d'étudier ou deux systèmes éducatifs que tu connais (par exemple, cours en présentiel face à en ligne), et dis lequel tu préfères et pourquoi.",[],["plus...que","comprendre","à mon propre rythme"],"Utilise au moins une structure comparative explicite."]
    ]
  },
  {
    id:"fr_b2_sustainable_cities", level:"B2", title:"Villes durables : urbanisme et mobilité", emoji:"🚲", xp:82,
    description:"Discute de propositions d'urbanisme et de mobilité durable dans les villes, avec des arguments nuancés.",
    study: {
      vocab: [
        ["les transports en commun, la piste cyclable", "public transport, the bike lane"],
        ["piétonniser le centre-ville", "to pedestrianize the city center"],
        ["réduire la circulation et la pollution", "to reduce traffic and pollution"],
        ["un espace vert, une zone piétonne", "a green space, a pedestrian zone"],
        ["investir dans des infrastructures durables", "to invest in sustainable infrastructure"]
      ],
      grammar: [
        ["Le subjonctif avec des expressions de doute ou d'opinion", "\"Je ne pense pas que\" et \"il est possible que\" exigent le subjonctif pour exprimer un doute ou une opinion sur des propositions urbaines.", "Je ne pense pas que piétonniser tout le centre soit la seule solution possible."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases utilise correctement le subjonctif pour exprimer un doute ?",["Je ne pense pas que cette mesure soit suffisante à elle seule.","Je ne pense pas que cette mesure est suffisante à elle seule.","Je ne pense pas cette mesure soit suffisante.","Je ne pense pas que cette mesure être suffisante."],0,"\"Je ne pense pas que\" exige le subjonctif : \"que...soit\"."],
      ["mcq","Que signifie \"piétonniser le centre-ville\" ?",["Restreindre ou supprimer la circulation des véhicules pour privilégier les piétons.","Construire plus de routes dans le centre.","Augmenter le nombre de voitures autorisées dans le centre.","Supprimer tous les commerces du centre."],0,"\"Piétonniser\" signifie convertir un espace pour l'usage prioritaire des piétons, en limitant les véhicules."],
      ["fill","Complète : \"Il est possible que la piste cyclable ___ la circulation dans cette zone.\"",["réduise","réduit","réduira","a réduit"],0,"\"Il est possible que\" exige le subjonctif : \"que réduise\"."],
      ["translate","Traduis : \"Investing in public transport reduces pollution in the long term.\"",["Investir dans les transports en commun réduit la pollution à long terme.","Investir dans les transports en commun réduire la pollution à long terme.","Investir transports en commun dans réduit la pollution long terme.","Réduit investir dans les transports en commun la pollution à long terme."],0,"\"Investing in public transport reduces pollution\" = \"Investir dans les transports en commun réduit la pollution.\""],
      ["mcq","Laquelle de ces phrases présente une position nuancée sur la mobilité urbaine ?",["Cela dépend du contexte : dans certaines villes la voiture reste nécessaire, dans d'autres non.","La voiture devrait être interdite partout sans exception.","Les transports en commun ne fonctionnent jamais bien dans aucune ville.","Il n'y a aucune solution possible pour le trafic urbain."],0,"Une position nuancée reconnaît que la solution dépend du contexte spécifique de chaque ville."],
      ["writing","Écris en français 55-75 mots en proposant une amélioration de mobilité durable pour une ville que tu connais, en expliquant un bénéfice et une difficulté possible à la mettre en œuvre.",[],["il est possible que","piéton","transports en commun"],"Utilise au moins une structure avec le subjonctif de doute ou d'opinion."]
    ]
  },
  {
    id:"fr_c1_science_communication", level:"C1", title:"Vulgarisation scientifique : communiquer avec précision", emoji:"🔬", xp:90,
    description:"Apprends à communiquer des informations scientifiques complexes de façon claire et précise, sans perdre en rigueur.",
    study: {
      vocab: [
        ["simplifier sans déformer", "to simplify without distorting"],
        ["un résultat préliminaire face à un résultat confirmé", "a preliminary finding versus a confirmed one"],
        ["les preuves scientifiques suggèrent que...", "scientific evidence suggests that..."],
        ["une analogie utile pour expliquer quelque chose de complexe", "a useful analogy to explain something complex"],
        ["éviter le sensationnalisme scientifique", "to avoid scientific sensationalism"]
      ],
      grammar: [
        ["Verbes nuancés pour communiquer l'incertitude scientifique", "\"Suggère\", \"indique\", \"pourrait expliquer\" transmettent différents degrés de certitude scientifique, plus précis que \"prouve\" ou \"démontre\".", "L'étude suggère un lien possible, mais ne prouve pas de causalité."]
      ]
    },
    ex:[
      ["mcq","Laquelle de ces phrases communique un résultat scientifique avec la nuance correcte ?",["L'étude suggère un lien possible, mais ne prouve pas de causalité.","L'étude prouve de façon définitive que ceci cause cela.","Les scientifiques savent déjà tout sur ce sujet.","Ce résultat est certain à cent pour cent, sans aucun doute."],0,"\"Suggère\" et \"ne prouve pas de causalité\" reflètent avec précision le niveau réel de certitude d'un résultat préliminaire."],
      ["mcq","Pourquoi est-il important de \"simplifier sans déformer\" dans la vulgarisation scientifique ?",["Parce qu'une simplification excessive peut changer le sens réel du résultat.","Parce que la science ne devrait jamais être expliquée à des non-experts.","Parce que les détails techniques n'ont aucune importance.","Parce que toute simplification est automatiquement incorrecte."],0,"Simplifier est nécessaire pour toucher davantage de public, mais déformer le sens original est une grave erreur de vulgarisation."],
      ["fill","Complète : \"Ceci est un résultat ___ : d'autres études sont nécessaires pour le confirmer.\"",["préliminaire","confirmé","définitif","absolu"],0,"\"Préliminaire\" indique que le résultat n'est pas encore confirmé de façon concluante."],
      ["translate","Traduis : \"Scientific evidence suggests that this treatment could be effective.\"",["Les preuves scientifiques suggèrent que ce traitement pourrait être efficace.","Les preuves scientifiques suggèrent ce traitement pourrait efficace.","Suggèrent les preuves scientifiques que traitement pourrait être efficace.","Les preuves scientifiques suggèrent que ce traitement être efficace pourrait."],0,"\"Scientific evidence suggests that\" = \"Les preuves scientifiques suggèrent que\", suivi de \"pourrait être\" pour exprimer une possibilité."],
      ["mcq","Un titre dit \"La science le confirme : ce fruit guérit le cancer !\" en se basant sur une seule étude préliminaire chez la souris. Quel est le problème de ce titre ?",["Il exagère un résultat préliminaire et limité comme s'il s'agissait d'une certitude absolue applicable aux humains.","C'est un exemple parfait de vulgarisation scientifique rigoureuse.","Il ne contient aucun sensationnalisme.","Il reflète précisément le niveau de preuve disponible."],0,"Le titre transforme un résultat préliminaire chez la souris en une affirmation absolue sur les humains, un cas clair de sensationnalisme."],
      ["writing","Choisis une découverte scientifique (réelle ou inventée) et écris en français 55-75 mots l'expliquant de façon claire et accessible, en utilisant une analogie et en maintenant la nuance correcte de certitude (évite des mots comme \"prouve\" si le résultat est préliminaire).",[],["suggère","préliminaire","c'est comme"],"Inclus au moins une analogie et un verbe nuancé qui reflète correctement le niveau de certitude."]
    ]
  },
  {
    id:"fr_c2_speech_acts_pragmatics", level:"C2", title:"Pragmatique : ce que nous faisons en disant quelque chose", emoji:"💭", xp:98,
    description:"Analyse les actes de langage et la pragmatique en français : la différence entre ce qui est dit et ce qui est fait en le disant.",
    study: {
      vocab: [
        ["un acte de langage (requête, promesse, ordre)", "a speech act (request, promise, order)"],
        ["le sens littéral face au sens visé", "literal meaning versus intended meaning"],
        ["un acte de langage indirect", "an indirect speech act"],
        ["les conditions de félicité d'un acte de langage", "the felicity conditions of a speech act"],
        ["impliquer quelque chose sans le dire explicitement", "to imply something without saying it explicitly"]
      ],
      grammar: [
        ["Actes de langage directs face à indirects", "Un acte de langage indirect utilise une forme grammaticale (comme une question) pour remplir une autre fonction (comme une requête).", "\"Pourrais-tu fermer la fenêtre ?\" a la forme d'une question, mais sa fonction réelle est une requête, pas une demande d'information."]
      ]
    },
    ex:[
      ["mcq","\"Pourrais-tu me passer le sel ?\" pendant un dîner. Quel acte de langage est-ce, en réalité ?",["Une requête indirecte, même si elle a la forme d'une question.","Une véritable question sur la capacité de l'autre personne.","Un ordre direct et explicite.","Une promesse concernant l'avenir."],0,"Bien qu'elle ait la forme grammaticale d'une question sur la capacité, sa fonction réelle est de demander que quelqu'un passe le sel : c'est une requête indirecte."],
      ["mcq","Un patron dit à un employé : « Il fait un peu froid ici, non ? » près d'une fenêtre ouverte. Que fait-il probablement avec cet énoncé ?",["Il demande indirectement à quelqu'un de fermer la fenêtre.","Il commente simplement le temps sans autre intention.","Il demande la température exacte de la pièce.","Il ordonne explicitement d'éteindre le chauffage."],0,"Le commentaire fonctionne comme une requête indirecte pour que quelqu'un ferme la fenêtre, sans le dire explicitement."],
      ["fill","Complète : \"Dire 'je promets' à voix haute ne suffit pas ; certaines ___ doivent aussi être remplies pour que la promesse soit valide.\"",["conditions de félicité","règles grammaticales","normes orthographiques","questions rhétoriques"],0,"Les \"conditions de félicité\" sont les exigences contextuelles (sincérité, capacité, etc.) pour qu'un acte de langage fonctionne correctement."],
      ["translate","Traduis avec précision technique : \"This is an indirect speech act: its literal form doesn't match its intended function.\"",["Ceci est un acte de langage indirect : sa forme littérale ne correspond pas à sa fonction visée.","Ceci est acte de langage indirect forme littérale ne correspond fonction.","C'est un acte de langage ceci indirect qui ne correspond pas à fonction littérale.","Cet acte de langage est indirect sa forme ne fonction correspond pas."],0,"\"Indirect speech act\" = \"acte de langage indirect\" ; \"literal form\" = \"forme littérale\" ; \"intended function\" = \"fonction visée\"."],
      ["mcq","Lequel de ces énoncés implique quelque chose sans le dire explicitement ?",["« Certains étudiants ont réussi l'examen. » (implique que tous n'ont pas réussi)","« Tous les étudiants ont réussi l'examen. »","« L'examen était lundi à neuf heures. »","« Il y a trente étudiants dans la classe. »"],0,"\"Certains\" implique pragmatiquement \"pas tous\", même si ce n'est pas affirmé littéralement ; c'est une implicature conversationnelle classique."],
      ["writing","Écris en français 55-75 mots analysant un acte de langage indirect d'une conversation quotidienne (réelle ou inventée) : ce qui a été dit littéralement, quelle fonction pragmatique il remplissait en réalité, et comment tu l'as compris grâce au contexte.",[],["acte de langage","littéralement","en réalité"],"Distingue explicitement entre la forme grammaticale littérale de l'énoncé et sa fonction pragmatique réelle."]
    ]
  },
];
