import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Die Uhrzeit und die Tageszeiten ────────────────
l = LessonBuilder("de_a1_time_parts_of_day", "A1", "Die Uhrzeit und die Tageszeiten", "🕐", 38,
                   "Lerne, die Uhrzeit und die Tageszeiten mit Zeitpräpositionen zu sagen.")
time_v = [
    ("der Morgen", "the morning"), ("der Nachmittag", "the afternoon"), ("die Nacht", "the night"),
    ("der Mittag", "noon"), ("die Mitternacht", "midnight"), ("Uhr/pünktlich", "o'clock/sharp"),
]
for t, e in time_v:
    l.add_vocab(t, e)
l.add_grammar("„Wie spät ist es?” + Zeitpräpositionen", "Um nach der Uhrzeit zu fragen, sagt man „Wie spät ist es?”; zur Antwort „es ist ein Uhr” oder „es ist + Zahl + Uhr”, mit „morgens/nachmittags/abends” zur genaueren Angabe.", "Es ist drei Uhr nachmittags. / Es ist ein Uhr pünktlich morgens.")
pool_en = [e for _, e in time_v]
l.add_mcq_vocab("Wie sagt man „die Mitternacht” auf Englisch?", "midnight", pool_en,
                "„Mitternacht” heißt auf Englisch „midnight”.")
l.add_mcq_vocab("Wie sagt man „Uhr/pünktlich” auf Englisch?", "o'clock/sharp", pool_en,
                "„Uhr/pünktlich” heißt auf Englisch „o'clock” oder „sharp”.")
l.add_fill("___ ist drei Uhr nachmittags.", "Es", ["Es", "Das", "Er", "Sie"],
           "Für die Uhrzeit benutzt man immer „es”: „es ist drei Uhr”.")
l.add_translate("Übersetze: „It's one o'clock in the morning.“", "Es ist ein Uhr morgens.",
                 ["Es ist eins Uhr morgens.", "Es ist zwei Uhr morgens.", "Es ist ein Uhr nachmittags."],
                 "Bei „ein Uhr” wird „ein” ohne Endung verwendet, nicht „eins”.")
l.add_arrange("Bring in die richtige Reihenfolge: [Uhr / vier / es / nachmittags / ist]", "Es ist vier Uhr nachmittags",
              "Subjekt + Verb + Zahl + Substantiv + Tageszeit.")
l.add_writing("Beschreibe in 20-30 Wörtern deine tägliche Routine mit konkreten Uhrzeiten, und benutze „es ist” und „morgens/nachmittags/abends”.",
              ["es ist", "morgens", "nachmittags"])
lessons.append(l)

# ── A2: Bei der Bank: ein Konto eröffnen ───────────────
l = LessonBuilder("de_a2_bank_open_account", "A2", "Bei der Bank: ein Konto eröffnen", "🏦", 48,
                   "Lerne grundlegendes Bankvokabular und wie man „können” für Möglichkeit und Erlaubnis benutzt.")
bank = [
    ("das Bankkonto", "the bank account"), ("der Geldautomat", "the ATM"),
    ("Geld abheben", "to withdraw money"), ("Geld einzahlen", "to deposit money"),
    ("die Debitkarte", "the debit card"), ("der Kontostand", "the balance"),
]
for t, e in bank:
    l.add_vocab(t, e)
l.add_grammar("„Können” + Infinitiv für Möglichkeit und Erlaubnis", "„Können” + Infinitiv drückt je nach Kontext Fähigkeit, Möglichkeit oder Erlaubnis aus.", "Kann ich hier ein Konto eröffnen? / Du kannst an jedem Geldautomaten Geld abheben.")
pool_en = [e for _, e in bank]
l.add_mcq_vocab("Wie sagt man „Geld abheben” auf Englisch?", "to withdraw money", pool_en,
                "„Geld abheben” heißt auf Englisch „to withdraw money”.")
l.add_mcq_vocab("Wie sagt man „der Kontostand” auf Englisch?", "the balance", pool_en,
                "„Kontostand” heißt auf Englisch „balance”.")
l.add_fill("___ ich hier bitte ein Konto eröffnen?", "Kann", ["Kann", "Kannst", "Können", "Könnt"],
           "In der ersten Person benutzt man „kann” um Erlaubnis zu erfragen: „kann ich eröffnen”.")
l.add_translate("Übersetze: „You can withdraw money at any ATM.“", "Du kannst an jedem Geldautomaten Geld abheben.",
                 ["Du kannst an jedem Geldautomaten Geld einzahlen.", "Du musst an jedem Geldautomaten Geld abheben.", "Du kannst an jeder Bank Geld abheben."],
                 "„You can withdraw” = „du kannst abheben”, mit „können” + Infinitiv.")
l.add_arrange("Bring in die richtige Reihenfolge: [Kontostand / prüfen / meinen / möchte / ich]", "Ich möchte meinen Kontostand prüfen",
              "Subjekt + Verb + Possessivobjekt + Substantiv + Infinitiv.")
l.add_speaking("Beschreibe in 40-60 Wörtern, wie du ein Bankkonto eröffnen würdest, und benutze „können” um Erlaubnis zu erfragen oder Möglichkeit auszudrücken.",
               ["ich kann", "du kannst", "Konto"])
lessons.append(l)

# ── B1: Zug- und Flugreisen: Verspätungen und Änderungen ──
l = LessonBuilder("de_b1_train_plane_travel", "B1", "Zug- und Flugreisen: Verspätungen und Änderungen", "🚄", 62,
                   "Lerne Vokabular für lange Reisen und wie man „obwohl” und „auch wenn” benutzt.")
travel_l = [
    ("die Verspätung", "the delay"), ("den Flug/Zug verpassen", "to miss the flight/train"),
    ("einen Zwischenstopp machen", "to make a layover/stopover"), ("der Bahnsteig", "the platform"),
    ("einen Flug stornieren", "to cancel a flight"), ("der Fenster-/Gangplatz", "the window/aisle seat"),
]
for t, e in travel_l:
    l.add_vocab(t, e)
l.add_grammar("„Obwohl” und „auch wenn” für Zugeständnisse", "„Obwohl” leitet eine reale, bekannte Tatsache ein; „auch wenn” kann sich auf eine reale oder hypothetische Situation beziehen, beide mit Indikativ im Deutschen.", "Obwohl der Zug zu spät ankam, habe ich meinen Flug erreicht. / Auch wenn der Flug storniert wird, haben wir eine andere Option.")
pool_en = [e for _, e in travel_l]
l.add_mcq_vocab("Wie sagt man „einen Zwischenstopp machen” auf Englisch?", "to make a layover/stopover", pool_en,
                "„Einen Zwischenstopp machen” heißt auf Englisch „to make a layover” oder „stopover”.")
l.add_mcq_vocab("Wie sagt man „der Bahnsteig” auf Englisch?", "the platform", pool_en,
                "„Bahnsteig” heißt auf Englisch „platform”.")
l.add_fill("Obwohl der Zug zu spät ___, habe ich meinen Flug erreicht.", "ankam", ["ankam", "ankommt", "anzukommen", "ankommen wird"],
           "„Obwohl” leitet eine reale, vergangene Tatsache mit Indikativ Präteritum ein: „obwohl... ankam”.")
l.add_translate("Übersetze: „Even if the flight is cancelled, we have another option.“", "Auch wenn der Flug storniert wird, haben wir eine andere Option.",
                 ["Obwohl der Flug storniert wird, haben wir eine andere Option.", "Auch wenn der Flug storniert würde, haben wir eine andere Option.", "Auch wenn der Zug storniert wird, haben wir eine andere Option."],
                 "„Even if” = „auch wenn”, mit Indikativ: „auch wenn der Flug storniert wird”.")
l.add_arrange("Bring in die richtige Reihenfolge: [Fensterplatz / bevorzuge / den / ich]", "Ich bevorzuge den Fensterplatz",
              "Subjekt + Verb + Artikel + Substantiv.")
l.add_writing("Schreibe 45-65 Wörter über eine Zug- oder Flugreise mit Zwischenfällen, und benutze mindestens einmal „obwohl” und einmal „auch wenn”.",
              ["obwohl", "auch wenn", "Verspätung"])
lessons.append(l)

# ── B2: Die Sharing Economy und der bewusste Konsum ────
l = LessonBuilder("de_b2_sharing_economy_conscious_consumption", "B2", "Die Sharing Economy und der bewusste Konsum", "♻️", 84,
                   "Sprich über die Sharing Economy mit Futur und Konjunktiv II der Vermutung.")
sharing = [
    ("die Sharing Economy", "the sharing economy"), ("mieten statt kaufen", "to rent instead of buying"),
    ("der bewusste Konsum", "conscious consumption"), ("Ressourcen teilen", "to share resources"),
    ("die geplante Obsoleszenz", "planned obsolescence"), ("Verschwendung reduzieren", "to reduce waste"),
]
for t, e in sharing:
    l.add_vocab(t, e)
l.add_grammar("Futur und Konjunktiv II der Vermutung", "Das Futur I kann eine Vermutung über die Gegenwart ausdrücken („es wird zehn Uhr sein”); der Konjunktiv II mit „würde” drückt eine Vermutung über eine hypothetische Situation aus.", "Dieses Modell wird wohl etwa fünf Jahre geplante Obsoleszenz haben. / Bei diesem Konsum würden sie weniger Ressourcen verbrauchen als gedacht.")
pool_en = [e for _, e in sharing]
l.add_mcq_vocab("Wie sagt man „mieten statt kaufen” auf Englisch?", "to rent instead of buying", pool_en,
                "„Mieten statt kaufen” heißt auf Englisch „to rent instead of buying”.")
l.add_mcq_vocab("Wie sagt man „die geplante Obsoleszenz” auf Englisch?", "planned obsolescence", pool_en,
                "„Geplante Obsoleszenz” heißt auf Englisch „planned obsolescence”.")
l.add_fill("Dieses Modell ___ wohl etwa fünf Jahre geplante Obsoleszenz haben.", "wird", ["wird", "hat", "hatte", "würde"],
           "Das Futur der Vermutung drückt eine Annahme über die Gegenwart aus: „wird... haben”.")
l.add_translate("Übersetze mit Konjunktiv II der Vermutung: „With that consumption, they would spend fewer resources than they thought.“",
                 "Bei diesem Konsum würden sie weniger Ressourcen verbrauchen als gedacht.",
                 ["Bei diesem Konsum werden sie weniger Ressourcen verbrauchen als gedacht.", "Bei diesem Konsum würden sie mehr Ressourcen verbrauchen als gedacht.", "Bei diesem Konsum würden sie weniger Geld verbrauchen als gedacht."],
                 "Der Konjunktiv II der Vermutung „würden verbrauchen” drückt eine Annahme über eine hypothetische Situation aus.")
l.add_arrange("Bring in die richtige Reihenfolge: [Verschwendung / müssen / die / reduzieren / wir]", "Wir müssen die Verschwendung reduzieren",
              "Subjekt + Modalverb + Artikel + Substantiv + Infinitiv.")
l.add_writing("Schreibe 55-75 Wörter über die Sharing Economy und bewussten Konsum, und benutze mindestens ein Futur und einen Konjunktiv II der Vermutung.",
              ["wird...haben", "würden", "bewusster Konsum"])
lessons.append(l)

# ── C1: Nonverbale Sprache und interkulturelle Kommunikation ──
l = LessonBuilder("de_c1_nonverbal_intercultural_communication", "C1", "Nonverbale Sprache und interkulturelle Kommunikation", "🤝", 92,
                   "Analysiere nonverbale Kommunikation mit „als ob” + Konjunktiv II.")
nonverbal = [
    ("die Körpersprache", "body language"), ("der Augenkontakt", "eye contact"),
    ("eine missverstandene Geste", "a misinterpreted gesture"), ("die Proxemik (persönlicher Abstand)", "proxemics (personal space)"),
    ("ein kulturelles Signal", "a cultural cue"), ("das unangenehme Schweigen", "awkward silence"),
]
for t, e in nonverbal:
    l.add_vocab(t, e)
l.add_grammar("„Als ob” + Konjunktiv II", "„Als ob” verlangt immer den Konjunktiv II, auch wenn sich der Vergleich auf die Gegenwart bezieht, weil es etwas Hypothetisches oder der Realität Widersprechendes beschreibt.", "Er handelte, als ob er die Geste verstünde, obwohl er sie nicht verstand. / Sie reagierte, als ob sie beleidigt worden wäre.")
pool_en = [e for _, e in nonverbal]
l.add_mcq_vocab("Wie sagt man „eine missverstandene Geste” auf Englisch?", "a misinterpreted gesture", pool_en,
                "„Eine missverstandene Geste” heißt auf Englisch „a misinterpreted gesture”.")
l.add_mcq_vocab("Wie sagt man „die Proxemik (persönlicher Abstand)” auf Englisch?", "proxemics (personal space)", pool_en,
                "„Proxemik” heißt auf Englisch „proxemics”.")
l.add_fill("Er handelte, als ob er die Geste ___, obwohl er sie nicht verstand.", "verstünde", ["verstünde", "versteht", "verstand", "verstehen wird"],
           "„Als ob” verlangt den Konjunktiv II für einen Vergleich zur Gegenwart: „als ob er verstünde”.")
l.add_translate("Übersetze: „She reacted as if she had been offended.“", "Sie reagierte, als ob sie beleidigt worden wäre.",
                 ["Sie reagierte, als ob sie beleidigt ist.", "Sie reagierte, als ob sie eingeladen worden wäre.", "Sie reagierte, als ob sie beleidigt war."],
                 "„As if she had been offended” wird mit Konjunktiv II Plusquamperfekt übersetzt: „als ob sie beleidigt worden wäre”.")
l.add_arrange("Bring in die richtige Reihenfolge: [Kulturen / variiert / zwischen / der Augenkontakt]", "Der Augenkontakt variiert zwischen Kulturen",
              "Subjekt + Verb + Präposition + Substantiv.")
l.add_writing("Schreibe 55-75 Wörter über ein interkulturelles Missverständnis in Bezug auf nonverbale Kommunikation, und benutze mindestens zwei Konstruktionen mit „als ob”.",
              ["als ob", "Körpersprache", "Geste"])
lessons.append(l)

# ── C2: Die Unsicherheit und die wissenschaftliche Sprache ──
l = LessonBuilder("de_c2_scientific_hedging_uncertainty", "C2", "Die Unsicherheit und die wissenschaftliche Sprache", "🔬", 100,
                   "Analysiere wissenschaftliche Sprache mit Ausdrücken epistemischer Abschwächung (Hedging).")
hedge = [
    ("die statistische Unsicherheit", "statistical uncertainty"), ("eine Fehlerspanne", "a margin of error"),
    ("Korrelation impliziert keine Kausalität", "correlation does not imply causation"), ("vorläufige Ergebnisse", "preliminary results"),
    ("eine unbestätigte Hypothese", "an unconfirmed hypothesis"), ("eine Aussage abschwächen", "to hedge/qualify a claim"),
]
for t, e in hedge:
    l.add_vocab(t, e)
l.add_grammar("Ausdrücke epistemischer Abschwächung (Hedging)", "Ausdrücke wie „man könnte sagen, dass”, „es wäre nicht abwegig zu denken, dass” oder „die Daten deuten darauf hin, ohne zu bestätigen, dass” schwächen den Gewissheitsgrad einer wissenschaftlichen Aussage ab und vermeiden Übergeneralisierung.", "Man könnte sagen, dass es einen Trend gibt, obwohl die Daten vorläufig sind. / Die Ergebnisse deuten auf einen kausalen Zusammenhang hin, ohne ihn zu bestätigen.")
pool_en = [e for _, e in hedge]
l.add_mcq_vocab("Wie sagt man „eine Fehlerspanne” auf Englisch?", "a margin of error", pool_en,
                "„Eine Fehlerspanne” heißt auf Englisch „a margin of error”.")
l.add_mcq_vocab("Wie sagt man „eine unbestätigte Hypothese” auf Englisch?", "an unconfirmed hypothesis", pool_en,
                "„Eine unbestätigte Hypothese” heißt auf Englisch „an unconfirmed hypothesis”.")
l.add_fill("Man ___ sagen, dass es einen Trend gibt, obwohl die Daten vorläufig sind.", "könnte", ["könnte", "kann", "muss", "wird"],
           "„Man könnte sagen, dass” ist ein fester Ausdruck epistemischer Abschwächung, der eine Aussage abmildert.")
l.add_translate("Übersetze präzise: „The results suggest, but do not confirm, a causal relationship.“",
                 "Die Ergebnisse deuten auf einen kausalen Zusammenhang hin, ohne ihn zu bestätigen.",
                 ["Die Ergebnisse bestätigen einen kausalen Zusammenhang, ohne darauf hinzudeuten.", "Die Ergebnisse deuten auf eine statistische Korrelation hin, ohne sie zu bestätigen.", "Die Ergebnisse deuten auf einen kausalen Zusammenhang hin und bestätigen ihn."],
                 "„Suggest, but do not confirm” wird mit „deuten hin, ohne zu bestätigen” übersetzt, was die Gewissheit abschwächt.")
l.add_arrange("Bring in die richtige Reihenfolge: [Kausalität / keine / impliziert / Korrelation]", "Korrelation impliziert keine Kausalität",
              "Subjekt + Verb + Negation + Objekt.")
l.add_writing("Schreibe 55-75 Wörter über eine (reale oder erfundene) wissenschaftliche Studie mit vorläufigen Ergebnissen, und benutze mindestens zwei Ausdrücke epistemischer Abschwächung.",
              ["man könnte sagen, dass", "die Daten deuten darauf hin", "Unsicherheit"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out13_de.txt")
