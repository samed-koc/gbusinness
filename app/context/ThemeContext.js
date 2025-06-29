"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [lang, setLang] = useState("tr");

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMPanel");
    const storedLang = localStorage.getItem("langMPanel");
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMPanel", selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    localStorage.setItem("langMPanel", lang);
  }, [lang]);

  const toggleTheme = () => {
    setSelectedTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLight = () => {
    setSelectedTheme("light");
  };

  const toggleDark = () => {
    setSelectedTheme("dark");
  };

  const toggleLang= (lang) => {
    if(lang === "tr"){
      setLang("tr");
    }else if(lang === "en"){
      setLang("en");
    }else{
      setLang("de");
    }
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, lang, toggleTheme, toggleLight, toggleDark, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useSettings = () => useContext(ThemeContext);
