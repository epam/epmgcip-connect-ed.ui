import { gql } from "@/__generated__";

export const heroBannerFragment = gql(`
    fragment HeroBannerFragment on ComponentSectionsHeroBanner {
        __typename
        id
        Image {
            url
        }
        CTA {
            id
            Label
            URL
            Type
            ButtonTheme {
                documentId
                BackgrondColor
                OutlineColor
                FontColor
            }
        }
        OverlayBlock {
            id
            Text
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
