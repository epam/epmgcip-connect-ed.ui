import { gql } from "@/__generated__";

export const projectsSectionFragment = gql(`
fragment ProjectsSectionFragment on ComponentSectionsBlocksGrid {
  __typename
  id
  heading
  theme {
    color
    bgColor
  }
  block {
    id
    heading
    description
    color
    bgColor
    image {
      data {
        attributes {
          url
        }
      }
    }
    linkUrl
    linkText
    linkTitle
    linkNewTab
    linkIcon {
      data {
        attributes {
          url
        }
      }
    }
    linkColor
    linkBgColor
  }
}`);
