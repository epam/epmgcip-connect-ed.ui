import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache({}),
  //TODO: replace with env file
  uri: "https://cdkz-admin-staging-service-g7ihm2zefq-uc.a.run.app/graphql", // `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/graphql`,
});
