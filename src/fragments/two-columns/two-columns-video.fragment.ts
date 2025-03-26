import { gql } from "@/__generated__";

export const twoColumnsVideoFragment = gql(`
fragment TwoColumnsVideoFragment on ComponentSharedVideo {
  id
  altText
  video {
    data {
      attributes {
        name
        alternativeText
        caption
        url
      }
    }
  }
  cover {
    data {
      attributes {
        name
        alternativeText
        caption
        url
      }
    }
  }
}`);
