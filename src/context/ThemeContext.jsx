"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext =createContext();
const getFromLocalStorage = ()=>{
    if (typeof window !== "undefined") {
    // Default theme if localStorage is not available
    const value=localStorage.getItem("theme");
    return value || "light";}

    return "light"; // Fallback to light theme if localStorage is not available 
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    });

    const toggle =()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    }
    useEffect(() => {
     
            localStorage.setItem("theme", theme);
        
    }, [theme]);
    return<ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}