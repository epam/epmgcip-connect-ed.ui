import { gql } from "@/__generated__";

export const secondaryBannerFragment = gql(`
    fragment SecondaryBannerFragment on ComponentSectionsSecondaryBanner {
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
        Text
        Theme {
            documentId
            color
            bgColor
        }
        bannerImage: Image {
            id
            Name
            AltText
            IsIcon
            URL
            Open
        }
        CTA1 {
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
        CTA2 {
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
    }`);
