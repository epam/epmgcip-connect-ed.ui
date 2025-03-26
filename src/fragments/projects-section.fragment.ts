import { gql } from "@/__generated__";

export const projectsSectionFragment = gql(`
fragment ProjectsSectionFragment on ComponentSectionsBlocksGrid {
  __typename
  id
  blockHeading: Title
  Theme {
    data {
      id
      attributes {
        color
        bgColor
      }
    }
  }
  Block {
    id
    Text
    Label
    URL
    Open
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
  }
}`);
