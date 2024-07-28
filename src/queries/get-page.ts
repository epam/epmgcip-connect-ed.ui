import { gql } from "@/__generated__";

export const GET_PAGE_DATA = gql(`
query GetPageData($id: ID, $page: Int!, $pageSize: Int!, $locale: I18NLocaleCode) {
  page(id: $id, locale: $locale) {
    data {
      attributes {
        label
        slug
        locale
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
