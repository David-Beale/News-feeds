import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import { GlobalStyles } from "./GlobalStyles";

export default function Styling({ children }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
