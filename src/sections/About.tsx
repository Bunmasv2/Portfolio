"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ======= TRANSLATIONS =======
const translations = {
    en: {
        title: "About Me",
        bio1: "I'm a senior-year Software Engineering student passionate about building efficient and user-friendly web applications.",
        bio2: "I enjoy creating seamless digital experiences that solve real-world problems, combining clean code, modern design principles, and performance-focused development.",
        projectTimeline: "Project Timeline",
        quickInfo: "Quick Info",
        openTo:
            "Open to collaboration and internship opportunities. Excited to apply my skills on real-world projects and contribute to innovative web applications.",
        additional1:
            "Proficient in React, ASP.NET Core, SQL Server, and modern web technologies. Passionate about learning new frameworks and improving software performance.",
        additional2:
            "Interested in full-stack development, system design, and creating user-centric applications that solve practical problems.",
        skillsIntro: "Skills & Tools",
        position: "Fullstack Developer (Student)",
        location: "Vietnam",
        major: "Software Engineer (IT) – Senior Year",
        languages: "Vietnamese, English",
        education: "HUTECH - GPA: 3.54/4.0",
        timeline: [
            {
                period: "03/02/2025 – 10/05/2025",
                title: "Clinic Management System",
                github: "https://github.com/BanhTuanKiet/BookingCare",
                description:
                    "Developed a healthcare management system including patient records, appointment booking, and payment integration with VNPay & MoMo. Implemented both frontend and backend features using React, ASP.NET Core, and SQL Server.",
                teamSize: 3,
            },
            {
                period: "09/02/2025 – Present",
                title: "Project Management App",
                github: "https://github.com/BanhTuanKiet/ProjectManagement",
                description:
                    "Building a collaborative project management application with task tracking, team management, and real-time notifications. Focused on creating a responsive, user-friendly interface and efficient backend services.",
                teamSize: 3,
            },
        ],
    },
    vi: {
        title: "Giới Thiệu Bản Thân",
        bio1: "Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm, đam mê xây dựng các ứng dụng web hiệu quả và thân thiện với người dùng.",
        bio2: "Tôi thích tạo ra những trải nghiệm kỹ thuật số mượt mà giúp giải quyết các vấn đề thực tế, kết hợp giữa mã nguồn sạch, thiết kế hiện đại và hiệu năng cao.",
        projectTimeline: "Dự Án Đã Thực Hiện",
        quickInfo: "Thông Tin Nhanh",
        openTo:
            "Sẵn sàng hợp tác và thực tập trong các dự án thực tế. Tôi mong muốn áp dụng kỹ năng của mình vào các dự án thực tiễn và đóng góp vào sự phát triển của các ứng dụng web sáng tạo.",
        additional1:
            "Thành thạo React, ASP.NET Core, SQL Server và các công nghệ web hiện đại. Đam mê học hỏi các framework mới và tối ưu hiệu năng phần mềm.",
        additional2:
            "Quan tâm đến phát triển full-stack, thiết kế hệ thống và xây dựng các ứng dụng hướng người dùng giải quyết vấn đề thực tế.",
        skillsIntro: "Kỹ Năng & Công Cụ",
        position: "Lập trình viên Fullstack (Sinh viên)",
        location: "Việt Nam",
        major: "Kỹ sư Phần mềm – Năm cuối",
        languages: "Tiếng Việt, Tiếng Anh",
        education: "HUTECH - GPA: 3.54/4.0",
        timeline: [
            {
                period: "02/03/2025 – 05/10/2025",
                title: "Hệ thống quản lý phòng khám",
                github: "https://github.com/BanhTuanKiet/BookingCare",
                description:
                    "Xây dựng hệ thống quản lý phòng khám bao gồm hồ sơ bệnh nhân, đặt lịch hẹn và tích hợp thanh toán với VNPay & MoMo. Triển khai cả frontend và backend bằng React, ASP.NET Core và SQL Server.",
                teamSize: 3,
            },
            {
                period: "02/09/2025 – Hiện tại",
                title: "Ứng dụng quản lý dự án",
                github: "https://github.com/BanhTuanKiet/ProjectManagement",
                description:
                    "Phát triển ứng dụng quản lý dự án nhóm với tính năng theo dõi công việc, quản lý nhóm và thông báo thời gian thực. Tập trung vào giao diện thân thiện, phản hồi nhanh và backend hiệu quả.",
                teamSize: 3,
            },
        ],
    },
};

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

const timeline = [
    {
        period: "02/03/2025 – 05/10/2025",
        title: "Clinic Management System",
        github: "https://github.com/BanhTuanKiet/BookingCare",
        description:
            "Developed a healthcare management system including patient records, appointment booking, and payment integration with VNPay & MoMo. Implemented both frontend and backend features using React, ASP.NET Core, and SQL Server.",
        teamSize: 3,
    },
    {
        period: "02/09/2025 – Present",
        title: "Project Management App",
        github: "https://github.com/BanhTuanKiet/ProjectManagement",
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
    const { lang } = useLanguage();
    const t = translations[lang];
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const quickInfo = [
        { label: lang === "en" ? "Position" : "Vị trí", value: t.position },
        { label: lang === "en" ? "Location" : "Địa điểm", value: t.location },
        { label: lang === "en" ? "Major" : "Chuyên ngành", value: t.major },
        { label: lang === "en" ? "Languages" : "Ngôn ngữ", value: t.languages },
        { label: lang === "en" ? "Education" : "Học vấn", value: t.education },
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-8 bg-background transition-colors duration-300">
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
                        {t.title}
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
                            transition: { type: "spring", stiffness: 300, damping: 20 },
                        }}
                        className="lg:col-span-6 bg-card border border-border rounded-2xl p-8 shadow-sm cursor-pointer"
                    >
                        <div className="space-y-6">
                            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{t.bio1}</p>
                            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{t.bio2}</p>
                            {/* <p className="text-sm text-muted-foreground leading-relaxed">{t.openTo}</p> */}
                            {/* <p className="text-sm text-muted-foreground leading-relaxed">{t.additional1}</p> */}
                            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{t.additional2}</p>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-indigo-300 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {t.projectTimeline}
                            </h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2 }}
                                className="space-y-6"
                            >
                                {t.timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative pl-8 border-l-2 border-border transition-colors duration-300 group hover:border-primary cursor-pointer"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                        <div className="pb-2">
                                            <p className="text-sm text-primary font-medium">{item.period}</p>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                                                <h4 className={`text-lg font-semibold text-foreground dark:text-indigo-300 transition-colors duration-300`}>
                                                    <a
                                                        href={item.github || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className={`flex items-center gap-2 ${isMobile
                                                            ? "text-cyan-400"
                                                            : "text-foreground group-hover:text-cyan-400"
                                                            }`}
                                                    >
                                                        {item.title}
                                                        <ExternalLink
                                                            className={`w-5 h-5 transition-opacity duration-300 ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                                                }`}
                                                        />
                                                    </a>
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="flex items-center text-sm text-muted-foreground"
                                                        title={`Team size: ${item.teamSize} members`}
                                                    >
                                                        <Users size={16} className="mr-1" />
                                                        <span>{item.teamSize}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
                            transition: { type: "spring", stiffness: 300, damping: 20 },
                        }}
                        className="lg:col-span-6 bg-card border border-border rounded-2xl p-8 shadow-sm cursor-pointer"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold dark:text-teal-600 text-foreground mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {t.quickInfo}
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
                                    <span className="text-base font-medium text-foreground">{item.value}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-8 pt-8 border-t border-border space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.openTo}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.additional1}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.additional2}</p>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-foreground dark:text-indigo-300 mb-3">
                                {t.skillsIntro}
                            </h4>
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
                                        whileHover={{ scale: 1.08 }}
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
