'use client'

import { Button, Stack } from "@mui/material"
import { useTranslations } from "next-intl";

export default function Buttons ({setEmail, setPassword, email, password}) {

    const t = useTranslations();

    const clear = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <Stack direction={"row"} spacing={2} width={"100%"}>
            <Button variant="contained" fullWidth disabled={!email || !password}>{t('login.login')}</Button>
            <Button variant="outlined" fullWidth onClick={clear}>{t('login.clear')}</Button>
        </Stack>
    )
}