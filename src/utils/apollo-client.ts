import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: {
          ArticleCategory: {
            fields: {
              articles: {
                keyArgs: false,
              },
            },
          },
          ArticleCategoryEntity: {
            fields: {
              attributes: {
                keyArgs: false,
                //TODO: check merge after the integration
                merge(existingAttributes, incomingAttributes) {
                  return {
                    ...existingAttributes,
                    ...incomingAttributes,
                    articles: {
                      ...existingAttributes?.articles,
                      data: [
                        ...(existingAttributes?.articles?.data ?? []),
                        ...(incomingAttributes?.articles?.data ?? []),
                      ],
                    },
                  };
                },
              },
            },
          },
        },
      }),
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
      }),
    }),
);
