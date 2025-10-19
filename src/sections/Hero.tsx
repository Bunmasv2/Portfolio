"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// 🌍 TRANSLATIONS
const translations = {
    en: {
        greeting: "👋 Hi, I'm",
        name: "Nguyen Nguyen Thai Bao",
        role: "Fullstack Developer",
        description:
            "A passionate Fullstack Developer crafting scalable web apps using React & .NET Core.",
        viewProjects: "View Projects",
        github: "GitHub",
        downloadCV: "Download CV",
    },
    vi: {
        greeting: "👋 Xin chào, tôi là",
        name: "Nguyễn Nguyễn Thái Bảo",
        role: "Lập trình viên Fullstack",
        description:
            "Một lập trình viên Fullstack đam mê phát triển các ứng dụng web hiệu quả bằng React và .NET Core.",
        viewProjects: "Xem Dự Án",
        github: "GitHub",
        downloadCV: "Tải CV",
    },
};

const Hero: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang];

    const [isMobile, setIsMobile] = useState(false);

    // 🧠 Kiểm tra kích thước màn hình
    useEffect(() => {
        if (typeof window !== "undefined") {
            const checkMobile = () => setIsMobile(window.innerWidth < 768);
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return () => window.removeEventListener("resize", checkMobile);
        }
    }, []);

    // 🎬 Điều khiển animation khi scroll vào/ra vùng nhìn
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) controls.start("visible");
        else controls.start("hidden");
    }, [controls, inView]);

    // ✨ Khai báo animation variants
    const heroVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="home"
            ref={ref}
            className="min-h-[65vh] py-20 flex flex-col justify-center items-center text-center px-6 md:px-12 relative overflow-hidden"
        >
            {/* Hiệu ứng nền nhẹ */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-b from-indigo-100/30 via-transparent to-transparent dark:from-indigo-900/20 pointer-events-none"
            />

            {/* Nội dung Hero */}
            <motion.div
                variants={heroVariants}
                initial="hidden"
                animate={controls}
                className="space-y-5 relative z-10"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                    {t.greeting}{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">{t.name}</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                    {t.description}
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4 mt-5"
                >
                    <motion.a
                        href="/project"
                        whileHover={!isMobile ? { scale: 1.05 } : {}}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-colors font-semibold"
                    >
                        {t.viewProjects}
                    </motion.a>

                    <motion.a
                        href="https://github.com/Bunmasv2"
                        target="_blank"
                        whileHover={!isMobile ? { scale: 1.05 } : {}}
                        whileTap={{ scale: 0.95 }}
                        className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" /> {t.github}
                    </motion.a>

                    <motion.a
                        href="/CV_ThaiBao.pdf"
                        download
                        whileHover={!isMobile ? { scale: 1.05 } : {}}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition-colors font-semibold"
                    >
                        {t.downloadCV}
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Icon scroll xuống */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 2,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                className="absolute bottom-6 text-gray-500 dark:text-gray-400"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
