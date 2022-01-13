<script lang="ts">
  import { goto } from "$app/navigation";
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuToggle from "./mobile-menu/toggle.svelte";
  import NavItem from "./nav-item.svelte";
  import menuState from "./mobile-menu/state";
  // import LoginButton from "./login-button.svelte";
  // import SignUpButton from "./sign-up-button.svelte";
  // import DashboardButton from "./dashboard-button.svelte";
  // import Logo from "../svgs/logo.svelte";
  import { showHideOverflowY } from "$lib/utils/helpers";
  // import SignUpButtonTablet from "./sign-up-button-tablet.svelte";
  import AnnouncementBanner from "$lib/components/banners/announcement.svelte";
  // import ContactLink from "./contact-link.svelte";

  let scroll: number;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navItems = [
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/screencasts",
      label: "Screencasts",
      // isHighlighted: true,
    },
  ];

  const isLoggedIn =
    typeof document === "undefined"
      ? false
      : !!document.cookie.match("gitpod-user=loggedIn") ||
        !!document.cookie.match("gitpod-user=true");
</script>

<style lang="postcss">
  nav {
    transition: border-color 0.2s linear;
  }

  .nav-items {
    @apply transition-opacity duration-200 ease-linear;
  }

  .bg-open-state {
    @apply bg-off-white !important;
  }

  .wrapper {
    max-width: 1500px;
    @apply py-xx-small px-xx-small;
  }

  .scrolled-out {
    @apply border-divider;
    background: hsl(0 5% 96% / 85%);
    backdrop-filter: saturate(0.5) blur(5px);
  }

  .scrolled-out .nav-items {
    @apply opacity-0 pointer-events-none;
  }

  @media (min-width: 1050px) {
    .wrapper {
    }

    .nav-items,
    .login-wrapper {
      @apply flex;
    }
  }

  button {
    @apply outline-none;
  }

  button::-moz-focus-inner {
    @apply border-0;
  }

  .mobile-nav {
    @media (min-width: 1050px) {
      @apply hidden;
    }
  }
</style>

<svelte:window bind:scrollY={scroll} />
<!-- Intersection observer target to trigger the strike through animation. -->
<div id="choose-project-observer-target-top" />
<nav
  class="fixed z-50 mx-auto w-full border-b border-solid border-transparent"
  class:scrolled-out={scroll > 0}
  class:bg-open-state={$menuState}
>
  <AnnouncementBanner />
  <div class="wrapper flex items-center justify-between mx-auto px-4 sm:px-8">
    <button
      on:contextmenu|preventDefault={() => goto("/media-kit")}
      aria-label="Home"
      on:click={() => {
        $menuState = !menuState;
        showHideOverflowY(false);
        goto("/");
        scrollToTop();
      }}
    >
      <p class="font-bold">Lorem ipsum</p>
    </button>

    <div
      class="nav-items justify-end hidden px-2 space-x-6 items-center md:space-x-12"
    >
      {#each navItems as navItem}
        <NavItem on:focus={scrollToTop} {navItem} />
      {/each}
    </div>

    <!-- <div class="flex items-center">
      {#if !$menuState}
        <p>hello</p>
      {/if}
      <MobileMenuToggle />
    </div> -->

    <!-- {#if !$menuState}
    <div class="hidden">
        <p>hello</p>
      </div> 
      {/if}-->

    <div class="flex items-center mobile-nav">
      <MobileMenuToggle />
    </div>
  </div>

  <MobileMenu {navItems} {isLoggedIn} />
</nav>
