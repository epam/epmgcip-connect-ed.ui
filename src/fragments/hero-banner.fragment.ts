import { gql } from "@/__generated__";

export const heroBannerFragment = gql(`
fragment HeroBannerFragment on ComponentSectionsHeroBanner {
  __typename
  id
  coverImage {
    data {
      attributes {
        url
      }
    }
  }
  cta {
    label
    url
    type
    color
    bgColor
  }
  overlayBlock {
    title
    content
    color
    bgColor
  }
}`);
