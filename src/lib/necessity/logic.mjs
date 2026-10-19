/**
 * Institutional Necessity Review — schema v1.
 * UI and report languages are independent of the persisted data schema.
 * No networking or external dependencies; no automatic political judgments.
 */
import { necessityI18n, languageOf } from './i18n.mjs';
export const SCHEMA_VERSION = 1;

// Persisted enum values are stable and compatible with version 0.1 drafts.
export const constraintKinds = ['real', 'capacity', 'legal', 'financial', 'coordination', 'political', 'norm', 'unknown'].map(value => ({ value }));
export const evidenceStatuses = ['unknown', 'indication', 'supported', 'challenged'].map(value => ({ value }));
export const reversibilityOptions = ['Okänd', 'Hög', 'Delvis', 'Låg'];

let counter = 0;
const uid = (prefix) => `${prefix}-${Date.now().toString(36)}-${(++counter).toString(36)}`;
const lex = (language = 'sv') => necessityI18n[languageOf(language)];

export function newConstraint() {
  return { id: uid('b'), description: '', kind: 'unknown', status: 'unknown', evidence: '', source: '', whoCanChange: '', conditions: '' };
}
export function newAlternative(name = lex().defaultAlternatives[2]) {
  return { id: uid('a'), name, mechanism: '', preserves: '', needs: '', harms: '', uncertainties: '', evidence: '', authority: '', reversibility: 'Okänd' };
}
export function newDraft(language = 'sv') {
  const defaults = lex(language).defaultAlternatives;
  return {
    version: SCHEMA_VERSION,
    statement: '', origin: '', context: '', affected: '',
    currentBenefit: '', currentCost: '', noChange: '', strongestDefense: '',
    constraints: [newConstraint()],
    alternatives: [newAlternative(defaults[0]), newAlternative(defaults[1])],
    experiment: { question: '', approach: '', metrics: '', guardrails: '', stopRule: '', participants: '', mandate: '', duration: '', interpretation: '' }
  };
}

export function exampleDraft(language = 'sv') {
  const x = newDraft(language);
  const e = lex(language).example;
  for (const key of ['statement','origin','context','affected','currentBenefit','currentCost','noChange','strongestDefense']) x[key] = e[key];
  x.constraints = e.constraints.map(([description, whoCanChange, conditions], i) => ({
    ...newConstraint(), description, whoCanChange, conditions,
    kind: i === 0 ? 'capacity' : 'financial'
  }));
  x.alternatives = e.alternatives.map(([name, mechanism, preserves, needs, harms, uncertainties, authority, reversibility]) => ({
    ...newAlternative(name), mechanism, preserves, needs, harms, uncertainties, authority, reversibility
  }));
  const experimentKeys = ['question','approach','metrics','guardrails','stopRule','participants','mandate','duration','interpretation'];
  experimentKeys.forEach((key, i) => { x.experiment[key] = e.experiment[i]; });
  return x;
}

const string = (v, max = 6000) => typeof v === 'string' ? v.slice(0, max) : '';
function normalizeConstraint(c) {
  return {
    id: uid('b'), description: string(c?.description),
    kind: constraintKinds.some(k => k.value === c?.kind) ? c.kind : 'unknown',
    status: evidenceStatuses.some(s => s.value === c?.status) ? c.status : 'unknown',
    evidence: string(c?.evidence), source: string(c?.source),
    whoCanChange: string(c?.whoCanChange), conditions: string(c?.conditions)
  };
}
function normalizeAlternative(a) {
  return {
    id: uid('a'), name: string(a?.name, 160), mechanism: string(a?.mechanism),
    preserves: string(a?.preserves), needs: string(a?.needs), harms: string(a?.harms),
    uncertainties: string(a?.uncertainties), evidence: string(a?.evidence), authority: string(a?.authority),
    reversibility: reversibilityOptions.includes(a?.reversibility) ? a.reversibility : 'Okänd'
  };
}
/** Validate structure and bound input sizes without altering schema v1 compatibility. */
export function importDraft(json, language = 'sv') {
  const parsed = typeof json === 'string' ? JSON.parse(json) : json;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw Error('INVALID_STRUCTURE');
  if (parsed.version !== SCHEMA_VERSION) throw Error('UNSUPPORTED_VERSION');
  const data = newDraft(language);
  for (const key of ['statement', 'origin', 'context', 'affected', 'currentBenefit', 'currentCost', 'noChange', 'strongestDefense']) data[key] = string(parsed[key]);
  data.constraints = Array.isArray(parsed.constraints) ? parsed.constraints.slice(0, 30).map(normalizeConstraint) : [];
  if (!data.constraints.length) data.constraints.push(newConstraint());
  data.alternatives = Array.isArray(parsed.alternatives) ? parsed.alternatives.slice(0, 12).map(normalizeAlternative) : [];
  while (data.alternatives.length < 2) data.alternatives.push(newAlternative(lex(language).defaultAlternatives[1]));
  const exp = parsed.experiment || {};
  for (const key of Object.keys(data.experiment)) data.experiment[key] = string(exp[key]);
  return data;
}

const clean = (v) => String(v || '').replace(/\r/g, '').trim();
export function reviewWarnings(draft, language = 'sv') {
  const w = lex(language).warnings;
  const warnings = [];
  if (!clean(draft.statement)) warnings.push(w[0]);
  if (!clean(draft.origin)) warnings.push(w[1]);
  if (!clean(draft.affected)) warnings.push(w[2]);
  if (!clean(draft.strongestDefense)) warnings.push(w[3]);
  if (!draft.constraints.some(c => clean(c.description))) warnings.push(w[4]);
  if (draft.constraints.some(c => clean(c.description) && c.status === 'supported' && !clean(c.source))) warnings.push(w[5]);
  if (draft.constraints.some(c => clean(c.description) && !clean(c.whoCanChange))) warnings.push(w[6]);
  if (draft.alternatives.length < 2) warnings.push(w[7]);
  if (draft.alternatives.some(a => clean(a.mechanism) && !clean(a.harms))) warnings.push(w[8]);
  if (!clean(draft.experiment.guardrails)) warnings.push(w[9]);
  if (!clean(draft.experiment.stopRule)) warnings.push(w[10]);
  return warnings;
}

export function toMarkdown(draft, language = 'sv') {
  const lang = languageOf(language), t = lex(lang), r = t.report;
  const d = importDraft({ ...draft, version: SCHEMA_VERSION }, lang);
  const display = (v) => clean(v) || r.notSpecified;
  const row = (i, v) => `**${r.keys[i]}:** ${display(v)}`;
  const bullet = (i, v) => `- ${r.keys[i]}: ${display(v)}`;
  const lines = [
    `# ${t.title}`, '', `> ${r.disclaimer}`, `> ${r.caveat}`, '',
    `## 1. ${r.sections[0]}`, '', row(0, d.statement), '', row(1, d.origin), '', row(2, d.context), '', row(3, d.affected), '',
    `## 2. ${r.sections[1]}`, ''
  ];
  for (const c of d.constraints.filter(c => clean(c.description))) {
    lines.push(`### ${display(c.description)}`, '',
      bullet(4, t.kinds[c.kind]?.[0] || t.kinds.unknown[0]), bullet(5, t.statuses[c.status] || t.statuses.unknown),
      bullet(6, c.evidence), bullet(7, c.source), bullet(8, c.whoCanChange), bullet(9, c.conditions), '');
  }
  if (!d.constraints.some(c => clean(c.description))) lines.push(r.noConstraints, '');
  lines.push(`## 3. ${r.sections[2]}`, '', row(10, d.currentBenefit), '', row(11, d.currentCost), '',
    row(12, d.noChange), '', row(13, d.strongestDefense), '', `## 4. ${r.sections[3]}`, '');
  d.alternatives.forEach((a, i) => {
    lines.push(`### ${i + 1}. ${display(a.name)}`, '', bullet(14, a.mechanism), bullet(15, a.preserves),
      bullet(16, a.needs), bullet(17, a.harms), bullet(18, a.uncertainties), bullet(19, a.evidence),
      bullet(20, a.authority), bullet(21, t.reversibility[a.reversibility] ?? t.reversibility['Okänd']), '');
  });
  lines.push(`## 5. ${r.sections[4]}`, '',
    row(22, d.experiment.question), '', row(23, d.experiment.approach), '', row(24, d.experiment.metrics), '',
    row(25, d.experiment.guardrails), '', row(26, d.experiment.stopRule), '', row(27, d.experiment.participants), '',
    row(28, d.experiment.mandate), '', row(29, d.experiment.duration), '', row(30, d.experiment.interpretation), '',
    `## 6. ${r.sections[5]}`, '');
  const flags = reviewWarnings(d, lang);
  lines.push(...(flags.length ? flags.map(f => `- ${f}`) : [`- ${r.noWarnings}`]), '', '---', '', r.createdWith, r.noRanking);
  return lines.join('\n');
}
