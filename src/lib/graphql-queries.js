import { gql } from 'graphql-request'

export const authorsQuery = gql`
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

export const projectsQuery = gql`
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

export const projectQuery = gql`
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

export const postsQuery = gql`
  query Posts {
    posts {
      title
      slug
      date
      content
      tags
      coverImage {
        url
      }
      authors {
        name
      }
    }
  }
`

export const postQuery = gql`
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
