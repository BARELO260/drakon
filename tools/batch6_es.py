import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Los animales y la naturaleza ──────────────────────────
l = LessonBuilder("es_a1_animals_nature", "A1", "Los animales y la naturaleza", "🐾", 36,
                   "Aprende el vocabulario de animales comunes y la naturaleza en español.")
animals = [
    ("el perro", "the dog"), ("el gato", "the cat"), ("el pájaro", "the bird"),
    ("el caballo", "the horse"), ("el pez", "the fish"), ("la vaca", "the cow"),
]
for t, e in animals:
    l.add_vocab(t, e)
l.add_vocab("el bosque, la montaña, el río", "the forest, the mountain, the river")
l.add_grammar("Género de los animales", "Muchos nombres de animales cambian de forma según el género (el gato/la gata), pero otros son invariables.", "El gato es blanco. / La gata es blanca. / El pez es pequeño (invariable).")
pool_en = [e for _, e in animals]
l.add_mcq_vocab("¿Cómo se dice \u201cel caballo\u201d en inglés?", "the horse", pool_en,
                "\u201cCaballo\u201d es \u201chorse\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201cel pájaro\u201d en inglés?", "the bird", pool_en,
                "\u201cPájaro\u201d es \u201cbird\u201d en inglés.")
l.add_fill("Me gusta pasear por el ___ los domingos.", "bosque", ["bosque", "gato", "pez", "vaca"],
           "\u201cPasear por el bosque\u201d es una actividad típica en la naturaleza.")
l.add_translate("Traduce: \u201cThe dog is very friendly.\u201d", "El perro es muy simpático.",
                 ["El gato es muy simpático.", "El caballo es muy simpático.", "El pájaro es muy simpático."],
                 "\u201cThe dog\u201d = \u201cel perro\u201d; \u201cfriendly\u201d = \u201csimpático\u201d.")
l.add_arrange("Ordena: [gato / negro / tengo / un]", "Tengo un gato negro",
              "Sujeto implícito + verbo + artículo + sustantivo + adjetivo.")
l.add_writing("Escribe 20-30 palabras sobre un animal que te guste y un lugar de la naturaleza que te guste visitar.",
              ["me gusta", "el bosque", "el animal"])
lessons.append(l)

# ── A2: El cuerpo humano ──────────────────────────────────────
l = LessonBuilder("es_a2_body_parts", "A2", "El cuerpo humano: partes del cuerpo", "🦴", 46,
                   "Aprende las partes del cuerpo y a describir dolores o características físicas.")
body = [
    ("la cabeza", "the head"), ("el brazo", "the arm"), ("la pierna", "the leg"),
    ("la mano", "the hand"), ("el pie", "the foot"), ("la espalda", "the back"),
]
for t, e in body:
    l.add_vocab(t, e)
l.add_grammar("Artículos con partes del cuerpo", "Con partes del cuerpo se usa el artículo definido, no el posesivo, cuando está claro de quién se habla.", "Me duele la cabeza. (no \u201cMe duele mi cabeza\u201d)")
pool_en = [e for _, e in body]
l.add_mcq_vocab("¿Cómo se dice \u201cla espalda\u201d en inglés?", "the back", pool_en,
                "\u201cEspalda\u201d es \u201cback\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201cel pie\u201d en inglés?", "the foot", pool_en,
                "\u201cPie\u201d es \u201cfoot\u201d en inglés.")
l.add_fill("Me duele mucho la ___ después de correr.", "espalda", ["espalda", "mano", "cabeza", "pierna"],
           "Correr suele causar dolor de espalda si no se calienta bien.")
l.add_translate("Traduce: \u201cMy hand hurts.\u201d", "Me duele la mano.",
                 ["Me duele el brazo.", "Me duele la pierna.", "Me duele el pie."],
                 "\u201cMy hand hurts\u201d = \u201cMe duele la mano\u201d, con artículo definido.")
l.add_arrange("Ordena: [pierna / duele / la / me]", "Me duele la pierna",
              "\u201cMe duele\u201d + artículo + parte del cuerpo.")
l.add_speaking("Describe en 40-60 palabras un dolor que hayas tenido: qué parte del cuerpo te dolía y qué hiciste.",
               ["me dolía", "la pierna", "fui al médico"])
lessons.append(l)

# ── B1: Los deportes y la actividad física ────────────────────
l = LessonBuilder("es_b1_sports_fitness", "B1", "Los deportes y la actividad física", "🏃", 60,
                   "Habla sobre deportes, rutinas de ejercicio y hábitos de actividad física en español.")
sports = [
    ("el fútbol", "soccer/football"), ("la natación", "swimming"), ("el tenis", "tennis"),
    ("correr", "to run"), ("levantar pesas", "to lift weights"), ("hacer yoga", "to do yoga"),
]
for t, e in sports:
    l.add_vocab(t, e)
l.add_grammar("\u201cSoler\u201d + infinitivo para hábitos", "\u201cSoler\u201d expresa una acción habitual, algo que se hace normalmente.", "Suelo correr tres veces por semana.")
pool_en = [e for _, e in sports]
l.add_mcq_vocab("¿Cómo se dice \u201clevantar pesas\u201d en inglés?", "to lift weights", pool_en,
                "\u201cLevantar pesas\u201d es \u201cto lift weights\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cla natación\u201d en inglés?", "swimming", pool_en,
                "\u201cNatación\u201d es \u201cswimming\u201d.")
l.add_fill("Suelo ___ tres veces por semana para mantenerme en forma.", "correr", ["correr", "el tenis", "el fútbol", "la natación"],
           "\u201cSoler\u201d + infinitivo (\u201ccorrer\u201d) describe un hábito.")
l.add_translate("Traduce: \u201cI usually do yoga on Sundays.\u201d", "Suelo hacer yoga los domingos.",
                 ["Suelo hacer yoga los sábados.", "Suelo jugar al tenis los domingos.", "Suelo levantar pesas los domingos."],
                 "\u201cI usually do yoga\u201d = \u201cSuelo hacer yoga\u201d; \u201con Sundays\u201d = \u201clos domingos\u201d.")
l.add_arrange("Ordena: [forma / mantenerme / en / para / corro]", "Corro para mantenerme en forma",
              "Verbo + \u201cpara\u201d + infinitivo + complemento.")
l.add_writing("Escribe 45-65 palabras sobre tu relación con el deporte: qué actividad practicas, con qué frecuencia y por qué te gusta (o no).",
              ["suelo", "me mantengo en forma", "practico"])
lessons.append(l)

# ── B2: La casa inteligente ────────────────────────────────────
l = LessonBuilder("es_b2_smart_home_tech", "B2", "La casa inteligente: domótica y dispositivos", "💡", 82,
                   "Habla sobre dispositivos inteligentes y domótica, con opiniones matizadas en español.")
tech = [
    ("un altavoz inteligente", "a smart speaker"), ("un termostato programable", "a programmable thermostat"),
    ("una cámara de seguridad", "a security camera"), ("controlar por voz", "to control by voice"),
    ("automatizar tareas del hogar", "to automate household tasks"), ("un riesgo de privacidad", "a privacy risk"),
]
for t, e in tech:
    l.add_vocab(t, e)
l.add_grammar("El futuro para predicciones tecnológicas", "El futuro simple describe predicciones razonables sobre cómo evolucionará la tecnología.", "En unos años, más hogares tendrán dispositivos conectados.")
pool_en = [e for _, e in tech]
l.add_mcq_vocab("¿Cómo se dice \u201cun riesgo de privacidad\u201d en inglés?", "a privacy risk", pool_en,
                "\u201cRiesgo de privacidad\u201d es \u201cprivacy risk\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cautomatizar tareas del hogar\u201d en inglés?", "to automate household tasks", pool_en,
                "\u201cAutomatizar tareas del hogar\u201d es \u201cto automate household tasks\u201d.")
l.add_fill("Un termostato programable puede ___ energía si se configura bien.", "ahorrar", ["ahorrar", "gastar", "perder", "romper"],
           "Un termostato bien configurado ayuda a ahorrar energía, no a gastarla."),
l.add_translate("Traduce: \u201cSmart speakers can be controlled by voice.\u201d", "Los altavoces inteligentes se pueden controlar por voz.",
                 ["Los altavoces inteligentes se pueden controlar por texto.", "Las cámaras de seguridad se pueden controlar por voz.", "Los termostatos se pueden controlar por texto."],
                 "\u201cControlled by voice\u201d = \u201ccontrolar por voz\u201d.")
l.add_arrange("Ordena: [privacidad / puede / un / suponer / riesgo / de]", "Puede suponer un riesgo de privacidad",
              "Verbo + \u201csuponer\u201d + objeto: \u201cPuede suponer un riesgo de privacidad.\u201d")
l.add_writing("Escribe 55-75 palabras sobre un dispositivo inteligente que usarías (o ya usas) en casa: qué ventaja te ofrece y qué riesgo de privacidad podría tener.",
              ["automatizar", "riesgo de privacidad", "por voz"])
lessons.append(l)

# ── C1: El mundo laboral: reuniones y correspondencia ──────────
l = LessonBuilder("es_c1_workplace_communication", "C1", "El mundo laboral: reuniones y correspondencia", "🤝", 90,
                   "Domina el vocabulario y las fórmulas típicas de reuniones y correos profesionales en español.")
work = [
    ("convocar una reunión", "to call a meeting"), ("adjuntar un documento", "to attach a document"),
    ("quedamos a la espera de su respuesta", "we look forward to your response"),
    ("retomar un punto pendiente", "to follow up on a pending item"),
    ("llegar a un acuerdo", "to reach an agreement"), ("posponer una reunión", "to postpone a meeting"),
]
for t, e in work:
    l.add_vocab(t, e)
l.add_grammar("Fórmulas de cortesía en correos formales", "Las fórmulas fijas como \u201cQuedamos a la espera de su respuesta\u201d dan un cierre profesional sin sonar brusco.", "Adjunto el informe solicitado. Quedamos a la espera de su respuesta."),
pool_en = [e for _, e in work]
l.add_mcq_vocab("¿Cómo se dice \u201cllegar a un acuerdo\u201d en inglés?", "to reach an agreement", pool_en,
                "\u201cLlegar a un acuerdo\u201d es \u201cto reach an agreement\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cposponer una reunión\u201d en inglés?", "to postpone a meeting", pool_en,
                "\u201cPosponer una reunión\u201d es \u201cto postpone a meeting\u201d.")
l.add_fill("Antes de cerrar la reunión, me gustaría ___ un punto pendiente de la semana pasada.", "retomar",
           ["retomar", "adjuntar", "posponer", "convocar"],
           "\u201cRetomar un punto pendiente\u201d significa volver a tratarlo.")
l.add_translate("Traduce: \u201cI'm attaching the requested report.\u201d", "Adjunto el informe solicitado.",
                 ["Adjunto el correo solicitado.", "Convoco el informe solicitado.", "Pospongo el informe solicitado."],
                 "\u201cI'm attaching\u201d = \u201cAdjunto\u201d; \u201cthe requested report\u201d = \u201cel informe solicitado\u201d.")
l.add_arrange("Ordena: [respuesta / la / espera / quedamos / de / a / su]", "Quedamos a la espera de su respuesta",
              "Fórmula fija de cierre de correo profesional.")
l.add_writing("Escribe un correo profesional breve (55-75 palabras) convocando una reunión, mencionando un punto pendiente y cerrando con una fórmula de cortesía formal.",
              ["convoco", "punto pendiente", "quedamos a la espera"])
lessons.append(l)

# ── C2: Registro y estilo: sinónimos según el contexto ─────────
l = LessonBuilder("es_c2_register_synonyms", "C2", "Registro y estilo: sinónimos según el contexto", "🔤", 98,
                   "Elige el sinónimo adecuado según el registro (formal, neutro, coloquial) en español.")
syn = [
    ("obtener (formal) / conseguir (neutro) / pillar (coloquial)", "to get / to obtain"),
    ("fallecer (formal) / morir (neutro) / palmarla (coloquial)", "to pass away / to die"),
    ("solicitar (formal) / pedir (neutro) / pedir prestado, informal para objetos", "to request / to ask for"),
    ("residir (formal) / vivir (neutro)", "to reside / to live"),
    ("no obstante (formal) / pero (neutro) / aun así (coloquial)", "however / but"),
]
for t, e in syn:
    l.add_vocab(t, e)
l.add_grammar("Elegir registro según el contexto comunicativo", "La misma idea puede expresarse con palabras muy distintas según se trate de un contexto formal, neutro o coloquial; usar la palabra equivocada rompe la coherencia del texto.", "En un informe: \u201cSe solicita revisión.\u201d En una charla informal: \u201c¿Me pasas eso?\u201d")
ex_options_registro = ["formal", "neutro", "coloquial", "técnico"]
l.exercises.append(("mcq", "En un informe oficial, ¿qué palabra es más apropiada para \u201cobtener información\u201d?",
                     ["Obtener", "Pillar", "Coger", "Agarrar"], 0,
                     "\u201cObtener\u201d es el registro formal apropiado para un informe oficial."))
l.exercises.append(("mcq", "En una conversación informal entre amigos, ¿qué verbo suena más natural para \u201cmorir\u201d?",
                     ["Palmarla", "Fallecer", "Perecer", "Expirar"], 0,
                     "\u201cPalmarla\u201d es coloquial y encajaría en una conversación informal; los otros son demasiado formales o técnicos."))
l.add_fill("En una carta formal se dice \u201cno ___, seguimos adelante con el proyecto\u201d, no \u201cpero\u201d.", "obstante",
           ["obstante", "pero", "aun así", "sino"],
           "\u201cNo obstante\u201d es el conector formal equivalente a \u201cpero\u201d.")
l.add_translate("Traduce con el registro formal correcto: \u201cWe reside in Madrid.\u201d", "Residimos en Madrid.",
                 ["Vivimos en Madrid.", "Estamos en Madrid.", "Somos de Madrid."],
                 "\u201cReside\u201d en un registro formal se traduce como \u201cresidir\u201d, no como el neutro \u201cvivir\u201d.")
l.add_arrange("Ordena (registro formal): [solicita / revisión / se / del / documento]", "Se solicita revisión del documento",
              "Construcción pasiva refleja + objeto, típica del registro formal/administrativo.")
l.add_writing("Escribe el mismo mensaje breve (\u201cnecesito que me envíes el archivo\u201d) en dos registros distintos: uno formal (para un jefe) y uno coloquial (para un amigo), en 55-75 palabras en total.",
              ["formal", "coloquial", "solicito"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out_es.txt")
