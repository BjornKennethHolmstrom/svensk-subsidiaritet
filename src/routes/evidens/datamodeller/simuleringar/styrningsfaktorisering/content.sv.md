# Kan styrningens skala faktoriseras?

## Två frysta blindtest av Styrningsfaktoriseringssimulatorn

**Status:** Forskningsprogram, två genomförda blindtest (v0.1 och v0.5). Modellen fryses före varje test, prediktionerna låses före utfallskodningen, och vi rapporterar missarna lika utförligt som träffarna. Det här är **[R]-resultat inom en explorativ modell** plus **[IP]-mönstertest mot svenska institutioner**, inte kausala test och inte påståenden om vad som är optimalt. Se **[Så vet vi](/evidens/sa-vet-vi/)** för anspråksnivåerna.

---

## Evidens i korthet

| | |
|---|---|
| 🟢 **Starkt strukturellt stöd** | Styrningsfunktioner *kan* separeras över skalor utan att modellen kollapsar till en standardarkitektur. Komponentseparation observerad i samtliga sexton undersökta funktioner. |
| 🟡 **Preliminärt empiriskt stöd** | v0.5 förbättrade den låsta föregångaren v0.4 på fyra centrala mått i ett genuint nytt blindtest — starkast för distinktionen mellan samordning och bindande beslutanderätt. Åtta fall är för få för att kalla modellen validerad. |
| 🔴 **Öppna residualer** | Fyra skarpt lokala funktioner fick fortfarande noll sannolikhet för kompatibel helarkitektur. Institutionellt ärvd beslutanderätt, breda gränssnitt ovanpå lokal produktion, och bred beslutanderätt med decentraliserad produktion saknas eller är strukturellt svåra i modellen. |

---

## Frågan

Debatten om centralisering och decentralisering behandlar ofta en samhällsfunktion som om den hade **en enda naturlig styrningsnivå**. Men en och samma verksamhet kan samtidigt behöva lokal kunskap, regional specialistkompetens, bred riskdelning, gemensam infrastruktur och ibland bindande beslut på systemnivå.

Projektets fjärde syntespåstående, **C4**, sa ursprungligen att skala kanske kan faktoriseras: att vissa fördelar med större skala möjligen kan nås utan att slå ihop de politiska jurisdiktionerna. Formuleringen var försiktig av en anledning — vi hade inget test.

Så vi byggde en mekanistisk modell, frös den, och lät den förutsäga hur verkliga svenska funktioner *borde* vara organiserade. Sedan tittade vi efter.

---

## Metoden: frys, förutsäg, undersök sedan

Ordningen är hela poängen. En modell som justeras efter att man sett svaren kan alltid förmås att stämma.

```text
1. Bygg modellen
2. Frys den                    ingen ändring efter denna punkt
3. Koda funktionerna blint     problemstruktur, utan att titta på organisationen
4. Lås kodningen
5. Kör modellen, lås prediktionerna
6. Undersök verkligheten       först nu
7. Koda utfallen komponentvis
8. Jämför                      ingen justering av modellen tillåten
```

Steg 7 är en egen försiktighetsåtgärd. Om man direkt frågar "är det här FACTORIZED?" är det lätt att svara ja om allt som är flernivåigt räknas. Vi kodar därför först var varje komponent faktiskt ligger, och jämför med modellens idealtyper först efteråt.

---

# Blindtest 1 — v0.1 mot åtta kommunala funktioner

Det första testet använde **Governance Factorization Simulator v0.1.1c**. Modellen beskrev en funktion med fem problemegenskaper på skalan 0–1:

| | |
|---|---|
| **L** | beroende av lokal information |
| **S** | stordriftsfördelar i produktion |
| **C** | krav på specialistkapacitet (tröskeleffekt, inte samma funktion som S) |
| **E** | gränsöverskridande externaliteter |
| **R** | behov av finansiell riskpoolning |

Den jämförde fem styrningsarkitekturer — `LOCAL`, `MERGER`, `SHARED`, `REGIONAL`, `FACTORIZED` — under fem normativa viktningar, med **balanced** som primärt scenario.

I v0.1 betydde `FACTORIZED` ungefär: lokal politisk auktoritet, men supra-lokal produktion **och** supra-lokal specialistkapacitet **och** supra-lokal finans/risk. Det visade sig vara ett avgörande designval.

## De låsta kodningarna

| ID | Funktion | L | S | C | E | R |
|---|---|---|---|---|---|---|
| F01 | Kommunal IT | 0,50 | 0,75 | 0,75 | 0,50 | 0,25 |
| F02 | Upphandling | 0,50 | 0,75 | 0,75 | 0,25 | 0,25 |
| F03 | Miljötillsyn | 0,75 | 0,25 | 0,75 | 0,50 | 0,25 |
| F04 | Räddningstjänst | 0,75 | 0,50 | 0,75 | 0,50 | 0,50 |
| F05 | Vatten och avlopp | 0,75 | 0,75 | 0,75 | 0,75 | 0,50 |
| F06 | Fysisk planering | 0,75 | 0,25 | 0,50 | 0,75 | 0,25 |
| F07 | Äldreomsorg | 0,75 | 0,25 | 0,50 | 0,25 | 0,75 |
| F08 | Socialtjänstens specialistfunktioner | 0,75 | 0,25 | 0,75 | 0,25 | 0,50 |

## Prediktion mot utfall

| ID | Prediktion | Modal andel | Auditerat utfall | Bedömning |
|---|---|---:|---|---|
| F01 IT | SHARED | 86,1 % | Blandat, SHARED-lutande | Delvis träff |
| F02 Upphandling | SHARED | 100,0 % | SHARED-likt, uppgiftsselektivt | Funktionell träff |
| F03 Miljötillsyn | SHARED | 94,6 % | Blandat lokalt / SHARED / MERGER-likt | Delvis / överprediktion |
| F04 Räddningstjänst | FACTORIZED | 99,5 % | MERGER-likt + flerskalig ledning | Närliggande, strukturell miss |
| F05 VA | FACTORIZED | 100,0 % | Lokalt dominerat, blandat | Tydlig miss |
| F06 Fysisk planering | FACTORIZED | 65,6 % | Lokalt + överlokal koordinering | Tydlig miss |
| F07 Äldreomsorg | FACTORIZED | 100,0 % | Lokal produktion + nationell utjämning | Strukturell miss, men C4-förenlig |
| F08 Specialist-socialtjänst | SHARED | 50,0 % | Blandat; vissa funktioner SHARED-lika | Förenlig men inte avgörande |

En konservativ läsning: **en** tydlig funktionell träff, **två** delvisa, **ett** förenligt men svagt test, **en** närliggande strukturell miss och **tre** tydliga missar. Det vore missvisande att säga "fem av åtta rätt". Modellen predicerade dessutom sex av åtta fall med mycket hög säkerhet, vilket gör missarna informationsrika — den kan inte gömma sig bakom att den var osäker.

## Vad testet faktiskt visade

> **Verkligheten gav mer stöd åt faktorisering som fenomen än åt modellens specifika FACTORIZED-arkitektur.**

v0.1:s `FACTORIZED` buntade ihop produktion, specialistkapacitet och finans och flyttade dem alla uppåt samtidigt. Svenska institutioner faktoriserar ofta **bara vissa** av komponenterna, och inte alltid i samma riktning:

- **Äldreomsorgen** poolar finansiell risk nationellt genom kostnadsutjämningen medan produktionen förblir kommunal — motsatsen till modellens bunt.
- **Fysisk planering** håller bindande auktoritet strikt kommunal via planmonopolet medan koordineringen sker regionalt och nationellt.
- **VA** har omfattande produktionssamverkan men mycket lite finansiell poolning; gemensam taxa är rättsligt svårt.
- **Räddningstjänsten** ser ut som lokala noder i en gemensam organisation i ett ännu större ledningssystem — nästlade skalor, inte ett val mellan lokalt och regionalt.

Det ledde till att **C4 delades i två**: **C4a** (funktioner kan faktoriseras över skalor — villkorat stödd) och **C4b** (problemstruktur förutsäger den specifika faktoriseringen — blandad/olöst). v0.1.1c arkiverades permanent som projektets första frysta benchmark, och de åtta funktionerna blev **utvecklingsurval** för nästa version, inte testurval.

---

# Från arkitekturtyper till skalvektorer

Missarna pekade åt samma håll: "vilken av fem arkitekturer är bäst?" var antagligen fel fråga. En bättre fråga var vilken skala varje komponent behöver — och hur gränssnitten mellan dem styrs. Det ledde till en representation av arkitekturen som en konfiguration snarare än en kategori, och därefter, genom v0.2–v0.4, till **sex roller**:

```text
G = (A, P, X, F, K_P, K_I)

A    = beslutanderätt        var slutlig bindande beslutanderätt behöver ligga
P    = produktion            var den operativa leveransen organiseras
X    = expertis              var specialistkompetensen behöver samlas
F    = finansiering/risk     var ekonomisk risk och kapacitet delas
K_P  = policysamordning      var policy behöver harmoniseras
K_I  = gränssnittssamordning var gemensamma system och standarder samordnas
```

Varje roll kan anta en av tre stiliserade skalor, `{1, 4, 20}` — lokal, intermediär, bred/systemnivå. Talen är matematiska skalmarkörer, inte kommun/region/stat: en regional svensk organisation kan representeras av skala 20 om den funktionellt motsvarar den bredaste relevanta nivån i det analyserade systemet. Arkitekturrymden omfattar 378 tillåtna kombinationer.

Två saker i den här utvecklingen är värda att lyfta fram, eftersom de kommer direkt ur v0.1:s missar.

**Samordning delades från beslutanderätt.** `K_P` och `K_I` är separata mekanismer och behöver inte ligga på samma skala — och bred samordning innebär inte automatiskt bred bindande beslutanderätt. Det var precis förväxlingen som gjorde fysisk planering och äldreomsorg till missar i v0.1.

**Beslutanderätt fick en egen problemsignal.** v0.5 införde två nya inputar för bindande integrationsbehov, `B₁₄` och `B₄₂₀`, i en tvåstegsmodell som kan representera både intermediär och systembred beslutanderätt utan ett artificiellt direkt hopp från lokal till nationell nivå.

Dessutom kopplades den fasta institutionskostnaden om: den räknas nu per **överlokal funktion som faktiskt institutionaliseras**, inte per antal olika skalor som råkar användas. Det fungerar bättre både analytiskt och i test.

Den frysta v0.5-implementationen passerade samtliga analytiska och syntetiska kvalitetskontroller före blindtestet — designgranskning, algebraisk granskning, separat härledning av κ_M, förregistrerad låsningsrevision, implementationsrevision och fullständig testsvit.

---

# Blindtest 2 — v0.5 mot åtta nya funktioner

## Urvalet valdes mekaniskt

Här avviker vi medvetet från vad den här sidan tidigare utlovade. Det planerade holdout-urvalet (avfall, kollektivtrafik, bibliotek, gymnasieskola, bygglov, livsmedelskontroll, färdtjänst, civil beredskap) var **valt av oss**, vilket är en svaghet: vi kan inte utesluta att urvalet gynnade modellen.

I stället skapades en pool med **16 tidigare oanvända funktioner** i fyra fördeklarerade stresskategorier, och två fall per kategori valdes mekaniskt genom lägsta SHA-256-hash av kandidatens fördeklarerade identitet. Inga tidigare testfall återanvändes.

De åtta som föll ut spänner betydligt bredare än det första testet — från kommunal fastighetsskötsel till nationell systemdrift:

skolfastighetsskötsel · klottersanering · skolplacering · parkeringsövervakning · blododlingsdiagnostik · PET/CT-diagnostik · drift av transmissionsnätet · flygtrafikledning

Varje fall kodades på tio dimensioner — `(L, S₁₄, S₄₂₀, C₁₄, C₄₂₀, E, R₁₄, R₄₂₀, B₁₄, B₄₂₀)` — och kodningen hashades **innan** den faktiska institutionsstrukturen undersöktes. Det gäller särskilt de två nya beslutanderättsinputarna. Därefter genererades 10 000 realiseringar per funktion och prediktionerna låstes för låst v0.4, v0.5 funktionellt optimum och v0.5 realiseringsoptimum. Först då öppnades utfallsundersökningen, som låstes separat innan någon träffpoäng beräknades.

## Resultatet

Den primära jämförelsen är **låst v0.4 mot v0.5** på samma låsta fall:

| Mått | låst v0.4 | v0.5 realisering | Förändring |
|---|---:|---:|---:|
| Genomsnittlig komponentträff | 45,3 % | 50,5 % | +5,2 pp |
| Sannolikhet för helt kompatibel arkitektur | 10,4 % | 28,8 % | +18,4 pp |
| Arkitekturdistans | 0,292 | 0,252 | −0,040 |
| Träff för bindande beslutanderätt | 60,4 % | 78,0 % | +17,6 pp |
| Tecknad skalavvikelse | 0,068 | 0,093 | +0,025 |
| Modal helarkitektur kompatibel | 1/8 | 2/8 | +1 |

**Läs deltat, inte nivån.** Ingen framgångströskel förregistrerades, och de absoluta procenttalen saknar en publicerad slumpbaslinje. Eftersom utfallskodningen ofta tillåter ett *intervall* av skalor (`KOM/SAM`) ligger chansnivån för komponentträff klart över 33 %, och "50,5 %" går därför inte att tolka fristående. Det som är tolkbart är förbättringen mot den låsta föregångaren på samma nya fall — och den är entydig på fyra av sex mått.

Resultatet är samtidigt inte entydigt positivt. Den tecknade skalavvikelsen ökade: v0.5 kommer närmare den observerade arkitekturen i absolut mening men har en något större genomsnittlig snedvridning **mot bredare skalor**.

## Det viktigaste fyndet: samordning är inte beslutanderätt

De två fall som blindkodades med starkast behov av gemensam bindande beslutskraft — **drift av transmissionsnätet** (`B = (1, 1)`) och **flygtrafikledning** (`B = (1; 0,75)`) — blev också de två fall där v0.5 tydligast korrigerade v0.4.

För transmissionsnätet gav v0.5 `(20,20,20,20,20,20)` med full komponent- och helarkitekturkompatibilitet. För flygtrafikledningen gick träffen för beslutanderätt från ungefär **0,9 procent** i v0.4 till **100 procent** i v0.5 — trots att produktionen faktiskt sker genom flera kontrollcentraler och flera certifierade leverantörer.

Det stödjer hypotesen att detta är två olika styrningsbehov som bör modelleras separat:

> Ett system kan behöva gemensam information, gemensamma standarder, gemensam finansiering eller gemensam policy **utan** att separata aktörer måste ge upp sin slutliga beslutanderätt. Omvänt finns fall där samordning inte räcker, och någon måste kunna fatta ett slutligt bindande beslut.

Med åtta fall är detta inte ett statistiskt avgörande. Men det är precis den typ av observation ett blindtest finns till för: en ny mekanism gjorde rätt sorts skillnad på nya fall som kodades utan tillgång till facit.

---

## Vad modellen fortfarande missar

Fyra residualer, alla empiriskt motiverade snarare än spekulativa.

**Skarpt lokal felaktig faktorisering.** J01–J04 fick samtliga noll sannolikhet för helt kompatibel arkitektur. Skolfastighetsskötsel landade på cirka 20,5 procent komponentträff, skolplacering på cirka 15,8. Modellen övervärderar fortfarande måttliga skalfördelar i produktion, expertis och finansiering för verksamheter som i praktiken förblir skarpt lokala — och det gäller även lokal *administration*, inte bara fysisk drift. Den nya realiseringskostnaden hjälper (klottersanering gick från 20,5 till 37,6 procent) men löser inte problemet.

**Institutionellt ärvd beslutanderätt.** PET/CT fick fem av sex roller i huvudsak rätt men **0 procent** träff för beslutanderätt. Funktionen ligger under bred beslutanderätt därför att den ingår i ett regionalt sjukvårdssystem, inte därför att själva uppgiften har starkt bindningstryck — `B` var blindkodat till `(0,25; 0)` och får inte justeras i efterhand. Det öppnar en distinktion modellen saknar: uppgiftskrävd beslutanderätt är inte samma sak som institutionellt ärvd beslutanderätt.

**Bred gränssnittssamordning med lokal produktion.** Parkeringsövervakning visar `K_I ≫ P`: anmärkningen utfärdas lokalt av kommun eller polis medan Transportstyrelsen administrerar den nationella betalningskedjan. Gränssnittslagret *kan* representera detta i arkitekturrymden, men modellen producerar det inte tillräckligt naturligt.

**Bred beslutanderätt med decentraliserad produktion.** Den algebraiska granskningen visade att den nuvarande funktionella kärnan i praktiken gör `P < A`, `X < A` och `F < A` dominerade som strikta optima. Modellen har därför svårt att beskriva bred bindande beslutanderätt med genuint decentraliserad operativ produktion. Det är en **känd giltighetsgräns**, inte något som bör döljas.

Två residualer från v0.1 kvarstår också och är inte adresserade i v0.5: **rättslig tilldelning** (det kommunala planmonopolet är en institutionell restriktion som problemstruktur ensam inte kan överrösta — en framtida modell måste skilja *lämplig* från *möjlig* arkitektur) och **tillgångsspecificitet** (VA visar att ledningsnät, vattentäkter och nedlagt kapital bestämmer produktionsskalan minst lika mycket som generella stordriftsfördelar, vilket inte finns i den abstrakta `S`-variabeln).

---

## Hur resultatet bör tolkas

Evidensläget stöder **inte** påståendet att simulatorn kan avgöra den optimala styrningsnivån för en verklig samhällsfunktion. Det stöder en mer begränsad men viktig slutsats:

> **Det finns både teoretiska och preliminärt empiriska skäl att behandla samhällsstyrning som en faktoriserad arkitektur av flera olika funktioner, snarare än som ett enda val mellan kommunal, regional och statlig nivå.**

v0.5 bör därför ses som ett **fryst forskningskontrollpunkt**, inte som en färdig beslutsmodell. Vi kommer inte att justera v0.5 och sedan rapportera bättre träff på J01–J08 som ny validering — det vore anpassning i eget urval, och det skulle förstöra hela poängen med att frysa modellen. Nästa version bör börja med residualerna som **öppna problem**, inte med J01–J08 som träningsdata.

---

## Implikation för subsidiaritet

En styrningsarkitektur kan exempelvis vara `A=1, P=1, X=4, F=20, K_P=4, K_I=20`: lokal beslutanderätt, lokal leverans, gemensam specialistkompetens, bred riskdelning, viss policyharmonisering och ett nationellt tekniskt gränssnitt. Att kalla den konstruktionen "kommunal" eller "statlig" säger då relativt lite.

Det pekar mot en mer funktionell formulering av subsidiaritetsprincipen:

> **Placera varje styrningsfunktion på den lägsta skala som kan bära just den funktionens krav, och koppla samman nivåerna utan att automatiskt flytta övriga funktioner med den.**

Det är en starkare princip än "så lokalt som möjligt", och den skär åt båda hållen. Behov av nationell standardisering, regional specialistkompetens, bred riskdelning eller systemgemensam infrastruktur motiverar inte i sig att också produktion, lokalt handlingsutrymme eller slutlig beslutanderätt centraliseras. Men omvänt: bindande beslutanderätt bör inte hållas lokal om själva systemfunktionen kräver gemensamma slutliga beslut.

---

## Vad det här inte visar

- Det visar **inte** att faktorisering är bättre än sammanslagning eller centralisering. Att en arkitektur finns säger inget om dess utfall.
- Det är **inte** ett kausalt test. Vi jämför en modells prediktioner med observerad organisation, ingenting annat — och modellen förutsäger inte heller historisk kausalitet.
- Sexton funktioner över två test är ett litet, medvetet heterogent urval. Det andra urvalet valdes mekaniskt, vilket är bättre, men gör det inte representativt.
- Kodningen av både problemstruktur och utfall innehåller bedömning. Vi låser och publicerar protokollet just för att den ska gå att ifrågasätta.
- **Ingen framgångströskel förregistrerades**, och ingen slumpbaslinje har publicerats. De absoluta träffprocenten bör därför inte citeras fristående.
- Modellen är stiliserad: tre skalnivåer, syntetiska lokala tillstånd, inga strategiska aktörer, ingen dynamik.

---

## Konsekvenser för korpuset

Det här arbetet ligger bakom följande poster i **[Evidensmatrisen](/evidens/syntes/matris/)**:

- **C4a** (funktioner kan faktoriseras över skalor) — villkorat stödd. Stärkt av det andra blindtestet: komponentseparation observerad i samtliga sexton funktioner, nu även utanför den kommunala sfären.
- **C4b** (problemstruktur förutsäger den specifika faktoriseringen) — blandad / olöst, men med en tydlig delförbättring: bindande beslutanderätt förutsägs nu betydligt bättre än i föregående låsta version.
- **C5** (samordning är en designvariabel) — nytt stödjande material genom `K_P`/`K_I`-separationen.
- **H5**, **H7**, **H9**, **H14** — oförändrad status, ny evidens.

Se även **[Vad vi vet](/evidens/syntes/vad-vi-vet/)** och **[Öppna frågor](/evidens/syntes/oppna-fragor/)**.

---

## Ladda ner rapporten

Den fullständiga forskningsrapporten om v0.5-blindtestet — modellspecifikation, alla åtta fall, resultatmått, residualanalys och teknisk appendix — finns som nedladdningsbar PDF:

**[Ladda ner hela rapporten (PDF, svenska) →](/downloads/Styrningsfaktorisering-v0.5-blindtest-rapport.pdf)**
**[Download the full report (PDF, English) →](/downloads/Governance-Factorization-v0.5-blind-test-report.pdf)**

---

## Material och källor

**Frysta modeller och låsta artefakter:** modellskript v0.1.1c och v0.5, kodningsprotokoll, prediktionslås, κ_M-låsningsprotokoll, implementationsrevision, analytisk/syntetisk testsvit, outcome-audit och prediction × outcome-syntes. Modellen är ett originalarbete för Svensk Subsidiaritet (Björn Kenneth Holmström, med DeepSeek som modellerings- och kodpartner) — inte en GAE-rapport.

**Källor för utfallskodningen, blindtest 1:**

- Statskontoret (2023), *Hand i hand — en analys av kommunal samverkan*
- Upphandlingsmyndigheten, Nationella upphandlingsenkäten 2025
- SKR, *Politisk organisation i kommuner och regioner* (2024) samt statistik om tillsyn och kontroll (2023)
- MSB, underlag om kommunal räddningstjänst och räddningsledningssystem
- SOU 2024:82, *Ökad VA-beredskap*
- Boverket, PBL-kunskapsbanken om planmonopol och regionplanering
- Socialtjänstlagen samt SCB om kommunalekonomisk utjämning

**Källor för utfallskodningen, blindtest 2:**

- SISAB, *Vår historia* — förvaltningen av Stockholms skolbyggnader
- Stockholms stad, *Handlingsplan för minskat klotter* (2021)
- Skolverket, *Välja förskoleklass och grundskola eller anpassad grundskola*
- Transportstyrelsen, *Parkeringsanmärkning*
- Sahlgrenska Universitetssjukhuset, *Verksamhet Klinisk mikrobiologi* och *Bild- och interventionscentrum / Nuklearmedicin*
- Svenska kraftnät, *Svenska kraftnäts ansvar i kraftsystemet*
- LFV, *Här finns LFV*, samt Transportstyrelsen, *Organisationer som utövar ATM/ANS-tjänst i Sverige*

Fullständiga länkar finns i rapporten. Siffrorna ovan är de som kodades i respektive outcome-audit; de kan ha uppdaterats sedan dess.

---

*Senast uppdaterad: efter v0.5-blindtestet.*
