import { gql } from "@/__generated__";

export const subscriptionFormFragment = gql(`
    fragment SubscriptionFormFragment on ComponentSectionsEmailForm {
        id
        Text
        URL
        Title {
            documentId
            Title
            HeadingLevel
        }
    }`);
