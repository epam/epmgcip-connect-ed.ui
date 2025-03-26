import { gql } from "@/__generated__";

export const imageBannerFragment = gql(`
fragment ImageBannerFragment on ComponentSectionsImageBanner {
  __typename
  id
  imageCard: Card {
    id
    Text
    Label
    URL
    LinkTitle
    Open
    Title {
      data {
        id
        attributes {
          Title
          HeadingLevel
        }
      }
    }
  }
  Image {
    data {
      id
      attributes {
        url
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
}`);
