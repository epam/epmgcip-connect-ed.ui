import { gql } from "@/__generated__";

export const GET_NEWS_BY_CATEGORY = gql(`
query GetNewsByCategory($category: String!, $page: Int!, $pageSize: Int!) {
  articles(
    filters: { article_category: { slug: { in: [$category] } } }
    pagination: { page: $page, pageSize: $pageSize }
  ) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        slug
        title
        excerpt
        featuredImage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`);
