import { gql } from "@/__generated__";

export const ARTICLE_CATEGORY_FRAGMENT = gql(`
fragment NewArticles on ArticleCategoryEntity {
  attributes {
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
  }
}`);
