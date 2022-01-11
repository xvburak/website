<script lang="ts">
  import { createPopperActions } from "svelte-popperjs";

  const [popperRef, popperContent, getInstance] = createPopperActions();

  const popperOptions = {
    placement: "top-start",
    modifiers: [{ name: "offset", options: { offset: [-8, 8] } }],
  } as any;

  let clazz = "";
  export { clazz as class };

  export let title: string = "";
  let isRendered: boolean = false;
</script>

<style lang="postcss">
  .tooltip {
    @apply w-auto text-off-white bg-[#565252] text-xs py-macro px-2.5 rounded-xl normal-case font-normal;
  }

  .tooltip :global(a) {
    @apply text-off-white;
  }
  #arrow,
  #arrow::before {
    position: absolute;
    width: 10px;
    height: 10px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
</style>

<button
  on:mouseenter={() => (isRendered = true)}
  on:mouseleave={() => (isRendered = false)}
  class={clazz}
>
  <slot />

  <img
    use:popperRef
    src="/svg/question-mark.svg"
    alt="Tooltip"
    class="h-5 w-5"
  />
</button>

{#if isRendered}
  <div class="tooltip" use:popperContent={popperOptions}>
    {@html title}
    <div id="arrow" data-popper-arrow />
  </div>
{/if}
