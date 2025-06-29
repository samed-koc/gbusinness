"use client";

import { InputAdornment, Stack, TextField } from "@mui/material";
import { Facebook, Instagram, Pin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function SocialMedia({ value, setValue }) {
  return (
    <Stack direction={"column"} spacing={1}>
      <TextField
        label="Instagram"
        fullWidth
        size="small"
        value={value.socialMedia.instagram}
        onChange={(e) => setValue({ ...value, socialMedia: { ...value.socialMedia, instagram: e.target.value } })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Instagram size={18} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Facebook"
        fullWidth
        size="small"
        value={value.socialMedia.facebook}
        onChange={(e) => setValue({ ...value, socialMedia: { ...value.socialMedia, facebook: e.target.value } })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Facebook size={18} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Whatsapp"
        fullWidth
        size="small"
        value={value.socialMedia.pinterest}
        onChange={(e) => setValue({ ...value, socialMedia: { ...value.socialMedia, whatsapp: e.target.value } })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaWhatsapp  size={18} />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
