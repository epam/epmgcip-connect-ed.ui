import { gql } from "@/__generated__";

export const articleCategoryFragment = gql(`
    fragment NewArticles on ComponentSharedArticleCategory {
        articles {
            slug
            title
            excerpt
            featuredImage {
                url
            }
        }
    }`);
