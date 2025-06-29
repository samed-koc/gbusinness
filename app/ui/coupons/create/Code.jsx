"use client";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import voucher_codes from "voucher-code-generator";
import { Dices } from "lucide-react";

export default function Code({ value, setValue, codeType, setCodeType }) {
  const t = useTranslations();

  const [multipleNumber, setMultipleNumber] = React.useState(1);
  const [codeArray, setCodeArray] = React.useState([]);

  React.useEffect(() => {
    const code = voucher_codes.generate({
      length: 8,
      count: multipleNumber,
    });
    setCodeArray(code);
  }, [multipleNumber]);

  const handleGenerateRandomCode = () => {
    const code = voucher_codes.generate({
      length: 8,
      count: 1,
    });
    setValue({ ...value, code: code[0] });
  };

  return (
    <Stack direction={"column"} spacing={1}>
      <FormControl>
        <FormLabel id="coupon-code-type">{t("coupons.codeType")}</FormLabel>
        <RadioGroup
          aria-labelledby="coupon-code-type"
          name="coupon-code-type"
          row
          value={codeType}
          onChange={() => setCodeType(event.target.value)}
        >
          <FormControlLabel
            value="only"
            control={<Radio />}
            label={t("coupons.only")}
          />
          <FormControlLabel
            value="multiple"
            control={<Radio />}
            label={t("coupons.multiple")}
          />
        </RadioGroup>
      </FormControl>
      {codeType === "only" ? (
        <TextField
          label={t("coupons.code")}
          fullWidth
          value={value.code}
          onChange={(e) => setValue({ ...value, code: e.target.value })}
          slotProps={{
            input: {
              endAdornment: (
                <Tooltip title={t("coupons.random")}>
                  <IconButton
                    variant="contained"
                    onClick={handleGenerateRandomCode}
                  >
                    <Dices size={24} />
                  </IconButton>
                </Tooltip>
              ),
            },
          }}
        />
      ) : (
        <Stack direction={"row"} spacing={1} width={"100%"}>
          <Stack direction={"column"} spacing={1} width={"100%"}>
            <TextField
              label={t("general.piece")}
              fullWidth
              value={multipleNumber}
              type="number"
              size="small"
              onChange={(e) => {
                setMultipleNumber(e.target.value);
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ marginLeft: "5px !important" }}>
              {value.code.length > 0
                ? `${value.code.length} ${t("coupons.codeGenerated")}`
                : ""}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "50%" }}
            onClick={() => {
              setValue({ ...value, code: codeArray, usageLimitPerCustomer: 1 });
            }}
          >
            {t("general.apply")}
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
