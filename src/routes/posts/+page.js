import { client } from '$lib/graphql-client'
import { postsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async () => {
  await fetchSiteMetadata()

  const { posts } = await client.request(postsQuery)

  return {
    posts,
  }
}
