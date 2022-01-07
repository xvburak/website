<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Screencast from "$lib/components/screencasts/screencast.svelte";
  import screencasts from "$lib/contents/screencasts";
  import Explore from "$lib/components/explore.svelte";
</script>

<style lang="postcss">
  .screencasts {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 25rem));
  }
</style>

<OpenGraph
  data={{
    description: "Learn more about Gitpod with these short screencasts.",
    title: "Screencasts",
  }}
/>

<header class="tight">
  <h1 class="h2 text-center">Full screencast playlist</h1>
  <p>Learn how to be always ready-to-code by following these short videos.</p>
</header>

<section
  class="screencasts grid justify-center gap-y-medium gap-x-5 m-x-small px-5"
  data-analytics={`{"context":"grid"}`}
>
  {#each screencasts as screencast, index}
    <Screencast {screencast} screencastNumber={index + 1} />
  {/each}
</section>

<Explore />
