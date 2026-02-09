export type Axis = 'power' | 'knowledge' | 'resilience';

export interface Question {
  id: number;
  axis: Axis;
  text: { sv: string; en: string };
  options: {
    label: { sv: string; en: string };
    score: number; // 0 = Centralized/Fragile, 100 = Distributed/Resilient
  }[];
}

export const questions: Question[] = [
  // --- AXIS 1: POWER (Makt) ---
  {
    id: 1,
    axis: 'power',
    text: {
      sv: "Var fattas de budgetbeslut som mest påverkar detta system?",
      en: "Where are the budget decisions made that most affect this system?"
    },
    options: [
      { score: 0, label: { sv: "Globalt / EU-nivå", en: "Global / EU Level" } },
      { score: 20, label: { sv: "Nationellt (Stockholm)", en: "National Capital" } },
      { score: 50, label: { sv: "Regionalt", en: "Regional Level" } },
      { score: 80, label: { sv: "Kommunalt", en: "Municipal Level" } },
      { score: 100, label: { sv: "Lokalt (Grannskap/Enhet)", en: "Local (Neighborhood/Unit)" } }
    ]
  },
  {
    id: 2,
    axis: 'power',
    text: {
      sv: "Om systemet misslyckas, hur snabbt kan reglerna ändras?",
      en: "If the system fails, how quickly can the rules be changed?"
    },
    options: [
      { score: 0, label: { sv: "År (Kräver lagändring)", en: "Years (Requires legislation)" } },
      { score: 40, label: { sv: "Månader (Byråkratisk process)", en: "Months (Bureaucratic process)" } },
      { score: 100, label: { sv: "Dagar (Lokalt beslut)", en: "Days (Local decision)" } }
    ]
  },

  // --- AXIS 2: KNOWLEDGE (Kunskap) ---
  {
    id: 3,
    axis: 'knowledge',
    text: {
      sv: "Vems kunskap värderas högst när lösningar designas?",
      en: "Whose knowledge is valued highest when designing solutions?"
    },
    options: [
      { score: 0, label: { sv: "Externa konsulter / Teoretiker", en: "External Consultants / Theorists" } },
      { score: 50, label: { sv: "Professionella administratörer", en: "Professional Administrators" } },
      { score: 100, label: { sv: "De som lever i systemet", en: "Those living in the system" } }
    ]
  },
  {
    id: 4,
    axis: 'knowledge',
    text: {
      sv: "Hur standardiserad är lösningen?",
      en: "How standardized is the solution?"
    },
    options: [
      { score: 0, label: { sv: "Identisk över hela landet", en: "Identical nationwide" } },
      { score: 100, label: { sv: "Unik för lokal kontext", en: "Unique to local context" } }
    ]
  },

  // --- AXIS 3: RESILIENCE (Resiliens) ---
  {
    id: 5,
    axis: 'resilience',
    text: {
      sv: "Vad händer om den centrala noden (IT/Ström/Logistik) går ner?",
      en: "What happens if the central node (IT/Power/Logistics) goes down?"
    },
    options: [
      { score: 0, label: { sv: "Totalstopp (Systemkollaps)", en: "Total Stop (System Collapse)" } },
      { score: 50, label: { sv: "Reducerad kapacitet", en: "Reduced Capacity" } },
      { score: 100, label: { sv: "Full funktion (Autonom)", en: "Full Function (Autonomous)" } }
    ]
  },
  {
    id: 6,
    axis: 'resilience',
    text: {
      sv: "Hur beroende är systemet av externa insatsvaror?",
      en: "How dependent is the system on external inputs?"
    },
    options: [
      { score: 0, label: { sv: "100% Importberoende", en: "100% Import Dependent" } },
      { score: 100, label: { sv: "Självförsörjande kretslopp", en: "Self-sufficient loop" } }
    ]
  }
];

export const getDiagnosis = (score: number, lang: 'sv'|'en') => {
  if (score < 40) return lang === 'sv' ? "Kritiskt Centraliserad (Sårbar)" : "Critically Centralized (Fragile)";
  if (score < 70) return lang === 'sv' ? "Byråkratisk (Trög)" : "Bureaucratic (Sluggish)";
  return lang === 'sv' ? "Subsidiär (Resilient)" : "Subsidiary (Resilient)";
};
