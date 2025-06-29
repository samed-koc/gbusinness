"use client";

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function CouponType({value, setValue}) {

    const t = useTranslations();
  return (
    <FormControl>
      <FormLabel id="coupon-type">{t("coupons.type")}</FormLabel>
      <RadioGroup
        aria-labelledby="coupon-type"
        name="coupon-type"
        row
        value={value.type}
        onChange={() => setValue({ ...value, type: event.target.value })}
      >
        <FormControlLabel value="percentage" control={<Radio />} label={t("coupons.percentage")} />
        <FormControlLabel value="amount" control={<Radio />} label={t("coupons.amount")} />
      </RadioGroup>
    </FormControl>
  );
}
