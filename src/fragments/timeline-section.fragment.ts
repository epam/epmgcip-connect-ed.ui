import { gql } from "@/__generated__";

export const timelineSectionFragment = gql(`
fragment TimelineSectionFragment on ComponentSectionsTimeline {
  id
  Heading {
    id
    Level
    Alignment
    Title {
      data {
        attributes {
          Title
          HeadingLevel
        }
      }
    }
  }
  timelineCard: Card {
    id
    Text
    Title {
      data {
        attributes {
          Title
          HeadingLevel
        }
      }
    }
    Image {
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
    Theme {
      data {
        attributes {
          color
          bgColor
        }
      }
    }
  }
  Theme {
    data {
      attributes {
        color
        bgColor
      }
    }
  }
  ShowWave
}`);
