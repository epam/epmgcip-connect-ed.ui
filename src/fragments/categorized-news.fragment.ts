import { gql } from "@/__generated__";

export const categorizedNewsFragment = gql(`
fragment CategorizedNewsFragment on ComponentSectionsColumnsWithTabs {
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
}`);
