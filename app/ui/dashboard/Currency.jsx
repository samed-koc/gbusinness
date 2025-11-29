"use client";

import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Euro, DollarSign } from "lucide-react";
import { splitToTwo } from "@/app/utils/splitToTwo";
import CurrencySkeleton from "../skeletons/CurrencySkeleton";

export default function Currency() {
  const [currency, setCurrency] = React.useState();

  React.useEffect(() => {
    async function getCurrency() {
      const response = await fetch(
        `https://api.collectapi.com/economy/allCurrency`,
        {
          headers: {
            "content-type": "application/json",
            authorization: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
          },
        }
      );
      const data = await response.json();
      setCurrency(data.result);
    }

    getCurrency();
  }, []);

  return currency ? (
    <Stack direction={"column"} spacing={2}>
      <Card sx={{ p: 2 }}>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Euro size={40} color="#0077b6" />
          <Stack direction={"row"} spacing={1} alignItems={"flex-end"}>
            <Typography variant="h4">
              {currency[1].buyingstr && splitToTwo(currency[1].buyingstr)}
            </Typography>
            <Typography variant="h6">TL</Typography>
          </Stack>
        </Stack>
      </Card>
      <Card sx={{ p: 2 }}>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <DollarSign size={40} color="#2b9348" />
          <Stack direction={"row"} spacing={1} alignItems={"flex-end"}>
            <Typography variant="h4">
              {currency[0].buyingstr && splitToTwo(currency[0].buyingstr)}
            </Typography>
            <Typography variant="h6">TL</Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  ) : (
    <CurrencySkeleton />
  );
}
