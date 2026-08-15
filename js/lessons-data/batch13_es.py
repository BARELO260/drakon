import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: La hora y las partes del día ───────────────────
l = LessonBuilder("es_a1_time_parts_of_day", "A1", "La hora y las partes del día", "🕐", 38,
                   "Aprende a decir la hora y las partes del día con preposiciones de tiempo.")
time_v = [
    ("la mañana", "the morning"), ("la tarde", "the afternoon"), ("la noche", "the night"),
    ("el mediodía", "noon"), ("la medianoche", "midnight"), ("en punto", "o'clock/sharp"),
]
for t, e in time_v:
    l.add_vocab(t, e)
l.add_grammar("“¿Qué hora es?” + preposiciones de tiempo", "Para preguntar la hora se usa “¿Qué hora es?”; para responder, “es la una” (singular) o “son las + número” (plural), con “de la mañana/tarde/noche” para especificar el momento del día.", "Son las tres de la tarde. / Es la una en punto de la madrugada.")
pool_en = [e for _, e in time_v]
l.add_mcq_vocab("¿Cómo se dice “la medianoche” en inglés?", "midnight", pool_en,
                "“Medianoche” es “midnight” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “en punto” en inglés?", "o'clock/sharp", pool_en,
                "“En punto” es “o'clock” o “sharp” en inglés.")
l.add_fill("___ las tres de la tarde.", "Son", ["Son", "Es", "Está", "Hay"],
           "Se usa “son” con números plurales: “son las tres”.")
l.add_translate("Traduce: “It's one o'clock in the morning.”", "Es la una de la mañana.",
                 ["Son la una de la mañana.", "Es las una de la mañana.", "Es la una de la tarde."],
                 "Con “la una” (singular) se usa “es”, no “son”.")
l.add_arrange("Ordena: [tarde / de / cuatro / son / la / las]", "Son las cuatro de la tarde",
              "Verbo + artículo + número + preposición + parte del día.")
l.add_writing("Describe en 20-30 palabras tu rutina diaria mencionando horas específicas, usando “son las” y “de la mañana/tarde/noche”.",
              ["son las", "de la mañana", "de la tarde"])
lessons.append(l)

# ── A2: En el banco: abrir una cuenta ──────────────────
l = LessonBuilder("es_a2_bank_open_account", "A2", "En el banco: abrir una cuenta", "🏦", 48,
                   "Aprende vocabulario bancario básico y a usar “poder” para posibilidad y permiso.")
bank = [
    ("la cuenta bancaria", "the bank account"), ("el cajero automático", "the ATM"),
    ("retirar dinero", "to withdraw money"), ("depositar dinero", "to deposit money"),
    ("la tarjeta de débito", "the debit card"), ("el saldo", "the balance"),
]
for t, e in bank:
    l.add_vocab(t, e)
l.add_grammar("“Poder” + infinitivo para posibilidad y permiso", "“Poder” + infinitivo expresa capacidad, posibilidad o permiso, según el contexto.", "¿Puedo abrir una cuenta aquí? / Puedes retirar dinero en cualquier cajero automático.")
pool_en = [e for _, e in bank]
l.add_mcq_vocab("¿Cómo se dice “retirar dinero” en inglés?", "to withdraw money", pool_en,
                "“Retirar dinero” es “to withdraw money” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “el saldo” en inglés?", "the balance", pool_en,
                "“Saldo” es “balance” en inglés.")
l.add_fill("¿___ abrir una cuenta aquí, por favor?", "Puedo", ["Puedo", "Puedes", "Puede", "Podemos"],
           "Se usa “puedo” en primera persona para pedir permiso: “¿puedo abrir?”.")
l.add_translate("Traduce: “You can withdraw money at any ATM.”", "Puedes retirar dinero en cualquier cajero automático.",
                 ["Puedes depositar dinero en cualquier cajero automático.", "Puede retirar dinero en cualquier cajero automático.", "Puedes retirar dinero en cualquier banco."],
                 "“You can withdraw” = “puedes retirar”, con “poder” + infinitivo.")
l.add_arrange("Ordena: [saldo / consultar / mi / quiero]", "Quiero consultar mi saldo",
              "Verbo + infinitivo + objeto posesivo + sustantivo.")
l.add_speaking("Describe en 40-60 palabras cómo abrirías una cuenta bancaria, usando “poder” para pedir permiso o expresar posibilidad.",
               ["puedo", "puedes", "cuenta"])
lessons.append(l)

# ── B1: Viajar en tren y avión: retrasos y cambios ─────
l = LessonBuilder("es_b1_train_plane_travel", "B1", "Viajar en tren y avión: retrasos y cambios", "🚄", 62,
                   "Aprende vocabulario de viajes largos y a usar “aunque” con indicativo o subjuntivo.")
travel_l = [
    ("el retraso", "the delay"), ("perder el vuelo/tren", "to miss the flight/train"),
    ("hacer escala", "to make a layover/stopover"), ("el andén", "the platform"),
    ("cancelar un vuelo", "to cancel a flight"), ("el asiento de ventanilla/pasillo", "the window/aisle seat"),
]
for t, e in travel_l:
    l.add_vocab(t, e)
l.add_grammar("“Aunque” + indicativo o subjuntivo", "“Aunque” + indicativo expresa un hecho conocido o real (concesión real); “aunque” + subjuntivo expresa una posibilidad hipotética o incierta (concesión hipotética).", "Aunque el tren llegó tarde, alcancé el vuelo. (hecho real) / Aunque el vuelo se cancele, tenemos otra opción. (posibilidad incierta)")
pool_en = [e for _, e in travel_l]
l.add_mcq_vocab("¿Cómo se dice “hacer escala” en inglés?", "to make a layover/stopover", pool_en,
                "“Hacer escala” es “to make a layover” o “stopover” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “el andén” en inglés?", "the platform", pool_en,
                "“Andén” es “platform” en inglés.")
l.add_fill("Aunque el vuelo se ___, tenemos otra opción de viaje.", "cancele", ["cancele", "cancela", "canceló", "cancelará"],
           "“Aunque” + subjuntivo expresa una posibilidad incierta: “aunque se cancele”.")
l.add_translate("Traduce: “Although the train arrived late, I made the flight.”", "Aunque el tren llegó tarde, alcancé el vuelo.",
                 ["Aunque el tren llegara tarde, alcancé el vuelo.", "Aunque el tren llegó tarde, perdí el vuelo.", "Aunque el avión llegó tarde, alcancé el vuelo."],
                 "“Although it arrived” describe un hecho real ya sucedido, por eso se usa indicativo: “aunque llegó”.")
l.add_arrange("Ordena: [ventanilla / prefiero / de / el asiento]", "Prefiero el asiento de ventanilla",
              "Verbo + artículo + sustantivo + preposición + complemento.")
l.add_writing("Escribe 45-65 palabras sobre un viaje en tren o avión con contratiempos, usando “aunque” con indicativo y con subjuntivo al menos una vez cada uno.",
              ["aunque", "retraso", "escala"])
lessons.append(l)

# ── B2: La economía colaborativa y el consumo consciente ──
l = LessonBuilder("es_b2_sharing_economy_conscious_consumption", "B2", "La economía colaborativa y el consumo consciente", "♻️", 84,
                   "Habla de economía colaborativa usando el futuro y el condicional de probabilidad.")
sharing = [
    ("la economía colaborativa", "the sharing economy"), ("alquilar en lugar de comprar", "to rent instead of buying"),
    ("el consumo consciente", "conscious consumption"), ("compartir recursos", "to share resources"),
    ("la obsolescencia programada", "planned obsolescence"), ("reducir el desperdicio", "to reduce waste"),
]
for t, e in sharing:
    l.add_vocab(t, e)
l.add_grammar("Futuro y condicional de probabilidad", "El futuro simple puede expresar una conjetura sobre el presente (“serán las diez”); el condicional simple expresa una conjetura sobre el pasado (“serían las diez cuando llegó”).", "Ese modelo tendrá unos cinco años de obsolescencia programada. / Con ese consumo, gastarían menos recursos de los que pensaban.")
pool_en = [e for _, e in sharing]
l.add_mcq_vocab("¿Cómo se dice “alquilar en lugar de comprar” en inglés?", "to rent instead of buying", pool_en,
                "“Alquilar en lugar de comprar” es “to rent instead of buying” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “la obsolescencia programada” en inglés?", "planned obsolescence", pool_en,
                "“Obsolescencia programada” es “planned obsolescence” en inglés.")
l.add_fill("Ese modelo ___ unos cinco años de obsolescencia programada.", "tendrá", ["tendrá", "tiene", "tuvo", "tendría"],
           "El futuro de probabilidad expresa una conjetura sobre el presente: “tendrá unos cinco años”.")
l.add_translate("Traduce con condicional de probabilidad: “With that consumption, they would spend fewer resources than they thought.”",
                 "Con ese consumo, gastarían menos recursos de los que pensaban.",
                 ["Con ese consumo, gastarán menos recursos de los que pensaban.", "Con ese consumo, gastarían más recursos de los que pensaban.", "Con ese consumo, gastarían menos dinero de los que pensaban."],
                 "El condicional de probabilidad “gastarían” expresa una conjetura sobre una situación pasada o hipotética.")
l.add_arrange("Ordena: [desperdicio / debemos / el / reducir]", "Debemos reducir el desperdicio",
              "Verbo modal + infinitivo + artículo + sustantivo.")
l.add_writing("Escribe 55-75 palabras sobre la economía colaborativa y el consumo consciente, usando al menos un futuro y un condicional de probabilidad.",
              ["tendrá", "serían", "consumo consciente"])
lessons.append(l)

# ── C1: El lenguaje no verbal y la comunicación intercultural ──
l = LessonBuilder("es_c1_nonverbal_intercultural_communication", "C1", "El lenguaje no verbal y la comunicación intercultural", "🤝", 92,
                   "Analiza la comunicación no verbal usando “como si” + subjuntivo.")
nonverbal = [
    ("el lenguaje corporal", "body language"), ("el contacto visual", "eye contact"),
    ("un gesto malinterpretado", "a misinterpreted gesture"), ("la proxémica (distancia personal)", "proxemics (personal space)"),
    ("una señal cultural", "a cultural cue"), ("el silencio incómodo", "awkward silence"),
]
for t, e in nonverbal:
    l.add_vocab(t, e)
l.add_grammar("“Como si” + subjuntivo (imperfecto o pluscuamperfecto)", "“Como si” siempre exige subjuntivo, aunque la comparación se refiera al presente, porque describe algo hipotético o contrario a la realidad.", "Actuó como si entendiera el gesto, aunque no lo entendía. / Reaccionó como si hubiera sido ofendido.")
pool_en = [e for _, e in nonverbal]
l.add_mcq_vocab("¿Cómo se dice “un gesto malinterpretado” en inglés?", "a misinterpreted gesture", pool_en,
                "“Un gesto malinterpretado” es “a misinterpreted gesture” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “la proxémica (distancia personal)” en inglés?", "proxemics (personal space)", pool_en,
                "“Proxémica” es “proxemics” en inglés.")
l.add_fill("Actuó como si ___ el gesto, aunque no lo entendía.", "entendiera", ["entendiera", "entendía", "entiende", "entenderá"],
           "“Como si” exige subjuntivo imperfecto para comparaciones sobre el presente: “como si entendiera”.")
l.add_translate("Traduce: “He reacted as if he had been offended.”", "Reaccionó como si hubiera sido ofendido.",
                 ["Reaccionó como si fue ofendido.", "Reaccionó como si hubiera sido invitado.", "Reaccionó como si había sido ofendido."],
                 "“As if he had been offended” se traduce con subjuntivo pluscuamperfecto: “como si hubiera sido ofendido”.")
l.add_arrange("Ordena: [culturas / varía / entre / el contacto visual]", "El contacto visual varía entre culturas",
              "Sujeto + verbo + preposición + complemento.")
l.add_writing("Escribe 55-75 palabras sobre un malentendido intercultural relacionado con el lenguaje no verbal, usando al menos dos estructuras con “como si” + subjuntivo.",
              ["como si", "lenguaje corporal", "gesto"])
lessons.append(l)

# ── C2: La incertidumbre y el lenguaje científico ──────
l = LessonBuilder("es_c2_scientific_hedging_uncertainty", "C2", "La incertidumbre y el lenguaje científico", "🔬", 100,
                   "Analiza el lenguaje científico usando expresiones de matización epistémica (hedging).")
hedge = [
    ("la incertidumbre estadística", "statistical uncertainty"), ("un margen de error", "a margin of error"),
    ("una correlación no implica causalidad", "correlation does not imply causation"), ("los resultados preliminares", "preliminary results"),
    ("una hipótesis no confirmada", "an unconfirmed hypothesis"), ("matizar una afirmación", "to hedge/qualify a claim"),
]
for t, e in hedge:
    l.add_vocab(t, e)
l.add_grammar("Expresiones de matización epistémica (hedging)", "Frases como “podría decirse que”, “no es descabellado pensar que” o “los datos sugieren, aunque no confirman, que” matizan el grado de certeza de una afirmación científica, evitando sobregeneralizar.", "Podría decirse que existe una tendencia, aunque los datos son preliminares. / Los resultados sugieren, aunque no confirman, una relación causal.")
pool_en = [e for _, e in hedge]
l.add_mcq_vocab("¿Cómo se dice “un margen de error” en inglés?", "a margin of error", pool_en,
                "“Un margen de error” es “a margin of error” en inglés.")
l.add_mcq_vocab("¿Cómo se dice “una hipótesis no confirmada” en inglés?", "an unconfirmed hypothesis", pool_en,
                "“Una hipótesis no confirmada” es “an unconfirmed hypothesis” en inglés.")
l.add_fill("___ decirse que existe una tendencia, aunque los datos son preliminares.", "Podría", ["Podría", "Puede", "Debe", "Es"],
           "“Podría decirse que” es una expresión fija de matización epistémica que suaviza una afirmación.")
l.add_translate("Traduce con precisión: “The results suggest, but do not confirm, a causal relationship.”",
                 "Los resultados sugieren, aunque no confirman, una relación causal.",
                 ["Los resultados confirman, aunque no sugieren, una relación causal.", "Los resultados sugieren, aunque no confirman, una correlación estadística.", "Los resultados sugieren, aunque confirman, una relación causal."],
                 "“Suggest, but do not confirm” se traduce con “sugieren, aunque no confirman”, matizando la certeza.")
l.add_arrange("Ordena: [implica / correlación / no / causalidad / una]", "Una correlación no implica causalidad",
              "Artículo + sustantivo + adverbio + verbo + sustantivo.")
l.add_writing("Escribe 55-75 palabras analizando un estudio científico (real o inventado) con resultados preliminares, usando al menos dos expresiones de matización epistémica.",
              ["podría decirse que", "los datos sugieren", "incertidumbre"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out13_es.txt")
