"use client";

import { Box, Typography, useTheme } from "@mui/material";

export default function BoxWithLabel({ label, children }) {

    const theme = useTheme();
  return (
    <Box sx={{ border: 1, borderColor: "divider", pt: 2, pl: 1, pr: 1, pb: 1, borderRadius: 1 }}>
      <Typography
        variant="caption"
        sx={{ position: "absolute", top: 5, left: 30, px: 1, background: theme.palette.background.default, borderRadius: 1 }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}
