import { gql } from "@/__generated__";

export const imageBannerFragment = gql(`
    fragment ImageBannerFragment on ComponentSectionsImageBanner {
        __typename
        id
        imageCard: Card {
            id
            Text
            Label
            URL
            LinkTitle
            Open
            Title {
                documentId
                Title
                HeadingLevel
            }
        }
        Image {
            url
        }
        Theme {
            documentId
            color
            bgColor
        }
    }`);
