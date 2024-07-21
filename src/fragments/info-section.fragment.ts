import { gql } from "@/__generated__";

export const infoSectionFragment = gql(`
fragment InfoSectionFragment on ComponentSectionsInfoCardsTypeA {
  __typename
  id
  theme {
    color
    bgColor
  }
  heading
  description
  cta {
    color
    bgColor
    url
    label
    type
  }
  cards {
    id
    heading
    description
    color
    bgColor
    borderColor
    image {
      data {
        attributes {
          url
        }
      }
    }
  }
}`);
