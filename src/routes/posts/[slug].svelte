<script context="module">
  export const load = async ({ fetch, page: { params } }) => {
    const { slug } = params
    const res = await fetch(`/posts/${slug}.json`)
    if (res.ok) {
      const { post } = await res.json()
      return {
        props: { post },
      }
    }
  }
</script>

<script>
  import { marked } from 'marked'
  export let post

  const { title, date, tags, content, coverImage } = post
</script>

<svelte:head>
  <title>Blog | {title}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
  <img
    src={coverImage.url}
    alt={`Cover image for ${title}`}
    class=""
  />
</div>

<div class="prose prose-xl">
  <h1>{title}</h1>
</div>

<p class="text-secondary text-xs tracking-widest font-semibold">
  {new Date(date).toDateString()}
</p>

<div class="mb-5 flex justify-between">
  <div>
    {#if tags}
      <div class="mt-5 space-x-2">
        {#each tags as tag}
          <span class="badge badge-primary">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<article div class="prose prose-lg">
  {@html marked(content)}
</article>
