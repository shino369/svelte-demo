<script lang="ts">
  import Counter from '@/lib/Counter.svelte'
  import TailwindCss from '@/TailwindCSS.svelte';
  import Example from './views/Example.svelte';
</script>

<main>
  <TailwindCss />
  <div class="card w-full h-full">
    <Counter />

    <Example />
  </div>

</main>

<style>

</style>
