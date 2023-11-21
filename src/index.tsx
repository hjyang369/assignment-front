import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import Router from "./router";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
