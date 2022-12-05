import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'
import { json } from '@sveltejs/kit'

const xml = (
  posts,
  name,
  siteUrl
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${name}</title>
    <link>${siteUrl}</link>
    <description>This is my portfolio!</description>
    ${posts
      .map(
        post =>
          `
        <item>
          <title>${post.title}</title>
          <description>This is my portfolio!</description>
          <link>${siteUrl}/posts/${post.slug}/</link>
          <pubDate>${new Date(post.date)}</pubDate>
          <content:encoded>${post.previewHtml}
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="${siteUrl}/posts/${post.slug}">
                  Keep reading
                </a>
              </strong>
            </div>
          </content:encoded>
        </item>
      `
      )
      .join('')}
  </channel>
</rss>`

export const GET = async () => {
  const query = gql`
    query Posts {
      projectMetadatas {
        name
        siteUrl
        description
      }
      posts {
        title
        slug
      }
    }
  `
  const { projectMetadatas, posts } = await client.request(query)
  const { name, siteUrl } = projectMetadatas[0]
  const body = xml(posts, name, siteUrl)

  return new Response(body, {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    },
  })
}
