"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { useLanguage } from "../context/LanguageContext";

// TRANSLATIONS
// ========================
const translations = {
    en: {
        title: "Skills & Technologies",
        subtitle: "A comprehensive toolkit for building modern, scalable web applications",
        categories: {
            Frontend: "Frontend",
            "Backend & Database": "Backend & Database",
            "Tools & Cloud": "Tools & Cloud",
        },
    },
    vi: {
        title: "Kỹ năng & Công nghệ",
        subtitle: "Bộ công cụ toàn diện để xây dựng các ứng dụng web hiện đại và có khả năng mở rộng",
        categories: {
            Frontend: "Giao diện người dùng (Frontend)",
            "Backend & Database": "Xử lý & Cơ sở dữ liệu (Backend & Database)",
            "Tools & Cloud": "Công cụ & Dịch vụ đám mây (Tools & Cloud)",
        },
    },
};

// ===== Skill Categories =====

const skillCategories = {
    Frontend: ["ReactJS", "Next.js", "TailwindCSS", "Bootstrap", "JavaScript", "HTML", "CSS"],
    "Backend & Database": ["ASP.NET Core", "C#", "Node.js", "Java Spring Boot", "SQL Server", "MongoDB"],
    "Tools & Cloud": [
        "Git",
        "VS Code",
        "Postman",
        "Figma",
        "SignalR",
        "JWT Auth",
        "Google Cloud SQL",
        "Cloudinary",
        "Vercel",
    ],
}

// ===== Docs mapping =====
const skillDocs: Record<string, string> = {
    ReactJS: "https://react.dev/",
    "Next.js": "https://nextjs.org/docs",
    TailwindCSS: "https://tailwindcss.com/docs",
    Bootstrap: "https://getbootstrap.com/docs/",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "ASP.NET Core": "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0",
    "C#": "https://learn.microsoft.com/en-us/dotnet/csharp/",
    "Node.js": "https://nodejs.org/en/docs",
    "Java Spring Boot": "https://spring.io/projects/spring-boot",
    "SQL Server": "https://learn.microsoft.com/en-us/sql/sql-server/",
    MongoDB: "https://www.mongodb.com/docs/",
    Git: "https://git-scm.com/doc",
    "VS Code": "https://code.visualstudio.com/docs",
    Postman: "https://learning.postman.com/docs/",
    Figma: "https://help.figma.com/hc/en-us",
    SignalR: "https://learn.microsoft.com/en-us/aspnet/core/signalr/",
    "JWT Auth": "https://jwt.io/introduction",
    "Google Cloud SQL": "https://cloud.google.com/sql/docs",
    Cloudinary: "https://cloudinary.com/documentation",
    Vercel: "https://vercel.com/docs",
}

// ===== Animation Variants =====
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
}

const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
}

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const Skills: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section id="skills" className="py-24 px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* ===== Header ===== */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    variants={cardVariants}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-indigo-400 mb-4">
                        {t.title}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* ===== Skill Cards ===== */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <motion.div
                            key={category}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                scale: 1.05,
                                transition: { duration: 0.05, ease: "easeOut" },
                            }}

                            className="group relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Glow & Border hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-2xl border border-primary/0 shadow-xl shadow-primary/0 pointer-events-none"
                                whileHover={{
                                    borderColor: "hsl(var(--primary) / 0.4)",
                                    boxShadow:
                                        "0 12px 25px -5px hsl(var(--primary) / 0.15), 0 8px 10px -6px hsl(var(--primary) / 0.1)",
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Card content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-foreground dark:text-indigo-300 mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {t.categories[category as keyof typeof t.categories] || category}
                                </h3>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.2, once: false }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={skillVariants}
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                const url = skillDocs[skill]
                                                if (url) window.open(url, "_blank")
                                            }}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer select-none border transition-colors
                                                bg-gray-100 text-gray-800 border-gray-300
                                                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
                                                hover:bg-indigo-600 hover:text-white
                                                dark:hover:bg-indigo-500
                                                ${isMobile ? "focus:outline-none focus:text-inherit active:text-inherit dark:focus:text-inherit dark:active:text-inherit" : ""}
                                                `}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
