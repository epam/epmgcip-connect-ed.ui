import { gql } from "@/__generated__";

export const expandableSectionFragment = gql(`
    fragment ExpandableSectionFragment on ComponentSectionsAccordion {
        id
        heading: Title {
            id
            Level
            Alignment
            Title {
                documentId
                Title
                HeadingLevel
            }
        }
        ExpandLink {
            documentId
            title
            url
            theme {
                documentId
                bgColor
                color
            }
        }
        CollapseLink {
            documentId
            title
            url
            theme {
                documentId
                bgColor
                color
            }
        }
        Item {
            id
            Title
            LongDescription
            ShortDescription
            Button {
                label
                type
                buttonTheme {
                    documentId
                    BackgrondColor
                    FontColor
                    OutlineColor
                }
            }
        }
    }`);
