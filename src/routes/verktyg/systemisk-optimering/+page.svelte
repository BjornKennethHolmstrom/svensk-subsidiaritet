<!-- src/routes/verktyg/systemisk-optimering/+page.svelte -->
<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { fade } from 'svelte/transition';
  import SEO from '$lib/components/SEO.svelte';

  type Lang = 'sv' | 'en';

  // Single source of truth: all files live on the research site.
  const BKH = 'https://www.bjornkennethholmstrom.org';
  const DA = `${BKH}/systemic-optimization/decision-audit`;
  const RESEARCH = `${BKH}/systemic-optimization`;
  const REPO = 'https://github.com/BjornKennethHolmstrom/systemic-optimization';

  const auditFiles: Record<Lang, { zip: string; pdf: string; docx: string; md: string; review: string }> = {
    sv: {
      zip: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Kit_SV.zip`,
      pdf: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Arbetsblad.pdf`,
      docx: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Arbetsblad.docx`,
      md: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Arbetsblad.md`,
      review: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Uppfoljning_Efter_Beslut.pdf`
    },
    en: {
      zip: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Kit_EN.zip`,
      pdf: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Worksheet.pdf`,
      docx: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Worksheet.docx`,
      md: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Worksheet.md`,
      review: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_After_Action_Review.pdf`
    }
  };
  const fileKeys = ['zip', 'pdf', 'docx', 'md', 'review'] as const;

  const papers = [
    {
      number: '0',
      url: `${BKH}/working-papers/what-should-we-optimize`,
      cover: `${BKH}/working-papers/images/what-should-we-optimize-cover.png`,
      pdf: {
        sv: `${BKH}/working-papers/what-should-we-optimize/what-should-we-optimize-sv.pdf`,
        en: `${BKH}/working-papers/what-should-we-optimize/what-should-we-optimize-en.pdf`
      },
      title: {
        sv: 'Vad bör vi optimera, och vad måste vi veta?',
        en: 'What Should We Optimize, and What Must We Know?'
      },
      desc: {
        sv: 'Tre beräkningsexperiment om modellfel, osäkerhet om framtida mål och när lärande är värt sin kostnad.',
        en: 'Three computational experiments on model error, future-goal uncertainty, and when learning is worth its cost.'
      }
    },
    {
      number: '1',
      url: `${BKH}/working-papers/what-if-the-model-is-incomplete`,
      cover: `${BKH}/working-papers/images/what-if-the-model-is-incomplete-cover.png`,
      pdf: {
        sv: `${BKH}/working-papers/what-if-the-model-is-incomplete/what-if-the-model-is-incomplete-sv.pdf`,
        en: `${BKH}/working-papers/what-if-the-model-is-incomplete/what-if-the-model-is-incomplete-en.pdf`
      },
      title: {
        sv: 'Vad händer om modellen är ofullständig?',
        en: 'What If the Model Is Incomplete?'
      },
      desc: {
        sv: 'En syntetisk översvämningsstudie med tre kommuner: ändra modellen, ändra målet eller lära sig mer – och vad varje väg kostar.',
        en: 'A synthetic flood study with three municipalities: re-model, re-value or learn – and what each path costs.'
      }
    }
  ] as const;

  const content = {
    sv: {
      seoTitle: 'Systemisk optimering – beslutsgranskning | Svensk Subsidiaritet',
      seoDesc:
        'Ett workshopverktyg för att granska mål, antaganden, dolda konsekvenser och möjligheter till lärande innan viktiga beslut fattas.',
      back: '← Alla verktyg',
      eyebrow: 'Workshopverktyg · version 0.2.1',
      title: 'Systemisk optimering',
      titleSecond: 'Beslutsgranskning',
      lede: 'Fattar vi rätt beslut – eller optimerar vi fel problem? Ett arbetsblad för att granska mål, antaganden, dolda konsekvenser och möjligheter till lärande innan ett viktigt beslut fattas.',
      ctaPdf: 'Ladda ner arbetsbladet (PDF)',
      ctaZip: 'Komplett workshopmaterial (ZIP)',
      badge: 'Utforskande beslutsstöd · Ännu inte empiriskt validerat',

      whatTitle: 'Vad är systemisk optimering?',
      what1:
        'Traditionell optimering handlar om att hitta den bästa lösningen på ett givet problem. Men även en matematiskt optimal lösning kan leda till dåliga resultat om själva problemet är fel formulerat.',
      what2:
        'Vad händer om vi mäter fel saker, förbiser viktiga orsakssamband eller inte vet vilka behov som kommer att vara viktiga i framtiden? Vad händer om våra beslut dessutom hindrar oss från att upptäcka våra egna misstag?',
      thesis:
        'Systemisk optimering granskar inte bara lösningarna, utan också problemen och beslutsprocesserna bakom dem: optimerar vi rätt problem, med tillräcklig förståelse av verkligheten och tillräcklig möjlighet att upptäcka och rätta våra misstag?',
      blindspot:
        'En särskilt viktig insikt är att <strong>våra beslut också påverkar vad vi får möjlighet att lära oss</strong>. En policy kan skapa blindfläckar genom att förhindra just de situationer där dess antaganden skulle kunna motbevisas.',

      questionsTitle: 'Fyra diagnostiska frågor',
      questionsIntro: 'Kärnan i workshopen är fyra frågor som var och en riktar in sig på en egen typ av brist.',
      mandatory: 'Alltid obligatorisk',
      questions: [
        {
          q: 'Värderar vi rätt utfall?',
          text: 'Vad belönas, vad straffas och vad utelämnas? Vems intressen, vilka ekosystem och vilka långsiktiga effekter saknas i det vi mäter?'
        },
        {
          q: 'Är orsakssambandsmodellen tillräcklig för beslutet?',
          text: 'Vilka mekanismer, fördröjningar eller återkopplingar kan saknas – och vad händer om två antaganden är fel samtidigt?'
        },
        {
          q: 'Vad hindrar vår egen policy oss från att se?',
          text: 'Vilka fall, tillstånd eller grupper möter vi aldrig på grund av hur vi själva agerar? Frågan ställs även när allt annat pekar mot samma beslut.'
        },
        {
          q: 'Kan genomförbart lärande förbättra beslutet i tid?',
          text: 'När kan vi få evidens som faktiskt skiljer mellan förklaringarna – och hinner vi då ändra kurs? Ibland räcker en enkel regel: om X observeras, gör Y.'
        }
      ],
      responsesNote:
        'Därefter jämförs konkreta åtgärdspaket – behålla nuvarande policy, ändra målet, revidera modellen, pröva och observera, gardera sig eller en kombination – i samma tänkbara framtider. I modellexperimenten hittills är dessa åtgärder inte utbytbara, och ingen av dem är automatiskt bäst.',

      exampleTitle: 'Hur en blindfläck kan se ut',
      exampleLabel: 'Fiktivt exempel, inte ett forskningsresultat',
      example:
        'En kommun erbjuder ett stöd bara till dem som själva ansöker och utvärderar insatsen utifrån hur det går för dem som fått stöd. Resultaten ser goda ut. Men kommunen får aldrig veta något om dem som inte ansökte – kanske för att de inte kände till stödet eller inte orkade. Policyn ger samma observationer oavsett om antagandet stämmer eller inte.',
      exampleHead: ['Antagande', 'Åtgärd', 'Det vi aldrig möter', 'Motevidens som saknas'],
      exampleRow: [
        'De som behöver stöd ansöker själva',
        'Stöd endast efter ansökan',
        'Behövande som inte ansöker',
        'Deras behov, och hur stödet hade påverkat dem'
      ],
      exampleNote:
        'Arbetsbladet innehåller ett liknande ifyllt exempel om kreditgivning och ett utförligt exempel från forskningens syntetiska översvämningsstudie.',

      runTitle: 'Så genomförs workshopen',
      runIntro: 'Välj en kort workshop på 45 minuter eller en fullständig på 85 minuter. Fråga 3 hoppas aldrig över.',
      runHead: ['Fas', 'Kort', 'Full', 'Resultat'],
      phases: [
        ['0. Rama in beslutet och rollerna', '5', '8', 'Beslut, ansvarig, berörda, vad som räknas som misslyckande'],
        ['1. Spelar osäkerheten roll?', '7', '10', 'Vilket rimligt antagande skulle ändra beslutet?'],
        ['2. De fyra frågorna', '20', '35', 'Mål, modell, blindfläckar, genomförbart lärande'],
        ['3. Jämför åtgärdspaket', '8', '20', 'Jämförbara alternativ, kostnader och vad de gör synligt'],
        ['4. Beslut och uppföljning', '5', '12', 'Åtgärd eller omformulering, ansvarig, skyddsåtgärder, omprövning']
      ],
      minutes: 'min',
      tipsTitle: 'Tips för samtalsledaren',
      tips: [
        'Börja fas 1 och fråga 3 med tre minuters tyst, individuellt arbete.',
        'Utse en ”antagandeutmanare” som frågar: om detta antagande är fel, vad kan vår policy fortfarande dölja?',
        'Dokumentera oenighet, även beslutsfattarens invändningar. Den som inte är närvarande har inte gett sitt samtycke.'
      ],

      statusLabel: 'Status',
      status:
        'Utforskande beslutsstöd, version 0.2.1. Ännu inte empiriskt validerat: verktyget ger ingen riskpoäng, optimerar ingen policy och visar inte att ett beslut är rätt. Ett ifyllt arbetsblad är en dokumentation av resonemanget, inte en beslutsregel.',

      downloadsTitle: 'Ladda ner materialet',
      langName: { sv: 'Svenska', en: 'Engelska' },
      files: {
        zip: 'Komplett workshopmaterial (ZIP)',
        pdf: 'Arbetsblad (PDF, för utskrift)',
        docx: 'Arbetsblad (DOCX, redigerbart)',
        md: 'Arbetsblad (Markdown-källa)',
        review: 'Uppföljning efter beslut (PDF, 1 sida)'
      },

      whyTitle: 'Varför på Svensk Subsidiaritet?',
      why:
        'Subsidiaritet handlar om att beslut ska fattas där kunskapen och konsekvenserna finns. Beslutsgranskningen ställer en närliggande fråga: vem ser vad, och vad hindrar våra egna beslut oss från att upptäcka? Verktyget kompletterar ',
      whyLink: 'Institutionell nödvändighetsprövning',
      whyEnd: ', som granskar påståenden om vad som måste vara på ett visst sätt.',

      pilotTitle: 'Hjälp oss att pröva verktyget',
      pilot:
        'Pröva gärna arbetsbladet på ett beslut med begränsade konsekvenser och jämför med er vanliga beslutsprocess. Vi vill gärna höra hur lång tid det tog, vad ni skulle ta bort och om något viktigt som tidigare förbisetts kom fram.',
      pilot2:
        'Nästa forskningsfråga är om beslutsgranskningen hjälper människor att identifiera relevanta antaganden och tidigare förbisedda konsekvenser. En trevlig workshop är inget bevis för bättre beslut – men er återkoppling är ett första underlag.',
      pilotCta: 'Skicka återkoppling →',

      researchTitle: 'Forskningsbakgrund',
      researchIntro:
        'Verktyget bygger på forskningsprogrammet Systemic Optimization. Forskningen använder matematiska modeller och beräkningsexperiment. Resultaten är hittills modellbundna och ska inte förväxlas med empirisk validering i verkliga samhällen.',
      paperLabel: 'Arbetsrapport',
      readOnline: 'Läs online',
      pdfSv: 'PDF (svenska)',
      pdfEn: 'PDF (engelska)',
      researchLink: 'Om forskningsprogrammet ↗',
      repo: 'Källkod och experiment på GitHub ↗',

      central:
        'Den centrala frågan är inte bara ”Hur når vi vårt mål på bästa sätt?” utan också ”Har vi valt rätt mål, förstått systemet och skapat förutsättningar för att upptäcka när vi behöver tänka om?”'
    },
    en: {
      seoTitle: 'Systemic Optimization – Decision Audit | Svensk Subsidiaritet',
      seoDesc:
        'A workshop tool for examining objectives, assumptions, hidden consequences and opportunities for learning before important decisions are made.',
      back: '← All tools',
      eyebrow: 'Workshop tool · version 0.2.1',
      title: 'Systemic Optimization',
      titleSecond: 'Decision Audit',
      lede: 'Are we making the right decision – or optimizing the wrong problem? A worksheet for examining objectives, assumptions, hidden consequences and opportunities for learning before an important decision is made.',
      ctaPdf: 'Download the worksheet (PDF)',
      ctaZip: 'Complete workshop kit (ZIP)',
      badge: 'Exploratory decision support · Not yet empirically validated',

      whatTitle: 'What is systemic optimization?',
      what1:
        'Traditional optimization seeks the best solution to a given problem. But even a mathematically optimal solution can produce poor outcomes if the problem itself is poorly formulated.',
      what2:
        'What if we measure the wrong things, overlook important causal relationships, or do not know which needs will matter in the future? What if our decisions also prevent us from discovering our own mistakes?',
      thesis:
        'Systemic optimization examines not only solutions, but the problems and decision processes behind them: are we optimizing the right problem, with an adequate understanding of reality and enough opportunity to detect and correct our mistakes?',
      blindspot:
        'One particularly important insight is that <strong>our decisions also shape what we are able to learn</strong>. A policy can create blind spots by preventing the very situations in which its assumptions could be challenged.',

      questionsTitle: 'Four diagnostic questions',
      questionsIntro: 'The core of the workshop is four questions, each targeting a different kind of inadequacy.',
      mandatory: 'Always mandatory',
      questions: [
        {
          q: 'Are we valuing the right outcomes?',
          text: 'What is rewarded, penalized or omitted? Whose interests, which ecosystems and which long-term effects are missing from what we measure?'
        },
        {
          q: 'Is the causal model adequate for this decision?',
          text: 'Which mechanisms, delays or feedbacks might be missing – and what happens if two assumptions are wrong together?'
        },
        {
          q: 'What does our own policy prevent us from seeing?',
          text: 'Which cases, states or groups do we never encounter because of how we ourselves act? This question is asked even when everything else points to the same decision.'
        },
        {
          q: 'Can feasible learning improve the decision in time?',
          text: 'When can we obtain evidence that actually distinguishes between explanations – and will there still be time to change course? Sometimes a simple rule suffices: if X is observed, do Y.'
        }
      ],
      responsesNote:
        'The workshop then compares concrete policy packages – keep the current policy, change the objective, revise the model, probe and observe, hedge, or a combination – across the same plausible futures. In the model experiments so far, these responses are not interchangeable, and none of them is automatically best.',

      exampleTitle: 'What a blind spot can look like',
      exampleLabel: 'Fictional example, not a research result',
      example:
        'A municipality offers support only to those who apply, and evaluates it by how recipients fare. The results look good. But the municipality never learns anything about those who did not apply – perhaps because they did not know about the support or lacked the energy. The policy produces the same observations whether or not the assumption holds.',
      exampleHead: ['Assumption', 'Action', 'What we never encounter', 'Missing counterevidence'],
      exampleRow: [
        'Those who need support will apply',
        'Support only on application',
        'People in need who do not apply',
        'Their needs, and how support would have affected them'
      ],
      exampleNote:
        'The worksheet includes a similar filled-in lending example and a detailed example from the research programme’s synthetic flood study.',

      runTitle: 'How to run the workshop',
      runIntro: 'Choose a quick 45-minute or a full 85-minute workshop. Question 3 is never skipped.',
      runHead: ['Phase', 'Quick', 'Full', 'Output'],
      phases: [
        ['0. Frame the decision and roles', '5', '8', 'Decision, owner, affected people, failure condition'],
        ['1. Does the uncertainty matter?', '7', '10', 'Which plausible assumption would change the action?'],
        ['2. The four questions', '20', '35', 'Objectives, model, blind spots, feasible learning'],
        ['3. Compare policy packages', '8', '20', 'Comparable responses, costs and what they make visible'],
        ['4. Decision and review record', '5', '12', 'Action or reframe, owner, safeguards, review trigger']
      ],
      minutes: 'min',
      tipsTitle: 'Facilitation tips',
      tips: [
        'Start Phase 1 and Question 3 with three minutes of silent individual work.',
        'Name an assumption challenger who asks: if this belief is false, what could our policy still hide?',
        'Record disagreements, including the decision owner’s objections. Absent stakeholders have not consented.'
      ],

      statusLabel: 'Status',
      status:
        'Exploratory decision support, version 0.2.1. Not yet empirically validated: it produces no risk score, optimizes no policy and does not establish that a decision is correct. A completed worksheet is a record of reasoning, not a decision rule.',

      downloadsTitle: 'Download the materials',
      langName: { sv: 'Swedish', en: 'English' },
      files: {
        zip: 'Complete workshop kit (ZIP)',
        pdf: 'Worksheet (PDF, print)',
        docx: 'Worksheet (DOCX, editable)',
        md: 'Worksheet (Markdown source)',
        review: 'After-action review (PDF, 1 page)'
      },

      whyTitle: 'Why on Svensk Subsidiaritet?',
      why:
        'Subsidiarity is about making decisions where the knowledge and the consequences are. The Decision Audit asks a related question: who sees what, and what do our own decisions prevent us from discovering? It complements the ',
      whyLink: 'Institutional Necessity Review',
      whyEnd: ', which examines claims about what must be a certain way.',

      pilotTitle: 'Help us test it',
      pilot:
        'Try the worksheet on a decision with limited consequences and compare it with your usual process. We would like to hear how long it took, what you would cut, and whether it surfaced anything consequential you had not considered before.',
      pilot2:
        'The next research question is whether the Decision Audit helps people identify relevant assumptions and previously overlooked consequences. A pleasant workshop is not proof of better decisions – but your feedback is a first step.',
      pilotCta: 'Send feedback →',

      researchTitle: 'Research background',
      researchIntro:
        'The tool builds on the Systemic Optimization research programme, which uses mathematical models and computational experiments. Its findings are currently model-specific and should not be mistaken for empirical validation in real-world societies.',
      paperLabel: 'Working Paper',
      readOnline: 'Read online',
      pdfSv: 'PDF (Swedish)',
      pdfEn: 'PDF (English)',
      researchLink: 'About the research programme ↗',
      repo: 'Source code and experiments on GitHub ↗',

      central:
        'The central question is not only “How can we best achieve our objective?” but also “Have we chosen the right objective, understood the system, and created the conditions to recognize when we need to rethink our approach?”'
    }
  };

  let lang = $derived(($locale === 'en' ? 'en' : 'sv') as Lang);
  let c = $derived(content[lang]);
  let kitOrder = $derived((lang === 'sv' ? ['sv', 'en'] : ['en', 'sv']) as Lang[]);
</script>

<SEO title={c.seoTitle} description={c.seoDesc} />

<div class="mx-auto max-w-4xl px-6 py-12" in:fade={{ duration: 200 }}>
  <a href="/verktyg" class="mb-10 inline-block font-sans text-sm font-medium text-stone-500 hover:text-manifesto-black">{c.back}</a>

  <!-- Header -->
  <header class="mb-16 border-b border-stone-200 pb-10">
    <span class="mb-4 inline-block rounded-full bg-rose-50 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-rose-700">
      {c.eyebrow}
    </span>
    <h1 class="mb-6 font-sans text-4xl font-bold leading-tight text-manifesto-black md:text-5xl">
      {c.title}<br /><span class="text-stone-500">{c.titleSecond}</span>
    </h1>
    <p class="mb-8 max-w-3xl font-serif text-xl leading-relaxed text-stone-600">{c.lede}</p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <a
        href={auditFiles[lang].pdf}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center rounded-lg bg-manifesto-black px-5 py-3 font-sans text-sm font-bold text-white transition-transform hover:bg-stone-800 active:scale-95"
      >
        {c.ctaPdf}
      </a>
      <a
        href={auditFiles[lang].zip}
        class="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-5 py-3 font-sans text-sm font-bold text-stone-700 hover:bg-stone-50"
      >
        {c.ctaZip}
      </a>
    </div>
    <p class="mt-5 font-sans text-xs font-medium uppercase tracking-wide text-stone-400">{c.badge}</p>
  </header>

  <!-- What is systemic optimization -->
  <section class="mb-20" aria-labelledby="what">
    <h2 id="what" class="mb-6 font-sans text-2xl font-bold text-manifesto-black">{c.whatTitle}</h2>
    <div class="space-y-6 font-serif text-lg leading-relaxed text-stone-700">
      <p>{c.what1}</p>
      <p>{c.what2}</p>
      <p class="border-l-4 border-manifesto-black pl-5 font-sans text-xl font-semibold leading-snug text-manifesto-black">{c.thesis}</p>
      <p>{@html c.blindspot}</p>
    </div>
  </section>

  <!-- Four questions -->
  <section class="mb-20" aria-labelledby="questions">
    <h2 id="questions" class="mb-3 font-sans text-2xl font-bold text-manifesto-black">{c.questionsTitle}</h2>
    <p class="mb-8 font-serif text-lg text-stone-600">{c.questionsIntro}</p>
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {#each c.questions as item, i (item.q)}
        <div class="rounded-xl border bg-white p-6 {i === 2 ? 'border-rose-300 ring-1 ring-rose-200' : 'border-stone-200'}">
          <div class="mb-3 flex items-center justify-between gap-3">
            <span class="font-sans text-sm font-bold tabular-nums text-stone-400">{lang === 'sv' ? 'Fråga' : 'Question'} {i + 1}</span>
            {#if i === 2}
              <span class="rounded-full bg-rose-50 px-2 py-0.5 font-sans text-xs font-bold text-rose-700">{c.mandatory}</span>
            {/if}
          </div>
          <h3 class="mb-2 font-sans text-lg font-bold leading-snug text-manifesto-black">{item.q}</h3>
          <p class="font-serif leading-relaxed text-stone-600">{item.text}</p>
        </div>
      {/each}
    </div>
    <p class="mt-8 font-serif text-lg leading-relaxed text-stone-700">{c.responsesNote}</p>
  </section>

  <!-- Blind spot example -->
  <section class="mb-20 rounded-xl bg-stone-100 p-6 md:p-8" aria-labelledby="example">
    <p class="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-stone-400">{c.exampleLabel}</p>
    <h2 id="example" class="mb-4 font-sans text-2xl font-bold text-manifesto-black">{c.exampleTitle}</h2>
    <p class="mb-6 font-serif text-lg leading-relaxed text-stone-700">{c.example}</p>
    <div class="overflow-x-auto">
      <table class="w-full min-w-[36rem] border-collapse overflow-hidden rounded-lg bg-white text-left text-sm">
        <thead>
          <tr class="border-b border-stone-200 font-sans text-xs uppercase tracking-wide text-stone-500">
            {#each c.exampleHead as h (h)}<th class="px-4 py-3 font-bold">{h}</th>{/each}
          </tr>
        </thead>
        <tbody>
          <tr class="font-serif text-stone-700">
            {#each c.exampleRow as cell (cell)}<td class="px-4 py-3 align-top">{cell}</td>{/each}
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-4 font-serif text-sm text-stone-500">{c.exampleNote}</p>
  </section>

  <!-- How to run -->
  <section class="mb-20" aria-labelledby="run">
    <h2 id="run" class="mb-3 font-sans text-2xl font-bold text-manifesto-black">{c.runTitle}</h2>
    <p class="mb-6 font-serif text-lg text-stone-600">{c.runIntro}</p>
    <div class="overflow-x-auto rounded-xl border border-stone-200 bg-white">
      <table class="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr class="border-b border-stone-200 font-sans text-xs uppercase tracking-wide text-stone-500">
            {#each c.runHead as h, i (h)}
              <th class="px-4 py-3 font-bold {i === 1 || i === 2 ? 'text-right' : ''}">{h}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each c.phases as [phase, quick, full, output] (phase)}
            <tr class="border-b border-stone-100 last:border-0">
              <td class="px-4 py-3 font-sans font-semibold text-manifesto-black">{phase}</td>
              <td class="whitespace-nowrap px-4 py-3 text-right tabular-nums text-stone-600">{quick} {c.minutes}</td>
              <td class="whitespace-nowrap px-4 py-3 text-right tabular-nums text-stone-600">{full} {c.minutes}</td>
              <td class="px-4 py-3 font-serif text-stone-600">{output}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <h3 class="mb-3 mt-10 font-sans text-xs font-bold uppercase tracking-wider text-stone-400">{c.tipsTitle}</h3>
    <ul class="space-y-2 font-serif text-lg leading-relaxed text-stone-700">
      {#each c.tips as tip (tip)}
        <li class="flex gap-3"><span class="text-stone-400">–</span><span>{tip}</span></li>
      {/each}
    </ul>

    <p class="mt-10 rounded-md border-l-4 border-amber-500 bg-amber-50 px-4 py-3 font-serif text-sm leading-relaxed text-stone-700">
      <strong class="font-sans">{c.statusLabel}:</strong>
      {c.status}
    </p>
  </section>

  <!-- Downloads -->
  <section class="mb-20" aria-labelledby="downloads" id="ladda-ner">
    <h2 id="downloads" class="mb-6 font-sans text-2xl font-bold text-manifesto-black">{c.downloadsTitle}</h2>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      {#each kitOrder as kit (kit)}
        <div class="rounded-xl border border-stone-200 bg-white p-6">
          <h3 class="mb-4 font-sans text-lg font-bold text-manifesto-black">{c.langName[kit]}</h3>
          <ul class="space-y-2 font-sans text-sm">
            {#each fileKeys as key (key)}
              <li>
                <a
                  href={auditFiles[kit][key]}
                  hreflang={kit}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="{key === 'zip' ? 'font-bold' : 'font-medium'} text-blue-700 hover:underline"
                >
                  {c.files[key]}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- Why here + pilot -->
  <section class="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2">
    <div class="rounded-xl border border-stone-200 bg-white p-6">
      <h2 class="mb-3 font-sans text-lg font-bold text-manifesto-black">{c.whyTitle}</h2>
      <p class="font-serif leading-relaxed text-stone-700">
        {c.why}<a href="/verktyg/nodvandighetsprovning/" class="text-blue-700 hover:underline">{c.whyLink}</a>{c.whyEnd}
      </p>
    </div>
    <div class="flex flex-col rounded-xl bg-manifesto-black p-6 text-white">
      <h2 class="mb-3 font-sans text-lg font-bold">{c.pilotTitle}</h2>
      <p class="mb-3 font-serif leading-relaxed text-stone-300">{c.pilot}</p>
      <p class="mb-6 font-serif text-sm leading-relaxed text-stone-400">{c.pilot2}</p>
      <a href="/kontakt" class="mt-auto inline-block self-start rounded bg-white px-4 py-2 font-sans text-sm font-bold text-black hover:bg-stone-200">
        {c.pilotCta}
      </a>
    </div>
  </section>

  <!-- Research background -->
  <section class="mb-16" aria-labelledby="research">
    <h2 id="research" class="mb-3 font-sans text-2xl font-bold text-manifesto-black">{c.researchTitle}</h2>
    <p class="mb-8 font-serif text-lg leading-relaxed text-stone-600">{c.researchIntro}</p>
    <div class="space-y-5">
      {#each papers as p (p.number)}
        <div class="flex flex-col gap-5 rounded-xl border border-stone-200 bg-white p-6 sm:flex-row">
          <a href={p.url} target="_blank" rel="noopener noreferrer" class="block w-24 shrink-0 self-center sm:self-start">
            <img src={p.cover} alt="" class="h-auto w-full rounded shadow-md ring-1 ring-black/10" loading="lazy" />
          </a>
          <div class="min-w-0 flex-1">
            <p class="mb-1 font-sans text-xs font-bold uppercase tracking-wider text-stone-400">{c.paperLabel} {p.number}</p>
            <h3 class="mb-2 font-sans text-lg font-bold leading-snug text-manifesto-black">
              <a href={p.url} target="_blank" rel="noopener noreferrer" class="hover:underline">{p.title[lang]}</a>
            </h3>
            <p class="mb-4 font-serif text-stone-600">{p.desc[lang]}</p>
            <div class="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm font-medium">
              <a href={p.url} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">{c.readOnline} ↗</a>
              <a href={p.pdf.sv} target="_blank" rel="noopener noreferrer" hreflang="sv" class="text-blue-700 hover:underline">{c.pdfSv}</a>
              <a href={p.pdf.en} target="_blank" rel="noopener noreferrer" hreflang="en" class="text-blue-700 hover:underline">{c.pdfEn}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm font-medium">
      <a href={RESEARCH} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">{c.researchLink}</a>
      <a href={REPO} target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">{c.repo}</a>
    </div>
  </section>

  <blockquote class="rounded-xl border border-stone-200 bg-stone-50 p-6 font-serif text-xl leading-relaxed text-manifesto-black md:p-8">
    {c.central}
  </blockquote>
</div>
