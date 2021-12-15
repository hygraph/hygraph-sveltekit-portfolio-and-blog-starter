import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async (req, res) => {
  try {
    const query = gql`
      query Author {
        authors {
          name
          intro
          bio
          slug
          picture {
            url
          }
        }
      }
    `
    const { authors } = await client.request(query)
    return {
      status: 200,
      body: authors,
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
