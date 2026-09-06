// Canonical Governance as Engineering (GAE) report index.
// Source of truth: supplied by the project owner. Do not infer or invent URLs —
// add new entries only from the canonical publication index.
// Base URL for all reports: https://www.bjornkennethholmstrom.org/working-papers/[slug]
// All simulations: https://github.com/BjornKennethHolmstrom/gae-governance-simulator

export interface GAEPaper {
  slug: string;
  numeral: string; // "0", "I", "II", ... "XXVIII"
  label: { sv: string; en: string };
}

export const gaePapers: GAEPaper[] = [
  { slug: 'below-the-factorization', numeral: '0', label: { en: 'Below the Factorization', sv: 'Under faktoriseringen' } },
  { slug: 'governance-stability-simulator', numeral: 'I', label: { en: 'Governance Stability Simulator', sv: 'Styrstabilitetssimulatorn' } },
  { slug: 'fractality-as-stability', numeral: 'II', label: { en: 'Fractality as Stability', sv: 'Fraktalitet som stabilitet' } },
  { slug: 'observability-democracy-connection', numeral: 'III', label: { en: 'The Observability-Democracy Connection', sv: 'Observerbarhets-demokratikopplingen' } },
  { slug: 'requisite-variety-and-the-commons', numeral: 'IV', label: { en: 'Requisite Variety and the Commons', sv: 'Nödvändig variation och allmänningen' } },
  { slug: 'coordination-failure-tax', numeral: 'V', label: { en: 'The Coordination Failure Tax', sv: 'Samordningsmisslyckandets skatt' } },
  { slug: 'the-variety-gap', numeral: 'VI', label: { en: 'The Variety Gap', sv: 'Varietetsgapet' } },
  { slug: 'architecture-of-governance-failure', numeral: 'VII', label: { en: 'The Architecture of Governance Failure', sv: 'Styrningsmisslyckandets arkitektur' } },
  { slug: 'measuring-the-variety-gap', numeral: 'VIII', label: { en: 'Measuring the Variety Gap', sv: 'Att mäta varietetsgapet' } },
  { slug: 'political-economy-of-requisite-governance', numeral: 'IX', label: { en: 'The Political Economy of Requisite Governance', sv: 'Den politiska ekonomin för nödvändig styrning' } },
  { slug: 'requisite-observer-diversity', numeral: 'X', label: { en: 'Requisite Observer Diversity', sv: 'Nödvändig observatörsmångfald' } },
  { slug: 'reform-exhaustion', numeral: 'XI', label: { en: 'Reform Exhaustion', sv: 'Reformutmattning' } },
  { slug: 'boundary-selection-deficits', numeral: 'XII', label: { en: 'Boundary Selection Deficits', sv: 'Gränsdragningsunderskott' } },
  { slug: 'legitimacy-as-emergent-gain', numeral: 'XIII', label: { en: 'Legitimacy as Emergent Gain', sv: 'Legitimitet som emergent förstärkning' } },
  { slug: 'governance-as-adaptive-controller', numeral: 'XIV', label: { en: 'Governance as an Adaptive Controller', sv: 'Styrning som en adaptiv kontrollant' } },
  { slug: 'adaptation-bottleneck', numeral: 'XV', label: { en: 'The Adaptation Bottleneck', sv: 'Adaptationsflaskhalsen' } },
  { slug: 'why-diversity-resists-formalization', numeral: 'XVI', label: { en: 'Why Diversity Resists Formalization', sv: 'Varför mångfald motstår formalisering' } },
  { slug: 'certification-floor', numeral: 'XVII', label: { en: 'The Certification Floor', sv: 'Certifieringsgolvet' } },
  { slug: 'boundary-instability', numeral: 'XVIII', label: { en: 'The Boundary Instability Principle', sv: 'Principen om gränsinstabilitet' } },
  { slug: 'governors-sentinels-bridges', numeral: 'XIX', label: { en: 'Governors, Sentinels, and Bridges', sv: 'Guvernörer, vaktposter och broar' } },
  { slug: 'three-laws-from-one-bound', numeral: 'XX', label: { en: 'Three Laws from One Bound', sv: 'Tre lagar från en gräns' } },
  { slug: 'when-to-stop-learning', numeral: 'XXI', label: { en: 'When to Stop Learning, and When to Stop', sv: 'När man ska sluta lära sig, och när man ska sluta' } },
  { slug: 'what-cannot-be-guaranteed', numeral: 'XXII', label: { en: 'What Cannot Be Guaranteed', sv: 'Vad som inte kan garanteras' } },
  { slug: 'shape-of-reform', numeral: 'XXIII', label: { en: 'The Shape of Reform', sv: 'Reformens form' } },
  { slug: 'excitation-starved-observer', numeral: 'XXIV', label: { en: 'The Observer You Cannot Afford to Excite', sv: 'Observatören du inte har råd att excitera' } },
  { slug: 'where-reform-pushes-down', numeral: 'XXV', label: { en: 'Where Reform Pushes Down, Strategy Pushes Back', sv: 'Där reform trycker ner, trycker strategi tillbaka' } },
  { slug: 'cost-of-returning', numeral: 'XXVI', label: { en: 'The Cost of Returning', sv: 'Kostnaden för att återvända' } },
  { slug: 'requisite-alignment', numeral: 'XXVII', label: { en: 'Requisite Alignment', sv: 'Nödvändig inriktning' } },
  { slug: 'closure-adaptation', numeral: 'XXVIII', label: { en: 'Closure-Adaptation Dynamics', sv: 'Slutenhet-anpassningsdynamik' } }
];

export const GAE_BASE_URL = 'https://www.bjornkennethholmstrom.org/working-papers';
export const GAE_SIMULATOR_REPO = 'https://github.com/BjornKennethHolmstrom/gae-governance-simulator';

export function gaeUrl(slug: string): string {
  return `${GAE_BASE_URL}/${slug}`;
}

export function gaePaper(slug: string): GAEPaper | undefined {
  return gaePapers.find((p) => p.slug === slug);
}
