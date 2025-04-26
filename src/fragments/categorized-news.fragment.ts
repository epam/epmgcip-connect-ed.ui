import { gql } from "@/__generated__";

export const categorizedNewsFragment = gql(`
    fragment CategorizedNewsFragment on ComponentSectionsColumnsWithTabs {
        __typename
        id
        Tabs {
            TabTheme {
                Color
                #          BgColor
                #          BorderColor
                #          ActiveColor
                #          ActiveBgColor
                #          ActiveBorderColor
            }
            TabCardTheme {
                Color
                BgColor
                LinkColor
                id
            }
            CTA {
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
            Tabs {
                id
                Label
                Description
                Articles(pagination: { page: $page, pageSize: $pageSize }) {
                    slug
                    title
                    excerpt
                    featuredImage {
                        url
                    }
                }
            }
        }
        MaxCardsToDisplay
    }`);
