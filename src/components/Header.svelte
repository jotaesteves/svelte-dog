<script lang="ts">
  import svelteLogo from "../assets/svelte.svg"
  import tailwindLogo from "../assets/tailwind.svg"
  import { Image } from 'svelte-lazy-loader'
</script>

<div class="border border-gray-700 rounded-md">
  <div class="flex justify-center">
    <a href="https://vitejs.dev" target="_blank" class="p-4 logo">
      <Image src="/vite.svg" classes="h-24" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" class="p-4 logo svelte">
      <Image src={svelteLogo} classes="h-24" alt="Svelte Logo" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank" class="p-4 logo tailwind">
      <Image src={tailwindLogo} classes="h-24" alt="Tailwind Logo" />
    </a>
  </div>
  <div class="text-center">
    <h1 class="text-3xl font-bold">Vite + Svelte + TailwindCss</h1>
    <h4 class="text-xl">Using TS ❤</h4>
    <p class="pt-4"> My boilerplate for starting a quick web app </p>
  </div>
</div>

<style>
  .logo {
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.tailwind:hover {
    filter: drop-shadow(0 0 3em #0066ffaa);
  }
</style>
