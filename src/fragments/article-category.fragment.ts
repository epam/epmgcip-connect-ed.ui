import { gql } from "@/__generated__";

export const articleCategoryFragment = gql(`
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
