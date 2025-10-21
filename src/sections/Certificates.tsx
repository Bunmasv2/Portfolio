"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Certificate {
    name: string;
    image: string;
    pdf: string;
}

const translations = {
    en: {
        title: "Certificates",
        subtitle: "Hover to preview, click to download my verified certificate.",
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
        subtitle:
            "Di chuột để xem trước, nhấp để tải xuống chứng chỉ đã xác thực của tôi.",
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

const Certificates: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang];
    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const speed = 0.8; // tốc độ mượt hơn
        let offset = 0;
        const singleWidth = track.scrollWidth; // 1 vòng gốc
        const totalWidth = singleWidth * 2; // tổng 2 vòng

        let animationId: number;

        const animate = () => {
            offset += speed;
            if (offset >= singleWidth) {
                // reset đúng lúc vòng 2 bắt đầu => không đen, không khựng
                offset = 0;
            }
            container.style.transform = `translate3d(-${offset}px, 0, 0)`;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [t]);


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
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 dark:text-indigo-500">
                    {t.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            {/* Scroll container */}
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

                <div
                    ref={scrollRef}
                    className="flex will-change-transform"
                    style={{
                        transform: "translate3d(0,0,0)",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Vòng 1 */}
                    <div ref={trackRef} className="flex">
                        {t.certificateList.map((cert, i) => (
                            <CertificateCard
                                key={i}
                                cert={cert}
                                onDownload={handleDownload}
                                label={t.downloadButton}
                            />
                        ))}
                    </div>

                    {/* Vòng 2 (ẩn, để nối liền vô hạn) */}
                    <div className="flex" aria-hidden="true">
                        {t.certificateList.map((cert, i) => (
                            <CertificateCard
                                key={`clone-${i}`}
                                cert={cert}
                                onDownload={handleDownload}
                                label={t.downloadButton}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Border animation */}
            <style>{`
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

// 🪪 Component con cho mỗi chứng chỉ
const CertificateCard = ({
    cert,
    onDownload,
    label,
}: {
    cert: Certificate;
    onDownload: (pdf: string, name: string) => void;
    label: string;
}) => (
    <div
        onClick={() => onDownload(cert.pdf, cert.name)}
        className="flex-shrink-0 w-72 mx-4 group cursor-pointer transition-all duration-500 pt-2 pb-2"
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
                            onDownload(cert.pdf, cert.name);
                        }}
                        className="
              flex items-center gap-2 px-4 py-2 rounded-md
              bg-indigo-600/80 text-white font-medium text-sm
              hover:bg-indigo-500 transition-colors shadow-lg
            "
                    >
                        <Download className="w-4 h-4" />
                        {label}
                    </motion.button>
                </div>
            </div>
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground group-hover:text-indigo-400 transition-colors">
            {cert.name}
        </p>
    </div>
);

export default Certificates;
