<script lang="ts">
  import { isAnExternalLink } from "$lib/utils/helpers";
  import type { Card } from "$lib/types/card.type";
  import Modal from "../modal.svelte";
  let clazz = "";
  export { clazz as class };

  export let card: Card;
  const { title, text, link, icon, modal } = card;
  const target = link && isAnExternalLink(link.href) ? "_blank" : undefined;
  export let headingLevel: "h3" | "h2" = "h3";
  export let titleClassNames: "h4" | "h5" = "h4";
  export let iconClassNames: string = "h-16 w-20";
  export let btnClassNames: string = "btn-cta mt-x-small";
  export let styles: string = "";

  let isModalOpen: boolean = false;
</script>

<div
  class="flex flex-col justify-between items-center max-w-sm bg-off-white shadow-normal text-center {clazz}"
  style={styles}
>
  <div>
    {#if icon}
      <img
        src={icon.src}
        alt={icon.alt || title}
        class="{iconClassNames} mb-xx-small mx-auto"
        style="transform: {icon.transform}"
      />
    {/if}
    {#if headingLevel === "h3"}
      <h3 class="mb-micro {titleClassNames}">{title}</h3>
    {:else}
      <h2 class="mb-micro {titleClassNames}">{title}</h2>
    {/if}
    <p>{@html text}</p>
  </div>
  {#if link}
    <a href={link.href} {target} class={btnClassNames}>{link.text}</a>
  {/if}
  {#if modal}
    <button class={btnClassNames} on:click={() => (isModalOpen = true)}>
      {modal.btnText}
    </button>
  {/if}
</div>

{#if modal}
  <Modal on:close={() => (isModalOpen = false)} isOpen={isModalOpen}>
    <svelte:component this={modal.modalContentComponent} />
  </Modal>
{/if}
