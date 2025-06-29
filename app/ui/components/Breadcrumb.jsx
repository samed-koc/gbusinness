"use client";

import { Breadcrumbs, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ array }) {
  const t = useTranslations();
  const lastItem = array[array.length - 1];
  const restItems = array.slice(0, array.length - 1);

  return (
    <Breadcrumbs aria-label="breadcrumb" mt={1} mb={2}>
      {restItems.map((item, index) => (
        <Link key={index} href={item.link}>
          {t(`menus.${item.label}`)}
        </Link>
      ))}
      <Typography color="text.primary">{t(`menus.${lastItem.label}`)}</Typography>
    </Breadcrumbs>
  );
}
