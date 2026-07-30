import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Animals and nature ──────────────────────────
l = LessonBuilder("a1_animals_nature", "A1", "Los animales y la naturaleza", "🐾", 36,
                   "Aprende el vocabulario de animales comunes y la naturaleza en inglés.")
animals = [
    ("the dog", "el perro"), ("the cat", "el gato"), ("the bird", "el pájaro"),
    ("the horse", "el caballo"), ("the fish", "el pez"), ("the cow", "la vaca"),
]
for t, e in animals:
    l.add_vocab(t, e)
l.add_vocab("the forest, the mountain, the river", "el bosque, la montaña, el río")
l.add_grammar("Plural de sustantivos de animales", "La mayoría añade \u201c-s\u201d en plural, pero algunos son irregulares.", "one fish, two fish (invariable) / one horse, two horses (regular)")
pool_es = [e for _, e in animals]
l.add_mcq_vocab("¿Cómo se dice \u201cel caballo\u201d en inglés?", "the horse", ["the horse", "the dog", "the cat", "the bird"],
                "\u201cCaballo\u201d es \u201chorse\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201cel pájaro\u201d en inglés?", "the bird", ["the bird", "the fish", "the cow", "the dog"],
                "\u201cPájaro\u201d es \u201cbird\u201d en inglés.")
l.add_fill("I like walking in the ___ on Sundays.", "forest", ["forest", "cat", "fish", "cow"],
           "\u201cWalking in the forest\u201d es una actividad típica en la naturaleza.")
l.add_translate("Traduce: \u201cEl perro es muy simpático.\u201d", "The dog is very friendly.",
                 ["The cat is very friendly.", "The horse is very friendly.", "The bird is very friendly."],
                 "\u201cEl perro\u201d = \u201cthe dog\u201d; \u201csimpático\u201d = \u201cfriendly\u201d.")
l.add_arrange("Ordena: [black / have / cat / I / a]", "I have a black cat",
              "Sujeto + verbo + artículo + adjetivo + sustantivo.")
l.add_writing("Escribe en inglés 20-30 palabras sobre un animal que te guste y un lugar de la naturaleza que te guste visitar.",
              ["I like", "the forest", "animal"])
lessons.append(l)

# ── A2: The human body ──────────────────────────────────────
l = LessonBuilder("a2_body_parts", "A2", "El cuerpo humano: partes del cuerpo", "🦴", 46,
                   "Aprende las partes del cuerpo y a describir dolores o características físicas en inglés.")
body = [
    ("the head", "la cabeza"), ("the arm", "el brazo"), ("the leg", "la pierna"),
    ("the hand", "la mano"), ("the foot", "el pie"), ("the back", "la espalda"),
]
for t, e in body:
    l.add_vocab(t, e)
l.add_grammar("\u201cMy\u201d + parte del cuerpo + \u201churts\u201d", "En inglés se usa el posesivo (\u201cmy\u201d), no el artículo, con partes del cuerpo.", "My back hurts. (no \u201cThe back hurts me\u201d)")
l.add_mcq_vocab("¿Cómo se dice \u201cla espalda\u201d en inglés?", "the back", ["the back", "the hand", "the head", "the leg"],
                "\u201cEspalda\u201d es \u201cback\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201cel pie\u201d en inglés?", "the foot", ["the foot", "the arm", "the hand", "the head"],
                "\u201cPie\u201d es \u201cfoot\u201d en inglés.")
l.add_fill("My ___ hurts a lot after running.", "back", ["back", "hand", "head", "leg"],
           "Correr suele causar dolor de espalda si no se calienta bien.")
l.add_translate("Traduce: \u201cMe duele la mano.\u201d", "My hand hurts.",
                 ["My arm hurts.", "My leg hurts.", "My foot hurts."],
                 "\u201cMe duele la mano\u201d = \u201cMy hand hurts\u201d, con el posesivo \u201cmy\u201d.")
l.add_arrange("Ordena: [leg / hurts / my]", "My leg hurts",
              "\u201cMy\u201d + parte del cuerpo + \u201churts\u201d.")
l.add_speaking("Describe en inglés, en 40-60 palabras, un dolor que hayas tenido: qué parte del cuerpo te dolía y qué hiciste.",
               ["hurt", "my leg", "I went to the doctor"])
lessons.append(l)

# ── B1: Sports and physical activity ────────────────────
l = LessonBuilder("b1_sports_fitness", "B1", "Los deportes y la actividad física", "🏃", 60,
                   "Habla sobre deportes, rutinas de ejercicio y hábitos de actividad física en inglés.")
sports = [
    ("soccer/football", "el fútbol"), ("swimming", "la natación"), ("tennis", "el tenis"),
    ("to run", "correr"), ("to lift weights", "levantar pesas"), ("to do yoga", "hacer yoga"),
]
for t, e in sports:
    l.add_vocab(t, e)
l.add_grammar("\u201cUsually\u201d + presente simple para hábitos", "\u201cUsually\u201d con el presente simple expresa una acción habitual.", "I usually run three times a week.")
l.add_mcq_vocab("¿Cómo se dice \u201clevantar pesas\u201d en inglés?", "to lift weights", ["to lift weights", "to run", "to do yoga", "swimming"],
                "\u201cLevantar pesas\u201d es \u201cto lift weights\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cla natación\u201d en inglés?", "swimming", ["swimming", "tennis", "soccer/football", "to run"],
                "\u201cNatación\u201d es \u201cswimming\u201d.")
l.add_fill("I usually ___ three times a week to stay fit.", "run", ["run", "tennis", "soccer", "swimming"],
           "\u201cUsually\u201d + presente simple (\u201crun\u201d) describe un hábito.")
l.add_translate("Traduce: \u201cSuelo hacer yoga los domingos.\u201d", "I usually do yoga on Sundays.",
                 ["I usually do yoga on Saturdays.", "I usually play tennis on Sundays.", "I usually lift weights on Sundays."],
                 "\u201cSuelo hacer yoga\u201d = \u201cI usually do yoga\u201d; \u201clos domingos\u201d = \u201con Sundays\u201d.")
l.add_arrange("Ordena: [fit / stay / to / I / run]", "I run to stay fit",
              "Sujeto + verbo + \u201cto\u201d + infinitivo + complemento.")
l.add_writing("Escribe en inglés 45-65 palabras sobre tu relación con el deporte: qué actividad practicas, con qué frecuencia y por qué te gusta (o no).",
              ["I usually", "stay fit", "I practice"])
lessons.append(l)

# ── B2: Smart home technology ────────────────────────────────
l = LessonBuilder("b2_smart_home_tech", "B2", "La casa inteligente: domótica y dispositivos", "💡", 82,
                   "Habla sobre dispositivos inteligentes y domótica, con opiniones matizadas en inglés.")
tech = [
    ("a smart speaker", "un altavoz inteligente"), ("a programmable thermostat", "un termostato programable"),
    ("a security camera", "una cámara de seguridad"), ("to control by voice", "controlar por voz"),
    ("to automate household tasks", "automatizar tareas del hogar"), ("a privacy risk", "un riesgo de privacidad"),
]
for t, e in tech:
    l.add_vocab(t, e)
l.add_grammar("El futuro simple para predicciones tecnológicas", "\u201cWill\u201d describe predicciones razonables sobre cómo evolucionará la tecnología.", "In a few years, more homes will have connected devices.")
l.add_mcq_vocab("¿Cómo se dice \u201cun riesgo de privacidad\u201d en inglés?", "a privacy risk", ["a privacy risk", "a smart speaker", "a security camera", "a thermostat"],
                "\u201cRiesgo de privacidad\u201d es \u201cprivacy risk\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cautomatizar tareas del hogar\u201d en inglés?", "to automate household tasks", ["to automate household tasks", "to control by voice", "a smart speaker", "a privacy risk"],
                "\u201cAutomatizar tareas del hogar\u201d es \u201cto automate household tasks\u201d.")
l.add_fill("A programmable thermostat can ___ energy if it's set up well.", "save", ["save", "waste", "lose", "break"],
           "Un termostato bien configurado ayuda a ahorrar energía, no a gastarla.")
l.add_translate("Traduce: \u201cLos altavoces inteligentes se pueden controlar por voz.\u201d", "Smart speakers can be controlled by voice.",
                 ["Smart speakers can be controlled by text.", "Security cameras can be controlled by voice.", "Thermostats can be controlled by text."],
                 "\u201cControlar por voz\u201d = \u201ccontrolled by voice\u201d.")
l.add_arrange("Ordena: [pose / can / risk / it / a privacy]", "It can pose a privacy risk",
              "Sujeto + \u201ccan\u201d + \u201cpose\u201d + objeto: \u201cIt can pose a privacy risk.\u201d")
l.add_writing("Escribe en inglés 55-75 palabras sobre un dispositivo inteligente que usarías (o ya usas) en casa: qué ventaja te ofrece y qué riesgo de privacidad podría tener.",
              ["automate", "privacy risk", "by voice"])
lessons.append(l)

# ── C1: Workplace communication ──────────────────────────
l = LessonBuilder("c1_workplace_communication", "C1", "El mundo laboral: reuniones y correspondencia", "🤝", 90,
                   "Domina el vocabulario y las fórmulas típicas de reuniones y correos profesionales en inglés.")
work = [
    ("to call a meeting", "convocar una reunión"), ("to attach a document", "adjuntar un documento"),
    ("we look forward to your response", "quedamos a la espera de su respuesta"),
    ("to follow up on a pending item", "retomar un punto pendiente"),
    ("to reach an agreement", "llegar a un acuerdo"), ("to postpone a meeting", "posponer una reunión"),
]
for t, e in work:
    l.add_vocab(t, e)
l.add_grammar("Fórmulas de cortesía en correos formales", "Frases fijas como \u201cWe look forward to your response\u201d dan un cierre profesional sin sonar brusco.", "Please find the requested report attached. We look forward to your response.")
l.add_mcq_vocab("¿Cómo se dice \u201cllegar a un acuerdo\u201d en inglés?", "to reach an agreement", ["to reach an agreement", "to postpone a meeting", "to call a meeting", "to attach a document"],
                "\u201cLlegar a un acuerdo\u201d es \u201cto reach an agreement\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cposponer una reunión\u201d en inglés?", "to postpone a meeting", ["to postpone a meeting", "to call a meeting", "to reach an agreement", "to attach a document"],
                "\u201cPosponer una reunión\u201d es \u201cto postpone a meeting\u201d.")
l.add_fill("Before we close the meeting, I'd like to ___ on a pending item from last week.", "follow up",
           ["follow up", "attach", "postpone", "call"],
           "\u201cTo follow up on a pending item\u201d significa volver a tratarlo.")
l.add_translate("Traduce: \u201cAdjunto el informe solicitado.\u201d", "I'm attaching the requested report.",
                 ["I'm attaching the requested email.", "I'm calling the requested report.", "I'm postponing the requested report."],
                 "\u201cAdjunto\u201d = \u201cI'm attaching\u201d; \u201cel informe solicitado\u201d = \u201cthe requested report\u201d.")
l.add_arrange("Ordena: [response / your / to / we / look forward]", "We look forward to your response",
              "Fórmula fija de cierre de correo profesional.")
l.add_writing("Escribe en inglés un correo profesional breve (55-75 palabras) convocando una reunión, mencionando un punto pendiente y cerrando con una fórmula de cortesía formal.",
              ["I'm calling", "pending item", "we look forward to"])
lessons.append(l)

# ── C2: Register and style: synonyms by context ─────────
l = LessonBuilder("c2_register_synonyms", "C2", "Registro y estilo: sinónimos según el contexto", "🔤", 98,
                   "Elige el sinónimo adecuado según el registro (formal, neutro, coloquial) en inglés.")
syn = [
    ("to obtain (formal) / to get (neutral)", "obtener (formal) / conseguir (neutro)"),
    ("to pass away (formal) / to die (neutral) / to kick the bucket (coloquial)", "fallecer / morir / palmarla"),
    ("to request (formal) / to ask for (neutral)", "solicitar / pedir"),
    ("to reside (formal) / to live (neutral)", "residir / vivir"),
    ("however (formal) / but (neutral)", "no obstante / pero"),
]
for t, e in syn:
    l.add_vocab(t, e)
l.add_grammar("Elegir registro según el contexto comunicativo", "La misma idea puede expresarse con palabras muy distintas según se trate de un contexto formal, neutro o coloquial; usar la palabra equivocada rompe la coherencia del texto.", "In a report: \u201cInformation was obtained.\u201d In casual speech: \u201cI got it.\u201d")
l.exercises.append(("mcq", "En un informe oficial, ¿qué palabra es más apropiada para \u201cobtener información\u201d?",
                     ["Obtain", "Grab", "Snag", "Score"], 0,
                     "\u201cObtain\u201d es el registro formal apropiado para un informe oficial."))
l.exercises.append(("mcq", "En una conversación informal entre amigos, ¿qué expresión suena más natural para \u201cmorir\u201d?",
                     ["Kick the bucket", "Pass away", "Perish", "Expire"], 0,
                     "\u201cKick the bucket\u201d es coloquial y encajaría en una conversación informal; los otros son demasiado formales o técnicos."))
l.add_fill("In a formal letter you say \u201c___, we are moving forward with the project\u201d, not \u201cbut\u201d.", "however",
           ["however", "but", "still", "yet"],
           "\u201cHowever\u201d es el conector formal equivalente a \u201cpero\u201d.")
l.add_translate("Traduce con el registro formal correcto: \u201cResidimos en Madrid.\u201d", "We reside in Madrid.",
                 ["We live in Madrid.", "We stay in Madrid.", "We are from Madrid."],
                 "\u201cResidimos\u201d en un registro formal se traduce como \u201creside\u201d, no el neutro \u201clive\u201d.")
l.add_arrange("Ordena (registro formal): [was / requested / information / the]", "The information was requested",
              "Construcción pasiva, típica del registro formal/administrativo.")
l.add_writing("Escribe en inglés el mismo mensaje breve (\u201cI need you to send me the file\u201d) en dos registros distintos: uno formal (para un jefe) y uno coloquial (para un amigo), en 55-75 palabras en total.",
              ["formal", "informal", "I request"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out_en.txt")
