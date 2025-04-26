import { gql } from "@/__generated__";

export const twoColumnsFragment = gql(`
    fragment TwoColumnsFragment on ComponentSectionsTwoColumns {
        id
        Ratio
        Theme {
            documentId
            color
            bgColor
        }
        Column {
            column {
                ...TwoColumnsChartFragment
                ...TwoColumnsRichTextFragment
                ...TwoColumnsImageFragment
                ...TwoColumnsVideoFragment
            }
        }
    }`);
