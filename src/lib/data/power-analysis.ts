export type PowerQuestion = {
  id: number;
  category: 'budget' | 'decisions' | 'accountability' | 'veto';
  text: {
    sv: string;
    en: string;
  };
  options: {
    label: { sv: string; en: string };
    level: 'local' | 'municipal' | 'regional' | 'national' | 'supranational';
    distance: number; // km from local
  }[];
};

export const powerQuestions: PowerQuestion[] = [
  // Budget Control
  {
    id: 1,
    category: 'budget',
    text: {
      sv: 'Vem bestämmer över budgeten?',
      en: 'Who controls the budget?'
    },
    options: [
      { 
        label: { sv: 'Vi själva/Lokalgruppen', en: 'We ourselves/Local group' }, 
        level: 'local', 
        distance: 0 
      },
      { 
        label: { sv: 'Kommunstyrelsen', en: 'Municipal board' }, 
        level: 'municipal', 
        distance: 20 
      },
      { 
        label: { sv: 'Regionfullmäktige', en: 'Regional council' }, 
        level: 'regional', 
        distance: 100 
      },
      { 
        label: { sv: 'Riksdagen/Regering', en: 'Parliament/Government' }, 
        level: 'national', 
        distance: 400 
      },
      { 
        label: { sv: 'EU/Internationell nivå', en: 'EU/International level' }, 
        level: 'supranational', 
        distance: 1500 
      }
    ]
  },
  
  // Strategic Decisions
  {
    id: 2,
    category: 'decisions',
    text: {
      sv: 'Vem fattar strategiska beslut (t.ex. öppettider, prioriteringar)?',
      en: 'Who makes strategic decisions (e.g., opening hours, priorities)?'
    },
    options: [
      { 
        label: { sv: 'Vi själva/Lokal ledning', en: 'We ourselves/Local management' }, 
        level: 'local', 
        distance: 0 
      },
      { 
        label: { sv: 'Kommunchef/Förvaltning', en: 'Municipal manager/Administration' }, 
        level: 'municipal', 
        distance: 20 
      },
      { 
        label: { sv: 'Regiondirektör', en: 'Regional director' }, 
        level: 'regional', 
        distance: 100 
      },
      { 
        label: { sv: 'Nationell myndighet', en: 'National agency' }, 
        level: 'national', 
        distance: 400 
      },
      { 
        label: { sv: 'EU-direktiv', en: 'EU directive' }, 
        level: 'supranational', 
        distance: 1500 
      }
    ]
  },
  
  // Personnel Decisions
  {
    id: 3,
    category: 'decisions',
    text: {
      sv: 'Vem anställer och avskedar personal?',
      en: 'Who hires and fires staff?'
    },
    options: [
      { 
        label: { sv: 'Lokal chef/Föreningen', en: 'Local manager/Association' }, 
        level: 'local', 
        distance: 0 
      },
      { 
        label: { sv: 'HR-avdelning kommunen', en: 'Municipal HR department' }, 
        level: 'municipal', 
        distance: 20 
      },
      { 
        label: { sv: 'Regional HR', en: 'Regional HR' }, 
        level: 'regional', 
        distance: 100 
      },
      { 
        label: { sv: 'Central myndighet', en: 'Central agency' }, 
        level: 'national', 
        distance: 400 
      }
    ]
  },
  
  // Accountability
  {
    id: 4,
    category: 'accountability',
    text: {
      sv: 'Till vem är ni ansvariga för era resultat?',
      en: 'To whom are you accountable for your results?'
    },
    options: [
      { 
        label: { sv: 'Direkt till de vi tjänar/Medlemmarna', en: 'Directly to those we serve/Members' }, 
        level: 'local', 
        distance: 0 
      },
      { 
        label: { sv: 'Kommunchef/Nämnd', en: 'Municipal manager/Committee' }, 
        level: 'municipal', 
        distance: 20 
      },
      { 
        label: { sv: 'Regiondirektion', en: 'Regional management' }, 
        level: 'regional', 
        distance: 100 
      },
      { 
        label: { sv: 'Nationell tillsynsmyndighet', en: 'National supervisory authority' }, 
        level: 'national', 
        distance: 400 
      }
    ]
  },
  
  // Veto Power
  {
    id: 5,
    category: 'veto',
    text: {
      sv: 'Vem kan stoppa eller ändra era lokala beslut?',
      en: 'Who can stop or change your local decisions?'
    },
    options: [
      { 
        label: { sv: 'Ingen – vi bestämmer själva', en: 'Nobody – we decide ourselves' }, 
        level: 'local', 
        distance: 0 
      },
      { 
        label: { sv: 'Kommunfullmäktige', en: 'Municipal council' }, 
        level: 'municipal', 
        distance: 20 
      },
      { 
        label: { sv: 'Regionpolitiker', en: 'Regional politicians' }, 
        level: 'regional', 
        distance: 100 
      },
      { 
        label: { sv: 'Regeringen/Riksdag', en: 'Government/Parliament' }, 
        level: 'national', 
        distance: 400 
      },
      { 
        label: { sv: 'EU-domstol/Kommission', en: 'EU Court/Commission' }, 
        level: 'supranational', 
        distance: 1500 
      }
    ]
  },
  
  // Innovation Freedom
  {
    id: 6,
    category: 'decisions',
    text: {
      sv: 'Kan ni experimentera med nya metoder utan godkännande uppifrån?',
      en: 'Can you experiment with new methods without approval from above?'
    },
    options: [
      { 
        label: { sv: 'Ja, helt fritt inom vårt område', en: 'Yes, completely free within our domain' }, 
        level: 'local', 
        distance: 0 
      },
      { 
        label: { sv: 'Ja, men måste rapportera till kommunen', en: 'Yes, but must report to municipality' }, 
        level: 'municipal', 
        distance: 20 
      },
      { 
        label: { sv: 'Kräver regionalt godkännande', en: 'Requires regional approval' }, 
        level: 'regional', 
        distance: 100 
      },
      { 
        label: { sv: 'Kräver dispens från nationell myndighet', en: 'Requires exemption from national agency' }, 
        level: 'national', 
        distance: 400 
      }
    ]
  }
];

export type PowerLevel = 'local' | 'municipal' | 'regional' | 'national' | 'supranational';

export type PowerAnalysis = {
  dominantLevel: PowerLevel;
  averageDistance: number;
  centralizationScore: number; // 0-100, higher = more centralized
  accountabilityGap: number; // Distance between power and those affected
};

export function analyzePower(
  answers: Record<number, { level: PowerLevel; distance: number }>
): PowerAnalysis {
  const levels = Object.values(answers);
  
  if (levels.length === 0) {
    return {
      dominantLevel: 'local',
      averageDistance: 0,
      centralizationScore: 0,
      accountabilityGap: 0
    };
  }
  
  // Count frequency of each level
  const levelCounts: Record<PowerLevel, number> = {
    local: 0,
    municipal: 0,
    regional: 0,
    national: 0,
    supranational: 0
  };
  
  levels.forEach(l => levelCounts[l.level]++);
  
  // Find dominant level
  const dominantLevel = Object.entries(levelCounts).reduce((a, b) => 
    b[1] > a[1] ? b : a
  )[0] as PowerLevel;
  
  // Calculate average distance
  const averageDistance = Math.round(
    levels.reduce((sum, l) => sum + l.distance, 0) / levels.length
  );
  
  // Centralization score (0-100)
  const centralLevels = levels.filter(l => 
    l.level === 'national' || l.level === 'supranational'
  ).length;
  const centralizationScore = Math.round((centralLevels / levels.length) * 100);
  
  // Accountability gap (higher distance = larger gap)
  const accountabilityGap = averageDistance;
  
  return {
    dominantLevel,
    averageDistance,
    centralizationScore,
    accountabilityGap
  };
}

export function getDiagnosis(analysis: PowerAnalysis, locale: 'sv' | 'en'): string {
  const { centralizationScore } = analysis;
  
  if (locale === 'sv') {
    if (centralizationScore >= 75) return 'Extremt centraliserad';
    if (centralizationScore >= 50) return 'Starkt centraliserad';
    if (centralizationScore >= 25) return 'Måttligt centraliserad';
    return 'Väl distribuerad makt';
  } else {
    if (centralizationScore >= 75) return 'Extremely Centralized';
    if (centralizationScore >= 50) return 'Highly Centralized';
    if (centralizationScore >= 25) return 'Moderately Centralized';
    return 'Well-Distributed Power';
  }
}

export function getRecommendation(analysis: PowerAnalysis, locale: 'sv' | 'en'): string {
  const { centralizationScore } = analysis;
  
  if (locale === 'sv') {
    if (centralizationScore >= 75) {
      return 'Akut behov av decentralisering. Börja med att identifiera beslut som kan fattas lokalt utan kvalitetsförlust.';
    }
    if (centralizationScore >= 50) {
      return 'Betydande förbättringspotential. Kartlägg vilka beslut som kräver lokal kontextkännedom.';
    }
    if (centralizationScore >= 25) {
      return 'Ganska väl balanserat, men det finns rum för mer lokal autonomi inom vissa områden.';
    }
    return 'Bra maktbalans! Fokusera på att bevara och stärka de lokala beslutsmekanismerna.';
  } else {
    if (centralizationScore >= 75) {
      return 'Urgent need for decentralization. Start by identifying decisions that can be made locally without loss of quality.';
    }
    if (centralizationScore >= 50) {
      return 'Significant room for improvement. Map which decisions require local context knowledge.';
    }
    if (centralizationScore >= 25) {
      return 'Reasonably well balanced, but there is room for more local autonomy in certain areas.';
    }
    return 'Good power balance! Focus on preserving and strengthening local decision-making mechanisms.';
  }
}
