import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async req => {
  const slug = req.params.slug
  try {
    const query = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          slug
          date
          content
          tags
          content
          coverImage {
            url
          }
          authors {
            name
          }
        }
      }
    `
    const variables = { slug }
    const { post } = await client.request(query, variables)

    return {
      status: 200,
      body: { post },
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: 'There was a server error.' },
    }
  }
}
