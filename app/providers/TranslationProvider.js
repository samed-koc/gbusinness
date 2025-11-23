"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState, useEffect } from "react";
import tr from "../../messages/tr.json";
import en from "../../messages/en.json";
import de from "../../messages/de.json";
import { useSettings } from "../context/ThemeContext";

export default function TranslationProvider({ children }) {

  const { lang } = useSettings();

  const [messages, setMessages] = useState(tr);

  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    setLanguage(lang);
  },[lang])

  useEffect(() => {
    if (language === "tr") {
      setMessages(tr);
    } else if (language === "en") {
      setMessages(en);
    } else {
      setMessages(de);
    }
  }, [language]);

  return (
    <NextIntlClientProvider messages={messages} locale={language} timeZone="Europe/Istanbul">
      {children}
    </NextIntlClientProvider>
  );
}
