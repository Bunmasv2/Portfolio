"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

// MotionLink wraps react-router-dom's Link with framer-motion's motion
const MotionLink = motion(Link);

const translations = {
    en: {
        homePageLinks: [
            { name: "About", path: "#about" },
            { name: "Experiences", path: "#skills" },
            { name: "Tech&Tools", path: "#technicalSkills" },
            { name: "SoftSkills", path: "#softSkills" },
            { name: "Projects & Certificates", path: "/project" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "#contact" },
        ],
        projectPageLinks: [
            { name: "Home", path: "/" },
            { name: "Experiences", path: "#skills" },
            { name: "Tech&Tools", path: "#technicalSkills" },
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
            { name: "Kinh nghiệm", path: "#skills" },
            { name: "Công nghệ & Công cụ", path: "#technicalSkills" },
            { name: "Kỹ Năng Mềm", path: "#softSkills" },
            { name: "Dự Án & Chứng Chỉ", path: "/project" },
            { name: "Bài Viết", path: "/blog" },
            { name: "Liên Hệ", path: "#contact" },
        ],
        projectPageLinks: [
            { name: "Trang Chủ", path: "/" },
            { name: "Kinh nghiệm", path: "#skills" },
            { name: "Công nghệ & Công cụ", path: "#technicalSkills" },
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
    const [activeSection, setActiveSection] = useState("");

    // 1. Links cho Trang Chủ (/)
    const homePageLinks = [
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Soft-Skills", path: "#soft-skills" },
        { name: "TechnicalSkills", path: "#technicalSkills" },
        { name: "Projects & Certificates", path: "/project" }, // Link chuyển trang
        { name: "Blog", path: "/blog" },       // Link chuyển trang
        { name: "Contact", path: "#contact" },
    ];

    // 2. Links cho Trang Project (/project)
    const projectPageLinks = [
        { name: "Home", path: "/" },             // Link chuyển trang
        { name: "Skills", path: "#skills" },
        { name: "TechnicalSkills", path: "#technicalSkills" },
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

    const linksToDisplay = useMemo(() => {
        if (location.pathname === "/") return t.homePageLinks;
        if (location.pathname === "/project") return t.projectPageLinks;
        return t.defaultLinks;
    }, [location.pathname, t]);

    useEffect(() => {
        const sections = linksToDisplay
            .filter((link) => link.path.startsWith("#"))
            .map((link) => document.getElementById(link.path.substring(1)))
            .filter(Boolean);

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
            let bestMatch = "";
            if (sections.length > 0) {
                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section) {
                        const sectionTop = section.offsetTop - 150;
                        if (window.scrollY >= sectionTop) {
                            bestMatch = section.id;
                            break;
                        }
                    }
                }
            }
            setActiveSection(bestMatch);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [linksToDisplay]);

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
        setMenuOpen(false);
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
            <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 font-bold text-lg sm:text-xl text-primary dark:text-indigo-400 cursor-pointer tracking-tight">
                    <img src="/logo2.png" alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
                    <span>Nguyễn Nguyễn Thái Bảo</span>
                </Link>
            </motion.div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1 text-base font-medium text-gray-700 dark:text-gray-300"> {/* ✨ Tăng cỡ chữ ở đây */}
                {linksToDisplay.map((link) => {
                    const isScrollActive = link.path.startsWith("#") && activeSection === link.path.substring(1);
                    const isPathActive = !link.path.startsWith("#") && location.pathname === link.path;
                    const isFinallyActive = isScrollActive || isPathActive;

                    return (
                        <li key={link.name}>
                            {link.path.startsWith("#") ? (
                                <motion.a
                                    href={link.path}
                                    onClick={(e) => handleScrollClick(e, link.path)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative block px-3 py-2 transition-colors duration-200 ${isFinallyActive
                                        ? "text-sky-500 dark:text-indigo-400 font-semibold"
                                        : "hover:text-sky-500 dark:hover:text-indigo-400"
                                        }`}
                                >
                                    {link.name}
                                    {isFinallyActive && (
                                        <motion.div
                                            layoutId="active-underline-desktop"
                                            className="absolute bottom-1 left-2 right-2 h-0.5 bg-sky-500 dark:bg-indigo-400"
                                        />
                                    )}
                                </motion.a>
                            ) : (
                                // ✨ SỬ DỤNG MotionLink ĐÃ TẠO
                                <MotionLink
                                    to={link.path}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative block px-3 py-2 transition-colors duration-200 ${isFinallyActive
                                        ? "text-sky-500 dark:text-indigo-400 font-semibold"
                                        : "hover:text-sky-500 dark:hover:text-indigo-400"
                                        }`}
                                >
                                    {link.name}
                                    {isFinallyActive && (
                                        <motion.div
                                            layoutId="active-underline-desktop"
                                            className="absolute bottom-1 left-2 right-2 h-0.5 bg-sky-500 dark:bg-indigo-400"
                                        />
                                    )}
                                </MotionLink>
                            )}
                        </li>
                    );
                })}
            </ul>

            {/* Theme Toggle & Mobile Menu Icon */}
            <div className="flex items-center gap-3">
                <div className="hidden md:flex md:items-center md:gap-3">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    aria-label="Toggle menu"
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
                        className="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-lg md:hidden"
                    >
                        <ul className="flex flex-col items-center py-4">
                            {linksToDisplay.map((link) => {
                                const isScrollActive = link.path.startsWith("#") && activeSection === link.path.substring(1);
                                const isPathActive = !link.path.startsWith("#") && location.pathname === link.path;
                                const isFinallyActive = isScrollActive || isPathActive;

                                return (
                                    <li key={link.name} className="w-full text-center">
                                        {link.path.startsWith("#") ? (
                                            <a
                                                href={link.path}
                                                onClick={(e) => handleScrollClick(e, link.path)}
                                                className={`block w-full py-3 text-base ${isFinallyActive
                                                    ? "text-sky-500 dark:text-indigo-400 font-semibold bg-sky-50 dark:bg-gray-800"
                                                    : "hover:text-sky-500 dark:hover:text-indigo-400"
                                                    }`}
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className={`block w-full py-3 text-base ${isFinallyActive
                                                    ? "text-sky-500 dark:text-indigo-400 font-semibold bg-sky-50 dark:bg-gray-800"
                                                    : "hover:text-sky-500 dark:hover:text-indigo-400"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                            <li className="w-4/5 border-t border-gray-200 dark:border-gray-700 my-4"></li>
                            <li className="flex items-center gap-6">
                                <ThemeToggle />
                                <LanguageToggle />
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;