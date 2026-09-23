#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════
   tools/validate_lessons.js — Validador de los bancos de lecciones
   ═══════════════════════════════════════════════════════════════════
   Uso (desde la raíz del repo):   node tools/validate_lessons.js
          otra ruta:               node tools/validate_lessons.js docs/js
          ver todo el detalle:     node tools/validate_lessons.js --verbose
   Sin dependencias. Termina con código 1 si hay ERRORES (útil en CI).

   Carga los mismos archivos que index.html (js/lessons-data/*.js y
   js/situations-data.js) en un contexto aislado y revisa cada lección.

   ERROR = rompe el juego o enseña algo incorrecto → bloquea.
   WARN  = probable defecto de contenido → revisar.
   INFO  = solo informativo.
   ═══════════════════════════════════════════════════════════════════ */
const fs = require('fs'), vm = require('vm'), path = require('path');
const args = process.argv.slice(2);
const VERBOSE = args.includes('--verbose');
const ROOT = path.resolve(args.find(a => !a.startsWith('--')) || path.join(__dirname, '..', 'docs', 'js'));

const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
const bankFiles = fs.readdirSync(path.join(ROOT, 'lessons-data')).filter(f => f.endsWith('.js')).sort((a, b) => (a === 'en.js' ? -1 : b === 'en.js' ? 1 : a.localeCompare(b)));
bankFiles.forEach(f => load('lessons-data/' + f));
let sitOK = true; try { load('situations-data.js'); } catch (e) { sitOK = false; console.error('AVISO: situations-data.js no se pudo cargar:', e.message); }

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const SEL = new Set(['mcq', 'translate', 'fill', 'arrange', 'listen_mcq']), PROD = new Set(['writing', 'speaking']);
const issues = [];
const add = (sev, lang, where, n, code, msg) => issues.push({ sev, lang, where, n, code, msg });
const norm = s => String(s).trim().toLowerCase().replace(/\s+/g, ' ');
const strip = s => String(s).toLowerCase().replace(/[.,;:!?¡¿"“”„«»]/g, '');

/* Palabras muy frecuentes por idioma (para detectar respuestas en idioma equivocado) */
const SW = {
  EN: 'the an and is are was were to of on at for with you your i he she it we they this that have has not do does my what where how please can would like',
  ES: 'el la los las un una y es son de del en con por para que no lo se mi tu su yo tú qué dónde cómo muy más está estoy',
  FR: "le la les un une et est sont de du des en avec pour que ne pas je tu il elle nous vous ils suis très à au aux ce cette qu'",
  DE: 'der die das ein eine und ist sind von zu mit für ich du er sie es wir nicht auch sehr wie wo was den dem im ihr sich',
  IT: 'il lo la i gli le un una e è sono di del in con per che non io tu lui lei noi voi molto come dove cosa mi ti si',
  PT: 'o a os as um uma e é são de do da em com para que não eu tu ele ela nós você muito como onde está'
};
Object.keys(SW).forEach(k => SW[k] = new Set(SW[k].split(' ')));
const wordsOf = s => String(s).toLowerCase().replace(/[.,;:!?¡¿"“”„«»()\[\]]/g, ' ').replace(/(\w)'(\w)/g, "$1' $2").split(/\s+/).filter(Boolean);
const score = (t, L) => wordsOf(t).filter(w => SW[L].has(w)).length;
// Idioma dominante de un texto, o null si no hay evidencia clara
function dominant(t) { const sc = Object.keys(SW).map(L => [L, score(t, L)]).sort((a, b) => b[1] - a[1]); return sc[0][1] >= 2 && sc[0][1] > sc[1][1] ? sc[0][0] : null; }

const LETTER_REF = /\b(both|all|none|neither)\s+(of\s+)?(a|b|c|d|the\s+above|the\s+options)\b|\b(a|b|c)\s+(and|y|et|und|e)\s+(b|c|d)\s+(are|son|sont|sind|sono|são)\b|\btodas?\s+las\s+(anteriores|opciones)|\bninguna?\s+de\s+las\s+(anteriores|opciones)|\bopci[oó]n\s+[abcd]\b|\boption\s+[abcd]\b/i;
const HTMLCH = /[<>]|&(?!amp;|[a-z]+;|#\d+;)/;
const tokensOfBracket = q => { const m = q.match(/\[([^\]]+)\]/); return m ? m[1].split('/').flatMap(s => s.trim().split(/\s+/)).filter(Boolean) : null; };
const quoted = q => { const m = q.match(/[“"„«]\s*(.+?)\s*[”"“»]/); return m ? m[1] : null; };

function checkLesson(lang, l, seen, scope) {
  const L = `${scope}:${l.id}`;
  if (!l.id) add('ERROR', lang, L, null, 'NO_ID', 'lección sin id');
  else if (seen.has(l.id)) add('ERROR', lang, L, null, 'DUP_ID', 'id repetido');
  seen.add(l.id);
  if (scope === 'main' && !LEVELS.includes(l.level)) add('ERROR', lang, L, null, 'BAD_LEVEL', `level inválido: ${l.level}`);
  ['title', 'emoji', 'description'].forEach(k => { if (!l[k] || !String(l[k]).trim()) add('ERROR', lang, L, null, 'MISSING_' + k.toUpperCase(), `falta ${k}`); });
  if (typeof l.xp !== 'number' || l.xp <= 0) add('ERROR', lang, L, null, 'BAD_XP', `xp inválido: ${l.xp}`);
  if (!l.study) add('WARN', lang, L, null, 'NO_STUDY', 'sin apartado study');
  else {
    ['vocab', 'grammar'].forEach(k => {
      const arr = l.study[k];
      if (!Array.isArray(arr) || !arr.length) add('WARN', lang, L, null, 'STUDY_EMPTY_' + k.toUpperCase(), `study.${k} vacío`);
      else arr.forEach((e, i) => { if (!Array.isArray(e) || e.length < 2 || !String(e[0]).trim() || !String(e[1]).trim()) add('ERROR', lang, L, null, 'STUDY_ENTRY', `study.${k}[${i}] mal formado`); });
    });
  }
  if (!Array.isArray(l.ex) || !l.ex.length) { add('ERROR', lang, L, null, 'NO_EX', 'sin ejercicios'); return; }
  if (l.ex.length < 5) add('INFO', lang, L, null, 'FEW_EX', `solo ${l.ex.length} ejercicios`);
  const qSeen = new Map();
  l.ex.forEach((e, i) => {
    const n = i + 1;
    if (!Array.isArray(e)) { add('ERROR', lang, L, n, 'EX_NOT_ARRAY', 'ejercicio no es array'); return; }
    const [type, q, opts, corr, expl, cx] = e;
    if (!SEL.has(type) && !PROD.has(type)) { add('ERROR', lang, L, n, 'BAD_TYPE', `tipo desconocido: ${type}`); return; }
    if (typeof q !== 'string' || !q.trim()) add('ERROR', lang, L, n, 'NO_QUESTION', 'pregunta vacía');
    [q, expl, cx].forEach(t => { if (typeof t === 'string' && HTMLCH.test(t)) add('INFO', lang, L, n, 'HTML_CHARS', 'contiene < > o & (el motor usa innerHTML)'); });
    if (typeof q === 'string') { if (qSeen.has(norm(q))) add('WARN', lang, L, n, 'DUP_QUESTION', `pregunta idéntica al ejercicio ${qSeen.get(norm(q))}`); qSeen.set(norm(q), n); }
    if (PROD.has(type)) {
      if (!Array.isArray(opts) || opts.length !== 0) add('ERROR', lang, L, n, 'PROD_OPTS', 'writing/speaking: el 3er elemento debe ser []');
      if (!Array.isArray(corr) || !corr.length || corr.some(k => typeof k !== 'string' || !k.trim())) add('ERROR', lang, L, n, 'PROD_KEYWORDS', 'writing/speaking necesita array de palabras clave');
      if (typeof e[6] !== 'number') { const m = String(q).match(/(\d+)\s*[-–]\s*(\d+)/); if (!m) add('INFO', lang, L, n, 'PROD_NO_RANGE', 'la consigna no indica rango de palabras (el motor exigirá 25)'); }
      return;
    }
    if (typeof expl !== 'string' || !expl.trim()) add('ERROR', lang, L, n, 'NO_EXPL', 'explicación vacía');
    if (!Array.isArray(opts) || opts.length !== 4) { add('ERROR', lang, L, n, 'OPT_COUNT', `${Array.isArray(opts) ? opts.length : 'sin'} opciones (deben ser 4)`); return; }
    if (opts.some(o => typeof o !== 'string' || !o.trim())) { add('ERROR', lang, L, n, 'OPT_EMPTY', 'opción vacía o no-string'); return; }
    if (new Set(opts.map(norm)).size !== 4) add('ERROR', lang, L, n, 'OPT_DUP', 'opciones duplicadas (también si solo cambian mayúsculas: el alumno no puede distinguirlas)');
    if (!Number.isInteger(corr) || corr < 0 || corr > 3) { add('ERROR', lang, L, n, 'BAD_CORRECT', `índice correcto inválido: ${corr}`); return; }
    const c = opts[corr];
    if (type !== 'arrange') opts.forEach(o => { if (LETTER_REF.test(o)) add('ERROR', lang, L, n, 'LETTER_REF', `la opción "${o}" referencia otras opciones (el motor las baraja)`); });
    if (type === 'fill' && !/_{2,}/.test(q)) add('WARN', lang, L, n, 'FILL_NO_BLANK', 'fill sin hueco "___"');
    if (type === 'arrange') {
      const bt = tokensOfBracket(q);
      if (!bt) add('WARN', lang, L, n, 'ARRANGE_NO_BRACKET', 'arrange sin [palabras / ...] en la consigna');
      else if (bt.map(strip).sort().join('|') !== c.split(/\s+/).filter(Boolean).map(strip).sort().join('|'))
        add('ERROR', lang, L, n, 'ARRANGE_WORDS', `las palabras de la consigna [${bt.join(' / ')}] no coinciden con las fichas de la respuesta "${c}"`);
      if (/^(both|all|ambas|todas)\b/i.test(c) || /\b(both|all)\b.*\bcorrect\b/i.test(c)) add('ERROR', lang, L, n, 'ARRANGE_META_ANSWER', `la respuesta de un arrange debe ser una frase: "${c}"`);
      if (lang === 'DE' && c.split(/\s+/).length >= 3 && c === c.toLowerCase()) add('ERROR', lang, L, n, 'DE_ALL_LOWERCASE', `respuesta alemana toda en minúsculas (los sustantivos llevan mayúscula): "${c}"`);
      if (/-/.test((tokensOfBracket(q) || []).join(' ')) && !/-/.test(c)) add('WARN', lang, L, n, 'HYPHEN_LOST', `la consigna tiene palabras con guion pero la respuesta no: "${c}"`);
    }
    if (type === 'translate') {
      // Direcciones: banco EN traduce ES→EN; el resto traduce EN→idioma meta. La respuesta se lee con la voz del idioma meta.
      const dom = dominant(c); const Q = quoted(q);
      // Solo se marca cuando hay confusión inglés/alemán/otro; entre lenguas romances la heurística no es fiable
      const reliable = dom && ((lang !== 'EN' && dom === 'EN') || (lang === 'EN' && dom === 'ES'));
      if (reliable) add('ERROR', lang, L, n, 'TRANSLATE_WRONG_LANG', `la respuesta correcta parece ${dom} y se leerá con la voz de ${lang}: "${c}"`);
      else if (Q && lang !== 'EN' && dominant(Q) === lang && !dom && score(c, 'EN') >= 2) add('WARN', lang, L, n, 'TRANSLATE_SOURCE_IN_TARGET', `el enunciado ya está en el idioma meta; ¿debería ser un mcq "¿Qué significa…?" ? "${Q}"`);
    }
  });
}

const stats = {};
for (const [code, bank] of Object.entries(ctx.LESSON_BANKS || {})) {
  const seen = new Set(); bank.forEach(l => checkLesson(code, l, seen, 'main'));
  const t = new Map(); bank.forEach(l => { const k = norm(l.title); if (t.has(k)) add('WARN', code, 'main:' + l.id, null, 'DUP_TITLE', `título repetido con ${t.get(k)}`); else t.set(k, l.id); });
  stats[code] = { lecciones: bank.length, ejercicios: bank.reduce((a, l) => a + (l.ex || []).length, 0) };
}
if (sitOK) for (const [code, sits] of Object.entries(ctx.SITUATION_LESSON_BANKS || {})) {
  const seen = new Set(); let n = 0, ex = 0;
  for (const k of Object.keys(sits)) (sits[k] || []).forEach(l => { n++; ex += (l.ex || []).length; checkLesson(code, l, seen, 'sit/' + k); });
  stats[code + ' (situaciones)'] = { lecciones: n, ejercicios: ex };
}
// Paridad entre idiomas: los 5 bancos no-EN deben tener las mismas lecciones por nivel
const nonEN = Object.keys(ctx.LESSON_BANKS).filter(c => c !== 'EN');
const sig = c => LEVELS.map(lv => ctx.LESSON_BANKS[c].filter(l => l.level === lv).length).join('/');
if (new Set(nonEN.map(sig)).size > 1) add('WARN', '*', 'paridad', null, 'PARITY', 'los bancos no-EN no tienen las mismas lecciones por nivel: ' + nonEN.map(c => `${c}=${sig(c)}`).join(' '));

/* ── informe ── */
console.table(stats);
const by = {}; issues.forEach(i => { const k = i.sev + ' ' + i.code; by[k] = (by[k] || 0) + 1; });
const order = { ERROR: 0, WARN: 1, INFO: 2 };
Object.entries(by).sort((a, b) => order[a[0].split(' ')[0]] - order[b[0].split(' ')[0]] || b[1] - a[1]).forEach(([k, v]) => console.log(String(v).padStart(6), k));
const errs = issues.filter(i => i.sev === 'ERROR'), warns = issues.filter(i => i.sev === 'WARN');
(VERBOSE ? issues : errs.concat(warns).slice(0, 40)).forEach(i => console.log(`${i.sev.padEnd(5)} ${i.lang} ${i.where}${i.n ? ' #' + i.n : ''} [${i.code}] ${i.msg}`));
if (!VERBOSE && errs.length + warns.length > 40) console.log(`… (${errs.length + warns.length - 40} más; usa --verbose)`);
console.log(`\nRESULTADO: ${errs.length} errores, ${warns.length} avisos.`);
process.exit(errs.length ? 1 : 0);
