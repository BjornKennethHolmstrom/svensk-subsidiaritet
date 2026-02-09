<script lang="ts">
  import { locale } from '$lib/stores/i18n';
  import { page } from '$app/stores';
  
  // Get frontmatter if available
  export let metadata = {};
  
  $: session = metadata.session || null;
  $: titleSv = metadata.titleSv || metadata.title || '';
  $: titleEn = metadata.titleEn || metadata.title || '';
  $: title = $locale === 'sv' ? titleSv : titleEn;
</script>

<svelte:head>
  <style>
    @media print {
      /* Hide navigation and other UI elements */
      header, nav, footer, .no-print, .print-hide {
        display: none !important;
      }
      
      /* Print-friendly body */
      body {
        font-size: 12pt;
        line-height: 1.5;
        color: #000;
        background: #fff;
      }
      
      /* Page breaks */
      h1, h2, h3 {
        page-break-after: avoid;
      }
      
      table, figure {
        page-break-inside: avoid;
      }
      
      /* Tables */
      table {
        border-collapse: collapse;
        width: 100%;
      }
      
      th, td {
        border: 1px solid #000;
        padding: 8px;
      }
      
      th {
        background-color: #f0f0f0 !important;
      }
      
      /* Remove shadows */
      * {
        box-shadow: none !important;
      }
      
      /* Checkboxes visible */
      input[type="checkbox"] {
        border: 2px solid #000;
        width: 14px;
        height: 14px;
        -webkit-appearance: none;
        appearance: none;
      }
      
      input[type="checkbox"]:checked:after {
        content: "✓";
        display: block;
        text-align: center;
        line-height: 14px;
      }
    }
  </style>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
  
  <!-- Print/Back Buttons -->
  <div class="no-print mb-8 flex gap-4">
    <button
      onclick={() => window.print()}
      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
    >
      🖨️ {$locale === 'sv' ? 'Skriv ut' : 'Print'}
    </button>
    <a
      href="/studiecirkel"
      class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
    >
      ← {$locale === 'sv' ? 'Tillbaka' : 'Back'}
    </a>
  </div>

  <!-- Print Header -->
  <header class="mb-12 pb-6 border-b-2 border-gray-300">
    <div class="flex justify-between items-start">
      <div class="flex-1">
        {#if session}
          <div class="text-sm font-semibold text-gray-500 mb-2">
            {$locale === 'sv' ? `TRÄFF ${session}` : `SESSION ${session}`}
          </div>
        {/if}
        <h1 class="text-4xl font-bold mb-2">{title}</h1>
      </div>
      <div class="text-right text-sm text-gray-500 print-show hidden print:block">
        <div>svensksubsidiaritet.se</div>
        <div>{$locale === 'sv' ? 'Studiecirkel' : 'Study Circle'}</div>
      </div>
    </div>
  </header>

  <!-- Markdown Content -->
  <article class="prose prose-stone prose-lg max-w-none dark:prose-invert
                  prose-headings:font-bold
                  prose-table:border-collapse
                  prose-th:bg-gray-100 prose-th:border prose-th:border-gray-300 prose-th:p-3
                  prose-td:border prose-td:border-gray-300 prose-td:p-3">
    <slot />
  </article>

  <!-- Print Footer -->
  <footer class="mt-16 pt-6 border-t-2 border-gray-300 text-sm text-gray-600 print-show hidden print:block">
    <div class="flex justify-between">
      <div>
        {$locale === 'sv' 
          ? 'Material från Studiecirkel om Subsidiaritet' 
          : 'Materials from Study Circle on Subsidiarity'}
      </div>
      <div>svensksubsidiaritet.se</div>
    </div>
  </footer>

</div>

<style>
  @media print {
    .print-show {
      display: block !important;
    }
  }
</style>
