# Hygraph SvelteKit Portfolio and Blog Starter

> Minimalist Developer Portfolio and Blog built with SvelteKit,
> Tailwind, daisyUI, and deployed to Vercel.

[![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/77e3a126472d443bad40b9e4cac85243?name=Developer%20Portfolio%20%26%20Blog)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hygraph/hygraph-sveltekit-portfolio-and-blog-starter&env=VITE_HYGRAPH_ENDPOINT)

## The stack

This is an example project generated with the Hygraph Developer
Portfolio and Blog starter.

- **[Hygraph](https://hygraph.com)**: Manage projects and blog posts.
- **[SvelteKit](https://kit.svelte.dev/)**: A powerful framework that
  lets us query data and use endpoints for server side data.
- **[Vercel](https://www.vercel.com/)**: For an intuitive Git based
  workflow with seamless publishing.

## How to use

1. Clone the repository and install the project dependencies

```
npx degit Hygraph/hygraph-sveltekit-portfolio-and-blog-starter#main portfolio
cd portfolio
pnpm i
```

2. Provide your Hygraph project keys

In order to use this starter, you'll need to have created a new
Hygraph project using our Portfolio Template. You can clone the
project using
[this link](https://app.hygraph.com/clone/77e3a126472d443bad40b9e4cac85243?name=Developer%20Portfolio%20%26%20Blog).

```bash
cp sample.env .env
```

Inside of your newly created `.env` file, you need to add your project
endpoint to the `VITE_HYGRAPH_ENDPOINT` variable. You can find it on
`Project settings` -> `API Access` -> `Content API`.

3. Start building 🎉

```
pnpm dev
```
