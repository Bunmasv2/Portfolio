"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"; // Sửa đường dẫn import
import { allSkills } from "../data/skillsData"; // Sửa đường dẫn import

// Import các icon bạn cần từ lucide-react
import { LayoutDashboard, Code, Database, Layers, Cloud, ShieldCheck, ServerCog } from 'lucide-react';

// Tạo một map để render icon động, giúp code gọn hơn
const iconMap: { [key: string]: React.ElementType } = { LayoutDashboard, Code, Database, Layers, Cloud, ShieldCheck, ServerCog };

// ============ ANIMATIONS (Lấy từ TechnicalSkills) ============
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

// ============ TRANSLATIONS ============
const translations = {
    en: {
        title: "Programming Experience",
        subtitle: "A showcase of practical experience in building full-stack applications and systems.",
    },
    vi: {
        title: "Kinh Nghiệm Lập Trình",
        subtitle: "Tổng hợp kinh nghiệm thực tế trong việc xây dựng các ứng dụng và hệ thống full-stack.",
    },
};

// ============ COMPONENT ============
const Skills: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section id="skills" className="py-24 px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={cardVariants} // Dùng cardVariants cho hiệu ứng trượt lên
                >
                    <h2 className=" text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white transition-colors duration-300 group-hover:text-indigo-400 ">
                        {t.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl leading-relaxed mx-auto transition-colors duration-300">
                        {t.subtitle}
                    </p>

                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }} // same again
                >
                    {allSkills.map((skill, index) => {
                        const IconComponent = iconMap[skill.icon as string];
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -6,
                                    scale: 1.05,
                                    transition: { duration: 0.05, ease: "easeOut" }, // exactly like TechnicalSkills
                                }}
                                className="group relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                {/* Glow & Border hover (same behavior) */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
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

                                {/* Content */}
                                <div className="relative z-10">
                                    {IconComponent && (
                                        <div className="p-3 rounded-lg mb-4 w-fit transition-transform duration-200 group-hover:scale-105">
                                            <IconComponent
                                                size={32}
                                                className="text-black dark:text-white transition-colors duration-300 group-hover:text-indigo-400 "
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white transition-colors duration-300 group-hover:text-indigo-400">
                                        {skill.title[lang]}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                                        {skill.description[lang]}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

