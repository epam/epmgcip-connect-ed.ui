import { gql } from "@/__generated__";

export const personelSectionFragment = gql(`
    fragment PersonelSectionFragment on ComponentSectionsPersonellCards {
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
        ShowWave
        personelCard: Card {
            id
            Title
            Text
            Image {
                altText
                image {
                    alternativeText
                    name
                    caption
                    url
                }
                isIcon
                newTab
            }
            Theme {
                documentId
                color
                bgColor
            }
        }
    }`);
