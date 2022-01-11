<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Segment from "$lib/components/segment.svelte";
  import LayoutMain from "$lib/components/layout-main.svelte";
  import LayoutRoot from "$lib/components/layout-root.svelte";
  import Nav from "$lib/components/main-nav/index.svelte";
  import Footer from "$lib/components/footer/index.svelte";
  import CookieConsent from "$lib/components/banners/cookie-consent.svelte";

  onMount(() => {
    document.cookie = "gitpod-marketing-website-visited=true;domain=gitpod.io";
  });

  $: if ($page.url.pathname) {
    // Workaround until https://github.com/sveltejs/kit/issues/2664 is fixed
    if (typeof window !== "undefined" && window.location.hash) {
      const deepLinkedElement = document.getElementById(
        window.location.hash.substring(1)
      );
      if (deepLinkedElement) {
        deepLinkedElement.scrollIntoView();
      }
    }
  }
</script>

<style>
  :global(#svelte-announcer) {
    @apply sr-only;
  }

  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>

<LayoutRoot>
  <Nav />
  <LayoutMain>
    <slot />
  </LayoutMain>
  <Footer />
</LayoutRoot>
<CookieConsent />
<Segment />
