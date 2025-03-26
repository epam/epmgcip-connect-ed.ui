import { gql } from "@/__generated__";

export const partnersSectionFragment = gql(`
fragment PartnersSectionFragment on ComponentSectionsCarousel {
  id
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
  Elements {
    id
    Name
    Image {
      data {
        attributes {
          name
          alternativeText
          caption
          url
        }
      }
    }
    AltText
    IsIcon
    URL
    Open
  }
}`);
