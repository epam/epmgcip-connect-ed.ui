import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app.component.tsx";
import { getApplicationRoot } from "@/utils/get-application-root.ts";
import "./styles/index.scss";

ReactDOM.createRoot(getApplicationRoot()).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
