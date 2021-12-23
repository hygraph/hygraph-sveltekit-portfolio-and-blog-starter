<script>
  import ThemeSelect from './theme-select.svelte'
</script>

<div
  class="navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10"
>
  <div class="flex-1 px-2 mx-2">
    <a class="text-lg font-bold" href="/"> Portfolio and Blog </a>
  </div>

  <div class="dropdown dropdown-left lg:hidden">
    <div tabindex="0" class="m-1 btn">Links</div>
    <ul
      tabindex="0"
      class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
    >
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Portfolio
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
        Blog
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
    </ul>
  </div>

  <div class="flex-none hidden px-2 mx-2 lg:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Portfolio
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
        Blog
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
      <div class="px-4">
        <ThemeSelect />
      </div>
    </div>
  </div>
</div>
