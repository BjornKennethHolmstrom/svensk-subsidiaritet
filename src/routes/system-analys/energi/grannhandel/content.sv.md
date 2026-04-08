# Grannhandel med el

[← Tillbaka till huvudartikeln](..)

**Sammanfattning**: Möjliggör direkt handel av solel mellan grannar (peer-to-peer) via en digital plattform. Ett hushåll med solceller på taket säljer överskottsel direkt till grannen istället för till nätägaren till låg ersättning. Plattformen matchar köpare och säljare, hanterar betalningar och rapporterar till nätägaren. Tekniken finns redan (blockchain, smarta mätare), men svensk lagstiftning (ellagen) kräver att all elhandel går via ett registrerat elhandelsföretag. Målet: skapa en rättvisare ersättning till småskaliga producenter, öka incitamenten för solceller, och låta grannar dela på både el och kostnader. Pilot i en stadsdel eller by med 500 hushåll.

## Mekanismen

Idag säljer ett hushåll med solceller sin överskottsel till nätägaren (det lokala elnätsbolaget) till ett lågt pris – ofta 20–40 öre/kWh, långt under det pris som hushållet själv betalar för inköpt el (100–300 öre/kWh). Nätägaren säljer sedan samma el vidare till grannar till marknadspris. Skillnaden är nätägarens vinst. Hushållet med solceller får alltså en mycket dålig betalning medan nätägaren tjänar på solcellens produktion.

**Åtgärden**: Inför **grannhandel** (peer-to-peer, P2P) där:

- Ett hushåll (säljare) med solceller anmäler sin överskottsel på en digital plattform.
- Ett annat hushåll (köpare) i samma lokala nätområde (samma lågspänningsstation) köper el direkt från säljaren via plattformen.
- Plattformen matchar bud och priser (t.ex. säljaren sätter ett pris på 80 öre/kWh, köparen accepterar). Priset ligger mellan nätägarens inköpspris (lågt) och det ordinarie elpriset (högt) – båda vinner.
- Elen flödar fysiskt som vanligt via nätet, men den ekonomiska transaktionen går direkt mellan grannarna. Plattformen rapporterar till nätägaren så att nätavgiften (som täcker transportförluster) kan debiteras separat.
- Tekniken bygger på **smarta elmätare** (installerade i alla svenska hem sedan 2020) och en digital plattform (mobilapp eller webb) med BankID-inloggning. Blockchain kan användas för att säkra transaktioner, men är inte nödvändigt.

**Exempel**:

*Anna har solceller på taket. En solig dag producerar hon 15 kWh, men använder bara 5 kWh själv. 10 kWh går normalt ut på nätet och hon får 25 öre/kWh från nätägaren = 2,50 kr. Grannen Bertil betalar samtidigt 150 öre/kWh för sin el (inklusive skatter och avgifter).*

*Med grannhandel: Anna säljer sina 10 kWh direkt till Bertil via plattformen för 80 öre/kWh (överenskommet pris). Anna får 8 kr (istället för 2,50 kr). Bertil betalar 8 kr för elen, plus en mindre nätavgift till nätägaren (20 öre/kWh, totalt 2 kr) – totalt 10 kr, vilket är långt mindre än 15 kr han annars skulle betala för samma mängd el (150 öre × 10 kWh). Båda vinner. Nätägaren får fortfarande sin nätavgift och förlorar inte intäkter.*

**Varför detta inte är möjligt idag**:

- Ellagen kräver att all elhandel sker via ett registrerat elhandelsföretag som har balansansvar (ansvar för att produktion och konsumtion matchar i realtid).
- Privatpersoner får inte sälja el direkt till varandra utan en sådan mellanhand.
- Elnätsföretagen har inget incitament att möjliggöra grannhandel – de tjänar på mellanskillnaden.

**Åtgärdens kärna**: Ändra ellagen så att småskalig grannhandel (under en viss effektgräns, t.ex. 100 kW per anläggning) undantas från kravet på elhandelsföretag. Plattformen (kooperativ eller kommunal) tar rollen som ”teknisk samordnare” men inte som balansansvarig – det ansvaret ligger kvar hos nätägaren.

## Pilotdesign – 500 hushåll i två områden

**Pilotfas 1 (år 1‑3)**: Två pilotområden med totalt 500 hushåll testar grannhandel under ett undantag från ellagen.

**Pilot 1: Hammarby Sjöstad, Stockholm** (tätort, blandad bebyggelse)
- 300 hushåll, varav 100 med solceller (tak eller balkong).
- Plattformen utvecklas av ett lokalt energikooperativ i samarbete med KTH.
- Elnätsägare: Vattenfall Eldistribution (som samtycker till piloten).
- Mål: testa tekniken i tätort med högt solcellstryck.

**Pilot 2: Simris, Österlen** (landsbygd, högt solcellstäthet)
- 200 hushåll, varav 80 med solceller (många bondgårdar).
- Plattformen utvecklas av en bygdeförening i samarbete med Eon.
- Mål: testa i område med stor överproduktion dagtid och låg nätkapacitet.

**Organisationsmodell**:

- **Plattformsutveckling**: En stiftelse eller kooperativ (med pilotområdena som medlemmar) bygger appen. Budget 2–3 Mkr (delvis finansierad av Energimyndigheten).
- **Teknisk lösning**: Appen kopplar till varje hushålls smarta elmätare (API från nätägaren). Hushållen anger köp-/säljbud. Plattformen matchar och skickar betalningar via Swish eller direktdebitering.
- **Nätägarens roll**: Nätägaren fortsätter att mäta och debitera nätavgift (rörlig del) för all el som passerar nätet. Grannhandeln påverkar inte nätägarens tekniska ansvar.
- **Lagligt undantag**: Regeringen medger dispens från ellagen för piloten. Elhandelsföretag krävs inte, men en ”teknisk samordnare” (plattformsägaren) måste rapportera till nätägaren och Energimarknadsinspektionen.

**Tekniska specifikationer**:

| Komponent | Lösning |
|-----------|---------|
| Identifiering | BankID (säljare och köpare) |
| Mätdata | API från nätägarens mätsystem (timvärden) |
| Matchning | Auktionsalgoritm (säljare sätter pris, köpare accepterar) eller dynamiskt pris (spotpris + marginal) |
| Betalning | Swish (direkt) eller månadsfaktura via plattformen |
| Säkerhet | Krypterad kommunikation, blockchain som valbar (inte krav) |
| Nätavgift | Nätägaren debiterar separat (rörlig avgift per kWh, oförändrad) |

**Utvärdering**:

- Antal aktiva användare efter 6, 12, 24 månader (mål: >70 % av hushållen i piloten)
- Genomsnittligt pris på grannhandelsel jämfört med nätägarens inköpspris och marknadspris
- Säljarnas extra intäkt per år (jämfört med att sälja till nätägaren)
- Köparnas besparing per år (jämfört med ordinarie elpris)
- Tekniska problem (driftstopp, mätfel, betalningsstörningar)
- Nätägarens upplevelse (påverkar de nätstabiliteten? extra administration?)

## Budget och finansiering

| Post | Belopp (2 piloter) |
|------|-------------------|
| Plattformsutveckling (app, backend, API-integration) | 2 500 000 kr (engång) |
| Plattformsdrift (server, support, 2 år) | 500 000 kr |
| Marknadsföring och information till hushåll | 300 000 kr |
| Juridisk rådgivning (dispens, avtal) | 200 000 kr |
| Utvärdering (oberoende forskare) | 500 000 kr |
| **Totalt** | **4 000 000 kr** |

**Finansiering**: Medel söks från Energimyndighetens program för ”Smarta elnät och flexibilitet” (budget ca 200 Mkr/år). 4 Mkr är en mindre pilot. När tekniken är bevisad kan plattformen skalas upp till andra områden utan ytterligare statlig finansiering (kostnaden per hushåll blir låg, ca 500 kr per anslutning).

## Regeländringar som krävs

1. **Ändring i ellagen (1997:857)** – lägg till en paragraf: *”Ett hushåll eller mindre företag får överlåta el från en solcellsanläggning med installerad effekt under 100 kW direkt till en annan slutkund inom samma nätområde utan att vara registrerat som elhandelsföretag. Överlåtelsen ska ske via en digital plattform som rapporterar till nätägaren och Energimarknadsinspektionen.”*

2. **Förordning om tekniska samordnare** – Energimarknadsinspektionen får i uppdrag att godkänna plattformar för grannhandel. Krav på säkerhet, transparens och konsumentskydd.

3. **Skatteförordningen** – grannhandel mellan privatpersoner är inte momspliktig (privatpersoner har ingen momsregistrering). Elen som säljs är redan beskattad via energiskatt när den matas in på nätet? Förtydligande: grannhandel är en vidareförsäljning av redan skattepliktig el – ingen ytterligare skatt.

4. **Dataskyddsförordningen (GDPR)** – hushållens elanvändning är känsliga personuppgifter. Plattformen måste ha samtycke från användarna och följa GDPR. Enkla mallar för användarvillkor tas fram.

## Förväntat motstånd och svar

### ”Nätägarna förlorar intäkter – de kommer att blockera piloten.”

**Svar**: Nätägarna debiterar fortfarande nätavgift för all el som passerar. Grannhandeln minskar inte den fysiska mängden el i nätet (elen flödar ändå). Vissa nätägare kan till och med tjäna på grannhandel, eftersom den minskar flaskhalsar (när produktion och konsumtion sker lokalt belastas inte överliggande nät). Piloterna förutsätter att nätägaren samtycker och delar mätdata – annars kan regeringen tvinga dem via ellagen.

### ”Elhandelsföretagen förlorar kunder – de lobbar emot.”

**Svar**: Elhandelsföretagens affärsmodell bygger på att köpa el billigt (från producenter) och sälja dyrt (till kunder). Grannhandel konkurrerar med den marginalen. Men elhandelsföretagen kan anpassa sig – till exempel genom att själva erbjuda grannhandelsplattformar (som en tjänst) eller genom att fokusera på större kunder. Piloten är liten och utgör inget hot på kort sikt. På lång sikt måste elhandelsbranschen förändras – det är oundvikligt med smarta nät.

### ”Tekniken är inte mogen – blockchain är för långsam och dyr.”

**Svar**: Blockchain är valfritt, inte nödvändigt. Smarta mätare, molntjänster och krypterade API:er räcker. Plattformen kan vara en enkel webbserver med en databas. Kostnaden per transaktion blir några ören – försumbar. Tekniken finns redan beprövad i liknande piloter i Tyskland, Nederländerna och Australien.

### ”Det här är bara för elnördar – vanligt folk kommer inte att använda det.”

**Svar**: Plattformen utformas för att vara enkel: användaren anger ett accepterat pris (t.ex. ”jag vill köpa för max 100 öre/kWh”). Allt annat sker automatiskt. Många kommer att uppskatta möjligheten att få högre betalt för sin solel eller att köpa billigare el från grannen. Piloten ska testa just användarvänlighet.

### ”Finns det internationella exempel?”

**Svar**: Ja. **Tyskland** (Pebbles-projektet, SonnenCommunity) – tusentals hushåll handlar solel peer-to-peer. **Nederländerna** (Vandebron, Powerpeers) – plattformar med grannhandel. **Australien** (Power Ledger) – blockchainbaserad grannhandel i flera stadsdelar. **USA** (Brooklyn Microgrid) – lokal handel med solenergi. Sverige ligger efter – piloten kan ge svensk erfarenhet.

## Svenska exempel att bygga på

- **Egen elanvändning med solceller** – redan idag kan man använda sin egen solel direkt. Nästa steg är att dela med grannen.
- **Bostadsrättsföreningars gemensamma solel** – många BRF installerar solceller på taket och fördelar elen mellan medlemmarna (internt). Det är en form av grannhandel inom samma fastighet. Skalmodellen finns.
- **Lokala energigemenskaper (EU-direktiv 2019/944)** – EU:s renodlade elmarknadsdirektiv uppmuntrar medlemsstater att möjliggöra energigemenskaper. Sverige har inte implementerat detta fullt ut. Grannhandel är ett sätt att leva upp till direktivet.
- **Elogen (Eon)** – ett svenskt elhandelsföretag som erbjuder timpris, men inte grannhandel. De skulle kunna vara pilotpartner.

## Vad du kan göra i morgon

**Om du har solceller**: Prata med dina grannar som också har solceller. Fråga nätägaren om de har planer på att möjliggöra grannhandel. Skriv en gemensam skrivelse till Energimarknadsinspektionen.

**Om du är nätägare**: Gå ihop med några kunder i ett pilotprojekt. Ni har redan mätdata och tekniska system. Att bygga en enkel plattform är inte svårt. Var först i Sverige – det är bra PR.

**Om du är politiker (riksdag eller region)**: Lägg en motion om att införa en lagändring för grannhandel (se regeländringsförslaget ovan). Använd EU-direktivet 2019/944 som argument – Sverige måste implementera det ändå.

---

[← Tillbaka till huvudartikeln](..)
