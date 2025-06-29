"use client";

import Currency from "@/app/ui/dashboard/Currency";
import News from "@/app/ui/dashboard/News";
import Weather from "@/app/ui/dashboard/Weather";
import Welcome from "@/app/ui/dashboard/Welcome";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      width={"100%"}
    >
      <Stack
        direction={"column"}
        spacing={2}
        width={"100%"}
      >
        <Welcome />
        <News />
      </Stack>
      <Stack direction={"column"} spacing={1} justifyContent={"space-between"}>
        <Weather />
        <Currency />
      </Stack>
    </Stack>
  );
}
