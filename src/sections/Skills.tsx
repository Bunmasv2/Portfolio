"use client"

import type React from "react"
import { motion, Variants } from "framer-motion"

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
        "GCS",
    ],
}

// 🎨 Animation Variants với kiểu đúng của Framer Motion
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
}

const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
    },
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-indigo-400 mb-4 text-balance justify-center flex">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed text-pretty mx-auto text-center">
                        A comprehensive toolkit for building modern, scalable web applications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <motion.div
                            key={category}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            className="group relative bg-card border border-border rounded-2xl p-8 will-change-transform transform-gpu"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            />

                            <motion.div
                                className="absolute inset-0 rounded-2xl border border-primary/0 shadow-xl shadow-primary/0 pointer-events-none"
                                whileHover={{
                                    borderColor: "hsl(var(--primary) / 0.5)",
                                    boxShadow:
                                        "0 20px 25px -5px hsl(var(--primary) / 0.1), 0 8px 10px -6px hsl(var(--primary) / 0.1)",
                                }}
                                transition={{ duration: 0.2 }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-foreground dark:text-indigo-300 mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {category}
                                </h3>

                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ staggerChildren: 0.05 }}
                                >
                                    {skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={skillVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "hsl(var(--secondary))",
                                                transition: { duration: 0.15, ease: "easeOut" },
                                            }}
                                            className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-sm rounded-lg border border-border/50 cursor-default will-change-transform transform-gpu"
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
