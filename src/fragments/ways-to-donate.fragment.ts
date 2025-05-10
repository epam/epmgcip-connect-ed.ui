import { gql } from "@/__generated__";

export const waysToDonateFragment = gql(`
    fragment WaysToDonateFragment on ComponentSectionsWaysToDonate {
        TabTheme {
            ActiveBgColor
            ActiveBorderColor
            ActiveColor
            BgColor
            BorderColor
            Color
        }
        heading: Title {
            id
            Alignment
            Level
            Title {
                HeadingLevel
                Title
                documentId
            }
        }
        Tabs {
            Title {
                documentId
                Title
                HeadingLevel
            }
            Label
            Description
            documentId
            content {
                ... on ComponentSharedCard {
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
            }
        }
        Theme {
            color
            bgColor
        }
    }`);
