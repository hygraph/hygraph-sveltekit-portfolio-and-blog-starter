<script context="module">
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { client } from '$lib/graphql-client'
  import { postQuery } from '$lib/graphql-queries'
  import {
    fetchSiteMetadata,
    siteMetadataStore,
  } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'

  export const load = async ({ params }) => {
    await fetchSiteMetadata()

    const { slug } = params
    const variables = { slug }
    const { post } = await client.request(postQuery, variables)

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  export let post
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const { title, date, tags, content, coverImage } = post
  const { siteUrl, name: siteName } = $siteMetadataStore || []
</script>

<Head
  title={`${title} · ${siteName}`}
  description={content.slice(0, 120)}
  image={coverImage.url}
  url={`${siteUrl}${pathname}`}
/>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
  <img
    class="rounded-xl"
    src={coverImage.url}
    alt={`Cover image for ${title}`}
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
