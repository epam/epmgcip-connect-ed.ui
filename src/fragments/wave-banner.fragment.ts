import { gql } from "@/__generated__";

export const waveBannerFragment = gql(`
fragment WaveBannerFragment on ComponentSectionsWaveBanner {
  Name
  Image {
    id
    Name
    AltText
    IsIcon
    URL
    Open
  }
  IsLargeImage
  Heading: Title {
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
  CTA {
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
  BackgroundColor
  IsTextBox
}`);
