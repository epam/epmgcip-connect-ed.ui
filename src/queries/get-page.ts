import { gql } from "@/__generated__";

export const GET_PAGE_DATA = gql(`
query GetPageData($id: ID) {
  page(id: $id) {
    data {
      attributes {
        label
        slug
        pageSections {
          ... on ComponentSectionsHeroBanner {
            coverImage {
              data {
                attributes {
                  url
                }
              }
            }
            cta {
              label
              url
              type
              color
              bgColor
            }
            overlayBlock {
              title
              content
              color
              bgColor
            }
          }
        }
      }
    }
  }
}
`);
