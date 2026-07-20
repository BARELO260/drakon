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
];
