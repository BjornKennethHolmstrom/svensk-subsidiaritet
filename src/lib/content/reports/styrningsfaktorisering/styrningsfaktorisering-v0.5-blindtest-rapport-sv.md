---
title: "Kan olika delar av samma samhällsfunktion behöva styras på olika nivåer?"
subtitle: "Ett blindtest av Styrningsfaktoriseringssimulatorn v0.5"
date: "2026-09-09"
status: "Forskningsrapport"
language: "sv"
---

# Kan olika delar av samma samhällsfunktion behöva styras på olika nivåer?

## Ett blindtest av Styrningsfaktoriseringssimulatorn v0.5

### Sammanfattning

Debatten om centralisering och decentralisering behandlar ofta en samhällsfunktion som om den hade **en enda naturlig styrningsnivå**. Men en och samma verksamhet kan samtidigt behöva lokal kunskap, regional specialistkompetens, bred riskdelning, gemensam infrastruktur och ibland bindande beslut på systemnivå.

Styrningsfaktoriseringssimulatorn utvecklades för att undersöka denna möjlighet. I stället för att fråga *”på vilken nivå ska verksamheten ligga?”* delar modellen upp styrningen i sex roller:

- **A — beslutanderätt:** var slutlig bindande beslutanderätt behöver ligga,
- **P — produktion:** på vilken skala själva verksamheten eller leveransen bör organiseras,
- **X — expertis:** på vilken skala specialistkompetens behöver samlas,
- **F — finansiering/riskdelning:** på vilken skala ekonomisk risk och kapacitet bör delas,
- **K_P — policysamordning:** på vilken skala policy behöver harmoniseras,
- **K_I — gränssnittssamordning:** på vilken skala gemensamma gränssnitt och infrastrukturer behöver samordnas.

Version 0.5 testades på åtta helt nya svenska samhällsfunktioner. Modellen låstes före testet. Fallen valdes mekaniskt ur en fördeklarerad kandidatpool. Alla tio probleminputar — inklusive två nya variabler för **bindande integrationsbehov**, \(B_{14}\) och \(B_{420}\) — låstes och hashades innan någon undersökning gjordes av hur verksamheterna faktiskt är organiserade. Även modellens förutsägelser låstes före utfallsundersökningen.

Jämfört med den tidigare låsta v0.4-modellen förbättrades v0.5 på fyra centrala mått:

| Mått | v0.4 | v0.5 | Förändring |
|---|---:|---:|---:|
| Genomsnittlig komponentträff | 45,3 % | **50,5 %** | +5,2 procentenheter |
| Sannolikhet för helt kompatibel arkitektur | 10,4 % | **28,8 %** | +18,4 pp |
| Arkitekturdistans | 0,292 | **0,252** | −0,040 |
| Träff för bindande beslutanderätt | 60,4 % | **78,0 %** | +17,6 pp |

Samtidigt ökade modellens genomsnittliga snedvridning något mot bredare skalor, och fyra lokalt organiserade funktioner fick fortfarande noll sannolikhet för en helt kompatibel arkitektur.

Resultatet bör därför inte beskrivas som att modellen är ”validerad”. Den mer försvarbara slutsatsen är:

> **v0.5 gav en tydlig förbättring relativt den låsta föregångaren i ett genuint nytt blindtest, samtidigt som viktiga och återkommande modellfel kvarstår.**

Det mest intressanta stödet gäller den nya distinktionen mellan **samordning** och **bindande beslutanderätt**. De två fall som blindkodades med starkast behov av gemensam bindande beslutskraft — drift av transmissionsnätet och flygtrafikledning — blev också de två fall där v0.5 tydligast korrigerade v0.4:s tidigare underskattning av beslutanderättens skala.

---

# 1. Problemet med frågan ”vilken nivå ska styra?”

Subsidiaritetsprincipen uttrycks ofta ungefär så här:

> Beslut bör fattas så nära de berörda som möjligt, men på en högre nivå när det behövs.

Principen är intuitivt tilltalande men lämnar en avgörande fråga öppen:

**Vad är det egentligen som ska ligga på en viss nivå?**

Ta en tänkt samhällsfunktion. Den kan behöva:

- utföras nära invånarna,
- använda specialistkompetens som bara finns på några få platser,
- finansieras över ett större befolkningsunderlag,
- följa gemensamma tekniska standarder,
- och samtidigt lämna den slutliga beslutanderätten lokalt.

Om alla dessa aspekter sammanfattas som en enda variabel — *kommunal, regional eller statlig* — förloras information.

Det leder till en annan utgångspunkt:

\[
\boxed{\text{styrningsnivå kanske inte är en egenskap hos verksamheten som helhet}}
\]

utan snarare:

\[
\boxed{\text{en egenskap hos olika styrningsfunktioner inom verksamheten.}}
\]

Styrningsfaktoriseringssimulatorn är ett försök att göra denna hypotes explicit och testbar.

---

# 2. En sexdelad styrningsarkitektur

Modellen beskriver en arkitektur som:

\[
G=(A,P,X,F,K_P,K_I).
\]

Varje roll kan i den nuvarande modellen anta en av tre stiliserade skalor:

\[
\{1,4,20\}.
\]

De ska läsas som:

- **1 — lokal**
- **4 — intermediär**
- **20 — bred/systemnivå**

Talen är matematiska skalmarkörer. De betyder inte bokstavligen kommun, region och stat. En regional svensk organisation kan exempelvis representeras av modellens breda skala 20 om den funktionellt motsvarar den bredaste relevanta nivån i det analyserade systemet.

## 2.1 Beslutanderätt — \(A\)

Beslutanderätt avser **slutlig bindande beslutanderätt**.

Det är inte samma sak som att samordna, ge råd, finansiera eller utföra verksamheten. Frågan är om flera separata aktörer kan fortsätta ha sista ordet var för sig, eller om vissa konflikter och avvägningar kräver en gemensam beslutspunkt.

## 2.2 Produktion — \(P\)

Produktion avser var den operativa leveransen eller produktionen bör organiseras.

En verksamhet kan exempelvis finansieras och standardiseras brett men fortfarande utföras lokalt.

## 2.3 Expertis — \(X\)

Expertis representerar den skala som krävs för att bära tillräcklig specialistkompetens.

Små enheter kan sakna volym för mycket specialiserade professioner, laboratorier eller tekniska resurser.

## 2.4 Finansiering/riskdelning — \(F\)

Finansiering avser här främst **riskdelning och kapacitetsdelning**, inte formell budgetmakt.

Det är en viktig skillnad. En kommun kan ha budgetansvar samtidigt som vissa risker behöver bäras över ett mycket större kollektiv.

## 2.5 Policysamordning — \(K_P\)

Policysamordning beskriver behovet av gemensamma regler, prioriteringar eller harmoniserade policyer.

Det innebär inte automatiskt att den bindande beslutanderätten måste flyttas uppåt.

## 2.6 Gränssnittssamordning — \(K_I\)

Gränssnittssamordning beskriver behovet av gemensamma system, standarder, informationsflöden eller infrastrukturella gränssnitt.

Det kan exempelvis finnas ett nationellt betalnings- eller informationssystem samtidigt som den operativa verksamheten förblir lokal.

---

# 3. Vad v0.5 förändrade

v0.5 introducerade två huvudsakliga förändringar efter tidigare blindtester.

## 3.1 Bindande integration som egen problemsignal

Tidigare modeller tenderade att hålla beslutanderätten för lokal i vissa funktioner som i verkligheten hade bred bindande styrning.

Men att ”öka centraliseringstrycket” generellt hade varit en dålig lösning. Samordning och bindande beslutanderätt är inte samma sak.

v0.5 inför därför:

\[
B_{14}
\]

och:

\[
B_{420},
\]

som representerar två steg av **bindande integrationstryck**.

\(B_{14}\) frågar ungefär:

> Hur mycket funktionellt värde skapas av att gå från separata lokala slutliga beslut till en gemensam intermediär beslutanderätt?

\(B_{420}\) frågar:

> Hur mycket av detta behov kvarstår även efter den intermediära nivån och kräver en bred systemnivå?

För att förhindra ett artificiellt hopp direkt från lokal till systemnivå gäller:

\[
0\le B_{420}\le B_{14}\le1.
\]

Det innebär att ett starkt andra steg förutsätter ett minst lika starkt första steg.

## 3.2 Fast institutionskostnad räknas per överlokal funktion, inte per antal skalor

v0.4 hade en enkel kostnad för antalet olika skalor som användes i en arkitektur.

Blindtestet visade att detta kunde skapa en oönskad **dragning till samlokalisering**: om en intermediär nivå redan användes kunde modellen gynna att flera andra funktioner också flyttades dit, även när det inte fanns ett funktionellt skäl.

v0.5 ersätter detta med:

\[
M_{\mathrm{sup}}.
\]

Det räknar i stället hur många funktionella domäner som faktiskt kräver institutionell organisering **över den bindande beslutanderättsnivån**.

Den låsta kostnaden är:

\[
J_{\mathrm{real}}
=
\lambda_I\kappa_M M_{\mathrm{sup}},
\]

med:

\[
\kappa_M
=
0.028922276644969897.
\]

Värdet härleddes ur modellens egen geometri före det nya blindtestet och prövades i ett separat syntetiskt låsningsprotokoll. Det valdes inte genom att optimera träffen på svenska fall.

---

# 4. Före blindtestet: analytisk och syntetisk kontroll

Innan v0.5 fick möta nya empiriska fall kördes en fullständig analytisk/syntetisk testsvit på den låsta implementationen.

Alla **33 av 33** förregistrerade hårda gränsvillkor passerade.

Bland annat verifierades:

- exakt 378 tillåtna arkitekturer,
- de algebraiska beslutanderättsövergångarna,
- att \(B_{420}\) inte kan skapa en andra beslutanderättsövergång utan stöd för den första,
- att policy- och gränssnittssamordning kan separeras,
- att lokal, intermediär och bred beslutanderätt alla kan vara optimala i olika syntetiska regimer,
- att den nya institutionskostnaden inte kollapsar modellen till en enda arkitektur,
- att modellen reproducerar v0.4 och v0.3 exakt i särskilda kompatibilitetslägen.

I en balanserad syntetisk population på 100 000 fall ändrade realiseringslagret den valda representativa arkitekturen i ungefär **23,4 procent** av fallen och reducerade det genomsnittliga antalet institutionsdomäner över beslutanderättsnivån från **1,77 till 1,15**.

Samtidigt behöll modellen betydande arkitekturmångfald. Detta var viktigt: ett institutionskostnadstillägg som bara gör allt lokalt eller allt brett skulle inte vara särskilt informativt.

Den syntetiska testningen är dock **inte empirisk validering**. Den visar endast att modellen beter sig enligt sina egna strukturella avsikter och inte kollapsar på uppenbara sätt.

---

# 5. Ett genuint nytt blindtest

Det empiriska testet byggdes för att minimera möjligheten att justera modellen efter facit.

## 5.1 Modellen låstes först

v0.5:s:

- ekvationer,
- konstanter,
- \(\kappa_M\),
- tie-breaking,
- arkitekturrymd,
- och implementation

låstes före blindtestet.

## 5.2 En ny kandidatpool skapades

En pool med **16 tidigare oanvända samhällsfunktioner** skapades i fyra fördeklarerade stresskategorier.

Inga F-, H-, N-, G- eller tidigare G-poolfall återanvändes.

Två fall per kategori valdes mekaniskt genom lägsta SHA-256-hash av kandidatens fördeklarerade identitet.

Urvalet gjordes alltså inte utifrån vilka fall som verkade gynnsamma för modellen.

De åtta valda funktionerna blev:

1. skolfastighetsskötsel,
2. kommunal klottersanering,
3. skolplacering/antagning,
4. parkeringsövervakning,
5. blododlingsdiagnostik,
6. PET/CT-diagnostik,
7. drift av det nationella transmissionsnätet,
8. flygtrafikledning i svenskt luftrum.

## 5.3 Probleminputarna låstes före utfallsundersökningen

Varje fall kodades på tio dimensioner:

\[
(L,S_{14},S_{420},C_{14},C_{420},E,R_{14},R_{420},B_{14},B_{420}).
\]

Det avgörande är att även de två nya beslutanderättsinputarna:

\[
B_{14},B_{420}
\]

kodades och hashades **innan** vi undersökte den faktiska institutionsstrukturen.

## 5.4 Förutsägelserna låstes

För varje funktion genererades 10 000 realiseringar med gemensamma x-värden och förutsägelser låstes för:

- låst v0.4,
- v0.5 funktionellt optimum,
- v0.5 realiseringsoptimum.

Först därefter öppnades utfallsundersökningen.

## 5.5 Utfallsundersökningen låstes separat

Den faktiska svenska organisationen undersöktes därefter med primärt offentliga källor.

Exempel:

- Stockholms skolfastigheter förvaltas av kommunägda SISAB.[1]
- Stockholms stad organiserar klottersanering genom bland annat trafikkontoret, stadsdelsförvaltningar och stadens entreprenörer.[2]
- kommunen ansvarar för skolplaceringen i kommunala grundskolor.[3]
- parkeringsanmärkningar utfärdas lokalt av kommun eller polis, medan Transportstyrelsen administrerar betalningskedjan.[4]
- Klinisk mikrobiologi på Sahlgrenska ingår i Regional laboratoriemedicin i Västra Götalandsregionen.[5]
- PET/CT finns inom Sahlgrenska Universitetssjukhusets nuklearmedicinska och radiologiska verksamhet.[6]
- Svenska kraftnät är systemansvarig myndighet för överföringssystemet och ansvarar för transmissionsnätet och realtidsbalanseringen.[7]
- flygtrafikledning sker genom flera kontrollcentraler och flera certifierade tjänsteleverantörer, samtidigt som luftrummet kräver systemövergripande samordning.[8][9]

Utfallsskalan låstes innan någon träffpoäng beräknades.

---

# 6. Resultatet

Den primära jämförelsen var låst v0.4 mot v0.5:s realiseringsutdata.

| Mått | låst v0.4 | v0.5 funktionellt | v0.5 realisering | Förändring v0.5R − v0.4 |
|---|---:|---:|---:|---:|
| Genomsnittlig komponentträff | 45,3 % | 49,6 % | **50,5 %** | **+5,2 pp** |
| Sannolikhet för helt kompatibel arkitektur | 10,4 % | 25,1 % | **28,8 %** | **+18,4 pp** |
| Arkitekturdistans | 0,292 | 0,256 | **0,252** | **−0,040** |
| Tecknad skalavvikelse | 0,068 | 0,109 | 0,093 | +0,025 |
| Träff för beslutanderätt | 60,4 % | 75,1 % | **78,0 %** | **+17,6 pp** |
| Modal helarkitektur kompatibel | 1/8 | 2/8 | **2/8** | +1 |

## 6.1 Vad betyder måtten?

**Komponentträff** frågar hur ofta de sex enskilda rollerna hamnar på en skala som bedömts kompatibel med den observerade organisationen.

**Sannolikhet för helt kompatibel arkitektur** är strängare: hur ofta är hela sexrollen samtidigt kompatibel?

**Arkitekturdistans** mäter hur långt den förutsagda sexrollen ligger från tillåtna utfallsskalor.

**Tecknad skalavvikelse** visar riktningen på felen. Positivt värde betyder att modellen i genomsnitt förutsäger något bredare skalor än utfallet.

Resultatet är därför inte entydigt positivt.

v0.5 kommer **närmare** den observerade arkitekturen i absolut mening och ökar kraftigt sannolikheten för full kompatibilitet, men får samtidigt en något större genomsnittlig snedvridning mot bredare skalor.

---

# 7. Vad de åtta fallen visar

## J01 — Skolfastighetsskötsel

**Blindkodad bindningstryck:** \(B=(0,0)\)

Utfallet var i huvudsak lokalt/kommunalt.

v0.5 fortsatte trots detta att oftast välja:

\[
(1,4,4,4,4,4).
\]

Komponentträffen blev bara cirka **20,5 procent**, och helarkitekturkompatibiliteten var noll.

Det är färsk evidens för ett känt modellproblem:

> måttliga skalfördelar i produktion, expertis och finansiering kan fortfarande övervinna lokaliteten för verksamheter som i praktiken är skarpt lokala.

---

## J02 — Klottersanering

**Blindkodad bindningstryck:** \(B=(0,0)\)

Även detta fall är huvudsakligen kommunalt.

v0.5 förbättrade komponentträffen från ungefär **20,5 till 37,6 procent**, vilket antyder att den nya realiseringskostnaden faktiskt dämpar onödig överlokal organisering.

Men modalarkitekturen förblev:

\[
(1,4,4,4,4,4)
\]

och helarkitekturkompatibiliteten var fortfarande noll.

Den nya institutionsgeometrin hjälper alltså, men löser inte det djupare lokalitetsproblemet.

---

## J03 — Skolplacering

**Blindkodad bindningstryck:** \(B=(0.25,0)\)

Kommunen har ett tydligt ansvar för skolplacering vid kommunala skolor.

Modellen förutsade ändå starkt intermediära P/X/F/K-roller. Komponentträffen blev cirka **15,8 procent**.

Det visar att den skarpt lokala residualen inte bara gäller fysisk drift. Den förekommer också i lokal administration.

---

## J04 — Parkeringsövervakning

**Blindkodad bindningstryck:** \(B=(0.25,0)\)

Det här blev ett särskilt intressant faktoriserat utfall.

Själva parkeringsanmärkningen utfärdas lokalt av kommun eller polis, medan Transportstyrelsen administrerar den nationella betalningskedjan.

Det motsvarar ungefär:

> lokal produktion/beslutanderätt men bred gränssnittssamordning.

v0.5 missade denna struktur och drogs åter mot:

\[
(1,4,4,4,4,4).
\]

Detta är ett tydligt kvarvarande problem för modellen:

\[
\boxed{\text{bred gränssnittssamordning behöver inte innebära bred produktion.}}
\]

---

## J05 — Blododlingsdiagnostik

**Blindkodad bindningstryck:** \(B=(0.25,0)\)

Klinisk mikrobiologi är regionalt organiserad inom Västra Götalandsregionens laboratoriemedicin.

v0.5:s modal blev:

\[
(4,4,4,4,4,4).
\]

Modellen känner alltså igen behovet av riskdelning och större skala, men stannar ofta på den intermediära nivån.

Helarkitekturkompatibiliteten blev cirka **30,2 procent**, jämfört med **19,0 procent** för v0.4.

---

## J06 — PET/CT

**Blindkodad bindningstryck:** \(B=(0.25,0)\)

PET/CT är en starkt specialiserad verksamhet inom den regionala sjukhusstrukturen.

v0.5 placerade nästan alltid:

- produktion,
- expertis,
- finansiering,
- policysamordning,
- gränssnittssamordning

på bred skala.

Men beslutanderätten låg kvar lokalt:

\[
(1,20,20,20,20,20).
\]

Fem av sex roller blev alltså i huvudsak rätt, medan träffen för beslutanderätt var **0 procent**.

Det här är viktigt eftersom vi **inte får rätta modellen genom att i efterhand höja \(B\)**. \(B=(0.25,0)\) var redan låst före utfallsundersökningen.

Fallet antyder därför en annan möjlig mekanism:

> en verksamhet kan få sin bindande beslutanderätt från en bredare institutionell kontext — exempelvis ett regionalt sjukvårdssystem — även om själva arbetsuppgiften inte har starkt funktionellt bindningstryck.

Detta finns inte uttryckligen i v0.5.

---

## J07 — Drift av transmissionsnätet

**Blindkodad bindningstryck:**

\[
B=(1,1).
\]

Svenska kraftnät har ett systemövergripande ansvar för transmissionsnätet och kraftsystemets balans och driftsäkerhet.

Detta blev v0.5:s tydligaste framgång.

v0.5 gav:

\[
(20,20,20,20,20,20)
\]

med **100 procent komponentkompatibilitet och 100 procent helarkitekturkompatibilitet**.

v0.4 hade redan förstått att många andra roller behövde vara breda, men hade fortfarande betydande sannolikhet för för lokal beslutanderätt.

Det nya \(B\)-systemet korrigerade just detta.

---

## J08 — Flygtrafikledning

**Blindkodad bindningstryck:**

\[
B=(1,0.75).
\]

Flygtrafikledning kräver systemövergripande luftrumssamordning och bindande operativa beslut, även om produktion sker genom flera kontrollcentraler och flera certifierade leverantörer.

v0.4:s träff för beslutanderätt var endast cirka **0,9 procent**.

v0.5 nådde:

- **100 procent beslutanderättskompatibilitet**
- **100 procent helarkitekturkompatibilitet**

i utfallsuppsättningen.

Det är särskilt viktigt metodologiskt eftersom den höga bindningssignalen kodades före utfallsundersökningen.

---

# 8. Den viktigaste nya evidensen: samordning är inte beslutanderätt

Det mest intressanta resultatet från v0.5 är inte den totala femprocentiga ökningen i komponentträff.

Det är att en tidigare sammanblandning verkar ha blivit bättre identifierad.

Ett system kan behöva:

- gemensam information,
- gemensamma standarder,
- gemensam finansiering,
- eller gemensam policy,

utan att separata aktörer måste ge upp sin slutliga beslutanderätt.

Omvänt finns situationer där samordning inte räcker.

Transmissionsnät och flygtrafikledning innehåller hårda, systemövergripande avvägningar där någon måste kunna fatta ett slutligt bindande beslut.

De två fallen fick de högsta blindkodade \(B\)-värdena — och de är samtidigt de två fall där v0.5 mest dramatiskt korrigerade v0.4:s fel avseende beslutanderätt.

Med bara åtta fall är detta långt ifrån ett slutgiltigt statistiskt resultat.

Men det är precis den typ av observation ett blindtest är till för:

\[
\boxed{
\text{en ny mekanism gjorde rätt typ av skillnad på nya fall som kodades utan tillgång till facit.}
}
\]

---

# 9. Vad modellen fortfarande missar

Resultatet är minst lika intressant där modellen misslyckas.

## 9.1 Skarpt lokal felaktig faktorisering

J01–J04 hade samtliga:

\[
\text{helarkitekturkompatibilitet}=0.
\]

Modellen övervärderar fortfarande måttliga skalfördelar för vissa verksamheter som i praktiken förblir lokala.

Det kan betyda att modellen saknar någon form av:

- lokalitetsfördel,
- skalnackdelar,
- rumsligt utförandevillkor,
- eller uppgiftsuppdelning.

Det vore dock metodologiskt fel att välja mekanism genom att passa den mot just J01–J04.

---

## 9.2 Beslutanderätt kan följa institutionen snarare än uppgiften

J06 visar att bred beslutanderätt inte alltid behöver förklaras av starkt bindningstryck i själva den analyserade funktionen.

PET/CT ligger i ett bredare regionalt vårdsystem.

Det öppnar en ny distinktion:

\[
\boxed{
\text{uppgiftskrävd beslutanderätt}
\neq
\text{institutionellt ärvd beslutanderätt}.
}
\]

En framtida modell skulle kunna behöva skilja dessa åt.

---

## 9.3 Bred gränssnittssamordning med lokal produktion

J04 visar ett annat mönster:

\[
K_I \gg P.
\]

Nationella register, betalningssystem eller informationsgränssnitt kan existera ovanpå mycket lokala verksamheter.

Det nuvarande gränssnittslagret kan representera detta i arkitekturrymden, men modellen producerar inte ännu denna struktur tillräckligt naturligt.

---

## 9.4 Bred beslutanderätt med lägre produktion är strukturellt svårt

En tidigare algebraisk granskning av v0.5 visade att den nuvarande funktionella kärnan i praktiken gör:

\[
P<A,\quad X<A,\quad F<A
\]

dominerade som strikta optima.

Det innebär att modellen har svårt att beskriva:

> bred bindande beslutanderätt med genuint decentraliserad operativ produktion.

Det är en **känd giltighetsgräns**, inte något som bör döljas i rapporteringen.

---

# 10. Vad detta säger om subsidiaritet

Resultatet stödjer inte en enkel tes om att Sverige bör centraliseras eller decentraliseras.

Snarare pekar det mot att själva frågan ofta är felställd.

En styrningsarkitektur kan exempelvis vara:

\[
A=1,\quad
P=1,\quad
X=4,\quad
F=20,\quad
K_P=4,\quad
K_I=20.
\]

Det skulle kunna motsvara:

- lokal beslutanderätt,
- lokal leverans,
- gemensam specialistkompetens,
- bred riskdelning,
- viss policyharmonisering,
- och ett nationellt tekniskt gränssnitt.

Att kalla hela konstruktionen ”kommunal” eller ”statlig” säger då relativt lite.

En mer precis subsidiaritetsprincip skulle därför kunna formuleras:

> **Placera varje styrningsfunktion på den lägsta skala som kan bära just den funktionens krav, och koppla samman nivåerna utan att automatiskt flytta övriga funktioner med den.**

Det är en starkare princip än ”så lokalt som möjligt”.

Den säger också:

\[
\boxed{
\text{centralisera inte en hel verksamhet bara för att en del av den behöver centraliseras.}
}
\]

Och omvänt:

\[
\boxed{
\text{behåll inte bindande beslutanderätt lokalt om själva systemfunktionen kräver gemensamma slutliga beslut.}
}
\]

Det är denna typ av **funktionell subsidiaritet** som simulatorn försöker operationalisera.

---

# 11. Vad rapporten inte visar

Det finns flera skäl att vara försiktig.

## Åtta fall är få

Blindtestet är litet. Enskilda fall kan därför påverka de sammanlagda måtten kraftigt.

## Utfallskodning innehåller bedömningar

Verkliga institutioner passar inte perfekt i tre syntetiska skalor.

Utfall anges därför ibland som en uppsättning kompatibla skalor snarare än ett enda exakt tal.

## Modellen förutsäger inte historisk kausalitet

Att en svensk institution ligger på en viss nivå betyder inte att nivån är funktionellt optimal.

Institutioner formas också av:

- historia,
- juridik,
- politik,
- professionsgränser,
- budgetsystem,
- organisatorisk tröghet,
- och tidigare reformer.

Simulatorn försöker uppskatta funktionell arkitektur, inte rekonstruera hela denna historiska process.

## Ingen framgångströskel förregistrerades

Före testet definierades ingen godtycklig gräns där exempelvis 50 eller 60 procent skulle kallas ”validering”.

Därför bör en sådan etikett inte hittas på efteråt.

Den korrekta sammanfattningen är:

> **blandat med stark parad förbättring — inte validering.**

---

# 12. Forskningsstatus efter v0.5

v0.5 bör nu behandlas som ett **låst forskningskontrollpunkt**.

Det finns tre skäl.

För det första har modellen genomgått:

1. designgranskning,
2. algebraisk granskning,
3. separat härledning av \(\kappa_M\),
4. förregistrerad låsningsrevision,
5. implementationsrevision,
6. fullständig analytisk/syntetisk testsvit,
7. utvecklingsgranskning,
8. och därefter ett helt nytt blindtest.

För det andra gav blindtestet både framgångar och tydliga residualer.

Det finns därför ingen metodologisk anledning att ”fixa” modellen direkt efter att ha sett resultatet.

För det tredje kan modellens misslyckanden nu vara lika värdefulla som dess träffar. De definierar frågor för framtida forskning:

- Hur representerar man verkligt stark lokalitet?
- Hur skiljer man uppgiftskrävd beslutanderätt från institutionellt ärvd beslutanderätt?
- Hur modellerar man breda gränssnitt ovanpå lokal produktion?
- Hur tillåter man bred beslutanderätt med decentraliserad produktion utan att bygga in det som önskat resultat?

Nästa modellversion bör i så fall börja med dessa frågor som **öppna problem**, inte med J01–J08 som träningsdata.

---

# 13. Slutsats

Styrningsfaktoriseringssimulatorn började med en enkel fråga:

> Kan olika delar av samma samhällsfunktion behöva styras på olika nivåer?

Efter flera modellversioner är svaret fortfarande inte ”bevisat”.

Men v0.5 ger starkare skäl att ta frågan på allvar.

En låst modell mötte åtta helt nya funktioner. De nya beslutanderättsinputarna låstes före utfallsundersökningen. Modellen förbättrade sin föregångare på komponentträff, full arkitekturkompatibilitet, träff för beslutanderätt och absolut arkitekturdistans.

Särskilt tydligt var att högt blindkodat behov av bindande systemintegration sammanföll med de två nya fall där bred beslutanderätt faktiskt var avgörande.

Samtidigt misslyckades modellen konsekvent med flera lokala funktioner och med vissa mer komplexa kombinationer av lokal produktion och bred institutionell infrastruktur.

Det kanske viktigaste resultatet är därför inte en viss träffprocent.

Det är en förändring i hur subsidiaritetsfrågan kan formuleras:

\[
\boxed{
\text{inte ”vilken nivå ska styra?”}
}
\]

utan:

\[
\boxed{
\text{”vilken styrningsfunktion behöver ligga på vilken nivå — och varför?”}
}
\]

Det är en mer krävande fråga.

Men sannolikt också en mer användbar.

---

# Teknisk appendix

## A. Låst v0.5-arkitektur

\[
G_5=(A,P,X,F,K_P,K_I)
\]

med 378 tillåtna arkitekturer över:

\[
\{1,4,20\}.
\]

## B. Problemvektor

\[
\theta_5=
(
L,S_{14},S_{420},
C_{14},C_{420},
E,
R_{14},R_{420},
B_{14},B_{420}
)
\]

med:

\[
0\le B_{420}\le B_{14}\le1.
\]

## C. Bindningsfragmentering

\[
J_B
=
w_B[
B_{14}d(1,4)\mathbf1_{A<4}
+
B_{420}d(4,20)\mathbf1_{A<20}
].
\]

## D. Överordnad beslutanderättsrealisering

\[
M_{\mathrm{sup}}
=
\mathbf1[P>A]
+
\mathbf1[X>A]
+
\mathbf1[F>A]
+
\mathbf1[(K_P>A)\lor(\Gamma_I>0)].
\]

\[
J_{R5}
=
J_{F5}
+
\lambda_I\kappa_M M_{\mathrm{sup}}.
\]

Låst:

\[
\kappa_M
=
0.028922276644969897.
\]

## E. Primära blindtestmått

- komponent P(tillåten),
- sannolikhet för helt kompatibel arkitektur,
- sexrollsarkitekturdistans,
- tecknad skalavvikelse,
- beslutanderätt P(tillåten),
- modal helarkitekturkompatibilitet.

Inget enskilt mått definierades i förväg som en valideringströskel.

---

# Källor för utfallsundersökningen

1. **SISAB — Vår historia.** SISAB beskriver hur bolaget bildades för att renodla förvaltningen av Stockholms skolbyggnader.  
   https://sisab.se/sv/om-sisab/var-historia/

2. **Stockholms stad — Handlingsplan för minskat klotter.** Trafikkontoret ansvarar för sanering av stadens och stadsdelsförvaltningarnas objekt inom sitt ansvarsområde och upphandlar externa entreprenörer.  
   https://start.stockholm/globalassets/handlingsplan-for-minskat-klotter-2021.pdf

3. **Skolverket — Välja förskoleklass och grundskola eller anpassad grundskola.** Kommunen ansvarar för skolplacering vid kommunala skolor inom skollagens ramar.  
   https://www.skolverket.se/styrning-och-ansvar/regler-och-ansvar/ansvar-i-skolfragor/valja-forskoleklass-och-grundskola-eller-anpassad-grundskola

4. **Transportstyrelsen — Parkeringsanmärkning.** Parkeringsanmärkningar på gatumark utfärdas av kommun eller polis medan Transportstyrelsen administrerar parkeringsanmärkningarna och betalningsinformationen.  
   https://www.transportstyrelsen.se/sv/vagtrafik/fordon/skatter-och-avgifter/parkeringsanmarkning/

5. **Sahlgrenska Universitetssjukhuset — Verksamhet Klinisk mikrobiologi.** Klinisk mikrobiologi ingår i Regional laboratoriemedicin med laboratorieverksamhet på flera sjukhus i Västra Götalandsregionen.  
   https://www.sahlgrenska.se/omraden/omrade-4/verksamhet-klinisk-mikrobiologi/

6. **Sahlgrenska Universitetssjukhuset — Bild- och interventionscentrum / Nuklearmedicin.** PET/CT bedrivs inom Sahlgrenskas nuklearmedicinska och radiologiska verksamhet.  
   https://www.sahlgrenska.se/forskning-utbildning-innovation/samverkan/verksamhetebild--och-interventionscentrum-boic/

7. **Svenska kraftnät — Svenska kraftnäts ansvar i kraftsystemet.** Svenska kraftnät är systemansvarig myndighet för överföringssystemet, ansvarar för transmissionsnätet och balanserar systemet.  
   https://www.svk.se/om-kraftsystemet/oversikt-av-kraftsystemet/svenska-kraftnats-ansvar-i-kraftsystemet/

8. **LFV — Här finns LFV / Flygtrafikledning.** LFV bedriver flygtrafikledning genom flera kontrollcentraler och lokal flygtrafiktjänst på flera flygplatser.  
   https://www.lfv.se/om-oss/dethararlfv/har-finns-lfv

9. **Transportstyrelsen — Organisationer som utövar ATM/ANS-tjänst i Sverige.** Flera certifierade organisationer tillhandahåller olika flygtrafiktjänster i Sverige.  
   https://www.transportstyrelsen.se/sv/luftfart/flygplatser-flygtrafiktjanst-och-luftrum/Flygtrafiktjanst/organisationer-som-utovar-atmans-tjanst-i-sverige/

---

## Reproducerbarhet

Den fullständiga forskningskedjan omfattar bland annat:

- låst v0.5-motor,
- design- och strukturgranskningsdokument,
- \(\kappa_M\)-låsningsprotokoll,
- implementationsrevision,
- analytisk/syntetisk testsvit,
- blind indatalåsning,
- prediktionslåsning,
- utfallslåsning,
- integritetsrevision,
- och fullständig J01–J08-syntes.

Den publika rapporten sammanfattar dessa resultat. De tekniska artefakterna bör publiceras eller länkas separat för läsare som vill granska metod och reproducerbarhet.
