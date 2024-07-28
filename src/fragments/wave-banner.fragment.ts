import { gql } from "@/__generated__";

export const waveBannerFragment = gql(`
fragment WaveBannerFragment on ComponentSectionsWaveBanner {
  name
  image {
    image {
      data {
        attributes {
          url
        }
      }
    }
    altText
    isIcon
    newTab
  }
  isLargeImage
  title {
    text
    position
    level
  }
  text
  cta {
    label
    type
    url
    color
    bgColor
  }
  backgroundColor
  isTextBox
}`);
