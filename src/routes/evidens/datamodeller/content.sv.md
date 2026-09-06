# Data & modeller

## Mätningar, formella modeller och simuleringar som kompletterande verktyg

Forskning och fall svarar på "vad har hänt och vad säger litteraturen?". Den här delen svarar på en annan fråga: **hur gör vi abstrakta styrningsbegrepp mätbara, och vad kan formella modeller faktiskt visa oss?**

Tre underdelar:

```text
Governance Measures → GAE Models → Simulations
```

---

## Governance Measures

Våra egna operationaliseringar av begrepp som annars förblir abstrakta — till exempel *beslutsnärhet*, *auktoritetsdjup*, *informationsavstånd*, *samordningsbörda*, *funktionell skalpassning*, *kapacitet*, *ansvarsavstånd* och *adaptationslatens*.

Det här är **inte** etablerade, validerade index ännu. Varje måttsida är tydlig med sina antaganden och begränsningar, i linje med GAE:s egen varning att vissa index och trösklar är heuristiska snarare än härledda.

*Status: ramverket är definierat; enskilda måttsidor byggs i en senare omgång.*

---

## GAE Models

Governance as Engineering (GAE) har redan 29 publicerade rapporter och tillhörande simuleringar på GitHub. Vi duplicerar inte det arbetet här.

I stället förklarar varje relevant modellsida:

> **Vad testar modellen?**
> **Vad visade modellen?**
> **Vad fastställer den inte?**

och avslutas alltid med:

> **Läs hela GAE-rapporten →**
> **Se simulering/kod →**

Se **[GAE som analytisk lins](/evidens/sa-vet-vi/gae/)** för hur vi tänker om förhållandet mellan modellresultat ([R]), institutionell tolkning ([IP]) och heuristik ([H]).

*Status: översikt och länkstruktur på plats; enskilda modellsidor byggs i en senare omgång.*

---

## Simulations

En katalog över de beräkningsexperiment som hör till GAE-modellerna, med metadata, resultat och tolkning — inte en duplicering av hela notebooks eller repositories.

Alla GAE-simuleringar finns samlade i **[gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)** på GitHub.

*Status: extern länk på plats; katalogsidor byggs i en senare omgång.*

---

## Varför vi inte bygger om det som redan finns

Eftersom GAE:s rapporter redan är fullt publicerade och simuleringarna redan finns på GitHub, bygger den här delen av evidens ett **tolkningslager**, inte en teknisk lagringsplats. Målet är att en besökare ska kunna följa hela kedjan:

> empirisk studie → vår fallanalys → relevant GAE-mekanism → modell → simulering/kod

utan att vi duplicerar tekniskt innehåll som redan finns någon annanstans.

**[Se Evidensmatrisen →](/evidens/syntes/matris/)** för hur mått och modeller kommer att kopplas till hypoteser när de byggs ut.
