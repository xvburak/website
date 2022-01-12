<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Faq from "../faqs/faq.svelte";
  import { selfhostedFAQ } from "$lib/contents/self-hosted";
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }
</style>

<Section>
  <Faqs>
    <h2 class="h1">FAQs</h2>
    {#each selfhostedFAQ as item}
      <Faq title={item.title}>
        {@html item.content}
      </Faq>
    {/each}
  </Faqs>
</Section>
