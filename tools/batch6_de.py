import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Tiere und Natur ──────────────────────────
l = LessonBuilder("de_a1_animals_nature", "A1", "Tiere und die Natur", "🐾", 36,
                   "Lerne den Wortschatz für gängige Tiere und die Natur auf Deutsch.")
animals = [
    ("der Hund", "the dog"), ("die Katze", "the cat"), ("der Vogel", "the bird"),
    ("das Pferd", "the horse"), ("der Fisch", "the fish"), ("die Kuh", "the cow"),
]
for t, e in animals:
    l.add_vocab(t, e)
l.add_vocab("der Wald, der Berg, der Fluss", "the forest, the mountain, the river")
l.add_grammar("Das grammatische Geschlecht bei Tieren", "Tiernamen haben ein festes grammatisches Geschlecht (der/die/das), das nicht immer dem biologischen Geschlecht entspricht.", "der Hund, die Katze, das Pferd — unabhängig vom biologischen Geschlecht des Tieres."),
l.add_mcq_vocab("Wie sagt man \u201edas Pferd\u201c auf Englisch?", "the horse", ["the horse", "the dog", "the cat", "the bird"],
                "\u201ePferd\u201c heißt \u201ehorse\u201c auf Englisch.")
l.add_mcq_vocab("Wie sagt man \u201eder Vogel\u201c auf Englisch?", "the bird", ["the bird", "the fish", "the cow", "the dog"],
                "\u201eVogel\u201c heißt \u201ebird\u201c auf Englisch.")
l.add_fill("Ich gehe sonntags gern im ___ spazieren.", "Wald", ["Wald", "Katze", "Fisch", "Kuh"],
           "\u201eIm Wald spazieren gehen\u201c ist eine typische Aktivität in der Natur.")
l.add_translate("Übersetze: \u201eThe dog is very friendly.\u201c", "Der Hund ist sehr freundlich.",
                 ["Die Katze ist sehr freundlich.", "Das Pferd ist sehr freundlich.", "Der Vogel ist sehr freundlich."],
                 "\u201eThe dog\u201c = \u201eder Hund\u201c; \u201efriendly\u201c = \u201efreundlich\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [schwarze / eine / habe / Katze / ich]", "Ich habe eine schwarze Katze",
              "Subjekt + Verb + Artikel + Adjektiv + Substantiv.")
l.add_writing("Schreibe auf Deutsch 20-30 Wörter über ein Tier, das du magst, und einen Ort in der Natur, den du gerne besuchst.",
              ["ich mag", "der Wald", "das Tier"])
lessons.append(l)

# ── A2: Der menschliche Körper ──────────────────────────────────────
l = LessonBuilder("de_a2_body_parts", "A2", "Der menschliche Körper: Körperteile", "🦴", 46,
                   "Lerne die Körperteile und wie man Schmerzen oder körperliche Merkmale beschreibt.")
body = [
    ("der Kopf", "the head"), ("der Arm", "the arm"), ("das Bein", "the leg"),
    ("die Hand", "the hand"), ("der Fuß", "the foot"), ("der Rücken", "the back"),
]
for t, e in body:
    l.add_vocab(t, e)
l.add_grammar("\u201eWeh tun\u201c mit Dativpronomen", "\u201e[Körperteil] tut mir weh\u201c ist die natürliche Struktur, um Schmerzen auszudrücken.", "Der Rücken tut mir weh. / Die Füße tun mir weh."),
l.add_mcq_vocab("Wie sagt man \u201eder Rücken\u201c auf Englisch?", "the back", ["the back", "the hand", "the head", "the leg"],
                "\u201eRücken\u201c heißt \u201eback\u201c auf Englisch.")
l.add_mcq_vocab("Wie sagt man \u201eder Fuß\u201c auf Englisch?", "the foot", ["the foot", "the arm", "the hand", "the head"],
                "\u201eFuß\u201c heißt \u201efoot\u201c auf Englisch.")
l.add_fill("Der ___ tut mir nach dem Laufen sehr weh.", "Rücken", ["Rücken", "Hand", "Kopf", "Bein"],
           "Laufen verursacht oft Rückenschmerzen, wenn man sich nicht gut aufwärmt.")
l.add_translate("Übersetze: \u201eMy hand hurts.\u201c", "Meine Hand tut mir weh.",
                 ["Mein Arm tut mir weh.", "Mein Bein tut mir weh.", "Mein Fuß tut mir weh."],
                 "\u201eMy hand hurts\u201c = \u201eMeine Hand tut mir weh.\u201c")
l.add_arrange("Bringe in die richtige Reihenfolge: [weh / Bein / mir / tut / mein]", "Mein Bein tut mir weh",
              "Subjekt (Körperteil) + \u201etut mir weh\u201c."),
l.add_speaking("Beschreibe auf Deutsch, in 40-60 Wörtern, einen Schmerz, den du einmal hattest: welcher Körperteil wehtat und was du getan hast.",
               ["tat weh", "mein Bein", "ich ging zum Arzt"])
lessons.append(l)

# ── B1: Sport und körperliche Aktivität ────────────────────
l = LessonBuilder("de_b1_sports_fitness", "B1", "Sport und körperliche Aktivität", "🏃", 60,
                   "Sprich über Sport, Trainingsroutinen und Fitnessgewohnheiten auf Deutsch.")
sports = [
    ("Fußball", "soccer/football"), ("das Schwimmen", "swimming"), ("Tennis", "tennis"),
    ("laufen", "to run"), ("Gewichte heben", "to lift weights"), ("Yoga machen", "to do yoga"),
]
for t, e in sports:
    l.add_vocab(t, e)
l.add_grammar("\u201eNormalerweise\u201c + Präsens für Gewohnheiten", "\u201eNormalerweise\u201c mit dem Präsens drückt eine gewohnheitsmäßige Handlung aus.", "Ich laufe normalerweise dreimal pro Woche."),
l.add_mcq_vocab("Wie sagt man \u201eGewichte heben\u201c auf Englisch?", "to lift weights", ["to lift weights", "to run", "to do yoga", "swimming"],
                "\u201eGewichte heben\u201c heißt \u201eto lift weights\u201c.")
l.add_mcq_vocab("Wie sagt man \u201edas Schwimmen\u201c auf Englisch?", "swimming", ["swimming", "tennis", "soccer/football", "to run"],
                "\u201eSchwimmen\u201c heißt \u201eswimming\u201c.")
l.add_fill("Ich ___ normalerweise dreimal pro Woche, um fit zu bleiben.", "laufe", ["laufe", "Tennis", "Fußball", "Schwimmen"],
           "\u201eNormalerweise\u201c + Präsens (\u201elaufe\u201c) beschreibt eine Gewohnheit.")
l.add_translate("Übersetze: \u201eSuelo hacer yoga los domingos.\u201c", "I usually do yoga on Sundays.",
                 ["I usually do yoga on Saturdays.", "I usually play tennis on Sundays.", "I usually lift weights on Sundays."],
                 "\u201eSuelo hacer yoga\u201c = \u201eI usually do yoga\u201c; \u201elos domingos\u201c = \u201con Sundays\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [fit / bleiben / um / laufe / ich]", "Ich laufe, um fit zu bleiben",
              "Subjekt + Verb + \u201eum ... zu\u201c + Adjektiv."),
l.add_writing("Schreibe auf Deutsch 45-65 Wörter über deine Beziehung zum Sport: welche Aktivität du machst, wie oft und warum du sie magst (oder nicht).",
              ["normalerweise", "fit bleiben", "ich mache"])
lessons.append(l)

# ── B2: Das intelligente Zuhause ────────────────────────────────
l = LessonBuilder("de_b2_smart_home_tech", "B2", "Das intelligente Zuhause: Hausautomation und Geräte", "💡", 82,
                   "Sprich über smarte Geräte und Hausautomation mit differenzierten Meinungen auf Deutsch.")
tech = [
    ("ein smarter Lautsprecher", "a smart speaker"), ("ein programmierbares Thermostat", "a programmable thermostat"),
    ("eine Sicherheitskamera", "a security camera"), ("per Sprache steuern", "to control by voice"),
    ("Hausaufgaben automatisieren", "to automate household tasks"), ("ein Datenschutzrisiko", "a privacy risk"),
]
for t, e in tech:
    l.add_vocab(t, e)
l.add_grammar("Futur I für technologische Vorhersagen", "\u201eWerden\u201c + Infinitiv beschreibt vernünftige Vorhersagen darüber, wie sich Technologie entwickeln wird.", "In ein paar Jahren werden mehr Haushalte vernetzte Geräte haben."),
l.add_mcq_vocab("Wie sagt man \u201eein Datenschutzrisiko\u201c auf Englisch?", "a privacy risk", ["a privacy risk", "a smart speaker", "a security camera", "a thermostat"],
                "\u201eDatenschutzrisiko\u201c heißt \u201eprivacy risk\u201c.")
l.add_mcq_vocab("Wie sagt man \u201eHausaufgaben automatisieren\u201c auf Englisch?", "to automate household tasks", ["to automate household tasks", "to control by voice", "a smart speaker", "a privacy risk"],
                "\u201eHausaufgaben automatisieren\u201c heißt \u201eto automate household tasks\u201c.")
l.add_fill("Ein programmierbares Thermostat kann Energie ___, wenn es gut eingestellt ist.", "sparen", ["sparen", "verschwenden", "verlieren", "kaputtmachen"],
           "Ein gut eingestelltes Thermostat hilft, Energie zu sparen, nicht zu verschwenden.")
l.add_translate("Übersetze: \u201eSmart speakers can be controlled by voice.\u201c", "Smarte Lautsprecher können per Sprache gesteuert werden.",
                 ["Smarte Lautsprecher können per Text gesteuert werden.", "Sicherheitskameras können per Sprache gesteuert werden.", "Thermostate können per Text gesteuert werden."],
                 "\u201eControlled by voice\u201c = \u201eper Sprache gesteuert\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [ein / kann / darstellen / Datenschutzrisiko / es]", "Es kann ein Datenschutzrisiko darstellen",
              "Subjekt + \u201ekann\u201c + Objekt + \u201edarstellen\u201c: \u201eEs kann ein Datenschutzrisiko darstellen.\u201c"),
l.add_writing("Schreibe auf Deutsch 55-75 Wörter über ein smartes Gerät, das du zu Hause nutzen würdest (oder bereits nutzt): welchen Vorteil es bietet und welches Datenschutzrisiko es haben könnte.",
              ["automatisieren", "Datenschutzrisiko", "per Sprache"])
lessons.append(l)

# ── C1: Die Arbeitswelt: Besprechungen und Korrespondenz ──────────
l = LessonBuilder("de_c1_workplace_communication", "C1", "Die Arbeitswelt: Besprechungen und Korrespondenz", "🤝", 90,
                   "Beherrsche den Wortschatz und die typischen Formeln für Besprechungen und formelle E-Mails auf Deutsch.")
work = [
    ("eine Besprechung einberufen", "to call a meeting"), ("ein Dokument anhängen", "to attach a document"),
    ("wir freuen uns auf Ihre Antwort", "we look forward to your response"),
    ("einen offenen Punkt wieder aufgreifen", "to follow up on a pending item"),
    ("eine Einigung erzielen", "to reach an agreement"), ("eine Besprechung verschieben", "to postpone a meeting"),
]
for t, e in work:
    l.add_vocab(t, e)
l.add_grammar("Höflichkeitsformeln in formellen E-Mails", "Feste Formeln wie \u201eWir freuen uns auf Ihre Antwort\u201c geben einen professionellen Abschluss, ohne abrupt zu klingen.", "Anbei finden Sie den angeforderten Bericht. Wir freuen uns auf Ihre Antwort."),
l.add_mcq_vocab("Wie sagt man \u201eeine Einigung erzielen\u201c auf Englisch?", "to reach an agreement", ["to reach an agreement", "to postpone a meeting", "to call a meeting", "to attach a document"],
                "\u201eEine Einigung erzielen\u201c heißt \u201eto reach an agreement\u201c.")
l.add_mcq_vocab("Wie sagt man \u201eeine Besprechung verschieben\u201c auf Englisch?", "to postpone a meeting", ["to postpone a meeting", "to call a meeting", "to reach an agreement", "to attach a document"],
                "\u201eEine Besprechung verschieben\u201c heißt \u201eto postpone a meeting\u201c.")
l.add_fill("Bevor wir die Besprechung beenden, möchte ich gern einen offenen Punkt von letzter Woche ___.", "aufgreifen",
           ["aufgreifen", "anhängen", "verschieben", "einberufen"],
           "\u201eEinen offenen Punkt wieder aufgreifen\u201c bedeutet, darauf zurückzukommen.")
l.add_translate("Übersetze: \u201eIch habe den angeforderten Bericht angehängt.\u201c", "I'm attaching the requested report.",
                 ["I'm attaching the requested email.", "I'm calling the requested report.", "I'm postponing the requested report."],
                 "\u201eIch habe angehängt\u201c = \u201eI'm attaching\u201c; \u201eden angeforderten Bericht\u201c = \u201ethe requested report\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [Antwort / auf / freuen / Ihre / wir / uns]", "Wir freuen uns auf Ihre Antwort",
              "Feste Formel zum Abschluss einer formellen E-Mail."),
l.add_writing("Schreibe auf Deutsch eine kurze formelle E-Mail (55-75 Wörter), in der du eine Besprechung einberufst, einen offenen Punkt erwähnst und mit einer formellen Höflichkeitsformel schließt.",
              ["ich berufe ein", "offener Punkt", "wir freuen uns auf"])
lessons.append(l)

# ── C2: Register und Stil: Synonyme je nach Kontext ─────────
l = LessonBuilder("de_c2_register_synonyms", "C2", "Register und Stil: Synonyme je nach Kontext", "🔤", 98,
                   "Wähle das passende Synonym je nach Register (formell, neutral, umgangssprachlich) auf Deutsch.")
syn = [
    ("erlangen (formell) / bekommen (neutral)", "to obtain / to get"),
    ("versterben (formell) / sterben (neutral) / abkratzen (umgangssprachlich)", "to pass away / to die / to kick the bucket"),
    ("ersuchen (formell) / bitten (neutral)", "to request / to ask for"),
    ("residieren (formell) / wohnen (neutral)", "to reside / to live"),
    ("dennoch (formell) / aber (neutral)", "however / but"),
]
for t, e in syn:
    l.add_vocab(t, e)
l.add_grammar("Register je nach kommunikativem Kontext wählen", "Dieselbe Idee kann mit sehr unterschiedlichen Wörtern ausgedrückt werden, je nachdem, ob der Kontext formell, neutral oder umgangssprachlich ist; das falsche Wort zu wählen bricht die Kohärenz des Textes.", "In einem Bericht: \u201eDie Information wurde erlangt.\u201c Im Gespräch unter Freunden: \u201eIch hab's bekommen.\u201c"),
l.exercises.append(("mcq", "In einem offiziellen Bericht: Welches Wort ist für \u201eInformationen erlangen\u201c am passendsten?",
                     ["Erlangen", "Schnappen", "Ergattern", "Kriegen"], 0,
                     "\u201eErlangen\u201c ist das formelle Register, das für einen offiziellen Bericht passt."))
l.exercises.append(("mcq", "In einem informellen Gespräch unter Freunden: Welches Verb klingt für \u201esterben\u201c am natürlichsten?",
                     ["Abkratzen", "Versterben", "Dahinscheiden", "Verscheiden"], 0,
                     "\u201eAbkratzen\u201c ist umgangssprachlich und würde in ein informelles Gespräch passen; die anderen sind zu formell oder gehoben."))
l.add_fill("In einem formellen Brief sagt man \u201e___ setzen wir das Projekt fort\u201c, nicht \u201eaber\u201c.", "dennoch",
           ["dennoch", "aber", "trotzdem", "jedoch aber"],
           "\u201eDennoch\u201c ist der formelle Konnektor, der \u201eaber\u201c entspricht.")
l.add_translate("Übersetze mit dem korrekten formellen Register: \u201eWe reside in Madrid.\u201c", "Wir residieren in Madrid.",
                 ["Wir wohnen in Madrid.", "Wir bleiben in Madrid.", "Wir sind aus Madrid."],
                 "\u201eReside\u201c wird im formellen Register mit \u201eresidieren\u201c übersetzt, nicht mit dem neutralen \u201ewohnen\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge (formelles Register): [wurde / die Information / erbeten]", "Die Information wurde erbeten",
              "Passivkonstruktion, typisch für das formelle/administrative Register."),
l.add_writing("Schreibe auf Deutsch dieselbe kurze Nachricht (\u201eich brauche, dass du mir die Datei schickst\u201c) in zwei verschiedenen Registern: einem formellen (für einen Chef) und einem umgangssprachlichen (für einen Freund), in insgesamt 55-75 Wörtern.",
              ["formell", "umgangssprachlich", "ich ersuche"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out_de.txt")
