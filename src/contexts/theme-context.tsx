import React, { useEffect, useState, createContext, useContext } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {

  const [isDark, setDark] = useState<boolean>(true);

  const toggleTheme = () => {
    if (!isDark) {
      setDark(true);
      window.sessionStorage.setItem("isDarkTheme", "false");
    } else {
      setDark(false);
      window.sessionStorage.setItem("isDarkTheme", "true");
    }

    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const isDarkTheme = window.sessionStorage.getItem("isDarkTheme") || "false";
    
    if (isDarkTheme) {
        setDark(isDarkTheme === "true");

      if (isDarkTheme === "true") {
        document.body.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}