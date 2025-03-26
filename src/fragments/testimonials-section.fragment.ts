import { gql } from "@/__generated__";

export const testimonialsSectionFragment = gql(`
fragment TestimonialsSectionFragment on ComponentSectionsTestimonials {
  id
  Title {
    data {
      attributes {
        Title
        HeadingLevel
      }
    }
  }
  Card {
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
    Icon {
      data {
        attributes {
          alternativeText
          name
          caption
          url
        }
      } 
    }
    Author
    Theme {
      data {
        attributes {
          color
          bgColor
        }
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
  ShowWave
}`);
