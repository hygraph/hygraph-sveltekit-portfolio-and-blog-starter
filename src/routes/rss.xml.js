import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'
import { get as meatdata } from './site-metadata.json.js'

export const get = async () => {
  const {
    body: { name, siteUrl },
  } = await meatdata()
  const query = gql`
    query Posts {
      posts {
        title
        slug
      }
    }
  `
  const { posts } = await client.request(query)
  const body = xml(posts, name, siteUrl)

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body,
  }
}

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
