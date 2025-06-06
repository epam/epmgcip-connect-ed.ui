import { gql } from "@/__generated__";

export const richTextFragment = gql(`
fragment RichTextFragment on ComponentSectionsRichText {
  __typename
  id
  Content
}
`);
