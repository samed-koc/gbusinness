"use client";

import React from "react";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { menuItems } from "@/app/config/menuItems";
import { Collapse, List, Tooltip, Typography } from "@mui/material";
import { ChevronDown, ChevronUp, CornerDownRight, Dot, MoveRight, Plus } from "lucide-react";

export default function MenuItems({ open }) {
  const t = useTranslations();
  const router = useRouter();

  const [openChild, setOpenChild] = React.useState(false);
  const [ind, setInd] = React.useState(-1);

  const handleClick = () => {
    setOpenChild(!openChild);
  };

  const handleRoute = (link) => {
    if (link) {
      router.push(link);
    }
  };

  const listItemButtonStyle = [
    {
      minHeight: 48,
      px: 2.5,
      mb: 1
    },
    open
      ? {
          justifyContent: "initial",
        }
      : {
          justifyContent: "center",
        },
  ];

  const listItemIconStyle = [
    {
      minWidth: 0,
      justifyContent: "center",
    },
    open
      ? {
          mr: 3,
        }
      : {
          mr: "auto",
        },
  ];

  const listItemTextStyle = [
    open
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
        },
  ];

  return (
    <>
      {menuItems.map((menu, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={{ display: "block" }}
          onClick={() => !menu.children && handleRoute(menu.link)}
        >
          {open ? (
            <>
              <ListItemButton
                sx={listItemButtonStyle}
                onClick={() => {
                  menu.children && handleClick();
                  setInd(index);
                }}
              >
                <ListItemIcon sx={listItemIconStyle}>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={t("menus." + menu.label)}
                  sx={listItemTextStyle}
                />
                {menu.children &&
                  (ind === index && openChild ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </ListItemButton>
              {menu.children &&
                menu.children.map((child, i) => (
                  <Collapse
                    in={ind === index && openChild}
                    timeout="auto"
                    unmountOnExit
                    key={i}
                  >
                    <List component="div" disablePadding>
                      <Link href={child.link}>
                        <ListItemButton
                          sx={{
                            pl: 4,
                            ml: 4.5
                          }}
                        >
                          <ListItemIcon>
                            {child.icon}
                          </ListItemIcon>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              fontWeight: 400,
                              ml: -4,
                            }}
                          >
                            {t("menus." + child.label)}
                          </Typography>
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                ))}
            </>
          ) : (
            <Tooltip title={t("menus." + menu.label)} placement="right-end">
              <ListItemButton sx={listItemButtonStyle}>
                <ListItemIcon sx={listItemIconStyle}>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={t("menus." + menu.label)}
                  sx={listItemTextStyle}
                />
              </ListItemButton>
            </Tooltip>
          )}
        </ListItem>
      ))}
    </>
  );
}
