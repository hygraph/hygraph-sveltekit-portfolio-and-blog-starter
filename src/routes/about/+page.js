import { client } from '$lib/graphql-client'
import { authorsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async () => {
  await fetchSiteMetadata()

  const { authors } = await client.request(authorsQuery)

  return {
    authors,
  }
}
