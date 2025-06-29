"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
} from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb";
import { useTranslations } from "next-intl";
import CouponType from "./Type";
import React from "react";
import CouponValue from "./Value";
import MinPurchaceAmount from "./MinPurchaceAmount";
import MaxDiscountAmount from "./MaxDiscountAmount";
import dayjs from "dayjs";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import UsageLimit from "./UsageLimit";
import UsageLimitPerCustomer from "./UsageLimitPerCustomer";
import Code from "./Code";

export default function Create() {
  const t = useTranslations();

  const breadcrumbs = [
    {
      label: "dashboard",
      link: "/dashboard",
    },
    {
      label: "coupons",
      link: "/coupons",
    },
    {
      label: "create",
      link: "/coupons/create",
    },
  ];

  const date = dayjs();

  const [codeType, setCodeType] = React.useState("only");

  const [value, setValue] = React.useState({
    type: "percentage",
    value: "",
    minPurchaceAmount: "",
    maxDiscountAmount: "",
    startDate: date && date,
    endDate: null,
    usageLimit: 1,
    usageLimitPerCustomer: 1,
    code: "",
  });

  const handleSubmit = () => {
    console.log(value);
  };
  return (
    <>
      <Breadcrumb array={breadcrumbs} />
      <Card sx={{ minHeight: "100px", padding: 2 }}>
        <CardHeader
          title={t("menus.coupons")}
          subheader={t("coupons.subheader")}
        />
        <CardContent>
          <Stack spacing={3}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              width={"100%"}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <CouponType value={value} setValue={setValue} />
              </Box>
              <CouponValue value={value} setValue={setValue} />
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              width={"100%"}
            >
              <MinPurchaceAmount value={value} setValue={setValue} />
              <MaxDiscountAmount value={value} setValue={setValue} />
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              width={"100%"}
            >
              <StartDate value={value} setValue={setValue} />
              <EndDate value={value} setValue={setValue} />
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              width={"100%"}
            >
              <UsageLimit
                value={value}
                setValue={setValue}
                codeType={codeType}
              />
              <UsageLimitPerCustomer
                value={value}
                setValue={setValue}
                codeType={codeType}
              />
            </Stack>
            <Code
              value={value}
              setValue={setValue}
              codeType={codeType}
              setCodeType={setCodeType}
            />
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                sx={{ width: "fit-content" }}
                disabled={!value.code}
                size="large"
                onClick={handleSubmit}
              >
                {t("menus.create")}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
