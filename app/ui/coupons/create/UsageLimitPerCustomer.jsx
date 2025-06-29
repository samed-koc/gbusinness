'use client';

import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function UsageLimitPerCustomer({value,setValue, codeType}) {

    const t = useTranslations();
    return (
        <TextField
            label={t("coupons.usageLimitPerCustomer")}
            fullWidth
            disabled={codeType === "multiple"}
            type="number"
            value={codeType === "multiple" ? 1 : value.usageLimitPerCustomer}
            onChange={(e) => setValue({ ...value, usageLimitPerCustomer: e.target.value })}
        />
    );
}