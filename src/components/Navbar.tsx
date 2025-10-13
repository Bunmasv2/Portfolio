"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
    const links = ["Home", "About", "Skills", "Projects", "certificates", "Contact"];
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Change navbar style when scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md
      ${scrolled ? "bg-white/80 dark:bg-gray-900/80 shadow-md py-3" : "bg-transparent py-4"}
      flex justify-between items-center px-6 md:px-12`}
        >
            {/* === Logo / Brand === */}
            <motion.h1
                whileHover={{ scale: 1.05 }}
                className="font-bold text-lg sm:text-xl text-primary dark:text-indigo-400 cursor-pointer tracking-tight"
            >
                Nguyễn Nguyễn Thái Bảo
            </motion.h1>

            {/* === Desktop Links === */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href={`#${link.toLowerCase()}`}
                            className="hover:text-primary dark:hover:text-indigo-400 transition-colors duration-200"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            {/* === Right Section (Theme + Menu) === */}
            <div className="flex items-center gap-3">
                <ThemeToggle />
                {/* Mobile menu icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* === Mobile Menu === */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md md:hidden"
                    >
                        <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 dark:text-gray-300">
                            {links.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-4 py-2 text-base hover:text-primary dark:hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
