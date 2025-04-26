import { gql } from "@/__generated__";

export const waysToDonateFragment = gql(`
    fragment WaysToDonateFragment on ComponentSectionsWaysToDonate {
        Card {
            id
            Title
            Text
            Link {
                label
                type
                url
                buttonTheme {
                    documentId
                    BackgrondColor
                    OutlineColor
                    FontColor
                }
            }
            qrCodeLink
        }
        # Tabs should be added
        Theme {
            documentId
            color
            bgColor
        }
        Title
        id
    }`);
