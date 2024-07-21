import { gql } from "@/__generated__";

export const imageBannerFragment = gql(`
fragment ImageBannerFragment on ComponentSectionsImageBanner {
  __typename
  id
  image {
    data {
      attributes {
        url
      }
    }
  }
  bgColor
  card {
    cardHeading
    cardDescription
    cardColor
    cardBgColor
    linkColor
    linkBgColor
    linkText
    linkUrl
    linkTitle
    linkNewTab
    linkIcon {
      data {
        attributes {
          url
        }
      }
    }
  }
}`);
