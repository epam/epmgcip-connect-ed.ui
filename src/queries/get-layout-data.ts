import { gql } from "@/__generated__";

export const GET_LAYOUT_DATA = gql(`
query GetLayoutData($limit: Int, $locale: I18NLocaleCode) {
  pages(pagination: { limit: $limit }, locale: $locale) {
    data {
      id
      attributes {
        Slug
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
          AltText
          IsIcon
          URL
          Open
          Image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        cta {
          Type
          URL
          Label
          ButtonTheme {
            data {
              attributes {
                FontColor
                BackgrondColor
                OutlineColor
              }
            }
          }
        }
        stripe {
          SocialMedia {
            data {
              attributes {
                title
                text
                type
                url
                theme {
                  data {
                    attributes {
                      color
                      bgColor
                    }
                  }
                }
              }
            }
          }
          Theme {
            data {
              attributes {
                bgColor
                color
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
                    Slug
                    Title
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
          Color
          BgColor
        }
        socialMedias {
          data {
            attributes {
              text
              title
              type
              url
              theme {
                data {
                  attributes {
                    color
                    bgColor
                  }
                }
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
              Slug
              Title
            }
          }
        }
      }
    }
  }
}
`);
