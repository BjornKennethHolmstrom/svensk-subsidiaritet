<script>
  import RevisionNotice from '$lib/components/RevisionNotice.svelte';
</script>

# S6 — Räddningstjänsten: samverkan och poolad auktoritet

**Land:** Sverige · **Perioder:** 1998–2004 och 2007–2015 · **Domän:** Räddningstjänst, skala, samordning, organisationsform · **Status:** Fryst resultat (forskningspaket v0.2, 30 september 2026)

<RevisionNotice heading="Så ska resultaten läsas">
<p>En <strong>robust signal</strong> är inte en <strong>universell kausal effekt</strong>. Båda grenarna nedan är observationsstudier med låsta designer: metod, utfall och kontroller bestämdes innan utfallsdata öppnades. Det skyddar mot att vi letar fram det resultat vi vill ha. Det gör inte resultaten generella.</p>
<p>Grenarna mäter olika saker under olika perioder. De ska jämföras, men inte slås ihop till ett tal.</p>
</RevisionNotice>

---

## Fallet i korthet

S1–S5 rekonstruerar *hur* svenska reformer fördelade auktoritet. S6 är fallkorpusets första **utfallsstudie**: den frågar vad som hände med bränderna när kommuner ändrade hur räddningstjänsten styrs.

Studien skiljer mellan två saker som ofta klumpas ihop under ordet "samverkan":

- **K — operativ samordning:** gemensam ledning, gemensamma larm- och ledningssystem, avtal om resurser över kommungränsen. Kommunerna behåller var sin räddningstjänst och var sitt politiskt ansvar.
- **A — poolad auktoritet:** en gemensam nämnd eller ett kommunalförbund tar över det formella ansvaret för räddningstjänsten.

Det är skillnaden mellan att *samarbeta* och att *bli en organisation*. Den gamla frågan "sammanslagning, samverkan eller egen drift?" blir då mer precis: vad tillför A, givet hur mycket K som redan finns?

## Varför räddningstjänsten

Räddningstjänsten är en av de mest samverkande kommunala funktionerna: 48 procent av kommunerna i Statskontorets enkät hade avtalssamverkan om räddningstjänst eller krisberedskap, och många har gått vidare till kommunalförbund eller gemensam nämnd ([S5](/evidens/fall/sverige/mellankommunal-samverkan/)). Funktionen har dessutom två egenskaper som gör ett utfallstest möjligt: varje insats rapporteras nationellt, och organisationsförändringarna går att datera.

---

## Gren A — Uppsala 2012: från samverkan till gemensam nämnd (K → A)

**Frågan.** Uppsala hade länge samarbetat operativt med grannkommunerna. 2012 bildades en gemensam räddningsnämnd med Tierp och Östhammar. Förändrades antalet byggnadsbränder per invånare som spreds utanför startföremålet, jämfört med räddningstjänster som hade utvecklad samverkan men inte gemensam auktoritet?

**Designen.**

- Ren förperiod 2007–2009; förberedelse- och övergångsperiod 2010–2011; efterperiod 2012–2014.
- Utfall: byggnadsbränder vars **slutliga** utbredning gick utanför startföremålet, per 100 000 invånare.
- Primär jämförelse: Jönköping (RäddSam F). Förhandsangiven sekundär jämförelse: Piteå–Älvsbyn (Femkanten). Känslighetstest: Halmstad (RäddSam Halland) och Skåne Nordväst.
- Mått: kvot mellan förändringskvoter (RRR). Under 1 betyder att Uppsala utvecklades gynnsammare än jämförelsen.

**Resultatet.**

| Jämförelsesystem | RRR | Riktning |
|---|---:|---|
| Jönköping / RäddSam F (primär) | 0,931 | Gynnsam för Uppsala |
| Piteå–Älvsbyn / Femkanten | 0,935 | Gynnsam för Uppsala |
| Skåne Nordväst (sammanslaget) | 0,921 | Gynnsam för Uppsala |
| Halmstad / RäddSam Halland | 1,105 | Motsatt |

Tre av fyra jämförelser pekar på ungefär 7 procent lägre relativ nivå i Uppsala. Osäkerheten är stor: intervallet för den primära skattningen är 0,68–1,27, och alla huvudintervall korsar 1. Intervallen fångar dessutom bara slumpvariationen i antal bränder, inte all kausal osäkerhet.

Tre saker försvagar en enkel orsakstolkning:

- **Halmstad pekar åt andra hållet**, och det beror inte på saknade data.
- **Skillnaden syns redan 2011**, före den formella starten. Det passar bättre med en effekt av hela övergångsprocessen, eller med lokala slumpvariationer, än med att lagändringen 1 januari 2012 slog om något.
- **Mekanismen är oklar.** Svårare brandgrader ger blandade resultat, så studien visar inte att släckningen blev bättre.

**Bedömning.** Riktning: måttligt stöd. Precision: låg. Robusthet mot val av jämförelse: måttlig men ofullständig. Mekanism: låg.

> **Etikett:** antydande kausal signal som stärker hypotesen att organisationsform spelar roll — inte bekräftande kausal evidens.

---

## Gren B — Kohorten 2002: första fullständiga poolningen (→ A)

**Frågan.** Fem räddningstjänstsystem (nio kommuner) gick 2002 för första gången in i full poolad auktoritet: Falköping–Tidaholm och Skara–Götene (gemensamma nämnder), Höglandet, Nerikes Brandkår (Askersunds inträde) och Värend (kommunalförbund). Förändrades antalet byggnadsbränder per invånare som redan hade spridit sig när räddningstjänsten kom fram, jämfört med 20 system (33 kommuner) som ännu inte hade poolat auktoriteten men gjorde det senare?

**Designen.**

- Förperiod 1998–2000; 2001–2002 utesluts som förberedelse och övergång; efterperiod 2003–2004.
- Utfall: byggnadsbränder som vid **räddningstjänstens ankomst** spridit sig utanför startföremålet, per 100 000 invånare. Det mäter läget när räddningstjänsten kom fram, inte släckningsresultatet.
- Kontrollerna är kommuner som senare gick in i A, vilket gör dem mer jämförbara än kommuner som aldrig gjorde det.
- När data öppnades visade det sig att Ekerö (2003, 2004) och Bjuv (2004) helt saknade insatsrapporter. Det hanterades genom ett tillägg som låstes **innan** skattningen gjordes; inga kontroller byttes ut.

**Resultatet.** Incidenskvoten (IRR) är **1,95** (intervall 1,22–3,14). Efter övergången var nivån i de behandlade systemen alltså nästan dubbelt så hög som den skulle ha varit om de utvecklats som kontrollerna.

Riktningen håller i alla förhandsangivna känslighetstest: andra förperioder (1,73–1,81), ogynnsamma antaganden om ofullständiga rapporter (1,53–2,02), uteslutning av system med saknade år (1,95), och när varje behandlat system (1,81–2,04) eller kontrollsystem (1,49–2,15) tas bort ett i taget. Alla fem behandlade system rör sig åt samma håll var för sig.

Men signalen sitter vid en enda tröskel:

| Utfall | IRR | Intervall |
|---|---:|---:|
| Spridning utanför startföremålet vid ankomst | **1,95** | 1,22–3,14 |
| Spridning utanför ett rum | 1,40 | 0,84–2,33 |
| Spridning till flera brandceller | 0,53 | 0,20–1,43 |
| Alla byggnadsbränder | 0,98 | 0,84–1,15 |

Resultatet visar alltså inte att bränderna blev allvarligare överlag. Det pekar mot något som händer *före eller vid* ankomsten — stationsgeografi, utlarmning, tillgänglighet, omställda rutiner eller förändrad rapportering. Studien kan inte skilja dessa förklaringar åt.

**Bedömning.** Intern robusthet i riktningen: hög. Kausal identifiering: måttlig till låg (tre förår, frivillig rapportering på den tiden, två efterår, icke-slumpmässigt urval). Generaliserbarhet: låg. Mekanism: låg.

> **Etikett:** robust ogynnsam kohortsignal som stärker hypotesen — inte bekräftande evidens för en generell behandlingseffekt.

---

## Vad grenarna säger tillsammans

**Det är inte en misslyckad replikering.** Grenarna mäter olika steg (A ovanpå mogen K, respektive första A ur varierande utgångslägen), olika punkter i brandförloppet (slutlig utbredning respektive läget vid ankomst) och olika rapporteringsepoker. Att de pekar åt olika håll är i sig information om att effekten av poolad auktoritet kan variera, inte ett bevis för att någon av dem har fel.

**Fyra enkla modeller blir svårare att hålla fast vid:**

1. "Mer poolad auktoritet är alltid bättre." Stöds inte.
2. "Samverkan är alltid bättre än poolad auktoritet." Stöds inte heller.
3. "Organisationsformen spelar ingen roll." Svårare att hålla: båda grenarna ger märkbara signaler efter förhandsangivna övergångar.
4. "Styrningsskala är en enda dimension." Evidensen passar bättre med att K och A är skilda variabler.

**Den hypotes som växer fram** — men som inte är fastställd — är att effekten av att lägga till A beror på hur mycket K som redan finns och hur övergången genomförs. Uppsala gick från mycket samverkan till formell poolning; kohorten 2002 gick in i A från mer skiftande utgångslägen, där driften ofta organiserades om samtidigt.

**Det som minst blivit besvarat** är jämförelsen med verkligt självständig drift. Kontrollerna i Uppsalagrenen är medvetet system med stark samverkan, och kontrollerna 2002 hade inte noll samverkan. Programmet kan nu säga mer om A jämfört med K-utan-A än om A jämfört med en kommun som klarar sig helt själv.

| Påstående | Konfidens |
|---|---|
| Det finns en universell rangordning mellan A och K | Låg |
| K och A behöver modelleras som skilda variabler | Medel–Hög |
| Effekten av A beror på sammanhang och övergång | Medel |
| Vi vet vilken mekanism som styr variationen | Låg |

> **Evidenslucka #3: delvis sluten för svensk räddningstjänst — riktningsmässigt blandad, strukturellt informativ.** Se [Vad vi inte vet](/evidens/syntes/okanda/).

---

## Vad S6 inte visar

- Att gemensamma nämnder eller kommunalförbund generellt förbättrar räddningstjänsten.
- Att de generellt försämrar den.
- Att resultatet 2002 är ett allmänt "sammanslagningsstraff", eller att Uppsala visar en allmän "integrationsvinst".
- Att släckningen efter ankomst blev sämre 2002.
- Att de två grenarna skattar samma behandling eller samma utfall.

---

## Vår bedömning

*Det här är vår tolkning, åtskild från de frysta resultaten ovan.*

Resultaten passar väl med projektets ramverk om faktorisering — att samordning och auktoritet kan ligga på olika nivåer. Just därför ska vi vara försiktiga. Att två studier med olika utfall och perioder pekar åt olika håll är delvis inbyggt i hur de är konstruerade, och kan inte ensamt bära en slutsats om att "rätt nivå beror på sammanhanget". Vi har därför inte höjt konfidensen för de övergripande syntespåståendena C1 och C5 på grund av S6, även om forskningspaketets egen matris gör det (se ändringsloggen i [Evidensmatrisen](/evidens/syntes/matris/)).

Värt att notera åt andra hållet: Uppsalagrenen är, så långt den räcker, evidens *för* att formell poolning kan tillföra något utöver mogen samverkan. Den finns därför också på sidan [Motevidens](/evidens/syntes/motevidens/).

---

## Nästa fråga

Den gamla frågan "sammanslagning eller samverkan?" ersätts av en smalare: **vad är marginaleffekten av att lägga till poolad auktoritet, givet den samordning som redan finns?**

Nästa steg är en ny forskningsarkitektur som designas innan några utfall öppnas: först en kartläggning av alla svenska övergångar från K till A, klassade efter hur mycket samordning som fanns före (låg K, etablerad operativ K, gemensam ledning eller larmcentral, redan högintegrerad K). Först därefter väljs utfall och jämförelser.

Materialet från 2002 analyseras inte vidare. Fler analyser av samma data efter att resultatet är känt skulle göra det frysta fyndet mindre trovärdigt, inte mer.

---

## Forskningspaketet

Resultaten är frysta. Inga nya specifikationer, trösklar, kontrollval eller tidsfönster får ändra dem i efterhand; ny analys märks som ny.

- **Arkiv:** [svensk-subsidiaritet-evidence](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-evidence) på GitHub
- **Låst paket:** [raddningstjanst-publication-package-v0.2.zip](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-evidence/releases/download/rescue-service-v0.2/raddningstjanst-publication-package-v0.2.zip) (release `rescue-service-v0.2`)
- **SHA-256 för zip-filen:** `1dfc519cff9ba8d2e86547dbc91aff21e84df244020b5fae088ed74072aba595`

Paketet innehåller frysta protokoll och tillägg, låsta skattningar, skript för att återskapa resultaten, ursprungliga resultatarkiv, behandlingshistorik och kontrollsummor för varje fil (`SHA256SUMS.txt`). Dokumenten är på engelska; där kallas grenarna R9 (Uppsala) och R10 (kohorten 2002).

---

## Relaterade hypoteser

Primära: **H5** (skala), **H8** (samverkan utan sammanslagning), **H21** och **H22** (poolad auktoritets marginaleffekt).
Sekundära: **H12** (anpassningens flaskhals — förebådandet 2011), **H14** (gränsanpassning).
Syntes: **C4a**, **C4c**, **C5**.

Se fullständiga poster i **[Evidensmatrisen →](/evidens/syntes/matris/)**.

## Källor

- Svensk Subsidiaritet (2026), *Räddningstjänst — Uppsala 2012: Final Causal Synthesis v1.0*; *Historical 2002 Cohort — Finding v0.1*; *Cross-Branch Causal Synthesis v0.1*. I forskningspaketet ovan.
- Utfallsdata: nationell insatsstatistik från MCF (tidigare MSB), enligt rapporteringssystemen som angetts i respektive protokoll.
- Uppsala kommun, [samverkansavtal för den gemensamma räddningsnämnden](https://www.uppsala.se/contentassets/634264aaa0464a59b4fba6dc9bd58bd6/12.-samverkansavtal-for-den-gemensamma-raddningsnamnden.pdf).
- Statskontoret 2023:5, *Hand i hand — en analys av kommunal samverkan* (andel kommuner med samverkan om räddningstjänst).

*Senast uppdaterad: efter forskningspaket v0.2.*
