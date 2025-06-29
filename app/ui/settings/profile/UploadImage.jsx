"use client";

import { useTheme, Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import UploadImg from "../../../../public/assets/img/svg/upload.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function UploadImage({ width, height, src, onChange }) {
  const theme = useTheme();
  const t = useTranslations();

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  };

  return (
    <ButtonBase
      component="label"
      role={undefined}
      tabIndex={-1}
      aria-label="Avatar image"
      sx={{
        borderRadius: "40px",
        width: "100%",
        height: "auto",
        "&:has(:focus-visible)": {
          outline: "2px solid",
          outlineOffset: "2px",
        },
      }}
    >
      {/* <Avatar sx={{ width: width, height: height }} alt="Upload new avatar" src={avatarSrc} /> */}
      {src ? (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <img src={src} alt="Upload new avatar"  style={imageStyle} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: `2px dashed ${theme.palette.divider}`,
            borderRadius: "20px",
            flexDirection: "column",
            gap: 1,
            p: 2
          }}
        >
          <Image src={UploadImg} alt="Upload Image" width={width} height={height} />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>{t("general.uploadImage")}</Typography>
        </Box>
      )}
      <input
        type="file"
        accept="image/*"
        style={{
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        }}
        onChange={(e) => onChange(e.target.files[0])}
      />
    </ButtonBase>
  );
}
