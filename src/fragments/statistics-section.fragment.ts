import { gql } from "@/__generated__";

export const statisticsSectionFragment = gql(`
    fragment StatisticsSection on ComponentSectionsStatistics {
        __typename
        Summary
        Theme {
            documentId
            title
            bgColor
            color
        }
        StatisticsCards {
            theme {
                documentId
                bgColor
                color
            }
            title
            description
            value
        }
        Title {
            HeadingLevel
            Title
        }
        ShowWave
        CTA {
            Type
            Label
            URL
            ButtonTheme {
                BackgrondColor
                FontColor
                OutlineColor
            }
        }
    }`);
