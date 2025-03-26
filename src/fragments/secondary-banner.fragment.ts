import { gql } from "@/__generated__";

export const secondaryBannerFragment = gql(`
fragment SecondaryBannerFragment on ComponentSectionsSecondaryBanner {
  Name
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
  Text
  Theme {
    data {
      attributes {
        color
        bgColor
      }
    }
  }
  bannerImage: Image {
    id
    Name
    AltText
    IsIcon
    URL
    Open
  }
  CTA1 {
    id
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
  CTA2 {
    id
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
