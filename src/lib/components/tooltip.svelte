<script lang="ts">
  let clazz = "";
  export { clazz as class };

  export let title: string = "";
  let isRendered: boolean = false;

  const mouseOver = () => {
    isRendered = true;
  };

  const mouseLeave = () => {
    isRendered = false;
  };
</script>

<style lang="postcss">
  .tooltip {
    --bg: #565252;
    @apply absolute z-50 w-60;
    bottom: 105%;
    left: 90%;
    background: var(--bg);

    @media (max-width: 1700px) {
      @apply left-1/3;
    }

    @media (max-width: 1380px) {
      @apply left-1/2 w-56;
    }

    @media (max-width: 800px) {
      @apply w-52;
      left: 40%;
    }

    @media (max-width: 700px) {
      left: 60%;
    }

    @media (max-width: 475px) {
      @apply w-40;
      left: 40%;
    }

    &::before {
      content: "";
      @apply absolute block h-10 left-0 w-1/2 -z-10;
      bottom: -60%;
    }

    /* 
    &::after {
      content: "";
      @apply block h-4 w-4 absolute -z-10;
      transform: rotate(45deg) translateY(-2px);
      background: var(--bg);
    } 
    */

    :global(a) {
      @apply text-white;
    }
  }
</style>

<span class="relative" on:mouseleave={mouseLeave}>
  <button
    on:mouseover={mouseOver}
    on:click={() => {
      isRendered = true;
    }}
    on:focus={() => {
      isRendered = true;
    }}
    on:blur={() => {
      isRendered = false;
    }}
    class="inline-flex relative {clazz}"
  >
    <slot />
  </button>

  {#if isRendered}
    <div
      class="tooltip text-white text-xs py-macro px-2.5 rounded-xl normal-case font-normal"
    >
      {@html title}
    </div>
  {/if}
</span>
