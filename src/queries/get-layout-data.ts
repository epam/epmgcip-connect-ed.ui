import { gql } from "@/__generated__";

export const GET_LAYOUT_DATA = gql(`
query GetLayoutData($limit: Int, $locale: I18NLocaleCode) {
  pages(pagination: { limit: $limit }, locale: $locale) {
    data {
      id
      attributes {
        slug
      }
    }
  }
  colorScheme {
    data {
      attributes {
        white
        black
        background
        primary
        secondary
        tertiary
        quaternary
        quinary
      }
    }
  }
  header(locale: $locale) {
    data {
      attributes {
        logo {
          altText
          isIcon
          url
          newTab
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        cta {
          type
          url
          label
          color
          bgColor
        }
        stripe {
          theme {
            color
            bgColor
          }
          socialMedia {
            title
            url
            newTab
            icon {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
        navigations {
          data {
            attributes {
              slug
              label
              description
              pages {
                data {
                  attributes {
                    slug
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  footer(locale: $locale) {
    data {
      attributes {
        theme {
          color
          bgColor
        }
        socialMedia {
          title
          url
          newTab
          icon {
            data {
              attributes {
                caption
                url
                previewUrl
                height
                width
              }
            }
          }
        }
        heading
        tradeMark
        rights
        navigation {
          data {
            attributes {
              slug
              label
            }
          }
        }
      }
    }
  }
}
`);
