import { gql } from "@/__generated__";

export const contactBannerFragment = gql(`
    fragment ContactBannerFragment on ComponentSectionsContactBanner {
        id
        Theme {
            documentId
            color
            bgColor
        }
        columns: Column {
            id
            Text
            Label
            ShowWave
            Title {
                documentId
                Title
                HeadingLevel
            }
        }
    }`);
