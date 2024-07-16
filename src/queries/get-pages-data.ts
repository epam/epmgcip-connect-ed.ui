import { gql } from "@/__generated__";

export const GET_PAGES_DATA = gql(`
query GetPage1Data($slug: StringFilterInput, $page: Int!, $pageSize: Int!, $locale: I18NLocaleCode) {
  pages(filters: { slug: $slug }, locale: $locale) {
    data {
      attributes {
        label
        slug
        pageSections {
          ... on ComponentSectionsRichText {
            __typename
            id
            content
          }
          ... on ComponentSectionsHeroBanner {
            __typename
            id
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
            id
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
            id
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
            id
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
          ... on ComponentSectionsColumns {
            __typename
            id
            columnsHeading: heading {
              text
              position
            }
            theme {
              color
              bgColor
            }
            cta {
              label
              type
              url
              color
              bgColor
            }
            cards {
              cardColor: color
              cardBgColor: bgColor
              linkText
              linkColor
              article {
                data {
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
            showWave
          }
          ... on ComponentSectionsSecondaryBanner {
            name
            title {
              text
              position
              level
            }
            text
            backgroundColor
            secondaryBannerCover: image {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              altText
              url
              isIcon
              newTab
            }
            cta1 {
              label
              type
              url
              color
              bgColor
            }
            cta2 {
              label
              type
              url
              color
              bgColor
            }
          }
          ... on ComponentSectionsColumnsWithTabs {
            __typename
            id
            tabTheme {
              color
              bgColor
              borderColor
              activeColor
              activeBgColor
              activeBorderColor
            }
            tabCardTheme {
              color
              bgColor
              linkColor
            }
            maxCardsToDisplay
            cta {
              label
              type
              url
              color
              bgColor
            }
            tabs {
              data {
                id
                attributes {
                  slug
                  label
                  description
                  articles(pagination: { page: $page, pageSize: $pageSize }) {
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
              }
            }
          }
        }
      }
    }
  }
}
`);
