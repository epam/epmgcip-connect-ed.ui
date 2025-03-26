import { gql } from "@/__generated__";

export const waysToDonateFragment = gql(`
    fragment WaysToDonateFragment on ComponentSectionsWaysToDonate {
        Card {
          id
          Title
          Text
          Link {
            data {
              attributes {
                label
                type
                url
                buttonTheme {
                  data {
                    attributes {
                      BackgrondColor
                      OutlineColor
                      FontColor
                    }
                  }
                }
              }
            }
          }
          qrCodeLink
        }
        # Tabs should be added
        Theme {
          data {
            attributes {
              color
              bgColor
            }  
          }  
        }
        Title
        id
    }`);
