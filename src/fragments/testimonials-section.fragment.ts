import { gql } from "@/__generated__";

export const testimonialsSectionFragment = gql(`
fragment TestimonialsSectionFragment on ComponentSectionsTestimonials {
  id
  title
  card {
    id
    text
    title
    icon {
     data {
      attributes {
        alternativeText
        name
        caption
        url
      }
    } 
    }
    author
    theme {
      data {
        attributes {
          color
          bgColor
        }
      }
    }
  }
  theme {
    data {
      attributes {
        color
        bgColor
      }
    }
  }
  showWave
}`);
