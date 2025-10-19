"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Brain, Users, Code2, Clock, Target, Lightbulb } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const translations = {
    vi: {
        title: "Kỹ Năng Mềm",
        description: "Những phẩm chất chuyên nghiệp bổ trợ cho chuyên môn kỹ thuật của tôi",
        skills: [
            { icon: <Brain className="w-8 h-8 text-teal-400" />, title: "Giải quyết vấn đề & tư duy phản biện" },
            { icon: <Code2 className="w-8 h-8 text-indigo-400" />, title: "Tư duy code sạch & kiến trúc hệ thống" },
            { icon: <Lightbulb className="w-8 h-8 text-cyan-400" />, title: "Tự học & khả năng thích ứng" },
            { icon: <Users className="w-8 h-8 text-emerald-400" />, title: "Cộng tác nhóm & quy trình Git" },
            { icon: <Clock className="w-8 h-8 text-sky-400" />, title: "Quản lý thời gian & sở hữu công việc" },
            { icon: <Target className="w-8 h-8 text-blue-400" />, title: "Định hướng mục tiêu & chú trọng chi tiết" },
        ],
    },
    en: {
        title: "Soft Skills",
        description: "Professional qualities that support my technical expertise",
        skills: [
            { icon: <Brain className="w-8 h-8 text-teal-400" />, title: "Problem Solving & Critical Thinking" },
            { icon: <Code2 className="w-8 h-8 text-indigo-400" />, title: "Clean Code Mindset & System Architecture" },
            { icon: <Lightbulb className="w-8 h-8 text-cyan-400" />, title: "Self-Learning & Adaptability" },
            { icon: <Users className="w-8 h-8 text-emerald-400" />, title: "Team Collaboration & Git Workflow" },
            { icon: <Clock className="w-8 h-8 text-sky-400" />, title: "Time Management & Ownership" },
            { icon: <Target className="w-8 h-8 text-blue-400" />, title: "Goal Orientation & Attention to Detail" },
        ],
    },
}

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
        transition: { duration: 0.4, ease: "easeOut" },
    },
}

const SoftSkills: React.FC = () => {
    const { lang } = useLanguage()
    const t = translations[lang]

    return (
        <section id="soft-skills" className="py-24 px-6 bg-background text-foreground transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
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
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {t.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                            className="relative flex items-center gap-4 bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex-shrink-0">{skill.icon}</div>
                            <h3 className="text-lg font-semibold text-foreground dark:text-gray-100">
                                {skill.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SoftSkills
