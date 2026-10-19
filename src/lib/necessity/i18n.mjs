/** UI and reporting language data. Keys/values in JSON drafts remain language-neutral. */
export const necessityI18n = {
  sv: {
    steps: ['Påståendet', 'Begränsningar', 'Nuläget', 'Alternativ', 'Lärande & export'],
    title: 'Institutionell nödvändighetsprövning', shortTitle: 'Institutionell', titleSecond: 'nödvändighetsprövning',
    seo: 'Undersök vad som faktiskt begränsar ett samhällsbeslut, vilka regler som kan ändras och hur alternativ kan prövas ansvarsfullt.',
    back: '← Verktygslådan', eyebrow: 'ETT ÖPPET ANALYSVERKTYG · V0.2',
    lede: 'När någon säger ”det går inte” – vad är det egentligen som inte går? Undersök begränsningar, nulägets funktion och möjliga alternativ utan att förutsätta vilket svar som är rätt.',
    exampleButton: 'Utforska fiktivt exempel', blankButton: 'Börja med tom analys',
    privacy: 'Ingen inloggning. Ingen information skickas till någon server av verktyget. Du väljer själv om du vill spara eller exportera din analys. Undvik känsliga personuppgifter.',
    stepNav: 'Analysens fem steg', stepCount: (i) => `STEG ${i} AV 5`,
    headings: [
      'Vad påstås vara nödvändigt?', 'Vad begränsar handlingsutrymmet?', 'Varför finns nuläget?',
      'Vilka andra sätt är tänkbara?', 'Hur kan vi lära oss utan att orsaka onödig skada?'
    ],
    introductions: [
      'Välj ett konkret påstående. Formulera det så rättvist som möjligt innan du undersöker det.',
      'En situation kan ha flera samverkande begränsningar. Markera evidensstatus utan att låta verktyget avgöra vad som är sant.',
      'Undersök vad den befintliga ordningen faktiskt gör bra. Att en regel är människoskapad betyder inte att den saknar viktig funktion.',
      'Jämför minst två handlingsalternativ. Det första kan beskriva en utveckling av nuläget. Fyll i samma frågor för samtliga.',
      'En prövning är inte alltid lämplig. Om den är möjlig: formulera vad som kan observeras och vad som skulle få oss att ändra uppfattning.'
    ],
    fields: {
      statement: 'Påståendet', origin: 'Källa eller avsändare', context: 'Beslutssituation och omfattning', affected: 'Vilka berörs – också de som inte hörs?',
      constraintDescription: 'Beskriv begränsningen', kind: 'Typ av begränsning', status: 'Evidensstatus',
      constraintEvidence: 'Vad talar för eller emot begränsningen?', source: 'Underlag / källor',
      whoCanChange: 'Vem kan ändra detta – om någon?', conditions: 'Vad skulle krävas för att ändra det?',
      currentBenefit: 'Vilka funktioner fyller dagens ordning?', currentCost: 'Vilka skador, brister eller utestängningar uppstår?',
      noChange: 'Vad kan hända om vi inte gör något?', strongestDefense: 'Det starkaste rimliga argumentet för att behålla systemet',
      altName: 'Benämning', mechanism: 'Hur skulle det fungera?', preserves: 'Vad behöver bevaras?',
      needs: 'Nödvändiga förutsättningar', harms: 'Risker, nackdelar och möjliga förlorare',
      uncertainties: 'Vad vet vi ännu inte?', altEvidence: 'Källor eller relevanta erfarenheter',
      authority: 'Vem får besluta?', reversibility: 'Möjlighet att återställa',
      question: 'Vilken osäkerhet vill vi undersöka?', approach: 'Hur skulle en avgränsad undersökning kunna se ut?',
      metrics: 'Vad skulle räknas som relevanta observationer?', guardrails: 'Vilka skyddsräcken är nödvändiga?',
      stopRule: 'När bör undersökningen stoppas eller omprövas?', participants: 'Vilka behöver delta eller höras?',
      mandate: 'Vem har mandat att fatta beslut om försöket?', duration: 'Tidshorisont', interpretation: 'Hur ska resultat och begränsningar tolkas?'
    },
    placeholders: {
      statement: "Exempel: 'Vi har inte råd att...' eller 'Det är omöjligt att...'",
      origin: "Dokument, datum, citat, talare eller 'egen hypotes'",
      context: 'Var gäller påståendet? Kommun, organisation, Sverige? Vad är beslutsfrågan?',
      affected: 'Berörda invånare, personal, framtida generationer, naturmiljö...',
      constraintDescription: 'Vad behöver vara sant för att påståendet ska hålla?',
      constraintEvidence: 'Observationer, dokument, data och invändningar',
      source: "Länk, paragraf, rapport eller 'saknas'", whoCanChange: 'Kommun, riksdag, EU, parter, ingen känd...',
      conditions: 'Lagändring, kompetens, tid, medgivande, ny kunskap...',
      currentBenefit: 'Stabilitet, skydd, förutsägbarhet, samordning, rättigheter...',
      currentCost: 'För vilka aktörer? Vilka kostnader är synliga eller osynliga?',
      noChange: 'Både sannolika fördelar, risker och osäkerheter',
      strongestDefense: 'Formulera invändningen mot förändring så rättvist du kan.',
      preserves: 'Värdefulla funktioner och rättigheter', needs: 'Resurser, mandat, samordning, övergångskostnader',
      approach: 'Litteraturgranskning, intervjuer, simulering, frivilligt pilotprojekt...',
      metrics: 'Mått på effekt, fördelning, skador, kostnader och upplevd nytta',
      guardrails: 'Rättigheter, samtycke, skydd mot irreversibla skador...',
      duration: "Eventuellt en tidsgräns – eller 'ännu okänt'",
      interpretation: 'Vad skulle ett positivt eller negativt utfall faktiskt säga?'
    },
    statementHelp: 'Återge helst ett faktiskt påstående ordagrant och med sammanhang.',
    tips: [
      ['Metodprincip:', 'Skilj mellan ”inte möjligt med nuvarande regler”, ”inte möjligt utan betydande kostnader” och ”inte möjligt över huvud taget”. Det är tre olika påståenden.'],
      ['Viktigt:', 'En juridisk begränsning kan vara bindande i dag och ändå vara förändringsbar genom lagliga beslut. En naturlig begränsning är däremot inte automatiskt oföränderlig i alla sina konsekvenser.'],
      ['Motmedel mot bekräftelsebias:', 'Beskriv inte nuläget som ett problem enbart för att det är dagens system. Det är också ett alternativ, med egna styrkor och svagheter.'],
      ['Ingen automatisk rangordning:', 'Verktyget försöker inte räkna fram ett ”bästa” förslag. Det hjälper till att synliggöra vad som behöver vägas mot varandra.']
    ],
    constraintN: (i) => `Begränsning ${i}`, alternativeN: (i) => `Väg ${i}`,
    removeConstraintN: (i) => `Ta bort begränsning ${i}`, removeAlternativeN: (i) => `Ta bort alternativ ${i}`,
    remove: 'Ta bort', addConstraint: '+ Lägg till begränsning', addAlternative: '+ Lägg till ett alternativ',
    previous: '← Föregående', next: 'Nästa', start: 'Tillbaka till början',
    reviewLabel: 'Granskningspunkter', reviewTitle: 'Öppna frågor innan analysen delas',
    reviewOk: 'De automatiska påminnelserna har besvarats. Det betyder inte att uppgifterna är verifierade – kontrollera källor och låt gärna någon med ett annat perspektiv granska.',
    exportTitle: 'Ta med din analys', exportHelp: 'Markdown ger en läsbar rapport. JSON gör det möjligt att återuppta och redigera analysen senare.',
    exportMarkdown: 'Ladda ned rapport (.md)', exportJSON: 'Exportera utkast (.json)', copyReport: 'Kopiera rapport',
    draftsLabel: 'Hantera utkast', draftsTitle: 'Ditt utkast', draftsHelp: 'Ingen automatisk sparning sker. Lokal lagring är ett aktivt val och fungerar bara i denna webbläsare.',
    save: 'Spara lokalt', open: 'Öppna sparat', erase: 'Radera lokalt', importJSON: 'Importera JSON',
    footerPrefix: 'Metodutkast v0.2 · Ett stöd för kritiskt tänkande, inte automatisk faktagranskning eller beslutsfattande. Läs mer på',
    site: 'Svensk Subsidiaritet',
    messages: {
      maxConstraints: 'Högst 30 begränsningar per analys.', maxAlternatives: 'Högst 12 alternativ per analys.', minAlternatives: 'Behåll minst två alternativ för en jämförelse.',
      confirmExample: 'Ersätta den aktuella analysen med ett hypotetiskt exempel? Exportera först om du vill spara arbetet.',
      exampleLoaded: 'Ett fiktivt biblioteksexempel har laddats. Inga uppgifter gäller en verklig kommun.',
      confirmReset: 'Börja om? Det nuvarande osparade innehållet försvinner.',
      resetDone: 'Ett nytt, tomt utkast har skapats. Eventuell tidigare lokal kopia påverkas inte.',
      saved: 'Utkastet sparades enbart i den här webbläsaren.', saveFailed: 'Lokal sparning misslyckades. Exportera som JSON i stället.',
      confirmLoad: 'Ersätta pågående analys med sparat utkast?', loaded: 'Det lokalt sparade utkastet har öppnats.', loadFailed: 'Det sparade utkastet kunde inte läsas.',
      confirmErase: 'Ta bort den lokalt sparade kopian? Formuläret på skärmen påverkas inte.', erased: 'Den lokala kopian har tagits bort.', eraseFailed: 'Den lokala kopian kunde inte tas bort.',
      copied: 'Rapporten har kopierats som Markdown.', copyFailed: 'Kopiering misslyckades. Ladda ned rapporten i stället.',
      tooLarge: 'Filen är för stor (max 500 kB).', confirmImport: 'Ersätta den aktuella analysen med det importerade utkastet?', imported: 'JSON-utkastet har importerats.',
      importFailed: 'Import misslyckades', invalidFormat: 'ogiltigt format', invalidStructure: 'Ogiltig filstruktur.', unsupportedVersion: 'Filens schemaversion stöds inte.'
    },
    kinds: {
      real: ['Fysisk / ekologisk', 'Naturlagar, energi, miljö och materiella flöden'],
      capacity: ['Kapacitet / resurser', 'Personal, tid, kunskap, utrustning och produktionskapacitet'],
      legal: ['Juridisk', 'Lag, föreskrift, dom, avtal eller internationellt åtagande'],
      financial: ['Finansiell / budget', 'Budget, finansieringssystem, kapital och likviditet'],
      coordination: ['Organisation / samordning', 'Mandat, gränssnitt, processer och institutionellt beroende'],
      political: ['Intressen / legitimitet', 'Intressekonflikter, makt, förtroende och beslutsmandat'],
      norm: ['Norm / grundantagande', 'Sedvana, föreställningar och otestade förväntningar'],
      unknown: ['Osäker / blandad', 'Oklar mekanism eller flera samverkande begränsningar']
    },
    statuses: { unknown: 'Ej prövad', indication: 'Indikation', supported: 'Underbyggd', challenged: 'Motsagd / omstridd' },
    reversibility: { 'Okänd': 'Okänd', 'Hög': 'Hög', 'Delvis': 'Delvis', 'Låg': 'Låg' },
    defaultAlternatives: ['Behåll och förbättra nuläget', 'Ett möjligt alternativ', 'Alternativ'],
    warnings: [
      'Påståendet om nödvändighet saknas.', 'Källa/avsändare till påståendet saknas.', 'Berörda grupper och perspektiv är inte angivna.',
      'Det starkaste argumentet för nuläget är inte beskrivet.', 'Ingen konkret begränsning är beskriven.',
      'En begränsning är markerad som underbyggd utan källhänvisning.',
      'För minst en begränsning saknas vem som har mandat att ändra den.',
      'Jämför minst ett alternativ med nuläget.', 'För minst ett beskrivet alternativ saknas nackdelar/risker.',
      'Skyddsräcken för en eventuell prövning saknas.', 'Stoppregel för en eventuell prövning saknas.'
    ],
    report: {
      disclaimer: 'Arbetsunderlag, inte juridisk rådgivning, faktagranskning eller policyrekommendation.',
      caveat: 'Kategorisering är preliminär. Påståenden kräver extern prövning.',
      sections: ['Påståendet', 'Identifierade begränsningar', 'Nulägets funktion', 'Handlingsalternativ', 'Lärande / möjlig prövning', 'Saker som behöver kontrolleras'],
      keys: ['Påstående','Källa/avsändare','Sammanhang','Berörda','Kategori','Evidensstatus','Underlag','Källa','Vem kan ändra detta','Villkor för ändring','Vad fungerar','Vad fungerar sämre','Om vi inte ändrar något','Starkaste argumentet för dagens ordning','Hur det fungerar','Vad som bör bevaras','Förutsättningar','Nackdelar / risker','Osäkerheter','Källor / erfarenheter','Beslutsmandat','Reversibilitet','Lärandefråga','Metod','Uppföljning','Skyddsräcken','Avbrytningskriterier','Vilka deltar','Mandat','Tidshorisont','Hur resultaten kan tolkas'],
      notSpecified: 'Inte angivet', noConstraints: 'Inga beskrivna begränsningar.',
      noWarnings: 'Inga automatiska påminnelser. Detta är inte en verifiering.',
      createdWith: 'Skapat med Institutionell nödvändighetsprövning (schema v1), Svensk Subsidiaritet.',
      noRanking: 'Varken verktyget eller rapporten bedömer vilket alternativ som är bäst.'
    },
    example: {
      statement: '”Det går inte att hålla biblioteket öppet två kvällar till i veckan.”',
      origin: 'Hypotetiskt exempel – inte ett citat från någon kommun',
      context: 'Fiktiv kommunal bibliotekssituation; enbart för att demonstrera metoden.',
      affected: 'Bibliotekets personal, barn och unga, kvällsbesökare, skattebetalare.',
      currentBenefit: 'Gällande öppettider passar nuvarande schemaläggning och lokalkostnader.',
      currentCost: 'De som inte kan besöka biblioteket dagtid får sämre tillgång.',
      noChange: 'Tillgänglighetsproblemet kvarstår, men inga nya kostnader uppstår.',
      strongestDefense: 'Befintliga anslag och personalens arbetsmiljö kan begränsa en utökning.',
      constraints: [
        ['Personal behöver kunna bemanna två extra kvällar.', 'Biblioteksledning och kommun inom gällande regler', 'Pröva bemanningsalternativ och arbetsmiljökrav.'],
        ['Utökade öppettider kräver resurser i kommunens budget.', 'Kommunfullmäktige / berörd nämnd', 'Undersök faktiska merkostnader och omprioriteringar.']
      ],
      alternatives: [
        ['Behåll och förbättra nuläget', 'Behåll tiderna, förbättra digital tillgänglighet och information.', 'Befintlig bemanning och kostnadskontroll.', '', 'Ingen direkt lösning för kvällsbesökare.', '', '', 'Hög'],
        ['Pröva en extra kväll', 'Tidsbegränsat test med en extra kväll snarare än två.', 'Bibliotekets samhällsuppdrag och personalens skyddsregler.', 'Arbetsmiljöbedömning, bemanning, lokal budget och samråd.', 'Kostnad, risk för förskjutet personalbehov och begränsad räckvidd.', 'Efterfrågan och effekten på personalens arbetsbelastning.', 'Beslut inom kommunens befogenheter; behöver kontrolleras.', 'Hög']
      ],
      experiment: [
        'Ökar en extra kväll den faktiska tillgängligheten utan oacceptabel arbetsbelastning?',
        'Frivilligt, tidsbegränsat försök efter samråd med berörda.',
        'Besökare per timme, upplevd tillgänglighet, personalens arbetsmiljö och total merkostnad.',
        'Följ arbetsrätt och arbetsmiljökrav; inga förändringar utan berördas medverkan.',
        'Avbryt vid arbetsmiljörisker eller om beslutade kostnadsramar överskrids.',
        'Personal, biblioteksanvändare inklusive grupper med svag tillgång.',
        'Ansvarig nämnd och förvaltning måste klarlägga mandat.',
        'Exempel: 8–12 veckor (kräver lokalt beslut).',
        'Ett positivt resultat stödjer ett lokalt försök, inte ett allmänt bevis för andra kommuner.'
      ]
    }
  },
  en: {
    steps: ['The claim', 'Constraints', 'Current system', 'Alternatives', 'Learning & export'],
    title: 'Institutional Necessity Review', shortTitle: 'Institutional', titleSecond: 'Necessity Review',
    seo: 'Examine what actually constrains public decisions, which rules can be changed, and how alternatives can be tested responsibly.',
    back: '← Toolkit', eyebrow: 'AN OPEN ANALYSIS TOOL · V0.2',
    lede: 'When someone says “it cannot be done”, what exactly is impossible? Explore constraints, the purposes of existing arrangements, and possible alternatives without assuming the answer.',
    exampleButton: 'Explore fictional example', blankButton: 'Start a blank analysis',
    privacy: 'No account required. This tool does not send your information to any server. You choose whether to save or export your analysis. Avoid sensitive personal information.',
    stepNav: 'Five steps of the analysis', stepCount: (i) => `STEP ${i} OF 5`,
    headings: [
      'What is claimed to be necessary?', 'What constrains the options?', 'Why does the current system exist?',
      'What other arrangements are possible?', 'How can we learn without causing unnecessary harm?'
    ],
    introductions: [
      'Choose a specific claim. State it as fairly as possible before examining it.',
      'Several constraints may interact. Record the evidence status without asking the tool to decide what is true.',
      'Explore what the current arrangements actually do well. A human-made rule can still serve an important purpose.',
      'Compare at least two courses of action. The first may improve the current arrangement. Ask the same questions of each.',
      'Testing is not always appropriate. If it is: specify what could be observed and what might change our minds.'
    ],
    fields: {
      statement: 'The claim', origin: 'Source or speaker', context: 'Decision context and scope', affected: 'Who is affected – including those not heard?',
      constraintDescription: 'Describe the constraint', kind: 'Type of constraint', status: 'Evidence status',
      constraintEvidence: 'What supports or challenges this constraint?', source: 'Evidence / sources',
      whoCanChange: 'Who could change this, if anyone?', conditions: 'What would be needed to change it?',
      currentBenefit: 'What functions does the present system serve?', currentCost: 'What harms, shortcomings or exclusions arise?',
      noChange: 'What might happen if nothing changes?', strongestDefense: 'The strongest reasonable argument for keeping the system',
      altName: 'Name', mechanism: 'How would it work?', preserves: 'What needs to be preserved?',
      needs: 'Necessary conditions', harms: 'Risks, drawbacks and possible losers',
      uncertainties: 'What do we not yet know?', altEvidence: 'Sources or relevant experience',
      authority: 'Who is authorized to decide?', reversibility: 'Reversibility',
      question: 'Which uncertainty do we want to investigate?', approach: 'What could a bounded inquiry look like?',
      metrics: 'What observations would be relevant?', guardrails: 'What safeguards are necessary?',
      stopRule: 'When should the inquiry stop or be reconsidered?', participants: 'Who should participate or be heard?',
      mandate: 'Who has authority to approve a trial?', duration: 'Time horizon', interpretation: 'How should the results and limitations be interpreted?'
    },
    placeholders: {
      statement: "For example: 'We cannot afford to...' or 'It is impossible to...'",
      origin: "Document, date, quotation, speaker, or 'own hypothesis'",
      context: 'Where does the claim apply? Municipality, organization, country? What decision is at stake?',
      affected: 'Residents, staff, future generations, ecosystems...',
      constraintDescription: 'What would need to be true for the claim to hold?',
      constraintEvidence: 'Observations, documents, data and objections',
      source: "Link, statute, report, or 'none available'", whoCanChange: 'Municipality, parliament, EU, relevant parties, no known actor...',
      conditions: 'Legal change, skills, time, consent, new knowledge...',
      currentBenefit: 'Stability, protection, predictability, coordination, rights...',
      currentCost: 'Which groups? Which costs are visible or hidden?',
      noChange: 'Likely benefits, risks and uncertainties',
      strongestDefense: 'State the case against change as fairly as possible.',
      preserves: 'Valuable functions and rights', needs: 'Resources, authority, coordination, transition costs',
      approach: 'Literature review, interviews, simulation, voluntary pilot...',
      metrics: 'Effects, distribution, harms, costs and perceived benefits',
      guardrails: 'Rights, consent, protection against irreversible harm...',
      duration: "Possibly a time limit – or 'not yet known'",
      interpretation: 'What would a positive or negative result actually tell us?'
    },
    statementHelp: 'If possible, quote a real claim accurately and include its context.',
    tips: [
      ['Method principle:', 'Distinguish “not possible under current rules”, “not possible without significant costs”, and “not possible at all”. These are different claims.'],
      ['Important:', 'A legal constraint may be binding today yet changeable through lawful decisions. A natural constraint does not necessarily make all its consequences immutable.'],
      ['Avoid confirmation bias:', 'Do not label the status quo a problem merely because it is the status quo. It too is an option with strengths and weaknesses.'],
      ['No automatic ranking:', 'The tool does not calculate the “best” proposal. It helps reveal the trade-offs that require judgment.']
    ],
    constraintN: (i) => `Constraint ${i}`, alternativeN: (i) => `Path ${i}`,
    removeConstraintN: (i) => `Remove constraint ${i}`, removeAlternativeN: (i) => `Remove alternative ${i}`,
    remove: 'Remove', addConstraint: '+ Add constraint', addAlternative: '+ Add an alternative',
    previous: '← Previous', next: 'Next', start: 'Back to the beginning',
    reviewLabel: 'Review points', reviewTitle: 'Open questions before sharing this analysis',
    reviewOk: 'All automatic prompts have been addressed. This does not verify the information – check your sources and consider asking someone with a different perspective to review it.',
    exportTitle: 'Take your analysis with you', exportHelp: 'Markdown produces a readable report. JSON lets you reopen and edit the analysis later.',
    exportMarkdown: 'Download report (.md)', exportJSON: 'Export draft (.json)', copyReport: 'Copy report',
    draftsLabel: 'Manage drafts', draftsTitle: 'Your draft', draftsHelp: 'There is no autosave. Local storage is opt-in and only available in this browser.',
    save: 'Save locally', open: 'Open saved draft', erase: 'Delete local copy', importJSON: 'Import JSON',
    footerPrefix: 'Method draft v0.2 · A tool for critical thinking, not automatic fact-checking or decision-making. More at',
    site: 'Svensk Subsidiaritet',
    messages: {
      maxConstraints: 'Up to 30 constraints per analysis.', maxAlternatives: 'Up to 12 alternatives per analysis.', minAlternatives: 'Keep at least two alternatives for comparison.',
      confirmExample: 'Replace the current analysis with a fictional example? Export first if you want to keep your work.',
      exampleLoaded: 'A fictional library example has been loaded. It does not describe a real municipality.',
      confirmReset: 'Start over? Any unsaved changes will be lost.',
      resetDone: 'A new blank draft has been created. Any previous local copy is unchanged.',
      saved: 'The draft was saved only in this browser.', saveFailed: 'Local storage failed. Export JSON instead.',
      confirmLoad: 'Replace the current analysis with the locally saved draft?', loaded: 'The locally saved draft has been opened.', loadFailed: 'Could not read the saved draft.',
      confirmErase: 'Delete the locally saved copy? The on-screen form will not change.', erased: 'The local copy was deleted.', eraseFailed: 'Could not delete the local copy.',
      copied: 'The report was copied as Markdown.', copyFailed: 'Copy failed. Download the report instead.',
      tooLarge: 'File is too large (maximum 500 kB).', confirmImport: 'Replace the current analysis with the imported draft?', imported: 'The JSON draft was imported.',
      importFailed: 'Import failed', invalidFormat: 'invalid format', invalidStructure: 'Invalid file structure.', unsupportedVersion: 'The file schema version is not supported.'
    },
    kinds: {
      real: ['Physical / ecological', 'Natural laws, energy, environment and material flows'],
      capacity: ['Capacity / resources', 'Staff, time, knowledge, equipment and productive capacity'],
      legal: ['Legal', 'Legislation, regulations, rulings, contracts or international commitments'],
      financial: ['Financial / budgetary', 'Budgets, financing systems, capital and liquidity'],
      coordination: ['Organizational / coordination', 'Authority, interfaces, processes and institutional dependencies'],
      political: ['Interests / legitimacy', 'Conflicting interests, power, trust and decision-making authority'],
      norm: ['Norm / assumption', 'Conventions, beliefs and untested expectations'],
      unknown: ['Uncertain / mixed', 'Unclear mechanisms or several interacting constraints']
    },
    statuses: { unknown: 'Not assessed', indication: 'Indicative', supported: 'Supported', challenged: 'Contradicted / contested' },
    reversibility: { 'Okänd': 'Unknown', 'Hög': 'High', 'Delvis': 'Partial', 'Låg': 'Low' },
    defaultAlternatives: ['Keep and improve the current system', 'One possible alternative', 'Alternative'],
    warnings: [
      'The necessity claim is missing.', 'The source or speaker of the claim is missing.', 'Affected groups and perspectives are not specified.',
      'The strongest argument for the status quo has not been described.', 'No specific constraint is described.',
      'A constraint is marked as supported without a source citation.',
      'At least one constraint does not identify who has authority to change it.',
      'Compare at least one alternative with the current system.', 'At least one described alternative omits drawbacks or risks.',
      'Safeguards for a possible trial are missing.', 'Stopping criteria for a possible trial are missing.'
    ],
    report: {
      disclaimer: 'Working notes, not legal advice, fact-checking or a policy recommendation.',
      caveat: 'Categories are provisional. Claims require independent verification.',
      sections: ['The claim', 'Identified constraints', 'Functions of the current system', 'Courses of action', 'Learning / possible trial', 'Matters to check'],
      keys: ['Claim','Source / speaker','Context','Affected groups','Category','Evidence status','Evidence','Source','Who can change this','Conditions for change','What works','What works less well','If nothing changes','Strongest case for the present system','How it works','What should be preserved','Requirements','Drawbacks / risks','Uncertainties','Sources / experience','Decision-making authority','Reversibility','Learning question','Method','Monitoring','Safeguards','Stopping criteria','Who participates','Authority','Time horizon','How the results can be interpreted'],
      notSpecified: 'Not specified', noConstraints: 'No constraints described.',
      noWarnings: 'No automatic prompts. This is not verification.',
      createdWith: 'Created with Institutional Necessity Review (schema v1), Svensk Subsidiaritet.',
      noRanking: 'Neither the tool nor the report determines which alternative is best.'
    },
    example: {
      statement: '“It is not possible to keep the library open two additional evenings each week.”',
      origin: 'Hypothetical example – not a quotation from any municipality',
      context: 'Fictional municipal library scenario, used only to demonstrate the method.',
      affected: 'Library staff, children and young people, evening visitors and taxpayers.',
      currentBenefit: 'Current opening hours match existing staff schedules and premises costs.',
      currentCost: 'People who cannot visit during the day have poorer access.',
      noChange: 'The access problem remains, but no additional costs arise.',
      strongestDefense: 'Existing funding and staff working conditions may limit extended hours.',
      constraints: [
        ['Staff must be available for two additional evenings.', 'Library management and municipality, within current rules', 'Examine staffing options and workplace safety requirements.'],
        ['Extended hours require resources in the municipal budget.', 'Municipal council / relevant committee', 'Examine actual incremental costs and reallocations.']
      ],
      alternatives: [
        ['Keep and improve the current system', 'Keep current hours but improve digital access and information.', 'Current staffing and cost control.', '', 'No direct solution for evening visitors.', '', '', 'Hög'],
        ['Try one extra evening', 'Time-limited test of one extra evening instead of two.', 'The public library mission and worker protections.', 'Work environment assessment, staffing, local budget and consultation.', 'Costs, risk of shifted staffing needs and limited reach.', 'Demand and impact on staff workload.', 'Decision within municipal powers; needs verification.', 'Hög']
      ],
      experiment: [
        'Does one extra evening improve actual access without unacceptable staff workload?',
        'Voluntary, time-limited trial after consulting those affected.',
        'Visitors per hour, perceived access, staff working conditions and total extra costs.',
        'Follow labor and workplace safety rules; no change without those affected having a say.',
        'Stop if working conditions become unsafe or approved spending limits are exceeded.',
        'Staff and library users, including groups with limited access.',
        'The responsible committee and administration must clarify authority.',
        'For example, 8–12 weeks (requires a local decision).',
        'A positive result supports a local trial; it is not general proof for other municipalities.'
      ]
    }
  }
};

export const languageOf = (locale) => locale === 'en' ? 'en' : 'sv';
