<script lang="ts">
  import { t } from '$lib/stores/i18n';
  const year = new Date().getFullYear();
</script>

<footer class="mt-20 border-t border-stone-200 bg-stone-50 py-12 text-sm text-stone-500">
  <div class="mx-auto flex max-w-5xl flex-col justify-between gap-4 px-6 md:flex-row">
    
    <div>
      <p>&copy; {year} Svensk Subsidiaritet. {$t.footer.rights}</p>
    </div>

    <div class="flex gap-6">
      <p>{$t.footer.built_with}</p>
      <a href="/kontakt" class="hover:text-black hover:underline transition-colors">
        {$t.footer.contact}
      </a>
    </div>

  </div>
</footer>
