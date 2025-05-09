import { gql } from "@/__generated__";

export const GET_PAGE_DATA = gql(`
    query GetPageData($id: ID!, $page: Int!, $pageSize: Int!, $locale: I18NLocaleCode, $limit: Int!) {
        page(documentId: $id, locale: $locale) {
            Slug
            Title
            locale
            PageSections {
                ...RichTextFragment
                ...DataGraphFragment
                ...HeroBannerFragment
                ...InfoSectionFragment
                ...ImageBannerFragment
                ...ProjectsSectionFragment
                ...PartnersSectionFragment
                ...PersonelSectionFragment
                ...NewsSectionFragment
                ...SecondaryBannerFragment
                ...WaveBannerFragment
                ...TimelineSectionFragment
                ...TestimonialsSectionFragment
                ...TwoColumnsFragment
                ...ExpandableSectionFragment
                ...ContactBannerFragment
                ...SubscriptionFormFragment
                ...GetInTouchFragment
                ...CategorizedNewsFragment
            }
        }
    }
`);
