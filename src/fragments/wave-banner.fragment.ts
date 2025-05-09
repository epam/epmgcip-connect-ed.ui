import { gql } from "@/__generated__";

export const waveBannerFragment = gql(`
    fragment WaveBannerFragment on ComponentSectionsWaveBanner {
        Name
        Image {
            id
            Name
            AltText
            IsIcon
            URL
            Open
            Image {
                url
                alternativeText
            }
        }
        IsLargeImage
        Heading: Title {
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
        BackgroundColor
        IsTextBox
    }`);
