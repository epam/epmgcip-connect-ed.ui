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
            title
            column {
                ...TwoColumnsChartFragment
                ...TwoColumnsRichTextFragment
                ...TwoColumnsImageFragment
                ...TwoColumnsVideoFragment
            }
        }
    }`);
