import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md transition-all"
        >
            {theme === "dark" ? "🌞" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
