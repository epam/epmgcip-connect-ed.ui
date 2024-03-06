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
        Logo {
          altText
          isIcon
          roundedCorners
          url
          newTab
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        CTA {
          type
          url
          label
          color
          bgColor
        }
        topStripe {
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
                  url,
                  alternativeText
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
      }
    }
  }
}
`);
