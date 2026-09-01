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
  {
    id:"fr_a1_animals_nature", level:"A1", title:"Les animaux et la nature", emoji:"🐾", xp:36,
    description:"Apprends le vocabulaire des animaux courants et de la nature en français.",
    study: {
      vocab: [
        ["le chien", "the dog"],
        ["le chat", "the cat"],
        ["l'oiseau", "the bird"],
        ["le cheval", "the horse"],
        ["le poisson", "the fish"],
        ["la vache", "the cow"],
        ["la forêt, la montagne, la rivière", "the forest, the mountain, the river"],
      ],
      grammar: [
        ["Le genre des animaux", "Beaucoup de noms d'animaux changent de forme selon le genre, mais d'autres sont invariables.", "Le chat est blanc. / La chatte est blanche. / Le poisson est petit (invariable côté sens)."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «le cheval» en anglais ?",["the dog", "the horse", "the cat", "the bird"],1,"«Cheval» se dit «horse» en anglais."],
      ["mcq","Comment dit-on «l'oiseau» en anglais ?",["the dog", "the fish", "the cow", "the bird"],3,"«Oiseau» se dit «bird» en anglais."],
      ["fill","Completa: “J'aime me promener dans la ___ le dimanche.”",["vache", "forêt", "chat", "poisson"],1,"«Se promener dans la forêt» est une activité typique dans la nature."],
      ["translate","Traduis : «The dog is very friendly.»",["Le chien est très gentil.", "L'oiseau est très gentil.", "Le chat est très gentil.", "Le cheval est très gentil."],0,"«The dog» = «le chien» ; «friendly» = «gentil»."],
      ["arrange","Remets dans l'ordre : [noir / ai / chat / j' / un]",["J'ai un chat noir", "un noir chat J'ai", "noir un chat J'ai", "noir un J'ai chat"],0,"Sujet + verbe + article + nom + adjectif."],
      ["writing","Écris en français 20-30 mots sur un animal que tu aimes et un endroit dans la nature que tu aimes visiter.",[],["j'aime", "la forêt", "l'animal"]],
    ]
  },
  {
    id:"fr_a2_body_parts", level:"A2", title:"Le corps humain : les parties du corps", emoji:"🦴", xp:46,
    description:"Apprends les parties du corps et à décrire des douleurs ou des caractéristiques physiques.",
    study: {
      vocab: [
        ["la tête", "the head"],
        ["le bras", "the arm"],
        ["la jambe", "the leg"],
        ["la main", "the hand"],
        ["le pied", "the foot"],
        ["le dos", "the back"],
      ],
      grammar: [
        ["L'article défini avec les parties du corps", "Avec les parties du corps, on utilise l'article défini, pas le possessif, quand on sait clairement de qui on parle.", "J'ai mal à la tête. (pas «J'ai mal à ma tête»)"],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «le dos» en anglais ?",["the leg", "the back", "the head", "the hand"],1,"«Dos» se dit «back» en anglais."],
      ["mcq","Comment dit-on «le pied» en anglais ?",["the hand", "the arm", "the foot", "the head"],2,"«Pied» se dit «foot» en anglais."],
      ["fill","Completa: “J'ai très mal au ___ après avoir couru.”",["jambe", "tête", "dos", "main"],2,"Courir cause souvent des douleurs au dos si on ne s'échauffe pas bien."],
      ["translate","Traduis : «My hand hurts.»",["J'ai mal au pied.", "J'ai mal au bras.", "J'ai mal à la main.", "J'ai mal à la jambe."],2,"«My hand hurts» = «J'ai mal à la main», avec l'article défini."],
      ["arrange","Remets dans l'ordre : [jambe / mal / la / à / j'ai]",["mal jambe J'ai la à", "jambe la J'ai mal à", "J'ai mal à la jambe", "la jambe à mal J'ai"],2,"«J'ai mal à» + article + partie du corps."],
      ["speaking","Décris en français, en 40-60 mots, une douleur que tu as eue : quelle partie du corps te faisait mal et ce que tu as fait.",[],["j'avais mal", "la jambe", "je suis allé(e) chez le médecin"]],
    ]
  },
  {
    id:"fr_b1_sports_fitness", level:"B1", title:"Le sport et l'activité physique", emoji:"🏃", xp:60,
    description:"Parle de sports, de routines d'exercice et d'habitudes d'activité physique en français.",
    study: {
      vocab: [
        ["le football", "soccer/football"],
        ["la natation", "swimming"],
        ["le tennis", "tennis"],
        ["courir", "to run"],
        ["soulever des poids", "to lift weights"],
        ["faire du yoga", "to do yoga"],
      ],
      grammar: [
        ["«Avoir l'habitude de» + infinitif pour les habitudes", "«Avoir l'habitude de» + infinitif exprime une action habituelle.", "J'ai l'habitude de courir trois fois par semaine."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «soulever des poids» en anglais ?",["swimming", "to run", "to do yoga", "to lift weights"],3,"«Soulever des poids» se dit «to lift weights»."],
      ["mcq","Comment dit-on «la natation» en anglais ?",["soccer/football", "tennis", "swimming", "to run"],2,"«Natation» se dit «swimming»."],
      ["fill","Completa: “J'ai l'habitude de ___ trois fois par semaine pour rester en forme.”",["football", "tennis", "natation", "courir"],3,"«Avoir l'habitude de» + infinitif («courir») décrit une habitude."],
      ["translate","Traduis : «I usually do yoga on Sundays.»",["J'ai l'habitude de faire du yoga le dimanche.", "J'ai l'habitude de soulever des poids le dimanche.", "J'ai l'habitude de jouer au tennis le dimanche.", "J'ai l'habitude de faire du yoga le samedi."],0,"«I usually do yoga» = «J'ai l'habitude de faire du yoga» ; «on Sundays» = «le dimanche»."],
      ["arrange","Remets dans l'ordre : [forme / rester / en / pour / je cours]",["Je forme cours pour en rester", "rester forme pour Je en cours", "rester Je en forme pour cours", "Je cours pour rester en forme"],3,"Sujet + verbe + «pour» + infinitif + complément."],
      ["writing","Écris en français 45-65 mots sur ta relation avec le sport : quelle activité tu pratiques, à quelle fréquence et pourquoi tu l'aimes (ou pas).",[],["j'ai l'habitude de", "rester en forme", "je pratique"]],
    ]
  },
  {
    id:"fr_b2_smart_home_tech", level:"B2", title:"La maison intelligente : domotique et appareils", emoji:"💡", xp:82,
    description:"Parle des appareils intelligents et de la domotique, avec des arguments nuancés en français.",
    study: {
      vocab: [
        ["une enceinte connectée", "a smart speaker"],
        ["un thermostat programmable", "a programmable thermostat"],
        ["une caméra de sécurité", "a security camera"],
        ["contrôler par la voix", "to control by voice"],
        ["automatiser les tâches domestiques", "to automate household tasks"],
        ["un risque pour la vie privée", "a privacy risk"],
      ],
      grammar: [
        ["Le futur simple pour les prédictions technologiques", "Le futur simple décrit des prédictions raisonnables sur l'évolution de la technologie.", "Dans quelques années, plus de foyers auront des appareils connectés."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «un risque pour la vie privée» en anglais ?",["a smart speaker", "a thermostat", "a security camera", "a privacy risk"],3,"«Risque pour la vie privée» se dit «privacy risk»."],
      ["mcq","Comment dit-on «automatiser les tâches domestiques» en anglais ?",["to control by voice", "to automate household tasks", "a privacy risk", "a smart speaker"],1,"«Automatiser les tâches domestiques» se dit «to automate household tasks»."],
      ["fill","Completa: “Un thermostat programmable peut ___ de l'énergie s'il est bien réglé.”",["économiser", "perdre", "casser", "gaspiller"],0,"Un thermostat bien réglé aide à économiser de l'énergie, pas à la gaspiller."],
      ["translate","Traduis : «Les enceintes connectées peuvent être contrôlées par la voix.»",["Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Smart speakers can be controlled by voice.", "Thermostats can be controlled by text."],2,"«Contrôler par la voix» = «controlled by voice»."],
      ["arrange","Remets dans l'ordre : [vie / risque / peut / un / privée / pour / présenter / la]",["Peut présenter un risque pour la vie privée", "la privée Peut présenter pour un risque vie", "vie pour risque la Peut privée présenter un", "la présenter un vie pour risque privée Peut"],0,"Verbe + «présenter» + objet : «Peut présenter un risque pour la vie privée.»"],
      ["writing","Écris en français 55-75 mots sur un appareil intelligent que tu utiliserais (ou utilises déjà) chez toi : quel avantage il t'offre et quel risque pour la vie privée il pourrait poser.",[],["automatiser", "risque pour la vie privée", "par la voix"]],
    ]
  },
  {
    id:"fr_c1_workplace_communication", level:"C1", title:"Le monde professionnel : réunions et correspondance", emoji:"🤝", xp:90,
    description:"Maîtrise le vocabulaire et les formules typiques des réunions et des e-mails professionnels.",
    study: {
      vocab: [
        ["convoquer une réunion", "to call a meeting"],
        ["joindre un document", "to attach a document"],
        ["dans l'attente de votre réponse", "we look forward to your response"],
        ["reprendre un point en suspens", "to follow up on a pending item"],
        ["parvenir à un accord", "to reach an agreement"],
        ["reporter une réunion", "to postpone a meeting"],
      ],
      grammar: [
        ["Formules de politesse dans les e-mails formels", "Des formules fixes comme «Dans l'attente de votre réponse» donnent une clôture professionnelle sans paraître brusque.", "Veuillez trouver le rapport demandé en pièce jointe. Dans l'attente de votre réponse."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «parvenir à un accord» en anglais ?",["to call a meeting", "to postpone a meeting", "to attach a document", "to reach an agreement"],3,"«Parvenir à un accord» se dit «to reach an agreement»."],
      ["mcq","Comment dit-on «reporter une réunion» en anglais ?",["to call a meeting", "to attach a document", "to reach an agreement", "to postpone a meeting"],3,"«Reporter une réunion» se dit «to postpone a meeting»."],
      ["fill","Completa: “Avant de clore la réunion, j'aimerais ___ un point en suspens de la semaine dernière.”",["joindre", "convoquer", "reprendre", "reporter"],2,"«Reprendre un point en suspens» signifie y revenir."],
      ["translate","Traduis : «J'ai joint le rapport demandé.»",["I'm attaching the requested email.", "I'm attaching the requested report.", "I'm calling the requested report.", "I'm postponing the requested report."],1,"«J'ai joint» = «I'm attaching» ; «le rapport demandé» = «the requested report»."],
      ["arrange","Remets dans l'ordre : [réponse / l'attente / dans / votre / de]",["votre réponse l'attente de Dans", "Dans l'attente de votre réponse", "l'attente de Dans votre réponse", "de l'attente réponse Dans votre"],1,"Formule fixe de clôture d'e-mail professionnel."],
      ["writing","Écris en français un e-mail professionnel bref (55-75 mots) convoquant une réunion, mentionnant un point en suspens et se terminant par une formule de politesse formelle.",[],["je convoque", "point en suspens", "dans l'attente de"]],
    ]
  },
  {
    id:"fr_c2_register_synonyms", level:"C2", title:"Registre et style : synonymes selon le contexte", emoji:"🔤", xp:98,
    description:"Choisis le synonyme adéquat selon le registre (soutenu, courant, familier) en français.",
    study: {
      vocab: [
        ["obtenir (soutenu) / avoir (courant)", "to obtain / to get"],
        ["décéder (soutenu) / mourir (courant) / claquer (familier)", "to pass away / to die / to kick the bucket"],
        ["solliciter (soutenu) / demander (courant)", "to request / to ask for"],
        ["résider (soutenu) / vivre / habiter (courant)", "to reside / to live"],
        ["néanmoins (soutenu) / mais (courant)", "however / but"],
      ],
      grammar: [
        ["Choisir le registre selon le contexte", "La même idée peut s'exprimer avec des mots très différents selon un contexte soutenu, courant ou familier ; utiliser le mauvais mot casse la cohérence du texte.", "Dans un rapport : «L'information a été obtenue.» Entre amis : «Je l'ai eu.»"],
      ]
    },
    ex:[
      ["mcq","Dans un rapport officiel, quel mot est le plus approprié pour «obtenir une information» ?",["Obtenir", "Choper", "Récupérer", "Chiper"],0,"«Obtenir» est le registre soutenu approprié pour un rapport officiel."],
      ["mcq","Dans une conversation informelle entre amis, quel verbe sonne le plus naturel pour «mourir» ?",["Claquer", "Décéder", "Périr", "Expirer"],0,"«Claquer» est familier et conviendrait à une conversation informelle ; les autres sont trop soutenus ou techniques."],
      ["fill","Completa: “Dans une lettre formelle on dit «___, nous poursuivons le projet», pas «mais».”",["néanmoins", "mais", "pourtant", "quand même"],0,"«Néanmoins» est le connecteur soutenu équivalent à «mais»."],
      ["translate","Traduis avec le registre soutenu correct : «We reside in Madrid.»",["Nous sommes de Madrid.", "Nous vivons à Madrid.", "Nous résidons à Madrid.", "Nous restons à Madrid."],2,"«Reside» dans un registre soutenu se traduit par «résider», pas le courant «vivre»."],
      ["arrange","Remets dans l'ordre (registre soutenu) : [a / l'information / été / sollicitée]",["été a L'information sollicitée", "L'information a été sollicitée", "été L'information a sollicitée", "sollicitée a L'information été"],1,"Construction passive, typique du registre soutenu/administratif."],
      ["writing","Écris en français le même message bref («j'ai besoin que tu m'envoies le fichier») dans deux registres différents : un soutenu (pour un patron) et un familier (pour un ami), en 55-75 mots au total.",[],["soutenu", "familier", "je sollicite"]],
    ]
  },
  {
    id:"fr_a1_clothing_colors", level:"A1", title:"Les vêtements et les couleurs", emoji:"👕", xp:37,
    description:"Apprends le vocabulaire des vêtements et comment les associer aux couleurs en français.",
    study: {
      vocab: [
        ["la chemise", "the shirt"],
        ["le pantalon", "the pants/trousers"],
        ["les chaussures", "the shoes"],
        ["la robe", "the dress"],
        ["la veste", "the jacket"],
        ["la jupe", "the skirt"],
        ["rouge, bleu, vert, noir, blanc", "red, blue, green, black, white"],
      ],
      grammar: [
        ["Accord de genre et nombre avec les adjectifs de couleur", "Les couleurs s'accordent en genre et en nombre avec le nom qu'elles décrivent.", "la chemise rouge / les chaussures noires / la robe verte"],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «la veste» en anglais ?",["the pants/trousers", "the skirt", "the jacket", "the shirt"],2,"«Veste» se dit «jacket» en anglais."],
      ["mcq","Comment dit-on «les chaussures» en anglais ?",["the shoes", "the shirt", "the skirt", "the dress"],0,"«Chaussures» se dit «shoes» en anglais."],
      ["fill","Completa: “Je porte une chemise ___ et un pantalon noir.”",["bleu", "bleues", "bleus", "bleue"],3,"«Chemise» est féminin singulier, donc la couleur s'accorde : «bleue»."],
      ["translate","Traduis : «I'm wearing a red dress.»",["Je porte des chaussures rouges.", "Je porte une chemise rouge.", "Je porte une robe rouge.", "Je porte une jupe rouge."],2,"«I'm wearing» = «Je porte» ; «a red dress» = «une robe rouge»."],
      ["arrange","Remets dans l'ordre : [noires / chaussures / ai / des / j']",["des J'ai noires chaussures", "J'ai des chaussures noires", "des noires chaussures J'ai", "noires J'ai des chaussures"],1,"Sujet + verbe + article + nom + adjectif (accord au pluriel)."],
      ["writing","Décris en français, en 20-30 mots, les vêtements que tu portes aujourd'hui, en mentionnant au moins trois vêtements et leurs couleurs.",[],["je porte", "de couleur", "et"]],
    ]
  },
  {
    id:"fr_a2_fruits_vegetables", level:"A2", title:"Fruits et légumes", emoji:"🥦", xp:47,
    description:"Apprends le vocabulaire des fruits et légumes et à parler d'une alimentation saine en français.",
    study: {
      vocab: [
        ["la pomme", "the apple"],
        ["la banane", "the banana"],
        ["la carotte", "the carrot"],
        ["la tomate", "the tomato"],
        ["la laitue", "the lettuce"],
        ["l'orange", "the orange"],
      ],
      grammar: [
        ["Quantificateurs : beaucoup de, peu de", "«Beaucoup de» et «peu de» sont invariables et s'utilisent aussi bien avec des noms comptables qu'incomptables.", "Je mange beaucoup de fruits et peu de viande."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «la carotte» en anglais ?",["the banana", "the apple", "the carrot", "the orange"],2,"«Carotte» se dit «carrot» en anglais."],
      ["mcq","Comment dit-on «la banane» en anglais ?",["the carrot", "the lettuce", "the tomato", "the banana"],3,"«Banane» se dit «banana» en anglais."],
      ["fill","Completa: “Je mange ___ de fruits chaque jour pour rester en bonne santé.”",["beaucoup", "peu", "assez", "trop"],0,"«Beaucoup de fruits» décrit une grande quantité, cohérente avec «rester en bonne santé»."],
      ["translate","Traduis : «I eat little meat and a lot of vegetables.»",["Je mange peu de viande et beaucoup de légumes.", "Je mange peu de viande et peu de légumes.", "Je mange peu de fruits et beaucoup de légumes.", "Je mange beaucoup de viande et beaucoup de légumes."],0,"«Little meat» = «peu de viande» ; «a lot of vegetables» = «beaucoup de légumes»."],
      ["arrange","Remets dans l'ordre : [tomate / salade / a / la / de la / et / laitue]",["la de La laitue salade a et tomate la de", "salade et a la tomate la laitue de La de", "La salade a de la tomate et de la laitue", "et salade tomate la laitue la de de a La"],2,"Sujet + verbe + objet (deux articles partitifs reliés par «et»)."],
      ["speaking","Décris en français, en 40-60 mots, ton alimentation habituelle : quels fruits et légumes tu manges normalement et à quelle fréquence.",[],["je mange", "souvent", "légumes"]],
    ]
  },
  {
    id:"fr_b1_cooking_recipes", level:"B1", title:"La cuisine : verbes et recettes simples", emoji:"🍳", xp:61,
    description:"Apprends des verbes de cuisine et à expliquer les étapes d'une recette simple en français.",
    study: {
      vocab: [
        ["couper, éplucher", "to cut, to peel"],
        ["faire bouillir, faire frire", "to boil, to fry"],
        ["mélanger les ingrédients", "to mix the ingredients"],
        ["ajouter du sel selon le goût", "to add salt to taste"],
        ["laisser reposer la pâte", "to let the dough rest"],
        ["préchauffer le four", "to preheat the oven"],
      ],
      grammar: [
        ["L'impératif pour donner des instructions de recette", "Les recettes utilisent l'impératif pour donner des instructions étape par étape.", "Coupez les légumes, faites bouillir l'eau et ajoutez du sel selon le goût."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «mélanger les ingrédients» en anglais ?",["to mix the ingredients", "to boil, to fry", "to cut, to peel", "to preheat the oven"],0,"«Mélanger les ingrédients» se dit «to mix the ingredients»."],
      ["mcq","Comment dit-on «préchauffer le four» en anglais ?",["to add salt to taste", "to cut, to peel", "to let the dough rest", "to preheat the oven"],3,"«Préchauffer le four» se dit «to preheat the oven»."],
      ["fill","Completa: “Avant de cuire au four, il faut ___ le four à 180 degrés.”",["faire bouillir", "préchauffer", "faire frire", "mélanger"],1,"«Préchauffer le four» est l'étape préalable typique avant de cuire au four."],
      ["translate","Traduis : «Laissez reposer la pâte pendant dix minutes.»",["Let the dough cut for ten minutes.", "Let the dough fry for ten minutes.", "Let the dough rest for ten minutes.", "Let the dough boil for ten minutes."],2,"«Laissez reposer la pâte» = «Let the dough rest»."],
      ["arrange","Remets dans l'ordre : [goût / le / selon / sel / ajoutez / du]",["le selon sel goût Ajoutez du", "Ajoutez du sel selon le goût", "selon sel le goût du Ajoutez", "goût du selon sel le Ajoutez"],1,"Impératif + objet + expression fixe «selon le goût»."],
      ["writing","Écris en français 45-65 mots expliquant les étapes d'une recette simple que tu sais faire, en utilisant au moins trois verbes de cuisine à l'impératif.",[],["coupez", "ajoutez", "laissez reposer"]],
    ]
  },
  {
    id:"fr_b2_art_world", level:"B2", title:"Le monde de l'art : peinture, musique et cinéma", emoji:"🎨", xp:83,
    description:"Parle d'art, de musique et de cinéma en exprimant des opinions et des jugements nuancés en français.",
    study: {
      vocab: [
        ["un chef-d'œuvre", "a masterpiece"],
        ["la mise en scène", "the staging/mise-en-scène"],
        ["une interprétation émouvante", "a moving performance"],
        ["le style d'un artiste", "an artist's style"],
        ["laisser une impression durable", "to leave a lasting impression"],
        ["être surestimé/sous-estimé", "to be overrated/underrated"],
      ],
      grammar: [
        ["Verbes d'opinion + subjonctif/indicatif selon la certitude", "«Je trouve que» + indicatif exprime une opinion avec une certaine assurance ; «je ne pense pas que» + subjonctif exprime le doute.", "Je trouve que ce film est un chef-d'œuvre. / Je ne pense pas qu'il soit surestimé."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «une interprétation émouvante» en anglais ?",["an artist's style", "a moving performance", "a masterpiece", "a lasting impression"],1,"«Une interprétation émouvante» se dit «a moving performance»."],
      ["mcq","Comment dit-on «être surestimé» en anglais ?",["an artist's style", "to be overrated", "to leave an impression", "to be underrated"],1,"«Être surestimé» se dit «to be overrated»."],
      ["fill","Completa: “Je ne pense pas que ce film ___ aussi bon qu'on le dit.”",["était", "sera", "soit", "est"],2,"«Je ne pense pas que» exige le subjonctif : «que...soit»."],
      ["translate","Traduis : «This performance left a lasting impression on me.»",["Ce style m'a laissé une impression durable.", "Cette mise en scène m'a laissé surestimé.", "Cette interprétation m'a laissé un chef-d'œuvre.", "Cette interprétation m'a laissé une impression durable."],3,"«Left a lasting impression» = «a laissé une impression durable»."],
      ["arrange","Remets dans l'ordre : [chef-d'œuvre / ceci / un / est]",["chef-d'œuvre un est Ceci", "Ceci est un chef-d'œuvre", "est Ceci chef-d'œuvre un", "est Ceci un chef-d'œuvre"],1,"Sujet + «est» + article + nom."],
      ["writing","Écris en français 55-75 mots donnant ton opinion sur une œuvre d'art, un film ou une chanson (réel ou inventé) : ce que tu en as pensé et pourquoi, en nuançant ta position.",[],["je trouve que", "je ne pense pas que", "une impression"]],
    ]
  },
  {
    id:"fr_c1_giving_feedback", level:"C1", title:"La critique constructive : donner et recevoir un feedback", emoji:"🗨️", xp:91,
    description:"Apprends à donner et recevoir des retours de façon constructive et professionnelle en français.",
    study: {
      vocab: [
        ["signaler un point à améliorer", "to point out an area for improvement"],
        ["reconnaître les points forts avant les critiques", "to acknowledge strengths before criticism"],
        ["formuler la critique en termes concrets", "to phrase criticism in concrete terms"],
        ["être ouvert(e) aux retours", "to be open to feedback"],
        ["prendre la critique personnellement", "to take criticism personally"],
        ["proposer une solution, pas seulement signaler le problème", "to propose a solution, not just point out the problem"],
      ],
      grammar: [
        ["Atténuateurs pour adoucir une critique", "Des expressions comme «tu pourrais peut-être envisager» ou «une suggestion serait» adoucissent une critique sans perdre en clarté.", "Tu pourrais peut-être envisager de restructurer le rapport ; une suggestion serait de commencer par les conclusions."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «formuler la critique en termes concrets» en anglais ?",["to phrase criticism in concrete terms", "to take criticism personally", "to be open to feedback", "to point out an area for improvement"],0,"«Formuler la critique en termes concrets» se dit «to phrase criticism in concrete terms»."],
      ["mcq","Comment dit-on «prendre la critique personnellement» en anglais ?",["to be open to feedback", "to acknowledge strengths", "to take criticism personally", "to propose a solution"],2,"«Prendre la critique personnellement» se dit «to take criticism personally»."],
      ["fill","Completa: “Avant de donner une critique, c'est une bonne idée de ___ les points forts du travail.”",["cacher", "reconnaître", "ignorer", "critiquer"],1,"«Reconnaître les points forts avant les critiques» fait que le feedback est mieux reçu."],
      ["translate","Traduis : «Une suggestion serait de commencer par les conclusions.»",["One suggestion would be to start with the conclusions.", "One problem would be to start with the conclusions.", "One criticism would be to start with the conclusions.", "One suggestion would be to finish with the conclusions."],0,"«Une suggestion serait de» = «One suggestion would be to»."],
      ["arrange","Remets dans l'ordre : [problème / propose / seulement / le / une solution / ne / signale / pas]",["Ne signale pas seulement le problème, propose une solution", "propose signale une Ne le solution problème, pas seulement", "seulement propose pas problème, le Ne signale solution une", "signale problème, le solution propose seulement Ne pas une"],0,"Structure de contraste : «ne... pas seulement» + «[verbe]... une solution»."],
      ["writing","Écris en français 55-75 mots donnant un feedback constructif sur un travail (réel ou inventé) : reconnais un point fort, signale un point à améliorer concret et propose une solution.",[],["je reconnais que", "tu pourrais peut-être", "une suggestion serait"]],
    ]
  },
  {
    id:"fr_c2_inclusive_language", level:"C2", title:"Le langage inclusif et l'évolution de la langue", emoji:"🌐", xp:99,
    description:"Analyse le débat sur le langage inclusif et comment les langues évoluent avec la société.",
    study: {
      vocab: [
        ["le langage inclusif", "inclusive language"],
        ["une langue vivante évolue avec l'usage", "a living language evolves with use"],
        ["prescriptivisme face à descriptivisme", "prescriptivism versus descriptivism"],
        ["un néologisme est ajouté au dictionnaire", "a neologism is added to the dictionary"],
        ["générer une résistance face à un changement linguistique", "to generate resistance to a linguistic change"],
        ["un argument n'implique pas nécessairement une position politique", "an argument doesn't necessarily imply a political stance"],
      ],
      grammar: [
        ["Présenter un débat linguistique sans parti pris", "Une analyse rigoureuse sépare la description du phénomène (comment la langue change) de l'appréciation personnelle (si le changement devrait être adopté ou non).", "Du point de vue descriptiviste, le changement est documenté sans jugement ; du point de vue prescriptiviste, on évalue s'il convient de le normaliser."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on «prescriptivisme face à descriptivisme» en anglais ?",["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],0,"«Prescriptivisme face à descriptivisme» se dit «prescriptivism versus descriptivism»."],
      ["mcq","Comment dit-on «un néologisme est ajouté au dictionnaire» en anglais ?",["a living language evolves with use", "a neologism is added to the dictionary", "inclusive language", "to generate resistance"],1,"«Un néologisme est ajouté au dictionnaire» se dit «a neologism is added to the dictionary»."],
      ["fill","Completa: “Le descriptivisme se concentre à documenter comment les gens parlent réellement, pas à dicter comment ils ___ parler.”",["ont tendance à", "devraient", "veulent", "peuvent"],1,"Le descriptivisme décrit l'usage réel, sans dicter de normes sur comment on «devrait» parler."],
      ["translate","Traduis avec précision : «A living language evolves with use, whether we like it or not.»",["Une langue vivante évolue avec l'usage, qu'on le veuille ou non.", "Une langue morte évolue avec l'usage, qu'on le veuille ou non.", "Une langue vivante évolue avec l'usage, même si elle ne change pas.", "Une langue vivante évolue sans usage, qu'on le veuille ou non."],0,"«Whether we like it or not» se traduit idiomatiquement par «qu'on le veuille ou non»."],
      ["arrange","Remets dans l'ordre : [nécessairement / implique / n' / pas / une position / politique / un argument]",["Un argument n'implique pas nécessairement une position politique", "position nécessairement politique pas argument n'implique Un une", "pas une argument position politique nécessairement n'implique Un", "une position politique n'implique nécessairement Un pas argument"],0,"Sujet + négation + «implique pas nécessairement» + objet."],
      ["writing","Écris en français 55-75 mots présentant de façon équilibrée deux positions sur un changement linguistique actuel (réel ou inventé), sans prendre parti explicitement, en distinguant description et jugement.",[],["d'un côté", "de l'autre", "sans nécessairement"]],
    ]
  },
  {
    id:"fr_a1_neighborhood_city", level:"A1", title:"Le quartier et la ville", emoji:"🏙️", xp:38,
    description:"Apprends le vocabulaire des lieux du quartier et comment dire où ils se trouvent en français.",
    study: {
      vocab: [
        ["la banque", "the bank"],
        ["le supermarché", "the supermarket"],
        ["le parc", "the park"],
        ["la pharmacie", "the pharmacy"],
        ["la bibliothèque", "the library"],
        ["l'arrêt de bus", "the bus stop"],
        ["près de, loin de, à côté de", "near, far from, next to"],
      ],
      grammar: [
        ["« Il y a » + prépositions de lieu", "« Il y a » (there is/are) sert à dire que quelque chose existe quelque part ; il ne change pas avec le nombre. Les prépositions de lieu indiquent où se trouve la chose.", "Il y a une pharmacie près du parc. / La bibliothèque est à côté de la banque."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « la pharmacie » en anglais ?",["the pharmacy", "the supermarket", "the bus stop", "the library"],0,"« Pharmacie » se dit « pharmacy » en anglais."],
      ["mcq","Comment dit-on « l'arrêt de bus » en anglais ?",["the library", "the bus stop", "the supermarket", "the park"],1,"« Arrêt de bus » se dit « bus stop » en anglais."],
      ["fill","Completa: “Dans mon quartier, ___ une grande bibliothèque.”",["c'est", "elle a", "il y a", "elle est"],2,"« Il y a » sert à dire que quelque chose existe, sans changer selon le nombre : « il y a une bibliothèque »."],
      ["translate","Traduis : « The pharmacy is next to the park. »",["La banque est à côté du parc.", "La pharmacie est loin du parc.", "La pharmacie est à côté du parc.", "La pharmacie est près de la bibliothèque."],2,"« Next to » = « à côté de » ; le sujet et le lieu doivent correspondre à l'original."],
      ["arrange","Remets dans l'ordre : [supermarché / loin / le / n'est / pas]",["Le supermarché pas n'est loin", "Le supermarché n'est pas loin", "loin Le supermarché n'est pas", "supermarché pas Le n'est loin"],1,"Sujet + négation + verbe + adverbe de lieu."],
      ["writing","Décris en 20-30 mots ton quartier : quels lieux il y a et où ils se trouvent (utilise « il y a », « près de » et « loin de »).",[],["il y a", "près de", "loin de"]],
    ]
  },
  {
    id:"fr_a2_celebrations_holidays", level:"A2", title:"Les fêtes et célébrations", emoji:"🎉", xp:48,
    description:"Apprends le vocabulaire des fêtes et à parler d'habitudes avec « avoir l'habitude de ».",
    study: {
      vocab: [
        ["l'anniversaire", "the birthday"],
        ["le mariage", "the wedding"],
        ["Noël", "Christmas"],
        ["le Nouvel An", "New Year"],
        ["célébrer, fêter", "to celebrate"],
        ["faire un cadeau", "to give a gift"],
      ],
      grammar: [
        ["« Avoir l'habitude de » + infinitif pour parler d'habitudes", "« Avoir l'habitude de » + infinitif exprime ce qu'on fait habituellement.", "On a l'habitude de se réunir en famille à Noël. / Enfant, j'avais l'habitude de fêter mon anniversaire au parc."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « faire un cadeau » en anglais ?",["the birthday", "to celebrate", "the wedding", "to give a gift"],3,"« Faire un cadeau » se dit « to give a gift » en anglais."],
      ["mcq","Comment dit-on « le mariage » en anglais ?",["Christmas", "New Year", "the wedding", "to give a gift"],2,"« Mariage » se dit « wedding » en anglais."],
      ["fill","Completa: “Chaque Nouvel An, on ___ de fêter en famille.”",["habitue", "est habitude", "avait l'habitude", "a l'habitude"],3,"« Avoir l'habitude de » + infinitif exprime une coutume habituelle au présent : « on a l'habitude de fêter »."],
      ["translate","Traduis : « We usually give gifts at Christmas. »",["On a l'habitude de faire des cadeaux à Noël.", "On a l'habitude de fêter des cadeaux à Noël.", "On fait un cadeau à Noël.", "On a l'habitude de faire des cadeaux à l'anniversaire."],0,"« We usually give gifts » = « On a l'habitude de faire des cadeaux », avec « avoir l'habitude de » + infinitif."],
      ["arrange","Remets dans l'ordre : [anniversaire / je / mon / célèbre / avec / amis]",["avec amis mon célèbre Je anniversaire", "Je célèbre mon anniversaire avec amis", "anniversaire mon amis célèbre avec Je", "avec anniversaire célèbre Je amis mon"],1,"Sujet + verbe + objet possessif + préposition + complément."],
      ["speaking","Décris en 40-60 mots comment tu as l'habitude de célébrer une fête importante pour toi (anniversaire, Noël, Nouvel An ou autre), en utilisant « avoir l'habitude de ».",[],["j'ai l'habitude de", "je célèbre", "avec"]],
    ]
  },
  {
    id:"fr_b1_relationships_friendship", level:"B1", title:"Les relations personnelles et l'amitié", emoji:"🤝", xp:62,
    description:"Apprends du vocabulaire sur l'amitié et à donner des conseils avec « devoir » et « il faut ».",
    study: {
      vocab: [
        ["faire confiance à quelqu'un", "to trust someone"],
        ["bien/mal s'entendre avec quelqu'un", "to get along well/badly with someone"],
        ["avoir quelque chose en commun", "to have something in common"],
        ["rester en contact", "to keep in touch"],
        ["un ami/une amie de confiance", "a close/trustworthy friend"],
        ["se réconcilier après une dispute", "to make up after an argument"],
      ],
      grammar: [
        ["Conseils avec « devoir » et « il faut »", "« Devoir » + infinitif donne un conseil doux ; « il faut » + infinitif exprime une obligation plus forte et impersonnelle.", "Tu devrais rester en contact avec tes amis. / Il faut vous réconcilier si vous voulez rester amis."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « bien s'entendre avec quelqu'un » en anglais ?",["to make up after an argument", "to have something in common", "to get along well/badly with someone", "to trust someone"],2,"« Bien s'entendre avec quelqu'un » se dit « to get along well with someone » en anglais."],
      ["mcq","Comment dit-on « se réconcilier après une dispute » en anglais ?",["a close/trustworthy friend", "to keep in touch", "to make up after an argument", "to get along well/badly with someone"],2,"« Se réconcilier après une dispute » se dit « to make up after an argument » en anglais."],
      ["fill","Completa: “Si tu veux garder cette amitié, tu ___ rester en contact.”",["dois", "devras", "devrais", "as dû"],2,"« Devrais » (conditionnel de « devoir ») donne un conseil doux à la deuxième personne."],
      ["translate","Traduis : « You have to trust your friends. »",["Tu dois faire confiance à tes amis.", "Tu devrais faire confiance à tes amis.", "Tu dois bien t'entendre avec tes amis.", "Tu dois faire confiance à ta famille."],0,"« You have to trust » = « Tu dois faire confiance », avec « devoir » + infinitif."],
      ["arrange","Remets dans l'ordre : [commun / beaucoup / nous / avons / en]",["en beaucoup commun avons Nous", "avons commun beaucoup en Nous", "en commun Nous beaucoup avons", "Nous avons beaucoup en commun"],3,"Sujet + verbe + quantificateur + préposition fixe « en commun »."],
      ["writing","Écris 45-65 mots sur une amitié importante pour toi : ce que vous avez en commun et quel conseil tu donnerais à quelqu'un qui veut garder une amitié comme ça.",[],["nous avons en commun", "tu devrais", "faire confiance"]],
    ]
  },
  {
    id:"fr_b2_remote_work_balance", level:"B2", title:"Le télétravail et l'équilibre vie pro/perso", emoji:"💻", xp:84,
    description:"Parle du télétravail et de la conciliation vie pro/perso en utilisant le gérondif en français.",
    study: {
      vocab: [
        ["télétravailler", "to work remotely"],
        ["les horaires flexibles", "flexible working hours"],
        ["la déconnexion numérique", "digital disconnection"],
        ["l'épuisement professionnel (burn-out)", "burnout"],
        ["concilier vie professionnelle et vie personnelle", "to balance work and personal life"],
        ["être productif/productive", "to be productive"],
      ],
      grammar: [
        ["Le gérondif pour exprimer la simultanéité ou la cause", "Le gérondif (en + participe présent) exprime une action simultanée à une autre ou sa cause, sans conjonction.", "En travaillant depuis chez soi, on gagne du temps de trajet. / Beaucoup souffrent d'épuisement en travaillant sans se déconnecter."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « la déconnexion numérique » en anglais ?",["burnout", "digital disconnection", "to work remotely", "to be productive"],1,"« Déconnexion numérique » se dit « digital disconnection » en anglais."],
      ["mcq","Comment dit-on « concilier vie professionnelle et vie personnelle » en anglais ?",["to balance work and personal life", "flexible working hours", "digital disconnection", "burnout"],0,"« Concilier vie professionnelle et vie personnelle » se dit « to balance work and personal life » en anglais."],
      ["fill","Completa: “___ chez soi, beaucoup de gens arrivent à mieux concilier vie professionnelle et vie personnelle.”",["Télétravailler", "Télétravaillé", "En télétravaillant", "Télétravaux"],2,"Le gérondif (« en télétravaillant ») exprime la circonstance qui permet le résultat qui suit."],
      ["translate","Traduis : « Working without disconnecting can lead to burnout. »",["En travaillant avec des horaires flexibles, on peut arriver à l'épuisement.", "Travailler sans se déconnecter peut éviter l'épuisement.", "En travaillant sans se déconnecter, on peut arriver à l'épuisement.", "En se déconnectant du travail, on peut arriver à l'épuisement."],2,"Le gérondif « en travaillant sans se déconnecter » exprime la cause de l'épuisement."],
      ["arrange","Remets dans l'ordre : [flexibles / apprécient / des / beaucoup / horaires]",["Beaucoup apprécient des horaires flexibles", "des horaires Beaucoup apprécient flexibles", "horaires des flexibles Beaucoup apprécient", "apprécient flexibles Beaucoup horaires des"],0,"Sujet + verbe + article + adjectif + nom."],
      ["writing","Écris 55-75 mots sur les avantages et les inconvénients du télétravail pour l'équilibre vie pro/perso, en utilisant au moins un gérondif de simultanéité ou de cause.",[],["en télétravaillant", "concilier", "cependant"]],
    ]
  },
  {
    id:"fr_c1_negotiation_conflict", level:"C1", title:"La négociation et la résolution de conflits", emoji:"🤝", xp:92,
    description:"Apprends à négocier et à adoucir des propositions avec le conditionnel en registre formel.",
    study: {
      vocab: [
        ["parvenir à un accord", "to reach an agreement"],
        ["faire des concessions", "to give ground/make concessions"],
        ["une impasse", "a deadlock/stalemate"],
        ["une position intransigeante", "an inflexible/uncompromising stance"],
        ["chercher un compromis", "to look for a middle ground"],
        ["briser la glace", "to break the ice"],
      ],
      grammar: [
        ["Le conditionnel pour adoucir des propositions", "Le conditionnel présent adoucit les demandes et propositions lors d'une négociation, donnant une impression de courtoisie et de flexibilité.", "Seriez-vous disposé à faire des concessions sur ce point ? / Il serait préférable de chercher un compromis avant d'arriver à une impasse."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « une impasse » en anglais ?",["a deadlock/stalemate", "to give ground/make concessions", "to look for a middle ground", "to reach an agreement"],0,"« Une impasse » se dit « a deadlock » ou « stalemate » en anglais."],
      ["mcq","Comment dit-on « une position intransigeante » en anglais ?",["an inflexible/uncompromising stance", "to give ground/make concessions", "a deadlock/stalemate", "to reach an agreement"],0,"« Une position intransigeante » se dit « an inflexible/uncompromising stance » en anglais."],
      ["fill","Completa: “Il ___ préférable de chercher un compromis avant d'arriver à une impasse.”",["était", "sera", "serait", "est"],2,"Le conditionnel « serait » adoucit l'affirmation, propre au registre de négociation formel."],
      ["translate","Traduis en registre formel : « Would you be willing to make concessions on this point? »",["Seriez-vous disposé à parvenir à un accord sur ce point ?", "Seriez-vous disposé à faire des concessions sur ce point ?", "Seriez-vous disposé à briser la glace sur ce point ?", "Êtes-vous disposé à faire des concessions sur ce point ?"],1,"Le conditionnel « seriez-vous disposé » adoucit la question, plus formel que le présent « êtes-vous disposé »."],
      ["arrange","Remets dans l'ordre : [accord / difficile / parvenir / sera / à / un]",["Sera difficile parvenir à un accord", "Sera accord à un parvenir difficile", "parvenir accord à Sera difficile un", "Sera accord parvenir à difficile un"],0,"Futur + adjectif + infinitif + complément."],
      ["writing","Écris 55-75 mots décrivant une négociation (réelle ou inventée) où les deux parties ont fait des concessions pour éviter une impasse, en utilisant au moins deux conditionnels de politesse.",[],["serait", "seriez-vous disposé", "compromis"]],
    ]
  },
  {
    id:"fr_c2_corporate_euphemism", level:"C2", title:"Le langage corporate et l'euphémisme", emoji:"🏢", xp:100,
    description:"Analyse l'euphémisme dans le langage corporate et entraîne-toi aux connecteurs de reformulation.",
    study: {
      vocab: [
        ["un euphémisme", "a euphemism"],
        ["le jargon corporate", "corporate jargon"],
        ["une restructuration (euphémisme pour licenciement)", "a restructuring (euphemism for layoffs)"],
        ["adoucir l'impact d'un message", "to soften the impact of a message"],
        ["un anglicisme inutile", "an unnecessary anglicism"],
        ["diluer la responsabilité de quelqu'un", "to dilute someone's responsibility"],
      ],
      grammar: [
        ["Connecteurs de reformulation et de nuance", "Des expressions comme « c'est-à-dire », « autrement dit » ou « en d'autres termes » reformulent une idée, souvent pour l'adoucir ou la préciser — essentiel pour repérer les euphémismes.", "L'entreprise a annoncé une « restructuration », c'est-à-dire des licenciements. / Autrement dit : ils vont réduire les effectifs."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « diluer la responsabilité de quelqu'un » en anglais ?",["a euphemism", "to dilute someone's responsibility", "corporate jargon", "to soften the impact of a message"],1,"« Diluer la responsabilité de quelqu'un » se dit « to dilute someone's responsibility » en anglais."],
      ["mcq","Comment dit-on « une restructuration (euphémisme pour licenciement) » en anglais ?",["to dilute someone's responsibility", "to soften the impact of a message", "an unnecessary anglicism", "a restructuring (euphemism for layoffs)"],3,"« Restructuration » se dit « restructuring » en anglais, euphémisme habituel de « layoffs » (licenciements)."],
      ["fill","Completa: “L'entreprise parle d'« optimisation des ressources », ___ , de licenciements.”",["par exemple", "bien que", "c'est-à-dire", "cependant"],2,"« C'est-à-dire » reformule l'expression euphémistique avec son sens littéral."],
      ["translate","Traduis avec précision : « Corporate jargon often softens the impact of bad news. »",["Le jargon corporate dilue souvent l'impact des mauvaises nouvelles.", "Le jargon corporate adoucit souvent l'impact des mauvaises nouvelles.", "Le jargon corporate évite souvent l'impact des mauvaises nouvelles.", "Un euphémisme adoucit souvent l'impact des mauvaises nouvelles."],1,"« Softens the impact » = « adoucit l'impact » ; le sujet doit être « le jargon corporate »."],
      ["arrange","Remets dans l'ordre : [licenciements / euphémisme / restructuration / de / un / est]",["est Restructuration euphémisme un licenciements de", "Restructuration est un euphémisme de licenciements", "un de licenciements Restructuration euphémisme est", "un Restructuration euphémisme de licenciements est"],1,"Sujet + verbe + article + nom + préposition + complément."],
      ["writing","Écris 55-75 mots analysant un euphémisme corporate réel ou inventé : ce qu'il cache, pourquoi il est utilisé et comment tu le reformulerais plus clairement, en utilisant au moins un connecteur de reformulation.",[],["c'est-à-dire", "euphémisme", "autrement dit"]],
    ]
  },
  {
    id:"fr_a1_airport_hotel", level:"A1", title:"À l'aéroport et à l'hôtel", emoji:"✈️", xp:38,
    description:"Apprends le vocabulaire du voyage et à parler de projets immédiats avec « aller + infinitif ».",
    study: {
      vocab: [
        ["le passeport", "the passport"],
        ["la valise", "the suitcase"],
        ["le vol", "the flight"],
        ["la chambre", "the room"],
        ["la réservation", "the booking"],
        ["enregistrer les bagages", "to check in luggage"],
      ],
      grammar: [
        ["« Aller » + infinitif pour le futur proche", "« Aller » + infinitif exprime un projet ou une action qui va se produire bientôt, très utilisé à l'oral.", "Je vais enregistrer les bagages. / Nous allons réserver une chambre pour vendredi."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « le passeport » en anglais ?",["the flight", "the booking", "to check in luggage", "the passport"],3,"« Passeport » se dit « passport » en anglais."],
      ["mcq","Comment dit-on « enregistrer les bagages » en anglais ?",["the booking", "to check in luggage", "the flight", "the passport"],1,"« Enregistrer les bagages » se dit « to check in luggage » en anglais."],
      ["fill","Completa: “Demain, je ___ enregistrer les bagages très tôt.”",["vais à", "vais", "irai à", "suis allé"],1,"« Aller » + infinitif : « je vais enregistrer », le verbe « aller » se conjugue au présent."],
      ["translate","Traduis : « We are going to book a room for Friday. »",["Nous allons réserver un vol pour vendredi.", "Nous allons réserver une chambre pour lundi.", "Nous allons réserver une chambre pour vendredi.", "Nous allons enregistrer une chambre pour vendredi."],2,"« We are going to book » = « Nous allons réserver », avec « aller » + infinitif."],
      ["arrange","Remets dans l'ordre : [passeport / vais / mon / chercher / je]",["Je mon passeport chercher vais", "vais mon chercher Je passeport", "Je vais chercher mon passeport", "Je vais mon passeport chercher"],2,"Sujet + « aller » + infinitif + objet possessif."],
      ["writing","Décris en 20-30 mots tes projets de voyage : ce que tu vas faire (enregistrer les bagages, réserver une chambre, etc.) en utilisant « aller + infinitif ».",[],["je vais", "nous allons", "réserver"]],
    ]
  },
  {
    id:"fr_a2_everyday_tech", level:"A2", title:"La technologie du quotidien", emoji:"📱", xp:48,
    description:"Apprends le vocabulaire de la technologie quotidienne et à comparer avec « aussi... que » et « plus... que ».",
    study: {
      vocab: [
        ["le wifi", "the wifi"],
        ["le mot de passe", "the password"],
        ["l'application", "the app"],
        ["charger le téléphone", "to charge the phone"],
        ["télécharger", "to download"],
        ["la batterie", "the battery"],
      ],
      grammar: [
        ["Comparatifs d'égalité et de supériorité", "« Aussi + adjectif + que » compare des qualités égales ; « plus + adjectif + que » compare une supériorité.", "Cette application est aussi rapide que l'autre. / Ma batterie dure plus longtemps que la tienne."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « le mot de passe » en anglais ?",["the password", "the wifi", "the battery", "to download"],0,"« Mot de passe » se dit « password » en anglais."],
      ["mcq","Comment dit-on « télécharger » en anglais ?",["the password", "the app", "to download", "the wifi"],2,"« Télécharger » se dit « download » en anglais."],
      ["fill","Completa: “Cette application est ___ rapide que l'autre.”",["aussi", "plus", "moins", "très"],0,"« Aussi + adjectif + que » compare deux choses ayant la même qualité."],
      ["translate","Traduis : « My battery lasts longer than yours. »",["Ma batterie dure plus longtemps que la tienne.", "Mon wifi dure plus longtemps que la tienne.", "Ma batterie dure moins longtemps que la tienne.", "Ma batterie dure aussi longtemps que la tienne."],0,"« Lasts longer than » = « dure plus longtemps que », comparatif de supériorité."],
      ["arrange","Remets dans l'ordre : [mot de passe / plus / j'ai besoin / sûr / d'un]",["J'ai besoin d'un mot de passe plus sûr", "J'ai de mot passe sûr besoin d'un plus", "besoin J'ai sûr mot d'un passe plus de", "mot plus passe J'ai sûr besoin d'un de"],0,"Verbe + article + nom + comparatif + adjectif."],
      ["speaking","Décris en 40-60 mots comment tu utilises la technologie au quotidien, en comparant deux applications ou appareils avec « aussi... que » ou « plus... que ».",[],["aussi... que", "plus... que", "application"]],
    ]
  },
  {
    id:"fr_b1_digital_entertainment", level:"B1", title:"Les loisirs numériques : séries et jeux vidéo", emoji:"🎮", xp:62,
    description:"Apprends le vocabulaire des loisirs numériques et à exprimer la durée avec « ça fait... que ».",
    study: {
      vocab: [
        ["la série", "the series/show"],
        ["le jeu vidéo", "the video game"],
        ["la plateforme de streaming", "the streaming platform"],
        ["devenir accro à quelque chose", "to get hooked on something"],
        ["le marathon de séries", "binge-watching"],
        ["les sous-titres", "the subtitles"],
      ],
      grammar: [
        ["« Ça fait... que » pour exprimer la durée", "« Ça fait » + durée + « que » + présent exprime depuis combien de temps une action continue, équivalent à « to have been doing something ».", "Ça fait deux heures que je regarde cette série. / Ça fait tout le week-end qu'on joue aux jeux vidéo."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « devenir accro à quelque chose » en anglais ?",["to get hooked on something", "the subtitles", "the series/show", "the streaming platform"],0,"« Devenir accro à quelque chose » se dit « to get hooked on something » en anglais."],
      ["mcq","Comment dit-on « le marathon de séries » en anglais ?",["binge-watching", "to get hooked on something", "the streaming platform", "the subtitles"],0,"« Marathon de séries » se dit « binge-watching » en anglais."],
      ["fill","Completa: “___ deux heures que je regarde cette série sans m'arrêter.”",["J'ai", "Ça fait", "Je suis", "Il y a"],1,"« Ça fait » + durée + « que » exprime combien de temps dure une action : « ça fait deux heures que je regarde »."],
      ["translate","Traduis : « We have been playing video games all weekend. »",["On est tout le week-end en train de jouer aux jeux vidéo.", "Ça fait tout le week-end qu'on joue aux jeux vidéo.", "Ça fait tout le week-end qu'on regarde aux jeux vidéo.", "Ça fait tout le week-end qu'on joue aux séries."],1,"« Have been playing all weekend » = « Ça fait tout le week-end qu'on joue », avec « ça fait... que »."],
      ["arrange","Remets dans l'ordre : [accro / je / suis / devenu / à cette série]",["accro cette Je devenu série à suis", "devenu à accro cette série suis Je", "Je suis devenu accro à cette série", "série à cette devenu suis accro Je"],2,"Sujet + verbe + adjectif + préposition + complément."],
      ["writing","Écris 45-65 mots sur une série ou un jeu vidéo auquel tu es devenu accro, en utilisant « ça fait... que » pour dire depuis combien de temps.",[],["ça fait", "accro", "plateforme"]],
    ]
  },
  {
    id:"fr_b2_cybersecurity_privacy", level:"B2", title:"La cybersécurité et la vie privée en ligne", emoji:"🔒", xp:84,
    description:"Parle de cybersécurité en utilisant les propositions relatives déterminatives et explicatives.",
    study: {
      vocab: [
        ["la cybersécurité", "cybersecurity"],
        ["pirater un système", "to hack a system"],
        ["les données personnelles", "personal data"],
        ["un mot de passe sécurisé", "a strong password"],
        ["l'usurpation d'identité", "identity theft/phishing"],
        ["chiffrer les informations", "to encrypt information"],
      ],
      grammar: [
        ["Propositions relatives déterminatives et explicatives", "Les déterminatives (sans virgules) précisent de quoi on parle et ne peuvent pas être supprimées ; les explicatives (entre virgules) ajoutent une information supplémentaire et peuvent être supprimées.", "Les données que nous partageons en ligne peuvent être piratées. (déterminative) / Mes données, que je partage peu, sont bien protégées. (explicative)"],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « l'usurpation d'identité » en anglais ?",["cybersecurity", "identity theft/phishing", "to hack a system", "personal data"],1,"« Usurpation d'identité » se dit « identity theft » ou « phishing » en anglais."],
      ["mcq","Comment dit-on « chiffrer les informations » en anglais ?",["to hack a system", "cybersecurity", "personal data", "to encrypt information"],3,"« Chiffrer les informations » se dit « to encrypt information » en anglais."],
      ["fill","Completa: “Les données ___ nous partageons en ligne peuvent être piratées.”",["que", "dont", "où", "qui"],0,"La proposition déterminative utilise « que » sans virgules pour préciser de quelles données on parle."],
      ["translate","Traduis : « My data, which I rarely share, is well protected. »",["Mes données, que je partage peu, sont bien protégées.", "Mes données que je partage peu sont bien protégées.", "Mes données, que je pirate peu, sont bien protégées.", "Mes données, que je partage peu, sont mal protégées."],0,"La virgule marque une explicative : « mes données, que je partage peu, » ajoute une information supplémentaire."],
      ["arrange","Remets dans l'ordre : [sécurisé / as besoin / mot de passe / d'un / tu]",["besoin passe mot as sécurisé Tu d'un de", "d'un Tu as de sécurisé passe mot besoin", "sécurisé besoin passe d'un mot Tu as de", "Tu as besoin d'un mot de passe sécurisé"],3,"Sujet + verbe + article + nom + adjectif."],
      ["writing","Écris 55-75 mots sur la façon dont tu protèges tes données personnelles en ligne, en utilisant au moins une relative déterminative et une explicative.",[],["que", "qui", "données personnelles"]],
    ]
  },
  {
    id:"fr_c1_historical_memory_heritage", level:"C1", title:"La mémoire historique et le patrimoine culturel", emoji:"🏛️", xp:92,
    description:"Analyse la mémoire historique et le patrimoine culturel avec « être + participe passé » pour les états résultants.",
    study: {
      vocab: [
        ["le patrimoine culturel", "cultural heritage"],
        ["préserver la mémoire historique", "to preserve historical memory"],
        ["un monument commémoratif", "a memorial"],
        ["l'héritage", "the legacy"],
        ["réécrire l'histoire", "to rewrite history"],
        ["l'identité collective", "collective identity"],
      ],
      grammar: [
        ["« Être + participe passé » pour l'état résultant", "« Être » + participe passé décrit l'état résultant d'une action passée, comme adjectif, à la différence du passif décrivant l'action elle-même.", "Le monument est dédié aux victimes. / L'histoire est marquée par des conflits internes."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « l'héritage » en anglais ?",["to rewrite history", "cultural heritage", "the legacy", "a memorial"],2,"« Héritage » se dit « legacy » en anglais."],
      ["mcq","Comment dit-on « réécrire l'histoire » en anglais ?",["cultural heritage", "to rewrite history", "a memorial", "the legacy"],1,"« Réécrire l'histoire » se dit « to rewrite history » en anglais."],
      ["fill","Completa: “Le monument ___ dédié aux victimes du conflit.”",["était", "est", "soit", "a été"],1,"« Être + participe passé » décrit l'état résultant : « le monument est dédié »."],
      ["translate","Traduis : « Collective identity is often shaped by historical memory. »",["L'identité collective est souvent marquée par l'héritage historique.", "L'identité collective est souvent marquée par la mémoire historique.", "Le patrimoine culturel est souvent marqué par la mémoire historique.", "L'identité collective a été souvent marquée par la mémoire historique."],1,"« Is shaped by » comme état résultant se traduit par « est marquée par »."],
      ["arrange","Remets dans l'ordre : [patrimoine / préserver / le / culturel / devons / nous]",["devons patrimoine culturel Nous préserver le", "Nous devons préserver le patrimoine culturel", "le devons culturel Nous préserver patrimoine", "le devons Nous culturel patrimoine préserver"],1,"Sujet + verbe modal + infinitif + article + nom + adjectif."],
      ["writing","Écris 55-75 mots sur un monument ou une tradition qui préserve la mémoire historique de ta communauté, en utilisant au moins deux constructions « être + participe passé ».",[],["est dédié", "est marqué", "patrimoine culturel"]],
    ]
  },
  {
    id:"fr_c2_institutional_ambiguity", level:"C2", title:"L'ambiguïté calculée dans le discours institutionnel", emoji:"🏛️", xp:100,
    description:"Analyse l'ambiguïté institutionnelle et entraîne-toi aux connecteurs de nuance épistémique.",
    study: {
      vocab: [
        ["l'ambiguïté calculée", "calculated ambiguity"],
        ["un communiqué institutionnel", "an institutional statement"],
        ["éviter de s'engager", "to avoid committing oneself"],
        ["le flou délibéré", "deliberate vagueness"],
        ["lire entre les lignes", "to read between the lines"],
        ["un langage évasif", "evasive language"],
      ],
      grammar: [
        ["Connecteurs de nuance épistémique", "Des expressions comme « il convient de souligner que », « il ne fait aucun doute que » ou « en quelque sorte » nuancent le degré de certitude ou de pertinence, typiques du discours institutionnel.", "Il convient de souligner que le communiqué évite de s'engager sur des dates précises. / En quelque sorte, le flou est délibéré."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « lire entre les lignes » en anglais ?",["deliberate vagueness", "to read between the lines", "evasive language", "an institutional statement"],1,"« Lire entre les lignes » se dit « to read between the lines » en anglais."],
      ["mcq","Comment dit-on « un langage évasif » en anglais ?",["calculated ambiguity", "deliberate vagueness", "to read between the lines", "evasive language"],3,"« Un langage évasif » se dit « evasive language » en anglais."],
      ["fill","Completa: “Il ___ de souligner que le communiqué évite de s'engager sur des dates précises.”",["y a", "convient", "est", "peut"],1,"« Il convient de souligner que » est un connecteur fixe de nuance épistémique qui introduit une observation pertinente."],
      ["translate","Traduis avec précision : « In a way, the vagueness is deliberate. »",["En quelque sorte, le flou est évasif.", "En quelque sorte, le flou est délibéré.", "De quelque sorte, le flou est délibéré.", "En quelque sorte, l'ambiguïté est calculée."],1,"« In a way » = « en quelque sorte », connecteur fixe de nuance."],
      ["arrange","Remets dans l'ordre : [aucun / doute / ne / fait / que / il / le langage / est évasif]",["que évasif ne Il le fait aucun langage est doute", "Il est que fait le ne aucun langage doute évasif", "Il aucun doute est le fait ne langage évasif que", "Il ne fait aucun doute que le langage est évasif"],3,"Connecteur fixe « il ne fait aucun doute que » + subordonnée."],
      ["writing","Écris 55-75 mots analysant un communiqué institutionnel réel ou inventé qui utilise une ambiguïté calculée, en utilisant au moins deux connecteurs de nuance épistémique.",[],["il convient de souligner que", "il ne fait aucun doute que", "en quelque sorte"]],
    ]
  },
  {
    id:"fr_a1_sports_exercise", level:"A1", title:"Les sports et l'exercice", emoji:"⚽", xp:38,
    description:"Apprends le vocabulaire du sport et à exprimer tes goûts avec le verbe « aimer ».",
    study: {
      vocab: [
        ["le football", "soccer/football"],
        ["la natation", "swimming"],
        ["courir", "to run"],
        ["la salle de sport", "the gym"],
        ["faire de l'exercice", "to exercise"],
        ["l'équipe", "the team"],
      ],
      grammar: [
        ["Le verbe « aimer » + infinitif/nom pour exprimer des goûts", "En français, « aimer » fonctionne comme un verbe normal, conjugué avec le sujet qui aime, suivi d'un infinitif ou d'un nom (souvent avec article défini).", "J'aime nager. / Elle aime les sports d'équipe."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « la natation » en anglais ?",["the gym", "soccer/football", "swimming", "the team"],2,"« Natation » se dit « swimming » en anglais."],
      ["mcq","Comment dit-on « l'équipe » en anglais ?",["to exercise", "the team", "to run", "soccer/football"],1,"« Équipe » se dit « team » en anglais."],
      ["fill","Completa: “J'___ courir le matin.”",["aimes", "aime", "aimer", "aiment"],1,"« Aimer » se conjugue avec le sujet « je » : « j'aime courir »."],
      ["translate","Traduis : « She likes team sports. »",["Elles aiment les sports d'équipe.", "Elle aime le sport d'équipe.", "Elle aime les sports d'équipe.", "Elle aime les sports individuels."],2,"« Elle aime » concorde avec le sujet singulier « elle »."],
      ["arrange","Remets dans l'ordre : [sport / vais / je / de / faire / à la salle]",["sport faire de la vais Je à salle", "Je vais à la salle de sport faire", "de salle faire la vais Je à sport", "Je vais la faire salle à sport de"],1,"Sujet + « aller » + préposition + article + nom + infinitif."],
      ["writing","Décris en 20-30 mots quels sports tu aimes et à quelle fréquence tu fais de l'exercice, en utilisant « aimer ».",[],["j'aime", "je fais de l'exercice", "sport"]],
    ]
  },
  {
    id:"fr_a2_household_chores", level:"A2", title:"Les tâches ménagères", emoji:"🧹", xp:48,
    description:"Apprends le vocabulaire des tâches ménagères et à exprimer une obligation impersonnelle avec « il faut ».",
    study: {
      vocab: [
        ["balayer", "to sweep"],
        ["laver la vaisselle", "to wash the dishes"],
        ["sortir les poubelles", "to take out the trash"],
        ["repasser les vêtements", "to iron the clothes"],
        ["faire le lit", "to make the bed"],
        ["passer l'aspirateur", "to vacuum"],
      ],
      grammar: [
        ["« Il faut » + infinitif pour l'obligation impersonnelle", "« Il faut » + infinitif exprime une obligation générale, sans préciser qui doit la faire, à la différence de « devoir » qui prend un sujet.", "Il faut sortir les poubelles tous les jours. / Avant de partir, il faut faire le lit."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « laver la vaisselle » en anglais ?",["to take out the trash", "to wash the dishes", "to vacuum", "to make the bed"],1,"« Laver la vaisselle » se dit « to wash the dishes » en anglais."],
      ["mcq","Comment dit-on « passer l'aspirateur » en anglais ?",["to wash the dishes", "to make the bed", "to vacuum", "to iron the clothes"],2,"« Passer l'aspirateur » se dit « to vacuum » en anglais."],
      ["fill","Completa: “Avant de sortir de la maison, ___ faut faire le lit.”",["on", "elle", "ça", "il"],3,"« Il faut » + infinitif est une expression impersonnelle fixe : « il faut faire »."],
      ["translate","Traduis : « You have to take out the trash every day. »",["Il faut balayer les poubelles tous les jours.", "Tu dois sortir les poubelles tous les jours.", "Il faut sortir les poubelles une fois par semaine.", "Il faut sortir les poubelles tous les jours."],3,"« You have to » ici est impersonnel et se traduit mieux par « il faut »."],
      ["arrange","Remets dans l'ordre : [vaisselle / laver / faut / la / il]",["faut vaisselle la laver Il", "laver vaisselle Il faut la", "Il faut laver la vaisselle", "faut laver Il la vaisselle"],2,"« Il faut » + infinitif + complément."],
      ["speaking","Décris en 40-60 mots quelles tâches ménagères il faut faire chez toi chaque semaine, en utilisant « il faut ».",[],["il faut", "chaque semaine", "à la maison"]],
    ]
  },
  {
    id:"fr_b1_dating_love", level:"B1", title:"Les rendez-vous amoureux et l'amour", emoji:"💕", xp:62,
    description:"Apprends du vocabulaire sur les rendez-vous amoureux et à faire des promesses et prédictions avec le futur simple.",
    study: {
      vocab: [
        ["avoir un rendez-vous", "to go on a date"],
        ["tomber amoureux/amoureuse de quelqu'un", "to fall in love with someone"],
        ["rompre avec quelqu'un", "to break up with someone"],
        ["le/la partenaire", "the partner/couple"],
        ["manquer à quelqu'un", "to miss someone"],
        ["se fiancer/s'engager", "to get engaged/commit"],
      ],
      grammar: [
        ["Le futur simple pour les promesses et prédictions", "Le futur simple (-erai, -eras, -era...) sert à faire des promesses formelles ou à prédire ce qui arrivera, plus définitif que « aller + infinitif ».", "Je te promets que je ne romprai jamais avec toi. / Je crois que vous vous fiancerez bientôt."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « tomber amoureux de quelqu'un » en anglais ?",["to break up with someone", "to get engaged/commit", "the partner/couple", "to fall in love with someone"],3,"« Tomber amoureux de quelqu'un » se dit « to fall in love with someone » en anglais."],
      ["mcq","Comment dit-on « manquer à quelqu'un » en anglais ?",["to go on a date", "to miss someone", "the partner/couple", "to break up with someone"],1,"« Manquer à quelqu'un » se dit « to miss someone » en anglais."],
      ["fill","Completa: “Je te promets que je ne ___ jamais avec toi.”",["ai rompu", "rompais", "romps", "romprai"],3,"Le futur simple « romprai » exprime une promesse ferme sur quelque chose qui n'arrivera pas."],
      ["translate","Traduis : « I think you two will get engaged soon. »",["Je crois que vous tomberez amoureux bientôt.", "Je crois que vous vous fiancerez bientôt.", "Je crois que vous vous fiancerez demain.", "Je crois que vous vous fiancez bientôt."],1,"« Will get engaged » = « vous vous fiancerez », futur simple pour une prédiction."],
      ["arrange","Remets dans l'ordre : [rendez-vous / vais / avoir / un / demain]",["Je vais avoir un rendez-vous demain", "demain avoir rendez-vous un Je vais", "demain rendez-vous avoir Je un vais", "demain avoir rendez-vous vais un Je"],0,"« Aller » + infinitif + article + nom + adverbe de temps."],
      ["writing","Écris 45-65 mots sur une relation (réelle ou inventée), en utilisant au moins deux verbes au futur simple pour faire des promesses ou des prédictions.",[],["promettrai/promettra", "serons", "partenaire"]],
    ]
  },
  {
    id:"fr_b2_sustainable_tourism", level:"B2", title:"Le tourisme durable et le surtourisme", emoji:"🧳", xp:84,
    description:"Parle du tourisme durable en utilisant « à moins que » et « pourvu que » + subjonctif.",
    study: {
      vocab: [
        ["le surtourisme", "overtourism"],
        ["saturer une destination touristique", "to overcrowd a tourist destination"],
        ["le tourisme durable", "sustainable tourism"],
        ["faire grimper les loyers locaux", "to drive up local housing costs"],
        ["répartir l'impact touristique", "to spread out tourism's impact"],
        ["respecter la culture locale", "to respect the local culture"],
      ],
      grammar: [
        ["« À moins que » et « pourvu que » + subjonctif", "« À moins que » (unless) et « pourvu que » (provided that) introduisent une condition et sont suivies du subjonctif.", "La destination restera saturée à moins que le tourisme ne soit régulé. / Le tourisme sera positif pourvu que la culture locale soit respectée."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « faire grimper les loyers locaux » en anglais ?",["sustainable tourism", "to overcrowd a tourist destination", "to drive up local housing costs", "to spread out tourism's impact"],2,"« Faire grimper les loyers locaux » se dit « to drive up local housing costs » en anglais."],
      ["mcq","Comment dit-on « répartir l'impact touristique » en anglais ?",["to respect the local culture", "to overcrowd a tourist destination", "to spread out tourism's impact", "overtourism"],2,"« Répartir l'impact touristique » se dit « to spread out tourism's impact » en anglais."],
      ["fill","Completa: “La destination restera saturée à moins que le tourisme ne ___ régulé.”",["soit", "sera", "serait", "est"],0,"« À moins que » exige le subjonctif : « à moins que... ne soit régulé »."],
      ["translate","Traduis : « Tourism will be positive provided that the local culture is respected. »",["Le tourisme sera positif à moins que la culture locale soit respectée.", "Le tourisme sera positif pourvu que la culture locale est respectée.", "Le tourisme sera positif pourvu que la culture locale soit ignorée.", "Le tourisme sera positif pourvu que la culture locale soit respectée."],3,"« Provided that » = « pourvu que », suivi du subjonctif : « soit respectée »."],
      ["arrange","Remets dans l'ordre : [saturées / destinations / sont / beaucoup de / touristiques]",["saturées touristiques destinations de sont Beaucoup", "saturées touristiques sont de destinations Beaucoup", "destinations touristiques de sont Beaucoup saturées", "Beaucoup de destinations touristiques sont saturées"],3,"Sujet + verbe + adjectif."],
      ["writing","Écris 55-75 mots sur le surtourisme dans une destination que tu connais, en utilisant au moins un « à moins que » et un « pourvu que » avec subjonctif.",[],["à moins que", "pourvu que", "durable"]],
    ]
  },
  {
    id:"fr_c1_gastronomy_identity", level:"C1", title:"La gastronomie et l'identité culturelle", emoji:"🍽️", xp:92,
    description:"Analyse la gastronomie comme identité culturelle en utilisant des structures emphatiques avec « ce qui/ce que ».",
    study: {
      vocab: [
        ["l'appellation d'origine protégée", "protected designation of origin"],
        ["un plat emblématique", "an iconic/signature dish"],
        ["la fusion culinaire", "culinary fusion"],
        ["préserver une recette traditionnelle", "to preserve a traditional recipe"],
        ["s'approprier une tradition culinaire", "to appropriate a culinary tradition"],
        ["le palais collectif", "the collective palate"],
      ],
      grammar: [
        ["Structures emphatiques avec « ce qui/ce que »", "« Ce qui/ce que » + verbe + « c'est » met l'accent sur un élément de la phrase, lui donnant plus de relief, très utilisé en registre argumentatif.", "Ce qui définit une culture, c'est sa gastronomie. / Ce qui inquiète les chefs locaux, c'est l'appropriation de leurs recettes."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « un plat emblématique » en anglais ?",["the collective palate", "an iconic/signature dish", "to preserve a traditional recipe", "protected designation of origin"],1,"« Un plat emblématique » se dit « an iconic/signature dish » en anglais."],
      ["mcq","Comment dit-on « s'approprier une tradition culinaire » en anglais ?",["to preserve a traditional recipe", "to appropriate a culinary tradition", "an iconic/signature dish", "culinary fusion"],1,"« S'approprier une tradition culinaire » se dit « to appropriate a culinary tradition » en anglais."],
      ["fill","Completa: “Ce qui ___ une culture, c'est en grande partie sa gastronomie.”",["définirait", "définissent", "définit", "définir"],2,"La structure emphatique « ce qui + verbe + c'est » met le verbe au singulier, accordé avec « ce qui »."],
      ["translate","Traduis avec une structure emphatique : « What worries local chefs is the appropriation of their recipes. »",["Ce qui inquiètent les chefs locaux, c'est l'appropriation de leurs recettes.", "Ce qui inquiète les chefs locaux, c'est l'appropriation de leurs recettes.", "Ce qui inquiète les chefs locaux, c'est la fusion de leurs recettes.", "Ce que inquiète les chefs locaux, c'est l'appropriation de leurs recettes."],1,"Le verbe « inquiète » s'accorde au singulier avec « ce qui », sujet de la phrase emphatique."],
      ["arrange","Remets dans l'ordre : [recette / préserver / cette / devons / traditionnelle / nous]",["recette cette traditionnelle préserver Nous devons", "Nous devons préserver cette recette traditionnelle", "Nous préserver cette recette devons traditionnelle", "recette préserver traditionnelle Nous devons cette"],1,"Sujet + verbe modal + infinitif + objet démonstratif + nom + adjectif."],
      ["writing","Écris 55-75 mots sur un plat que tu considères comme faisant partie de ton identité culturelle, en utilisant au moins deux structures emphatiques avec « ce qui/ce que ».",[],["ce qui définit", "ce qui représente", "identité culturelle"]],
    ]
  },
  {
    id:"fr_c2_crisis_rhetoric", level:"C2", title:"La rhétorique de la crise et la panique morale", emoji:"📢", xp:100,
    description:"Analyse la rhétorique de crise et entraîne-toi aux structures d'intensification rhétorique.",
    study: {
      vocab: [
        ["la panique morale", "moral panic"],
        ["une crise fabriquée", "a manufactured crisis"],
        ["catastrophiser une situation", "to catastrophize a situation"],
        ["un bouc émissaire", "a scapegoat"],
        ["disproportionner une menace", "to blow a threat out of proportion"],
        ["un discours alarmiste", "alarmist rhetoric"],
      ],
      grammar: [
        ["Structures d'intensification rhétorique", "« Non seulement... mais aussi » et « de plus en plus » intensifient une affirmation en accumulant la gravité — procédé typique du discours de crise et de la panique morale.", "Non seulement la menace est exagérée, mais on cherche aussi un bouc émissaire. / Le discours alarmiste est de plus en plus fréquent dans les médias."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « un bouc émissaire » en anglais ?",["a scapegoat", "to catastrophize a situation", "moral panic", "alarmist rhetoric"],0,"« Un bouc émissaire » se dit « a scapegoat » en anglais."],
      ["mcq","Comment dit-on « disproportionner une menace » en anglais ?",["alarmist rhetoric", "moral panic", "to blow a threat out of proportion", "to catastrophize a situation"],2,"« Disproportionner une menace » se dit « to blow a threat out of proportion » en anglais."],
      ["fill","Completa: “Non seulement la menace est exagérée, ___ on cherche aussi un bouc émissaire.”",["cependant", "mais", "car", "donc"],1,"« Non seulement... mais aussi » intensifie une affirmation en ajoutant un second élément."],
      ["translate","Traduis avec précision : « Alarmist rhetoric is becoming increasingly common in the media. »",["Le discours alarmiste est de plus en plus grave dans les médias.", "Le discours alarmiste est de plus en plus fréquent dans les médias.", "Le discours alarmiste est de plus en plus rare dans les médias.", "La panique morale est de plus en plus fréquente dans les médias."],1,"« Increasingly common » = « de plus en plus fréquent », structure d'intensification graduelle."],
      ["arrange","Remets dans l'ordre : [émissaire / cherchent / un / médias / bouc / les]",["médias un cherchent bouc Les émissaire", "Les médias cherchent un bouc émissaire", "Les un cherchent bouc émissaire médias", "cherchent un Les bouc émissaire médias"],1,"Sujet + verbe + article + nom + adjectif."],
      ["writing","Écris 55-75 mots analysant un cas réel ou inventé de panique morale dans les médias, en utilisant au moins une structure « non seulement... mais aussi » et une avec « de plus en plus ».",[],["non seulement... mais aussi", "de plus en plus", "panique morale"]],
    ]
  },
  {
    id:"fr_a1_school_supplies_subjects", level:"A1", title:"À l'école : fournitures et matières", emoji:"🎒", xp:38,
    description:"Apprends le vocabulaire scolaire et à bien utiliser les articles définis et indéfinis.",
    study: {
      vocab: [
        ["le cahier", "the notebook"],
        ["le crayon", "the pencil"],
        ["le sac à dos", "the backpack"],
        ["les mathématiques", "math"],
        ["l'histoire", "history"],
        ["le professeur/la professeure", "the teacher"],
      ],
      grammar: [
        ["Articles définis et indéfinis", "Les articles définis (le, la, les) désignent quelque chose de spécifique ou déjà connu ; les indéfinis (un, une, des) désignent quelque chose de non spécifique ou mentionné pour la première fois.", "J'ai un nouveau cahier. / Le cahier est dans le sac à dos."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « le crayon » en anglais ?",["math", "the teacher", "the pencil", "the notebook"],2,"« Crayon » se dit « pencil » en anglais."],
      ["mcq","Comment dit-on « les mathématiques » en anglais ?",["history", "the notebook", "the pencil", "math"],3,"« Mathématiques » se dit « math » en anglais."],
      ["fill","Completa: “J'ai ___ nouveau sac à dos pour l'école.”",["des", "une", "un", "le"],2,"On utilise l'article indéfini « un » car c'est la première fois qu'on le mentionne."],
      ["translate","Traduis : « The notebook is in the backpack. »",["Le crayon est dans le sac à dos.", "Le cahier est dans la salle de classe.", "Un cahier est dans le sac à dos.", "Le cahier est dans le sac à dos."],3,"« The notebook » est déjà connu, donc on utilise l'article défini « le »."],
      ["arrange","Remets dans l'ordre : [beaucoup / j'aime / l'histoire]",["l'histoire J'aime beaucoup", "beaucoup J'aime l'histoire", "J'aime l'histoire beaucoup", "J'aime beaucoup l'histoire"],3,"Sujet + verbe + adverbe + article défini + nom."],
      ["writing","Décris en 20-30 mots quelles fournitures scolaires tu as et quelle matière tu préfères, en utilisant des articles définis et indéfinis.",[],["un/une", "le/la", "j'aime"]],
    ]
  },
  {
    id:"fr_a2_post_office_packages", level:"A2", title:"La poste et les colis", emoji:"📦", xp:48,
    description:"Apprends le vocabulaire postal et à utiliser les pronoms objets directs (le/la/les).",
    study: {
      vocab: [
        ["le colis", "the package"],
        ["la lettre", "the letter"],
        ["le timbre", "the stamp"],
        ["envoyer par la poste", "to mail/send"],
        ["la boîte aux lettres", "the mailbox"],
        ["l'adresse", "the address"],
      ],
      grammar: [
        ["Pronoms objets directs (le/la/les)", "Les pronoms objets directs remplacent un nom déjà mentionné, s'accordent en genre et en nombre, et se placent avant le verbe conjugué.", "La lettre ? Je l'ai envoyée hier. / Les colis ? Je les ai reçus ce matin."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « le timbre » en anglais ?",["the letter", "the stamp", "to mail/send", "the package"],1,"« Timbre » se dit « stamp » en anglais."],
      ["mcq","Comment dit-on « la boîte aux lettres » en anglais ?",["the mailbox", "the package", "to mail/send", "the address"],0,"« Boîte aux lettres » se dit « mailbox » en anglais."],
      ["fill","Completa: “Le colis ? Je ___ ai reçu ce matin.”",["l'", "le", "les", "la"],0,"« Le colis » est masculin singulier et devient « l' » devant une voyelle : « je l'ai reçu »."],
      ["translate","Traduis : « The letters? I sent them yesterday. »",["Les lettres ? Je les ai envoyé hier.", "Les lettres ? Je l'ai envoyées hier.", "Le lettre ? Je les ai envoyées hier.", "Les lettres ? Je les ai envoyées hier."],3,"« Les lettres » est féminin pluriel, donc on le remplace par « les »."],
      ["arrange","Remets dans l'ordre : [adresse / j'ai besoin / ton / de]",["adresse ton de J'ai besoin", "J'ai besoin de ton adresse", "ton adresse besoin de J'ai", "de besoin ton adresse J'ai"],1,"Sujet + verbe + préposition + objet possessif + nom."],
      ["speaking","Décris en 40-60 mots la dernière fois que tu as envoyé une lettre ou un colis, en utilisant des pronoms objets directs (le/la/les).",[],["je l'ai envoyé(e)", "je les ai reçu(e)s", "colis"]],
    ]
  },
  {
    id:"fr_b1_movies_theater", level:"B1", title:"Aller au cinéma et au théâtre", emoji:"🎬", xp:62,
    description:"Apprends le vocabulaire du cinéma et du théâtre et à construire des phrases temporelles avec « quand », « pendant que » et « avant que ».",
    study: {
      vocab: [
        ["le billet", "the ticket"],
        ["la première", "the premiere"],
        ["le casting/la distribution", "the cast"],
        ["les effets spéciaux", "special effects"],
        ["le siège", "the seat"],
        ["l'entracte", "the intermission"],
      ],
      grammar: [
        ["Phrases temporelles avec « quand », « pendant que » et « avant que »", "« Quand » et « pendant que » + indicatif décrivent des actions habituelles ou simultanées ; « avant que » exige le subjonctif car il introduit une action pas encore réalisée.", "J'achète les billets quand j'arrive au cinéma. / On discute pendant qu'on attend la première. / On arrive avant que le film ne commence."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « la première » en anglais ?",["the seat", "the cast", "the premiere", "the ticket"],2,"« Première » se dit « premiere » en anglais."],
      ["mcq","Comment dit-on « le casting/la distribution » en anglais ?",["the cast", "the seat", "the ticket", "the intermission"],0,"« Casting/distribution » se dit « cast » en anglais."],
      ["fill","Completa: “On arrive avant que le film ne ___.”",["commence", "commencera", "commençait", "a commencé"],0,"« Avant que » exige le subjonctif car l'action n'a pas encore eu lieu : « avant que... commence »."],
      ["translate","Traduis : « We talk while we wait for the premiere. »",["On discute pendant qu'on attende la première.", "On discute pendant qu'on attend la première.", "On discute quand on attend la première.", "On discute pendant qu'on attend l'entracte."],1,"« Pendant que » + indicatif décrit des actions simultanées : « pendant qu'on attend »."],
      ["arrange","Remets dans l'ordre : [cinéma / allons / au / arrivant / en]",["En allons cinéma au arrivant", "En arrivant allons au cinéma", "au allons En arrivant cinéma", "cinéma arrivant En allons au"],1,"Gérondif + verbe + préposition + nom."],
      ["writing","Écris 45-65 mots sur ta dernière visite au cinéma ou au théâtre, en utilisant au moins deux phrases temporelles avec « quand », « pendant que » ou « avant que ».",[],["quand", "pendant que", "avant que"]],
    ]
  },
  {
    id:"fr_b2_social_activism_protests", level:"B2", title:"L'activisme social et les manifestations", emoji:"✊", xp:84,
    description:"Parle d'activisme social en utilisant le subjonctif après les verbes d'influence (exiger, demander que).",
    study: {
      vocab: [
        ["une manifestation", "a protest"],
        ["exiger un changement", "to demand change"],
        ["signer une pétition", "to sign a petition"],
        ["sensibiliser sur quelque chose", "to raise awareness about something"],
        ["un collectif/une organisation", "a collective/organization"],
        ["mobiliser les gens", "to mobilize people"],
      ],
      grammar: [
        ["Le subjonctif après les verbes d'influence", "Des verbes comme « exiger », « demander » ou « suggérer » + « que » exigent le subjonctif dans la subordonnée car ils cherchent à influencer l'action d'une autre personne.", "Les manifestants exigent que le gouvernement agisse. / Le collectif demande que la pétition soit signée."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « sensibiliser sur quelque chose » en anglais ?",["to mobilize people", "to demand change", "to raise awareness about something", "a protest"],2,"« Sensibiliser sur quelque chose » se dit « to raise awareness about something » en anglais."],
      ["mcq","Comment dit-on « mobiliser les gens » en anglais ?",["to mobilize people", "a collective/organization", "to demand change", "to raise awareness about something"],0,"« Mobiliser les gens » se dit « to mobilize people » en anglais."],
      ["fill","Completa: “Les manifestants exigent que le gouvernement ___.”",["agit", "agira", "agirait", "agisse"],3,"« Exiger que » exige le subjonctif : « exigent que... agisse »."],
      ["translate","Traduis : « The collective is asking people to sign the petition. »",["Le collectif exige que les gens signent la pétition.", "Le collectif demande que les gens signent la manifestation.", "Le collectif demande que les gens signent la pétition.", "Le collectif demande que les gens signeront la pétition."],2,"« Demander que » exige le subjonctif : « demande que... signent »."],
      ["arrange","Remets dans l'ordre : [pétition / vais / signer / la]",["Je vais signer la pétition", "Je pétition signer vais la", "Je pétition la signer vais", "vais Je la signer pétition"],0,"« Aller » + infinitif + article + nom."],
      ["writing","Écris 55-75 mots sur une cause sociale qui te tient à cœur, en utilisant au moins deux verbes d'influence + subjonctif (exiger que, demander que, suggérer que).",[],["j'exige que", "je demande que", "manifestation"]],
    ]
  },
  {
    id:"fr_c1_aging_population_pensions", level:"C1", title:"Le vieillissement démographique et les retraites", emoji:"👴", xp:92,
    description:"Analyse le vieillissement démographique avec des propositions consécutives (« si...que », « de telle sorte que »).",
    study: {
      vocab: [
        ["le vieillissement démographique", "population aging"],
        ["le système de retraite", "the pension system"],
        ["le taux de natalité", "the birth rate"],
        ["l'espérance de vie", "life expectancy"],
        ["soutenir le système de retraite", "to sustain the pension system"],
        ["le fossé générationnel", "the generational gap"],
      ],
      grammar: [
        ["Propositions consécutives : « si...que » et « de telle sorte que »", "Les propositions consécutives expriment une conséquence issue d'une intensité ou d'une manière. « Si + adjectif + que » souligne le degré ; « de telle sorte que » introduit le résultat d'une action.", "La population vieillit si vite que le système de retraite est en péril. / La natalité a baissé de telle sorte qu'il manque de jeunes travailleurs."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « le taux de natalité » en anglais ?",["the generational gap", "the birth rate", "population aging", "to sustain the pension system"],1,"« Taux de natalité » se dit « birth rate » en anglais."],
      ["mcq","Comment dit-on « soutenir le système de retraite » en anglais ?",["the pension system", "to sustain the pension system", "the generational gap", "the birth rate"],1,"« Soutenir le système de retraite » se dit « to sustain the pension system » en anglais."],
      ["fill","Completa: “La population vieillit si vite ___ le système de retraite est en péril.”",["que", "comme", "donc", "ainsi"],0,"« Si + adjectif/adverbe + que » introduit la conséquence : « si vite que... est en péril »."],
      ["translate","Traduis avec une proposition consécutive : « The birth rate has dropped in such a way that young workers are lacking. »",["L'espérance de vie a baissé de telle sorte qu'il manque de jeunes travailleurs.", "La natalité a baissé si sorte qu'il manque de jeunes travailleurs.", "La natalité a baissé de telle sorte qu'il y a trop de jeunes travailleurs.", "La natalité a baissé de telle sorte qu'il manque de jeunes travailleurs."],3,"« In such a way that » = « de telle sorte que », introduisant la conséquence."],
      ["arrange","Remets dans l'ordre : [retraite / système / préoccupe / le / de / beaucoup de gens]",["de préoccupe beaucoup gens Le retraite système de", "Le système préoccupe beaucoup retraite de de gens", "de beaucoup système de gens Le retraite préoccupe", "Le système de retraite préoccupe beaucoup de gens"],3,"Sujet + verbe + complément."],
      ["writing","Écris 55-75 mots sur le vieillissement démographique dans ton pays, en utilisant au moins une phrase avec « si...que » et une avec « de telle sorte que ».",[],["si...que", "de telle sorte que", "vieillissement"]],
    ]
  },
  {
    id:"fr_c2_rhetoric_of_silence", level:"C2", title:"La rhétorique du silence et du non-dit", emoji:"🤐", xp:100,
    description:"Analyse la rhétorique du silence et entraîne-toi à l'ellipse à des fins rhétoriques.",
    study: {
      vocab: [
        ["le silence éloquent", "eloquent silence"],
        ["omettre délibérément quelque chose", "to deliberately omit something"],
        ["le non-dit", "the unsaid"],
        ["un vide discursif", "a discursive gap"],
        ["laisser quelque chose en suspens", "to leave something hanging"],
        ["l'ellipse rhétorique", "rhetorical ellipsis"],
      ],
      grammar: [
        ["L'ellipse à des fins rhétoriques", "L'ellipse omet un élément sous-entendu par le contexte, créant de l'emphase ou laissant une idée délibérément incomplète — un procédé puissant dans le discours politique et littéraire.", "Certains se taisent par peur ; d'autres, par complicité. (on omet « se taisent ») / Il a promis des réformes... et le silence. (on omet le verbe attendu)"],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « un vide discursif » en anglais ?",["to leave something hanging", "the unsaid", "a discursive gap", "to deliberately omit something"],2,"« Un vide discursif » se dit « a discursive gap » en anglais."],
      ["mcq","Comment dit-on « laisser quelque chose en suspens » en anglais ?",["rhetorical ellipsis", "eloquent silence", "a discursive gap", "to leave something hanging"],3,"« Laisser quelque chose en suspens » se dit « to leave something hanging » en anglais."],
      ["fill","Completa: “Certains se taisent par peur ; d'autres, par ___.”",["complicité", "se taisent complicité", "que complicité", "est complicité"],0,"L'ellipse omet le verbe répété « se taisent », ne laissant que le complément : « d'autres, par complicité »."],
      ["translate","Traduis avec ellipse rhétorique : « He promised reforms... and silence. »",["Il a promis des réformes... et le silence.", "Il a promis des réformes... et un silence.", "Il a promis des réformes... et était le silence.", "Il a promis des réformes... et du bruit."],0,"L'ellipse rhétorique omet le verbe attendu après les points de suspension, ne laissant que « et le silence »."],
      ["arrange","Remets dans l'ordre : [dit / parfois / plus / le silence / que / les mots]",["silence mots dit les que Le parfois plus", "Le silence dit parfois plus que les mots", "parfois Le dit les mots plus que silence", "parfois mots que Le dit plus silence les"],1,"Sujet + verbe + adverbe + comparatif + complément."],
      ["writing","Écris 55-75 mots analysant un exemple (réel ou inventé) de silence rhétorique dans un discours, en utilisant au moins une ellipse délibérée.",[],["le non-dit", "silence éloquent", "omettre"]],
    ]
  },
  {
    id:"fr_a1_time_parts_of_day", level:"A1", title:"L'heure et les moments de la journée", emoji:"🕐", xp:38,
    description:"Apprends à dire l'heure et les moments de la journée avec des prépositions de temps.",
    study: {
      vocab: [
        ["le matin", "the morning"],
        ["l'après-midi", "the afternoon"],
        ["le soir/la nuit", "the night"],
        ["midi", "noon"],
        ["minuit", "midnight"],
        ["pile", "o'clock/sharp"],
      ],
      grammar: [
        ["« Quelle heure est-il ? » + prépositions de temps", "Pour demander l'heure, on dit « Quelle heure est-il ? » ; pour répondre, « il est une heure » (singulier) ou « il est + nombre + heures » (pluriel), avec « du matin/de l'après-midi/du soir » pour préciser le moment.", "Il est trois heures de l'après-midi. / Il est une heure pile du matin."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « minuit » en anglais ?",["the morning", "noon", "the night", "midnight"],3,"« Minuit » se dit « midnight » en anglais."],
      ["mcq","Comment dit-on « pile » en anglais ?",["noon", "the night", "the afternoon", "o'clock/sharp"],3,"« Pile » se dit « o'clock » ou « sharp » en anglais."],
      ["fill","Completa: “Il ___ trois heures de l'après-midi.”",["fait", "sont", "est", "a"],2,"On utilise toujours « il est » pour l'heure, même au pluriel : « il est trois heures »."],
      ["translate","Traduis : « It's one o'clock in the morning. »",["Il est deux heures du matin.", "Il est une heure du matin.", "Il est une heures du matin.", "Il est une heure de l'après-midi."],1,"Avec « une heure » (singulier), on n'ajoute pas de « s » à « heure »."],
      ["arrange","Remets dans l'ordre : [après-midi / quatre / il / heures / est / de l']",["Il est quatre heures de l'après-midi", "de heures est Il quatre l'après-midi", "l'après-midi est heures quatre de Il", "est l'après-midi Il quatre heures de"],0,"Sujet + verbe + nombre + nom + préposition + moment de la journée."],
      ["writing","Décris en 20-30 mots ta routine quotidienne en mentionnant des heures précises, en utilisant « il est » et « du matin/de l'après-midi/du soir ».",[],["il est", "du matin", "de l'après-midi"]],
    ]
  },
  {
    id:"fr_a2_bank_open_account", level:"A2", title:"À la banque : ouvrir un compte", emoji:"🏦", xp:48,
    description:"Apprends le vocabulaire bancaire de base et à utiliser « pouvoir » pour la possibilité et la permission.",
    study: {
      vocab: [
        ["le compte bancaire", "the bank account"],
        ["le distributeur automatique", "the ATM"],
        ["retirer de l'argent", "to withdraw money"],
        ["déposer de l'argent", "to deposit money"],
        ["la carte de débit", "the debit card"],
        ["le solde", "the balance"],
      ],
      grammar: [
        ["« Pouvoir » + infinitif pour la possibilité et la permission", "« Pouvoir » + infinitif exprime la capacité, la possibilité ou la permission, selon le contexte.", "Est-ce que je peux ouvrir un compte ici ? / Tu peux retirer de l'argent à n'importe quel distributeur."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « retirer de l'argent » en anglais ?",["the balance", "to withdraw money", "the ATM", "the bank account"],1,"« Retirer de l'argent » se dit « to withdraw money » en anglais."],
      ["mcq","Comment dit-on « le solde » en anglais ?",["the bank account", "the balance", "to withdraw money", "to deposit money"],1,"« Solde » se dit « balance » en anglais."],
      ["fill","Completa: “Est-ce que je ___ ouvrir un compte ici, s'il vous plaît ?”",["pouvons", "peut", "peux", "pouvez"],2,"On utilise « peux » à la première personne pour demander une permission : « est-ce que je peux »."],
      ["translate","Traduis : « You can withdraw money at any ATM. »",["Tu peux retirer de l'argent à n'importe quel distributeur.", "Tu peux déposer de l'argent à n'importe quel distributeur.", "Tu dois retirer de l'argent à n'importe quel distributeur.", "Tu peux retirer de l'argent à n'importe quelle banque."],0,"« You can withdraw » = « tu peux retirer », avec « pouvoir » + infinitif."],
      ["arrange","Remets dans l'ordre : [solde / consulter / veux / mon / je]",["solde consulter mon Je veux", "Je veux consulter mon solde", "consulter veux Je solde mon", "Je solde mon veux consulter"],1,"Sujet + verbe + infinitif + objet possessif + nom."],
      ["speaking","Décris en 40-60 mots comment tu ouvrirais un compte bancaire, en utilisant « pouvoir » pour demander une permission ou exprimer une possibilité.",[],["je peux", "tu peux", "compte"]],
    ]
  },
  {
    id:"fr_b1_train_plane_travel", level:"B1", title:"Voyager en train et en avion : retards et changements", emoji:"🚄", xp:62,
    description:"Apprends le vocabulaire des longs voyages et à utiliser « bien que » et « même si ».",
    study: {
      vocab: [
        ["le retard", "the delay"],
        ["rater le vol/le train", "to miss the flight/train"],
        ["faire une escale", "to make a layover/stopover"],
        ["le quai", "the platform"],
        ["annuler un vol", "to cancel a flight"],
        ["la place côté fenêtre/couloir", "the window/aisle seat"],
      ],
      grammar: [
        ["« Bien que » + subjonctif et « même si » + indicatif", "« Bien que » exige toujours le subjonctif, même pour un fait réel ; « même si » (even if) exprime une concession réelle ou hypothétique avec l'indicatif.", "Bien que le train soit arrivé en retard, j'ai eu mon vol. / Même si le vol est annulé, nous avons une autre option."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « faire une escale » en anglais ?",["to make a layover/stopover", "the delay", "to cancel a flight", "the platform"],0,"« Faire une escale » se dit « to make a layover » ou « stopover » en anglais."],
      ["mcq","Comment dit-on « le quai » en anglais ?",["to cancel a flight", "to make a layover/stopover", "the platform", "the delay"],2,"« Quai » se dit « platform » en anglais."],
      ["fill","Completa: “Bien que le train ___ en retard, j'ai eu mon vol.”",["arrivera", "arrivait", "soit arrivé", "est arrivé"],2,"« Bien que » exige toujours le subjonctif, même pour un fait réel : « bien que... soit arrivé »."],
      ["translate","Traduis : « Even if the flight is cancelled, we have another option. »",["Même si le vol soit annulé, nous avons une autre option.", "Bien que le vol est annulé, nous avons une autre option.", "Même si le vol est annulé, nous avons une autre option.", "Même si le train est annulé, nous avons une autre option."],2,"« Even if » = « même si », suivi de l'indicatif : « même si le vol est annulé »."],
      ["arrange","Remets dans l'ordre : [fenêtre / préfère / place / la / côté / je]",["préfère la place Je côté fenêtre", "préfère la côté fenêtre Je place", "Je la fenêtre préfère côté place", "Je préfère la place côté fenêtre"],3,"Sujet + verbe + article + nom + préposition + complément."],
      ["writing","Écris 45-65 mots sur un voyage en train ou en avion avec des imprévus, en utilisant « bien que » et « même si » au moins une fois chacun.",[],["bien que", "même si", "retard"]],
    ]
  },
  {
    id:"fr_b2_sharing_economy_conscious_consumption", level:"B2", title:"L'économie collaborative et la consommation responsable", emoji:"♻️", xp:84,
    description:"Parle d'économie collaborative en utilisant le futur et le conditionnel de probabilité.",
    study: {
      vocab: [
        ["l'économie collaborative", "the sharing economy"],
        ["louer plutôt qu'acheter", "to rent instead of buying"],
        ["la consommation responsable", "conscious consumption"],
        ["partager des ressources", "to share resources"],
        ["l'obsolescence programmée", "planned obsolescence"],
        ["réduire le gaspillage", "to reduce waste"],
      ],
      grammar: [
        ["Le futur et le conditionnel de probabilité", "Le futur simple peut exprimer une conjecture sur le présent (« il sera dix heures ») ; le conditionnel simple exprime une conjecture sur le passé (« il serait dix heures quand il est arrivé »).", "Ce modèle aura environ cinq ans d'obsolescence programmée. / Avec cette consommation, ils dépenseraient moins de ressources que prévu."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « louer plutôt qu'acheter » en anglais ?",["planned obsolescence", "to rent instead of buying", "the sharing economy", "to share resources"],1,"« Louer plutôt qu'acheter » se dit « to rent instead of buying » en anglais."],
      ["mcq","Comment dit-on « l'obsolescence programmée » en anglais ?",["to reduce waste", "planned obsolescence", "to share resources", "the sharing economy"],1,"« Obsolescence programmée » se dit « planned obsolescence » en anglais."],
      ["fill","Completa: “Ce modèle ___ environ cinq ans d'obsolescence programmée.”",["aurait", "a", "avait", "aura"],3,"Le futur de probabilité exprime une conjecture sur le présent : « aura environ cinq ans »."],
      ["translate","Traduis avec conditionnel de probabilité : « With that consumption, they would spend fewer resources than they thought. »",["Avec cette consommation, ils dépenseraient moins de ressources que prévu.", "Avec cette consommation, ils dépenseraient plus de ressources que prévu.", "Avec cette consommation, ils dépenseraient moins d'argent que prévu.", "Avec cette consommation, ils dépenseront moins de ressources que prévu."],0,"Le conditionnel de probabilité « dépenseraient » exprime une conjecture sur une situation hypothétique."],
      ["arrange","Remets dans l'ordre : [gaspillage / devons / le / réduire / nous]",["Nous le devons réduire gaspillage", "le devons réduire Nous gaspillage", "réduire Nous devons le gaspillage", "Nous devons réduire le gaspillage"],3,"Sujet + verbe modal + infinitif + article + nom."],
      ["writing","Écris 55-75 mots sur l'économie collaborative et la consommation responsable, en utilisant au moins un futur et un conditionnel de probabilité.",[],["aura", "seraient", "consommation responsable"]],
    ]
  },
  {
    id:"fr_c1_nonverbal_intercultural_communication", level:"C1", title:"Le langage non verbal et la communication interculturelle", emoji:"🤝", xp:92,
    description:"Analyse la communication non verbale en utilisant « comme si » + subjonctif/imparfait.",
    study: {
      vocab: [
        ["le langage corporel", "body language"],
        ["le contact visuel", "eye contact"],
        ["un geste mal interprété", "a misinterpreted gesture"],
        ["la proxémique (distance personnelle)", "proxemics (personal space)"],
        ["un signal culturel", "a cultural cue"],
        ["le silence gênant", "awkward silence"],
      ],
      grammar: [
        ["« Comme si » + imparfait ou plus-que-parfait", "« Comme si » est toujours suivi de l'imparfait ou du plus-que-parfait de l'indicatif (jamais du subjonctif en français), même pour une comparaison au présent, car il décrit quelque chose d'hypothétique.", "Il a agi comme s'il comprenait le geste, alors qu'il ne le comprenait pas. / Elle a réagi comme si elle avait été offensée."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « un geste mal interprété » en anglais ?",["a misinterpreted gesture", "body language", "eye contact", "proxemics (personal space)"],0,"« Un geste mal interprété » se dit « a misinterpreted gesture » en anglais."],
      ["mcq","Comment dit-on « la proxémique (distance personnelle) » en anglais ?",["eye contact", "proxemics (personal space)", "body language", "a cultural cue"],1,"« Proxémique » se dit « proxemics » en anglais."],
      ["fill","Completa: “Il a agi comme s'il ___ le geste, alors qu'il ne le comprenait pas.”",["comprend", "comprendra", "comprenait", "a compris"],2,"« Comme si » est suivi de l'imparfait pour une comparaison au présent : « comme s'il comprenait »."],
      ["translate","Traduis : « She reacted as if she had been offended. »",["Elle a réagi comme si elle avait été offensée.", "Elle a réagi comme si elle était offensée.", "Elle a réagi comme si elle avait été invitée.", "Elle a réagi comme si elle a été offensée."],0,"« As if she had been offended » se traduit avec le plus-que-parfait : « comme si elle avait été offensée »."],
      ["arrange","Remets dans l'ordre : [cultures / varie / entre / le contact visuel]",["varie contact Le visuel cultures entre", "contact entre cultures visuel varie Le", "visuel cultures varie entre Le contact", "Le contact visuel varie entre cultures"],3,"Sujet + verbe + préposition + complément."],
      ["writing","Écris 55-75 mots sur un malentendu interculturel lié au langage non verbal, en utilisant au moins deux structures avec « comme si ».",[],["comme si", "langage corporel", "geste"]],
    ]
  },
  {
    id:"fr_c2_scientific_hedging_uncertainty", level:"C2", title:"L'incertitude et le langage scientifique", emoji:"🔬", xp:100,
    description:"Analyse le langage scientifique en utilisant des expressions de nuance épistémique (hedging).",
    study: {
      vocab: [
        ["l'incertitude statistique", "statistical uncertainty"],
        ["une marge d'erreur", "a margin of error"],
        ["une corrélation n'implique pas la causalité", "correlation does not imply causation"],
        ["les résultats préliminaires", "preliminary results"],
        ["une hypothèse non confirmée", "an unconfirmed hypothesis"],
        ["nuancer une affirmation", "to hedge/qualify a claim"],
      ],
      grammar: [
        ["Expressions de nuance épistémique (hedging)", "Des expressions comme « on pourrait dire que », « il n'est pas absurde de penser que » ou « les données suggèrent, sans confirmer, que » nuancent le degré de certitude d'une affirmation scientifique, évitant les généralisations excessives.", "On pourrait dire qu'il existe une tendance, bien que les données soient préliminaires. / Les résultats suggèrent, sans confirmer, un lien de causalité."],
      ]
    },
    ex:[
      ["mcq","Comment dit-on « une marge d'erreur » en anglais ?",["an unconfirmed hypothesis", "a margin of error", "preliminary results", "to hedge/qualify a claim"],1,"« Une marge d'erreur » se dit « a margin of error » en anglais."],
      ["mcq","Comment dit-on « une hypothèse non confirmée » en anglais ?",["an unconfirmed hypothesis", "correlation does not imply causation", "statistical uncertainty", "preliminary results"],0,"« Une hypothèse non confirmée » se dit « an unconfirmed hypothesis » en anglais."],
      ["fill","Completa: “On ___ dire qu'il existe une tendance, bien que les données soient préliminaires.”",["va", "peut", "doit", "pourrait"],3,"« On pourrait dire que » est une expression fixe de nuance épistémique qui adoucit une affirmation."],
      ["translate","Traduis avec précision : « The results suggest, but do not confirm, a causal relationship. »",["Les résultats suggèrent, sans confirmer, une corrélation statistique.", "Les résultats suggèrent, sans confirmer, un lien de causalité.", "Les résultats suggèrent, en confirmant, un lien de causalité.", "Les résultats confirment, sans suggérer, un lien de causalité."],1,"« Suggest, but do not confirm » se traduit par « suggèrent, sans confirmer », nuançant la certitude."],
      ["arrange","Remets dans l'ordre : [implique / corrélation / pas / causalité / une / ne]",["corrélation Une n'implique pas causalité", "causalité corrélation n'implique pas Une", "causalité pas Une n'implique corrélation", "Une corrélation n'implique pas causalité"],3,"Article + nom + négation + verbe + nom."],
      ["writing","Écris 55-75 mots analysant une étude scientifique (réelle ou inventée) aux résultats préliminaires, en utilisant au moins deux expressions de nuance épistémique.",[],["on pourrait dire que", "les données suggèrent", "incertitude"]],
    ]
  },
];
