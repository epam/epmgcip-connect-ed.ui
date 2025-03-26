import { gql } from "@/__generated__";

export const twoColumnsFragment = gql(`
fragment TwoColumnsFragment on ComponentSectionsTwoColumns {
  id
  Ratio
  Theme {
    data {
      attributes {
        color
        bgColor
      }
    }
  }
  Column {
    data {
      id
      attributes {
        column {
          ...TwoColumnsChartFragment
          ...TwoColumnsRichTextFragment
          ...TwoColumnsImageFragment
          ...TwoColumnsVideoFragment
        }
      }
    }
  }
}`);
