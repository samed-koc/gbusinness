'use client';

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/de';
import 'dayjs/locale/tr';
import { useSettings } from "../context/ThemeContext";

export default function DateLocalizationProvider({children}) {

  const {lang} = useSettings();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={lang}>
      {children}
    </LocalizationProvider>
  );
}
