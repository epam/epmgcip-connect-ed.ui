import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
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
});

export const client = new ApolloClient({
  cache,
  //TODO: replace with env file
  uri: "https://cdkz-admin-staging-service-g7ihm2zefq-uc.a.run.app/graphql", // `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/graphql`,
});
