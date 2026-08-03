import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: Les vêtements et les couleurs ──────────────────────────
l = LessonBuilder("fr_a1_clothing_colors", "A1", "Les vêtements et les couleurs", "👕", 37,
                   "Apprends le vocabulaire des vêtements et comment les associer aux couleurs en français.")
clothes = [
    ("la chemise", "the shirt"), ("le pantalon", "the pants/trousers"), ("les chaussures", "the shoes"),
    ("la robe", "the dress"), ("la veste", "the jacket"), ("la jupe", "the skirt"),
]
for t, e in clothes:
    l.add_vocab(t, e)
l.add_vocab("rouge, bleu, vert, noir, blanc", "red, blue, green, black, white")
l.add_grammar("Accord de genre et nombre avec les adjectifs de couleur", "Les couleurs s'accordent en genre et en nombre avec le nom qu'elles décrivent.", "la chemise rouge / les chaussures noires / la robe verte")
l.add_mcq_vocab("Comment dit-on \u00abla veste\u00bb en anglais ?", "the jacket", ["the jacket", "the shirt", "the pants/trousers", "the skirt"],
                "\u00abVeste\u00bb se dit \u00abjacket\u00bb en anglais.")
l.add_mcq_vocab("Comment dit-on \u00ables chaussures\u00bb en anglais ?", "the shoes", ["the shoes", "the dress", "the shirt", "the skirt"],
                "\u00abChaussures\u00bb se dit \u00abshoes\u00bb en anglais.")
l.add_fill("Je porte une chemise ___ et un pantalon noir.", "bleue", ["bleue", "bleu", "bleus", "bleues"],
           "\u00abChemise\u00bb est féminin singulier, donc la couleur s'accorde : \u00abbleue\u00bb.")
l.add_translate("Traduis : \u00abI'm wearing a red dress.\u00bb", "Je porte une robe rouge.",
                 ["Je porte une jupe rouge.", "Je porte une chemise rouge.", "Je porte des chaussures rouges."],
                 "\u00abI'm wearing\u00bb = \u00abJe porte\u00bb ; \u00aba red dress\u00bb = \u00abune robe rouge\u00bb.")
l.add_arrange("Remets dans l'ordre : [noires / chaussures / ai / des / j']", "J'ai des chaussures noires",
              "Sujet + verbe + article + nom + adjectif (accord au pluriel).")
l.add_writing("Décris en français, en 20-30 mots, les vêtements que tu portes aujourd'hui, en mentionnant au moins trois vêtements et leurs couleurs.",
              ["je porte", "de couleur", "et"])
lessons.append(l)

# ── A2: Fruits et légumes ──────────────────────────────
l = LessonBuilder("fr_a2_fruits_vegetables", "A2", "Fruits et légumes", "🥦", 47,
                   "Apprends le vocabulaire des fruits et légumes et à parler d'une alimentation saine en français.")
food = [
    ("la pomme", "the apple"), ("la banane", "the banana"), ("la carotte", "the carrot"),
    ("la tomate", "the tomato"), ("la laitue", "the lettuce"), ("l'orange", "the orange"),
]
for t, e in food:
    l.add_vocab(t, e)
l.add_grammar("Quantificateurs : beaucoup de, peu de", "\u00abBeaucoup de\u00bb et \u00abpeu de\u00bb sont invariables et s'utilisent aussi bien avec des noms comptables qu'incomptables.", "Je mange beaucoup de fruits et peu de viande.")
l.add_mcq_vocab("Comment dit-on \u00abla carotte\u00bb en anglais ?", "the carrot", ["the carrot", "the apple", "the banana", "the orange"],
                "\u00abCarotte\u00bb se dit \u00abcarrot\u00bb en anglais.")
l.add_mcq_vocab("Comment dit-on \u00abla banane\u00bb en anglais ?", "the banana", ["the banana", "the tomato", "the lettuce", "the carrot"],
                "\u00abBanane\u00bb se dit \u00abbanana\u00bb en anglais.")
l.add_fill("Je mange ___ de fruits chaque jour pour rester en bonne santé.", "beaucoup", ["beaucoup", "peu", "trop", "assez"],
           "\u00abBeaucoup de fruits\u00bb décrit une grande quantité, cohérente avec \u00abrester en bonne santé\u00bb.")
l.add_translate("Traduis : \u00abI eat little meat and a lot of vegetables.\u00bb", "Je mange peu de viande et beaucoup de légumes.",
                 ["Je mange peu de viande et peu de légumes.", "Je mange beaucoup de viande et beaucoup de légumes.", "Je mange peu de fruits et beaucoup de légumes."],
                 "\u00abLittle meat\u00bb = \u00abpeu de viande\u00bb ; \u00aba lot of vegetables\u00bb = \u00abbeaucoup de légumes\u00bb.")
l.add_arrange("Remets dans l'ordre : [tomate / salade / a / la / de la / et / laitue]", "La salade a de la tomate et de la laitue",
              "Sujet + verbe + objet (deux articles partitifs reliés par \u00abet\u00bb).")
l.add_speaking("Décris en français, en 40-60 mots, ton alimentation habituelle : quels fruits et légumes tu manges normalement et à quelle fréquence.",
               ["je mange", "souvent", "légumes"])
lessons.append(l)

# ── B1: La cuisine : verbes et recettes simples ────────────
l = LessonBuilder("fr_b1_cooking_recipes", "B1", "La cuisine : verbes et recettes simples", "🍳", 61,
                   "Apprends des verbes de cuisine et à expliquer les étapes d'une recette simple en français.")
cooking = [
    ("couper, éplucher", "to cut, to peel"), ("faire bouillir, faire frire", "to boil, to fry"),
    ("mélanger les ingrédients", "to mix the ingredients"), ("ajouter du sel selon le goût", "to add salt to taste"),
    ("laisser reposer la pâte", "to let the dough rest"), ("préchauffer le four", "to preheat the oven"),
]
for t, e in cooking:
    l.add_vocab(t, e)
l.add_grammar("L'impératif pour donner des instructions de recette", "Les recettes utilisent l'impératif pour donner des instructions étape par étape.", "Coupez les légumes, faites bouillir l'eau et ajoutez du sel selon le goût.")
l.add_mcq_vocab("Comment dit-on \u00abmélanger les ingrédients\u00bb en anglais ?", "to mix the ingredients",
                ["to mix the ingredients", "to cut, to peel", "to boil, to fry", "to preheat the oven"],
                "\u00abMélanger les ingrédients\u00bb se dit \u00abto mix the ingredients\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abpréchauffer le four\u00bb en anglais ?", "to preheat the oven",
                ["to preheat the oven", "to let the dough rest", "to add salt to taste", "to cut, to peel"],
                "\u00abPréchauffer le four\u00bb se dit \u00abto preheat the oven\u00bb.")
l.add_fill("Avant de cuire au four, il faut ___ le four à 180 degrés.", "préchauffer", ["préchauffer", "faire bouillir", "faire frire", "mélanger"],
           "\u00abPréchauffer le four\u00bb est l'étape préalable typique avant de cuire au four.")
l.add_translate("Traduis : \u00abLaissez reposer la pâte pendant dix minutes.\u00bb", "Let the dough rest for ten minutes.",
                 ["Let the dough boil for ten minutes.", "Let the dough fry for ten minutes.", "Let the dough cut for ten minutes."],
                 "\u00abLaissez reposer la pâte\u00bb = \u00abLet the dough rest\u00bb.")
l.add_arrange("Remets dans l'ordre : [goût / le / selon / sel / ajoutez / du]", "Ajoutez du sel selon le goût",
              "Impératif + objet + expression fixe \u00abselon le goût\u00bb.")
l.add_writing("Écris en français 45-65 mots expliquant les étapes d'une recette simple que tu sais faire, en utilisant au moins trois verbes de cuisine à l'impératif.",
              ["coupez", "ajoutez", "laissez reposer"])
lessons.append(l)

# ── B2: Le monde de l'art ──────────────────────────────
l = LessonBuilder("fr_b2_art_world", "B2", "Le monde de l'art : peinture, musique et cinéma", "🎨", 83,
                   "Parle d'art, de musique et de cinéma en exprimant des opinions et des jugements nuancés en français.")
art = [
    ("un chef-d'œuvre", "a masterpiece"), ("la mise en scène", "the staging/mise-en-scène"),
    ("une interprétation émouvante", "a moving performance"), ("le style d'un artiste", "an artist's style"),
    ("laisser une impression durable", "to leave a lasting impression"), ("être surestimé/sous-estimé", "to be overrated/underrated"),
]
for t, e in art:
    l.add_vocab(t, e)
l.add_grammar("Verbes d'opinion + subjonctif/indicatif selon la certitude", "\u00abJe trouve que\u00bb + indicatif exprime une opinion avec une certaine assurance ; \u00abje ne pense pas que\u00bb + subjonctif exprime le doute.", "Je trouve que ce film est un chef-d'œuvre. / Je ne pense pas qu'il soit surestimé.")
l.add_mcq_vocab("Comment dit-on \u00abune interprétation émouvante\u00bb en anglais ?", "a moving performance",
                ["a moving performance", "a masterpiece", "an artist's style", "a lasting impression"],
                "\u00abUne interprétation émouvante\u00bb se dit \u00aba moving performance\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abêtre surestimé\u00bb en anglais ?", "to be overrated",
                ["to be overrated", "to be underrated", "to leave an impression", "an artist's style"],
                "\u00abÊtre surestimé\u00bb se dit \u00abto be overrated\u00bb.")
l.add_fill("Je ne pense pas que ce film ___ aussi bon qu'on le dit.", "soit", ["soit", "est", "sera", "était"],
           "\u00abJe ne pense pas que\u00bb exige le subjonctif : \u00abque...soit\u00bb.")
l.add_translate("Traduis : \u00abThis performance left a lasting impression on me.\u00bb", "Cette interprétation m'a laissé une impression durable.",
                 ["Cette interprétation m'a laissé un chef-d'œuvre.", "Ce style m'a laissé une impression durable.", "Cette mise en scène m'a laissé surestimé."],
                 "\u00abLeft a lasting impression\u00bb = \u00aba laissé une impression durable\u00bb.")
l.add_arrange("Remets dans l'ordre : [chef-d'œuvre / ceci / un / est]", "Ceci est un chef-d'œuvre",
              "Sujet + \u00abest\u00bb + article + nom.")
l.add_writing("Écris en français 55-75 mots donnant ton opinion sur une œuvre d'art, un film ou une chanson (réel ou inventé) : ce que tu en as pensé et pourquoi, en nuançant ta position.",
              ["je trouve que", "je ne pense pas que", "une impression"])
lessons.append(l)

# ── C1: La critique constructive : donner et recevoir un feedback ────
l = LessonBuilder("fr_c1_giving_feedback", "C1", "La critique constructive : donner et recevoir un feedback", "🗨️", 91,
                   "Apprends à donner et recevoir des retours de façon constructive et professionnelle en français.")
feedback = [
    ("signaler un point à améliorer", "to point out an area for improvement"),
    ("reconnaître les points forts avant les critiques", "to acknowledge strengths before criticism"),
    ("formuler la critique en termes concrets", "to phrase criticism in concrete terms"),
    ("être ouvert(e) aux retours", "to be open to feedback"),
    ("prendre la critique personnellement", "to take criticism personally"),
    ("proposer une solution, pas seulement signaler le problème", "to propose a solution, not just point out the problem"),
]
for t, e in feedback:
    l.add_vocab(t, e)
l.add_grammar("Atténuateurs pour adoucir une critique", "Des expressions comme \u00abtu pourrais peut-être envisager\u00bb ou \u00abune suggestion serait\u00bb adoucissent une critique sans perdre en clarté.", "Tu pourrais peut-être envisager de restructurer le rapport ; une suggestion serait de commencer par les conclusions.")
l.add_mcq_vocab("Comment dit-on \u00abformuler la critique en termes concrets\u00bb en anglais ?", "to phrase criticism in concrete terms",
                ["to phrase criticism in concrete terms", "to point out an area for improvement", "to be open to feedback", "to take criticism personally"],
                "\u00abFormuler la critique en termes concrets\u00bb se dit \u00abto phrase criticism in concrete terms\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abprendre la critique personnellement\u00bb en anglais ?", "to take criticism personally",
                ["to take criticism personally", "to acknowledge strengths", "to propose a solution", "to be open to feedback"],
                "\u00abPrendre la critique personnellement\u00bb se dit \u00abto take criticism personally\u00bb.")
l.add_fill("Avant de donner une critique, c'est une bonne idée de ___ les points forts du travail.", "reconnaître",
           ["reconnaître", "ignorer", "cacher", "critiquer"],
           "\u00abReconnaître les points forts avant les critiques\u00bb fait que le feedback est mieux reçu.")
l.add_translate("Traduis : \u00abUne suggestion serait de commencer par les conclusions.\u00bb", "One suggestion would be to start with the conclusions.",
                 ["One suggestion would be to finish with the conclusions.", "One criticism would be to start with the conclusions.", "One problem would be to start with the conclusions."],
                 "\u00abUne suggestion serait de\u00bb = \u00abOne suggestion would be to\u00bb.")
l.add_arrange("Remets dans l'ordre : [problème / propose / seulement / le / une solution / ne / signale / pas]",
              "Ne signale pas seulement le problème, propose une solution",
              "Structure de contraste : \u00abne... pas seulement\u00bb + \u00ab[verbe]... une solution\u00bb.")
l.add_writing("Écris en français 55-75 mots donnant un feedback constructif sur un travail (réel ou inventé) : reconnais un point fort, signale un point à améliorer concret et propose une solution.",
              ["je reconnais que", "tu pourrais peut-être", "une suggestion serait"])
lessons.append(l)

# ── C2: Le langage inclusif et l'évolution de la langue ─────
l = LessonBuilder("fr_c2_inclusive_language", "C2", "Le langage inclusif et l'évolution de la langue", "🌐", 99,
                   "Analyse le débat sur le langage inclusif et comment les langues évoluent avec la société.")
lang_change = [
    ("le langage inclusif", "inclusive language"), ("une langue vivante évolue avec l'usage", "a living language evolves with use"),
    ("prescriptivisme face à descriptivisme", "prescriptivism versus descriptivism"),
    ("un néologisme est ajouté au dictionnaire", "a neologism is added to the dictionary"),
    ("générer une résistance face à un changement linguistique", "to generate resistance to a linguistic change"),
    ("un argument n'implique pas nécessairement une position politique", "an argument doesn't necessarily imply a political stance"),
]
for t, e in lang_change:
    l.add_vocab(t, e)
l.add_grammar("Présenter un débat linguistique sans parti pris", "Une analyse rigoureuse sépare la description du phénomène (comment la langue change) de l'appréciation personnelle (si le changement devrait être adopté ou non).", "Du point de vue descriptiviste, le changement est documenté sans jugement ; du point de vue prescriptiviste, on évalue s'il convient de le normaliser.")
l.add_mcq_vocab("Comment dit-on \u00abprescriptivisme face à descriptivisme\u00bb en anglais ?", "prescriptivism versus descriptivism",
                ["prescriptivism versus descriptivism", "inclusive language", "a neologism", "linguistic change"],
                "\u00abPrescriptivisme face à descriptivisme\u00bb se dit \u00abprescriptivism versus descriptivism\u00bb.")
l.add_mcq_vocab("Comment dit-on \u00abun néologisme est ajouté au dictionnaire\u00bb en anglais ?", "a neologism is added to the dictionary",
                ["a neologism is added to the dictionary", "a living language evolves with use", "to generate resistance", "inclusive language"],
                "\u00abUn néologisme est ajouté au dictionnaire\u00bb se dit \u00aba neologism is added to the dictionary\u00bb.")
l.add_fill("Le descriptivisme se concentre à documenter comment les gens parlent réellement, pas à dicter comment ils ___ parler.", "devraient",
           ["devraient", "peuvent", "veulent", "ont tendance à"],
           "Le descriptivisme décrit l'usage réel, sans dicter de normes sur comment on \u00abdevrait\u00bb parler.")
l.add_translate("Traduis avec précision : \u00abA living language evolves with use, whether we like it or not.\u00bb",
                 "Une langue vivante évolue avec l'usage, qu'on le veuille ou non.",
                 ["Une langue vivante évolue avec l'usage, même si elle ne change pas.", "Une langue morte évolue avec l'usage, qu'on le veuille ou non.", "Une langue vivante évolue sans usage, qu'on le veuille ou non."],
                 "\u00abWhether we like it or not\u00bb se traduit idiomatiquement par \u00abqu'on le veuille ou non\u00bb.")
l.add_arrange("Remets dans l'ordre : [nécessairement / implique / n' / pas / une position / politique / un argument]",
              "Un argument n'implique pas nécessairement une position politique",
              "Sujet + négation + \u00abimplique pas nécessairement\u00bb + objet.")
l.add_writing("Écris en français 55-75 mots présentant de façon équilibrée deux positions sur un changement linguistique actuel (réel ou inventé), sans prendre parti explicitement, en distinguant description et jugement.",
              ["d'un côté", "de l'autre", "sans nécessairement"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out7_fr.txt")
