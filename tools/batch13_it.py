import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: L'ora e i momenti della giornata ───────────────
l = LessonBuilder("it_a1_time_parts_of_day", "A1", "L'ora e i momenti della giornata", "🕐", 38,
                   "Impara a dire l'ora e i momenti della giornata con le preposizioni di tempo.")
time_v = [
    ("la mattina", "the morning"), ("il pomeriggio", "the afternoon"), ("la notte", "the night"),
    ("mezzogiorno", "noon"), ("mezzanotte", "midnight"), ("in punto", "o'clock/sharp"),
]
for t, e in time_v:
    l.add_vocab(t, e)
l.add_grammar("„Che ore sono?” + preposizioni di tempo", "Per chiedere l'ora si usa „Che ore sono?”; per rispondere, „è l'una” (singolare) o „sono le + numero” (plurale), con „di mattina/pomeriggio/sera” per specificare il momento.", "Sono le tre del pomeriggio. / È l'una in punto di notte.")
pool_en = [e for _, e in time_v]
l.add_mcq_vocab("Come si dice “mezzanotte” in inglese?", "midnight", pool_en,
                "“Mezzanotte” si dice “midnight” in inglese.")
l.add_mcq_vocab("Come si dice “in punto” in inglese?", "o'clock/sharp", pool_en,
                "“In punto” si dice “o'clock” o “sharp” in inglese.")
l.add_fill("___ le tre del pomeriggio.", "Sono", ["Sono", "È", "Sta", "C'è"],
           "Si usa „sono” con i numeri plurali: „sono le tre”.")
l.add_translate("Traduci: “It's one o'clock in the morning.”", "È l'una di mattina.",
                 ["Sono l'una di mattina.", "È le una di mattina.", "È l'una di pomeriggio."],
                 "Con „l'una” (singolare) si usa „è”, non „sono”.")
l.add_arrange("Ordina: [pomeriggio / le / sono / quattro / del]", "Sono le quattro del pomeriggio",
              "Verbo + articolo + numero + preposizione + momento della giornata.")
l.add_writing("Descrivi in 20-30 parole la tua routine quotidiana menzionando orari specifici, usando „sono le” e „di mattina/pomeriggio/sera”.",
              ["sono le", "di mattina", "di pomeriggio"])
lessons.append(l)

# ── A2: In banca: aprire un conto ──────────────────────
l = LessonBuilder("it_a2_bank_open_account", "A2", "In banca: aprire un conto", "🏦", 48,
                   "Impara il vocabolario bancario di base e a usare „potere” per possibilità e permesso.")
bank = [
    ("il conto bancario", "the bank account"), ("il bancomat", "the ATM"),
    ("prelevare denaro", "to withdraw money"), ("depositare denaro", "to deposit money"),
    ("la carta di debito", "the debit card"), ("il saldo", "the balance"),
]
for t, e in bank:
    l.add_vocab(t, e)
l.add_grammar("„Potere” + infinito per possibilità e permesso", "„Potere” + infinito esprime capacità, possibilità o permesso, a seconda del contesto.", "Posso aprire un conto qui? / Puoi prelevare denaro da qualsiasi bancomat.")
pool_en = [e for _, e in bank]
l.add_mcq_vocab("Come si dice “prelevare denaro” in inglese?", "to withdraw money", pool_en,
                "“Prelevare denaro” si dice “to withdraw money” in inglese.")
l.add_mcq_vocab("Come si dice “il saldo” in inglese?", "the balance", pool_en,
                "“Saldo” si dice “balance” in inglese.")
l.add_fill("___ aprire un conto qui, per favore?", "Posso", ["Posso", "Puoi", "Può", "Possiamo"],
           "Si usa „posso” in prima persona per chiedere il permesso: „posso aprire”.")
l.add_translate("Traduci: “You can withdraw money at any ATM.”", "Puoi prelevare denaro da qualsiasi bancomat.",
                 ["Puoi depositare denaro da qualsiasi bancomat.", "Devi prelevare denaro da qualsiasi bancomat.", "Puoi prelevare denaro da qualsiasi banca."],
                 "“You can withdraw” = “puoi prelevare”, con „potere” + infinito.")
l.add_arrange("Ordina: [saldo / consultare / il mio / voglio]", "Voglio consultare il mio saldo",
              "Verbo + infinito + oggetto possessivo + sostantivo.")
l.add_speaking("Descrivi in 40-60 parole come apriresti un conto bancario, usando „potere” per chiedere il permesso o esprimere possibilità.",
               ["posso", "puoi", "conto"])
lessons.append(l)

# ── B1: Viaggiare in treno e in aereo: ritardi e cambi ──
l = LessonBuilder("it_b1_train_plane_travel", "B1", "Viaggiare in treno e in aereo: ritardi e cambi", "🚄", 62,
                   "Impara il vocabolario dei viaggi lunghi e a usare „sebbene/anche se” con indicativo o congiuntivo.")
travel_l = [
    ("il ritardo", "the delay"), ("perdere il volo/treno", "to miss the flight/train"),
    ("fare scalo", "to make a layover/stopover"), ("il binario", "the platform"),
    ("cancellare un volo", "to cancel a flight"), ("il posto finestrino/corridoio", "the window/aisle seat"),
]
for t, e in travel_l:
    l.add_vocab(t, e)
l.add_grammar("„Sebbene” + congiuntivo e „anche se” + indicativo", "„Sebbene” richiede sempre il congiuntivo, anche per un fatto reale; „anche se” esprime una concessione reale o ipotetica con l'indicativo.", "Sebbene il treno sia arrivato tardi, ho preso il volo. / Anche se il volo viene cancellato, abbiamo un'altra opzione.")
pool_en = [e for _, e in travel_l]
l.add_mcq_vocab("Come si dice “fare scalo” in inglese?", "to make a layover/stopover", pool_en,
                "“Fare scalo” si dice “to make a layover” o “stopover” in inglese.")
l.add_mcq_vocab("Come si dice “il binario” in inglese?", "the platform", pool_en,
                "“Binario” si dice “platform” in inglese.")
l.add_fill("Sebbene il treno ___ tardi, ho preso il volo.", "sia arrivato", ["sia arrivato", "è arrivato", "arrivava", "arriverà"],
           "„Sebbene” richiede sempre il congiuntivo, anche per un fatto reale: „sebbene... sia arrivato”.")
l.add_translate("Traduci: “Even if the flight is cancelled, we have another option.”", "Anche se il volo viene cancellato, abbiamo un'altra opzione.",
                 ["Sebbene il volo viene cancellato, abbiamo un'altra opzione.", "Anche se il volo venga cancellato, abbiamo un'altra opzione.", "Anche se il treno viene cancellato, abbiamo un'altra opzione."],
                 "“Even if” = “anche se”, seguito dall'indicativo: „anche se il volo viene cancellato”.")
l.add_arrange("Ordina: [finestrino / preferisco / il / posto / del]", "Preferisco il posto del finestrino",
              "Verbo + articolo + sostantivo + preposizione + complemento.")
l.add_writing("Scrivi 45-65 parole su un viaggio in treno o aereo con imprevisti, usando „sebbene” e „anche se” almeno una volta ciascuno.",
              ["sebbene", "anche se", "ritardo"])
lessons.append(l)

# ── B2: L'economia collaborativa e il consumo consapevole ──
l = LessonBuilder("it_b2_sharing_economy_conscious_consumption", "B2", "L'economia collaborativa e il consumo consapevole", "♻️", 84,
                   "Parla di economia collaborativa usando il futuro e il condizionale di probabilità.")
sharing = [
    ("l'economia collaborativa", "the sharing economy"), ("noleggiare invece di comprare", "to rent instead of buying"),
    ("il consumo consapevole", "conscious consumption"), ("condividere risorse", "to share resources"),
    ("l'obsolescenza programmata", "planned obsolescence"), ("ridurre lo spreco", "to reduce waste"),
]
for t, e in sharing:
    l.add_vocab(t, e)
l.add_grammar("Futuro e condizionale di probabilità", "Il futuro semplice può esprimere una congettura sul presente (“saranno le dieci”); il condizionale semplice esprime una congettura sul passato (“sarebbero state le dieci quando è arrivato”).", "Quel modello avrà circa cinque anni di obsolescenza programmata. / Con quel consumo, spenderebbero meno risorse di quanto pensassero.")
pool_en = [e for _, e in sharing]
l.add_mcq_vocab("Come si dice “noleggiare invece di comprare” in inglese?", "to rent instead of buying", pool_en,
                "“Noleggiare invece di comprare” si dice “to rent instead of buying” in inglese.")
l.add_mcq_vocab("Come si dice “l'obsolescenza programmata” in inglese?", "planned obsolescence", pool_en,
                "“Obsolescenza programmata” si dice “planned obsolescence” in inglese.")
l.add_fill("Quel modello ___ circa cinque anni di obsolescenza programmata.", "avrà", ["avrà", "ha", "aveva", "avrebbe"],
           "Il futuro di probabilità esprime una congettura sul presente: „avrà circa cinque anni”.")
l.add_translate("Traduci con condizionale di probabilità: “With that consumption, they would spend fewer resources than they thought.”",
                 "Con quel consumo, spenderebbero meno risorse di quanto pensassero.",
                 ["Con quel consumo, spenderanno meno risorse di quanto pensassero.", "Con quel consumo, spenderebbero più risorse di quanto pensassero.", "Con quel consumo, spenderebbero meno denaro di quanto pensassero."],
                 "Il condizionale di probabilità „spenderebbero” esprime una congettura su una situazione ipotetica.")
l.add_arrange("Ordina: [spreco / dobbiamo / lo / ridurre]", "Dobbiamo ridurre lo spreco",
              "Verbo modale + infinito + articolo + sostantivo.")
l.add_writing("Scrivi 55-75 parole sull'economia collaborativa e il consumo consapevole, usando almeno un futuro e un condizionale di probabilità.",
              ["avrà", "sarebbero", "consumo consapevole"])
lessons.append(l)

# ── C1: Il linguaggio non verbale e la comunicazione interculturale ──
l = LessonBuilder("it_c1_nonverbal_intercultural_communication", "C1", "Il linguaggio non verbale e la comunicazione interculturale", "🤝", 92,
                   "Analizza la comunicazione non verbale usando „come se” + congiuntivo.")
nonverbal = [
    ("il linguaggio del corpo", "body language"), ("il contatto visivo", "eye contact"),
    ("un gesto frainteso", "a misinterpreted gesture"), ("la prossemica (distanza personale)", "proxemics (personal space)"),
    ("un segnale culturale", "a cultural cue"), ("il silenzio imbarazzante", "awkward silence"),
]
for t, e in nonverbal:
    l.add_vocab(t, e)
l.add_grammar("„Come se” + congiuntivo (imperfetto o trapassato)", "„Come se” richiede sempre il congiuntivo, anche se il confronto si riferisce al presente, perché descrive qualcosa di ipotetico o contrario alla realtà.", "Ha agito come se capisse il gesto, anche se non lo capiva. / Ha reagito come se fosse stata offesa.")
pool_en = [e for _, e in nonverbal]
l.add_mcq_vocab("Come si dice “un gesto frainteso” in inglese?", "a misinterpreted gesture", pool_en,
                "“Un gesto frainteso” si dice “a misinterpreted gesture” in inglese.")
l.add_mcq_vocab("Come si dice “la prossemica (distanza personale)” in inglese?", "proxemics (personal space)", pool_en,
                "“Prossemica” si dice “proxemics” in inglese.")
l.add_fill("Ha agito come se ___ il gesto, anche se non lo capiva.", "capisse", ["capisse", "capiva", "capisce", "capirà"],
           "„Come se” richiede il congiuntivo imperfetto per un confronto al presente: „come se capisse”.")
l.add_translate("Traduci: “She reacted as if she had been offended.”", "Ha reagito come se fosse stata offesa.",
                 ["Ha reagito come se fosse offesa.", "Ha reagito come se fosse stata invitata.", "Ha reagito come se era stata offesa."],
                 "“As if she had been offended” si traduce con il congiuntivo trapassato: „come se fosse stata offesa”.")
l.add_arrange("Ordina: [culture / varia / tra / il contatto visivo]", "Il contatto visivo varia tra culture",
              "Soggetto + verbo + preposizione + complemento.")
l.add_writing("Scrivi 55-75 parole su un malinteso interculturale legato al linguaggio non verbale, usando almeno due strutture con „come se”.",
              ["come se", "linguaggio del corpo", "gesto"])
lessons.append(l)

# ── C2: L'incertezza e il linguaggio scientifico ───────
l = LessonBuilder("it_c2_scientific_hedging_uncertainty", "C2", "L'incertezza e il linguaggio scientifico", "🔬", 100,
                   "Analizza il linguaggio scientifico usando espressioni di attenuazione epistemica (hedging).")
hedge = [
    ("l'incertezza statistica", "statistical uncertainty"), ("un margine di errore", "a margin of error"),
    ("una correlazione non implica causalità", "correlation does not imply causation"), ("i risultati preliminari", "preliminary results"),
    ("un'ipotesi non confermata", "an unconfirmed hypothesis"), ("attenuare un'affermazione", "to hedge/qualify a claim"),
]
for t, e in hedge:
    l.add_vocab(t, e)
l.add_grammar("Espressioni di attenuazione epistemica (hedging)", "Frasi come „si potrebbe dire che”, „non è irragionevole pensare che” o „i dati suggeriscono, senza confermare, che” attenuano il grado di certezza di un'affermazione scientifica, evitando eccessive generalizzazioni.", "Si potrebbe dire che esiste una tendenza, anche se i dati sono preliminari. / I risultati suggeriscono, senza confermare, un nesso causale.")
pool_en = [e for _, e in hedge]
l.add_mcq_vocab("Come si dice “un margine di errore” in inglese?", "a margin of error", pool_en,
                "“Un margine di errore” si dice “a margin of error” in inglese.")
l.add_mcq_vocab("Come si dice “un'ipotesi non confermata” in inglese?", "an unconfirmed hypothesis", pool_en,
                "“Un'ipotesi non confermata” si dice “an unconfirmed hypothesis” in inglese.")
l.add_fill("Si ___ dire che esiste una tendenza, anche se i dati sono preliminari.", "potrebbe", ["potrebbe", "può", "deve", "va"],
           "„Si potrebbe dire che” è un'espressione fissa di attenuazione epistemica che ammorbidisce un'affermazione.")
l.add_translate("Traduci con precisione: “The results suggest, but do not confirm, a causal relationship.”",
                 "I risultati suggeriscono, senza confermare, un nesso causale.",
                 ["I risultati confermano, senza suggerire, un nesso causale.", "I risultati suggeriscono, senza confermare, una correlazione statistica.", "I risultati suggeriscono, confermando, un nesso causale."],
                 "“Suggest, but do not confirm” si traduce con „suggeriscono, senza confermare”, attenuando la certezza.")
l.add_arrange("Ordina: [implica / correlazione / non / causalità / una]", "Una correlazione non implica causalità",
              "Articolo + sostantivo + avverbio + verbo + sostantivo.")
l.add_writing("Scrivi 55-75 parole analizzando uno studio scientifico (reale o inventato) con risultati preliminari, usando almeno due espressioni di attenuazione epistemica.",
              ["si potrebbe dire che", "i dati suggeriscono", "incertezza"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out13_it.txt")
