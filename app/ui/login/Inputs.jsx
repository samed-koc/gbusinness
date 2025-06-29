"use client";

import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

// icons
import { KeyRound, UserRound, Eye, EyeClosed  } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Inputs({ email, setEmail, password, setPassword }) {
  const t = useTranslations();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack direction={"column"} spacing={2}>
      <TextField
        id="outlined-basic"
        label={t("general.email")}
        variant="outlined"
        type="email"
        value={email && email}
        onChange={(e) => setEmail(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <UserRound size={18} />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        id="outlined-basic"
        label={t("login.password")}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        value={password && password}
        onChange={(e) => setPassword(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <KeyRound size={18} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
}
