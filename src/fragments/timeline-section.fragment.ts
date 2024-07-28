import { gql } from "@/__generated__";

export const timelineSectionFragment = gql(`
fragment TimelineSectionFragment on ComponentSectionsTimeline {
  id
  heading {
    id
    level
    text
    position
  }
  card {
    id
    text
    title
    image {
      data {
        attributes {
          image {
            data {
              attributes {
                alternativeText
                caption
                url
              }
            }
          }
          altText
          isIcon
          url
          newTab
        }
      }
    }
    theme {
      data {
        attributes {
          color
          bgColor
        }
      }
    }
  }
  showWave
}`);
