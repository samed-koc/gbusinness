"use client";

import { Card, CardActions, CardContent, CardHeader, Stack } from "@mui/material";
import Logo from "../components/Logo";
import { useTranslations } from "next-intl";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import React from "react";

export default function Login() {

    const t = useTranslations();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  return (
  <>
    <Stack
      direction={"row"}
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      >
      <Card sx={{ padding: 2, width: "100%", maxWidth: 400, margin: 2 }}>
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} my={2}>
            <Logo />
        </Stack>
        <CardHeader title={t('login.login')} />
        <CardContent>
            <Inputs email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </CardContent>
        <CardActions sx={{ marginBottom: 2}}>
            <Buttons setEmail={setEmail} setPassword={setPassword} email={email} password={password} />
        </CardActions>
      </Card>
    </Stack>
  </>
      
  );
}
