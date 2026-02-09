export type Resource = {
  id: string;
  title: { sv: string; en: string };
  date: string;
  description: { sv: string; en: string };
  url: string;
  tags: string[];
  author?: { sv: string; en: string };
};

export const whitepapers: Resource[] = [
  {
    id: 'cognitive-scaffolding',
    title: {
      en: "Cognitive Scaffolding",
      sv: "Kognitiv byggnadställning"
    },
    date: "2025",
    description: {
      en: "A comprehensive methodology for leveraging diverse AI models to develop robust, holistic solutions that bridge the cognitive gap between fragmented thinking and integrated consciousness required for addressing the global polycrisis.",
      sv: "En omfattande metodik för att använda diverse AI-modeller för att utveckla robusta, holistiska lösningar som överbryggar det kognitiva gapet mellan fragmenterat tänkande och integrerat medvetande."
    },
    url: "https://globalgovernanceframeworks.org/resources/whitepapers/cognitive-scaffolding?lang=sv",
    tags: ["Methodology", "AI", "Complexity"]
  },
  {
    id: 'omega-proof',
    title: {
      en: "The Omega Proof",
      sv: "Omega-beviset"
    },
    date: "2025",
    description: {
      en: "An Empirical Demonstration of the Nation-State System's Terminal Incompatibility with Planetary Peace. We used adversarial AI to simulate the four veto-players in the Ukraine war. They unanimously rejected a mathematically optimal peace deal.",
      sv: "En empirisk demonstration av nationalstatssystemets terminala inkompatibilitet med planetär fred. Vi använde AI-simuleringar för att visa varför fred är arkitektoniskt omöjlig under nuvarande regler."
    },
    url: "https://globalgovernanceframeworks.org/resources/whitepapers/omega-proof?lang=sv",
    tags: ["Geopolitics", "Simulation", "System Failure"]
  },
  {
    id: 'preventing-1933',
    title: {
      en: "Preventing 1933",
      sv: "Att förhindra 1933"
    },
    date: "Dec 18, 2025",
    description: {
      en: "A multi-model AI systems analysis demonstrating that the Weimar Republic's collapse was a preventable architectural failure, and that Western democracies in 2025-2026 are running identical failure code.",
      sv: "En AI-systemanalys som visar att Weimarrepublikens kollaps var ett förutsägbart arkitektoniskt fel, och att västländska demokratier idag kör identisk 'felkod'. GGF-arkitekturen presenteras som lösningen."
    },
    url: "https://globalgovernanceframeworks.org/resources/whitepapers/preventing-1933?lang=sv",
    tags: ["History", "Resilience", "Democracy"]
  }
];

export const books: Resource[] = [
  {
    id: 'seeing-like-a-state',
    title: {
      en: "Seeing Like a State",
      sv: "Seeing Like a State"
    },
    author: {
      en: "James C. Scott",
      sv: "James C. Scott"
    },
    date: "1998",
    description: {
      en: "How certain schemes to improve the human condition have failed. Scott demonstrates how high-modernist ideology and authoritative states have ignored local knowledge and context, leading to massive failures in planning.",
      sv: "Hur vissa planer för att förbättra människors villkor har misslyckats. Scott visar hur högmodernistisk ideologi och auktoritära stater har ignorerat lokal kunskap och kontext, vilket lett till massiva planeringsmisslyckanden."
    },
    url: "https://yalebooks.yale.edu/book/9780300078152/seeing-like-a-state/",
    tags: ["Planning", "Centralization", "Local Knowledge"]
  },
  {
    id: 'governing-commons',
    title: {
      en: "Governing the Commons",
      sv: "Governing the Commons"
    },
    author: {
      en: "Elinor Ostrom",
      sv: "Elinor Ostrom"
    },
    date: "1990",
    description: {
      en: "Nobel Prize-winning research on how communities successfully manage common resources without top-down control or privatization. Demonstrates principles of polycentric governance and collective action.",
      sv: "Nobelprisbelönad forskning om hur samhällen framgångsrikt förvaltar gemensamma resurser utan övergripande kontroll eller privatisering. Visar principer för polycentrisk styrning och kollektivt handlande."
    },
    url: "https://www.cambridge.org/core/books/governing-the-commons/",
    tags: ["Commons", "Governance", "Polycentricity"]
  },
  {
    id: 'thinking-in-systems',
    title: {
      en: "Thinking in Systems",
      sv: "Thinking in Systems"
    },
    author: {
      en: "Donella H. Meadows",
      sv: "Donella H. Meadows"
    },
    date: "2008",
    description: {
      en: "A primer on systems thinking that teaches how to identify feedback loops, stock and flows, and leverage points. Essential for understanding why centralized interventions often fail.",
      sv: "En introduktion till systemtänkande som lär ut hur man identifierar återkopplingsslingor, lager och flöden samt hävstångspunkter. Avgörande för att förstå varför centraliserade interventioner ofta misslyckas."
    },
    url: "https://www.chelseagreen.com/product/thinking-in-systems/",
    tags: ["Systems Thinking", "Complexity", "Feedback Loops"]
  },
  {
    id: 'scale',
    title: {
      en: "Scale",
      sv: "Scale"
    },
    author: {
      en: "Geoffrey West",
      sv: "Geoffrey West"
    },
    date: "2017",
    description: {
      en: "The universal laws of growth, innovation, sustainability, and the pace of life in organisms, cities, economies, and companies. Shows why bigger isn't always better.",
      sv: "De universella lagarna för tillväxt, innovation, hållbarhet och livstakt i organismer, städer, ekonomier och företag. Visar varför större inte alltid är bättre."
    },
    url: "https://www.penguinrandomhouse.com/books/314049/scale-by-geoffrey-west/",
    tags: ["Scaling", "Cities", "Complexity"]
  },
  {
    id: 'antifragile',
    title: {
      en: "Antifragile",
      sv: "Antifragile"
    },
    author: {
      en: "Nassim Nicholas Taleb",
      sv: "Nassim Nicholas Taleb"
    },
    date: "2012",
    description: {
      en: "Things that gain from disorder. Explains why decentralized systems are more resilient than optimized centralized ones, and how variation and stress make systems stronger.",
      sv: "Saker som gynnas av oordning. Förklarar varför decentraliserade system är mer motståndskraftiga än optimerade centraliserade, och hur variation och stress gör system starkare."
    },
    url: "https://www.penguinrandomhouse.com/books/176227/antifragile-by-nassim-nicholas-taleb/",
    tags: ["Resilience", "Decentralization", "Risk"]
  },
  {
    id: 'networked',
    title: {
      en: "Networked",
      sv: "Networked"
    },
    author: {
      en: "Lee Rainie & Barry Wellman",
      sv: "Lee Rainie & Barry Wellman"
    },
    date: "2012",
    description: {
      en: "The new social operating system. How networked individualism is transforming society, creating new forms of community and collective action beyond traditional institutions.",
      sv: "Det nya sociala operativsystemet. Hur nätverksindividualism transformerar samhället och skapar nya former av gemenskap och kollektivt handlande bortom traditionella institutioner."
    },
    url: "https://mitpress.mit.edu/9780262017190/networked/",
    tags: ["Networks", "Community", "Social Change"]
  },
  {
    id: 'small-is-beautiful',
    title: {
      en: "Small Is Beautiful",
      sv: "Small Is Beautiful"
    },
    author: {
      en: "E.F. Schumacher",
      sv: "E.F. Schumacher"
    },
    date: "1973",
    description: {
      en: "Economics as if people mattered. A foundational text on appropriate technology, human-scale economics, and the problems of gigantism in modern institutions.",
      sv: "Ekonomi som om människor spelade roll. En grundläggande text om lämplig teknologi, mänsklig skala ekonomi och problemen med gigantism i moderna institutioner."
    },
    url: "https://www.harpercollins.com/products/small-is-beautiful-e-f-schumacher",
    tags: ["Economics", "Scale", "Human-Centered"]
  },
  {
    id: 'platform-society',
    title: {
      en: "The Platform Society",
      sv: "The Platform Society"
    },
    author: {
      en: "José van Dijck, Thomas Poell & Martijn de Waal",
      sv: "José van Dijck, Thomas Poell & Martijn de Waal"
    },
    date: "2018",
    description: {
      en: "Public values in a connective world. Critical analysis of how digital platforms are reshaping institutions and what democratic alternatives might look like.",
      sv: "Offentliga värden i en sammankopplad värld. Kritisk analys av hur digitala plattformar omformar institutioner och hur demokratiska alternativ skulle kunna se ut."
    },
    url: "https://global.oup.com/academic/product/the-platform-society-9780190889760",
    tags: ["Digital", "Platforms", "Democracy"]
  },
  {
    id: 'requisite-variety-governance',
    title: {
      en: "Requisite Variety and Governance",
      sv: "Nödvändig variation och styrning"
    },
    author: {
      en: "W. Ross Ashby",
      sv: "W. Ross Ashby"
    },
    date: "1956",
    description: {
      en: "Introduction to Cybernetics - establishes the Law of Requisite Variety: only variety can absorb variety. Explains why centralized systems cannot effectively govern complex, diverse populations without local autonomy.",
      sv: "Introduktion till cybernetik - fastställer lagen om nödvändig variation: endast variation kan absorbera variation. Förklarar varför centraliserade system inte kan effektivt styra komplexa, diversifierade befolkningar utan lokalt självstyre."
    },
    url: "https://archive.org/details/introductiontocy00ashb",
    tags: ["Cybernetics", "Complexity", "Governance"]
  }
];

export const papers: Resource[] = [
  {
    id: 'subsidiarity-principle',
    title: {
      en: "The Principle of Subsidiarity",
      sv: "Subsidiaritetsprincipen"
    },
    author: {
      en: "Andreas Føllesdal",
      sv: "Andreas Føllesdal"
    },
    date: "2013",
    description: {
      en: "A comprehensive analysis of subsidiarity as a political principle, examining its philosophical foundations and practical applications in federal systems and European governance.",
      sv: "En omfattande analys av subsidiaritet som politisk princip, som undersöker dess filosofiska grunder och praktiska tillämpningar i federala system och europeisk styrning."
    },
    url: "https://plato.stanford.edu/entries/subsidiaritet/",
    tags: ["Subsidiarity", "Political Theory", "Governance"]
  },
  {
    id: 'polycentric-governance',
    title: {
      en: "Polycentric Governance and Development",
      sv: "Polycentrisk styrning och utveckling"
    },
    author: {
      en: "Elinor Ostrom",
      sv: "Elinor Ostrom"
    },
    date: "2010",
    description: {
      en: "Nobel lecture demonstrating how polycentric approaches to governance can address complex collective action problems more effectively than monocentric alternatives.",
      sv: "Nobelföreläsning som visar hur polycentriska styrningsmetoder kan hantera komplexa kollektiva handlingsproblem mer effektivt än monocentriska alternativ."
    },
    url: "https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/lecture/",
    tags: ["Polycentricity", "Collective Action", "Development"]
  },
  {
    id: 'complex-adaptive-systems',
    title: {
      en: "Complex Adaptive Systems",
      sv: "Komplexa adaptiva system"
    },
    author: {
      en: "John H. Holland",
      sv: "John H. Holland"
    },
    date: "2006",
    description: {
      en: "Introduction to how simple rules generate complex emergent behavior in systems from ecosystems to economies. Foundation for understanding why decentralized systems can outperform designed ones.",
      sv: "Introduktion till hur enkla regler genererar komplex emergent beteende i system från ekosystem till ekonomier. Grund för att förstå varför decentraliserade system kan överträffa designade."
    },
    url: "https://academic.oup.com/book/7625",
    tags: ["Complexity", "Emergence", "Adaptation"]
  },
  {
    id: 'tyranny-metrics',
    title: {
      en: "The Tyranny of Metrics",
      sv: "Mätningarnas tyranni"
    },
    author: {
      en: "Jerry Z. Muller",
      sv: "Jerry Z. Muller"
    },
    date: "2018",
    description: {
      en: "How the obsession with quantifying human performance threatens business, education, medicine, and government. Shows why measurement-driven centralization fails.",
      sv: "Hur besattheten av att kvantifiera mänsklig prestation hotar företag, utbildning, medicin och förvaltning. Visar varför mätningsdriven centralisering misslyckas."
    },
    url: "https://press.princeton.edu/books/hardcover/9780691174952/the-tyranny-of-metrics",
    tags: ["Metrics", "Performance", "Bureaucracy"]
  },
  {
    id: 'resilience-thinking',
    title: {
      en: "Resilience Thinking",
      sv: "Resiliens-tänkande"
    },
    author: {
      en: "Brian Walker & David Salt",
      sv: "Brian Walker & David Salt"
    },
    date: "2006",
    description: {
      en: "Sustaining ecosystems and people in a changing world. Introduces the resilience framework for understanding how systems absorb disturbance and reorganize while undergoing change.",
      sv: "Att upprätthålla ekosystem och människor i en föränderlig värld. Introducerar resiliens-ramverket för att förstå hur system absorberar störningar och omorganiserar sig under förändring."
    },
    url: "https://islandpress.org/books/resilience-thinking",
    tags: ["Resilience", "Ecosystems", "Change"]
  },
  {
    id: 'radical-decentralization',
    title: {
      en: "Radical Decentralization and Subsidiarity",
      sv: "Radikal decentralisering och subsidiaritet"
    },
    author: {
      en: "Vlad Tarko",
      sv: "Vlad Tarko"
    },
    date: "2017",
    description: {
      en: "Elinor Ostrom's contribution to political economy. Analysis of how Ostrom's work provides a framework for understanding when decentralization works and when it doesn't.",
      sv: "Elinor Ostroms bidrag till politisk ekonomi. Analys av hur Ostroms arbete ger ett ramverk för att förstå när decentralisering fungerar och när den inte gör det."
    },
    url: "https://www.cambridge.org/core/books/elinor-ostroms-contribution-to-political-economy/",
    tags: ["Decentralization", "Political Economy", "Ostrom"]
  }
];
