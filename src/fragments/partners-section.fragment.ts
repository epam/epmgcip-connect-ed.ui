import { gql } from "@/__generated__";

export const partnersSectionFragment = gql(`
    fragment PartnersSectionFragment on ComponentSectionsCarousel {
        id
        Name
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
        CTA {
            id
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
        Elements {
            id
            Name
            Image {
                name
                alternativeText
                caption
                url
            }
            AltText
            IsIcon
            URL
            Open
        }
    }`);
