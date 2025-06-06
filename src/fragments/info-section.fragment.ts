import { gql } from "@/__generated__";

export const infoSectionFragment = gql(`
    fragment InfoSectionFragment on ComponentSectionsInfoCardsTypeA {
        __typename
        id
        Text
        Theme {
            documentId
            color
            bgColor
            title
        }
        Title {
            documentId
            Title
            HeadingLevel
        }
        infoCard: Card {
            id
            Text
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
            CTA {
                label
                type
                url
                buttonTheme {
                    documentId
                    BackgrondColor
                    FontColor
                    OutlineColor
                }
            }
        }
        Button {
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
    }`);
