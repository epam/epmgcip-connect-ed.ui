import { gql } from "@/__generated__";

export const newsSectionFragment = gql(`
    fragment NewsSectionFragment on ComponentSectionsColumns {
        __typename
        id
        Heading {
            id
            Alignment
            Level
            Title {
                documentId
                Title
                HeadingLevel
            }
        }
        CTA {
            Label
            Type
            URL
            ButtonTheme {
                documentId
                BackgrondColor
                OutlineColor
                FontColor
            }
        }
        Articles {
            slug
            title
            excerpt
            content
            featuredImage {
                url
            }
        }
        Theme {
            documentId
            color
            bgColor
            title
        }
        ShowWave
    }`);
