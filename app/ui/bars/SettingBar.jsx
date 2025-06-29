"use client";

import * as React from "react";

// mui
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/material";

// icons
import { Settings } from "lucide-react";

// system
import ThemeMode from "./ThemeMode";
import { useSettings } from "@/app/context/ThemeContext";
import Language from "../components/Language";

// third-party
import { useTranslations } from "next-intl";

export default function SettingBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const theme = useTheme();
  const { selectedTheme } = useSettings();
  const t = useTranslations();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundImage: `url(${selectedTheme === "dark" && "../../../assets/img/svg/bgNight.svg"})`,
        backgroundSize: "cover",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Typography variant="body1" sx={{ px: 3, py: 1 }}>
        {t("general.settings")}
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={<ThemeMode />} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Language />} />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="flex-end"
      position="fixed"
      right={0}
      top={250}
      zIndex={99999}
    >
      <Button
        onClick={toggleDrawer("right", true)}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "20px 0 0 20px",
          padding: "8px",
          minWidth: "48px",
        }}
      >
        <Settings color={theme.palette.primary.contrastText} />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        sx={{ zIndex: 99999 }}
      >
        {list("right")}
      </SwipeableDrawer>
    </Stack>
  );
}
