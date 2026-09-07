# GAE som analytisk lins

## Ett verktyg, inte en synonym för evidens

Governance as Engineering (GAE) är en serie på 29 publicerade rapporter som utvecklar formella och begreppsmässiga modeller för styrning: latens, signaltrohet, nödvändig variation, samordningsskatt, adaptationsflaskhalsar, gränsdynamik med mera.

GAE:s alla rapporter finns redan fullt publicerade på [bjornkennethholmstrom.org](https://www.bjornkennethholmstrom.org/), och tillhörande simuleringar finns på [GitHub](https://github.com/BjornKennethHolmstrom/gae-governance-simulator). Vi duplicerar inte det innehållet här. Den här sidan — och GAE-referenser kopplade till forskningsämnen, fall, mått och hypoteser — är i stället **navigationslagret** mellan vår empiriska fråga och GAE:s tekniska djupdykning.

---

## Varför separationen spelar roll

GAE är **ett av våra analytiska verktyg — inte synonymt med evidensen själv.**

```text
                   SVENSK SUBSIDIARITET
                           │
          ┌────────────────┴────────────────┐
          │                                 │
     Governance                        Evidence
    Architecture                         │
          │                      ┌─────────┴─────────┐
          │                      │                   │
     Vilken form               Forskning          Modeller
     ska systemet              Fall               & simuleringar
     ha?                       Data
          │                      Syntes
          │
          └──────────────┬──────────────────────┘
                         │
                    Arkitektur-
                     iteration
```

Ett GAE-resultat är, som förklaras under **[Så vet vi](/evidens/sa-vet-vi/)**, ofta ett **[R]**-resultat: rigoröst inom sin formella modell. Det blir inte automatiskt ett påstående om verkliga institutioner. Vi markerar därför alltid om ett visst GAE-koncept används som [R] (rigoröst modellresultat), [IP] (disciplinerad institutionell tolkning) eller [H] (heuristisk analogi) i ett givet sammanhang.

---

## Hur GAE-koncept kopplar till våra frågor

Exempel på hur centrala GAE-begrepp kopplar till forskningsämnen och hypoteser:

| GAE-koncept | Relevant för | Exempel-rapport |
|---|---|---|
| Signaltrohet / representationsdjup | H10 (representationskedjor), R1, R7 | [Rapport III: Observerbarhets-demokratikopplingen](https://www.bjornkennethholmstrom.org/working-papers/observability-democracy-connection) |
| Nödvändig variation | H1, H7, R1, R2, R9 | [Rapport IV: Nödvändig variation och allmänningen](https://www.bjornkennethholmstrom.org/working-papers/requisite-variety-and-the-commons) |
| Samordningsskatt | H6, H8, H14, R3, R4, R7 | [Rapport V: Samordningsmisslyckandets skatt](https://www.bjornkennethholmstrom.org/working-papers/coordination-failure-tax) |
| Nödvändig observatörsmångfald | H11, R9 | [Rapport X: Nödvändig observatörsmångfald](https://www.bjornkennethholmstrom.org/working-papers/requisite-observer-diversity) |
| Adaptationsflaskhals | H12, R9 | [Rapport XV: Adaptationsflaskhalsen](https://www.bjornkennethholmstrom.org/working-papers/adaptation-bottleneck) |
| Gränsinstabilitet | H14, H15, R3, R4 | [Rapport XVIII: Principen om gränsinstabilitet](https://www.bjornkennethholmstrom.org/working-papers/boundary-instability) |
| Pluralt observerande (guvernörer/vaktposter/broar) | H13, R9 | [Rapport XIX: Guvernörer, vaktposter och broar](https://www.bjornkennethholmstrom.org/working-papers/governors-sentinels-bridges) |

Detta är en start, inte en fullständig 29-rapportskartläggning — se **[Öppna frågor](/evidens/syntes/oppna-fragor/)**.

---

## Så här ser en "dive deeper"-koppling ut i praktiken

När en hypotes eller ett fall refererar till GAE ger vi alltid två separata länkar:

> **Läs hela GAE-rapporten →** (teoretisk härledning, formell modell)
> **Se simulering/kod →** (reproducerbar implementation på GitHub)

Det tekniska källmaterialet förblir auktoritativt för den detaljerade härledningen och implementationen. Evidence-sidan förklarar bara **varför** arbetet är relevant för den empiriska forskningsfrågan.

Det gör att en läsare kan följa hela kedjan:

> empirisk studie → vår fallanalys → relevant GAE-mekanism → modell → simulering/kod.

---

## GAE-integration hittills

Vi länkar till GAE där det är direkt relevant för forskningsämnena och fallen. Tre GAE-modeller har nu egna fördjupningssidor — se **[GAE-modeller](/evidens/datamodeller/modeller/)** för Nödvändig variation (GAE IV), Samordningsskatt (GAE V) och Adaptationsflaskhalsen (GAE XV). Den fullständiga kartläggningen mot alla 29 rapporter, och fler enskilda modellsidor, byggs ut efter hand — se **[Öppna frågor](/evidens/syntes/oppna-fragor/)**.
