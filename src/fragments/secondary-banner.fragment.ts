import { gql } from "@/__generated__";

export const secondaryBannerFragment = gql(`
fragment SecondaryBannerFragment on ComponentSectionsSecondaryBanner {
  name
  title {
    text
    position
    level
  }
  text
  secondaryBannerBackgroundColor: backgroundColor
  secondaryBannerCover: image {
    image {
      data {
        attributes {
          url
        }
      }
    }
    altText
    url
    isIcon
    newTab
  }
  cta1 {
    label
    type
      url
    color
    bgColor
  }
  cta2 {
    label
    type
      url
    color
    bgColor
  }
}`);
