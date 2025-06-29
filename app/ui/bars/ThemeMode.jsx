"use client";

import { useSettings } from "@/app/context/ThemeContext";
import { Button, Stack, Tooltip } from "@mui/material";
import BoxWithLabel from "../components/BoxWithLabel";
import { useTranslations } from "next-intl";

export default function ThemeMode() {
  const { selectedTheme, toggleLight, toggleDark } = useSettings();

  const t = useTranslations();

  const buttonStyle = {
    width: "100%",
    padding: 2,
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center",
    aspectRatio: "1/1",
    maxWidth: "70px",
  };

  return (
    <BoxWithLabel label={t && t('theme.theme')}>
      <Stack direction={"row"} spacing={1} justifyContent={"space-around"}>
        <Tooltip title={t('theme.light')}>
          <Button
            onClick={toggleLight}
            sx={{
              backgroundImage: "url('../../../assets/img/svg/day.svg')",
              filter: selectedTheme === "dark" && "grayscale(0.9)",
              ...buttonStyle,
            }}
          ></Button>
        </Tooltip>
        <Tooltip title={t('theme.dark')}>
          <Button
            onClick={toggleDark}
            sx={{
              backgroundImage: "url('../../../assets/img/svg/night.svg')",
              filter: selectedTheme === "light" && "grayscale(0.9)",
              ...buttonStyle,
            }}
          ></Button>
        </Tooltip>
      </Stack>
    </BoxWithLabel>
  );
}
