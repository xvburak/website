<script lang="ts">
  import Avatars from "./avatars.svelte";
  import OpenGraph from "./open-graph.svelte";
  import { authors, authorSocialMediaLinks } from "$lib/contents/authors";
  import "$lib/assets/markdown-commons.scss";
  import Share from "$lib/components/share.svelte";

  export let baseUrl: string;
  export let imagesDirectoryName: string;
  export let norobots: boolean = false;

  const { date, author, slug, title, image, teaserImage, excerpt } =
    $$restProps;

  let dateDisplay = new Date(Date.parse(date)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const authorDisplayNames = Object.entries(authors).reduce(
    (displayNames, [username, profile]) => {
      displayNames[username] = profile.name;
      return displayNames;
    },
    {}
  );

  const hasATwitterProfile = (author: string) =>
    !!authors[author].socialProfiles.twitter;

  const writers = author.split(", ");

  const renderTwitterHandles = () => {
    let result = writers.reduce(
      (acc: string, current: string) =>
        acc +
        (hasATwitterProfile(current) ? `@${current}` : authors[current].name) +
        ", ",
      ""
    );
    result = result.substring(0, result.length - 2);
    return result;
  };

  const shareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title} by ${renderTwitterHandles()} ${baseUrl}${slug}`
      )}`,
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
      trackingName: "twitter",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        `${baseUrl}${slug}&title=${title}`
      )}`,
      alt: "Reddit",
      icon: "/svg/brands/reddit.svg",
      trackingName: "reddit",
    },
    {
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        `${baseUrl}${slug}`
      )}&t=${encodeURIComponent(title)}`,
      alt: "HackerNews",
      icon: "/svg/brands/hackernews.svg",
      trackingName: "hackernews",
    },
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-solarized-light.min.css" />
</svelte:head>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/${imagesDirectoryName}/${slug}/${image}`,
    imageTwitter: `images/${imagesDirectoryName}/${slug}/${image}`,
    norobots: norobots,
  }}
/>
<div class="flex justify-center mt-small mb-8">
  <div class="post content-blog">
    <img
      src="/images/{imagesDirectoryName}/{slug}/{teaserImage || image}"
      alt={`${title}`}
      class="headerImage"
    />
    <p class="date">{dateDisplay}</p>
    <h1>{title}</h1>
    <p>
      <span
        ><Avatars
          usernames={author}
          displayNames={authorDisplayNames}
          socialMediaLinks={authorSocialMediaLinks}
          socialMediaLinkClasses="inline-flex mr-2 px-2 bg-white rounded-xl text-dark-grey focus:bg-off-white focus:text-black hover:bg-off-white hover:text-black"
          socialMediaImgClasses="mr-2 h-6 w-6 place-self-center"
        /></span
      >
    </p>
    <div>
      <slot />
    </div>
    <Share
      text="Share this post:"
      {shareLinks}
      class="border-t border-solid border-divider pt-micro mt-small"
    />
  </div>
</div>
