import sys
sys.path.insert(0, "/home/claude/gen")
from lesson_gen import LessonBuilder, build_bank

lessons = []

# ── A1: L'heure et les moments de la journée ───────────
l = LessonBuilder("fr_a1_time_parts_of_day", "A1", "L'heure et les moments de la journée", "🕐", 38,
                   "Apprends à dire l'heure et les moments de la journée avec des prépositions de temps.")
time_v = [
    ("le matin", "the morning"), ("l'après-midi", "the afternoon"), ("le soir/la nuit", "the night"),
    ("midi", "noon"), ("minuit", "midnight"), ("pile", "o'clock/sharp"),
]
for t, e in time_v:
    l.add_vocab(t, e)
l.add_grammar("« Quelle heure est-il ? » + prépositions de temps", "Pour demander l'heure, on dit « Quelle heure est-il ? » ; pour répondre, « il est une heure » (singulier) ou « il est + nombre + heures » (pluriel), avec « du matin/de l'après-midi/du soir » pour préciser le moment.", "Il est trois heures de l'après-midi. / Il est une heure pile du matin.")
pool_en = [e for _, e in time_v]
l.add_mcq_vocab("Comment dit-on « minuit » en anglais ?", "midnight", pool_en,
                "« Minuit » se dit « midnight » en anglais.")
l.add_mcq_vocab("Comment dit-on « pile » en anglais ?", "o'clock/sharp", pool_en,
                "« Pile » se dit « o'clock » ou « sharp » en anglais.")
l.add_fill("Il ___ trois heures de l'après-midi.", "est", ["est", "a", "sont", "fait"],
           "On utilise toujours « il est » pour l'heure, même au pluriel : « il est trois heures ».")
l.add_translate("Traduis : « It's one o'clock in the morning. »", "Il est une heure du matin.",
                 ["Il est une heures du matin.", "Il est deux heures du matin.", "Il est une heure de l'après-midi."],
                 "Avec « une heure » (singulier), on n'ajoute pas de « s » à « heure ».")
l.add_arrange("Remets dans l'ordre : [après-midi / quatre / il / heures / est / de l']", "Il est quatre heures de l'après-midi",
              "Sujet + verbe + nombre + nom + préposition + moment de la journée.")
l.add_writing("Décris en 20-30 mots ta routine quotidienne en mentionnant des heures précises, en utilisant « il est » et « du matin/de l'après-midi/du soir ».",
              ["il est", "du matin", "de l'après-midi"])
lessons.append(l)

# ── A2: À la banque : ouvrir un compte ─────────────────
l = LessonBuilder("fr_a2_bank_open_account", "A2", "À la banque : ouvrir un compte", "🏦", 48,
                   "Apprends le vocabulaire bancaire de base et à utiliser « pouvoir » pour la possibilité et la permission.")
bank = [
    ("le compte bancaire", "the bank account"), ("le distributeur automatique", "the ATM"),
    ("retirer de l'argent", "to withdraw money"), ("déposer de l'argent", "to deposit money"),
    ("la carte de débit", "the debit card"), ("le solde", "the balance"),
]
for t, e in bank:
    l.add_vocab(t, e)
l.add_grammar("« Pouvoir » + infinitif pour la possibilité et la permission", "« Pouvoir » + infinitif exprime la capacité, la possibilité ou la permission, selon le contexte.", "Est-ce que je peux ouvrir un compte ici ? / Tu peux retirer de l'argent à n'importe quel distributeur.")
pool_en = [e for _, e in bank]
l.add_mcq_vocab("Comment dit-on « retirer de l'argent » en anglais ?", "to withdraw money", pool_en,
                "« Retirer de l'argent » se dit « to withdraw money » en anglais.")
l.add_mcq_vocab("Comment dit-on « le solde » en anglais ?", "the balance", pool_en,
                "« Solde » se dit « balance » en anglais.")
l.add_fill("Est-ce que je ___ ouvrir un compte ici, s'il vous plaît ?", "peux", ["peux", "peut", "pouvez", "pouvons"],
           "On utilise « peux » à la première personne pour demander une permission : « est-ce que je peux ».")
l.add_translate("Traduis : « You can withdraw money at any ATM. »", "Tu peux retirer de l'argent à n'importe quel distributeur.",
                 ["Tu peux déposer de l'argent à n'importe quel distributeur.", "Tu dois retirer de l'argent à n'importe quel distributeur.", "Tu peux retirer de l'argent à n'importe quelle banque."],
                 "« You can withdraw » = « tu peux retirer », avec « pouvoir » + infinitif.")
l.add_arrange("Remets dans l'ordre : [solde / consulter / veux / mon / je]", "Je veux consulter mon solde",
              "Sujet + verbe + infinitif + objet possessif + nom.")
l.add_speaking("Décris en 40-60 mots comment tu ouvrirais un compte bancaire, en utilisant « pouvoir » pour demander une permission ou exprimer une possibilité.",
               ["je peux", "tu peux", "compte"])
lessons.append(l)

# ── B1: Voyager en train et en avion : retards et changements ──
l = LessonBuilder("fr_b1_train_plane_travel", "B1", "Voyager en train et en avion : retards et changements", "🚄", 62,
                   "Apprends le vocabulaire des longs voyages et à utiliser « bien que » et « même si ».")
travel_l = [
    ("le retard", "the delay"), ("rater le vol/le train", "to miss the flight/train"),
    ("faire une escale", "to make a layover/stopover"), ("le quai", "the platform"),
    ("annuler un vol", "to cancel a flight"), ("la place côté fenêtre/couloir", "the window/aisle seat"),
]
for t, e in travel_l:
    l.add_vocab(t, e)
l.add_grammar("« Bien que » + subjonctif et « même si » + indicatif", "« Bien que » exige toujours le subjonctif, même pour un fait réel ; « même si » (even if) exprime une concession réelle ou hypothétique avec l'indicatif.", "Bien que le train soit arrivé en retard, j'ai eu mon vol. / Même si le vol est annulé, nous avons une autre option.")
pool_en = [e for _, e in travel_l]
l.add_mcq_vocab("Comment dit-on « faire une escale » en anglais ?", "to make a layover/stopover", pool_en,
                "« Faire une escale » se dit « to make a layover » ou « stopover » en anglais.")
l.add_mcq_vocab("Comment dit-on « le quai » en anglais ?", "the platform", pool_en,
                "« Quai » se dit « platform » en anglais.")
l.add_fill("Bien que le train ___ en retard, j'ai eu mon vol.", "soit arrivé", ["soit arrivé", "est arrivé", "arrivait", "arrivera"],
           "« Bien que » exige toujours le subjonctif, même pour un fait réel : « bien que... soit arrivé ».")
l.add_translate("Traduis : « Even if the flight is cancelled, we have another option. »", "Même si le vol est annulé, nous avons une autre option.",
                 ["Bien que le vol est annulé, nous avons une autre option.", "Même si le vol soit annulé, nous avons une autre option.", "Même si le train est annulé, nous avons une autre option."],
                 "« Even if » = « même si », suivi de l'indicatif : « même si le vol est annulé ».")
l.add_arrange("Remets dans l'ordre : [fenêtre / préfère / place / la / côté / je]", "Je préfère la place côté fenêtre",
              "Sujet + verbe + article + nom + préposition + complément.")
l.add_writing("Écris 45-65 mots sur un voyage en train ou en avion avec des imprévus, en utilisant « bien que » et « même si » au moins une fois chacun.",
              ["bien que", "même si", "retard"])
lessons.append(l)

# ── B2: L'économie collaborative et la consommation responsable ──
l = LessonBuilder("fr_b2_sharing_economy_conscious_consumption", "B2", "L'économie collaborative et la consommation responsable", "♻️", 84,
                   "Parle d'économie collaborative en utilisant le futur et le conditionnel de probabilité.")
sharing = [
    ("l'économie collaborative", "the sharing economy"), ("louer plutôt qu'acheter", "to rent instead of buying"),
    ("la consommation responsable", "conscious consumption"), ("partager des ressources", "to share resources"),
    ("l'obsolescence programmée", "planned obsolescence"), ("réduire le gaspillage", "to reduce waste"),
]
for t, e in sharing:
    l.add_vocab(t, e)
l.add_grammar("Le futur et le conditionnel de probabilité", "Le futur simple peut exprimer une conjecture sur le présent (« il sera dix heures ») ; le conditionnel simple exprime une conjecture sur le passé (« il serait dix heures quand il est arrivé »).", "Ce modèle aura environ cinq ans d'obsolescence programmée. / Avec cette consommation, ils dépenseraient moins de ressources que prévu.")
pool_en = [e for _, e in sharing]
l.add_mcq_vocab("Comment dit-on « louer plutôt qu'acheter » en anglais ?", "to rent instead of buying", pool_en,
                "« Louer plutôt qu'acheter » se dit « to rent instead of buying » en anglais.")
l.add_mcq_vocab("Comment dit-on « l'obsolescence programmée » en anglais ?", "planned obsolescence", pool_en,
                "« Obsolescence programmée » se dit « planned obsolescence » en anglais.")
l.add_fill("Ce modèle ___ environ cinq ans d'obsolescence programmée.", "aura", ["aura", "a", "avait", "aurait"],
           "Le futur de probabilité exprime une conjecture sur le présent : « aura environ cinq ans ».")
l.add_translate("Traduis avec conditionnel de probabilité : « With that consumption, they would spend fewer resources than they thought. »",
                 "Avec cette consommation, ils dépenseraient moins de ressources que prévu.",
                 ["Avec cette consommation, ils dépenseront moins de ressources que prévu.", "Avec cette consommation, ils dépenseraient plus de ressources que prévu.", "Avec cette consommation, ils dépenseraient moins d'argent que prévu."],
                 "Le conditionnel de probabilité « dépenseraient » exprime une conjecture sur une situation hypothétique.")
l.add_arrange("Remets dans l'ordre : [gaspillage / devons / le / réduire / nous]", "Nous devons réduire le gaspillage",
              "Sujet + verbe modal + infinitif + article + nom.")
l.add_writing("Écris 55-75 mots sur l'économie collaborative et la consommation responsable, en utilisant au moins un futur et un conditionnel de probabilité.",
              ["aura", "seraient", "consommation responsable"])
lessons.append(l)

# ── C1: Le langage non verbal et la communication interculturelle ──
l = LessonBuilder("fr_c1_nonverbal_intercultural_communication", "C1", "Le langage non verbal et la communication interculturelle", "🤝", 92,
                   "Analyse la communication non verbale en utilisant « comme si » + subjonctif/imparfait.")
nonverbal = [
    ("le langage corporel", "body language"), ("le contact visuel", "eye contact"),
    ("un geste mal interprété", "a misinterpreted gesture"), ("la proxémique (distance personnelle)", "proxemics (personal space)"),
    ("un signal culturel", "a cultural cue"), ("le silence gênant", "awkward silence"),
]
for t, e in nonverbal:
    l.add_vocab(t, e)
l.add_grammar("« Comme si » + imparfait ou plus-que-parfait", "« Comme si » est toujours suivi de l'imparfait ou du plus-que-parfait de l'indicatif (jamais du subjonctif en français), même pour une comparaison au présent, car il décrit quelque chose d'hypothétique.", "Il a agi comme s'il comprenait le geste, alors qu'il ne le comprenait pas. / Elle a réagi comme si elle avait été offensée.")
pool_en = [e for _, e in nonverbal]
l.add_mcq_vocab("Comment dit-on « un geste mal interprété » en anglais ?", "a misinterpreted gesture", pool_en,
                "« Un geste mal interprété » se dit « a misinterpreted gesture » en anglais.")
l.add_mcq_vocab("Comment dit-on « la proxémique (distance personnelle) » en anglais ?", "proxemics (personal space)", pool_en,
                "« Proxémique » se dit « proxemics » en anglais.")
l.add_fill("Il a agi comme s'il ___ le geste, alors qu'il ne le comprenait pas.", "comprenait", ["comprenait", "comprend", "a compris", "comprendra"],
           "« Comme si » est suivi de l'imparfait pour une comparaison au présent : « comme s'il comprenait ».")
l.add_translate("Traduis : « She reacted as if she had been offended. »", "Elle a réagi comme si elle avait été offensée.",
                 ["Elle a réagi comme si elle était offensée.", "Elle a réagi comme si elle avait été invitée.", "Elle a réagi comme si elle a été offensée."],
                 "« As if she had been offended » se traduit avec le plus-que-parfait : « comme si elle avait été offensée ».")
l.add_arrange("Remets dans l'ordre : [cultures / varie / entre / le contact visuel]", "Le contact visuel varie entre cultures",
              "Sujet + verbe + préposition + complément.")
l.add_writing("Écris 55-75 mots sur un malentendu interculturel lié au langage non verbal, en utilisant au moins deux structures avec « comme si ».",
              ["comme si", "langage corporel", "geste"])
lessons.append(l)

# ── C2: L'incertitude et le langage scientifique ───────
l = LessonBuilder("fr_c2_scientific_hedging_uncertainty", "C2", "L'incertitude et le langage scientifique", "🔬", 100,
                   "Analyse le langage scientifique en utilisant des expressions de nuance épistémique (hedging).")
hedge = [
    ("l'incertitude statistique", "statistical uncertainty"), ("une marge d'erreur", "a margin of error"),
    ("une corrélation n'implique pas la causalité", "correlation does not imply causation"), ("les résultats préliminaires", "preliminary results"),
    ("une hypothèse non confirmée", "an unconfirmed hypothesis"), ("nuancer une affirmation", "to hedge/qualify a claim"),
]
for t, e in hedge:
    l.add_vocab(t, e)
l.add_grammar("Expressions de nuance épistémique (hedging)", "Des expressions comme « on pourrait dire que », « il n'est pas absurde de penser que » ou « les données suggèrent, sans confirmer, que » nuancent le degré de certitude d'une affirmation scientifique, évitant les généralisations excessives.", "On pourrait dire qu'il existe une tendance, bien que les données soient préliminaires. / Les résultats suggèrent, sans confirmer, un lien de causalité.")
pool_en = [e for _, e in hedge]
l.add_mcq_vocab("Comment dit-on « une marge d'erreur » en anglais ?", "a margin of error", pool_en,
                "« Une marge d'erreur » se dit « a margin of error » en anglais.")
l.add_mcq_vocab("Comment dit-on « une hypothèse non confirmée » en anglais ?", "an unconfirmed hypothesis", pool_en,
                "« Une hypothèse non confirmée » se dit « an unconfirmed hypothesis » en anglais.")
l.add_fill("On ___ dire qu'il existe une tendance, bien que les données soient préliminaires.", "pourrait", ["pourrait", "peut", "doit", "va"],
           "« On pourrait dire que » est une expression fixe de nuance épistémique qui adoucit une affirmation.")
l.add_translate("Traduis avec précision : « The results suggest, but do not confirm, a causal relationship. »",
                 "Les résultats suggèrent, sans confirmer, un lien de causalité.",
                 ["Les résultats confirment, sans suggérer, un lien de causalité.", "Les résultats suggèrent, sans confirmer, une corrélation statistique.", "Les résultats suggèrent, en confirmant, un lien de causalité."],
                 "« Suggest, but do not confirm » se traduit par « suggèrent, sans confirmer », nuançant la certitude.")
l.add_arrange("Remets dans l'ordre : [implique / corrélation / pas / causalité / une / ne]", "Une corrélation n'implique pas causalité",
              "Article + nom + négation + verbe + nom.")
l.add_writing("Écris 55-75 mots analysant une étude scientifique (réelle ou inventée) aux résultats préliminaires, en utilisant au moins deux expressions de nuance épistémique.",
              ["on pourrait dire que", "les données suggèrent", "incertitude"])
lessons.append(l)

build_bank(lessons, "/home/claude/gen/out13_fr.txt")
