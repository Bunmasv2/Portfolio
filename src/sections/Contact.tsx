"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Facebook } from "lucide-react";
import emailjs from "emailjs-com";
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
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// ======= CONTACT DATA =======
const contactInfo = [
    {
        icon: <Mail className="w-5 h-5 text-primary" />,
        label: "Email",
        value: "thaibao5335@gmail.com",
    },
    {
        icon: <Phone className="w-5 h-5 text-primary" />,
        label: "Phone",
        value: "+84 912 345 678",
    },
    {
        icon: <MapPin className="w-5 h-5 text-primary" />,
        label: "Location",
        value: "Ho Chi Minh City, Vietnam",
    },
];

// ======= SOCIAL LINKS =======
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
        link: "tel:+84866410473", // 👉 Số điện thoại bạn muốn cho gọi
    },
];

// ======= COMPONENT =======
const Contact: React.FC = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-8 bg-background transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto">
                {/* === Header === */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={itemVariants}
                    className="mb-14 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl  dark:text-indigo-500 font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                </motion.div>

                {/* === Main Content === */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch"
                >
                    {/* === Left Column === */}
                    <motion.div
                        variants={itemVariants}
                        className={`bg-card border border-border rounded-2xl p-8 shadow-sm ${!isMobile ? "hover:shadow-md" : ""
                            } transition-all duration-300 flex flex-col justify-between`}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2  dark:text-indigo-250 justify-center">
                                Contact Information
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                Feel free to reach out through any of these channels. I typically respond within 24 hours.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="p-3 rounded-xl bg-muted flex items-center justify-center">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{info.label}</p>
                                            <p className="text-base font-medium text-foreground">{info.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* === Social Links === */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className="mt-10 flex gap-4 justify-start"
                        >
                            {socials.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={!isMobile ? { scale: 1.15, boxShadow: "0 0 10px rgba(0,200,255,0.4)" } : {}}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${s.link.startsWith("tel:") ? "hover:bg-green-500 hover:text-white" : ""
                                        }`}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* === Right Column - Contact Form === */}
                    <motion.div
                        variants={itemVariants}
                        className={`bg-card border border-border rounded-2xl p-8 shadow-sm ${!isMobile ? "hover:shadow-md" : ""
                            } transition-all duration-300 flex flex-col justify-between`}
                    >
                        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Send a Message
                        </h3>

                        <form
                            className="space-y-5 flex-1 flex flex-col justify-between"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                                try {
                                    await emailjs.send(
                                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                                        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                                        { name, email, message },
                                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                                    );
                                    alert("✅ Message sent successfully!");
                                    form.reset();
                                } catch (error) {
                                    console.error(error);
                                    alert("❌ Failed to send message.");
                                }
                            }}
                        >

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground dark:text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 mb-4"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground dark:text-neutral-900  focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 mb-4"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    rows={5}
                                    className="w-full bg-background border border-border dark:text-neutral-900  rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none"
                                    required
                                />
                            </div>

                            <motion.button
                                whileHover={!isMobile ? { scale: 1.05 } : {}}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors duration-200 hover:bg-primary/90"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
