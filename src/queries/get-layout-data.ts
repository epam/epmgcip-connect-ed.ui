import { gql } from "@/__generated__";

export const GET_LAYOUT_DATA = gql(`
query GetLayoutData {
  pages {
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
  header {
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
  footer {
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
