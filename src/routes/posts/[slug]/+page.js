import { client } from '$lib/graphql-client'
import { postQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async ({ params }) => {
  await fetchSiteMetadata()

  const { slug } = params
  const variables = { slug }
  const { post } = await client.request(postQuery, variables)

  return {
    post,
  }
}
