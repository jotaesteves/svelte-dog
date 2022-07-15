<script lang="ts">
  import Counters from './components/Counters.svelte';
  import Header from './components/Header.svelte'
  import ThreeColumn from './lib/ThreeColumn.svelte'
  import Router from './pages/Router.svelte';
</script>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <Header />

  <div class="text-center grid grid-cols-2 gap-4 pb-4 pt-4">
    <Counters />
  </div>

  <div class="card pb-4">
    <Router />
  </div>

  <div class="card">
    <ThreeColumn />
  </div>
</main>
