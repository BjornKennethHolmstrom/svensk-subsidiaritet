/**
 * Institutional Necessity Review — schema v2.
 * v2 separates functions (what must work) from forms (how it is organised),
 * treats the current arrangement as one of the alternatives with identical questions,
 * records per-function coverage for every alternative, and adds evaluation criteria
 * and a closing reflection. Schema v1 drafts are migrated on import.
 * UI and report languages are independent of the persisted data schema.
 * No networking or external dependencies; no automatic political judgments.
 */
import { necessityI18n, languageOf } from './i18n.mjs';
export const SCHEMA_VERSION = 2;

// Persisted enum values are stable and language-neutral.
export const constraintKinds = ['real', 'capacity', 'legal', 'financial', 'coordination', 'political', 'norm', 'unknown'].map(value => ({ value }));
export const evidenceStatuses = ['unknown', 'indication', 'supported', 'challenged'].map(value => ({ value }));
export const reversibilityOptions = ['Okänd', 'Hög', 'Delvis', 'Låg']; // stored values kept from v1
export const necessityLevels = ['unknown', 'necessary', 'conditional', 'dispensable'];
export const coverageLevels = ['unknown', 'provided', 'partial', 'missing'];
export const alternativeKinds = ['current', 'unknown', 'improve', 'subsidiarity', 'polycentric', 'cooperation', 'other'];
export const selectableKinds = alternativeKinds.filter(k => k !== 'current');
export const LIMITS = { functions: 20, constraints: 30, alternatives: 12 };

const TOP_FIELDS = ['statement', 'origin', 'context', 'affected', 'criteria', 'strongestDefense', 'noChange'];
const FUNCTION_TEXT = ['name', 'beneficiaries', 'consequence', 'form', 'reason'];
const ALT_TEXT = ['mechanism', 'preserves', 'needs', 'harms', 'uncertainties', 'evidence', 'authority'];
const EXPERIMENT_KEYS = ['question', 'approach', 'metrics', 'guardrails', 'stopRule', 'participants', 'mandate', 'duration', 'interpretation'];
const REFLECTION_KEYS = ['position', 'disagreement', 'missing', 'next', 'reviewDate'];
// v1 had no alternative types; its default first alternative was an improvement of the status quo.
const LEGACY_IMPROVE_NAMES = ['Behåll och förbättra nuläget', 'Keep and improve the current system'];

let counter = 0;
const uid = (prefix) => `${prefix}-${Date.now().toString(36)}-${(++counter).toString(36)}`;
const lex = (language = 'sv') => necessityI18n[languageOf(language)];
const clean = (v) => String(v || '').replace(/\r/g, '').trim();
const string = (v, max = 6000) => typeof v === 'string' ? v.slice(0, max) : '';
const pick = (v, list, fallback) => list.includes(v) ? v : fallback;
const isObject = (v) => !!v && typeof v === 'object' && !Array.isArray(v);

export function newFunction() {
  return { id: uid('f'), name: '', beneficiaries: '', consequence: '', form: '', necessity: 'unknown', reason: '' };
}
export function newCoverage() {
  return { status: 'unknown', reason: '' };
}
export function newConstraint() {
  return { id: uid('b'), description: '', kind: 'unknown', status: 'unknown', evidence: '', source: '', whoCanChange: '', conditions: '' };
}
export function newAlternative(name = lex().defaultAlternatives[2], kind = 'unknown', functions = []) {
  return {
    id: uid('a'), name, kind,
    mechanism: '', preserves: '', needs: '', harms: '', uncertainties: '', evidence: '', authority: '', reversibility: 'Okänd',
    coverage: Object.fromEntries(functions.map(f => [f.id, newCoverage()]))
  };
}

/** Keep the invariant: every alternative has exactly one coverage entry per function. */
export function ensureCoverage(draft) {
  for (const a of draft.alternatives) {
    const next = {};
    for (const f of draft.functions) next[f.id] = isObject(a.coverage?.[f.id]) ? a.coverage[f.id] : newCoverage();
    a.coverage = next;
  }
  return draft;
}

export function newDraft(language = 'sv') {
  const defaults = lex(language).defaultAlternatives;
  const functions = [newFunction()];
  return {
    version: SCHEMA_VERSION,
    statement: '', origin: '', context: '', affected: '', criteria: '', strongestDefense: '', noChange: '',
    functions,
    constraints: [newConstraint()],
    alternatives: [newAlternative(defaults[0], 'current', functions), newAlternative(defaults[1], 'unknown', functions)],
    experiment: Object.fromEntries(EXPERIMENT_KEYS.map(k => [k, ''])),
    reflection: Object.fromEntries(REFLECTION_KEYS.map(k => [k, '']))
  };
}

/** True when nothing has been entered, so default names may follow a language switch. */
export function isPristine(draft, language = 'sv') {
  const names = lex(language).defaultAlternatives;
  return TOP_FIELDS.every(k => !clean(draft[k]))
    && draft.functions.every(f => !clean(f.name))
    && draft.alternatives.length === 2
    && draft.alternatives.every((a, n) => a.name === names[n] && ALT_TEXT.every(k => !clean(a[k])));
}

export function exampleDraft(language = 'sv') {
  const x = newDraft(language);
  const e = lex(language).example;
  for (const key of TOP_FIELDS) x[key] = e[key];
  x.functions = e.functions.map(([name, beneficiaries, consequence, form, necessity, reason]) => ({
    ...newFunction(), name, beneficiaries, consequence, form, necessity, reason
  }));
  x.constraints = e.constraints.map(([description, kind, status, whoCanChange, conditions]) => ({
    ...newConstraint(), description, kind, status, whoCanChange, conditions
  }));
  x.alternatives = e.alternatives.map(([name, kind, mechanism, preserves, needs, harms, uncertainties, authority, reversibility, coverage]) => ({
    ...newAlternative(name, kind), mechanism, preserves, needs, harms, uncertainties, authority, reversibility,
    coverage: Object.fromEntries(x.functions.map((f, n) => [f.id, { status: coverage[n][0], reason: coverage[n][1] }]))
  }));
  EXPERIMENT_KEYS.forEach((key, n) => { x.experiment[key] = e.experiment[n]; });
  REFLECTION_KEYS.forEach((key, n) => { x.reflection[key] = e.reflection[n]; });
  return x;
}

function normalizeFunction(f) {
  const out = { id: uid('f'), necessity: pick(f?.necessity, necessityLevels, 'unknown') };
  for (const k of FUNCTION_TEXT) out[k] = string(f?.[k], k === 'name' ? 300 : 6000);
  return out;
}
function normalizeConstraint(c) {
  return {
    id: uid('b'), description: string(c?.description),
    kind: constraintKinds.some(k => k.value === c?.kind) ? c.kind : 'unknown',
    status: evidenceStatuses.some(s => s.value === c?.status) ? c.status : 'unknown',
    evidence: string(c?.evidence), source: string(c?.source),
    whoCanChange: string(c?.whoCanChange), conditions: string(c?.conditions)
  };
}
function normalizeAlternative(a, version, idMap) {
  const name = string(a?.name, 160);
  const kind = version === 1
    ? (LEGACY_IMPROVE_NAMES.includes(name) ? 'improve' : 'unknown')
    : pick(a?.kind, alternativeKinds, 'unknown');
  const out = { id: uid('a'), name, kind, reversibility: reversibilityOptions.includes(a?.reversibility) ? a.reversibility : 'Okänd', coverage: {} };
  for (const k of ALT_TEXT) out[k] = string(a?.[k]);
  if (isObject(a?.coverage)) {
    for (const [oldId, c] of Object.entries(a.coverage)) {
      if (!idMap.has(oldId) || !isObject(c)) continue;
      out.coverage[idMap.get(oldId)] = { status: pick(c.status, coverageLevels, 'unknown'), reason: string(c.reason, 2000) };
    }
  }
  return out;
}

/** Validate structure, bound input sizes and migrate schema v1. Throws coded errors. */
export function importDraft(json, language = 'sv') {
  const parsed = typeof json === 'string' ? JSON.parse(json) : json;
  if (!isObject(parsed)) throw Error('INVALID_STRUCTURE');
  if (parsed.version !== 1 && parsed.version !== SCHEMA_VERSION) throw Error('UNSUPPORTED_VERSION');
  const defaults = lex(language).defaultAlternatives;
  const data = newDraft(language);
  for (const key of TOP_FIELDS) data[key] = string(parsed[key]);

  const idMap = new Map();
  data.functions = (Array.isArray(parsed.functions) ? parsed.functions.slice(0, LIMITS.functions) : []).map(f => {
    const n = normalizeFunction(f);
    if (typeof f?.id === 'string') idMap.set(f.id, n.id);
    return n;
  });
  if (!data.functions.length) data.functions.push(newFunction());

  data.constraints = Array.isArray(parsed.constraints) ? parsed.constraints.slice(0, LIMITS.constraints).map(normalizeConstraint) : [];
  if (!data.constraints.length) data.constraints.push(newConstraint());

  let alts = Array.isArray(parsed.alternatives) ? parsed.alternatives.slice(0, LIMITS.alternatives).map(a => normalizeAlternative(a, parsed.version, idMap)) : [];
  if (parsed.version === 1) {
    // v1 described the status quo in a separate step; it becomes the first alternative.
    const current = newAlternative(defaults[0], 'current');
    current.preserves = string(parsed.currentBenefit);
    current.harms = string(parsed.currentCost);
    alts.unshift(current);
  }
  let current = alts.find(a => a.kind === 'current') || newAlternative(defaults[0], 'current');
  alts = alts.filter(a => a !== current).map(a => a.kind === 'current' ? { ...a, kind: 'unknown' } : a);
  data.alternatives = [current, ...alts].slice(0, LIMITS.alternatives);
  while (data.alternatives.length < 2) data.alternatives.push(newAlternative(defaults[1]));

  const exp = isObject(parsed.experiment) ? parsed.experiment : {};
  for (const key of EXPERIMENT_KEYS) data.experiment[key] = string(exp[key]);
  const ref = isObject(parsed.reflection) ? parsed.reflection : {};
  for (const key of REFLECTION_KEYS) data.reflection[key] = string(ref[key], key === 'reviewDate' ? 40 : 6000);
  return ensureCoverage(data);
}

/** Prompts about missing reasoning, never about truth or desirability. Grouped by step index. */
export function reviewWarnings(draft, language = 'sv') {
  const w = lex(language).warnings;
  const out = [];
  const add = (step, key, n) => out.push({ step, text: typeof w[key] === 'function' ? w[key](n) : w[key] });

  if (!clean(draft.statement)) add(0, 'statement');
  if (!clean(draft.origin)) add(0, 'origin');
  if (!clean(draft.affected)) add(0, 'affected');
  if (!clean(draft.criteria)) add(0, 'criteria');
  if (!clean(draft.strongestDefense)) add(0, 'defense');

  const fns = draft.functions.filter(f => clean(f.name));
  if (!fns.length) add(1, 'noFunctions');
  const unjudged = fns.filter(f => f.necessity === 'unknown' || !clean(f.reason)).length;
  if (unjudged) add(1, 'functionJudgement', unjudged);
  if (fns.some(f => !clean(f.form))) add(1, 'functionForm');

  const described = draft.constraints.filter(c => clean(c.description));
  if (!described.length) add(2, 'noConstraint');
  if (described.some(c => c.status === 'supported' && !clean(c.source))) add(2, 'unsourced');
  if (described.some(c => !clean(c.whoCanChange))) add(2, 'noAuthority');

  const current = draft.alternatives.find(a => a.kind === 'current');
  if (!current || !clean(current.mechanism)) add(3, 'currentDescription');
  if (!draft.alternatives.some(a => a.kind !== 'current' && clean(a.mechanism))) add(3, 'noAlternative');
  if (draft.alternatives.some(a => clean(a.mechanism) && !clean(a.harms))) add(3, 'harms');
  const open = draft.alternatives.reduce((sum, a) => sum + fns.filter(f => {
    const c = a.coverage?.[f.id];
    return !c || c.status === 'unknown' || !clean(c.reason);
  }).length, 0);
  if (open) add(3, 'coverage', open);

  if (!clean(draft.experiment.guardrails)) add(4, 'guardrails');
  if (!clean(draft.experiment.stopRule)) add(4, 'stopRule');
  if (!clean(draft.reflection.disagreement) || !clean(draft.reflection.missing)) add(4, 'reflection');
  return out;
}

export function toMarkdown(draft, language = 'sv') {
  const lang = languageOf(language), t = lex(lang), f = t.fields, r = t.report;
  const d = importDraft({ ...draft, version: SCHEMA_VERSION }, lang);
  const show = (v) => clean(v) || r.notSpecified;
  const row = (label, v) => `**${label}:** ${show(v)}`;
  const item = (label, v) => `- ${label}: ${show(v)}`;
  const cell = (v) => clean(v).replace(/\s*\n\s*/g, ' ').replace(/\|/g, '\\|');
  const named = d.functions.map((fn, n) => ({ fn, n: n + 1 })).filter(x => clean(x.fn.name));

  const lines = [`# ${t.title}`, '', `> ${r.disclaimer}`, `> ${r.caveat}`, '', `## 1. ${r.sections[0]}`, ''];
  for (const k of TOP_FIELDS) lines.push(row(f[k], d[k]), '');

  lines.push(`## 2. ${r.sections[1]}`, '');
  for (const { fn, n } of named) {
    lines.push(`### F${n}. ${clean(fn.name)}`, '',
      item(f.beneficiaries, fn.beneficiaries), item(f.consequence, fn.consequence), item(f.form, fn.form),
      item(f.necessity, t.necessity[fn.necessity]), item(f.necessityReason, fn.reason), '');
  }
  if (!named.length) lines.push(r.noFunctions, '');

  lines.push(`## 3. ${r.sections[2]}`, '');
  const described = d.constraints.filter(c => clean(c.description));
  for (const c of described) {
    lines.push(`### ${clean(c.description)}`, '',
      item(f.kind, t.kinds[c.kind]?.[0] || t.kinds.unknown[0]), item(f.status, t.statuses[c.status] || t.statuses.unknown),
      item(f.constraintEvidence, c.evidence), item(f.source, c.source), item(f.whoCanChange, c.whoCanChange), item(f.conditions, c.conditions), '');
  }
  if (!described.length) lines.push(r.noConstraints, '');

  lines.push(`## 4. ${r.sections[3]}`, '');
  d.alternatives.forEach((a, n) => {
    lines.push(`### ${n + 1}. ${show(a.name)}`, '', item(f.altKind, t.altKinds[a.kind]));
    for (const k of ALT_TEXT) lines.push(item(f[k === 'evidence' ? 'altEvidence' : k], a[k]));
    lines.push(item(f.reversibility, t.reversibility[a.reversibility] ?? t.reversibility['Okänd']));
    for (const { fn, n: fnN } of named) {
      const c = a.coverage[fn.id];
      lines.push(`- F${fnN} ${clean(fn.name)}: ${t.coverage[c.status]}${clean(c.reason) ? ' – ' + clean(c.reason) : ''}`);
    }
    lines.push('');
  });
  if (named.length) {
    lines.push(`### ${r.matrixTitle}`, '',
      `| ${r.functionCol} | ${d.alternatives.map((a, n) => `${n + 1}. ${cell(a.name)}`).join(' | ')} |`,
      `|${' --- |'.repeat(d.alternatives.length + 1)}`,
      ...named.map(({ fn, n }) => `| F${n} ${cell(fn.name)} (${t.necessity[fn.necessity]}) | ${d.alternatives.map(a => t.coverage[a.coverage[fn.id].status]).join(' | ')} |`),
      '', r.matrixNote, '');
  }

  lines.push(`## 5. ${r.sections[4]}`, '');
  for (const k of EXPERIMENT_KEYS) lines.push(row(f[k], d.experiment[k]), '');

  lines.push(`## 6. ${r.sections[5]}`, '');
  for (const k of REFLECTION_KEYS) lines.push(row(f[k], d.reflection[k]), '');

  lines.push(`## 7. ${r.sections[6]}`, '');
  const flags = reviewWarnings(d, lang);
  lines.push(...(flags.length ? flags.map(x => `- (${t.steps[x.step]}) ${x.text}`) : [`- ${r.noWarnings}`]), '', '---', '', r.createdWith, r.noRanking);
  return lines.join('\n');
}
