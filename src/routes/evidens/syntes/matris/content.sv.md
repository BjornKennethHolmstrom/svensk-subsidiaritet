# Evidensmatrisen

## Version 0.2 — provisorisk med flit

Det här är det första syntesskiktet i Svensk Subsidiaritets Evidence-korpus. Statusarna speglar **det nuvarande korpuset**, inte slutliga slutsatser, och uppdateras när nya studier, fall, data och modeller läggs till. Se uppdateringsregeln längst ner.

---

## Statusvokabulär

- **Stödd** — nuvarande evidens stödjer i stort hypotesen inom dess angivna räckvidd.
- **Villkorat stödd** — evidensen stödjer den under identifierbara förhållanden.
- **Blandad** — trovärdig evidens pekar åt olika håll.
- **Olöst** — otillräcklig evidens för att bedöma.
- **Svag** — viss evidens finns, men stödet är begränsat eller dåligt matchat.
- **Motsagd** — nuvarande evidens strider mot hypotesen.

*Statusfältet kan ibland vara en sammansatt beskrivning snarare än en enskild kategori — t.ex. "Modellstött / empiriskt olöst" (se H2b) eller "Explorativ / olöst" (se H18, H20). Det används när en hypotes har reellt stöd från en formell modell eller simulering men ännu inget empiriskt eller institutionellt test — en viktig skillnad, inte bara en stilistisk variant av "Olöst".*

**Konfidens:** Hög / Medel / Låg / Olöst.

**Mekanismträff:** Hög (evidensen testar mekanismen direkt) / Delvis (testar en besläktad mekanism) / Låg (relevant huvudsakligen genom analogi).

---

## Hypotesmatris

| ID | Hypotes | Nuvarande evidens | Motevidens / kvalificering | Mekanismträff | Konfidens | Status |
|---|---|---|---|---|---|---|
| H1 | Lokal information kan förbättra matchningen mellan handling och förhållanden när informationen är starkt lokaliserad och beslutsfattarna har tillräcklig autonomi/kapacitet. | [S2](/evidens/fall/) visar att lokalt ansvar inte automatiskt ger bättre informationsanvändning; internationell evidens (Faguet 2004) stödjer behovsanpassad fördelning under decentralisering. | Lokal information kan ignoreras, förvrängas eller underutnyttjas; kapacitet och incitament spelar roll. | Delvis | Medel | Villkorat stödd |
| H2 | Större legitim variation i preferenser ökar det potentiella värdet av lokal differentiering. | Teoretisk och jämförande decentraliseringslitteratur stödjer preferensheterogenitet som mekanism; nuvarande svenska fallurval testar det inte ännu direkt. | Preferenstillfredsställelse är inte identiskt med välfärd; rättigheter, spridningseffekter och skala kan dominera. | Delvis | Låg | Olöst |
| H2b | Där relevanta *behov* (skilt från preferenser) varierar väsentligt kan enhetlig försörjning ge sämre täckning än en gemensam ram med anpassade komponenter. | [AUBI-simuleringar](/evidens/datamodeller/simuleringar/aubi/) visar villkorat mekanistiskt stöd inom modellen: adaptiv provision ger bättre behovstäckning än ren universalism vid hög behovsheterogenitet och måttligt mätfel; fördelen försvinner vid låg heterogenitet eller högt mätfel. Inget empiriskt/institutionellt test ännu. | Det här är modellstöd, inte empiriskt stöd — parametrar (t.ex. φ_work, η_work, kapacitetsnivån C) är fritt valda, inte kalibrerade mot verklig data. Bör hållas strikt åtskild från H2 (preferensheterogenitet). | Hög inom modellen; ej testad empiriskt | Låg | Modellstött / empiriskt olöst |
| H3 | Decentralisering förbättrar mindre sannolikt utfall när den mottagande kapaciteten är otillräcklig. | [S2](/evidens/fall/) dokumenterar kapacitets- och lokalstyrningssvagheter; [S5](/evidens/fall/) visar samverkan som stärker små kommuners kapacitet och specialisttillgång; [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) visar utbredd delning av just specialistkapacitet (IT, upphandling, miljötillsyn, delar av socialtjänsten). | Kapacitet är flerdimensionell och kan interagera med arkitekturen. | Hög | Medel–Hög | Stödd |
| H4 | Formell decentralisering skapar inte nödvändigtvis substantiell subsidiaritet när praktisk auktoritet, information eller initiativ förblir koncentrerade inom den mottagande nivån. | [S2](/evidens/fall/) syftade uttryckligen till decentralisering under kommunnivå men fann ojämn lokal styrning; [S1](/evidens/fall/sverige/kommunsammanslagningar/) motiverar detaljerad intern auktoritetskartläggning. | Fullständig kommun→skola/professionell auktoritetskartläggning är ofullständig. | Hög | Medel | Villkorat stödd |
| H5 | Där betydande stordriftsfördelar eller specialisering finns kan organisation på högre nivå prestera bättre än lokal tillhandahållning. | [S1](/evidens/fall/sverige/kommunsammanslagningar/) motiverades uttryckligen delvis av kapacitet/skala; [S5](/evidens/fall/) visar selektiv samverkan kring specialistfunktioner; [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) fann att funktioner kodade högt på skala och specialistkrav faktiskt i hög grad organiseras gemensamt (tydligast upphandling). | S1 och S5 visar också att större skala inte automatiskt minskar totala kostnader; VA-fallet visar att generella skalfördelar inte bestämmer produktionsskalan när nätgeografi och nedlagt kapital dominerar. | Hög | Medel–Hög | Villkorat stödd |
| H6 | Betydande spridningseffekter ökar värdet av samordning eller gemensamma regler på högre nivå. | [S3](/evidens/fall/) visar ihållande samordningsproblem mellan huvudmän; ytterligare fall återstår som framtida test. | Viss samordning kan uppnås genom samverkan snarare än centralisering. | Delvis | Medel | Villkorat stödd |
| H7 | Optimal styrningsskala varierar per funktion snarare än att följa en enda universell administrativ nivå. | Starkt mönster genom [S1](/evidens/fall/sverige/kommunsammanslagningar/), S3, S4 och S5; historiska svenska reformdokument erkände själva olika funktionella skalkrav; [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) ger den första systematiska sektorsövergripande jämförelsen — åtta funktioner kodade komponentvis, med tydligt olika skalprofiler. | Åtta funktioner är ett strategiskt, inte representativt, urval; jämförelsen mäter organisationsform, inte utfall. | Hög | Medel–Hög | Stödd |
| H8 | Lokala enheter kan ibland uppnå skal-/samordningsfördelar genom samverkan utan full sammanslagning. | [S5](/evidens/fall/) ger starkt stöd för utbredd samverkan, kapacitets- och specialiseringsvinster utan territoriell sammanslagning; [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) visar samma mönster funktion för funktion, men också att räddningstjänsten i praktiken ofta passerat samverkan och blivit en gemensam organisation. | Direkt jämförelse mot sammanslagning/oberoende drift förblir olöst; samordnings-/ansvarskostnader finns. | Hög | Medel | Villkorat stödd |
| H9 | Lokal autonomi kan samexistera med fiskal utjämning och riskdelning på högre nivå. | S4 dokumenterar direkt svensk lokal autonomi kombinerad med omfattande fiskal utjämning; [S1](/evidens/fall/sverige/kommunsammanslagningar/) visar intern utjämning genom territoriell fusion; [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) identifierar äldreomsorgen som ett rent fall — lokal auktoritet och lokal produktion med nationell kostnadsutjämning. | Likvärdig service är inte identiskt med fiskal likvärdighet; incitaments- och formelbegränsningar kvarstår; VA visar att finansiell poolning kan vara rättsligt blockerad även där produktionen delas. | Hög | Medel–Hög | Stödd |
| H10 | Längre representationskedjor kan minska signaltroheten från medborgare/berörda aktörer. | [S1](/evidens/fall/sverige/kommunsammanslagningar/) dokumenterar minskad demokratisk närhet efter sammanslagningar; GAE III ger en formell mekanism för representationskedjeförsvagning. | Filtrering/aggregering kan ibland tillföra värde; direkta svenska mått på informationsförlust saknas. | Delvis | Medel | Villkorat stödd |
| H11 | Fler observatörer förbättrar inte nödvändigtvis kunskap när observationsfel är starkt korrelerade. | GAE X innehåller ett direkt empiriskt AI-test med hög skattad korrelation; institutionell generalisering är inte fastställd. | Starkt domänspecifik evidens hittills. | Delvis | Låg–Medel | Olöst |
| H12 | Anpassning begränsas av den långsammaste kritiska länken mellan sensering, lärande och genomförande. | GAE XV ger formellt modellstöd; svenska styrningsfall antyder flaskhalsar vid gränssnitt, men direkta empiriska institutionella test saknas. | Verkliga system kan använda parallellism/redundans för att kompensera. | Delvis | Låg–Medel | Olöst |
| H13 | Att bevara pluralt observerande/flera modellvägar kan hjälpa till att upptäcka fel som ett dominerande optimerat system missar. | GAE XIX/XXIV ger formell/modellmässig motivering; empirisk styrningsevidens är ännu inte sammanställd. | Mångfald kan tillföra brus och samordningskostnad. | Delvis | Låg | Olöst |
| H14 | Styrningsgränser fungerar bättre när de matchar funktionella problemgränser eller har effektiva överbryggande mekanismer. | S3 stödjer starkt vikten av gränsöverskridande samordning; [S5](/evidens/fall/) stödjer samverkan som en överbryggande mekanism; [S1](/evidens/fall/sverige/kommunsammanslagningar/) använder funktionell geografi i utformningen; [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) visar att gränser i praktiken är nästlade — räddningstjänstens lokala noder ligger i en gemensam organisation som ligger i ett större ledningssystem. | Gränsanpassning har ännu inte mätts systematiskt; bilden är mer komplex än en enda "rätt" gräns per funktion. | Hög | Medel–Hög | Villkorat stödd |
| H15 | En resilient subsidiaritetsarkitektur bör kunna ändra auktoritetsfördelning när problemstrukturen förändras. | S3 visar upprepade gränsjusteringar efter reform; S4 visar iterativ formelrevidering; [S1](/evidens/fall/sverige/kommunsammanslagningar/) visar en korrigering genom lokala organ 1979. | Direkt evidens att adaptiv omfördelning förbättrar utfall saknas. | Delvis | Låg–Medel | Olöst |
| H16 | Decentraliserat beslutsfattande fungerar bättre när aktörer har tillräcklig medborgerlig/institutionell kompetens. | Konceptuellt stödd; R8-evidenskorpus ännu inte sammanställt. | Kompetens är flerdimensionell; arkitekturen kan kompensera för begränsad kompetens. | Låg | Låg | Olöst |
| H17 | Meningsfullt deltagande kan i sig förbättra medborgerlig kunskap, politisk effektivitetskänsla och deliberativ förmåga. | Inledande litteratur visar vinster i kunskap, intern politisk effektivitet och resonemang i vissa mini-publics; fullständigt korpus återstår att bygga. | Effekter på bredare medborgarengagemang är mer osäkra; varaktighet är oklar. | Delvis | Medel | Villkorat stödd |
| H18 | Styrningsarkitekturer och mänskliga förmågor kan utvecklas genom ömsesidigt förstärkande eller försvagande återkopplingsloopar. | Teoretisk kompatibilitet med GAE och medborgardeltagandelitteratur; inget moget longitudinellt test ännu. | Kausal riktning och tidsdynamik är olösta. | Låg–Delvis | Låg | Explorativ / olöst |
| H19 | Systemtänkande kan förbättra beslutskvalitet i komplexa styrningsmiljöer. | Rimlig och GAE-relevant; robust operationalisering och kausal evidens är ännu inte fastställda. | Risk för svag/begreppsligt tvetydig mätning. | Låg | Låg | Olöst |
| H20 | Styrningsarkitekturens effektivitet beror delvis på aktörskompetens, medan arkitekturen själv kan forma kompetens. | Framväxande från S2/S3/S5 och R8:s konceptuella arbete; direkta interaktionstest saknas. | Kan vara ickelinjär och starkt kontextberoende. | Delvis | Låg | Explorativ / olöst |

*Fallen S2–S5 har nu egna fullständiga sidor — se [Fall](/evidens/fall/) för S2 (skoldecentralisering), S3 (Ädelreformen), S4 (kommunalekonomisk utjämning) och S5 (mellankommunal samverkan).*

---

## Inledande syntespåståenden

### C1 — Governance fit
> Nuvarande evidens är mer förenlig med ett villkorat "governance fit"-påstående än med en universell decentraliseringsprincip.

Grund: S1–S5, H3/H5/H7/H8/H9/H14. **Status:** Villkorat stödd. **Konfidens:** Medel.

### C2 — Formell decentralisering är en otillräcklig proxy för subsidiaritet
> Formell överföring av ansvar etablerar inte tillförlitligt substantiell beslutsnärhet.

Grund: S1, S2, H4, H10. **Status:** Villkorat stödd. **Konfidens:** Medel.

### C3 — Funktionell differentiering spelar roll
> Den lämpliga styrningsskalan verkar variera avsevärt beroende på funktion.

Grund: S1, S3, S4, S5, H5, H7, H14. **Status:** Villkorat stödd. **Konfidens:** Medel–Hög.

### C4a — Styrningsfunktioner kan faktoriseras över skalor
> Olika komponenter i en styrningsfunktion — politisk auktoritet, produktion, specialistkapacitet, finansiering och koordinering — kan ligga på olika skalor i stället för att buntas ihop på en enda territoriell nivå.

Grund: S4, S5, jämförelse med S1, H8/H9, samt [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/), som fann komponentseparation i samtliga sexton undersökta funktioner över två frysta blindtest — det andra med mekaniskt (hashvalt) urval och med fall utanför den kommunala sfären. **Status:** Villkorat stödd. **Konfidens:** Medel.

*Ej Hög: sexton funktioner, litet urval, bedömning i komponentkodningen — och att en arkitektur förekommer säger inget om dess utfall.*

### C4b — Problemstruktur förutsäger den specifika faktoriseringen
> Den relativa vikten av lokal information, stordriftsfördelar, specialistkapacitet, externaliteter och riskpoolning räcker för att förutsäga vilka konkreta styrningskomponenter som bör poolas och vilka som bör förbli lokala.

Grund: [styrningsfaktoriseringstestet](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) — v0.1 fick en tydlig funktionell träff, två delvisa och tre tydliga missar på åtta funktioner. v0.5 förbättrade den låsta föregångaren v0.4 på fyra av sex mått i ett nytt blindtest, starkast för bindande beslutanderätt (60,4 % → 78,0 %), men fyra skarpt lokala funktioner fick fortfarande noll sannolikhet för kompatibel helarkitektur. **Status:** Blandad / olöst, med delförbättring. **Konfidens:** Låg–Medel.

*Ingen framgångströskel förregistrerades och ingen slumpbaslinje har publicerats. Det tolkbara resultatet är förbättringen mot den låsta föregångaren på samma nya fall, inte de absoluta träffprocenten.*

### C5 — Samordning är en designvariabel, inte bara en kostnad
> När auktoritet och kapacitet fördelas över flera noder blir samordningsarkitekturen en avgörande faktor för om decentralisering ger fördelar eller fragmentering.

Grund: S3, S5, H6/H8/H14, GAE:s samordningsmekanismer, samt separationen av policysamordning och gränssnittssamordning i [styrningsfaktoriseringssimulatorn v0.5](/evidens/datamodeller/simuleringar/styrningsfaktorisering/). **Status:** Villkorat stödd. **Konfidens:** Medel.

### C6 — Mänsklig kompetens är en framväxande saknad variabel
> Effektiviteten hos komplex eller decentraliserad styrning kan bero inte bara på institutionell arkitektur utan också på de kognitiva, medborgerliga, professionella och relationella förmågorna hos aktörerna som verkar inom den.

Grund: R8:s konceptuella ramverk, S2:s kapacitetsfynd, S3:s professionella gränssamordning, S5:s tillits-/relationella kompetens, H16–H20. **Status:** Explorativ. **Konfidens:** Låg.

---

## Vad matrisen INTE stödjer just nu

Det nuvarande korpuset motiverar **inte** påståenden som:

- decentralisering är generellt bättre än centralisering;
- mindre kommuner är generellt bättre;
- större kommuner är generellt bättre;
- kommunalisering orsakade Sveriges försämrade skolresultat;
- lokal kunskap ger automatiskt bättre beslut;
- polycentrisk styrning är automatiskt mer resilient;
- högre medborgerliga/utvecklingsmässiga "stadier" ger bättre styrning.

Dessa förblir hypoteser, omtvistade tolkningar, eller öppna frågor.

---

## Evidensluckor som v0.1 avslöjar

Högst prioriterade luckor:

1. Direkta mått på faktisk beslutsnärhet.
2. Kartläggning av auktoritet/information/resurser under formella administrativa nivåer.
3. Jämförelse av sammanslagning kontra samverkan kontra oberoende drift.
4. Longitudinell evidens om anpassning och institutionellt lärande.
5. Effekter av fiskal utjämning på tjänsteutfall och incitament.
6. Svensk evidens om deltagande och kompetensutveckling.
7. Operationalisering av systemtänkande.
8. Direkta test av interaktionen mellan arkitektur och kompetens.

Se den fullständiga, organiserade listan på **[Öppna frågor →](/evidens/syntes/oppna-fragor/)**.

---

## Uppdateringsregel

Matrisen ska versioneras. Varje betydande statusändring ska registrera: datum, vilken evidens som lades till, och skälet till förändringen. En hypotes ska inte flyttas från "olöst" till "stödd" enbart för att en ny stödjande studie dyker upp om meningsfull motevidens förblir outforskad.

---

## Ändringslogg

### v0.2 — efter styrningsfaktoriseringstestet

**Tillagd evidens:** [Kan styrningens skala faktoriseras?](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) — ett fryst blindtest av en mekanistisk modell mot åtta svenska kommunala funktioner, med prediktionerna låsta före utfallskodning.

**Ändringar:**

| Post | Före | Efter | Skäl |
|---|---|---|---|
| C4 | Lovande / villkorat stödd, Medel | Delad i C4a och C4b | Testet stödjer faktorisering som fenomen men inte modellens specifika faktoriseringsprediktion. Att behålla ett påstående skulle dölja att den ena halvan klarade sig och den andra inte. |
| C4a | — | Villkorat stödd, Medel | Komponentseparation observerad i samtliga åtta funktioner. |
| C4b | — | Blandad / olöst, Låg–Medel | Modellen missade tre av åtta med hög prediktionssäkerhet. |
| H5 | Villkorat stödd, Medel | Villkorat stödd, Medel–Hög | Sektorsövergripande stöd för att skala och specialistkrav faktiskt driver gemensam organisation; kvalificerat av VA-fallet. |
| H7 | Stödd, Medel–Hög | Oförändrad status, ny evidens | Den systematiska sektorsjämförelse matrisen efterlyste finns nu, om än i liten skala. |
| H9 | Stödd, Medel–Hög | Oförändrad status, ny evidens | Äldreomsorgen är ett rent fall av lokal autonomi med nationell riskpoolning. |
| H14 | Villkorat stödd, Medel–Hög | Oförändrad status, ny evidens | Gränser visar sig vara nästlade snarare än enskilda. |
| H3, H8 | Oförändrade | Ny evidens | Stödjande men inte statusförändrande. |

**Inte ändrat:** ingen hypotes flyttades till Hög konfidens. Ett test på åtta strategiskt valda funktioner motiverar inte det.

---
**Tillagd evidens (v0.5):** [Kan olika delar av samma samhällsfunktion behöva styras på olika nivåer?](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) — ett andra blindtest, med mekaniskt hashvalt urval av åtta nya funktioner och sexrollsarkitektur.

**Ändringar:**

| Post | Före | Efter | Skäl |
|---|---|---|---|
| C4a | Villkorat stödd, Medel | Oförändrad status, ny evidens | Komponentseparation replikerad på åtta nya funktioner, nu även regionala och nationella. Konfidensen höjs inte: sexton fall är fortfarande få. |
| C4b | Blandad / olöst, Låg–Medel | Blandad / olöst med delförbättring, Låg–Medel | Bindande beslutanderätt förutsägs klart bättre än i föregående låsta version, men fyra av åtta fall har fortfarande noll helarkitekturkompatibilitet. |
| C5 | Villkorat stödd, Medel | Oförändrad status, ny evidens | Separationen av policy- och gränssnittssamordning gav en mätbar förbättring — samordningsarkitektur är en egen designvariabel. |
| H5, H7, H9, H14 | Oförändrade | Ny evidens | Stödjande men inte statusförändrande. |

---

*Version: v0.2. Motsvarar det inledande svenska fallurvalet (S1–S5), forskningsämnet R1 och det första frysta styrningsfaktoriseringstestet.*
