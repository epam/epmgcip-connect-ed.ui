import { gql } from "@/__generated__";

export const GET_LAYOUT_DATA = gql(`
    query GetLayoutData($limit: Int, $locale: I18NLocaleCode) {
        pages(pagination: { limit: $limit }, locale: $locale) {
            Slug
        }
        colorScheme {
            documentId
            white
            black
            background
            primary
            secondary
            tertiary
            quaternary
            quinary
        }
        header(locale: $locale) {
            logo {
                AltText
                IsIcon
                URL
                Open
                Image {
                    url
                    alternativeText
                }
            }
            cta {
                Type
                URL
                Label
                ButtonTheme {
                    documentId
                    FontColor
                    BackgrondColor
                    OutlineColor
                }
            }
            stripe {
                SocialMedia {
                    documentId
                    title
                    text
                    type
                    url
                    theme {
                        documentId
                        color
                        bgColor
                    }
                }
                Theme {
                    documentId
                    bgColor
                    color
                }
            }
            navigations {
                documentId
                slug
                label
                description
                pages {
                    Slug
                    Title
                }
            }
        }
        footer(locale: $locale) {
            theme {
                Color
                BgColor
            }
            socialMedias {
                documentId
                text
                title
                type
                url
                theme {
                    documentId
                    color
                    bgColor
                }
            }
            heading
            tradeMark
            rights
            navigation {
                documentId
                Slug
                Title
            }
        }
    }
`);
