"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Github, Phone, ArrowUp } from "lucide-react";

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

// ======= DATA =======
const navigation = {
    main: [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ],
};

const socials = [
    {
        icon: <Facebook className="w-5 h-5" />,
        link: "https://web.facebook.com/bao.nguyen.408431",
    },
    {
        icon: <Github className="w-5 h-5" />,
        link: "https://github.com/Bunmasv2",
    },
    {
        icon: <Phone className="w-5 h-5" />,
        link: "tel:+84866410473",
    },
];

// ======= COMPONENT =======
const Footer: React.FC = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <motion.footer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="border-t border-border bg-card/50 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* === Top Section === */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">Bao Nguyen</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Fullstack Developer passionate about building accessible and
                            performant web applications.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Socials */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                            Connect
                        </h4>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className="flex gap-4"
                        >
                            {socials.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={
                                        !isMobile
                                            ? {
                                                scale: 1.15,
                                                boxShadow: "0 0 10px rgba(0,200,255,0.4)",
                                            }
                                            : {}
                                    }
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${s.link.startsWith("tel:")
                                        ? "hover:bg-green-500 hover:text-white"
                                        : ""
                                        }`}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* === Bottom Section === */}
                <motion.div
                    variants={itemVariants}
                    className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        © {new Date().getFullYear()} Bao Nguyen. All rights reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 text-primary" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
