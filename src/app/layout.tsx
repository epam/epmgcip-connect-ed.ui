import { PropsWithChildren } from "react";
import { ApolloProvider } from "@/providers/apollo-provider";
import "@/styles/index.scss";

// eslint-disable-next-line import/no-default-export,react/function-component-definition
export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="kz">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base href="/" />
        <title>Connect-ed</title>
      </head>
      <body>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
