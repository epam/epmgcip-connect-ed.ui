import { gql } from "@/__generated__";

export const getInTouchFragment = gql(`
fragment GetInTouchFragment on ComponentSectionsGetInTouchForm {
  id
  Text
  ShowWave
  FormId      
  Title {
    data {
      attributes {
        Title
        HeadingLevel
      }
    }
  }
}`);
