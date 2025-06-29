"use client";

import { Stack, Tooltip, IconButton } from "@mui/material";
import BoxWithLabel from "../components/BoxWithLabel";
import { languages } from "@/app/config/languages";
import { useTranslations } from "next-intl";
import { useSettings } from "@/app/context/ThemeContext";

export default function Language() {
  
    const { lang, toggleLang } = useSettings();
    const t = useTranslations();

  const buttonStyle = {
    padding: 2,
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <BoxWithLabel label={t('general.language')}>
      <Stack
        direction={"row"}
        spacing={1}
        justifyContent={"space-around"}
        mt={0.5}
      >
        {languages.map((l) => (
          <Tooltip title={l.name} key={l.code}>
            <IconButton
              onClick={() => toggleLang(l.code)}
              size="large"
              sx={{
                backgroundImage: `url('../../../assets/img/flag/${l.flag}')`,
                ...buttonStyle,
                filter: lang !== l.code && "opacity(0.5)",
              }}
            ></IconButton>
          </Tooltip>
        ))}
      </Stack>
    </BoxWithLabel>
  );
}
