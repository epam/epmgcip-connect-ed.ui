import { gql } from "@/__generated__";

export const heroBannerFragment = gql(`
fragment HeroBannerFragment on ComponentSectionsHeroBanner {
  __typename
  id
  Image {
    data {
      attributes {
        url
      }
    }
  }
  CTA {
   id
    Label
    URL
    Type
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
  OverlayBlock {
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
