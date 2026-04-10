export const translations = {
  sv: {
    nav: {
      manifesto: "Manifest",
      analysis: "Systemanalys",
      frameworks: "Ramverk",
      tools: "Verktyg",
      library: "Bibliotek",
      about: "Om"
    },
    header: {
      subtitle: "Forskning och policy för närstyre"
    },
    footer: {
      rights: "Alla rättigheter reserverade.",
      built_with: "Byggd på GGF-OS",
      contact: "Kontakt"
    },
    systemAnalysis: {
      food: "Livsmedelssystem",
      healthcare: "Hälsovård",
      education: "Utbildning",
      elderCare: "Äldreomsorg",
      housing: "Boende",
      energy: "Energi",
      transport: "Transport",
      welfare: "Välfärd",
      safety: "Trygghet och säkerhet",
      culture: "Kultur och medier",
      // Upcoming systems
      water: "Vattenförvaltning",
      waste: "Avfall och cirkulär ekonomi",
      finance: "Finansiella system",
      legal: "Rättssystem",
      childcare: "Barnomsorg",
      land: "Markanvändning",
      immigration: "Immigration och integration",
      research: "Forskning och innovation"
    },
    frameworks: {
      title: "Ramverk",
      subtitle: "De analytiska instrumenten bakom diagnosen — hur vi mäter styrningsarkitektur och vad som krävs för att den ska fungera.",
      gsi: {
        title: "Global Subsidiarity Index (GSI)",
        description: "Ett universellt mätverktyg för styrningsarkitektur. Mäter beslutsavstånd, kunskapsinkludering och resiliensarkitektur i nationer, regioner och kommuner.",
        action: "Utforska ramverket"
      },
      aubi: {
        title: "Adaptiv universell basinkomst (AUBI)",
        description: "Subsidiarity kräver kognitiv bandbredd. AUBI är den ekonomiska infrastruktur som frigör medborgarnas kapacitet att faktiskt delta i distribuerad styrning.",
        action: "Läs analysen"
      },
      relationship: {
        title: "Hur hänger de ihop?",
        hardware: "Subsidiaritet är hårdvaran",
        electricity: "AUBI är strömmen",
        explanation: "GSI mäter om styrningsarkitekturen matchar samhällets komplexitet. Men distribuerad styrning kräver medborgare med tid, trygghet och kognitiv kapacitet att delta. AUBI är det ekonomiska ramverk som möjliggör detta."
      }
    },
    simulatorPage: {
      title: "Systemsimulator för styrningsstabilitet",
      subtitle: "En styrteoretisk modell för institutionell anpassning",
      basedOn: "Baserat på artiklarna:",
      papers: {
        p1: "I: Styrning som ett återkopplingssystem",
        p2: "II: Fraktalitet som stabilitet",
        p3: "III: Sambandet mellan observerbarhet och demokrati",
        p4: "IV: Nödvändig mångfald och allmänningen",
        p5: "V: Koordineringsskatten"
      },
      explanation: {
        title: "Vad du ser",
        centralized: "<strong>Centraliserad</strong> (Artikel I): En central styrenhet observerar det nationella genomsnittet och tillämpar en enhetlig policy. Hög latens och aggregering förstör rumslig information. Sidoskador sprider sig.",
        local: "<strong>Endast lokal</strong> (Artikel II): Varje nod reagerar på sitt eget tillstånd. Snabba chocker hanteras, men en långsam trend skapar ihållande svängningar.",
        fractal: "<strong>Fraktal / polycentrisk</strong> (Artikel II & V): Kapslade lokala, regionala och globala styrenheter täcker alla störningsfrekvenser. Koordineringsskatten minimeras."
      },
      quote: "\"Bara mångfald kan absorbera mångfald.\" — Ross Ashby, Law of Requisite Variety (1956)"
    },
    simulatorData: {
      controls: {
        architecture: "Styrningsarkitektur",
        centralized: "Centraliserad",
        localOnly: "Endast lokal",
        fractal: "Fraktal / polycentrisk",
        complexity: "Miljöns komplexitet",
        disturbanceMix: "Störningsmix",
        lowVariety: "Låg variation",
        highVariety: "Hög variation",
        slowDrift: "Långsam trend",
        fastShocks: "Snabba chocker",
        reset: "Återställ simulering",
        tooltip1: "Artikel I och II: Centraliserad förstör spatial information. Fraktal täcker alla frekvensband.",
        tooltip2: "Ashbys lag: Miljöer med högre variation kräver mer styrningsvariation för att stabiliseras.",
        tooltip3: "Artikel II: Snabba chocker kräver låg latens; långsam drift kräver långa observationsfönster."
      },
      metrics: {
        stability: "Systemets stabilitet",
        variety: "Nödvändig mångfald",
        coverage: "Frekvenstäckning",
        tax: "Koordineringsskatt",
        catastrophic: "Katastrofal skatt",
        moderate: "Måttlig skatt",
        unobservable: "OOBSERVERBAR"
      },
      plot: {
        title: "Varians i realtid",
        target: "Måljämvikt"
      },
      regions: ["Kust i norr", "Skogsdistrikt", "Stadskärna", "Jordbruksslätt", "Fjäll i söder"],
      layers: {
        central: "CENTRAL",
        local: "LOKAL",
        region: "REGION"
      }
    },
    tools: {
      title: "Verktygslådan",
      subtitle: "Från analys till handling: interaktiva verktyg och utbildningsmaterial.",
      compass: {
        title: "Närhetskompassen",
        description: "Ett interaktivt diagnosverktyg för att mäta maktavstånd, kunskapsinkludering och resiliens i din organisation eller kommun.",
        action: "Starta Diagnos"
      },
      workshop: {
        title: "Studiecirkel-Kit",
        description: "Komplett material för att leda en studiecirkel om subsidiaritet i din förening eller ditt grannskap.",
        action: "Utforska, ladda ner och skriv ut"
      },
      power: {
        title: "Maktanalys",
        description: "Kartlägg var makten faktiskt sitter — vem bestämmer, vem kontrollerar budgeten, hur långt borta?",
        action: "Kartlägg Makten"
      },
      simulator: {
        title: "Systemsimulator",
        description: "En interaktiv modell som bevisar varför centraliserade system misslyckas med att hantera lokal komplexitet. Lek med matematiken bakom subsidiaritet.",
        action: "Testa Simulatorn"
      },
      school: {
        title: "För Skolan",
        description: "Färdiga lektionsplaneringar och moduler för gymnasiet. Bygg systemförståelse i klassrummet.",
        action: "Gå till Lärarrummet"
      },
      ngo_pledge: {
        title: "NGO‑löfte",
        description: "Ett verktyg för att flytta makt och resurser från internationella huvudkontor till lokalsamhällen. Fem konkreta åtaganden för hjälporganisationer.",
        action: "Läs löftet"
      },
      library: {
        title: "Mönsterbiblioteket",
        description: "En databas över beprövade lösningar för decentralisering, från matgillen till energigemenskaper.",
        action: "Utforska (Snart)"
      }
    },
    contact: {
      title: "Kontakt",
      subtitle: "Vi bygger detta tillsammans. Har du idéer, kritik eller vill du bidra?",
      email_label: "Föredrar du e-post?",
      form: {
        name: "Namn",
        email: "E-post",
        topic: "Vad gäller det?",
        message: "Meddelande",
        submit: "Skicka Meddelande",
        success: "Tack! Vi återkommer så snart vi kan."
      },
      topics: {
        general: "Allmän fråga",
        tools: "Feedback på Verktyg / Kompassen",
        site: "Förslag till webbplatsen",
        collab: "Samarbete / Starta Studiecirkel",
        press: "Press / Media"
      }
    }
  },
  en: {
    nav: {
      manifesto: "Manifesto",
      analysis: "System Analysis",
      frameworks: "Frameworks",
      tools: "Tools",
      library: "Library",
      about: "About"
    },
    header: {
      subtitle: "Research and policy for subsidiarity"
    },
    footer: {
      rights: "All rights reserved.",
      built_with: "Built on GGF-OS",
      contact: "Contact"
    },
    systemAnalysis: {
      food: "Food Systems",
      healthcare: "Healthcare",
      education: "Education",
      elderCare: "Elder Care",
      housing: "Housing",
      energy: "Energy",
      transport: "Transport",
      welfare: "Welfare",
      safety: "Safety and Policing",
      culture: "Culture and Media",
      // Upcoming systems
      water: "Water Management",
      waste: "Waste & Circular Economy",
      finance: "Financial Systems",
      legal: "Legal System",
      childcare: "Childcare & Family Policy",
      land: "Land Use & Natural Resources",
      immigration: "Immigration & Integration",
      research: "Research & Innovation"
    },
    frameworks: {
      title: "Frameworks",
      subtitle: "The analytical instruments behind the diagnosis — how we measure governance architecture and what it takes to make it work.",
      gsi: {
        title: "Global Subsidiarity Index (GSI)",
        description: "A universal measurement tool for governance architecture. Measures decision distance, knowledge inclusion, and resilience architecture across nations, regions, and municipalities.",
        action: "Explore the framework"
      },
      aubi: {
        title: "Adaptive Universal Basic Income (AUBI)",
        description: "Subsidiarity requires cognitive bandwidth. AUBI is the economic infrastructure that unlocks citizens' capacity to actually participate in distributed governance.",
        action: "Read the analysis"
      },
      relationship: {
        title: "How do they connect?",
        hardware: "Subsidiarity is the hardware",
        electricity: "AUBI is the electricity",
        explanation: "The GSI measures whether governance architecture matches societal complexity. But distributed governance requires citizens with the time, security, and cognitive capacity to participate. AUBI is the economic framework that makes this possible."
      }
    },
    simulatorPage: {
      title: "Governance Stability Simulator",
      subtitle: "A control-theoretic model of institutional adaptation",
      basedOn: "Based on papers:",
      papers: {
        p1: "I: Governance as a Feedback System",
        p2: "II: Fractality as Stability",
        p3: "III: The Observability-Democracy Connection",
        p4: "IV: Requisite Variety and the Commons",
        p5: "V: The Coordination Failure Tax"
      },
      explanation: {
        title: "What you're seeing",
        centralized: "<strong>Centralized</strong> (Paper I): One controller observes the national average and applies uniform policy. High latency and aggregation destroy spatial information. Collateral disruption spreads.",
        local: "<strong>Local Only</strong> (Paper II): Each node responds to its own state. Fast shocks are handled, but slow drift produces persistent oscillation.",
        fractal: "<strong>Fractal / Polycentric</strong> (Papers II & V): Nested local, regional, and global controllers cover all disturbance frequencies. The coordination failure tax is minimized."
      },
      quote: "\"Only variety can absorb variety.\" — Ross Ashby, Law of Requisite Variety (1956)"
    },
    simulatorData: {
      controls: {
        architecture: "Governance Architecture",
        centralized: "Centralized",
        localOnly: "Local Only",
        fractal: "Fractal / Polycentric",
        complexity: "Environmental Complexity",
        disturbanceMix: "Disturbance Mix",
        lowVariety: "Low Variety",
        highVariety: "High Variety",
        slowDrift: "Slow Drift",
        fastShocks: "Fast Shocks",
        reset: "Reset Simulation",
        tooltip1: "Paper I & II: Centralized destroys spatial information. Fractal covers all frequency bands.",
        tooltip2: "Ashby's Law: Higher variety environments require more governance variety to stabilize.",
        tooltip3: "Paper II: Fast shocks require low latency; slow drift requires long observation windows."
      },
      metrics: {
        stability: "System Stability",
        variety: "Requisite Variety",
        coverage: "Freq. Coverage",
        tax: "Coordination Tax",
        catastrophic: "Catastrophic Tax",
        moderate: "Moderate Tax",
        unobservable: "UNOBSERVABLE"
      },
      plot: {
        title: "Real-Time Variance",
        target: "Target Equilibrium"
      },
      regions: ["Coastal North", "Forest District", "Urban Core", "Agri Plain", "Mountain South"],
      layers: {
        central: "CENTRAL",
        local: "LOCAL",
        region: "REGION"
      }
    },
    tools: {
      title: "The Toolkit",
      subtitle: "From analysis to action: interactive tools and educational materials.",
      compass: {
        title: "The Proximity Compass",
        description: "An interactive diagnostic tool to measure power distance, knowledge inclusion, and resilience in your organization or municipality.",
        action: "Start Diagnosis"
      },
      workshop: {
        title: "Study Circle Kit",
        description: "Complete materials for leading a study circle on subsidiarity in your association or neighborhood.",
        action: "Explore, Download and Print"
      },
      simulator: {
        title: "Systems Simulator",
        description: "An interactive model proving why centralized systems fail to handle local complexity. Play with the cybernetic math behind subsidiarity.",
        action: "Try the Simulator"
      },
      power: {
        title: "Power Analysis",
        description: "Map where power actually resides — who decides, who controls the budget, how far away?",
        action: "Map Power"
      },
      school: {
        title: "For Schools",
        description: "Ready-made lesson plans and modules for high schools. Build systems thinking in the classroom.",
        action: "Enter Teacher's Lounge"
      },
      ngo_pledge: {
        title: "NGO Pledge",
        description: "A tool to shift power and resources from global headquarters to local communities. Five concrete commitments for aid organizations.",
        action: "Read the Pledge"
      },
      library: {
        title: "Pattern Library",
        description: "A database of proven decentralization solutions, from food guilds to energy communities.",
        action: "Explore (Coming Soon)"
      }
    },
    contact: {
      title: "Contact",
      subtitle: "We are building this together. Do you have ideas, critiques, or want to contribute?",
      email_label: "Prefer email?",
      form: {
        name: "Name",
        email: "Email",
        topic: "Topic",
        message: "Message",
        submit: "Send Message",
        success: "Thanks! We will get back to you soon."
      },
      topics: {
        general: "General Inquiry",
        tools: "Feedback on Tools / Compass",
        site: "Website Suggestions",
        collab: "Collaboration / Start Study Circle",
        press: "Press / Media"
      }
    }
  }
};
