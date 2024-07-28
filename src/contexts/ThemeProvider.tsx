"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "@radix-ui/themes";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  className?: string;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <body className={darkMode ? "dark " : "light" + className}>
        <Theme
          appearance={darkMode ? "dark" : "light"}
          accentColor="indigo"
          panelBackground="solid"
          scaling="100%"
          radius="small"
        >
          {children}
        </Theme>
      </body>
    </ThemeContext.Provider>
  );
};
