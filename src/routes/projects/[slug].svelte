<script context="module">
  export const load = async ({ fetch, page: { params } }) => {
    const { slug } = params
    const res = await fetch(`/projects/${slug}.json`)
    if (res.ok) {
      const project = await res.json()
      return {
        props: project,
      }
    }
  }
</script>

<script>
  import { marked } from 'marked'

  export let project
</script>

<svelte:head>
  <title>My Portfolio | {project.name}</title>
</svelte:head>

{#if project.image[0]?.url}
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-lg"
      src={project.image[0].url}
      alt={`Cover Image for ${project.title}`}
    />
  </div>
{:else}
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-xl"
      src={`/default-cover-image.jpg`}
      alt={`Default Cover Image`}
    />
  </div>
{/if}

<h1 class="text-4xl font-semibold mb-5">{project.name}</h1>

<div class="mb-5 flex justify-between">
  <div>
    {#if project.tags}
      {#each project.tags as tag}
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
  <a class="mr-5" href={project.demo}>Demo</a>
  <a href={project.sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
  {@html marked(project.description)}
</article>
