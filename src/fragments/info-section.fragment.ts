import { gql } from "@/__generated__";

export const infoSectionFragment = gql(`
fragment InfoSectionFragment on ComponentSectionsInfoCardsTypeA {
  __typename
  id
  Text
  Theme {
    data {
      attributes {
        color
        bgColor
        title
      }
    }
  }
  Title {
    data {
      attributes {
        Title
        HeadingLevel
      }
    }
  }
  infoCard: Card {
    id
    Text
    Image {
      data {
        attributes {
          url
        }
      }
    }
    Title {
      data {
        attributes {
          Title
          HeadingLevel
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
    CTA {
      data {
        attributes {
          label
          type
          url
          buttonTheme {
            data {
              attributes {
                BackgrondColor
                FontColor
                OutlineColor
              }
            }
          }
        }
      }
    }
  }
  Button {
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
}`);
