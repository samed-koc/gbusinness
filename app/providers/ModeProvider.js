"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSettings } from "../context/ThemeContext";
import { themeVariables } from "../config/theme";

export default function ModeProvider({ children }) {

  const { selectedTheme } = useSettings();

  const theme = createTheme({
    palette: {
      mode: selectedTheme,
      ...themeVariables(),
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      htmlFontSize: 14,
      fontSize: 12,
      h1: {
        fontSize: "5rem"
      },
      h2: {
        fontSize: "3.25rem"
      },
      h3: {
        fontSize: "2.75rem"
      },
      h4: {
        fontSize: "2rem"
      },
      h5: {
        fontSize: "1.2rem"
      },
      h6: {
        fontSize: "1rem"
      },
      subtitle1: {
        fontSize: "0.9rem"
      },
      subtitle2: {
        fontSize: "0.8rem"
      },
      body1: {
        fontSize: "0.9rem"
      },
      body2: {
        fontSize: "0.8rem"
      },
      caption: {
        fontSize: "0.7rem"
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
      body2: {
        fontWeight: 600,
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
