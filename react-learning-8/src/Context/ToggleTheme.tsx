"use client";

import React, { createContext, useContext, useState } from "react";

const TglThemeContext = createContext({});

const ToggleTheme = ({ children }: { children: React.ReactNode }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

  return (
    <TglThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
        {children}
    </TglThemeContext.Provider>
  )
};

export default ToggleTheme;

export const ThemeContext = () => useContext(TglThemeContext)