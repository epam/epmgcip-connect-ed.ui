import { gql } from "@/__generated__";

export const categorizedNewsFragment = gql(`
fragment CategorizedNewsFragment on ComponentSectionsColumnsWithTabs {
  __typename
  id
  Tabs {
    data {
      id
      attributes {
        TabTheme {
          Color
#          BgColor
#          BorderColor
#          ActiveColor
#          ActiveBgColor
#          ActiveBorderColor
        }
        TabCardTheme {
          Color
          BgColor
          LinkColor
          id
        }
        CTA {
          data {
            id  
            attributes {
              label
              type
              url
              buttonTheme {
                data {
                  attributes {
                    BackgrondColor
                    OutlineColor
                    FontColor
                  }
                }
              }
            }
          }
        }
        Tabs {
          id
          Label
          Description
          Articles(pagination: { page: $page, pageSize: $pageSize }) {
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
  MaxCardsToDisplay
}`);
