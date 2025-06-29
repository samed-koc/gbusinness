"use client";

import { InputAdornment, TextField, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { Coins, Percent } from "lucide-react";

export default function CouponValue({ value, setValue }) {
  const t = useTranslations();
  const theme = useTheme();

  return (
    <TextField
      label={
        value.type === "percentage"
          ? t("coupons.percentage")
          : t("coupons.amount")
      }
      value={value.value}
      onChange={(e) => setValue({ ...value, value: e.target.value })}
      fullWidth
      required
      type="number"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {value.type === "percentage" ? (
                <Percent size={14} color={theme.palette.text.secondary} />
              ) : (
                <Coins size={14} color={theme.palette.text.secondary} />
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
