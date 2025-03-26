import { gql } from "@/__generated__";

export const twoColumnsImageFragment = gql(`
fragment TwoColumnsImageFragment on ComponentSharedImage {
  id
  Name
  AltText
  IsIcon
  URL
  Open
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
}`);
