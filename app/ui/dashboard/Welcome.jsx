"use client";

import React from "react";
import { useSettings } from "@/app/context/ThemeContext";
import { dayName } from "@/app/utils/dayName";
import { monthName } from "@/app/utils/monthName";
import { Box, Stack, Typography } from "@mui/material";

export default function Welcome() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const today = date.getDay();

  const { lang } = useSettings();

  return (
    <Box
      sx={{
        width: "100%",
        height: "inherit",
        background:
          "linear-gradient(90deg,rgba(72, 42, 155, 1) 0%, rgba(87, 199, 133, 1) 100%, rgba(237, 221, 83, 1) 100%)",
        borderRadius: "10px",
        padding: 3,
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems={"center"} justifyContent={"space-between"} >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Typography variant="h2" sx={{ color: "white" }}>
            {day}
          </Typography>
          <Stack direction={"column"}>
            <Typography variant="h6" sx={{ color: "white" }}>
              {monthName(month, lang)}
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              {year}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="h4" sx={{ color: "white" }}>
          {dayName(today, lang)}
        </Typography>
      </Stack>
    </Box>
  );
}
