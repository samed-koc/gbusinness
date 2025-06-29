'use client';

import { InputAdornment, TextField, useTheme } from "@mui/material";
import { Coins } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function MaxDiscountAmount({value, setValue}) {

    const theme = useTheme();
    const t = useTranslations();

    return (
        <TextField
            label={t("coupons.maxDiscountAmount")}
            fullWidth
            type="number"
            value={value.maxDiscountAmount}
            onChange={(e) => setValue({ ...value, maxDiscountAmount: e.target.value })}
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