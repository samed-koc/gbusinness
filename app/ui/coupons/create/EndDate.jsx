"use client";

import { Box, Chip, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";
import BoxWithLabel from "../../components/BoxWithLabel";

export default function EndDate({ value, setValue }) {
  const t = useTranslations();

  const oneYear = dayjs().add(1, "year");
  const oneMonth = dayjs().add(1, "month");
  const threeMonth = dayjs().add(3, "month");
  const sixMonth = dayjs().add(6, "month");

  return (
      <Box
        sx={{
          width: "100%",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack
            direction={"row"}
            spacing={1}
            display={{ xs: "none", md: "flex" }}
            sx={{ padding: { xs: 0, md: 1 } }}
          >
            <Chip
              label={`+3 ${t("general.month")}`}
              onClick={() => setValue({ ...value, endDate: threeMonth })}
            />
            <Chip
              label={`+6 ${t("general.month")}`}
              onClick={() => setValue({ ...value, endDate: sixMonth })}
            />
            <Chip
              label={`+1 ${t("general.year")}`}
              onClick={() => setValue({ ...value, endDate: oneYear })}
            />
          </Stack>
          <DatePicker
            label={t("coupons.endDate")}
            value={value.endDate}
            onChange={(newValue) => {
              setValue({ ...value, endDate: newValue });
            }}
            disablePast
            sx={{ width: "100%" }}
          />
        </Stack>
      </Box>
  );
}
