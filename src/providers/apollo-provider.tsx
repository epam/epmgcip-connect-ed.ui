"use client";

// Links
import { PropsWithChildren } from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
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
              // TODO: check merge after the integration
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
