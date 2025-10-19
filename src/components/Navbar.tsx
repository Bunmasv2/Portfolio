"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const translations = {
    en: {
        homePageLinks: [
            { name: "About", path: "#about" },
            { name: "Skills", path: "#skills" },
            { name: "Projects & Certificates", path: "/project" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "#contact" },
        ],
        projectPageLinks: [
            { name: "Home", path: "/" },
            { name: "Skills", path: "#skills" },
            { name: "Projects", path: "#projects" },
            { name: "Certificates", path: "#certificates" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "#contact" },
        ],
        defaultLinks: [
            { name: "Home", path: "/" },
            { name: "Projects & Certificates", path: "/project" },
            { name: "Blog", path: "/blog" },
        ],
    },
    vi: {
        homePageLinks: [
            { name: "Giới Thiệu", path: "#about" },
            { name: "Kỹ Năng", path: "#skills" },
            { name: "Dự Án & Chứng Chỉ", path: "/project" },
            { name: "Bài Viết", path: "/blog" },
            { name: "Liên Hệ", path: "#contact" },
        ],
        projectPageLinks: [
            { name: "Trang Chủ", path: "/" },
            { name: "Kỹ Năng", path: "#skills" },
            { name: "Dự Án", path: "#projects" },
            { name: "Chứng Chỉ", path: "#certificates" },
            { name: "Bài Viết", path: "/blog" },
            { name: "Liên Hệ", path: "#contact" },
        ],
        defaultLinks: [
            { name: "Trang Chủ", path: "/" },
            { name: "Dự Án & Chứng Chỉ", path: "/project" },
            { name: "Bài Viết", path: "/blog" },
        ],
    },
};

const Navbar: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // --- ĐỊNH NGHĨA CÁC NHÓM LINK CHO TỪNG TRANG ---

    // 1. Links cho Trang Chủ (/)
    const homePageLinks = [
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Projects & Certificates", path: "/project" }, // Link chuyển trang
        { name: "Blog", path: "/blog" },       // Link chuyển trang
        { name: "Contact", path: "#contact" },
    ];

    // 2. Links cho Trang Project (/project)
    const projectPageLinks = [
        { name: "Home", path: "/" },             // Link chuyển trang
        { name: "Skills", path: "#skills" },
        { name: "Projects", path: "#projects" },
        { name: "Certificates", path: "#certificates" },
        { name: "Blog", path: "/blog" },         // Link chuyển trang
        { name: "Contact", path: "#contact" },
    ];

    // 3. Links mặc định cho các trang còn lại (như /blog, /blog/detail)
    const defaultLinks = [
        { name: "Home", path: "/" },
        { name: "Projects & Certificates", path: "/project" },
        { name: "Blog", path: "/blog" },
    ];

    // --- LOGIC CHỌN NHÓM LINK ĐỂ HIỂN THỊ ---

    let linksToDisplay;
    if (location.pathname === "/") {
        linksToDisplay = t.homePageLinks;
    } else if (location.pathname === "/project") {
        linksToDisplay = t.projectPageLinks;
    } else {
        linksToDisplay = t.defaultLinks;
    }

    // --- CÁC HOOK VÀ HÀM XỬ LÝ ---

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 40); };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const targetId = path.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled
                ? "bg-white/80 dark:bg-gray-900/80 shadow-md py-3"
                : "bg-transparent py-4"
                } flex justify-between items-center px-6 md:px-12`}
        >
            {/* Logo */}
            <motion.h1
                whileHover={{ scale: 1.05 }}
                className="font-bold text-lg sm:text-xl text-primary dark:text-indigo-400 cursor-pointer tracking-tight"
            >
                <Link to="/">Nguyễn Nguyễn Thái Bảo</Link>
            </motion.h1>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                {linksToDisplay.map((link) => (
                    <li key={link.name}>
                        {link.path.startsWith("#") ? (
                            <a
                                href={link.path}
                                onClick={(e) => handleScrollClick(e, link.path)}
                                className="hover:text-primary dark:hover:text-indigo-400 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                to={link.path}
                                className={`hover:text-primary dark:hover:text-indigo-400 transition-colors duration-200 ${location.pathname === link.path ? "text-primary dark:text-indigo-400 font-semibold" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Theme Toggle & Mobile Menu Icon */}
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <LanguageToggle />
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
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
                            {linksToDisplay.map((link) => (
                                <li key={link.name}>
                                    {link.path.startsWith("#") ? (
                                        <a
                                            href={link.path}
                                            onClick={(e) => handleScrollClick(e, link.path)}
                                            className="block px-4 py-2 text-base hover:text-primary dark:hover:text-indigo-400"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`block px-4 py-2 text-base hover:text-primary dark:hover:text-indigo-400 ${location.pathname === link.path ? "text-primary dark:text-indigo-400 font-semibold" : ""
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
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