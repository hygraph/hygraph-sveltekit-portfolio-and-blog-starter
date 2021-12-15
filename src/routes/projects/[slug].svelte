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
  <title>{project.title}</title>
</svelte:head>

<!-- <pre>{JSON.stringify(project, null, 2)}</pre> -->

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

<a href={'/'} class="inline-flex items-center mb-3">
  <!-- <img
    src={project.author?.picture.url
      ? project.author?.picture.url
      : `/default-profile-pic.png`}
    alt={project.author?.name}
    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
  /> -->
  <!-- <span class="flex-grow flex flex-col pl-4">
    <span class="title-font font-medium"
      >{project.author?.name ? project.author.name : `anon`}</span
    >
    {#if project.author?.authorTitle}
      <span
        class="text-secondary text-xs tracking-widest font-semibold"
        >{project.author?.authorTitle}</span
      >
    {/if}
  </span> -->
</a>

<!-- <p class="mb-5 flex justify-between">
  {new Date(project.date).toDateString()}
</p> -->

<!-- <div class="mb-5 flex justify-between">
  <div>
    {#if project.tags}
      {#each project.tags as tag}
        <span class="badge badge-primary mr-2">{tag}</span>
      {/each}
    {/if}
  </div>
</div> -->

<article class="prose prose-xl">
  {@html marked(project.description)}
</article>
