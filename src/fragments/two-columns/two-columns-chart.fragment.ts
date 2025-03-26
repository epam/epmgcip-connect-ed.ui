import { gql } from "@/__generated__";

export const twoColumnsChartFragment = gql(`
fragment TwoColumnsChartFragment on ComponentSectionsChart {
  id
  Outline
  URL
  Title {
    data {
      attributes {
        Title
        HeadingLevel
      }
    }
  }
}
`);
