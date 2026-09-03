<script lang="ts">
  import { t } from '$lib/stores/i18n';
  const year = new Date().getFullYear();
</script>

<footer class="mt-20 border-t border-stone-200 bg-stone-50 py-12 text-sm text-stone-500">
  <div class="mx-auto flex max-w-5xl flex-col justify-between gap-4 px-6 md:flex-row">
    
    <div>
      <p>
        &copy; {year} Svensk Subsidiaritet.
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-black hover:underline transition-colors"
        >
          {$t.footer.rights}
        </a>
      </p>
    </div>

    <div class="flex gap-6">
      <p>{$t.footer.built_with}</p>
      <a href="/kontakt" class="hover:text-black hover:underline transition-colors">
        {$t.footer.contact}
      </a>
    </div>

  </div>
</footer>
