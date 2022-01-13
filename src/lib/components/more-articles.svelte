<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post.type";

  import PostPreview from "./blog/post-preview.svelte";
  import Section from "./section.svelte";

  export let posts: BlogPost[];
  export let title: string = "More articles";
  export let text: string = "";
</script>

<Section>
  <h2 class="text-center text-h2" class:mb-small={!text}>{title}</h2>
  {#if text}
    <p class="text-center text-large  mb-small mx-auto">
      {text}
    </p>
  {/if}
  <div class="posts-grid">
    {#each posts as post}
      <div class="posts-grid__item">
        <PostPreview {post} type="blog" isMostRecent headlineOrder="h3" />
      </div>
    {/each}
  </div>
</Section>
