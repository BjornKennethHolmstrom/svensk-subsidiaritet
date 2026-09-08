# AUBI-simuleringar

## Adaptiv universell basinkomst — simuleringar av behovsheterogenitet, socialt kapital och kollektiv finansiering

**Status:** Explorativ. Det här är modell- och simuleringsresultat, inte empirisk evidens om verkliga institutioner. Vi skriver aldrig att simuleringarna "stödjer H2b empiriskt" — de ger **mekanistiskt stöd inom modellen**, vilket är något annat. Se **[Så vet vi](/evidens/sa-vet-vi/)** för skillnaden.

---

## Frågan

> Under vilka betingelser kan en adaptiv universell grundinkomst — inklusive en kollektiv fond för frivilligt arbete — förbättra välfärden jämfört med ren universalism, enbart riktade stöd, eller enbart individuell basinkomst?

Det här är ett originalarbete för Svensk Subsidiaritet (Björn Kenneth Holmström, med DeepSeek som samarbetspartner för modellering och kod) — inte en GAE-rapport. Simuleringarna testar en specifik arkitektur: en universell grund, ett behovsanpassat påfyllnadslager, och en kollektiv fond som finansierar frivilligt arbete.

---

## Tre nivåer av evidens — och var det här arbetet hör hemma

Det är lätt att blanda ihop tre olika typer av stöd för en hypotes:

```text
EMPIRISK EVIDENS
      ↓
Vad händer faktiskt hos människor eller i samhällen?

MODELLEVIDENS
      ↓
Kan den föreslagna mekanismen i princip ge det beteende vi förväntar oss?

SIMULERING
      ↓
Under vilka parameterförhållanden fungerar — eller misslyckas — mekanismen?
```

AUBI-simuleringarna ger oss framför allt de två nedersta nivåerna: **modellevidens och simulering**. De ger oss **inte** empirisk evidens om verkliga välfärdssystem. Det är en skillnad vi håller strikt genom hela den här sidan.

---

## Viktig distinktion: H2b, inte H2

Det är lätt att vilja koppla det här direkt till hypotes **H2** i Evidensmatrisen ("större legitim variation i preferenser ökar värdet av lokal differentiering"). Det vore fel.

H2 handlar om **preferensheterogenitet** — att människor vill olika saker.
Det här arbetet testar **H2b — behovsheterogenitet**:

> När relevanta behov varierar väsentligt mellan människor, grupper eller platser kan en enhetlig försörjning ge sämre träff än en gemensam ram med lämpligt anpassade komponenter.

En transfer som varierar med funktionsnedsättning eller familjesituation testar inte om lokala *preferenser* motiverar differentiering — den testar om lokala *behovsskillnader* gör det. Det är olika mekanismer med olika testbara implikationer, och rapporten håller dem uttryckligen isär. H2b behandlas därför som en egen hypotes, inte en variant av H2.

---

## Vad simuleringarna testar

Arkitekturen har tre skikt: en universell grund, ett adaptivt påfyllnadslager styrt av observerade (brusiga) behov, och en kollektiv fond som finansierar frivilligt arbete. Nio delstudier undersöker heterogenitet, mätfel, dynamisk parameterjustering, målfunktionens viktning, återkoppling, socialt kapital, allokering mellan individuell transfer och kollektiv fond, känslighet för effektivitetsparametrar — samt, i en senare omgång, en real kapacitetsbegränsning för själva basinkomsten.

---

## Huvudresultat: villkorat mekanistiskt stöd för H2b

> **När behovsheterogeniteten är hög och mätfelet måttligt ger adaptiv provision bättre behovstäckning än ren universalism. När heterogeniteten är låg är universalism ofta bättre.**

Det här mönstret återkommer både i de tidiga jämförelserna och i den senare allokeringsanalysen: vid hög heterogenitet hamnar optimum på en lägre universell bas och mer adaptiv/fondbaserad respons; relativt homogena populationer gynnas mer av en högre, enklare bas.

Det är precis den typ av **villkorlighet** vi letade efter — "behovsheterogenitet → adaptation lönar sig" är inte tillräckligt i sig. Mätfel, administrationskostnad och målfunktionens utformning är alla nödvändiga villkor, inte fotnoter.

### När adaptation *inte* hjälper — failure modes

Lika viktigt som när mekanismen fungerar är när den inte gör det:

- **Vid låg behovsheterogenitet** ger adaptation liten eller ingen fördel — administrationskostnaden för att observera och rikta blir en ren förlust.
- **Vid högt mätfel** försvinner den adaptiva fördelen helt: systemet riktar resurser fel tillräckligt ofta för att äta upp vinsten från bättre matchning.
- **Utan explicit viktning mot svår deprivation (λ)** optimerar målfunktionen lätt bort de mest utsatta till förmån för genomsnittlig träffsäkerhet — ett rent designval kan alltså producera ett resultat som ser bra ut i genomsnitt men är dåligt för dem med störst behov.

### Övriga fynd

- **Deltagande i frivilligt arbete var stabilt kring 53 %, i stort sett oberoende av basinkomstnivån** — se kalibreringsreservationen nedan innan detta tolkas som något om verkligt mänskligt beteende.
- **En blandning (≈60 % basinkomst / 40 % kollektiv fond) var robust** över flera scenarier när socialt kapital vägdes in, inklusive efter att en real kapacitetsbegränsning infördes för basinkomsten. **b ≈ 0,6 är ett simuleringsresultat för den här modellen, de här parametrarna och den här målfunktionen — inte en policyrekommendation.**

---

## Vad vi själva flaggade, och vad rapporten redan svarat på

Vi frågade internt om simuleringarna verkligen skilde pengar som *icke-resurs* (MMT:s poäng) från faktiska reala resurser. Rapportens senaste version är ovanligt rak om det här, och förtjänar att beskrivas i sak snarare än tonas ner.

Den ursprungliga modellen bytte namn från "budget" till "real resurs" (R) utan att strukturellt förändra mekaniken — R fördelades fortfarande som en enkel skalär mellan basinkomst och kollektiv fond, utan priser, utbudselasticitet eller inflationsmekanism. Den kollektiva fonden fick en verklig kapacitetsgräns (antalet arbetstimmar begränsas av fondens storlek), men **basinkomsten gjorde det inte** — pengar delades ut som om de automatiskt kunde omsättas i varor och tjänster, oavsett om reala resurser faktiskt fanns tillgängliga.

En ny delstudie ("Real kapacitetsmodell") adresserar det här direkt: basinkomstens *reala köpkraft* begränsas nu av en produktionskapacitet C via en mättande funktion, så att en nominell transfer som överstiger kapaciteten ger urholkad köpkraft snarare än fullt täckt behov. Resultatet: den optimala fördelningen (b ≈ 0,6) förblir stabil över de testade kapacitetsnivåerna, medan högre kapacitet genomgående förbättrar utfallet — men rapporten medger samtidigt att den reala kapacitetsfunktionen är starkt förenklad och att basinkomstsidans pris-/utbudseffekter fortfarande inte modelleras fullt ut.

**Vår bedömning:** det här är ett genuint, väl dokumenterat steg framåt, inte ett löst problem. Asymmetrin mellan B och K är fortfarande en förenkling (en enda skalär kapacitet C, ingen faktisk prisnivå, inget om *vilka* varor som är knappa). Men skillnaden mot den tidigare versionen är verklig: rapporten gör nu ett konkret försök att testa MMT-mekanismen i kod, i stället för att bara åberopa den i prosa.

---

## Empiriskt testbara förutsägelser

Det kanske mest värdefulla resultatet av de här simuleringarna är inte "AUBI fungerar" — det är att modellen genererar konkreta, falsifierbara förutsägelser som kan prövas mot verkliga transfereringssystem:

**Förutsägelse 1.** Högre behovsheterogenitet i en population bör öka värdet av differentierad/adaptiv tilldelning relativt enhetlig tilldelning.

**Förutsägelse 2.** Högre observationsfel (svårare att korrekt bedöma behov) bör minska eller eliminera den fördelen.

**Förutsägelse 3.** Fördelen av adaptation beror på hur välfärdsmålet viktas — särskilt hur systemet behandlar svår deprivation, inte bara genomsnittlig träffsäkerhet.

**Förutsägelse 4.** Snabb parameteranpassning bör skapa mer volatilitet i utfall än måttlig anpassning.

**Förutsägelse 5.** Den optimala balansen mellan individuell och kollektiv tilldelning bör bero på real kapacitet och hur mycket socialt värde viktas in.

Dessa förutsägelser pekar mot en konkret nästa empirisk fråga: **har verkliga socialförsäkrings- och transfereringssystem — sjukersättning, barnbidrag, bostadsstöd, anhörigstöd, personliga budgetar, adaptivt socialt skydd — egenskaper som motsvarar modellens antaganden, och matchar deras faktiska utfall förutsägelserna ovan?** Det är dit vi bör gå härnäst, inte till ännu fler simuleringar av samma modell. Se **[Öppna frågor →](/evidens/syntes/oppna-fragor/)**.

---

## Vad det här etablerar, och vad det inte gör

**[R] — Rigoröst inom modellen:** Givet modellens egna antaganden (gammafördelade behov, en logistisk arbetsbeslutsregel, en mättande kapacitetsfunktion för real köpkraft) är resultaten interna, reproducerbara beräkningsfynd.

**[H] — Heuristiskt / explorativt:** Vad resultaten *antyder* om verkliga AUBI-system. Rapportens egen konfidensbedömning nedgraderades mellan versioner — de nya hypoteserna (H21–H24, samt H2b) är nu genomgående märkta **explorativa, låg konfidens**, inte "villkorat stödd" som i ett tidigare utkast. Det är rätt kalibrering: parametrar som φ_work, η_work och kapacitetsnivån C är fritt valda, inte kalibrerade mot verklig data.

**Det här etablerar INTE:**
- att ett AUBI-system skulle fungera så här i verkligheten
- att 60/40-fördelningen är en policyrekommendation
- att deltagandesiffran (53 %) säger något om verkligt mänskligt beteende
- att modellen har löst frågan om real resursbegränsning fullt ut (se ovan)

---

## H2b i Evidensmatrisen

Vi har lagt till en rad för **H2b** i den centrala Evidensmatrisen, med status **"Modellstött / empiriskt olöst"** — en sammansatt statusbeskrivning i linje med hur matrisen redan hanterar liknande fall (jämför H18, H20). Det är inte en ny formell kategori, bara en tydligare beskrivning av ett läge matrisen redan har språk för.

De fyra mer AUBI-arkitekturspecifika hypoteserna (H21–H24) har vi medvetet **inte** lagt in som egna nummer i den centrala matrisen ännu — de gäller den specifika kollektiva fondens design snarare än allmänna styrningsmekanismer, och bör få stå för sig själva här tills de eventuellt kalibreras mot verklig data eller pilotresultat.

**[Se H2b i Evidensmatrisen →](/evidens/syntes/matris/)**

---

## Begränsningar (utöver resursfrågan ovan)

Rapportens egen begränsningssektion är ovanligt självkritisk och bör läsas i sin helhet i den fullständiga rapporten. I korthet: behov representeras endimensionellt (en enda knapphetsskalär, inte hälsa/boende/omsorg separat); arbetsmarknaden är en enkel binär logistisk modell utan kompetens, hälsa eller normer; ingen strategisk gaming är modellerad i de publicerade resultaten, trots att tidigare designdiskussioner uttryckligen övervägde det innan spåret medvetet pausades till förmån för MMT-perspektivet; grid-baserad optimering med få repetitioner i vissa känslighetsanalyser; ingen kalibrering mot verklig data eller pilotresultat.

---

## Läs hela rapporten

Den fullständiga tekniska rapporten (metod, alla nio delstudier, känslighetsanalyser, kodsnuttar, fullständig koppling till evidensmatrisen) finns som nedladdningsbar PDF:

**[Ladda ner hela rapporten (PDF, svenska) →](/downloads/AUBI-simuleringar-rapport.pdf)**
**[Ladda ner hela rapporten (PDF, engelska) →](/downloads/AUBI-simulation-report.pdf)**

---

## Kod och rådata

All simuleringskod och samtliga resultatfiler finns öppet på GitHub:
**[svensk-subsidiaritet-simulations](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-simulations)**

Arkivet innehåller de 25 Python-skript och 28 CSV-filer som ligger bakom siffrorna på
den här sidan, uppdelade i den enkla och den utökade modellen. Två dokument är värda
att läsa innan man drar slutsatser av resultaten:

- **MANIFEST.md** kopplar varje skript till de resultatfiler det producerar och till
  vad körningen undersöker.
- **METOD.md** redovisar modellantaganden och kända begränsningar — bland annat att
  Universal inte belastas med administrationskostnad, att förlustmåttet skiljer sig
  mellan de två modellerna, och att den utökade modellen inte är bit-identiskt
  reproducerbar eftersom arbets- och fuskbesluten använder en oseedad slumpgenerator.

Koden är licensierad under MIT, resultat och text under CC BY 4.0.

---

## Relaterat

**[H2b i Evidensmatrisen →](/evidens/syntes/matris/)**
**[Öppna frågor →](/evidens/syntes/oppna-fragor/)** — förutsägelserna ovan, samt kalibrering mot verklig data och modellering av strategiskt beteende.
**[Så vet vi →](/evidens/sa-vet-vi/)** — för [R]/[IP]/[H]-systemet och skillnaden mellan modell- och empirisk evidens som används ovan.

*Senast uppdaterad: efter delstudien om real kapacitetsmodell.*
