<script lang="ts">
  import { onMount } from "svelte";
  import { navigating } from "$app/stores";
  import { showHideOverflowY } from "$lib/utils/helpers";

  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import SignUpButton from "../sign-up-button.svelte";
  import DashboardButton from "../dashboard-button.svelte";
  import menuState from "./state";
  import ContactLinkMobile from "./contact-link-mobile.svelte";

  export let navItems = [];
  export let isLoggedIn: boolean;

  onMount(() => {
    const handleTabletChange = (e: any) => {
      if (e.matches) {
        $menuState = false;
        showHideOverflowY(false);
      }
    };

    let query = window.matchMedia("(min-width: 1050px)");
    query.addEventListener("change", handleTabletChange);
  });

  const toggle = () => {
    $menuState = !$menuState;
    showHideOverflowY(false);
  };

  $: if ($navigating) {
    $menuState = false;
    showHideOverflowY(false);
  }
</script>

<style lang="postcss">
  /* Always make sure to keep the media query intact with one specified above in the matchMedia call. */
  @media (min-width: 1050px) {
    .nav-items {
      @apply hidden;
    }
  }

  div :global(a:not([class*="button"])) {
    @apply text-dark-grey;
  }
</style>

{#if $menuState}
  <div
    class="nav-items absolute flex flex-col py-x-small w-screen items-center bg-off-white space-y-xx-small z-10 shadow-md"
  >
    {#each navItems as navItem}
      <NavItem {navItem} />
    {/each}
    <ContactLinkMobile />
    {#if isLoggedIn}
      <DashboardButton class="text-lg h-8 w-28 button" />
    {:else}
      <LoginButton />
      <SignUpButton class="text-lg h-8 w-28 button" on:click={toggle} />
    {/if}
  </div>
{/if}
