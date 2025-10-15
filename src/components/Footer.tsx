"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Github, Phone, ArrowUp } from "lucide-react";

// ======= ANIMATIONS =======
const footerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
};

// ======= DATA =======
const socials = [
    {
        name: "Facebook",
        icon: <Facebook size={20} />,
        link: "https://web.facebook.com/bao.nguyen.408431",
    },
    {
        name: "Github",
        icon: <Github size={20} />,
        link: "https://github.com/Bunmasv2",
    },
    {
        name: "Phone",
        icon: <Phone size={20} />,
        link: "tel:+84866410473",
    },
];

// ======= COMPONENT =======
const Footer: React.FC = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="w-full border-t border-border bg-background transition-colors"
        >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-6">
                {/* Copyright */}
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                    © {new Date().getFullYear()} Bao Nguyen. Built with React & Tailwind CSS.
                </p>

                {/* Social Icons & Scroll-to-Top Button */}
                <div className="flex items-center gap-5">
                    {/* Social Icons */}
                    {socials.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            // ✅ FIX: Sao chép animation hover từ trang Contact
                            whileHover={!isMobile ? { scale: 1.15, boxShadow: "0 0 10px rgba(0,200,255,0.4)" } : {}}
                            whileTap={{ scale: 0.9 }}
                            // ✅ FIX: Sao chép className từ trang Contact
                            className={`p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${social.link.startsWith("tel:") ? "hover:bg-green-500 hover:text-white" : ""
                                }`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}

                    {/* Dấu gạch phân cách */}
                    <div className="h-5 w-px bg-border"></div>

                    {/* ✅ FIX: Thêm lại nút Scroll-to-Top */}
                    <motion.button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        whileHover={{ y: -2, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;