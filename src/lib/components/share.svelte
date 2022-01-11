<script lang="ts">
  import type { ShareLink } from "$lib/types/share-link.type";

  export let text: string;
  export let shareLinks: ShareLink[];
  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  h2 {
    @apply mb-0;
  }
</style>

<div class="flex items-center space-x-micro {clazz}">
  <h2 class="h4">{text}</h2>
  {#each shareLinks as link}
    <a
      href={link.href}
      rel="noreferrer"
      target="_blank"
      data-analytics={`{"variant":"social_media","context":"` +
        link.alt.toLowerCase() +
        `_share"}`}
    >
      <img src={link.icon} alt={link.alt} class="h-8 w-8" />
    </a>
  {/each}
</div>
