<script context="module">
  export const load = async ({ fetch }) => {
    const req = await fetch('/authors.json')
    if (req.ok) {
      const authors = await req.json()
      return {
        props: {
          authors,
        },
      }
    }
  }
</script>

<script>
  import { marked } from 'marked'
  export let authors
  const {
    name,
    intro,
    bio,
    picture: { url },
  } = authors[0]
</script>

<svelte:head>
  <title>My Portfolio project | About {name}</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>

<div class="flex mb-40 items-end">
  <div class="mr-6">
    <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
    <p class="text-xl mb-4">{intro}</p>
  </div>

  <img class="mask mask-squircle h-48" src={url} alt={name} />
</div>

<article div class="prose prose-lg">
  {@html marked(bio)}
</article>
