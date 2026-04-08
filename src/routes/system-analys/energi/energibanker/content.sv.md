# Energibanker

[← Tillbaka till huvudartikeln](..)

**Sammanfattning**: Kommunala eller kooperativa energibanker där hushåll och företag kan låna ut överskottseffekt till elnätet vid topplast. En energibank är en digital plattform + aggregator som samlar ihop små flexibilitetsresurser – batterier i hemmet, elbilar som står parkerade, uppvärmda vattentankar, styrd uppvärmning (värmepumpar, elpannor), och ibland mindre reservkraftverk. När elnätet är överbelastat (t.ex. en kall vinterkväll i SE3) betalar nätägaren energibanken för att minska sin effekt (laststyrning) eller mata in lagrad el. Intäkterna fördelas till de hushåll som deltagit. Målet: minska behovet av dyra nätinvesteringar (nya ledningar, transformatorer) och ersätta dem med distribuerad flexibilitet – till en bråkdel av kostnaden.

## Mekanismen

Idag bygger Svenska kraftnät och lokala nätägare ut elnätet för att klara effekttoppar som inträffar bara några tiotal timmar per år (t.ex. kalla vinterkvällar när alla lagar mat, värmer hus och laddar bilen samtidigt). En ny 130 kV-ledning kan kosta miljarder, men används fullt ut bara 1–2 % av tiden. Samtidigt sitter hundratusentals batterier, elbilar och värmepumpar outnyttjade – de skulle kunna hjälpa till att kapa topparna.

**Åtgärden**: En **energibank** är en lokal aggregator som:

- Rekryterar hushåll och företag som har flexibla resurser (se tabell nedan). Deltagaren anmäler via en app och får en liten bonus (t.ex. 500 kr/år).
- Aggregerar (samlar ihop) tusentals små resurser till en virtuell effektreserv – tillräckligt stor för att nätägaren ska kunna köpa tjänsten.
- När nätägaren signalerar att det råder effektbrist (pris eller direkt kommando), skickar energibanken styrsignaler till deltagarnas utrustning: batteriet laddas ur, elbilen pausar laddning, varmvattenberedaren stängs av i 30 minuter, värmepumpen sänker effekten.
- Deltagaren får en ersättning baserad på hur mycket effekt (kW) som frigjorts och hur länge (timmar). Ersättningen är ofta högre än kostnaden för den el man inte använder – netto vinst för hushållet.
- Energibanken kan också lagra el när priset är lågt (nattetid, blåsiga dagar) och sälja tillbaka när priset är högt (peak shaving via batterier).

**Exempel på flexibla resurser i ett vanligt hushåll**:

| Resurs | Typisk effekt | Möjlig åtgärd | Påverkan på komfort | Ersättning per timme (uppskattning) |
|--------|--------------|---------------|---------------------|-------------------------------------|
| Elbilsladdning | 3–11 kW | Pausa laddning 1–2 h | Ingen (bilen är ändå parkerad) | 10–30 kr/tim |
| Varmvattenberedare | 2–6 kW | Stäng av 30–60 min | Ingen (vattnet är varmt länge) | 5–20 kr/tim |
| Värmepump (luft/vatten) | 1–5 kW | Sänk effekt 30 % | Kanske 1 grad kallare under en timme | 5–25 kr/tim |
| Hembatteri (5–15 kWh) | 3–5 kW | Ladda ur under topptimme | Ingen | 20–50 kr/tim |
| Elpanna (direktverkande) | 3–10 kW | Stäng av 15–30 min | Temperaturen sjunker marginellt | 10–40 kr/tim |
| Smart tvätt/tork | 1–3 kW | Fördröja start | Ingen (programmet körs senare) | 2–10 kr/tim |

**Samhällsnyttan**: Genom att aktivera energibanken under de 50–100 högsta effekttopparna per år kan nätägaren undvika eller skjuta upp miljardinvesteringar i nätförstärkning. Varje kilowatt topplast som kapas sparar 5 000–15 000 kr i nätkostnad. Energibankens kostnad är en bråkdel av det – typiskt 500–1 000 kr per installerad kW.

## Pilotdesign – 3 lokala energibanker

**Pilotfas 1 (år 1‑4)**: Tre energibanker i olika typer av geografier – en tätort, en mindre stad och ett landsbygdsområde. Varje bank samlar minst 500 flexibla resurser.

**Pilot 1: Stockholm (Hammarby Sjöstad / Nacka)**
- Typ: Tätort, hög andel elbilar, batterier och värmepumpar.
- Mål: 1 000 hushåll, total flexibel effekt 2–3 MW.
- Nätägare: Vattenfall Eldistribution.
- Teknik: Plattform från lokalt energikooperativ + startup.

**Pilot 2: Västerås (centralort + kransorter)**
- Typ: Mellanstor stad, blandning av villor, bostadsrätter och mindre industrier.
- Mål: 800 hushåll + 20 företag, flexibel effekt 2 MW.
- Nätägare: Mälarenergi Elnät.
- Teknik: Kommunal plattform (Mälarenergi utvecklar själva).

**Pilot 3: Skellefteå (glesbygd, landsbygd)**
- Typ: Glesbygd, många elpannor, varmvattenberedare och några elbilar.
- Mål: 500 hushåll, flexibel effekt 1,5 MW.
- Nätägare: Skellefteå Kraft Elnät.
- Teknik: Kooperativ plattform (bygdeförening + forskningsstöd).

**Organisationsmodell**:

- Energibanken drivs som en ekonomisk förening (kooperativ) eller som en del av det lokala energikontoret/kommunala bostadsbolaget.
- Deltagarna skriver ett avtal som tillåter energibanken att styra deras utrustning (via API eller manuell opt-in). Avtalet specificerar lägsta ersättning och max antal styrningar per år (t.ex. max 100 timmar, så att komforten inte påverkas nämnvärt).
- Nätägaren köper flexibilitetstjänsten från energibanken via ett avtal. Priset sätts genom anbud eller förhandling. Typiskt betalar nätägaren en fast effektavgift (kr per tillgänglig kW per månad) plus rörlig ersättning (kr per kWh som frigörs).
- Energibanken distribuerar ersättningen till deltagarna (minus en liten avgift för drift, 10–20 %).

**Tekniska specifikationer**:

| Funktion | Lösning |
|----------|---------|
| Kommunikation med utrustning | Lokala API:er (t.ex. OCPP för laddboxar, Modbus för värmepumpar) eller via smarta mätare (styrbar last) |
| Plattform | Molnbaserad, öppen källkod (möjliggör för fler energibanker) |
| Signal från nätägare | Direktkommando via API (krypterat) eller via prisinformation (spotpris) |
| Deltagarapp | Enkel app (iOS/Android) där användaren ser sin förbrukning, intjänad ersättning, och kan ställa in komfortgränser |
| Säkerhet | Utrustningen får endast styras inom överenskomna ramar – ingen risk för obehörig åtkomst |

**Utvärdering**:

- Total installerad flexibel effekt (kW) per energibank
- Andel av topplast som kan kapas (jämfört med scenario utan energibank)
- Nätägarens minskade investeringsbehov (mkr/år)
- Deltagarnas nöjdhet och andel som fortsätter efter piloten
- Kostnad per flexibel kW – jämfört med traditionell nätförstärkning (målet är minst 50 % lägre)

## Budget och finansiering

| Post | Belopp (per pilotbank) | Totalt 3 banker |
|------|------------------------|-----------------|
| Plattformsutveckling (öppen källkod, delad) | 1,5 Mkr (engång) | 1,5 Mkr (delad) |
| Plattformsdrift (3 år) | 200 000 kr | 600 000 kr |
| Marknadsföring & rekrytering (500–1 000 hushåll) | 300 000 kr | 900 000 kr |
| Ersättning till deltagare (för pilotperioden) | 500 000 kr | 1,5 Mkr |
| Administrationsresurs (0,5 tjänst × 3 år) | 900 000 kr | 2,7 Mkr |
| Utvärdering (forskning) | 500 000 kr | 1,5 Mkr |
| **Totalt** | **3,9 Mkr per bank (3 år)** | **~9 Mkr** (delade kostnader minskar) |

**Finansiering**: Medel kan sökas från Energimyndighetens program för ”Smarta elnät” och ”Flexibilitet i elsystemet” (budget ca 200 Mkr/år). EU-medel (Horizon Europe, LIFE) kan också användas. När piloten är utvärderad kan affärsmodellen bära sig själv: nätägaren betalar energibanken för flexibilitet, energibanken betalar deltagarna. Investeringen i plattform och startkostnader är engångsutgifter.

## Regeländringar som krävs

1. **Ellagen (1997:857)** – idag är nätägaren skyldig att ansluta alla kunder men har ingen skyldighet att köpa flexibilitetstjänster. En ny paragraf bör införas: *”Nätägaren ska, i områden med begränsad nätkapacitet, eftersträva att köpa flexibilitetstjänster från aggregatorer (såsom energibanker) innan nätförstärkning utförs, om det är samhällsekonomiskt effektivt.”* (Liknande regler finns redan i Storbritannien och Kalifornien.)

2. **Förordning om nätavgifter** – nätavgiften differentieras så att kunder som ställer upp med flexibilitet får en lägre fast avgift eller bonus (incitament). Energimarknadsinspektionen får i uppdrag att utforma modellen.

3. **Sekretess och GDPR** – energibanken behöver tillgång till deltagarnas mätdata (kWh per timme). Kräver samtycke enligt GDPR. Mall för samtycke tas fram.

4. **Standardavtal** – Energimarknadsinspektionen och branschorganisationen Energiföretagen Sverige tar fram en standardmall för avtal mellan nätägare och energibank, respektive mellan energibank och deltagare. Det sänker tröskeln för nya aktörer.

## Förväntat motstånd och svar

### ”Nätägarna vill bygga nät – det är deras kärnverksamhet. De kommer inte att köpa flexibilitet.”

**Svar**: Nätägarens uppdrag är att leverera tillförlitlig el till lägsta möjliga kostnad för kunderna. Om flexibilitet är billigare än nätförstärkning (vilket det ofta är), är nätägaren enligt ellagen skyldig att överväga det. I piloten ingår nätägare som är positiva. För att driva på omställningen krävs reglering (se ovan) – när incitamenten är rätt kommer nätägarna att anpassa sig.

### ”Det här är för komplicerat för vanliga hushåll – vem orkar ställa in sina prylar?”

**Svar**: Energibanken sköter allt automatiskt efter att användaren anmält sig. Inga dagliga justeringar krävs. Användaren sätter bara en komfortgräns (t.ex. ”bilen ska vara laddad till 80 % klockan 08:00” eller ”temperaturen får inte understiga 18 grader”). Resten sker i bakgrunden. Appen visar intjänad ersättning – vilket ofta motiverar deltagande.

### ”Batterier och elbilar är dyra – det här blir bara för rika.”

**Svar**: Även hushåll utan batteri eller elbil kan delta via varmvattenberedare, värmepump eller tvättmaskin. Dessa resurser finns i de flesta hem. Och när fler deltar, desto lägre blir kostnaderna för nätet – vilket gynnar alla kunder (även de utan flexibla resurser) genom lägre nätavgifter.

### ”Styrning av utrustning i hemmet är integritetskänsligt.”

**Svar**: Deltagaren bestämmer själv när och hur mycket utrustningen får styras (t.ex. max 2 timmar per dag, inte mellan 17–19 om man lagar mat). All data krypteras. Avtalet specificerar att energibanken aldrig får stänga av utrustning som påverkar säkerhet (t.ex. frysskydd). Integritetsrisken är låg jämfört med den nytta som lägre elräkning och minskad klimatpåverkan ger.

### ”Finns det svenska exempel?”

**Svar**: Ja, flera mindre piloter. **E.ON** har testat laststyrning av elbilar i projektet ”Smart Charging”. **Vattenfall** har testat virtuella batterier (”V2G”) i några enstaka hem. **Göteborg Energi** har flexibilitetstjänster för fjärrvärme. Men ingen har byggt en öppen, kooperativ energibank i stor skala. Piloten skulle vara först i Sverige – och kan bli förebild för Europa.

## Svenska exempel att bygga på

- **Laststyrning av elbilar (E.ON, Vattenfall)** – redan idag kan laddboxar styras via app. Tekniken finns.
- **Solcellspooler (kooperativ)** – använder aggregator för att sälja överskottsel. Samma modell kan användas för flexibilitet.
- **Nätnytta och flexmarknad (Svenska kraftnät)** – de har redan en marknad för storskalig flexibilitet (reservkraft). Energibanken är en lokal, småskalig variant.
- **Danska ”Energy Collective”** – danskt energikooperativ som aggregerar flexibilitet från bostäder. Sverige kan besöka och lära.

## Vad du kan göra i morgon

**Om du har elbil, batteri eller värmepump**: Undersök om din nätägare eller ditt energibolag erbjuder styrning mot ersättning. Fråga i deras kundtjänst. Ju fler som efterfrågar, desto snabbare händer det.

**Om du är nätägare eller energikontor**: Starta en liten pilot – samla 100 kunder som är villiga att styra sin laddning eller varmvattenberedare. Erbjud en bonus på 500 kr/år. Mät effekten. Visa att det fungerar. Bygg sedan en plattform.

**Om du är politiker (kommun eller riksdag)**: Lägg ett förslag om att införa en ”flexibilitetsplikt” för nätägare – att de måste köpa flexibilitetstjänster innan de bygger ny nätkapacitet. Använd texten ovan som underlag.

---

[← Tillbaka till huvudartikeln](..)
