import React from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/app.component.tsx";
import { client } from "@/utils/apollo-client.ts";
import { getApplicationRoot } from "@/utils/get-application-root.ts";
import "./styles/index.scss";

ReactDOM.createRoot(getApplicationRoot()).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
