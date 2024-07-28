"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "@/contexts/ThemeProvider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="h-11 fixed top-0 w-full z-50 px-4 md:px-8 lg:px-16 p-0 bg-white dark:bg-slateDark-2 border-b border-gray-300 dark:border-slateDark-5">
      <div className="flex flex-row justify-between mx-auto h-11 max-w-6xl items-center">
        <Link className="font-bold text-xl" href="/">
          <Image
            src="/images/logo.png"
            width={36}
            height={36}
            alt="Logo ViewPoint"
          />
        </Link>
        <IconButton variant="soft" onClick={toggleDarkMode}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </div>
    </header>
  );
};

export default Navbar;
