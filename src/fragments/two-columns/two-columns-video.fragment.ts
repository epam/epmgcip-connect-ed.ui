import { gql } from "@/__generated__";

export const twoColumnsVideoFragment = gql(`
    fragment TwoColumnsVideoFragment on ComponentSharedVideo {
        id
        altText
        video {
            name
            alternativeText
            caption
            url
        }
        cover {
            name
            alternativeText
            caption
            url
        }
    }`);
