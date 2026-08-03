import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: I vestiti e i colori ──────────────────────────
l = LessonBuilder("it_a1_clothing_colors", "A1", "I vestiti e i colori", "👕", 37,
                   "Impara il vocabolario dei vestiti e come abbinarli ai colori in italiano.")
clothes = [
    ("la camicia", "the shirt"), ("i pantaloni", "the pants/trousers"), ("le scarpe", "the shoes"),
    ("il vestito", "the dress"), ("la giacca", "the jacket"), ("la gonna", "the skirt"),
]
for t, e in clothes:
    l.add_vocab(t, e)
l.add_vocab("rosso, blu, verde, nero, bianco", "red, blue, green, black, white")
l.add_grammar("Accordo di genere e numero con gli aggettivi di colore", "I colori concordano in genere e numero con il sostantivo che descrivono.", "la camicia rossa / le scarpe nere / il vestito verde")
l.add_mcq_vocab("Come si dice \u201cla giacca\u201d in inglese?", "the jacket", ["the jacket", "the shirt", "the pants/trousers", "the skirt"],
                "\u201cGiacca\u201d si dice \u201cjacket\u201d in inglese.")
l.add_mcq_vocab("Come si dice \u201cle scarpe\u201d in inglese?", "the shoes", ["the shoes", "the dress", "the shirt", "the skirt"],
                "\u201cScarpe\u201d si dice \u201cshoes\u201d in inglese.")
l.add_fill("Indosso una camicia ___ e dei pantaloni neri.", "blu", ["blu", "blue", "blui", "bluo"],
           "\u201cBlu\u201d è invariabile in italiano: non cambia con genere o numero.")
l.add_translate("Traduci: \u201cI'm wearing a red dress.\u201d", "Indosso un vestito rosso.",
                 ["Indosso una gonna rossa.", "Indosso una camicia rossa.", "Indosso scarpe rosse."],
                 "\u201cI'm wearing\u201d = \u201cIndosso\u201d; \u201ca red dress\u201d = \u201cun vestito rosso\u201d.")
l.add_arrange("Metti in ordine: [nere / ho / scarpe / delle]", "Ho delle scarpe nere",
              "Soggetto implicito + verbo + articolo partitivo + sostantivo + aggettivo.")
l.add_writing("Descrivi in italiano, in 20-30 parole, i vestiti che indossi oggi, menzionando almeno tre capi e i loro colori.",
              ["indosso", "di colore", "e"])
lessons.append(l)

# ── A2: Frutta e verdura ──────────────────────────────
l = LessonBuilder("it_a2_fruits_vegetables", "A2", "Frutta e verdura", "🥦", 47,
                   "Impara il vocabolario di frutta e verdura e a parlare di alimentazione sana in italiano.")
food = [
    ("la mela", "the apple"), ("la banana", "the banana"), ("la carota", "the carrot"),
    ("il pomodoro", "the tomato"), ("la lattuga", "the lettuce"), ("l'arancia", "the orange"),
]
for t, e in food:
    l.add_vocab(t, e)
l.add_grammar("Quantificatori: molto/a, poco/a", "Questi quantificatori concordano in genere con il sostantivo e servono per parlare di quantità in modo approssimativo.", "Mangio molta frutta e poca carne.")
l.add_mcq_vocab("Come si dice \u201cla carota\u201d in inglese?", "the carrot", ["the carrot", "the apple", "the banana", "the orange"],
                "\u201cCarota\u201d si dice \u201ccarrot\u201d in inglese.")
l.add_mcq_vocab("Come si dice \u201cla banana\u201d in inglese?", "the banana", ["the banana", "the tomato", "the lettuce", "the carrot"],
                "\u201cBanana\u201d si dice \u201cbanana\u201d in inglese.")
l.add_fill("Mangio ___ frutta ogni giorno per stare in salute.", "molta", ["molta", "molto", "molti", "molte"],
           "\u201cFrutta\u201d è femminile singolare, quindi il quantificatore concorda: \u201cmolta frutta\u201d.")
l.add_translate("Traduci: \u201cI eat little meat and a lot of vegetables.\u201d", "Mangio poca carne e molta verdura.",
                 ["Mangio poca carne e poca verdura.", "Mangio molta carne e molta verdura.", "Mangio poca frutta e molta verdura."],
                 "\u201cLittle meat\u201d = \u201cpoca carne\u201d; \u201ca lot of vegetables\u201d = \u201cmolta verdura\u201d.")
l.add_arrange("Metti in ordine: [pomodoro / L'insalata / ha / e / lattuga]", "L'insalata ha pomodoro e lattuga",
              "Soggetto + verbo + oggetto (due sostantivi uniti da \u201ce\u201d).")
l.add_speaking("Descrivi in italiano, in 40-60 parole, la tua dieta abituale: quale frutta e verdura mangi normalmente e con che frequenza.",
               ["mangio", "spesso", "verdura"])
lessons.append(l)

# ── B1: La cucina: verbi e ricette semplici ────────────
l = LessonBuilder("it_b1_cooking_recipes", "B1", "La cucina: verbi e ricette semplici", "🍳", 61,
                   "Impara verbi di cucina e a spiegare i passaggi di una ricetta semplice in italiano.")
cooking = [
    ("tagliare, sbucciare", "to cut, to peel"), ("bollire, friggere", "to boil, to fry"),
    ("mescolare gli ingredienti", "to mix the ingredients"), ("aggiungere sale a piacere", "to add salt to taste"),
    ("lasciar riposare l'impasto", "to let the dough rest"), ("preriscaldare il forno", "to preheat the oven"),
]
for t, e in cooking:
    l.add_vocab(t, e)
l.add_grammar("L'imperativo per dare istruzioni di ricetta", "Le ricette usano l'imperativo (formale \u201cLei\u201d o infinito) per dare istruzioni passo dopo passo.", "Tagli le verdure, faccia bollire l'acqua e aggiunga sale a piacere.")
l.add_mcq_vocab("Come si dice \u201cmescolare gli ingredienti\u201d in inglese?", "to mix the ingredients",
                ["to mix the ingredients", "to cut, to peel", "to boil, to fry", "to preheat the oven"],
                "\u201cMescolare gli ingredienti\u201d si dice \u201cto mix the ingredients\u201d.")
l.add_mcq_vocab("Come si dice \u201cpreriscaldare il forno\u201d in inglese?", "to preheat the oven",
                ["to preheat the oven", "to let the dough rest", "to add salt to taste", "to cut, to peel"],
                "\u201cPreriscaldare il forno\u201d si dice \u201cto preheat the oven\u201d.")
l.add_fill("Prima di infornare, bisogna ___ il forno a 180 gradi.", "preriscaldare", ["preriscaldare", "bollire", "friggere", "mescolare"],
           "\u201cPreriscaldare il forno\u201d è il passaggio tipico prima di infornare.")
l.add_translate("Traduci: \u201cLet the dough rest for ten minutes.\u201d", "Lasci riposare l'impasto per dieci minuti.",
                 ["Lasci bollire l'impasto per dieci minuti.", "Lasci friggere l'impasto per dieci minuti.", "Lasci tagliare l'impasto per dieci minuti."],
                 "\u201cLet the dough rest\u201d = \u201cLasci riposare l'impasto\u201d, con l'imperativo formale.")
l.add_arrange("Metti in ordine: [piacere / sale / aggiunga / a]", "Aggiunga sale a piacere",
              "Imperativo + oggetto + espressione fissa \u201ca piacere\u201d.")
l.add_writing("Scrivi in italiano 45-65 parole spiegando i passaggi di una ricetta semplice che sai fare, usando almeno tre verbi di cucina all'imperativo.",
              ["tagli", "aggiunga", "lasci riposare"])
lessons.append(l)

# ── B2: Il mondo dell'arte ──────────────────────────────
l = LessonBuilder("it_b2_art_world", "B2", "Il mondo dell'arte: pittura, musica e cinema", "🎨", 83,
                   "Parla di arte, musica e cinema esprimendo opinioni e giudizi sfumati in italiano.")
art = [
    ("un capolavoro", "a masterpiece"), ("la messa in scena", "the staging/mise-en-scène"),
    ("un'interpretazione commovente", "a moving performance"), ("lo stile di un artista", "an artist's style"),
    ("lasciare un'impressione duratura", "to leave a lasting impression"), ("essere sopravvalutato/sottovalutato", "to be overrated/underrated"),
]
for t, e in art:
    l.add_vocab(t, e)
l.add_grammar("Verbi di opinione + congiuntivo/indicativo secondo la certezza", "\u201cMi sembra che\u201d + indicativo esprime un'opinione con una certa sicurezza; \u201cnon credo che\u201d + congiuntivo esprime dubbio.", "Mi sembra che questo film sia un capolavoro. / Non credo che sia sopravvalutato.")
l.add_mcq_vocab("Come si dice \u201cun'interpretazione commovente\u201d in inglese?", "a moving performance",
                ["a moving performance", "a masterpiece", "an artist's style", "a lasting impression"],
                "\u201cUn'interpretazione commovente\u201d si dice \u201ca moving performance\u201d.")
l.add_mcq_vocab("Come si dice \u201cessere sopravvalutato\u201d in inglese?", "to be overrated",
                ["to be overrated", "to be underrated", "to leave an impression", "an artist's style"],
                "\u201cEssere sopravvalutato\u201d si dice \u201cto be overrated\u201d.")
l.add_fill("Non credo che questo film ___ così buono come dicono.", "sia", ["sia", "è", "sarà", "era"],
           "\u201cNon credo che\u201d richiede il congiuntivo: \u201cche sia\u201d.")
l.add_translate("Traduci: \u201cThis performance left a lasting impression on me.\u201d", "Questa interpretazione mi ha lasciato un'impressione duratura.",
                 ["Questa interpretazione mi ha lasciato un capolavoro.", "Questo stile mi ha lasciato un'impressione duratura.", "Questa messa in scena mi ha lasciato sopravvalutato."],
                 "\u201cLeft a lasting impression\u201d = \u201cha lasciato un'impressione duratura\u201d.")
l.add_arrange("Metti in ordine: [capolavoro / questo / è / un]", "Questo è un capolavoro",
              "Soggetto + \u201cè\u201d + articolo + sostantivo.")
l.add_writing("Scrivi in italiano 55-75 parole dando la tua opinione su un'opera d'arte, un film o una canzone (reale o inventata): cosa ne pensi e perché, usando almeno una struttura con il congiuntivo di opinione.",
              ["mi sembra che", "non credo che", "un'impressione"])
lessons.append(l)

# ── C1: La critica costruttiva: dare e ricevere feedback ────
l = LessonBuilder("it_c1_giving_feedback", "C1", "La critica costruttiva: dare e ricevere feedback", "🗨️", 91,
                   "Impara a dare e ricevere feedback in modo costruttivo e professionale in italiano.")
feedback = [
    ("segnalare un punto da migliorare", "to point out an area for improvement"),
    ("riconoscere i punti di forza prima delle critiche", "to acknowledge strengths before criticism"),
    ("formulare la critica in termini concreti", "to phrase criticism in concrete terms"),
    ("essere aperto/a al feedback", "to be open to feedback"),
    ("prendere la critica sul personale", "to take criticism personally"),
    ("proporre una soluzione, non solo segnalare il problema", "to propose a solution, not just point out the problem"),
]
for t, e in feedback:
    l.add_vocab(t, e)
l.add_grammar("Attenuatori per ammorbidire una critica", "Espressioni come \u201cpotresti considerare\u201d o \u201cun suggerimento sarebbe\u201d ammorbidiscono una critica senza perdere chiarezza.", "Potresti considerare di ristrutturare il rapporto; un suggerimento sarebbe iniziare con le conclusioni.")
l.add_mcq_vocab("Come si dice \u201cformulare la critica in termini concreti\u201d in inglese?", "to phrase criticism in concrete terms",
                ["to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback", "to take criticism personally"],
                "\u201cFormulare la critica in termini concreti\u201d si dice \u201cto phrase criticism in concrete terms\u201d.")
l.add_mcq_vocab("Come si dice \u201cprendere la critica sul personale\u201d in inglese?", "to take criticism personally",
                ["to take criticism personally", "to acknowledge strengths", "to propose a solution", "to be open to feedback"],
                "\u201cPrendere la critica sul personale\u201d si dice \u201cto take criticism personally\u201d.")
l.add_fill("Prima di dare una critica, è una buona idea ___ i punti di forza del lavoro.", "riconoscere", ["riconoscere", "ignorare", "nascondere", "criticare"],
           "\u201cRiconoscere i punti di forza prima delle critiche\u201d fa sì che il feedback sia accolto meglio.")
l.add_translate("Traduci: \u201cUn suggerimento sarebbe iniziare con le conclusioni.\u201d", "One suggestion would be to start with the conclusions.",
                 ["One suggestion would be to finish with the conclusions.", "One criticism would be to start with the conclusions.", "One problem would be to start with the conclusions."],
                 "\u201cUn suggerimento sarebbe\u201d = \u201cOne suggestion would be to\u201d.")
l.add_arrange("Metti in ordine: [problema / proponi / solo / il / una soluzione / non / segnalare]",
              "Non segnalare solo il problema, proponi una soluzione",
              "Struttura di contrasto: \u201cnon solo... [verbo]\u201d + \u201c[verbo]... una soluzione\u201d.")
l.add_writing("Scrivi in italiano 55-75 parole dando feedback costruttivo su un lavoro (reale o inventato): riconosci un punto di forza, segnala un punto da migliorare concreto e proponi una soluzione.",
              ["riconosco che", "potresti considerare", "un suggerimento sarebbe"])
lessons.append(l)

# ── C2: Il linguaggio inclusivo e l'evoluzione della lingua ─────
l = LessonBuilder("it_c2_inclusive_language", "C2", "Il linguaggio inclusivo e l'evoluzione della lingua", "🌐", 99,
                   "Analizza il dibattito sul linguaggio inclusivo e come le lingue si evolvono con la società.")
lang_change = [
    ("il linguaggio inclusivo", "inclusive language"), ("una lingua viva si evolve con l'uso", "a living language evolves with use"),
    ("prescrittivismo contro descrittivismo", "prescriptivism versus descriptivism"),
    ("un neologismo viene aggiunto al dizionario", "a neologism is added to the dictionary"),
    ("generare resistenza a un cambiamento linguistico", "to generate resistance to a linguistic change"),
    ("un argomento non implica necessariamente una posizione politica", "an argument doesn't necessarily imply a political stance"),
]
for t, e in lang_change:
    l.add_vocab(t, e)
l.add_grammar("Presentare un dibattito linguistico senza pregiudizi", "Un'analisi rigorosa separa la descrizione del fenomeno (come cambia la lingua) dalla valutazione personale (se il cambiamento dovrebbe essere adottato o no).", "Dal punto di vista descrittivista, il cambiamento viene documentato senza giudicarlo; da quello prescrittivista, si valuta se convenga normalizzarlo.")
l.add_mcq_vocab("Come si dice \u201cprescrittivismo contro descrittivismo\u201d in inglese?", "prescriptivism versus descriptivism",
                ["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],
                "\u201cPrescrittivismo contro descrittivismo\u201d si dice \u201cprescriptivism versus descriptivism\u201d.")
l.add_mcq_vocab("Come si dice \u201cun neologismo viene aggiunto al dizionario\u201d in inglese?", "a neologism is added to the dictionary",
                ["a neologism is added to the dictionary", "a living language evolves with use", "to generate resistance", "inclusive language"],
                "\u201cUn neologismo viene aggiunto al dizionario\u201d si dice \u201ca neologism is added to the dictionary\u201d.")
l.add_fill("Il descrittivismo si concentra sul documentare come parla davvero la gente, non sul dettare come ___ parlare.", "dovrebbe",
           ["dovrebbe", "può", "vuole", "suole"],
           "Il descrittivismo descrive l'uso reale, senza dettare norme su come si \u201cdovrebbe\u201d parlare.")
l.add_translate("Traduci con precisione: \u201cUna lingua viva si evolve con l'uso, che ci piaccia o no.\u201d",
                 "A living language evolves with use, whether we like it or not.",
                 ["A living language evolves with use, even if it doesn't change.", "A dead language evolves with use, whether we like it or not.", "A living language evolves without use, whether we like it or not."],
                 "\u201cChe ci piaccia o no\u201d si traduce idiomaticamente come \u201cwhether we like it or not\u201d.")
l.add_arrange("Metti in ordine: [necessariamente / implica / non / una posizione / politica / un argomento]",
              "Un argomento non implica necessariamente una posizione politica",
              "Soggetto + negazione + \u201cimplica necessariamente\u201d + oggetto.")
l.add_writing("Scrivi in italiano 55-75 parole presentando in modo equilibrato due posizioni su un cambiamento linguistico attuale (reale o inventato), senza schierarti esplicitamente, distinguendo descrizione e valutazione.",
              ["da un lato", "dall'altro", "senza necessariamente"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out7_it.txt")
