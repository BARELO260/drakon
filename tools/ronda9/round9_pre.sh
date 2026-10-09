#!/bin/bash
# Pasos 1-3 de la ronda 9 sobre una copia de la base (ronda 8 final): ejercicios EN, rangos/HTML, validador
set -e
D=${1:-/home/claude/drakon}
node /home/claude/add_en_skills.js "$D"
python3 - "$D" <<'PY'
import sys
D=sys.argv[1]
def sub(path,a,b,n):
    t=open(path,encoding='utf8').read();c=t.count(a);assert c==n,(path,a,c)
    open(path,'w',encoding='utf8').write(t.replace(a,b))
sub(D+'/docs/js/lessons-data/fr.js',"Écris en français 20 à 30 mots avec au moins trois questions","Écris en français 20-30 mots avec au moins trois questions",1)
sub(D+'/docs/js/lessons-data/fr.js',"Écris en français 20 à 30 mots sur les objets","Écris en français 20-30 mots sur les objets",1)
sub(D+'/docs/js/lessons-data/en.js',"always (100%) > usually > often > sometimes > rarely > never (0%)","always (100%), usually, often, sometimes, rarely, never (0%), de más a menos frecuente",1)
p=D+'/tools/validate_lessons.js';t=open(p,encoding='utf8').read()
old="if (!m) add('INFO', lang, L, n, 'PROD_NO_RANGE'"
assert t.count(old)==1
open(p,'w',encoding='utf8').write(t.replace(old,"if (!m && !/m[ií]nimo\\s+\\d+/i.test(String(q))) add('INFO', lang, L, n, 'PROD_NO_RANGE'"))
PY
python3 - "$D" <<'PY'
import sys
D=sys.argv[1]
p=D+'/docs/js/lessons-data/en.js'
t=open(p,encoding='utf8').read()
R=[
('estas dos frases? A) \\"I have eaten sushi.\\" B) \\"I ate sushi yesterday.\\"','estas dos frases? (1) \\"I have eaten sushi.\\" (2) \\"I ate sushi yesterday.\\"'),
('["A habla de experiencia de vida; B de cuándo ocurrió exactamente.","A es más formal que B.","B es incorrecto en inglés.","No hay diferencia real."]','["La 1 habla de experiencia de vida; la 2, de cuándo ocurrió exactamente.","La 1 es más formal que la 2.","La 2 es incorrecta en inglés.","No hay diferencia real."]'),
('Present perfect (A) = experiencia de vida, sin tiempo específico. Past simple (B) = momento concreto','Present perfect (1) = experiencia de vida, sin tiempo específico. Past simple (2) = momento concreto'),
('estas frases? A) \\"If it rains, I\'ll stay home.\\" B) \\"If it rained, I would stay home.\\"','estas frases? (1) \\"If it rains, I\'ll stay home.\\" (2) \\"If it rained, I would stay home.\\"'),
('["A es una situación real posible; B es una hipótesis imaginaria.","A es pasado y B es futuro.","A es más formal que B.","No hay diferencia real en inglés moderno."]','["La 1 es una situación real posible; la 2, una hipótesis imaginaria.","La 1 es pasado y la 2 es futuro.","La 1 es más formal que la 2.","No hay diferencia real en inglés moderno."]')]
for a,b in R:
    assert t.count(a)==1,(a,t.count(a))
    t=t.replace(a,b)
open(p,'w',encoding='utf8').write(t)
PY
python3 - "$D" <<'PY'
import sys
D=sys.argv[1]
def sub(f,a,b,n=1):
    p=D+'/docs/js/lessons-data/'+f
    t=open(p,encoding='utf8').read();c=t.count(a);assert c==n,(f,a,c)
    open(p,'w',encoding='utf8').write(t.replace(a,b))
Q='¿Cuál es la principal diferencia con las question tags del inglés?'
sub('fr.js',Q,'¿Cómo se comportan las coletillas de confirmación en francés (n\'est-ce pas, non, hein)?')
sub('de.js',Q,'¿Cómo se comportan las coletillas de confirmación en alemán (nicht wahr?, oder?)?')
sub('it.js',Q,'¿Cómo se comportan las coletillas de confirmación en italiano (vero?, no?, giusto?)?')
sub('pt.js',Q,'¿Cómo se comportan las coletillas de confirmación en portugués (não é?, né?, certo?)?')
sub('fr.js','a diferencia del español que también usa \\"tener\\" pero del inglés que usa \\"to be\\".','igual que en español, y no con \\"être\\" (ser/estar).')
sub('de.js','El alemán sí usa \\"sein\\" para la edad, como el inglés.','El alemán sí usa \\"sein\\" para la edad, a diferencia del español.')
sub('de.js','el alemán sí usa \\"sein\\" (ser/estar) para la edad, igual que el inglés.','el alemán sí usa \\"sein\\" (ser/estar) para la edad (literalmente «soy 20 años viejo»).')
sub('de.js','En alemán, igual que en inglés, la edad se expresa con','En alemán, a diferencia del español, la edad se expresa con')
PY
