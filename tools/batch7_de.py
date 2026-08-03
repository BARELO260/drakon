import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Kleidung und Farben ──────────────────────────
l = LessonBuilder("de_a1_clothing_colors", "A1", "Kleidung und Farben", "👕", 37,
                   "Lerne den Wortschatz für Kleidungsstücke und wie man sie mit Farben kombiniert.")
clothes = [
    ("das Hemd", "the shirt"), ("die Hose", "the pants/trousers"), ("die Schuhe", "the shoes"),
    ("das Kleid", "the dress"), ("die Jacke", "the jacket"), ("der Rock", "the skirt"),
]
for t, e in clothes:
    l.add_vocab(t, e)
l.add_vocab("rot, blau, grün, schwarz, weiß", "red, blue, green, black, white")
l.add_grammar("Adjektivendungen bei Farben", "Farbadjektive bekommen im Deutschen eine Endung, die vom Artikel und vom Fall abhängt.", "ein rotes Kleid / schwarze Schuhe / das grüne Hemd")
l.add_mcq_vocab("Wie sagt man \u201edie Jacke\u201c auf Englisch?", "the jacket", ["the jacket", "the shirt", "the pants/trousers", "the skirt"],
                "\u201eJacke\u201c heißt \u201ejacket\u201c auf Englisch.")
l.add_mcq_vocab("Wie sagt man \u201edie Schuhe\u201c auf Englisch?", "the shoes", ["the shoes", "the dress", "the shirt", "the skirt"],
                "\u201eSchuhe\u201c heißt \u201eshoes\u201c auf Englisch.")
l.add_fill("Ich trage ein ___ Hemd und eine schwarze Hose.", "blaues", ["blaues", "blau", "blaue", "blauen"],
           "\u201eHemd\u201c ist sächlich, daher die Endung: \u201eein blaues Hemd\u201c.")
l.add_translate("Übersetze: \u201eI'm wearing a red dress.\u201c", "Ich trage ein rotes Kleid.",
                 ["Ich trage einen roten Rock.", "Ich trage ein rotes Hemd.", "Ich trage rote Schuhe."],
                 "\u201eI'm wearing\u201c = \u201eIch trage\u201c; \u201ea red dress\u201c = \u201eein rotes Kleid\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [schwarze / habe / ich / Schuhe]", "Ich habe schwarze Schuhe",
              "Subjekt + Verb + Adjektiv + Substantiv (Pluralendung ohne Artikel)."),
l.add_writing("Beschreibe auf Deutsch, in 20-30 Wörtern, die Kleidung, die du heute trägst, und nenne mindestens drei Kleidungsstücke und ihre Farben.",
              ["ich trage", "-farben", "und"])
lessons.append(l)

# ── A2: Obst und Gemüse ──────────────────────────────────────
l = LessonBuilder("de_a2_fruits_vegetables", "A2", "Obst und Gemüse", "🥦", 47,
                   "Lerne den Wortschatz für Obst und Gemüse und wie man auf Deutsch über gesunde Ernährung spricht.")
food = [
    ("der Apfel", "the apple"), ("die Banane", "the banana"), ("die Karotte", "the carrot"),
    ("die Tomate", "the tomato"), ("der Salat", "the lettuce"), ("die Orange", "the orange"),
]
for t, e in food:
    l.add_vocab(t, e)
l.add_grammar("\u201eViel\u201c und \u201ewenig\u201c für Mengen", "\u201eViel\u201c und \u201ewenig\u201c bleiben vor unzählbaren Substantiven im Singular unverändert.", "Ich esse viel Obst und wenig Fleisch.")
l.add_mcq_vocab("Wie sagt man \u201edie Karotte\u201c auf Englisch?", "the carrot", ["the carrot", "the apple", "the banana", "the orange"],
                "\u201eKarotte\u201c heißt \u201ecarrot\u201c auf Englisch.")
l.add_mcq_vocab("Wie sagt man \u201edie Banane\u201c auf Englisch?", "the banana", ["the banana", "the tomato", "the lettuce", "the carrot"],
                "\u201eBanane\u201c heißt \u201ebanana\u201c auf Englisch.")
l.add_fill("Ich esse jeden Tag ___ Obst, um gesund zu bleiben.", "viel", ["viel", "wenig", "viele", "wenige"],
           "\u201eObst\u201c ist unzählbar, daher \u201eviel Obst\u201c (unveränderlich)."),
l.add_translate("Übersetze: \u201eI eat little meat and a lot of vegetables.\u201c", "Ich esse wenig Fleisch und viel Gemüse.",
                 ["Ich esse wenig Fleisch und wenig Gemüse.", "Ich esse viel Fleisch und viel Gemüse.", "Ich esse wenig Obst und viel Gemüse."],
                 "\u201eLittle meat\u201c = \u201ewenig Fleisch\u201c; \u201ea lot of vegetables\u201c = \u201eviel Gemüse\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [Apfel / Banane / mag / und / ich]", "Ich mag Apfel und Banane",
              "Subjekt + Verb + Objekt (zwei durch \u201eund\u201c verbundene Substantive)."),
l.add_speaking("Beschreibe auf Deutsch, in 40-60 Wörtern, deine übliche Ernährung: welches Obst und Gemüse du normalerweise isst und wie oft.",
               ["ich esse", "oft", "Gemüse"])
lessons.append(l)

# ── B1: Kochen: Verben und einfache Rezepte ────────────
l = LessonBuilder("de_b1_cooking_recipes", "B1", "Kochen: Verben und einfache Rezepte", "🍳", 61,
                   "Lerne Kochverben und wie man die Schritte eines einfachen Rezepts auf Deutsch erklärt.")
cooking = [
    ("schneiden, schälen", "to cut, to peel"), ("kochen, braten", "to boil, to fry"),
    ("die Zutaten mischen", "to mix the ingredients"), ("nach Geschmack Salz hinzufügen", "to add salt to taste"),
    ("den Teig ruhen lassen", "to let the dough rest"), ("den Ofen vorheizen", "to preheat the oven"),
]
for t, e in cooking:
    l.add_vocab(t, e)
l.add_grammar("Der Imperativ für Rezeptanweisungen", "Rezepte benutzen den Imperativ (Sie-Form), um Schritt für Schritt Anweisungen zu geben.", "Schneiden Sie das Gemüse, kochen Sie das Wasser und fügen Sie Salz nach Geschmack hinzu.")
l.add_mcq_vocab("Wie sagt man \u201edie Zutaten mischen\u201c auf Englisch?", "to mix the ingredients",
                ["to mix the ingredients", "to cut, to peel", "to boil, to fry", "to preheat the oven"],
                "\u201eDie Zutaten mischen\u201c heißt \u201eto mix the ingredients\u201c.")
l.add_mcq_vocab("Wie sagt man \u201eden Ofen vorheizen\u201c auf Englisch?", "to preheat the oven",
                ["to preheat the oven", "to let the dough rest", "to add salt to taste", "to cut, to peel"],
                "\u201eDen Ofen vorheizen\u201c heißt \u201eto preheat the oven\u201c.")
l.add_fill("Vor dem Backen muss man den Ofen auf 180 Grad ___.", "vorheizen", ["vorheizen", "kochen", "braten", "mischen"],
           "\u201eDen Ofen vorheizen\u201c ist der typische vorherige Schritt vor dem Backen.")
l.add_translate("Übersetze: \u201eLassen Sie den Teig zehn Minuten ruhen.\u201c", "Let the dough rest for ten minutes.",
                 ["Let the dough boil for ten minutes.", "Let the dough fry for ten minutes.", "Let the dough cut for ten minutes."],
                 "\u201eLassen Sie den Teig ruhen\u201c = \u201eLet the dough rest\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [Geschmack / Salz / nach / Sie / fügen / hinzu]", "Fügen Sie Salz nach Geschmack hinzu",
              "Imperativ + Objekt + feste Wendung \u201enach Geschmack\u201c."),
l.add_writing("Schreibe auf Deutsch 45-65 Wörter über die Schritte eines einfachen Rezepts, das du kannst, und benutze mindestens drei Kochverben im Imperativ.",
              ["schneiden Sie", "fügen Sie hinzu", "lassen Sie ruhen"])
lessons.append(l)

# ── B2: Die Welt der Kunst ──────────────────────────────
l = LessonBuilder("de_b2_art_world", "B2", "Die Welt der Kunst: Malerei, Musik und Film", "🎨", 83,
                   "Sprich über Kunst, Musik und Film und drücke differenzierte Meinungen auf Deutsch aus.")
art = [
    ("ein Meisterwerk", "a masterpiece"), ("die Inszenierung", "the staging/mise-en-scène"),
    ("eine bewegende Darbietung", "a moving performance"), ("der Stil eines Künstlers", "an artist's style"),
    ("einen bleibenden Eindruck hinterlassen", "to leave a lasting impression"), ("überbewertet/unterbewertet sein", "to be overrated/underrated"),
]
for t, e in art:
    l.add_vocab(t, e)
l.add_grammar("\u201eIch glaube nicht, dass\u201c + Konjunktiv II zur Abschwächung einer Meinung", "\u201eIch glaube nicht, dass\u201c kann mit Konjunktiv II oder Indikativ folgen, um eine differenzierte Meinung auszudrücken.", "Ich glaube nicht, dass dieser Film so gut ist, wie alle sagen.")
l.add_mcq_vocab("Wie sagt man \u201eeine bewegende Darbietung\u201c auf Englisch?", "a moving performance",
                ["a moving performance", "a masterpiece", "an artist's style", "a lasting impression"],
                "\u201eEine bewegende Darbietung\u201c heißt \u201ea moving performance\u201c.")
l.add_mcq_vocab("Wie sagt man \u201eüberbewertet sein\u201c auf Englisch?", "to be overrated",
                ["to be overrated", "to be underrated", "to leave an impression", "an artist's style"],
                "\u201eÜberbewertet sein\u201c heißt \u201eto be overrated\u201c.")
l.add_fill("Ich glaube nicht, dass dieser Film so gut ___, wie alle sagen.", "ist", ["ist", "war", "sein wird", "gewesen"],
           "Im Indikativ Präsens: \u201eich glaube nicht, dass...ist\u201c.")
l.add_translate("Übersetze: \u201eEsta interpretación me dejó una impresión duradera.\u201c", "This performance left a lasting impression on me.",
                 ["This performance left a masterpiece on me.", "This style left a lasting impression on me.", "This staging left me overrated."],
                 "\u201eDejó una impresión duradera\u201c = \u201eleft a lasting impression\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [Meisterwerk / ein / ist / das]", "Das ist ein Meisterwerk",
              "Subjekt + \u201eist\u201c + Artikel + Substantiv."),
l.add_writing("Schreibe auf Deutsch 55-75 Wörter über deine Meinung zu einem Kunstwerk, Film oder Lied (real oder erfunden): was du davon hältst und warum, mit einer differenzierten Position.",
              ["ich finde, dass", "ich glaube nicht, dass", "einen Eindruck"])
lessons.append(l)

# ── C1: Konstruktive Kritik: Feedback geben und erhalten ────
l = LessonBuilder("de_c1_giving_feedback", "C1", "Konstruktive Kritik: Feedback geben und erhalten", "🗨️", 91,
                   "Lerne, auf Deutsch konstruktives und professionelles Feedback zu geben und zu erhalten.")
feedback = [
    ("einen Verbesserungspunkt ansprechen", "to point out an area for improvement"),
    ("Stärken vor der Kritik anerkennen", "to acknowledge strengths before criticism"),
    ("Kritik konkret formulieren", "to phrase criticism in concrete terms"),
    ("offen für Feedback sein", "to be open to feedback"),
    ("Kritik persönlich nehmen", "to take criticism personally"),
    ("eine Lösung vorschlagen, nicht nur das Problem nennen", "to propose a solution, not just point out the problem"),
]
for t, e in feedback:
    l.add_vocab(t, e)
l.add_grammar("Abschwächende Formulierungen für Kritik", "Ausdrücke wie \u201eSie könnten vielleicht in Erwägung ziehen\u201c oder \u201eein Vorschlag wäre\u201c mildern Kritik ab, ohne an Klarheit zu verlieren.", "Sie könnten vielleicht in Erwägung ziehen, den Bericht umzustrukturieren; ein Vorschlag wäre, mit den Schlussfolgerungen zu beginnen.")
l.add_mcq_vocab("Wie sagt man \u201eKritik konkret formulieren\u201c auf Englisch?", "to phrase criticism in concrete terms",
                ["to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback", "to take criticism personally"],
                "\u201eKritik konkret formulieren\u201c heißt \u201eto phrase criticism in concrete terms\u201c.")
l.add_mcq_vocab("Wie sagt man \u201eKritik persönlich nehmen\u201c auf Englisch?", "to take criticism personally",
                ["to take criticism personally", "to acknowledge strengths", "to propose a solution", "to be open to feedback"],
                "\u201eKritik persönlich nehmen\u201c heißt \u201eto take criticism personally\u201c.")
l.add_fill("Bevor man Kritik übt, ist es eine gute Idee, die Stärken der Arbeit ___.", "anzuerkennen",
           ["anzuerkennen", "zu ignorieren", "zu verstecken", "zu kritisieren"],
           "\u201eStärken vor der Kritik anerkennen\u201c sorgt dafür, dass das Feedback besser angenommen wird.")
l.add_translate("Übersetze: \u201eEin Vorschlag wäre, mit den Schlussfolgerungen zu beginnen.\u201c", "One suggestion would be to start with the conclusions.",
                 ["One suggestion would be to finish with the conclusions.", "One criticism would be to start with the conclusions.", "One problem would be to start with the conclusions."],
                 "\u201eEin Vorschlag wäre\u201c = \u201eOne suggestion would be to\u201c.")
l.add_arrange("Bringe in die richtige Reihenfolge: [Problem / schlage / nur / das / eine Lösung / nicht / nenne / vor]",
              "Nenne nicht nur das Problem, schlage eine Lösung vor",
              "Kontraststruktur: \u201enicht nur... [Verb]\u201c + \u201e[Verb]... eine Lösung\u201c.")
l.add_writing("Schreibe auf Deutsch 55-75 Wörter mit konstruktivem Feedback zu einer Arbeit (real oder erfunden): erkenne eine Stärke an, nenne einen konkreten Verbesserungspunkt und schlage eine Lösung vor.",
              ["ich erkenne an, dass", "Sie könnten vielleicht", "ein Vorschlag wäre"])
lessons.append(l)

# ── C2: Inklusive Sprache und der Wandel der Sprache ─────
l = LessonBuilder("de_c2_inclusive_language", "C2", "Inklusive Sprache und der Wandel der Sprache", "🌐", 99,
                   "Analysiere die Debatte um inklusive Sprache und wie sich Sprachen mit der Gesellschaft entwickeln.")
lang_change = [
    ("inklusive Sprache", "inclusive language"), ("eine lebendige Sprache entwickelt sich durch den Gebrauch", "a living language evolves with use"),
    ("Präskriptivismus versus Deskriptivismus", "prescriptivism versus descriptivism"),
    ("ein Neologismus wird ins Wörterbuch aufgenommen", "a neologism is added to the dictionary"),
    ("Widerstand gegen einen Sprachwandel erzeugen", "to generate resistance to a linguistic change"),
    ("ein Argument impliziert nicht zwangsläufig eine politische Haltung", "an argument doesn't necessarily imply a political stance"),
]
for t, e in lang_change:
    l.add_vocab(t, e)
l.add_grammar("Eine sprachliche Debatte ohne Voreingenommenheit darstellen", "Eine rigorose Analyse trennt die Beschreibung des Phänomens (wie sich die Sprache verändert) von der persönlichen Bewertung (ob der Wandel übernommen werden sollte).", "Aus deskriptivistischer Sicht wird der Wandel ohne Urteil dokumentiert; aus präskriptivistischer Sicht wird bewertet, ob er standardisiert werden sollte.")
l.add_mcq_vocab("Wie sagt man \u201ePräskriptivismus versus Deskriptivismus\u201c auf Englisch?", "prescriptivism versus descriptivism",
                ["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],
                "\u201ePräskriptivismus versus Deskriptivismus\u201c heißt \u201eprescriptivism versus descriptivism\u201c.")
l.add_mcq_vocab("Wie sagt man \u201eein Neologismus wird ins Wörterbuch aufgenommen\u201c auf Englisch?", "a neologism is added to the dictionary",
                ["a neologism is added to the dictionary", "a living language evolves with use", "to generate resistance", "inclusive language"],
                "\u201eEin Neologismus wird ins Wörterbuch aufgenommen\u201c heißt \u201ea neologism is added to the dictionary\u201c.")
l.add_fill("Der Deskriptivismus konzentriert sich darauf zu dokumentieren, wie Menschen tatsächlich sprechen, nicht darauf, wie sie sprechen ___.", "sollten",
           ["sollten", "können", "wollen", "pflegen"],
           "Der Deskriptivismus beschreibt den tatsächlichen Gebrauch, ohne Normen darüber zu diktieren, wie man \u201esollte\u201c sprechen.")
l.add_translate("Übersetze mit Präzision: \u201eEine lebendige Sprache entwickelt sich durch den Gebrauch, ob es uns gefällt oder nicht.\u201c",
                 "A living language evolves with use, whether we like it or not.",
                 ["A living language evolves with use, even if it doesn't change.", "A dead language evolves with use, whether we like it or not.", "A living language evolves without use, whether we like it or not."],
                 "\u201eOb es uns gefällt oder nicht\u201c wird idiomatisch als \u201ewhether we like it or not\u201c übersetzt.")
l.add_arrange("Bringe in die richtige Reihenfolge: [zwangsläufig / impliziert / eine politische / nicht / Haltung / ein Argument]",
              "Ein Argument impliziert nicht zwangsläufig eine politische Haltung",
              "Subjekt + Verneinung + \u201eimpliziert zwangsläufig\u201c + Objekt.")
l.add_writing("Schreibe auf Deutsch 55-75 Wörter, die zwei Positionen zu einem aktuellen Sprachwandel (real oder erfunden) ausgewogen darstellen, ohne explizit Partei zu ergreifen, und unterscheide dabei Beschreibung von Bewertung.",
              ["einerseits", "andererseits", "ohne zwangsläufig"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out7_de.txt")
