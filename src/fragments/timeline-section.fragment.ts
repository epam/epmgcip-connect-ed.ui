import { gql } from "@/__generated__";

export const timelineSectionFragment = gql(`
    fragment TimelineSectionFragment on ComponentSectionsTimeline {
        id
        Heading {
            id
            Level
            Alignment
            Title {
                documentId
                Title
                HeadingLevel
            }
        }
        timelineCard: Card {
            id
            Text
            Title {
                documentId
                Title
                HeadingLevel
            }
            Image {
                image {
                    alternativeText
                    caption
                    url
                }
                altText
                isIcon
                url
                newTab
            }
            Theme {
                documentId
                color
                bgColor
            }
        }
        Theme {
            documentId
            color
            bgColor
        }
        ShowWave
    }`);
