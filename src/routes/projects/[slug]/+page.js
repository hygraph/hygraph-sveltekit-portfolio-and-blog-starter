import { client } from '$lib/graphql-client'
import { projectQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async ({ params }) => {
  await fetchSiteMetadata()

  const { slug } = params
  const variables = { slug }
  const { project } = await client.request(projectQuery, variables)

  return {
    project,
  }
}
