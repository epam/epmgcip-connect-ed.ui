import { gql } from "@/__generated__";

export const dataGraphFragment = gql(`
fragment DataGraphFragment on ComponentSectionsChart {
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
}`);
