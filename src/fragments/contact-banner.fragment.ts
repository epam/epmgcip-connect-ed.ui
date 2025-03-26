import { gql } from "@/__generated__";

export const contactBannerFragment = gql(`
fragment ContactBannerFragment on ComponentSectionsContactBanner {
  id
  Theme {
    data {
      attributes {
        color
        bgColor
      }
    }
  }
  columns: Column {
    id
    Text
    Label
    ShowWave
    Title {
      data {
        attributes {
          Title
          HeadingLevel
        }
      }
    }
  }
}`);
