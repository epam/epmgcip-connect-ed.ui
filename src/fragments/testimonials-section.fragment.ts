import { gql } from "@/__generated__";

export const testimonialsSectionFragment = gql(`
    fragment TestimonialsSectionFragment on ComponentSectionsTestimonials {
        id
        Title {
            documentId
            Title
            HeadingLevel
        }
        Card {
            id
            Text
            Title {
                documentId
                Title
                HeadingLevel
            }
            Icon {
                alternativeText
                name
                caption
                url
            }
            Author
            Theme {
                documentId
                color
                bgColor
            }
        }
        Theme {
            documentId
            color
            bgColor
        }
        ShowWave
    }`);
