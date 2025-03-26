import { gql } from "@/__generated__";

export const articleCategoryFragment = gql(`
fragment NewArticles on ComponentSharedArticleCategory {
  articles {
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
}`);
