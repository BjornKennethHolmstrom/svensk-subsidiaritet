<script>
  import { locale } from '$lib/stores/i18n';
  export let category;
  
  const pdfNames = {
    sv: {
      aldreomsorg: 'Äldreomsorg',
      boende: 'Boende',
      energi: 'Energi',
      halsovard: 'Hälsovård',
      kultur: 'Kultur',
      livsmedelssystem: 'Livsmedelssystem',
      transport: 'Transport',
      trygghet: 'Trygghet',
      utbildning: 'Utbildning',
      valfard: 'Välfärd'
    },
    en: {
      aldreomsorg: 'Elder-Care',
      boende: 'Housing',
      energi: 'Energy',
      halsovard: 'Healthcare',
      kultur: 'Culture',
      livsmedelssystem: 'Food-System',
      transport: 'Transport',
      trygghet: 'Safety',
      utbildning: 'Education',
      valfard: 'Welfare'
    }
  };
  $: pdfUrl = `/downloads/analyser/${pdfNames[$locale][category]}-${$locale === 'sv' ? 'svensk-subsidiaritet' : 'swedish-subsidiarity'}.pdf`;
</script>

<div class="mb-8 flex items-center justify-end border-b border-stone-200 pb-4">
  <a
    href={pdfUrl}
    download
    class="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    {$locale === 'sv' ? 'Ladda ner som PDF' : 'Download as PDF'}
  </a>
</div>
