import { gql } from "@/__generated__";

export const expandableSectionFragment = gql(`
fragment ExpandableSectionFragment on ComponentSectionsAccordion {
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
  ExpandLink {
    data {
      attributes {
        title
        url
        theme {
          data {
            attributes {
              bgColor
              color
            }
          }
        }
      }
    }
  }
  CollapseLink {
    data {
      attributes {
        title
        url
        theme {
          data {
            attributes {
              bgColor
              color
            }
          }
        }
      }
    }
  }
  Item {
    id
    Title
    LongDescription
    ShortDescription
    Button {
      data {
        attributes {
          label
          type
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
}`);
