"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// ======= DATA =======
const quickInfo = [
    { label: "Position", value: "Fullstack Developer (Student)" },
    { label: "Location", value: "Vietnam" },
    { label: "Major", value: "Software Engineer (IT) – Senior Year" },
    { label: "Languages", value: "Vietnamese, English" },
];

const timeline = [
    {
        period: "02/03/2025 – 05/10/2025",
        title: "Clinic Management System",
        description:
            "Developed a healthcare management system including patient records, appointment booking, and payment integration with VNPay & MoMo. Implemented both frontend and backend features using React, ASP.NET Core, and SQL Server.",
    },
    {
        period: "02/09/2025 – Present",
        title: "Project Management App",
        description:
            "Building a collaborative project management application with task tracking, team management, and real-time notifications. Focused on creating a responsive, user-friendly interface and efficient backend services.",
    },
];

// ======= ANIMATIONS =======
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// ======= COMPONENT =======
const About: React.FC = () => {
    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-8 bg-background transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={itemVariants}
                    className="mb-14 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-indigo-400 text-foreground mb-4">
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                </motion.div>

                {/* Main Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
                >
                    {/* Left Column - Bio & Timeline */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="lg:col-span-6 bg-card border border-border rounded-2xl p-8 shadow-sm transition-all duration-300 cursor-pointer"
                    >

                        <div className="space-y-6">
                            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                                I'm a senior-year Software Engineering student passionate about building efficient and user-friendly web applications. My experience includes healthcare management systems, chatbots, and online payment integration.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                                I enjoy creating seamless digital experiences that solve real-world problems, combining clean code, modern design principles, and performance-focused development.
                            </p>
                        </div>

                        {/* Career / Project Timeline */}
                        <div className="mt-10">
                            <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-indigo-300 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Project Timeline
                            </h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                className="space-y-6"
                            >
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                        <div className="pb-2">
                                            <p className="text-sm text-primary font-medium mb-1">
                                                {item.period}
                                            </p>
                                            <h4 className="text-lg font-semibold text-foreground mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Quick Info */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        className="lg:col-span-6 bg-card border border-border rounded-2xl p-8 shadow-sm transition-all duration-300 cursor-pointer"
                    >

                        <h3 className="text-xl sm:text-2xl font-semibold dark:text-teal-600 text-foreground mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Quick Info
                        </h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className="space-y-5"
                        >
                            {quickInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
                                >
                                    <span className="text-sm font-medium text-muted-foreground min-w-[100px]">
                                        {item.label}
                                    </span>
                                    <span className="text-base font-medium text-foreground">
                                        {item.value}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-8 border-t border-border space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Open to collaboration and internship opportunities. Excited to apply my skills on real-world projects and contribute to innovative web applications.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Proficient in React, ASP.NET Core, SQL Server, and modern web technologies. Passionate about learning new frameworks and improving software performance.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Interested in full-stack development, system design, and creating user-centric applications that solve practical problems.
                            </p>
                        </div>

                        {/* Optional Skills / Tools */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-foreground dark:text-indigo-300 mb-3">Skills & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React", "ASP.NET Core", "SQL Server", "Tailwind CSS", "Bootstrap", "Git", "SignalR"].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
