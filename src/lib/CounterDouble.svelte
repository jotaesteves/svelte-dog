<script lang="ts">
  // You have to this because class is a reserved keyword in JavaScript
  let className:string;
  export { className as class };
  import InputNumber from "./InputNumber.svelte"
  import { count } from "../stores/count"
</script>

<div class={className}>
  <InputNumber bind:value="{$count}" />
  <p class="p-2">The Double is {$count*2}</p>
</div>
