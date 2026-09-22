<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import RevisionNotice from '$lib/components/RevisionNotice.svelte';
</script>

{#if $locale === 'sv'}
  <RevisionNotice heading="Om systemanalyserna">
    <p>
      Analyserna är tidiga, argumenterande skisser. De använder Ashbys lag som en analytisk lins,
      inte som ett bevis, och vissa siffror och formuleringar håller ännu inte projektets
      <a href="/evidens/sa-vet-vi/evidensstandarder">evidensstandarder</a>. Förslagen är idéer att pröva,
      inte slutsatser, och sidorna ses över. Läs dem gärna tillsammans med
      <a href="/evidens/syntes/motevidens">motevidensen</a>.
    </p>
  </RevisionNotice>
{:else}
  <RevisionNotice heading="About the systems analyses">
    <p>
      These analyses are early, argumentative sketches. They use Ashby's law as an analytical lens,
      not as proof, and some figures and claims do not yet meet the project's
      <a href="/evidens/sa-vet-vi/evidensstandarder">evidence standards</a>. The proposals are ideas to test,
      not conclusions, and the pages are under review. Read them alongside the
      <a href="/evidens/syntes/motevidens">counter-evidence</a>.
    </p>
  </RevisionNotice>
{/if}
