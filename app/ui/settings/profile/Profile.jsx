"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Breadcrumb from "../../components/Breadcrumb";
import React from "react";
import UploadImage from "./UploadImage";
import { uploadImage } from "@/app/utils/uploadIMage";
import StoreInformations from "./StoreInformations";
import { Instagram, Facebook, Youtube } from "lucide-react";
import SocialMedia from "./SocialMedia";

export default function Profile() {
  const t = useTranslations();
  const breadcrumb = [
    {
      label: "dashboard",
      link: "/dashboard",
    },
    {
      label: "storeInformation",
      link: "/settings/profile",
    },
  ];

  const [imageSrc, setImageSrc] = React.useState(null);

  const [value, setValue] = React.useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    country: "Germany",
    city: "",
    zipcode: "",
    taxNumber: "",
    socialMedia: {
      instagram: "",
      facebook: "",
      whatsapp: "",
    },
  });

  const handleImageChange = (img) => {
    const res = uploadImage(img);
    if (res) setImageSrc(res);
  };

  const handleImageUpload = () => {
    //console.log(imageSrc);
  };
  return (
    <>
      <Breadcrumb array={breadcrumb} />
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Card p={2}>
            <CardHeader
              title={t("profile.logo")}
              subheader={t("profile.updateLogo")}
            />
            <CardContent>
              <Stack
                direction={"column"}
                spacing={2}
                alignItems={"center"}
                sx={{ my: 2 }}
              >
                <UploadImage
                  width={150}
                  height={120}
                  src={imageSrc}
                  onChange={handleImageChange}
                />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleImageUpload}
                >
                  {t("general.upload")}
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card p={2}>
            <CardHeader subheader={t("profile.socialMedia")} />
            <CardContent>
              <SocialMedia value={value} setValue={setValue} />
            </CardContent>
          </Card>
        </Stack>
        <Card p={2} sx={{ width: { xs: "100%", md: "70%" } }}>
          <CardHeader
            title={t("menus.storeInformation")}
            subheader={t("profile.updateInfo")}
          />
          <CardContent>
            <StoreInformations value={value} setValue={setValue} />
            <Stack direction={"row"} justifyContent={"flex-end"} p={1}>
              <Button
                variant="contained"
                onClick={() => {
                  console.log(value);
                }}
              >
                {t("general.update")}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}
