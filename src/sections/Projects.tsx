"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { projects, techDocs } from "../data";
import { ExternalLink, Github } from "lucide-react";

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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <section id="projects" className="min-h-screen bg-background py-24 px-6">
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
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of technical projects showcasing full-stack development, system architecture, and modern web technologies.
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
                            onClick={() => window.open(project.github, "_blank")}
                            className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title} <span className="text-sm text-muted-foreground">({project.duration})</span>
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">👥 Team size: {project.teamSize}</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                                {/* Role */}
                                <p className="text-sm text-foreground font-medium mb-4">
                                    <span className="font-semibold">Role: </span>{project.role}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{
                                                scale: 1.08,
                                                backgroundColor: "#bbf7d0", // xanh lá nhạt (Tailwind: green-100)
                                                color: "#166534", // xanh đậm hơn cho chữ
                                                transition: { duration: 0.15, ease: "easeOut" },
                                            }}
                                            onClick={() => {
                                                const baseUrl = "https://www.google.com/search?q=";
                                                const url = techDocs[tech] || `${baseUrl}${encodeURIComponent(tech + " documentation")}`;
                                                window.open(url, "_blank");
                                            }}

                                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border cursor-pointer select-none"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>


                                {/* Links */}
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                                        <Github className="w-4 h-4" /> Github
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
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
