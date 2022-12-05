<script>
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'
  export let data
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
</script>

<Head
  title={`${data.project.name} · ${siteName}`}
  description={data.project.description.slice(0, 120)}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${pathname}`}
/>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
  <img
    class="rounded-lg"
    src={data.project.image[0].url}
    alt={data.project.title}
  />
</div>

<h1 class="text-4xl font-semibold mb-5">{data.project.name}</h1>

<div class="mb-5 flex justify-between">
  <div>
    {#if data.project.tags}
      {#each data.project.tags as tag}
        <span
          class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer"
          >{tag}</span
        >
      {/each}
    {/if}
  </div>
</div>

<div
  class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus"
>
  <a class="mr-5" href={data.project.demo}>Demo</a>
  <a href={data.project.sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
  {@html marked(data.project.description)}
</article>
