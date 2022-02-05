<script context="module">
  import {
    authorsStore,
    fetchAuthors,
    fetchSocials,
    socialsStore,
  } from '$stores/site-metadata'
  import FacebookIcon from './facebook-icon.svelte'
  import TwitterIcon from './twitter-icon.svelte'
  import YouTubeIcon from './you-tube-icon.svelte'

  fetchAuthors()
  fetchSocials()
</script>

<script>
  const { twitterUrl, youTubeUrl, facebookUrl } = $socialsStore
  const { name: AuthorName } = $authorsStore
</script>

<footer
  class="p-10 footer bg-primary text-primary-content footer-center"
>
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/projects">Portfolio</a>
    <a class="link link-hover" href="/posts">Blog</a>
    <a class="link link-hover" href="/about">About</a>
  </div>
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href={twitterUrl}>
        <TwitterIcon />
      </a>
      <a href={youTubeUrl}>
        <YouTubeIcon />
      </a>
      <a href={facebookUrl}>
        <FacebookIcon />
      </a>
    </div>
  </div>
  <div>
    <p>
      Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
      {AuthorName}
    </p>
  </div>
</footer>
