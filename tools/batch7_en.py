import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: La ropa y los colores ──────────────────────────
l = LessonBuilder("a1_clothing_colors", "A1", "La ropa y los colores", "👕", 37,
                   "Aprende el vocabulario de las prendas de ropa y cómo combinarlas con colores en inglés.")
clothes = [
    ("the shirt", "la camisa"), ("the pants/trousers", "el pantalón"), ("the shoes", "los zapatos"),
    ("the dress", "el vestido"), ("the jacket", "la chaqueta"), ("the skirt", "la falda"),
]
for t, e in clothes:
    l.add_vocab(t, e)
l.add_vocab("red, blue, green, black, white", "rojo, azul, verde, negro, blanco")
l.add_grammar("Adjetivos de color antes del sustantivo", "En inglés, el adjetivo de color va siempre antes del sustantivo y no cambia de forma.", "a red dress / black shoes / a green shirt")
l.add_mcq_vocab("¿Cómo se dice \u201cla chaqueta\u201d en inglés?", "the jacket", ["the jacket", "the shirt", "the pants/trousers", "the skirt"],
                "\u201cChaqueta\u201d es \u201cjacket\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201clos zapatos\u201d en inglés?", "the shoes", ["the shoes", "the dress", "the shirt", "the skirt"],
                "\u201cZapatos\u201d es \u201cshoes\u201d en inglés.")
l.add_fill("I'm wearing a ___ shirt and black pants.", "blue", ["blue", "blues", "bluely", "blueish"],
           "En inglés el adjetivo de color no cambia de forma: \u201ca blue shirt\u201d.")
l.add_translate("Traduce: \u201cLlevo un vestido rojo.\u201d", "I'm wearing a red dress.",
                 ["I'm wearing a red skirt.", "I'm wearing a red shirt.", "I'm wearing red shoes."],
                 "\u201cLlevo\u201d = \u201cI'm wearing\u201d; \u201cun vestido rojo\u201d = \u201ca red dress\u201d.")
l.add_arrange("Ordena: [black / have / I / shoes]", "I have black shoes",
              "Sujeto + verbo + adjetivo + sustantivo (sin artículo en plural genérico)."),
l.add_writing("Describe en inglés, en 20-30 palabras, la ropa que llevas hoy, mencionando al menos tres prendas y sus colores.",
              ["I'm wearing", "color", "and"])
lessons.append(l)

# ── A2: Fruits and vegetables ──────────────────────────────
l = LessonBuilder("a2_fruits_vegetables", "A2", "Frutas y verduras", "🥦", 47,
                   "Aprende el vocabulario de frutas y verduras y a hablar de una alimentación saludable en inglés.")
food = [
    ("the apple", "la manzana"), ("the banana", "el plátano"), ("the carrot", "la zanahoria"),
    ("the tomato", "el tomate"), ("the lettuce", "la lechuga"), ("the orange", "la naranja"),
]
for t, e in food:
    l.add_vocab(t, e)
l.add_grammar("\u201cA lot of\u201d, \u201clittle/few\u201d para cantidades", "\u201cLittle\u201d se usa con incontables, \u201cfew\u201d con contables, y \u201ca lot of\u201d funciona con ambos.", "I eat a lot of fruit and little meat.")
l.add_mcq_vocab("¿Cómo se dice \u201cla zanahoria\u201d en inglés?", "the carrot", ["the carrot", "the apple", "the banana", "the orange"],
                "\u201cZanahoria\u201d es \u201ccarrot\u201d en inglés.")
l.add_mcq_vocab("¿Cómo se dice \u201cel plátano\u201d en inglés?", "the banana", ["the banana", "the tomato", "the lettuce", "the carrot"],
                "\u201cPlátano\u201d es \u201cbanana\u201d en inglés.")
l.add_fill("I eat a lot of fruit every day to stay ___.", "healthy", ["healthy", "hungry", "sick", "tired"],
           "\u201cComer mucha fruta\u201d normalmente se relaciona con estar \u201chealthy\u201d (sano)."),
l.add_translate("Traduce: \u201cComo poca carne y muchas verduras.\u201d", "I eat little meat and a lot of vegetables.",
                 ["I eat little meat and little vegetables.", "I eat a lot of meat and a lot of vegetables.", "I eat little fruit and a lot of vegetables."],
                 "\u201cPoca carne\u201d = \u201clittle meat\u201d; \u201cmuchas verduras\u201d = \u201ca lot of vegetables\u201d.")
l.add_arrange("Ordena: [tomato / salad / and / has / lettuce / the]", "The salad has tomato and lettuce",
              "Sujeto + verbo + objeto (dos sustantivos unidos por \u201cand\u201d)."),
l.add_speaking("Describe en inglés, en 40-60 palabras, tu dieta habitual: qué frutas y verduras comes normalmente y con qué frecuencia.",
               ["I eat", "often", "vegetables"])
lessons.append(l)

# ── B1: Cooking verbs and simple recipes ────────────
l = LessonBuilder("b1_cooking_recipes", "B1", "La cocina: verbos y recetas simples", "🍳", 61,
                   "Aprende verbos de cocina y a explicar los pasos de una receta sencilla en inglés.")
cooking = [
    ("to cut, to peel", "cortar, pelar"), ("to boil, to fry", "hervir, freír"),
    ("to mix the ingredients", "mezclar los ingredientes"), ("to add salt to taste", "añadir sal al gusto"),
    ("to let the dough rest", "dejar reposar la masa"), ("to preheat the oven", "precalentar el horno"),
]
for t, e in cooking:
    l.add_vocab(t, e)
l.add_grammar("El imperativo para dar instrucciones de receta", "Las recetas en inglés usan el imperativo (verbo base, sin sujeto) para dar instrucciones paso a paso.", "Cut the vegetables, boil the water, and add salt to taste.")
l.add_mcq_vocab("¿Cómo se dice \u201cmezclar los ingredientes\u201d en inglés?", "to mix the ingredients",
                ["to mix the ingredients", "to cut, to peel", "to boil, to fry", "to preheat the oven"],
                "\u201cMezclar los ingredientes\u201d es \u201cto mix the ingredients\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cprecalentar el horno\u201d en inglés?", "to preheat the oven",
                ["to preheat the oven", "to let the dough rest", "to add salt to taste", "to cut, to peel"],
                "\u201cPrecalentar el horno\u201d es \u201cto preheat the oven\u201d.")
l.add_fill("Before baking, you need to ___ the oven to 180 degrees.", "preheat", ["preheat", "boil", "fry", "mix"],
           "\u201cPrecalentar el horno\u201d es el paso previo típico antes de hornear.")
l.add_translate("Traduce: \u201cDeje reposar la masa durante diez minutos.\u201d", "Let the dough rest for ten minutes.",
                 ["Let the dough boil for ten minutes.", "Let the dough fry for ten minutes.", "Let the dough cut for ten minutes."],
                 "\u201cDeje reposar la masa\u201d = \u201cLet the dough rest\u201d.")
l.add_arrange("Ordena: [taste / salt / add / to]", "Add salt to taste",
              "Imperativo + objeto + expresión fija \u201cto taste\u201d."),
l.add_writing("Escribe en inglés 45-65 palabras explicando los pasos de una receta sencilla que sepas hacer, usando al menos tres verbos de cocina en imperativo.",
              ["cut", "add", "let it rest"])
lessons.append(l)

# ── B2: The art world ──────────────────────────────
l = LessonBuilder("b2_art_world", "B2", "El mundo del arte: pintura, música y cine", "🎨", 83,
                   "Habla sobre arte, música y cine, expresando opiniones y valoraciones matizadas en inglés.")
art = [
    ("a masterpiece", "una obra maestra"), ("the staging/mise-en-scène", "la puesta en escena"),
    ("a moving performance", "una interpretación conmovedora"), ("an artist's style", "el estilo de un artista"),
    ("to leave a lasting impression", "dejar una impresión duradera"), ("to be overrated/underrated", "estar sobrevalorado/infravalorado"),
]
for t, e in art:
    l.add_vocab(t, e)
l.add_grammar("\u201cI don't think\u201d + presente para matizar una opinión", "\u201cI don't think that\u201d seguido del presente (no del subjuntivo, que apenas se usa en inglés) expresa una opinión matizada de desacuerdo.", "I don't think this film is as good as they say.")
l.add_mcq_vocab("¿Cómo se dice \u201cuna interpretación conmovedora\u201d en inglés?", "a moving performance",
                ["a moving performance", "a masterpiece", "an artist's style", "a lasting impression"],
                "\u201cUna interpretación conmovedora\u201d es \u201ca moving performance\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cestar sobrevalorado\u201d en inglés?", "to be overrated",
                ["to be overrated", "to be underrated", "to leave an impression", "an artist's style"],
                "\u201cEstar sobrevalorado\u201d es \u201cto be overrated\u201d.")
l.add_fill("I don't think this film ___ as good as everyone says.", "is", ["is", "was", "will be", "being"],
           "\u201cI don't think that\u201d va seguido de presente simple: \u201cthat...is\u201d.")
l.add_translate("Traduce: \u201cEsta interpretación me dejó una impresión duradera.\u201d", "This performance left a lasting impression on me.",
                 ["This performance left a masterpiece on me.", "This style left a lasting impression on me.", "This staging left me overrated."],
                 "\u201cDejó una impresión duradera\u201d = \u201cleft a lasting impression\u201d.")
l.add_arrange("Ordena: [masterpiece / this / a / is]", "This is a masterpiece",
              "Sujeto + \u201cis\u201d + artículo + sustantivo."),
l.add_writing("Escribe en inglés 55-75 palabras dando tu opinión sobre una obra de arte, película o canción (real o inventada): qué te pareció y por qué, matizando tu postura.",
              ["I think that", "I don't think", "an impression"])
lessons.append(l)

# ── C1: Giving and receiving constructive feedback ────
l = LessonBuilder("c1_giving_feedback", "C1", "La crítica constructiva: dar y recibir feedback", "🗨️", 91,
                   "Aprende a dar y recibir retroalimentación de forma constructiva y profesional en inglés.")
feedback = [
    ("to point out an area for improvement", "señalar un punto de mejora"),
    ("to acknowledge strengths before criticism", "reconocer los aciertos antes de las críticas"),
    ("to phrase criticism in concrete terms", "formular la crítica en términos concretos"),
    ("to be open to feedback", "estar abierto/a a la retroalimentación"),
    ("to take criticism personally", "tomarse la crítica de forma personal"),
    ("to propose a solution, not just point out the problem", "proponer una solución, no solo señalar el problema"),
]
for t, e in feedback:
    l.add_vocab(t, e)
l.add_grammar("Mitigadores para suavizar una crítica", "Expresiones como \u201cyou might want to consider\u201d o \u201cone suggestion would be\u201d suavizan una crítica sin perder claridad.", "You might want to consider restructuring the report; one suggestion would be to start with the conclusions.")
l.add_mcq_vocab("¿Cómo se dice \u201cformular la crítica en términos concretos\u201d en inglés?", "to phrase criticism in concrete terms",
                ["to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback", "to take criticism personally"],
                "\u201cFormular la crítica en términos concretos\u201d es \u201cto phrase criticism in concrete terms\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201ctomarse la crítica de forma personal\u201d en inglés?", "to take criticism personally",
                ["to take criticism personally", "to acknowledge strengths", "to propose a solution", "to be open to feedback"],
                "\u201cTomarse la crítica de forma personal\u201d es \u201cto take criticism personally\u201d.")
l.add_fill("Before giving criticism, it's a good idea to ___ the strengths of the work.", "acknowledge",
           ["acknowledge", "ignore", "hide", "criticize"],
           "\u201cReconocer los aciertos antes de las críticas\u201d hace que el feedback sea mejor recibido.")
l.add_translate("Traduce: \u201cUna sugerencia sería empezar con las conclusiones.\u201d", "One suggestion would be to start with the conclusions.",
                 ["One suggestion would be to finish with the conclusions.", "One criticism would be to start with the conclusions.", "One problem would be to start with the conclusions."],
                 "\u201cUna sugerencia sería\u201d = \u201cOne suggestion would be to\u201d.")
l.add_arrange("Ordena: [problem / propose / just / a / point / solution / don't / out / the]",
              "Don't just point out the problem, propose a solution",
              "Estructura de contraste: \u201cdon't just... [verbo]\u201d + \u201c[verbo]... a solution\u201d.")
l.add_writing("Escribe en inglés 55-75 palabras dando feedback constructivo sobre un trabajo (real o inventado): reconoce un acierto, señala un punto de mejora concreto y propón una solución.",
              ["I acknowledge that", "you might want to", "one suggestion would be"])
lessons.append(l)

# ── C2: Inclusive language and language change ─────
l = LessonBuilder("c2_inclusive_language", "C2", "El lenguaje inclusivo y la evolución del idioma", "🌐", 99,
                   "Analiza el debate sobre el lenguaje inclusivo y cómo evolucionan las lenguas con la sociedad, en inglés.")
lang_change = [
    ("inclusive language", "el lenguaje inclusivo"), ("a living language evolves with use", "una lengua viva evoluciona con el uso"),
    ("prescriptivism versus descriptivism", "prescriptivismo frente a descriptivismo"),
    ("a neologism is added to the dictionary", "un neologismo se incorpora al diccionario"),
    ("to generate resistance to a linguistic change", "generar resistencia frente a un cambio lingüístico"),
    ("an argument doesn't necessarily imply a political stance", "un argumento no implica necesariamente una postura política"),
]
for t, e in lang_change:
    l.add_vocab(t, e)
l.add_grammar("Presentar un debate lingüístico sin sesgo", "Un análisis riguroso separa la descripción del fenómeno (cómo cambia la lengua) de la valoración personal (si el cambio debería adoptarse o no).", "From a descriptivist view, the change is documented without judgement; from a prescriptivist view, it's assessed whether it should be standardized.")
l.add_mcq_vocab("¿Cómo se dice \u201cprescriptivismo frente a descriptivismo\u201d en inglés?", "prescriptivism versus descriptivism",
                ["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],
                "\u201cPrescriptivismo frente a descriptivismo\u201d es \u201cprescriptivism versus descriptivism\u201d.")
l.add_mcq_vocab("¿Cómo se dice \u201cun neologismo se incorpora al diccionario\u201d en inglés?", "a neologism is added to the dictionary",
                ["a neologism is added to the dictionary", "a living language evolves with use", "to generate resistance", "inclusive language"],
                "\u201cUn neologismo se incorpora al diccionario\u201d es \u201ca neologism is added to the dictionary\u201d.")
l.add_fill("Descriptivism focuses on documenting how people actually speak, not on dictating how they ___ speak.", "should",
           ["should", "can", "want to", "tend to"],
           "El descriptivismo describe el uso real, sin dictar normas sobre cómo \u201cdebería\u201d hablarse.")
l.add_translate("Traduce con precisión: \u201cUna lengua viva evoluciona con el uso, nos guste o no.\u201d",
                 "A living language evolves with use, whether we like it or not.",
                 ["A living language evolves with use, even if it doesn't change.", "A dead language evolves with use, whether we like it or not.", "A living language evolves without use, whether we like it or not."],
                 "\u201cNos guste o no\u201d se traduce idiomáticamente como \u201cwhether we like it or not\u201d.")
l.add_arrange("Ordena: [imply / necessarily / a / doesn't / an argument / political stance]",
              "An argument doesn't necessarily imply a political stance",
              "Sujeto + negación + \u201cnecessarily imply\u201d + objeto.")
l.add_writing("Escribe en inglés 55-75 palabras presentando de forma equilibrada dos posturas sobre un cambio lingüístico actual (real o inventado), sin tomar partido explícitamente, distinguiendo descripción de valoración.",
              ["on the one hand", "on the other", "without necessarily"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out7_en.txt")
