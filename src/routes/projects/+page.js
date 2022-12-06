import { client } from '$lib/graphql-client'
import { projectsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async () => {
  await fetchSiteMetadata()

  const { projects } = await client.request(projectsQuery)

  return {
    projects,
  }
}
