import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async () => {
  try {
    const query = gql`
      query GetProjectMetadatas {
        projectMetadatas {
          name
          siteUrl
          description
        }
      }
    `
    const { projectMetadatas } = await client.request(query)

    return {
      status: 200,
      body: projectMetadatas[0],
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
