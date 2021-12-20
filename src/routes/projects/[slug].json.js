import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async req => {
  const { slug } = req.params
  try {
    const query = gql`
      query Project($slug: String!) {
        project(where: { slug: $slug }) {
          name
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
    const variables = { slug }
    const { project } = await client.request(query, variables)
    return {
      status: 200,
      body: { project },
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
