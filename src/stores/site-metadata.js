import { client } from '$lib/graphql-client'
import {
  authorsQuery,
  siteMetadataQuery,
  socialsQuery,
} from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const socialsStore = writable({})
export const authorsStore = writable({})
export const siteMetadataStore = writable({})

const fetchSocials = async () => {
  const { socials } = await client.request(socialsQuery)

  return socials[0]
}

socialsStore.set(await fetchSocials())

const fetchAuthors = async () => {
  const { authors } = await client.request(authorsQuery)

  return authors[0]
}

authorsStore.set(await fetchAuthors())

const fetchSiteMetadata = async () => {
  const { projectMetadatas } = await client.request(siteMetadataQuery)

  return projectMetadatas[0]
}

siteMetadataStore.set(await fetchSiteMetadata())
