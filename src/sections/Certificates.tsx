"use client";

import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface Certificate {
    name: string;
    image: string;
    pdf: string;
}

// ======= TRANSLATIONS & DATA =======
const translations = {
    en: {
        title: "Certificates",
        subtitle: "Hover to preview, click to download your verified certificate.",
        downloadButton: "PDF",
        certificateList: [
            {
                name: "JavaScript Essentials 1",
                image: "/certificates/JavaScriptEssentials1.png",
                pdf: "/certificates/JavaScriptEssentials1.pdf",
            },
            {
                name: "Networking Basics",
                image: "/certificates/NetworkingBasics.png",
                pdf: "/certificates/NetworkingBasics.pdf",
            },
            {
                name: "JavaScript Essentials 2",
                image: "/certificates/JavaScriptEssentials2.png",
                pdf: "/certificates/JavaScriptEssentials2.pdf",
            },
        ],
    },
    vi: {
        title: "Chứng Chỉ",
        subtitle: "Di chuột để xem trước, nhấp để tải xuống chứng chỉ đã xác thực của bạn.",
        downloadButton: "Tải PDF",
        certificateList: [
            {
                name: "JavaScript Cơ Bản 1",
                image: "/certificates/JavaScriptEssentials1.png",
                pdf: "/certificates/JavaScriptEssentials1.pdf",
            },
            {
                name: "Kiến Thức Mạng Căn Bản",
                image: "/certificates/NetworkingBasics.png",
                pdf: "/certificates/NetworkingBasics.pdf",
            },
            {
                name: "JavaScript Cơ Bản 2",
                image: "/certificates/JavaScriptEssentials2.png",
                pdf: "/certificates/JavaScriptEssentials2.pdf",
            },
        ],
    },
};

// ======= ANIMATION VARIANTS =======
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const Certificates: React.FC = () => {
    const { lang } = useLanguage(); // 👈 2. Lấy ngôn ngữ hiện tại
    const t = translations[lang];
    const certificates = t.certificateList;

    const [displayedCertificates, setDisplayedCertificates] = useState<Certificate[]>([
        ...certificates,
        ...certificates,
        ...certificates,
    ]);

    // 🔁 Mỗi 10 giây tự động nhân thêm mảng một lần (để luôn “vô hạn”)
    useEffect(() => {
        // Nếu chưa có certificate nào thì không chạy interval
        if (certificates.length === 0) return;

        const interval = setInterval(() => {
            setDisplayedCertificates((prev) => [...prev, ...certificates]);
        }, 10000);

        return () => clearInterval(interval);
    }, [certificates]);

    const handleDownload = (pdf: string, name: string) => {
        const link = document.createElement("a");
        link.href = pdf;
        link.download = pdf.split("/").pop() ?? `${name}.pdf`;
        link.click();
    };

    return (
        <section
            id="certificates"
            className="py-20 px-4 sm:px-8 bg-background transition-colors duration-300"
        >
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={itemVariants}
                className="max-w-7xl mx-auto text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 dark:text-indigo-500">
                    {t.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </motion.div>

            {/* Scroll container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="relative overflow-hidden"
            >
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

                {/* Infinite scrolling row */}
                <motion.div
                    variants={itemVariants}
                    className="flex animate-infinite-scroll"
                >
                    {displayedCertificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            onClick={() => handleDownload(cert.pdf, cert.name)}
                            whileHover={{ scale: 1.03 }}
                            className="flex-shrink-0 w-72 mx-4 group cursor-pointer transition-all duration-500  pt-2 pb-2"
                        >
                            <div className="relative rounded-xl p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 animate-gradient-border">
                                <div className="relative h-52 rounded-xl overflow-hidden bg-background">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="object-cover w-full h-full rounded-xl"
                                    />
                                    <div
                                        className="
                      absolute inset-0 flex items-center justify-center opacity-0
                      group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-t from-indigo-950/80 via-indigo-900/30 to-transparent
                    "
                                    >
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDownload(cert.pdf, cert.name);
                                            }}
                                            className="
                        flex items-center gap-2 px-4 py-2 rounded-md
                        bg-indigo-600/80 text-white font-medium text-sm
                        hover:bg-indigo-500 transition-colors shadow-lg
                      "
                                        >
                                            <Download className="w-4 h-4" />
                                            {t.downloadButton}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-3 text-center text-sm text-muted-foreground group-hover:text-indigo-400 transition-colors">
                                {cert.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <style>{`
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        .animate-infinite-scroll {
          display: flex;
          width: calc(300%);
          animation: infiniteScroll 10s linear infinite;
        }

        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradientBorder 5s ease infinite;
        }
      `}</style>
        </section>
    );
};

export default Certificates;
