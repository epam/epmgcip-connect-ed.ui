"use client";

// Links
import { PropsWithChildren } from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  SSRMultipartLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  });

  return new ApolloClient({
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
              // TODO: check merge after the integration
              merge(existingAttributes, incomingAttributes) {
                return {
                  ...existingAttributes,
                  ...incomingAttributes,
                  articles: [
                    ...(existingAttributes?.articles ?? []),
                    ...(incomingAttributes?.articles ?? []),
                  ],
                };
              },
            },
          },
        },
      },
    }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
