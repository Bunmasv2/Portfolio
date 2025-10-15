"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Users } from "lucide-react";

const skillDocs: Record<string, string> = {
    ReactJS: "https://react.dev/",
    "ASP.NET Core": "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0",
    "SQL Server": "https://learn.microsoft.com/en-us/sql/sql-server/",
    TailwindCSS: "https://tailwindcss.com/docs",
    Bootstrap: "https://getbootstrap.com/docs/",
    Git: "https://git-scm.com/doc",
    SignalR: "https://learn.microsoft.com/en-us/aspnet/core/signalr/",
};

const skillsList = ["ReactJS", "ASP.NET Core", "SQL Server", "TailwindCSS", "Bootstrap", "Git", "SignalR"];

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
        teamSize: 3,
    },
    {
        period: "02/09/2025 – Present",
        title: "Project Management App",
        teamSize: 3,
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

const skillPillContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const skillPillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
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
                                            <p className="text-sm text-primary font-medium">
                                                {item.period}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                                                <h4 className="text-lg font-semibold text-foreground hover:text-primary dark:text-[#66FFFF] transition-colors duration-300">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center text-sm text-muted-foreground" title={`Team size: ${item.teamSize} members`}>
                                                        <Users size={16} className="mr-1" />
                                                        <span>{item.teamSize}</span>
                                                    </div>
                                                </div>
                                            </div>
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
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={skillPillContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3, once: true }}
                            >
                                {skillsList.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={skillPillVariants}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            const url = skillDocs[skill];
                                            if (url) window.open(url, "_blank");
                                        }}
                                        whileHover={{ scale: 1.08 }} // <-- CẬP NHẬT: Bỏ y: -2 để giống hệt trang Skills
                                        className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer select-none border transition-colors
               bg-gray-100 text-gray-800 border-gray-300
               dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
               hover:bg-indigo-600 hover:text-white
               dark:hover:bg-indigo-500"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
