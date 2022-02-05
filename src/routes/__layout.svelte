<script>
  import Footer from '$components/footer.svelte'
  import Navbar from '$components/navbar.svelte'
  import {
    fetchAuthors,
    fetchSiteMetadata,
    fetchSocials,
  } from '$stores/site-metadata'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  fetchSiteMetadata()
  fetchSocials()
  fetchAuthors()

  onMount(async () => {
    themeChange(false)
  })
</script>

<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
  <slot />
</main>
<Footer />
