import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Gli animali e la natura ──────────────────────────
l = LessonBuilder("it_a1_animals_nature", "A1", "Gli animali e la natura", "🐾", 36,
                   "Impara il vocabolario degli animali comuni e della natura in italiano.")
animals = [
    ("il cane", "the dog"), ("il gatto", "the cat"), ("l'uccello", "the bird"),
    ("il cavallo", "the horse"), ("il pesce", "the fish"), ("la mucca", "the cow"),
]
for t, e in animals:
    l.add_vocab(t, e)
l.add_vocab("il bosco, la montagna, il fiume", "the forest, the mountain, the river")
l.add_grammar("Il genere degli animali", "Molti nomi di animali cambiano forma secondo il genere, ma altri sono invariabili.", "Il gatto è bianco. / La gatta è bianca. / Il pesce è piccolo (invariabile)."),
l.add_mcq_vocab("Come si dice \u201cil cavallo\u201d in inglese?", "the horse", ["the horse", "the dog", "the cat", "the bird"],
                "\u201cCavallo\u201d si dice \u201chorse\u201d in inglese.")
l.add_mcq_vocab("Come si dice \u201cl'uccello\u201d in inglese?", "the bird", ["the bird", "the fish", "the cow", "the dog"],
                "\u201cUccello\u201d si dice \u201cbird\u201d in inglese.")
l.add_fill("Mi piace fare una passeggiata nel ___ la domenica.", "bosco", ["bosco", "gatto", "pesce", "mucca"],
           "\u201cFare una passeggiata nel bosco\u201d è un'attività tipica nella natura.")
l.add_translate("Traduci: \u201cThe dog is very friendly.\u201d", "Il cane è molto simpatico.",
                 ["Il gatto è molto simpatico.", "Il cavallo è molto simpatico.", "L'uccello è molto simpatico."],
                 "\u201cThe dog\u201d = \u201cil cane\u201d; \u201cfriendly\u201d = \u201csimpatico\u201d.")
l.add_arrange("Metti in ordine: [nero / ho / gatto / un]", "Ho un gatto nero",
              "Soggetto implicito + verbo + articolo + sostantivo + aggettivo.")
l.add_writing("Scrivi in italiano 20-30 parole su un animale che ti piace e un posto nella natura che ti piace visitare.",
              ["mi piace", "il bosco", "l'animale"])
lessons.append(l)

# ── A2: Il corpo umano ──────────────────────────────────────
l = LessonBuilder("it_a2_body_parts", "A2", "Il corpo umano: le parti del corpo", "🦴", 46,
                   "Impara le parti del corpo e a descrivere dolori o caratteristiche fisiche in italiano.")
body = [
    ("la testa", "the head"), ("il braccio", "the arm"), ("la gamba", "the leg"),
    ("la mano", "the hand"), ("il piede", "the foot"), ("la schiena", "the back"),
]
for t, e in body:
    l.add_vocab(t, e)
l.add_grammar("L'articolo determinativo con le parti del corpo", "Con le parti del corpo si usa l'articolo determinativo, non il possessivo, quando è chiaro di chi si parla.", "Mi fa male la testa. (non \u201cMi fa male la mia testa\u201d)"),
l.add_mcq_vocab("Come si dice \u201cla schiena\u201d in inglese?", "the back", ["the back", "the hand", "the head", "the leg"],
                "\u201cSchiena\u201d si dice \u201cback\u201d in inglese.")
l.add_mcq_vocab("Come si dice \u201cil piede\u201d in inglese?", "the foot", ["the foot", "the arm", "the hand", "the head"],
                "\u201cPiede\u201d si dice \u201cfoot\u201d in inglese.")
l.add_fill("Mi fa molto male la ___ dopo aver corso.", "schiena", ["schiena", "mano", "testa", "gamba"],
           "Correre causa spesso mal di schiena se non ci si scalda bene.")
l.add_translate("Traduci: \u201cMy hand hurts.\u201d", "Mi fa male la mano.",
                 ["Mi fa male il braccio.", "Mi fa male la gamba.", "Mi fa male il piede."],
                 "\u201cMy hand hurts\u201d = \u201cMi fa male la mano\u201d, con l'articolo determinativo.")
l.add_arrange("Metti in ordine: [gamba / fa / la / mi / male]", "Mi fa male la gamba",
              "\u201cMi fa male\u201d + articolo + parte del corpo.")
l.add_speaking("Descrivi in italiano, in 40-60 parole, un dolore che hai avuto: quale parte del corpo ti faceva male e cosa hai fatto.",
               ["mi faceva male", "la gamba", "sono andato/a dal medico"])
lessons.append(l)

# ── B1: Lo sport e l'attività fisica ────────────────────
l = LessonBuilder("it_b1_sports_fitness", "B1", "Lo sport e l'attività fisica", "🏃", 60,
                   "Parla di sport, routine di esercizio e abitudini di attività fisica in italiano.")
sports = [
    ("il calcio", "soccer/football"), ("il nuoto", "swimming"), ("il tennis", "tennis"),
    ("correre", "to run"), ("sollevare pesi", "to lift weights"), ("fare yoga", "to do yoga"),
]
for t, e in sports:
    l.add_vocab(t, e)
l.add_grammar("\u201cSolitamente\u201d + presente per le abitudini", "\u201cSolitamente\u201d con il presente esprime un'azione abituale.", "Corro solitamente tre volte a settimana."),
l.add_mcq_vocab("Come si dice \u201csollevare pesi\u201d in inglese?", "to lift weights", ["to lift weights", "to run", "to do yoga", "swimming"],
                "\u201cSollevare pesi\u201d si dice \u201cto lift weights\u201d.")
l.add_mcq_vocab("Come si dice \u201cil nuoto\u201d in inglese?", "swimming", ["swimming", "tennis", "soccer/football", "to run"],
                "\u201cNuoto\u201d si dice \u201cswimming\u201d.")
l.add_fill("___ solitamente tre volte a settimana per rimanere in forma.", "Corro", ["Corro", "Tennis", "Calcio", "Nuoto"],
           "\u201cSolitamente\u201d + presente (\u201ccorro\u201d) descrive un'abitudine.")
l.add_translate("Traduci: \u201cI usually do yoga on Sundays.\u201d", "Faccio solitamente yoga la domenica.",
                 ["Faccio solitamente yoga il sabato.", "Gioco solitamente a tennis la domenica.", "Sollevo solitamente pesi la domenica."],
                 "\u201cI usually do yoga\u201d = \u201cFaccio solitamente yoga\u201d; \u201con Sundays\u201d = \u201cla domenica\u201d.")
l.add_arrange("Metti in ordine: [forma / rimanere / in / per / corro]", "Corro per rimanere in forma",
              "Soggetto + verbo + \u201cper\u201d + infinito + complemento.")
l.add_writing("Scrivi in italiano 45-65 parole sul tuo rapporto con lo sport: quale attività pratichi, con che frequenza e perché ti piace (o no).",
              ["solitamente", "rimanere in forma", "pratico"])
lessons.append(l)

# ── B2: La casa intelligente ────────────────────────────────
l = LessonBuilder("it_b2_smart_home_tech", "B2", "La casa intelligente: domotica e dispositivi", "💡", 82,
                   "Parla di dispositivi intelligenti e domotica, con opinioni sfumate in italiano.")
tech = [
    ("un altoparlante intelligente", "a smart speaker"), ("un termostato programmabile", "a programmable thermostat"),
    ("una telecamera di sicurezza", "a security camera"), ("controllare con la voce", "to control by voice"),
    ("automatizzare le faccende domestiche", "to automate household tasks"), ("un rischio per la privacy", "a privacy risk"),
]
for t, e in tech:
    l.add_vocab(t, e)
l.add_grammar("Il futuro semplice per le previsioni tecnologiche", "Il futuro semplice descrive previsioni ragionevoli su come si evolverà la tecnologia.", "Tra qualche anno, più case avranno dispositivi connessi."),
l.add_mcq_vocab("Come si dice \u201cun rischio per la privacy\u201d in inglese?", "a privacy risk", ["a privacy risk", "a smart speaker", "a security camera", "a thermostat"],
                "\u201cRischio per la privacy\u201d si dice \u201cprivacy risk\u201d.")
l.add_mcq_vocab("Come si dice \u201cautomatizzare le faccende domestiche\u201d in inglese?", "to automate household tasks", ["to automate household tasks", "to control by voice", "a smart speaker", "a privacy risk"],
                "\u201cAutomatizzare le faccende domestiche\u201d si dice \u201cto automate household tasks\u201d.")
l.add_fill("Un termostato programmabile può ___ energia se è configurato bene.", "risparmiare", ["risparmiare", "sprecare", "perdere", "rompere"],
           "Un termostato ben configurato aiuta a risparmiare energia, non a sprecarla.")
l.add_translate("Traduci: \u201cGli altoparlanti intelligenti si possono controllare con la voce.\u201d", "Smart speakers can be controlled by voice.",
                 ["Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Thermostats can be controlled by text."],
                 "\u201cControllare con la voce\u201d = \u201ccontrolled by voice\u201d.")
l.add_arrange("Metti in ordine: [privacy / può / rischio / rappresentare / un / per la]", "Può rappresentare un rischio per la privacy",
              "Verbo + \u201crappresentare\u201d + oggetto: \u201cPuò rappresentare un rischio per la privacy.\u201d")
l.add_writing("Scrivi in italiano 55-75 parole su un dispositivo intelligente che useresti (o usi già) in casa: quale vantaggio ti offre e quale rischio per la privacy potrebbe avere.",
              ["automatizzare", "rischio per la privacy", "con la voce"])
lessons.append(l)

# ── C1: Il mondo del lavoro: riunioni e corrispondenza ──────────
l = LessonBuilder("it_c1_workplace_communication", "C1", "Il mondo del lavoro: riunioni e corrispondenza", "🤝", 90,
                   "Padroneggia il vocabolario e le formule tipiche di riunioni ed email professionali in italiano.")
work = [
    ("convocare una riunione", "to call a meeting"), ("allegare un documento", "to attach a document"),
    ("restiamo in attesa di un suo riscontro", "we look forward to your response"),
    ("riprendere un punto in sospeso", "to follow up on a pending item"),
    ("raggiungere un accordo", "to reach an agreement"), ("rinviare una riunione", "to postpone a meeting"),
]
for t, e in work:
    l.add_vocab(t, e)
l.add_grammar("Formule di cortesia nelle email formali", "Formule fisse come \u201cRestiamo in attesa di un suo riscontro\u201d danno una chiusura professionale senza suonare brusche.", "In allegato trova la relazione richiesta. Restiamo in attesa di un suo riscontro."),
l.add_mcq_vocab("Come si dice \u201craggiungere un accordo\u201d in inglese?", "to reach an agreement", ["to reach an agreement", "to postpone a meeting", "to call a meeting", "to attach a document"],
                "\u201cRaggiungere un accordo\u201d si dice \u201cto reach an agreement\u201d.")
l.add_mcq_vocab("Come si dice \u201crinviare una riunione\u201d in inglese?", "to postpone a meeting", ["to postpone a meeting", "to call a meeting", "to reach an agreement", "to attach a document"],
                "\u201cRinviare una riunione\u201d si dice \u201cto postpone a meeting\u201d.")
l.add_fill("Prima di chiudere la riunione, vorrei ___ un punto in sospeso della settimana scorsa.", "riprendere",
           ["riprendere", "allegare", "rinviare", "convocare"],
           "\u201cRiprendere un punto in sospeso\u201d significa tornare a trattarlo.")
l.add_translate("Traduci: \u201cHo allegato la relazione richiesta.\u201d", "I'm attaching the requested report.",
                 ["I'm attaching the requested email.", "I'm calling the requested report.", "I'm postponing the requested report."],
                 "\u201cHo allegato\u201d = \u201cI'm attaching\u201d; \u201cla relazione richiesta\u201d = \u201cthe requested report\u201d.")
l.add_arrange("Metti in ordine: [riscontro / attesa / restiamo / suo / di / un / in]", "Restiamo in attesa di un suo riscontro",
              "Formula fissa di chiusura di un'email professionale.")
l.add_writing("Scrivi in italiano una breve email professionale (55-75 parole) convocando una riunione, menzionando un punto in sospeso e chiudendo con una formula di cortesia formale.",
              ["convoco", "punto in sospeso", "restiamo in attesa"])
lessons.append(l)

# ── C2: Registro e stile: sinonimi secondo il contesto ─────────
l = LessonBuilder("it_c2_register_synonyms", "C2", "Registro e stile: sinonimi secondo il contesto", "🔤", 98,
                   "Scegli il sinonimo adeguato secondo il registro (formale, neutro, colloquiale) in italiano.")
syn = [
    ("ottenere (formale) / prendere (neutro)", "to obtain / to get"),
    ("decedere (formale) / morire (neutro) / tirare le cuoia (colloquiale)", "to pass away / to die / to kick the bucket"),
    ("richiedere (formale) / chiedere (neutro)", "to request / to ask for"),
    ("risiedere (formale) / vivere / abitare (neutro)", "to reside / to live"),
    ("tuttavia (formale) / ma (neutro)", "however / but"),
]
for t, e in syn:
    l.add_vocab(t, e)
l.add_grammar("Scegliere il registro secondo il contesto comunicativo", "La stessa idea può esprimersi con parole molto diverse a seconda del contesto formale, neutro o colloquiale; usare la parola sbagliata rompe la coerenza del testo.", "In un rapporto: \u201cL'informazione è stata ottenuta.\u201d Tra amici: \u201cL'ho presa.\u201d"),
l.exercises.append(("mcq", "In un rapporto ufficiale, quale parola è più appropriata per \u201cottenere informazioni\u201d?",
                     ["Ottenere", "Beccare", "Rimediare", "Pescare"], 0,
                     "\u201cOttenere\u201d è il registro formale appropriato per un rapporto ufficiale."))
l.exercises.append(("mcq", "In una conversazione informale tra amici, quale verbo suona più naturale per \u201cmorire\u201d?",
                     ["Tirare le cuoia", "Decedere", "Perire", "Spirare"], 0,
                     "\u201cTirare le cuoia\u201d è colloquiale e si adatterebbe a una conversazione informale; gli altri sono troppo formali o tecnici."))
l.add_fill("In una lettera formale si dice \u201c___, proseguiamo con il progetto\u201d, non \u201cma\u201d.", "tuttavia",
           ["tuttavia", "ma", "comunque", "però"],
           "\u201cTuttavia\u201d è il connettivo formale equivalente a \u201cma\u201d.")
l.add_translate("Traduci con il registro formale corretto: \u201cWe reside in Madrid.\u201d", "Risediamo a Madrid.",
                 ["Viviamo a Madrid.", "Stiamo a Madrid.", "Siamo di Madrid."],
                 "\u201cReside\u201d in un registro formale si traduce come \u201crisiedere\u201d, non il neutro \u201cvivere\u201d.")
l.add_arrange("Metti in ordine (registro formale): [stata / richiesta / è / l'informazione]", "L'informazione è stata richiesta",
              "Costruzione passiva, tipica del registro formale/amministrativo.")
l.add_writing("Scrivi in italiano lo stesso messaggio breve (\u201cho bisogno che tu mi invii il file\u201d) in due registri diversi: uno formale (per un capo) e uno colloquiale (per un amico), in 55-75 parole in totale.",
              ["formale", "colloquiale", "richiedo"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out_it.txt")
