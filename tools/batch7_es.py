import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: La ropa y los colores ──────────────────────────
l = LessonBuilder("es_a1_clothing_colors", "A1", "La ropa y los colores", "👕", 37,
                   "Aprende el vocabulario de las prendas de ropa y cómo combinarlas con colores en español.")
clothes = [
    ("la camisa", "the shirt"), ("el pantalón", "the pants/trousers"), ("los zapatos", "the shoes"),
    ("el vestido", "the dress"), ("la chaqueta", "the jacket"), ("la falda", "the skirt"),
]
for t, e in clothes:
    l.add_vocab(t, e)
l.add_vocab("rojo, azul, verde, negro, blanco", "red, blue, green, black, white")
l.add_grammar("Concordancia de género y número con adjetivos de color", "Los colores concuerdan en género y número con el sustantivo que describen.", "la camisa roja / los zapatos negros / el vestido verde")
pool_en = [e for _, e in clothes]
l.add_mcq_vocab("¿Cómo se dice \u201cla chaqueta\u201d en inglés?", "the jacket", pool_en,
                "\u201cChaqueta\u201d es \u201cjacket\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201clos zapatos\u201d en inglés?", "the shoes", pool_en,
                "\u201cZapatos\u201d es \u201cshoes\u201d en inglés.")
l.add_fill("Llevo una camisa ___ y un pantalón negro.", "azul", ["azul", "azules", "azulado", "azulados"],
           "\u201cCamisa\u201d es femenino singular, así que el color concuerda: \u201cazul\u201d (invariable en género, singular).")
l.add_translate("Traduce: \u201cI'm wearing a red dress.\u201d", "Llevo un vestido rojo.",
                 ["Llevo una falda roja.", "Llevo una camisa roja.", "Llevo unos zapatos rojos."],
                 "\u201cI'm wearing\u201d = \u201cLlevo\u201d; \u201ca red dress\u201d = \u201cun vestido rojo\u201d.")
l.add_arrange("Ordena: [negros / zapatos / tengo / unos]", "Tengo unos zapatos negros",
              "Sujeto implícito + verbo + artículo + sustantivo + adjetivo (concordando en plural).")
l.add_writing("Describe en 20-30 palabras la ropa que llevas hoy, mencionando al menos tres prendas y sus colores.",
              ["llevo", "de color", "y"])
lessons.append(l)

# ── A2: Frutas y verduras ──────────────────────────────
l = LessonBuilder("es_a2_fruits_vegetables", "A2", "Frutas y verduras", "🥦", 47,
                   "Aprende el vocabulario de frutas y verduras y a hablar de una alimentación saludable en español.")
food = [
    ("la manzana", "the apple"), ("el plátano", "the banana"), ("la zanahoria", "the carrot"),
    ("el tomate", "the tomato"), ("la lechuga", "the lettuce"), ("la naranja", "the orange"),
]
for t, e in food:
    l.add_vocab(t, e)
l.add_grammar("Cuantificadores: mucho/a, poco/a, algo de", "Estos cuantificadores concuerdan en género con el sustantivo y sirven para hablar de cantidades de forma aproximada.", "Como mucha fruta y poca carne.")
pool_en = [e for _, e in food]
l.add_mcq_vocab("¿Cómo se dice \u201cla zanahoria\u201d en inglés?", "the carrot", pool_en,
                "\u201cZanahoria\u201d es \u201ccarrot\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201cel plátano\u201d en inglés?", "the banana", pool_en,
                "\u201cPlátano\u201d es \u201cbanana\u201d en inglés.")
l.add_fill("Como ___ fruta todos los días para estar sano.", "mucha", ["mucha", "mucho", "muchos", "muy"],
           "\u201cFruta\u201d es femenino singular, así que el cuantificador concuerda: \u201cmucha fruta\u201d.")
l.add_translate("Traduce: \u201cI eat little meat and a lot of vegetables.\u201d", "Como poca carne y muchas verduras.",
                 ["Como poca carne y pocas verduras.", "Como mucha carne y muchas verduras.", "Como poca fruta y muchas verduras."],
                 "\u201cLittle meat\u201d = \u201cpoca carne\u201d; \u201ca lot of vegetables\u201d = \u201cmuchas verduras\u201d.")
l.add_arrange("Ordena: [tomate / ensalada / lleva / la / lechuga / y]", "La ensalada lleva tomate y lechuga",
              "Sujeto + verbo + objeto (dos sustantivos unidos por \u201cy\u201d).")
l.add_speaking("Describe en 40-60 palabras tu dieta habitual: qué frutas y verduras comes normalmente y con qué frecuencia.",
               ["como", "a menudo", "verduras"])
lessons.append(l)

# ── B1: La cocina: verbos y recetas simples ────────────
l = LessonBuilder("es_b1_cooking_recipes", "B1", "La cocina: verbos y recetas simples", "🍳", 61,
                   "Aprende verbos de cocina y a explicar los pasos de una receta sencilla en español.")
cooking = [
    ("cortar, pelar", "to cut, to peel"), ("hervir, freír", "to boil, to fry"),
    ("mezclar los ingredientes", "to mix the ingredients"), ("añadir sal al gusto", "to add salt to taste"),
    ("dejar reposar la masa", "to let the dough rest"), ("precalentar el horno", "to preheat the oven"),
]
for t, e in cooking:
    l.add_vocab(t, e)
l.add_grammar("El imperativo para dar instrucciones de receta", "Las recetas usan el imperativo (formal \u201custed\u201d o infinitivo) para dar instrucciones paso a paso.", "Corte las verduras, hierva el agua y añada sal al gusto.")
l.add_mcq_vocab("¿Cómo se dice \u201cmezclar los ingredientes\u201d en inglés?", "to mix the ingredients",
                ["to mix the ingredients", "to cut, to peel", "to boil, to fry", "to preheat the oven"],
                "\u201cMezclar los ingredientes\u201d es \u201cto mix the ingredients\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cprecalentar el horno\u201d en inglés?", "to preheat the oven",
                ["to preheat the oven", "to let the dough rest", "to add salt to taste", "to cut, to peel"],
                "\u201cPrecalentar el horno\u201d es \u201cto preheat the oven\u201d.")
l.add_fill("Antes de hornear, hay que ___ el horno a 180 grados.", "precalentar", ["precalentar", "hervir", "freír", "mezclar"],
           "\u201cPrecalentar el horno\u201d es el paso previo típico antes de hornear.")
l.add_translate("Traduce: \u201cLet the dough rest for ten minutes.\u201d", "Deje reposar la masa durante diez minutos.",
                 ["Deje hervir la masa durante diez minutos.", "Deje freír la masa durante diez minutos.", "Deje cortar la masa durante diez minutos."],
                 "\u201cLet the dough rest\u201d = \u201cDeje reposar la masa\u201d, con imperativo formal.")
l.add_arrange("Ordena: [gusto / al / añada / sal]", "Añada sal al gusto",
              "Imperativo + objeto + expresión fija \u201cal gusto\u201d.")
l.add_writing("Escribe 45-65 palabras explicando los pasos de una receta sencilla que sepas hacer, usando al menos tres verbos de cocina en imperativo.",
              ["corte", "añada", "deje reposar"])
lessons.append(l)

# ── B2: El mundo del arte ──────────────────────────────
l = LessonBuilder("es_b2_art_world", "B2", "El mundo del arte: pintura, música y cine", "🎨", 83,
                   "Habla sobre arte, música y cine, expresando opiniones y valoraciones matizadas en español.")
art = [
    ("una obra maestra", "a masterpiece"), ("la puesta en escena", "the staging/mise-en-scène"),
    ("una interpretación conmovedora", "a moving performance"), ("el estilo de un artista", "an artist's style"),
    ("dejar una impresión duradera", "to leave a lasting impression"), ("estar sobrevalorado/infravalorado", "to be overrated/underrated"),
]
for t, e in art:
    l.add_vocab(t, e)
l.add_grammar("Verbos de opinión + subjuntivo/indicativo según certeza", "\u201cMe parece que\u201d + indicativo expresa una opinión con cierta seguridad; \u201cno creo que\u201d + subjuntivo expresa duda.", "Me parece que esta película es una obra maestra. / No creo que esté sobrevalorada.")
l.add_mcq_vocab("¿Cómo se dice \u201cuna interpretación conmovedora\u201d en inglés?", "a moving performance",
                ["a moving performance", "a masterpiece", "an artist's style", "a lasting impression"],
                "\u201cUna interpretación conmovedora\u201d es \u201ca moving performance\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cestar sobrevalorado\u201d en inglés?", "to be overrated",
                ["to be overrated", "to be underrated", "to leave an impression", "an artist's style"],
                "\u201cEstar sobrevalorado\u201d es \u201cto be overrated\u201d.")
l.add_fill("No creo que esta película ___ tan buena como dicen.", "sea", ["sea", "es", "será", "fue"],
           "\u201cNo creo que\u201d exige subjuntivo: \u201cque sea\u201d.")
l.add_translate("Traduce: \u201cThis performance left a lasting impression on me.\u201d", "Esta interpretación me dejó una impresión duradera.",
                 ["Esta interpretación me dejó una obra maestra.", "Este estilo me dejó una impresión duradera.", "Esta puesta en escena me dejó sobrevalorada."],
                 "\u201cLeft a lasting impression\u201d = \u201cdejó una impresión duradera\u201d.")
l.add_arrange("Ordena: [maestra / obra / esta / es / una]", "Esta es una obra maestra",
              "Sujeto + \u201ces\u201d + artículo + sustantivo + adjetivo.")
l.add_writing("Escribe 55-75 palabras dando tu opinión sobre una obra de arte, película o canción (real o inventada): qué te pareció y por qué, usando al menos una estructura con subjuntivo de opinión.",
              ["me parece que", "no creo que", "una impresión"])
lessons.append(l)

# ── C1: La crítica constructiva: dar y recibir feedback ────
l = LessonBuilder("es_c1_giving_feedback", "C1", "La crítica constructiva: dar y recibir feedback", "🗨️", 91,
                   "Aprende a dar y recibir retroalimentación de forma constructiva y profesional en español.")
feedback = [
    ("señalar un punto de mejora", "to point out an area for improvement"),
    ("reconocer los aciertos antes de las críticas", "to acknowledge strengths before criticism"),
    ("formular la crítica en términos concretos", "to phrase criticism in concrete terms"),
    ("estar abierto/a a la retroalimentación", "to be open to feedback"),
    ("tomarse la crítica de forma personal", "to take criticism personally"),
    ("proponer una solución, no solo señalar el problema", "to propose a solution, not just point out the problem"),
]
for t, e in feedback:
    l.add_vocab(t, e)
l.add_grammar("Mitigadores para suavizar una crítica", "Expresiones como \u201cquizás podrías considerar\u201d o \u201cuna sugerencia sería\u201d suavizan una crítica sin perder claridad.", "Quizás podrías considerar estructurar el informe de otra manera; una sugerencia sería empezar con las conclusiones.")
l.add_mcq_vocab("¿Cómo se dice \u201cformular la crítica en términos concretos\u201d en inglés?", "to phrase criticism in concrete terms",
                ["to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback", "to take criticism personally"],
                "\u201cFormular la crítica en términos concretos\u201d es \u201cto phrase criticism in concrete terms\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201ctomarse la crítica de forma personal\u201d en inglés?", "to take criticism personally",
                ["to take criticism personally", "to acknowledge strengths", "to propose a solution", "to be open to feedback"],
                "\u201cTomarse la crítica de forma personal\u201d es \u201cto take criticism personally\u201d.")
l.add_fill("Antes de dar la crítica, es buena idea ___ los aciertos del trabajo.", "reconocer", ["reconocer", "ignorar", "ocultar", "criticar"],
           "\u201cReconocer los aciertos antes de las críticas\u201d hace que el feedback sea mejor recibido.")
l.add_translate("Traduce: \u201cA suggestion would be to start with the conclusions.\u201d", "Una sugerencia sería empezar con las conclusiones.",
                 ["Una sugerencia sería terminar con las conclusiones.", "Una crítica sería empezar con las conclusiones.", "Un problema sería empezar con las conclusiones."],
                 "\u201cA suggestion would be to\u201d = \u201cUna sugerencia sería\u201d.")
l.add_arrange("Ordena: [problema / propón / solo / no / solución / señales / una]", "No solo señales el problema, propón una solución",
              "Estructura de contraste: \u201cno solo... [verbo]\u201d + \u201c[verbo]... una solución\u201d.")
l.add_writing("Escribe 55-75 palabras dando feedback constructivo sobre un trabajo (real o inventado): reconoce un acierto, señala un punto de mejora concreto y propón una solución.",
              ["reconozco que", "quizás podrías", "una sugerencia sería"])
lessons.append(l)

# ── C2: El lenguaje inclusivo y la evolución del idioma ─────
l = LessonBuilder("es_c2_inclusive_language", "C2", "El lenguaje inclusivo y la evolución del idioma", "🌐", 99,
                   "Analiza el debate sobre el lenguaje inclusivo y cómo evolucionan las lenguas con la sociedad.")
lang_change = [
    ("el lenguaje inclusivo", "inclusive language"), ("una lengua viva evoluciona con el uso", "a living language evolves with use"),
    ("prescriptivismo frente a descriptivismo", "prescriptivism versus descriptivism"),
    ("un neologismo se incorpora al diccionario", "a neologism is added to the dictionary"),
    ("generar resistencia frente a un cambio lingüístico", "to generate resistance to a linguistic change"),
    ("un argumento no implica necesariamente una postura política", "an argument doesn't necessarily imply a political stance"),
]
for t, e in lang_change:
    l.add_vocab(t, e)
l.add_grammar("Presentar un debate lingüístico sin sesgo", "Un análisis riguroso separa la descripción del fenómeno (cómo cambia la lengua) de la valoración personal (si el cambio debería adoptarse o no).", "Desde el descriptivismo, el cambio se documenta sin juzgarlo; desde el prescriptivismo, se evalúa si conviene normalizarlo.")
l.add_mcq_vocab("¿Cómo se dice \u201cprescriptivismo frente a descriptivismo\u201d en inglés?", "prescriptivism versus descriptivism",
                ["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],
                "\u201cPrescriptivismo frente a descriptivismo\u201d es \u201cprescriptivism versus descriptivism\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cun neologismo se incorpora al diccionario\u201d en inglés?", "a neologism is added to the dictionary",
                ["a neologism is added to the dictionary", "a living language evolves with use", "to generate resistance", "inclusive language"],
                "\u201cUn neologismo se incorpora al diccionario\u201d es \u201ca neologism is added to the dictionary\u201d.")
l.add_fill("El descriptivismo se centra en documentar cómo habla la gente, no en dictar cómo ___ hablar.", "debería",
           ["debería", "puede", "quiere", "suele"],
           "El descriptivismo describe el uso real, sin dictar normas sobre cómo \u201cdebería\u201d hablarse.")
l.add_translate("Traduce con precisión: \u201cA living language evolves with use, whether we like it or not.\u201d",
                 "Una lengua viva evoluciona con el uso, nos guste o no.",
                 ["Una lengua viva evoluciona con el uso, aunque no cambie.", "Una lengua muerta evoluciona con el uso, nos guste o no.", "Una lengua viva evoluciona sin uso, nos guste o no."],
                 "\u201cWhether we like it or not\u201d se traduce idiomáticamente como \u201cnos guste o no\u201d.")
l.add_arrange("Ordena: [necesariamente / postura / implica / no / una / política / un argumento]",
              "Un argumento no implica necesariamente una postura política",
              "Sujeto + negación + \u201cimplica necesariamente\u201d + objeto.")
l.add_writing("Escribe 55-75 palabras presentando de forma equilibrada dos posturas sobre un cambio lingüístico actual (real o inventado), sin tomar partido explícitamente, distinguiendo descripción de valoración.",
              ["por un lado", "por otro", "sin necesariamente"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out7_es.txt")
