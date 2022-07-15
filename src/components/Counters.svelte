<script lang="ts">
  import Counter from "../lib/Counter.svelte";
  import CounterDouble from "../lib/CounterDouble.svelte";
</script>

<div class="border border-gray-700 rounded-md">
  <p class="text-left p-2 leading-none">Sharing Count state</p>
  <div class="p-2 mt-1">
    <Counter />
  </div>
</div>
<div class="border border-gray-700 rounded-md">
  <p class="text-left p-2 leading-none">Double Counter</p>
  <CounterDouble class="p-2"/>
</div>
