import { gql } from "@/__generated__";

export const categorizedNewsFragment = gql(`
    fragment CategorizedNewsFragment on ComponentSectionsColumnsWithTabs {
        __typename
        Description
        Label
        MaxCardsToDisplay
        TabTheme {
            ActiveBgColor
            ActiveBorderColor
            ActiveColor
            BgColor
            BorderColor
            Color
        }
        Tabs {
            documentId
            Title {
                HeadingLevel
                Title
            }
            content {
                ... on ComponentSharedArticleCategory {
                    id
                    slug
                    label
                    description
                    articles {
                        content
                        documentId
                        excerpt
                        featuredImage {
                            alternativeText
                            caption
                            documentId
                            url
                        }
                        slug
                        theme {
                            title
                            documentId
                            color
                            bgColor
                        }
                        title
                        locale
                    }
                }
            }
            Label
            Description
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
        Theme {
            Color
            BgColor
        }
        id
    }`);
