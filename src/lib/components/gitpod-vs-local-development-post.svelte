<script lang="ts">
  import Section from "./section.svelte";

  export let title: string;
  export let text: string;
</script>

<Section>
  <div class="text-center max-w-3xl mx-auto">
    <h2>{title}</h2>
    <p class="text-large">
      {@html text}
    </p>
  </div>
</Section>
