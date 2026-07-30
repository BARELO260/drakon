import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Les animaux et la nature ──────────────────────────
l = LessonBuilder("fr_a1_animals_nature", "A1", "Les animaux et la nature", "🐾", 36,
                   "Apprends le vocabulaire des animaux courants et de la nature en français.")
animals = [
    ("le chien", "the dog"), ("le chat", "the cat"), ("l'oiseau", "the bird"),
    ("le cheval", "the horse"), ("le poisson", "the fish"), ("la vache", "the cow"),
]
for t, e in animals:
    l.add_vocab(t, e)
l.add_vocab("la forêt, la montagne, la rivière", "the forest, the mountain, the river")
l.add_grammar("Le genre des animaux", "Beaucoup de noms d'animaux changent de forme selon le genre, mais d'autres sont invariables.", "Le chat est blanc. / La chatte est blanche. / Le poisson est petit (invariable côté sens)."),
l.add_mcq_vocab("Comment dit-on \u00able cheval\u00bb en anglais ?", "the horse", ["the horse", "the dog", "the cat", "the bird"],
                "\u00abCheval\u00bb se dit \u00abhorse\u00bb en anglais.")
l.add_mcq_vocab("Comment dit-on \u00abl'oiseau\u00bb en anglais ?", "the bird", ["the bird", "the fish", "the cow", "the dog"],
                "\u00abOiseau\u00bb se dit \u00abbird\u00bb en anglais.")
l.add_fill("J'aime me promener dans la ___ le dimanche.", "forêt", ["forêt", "chat", "poisson", "vache"],
           "\u00abSe promener dans la forêt\u00bb est une activité typique dans la nature.")
l.add_translate("Traduis : \u00abThe dog is very friendly.\u00bb", "Le chien est très gentil.",
                 ["Le chat est très gentil.", "Le cheval est très gentil.", "L'oiseau est très gentil."],
                 "\u00abThe dog\u00bb = \u00able chien\u00bb ; \u00abfriendly\u00bb = \u00abgentil\u00bb.")
l.add_arrange("Remets dans l'ordre : [noir / ai / chat / j' / un]", "J'ai un chat noir",
              "Sujet + verbe + article + nom + adjectif.")
l.add_writing("Écris en français 20-30 mots sur un animal que tu aimes et un endroit dans la nature que tu aimes visiter.",
              ["j'aime", "la forêt", "l'animal"])
lessons.append(l)

# ── A2: Le corps humain ──────────────────────────────────────
l = LessonBuilder("fr_a2_body_parts", "A2", "Le corps humain : les parties du corps", "🦴", 46,
                   "Apprends les parties du corps et à décrire des douleurs ou des caractéristiques physiques.")
body = [
    ("la tête", "the head"), ("le bras", "the arm"), ("la jambe", "the leg"),
    ("la main", "the hand"), ("le pied", "the foot"), ("le dos", "the back"),
]
for t, e in body:
    l.add_vocab(t, e)
l.add_grammar("L'article défini avec les parties du corps", "Avec les parties du corps, on utilise l'article défini, pas le possessif, quand on sait clairement de qui on parle.", "J'ai mal à la tête. (pas \u00abJ'ai mal à ma tête\u00bb)"),
l.add_mcq_vocab("Comment dit-on \u00able dos\u00bb en anglais ?", "the back", ["the back", "the hand", "the head", "the leg"],
                "\u00abDos\u00bb se dit \u00abback\u00bb en anglais.")
l.add_mcq_vocab("Comment dit-on \u00able pied\u00bb en anglais ?", "the foot", ["the foot", "the arm", "the hand", "the head"],
                "\u00abPied\u00bb se dit \u00abfoot\u00bb en anglais.")
l.add_fill("J'ai très mal au ___ après avoir couru.", "dos", ["dos", "main", "tête", "jambe"],
           "Courir cause souvent des douleurs au dos si on ne s'échauffe pas bien.")
l.add_translate("Traduis : \u00abMy hand hurts.\u00bb", "J'ai mal à la main.",
                 ["J'ai mal au bras.", "J'ai mal à la jambe.", "J'ai mal au pied."],
                 "\u00abMy hand hurts\u00bb = \u00abJ'ai mal à la main\u00bb, avec l'article défini.")
l.add_arrange("Remets dans l'ordre : [jambe / mal / la / à / j'ai]", "J'ai mal à la jambe",
              "\u00abJ'ai mal à\u00bb + article + partie du corps.")
l.add_speaking("Décris en français, en 40-60 mots, une douleur que tu as eue : quelle partie du corps te faisait mal et ce que tu as fait.",
               ["j'avais mal", "la jambe", "je suis allé(e) chez le médecin"])
lessons.append(l)

# ── B1: Le sport et l'activité physique ────────────────────
l = LessonBuilder("fr_b1_sports_fitness", "B1", "Le sport et l'activité physique", "🏃", 60,
                   "Parle de sports, de routines d'exercice et d'habitudes d'activité physique en français.")
sports = [
    ("le football", "soccer/football"), ("la natation", "swimming"), ("le tennis", "tennis"),
    ("courir", "to run"), ("soulever des poids", "to lift weights"), ("faire du yoga", "to do yoga"),
]
for t, e in sports:
    l.add_vocab(t, e)
l.add_grammar("\u00abAvoir l'habitude de\u00bb + infinitif pour les habitudes", "\u00abAvoir l'habitude de\u00bb + infinitif exprime une action habituelle.", "J'ai l'habitude de courir trois fois par semaine."),
l.add_mcq_vocab("Comment dit-on \u00absoulever des poids\u00bb en anglais ?", "to lift weights", ["to lift weights", "to run", "to do yoga", "swimming"],
                "\u00abSoulever des poids\u00bb se dit \u00abto lift weights\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abla natation\u00bb en anglais ?", "swimming", ["swimming", "tennis", "soccer/football", "to run"],
                "\u00abNatation\u00bb se dit \u00abswimming\u00bb.")
l.add_fill("J'ai l'habitude de ___ trois fois par semaine pour rester en forme.", "courir", ["courir", "tennis", "football", "natation"],
           "\u00abAvoir l'habitude de\u00bb + infinitif (\u00abcourir\u00bb) décrit une habitude.")
l.add_translate("Traduis : \u00abI usually do yoga on Sundays.\u00bb", "J'ai l'habitude de faire du yoga le dimanche.",
                 ["J'ai l'habitude de faire du yoga le samedi.", "J'ai l'habitude de jouer au tennis le dimanche.", "J'ai l'habitude de soulever des poids le dimanche."],
                 "\u00abI usually do yoga\u00bb = \u00abJ'ai l'habitude de faire du yoga\u00bb ; \u00abon Sundays\u00bb = \u00able dimanche\u00bb.")
l.add_arrange("Remets dans l'ordre : [forme / rester / en / pour / je cours]", "Je cours pour rester en forme",
              "Sujet + verbe + \u00abpour\u00bb + infinitif + complément.")
l.add_writing("Écris en français 45-65 mots sur ta relation avec le sport : quelle activité tu pratiques, à quelle fréquence et pourquoi tu l'aimes (ou pas).",
              ["j'ai l'habitude de", "rester en forme", "je pratique"])
lessons.append(l)

# ── B2: La maison intelligente ────────────────────────────────
l = LessonBuilder("fr_b2_smart_home_tech", "B2", "La maison intelligente : domotique et appareils", "💡", 82,
                   "Parle des appareils intelligents et de la domotique, avec des arguments nuancés en français.")
tech = [
    ("une enceinte connectée", "a smart speaker"), ("un thermostat programmable", "a programmable thermostat"),
    ("une caméra de sécurité", "a security camera"), ("contrôler par la voix", "to control by voice"),
    ("automatiser les tâches domestiques", "to automate household tasks"), ("un risque pour la vie privée", "a privacy risk"),
]
for t, e in tech:
    l.add_vocab(t, e)
l.add_grammar("Le futur simple pour les prédictions technologiques", "Le futur simple décrit des prédictions raisonnables sur l'évolution de la technologie.", "Dans quelques années, plus de foyers auront des appareils connectés."),
l.add_mcq_vocab("Comment dit-on \u00abun risque pour la vie privée\u00bb en anglais ?", "a privacy risk", ["a privacy risk", "a smart speaker", "a security camera", "a thermostat"],
                "\u00abRisque pour la vie privée\u00bb se dit \u00abprivacy risk\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abautomatiser les tâches domestiques\u00bb en anglais ?", "to automate household tasks", ["to automate household tasks", "to control by voice", "a smart speaker", "a privacy risk"],
                "\u00abAutomatiser les tâches domestiques\u00bb se dit \u00abto automate household tasks\u00bb.")
l.add_fill("Un thermostat programmable peut ___ de l'énergie s'il est bien réglé.", "économiser", ["économiser", "gaspiller", "perdre", "casser"],
           "Un thermostat bien réglé aide à économiser de l'énergie, pas à la gaspiller.")
l.add_translate("Traduis : \u00abLes enceintes connectées peuvent être contrôlées par la voix.\u00bb", "Smart speakers can be controlled by voice.",
                 ["Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Thermostats can be controlled by text."],
                 "\u00abContrôler par la voix\u00bb = \u00abcontrolled by voice\u00bb.")
l.add_arrange("Remets dans l'ordre : [vie / risque / peut / un / privée / pour / présenter / la]", "Peut présenter un risque pour la vie privée",
              "Verbe + \u00abprésenter\u00bb + objet : \u00abPeut présenter un risque pour la vie privée.\u00bb")
l.add_writing("Écris en français 55-75 mots sur un appareil intelligent que tu utiliserais (ou utilises déjà) chez toi : quel avantage il t'offre et quel risque pour la vie privée il pourrait poser.",
              ["automatiser", "risque pour la vie privée", "par la voix"])
lessons.append(l)

# ── C1: Le monde professionnel ──────────────────────────
l = LessonBuilder("fr_c1_workplace_communication", "C1", "Le monde professionnel : réunions et correspondance", "🤝", 90,
                   "Maîtrise le vocabulaire et les formules typiques des réunions et des e-mails professionnels.")
work = [
    ("convoquer une réunion", "to call a meeting"), ("joindre un document", "to attach a document"),
    ("dans l'attente de votre réponse", "we look forward to your response"),
    ("reprendre un point en suspens", "to follow up on a pending item"),
    ("parvenir à un accord", "to reach an agreement"), ("reporter une réunion", "to postpone a meeting"),
]
for t, e in work:
    l.add_vocab(t, e)
l.add_grammar("Formules de politesse dans les e-mails formels", "Des formules fixes comme \u00abDans l'attente de votre réponse\u00bb donnent une clôture professionnelle sans paraître brusque.", "Veuillez trouver le rapport demandé en pièce jointe. Dans l'attente de votre réponse."),
l.add_mcq_vocab("Comment dit-on \u00abparvenir à un accord\u00bb en anglais ?", "to reach an agreement", ["to reach an agreement", "to postpone a meeting", "to call a meeting", "to attach a document"],
                "\u00abParvenir à un accord\u00bb se dit \u00abto reach an agreement\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abreporter une réunion\u00bb en anglais ?", "to postpone a meeting", ["to postpone a meeting", "to call a meeting", "to reach an agreement", "to attach a document"],
                "\u00abReporter une réunion\u00bb se dit \u00abto postpone a meeting\u00bb.")
l.add_fill("Avant de clore la réunion, j'aimerais ___ un point en suspens de la semaine dernière.", "reprendre",
           ["reprendre", "joindre", "reporter", "convoquer"],
           "\u00abReprendre un point en suspens\u00bb signifie y revenir.")
l.add_translate("Traduis : \u00abJ'ai joint le rapport demandé.\u00bb", "I'm attaching the requested report.",
                 ["I'm attaching the requested email.", "I'm calling the requested report.", "I'm postponing the requested report."],
                 "\u00abJ'ai joint\u00bb = \u00abI'm attaching\u00bb ; \u00able rapport demandé\u00bb = \u00abthe requested report\u00bb.")
l.add_arrange("Remets dans l'ordre : [réponse / l'attente / dans / votre / de]", "Dans l'attente de votre réponse",
              "Formule fixe de clôture d'e-mail professionnel.")
l.add_writing("Écris en français un e-mail professionnel bref (55-75 mots) convoquant une réunion, mentionnant un point en suspens et se terminant par une formule de politesse formelle.",
              ["je convoque", "point en suspens", "dans l'attente de"])
lessons.append(l)

# ── C2: Registre et style : synonymes selon le contexte ─────────
l = LessonBuilder("fr_c2_register_synonyms", "C2", "Registre et style : synonymes selon le contexte", "🔤", 98,
                   "Choisis le synonyme adéquat selon le registre (soutenu, courant, familier) en français.")
syn = [
    ("obtenir (soutenu) / avoir (courant)", "to obtain / to get"),
    ("décéder (soutenu) / mourir (courant) / claquer (familier)", "to pass away / to die / to kick the bucket"),
    ("solliciter (soutenu) / demander (courant)", "to request / to ask for"),
    ("résider (soutenu) / vivre / habiter (courant)", "to reside / to live"),
    ("néanmoins (soutenu) / mais (courant)", "however / but"),
]
for t, e in syn:
    l.add_vocab(t, e)
l.add_grammar("Choisir le registre selon le contexte", "La même idée peut s'exprimer avec des mots très différents selon un contexte soutenu, courant ou familier ; utiliser le mauvais mot casse la cohérence du texte.", "Dans un rapport : \u00abL'information a été obtenue.\u00bb Entre amis : \u00abJe l'ai eu.\u00bb"),
l.exercises.append(("mcq", "Dans un rapport officiel, quel mot est le plus approprié pour \u00abobtenir une information\u00bb ?",
                     ["Obtenir", "Choper", "Récupérer", "Chiper"], 0,
                     "\u00abObtenir\u00bb est le registre soutenu approprié pour un rapport officiel."))
l.exercises.append(("mcq", "Dans une conversation informelle entre amis, quel verbe sonne le plus naturel pour \u00abmourir\u00bb ?",
                     ["Claquer", "Décéder", "Périr", "Expirer"], 0,
                     "\u00abClaquer\u00bb est familier et conviendrait à une conversation informelle ; les autres sont trop soutenus ou techniques."))
l.add_fill("Dans une lettre formelle on dit \u00ab___, nous poursuivons le projet\u00bb, pas \u00abmais\u00bb.", "néanmoins",
           ["néanmoins", "mais", "quand même", "pourtant"],
           "\u00abNéanmoins\u00bb est le connecteur soutenu équivalent à \u00abmais\u00bb.")
l.add_translate("Traduis avec le registre soutenu correct : \u00abWe reside in Madrid.\u00bb", "Nous résidons à Madrid.",
                 ["Nous vivons à Madrid.", "Nous restons à Madrid.", "Nous sommes de Madrid."],
                 "\u00abReside\u00bb dans un registre soutenu se traduit par \u00abrésider\u00bb, pas le courant \u00abvivre\u00bb.")
l.add_arrange("Remets dans l'ordre (registre soutenu) : [a / l'information / été / sollicitée]", "L'information a été sollicitée",
              "Construction passive, typique du registre soutenu/administratif.")
l.add_writing("Écris en français le même message bref (\u00abj'ai besoin que tu m'envoies le fichier\u00bb) dans deux registres différents : un soutenu (pour un patron) et un familier (pour un ami), en 55-75 mots au total.",
              ["soutenu", "familier", "je sollicite"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out_fr.txt")
