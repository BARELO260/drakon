import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: La hora y las partes del día ───────────────────
l = LessonBuilder("a1_time_parts_of_day", "A1", "La hora y las partes del día", "🕐", 38,
                   "Aprende a decir la hora y las partes del día en inglés con “o'clock” y preposiciones de tiempo.")
time_v = [
    ("the morning", "la mañana"), ("the afternoon", "la tarde"), ("the night", "la noche"),
    ("noon", "el mediodía"), ("midnight", "la medianoche"), ("o'clock/sharp", "en punto"),
]
for t, e in time_v:
    l.add_vocab(t, e)
l.add_grammar("“What time is it?” + preposiciones de tiempo", "Para preguntar la hora se usa “What time is it?”; para responder, “it's + hora” + “o'clock” si es en punto, con “in the morning/afternoon/at night” para especificar el momento.", "It's three o'clock in the afternoon. / It's one o'clock sharp in the morning.")
pool_es = [e for _, e in time_v]
l.add_mcq_vocab("¿Cómo se dice “la medianoche” en inglés?", "midnight", pool_es,
                "“Medianoche” es “midnight” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “en punto” en inglés?", "o'clock/sharp", pool_es,
                "“En punto” es “o'clock” o “sharp” en inglés.")
l.add_fill("Completa: “It's three ___ in the afternoon.”", "o'clock", ["o'clock", "hour", "clock", "hours"],
           "“O'clock” se usa después del número para indicar la hora exacta: “three o'clock”.")
l.add_translate("Traduce: “Es la una de la mañana.”", "It's one o'clock in the morning.",
                 ["It's one o'clock in the afternoon.", "It's two o'clock in the morning.", "It's one o'clock at night."],
                 "“De la mañana” se traduce con “in the morning”, no “at night”.")
l.add_arrange("Ordena: [it's / afternoon / four / the / in / o'clock]", "it's four o'clock in the afternoon",
              "Sujeto + verbo + número + “o'clock” + preposición + parte del día.")
l.add_writing("Describe en inglés, en 20-30 palabras, tu rutina diaria mencionando horas específicas, usando “it's” y “o'clock”.",
              ["it's", "o'clock", "in the morning"])
lessons.append(l)

# ── A2: En el banco: abrir una cuenta ──────────────────
l = LessonBuilder("a2_bank_open_account", "A2", "En el banco: abrir una cuenta", "🏦", 48,
                   "Aprende vocabulario bancario básico y a usar “can” para posibilidad y permiso.")
bank = [
    ("the bank account", "la cuenta bancaria"), ("the ATM", "el cajero automático"),
    ("to withdraw money", "retirar dinero"), ("to deposit money", "depositar dinero"),
    ("the debit card", "la tarjeta de débito"), ("the balance", "el saldo"),
]
for t, e in bank:
    l.add_vocab(t, e)
l.add_grammar("“Can” + infinitivo para posibilidad y permiso", "“Can” + infinitivo sin “to” expresa capacidad, posibilidad o permiso, según el contexto.", "Can I open an account here? / You can withdraw money at any ATM.")
pool_es = [e for _, e in bank]
l.add_mcq_vocab("¿Cómo se dice “retirar dinero” en inglés?", "to withdraw money", pool_es,
                "“Retirar dinero” es “to withdraw money” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “el saldo” en inglés?", "the balance", pool_es,
                "“Saldo” es “balance” en inglés.")
l.add_fill("Completa: “___ I open an account here, please?”", "Can", ["Can", "Do", "Am", "Will"],
           "Se usa “can” para pedir permiso: “can I open”.")
l.add_translate("Traduce: “Puedes retirar dinero en cualquier cajero automático.”", "You can withdraw money at any ATM.",
                 ["You can deposit money at any ATM.", "You must withdraw money at any ATM.", "You can withdraw money at any bank."],
                 "“Puedes retirar” = “you can withdraw”, con “can” + infinitivo.")
l.add_arrange("Ordena: [check / balance / want / my / to / I]", "I want to check my balance",
              "Sujeto + verbo + infinitivo + objeto posesivo + sustantivo.")
l.add_speaking("Describe en inglés, en 40-60 palabras, cómo abrirías una cuenta bancaria, usando “can” para pedir permiso o expresar posibilidad.",
               ["I can", "you can", "account"])
lessons.append(l)

# ── B1: Viajar en tren y avión: retrasos y cambios ─────
l = LessonBuilder("b1_train_plane_travel", "B1", "Viajar en tren y avión: retrasos y cambios", "🚄", 62,
                   "Aprende vocabulario de viajes largos y a usar “although” y “even if” en inglés.")
travel_l = [
    ("the delay", "el retraso"), ("to miss the flight/train", "perder el vuelo/tren"),
    ("to make a layover/stopover", "hacer escala"), ("the platform", "el andén"),
    ("to cancel a flight", "cancelar un vuelo"), ("the window/aisle seat", "el asiento de ventanilla/pasillo"),
]
for t, e in travel_l:
    l.add_vocab(t, e)
l.add_grammar("“Although” y “even if” en inglés", "“Although” introduce un hecho real y conocido; “even if” expresa una concesión hipotética o incierta. Ambas van seguidas de presente simple en inglés, sin subjuntivo.", "Although the train arrived late, I made the flight. / Even if the flight is cancelled, we have another option.")
pool_es = [e for _, e in travel_l]
l.add_mcq_vocab("¿Cómo se dice “hacer escala” en inglés?", "to make a layover/stopover", pool_es,
                "“Hacer escala” es “to make a layover” o “stopover” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “el andén” en inglés?", "the platform", pool_es,
                "“Andén” es “platform” en inglés.")
l.add_fill("Completa: “Even if the flight ___ cancelled, we have another option.”", "is", ["is", "will be", "would be", "was"],
           "“Even if” va seguido de presente simple en inglés, incluso para una posibilidad futura: “even if it is cancelled”.")
l.add_translate("Traduce: “Aunque el tren llegó tarde, alcancé el vuelo.”", "Although the train arrived late, I made the flight.",
                 ["Although the train arrives late, I made the flight.", "Although the train arrived late, I missed the flight.", "Although the plane arrived late, I made the flight."],
                 "“Aunque llegó” describe un hecho real ya sucedido, con pasado simple: “although it arrived”.")
l.add_arrange("Ordena: [prefer / seat / window / the / I]", "I prefer the window seat",
              "Sujeto + verbo + artículo + sustantivo compuesto.")
l.add_writing("Escribe en inglés, en 45-65 palabras, sobre un viaje en tren o avión con contratiempos, usando “although” y “even if” al menos una vez cada uno.",
              ["although", "even if", "delay"])
lessons.append(l)

# ── B2: La economía colaborativa y el consumo consciente ──
l = LessonBuilder("b2_sharing_economy_conscious_consumption", "B2", "La economía colaborativa y el consumo consciente", "♻️", 84,
                   "Habla de economía colaborativa usando “will” y “would” de probabilidad en inglés.")
sharing = [
    ("the sharing economy", "la economía colaborativa"), ("to rent instead of buying", "alquilar en lugar de comprar"),
    ("conscious consumption", "el consumo consciente"), ("to share resources", "compartir recursos"),
    ("planned obsolescence", "la obsolescencia programada"), ("to reduce waste", "reducir el desperdicio"),
]
for t, e in sharing:
    l.add_vocab(t, e)
l.add_grammar("“Will” y “would” de probabilidad", "“Will” puede expresar una conjetura sobre el presente (“that will be about five years old”); “would” expresa una conjetura sobre una situación hipotética o pasada.", "That model will have about five years of planned obsolescence. / With that consumption, they would use fewer resources than expected.")
pool_es = [e for _, e in sharing]
l.add_mcq_vocab("¿Cómo se dice “alquilar en lugar de comprar” en inglés?", "to rent instead of buying", pool_es,
                "“Alquilar en lugar de comprar” es “to rent instead of buying” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “la obsolescencia programada” en inglés?", "planned obsolescence", pool_es,
                "“Obsolescencia programada” es “planned obsolescence” en inglés.")
l.add_fill("Completa: “That model ___ have about five years of planned obsolescence.”", "will", ["will", "would", "is", "has"],
           "“Will” de probabilidad expresa una conjetura sobre el presente: “will have about five years”.")
l.add_translate("Traduce con “would” de probabilidad: “Con ese consumo, gastarían menos recursos de los que pensaban.”",
                 "With that consumption, they would use fewer resources than expected.",
                 ["With that consumption, they will use fewer resources than expected.", "With that consumption, they would use more resources than expected.", "With that consumption, they would spend less money than expected."],
                 "El “would” de probabilidad expresa una conjetura sobre una situación hipotética: “they would use”.")
l.add_arrange("Ordena: [reduce / must / waste / we]", "we must reduce waste",
              "Sujeto + verbo modal + infinitivo + sustantivo.")
l.add_writing("Escribe en inglés, en 55-75 palabras, sobre la economía colaborativa y el consumo consciente, usando al menos un “will” y un “would” de probabilidad.",
              ["will have", "would", "conscious consumption"])
lessons.append(l)

# ── C1: El lenguaje no verbal y la comunicación intercultural ──
l = LessonBuilder("c1_nonverbal_intercultural_communication", "C1", "El lenguaje no verbal y la comunicación intercultural", "🤝", 92,
                   "Analiza la comunicación no verbal usando “as if” + pasado/pasado perfecto en inglés.")
nonverbal = [
    ("body language", "el lenguaje corporal"), ("eye contact", "el contacto visual"),
    ("a misinterpreted gesture", "un gesto malinterpretado"), ("proxemics (personal space)", "la proxémica (distancia personal)"),
    ("a cultural cue", "una señal cultural"), ("awkward silence", "el silencio incómodo"),
]
for t, e in nonverbal:
    l.add_vocab(t, e)
l.add_grammar("“As if” + pasado/pasado perfecto", "“As if” se usa con pasado simple para comparaciones sobre el presente, y con pasado perfecto para comparaciones sobre algo anterior, siempre describiendo algo hipotético.", "He acted as if he understood the gesture, although he didn't. / She reacted as if she had been offended.")
pool_es = [e for _, e in nonverbal]
l.add_mcq_vocab("¿Cómo se dice “un gesto malinterpretado” en inglés?", "a misinterpreted gesture", pool_es,
                "“Un gesto malinterpretado” es “a misinterpreted gesture” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “la proxémica (distancia personal)” en inglés?", "proxemics (personal space)", pool_es,
                "“Proxémica” es “proxemics” en inglés.")
l.add_fill("Completa: “He acted as if he ___ the gesture, although he didn't.”", "understood", ["understood", "understands", "has understood", "will understand"],
           "“As if” con pasado simple compara con el presente: “as if he understood”.")
l.add_translate("Traduce: “Reaccionó como si hubiera sido ofendido.”", "She reacted as if she had been offended.",
                 ["She reacted as if she was offended.", "She reacted as if she had been invited.", "She reacted as if she has been offended."],
                 "“Como si hubiera sido ofendido” se traduce con pasado perfecto: “as if she had been offended”.")
l.add_arrange("Ordena: [varies / eye contact / across / cultures]", "eye contact varies across cultures",
              "Sujeto + verbo + preposición + complemento.")
l.add_writing("Escribe en inglés, en 55-75 palabras, sobre un malentendido intercultural relacionado con el lenguaje no verbal, usando al menos dos estructuras con “as if”.",
              ["as if", "body language", "gesture"])
lessons.append(l)

# ── C2: La incertidumbre y el lenguaje científico ──────
l = LessonBuilder("c2_scientific_hedging_uncertainty", "C2", "La incertidumbre y el lenguaje científico", "🔬", 100,
                   "Analiza el lenguaje científico usando expresiones de matización epistémica (hedging) en inglés.")
hedge = [
    ("statistical uncertainty", "la incertidumbre estadística"), ("a margin of error", "un margen de error"),
    ("correlation does not imply causation", "una correlación no implica causalidad"), ("preliminary results", "los resultados preliminares"),
    ("an unconfirmed hypothesis", "una hipótesis no confirmada"), ("to hedge/qualify a claim", "matizar una afirmación"),
]
for t, e in hedge:
    l.add_vocab(t, e)
l.add_grammar("Expresiones de matización epistémica (hedging) en inglés", "Frases como “it could be argued that”, “it wouldn't be unreasonable to think that” o “the data suggest, but do not confirm, that” matizan el grado de certeza de una afirmación científica en inglés académico.", "It could be argued that a trend exists, although the data are preliminary. / The results suggest, but do not confirm, a causal relationship.")
pool_es = [e for _, e in hedge]
l.add_mcq_vocab("¿Cómo se dice “un margen de error” en inglés?", "a margin of error", pool_es,
                "“Un margen de error” es “a margin of error” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “una hipótesis no confirmada” en inglés?", "an unconfirmed hypothesis", pool_es,
                "“Una hipótesis no confirmada” es “an unconfirmed hypothesis” en inglés.")
l.add_fill("Completa: “It could be ___ that a trend exists, although the data are preliminary.”", "argued", ["argued", "arguing", "argue", "argues"],
           "“It could be argued that” es una expresión fija de matización epistémica con participio pasado.")
l.add_translate("Traduce con precisión: “Los resultados sugieren, aunque no confirman, una relación causal.”",
                 "The results suggest, but do not confirm, a causal relationship.",
                 ["The results confirm, but do not suggest, a causal relationship.", "The results suggest, but do not confirm, a statistical correlation.", "The results suggest, and confirm, a causal relationship."],
                 "“Sugieren, aunque no confirman” se traduce con “suggest, but do not confirm”, matizando la certeza.")
l.add_arrange("Ordena: [imply / correlation / causation / doesn't]", "correlation doesn't imply causation",
              "Sujeto + verbo negativo + objeto.")
l.add_writing("Escribe en inglés, en 55-75 palabras, analizando un estudio científico (real o inventado) con resultados preliminares, usando al menos dos expresiones de matización epistémica.",
              ["it could be argued that", "the data suggest", "uncertainty"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out13_en.txt")
