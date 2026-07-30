#!/usr/bin/env python3
"""
Generador procedural de lecciones para Drakón.

Idea: yo (Claude) sigo escribiendo el contenido lingüístico real (listas de
vocabulario y frases con su traducción, que es lo único que de verdad
requiere criterio humano/lingüístico), pero delego en este script todo el
trabajo MECÁNICO que antes escribía a mano en cada ejercicio:

  - Elegir 3 distractores plausibles para cada pregunta de opción múltiple
    (mcq / fill / translate), sin duplicados, en posición aleatoria pero
    determinista (seed = id de la lección).
  - Generar 3 órdenes incorrectos distintos para los ejercicios "arrange"
    a partir de una frase correcta (en vez de inventarlos a mano).
  - Ensamblar el objeto de lección completo con el mismo formato/estilo
    exacto que ya usan es.js/en.js/fr.js/de.js/it.js/pt.js.
  - Validar en el momento (4 opciones, sin duplicados, índice en rango)
    para no depender de una segunda pasada de validate_lessons.js.

Esto no reemplaza mi criterio lingüístico (sigo escribiendo el vocabulario,
las frases y sus traducciones), pero elimina la parte repetitiva de
teclear cada bloque ["mcq", pregunta, [4 opciones], índice, explicación]
a mano, que es donde más tiempo se iba.
"""
import json
import random

def _esc(s):
    """Escapa comillas dobles para JS, igual que el resto del proyecto."""
    return str(s).replace('\\', '\\\\').replace('"', '\\"')

def _js_str(s):
    return '"' + _esc(s) + '"'

def _js_arr(items):
    return "[" + ", ".join(_js_str(i) for i in items) + "]"


class LessonBuilder:
    def __init__(self, lesson_id, level, title, emoji, xp, description):
        self.id = lesson_id
        self.level = level
        self.title = title
        self.emoji = emoji
        self.xp = xp
        self.description = description
        self.vocab = []      # [target, translation, note?]
        self.grammar = []    # [title, explanation, example]
        self.exercises = []  # list of ready ex tuples
        self.rng = random.Random(lesson_id)  # determinista por lección

    # ---- contenido de estudio ----
    def add_vocab(self, target, translation, note=None):
        entry = [target, translation] + ([note] if note else [])
        self.vocab.append(entry)
        return self

    def add_grammar(self, title, explanation, example):
        self.grammar.append([title, explanation, example])
        return self

    # ---- ejercicios mecánicos (procedurales) ----
    def add_mcq_vocab(self, question, correct_translation, pool, explanation):
        """Pregunta de opción múltiple: 'How do you say X?' con 3
        distractores elegidos al azar (determinista) de `pool`
        (traducciones de otras palabras del mismo banco de vocabulario)."""
        distractors = [w for w in pool if w != correct_translation]
        self.rng.shuffle(distractors)
        options = [correct_translation] + distractors[:3]
        if len(options) < 4:
            raise ValueError(f"{self.id}: pool insuficiente para mcq ({len(options)} opciones)")
        self.rng.shuffle(options)
        correct_idx = options.index(correct_translation)
        self._push_mcq("mcq", question, options, correct_idx, explanation)
        return self

    def add_fill(self, template, blank_word, distractor_pool, explanation):
        """`template` debe contener '___' donde va el hueco."""
        question = f"Completa: \u201c{template}\u201d"
        distractors = [w for w in distractor_pool if w != blank_word]
        self.rng.shuffle(distractors)
        options = [blank_word] + distractors[:3]
        if len(options) < 4:
            raise ValueError(f"{self.id}: pool insuficiente para fill ({len(options)} opciones)")
        self.rng.shuffle(options)
        correct_idx = options.index(blank_word)
        self._push_mcq("fill", question, options, correct_idx, explanation)
        return self

    def add_translate(self, question, correct_sentence, distractor_sentences, explanation):
        distractors = list(distractor_sentences)
        self.rng.shuffle(distractors)
        options = [correct_sentence] + distractors[:3]
        if len(options) < 4:
            raise ValueError(f"{self.id}: pool insuficiente para translate ({len(options)} opciones)")
        self.rng.shuffle(options)
        correct_idx = options.index(correct_sentence)
        self._push_mcq("translate", question, options, correct_idx, explanation)
        return self

    def add_arrange(self, question, correct_sentence, explanation):
        """Genera automáticamente 3 órdenes incorrectos distintos
        permutando las palabras de `correct_sentence`."""
        words = correct_sentence.split(" ")
        correct_str = " ".join(words)
        seen = {correct_str}
        wrongs = []
        attempts = 0
        while len(wrongs) < 3 and attempts < 200:
            attempts += 1
            shuffled = words[:]
            self.rng.shuffle(shuffled)
            s = " ".join(shuffled)
            if s not in seen:
                seen.add(s)
                wrongs.append(s)
        if len(wrongs) < 3:
            raise ValueError(f"{self.id}: no se pudieron generar 3 órdenes distintos para '{correct_sentence}'")
        options = [correct_str] + wrongs
        self.rng.shuffle(options)
        correct_idx = options.index(correct_str)
        self._push_mcq("arrange", question, options, correct_idx, explanation)
        return self

    def _push_mcq(self, kind, question, options, correct_idx, explanation):
        assert len(options) == 4, f"{self.id}: se esperaban 4 opciones, hay {len(options)}"
        assert len(set(options)) == 4, f"{self.id}: opciones duplicadas -> {options}"
        assert 0 <= correct_idx <= 3
        self.exercises.append((kind, question, options, correct_idx, explanation))

    # ---- ejercicios de producción (siguen requiriendo redacción humana) ----
    def add_writing(self, prompt, keywords, note=None, context=None):
        self.exercises.append(("writing", prompt, [], keywords, note, context))
        return self

    def add_speaking(self, prompt, keywords, note=None, context=None):
        self.exercises.append(("speaking", prompt, [], keywords, note, context))
        return self

    # ---- salida ----
    def to_js(self, indent="  "):
        lines = []
        lines.append(f'{indent}{{')
        lines.append(f'{indent}  id:{_js_str(self.id)}, level:{_js_str(self.level)}, title:{_js_str(self.title)}, emoji:{_js_str(self.emoji)}, xp:{self.xp},')
        lines.append(f'{indent}  description:{_js_str(self.description)},')
        lines.append(f'{indent}  study: {{')
        lines.append(f'{indent}    vocab: [')
        for v in self.vocab:
            lines.append(f'{indent}      {_js_arr(v)},')
        lines.append(f'{indent}    ],')
        if self.grammar:
            lines.append(f'{indent}    grammar: [')
            for g in self.grammar:
                lines.append(f'{indent}      {_js_arr(g)},')
            lines.append(f'{indent}    ]')
        lines.append(f'{indent}  }},')
        lines.append(f'{indent}  ex:[')
        for ex in self.exercises:
            kind = ex[0]
            if kind in ("writing", "speaking"):
                _, prompt, _empty, keywords, note, context = ex
                parts = [f'"{kind}"', _js_str(prompt), "[]", _js_arr(keywords)]
                if note:
                    parts.append(_js_str(note))
                if context:
                    parts.append(_js_str(context))
                lines.append(f'{indent}    [{",".join(parts)}],')
            else:
                _, question, options, correct_idx, explanation = ex
                lines.append(
                    f'{indent}    [{_js_str(kind)},{_js_str(question)},{_js_arr(options)},{correct_idx},{_js_str(explanation)}],'
                )
        lines.append(f'{indent}  ]')
        lines.append(f'{indent}}},')
        return "\n".join(lines)


def build_bank(lessons, out_path):
    """Escribe un bloque con varias lecciones (una lista de LessonBuilder)
    listo para insertarse antes del `];` final de un archivo lessons-data."""
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(l.to_js() for l in lessons))
        f.write("\n")
    print(f"OK: {out_path} ({len(lessons)} lecciones)")
