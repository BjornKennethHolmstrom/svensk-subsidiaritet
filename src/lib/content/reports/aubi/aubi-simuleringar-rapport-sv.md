## Sammanfattning

Denna rapport undersöker **adaptiv universell basinkomst (AUBI)** – en hybrid mellan universell grundtrygghet, behovsbaserad anpassning och en kollektiv fond för frivilligt arbete. Syftet är att pröva under vilka betingelser en sådan arkitektur kan förbättra välfärden jämfört med ren universalism, enbart riktade stöd eller enbart individuell basinkomst.

**Metod:** Vi har utvecklat en serie simuleringar där en population med heterogena behov får stöd genom olika arkitekturer. Modellen har successivt utvidgats till att omfatta:

- **Individuella arkitekturer:** Universal, Targeted och Adaptive (bas + behovsprövad påfyllnad).
- **Dynamisk anpassning** med mätfel, anpassningshastighet och återkoppling.
- **Socialt kapital** som ett separat utfallsmått.
- **Frivilligt arbete** finansierat via en kollektiv fond.
- **Real kapacitetsbegränsning** för basinkomsten, inspirerad av MMT.

Flera delstudier har genomförts: från statiska jämförelser till känslighetsanalyser av allokeringsandelar och effektivitetsparametrar.

**Huvudresultat:**

- **Heterogenitet och mätfel avgör värdet av individbaserad adaptivitet.** Vid hög behovsheterogenitet och måttligt mätfel kan en adaptiv påfyllnad minska både genomsnittlig förlust och svår deprivation. Vid låg heterogenitet är en enkel universalism ofta bäst.

- **Målfunktionen är avgörande.** Genom att explicit vikta svår deprivation (λ ≈ 1–2) kan andelen allvarligt underförsörjda minskas kraftigt till en måttlig kostnad i genomsnittlig täckning.

- **Socialt kapital och frivilligt arbete är viktiga dimensioner.** Frivilligt arbete minskar materiell deprivation och ökar socialt kapital markant. Deltagandet är stabilt kring 53 % och i stort sett oberoende av basinkomstnivån, vilket tyder på att arbete drivs av andra motiv än ekonomisk desperation.

- **En blandning av basinkomst och kollektiv fond är robust.** När socialt kapital värderas är allokeringen 60 % basinkomst och 40 % kollektiv fond optimal i de flesta testade scenarier, särskilt vid hög heterogenitet. Detta resultat kvarstår även när vi inför en real kapacitetsbegränsning för basinkomsten.

- **Real kapacitet är avgörande.** I en ekonomi med begränsad produktionskapacitet kan en hög nominell basinkomst leda till inflation och urholkad köpkraft. En kollektiv fond som skapar real produktion blir då särskilt värdefull.

Resultaten är modellbaserade och explorativa. De utgör mekanistiskt stöd, inte empirisk evidens, och kräver kalibrering mot verkliga data innan de kan ligga till grund för policy.

**Slutsatser:** AUBI bör ses som en familj av arkitekturer snarare än ett specifikt system. Simuleringarna pekar på att en kombination av hög basinkomst och kollektivt finansierat frivilligt arbete kan balansera materiell trygghet och socialt kapital. Resultaten är dock **explorativa** och bygger på förenklade antaganden. Innan de kan ligga till grund för policy krävs kalibrering mot empiriska data och fältstudier.

Rapporten avslutas med en diskussion om metodologiska begränsningar och förslag till framtida forskning.

---

## 1. Inledning och syfte

### Bakgrund

Debatten om universell basinkomst (UBI) har länge fokuserat på en enkel fråga: kan en ovillkorlig och generell kontantöverföring minska fattigdom och otrygghet bättre än riktade stöd? Forskningen ger visst stöd för att ovillkorliga kontanttransfers kan förbättra materiella och psykologiska utfall, men den visar också att en enhetlig summa inte passar alla. Människor har olika behov beroende på exempelvis funktionsnedsättning, familjesituation, bostadsort och livsfas.

Denna rapport undersöker en utvidgning av UBI: **adaptiv universell basinkomst (AUBI)**. Till skillnad från traditionell UBI kombinerar AUBI en universell grund med ett adaptivt lager som kan anpassas efter observerade behov. Syftet är att behålla universalismens enkelhet och skydd mot exkludering, samtidigt som systemet kan svara på heterogena behov utan att bli ett klassiskt behovsprövat bidrag.

Under arbetets gång har modellen vidgats ytterligare. Utöver det individuella adaptiva lagret har vi inkluderat en **kollektiv fond** som finansierar frivilligt arbete och gemensamma nyttigheter. Detta är inspirerat av två perspektiv:

- **Modern Monetary Theory (MMT):** pengar är inte den primära begränsningen; den verkliga gränsen sätts av tillgången på reala resurser som arbetskraft, kunskap, infrastruktur och ekologisk kapacitet. Därmed handlar finansiering av basinkomst inte om att "hitta pengar", utan om hur samhället väljer att använda sina reala resurser.
- **Work in Liberation:** arbete ska vara frivilligt och icke-deltagande en legitim livsstil. Ett AUBI-system bör därför inte kräva motprestationer, men kan erbjuda meningsfulla möjligheter till bidrag som bygger socialt kapital och minskar behov.

### Frågeställning

Rapporten prövar följande övergripande fråga:

> Under vilka betingelser kan en adaptiv universell grundinkomst – inklusive en kollektiv fond för frivilligt arbete – förbättra välfärden jämfört med ren universalism, enbart riktade stöd eller enbart individuell basinkomst?

Mer specifikt undersöker vi:

- Hur påverkar behovsheterogenitet och mätfel värdet av adaptivitet?
- Hur bör systemets basnivå och målgrupp utformas?
- Kan löpande (dynamisk) parameterjustering förbättra resultaten?
- Hur påverkar återkoppling från transfer till behov systemets stabilitet och fördelningseffekter?
- Vilken roll spelar socialt kapital och frivilligt arbete för den totala välfärden?
- Hur bör en given real resurs fördelas mellan individuell basinkomst och kollektiv fond?

**Metodologisk anmärkning:** Denna rapport bygger uteslutande på simuleringar. Simuleringar är inte empiriska bevis. De kan visa vilka mekanismer som är logiskt möjliga och under vilka antaganden de ger vissa utfall, men de säger inget om hur starka mekanismerna är i verkligheten. Alla slutsatser bör därför läsas som modellbaserade hypoteser, inte som fastställda samband.

### Koppling till teoretiska ramverk

Arbetet är en del av forskningsprogrammet för **Svensk Subsidiaritet** och bygger vidare på hypotesen **H2b – behovsheterogenitet**:

> När relevanta behov varierar väsentligt mellan människor, grupper eller platser kan en enhetlig försörjning ge sämre träff än en gemensam ram med lämpligt anpassade komponenter.

Vi använder dessutom perspektiv från **Governance as Engineering (GAE)** för att förstå varför system misslyckas. Särskilt relevanta begrepp är varietetsgap, mätfel, Goodhart-liknande risker, anpassningsflaskhals och återkopplingsdynamik.

De senare simuleringarna är dessutom explicit influerade av **MMT** och **Work in Liberation**, vilket innebär att vi inte modellerar en monetär budgetrestriktion, utan en real resursrestriktion, och att frivillighet samt socialt kapital är centrala utfallsmått.

### Disposition

Rapporten är upplagd enligt följande:

- **Sektion 2** presenterar den teoretiska ramen, inklusive H2b, GAE, MMT och Work in Liberation, samt tidigare resultat.
- **Sektion 3** beskriver simuleringsmodellen och metodiken, inklusive socialt kapital, frivilligt arbete och kollektiv fond.
- **Sektion 4** redovisar resultaten från nio delstudier: statisk analys, optimering, dynamisk anpassning, känslighet för viktningsparametrar, återkoppling, socialt kapital, kollektiv fond, känslighetsanalys av effektivitetsparametrar och heterogenitetens betydelse.
- **Sektion 5** diskuterar implikationer, risker och designprinciper.
- **Sektion 6** drar slutsatser och kopplar till AUBI-forskningen.
- **Sektion 7** tar upp begränsningar och framtida forskningsbehov.
- **Bilagor** innehåller parameteröversikt, kodsnuttar, resultattabeller, koppling till evidensmatrisen och en teoretisk referens till MMT och Work in Liberation.

---

## 2. Teoretisk ram

Denna rapport bygger på fyra kompletterande perspektiv: hypotesen om behovsheterogenitet (H2b), Governance as Engineering (GAE), Modern Monetary Theory (MMT) samt ramverket Work in Liberation. Tillsammans ger de en gemensam grund för att förstå när och hur en adaptiv universell basinkomst kan utformas.

### 2.1 Hypotesen om behovsheterogenitet (H2b)

Utgångspunkten är hypotesen **H2b – behovsheterogenitet**:

> När relevanta behov varierar väsentligt mellan människor, grupper eller platser kan en enhetlig försörjning ge sämre träff än en gemensam ram med lämpligt anpassade komponenter.

**Viktig distinktion:** H2b är inte en variant eller precisering av den existerande hypotesen H2. H2 handlar om **preferensheterogenitet** – människor vill ha olika saker. H2b handlar om **behovsheterogenitet** – människor behöver olika resurser för att nå jämförbara utfall. Dessa är olika mekanismer med olika testbara implikationer. En transfer som varierar med funktionsnedsättning eller familjesituation testar inte om lokala preferenser motiverar differentiering, utan om lokala kapacitetsvillkor gör det. Vi håller därför H2b som en egen hypotes.

Begreppet *behov* definieras här inte som ett absolut tillstånd, utan som de resurser, villkor eller stöd som krävs för att en individ eller grupp ska nå ett visst relevant utfall eller upprätthålla en miniminivå av delaktighet. Behovsheterogenitet kan ta sig uttryck i magnitud, typ, varaktighet, timing och kontextberoende.

I simuleringarna operationaliseras behovsheterogenitet genom formparametern \(k\) i en gammafördelning: lågt \(k\) ger en skev fördelning med stor spridning, medan högt \(k\) ger en mer homogen population.
### 2.2 AUBI som arkitektur

Adaptiv universell basinkomst (AUBI) är inte ett färdigt system utan en **arkitektur** med två eller tre skikt:

1. **En universell grund** – en ovillkorlig och generell kontantöverföring som ger en gemensam minimitrygghet.
2. **Ett adaptivt lager** – en behovsberoende påfyllnad som kan justeras efter observerade behov, exempelvis genom att vissa individer eller hushåll får ett tillägg.
3. **En kollektiv fond** – resurser som används för att finansiera frivilligt arbete, offentliga nyttigheter och insatser som minskar behov och bygger socialt kapital.

De två första skikten är individuella; det tredje är kollektivt. I de tidigare simuleringarna fokuserade vi på de två första skikten. De senare modellerna inkluderar alla tre, i linje med MMT:s betoning på reala resurser och Work in Liberations betoning på frivillighet och socialt värde.

Arkitekturens centrala parametrar är:

- **α** – basnivån i det individuella systemet (hur stor andel av transferbudgeten som ligger i den universella grunden).
- **p_high** – andelen individer som identifieras ha ett högre behov och därmed får påfyllnad.
- **b** – andelen av den totala reala resursen \(R\) som går till individuell basinkomst; resten går till den kollektiva fonden.
- **λ** – vikten som systemet tilldelar svår deprivation i sin målfunktion.

### 2.3 Governance as Engineering (GAE)

Vi använder perspektiv från **Governance as Engineering** för att analysera varför vissa systemdesigner misslyckas eller lyckas. Särskilt relevanta begrepp är:

- **Varietetsgap:** Ett system med för liten intern variationsrikedom kan inte matcha variationen i de behov det ska hantera. Universal har ett stort varietetsgap eftersom det behandlar alla lika; adaptiva system försöker minska gapet men skapar samtidigt nya felkällor.

- **Mätfel och Goodhart-liknande risker:** När systemet optimerar på observerbara signaler (observerade behov) istället för verkliga behov, kan det överanpassa till brus eller missa viktiga dimensioner. Detta är en central risk i alla behovsbaserade system. I våra simuleringar visar sig detta genom att en målfunktion som enbart minimerar genomsnittlig avvikelse kan leda till att svår deprivation ökar.

- **Anpassningsflaskhals:** Dynamisk anpassning begränsas av hur snabbt och tillförlitligt systemet kan uppfatta och reagera på förändringar. Vi modellerar detta genom parameteren **γ** (anpassningshastighet). Snabb anpassning kan förvärra problem genom att fånga upp brus.

- **Återkopplingsdynamik:** Transfer påverkar i verkligheten individernas livssituation, vilket i sin tur påverkar deras framtida behov. Ett system som inte tar hänsyn till detta kan hamna i självförstärkande negativa spiraler. Våra simuleringar visar att viktning mot svår deprivation och tillräckligt hög basnivå bidrar till stabilitet.

### 2.4 Modern Monetary Theory (MMT)

MMT ifrågasätter den traditionella föreställningen att staten måste finansiera utgifter genom skatter eller lån innan den kan spendera. I ett system med suverän valuta kan staten alltid emittera pengar för att betala för det samhället beslutat att göra. Den verkliga begränsningen är **tillgången på reala resurser**: arbetskraft, råvaror, energi, teknologi, kunskap och ekologisk kapacitet.

För AUBI innebär detta två saker:

- **Finansieringen av basinkomsten är inte ett oöverstigligt hinder.** Staten kan skapa pengarna. Vad som verkligen spelar roll är om ekonomin har reala resurser att möta den ökade efterfrågan – vilket är en fråga om produktionskapacitet, inte budgettak.
- **Valet mellan individuell transfer och kollektiva investeringar är en resursallokeringsfråga.** Vi modellerar detta genom en fast real resurs per capita \(R\) som kan fördelas mellan basinkomst och kollektiv fond. Detta speglar MMT:s kärnbudskap att det inte är pengarna som är begränsade, utan hur samhället väljer att använda sin reala kapacitet.

### 2.5 Work in Liberation

Work in Liberation är ett ramverk som betonar att arbete måste vara frivilligt och att icke-deltagande är en legitim livsstil. Det utgår från principen att materiell trygghet måste vara frikopplad från arbete för att arbete ska kunna vara verkligt frivilligt.

Nyckelbegrepp:

- **Frivillighet och rätten att inte delta:** Ingen ska tvingas att arbeta eller att synliggöra sina bidrag. Låg formell aktivitet får inte tolkas som lathet eller misslyckande.
- **Socialt kapital:** Relationer, tillit och gemenskap är centrala värden. Arbete kan bidra till socialt kapital, men bara om det är frivilligt och inte leder till överbelastning.
- **Kollektiv fond:** En del av samhällets resurser bör användas för att finansiera arbete som producerar kollektiva nyttigheter – omsorg, utbildning, ekologisk restaurering – snarare än att enbart förlita sig på individuell efterfrågan.
- **Basinkomst som förutsättning:** En tillräckligt hög ovillkorlig grund är nödvändig för att arbete ska vara ett erbjudande, inte en överlevnadsstrategi.

I simuleringarna operationaliseras dessa idéer genom att individer kan välja att arbeta frivilligt, att arbetet ger både individuell inkomst och kollektiv nytta, och att socialt kapital är ett utfallsmått.

### 2.6 Tidigare resultat och öppna frågor

Från litteraturen vet vi att:

- Ovillkorliga kontanttransfers kan förbättra materiella och psykologiska utfall, men effekterna varierar mellan grupper och kontexter.
- Riktade system har ofta betydande exkluderings- och inkluderingsfel samt administrativa kostnader.
- Adaptiv social protection (ASP) används redan i vissa sammanhang för att svara på chocker, men den är oftast kategorisk snarare än universell.

Våra tidigare simuleringar (sektion 4.1–4.5) visade att:

- Adaptivitet lönar sig vid hög behovsheterogenitet och måttligt mätfel, men ren universalism är ofta bättre vid låg heterogenitet.
- Målfunktionens utformning är avgörande: utan viktning av svår deprivation riskerar systemet att försumma de svagaste.
- Dynamisk anpassning kan förbättra resultaten men kräver försiktighet för att undvika volatilitet.
- Återkoppling från transfer till behov kan skapa instabilitet om inte systemet är rätt kalibrerat.

De nya simuleringarna (sektion 4.6–4.9) bygger vidare på detta genom att inkludera socialt kapital, frivilligt arbete och kollektiv fond. De syftar till att besvara frågor om hur en real resurs bör fördelas mellan individuell basinkomst och kollektiva investeringar, och hur detta påverkas av befolkningens behovsstruktur och samhällets värderingar.

---

## 3. Modellbeskrivning och metod

Denna sektion beskriver den simuleringsmodell som använts i rapporten. Modellen har byggts ut stegvis: från en statisk jämförelse av tre arkitekturer till en dynamisk modell med socialt kapital, frivilligt arbete och kollektiv fond. Vi redovisar här den fullständiga strukturen, men markerar när vissa delar endast används i specifika delstudier.

### 3.1 Population och behov

Simuleringarna bygger på en population av \(N\) individer. Varje individ har ett långsiktigt medelbehov \(\mu_i\), draget från en gammafördelning med medelvärde 1 och formparameter \(k\). Parametern \(k\) styr heterogeniteten:

- Lågt \(k\) (t.ex. 0.5) ger en skev fördelning med stor spridning: många med låga behov men några med mycket höga.
- Högt \(k\) (t.ex. 10) ger en mer symmetrisk och homogen fördelning.

Behoven kan förändras över tid (se 3.6), men i de statiska analyserna hålls de konstanta. Behoven mäts i en generisk resursenhet och representerar den miniminivå av materiell trygghet som krävs för att individen ska uppnå en grundläggande levnadsstandard.

### 3.2 Real resurs och allokering

Istället för en monetär budgetrestriktion antar vi att samhället har en fast real resurs per individ och period, betecknad \(R\). Denna resurs representerar den totala kapaciteten att producera varor och tjänster, inklusive arbetskraft, infrastruktur och ekologisk bärkraft. I de flesta körningar är \(R = 1.0\).

Resursen kan fördelas mellan två huvudsakliga användningsområden:

- **Individuell basinkomst (B):** \(B = b \cdot R\), där \(b\) är andelen av resursen som ges som kontant transfer till alla individer.
- **Kollektiv fond (K):** \(K = (1-b) \cdot R\), som finansierar frivilligt arbete och gemensamma nyttigheter.

Denna formulering är inspirerad av MMT: det är inte pengarna som är begränsade, utan den reala kapaciteten. Valet av \(b\) är en politisk allokeringsfråga.

**Real kapacitetsbegränsning för basinkomsten.**  
I den utökade modellen (delstudie 4.10) inför vi en real produktionskapacitet \(C\) per individ. Basinkomstens nominella värde \(B = b \cdot R\) antas inte alltid kunna omvandlas till real köpkraft. Istället modelleras den reala köpkraften som en mjuk kapacitetsfunktion:

\[
\text{real\_B} = C \cdot (1 - e^{-B/C})
\]

Denna funktion innebär att när \(B\) är litet i förhållande till \(C\) är real köpkraft ungefär lika med \(B\), men när \(B\) växer blir marginalnyttan avtagande och real köpkraft närmar sig \(C\) asymptotiskt. Detta är ett enkelt sätt att representera inflation eller utbudsbegränsningar: om efterfrågan överstiger ekonomins produktionskapacitet, stiger priserna och den reala köpkraften minskar.

Arbetsinkomsten antas däremot vara real, eftersom arbete producerar tjänster direkt och därmed inte är utsatt för samma form av efterfrågeinflation.

### 3.3 Arkitekturer

I de tidigare delstudierna jämfördes tre grundläggande arkitekturer:

- **Universal:** Alla får samma transfer – hela den individuella budgeten delas lika.
- **Targeted:** Endast de som klassificeras ha högt behov får transfer; övriga får inget.
- **Adaptive:** Alla får en grundtransfer (bas), och de som klassificeras ha högt behov får dessutom en påfyllnad.

För Targeted och Adaptive används parametrarna:

- **p_high** – andelen individer som klassificeras som högbehov.
- **α (alpha)** – basnivån i Adaptive: andelen av transferbudgeten som fördelas lika till alla. Resterande del går till påfyllnad för högbehovsindivider.

Administrationskostnaden antas vara proportionell mot antalet klassificerade individer och dras från budgeten innan transfer beräknas.

I de senare modellerna utökas arkitekturen med en kollektiv fond och frivilligt arbete, vilket beskrivs i 3.5 och 3.7.

### 3.4 Observation och mätfel

Systemet observerar inte de verkliga behoven direkt, utan en brusig signal:

\[
\hat{b}_i = b_i + \varepsilon_i, \quad \varepsilon_i \sim N(0, \sigma_{\varepsilon}^2)
\]

\(\sigma_{\varepsilon}\) representerar mätfelet. I de flesta analyser är \(\sigma_{\varepsilon}=0,3\). Klassificeringen av högbehov görs utifrån den observerade fördelningen, vilket skapar exkluderings- och inkluderingsfel.

I de dynamiska simuleringarna jämnas observationen ut med ett exponentiellt glidande medelvärde:

\[
s_i(t) = \gamma \hat{b}_i(t) + (1-\gamma)s_i(t-1)
\]

\(\gamma\) är anpassningshastigheten. \(\gamma=1\) innebär att systemet reagerar direkt på senaste observationen, medan lägre värden ger trögare anpassning.

### 3.5 Socialt kapital

Socialt kapital \(S_i(t)\) är ett lager som representerar individens relationella resurser: tillit, nätverk, tillhörighet och förmåga att samarbeta. Det uppdateras varje period enligt:

\[
S_i(t+1) = S_i(t) + (1-\rho_S)(\bar{S} - S_i(t)) + \gamma_{rel}\cdot \text{rel\_time}_i - \gamma_{stress}\cdot \text{stress}_i + \text{arbetseffekt}_i + \eta \cdot L
\]

där:

- \(\bar{S}\) är det långsiktiga medelvärdet (satt till 1).
- \(\rho_S\) är persistensen (0.9).
- rel_time är ett mått på tid för relationer, approximerad som materiell trygghet (inkomst/behov).
- stress är gapet mellan behov och inkomst.
- arbetseffekt är en funktion av frivilligt arbete (positiv upp till en optimal nivå, negativ vid överbelastning).
- \(\eta \cdot L\) är den kollektiva effekten av samhällets totala arbete: ju fler arbetstimmar per capita, desto större socialt kapitaltillskott.

Socialt kapital kan anta värden mellan 0 och 3.

### 3.6 Frivilligt arbete

Individer kan välja att delta i frivilligt arbete, vilket ger dem arbetsinkomst utöver basinkomsten. Arbetsbeslutet modelleras som en logistisk funktion:

\[
P(\text{arbetar}) = \frac{1}{1 + \exp(-s \cdot (w - \text{reservationslön}))}
\]

där:

- \(w\) är timlönen (0.05 i basmodellen),
- reservationslönen beror på materiell stress: ju större gap mellan behov och transfer, desto lägre reservationslön,
- \(s\) är känslighetsparametern (5.0).

Arbetstiden är antingen 0 eller max_hours (15 timmar). Den kollektiva fonden \(K\) sätter ett tak för det totala antalet arbetstimmar som kan finansieras:

\[
\text{max totala timmar} = \frac{K \cdot N}{w}
\]

Om efterfrågan på arbete överstiger detta tak, skalas alla individers arbetstimmar ner proportionellt.

Arbete producerar två typer av kollektiv nytta:

- **Behovsminskning:** \( \phi_{work} \cdot L \), där \(L\) är genomsnittliga arbetstimmar per capita. Detta representerar att omsorgsarbete, utbildning, ekologisk restaurering etc. minskar framtida behov.
- **Socialt kapitaltillskott:** \( \eta_{work} \cdot L \), som läggs till allas sociala kapital.

### 3.7 Kollektiv fond

Den kollektiva fonden \(K\) finansierar arbete och därmed den kollektiva nyttan. I modellen är fonden inte en passiv summa pengar, utan en real resurs som möjliggör anställning av arbetskraft. Ju större \(K\), desto fler arbetstimmar kan utföras, vilket i sin tur minskar behoven och stärker socialt kapital. Fondens effektivitet bestäms av parametrarna \(\phi_{work}\) och \(\eta_{work}\).

### 3.8 Dynamik och återkoppling

I de dynamiska simuleringarna följer behoven en AR(1)-process:

\[
b_i(t+1) = \rho b_i(t) + (1-\rho)\mu_i + \varepsilon_i(t) - \phi_{work}L(t)
\]

där \(\rho\) styr persistensen och \(\varepsilon_i(t)\) är en chock med standardavvikelse 0,1. Den sista termen representerar den kollektiva behovsminskningen från arbete.

I vissa modeller inkluderas även återkoppling från transfer till behov: om transfer understiger behov kan behovet öka nästa period. Detta modellerades med en mättande funktion i avsnitt 4.5, men i de senare modellerna har återkopplingen förenklats bort för att fokusera på allokeringsfrågan.

### 3.9 Målfunktion och utvärdering

För att jämföra olika allokeringar och arkitekturer används en flerdimensionell välfärdsfunktion:

\[
W = -\omega_1 \cdot \text{underförsörjning} - \omega_2 \cdot \text{severe} + \omega_3 \cdot \text{socialt kapital}
\]

där:

- **Underförsörjning** är genomsnittlig absolut skillnad mellan behov och inkomst när inkomsten understiger behovet; överinkomst straffas inte.
- **Severe** är andelen individer vars inkomst understiger 50 % av behovet.
- **Socialt kapital** är genomsnittligt socialt kapital i populationen.

Vikterna \(\omega_1, \omega_2, \omega_3\) kan varieras för att spegla olika samhällsprioriteringar. I de flesta analyser används antingen lika vikter (0.33, 0.33, 0.34) eller en viktning där materiell deprivation dominerar (0.6, 0.2, 0.2).

### 3.10 Optimeringsmetod

I de statiska och tidiga dynamiska analyserna optimerades parametrar som \(p_{high}\) och \(\alpha\) genom grid-sökning över ett diskret parameterrum. I de senare modellerna är \(b\) den primära allokeringsparametern, och vi testar värden från 0,2 till 1,0.

För varje parameterkombination genomförs flera repetitioner (vanligen 5–10) med olika slumptalsfrön. Resultaten medelvärdesbildas över repetitionerna och över tidsperioderna (T = 50).

### 3.11 Simuleringsscenarier

Rapporten omfattar nio delstudier:

- **4.1–4.5:** De tidigare modellerna – statisk analys, optimering, dynamisk anpassning, λ-känslighet, återkoppling.
- **4.6:** Socialt kapital och frivilligt arbete.
- **4.7:** Kollektiv fond och MMT-inspirerad fördelning.
- **4.8:** Känslighetsanalys av \(\phi_{work}\), \(\eta_{work}\) och vikter.
- **4.9:** Heterogenitetens betydelse för allokeringsmix.

---

## 4. Simuleringsresultat

I denna sektion redovisas resultaten från nio delstudier. De första fem (4.1–4.5) fokuserar på individuella adaptiva mekanismer: heterogenitet, optimering, dynamik, målfunktion och återkoppling. De följande fyra (4.6–4.9) utökar analysen med socialt kapital, frivilligt arbete, kollektiv fond och heterogenitetens betydelse för allokeringsmixen.

### 4.1 Statisk analys: heterogenitet, mätfel och administrationskostnad

I den första delstudien jämfördes Universal, Targeted och Adaptive under varierande behovsheterogenitet (\(k\)) och mätfel (\(\sigma\)). Administrationskostnaden sattes till noll eller varierades i ett senare steg.

**Huvudresultat:**

- Vid **hög heterogenitet** (\(k \leq 2\)) och måttligt mätfel (\(\sigma \leq 0.6\)) var Adaptive bäst i fråga om genomsnittlig absolut förlust. Vid mycket högt mätfel (\(\sigma = 1.0\)) var skillnaden mellan Adaptive och Universal liten, men Adaptive var fortfarande ofta bättre.
- Vid **låg heterogenitet** (\(k \geq 5\)) var Universal bäst, oavsett mätfel. Adaptive kunde visserligen förbättra den genomsnittliga förlusten något, men till priset av en högre andel svårt underförsörjda.
- Targeted var aldrig konkurrenskraftigt, eftersom det lämnade en stor del av populationen utan stöd.

**Slutsats:** Adaptivitet lönar sig när behovsspridningen är stor och mätfelet inte är alltför stort. Ren universalism är att föredra när behoven är relativt homogena.

### 4.2 Optimering av basnivå och målgrupp

Här undersöktes hur valet av basnivå (\(\alpha\)) och andel högbehov (\(p_{\text{high}}\)) påverkar Adaptive. Syftet var att hitta optimala kombinationer under olika heterogenitet.

**Huvudresultat:**

- Vid hög heterogenitet var en relativt låg bas (\(\alpha \approx 0.4	\text{–}0.6\)) och en måttlig målgrupp (\(p_{\text{high}} \approx 0.2\text{–}0.4\)) optimal för att minimera genomsnittlig förlust. För att minska svår deprivation krävdes dock en högre bas (\(\alpha \geq 0.6\)).
- Vid låg heterogenitet var en hög bas (\(\alpha \approx 0.8\text{–}0.9\)) och en bredare målgrupp (\(p_{\text{high}} \approx 0.3\text{–}0.5\)) bäst.
- Det fanns en tydlig målkonflikt: den parameteruppsättning som minimerade medelabs skiljde sig från den som minimerade svår deprivation, särskilt vid hög heterogenitet.

**Slutsats:** Det finns ingen generell optimal parameteruppsättning; valet måste kopplas till vilket välfärdsmål som prioriteras och hur heterogen populationen är.

### 4.3 Dynamisk anpassning

I denna delstudie infördes tidsvariation i behoven genom en AR(1)-process. Vi jämförde fasta parametrar med en dynamisk optimering som varje period valde \(\alpha\) och \(p_{\text{high}}\) utifrån den senaste observationen.

**Huvudresultat:**

- Dynamisk optimering minskade genomsnittlig förlust jämfört med fasta parametrar, särskilt när behoven förändrades.
- Anpassningshastigheten \(\gamma\) var betydelsefull: snabb anpassning (\(\gamma = 1\)) ledde till högre volatilitet, medan trögare anpassning (\(\gamma = 0.1\text{–}0.5\)) gav stabilare resultat och ofta lägre medelförlust.
- Den dynamiska varianten kunde i vissa fall minska svår deprivation (särskilt vid låg heterogenitet), men vid hög heterogenitet tenderade den att öka severe jämfört med fasta parametrar om enbart medelabs optimerades.

**Slutsats:** Löpande parameterjustering kan förbättra träffsäkerheten, men kräver omsorgsfullt val av anpassningshastighet och målfunktion för att inte skapa nya problem.

### 4.4 Viktad målfunktion (λ-känslighet)

För att hantera avvägningen mellan genomsnittlig förlust och svår deprivation infördes en viktad målfunktion: \( \text{Mål} = \text{medelabs} + \lambda \cdot \text{severe} \). Vi testade olika värden på \(\lambda\).

**Huvudresultat:**

- Med \(\lambda = 0\) (enbart medelabs) var medelförlusten som lägst, men andelen svårt underförsörjda var hög.
- Genom att öka \(\lambda\) till 0.5–1.0 minskade severe dramatiskt, ofta med 30–50 %, till en måttlig ökning av medelabs (5–10 % vid hög heterogenitet, nästan ingen vid låg).
- \(\lambda = 1.0\) framstod som en robust utgångspunkt. \(\lambda = 2.0\) gav ytterligare minskning av severe men marginellt, och ibland något högre medelabs.
- Volatiliteten minskade i flera fall med högre \(\lambda\), vilket tyder på att viktningen också stabiliserade systemet.

**Slutsats:** Att explicit inkludera svår deprivation i målfunktionen är centralt. Utan viktning riskerar systemet att optimera bort de svagaste. Ett \(\lambda\) i intervallet 1–2 verkar balanserat.

### 4.5 Återkopplingsmodell

I denna delstudie modellerades återkoppling: transfer påverkar framtida behov. En första linjär version blev instabil vid stark återkoppling, men en mättande och asymmetrisk funktion stabiliserade systemet.

**Huvudresultat:**

- Vid måttlig återkoppling (\(\beta = 0.1\text{–}0.5\)) presterade Adaptive med dynamisk optimering och \(\lambda \geq 1\) bäst. Den hade både lägre medelabs och lägre severe än Universal och fasta parametrar.
- Vid stark återkoppling (\(\beta = 1.0\)) ökade alla förluster, men den dynamiska modellen var fortfarande mest robust.
- Viktningen mot svår deprivation visade sig också dämpa behovsspiraler: system med högre \(\lambda\) tenderade att få lägre slutligt medelbehov.

**Slutsats:** Under återkoppling blir adaptiv dynamik med viktad målfunktion ännu viktigare. Utan anpassning kan systemet hamna i en negativ spiral där otillräckligt stöd ökar framtida behov.

### 4.6 Socialt kapital och frivilligt arbete

Här utökades modellen med en variabel för socialt kapital och möjligheten att frivilligt arbeta. Arbete finansierades initialt som en separat inkomst, utan att konkurrera med basinkomsten.

**Huvudresultat:**

- Frivilligt arbete minskade underförsörjning och severe avsevärt: underförsörjning sjönk från 0.319 till 0.207 och severe från 0.140 till 0.074.
- Socialt kapital ökade markant, från 1.86 till 2.50.
- Deltagandet var måttligt (53 %) och i stort sett oberoende av basinkomstnivån, vilket tyder på att arbete är frivilligt och inte drivet av desperation.

**Slutsats:** Ett frivilligt arbetslager kan komplettera basinkomsten och förbättra både materiell och relationell välfärd, förutsatt att grundtryggheten är tillräcklig.

### 4.7 Kollektiv fond och MMT-inspirerad fördelning

Modellen reformulerades så att en fast real resurs \(R\) fördelas mellan basinkomst (\(B\)) och kollektiv fond (\(K\)). Den kollektiva fonden finansierar arbete som minskar behov (\(\phi_{work}\)) och bygger socialt kapital (\(\eta_{work}\)).

**Huvudresultat:**

- Vid standardparametrar (\(\phi_{work}=0.004\), \(\eta_{work}=0.006\)) var allokeringen \(b = 0.6\) (60 % basinkomst, 40 % kollektiv fond) optimal för en bred uppsättning vikter.
- En ren basinkomst (\(b = 1.0\)) gav lägst materiell deprivation, men lägre socialt kapital.
- En för stor kollektiv fond (lågt \(b\)) ledde till för låg basinkomst, vilket ökade stress och minskade socialt kapital trots arbete.

**Slutsats:** Basinkomst och kollektiv fond är komplement. En blandning med cirka 60/40 kan balansera materiell trygghet och relationell välfärd.

### 4.8 Känslighetsanalys av effektivitetsparametrar och vikter

Vi varierade \(\phi_{work}\), \(\eta_{work}\) och vikterna för underförsörjning, severe och socialt kapital.

**Huvudresultat:**

- När socialt kapital vägde tungt (ω₃ ≥ 0.34) var \(b = 0.6\) optimal i samtliga testade kombinationer.
- När enbart materiell deprivation vägde (ω₃ = 0) var \(b = 1.0\) oftast bäst, men högre \(\phi_{work}\) kunde förskjuta optimum till \(b = 0.6\text{–}0.8\).
- Högre \(\phi_{work}\) och \(\eta_{work}\) förbättrade alltid den totala välfärden, oavsett vikter.
- Arbetsdeltagandet var okänsligt för dessa parametrar och låg stabilt på cirka 53 %.

**Slutsats:** Den kollektiva fondens värde beror på hur effektivt arbete omvandlas till behovsminskning och socialt kapital. Om samhället värderar relationell välfärd högt, är en betydande kollektiv fond motiverad.

### 4.9 Heterogenitetens betydelse för allokeringsmixen

Slutligen undersöktes hur behovsfördelningens form (\(k\)) påverkar den optimala allokeringen.

**Huvudresultat:**

- Vid hög heterogenitet (\(k \leq 2\)) var \(b = 0.6\) optimal för båda testade viktningarna.
- Vid låg heterogenitet (\(k \geq 5\)) skiftade optimum till \(b = 0.8\), särskilt när underförsörjning vägde tungt.
- Underförsörjning och severe minskade med ökande \(k\), medan socialt kapital ökade.
- Deltagandet var konstant (~53 %) oavsett heterogenitet.

**Slutsats:** Ju mer ojämnt fördelade behoven är, desto större nytta av den kollektiva fonden. I relativt homogena samhällen kan en högre basinkomst vara lämpligare.

## 4.10 Real kapacitetsmodell

För att adressera kritiken att den tidigare modellen inte fullt ut implementerat MMT-perspektivet, genomfördes en utökad simulering där basinkomstens reala köpkraft begränsas av en produktionskapacitet \(C\). Syftet är att undersöka hur ekonomins reala kapacitet påverkar den optimala allokeringen mellan basinkomst och kollektiv fond.

**Metod:**  
Basinkomsten omvandlas till real köpkraft via funktionen \(C \cdot (1 - e^{-B/C})\). Fem kapacitetsnivåer testades: \(C = 0.5, 0.8, 1.0, 1.5, 2.0\). För varje nivå simulerades fem allokeringsandelar \(b = 0.2, 0.4, 0.6, 0.8, 1.0\). Välfärden beräknades med lika vikter (ω₁=ω₂=ω₃=1).

**Resultat:**

| C   | Bästa b | W      | Underf. | Severe | Socialt |
|-----|---------|--------|---------|--------|---------|
| 0.5 | 0.6     | 1.353  | 0.494   | 0.287  | 2.134   |
| 0.8 | 0.6     | 1.541  | 0.448   | 0.246  | 2.235   |
| 1.0 | 0.6     | 1.602  | 0.436   | 0.231  | 2.269   |
| 1.5 | 0.6     | 1.696  | 0.412   | 0.210  | 2.319   |
| 2.0 | 0.6     | 1.767  | 0.392   | 0.196  | 2.354   |

**Observationer:**

- Den optimala allokeringen är \(b = 0.6\) för alla kapacitetsnivåer. Detta bekräftar att en blandning med 60 % basinkomst och 40 % kollektiv fond är robust även när basinkomstens köpkraft begränsas.
- Högre kapacitet leder till bättre utfall på alla dimensioner: underförsörjning, severe och stress minskar, medan socialt kapital ökar.
- Vid låg kapacitet (C = 0.5) är en ren basinkomst (b = 1.0) kraftigt försämrad (W = 0.211 jämfört med 1.353 vid b = 0.6). Detta beror på att den nominella basinkomsten överstiger kapaciteten, vilket leder till att den reala köpkraften urholkas.
- Den kollektiva fonden fungerar som en real investering: den skapar arbetstillfällen och produktion som minskar behoven utan att driva på efterfrågeinflation.

**Slutsats:**  
Ekonomins reala kapacitet är avgörande för basinkomstens effektivitet. När kapaciteten är låg är det särskilt viktigt att komplettera basinkomsten med en kollektiv fond som skapar real produktion. Resultatet stärker argumentet för en blandad allokering och ger ytterligare stöd för MMT-perspektivet. Detta är ett modellbaserat resultat; dess externa giltighet återstår att pröva empiriskt.

---

## 5. Diskussion

Simuleringarna ger en sammanhängande bild av när och hur en adaptiv universell basinkomst (AUBI) kan vara motiverad. De visar också att adaptivitet inte är ett självändamål: under vissa förhållanden är ren universalism att föredra, och en dåligt utformad adaptiv komponent kan skapa fler problem än den löser. Nedan diskuterar vi de viktigaste insikterna tematiskt.

### 5.1 När är adaptiv universalism motiverad?

Resultaten pekar på tre villkor som tillsammans talar för en adaptiv arkitektur:

1. **Betydande behovsheterogenitet.** När behovsspridningen är stor (lågt \(k\)) kan en enhetlig transfer inte möta variationen. Ett adaptivt lager – eller en kollektiv fond som generellt minskar behoven – fångar en del av denna variation och förbättrar den genomsnittliga behovstäckningen.

2. **Måttligt mätfel.** Om systemet inte kan identifiera vilka som har högre behov med rimlig precision, urholkas värdet av individbaserad anpassning. Vid mycket högt mätfel kan adaptivitet till och med försämra utfallet jämfört med universalism.

3. **Prioritering av relationell välfärd och socialt kapital.** Om samhället väger socialt kapital tungt i sin målfunktion, blir den kollektiva fonden särskilt värdefull. Utan en sådan viktning är det ofta bäst att ge allt som individuell basinkomst.

När dessa villkor inte är uppfyllda – exempelvis i en relativt homogen population med små behovsskillnader – är en enkel universalism ofta både effektivare och mer robust.

### 5.2 MMT och reala resurser: budget vs. kapacitet

MMT-perspektivet har inspirerat de senare modellerna, men vi bör vara tydliga med att **modellen inte fullt ut implementerar MMT**. Vi har ersatt en monetär budgetbeteckning med en variabel som kallas "real resurs" \(R\), men matematiskt fungerar \(R\) fortfarande som en skalär budgetrestriktion: den fördelas mellan basinkomst och kollektiv fond utan att priser, utbudselasticitet eller inflationsmekanismer modelleras.

Detta innebär att:

- **Basinkomsten (B) saknar en real kapacitetsbegränsning.** Vi antar att utdelade pengar kan omsättas i varor och tjänster utan att påverka tillgång eller priser. I praktiken kan en stor transfer höja efterfrågan på bostäder, mat eller vård, vilket kan leda till inflation eller köer om utbudet inte följer med.

- **Den kollektiva fonden (K) har däremot en kapacitetsgräns.** I de senare simuleringarna begränsas antalet arbetstimmar av fondens storlek (`max_total_hours = K·N/w`). Detta är en form av real begränsning – den speglar att arbete kräver arbetskraft, inte bara pengar.

- **Asymmetrin mellan B och K är en förenkling.** MMT:s centrala insikt är just att både kontanttransfer och offentliga utgifter måste förhålla sig till real kapacitet. Vår modell fångar detta för arbetsfonden men inte för basinkomsten.

**Ny insikt från delstudie 4.10:**  
När vi inför en real kapacitetsgräns för basinkomsten (C) bekräftas MMT-perspektivet med större precision. Vid låg kapacitet leder en hög nominell basinkomst till inflation (representerad som lägre real köpkraft), vilket försämrar utfallet. En kollektiv fond som finansierar arbete skapar däremot real produktion och minskar behov utan att driva på efterfrågeinflation. Detta är exakt den mekanism MMT betonar: det är inte pengarna som är begränsade, utan den reala kapaciteten att producera varor och tjänster.

Trots denna begränsning ger modellen en användbar illustration av MMT:s kärnbudskap: valet mellan individuell transfer och kollektiva investeringar är en resursallokeringsfråga, inte en fråga om "hitta pengar". Men slutsatserna bör läsas som preliminära, eftersom vi inte har modellerat de reala återkopplingar som MMT betonar fullt ut.

### 5.3 Socialt kapital och relationell välfärd

Socialt kapital visade sig vara en viktig dimension som ofta förbises i traditionella analyser. I simuleringarna:

- Högre materiell trygghet ledde till lägre stress och mer tid för relationer, vilket ökade socialt kapital.
- Frivilligt arbete kunde ytterligare stärka socialt kapital, men bara om det var måttligt och inte ledde till överbelastning.
- Den kollektiva fonden bidrog till socialt kapital genom både direkt effekt (\(\eta_{work}\)) och indirekt genom att minska behoven.

När socialt kapital vägde tungt i målfunktionen blev en blandad allokering (b ≈ 0.6) optimal i nästan alla testade scenarier. Detta understryker vikten av att inte enbart fokusera på inkomstmått, utan också på relationella och sociala utfall.

### 5.4 Frivillighet och rätten att inte delta

Work in Liberation betonar att arbete måste vara frivilligt och att icke-deltagande är en legitim livsstil. Våra simuleringar bekräftar att:

- **Deltagandet i frivilligt arbete är stabilt kring 53 %** och i stort sett oberoende av basinkomstnivån. Detta tyder på att människor inte i första hand drivs av ekonomisk desperation, utan av andra motiv – socialt kapital, mening, tillhörighet.

- **En tillräckligt hög basinkomst är en förutsättning för att arbete ska vara verkligt frivilligt.** Vid för låg bas (b ≤ 0.4) ledde stressen till lägre socialt kapital trots arbete. Det är först när grundtryggheten är säkrad som arbete kan bli en källa till mening snarare än överlevnad.

- **Vi behöver inte döma dem som inte deltar.** Modellen visar att icke-deltagare inte försämrar systemets funktion nämnvärt, och att deras frånvaro inte bör tolkas som lathet. Detta är en viktig etisk och praktisk insikt.

### 5.5 Kollektiv fond som komplement till basinkomst

Den kollektiva fonden är inte en konkurrent till basinkomsten, utan ett komplement. Den finansierar arbete som producerar kollektiva nyttigheter – omsorg, utbildning, ekologisk restaurering – och därmed minskar behoven för alla, särskilt för dem med störst behov.

Resultaten visar att:

- Vid hög heterogenitet är den kollektiva fonden särskilt värdefull, eftersom den fungerar som en generell utjämningsmekanism utan att kräva individbaserad behovsprövning.
- Vid låg heterogenitet minskar fondens relativa värde, och en högre basinkomst kan vara lämpligare.
- Fondens effektivitet (\(\phi_{work}\), \(\eta_{work}\)) är avgörande. Ju bättre arbetet omvandlas till behovsminskning och socialt kapital, desto mer motiveras en stor kollektiv fond.

### 5.6 Designprinciper och politiska avvägningar

Baserat på resultaten föreslår vi följande principer för utformningen av ett AUBI-system:

1. **Inkludera fler dimensioner än inkomst i målfunktionen.** Svår deprivation, socialt kapital och ekologisk hållbarhet bör ingå. Utan sådana vikter riskerar systemet att optimera bort de svagaste och missa relationell välfärd.

2. **Använd måttlig anpassningshastighet.** Snabb anpassning (γ = 1.0) ökar volatiliteten utan att nödvändigtvis förbättra resultaten. Trögare anpassning (γ ≤ 0.5) jämnar ut brus och ger stabilare system.

3. **Säkerställ en tillräckligt hög basnivå.** Basen (\(\alpha\) eller \(B\)) bör inte sättas för lågt. I heterogena populationer kan en bas kring 0.6 av medelbehovet vara nödvändig för att undvika hög andel svår deprivation, även om det innebär något högre medelförlust.

4. **Låt den kollektiva fonden vara en integrerad del av systemet.** Den bör finansiera arbete som minskar behov och bygger socialt kapital, snarare än att ses som en separat kostnad.

5. **Skydda frivillighet och icke-deltagande.** Systemet bör inte kräva motprestationer eller straffa dem som väljer att stå utanför. Arbete är ett erbjudande, inte en skyldighet.

6. **Var beredd att justera allokeringen över tid.** Eftersom den optimala fördelningen beror på befolkningens behovsstruktur och samhällets värderingar, bör systemet vara flexibelt och demokratiskt styrt.

### 5.7 Koppling till teoretiska ramverk

Simuleringsresultaten ger villkorat mekanistiskt stöd för H2b inom den specificerade modellen. De etablerar inte att mekanismen fungerar med samma styrka i verkliga välfärdssystem. Inom modellen framgår att behovsheterogenitet kan motivera adaptiva komponenter, men bara under vissa betingelser: mätfelet måste vara måttligt, administrationskostnaderna inte för höga, och samhället måste explicit värdera fler dimensioner än genomsnittlig inkomst.

Ur ett **GAE-perspektiv** illustrerar resultaten flera centrala begrepp:

- **Varietetsgapet** minskar när systemet får fler frihetsgrader att svara på olika behov, men det gör inte gapet till noll. Mätfel och modellbegränsningar innebär att en del av variationen alltid förblir osedd.
- **Goodhart-liknande risker** uppstår när systemet optimerar på observerbara signaler. Våra simuleringar visar att detta kan leda till att svår deprivation ökar om inte målfunktionen explicit motverkar det.
- **Anpassningsflaskhalsen** blir synlig i dynamiken: även med löpande optimering begränsas systemet av observationskvaliteten och anpassningshastigheten.
- **Återkoppling** mellan system och omvärld kan skapa både negativa och positiva spiraler. En adaptiv design måste därför innehålla mekanismer som dämpar oönskad återkoppling.

**MMT** bidrar med insikten att finansiering inte är det primära problemet, utan resursallokering. **Work in Liberation** påminner oss om att frivillighet och socialt kapital är centrala värden som inte får offras för effektivitet.

### 5.8 Policyimplikationer

För en framtida AUBI-policy innebär resultaten att:

- **En universell grund bör vara ryggraden.** Den garanterar att ingen faller utanför och minskar behovet av exakta behovsbedömningar.
- **En kollektiv fond för frivilligt arbete kan vara ett värdefullt komplement.** Den bör finansiera arbetsintensiva tjänster som minskar behov och bygger socialt kapital.
- **Allokeringen mellan bas och fond bör bestämmas demokratiskt och kunna justeras.** Våra simuleringar pekar på att en fördelning kring 60/40 är en robust utgångspunkt när socialt kapital värderas, men den exakta mixen måste anpassas till lokala förhållanden och preferenser.
- **Utvärdering och lärande är centralt.** Systemet bör kontinuerligt följa upp flerdimensionella utfall och justeras när förutsättningarna förändras.

---

## 6. Slutsatser och implikationer för AUBI

Simuleringarna i denna rapport har prövat en bred uppsättning frågor om adaptiv universell basinkomst (AUBI). Från statiska jämförelser av individuella arkitekturer till dynamiska modeller med socialt kapital, frivilligt arbete och kollektiv fond har vi identifierat återkommande mönster som tillsammans ger en grund för försiktiga slutsatser.

### 6.1 Huvudsakliga slutsatser

**1. Behovsheterogenitet är en nödvändig men inte tillräcklig betingelse för individbaserad adaptivitet.**  
När behoven är starkt heterogena och mätfelet måttligt kan en adaptiv påfyllnad förbättra behovstäckningen jämfört med en enhetlig transfer. Vid låg heterogenitet eller stort mätfel är ren universalism ofta bättre och enklare. Detta ger ett villkorat stöd för hypotesen H2b.

**2. Målfunktionens utformning är avgörande.**  
Ett system som enbart minimerar genomsnittlig avvikelse tenderar att försumma de sämst ställda. Genom att explicit vikta svår deprivation (λ ≈ 1–2) kan andelen allvarligt underförsörjda minskas kraftigt till en måttlig kostnad i genomsnittlig täckning. Denna insikt gäller oavsett om vi talar om individuell adaptivitet eller kollektiv fond.

**3. Socialt kapital och relationell välfärd är centrala dimensioner.**  
När socialt kapital inkluderas som utfallsmått förändras den optimala politiken. Frivilligt arbete och kollektiva investeringar blir viktigare, eftersom de bygger tillit, gemenskap och mening – värden som inte fångas av inkomstmått.

**4. Frivilligt arbete kan komplettera basinkomsten utan tvång.**  
Deltagandet i frivilligt arbete är stabilt kring 53 % och i stort sett oberoende av basinkomstnivån. Detta tyder på att arbete, när grundtryggheten är säkrad, drivs av andra motiv än ekonomisk desperation. En kollektiv fond som finansierar sådant arbete kan minska behov och bygga socialt kapital utan att kräva motprestationer.

**5. MMT-perspektivet förskjuter fokus från budget till reala resurser.**  
Det finns ingen monetär begränsning för att garantera grundtrygghet; den verkliga frågan är hur samhället använder sin reala kapacitet. Våra simuleringar visar att en blandning av individuell basinkomst och kollektiv fond ofta är överlägsen en renodlad modell, särskilt när socialt kapital värderas.

**6. En allokering kring 60 % basinkomst och 40 % kollektiv fond är robust under många förhållanden.**  
Vid hög behovsheterogenitet och när socialt kapital väger minst lika tungt som materiell deprivation, är b = 0.6 den allokering som maximerar välfärden i de flesta testade scenarier. Vid låg heterogenitet kan en högre basinkomst (b = 0.8) vara lämpligare.

**7. Dynamisk anpassning kräver försiktighet.**  
Löpande parameterjustering kan förbättra träffsäkerheten, men snabb anpassning leder till volatilitet. Tröghet (γ ≤ 0.5) är ofta att föredra. Återkoppling från transfer till behov förstärker behovet av stabiliserande mekanismer som viktning mot svår deprivation.

### 6.2 Stöd för H2b och teoretiska ramverk

Resultaten ger villkorat mekanistiskt stöd för H2b inom den simulerade modellen. De visar att behovsheterogenitet kan motivera både individbaserad adaptivitet och en kollektiv fond, men bara när:

- mätfelet är måttligt,
- administrationskostnaderna inte är för höga,
- och samhället explicit värderar fler dimensioner än genomsnittlig inkomst.

Detta innebär inte att mekanismen är empiriskt bekräftad, utan att den är teoretiskt plausibel givet modellens antaganden.

Ur ett **GAE-perspektiv** illustrerar simuleringarna flera centrala mekanismer: varietetsgap, mätfel, Goodhart-liknande risker, anpassningsflaskhals och återkopplingsdynamik. Dessa är inte abstrakta begrepp utan konkreta designhinder som måste hanteras.

**MMT** påminner om att finansiering inte är det primära problemet; resursallokering är det. **Work in Liberation** bidrar med normativa principer om frivillighet, icke-deltagande och socialt kapital som bör vägleda utformningen.

### 6.3 Implikationer för AUBI-forskningen

För den fortsatta forskningen kring AUBI innebär resultaten att:

- **AUBI bör ses som en familj av arkitekturer snarare än ett specifikt system.** Den exakta utformningen av basnivå, målgruppsdefinition, kollektiv fond och anpassningsmekanism är avgörande och måste studeras separat.

- **Det finns inget "one size fits all".** Optimala parametrar varierar med befolkningens behovsprofil, datakvalitet och politiska prioriteringar. Detta talar för att AUBI-system bör vara flexibla och möjliga att justera över tid.

- **Simuleringsresultat måste kompletteras med empiriska studier.** Modellerna fångar mekanismer men bygger på förenklade antaganden. Fältpiloter och naturalistiska experiment behövs för att validera slutsatserna.

- **Den kollektiva fonden är ett lovande komplement.** Den kan fungera som en generell utjämningsmekanism utan att kräva individbaserad behovsprövning, och den kan bygga socialt kapital. Dess effektivitet beror på hur väl arbete omvandlas till behovsminskning och relationell välfärd.

### 6.4 Policyrekommendationer

Baserat på resultaten föreslår vi följande riktlinjer för en AUBI-arkitektur:

1. **Upprätta en hög ovillkorlig basinkomst.** Den bör vara tillräckligt hög för att eliminera den värsta materiella stressen, men inte nödvändigtvis täcka alla behov fullt ut.

2. **Inrätta en kollektiv fond för frivilligt arbete.** Fonden bör finansiera arbetsintensiva tjänster som minskar behov och bygger socialt kapital. Storleken bör bestämmas demokratiskt, med hänsyn till behovsstruktur och värderingar.

3. **Inkludera flerdimensionella mål i styrningen.** Svår deprivation, socialt kapital och ekologisk hållbarhet bör ingå i utvärderingen. Utan sådana vikter riskerar systemet att optimera bort de svagaste.

4. **Använd måttlig anpassningshastighet och skydda frivillighet.** Tröghet är en dygd. Systemet bör inte kräva motprestationer eller straffa icke-deltagande.

5. **Var beredd att justera allokeringen över tid.** Eftersom den optimala fördelningen beror på befolkningens behovsstruktur och samhällets värderingar, bör systemet vara flexibelt och demokratiskt styrt.

### 6.5 Avslutande reflektion

Adaptiv universell basinkomst är ett lovande forskningsfält, men det kräver ett disciplinerat tänkande kring mål, mätfel och dynamik. Våra simuleringar visar att en väl utformad AUBI kan förena universalismens trygghet med en bättre matchning mot heterogena behov – och dessutom bygga socialt kapital genom frivilligt arbete.

För Svensk Subsidiaritet innebär detta att AUBI kan vara ett värdefullt verktyg i en bredare verktygslåda, men att det inte bör behandlas som en universallösning. Den viktigaste lärdomen är att **arkitekturen är viktigare än etiketten** – ett system som kallas UBI men som i praktiken är behovsprövat kan ha helt andra effekter än ett genuint universellt system med ett försiktigt adaptivt lager och en välavvägd kollektiv fond.

---

## 7. Begränsningar och framtida forskning

Simuleringarna i denna rapport ger värdefulla insikter, men de bygger på en rad förenklingar. I denna sektion redovisas de viktigaste begränsningarna samt förslag till hur forskningen kan gå vidare.

### 7.1 Modellbegränsningar

**Endimensionellt behov.**  
I modellen representeras behov av en enda skalär resursbrist. I praktiken är behov flerdimensionella: hälsa, boende, utbildning, omsorg, mobilitet och social delaktighet samverkar. En individ kan ha lågt inkomstbehov men stort behov av vård. Den kollektiva fonden antas minska behov generellt, men kan i verkligheten behöva riktas mot specifika typer av behov.

**Förenklad arbetsmarknad.**  
Arbetsdeltagandet modelleras som ett enkelt binärt val (arbeta max antal timmar eller inte) med en logistisk beslutsregel. I verkligheten påverkas arbetsutbudet av en mängd faktorer: kompetens, hälsa, familjesituation, arbetsmiljö, sociala normer och tillgång till utbildning. Vi har inte heller modellerat att arbete kan producera differentierade varor och tjänster som riktas till specifika mottagare.

**Kollektiv nytta som generell behovsminskning.**  
Arbetets kollektiva effekt är modellerad som en enhetlig minskning av allas behov (φ_work) och ett generellt tillskott till socialt kapital (η_work). I verkligheten är effekterna heterogena: vårdarbete minskar vårdbehov, ekologisk restaurering förbättrar miljön, utbildning höjer framtida produktivitet. En mer nyanserad modell skulle knyta olika arbetstyper till olika behovsdimensioner.

**Ingen strategisk gaming.**  
Trots tidigare diskussioner om fusk och verifiering innehåller de slutliga modellerna inget strategiskt beteende. Individer kan inte överdriva sina behov eller fejka arbetsinsatser. Detta är en betydande förenkling, eftersom alla behovsbaserade system riskerar att manipuleras. Framtida modeller bör inkludera möjligheten att individer anpassar sitt beteende för att maximera sina egna förmåner.

**Förenklad dynamik.**  
Behovsprocessen är en enkel AR(1)-modell med konstanta chocker. Vi har inte modellerat plötsliga kriser, långsamma trendskiften, migration eller demografiska förändringar. Inte heller har vi inkluderat att individer kan förändra sin behovsnivå genom egna investeringar (t.ex. utbildning, flytt, hälsovård).

**Skillnaden mellan monetär budget och real resurs är inte fullt ut modellerad.**  
I de senare simuleringarna kallas \(R\) för en "real resurs", men matematiskt fungerar den som en monetär budgetrestriktion. Basinkomsten antas kunna tillgodose behov utan att priser eller tillgång påverkas, medan den kollektiva fonden har en kapacitetsgräns i form av maximalt antal arbetstimmar. Detta är en asymmetri som inte fångar MMT-perspektivets centrala poäng att även kontanttransfer måste förhålla sig till real kapacitet. Vi har inte modellerat inflation, utbudselasticitet eller köer.

**Parametrarna φ_work och η_work är godtyckligt valda.**  
Dessa styr hur effektivt arbete omvandlas till behovsminskning respektive socialt kapital. De är inte kalibrerade mot empiriska data, och olika värden kan ge olika slutsatser om den optimala allokeringen. Detta är en form av Goodhart-risk som rapporten varnar för generellt, men som även gäller för våra egna parametrar. Framtida arbete bör kalibrera dessa mot befintlig forskning om omsorgsarbetets effekter.

**Kapacitetsfunktionen är enkel.**  
I delstudie 4.10 modelleras basinkomstens reala köpkraft med en mjuk funktion \(C \cdot (1 - e^{-B/C})\). Denna fångar en generell trängsel men inte sektoriella flaskhalsar (t.ex. bostadsbrist, vårdköer) eller dynamiska effekter där investeringar kan öka kapaciteten över tid. Arbetsinkomsten antas vara helt real och opåverkad av kapacitetsbegränsningar, vilket inte alltid är realistiskt. Framtida modeller bör differentiera kapacitet per sektor och tillåta att arbete bygger upp kapacitet (t.ex. genom utbildning eller infrastruktur).

### 7.2 Metodologiska begränsningar

**Grid-baserad optimering.**  
Vi har använt diskreta parameterutrymmen och manuell grid-sökning. Detta ger en grov bild och kan missa optimum mellan testade värden. En kontinuerlig optimeringsmetod eller bayesiansk ansats skulle kunna ge mer exakta resultat.

**Begränsat antal repetitioner.**  
I vissa känslighetsanalyser användes endast 3–5 repetitioner per cell, vilket kan ge osäkra skattningar. Fler repetitioner eller variansreduktionstekniker skulle öka tillförlitligheten.

**Förenklad real resurs.**  
Resursen \(R\) antas vara konstant och fullt användbar antingen som kontanttransfer eller som arbetsfinansiering. I praktiken kan det finnas avtagande marginalnytta, trögheter och konverteringskostnader. Dessutom tar modellen inte hänsyn till att en del av resursen kan gå till administration, infrastruktur eller kapitalbildning.

**Ingen finansieringssida.**  
Även om MMT-perspektivet säger att pengar inte är begränsade, kräver reala resurser finansiering i form av skatter eller institutionella arrangemang. Modellen specificerar inte hur resursen \(R\) uppstår eller fördelas, vilket gör analysen ofullständig för policybruk.

### 7.3 Empiriska begränsningar

**Simuleringar är inte evidens.**  
Resultaten bygger på antaganden och mekanismer som vi specificerat. De visar vad som kan hända under dessa antaganden, inte vad som faktiskt händer i verkligheten. För att validera slutsatserna krävs empiriska studier – experiment, pilotprojekt eller naturliga experiment.

**Kalibrering mot verkliga data saknas.**  
Modellparametrar som mätfel, administrationskostnader, socialt kapitalbildning och arbetseffektivitet har satts godtyckligt. För att öka trovärdigheten bör de kalibreras mot data från existerande socialförsäkringssystem, UBI-piloter eller registerstudier.

**Externa validitetsproblem.**  
Även om en simulering visar att en viss arkitektur är bättre i modellen, betyder det inte att den är bättre i alla samhällen. Institutionella förhållanden, kulturella normer och politiska processer kan förändra utfallen.

### 7.4 Förslag till framtida forskning

**Utvidga behovsmodellen.**  
Flera dimensioner av behov bör inkluderas, liksom möjligheten att behov förändras på olika sätt för olika grupper. En mer realistisk modell skulle kunna bygga på mikrosimulering med individer vars livsbanor följer empiriska mönster.

**Modellera strategiskt beteende och gaming.**  
Inför möjligheten att individer anpassar sin rapportering eller sitt beteende för att påverka klassificeringen. Detta skulle belysa riskerna med adaptiva system och behovet av verifieringsmekanismer.

**Differentiera kollektiv nytta.**  
Koppla olika typer av arbete till olika behovsdimensioner och låt den kollektiva fonden finansiera en portfölj av tjänster snarare än en generell behovsminskning.

**Inkludera finansiering och skatteeffekter.**  
Koppla transfern till en skattebas och låt arbetsutbud påverkas av systemets utformning. Detta skulle möjliggöra analys av långsiktiga jämviktseffekter.

**Genomför känslighetsanalyser på bredare skala.**  
Systematiskt variera alla parametrar över större intervall för att identifiera robusta regioner och brytpunkter.

**Validera med empiriska data.**  
Samarbeta med forskare som har tillgång till registerdata eller pågående UBI-experiment för att testa modellens prediktioner. Särskilt intressant är att se om viktning mot svår deprivation och socialt kapital leder till bättre utfall i praktiken.

**Utveckla protokoll för pilotstudier.**  
Baserat på simuleringsresultaten kan man utforma småskaliga piloter där olika allokeringsmixar och arbetsmodeller testas. Sådana piloter bör ha tydliga utvärderingskriterier och möjlighet att justera systemet under gång.

**Analysera institutionella aspekter.**  
Modellen behandlar systemet som om det styrs av en välvillig planerare. Framtida arbete bör inkludera politisk ekonomi, intressegrupper, byråkrati och demokratiska processer för att förstå hur allokeringsbeslut fattas i praktiken.

### 7.5 Slutsats om begränsningar

Sammantaget visar begränsningarna att denna rapport är ett första steg snarare än en slutgiltig analys. Simuleringarna ger en begreppsram och pekar på centrala mekanismer, men de kan inte ersätta empirisk prövning. För Svensk Subsidiaritet innebär detta att AUBI bör betraktas som en **forskningshypotes** – inte en färdig policyrekommendation.

---

## Bilaga A – Parameteröversikt

Denna bilaga sammanfattar de parametrar som används i simuleringarna. Eftersom modellen byggts ut successivt, används inte alla parametrar i varje delstudie. Vi anger därför i vilket sammanhang varje parameter förekommer.

### A.1 Grundläggande populationsparametrar

| Parameter | Beskrivning | Typiskt värde / intervall | Används i |
|-----------|-------------|---------------------------|-----------|
| `N` | Antal individer i populationen | 1000–10000 | Alla delstudier |
| `T` | Antal tidsperioder i dynamiska simuleringar | 30–100 (vanligen 50) | 4.3–4.9 |
| `mean_need` | Långsiktigt medelbehov | 1.0 | Alla delstudier |
| `k` | Formparameter i gammafördelningen för behov; lågt k ger hög heterogenitet | 0.5, 1.0, 2.0, 5.0, 10.0 | Alla delstudier |
| `R` | Total real resurs per individ och period | 1.0 | 4.7–4.9 |
| `C` | Real produktionskapacitet per individ; begränsar basinkomstens reala köpkraft | 0.5, 0.8, 1.0, 1.5, 2.0 | 4.10 |

### A.2 Mätfel, dynamik och återkoppling

| Parameter | Beskrivning | Typiskt värde / intervall | Används i |
|-----------|-------------|---------------------------|-----------|
| `sigma_eps` | Mätfel (standardavvikelse i observation av behov) | 0.0–1.0 (vanligen 0.3) | 4.1–4.5 |
| `sigma_shock` | Standardavvikelse för chocker i AR(1)-processen | 0.1 | 4.3–4.9 |
| `rho` | Persistens i behovsprocessen | 0.0, 0.5, 0.9 | 4.3–4.9 |
| `gamma` | Anpassningshastighet i exponentiellt glidande medelvärde | 0.1, 0.5, 1.0 | 4.3–4.5, 4.7–4.9 (i 4.7–4.9 används gamma ej aktivt) |
| `beta_pos` | Återkopplingsstyrka vid underförsörjning | 0.1, 0.5, 1.0 | Endast 4.5 |
| `beta_neg` | Återkopplingsstyrka vid överförsörjning | beta_pos / 2 | Endast 4.5 |
| `scale_feedback` | Mättnadsskala i tanh-funktionen | 0.5 | Endast 4.5 |

### A.3 Administrationskostnader

| Parameter | Beskrivning | Typiskt värde / intervall | Används i |
|-----------|-------------|---------------------------|-----------|
| `c_admin` | Administrationskostnad per klassificerad individ (andel av transferbudget) | 0.0–0.2 (vanligen 0.05) | 4.1–4.5 |

### A.4 Individuella arkitekturparametrar

| Parameter | Beskrivning | Typiskt värde / intervall | Används i |
|-----------|-------------|---------------------------|-----------|
| `p_high` | Andel individer som klassificeras som högbehov | 0.1–0.9 (grid) | 4.1–4.5 |
| `alpha` | Basnivå i Adaptive: andel av transferbudgeten som fördelas lika | 0.0–1.0 (grid) | 4.2–4.5 |
| `lambda_sev` (λ) | Vikt för svår deprivation i målfunktionen | 0.0, 0.5, 1.0, 2.0 (i känslighetsanalys upp till 10) | 4.4–4.5 |

### A.5 Socialt kapital

| Parameter | Beskrivning | Typiskt värde | Används i |
|-----------|-------------|---------------|-----------|
| `S_bar` | Långsiktigt medelvärde för socialt kapital | 1.0 | 4.6–4.9 |
| `rho_S` | Persistens i socialt kapital | 0.9 | 4.6–4.9 |
| `gamma_rel` | Effekt av relationstid på socialt kapital | 0.2 | 4.6–4.9 |
| `gamma_stress` | Effekt av materiell stress på socialt kapital | 0.3 | 4.6–4.9 |
| `gamma_work` | Positiv effekt av måttligt arbete på socialt kapital | 0.1 | 4.6–4.9 |
| `gamma_overwork` | Negativ effekt av överarbete på socialt kapital | 0.15 | 4.6–4.9 |
| `optimal_work` | Optimal arbetstid för socialt kapital (timmar) | 15.0 | 4.6–4.9 |

### A.6 Arbetsmarknad och kollektiv fond

| Parameter | Beskrivning | Typiskt värde | Används i |
|-----------|-------------|---------------|-----------|
| `w` | Timlön för frivilligt arbete | 0.05 | 4.6–4.9 |
| `max_hours` | Maximalt antal arbetstimmar per individ och period | 15.0 | 4.6–4.9 |
| `reservation_wage` | Reservationslön (lägsta timlön för att vilja arbeta vid låg stress) | 0.02 | 4.6–4.9 |
| `participation_sensitivity` | Känslighet i logistisk arbetsbeslutsmodell | 5.0 | 4.6–4.9 |
| `b` | Andel av real resurs R som går till basinkomst | 0.2–1.0 (grid) | 4.7–4.9 |
| `phi_work` | Behovsminskning per arbetad timme per capita | 0.002–0.008 (känslighetsanalys) | 4.7–4.9 |
| `eta_work` | Socialt kapitaltillskott per arbetad timme per capita | 0.001–0.012 (känslighetsanalys) | 4.7–4.9 |

*Notera:* I tidigare version av kollektiv fond (innan arbete kopplades till fonden) användes parametrarna `phi` och `eta` direkt på K, men dessa ersattes av `phi_work` och `eta_work`.

### A.7 Målfunktionsvikter (välfärdsfunktion)

I de senare delstudierna (4.7–4.9) används en linjär välfärdsfunktion:

\[
W = -\omega_1 \cdot \text{underförsörjning} - \omega_2 \cdot \text{severe} + \omega_3 \cdot \text{socialt kapital}
\]

| Parameter | Beskrivning | Typiska värden |
|-----------|-------------|----------------|
| `omega1` (ω₁) | Vikt för underförsörjning | 0.0–1.0 |
| `omega2` (ω₂) | Vikt för svår deprivation | 0.0–1.0 |
| `omega3` (ω₃) | Vikt för socialt kapital | 0.0–1.0 |

Vanliga viktkombinationer:  
- (1.0, 0.0, 0.0) – enbart underförsörjning  
- (0.0, 1.0, 0.0) – enbart severe  
- (0.0, 0.0, 1.0) – enbart socialt kapital  
- (0.33, 0.33, 0.34) – ungefär lika vikter  
- (0.2, 0.2, 0.6) – socialt kapital dominerar  
- (0.6, 0.2, 0.2) – underförsörjning dominerar  

### A.8 Repetitioner och slumpfrön

| Parameter | Beskrivning | Typiskt värde |
|-----------|-------------|---------------|
| `n_rep` | Antal repetitioner per parameterkombination | 3–10 (vanligen 5–10) |
| `seed` | Slumptalsfrö för reproducerbarhet | 42 |

---

## Bilaga B – Kodsnuttar

Denna bilaga innehåller centrala kodsnuttar från den slutliga simuleringsmodellen (socialt kapital, frivilligt arbete, kollektiv fond och heterogenitetsanalys). Koden är skriven i Python 3 med NumPy. Fullständiga skript finns tillgängliga i projektets kodarkiv.

### B.1 Generering av initiala behov

```python
def generate_initial_needs(k, mean, N, rng):
    theta = mean / k
    return rng.gamma(shape=k, scale=theta, size=N)
```

### B.2 Uppdatering av behov med kollektiv effekt

```python
def update_needs(prev_needs, mu, rho, shock, phi_effect):
    new_needs = rho * prev_needs + (1 - rho) * mu + shock - phi_effect
    return np.clip(new_needs, 0.1, 5.0)
```

### B.3 Uppdatering av socialt kapital

```python
def update_social_capital(S, total_income, needs, work_hours, phi_effect, eta_effect, params):
    material_security = np.clip(total_income / np.maximum(needs, 0.01), 0, 2)
    stress = np.maximum(0, needs - total_income) / np.maximum(needs, 0.01)
    rel_time = np.clip(material_security, 0, 1)

    work_effect = np.zeros_like(work_hours)
    mask = work_hours > 0
    work_effect[mask] = np.where(work_hours[mask] <= params['optimal_work'],
                                 work_hours[mask] / params['optimal_work'] * params['gamma_work'],
                                 params['gamma_work'] - params['gamma_overwork'] * (work_hours[mask] - params['optimal_work']) / params['optimal_work'])

    dS = (1 - params['rho_S']) * (params['S_bar'] - S) + \
         params['gamma_rel'] * rel_time - \
         params['gamma_stress'] * stress + \
         work_effect + \
         eta_effect

    return np.clip(S + dS, 0, 3)
```

### B.4 Arbetsbeslut (frivillig logistisk modell)

```python
def decide_work(needs, transfer, wage, params):
    material_stress = np.maximum(0, needs - transfer) / np.maximum(needs, 0.01)
    reserv = params['reservation_wage'] * (1 + material_stress)
    p_work = 1 / (1 + np.exp(-params['participation_sensitivity'] * (wage - reserv)))
    random_draw = np.random.rand(len(needs))
    desired = np.where(random_draw < p_work, params['max_hours'], 0.0)
    return desired
```

### B.5 Allokering av arbetstimmar under budgettak

```python
def allocate_work(desired_hours, max_total_hours):
    total_desired = np.sum(desired_hours)
    if total_desired <= max_total_hours:
        return desired_hours.copy()
    else:
        scale = max_total_hours / total_desired
        return desired_hours * scale
```

### B.6 Beräkning av förlustmått

```python
def compute_under_loss(needs, income):
    """Asymmetrisk förlust: straffar endast underförsörjning."""
    return np.mean(np.maximum(0, needs - income))

def compute_severe(needs, income):
    return np.mean(income < 0.5 * needs)
```

### B.7 Huvudloop (förenklad)

```python
for t in range(T):
    # Basinkomst
    transfer = np.full(N, B)

    # Arbetsbeslut
    desired = decide_work(needs, transfer, w, params)
    actual_hours = allocate_work(desired, max_total_hours)

    # Inkomst
    labor_income = actual_hours * w
    total_income = transfer + labor_income

    # Kollektiva effekter
    L_per_capita = np.sum(actual_hours) / N
    phi_effect = phi_work * L_per_capita
    eta_effect = eta_work * L_per_capita

    # Förluster
    abs_loss = compute_under_loss(needs, total_income)
    severe = compute_severe(needs, total_income)

    # Socialt kapital
    social = update_social_capital(social, total_income, needs, actual_hours,
                                   phi_effect, eta_effect, social_params)

    # Uppdatera behov
    shock = rng.normal(0, sigma_shock, size=N)
    needs = update_needs(needs, mu, rho, shock, phi_effect)
```

### B.8 Välfärdsfunktion

```python
def compute_welfare(mean_abs, mean_severe, mean_social, w1, w2, w3):
    return -w1 * mean_abs - w2 * mean_severe + w3 * mean_social
```

### B.9 Real basinkomst

```python
def real_basic_income(B, C):
    """
    Beräkna real köpkraft av basinkomst givet kapacitetsgräns C.
    Mjuk kapacitetsgräns: real_B = C * (1 - exp(-B/C)).
    """
    if C <= 0:
        return 0.0
    return C * (1 - np.exp(-B / C))
```

---

## Bilaga C – Resultattabeller

Denna bilaga sammanfattar nyckelresultaten från simuleringarna i sektion 4.6–4.9. Fullständiga data finns i separata CSV-filer. Tabellerna illustrerar de viktigaste mönstren.

### C.1 Socialt kapital och frivilligt arbete

Jämförelse mellan scenarier utan och med möjlighet till frivilligt arbete (modell med separat arbetsinkomst, basinkomst B=0.6, lön 0.05, max 15 timmar, 5 repetitioner).

| Scenario | Underförsörjning | Severe | Socialt kapital | Deltagande |
|----------|------------------|--------|-----------------|------------|
| Utan arbete | 0.319 | 0.140 | 1.864 | – |
| Med arbete | 0.207 | 0.074 | 2.495 | 53.4 % |

Arbete minskar materiell deprivation avsevärt och ökar socialt kapital med cirka 34 %.

### C.2 Allokering mellan basinkomst och kollektiv fond

Resultat för olika andelar basinkomst (b) när den kollektiva fonden finansierar arbete (R=1.0, φ_work=0.004, η_work=0.006, 5 repetitioner).

| b   | Underförsörjning | Severe | Socialt kapital | Deltagande | Genomsnittliga timmar |
|-----|------------------|--------|-----------------|------------|-----------------------|
| 0.2 | 0.545            | 0.375  | 1.792           | 52.3 %     | 7.85                  |
| 0.4 | 0.456            | 0.255  | 2.119           | 53.0 %     | 7.94                  |
| 0.6 | 0.359            | 0.164  | 2.343           | 53.1 %     | 7.92                  |
| 0.8 | 0.345            | 0.136  | 2.256           | 53.3 %     | 4.00                  |
| 1.0 | 0.359            | 0.132  | 2.063           | 0.0 %      | 0.00                  |

Vid b=0.6 fås den högsta kombinationen av materiell trygghet och socialt kapital om man viktar dem lika.

### C.3 Känslighet för φ_work och η_work

Känslighetsanalys av den kollektiva nyttans effektivitet (ω₁=ω₂=ω₃=1, 10 repetitioner). I alla testade kombinationer var b=0.6 optimal.

| φ_work | η_work | Bästa b | Välfärd W | Underf. | Severe | Socialt kapital |
|--------|--------|---------|-----------|---------|--------|-----------------|
| 0.002  | 0.001  | 0.6     | 1.689     | 0.384   | 0.176  | 2.250           |
| 0.002  | 0.012  | 0.6     | 1.992     | 0.379   | 0.174  | 2.544           |
| 0.004  | 0.006  | 0.6     | 1.864     | 0.372   | 0.172  | 2.408           |
| 0.008  | 0.012  | 0.6     | 2.073     | 0.343   | 0.157  | 2.574           |

Högre effektivitet leder alltid till högre W, men förändrar inte den optimala allokeringen.

### C.4 Viktningskänslighet för φ_work och η_work

Optimal allokering b för olika viktkombinationer (φ_work=0.004, η_work=0.006, 5 repetitioner).

| Viktning (ω₁,ω₂,ω₃) | Bästa b | W      | Underf. | Severe | Socialt |
|----------------------|---------|--------|---------|--------|---------|
| (1, 0, 0)            | 0.8     | -0.368 | 0.368   | 0.147  | 2.188   |
| (0, 1, 0)            | 1.0     | -0.137 | 0.367   | 0.137  | 2.042   |
| (0, 0, 1)            | 0.6     | 2.251  | 0.385   | 0.176  | 2.251   |
| (0.33,0.33,0.34)     | 0.6     | 0.581  | 0.385   | 0.176  | 2.252   |
| (0.2,0.2,0.6)        | 0.6     | 1.240  | 0.384   | 0.176  | 2.254   |
| (0.6,0.2,0.2)        | 0.6     | 0.185  | 0.384   | 0.176  | 2.253   |

När socialt kapital väger tungt (ω₃ ≥ 0.2) är b=0.6 optimal. Enbart materiell deprivation tenderar att ge b=0.8–1.0.

### C.5 Heterogenitetens betydelse

Optimal allokering b för olika behovsheterogenitet (k) och två viktningar (φ_work=0.004, η_work=0.006, 5 repetitioner).

| k   | Viktning (0.33,0.33,0.34) | Viktning (0.6,0.2,0.2) |
|-----|----------------------------|------------------------|
|     | Bästa b | W      | Bästa b | W      |
| 0.5 | 0.6     | 0.613  | 0.6     | 0.181  |
| 1.0 | 0.6     | 0.641  | 0.6     | 0.224  |
| 2.0 | 0.6     | 0.689  | 0.6     | 0.286  |
| 5.0 | 0.6     | 0.752  | 0.8     | 0.365  |
| 10.0| 0.8     | 0.799  | 0.8     | 0.412  |

Vid hög heterogenitet (k ≤ 2) är en kollektiv fond på 40 % motiverad oavsett viktning. Vid låg heterogenitet (k ≥ 5) blir en högre basinkomst (b = 0.8) bättre.

### C.6 Real kapacitetsmodell

Optimal allokering för olika kapacitetsnivåer (ω₁=ω₂=ω₃=1, 5 repetitioner).

| C   | Bästa b | W      | Underf. | Severe | Socialt |
|-----|---------|--------|---------|--------|---------|
| 0.5 | 0.6     | 1.353  | 0.494   | 0.287  | 2.134   |
| 0.8 | 0.6     | 1.541  | 0.448   | 0.246  | 2.235   |
| 1.0 | 0.6     | 1.602  | 0.436   | 0.231  | 2.269   |
| 1.5 | 0.6     | 1.696  | 0.412   | 0.210  | 2.319   |
| 2.0 | 0.6     | 1.767  | 0.392   | 0.196  | 2.354   |

---

## Bilaga D – Koppling till evidensmatrisen för Svensk Subsidiaritet

Denna bilaga placerar AUBI-simuleringarna i relation till evidensmatrisen. Simuleringarna utgör inte ett empiriskt fall i traditionell mening, men de fungerar som **mekanistiska modelltester** av flera hypoteser, särskilt H2 (behovsheterogenitet) och besläktade styrningsprinciper. Statusangivelserna följer matrisens vokabulär och ska läsas som preliminära.

### D.1 Direkt koppling till H2 (behovsheterogenitet)

Matrisens H2 är formulerad utifrån preferensheterogenitet, men i AUBI-arbetet har vi använt en preciserad version – **H2b – behovsheterogenitet**:

> När relevanta behov varierar väsentligt mellan människor, grupper eller platser kan en enhetlig försörjning ge sämre träff än en gemensam ram med lämpligt anpassade komponenter.

**Vad simuleringarna tillför:**

- De visar att behovsheterogenitet (mätt som spridning i behovsfördelningen) kan motivera en adaptiv komponent, men bara när mätfelet är måttligt och administrationskostnaderna inte är för höga.
- De visar att värdet av anpassning varierar kraftigt med befolkningens behovsprofil: vid låg heterogenitet är universalism nästan alltid bättre.
- De visar att valet av målfunktion (särskilt viktning av svår deprivation) är avgörande för om anpassningen förbättrar eller försämrar utfallet för de sämst ställda.
- De nya resultaten visar att även en kollektiv fond kan fungera som en generell anpassningsmekanism, särskilt vid hög heterogenitet.

**Status i matrisen:** H2b är ännu inte formellt införd i matrisen, men simuleringarna ger **villkorat stöd** för hypotesen.

**Mekanismträff:** Hög – simuleringarna testar direkt mekanismen "heterogena behov → adaptiv fördelning → bättre träff".

**Konfidens:** Medel – modellresultaten är tydliga, men bygger på förenklade antaganden.

### D.2 Koppling till H3 (kapacitet)

H3: *Decentralisering förbättrar mindre sannolikt utfall när den mottagande kapaciteten är otillräcklig.*

AUBI-simuleringarna modellerar inte institutionell kapacitet explicit, men administrationskostnader och mätfel fungerar som indirekta indikatorer på kapacitetsbrister.

- När mätfelet är stort (motsvarande svag behovsbedömningskapacitet) minskar värdet av adaptivitet.
- När administrationskostnaderna är höga försvinner mycket av fördelen med att differentiera stödet.
- I de senare modellerna är kapaciteten att omvandla arbete till behovsminskning och socialt kapital (φ_work, η_work) en avgörande faktor.

**Mekanismträff:** Delvis – kapacitet representeras genom kostnader och brus, inte som organisatorisk förmåga.

**Konfidens:** Medel – resultaten är konsekventa men modellbaserade.

### D.3 Koppling till H7 (funktionell skala)

H7: *Optimal styrningsskala varierar per funktion snarare än att följa en enda universell administrativ nivå.*

AUBI-frågan kan ses som en funktionell skalfråga: ska försörjningsstöd vara helt individuellt (targeting), helt generellt (nationell likabehandling) eller en hybrid (universell bas + adaptivt lager + kollektiv fond)?

Simuleringarna visar att den optimala graden av differentiering och allokering beror på behovsfördelningen – vilket är en form av funktionell anpassning. Vid hög heterogenitet är en kollektiv fond motiverad; vid låg heterogenitet är en högre basinkomst lämpligare. Detta ligger i linje med H7:s kärnbudskap att skalan inte bör vara uniform.

**Mekanismträff:** Delvis – simuleringarna testar differentieringsgrad snarare än territoriell skala.

**Konfidens:** Medel.

### D.4 Koppling till H9 (fiskal utjämning)

H9: *Lokal autonomi kan samexistera med fiskal utjämning och riskdelning på högre nivå.*

AUBI kan ses som en form av individuell utjämning: en nationellt finansierad grund med lokalt/individuellt anpassade tillägg. Simuleringarna visar att en sådan hybrid är möjlig och kan vara effektiv, men att utformningen av utjämningsmekanismen (basnivå + påfyllnad + kollektiv fond) är avgörande. Den kollektiva fonden fungerar som en generell utjämning genom att minska behoven för alla, särskilt de med störst behov.

**Mekanismträff:** Delvis – simuleringen handlar om individer, inte territorier, men principen om kombinerad universalism och anpassning är densamma.

**Konfidens:** Medel.

### D.5 Koppling till H12 (anpassningsflaskhals)

H12: *Anpassning begränsas av den långsammaste kritiska länken mellan sensering, lärande och genomförande.*

Den dynamiska delen av simuleringarna modellerar en anpassningskedja:

- **Sensering** = observation av behov med mätfel.
- **Lärande** = skattning av behovsfördelning och val av parametrar.
- **Genomförande** = utbetalning av transfer och finansiering av arbete.

Resultaten visar att anpassningshastigheten (γ) och mätfelet (σ) sätter gränser för hur bra systemet kan prestera. Snabb anpassning kan till och med försämra utfallet på grund av brus. Detta är ett konkret exempel på H12:s kärnmekanism.

**Mekanismträff:** Hög – simuleringen innehåller en explicit anpassningsslinga med begränsningar.

**Konfidens:** Medel – modellstöd men ännu inte empiriskt testat i institutionella miljöer.

### D.6 Koppling till H13 (pluralt observerande)

H13: *Att bevara pluralt observerande/flera modellvägar kan hjälpa till att upptäcka fel som ett dominerande optimerat system missar.*

AUBI-simuleringarna använder en enda observationskälla (individuella behovsbedömningar). De visar att ett system som enbart förlitar sig på en brusig signal kan fatta systematiska felbeslut, särskilt när målfunktionen är fel specificerad. Detta antyder att pluralt observerande eller flera informationskällor skulle kunna förbättra robustheten, men det har inte testats. De nya resultaten med kollektiv fond visar att en generell mekanism kan fungera som ett komplement till individbaserad observation, vilket minskar beroendet av exakt behovsmätning.

**Mekanismträff:** Låg–Delvis – simuleringarna illustrerar risken med singulär observation men testar inte pluralism.

**Konfidens:** Låg – inga direkta resultat.

### D.7 Koppling till H15 (adaptiv auktoritetsfördelning)

H15: *En resilient subsidiaritetsarkitektur bör kunna ändra auktoritetsfördelning när problemstrukturen förändras.*

AUBI med dynamisk optimering är ett exempel på ett system som löpande ändrar fördelningsparametrar (basnivå, målgrupp, allokeringsandel b) när behovsbilden förändras. Simuleringarna visar att denna anpassningsförmåga kan förbättra träffsäkerheten, men också att den kan skapa volatilitet om den inte tyglas. Den nya insikten är att även den kollektiva fondens storlek (b) kan behöva justeras över tid när befolkningens behovsstruktur förändras.

**Mekanismträff:** Hög – simuleringen implementerar en form av adaptiv auktoritetsfördelning (mellan generell och riktad fördelning, samt mellan individuell och kollektiv resursanvändning).

**Konfidens:** Medel.

## D.8 Nya hypoteser

Baserat på resultaten i sektion 4.6–4.9 föreslår vi följande hypoteser för införande i evidensmatrisen. Eftersom de bygger på simuleringar med godtyckligt kalibrerade parametrar, bör de klassas som **explorativa** och ges **låg konfidens** tills de valideras med empiriska data eller kalibrerade modeller.

**H21 – Kollektiv fond som komplement till basinkomst**  
> En kollektiv fond som finansierar frivilligt arbete kan förbättra både materiell och relationell välfärd jämfört med enbart individuell basinkomst, särskilt när behoven är heterogena och arbetet effektivt minskar behov och bygger socialt kapital.

*Status: Explorativ. Konfidens: Låg.*

**H22 – Vikten av socialt kapital i målfunktionen**  
> När socialt kapital inkluderas som ett explicit mål i välfärdsfunktionen, förändras den optimala allokeringen: en betydande del av resursen bör avsättas till kollektiva investeringar snarare än enbart individuell transfer.

*Status: Explorativ. Konfidens: Låg.*

**H23 – Frivillighet och arbetsdeltagande**  
> Frivilligt arbete kan vara ett stabilt och betydande inslag i ekonomin utan tvång, förutsatt att grundtryggheten är tillräckligt hög. Deltagandet är relativt okänsligt för basinkomstnivån, vilket tyder på att arbete drivs av andra motiv än ekonomisk desperation.

*Status: Explorativ. Konfidens: Låg.*

**H24 – Real resursallokering (MMT-perspektiv)**  
> Den optimala fördelningen av en given real resurs mellan individuell transfer och kollektiva investeringar beror på befolkningens behovsheterogenitet och samhällets värderingar. Det finns ingen universell optimal andel; flexibilitet och demokratisk justering är nödvändiga.

*Status: Explorativ. Konfidens: Låg.*

## D.9 Sammanfattande kopplingstabell (uppdaterad)

| Matris-ID | Hypotes | AUBI-simuleringens koppling | Mekanismträff | Konfidens | Preliminär status |
|---|---|---|---|---|---|
| H2b (ny) | Behovsheterogenitet motiverar adaptiva komponenter | Direkt testad, inkl. kollektiv fond | Hög | Låg–Medel | Explorativ / villkorat stödd |
| H3 | Kapacitet påverkar utfall | Mätfel/admin-kostnader som proxy; φ_work/η_work som effektivitet | Delvis | Låg–Medel | Stödjer kvalificering |
| H7 | Funktionell skala varierar | Allokeringsmix beror på behovsstruktur | Delvis | Låg–Medel | Explorativ |
| H9 | Autonomi + utjämning | Universell bas + adaptivt lager + kollektiv fond | Delvis | Låg–Medel | Stödjer princip |
| H12 | Anpassningsflaskhals | Explicit anpassningsslinga; γ och σ begränsar | Hög | Låg–Medel | Explorativ |
| H13 | Pluralt observerande | Risk med singulär signal illustreras; kollektiv fond som komplement | Låg–Delvis | Låg | Olöst |
| H15 | Adaptiv auktoritetsfördelning | Dynamisk parameterjustering, inkl. allokeringsandel b | Hög | Låg–Medel | Explorativ |
| H21 (ny) | Kollektiv fond som komplement | Testad i 4.7–4.9 | Hög | Låg | Explorativ |
| H22 (ny) | Socialt kapital i målfunktionen | Testad i 4.8 | Hög | Låg | Explorativ |
| H23 (ny) | Frivillighet och arbetsdeltagande | Testad i 4.6–4.9 | Hög | Låg | Explorativ |
| H24 (ny) | Real resursallokering (MMT) | Testad i 4.7–4.9 | Hög | Låg | Explorativ |

---

## Bilaga E – MMT och Work in Liberation: teoretisk referens

Denna bilaga ger en kortfattad introduktion till de två ramverk som inspirerat de senare simuleringarna: Modern Monetary Theory (MMT) och Work in Liberation. Syftet är att göra rapporten självbärande för läsare som inte är förtrogna med dessa perspektiv.

### E.1 Modern Monetary Theory (MMT)

**Grundidé:**  
MMT ifrågasätter den traditionella föreställningen att staten måste finansiera sina utgifter genom skatter eller lån innan den kan spendera. I ett system med suverän valuta kan staten alltid emittera pengar. Den verkliga begränsningen är inte tillgången på pengar, utan tillgången på reala resurser: arbetskraft, råvaror, energi, teknologi, kunskap och ekologisk kapacitet.

**Konsekvenser för basinkomst och AUBI:**

- En ovillkorlig basinkomst är inte finansiellt omöjlig. Staten kan skapa pengarna. Frågan är om ekonomin har real kapacitet att möta den ökade efterfrågan.
- Inflation uppstår om den samlade efterfrågan överstiger ekonomins produktionskapacitet. Därför är resursallokering – inte budgettak – den centrala styrningsfrågan.
- Skatter har en roll, men inte primärt för att "finansiera" utgifter, utan för att dämpa inflation, omfördela resurser och skapa efterfrågan på valutan.

**I simuleringarna:**  
Vi har ersatt den monetära budgetrestriktionen med en fast real resurs per individ (\(R = 1.0\)). Denna resurs kan fördelas mellan individuell basinkomst och kollektiv fond. Detta speglar MMT:s kärnbudskap: det är inte pengarna som är begränsade, utan hur samhället väljer att använda sin reala kapacitet.

### E.2 Work in Liberation

**Grundidé:**  
Work in Liberation är ett ramverk som betonar att arbete måste vara frivilligt och att icke-deltagande är en legitim livsstil. Det utgår från principen att materiell trygghet måste vara frikopplad från arbete för att arbete ska kunna vara verkligt frivilligt.

**Nyckelbegrepp:**

- **Frivillighet och rätten att inte delta:** Ingen ska tvingas att arbeta eller att synliggöra sina bidrag. Låg formell aktivitet får inte tolkas som lathet eller misslyckande.
- **Socialt kapital:** Relationer, tillit och gemenskap är centrala värden. Arbete kan bidra till socialt kapital, men bara om det är frivilligt och inte leder till överbelastning.
- **Kollektiv fond:** En del av samhällets resurser bör användas för att finansiera arbete som producerar kollektiva nyttigheter – omsorg, utbildning, ekologisk restaurering – snarare än att enbart förlita sig på individuell efterfrågan.
- **Basinkomst som förutsättning:** En tillräckligt hög ovillkorlig grund är nödvändig för att arbete ska vara ett erbjudande, inte en överlevnadsstrategi.

**I simuleringarna:**  
Individer kan välja att arbeta frivilligt. Arbete ger både individuell inkomst och kollektiv nytta (minskar behov och bygger socialt kapital). Socialt kapital är ett centralt utfallsmått. Deltagandet är modellerat som ett fritt val, inte ett krav.

### E.3 Jämförelse av perspektiven

| Aspekt | Traditionell syn | MMT | Work in Liberation |
|--------|------------------|-----|-------------------|
| Finansiering | Staten måste täcka utgifter med skatter/lån | Staten kan alltid skapa pengar; reala resurser begränsar | Finansiering är underordnad frågan om hur arbete organiseras |
| Arbete | Ska uppmuntras genom incitament och krav | Full sysselsättning kan uppnås genom offentlig efterfrågan | Arbete ska vara frivilligt och meningsfullt |
| Välfärd | Ofta mätt som BNP eller inkomst | Fokus på reala resurser och kapacitetsutnyttjande | Flerdimensionell: materiell trygghet, socialt kapital, mening |
| Icke-deltagande | Kan ses som problem | Inte centralt | Legitimt livsval som måste skyddas |

### E.4 Integrering i AUBI-modellen

I de senare simuleringarna förenas MMT och Work in Liberation i en gemensam arkitektur:

- **Real resurs R** (MMT) fördelas mellan individuell basinkomst och kollektiv fond.
- **Kollektiv fond** finansierar frivilligt arbete (Work in Liberation).
- **Socialt kapital** är ett utfallsmått (Work in Liberation).
- **Frivillighet** är en designprincip (Work in Liberation).
- **Allokeringsandel b** är den centrala styrningsvariabeln.

Resultaten visar att den optimala allokeringen beror på både behovsheterogenitet (hur ojämnt behoven är fördelade) och samhällets värderingar (hur mycket socialt kapital väger jämfört med materiell deprivation). Detta ligger i linje med både MMT:s betoning på real resursallokering och Work in Liberations betoning på relationell välfärd och frivillighet.

### E.5 Relevans för Svensk Subsidiaritet

För Svensk Subsidiaritet bidrar dessa perspektiv med två viktiga påminnelser:

1. **Subsidiaritetsprincipen handlar inte bara om territoriell nivå, utan också om vad som bör vara individuellt respektive kollektivt.** AUBI-modellen med basinkomst och kollektiv fond är en form av vertikal subsidiaritet: individen får direkt stöd för sina egna behov, medan gemensamma nyttigheter finansieras kollektivt.

2. **Frivillighet och socialt kapital är centrala för legitimiteten.** Ett system som tvingar fram arbete eller ignorerar relationell välfärd riskerar att undergräva både tillit och effektivitet. Work in Liberation påminner om att frigörelse från överlevnadstvång är ett mål i sig, inte bara ett medel för ekonomisk effektivitet.

---

