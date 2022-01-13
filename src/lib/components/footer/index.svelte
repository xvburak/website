<script>
  import FooterLink from "./link.svelte";
  import Section from "./section.svelte";

  const socialLinks = [
    {
      href: "https://twitter.com/",
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
    },
    {
      href: "https://github.com/",
      alt: "GitHub",
      icon: "/svg/brands/github.svg",
    },
    {
      href: "https://www.gitpod.io/",
      alt: "Discord",
      icon: "/svg/brands/discord.svg",
    },
  ];
</script>

<style>
  footer {
    max-width: 1500px;
  }
</style>

<div class="bg-gray-100 text-p-footer" data-id="footer">
  <footer class="py-xx-small m-auto px-xx-small">
    <div class="flex flex-col-reverse items-center justify-between md:flex-row">
      <div class="mt-micro flex items-center md:mt-0">
        <FooterLink href="/" /><span class="ml-macro"
          >Copyright &copy; {new Date().getFullYear()} Lorem ipsum</span
        >
      </div>
      <div class="flex space-x-micro">
        {#each socialLinks as link}
          <FooterLink
            href={link.href}
            target="_blank"
            class="hover:opacity-80"
            analytics={`{"variant":"social_media","context":"` +
              link.alt.toLowerCase() +
              `_visit"}`}
          >
            <img src={link.icon} alt={link.alt} height="24" width="24" />
          </FooterLink>
        {/each}
      </div>
    </div>
  </footer>
</div>
