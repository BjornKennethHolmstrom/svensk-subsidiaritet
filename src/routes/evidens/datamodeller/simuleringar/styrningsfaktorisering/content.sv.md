# Kan styrningens skala faktoriseras?

## Ett fryst blindtest på åtta svenska kommunala funktioner

**Status:** Forskningsnotis, v0.1. Modellen frystes innan vi undersökte hur funktionerna faktiskt är organiserade, och prediktionerna låstes innan utfallen kodades. Resultatet blev blandat — och det är den intressanta delen. Det här är ett **[R]-resultat inom en explorativ modell** plus ett **[IP]-mönstertest mot svenska institutioner**, inte ett kausalt test och inte ett påstående om vad som är optimalt. Se **[Så vet vi](/evidens/sa-vet-vi/)** för anspråksnivåerna.

---

## Frågan

Projektets fjärde syntespåstående, **C4**, har hittills sagt att skala kanske kan faktoriseras: att vissa fördelar med större skala möjligen kan nås genom delad finansiering eller delade funktioner utan att slå ihop de politiska jurisdiktionerna. Formuleringen har varit försiktig av en anledning — vi hade inget test.

Den underliggande frågan är:

> Under vilka förhållanden kan kommuner få stordriftsfördelar, specialistkapacitet, riskpoolning och samordning över gränser **utan** att samtidigt centralisera den politiska beslutsrätten?

För att kunna svara byggde vi en enkel mekanistisk modell, frös den, och lät den förutsäga hur åtta svenska kommunala funktioner *borde* vara organiserade. Sedan tittade vi efter.

---

## Vad vi gjorde, och i vilken ordning

Ordningen är hela poängen. En modell som justeras efter att man sett svaren kan alltid förmås att stämma.

```text
1. Bygg modellen                      Governance Factorization Simulator v0.1
2. Frys den                           v0.1.1c, ingen ändring efter denna punkt
3. Koda åtta funktioner blint         problemstruktur [L,S,C,E,R], utan att titta på organisationen
4. Lås kodningen
5. Kör modellen, lås prediktionerna
6. Undersök verkligheten              först nu
7. Koda utfallen komponentvis         auktoritet / produktion / specialist / finans / koordinering
8. Jämför                             ingen justering av modellen tillåten
```

Steg 7 är en egen försiktighetsåtgärd. Om man direkt frågar "är det här FACTORIZED?" är det lätt att svara ja om allt som är flernivåigt räknas. Vi kodade därför först var varje komponent faktiskt ligger, och jämförde med modellens idealtyper först efteråt.

---

## Modellen i korthet

Modellen beskriver en offentlig funktion med fem problemegenskaper, var och en på en skala 0–1:

| | |
|---|---|
| **L** | beroende av lokal information |
| **S** | stordriftsfördelar i produktion |
| **C** | krav på specialistkapacitet (tröskeleffekt, inte samma funktion som S) |
| **E** | gränsöverskridande externaliteter |
| **R** | behov av finansiell riskpoolning |

Den jämför sedan fem styrningsarkitekturer — `LOCAL`, `MERGER`, `SHARED`, `REGIONAL`, `FACTORIZED` — under fem olika normativa viktningar. Vi använde **balanced** som primärt scenario och de fyra andra som robusthetskontroll.

I modellen betyder `FACTORIZED` ungefär: lokal politisk auktoritet, men supra-lokal produktion **och** supra-lokal specialistkapacitet **och** supra-lokal finans/risk. Det visar sig vara ett avgörande designval.

---

## De låsta kodningarna

Åtta medvetet olika funktioner, kodade på en femgradig ankarskala (0 / 0,25 / 0,50 / 0,75 / 1,00) innan organisationen undersöktes.

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

---

## De låsta prediktionerna

| ID | Funktion | Modellprediktion | Modal andel | Styrka |
|---|---|---|---:|---|
| F01 | Kommunal IT | SHARED | 86,1 % | Stark |
| F02 | Upphandling | SHARED | 100,0 % | Stark |
| F03 | Miljötillsyn | SHARED | 94,6 % | Stark |
| F04 | Räddningstjänst | FACTORIZED | 99,5 % | Stark |
| F05 | Vatten och avlopp | FACTORIZED | 100,0 % | Stark |
| F06 | Fysisk planering | FACTORIZED | 65,6 % | Stark |
| F07 | Äldreomsorg | FACTORIZED | 100,0 % | Stark |
| F08 | Specialist-socialtjänst | SHARED | 50,0 % | Svag / omtvistad |

Modellen gjorde alltså mycket starka prediktioner i sex av åtta fall. Det gör de senare missarna informationsrika: modellen kan inte gömma sig bakom att den var osäker.

---

## Vad Sverige faktiskt gör

Utfallskodningen placerar varje komponent på en skala: `KOM` = enskild kommun, `SAM` = stabil interkommunal nivå, `REG` = region, `NAT` = nationell nivå.

| ID | Funktion | Auktoritet | Produktion | Specialist | Finans/risk | Koordinering |
|---|---|---|---|---|---|---|
| F01 | IT | KOM | KOM/SAM | KOM/SAM/NAT | KOM | SAM/NAT |
| F02 | Upphandling | KOM | KOM/SAM | KOM/SAM | KOM | SAM/NAT |
| F03 | Miljötillsyn | KOM/SAM | KOM/SAM | KOM/SAM | KOM/SAM | SAM/NAT |
| F04 | Räddningstjänst | ofta SAM | SAM | SAM | KOM/SAM | större SAM/NAT |
| F05 | VA | KOM | främst KOM | KOM/SAM | främst KOM | KOM/SAM/NAT |
| F06 | Fysisk planering | KOM | främst KOM | KOM/SAM | KOM | KOM/REG/NAT |
| F07 | Äldreomsorg | KOM | främst KOM | främst KOM | KOM + NAT utjämning | REG/NAT |
| F08 | Specialist-socialtjänst | KOM | KOM/SAM | KOM/SAM | KOM + NAT utjämning | SAM/NAT |

Några av siffrorna bakom kodningen: Statskontoret fann avtalssamverkan om IT-system hos 32 procent av de svarande kommunerna, men bara 7 procent kring äldreboende och hemtjänst. Upphandlingsmyndighetens enkät 2025 visade 84,2 procent samordnade upphandlingar men bara omkring 19 procent med en gemensam inköpsfunktion placerad hos annan organisation. SKR:s kartläggning visade 170 kommuner i 35 räddningstjänstkommunalförbund. VA-utredningen (SOU 2024:82) kartlade samtliga 290 kommuner och fann att 31 procent hade någon tydligt interkommunal organisationsform — resten drev VA i egen regi eller eget bolag. Fullständiga källor finns längst ned.

---

## Jämförelsen

| ID | Prediktion | Auditerat utfall | Bedömning |
|---|---|---|---|
| F01 IT | SHARED | Blandat, SHARED-lutande | Delvis träff |
| F02 Upphandling | SHARED | SHARED-likt, uppgiftsselektivt | Funktionell träff |
| F03 Miljötillsyn | SHARED | Blandat lokalt / SHARED / MERGER-likt | Delvis / överprediktion |
| F04 Räddningstjänst | FACTORIZED | MERGER-likt + flerskalig ledning | Närliggande, strukturell miss |
| F05 VA | FACTORIZED | Lokalt dominerat, blandat | Tydlig miss |
| F06 Fysisk planering | FACTORIZED | Lokalt + överlokal koordinering | Tydlig miss |
| F07 Äldreomsorg | FACTORIZED | Lokal produktion + nationell finansiell utjämning | Strukturell miss, men C4-förenlig |
| F08 Specialist-socialtjänst | SHARED, svag | Blandat; vissa funktioner starkt SHARED-lika | Förenlig men inte avgörande |

En konservativ läsning: **en** tydlig funktionell träff, **två** delvisa, **ett** förenligt men svagt test, **en** närliggande strukturell miss och **tre** tydliga missar. Det vore missvisande att säga "fem av åtta rätt".

---

## Resultat I — mekanismen bakom SHARED håller bättre än arkitekturen FACTORIZED

Modellens fyra SHARED-prediktioner klarade sig hyfsat. Upphandling är det renaste fallet: svenska kommuner samordnar inköp i mycket stor omfattning samtidigt som de förblir separata politiska enheter. Det är precis den mekanism modellen försöker fånga — hög specialistkapacitet plus begränsat behov av full politisk integration ger delad kapacitet utan sammanslagning.

IT och miljötillsyn pekar åt rätt håll men modellen underskattar den institutionella mångfalden. Avtalssamverkan, gemensam nämnd och kommunalförbund är tre mycket olika saker; modellen har bara en idealtyp för dem alla.

Modellens FACTORIZED-prediktioner klarade sig sämre, och den predicerade dem med hög säkerhet. Det är den mest informativa delen av testet.

---

## Resultat II — det centrala fyndet

> **Verkligheten ger mer stöd åt faktorisering som fenomen än åt modellens specifika FACTORIZED-arkitektur.**

Skillnaden är viktig. Modellens FACTORIZED buntar ihop produktion, specialistkapacitet och finans och flyttar dem alla uppåt samtidigt. Svenska institutioner faktoriserar ofta **bara vissa** av komponenterna, och inte alltid i samma riktning:

- **Äldreomsorgen** poolar finansiell risk nationellt genom kostnadsutjämningen medan produktionen förblir kommunal. Det är motsatsen till modellens bunt — och den arkitekturen finns inte i v0.1.1c.
- **Fysisk planering** håller den bindande auktoriteten strikt kommunal via planmonopolet medan koordineringen sker regionalt och nationellt. Regionplaner är vägledande, inte bindande.
- **VA** har omfattande produktionssamverkan men mycket lite finansiell poolning — utredningen beskriver uttryckligen att gemensamma VA-kollektiv och gemensam taxa är rättsligt svåra.
- **Räddningstjänsten** ser ut som lokala noder i en gemensam organisation i ett ännu större ledningssystem. Det är en hierarki av funktionellt olika skalor, inte ett val mellan lokalt och regionalt.

Med andra ord: komponentseparation är genuint utbredd i svensk styrning. Det är bara inte den separation vi råkade koda in i modellen.

---

## Därför delar vi C4 i två

Att behålla C4 som ett enda påstående skulle blanda ihop en sak evidensen faktiskt stöder med en sak den inte stöder. Vi delar därför upp det.

### C4a — styrningsfunktioner kan faktoriseras över skalor

> Olika komponenter i en styrningsfunktion — politisk auktoritet, produktion, specialistkapacitet, finansiering och koordinering — kan ligga på olika skalor i stället för att buntas ihop på en enda territoriell nivå.

**Status:** Villkorat stödd. **Konfidens:** Medel.

Inte hög, eftersom bara åtta funktioner analyserats, urvalet är strategiskt snarare än representativt, komponentkodningen innehåller bedömning, och att en arkitektur *förekommer* inte bevisar att den är bra. Men det här har passerat "empiriskt olöst".

### C4b — problemstruktur förutsäger den specifika lämpliga faktoriseringen

> Den relativa vikten av lokal information, stordriftsfördelar, specialistkapacitet, externaliteter och riskpoolning räcker för att förutsäga vilka konkreta komponenter som bör poolas och vilka som bör förbli lokala.

**Status:** Blandad / olöst. **Konfidens:** Låg–Medel.

Det här är påståendet testet faktiskt sätter press på, och det klarade sig dåligt.

---

## Vad missarna säger att modellen saknar

Fyra brister är nu empiriskt motiverade snarare än spekulativa.

**Komponentselektiv poolning.** Modellen behöver kunna sätta finans på en skala utan att flytta produktionen. Äldreomsorgen är det tydligaste fallet.

**Rättslig tilldelning.** Det kommunala planmonopolet är en institutionell restriktion som problemstruktur ensam inte kan överrösta. En framtida modell måste skilja *lämplig* arkitektur från *möjlig* arkitektur.

**Tillgångsspecificitet och nätgeografi.** VA visar att starka generella skalfördelar inte betyder att regionen är rätt produktionsskala. Ledningsnät, vattentäkter, avrinningsområden och redan nedlagt kapital bestämmer skalan minst lika mycket. Det finns inte i den abstrakta `S`-variabeln.

**Hierarkisk flerskalig koordinering.** Räddningstjänsten visar lokala noder inuti en gemensam organisation inuti ett större ledningssystem. Modellen har inget sätt att uttrycka nästlade skalor.

---

## Vad vi inte kommer att göra

Vi kommer **inte** att justera v0.1.1c och sedan rapportera bättre träff på samma åtta funktioner som ny validering. Det vore klassisk anpassning i eget urval, och det skulle förstöra hela poängen med att frysa modellen.

v0.1.1c arkiveras därför permanent som projektets **första frysta benchmark**. De åtta funktionerna blir ett **utvecklingsurval** för nästa version — inte ett testurval.

---

## v0.2 — från arkitekturtyper till skalvektorer

Missarna pekar åt samma håll. Frågan "vilken av fem arkitekturer är bäst?" är antagligen fel fråga. En bättre fråga är:

> **Vilken skala behöver varje komponent i funktionen — och hur ska gränssnitten mellan dem styras?**

Det innebär att representera en styrningsarkitektur som en konfiguration snarare än en kategori:

```text
G = (A, P, C, F, K)

A = auktoritetens skala
P = produktionens skala
C = specialistkapacitetens skala
F = finansieringens/riskens skala
K = koordineringens skala
```

Då kan modellen faktiskt uttrycka det Sverige gör:

```text
Äldreomsorg        A=KOM  P=KOM  C=KOM   F=KOM+NAT  K=REG/NAT
Räddningstjänst    A=SAM  P=SAM  C=SAM   F=KOM/SAM  K=större nätverk
Fysisk planering   A=KOM  P=KOM  C=KOM/SAM F=KOM    K=REG/NAT
```

v0.2 måste sedan prövas mot **nya** funktioner som den inte utvecklats mot. Ett planerat holdout-urval: avfall, kollektivtrafik, bibliotek, gymnasieskola, bygglov, livsmedelskontroll, färdtjänst och civil beredskap.

---

## Vad det här inte visar

- Det visar **inte** att faktorisering är bättre än sammanslagning eller centralisering. Att en arkitektur finns säger inget om dess utfall.
- Det är **inte** ett kausalt test. Vi jämför en modells prediktioner med observerad organisation, ingenting annat.
- Åtta funktioner är ett litet, medvetet heterogent urval, inte ett representativt sådant.
- Kodningen av både problemstruktur och utfall innehåller bedömning. Vi har låst den och publicerat protokollet just för att den ska gå att ifrågasätta.
- Modellen är stiliserad: 20 lika stora jurisdiktioner, syntetiska lokala tillstånd, inga strategiska aktörer, ingen dynamik.

---

## Sammanfattning

Den frysta modellen fick begränsat stöd som arkitekturprediktor och betydligt starkare stöd för sin underliggande premiss. Den viktigaste lärdomen är inte att faktorisering är generellt överlägsen, utan att styrningskomponenter faktiskt tycks hamna på olika skalor — i fler kombinationer än modellen tillåter.

> **Frågan verkar mindre vara vilken nivå som ska styra en verksamhet, och mer vilka delar av verksamheten som behöver ligga på vilken skala — och hur gränssnitten mellan dem ska fungera.**

Metodologiskt fick vi också något värdefullt: **modellen fick misslyckas innan vi ändrade den.** Nästa version kan därför lära sig något av verkligheten i stället för att bara konstrueras för att bekräfta utgångsidén.

---

## Konsekvenser för korpuset

Det här arbetet ligger bakom följande uppdateringar i **[Evidensmatrisen](/evidens/syntes/matris/)**:

- **C4** delas i **C4a** (villkorat stödd) och **C4b** (blandad / olöst).
- **H5** (stordriftsfördelar och specialisering) — konfidens höjd till Medel–Hög.
- **H7** (funktionell skalvariation), **H9** (lokal autonomi med fiskal utjämning) och **H14** (gränsanpassning) — stärkta, konfidens oförändrad.
- **H3** och **H8** — nytt stödjande material, status oförändrad.

Se även **[Vad vi vet](/evidens/syntes/vad-vi-vet/)** och **[Öppna frågor](/evidens/syntes/oppna-fragor/)**.

---

## Material och källor

**Fryst modell och låsta artefakter:** modellskript v0.1.1c, kodningsprotokoll v0.1, prediktionslås v0.1, outcome-audit och prediction × outcome-syntes. Modellen är ett originalarbete för Svensk Subsidiaritet (Björn Kenneth Holmström, med DeepSeek som modellerings- och kodpartner) — inte en GAE-rapport.

**Källor för utfallskodningen:**

- Statskontoret (2023), *Hand i hand — en analys av kommunal samverkan*
- Upphandlingsmyndigheten, Nationella upphandlingsenkäten 2025
- SKR, *Politisk organisation i kommuner och regioner* (2024) samt statistik om tillsyn och kontroll (2023)
- MSB, underlag om kommunal räddningstjänst och räddningsledningssystem
- SOU 2024:82, *Ökad VA-beredskap*
- Boverket, PBL-kunskapsbanken om planmonopol och regionplanering
- Socialtjänstlagen samt SCB om kommunalekonomisk utjämning

Siffrorna ovan är de som kodades i outcome-auditen från dessa källor; de kan ha uppdaterats sedan dess.
