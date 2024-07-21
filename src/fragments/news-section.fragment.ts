import { gql } from "@/__generated__";

export const newsSectionFragment = gql(`
fragment NewsSectionFragment on ComponentSectionsColumns {
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
}`);
