import { gql } from "@/__generated__";

export const GET_NEWS_BY_CATEGORY = gql(`
query GetNewsByCategory($category: String!, $page: Int!, $pageSize: Int!, $locale: I18NLocaleCode) {
  articles(
    filters: {  slug: { in: [$category] } }
    pagination: { page: $page, pageSize: $pageSize }
    locale: $locale
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
