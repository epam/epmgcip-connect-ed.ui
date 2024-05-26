"use client";

// Links
import { PropsWithChildren } from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://cdkz-admin-staging-service-g7ihm2zefq-uc.a.run.app/graphql",
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
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
