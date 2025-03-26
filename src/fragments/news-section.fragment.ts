import { gql } from "@/__generated__";

export const newsSectionFragment = gql(`
fragment NewsSectionFragment on ComponentSectionsColumns {
  __typename
  id
  Heading {
    id
    Alignment
    Level
    Title {
      data {
        attributes {
          Title
          HeadingLevel
        }
      }
    }
  }
  CTA {
    Label
    Type
    URL
    ButtonTheme {
      data {
        attributes {
          BackgrondColor
          OutlineColor
          FontColor
        }
      }
    }
  }
  Articles {
    data {
      attributes {
        slug
        title
        excerpt
        content
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
  Theme {
    data {
      attributes {
        color
        bgColor
        title
      }
    }
  }
  ShowWave
}`);
