import { client } from '$lib/graphql-client'
import { authorsQuery, projectsQuery } from '$lib/graphql-queries'
import {
  fetchAuthors,
  fetchSiteMetadata,
} from '$stores/site-metadata'

export const load = async () => {
  await fetchAuthors()
  await fetchSiteMetadata()

  const [authorRes, projectsRes] = await Promise.all([
    client.request(authorsQuery),
    client.request(projectsQuery),
  ])
  const { authors } = authorRes
  const { projects } = projectsRes

  return {
    projects,
    authors,
  }
}
