"use client";

import { MenuItem, Stack, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import countries from "world-countries";

export default function StoreInformations({ value, setValue }) {
  const t = useTranslations();

  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <TextField
          label={t("profile.name")}
          fullWidth
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <TextField
          label={t("profile.email")}
          type="email"
          fullWidth
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <TextField
          label={t("profile.phone")}
          fullWidth
          value={value.phone}
          onChange={(e) => setValue({ ...value, phone: e.target.value })}
        />
        <TextField
          label={t("profile.website")}
          type="url"
          fullWidth
          value={value.website}
          onChange={(e) => setValue({ ...value, website: e.target.value })}
        />
      </Stack>
      <TextField
        multiline
        rows={2}
        label={t("profile.address")}
        fullWidth
        value={value.address}
        onChange={(e) => setValue({ ...value, address: e.target.value })}
      />
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <TextField
          label={t("profile.city")}
          fullWidth
          value={value.city}
          onChange={(e) => setValue({ ...value, city: e.target.value })}
        />
        <TextField
          label={t("profile.zipcode")}
          fullWidth
          value={value.zipcode}
          onChange={(e) => setValue({ ...value, zipcode: e.target.value })}
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        {countries && countries.length > 0 && (
          <TextField
            select
            label={t("profile.country")}
            fullWidth
            value={value.country}
            onChange={(e) => setValue({ ...value, country: e.target.value })}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.name.common}>
                {country.name.common}
              </MenuItem>
            ))}
          </TextField>
        )}
        <TextField
          label={t("profile.taxNumber")}
          fullWidth
          value={value.taxNumber}
          onChange={(e) => setValue({ ...value, taxNumber: e.target.value })}
        />
      </Stack>
    </Stack>
  );
}
