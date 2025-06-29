'use client';

// system
import { useSettings } from "../context/ThemeContext";

export const themeVariables = () => {

    const { selectedTheme } = useSettings();

    if (selectedTheme === "light") {
      return {
        background: {
          default: "#f5f5f5",
          paper: "#fffcf2",
        },
        primary: {
          main: "#00a76f",
          contrastText: "#c8fad6",
          light: "#c8fad6"
        },
        secondary: {
          main: "#8e33ff",
          contrastText: "#efd6ff",
        },
        error: {
          main: "#b71d18",
          contrastText: "#ffe9d5",
        },
        warning: {
          main: "#ffe9d5",
          contrastText: "#fff5cc",
        },
        info: {
          main: "#fff5cc",
          contrastText: "#cafdf5",
        },
        success: {
          main: "#22c55e",
          contrastText: "#d3fcd2",
        },
      };
    } else {
      return {
        background: {
          default: "#141a21",
          paper: "#1c252e",
        },
        primary: {
          main: "#00a76f",
          contrastText: "#c8fad6",
        },
        secondary: {
          main: "#8e33ff",
          contrastText: "#efd6ff",
        },
        error: {
          main: "#b71d18",
          contrastText: "#ffe9d5",
        },
        warning: {
          main: "#ffe9d5",
          contrastText: "#fff5cc",
        },
        info: {
          main: "#fff5cc",
          contrastText: "#cafdf5",
        },
        success: {
          main: "#22c55e",
          contrastText: "#d3fcd2",
        },
      };
    }
  };