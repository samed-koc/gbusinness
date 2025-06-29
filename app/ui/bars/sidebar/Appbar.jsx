"use client";

import { Stack, Toolbar, IconButton, Tooltip } from "@mui/material";
import { Menu, LogOut } from "lucide-react";
import { drawerWidth } from "@/app/config/config";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

export default function Appbar({ open, handleDrawerOpen }) {
  const theme = useTheme();

  const t = useTranslations();

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <Menu color={theme.palette.text.primary} />
          </IconButton>
        {/* App bar content */}
        <Stack direction={"row"} justifyContent={"flex-end"} width={"100%"}>
          <IconButton color="inherit">
            <Tooltip title={t('general.logout')}>
                <LogOut color={theme.palette.error.main} />
            </Tooltip>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
