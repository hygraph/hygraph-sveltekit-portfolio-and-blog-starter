import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async (req, res) => {
  try {
    const query = gql`
      query Projects {
        projects {
          name
          slug
          description
          tags
          demo
          sourceCode
          image {
            url
          }
        }
      }
    `
    const { projects } = await client.request(query)
    return {
      status: 200,
      body: projects,
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
