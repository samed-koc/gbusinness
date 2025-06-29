'use client';

import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function UsageLimit({value,setValue, codeType}) {

    const t = useTranslations();
    return (
        <TextField
            label={t("coupons.usageLimit")}
            fullWidth
            disabled={codeType === "multiple"}
            type="number"
            value={codeType === "multiple" ? 1 : value.usageLimit}
            onChange={(e) => setValue({ ...value, usageLimit: e.target.value })}
        />
    );
}