"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { useTranslations } from "next-intl";
import React from "react";

export default function StartDate({ value, setValue }) {

  const t = useTranslations();
  return (
    <DatePicker
      label={t("coupons.startDate")}
      value={value.startDate}
      onChange={(newValue) => {
        setValue({ ...value, startDate: newValue });
      }}
      sx={{ width: "100%" }}
    />
  );
}
