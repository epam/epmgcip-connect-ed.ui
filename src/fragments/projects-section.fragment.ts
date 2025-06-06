import { gql } from "@/__generated__";

export const projectsSectionFragment = gql(`
    fragment ProjectsSectionFragment on ComponentSectionsBlocksGrid {
        __typename
        id
        blockHeading: Title
        Theme {
            documentId
            color
            bgColor
        }
        Block {
            id
            Text
            Label
            URL
            Open
            Image {
                url
            }
            Title {
                documentId
                Title
                HeadingLevel
            }
            Theme {
                documentId
                color
                bgColor
                title
            }
        }
    }`);
