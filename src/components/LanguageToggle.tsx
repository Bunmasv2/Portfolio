"use client"

import React from "react"
import { useLanguage } from "../context/LanguageContext"

const LanguageToggle: React.FC = () => {
    const { lang, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md transition-all"
        >
            {lang === "vi" ? "🇻🇳" : "🇺🇸"}
        </button>
    )
}

export default LanguageToggle
