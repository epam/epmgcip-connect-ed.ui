import { gql } from "@/__generated__";

export const GET_PAGES_DATA = gql(`
    query GetPage1Data(
        $filters: PageFiltersInput
        $locale: I18NLocaleCode
        $page: Int!
        $pageSize: Int!
    ) {
        pages(filters: $filters, locale: $locale) {
            Title
            Slug
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
