"use client";

import Image from "next/image";
import LogoWhite from "../../../public/assets/img/logo/logoWhite.svg";
import LogoBlack from "../../../public/assets/img/logo/logoBlack.svg";
import { useSettings } from "@/app/context/ThemeContext";

export default function Logo() {
  const { selectedTheme } = useSettings();

  return (
    <Image
      src={selectedTheme === "dark" ? LogoWhite : LogoBlack}
      alt="logo"
      width={100}
      height={50}
      className="logo"
      priority={true}
    />
  );
}
