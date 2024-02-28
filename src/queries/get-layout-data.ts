import { gql } from "@/__generated__";

export const GET_LAYOUT_DATA = gql(`
  query GetLayoutData {
    pages {
      data {
        attributes {
          slug
        }
      }
    }
    header {
      data {
        attributes {
          Logo {
            altText
            isIcon
            roundedCorners
            url
            newTab
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          CTA {
            type
            url
            color
            bgColor
            label
          }
          topStripe {
            color
            bgColor
            socialMedia {
              title
              url
              newTab
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          navigations {
            data {
              attributes {
                slug
                label
                description
                pages {
                  data {
                    attributes {
                      slug
                      label
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    footer {
      data {
        attributes {
          color
          bgColor
          socialMedia {
            title
            url
            newTab
            icon {
              data {
                attributes {
                  caption
                  url
                  previewUrl
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`);
