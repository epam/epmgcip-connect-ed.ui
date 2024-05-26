import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

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
        uri: "https://cdkz-admin-staging-service-g7ihm2zefq-uc.a.run.app/graphql",
      }),
    }),
);

/*export const client = new ApolloClient({
  cache,
  //TODO: replace with env file
  uri: "https://cdkz-admin-staging-service-g7ihm2zefq-uc.a.run.app/graphql", // `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/graphql`,
});*/
