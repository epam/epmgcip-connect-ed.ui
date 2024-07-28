import { gql } from "@/__generated__";

export const GET_PAGES_DATA = gql(`
query GetPage1Data(
  $slug: StringFilterInput
  $locale: I18NLocaleCode
  $page: Int!
  $pageSize: Int!
) {
  pages(filters: { slug: $slug }, locale: $locale) {
    data {
      attributes {
        label
        slug
        pageSections {
          ...RichTextFragment
          ...HeroBannerFragment
          ...InfoSectionFragment
          ...ImageBannerFragment
          ...ProjectsSectionFragment
          ...NewsSectionFragment
          ...SecondaryBannerFragment
          ...WaveBannerFragment
          ...CategorizedNewsFragment
        }
      }
    }
  }
}
`);
