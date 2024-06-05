import React from "react";
import ReactDOM from "react-dom/client";
import { AppRotes } from "./rotes";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRotes />
    <GlobalStyle />
  </React.StrictMode>
);
