import { gql } from "@/__generated__";

export const personelSectionFragment = gql(`
fragment PersonelSectionFragment on ComponentSectionsPersonellCards {
  id
  heading: Title {
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
  ShowWave
  personelCard: Card {
    id
    Title
    Text
    Image {
      data {
        attributes {
          altText
          image {
            data {
              id
              attributes {
                alternativeText
                name
                caption
                url
              }
            }
          }
          isIcon
          newTab
        }
      }
    }
    Theme {
      data {
        id
        attributes {
          color
          bgColor
        }
      }
    }
  }
}`);
