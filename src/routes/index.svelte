<script context="module">
  export const load = async ({ fetch }) => {
    const [projectsReq, authorsReq] = await Promise.all([
      fetch('/projects.json'),
      fetch('/authors.json'),
    ])
    if (projectsReq.ok && authorsReq.ok) {
      const projects = await projectsReq.json()
      const authors = await authorsReq.json()
      return {
        props: {
          projects,
          authors,
        },
      }
    }
  }
</script>

<script>
  import ProjectCard from '$lib/components/project-card.svelte'

  export let projects
  export let authors
  const {
    name,
    intro,
    picture: { url },
  } = authors[0]
</script>

<svelte:head>
  <title>My Portfolio project</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">
  Welcome to my Portfolio
</h1>

<div class="flex mb-40 items-end">
  <div class="mr-6">
    <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
    <p class="text-xl mb-4">{intro}</p>
  </div>

  <img class="mask mask-squircle h-48" src={url} alt={name} />
</div>

<div
  class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
  {#each projects as { name, slug, description, image }, index}
    <ProjectCard
      {name}
      {description}
      url={image[0].url}
      {index}
      {slug}
    />
  {/each}
</div>
