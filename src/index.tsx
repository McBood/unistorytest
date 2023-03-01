import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DAppProvider } from "@usedapp/core";
import { config } from "./config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
