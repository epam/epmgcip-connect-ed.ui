import { gql } from "@/__generated__";

export const GET_PAGE_DATA = gql(`
query GetPageData($id: ID) {
  page(id: $id) {
    data {
      attributes {
        label
        slug
        pageSections {
          ... on ComponentSectionsRichText {
            __typename
            content
          }
          ... on ComponentSectionsHeroBanner {
            __typename
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
          ... on ComponentSectionsInfoCardsTypeA {
            __typename
            theme {
              color
              bgColor
            }
            heading
            description
            cta {
              color
              bgColor
              url
              label
              type
            }
            cards {
              id
              heading
              description
              color
              bgColor
              borderColor
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentSectionsImageBanner {
            __typename
            image {
              data {
                attributes {
                  url
                }
              }
            }
            bgColor
            card {
              cardHeading
              cardDescription
              cardColor
              cardBgColor
              linkColor
              linkBgColor
              linkText
              linkUrl
              linkTitle
              linkNewTab
              linkIcon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentSectionsBlocksGrid {
            __typename
            heading
            theme {
              color
              bgColor
            }
            block {
              id
              heading
              description
              color
              bgColor
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              linkUrl
              linkText
              linkTitle
              linkNewTab
              linkIcon {
                data {
                  attributes {
                    url
                  }
                }
              }
              linkColor
              linkBgColor
            }
          }
        }
      }
    }
  }
}
`);
