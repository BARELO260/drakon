import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: A roupa e as cores ──────────────────────────
l = LessonBuilder("pt_a1_clothing_colors", "A1", "A roupa e as cores", "👕", 37,
                   "Aprende o vocabulário das peças de roupa e como combiná-las com cores em português.")
clothes = [
    ("a camisa", "the shirt"), ("as calças", "the pants/trousers"), ("os sapatos", "the shoes"),
    ("o vestido", "the dress"), ("o casaco", "the jacket"), ("a saia", "the skirt"),
]
for t, e in clothes:
    l.add_vocab(t, e)
l.add_vocab("vermelho, azul, verde, preto, branco", "red, blue, green, black, white")
l.add_grammar("Concordância de género e número com adjetivos de cor", "As cores concordam em género e número com o substantivo que descrevem.", "a camisa vermelha / os sapatos pretos / o vestido verde")
l.add_mcq_vocab("Como se diz \u201co casaco\u201d em inglês?", "the jacket", ["the jacket", "the shirt", "the pants/trousers", "the skirt"],
                "\u201cCasaco\u201d diz-se \u201cjacket\u201d em inglês.")
l.add_mcq_vocab("Como se diz \u201cos sapatos\u201d em inglês?", "the shoes", ["the shoes", "the dress", "the shirt", "the skirt"],
                "\u201cSapatos\u201d diz-se \u201cshoes\u201d em inglês.")
l.add_fill("Estou a usar uma camisa ___ e umas calças pretas.", "azul", ["azul", "azuis", "azulado", "azulados"],
           "\u201cAzul\u201d é invariável em género no singular: \u201cuma camisa azul\u201d.")
l.add_translate("Traduz: \u201cI'm wearing a red dress.\u201d", "Estou a usar um vestido vermelho.",
                 ["Estou a usar uma saia vermelha.", "Estou a usar uma camisa vermelha.", "Estou a usar sapatos vermelhos."],
                 "\u201cI'm wearing\u201d = \u201cEstou a usar\u201d; \u201ca red dress\u201d = \u201cum vestido vermelho\u201d.")
l.add_arrange("Ordena: [pretos / tenho / sapatos / uns]", "Tenho uns sapatos pretos",
              "Sujeito implícito + verbo + artigo + substantivo + adjetivo (concordando no plural).")
l.add_writing("Descreve em português, em 20-30 palavras, a roupa que estás a usar hoje, mencionando pelo menos três peças e as suas cores.",
              ["estou a usar", "de cor", "e"])
lessons.append(l)

# ── A2: Frutas e legumes ──────────────────────────────
l = LessonBuilder("pt_a2_fruits_vegetables", "A2", "Frutas e legumes", "🥦", 47,
                   "Aprende o vocabulário de frutas e legumes e a falar de uma alimentação saudável em português.")
food = [
    ("a maçã", "the apple"), ("a banana", "the banana"), ("a cenoura", "the carrot"),
    ("o tomate", "the tomato"), ("a alface", "the lettuce"), ("a laranja", "the orange"),
]
for t, e in food:
    l.add_vocab(t, e)
l.add_grammar("Quantificadores: muito/a, pouco/a", "Estes quantificadores concordam em género com o substantivo e servem para falar de quantidades de forma aproximada.", "Como muita fruta e pouca carne.")
l.add_mcq_vocab("Como se diz \u201ca cenoura\u201d em inglês?", "the carrot", ["the carrot", "the apple", "the banana", "the orange"],
                "\u201cCenoura\u201d diz-se \u201ccarrot\u201d em inglês.")
l.add_mcq_vocab("Como se diz \u201ca banana\u201d em inglês?", "the banana", ["the banana", "the tomato", "the lettuce", "the carrot"],
                "\u201cBanana\u201d diz-se \u201cbanana\u201d em inglês.")
l.add_fill("Como ___ fruta todos os dias para me manter saudável.", "muita", ["muita", "muito", "muitos", "muitas"],
           "\u201cFruta\u201d é feminino singular, por isso o quantificador concorda: \u201cmuita fruta\u201d.")
l.add_translate("Traduz: \u201cI eat little meat and a lot of vegetables.\u201d", "Como pouca carne e muitos legumes.",
                 ["Como pouca carne e poucos legumes.", "Como muita carne e muitos legumes.", "Como pouca fruta e muitos legumes."],
                 "\u201cLittle meat\u201d = \u201cpouca carne\u201d; \u201ca lot of vegetables\u201d = \u201cmuitos legumes\u201d.")
l.add_arrange("Ordena: [tomate / salada / tem / a / alface / e]", "A salada tem tomate e alface",
              "Sujeito + verbo + objeto (dois substantivos unidos por \u201ce\u201d).")
l.add_speaking("Descreve em português, em 40-60 palavras, a tua alimentação habitual: que frutas e legumes comes normalmente e com que frequência.",
               ["como", "muitas vezes", "legumes"])
lessons.append(l)

# ── B1: A cozinha: verbos e receitas simples ────────────
l = LessonBuilder("pt_b1_cooking_recipes", "B1", "A cozinha: verbos e receitas simples", "🍳", 61,
                   "Aprende verbos de cozinha e a explicar os passos de uma receita simples em português.")
cooking = [
    ("cortar, descascar", "to cut, to peel"), ("ferver, fritar", "to boil, to fry"),
    ("misturar os ingredientes", "to mix the ingredients"), ("adicionar sal a gosto", "to add salt to taste"),
    ("deixar a massa repousar", "to let the dough rest"), ("pré-aquecer o forno", "to preheat the oven"),
]
for t, e in cooking:
    l.add_vocab(t, e)
l.add_grammar("O imperativo para dar instruções de receita", "As receitas usam o imperativo para dar instruções passo a passo.", "Corte os legumes, ferva a água e adicione sal a gosto.")
l.add_mcq_vocab("Como se diz \u201cmisturar os ingredientes\u201d em inglês?", "to mix the ingredients",
                ["to mix the ingredients", "to cut, to peel", "to boil, to fry", "to preheat the oven"],
                "\u201cMisturar os ingredientes\u201d diz-se \u201cto mix the ingredients\u201d.")
l.add_mcq_vocab("Como se diz \u201cpré-aquecer o forno\u201d em inglês?", "to preheat the oven",
                ["to preheat the oven", "to let the dough rest", "to add salt to taste", "to cut, to peel"],
                "\u201cPré-aquecer o forno\u201d diz-se \u201cto preheat the oven\u201d.")
l.add_fill("Antes de assar, é preciso ___ o forno a 180 graus.", "pré-aquecer", ["pré-aquecer", "ferver", "fritar", "misturar"],
           "\u201cPré-aquecer o forno\u201d é o passo típico antes de assar.")
l.add_translate("Traduz: \u201cLet the dough rest for ten minutes.\u201d", "Deixe a massa repousar durante dez minutos.",
                 ["Deixe a massa ferver durante dez minutos.", "Deixe a massa fritar durante dez minutos.", "Deixe a massa cortar durante dez minutos."],
                 "\u201cLet the dough rest\u201d = \u201cDeixe a massa repousar\u201d.")
l.add_arrange("Ordena: [gosto / sal / adicione / a]", "Adicione sal a gosto",
              "Imperativo + objeto + expressão fixa \u201ca gosto\u201d.")
l.add_writing("Escreve em português 45-65 palavras explicando os passos de uma receita simples que sabes fazer, usando pelo menos três verbos de cozinha no imperativo.",
              ["corte", "adicione", "deixe repousar"])
lessons.append(l)

# ── B2: O mundo da arte ──────────────────────────────
l = LessonBuilder("pt_b2_art_world", "B2", "O mundo da arte: pintura, música e cinema", "🎨", 83,
                   "Fala sobre arte, música e cinema, expressando opiniões e apreciações matizadas em português.")
art = [
    ("uma obra-prima", "a masterpiece"), ("a encenação", "the staging/mise-en-scène"),
    ("uma interpretação comovente", "a moving performance"), ("o estilo de um artista", "an artist's style"),
    ("deixar uma impressão duradoura", "to leave a lasting impression"), ("estar sobrevalorizado/subvalorizado", "to be overrated/underrated"),
]
for t, e in art:
    l.add_vocab(t, e)
l.add_grammar("Verbos de opinião + conjuntivo/indicativo consoante a certeza", "\u201cParece-me que\u201d + indicativo exprime uma opinião com alguma segurança; \u201cnão acho que\u201d + conjuntivo exprime dúvida.", "Parece-me que este filme é uma obra-prima. / Não acho que esteja sobrevalorizado.")
l.add_mcq_vocab("Como se diz \u201cuma interpretação comovente\u201d em inglês?", "a moving performance",
                ["a moving performance", "a masterpiece", "an artist's style", "a lasting impression"],
                "\u201cUma interpretação comovente\u201d diz-se \u201ca moving performance\u201d.")
l.add_mcq_vocab("Como se diz \u201cestar sobrevalorizado\u201d em inglês?", "to be overrated",
                ["to be overrated", "to be underrated", "to leave an impression", "an artist's style"],
                "\u201cEstar sobrevalorizado\u201d diz-se \u201cto be overrated\u201d.")
l.add_fill("Não acho que este filme ___ tão bom quanto dizem.", "seja", ["seja", "é", "será", "foi"],
           "\u201cNão acho que\u201d exige conjuntivo: \u201cque seja\u201d.")
l.add_translate("Traduz: \u201cThis performance left a lasting impression on me.\u201d", "Esta interpretação deixou-me uma impressão duradoura.",
                 ["Esta interpretação deixou-me uma obra-prima.", "Este estilo deixou-me uma impressão duradoura.", "Esta encenação deixou-me sobrevalorizado."],
                 "\u201cLeft a lasting impression\u201d = \u201cdeixou uma impressão duradoura\u201d.")
l.add_arrange("Ordena: [obra-prima / esta / é / uma]", "Esta é uma obra-prima",
              "Sujeito + \u201cé\u201d + artigo + substantivo composto.")
l.add_writing("Escreve em português 55-75 palavras dando a tua opinião sobre uma obra de arte, filme ou canção (real ou inventada): o que achaste e porquê, usando pelo menos uma estrutura com conjuntivo de opinião.",
              ["parece-me que", "não acho que", "uma impressão"])
lessons.append(l)

# ── C1: A crítica construtiva: dar e receber feedback ────
l = LessonBuilder("pt_c1_giving_feedback", "C1", "A crítica construtiva: dar e receber feedback", "🗨️", 91,
                   "Aprende a dar e receber feedback de forma construtiva e profissional em português.")
feedback = [
    ("apontar um ponto a melhorar", "to point out an area for improvement"),
    ("reconhecer os pontos fortes antes das críticas", "to acknowledge strengths before criticism"),
    ("formular a crítica em termos concretos", "to phrase criticism in concrete terms"),
    ("estar aberto/a ao feedback", "to be open to feedback"),
    ("levar a crítica para o lado pessoal", "to take criticism personally"),
    ("propor uma solução, não só apontar o problema", "to propose a solution, not just point out the problem"),
]
for t, e in feedback:
    l.add_vocab(t, e)
l.add_grammar("Atenuadores para suavizar uma crítica", "Expressões como \u201ctalvez pudesses considerar\u201d ou \u201cuma sugestão seria\u201d suavizam uma crítica sem perder clareza.", "Talvez pudesses considerar reestruturar o relatório; uma sugestão seria começar pelas conclusões.")
l.add_mcq_vocab("Como se diz \u201cformular a crítica em termos concretos\u201d em inglês?", "to phrase criticism in concrete terms",
                ["to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback", "to take criticism personally"],
                "\u201cFormular a crítica em termos concretos\u201d diz-se \u201cto phrase criticism in concrete terms\u201d.")
l.add_mcq_vocab("Como se diz \u201clevar a crítica para o lado pessoal\u201d em inglês?", "to take criticism personally",
                ["to take criticism personally", "to acknowledge strengths", "to propose a solution", "to be open to feedback"],
                "\u201cLevar a crítica para o lado pessoal\u201d diz-se \u201cto take criticism personally\u201d.")
l.add_fill("Antes de dar uma crítica, é boa ideia ___ os pontos fortes do trabalho.", "reconhecer", ["reconhecer", "ignorar", "esconder", "criticar"],
           "\u201cReconhecer os pontos fortes antes das críticas\u201d faz com que o feedback seja melhor recebido.")
l.add_translate("Traduz: \u201cUma sugestão seria começar pelas conclusões.\u201d", "One suggestion would be to start with the conclusions.",
                 ["One suggestion would be to finish with the conclusions.", "One criticism would be to start with the conclusions.", "One problem would be to start with the conclusions."],
                 "\u201cUma sugestão seria\u201d = \u201cOne suggestion would be to\u201d.")
l.add_arrange("Ordena: [problema / propõe / só / o / uma solução / não / aponta]",
              "Não aponta só o problema, propõe uma solução",
              "Estrutura de contraste: \u201cnão só... [verbo]\u201d + \u201c[verbo]... uma solução\u201d.")
l.add_writing("Escreve em português 55-75 palavras dando feedback construtivo sobre um trabalho (real ou inventado): reconhece um ponto forte, aponta um ponto a melhorar concreto e propõe uma solução.",
              ["reconheço que", "talvez pudesses", "uma sugestão seria"])
lessons.append(l)

# ── C2: A linguagem inclusiva e a evolução da língua ─────
l = LessonBuilder("pt_c2_inclusive_language", "C2", "A linguagem inclusiva e a evolução da língua", "🌐", 99,
                   "Analisa o debate sobre a linguagem inclusiva e como as línguas evoluem com a sociedade.")
lang_change = [
    ("a linguagem inclusiva", "inclusive language"), ("uma língua viva evolui com o uso", "a living language evolves with use"),
    ("prescritivismo versus descritivismo", "prescriptivism versus descriptivism"),
    ("um neologismo é incorporado ao dicionário", "a neologism is added to the dictionary"),
    ("gerar resistência face a uma mudança linguística", "to generate resistance to a linguistic change"),
    ("um argumento não implica necessariamente uma posição política", "an argument doesn't necessarily imply a political stance"),
]
for t, e in lang_change:
    l.add_vocab(t, e)
l.add_grammar("Apresentar um debate linguístico sem viés", "Uma análise rigorosa separa a descrição do fenómeno (como a língua muda) da avaliação pessoal (se a mudança deveria ser adotada ou não).", "Do ponto de vista descritivista, a mudança é documentada sem se julgar; do prescritivista, avalia-se se convém normalizá-la.")
l.add_mcq_vocab("Como se diz \u201cprescritivismo versus descritivismo\u201d em inglês?", "prescriptivism versus descriptivism",
                ["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],
                "\u201cPrescritivismo versus descritivismo\u201d diz-se \u201cprescriptivism versus descriptivism\u201d.")
l.add_mcq_vocab("Como se diz \u201cum neologismo é incorporado ao dicionário\u201d em inglês?", "a neologism is added to the dictionary",
                ["a neologism is added to the dictionary", "a living language evolves with use", "to generate resistance", "inclusive language"],
                "\u201cUm neologismo é incorporado ao dicionário\u201d diz-se \u201ca neologism is added to the dictionary\u201d.")
l.add_fill("O descritivismo foca-se em documentar como as pessoas falam realmente, não em ditar como ___ falar.", "deveriam",
           ["deveriam", "podem", "querem", "costumam"],
           "O descritivismo descreve o uso real, sem ditar normas sobre como se \u201cdeveria\u201d falar.")
l.add_translate("Traduz com precisão: \u201cUma língua viva evolui com o uso, quer gostemos quer não.\u201d",
                 "A living language evolves with use, whether we like it or not.",
                 ["A living language evolves with use, even if it doesn't change.", "A dead language evolves with use, whether we like it or not.", "A living language evolves without use, whether we like it or not."],
                 "\u201cQuer gostemos quer não\u201d traduz-se idiomaticamente como \u201cwhether we like it or not\u201d.")
l.add_arrange("Ordena: [necessariamente / implica / não / uma posição / política / um argumento]",
              "Um argumento não implica necessariamente uma posição política",
              "Sujeito + negação + \u201cimplica necessariamente\u201d + objeto.")
l.add_writing("Escreve em português 55-75 palavras apresentando de forma equilibrada duas posições sobre uma mudança linguística atual (real ou inventada), sem tomar partido explicitamente, distinguindo descrição de avaliação.",
              ["por um lado", "por outro", "sem necessariamente"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out7_pt.txt")
