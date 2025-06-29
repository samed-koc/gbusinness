"use client";

import { InputAdornment, TextField, useTheme } from "@mui/material";
import { Coins } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function MinPurchaceAmount({ value, setValue }) {
  const t = useTranslations();
  const theme = useTheme();
  return (
    <TextField
      label={t("coupons.minPurchaceAmount")}
      fullWidth
      type="number"
      value={value.minPurchaceAmount}
      onChange={(e) => setValue({ ...value, minPurchaceAmount: e.target.value })}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Coins size={14} color={theme.palette.text.secondary} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
