<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css'; // Ensure this points to your css file
</script>

<div class="flex min-h-screen flex-col font-serif selection:bg-stone-200 selection:text-black">
  <Header />
  
  <main class="flex-1 w-full">
    <slot />
  </main>
  
  <Footer />
</div>
