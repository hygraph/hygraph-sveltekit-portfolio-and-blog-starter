import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    alias: {
      $components: path.resolve('./src/lib/components'),
      $lib: path.resolve('./src/lib'),
      $stores: path.resolve('./src/stores'),
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
