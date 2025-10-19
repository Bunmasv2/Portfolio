"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
    lang: Language
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    toggleLanguage: () => { },
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<"vi" | "en">(
        (localStorage.getItem("lang") as "vi" | "en") || "en"
    );

    const toggleLanguage = () => {
        const newLang = lang === "vi" ? "en" : "vi";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("lang") as "vi" | "en";
        if (savedLang) setLang(savedLang);
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
