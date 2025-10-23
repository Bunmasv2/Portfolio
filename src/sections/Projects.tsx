"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import VerticalImageCarousel from "../components/AutoScrollGallery"


// Import dữ liệu theo ngôn ngữ
import { projects as enProjects } from "../data/projects.en";
import { projects as viProjects } from "../data/projects.vi";
import { techDocs } from "../data/projectData";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Projects: React.FC = () => {
    const { lang } = useLanguage();
    const projects = lang === "en" ? enProjects : viProjects;

    // 🔹 Tự động nhận biết mobile theo kích thước màn hình
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // Kiểm tra ngay khi render lần đầu
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return (
        <section id="projects" className="min-h-screen bg-background py-24 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={itemVariants}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 dark:text-indigo-500 text-balance">
                        {lang === "en" ? "Featured Projects" : "Dự án nổi bật"}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {lang === "en"
                            ? "A collection of technical projects showcasing full-stack development, system architecture, and modern web technologies."
                            : "Tổng hợp các dự án kỹ thuật thể hiện kỹ năng full-stack, kiến trúc hệ thống và công nghệ web hiện đại."}
                    </p>
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className="grid gap-8 md:grid-cols-2"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            variants={itemVariants}
                            whileHover={!isMobile ? { scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" } : {}}
                            className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
                        >
                            {/* Image Carousel */}
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                {project.images && project.images.length > 0 ? (
                                    <VerticalImageCarousel images={project.images} />
                                ) : (
                                    <img
                                        src="/placeholder.svg"
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>


                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-foreground mb-2 transition-colors">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex items-center gap-2  ${isMobile ? "text-cyan-400" : "text-foreground group-hover:text-cyan-400"}`}
                                    >
                                        {project.title}
                                        <ExternalLink className={`w-5 h-5 transition-opacity duration-300 ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                                    </a>
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    👥 {lang === "en" ? "Team size" : "Số thành viên"}: {project.teamSize}
                                </p>

                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {lang === "en" ? "Description:" : "Mô tả:"} {project.description}
                                </p>

                                {/* Role */}
                                <p className="text-sm text-foreground font-medium mb-4">
                                    <span className="font-semibold">{lang === "en" ? "Role:" : "Vai trò:"} </span>
                                    {project.role}
                                </p>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="my-4">
                                        <h4 className="text-sm font-semibold text-foreground mb-3">
                                            {lang === "en" ? "Key Features:" : "Tính năng nổi bật:"}
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                const baseUrl = "https://www.google.com/search?q=";
                                                const url =
                                                    techDocs[tech] ||
                                                    `${baseUrl}${encodeURIComponent(tech + " documentation")}`;
                                                window.open(url, "_blank");
                                            }}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer select-none border transition-colors
                                                bg-gray-100 text-gray-800 border-gray-300
                                                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
                                                hover:bg-indigo-600 hover:text-white
                                                dark:hover:bg-indigo-500
                                                ${isMobile ? "visited:text-inherit focus:outline-none focus:text-inherit active:text-inherit dark:visited:text-inherit dark:focus:text-inherit dark:active:text-inherit" : ""}`}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github className="w-4 h-4" /> Github
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="w-4 h-4" /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
