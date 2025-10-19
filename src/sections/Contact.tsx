"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Facebook, CheckCircle, XCircle, Loader, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "emailjs-com";

// ======= ANIMATIONS =======
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

// ======= TRANSLATIONS =======
const translations = {
    en: {
        title: "Get In Touch",
        contactInfo: "Contact Information",
        description: "Feel free to reach out through any of these channels. I typically respond within 24 hours.",
        sendMessage: "Send a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sending: "Sending...",
        sendMessageBtn: "Send Message",
        success: "Message sent successfully!",
        failed: "Failed to send message.",
        empty: "Please fill in all fields.",
        invalid: "Please enter a valid email.",
    },
    vi: {
        title: "Liên Hệ Với Tôi",
        contactInfo: "Thông Tin Liên Hệ",
        description: "Hãy thoải mái liên hệ với tôi qua các kênh bên dưới. Tôi thường phản hồi trong vòng 24 giờ.",
        sendMessage: "Gửi Tin Nhắn",
        namePlaceholder: "Tên của bạn",
        emailPlaceholder: "Email của bạn",
        messagePlaceholder: "Nội dung tin nhắn",
        sending: "Đang gửi...",
        sendMessageBtn: "Gửi tin nhắn",
        success: "Gửi tin nhắn thành công!",
        failed: "Gửi tin nhắn thất bại.",
        empty: "Vui lòng điền đầy đủ thông tin.",
        invalid: "Vui lòng nhập email hợp lệ.",
    },
};

// ======= CONTACT DATA =======
const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-primary" />, label: "Email", value: "thaibao5335@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-primary" />, label: "Phone", value: "+84 912 345 678" },
    { icon: <MapPin className="w-5 h-5 text-primary" />, label: "Location", value: "Ho Chi Minh City, Vietnam" },
];

// ======= SOCIAL LINKS =======
const socials = [
    { icon: <Facebook className="w-5 h-5" />, link: "https://web.facebook.com/bao.nguyen.408431" },
    { icon: <Github className="w-5 h-5" />, link: "https://github.com/Bunmasv2" },
    { icon: <Phone className="w-5 h-5" />, link: "tel:+84866410473" },
];

// ======= VALIDATION =======
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

// ======= NOTIFICATION POPUP =======
interface NotificationProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

const NotificationPopup: React.FC<NotificationProps> = ({ message, type, onClose }) => (
    <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-5 right-5 z-50 flex items-center gap-4 p-4 rounded-lg shadow-xl text-white ${type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
    >
        {type === "success" ? <CheckCircle /> : <XCircle />}
        <p className="font-semibold">{message}</p>
        <button onClick={onClose} className="absolute top-1 right-1 text-white/70 hover:text-white">
            <X size={16} />
        </button>
    </motion.div>
);

// ======= MAIN COMPONENT =======
const Contact: React.FC = () => {
    const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { lang } = useLanguage();
    const t = translations[lang];

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        if (!name || !email || !message) {
            setNotification({ message: t.empty, type: "error" });
            return;
        }
        if (!validateEmail(email)) {
            setNotification({ message: t.invalid, type: "error" });
            return;
        }

        setIsSubmitting(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { name, email, message },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setNotification({ message: t.success, type: "success" });
            form.reset();
        } catch (error) {
            console.error("FAILED...", error);
            setNotification({ message: t.failed, type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-8 bg-background transition-colors duration-300">
            <AnimatePresence>
                {notification && (
                    <NotificationPopup
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification(null)}
                    />
                )}
            </AnimatePresence>

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={itemVariants}
                    className="mb-14 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl dark:text-indigo-500 font-bold text-foreground mb-4">
                        {t.title}
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch"
                >
                    {/* Left */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2 justify-center dark:text-indigo-250">
                                {t.contactInfo}
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed mb-8">{t.description}</p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div key={index} variants={itemVariants} className="flex items-center gap-4">
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

                        {/* Socials */}
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
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${s.link.startsWith("tel:") ? "hover:bg-green-500 hover:text-white" : ""
                                        }`}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right (Form) */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {t.sendMessage}
                        </h3>

                        <form className="space-y-5 flex-1 flex flex-col justify-between" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t.namePlaceholder}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none transition-colors duration-200 hover:border-indigo-400 focus:border-indigo-500 mb-4"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.emailPlaceholder}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none transition-colors duration-200 hover:border-indigo-400 focus:border-indigo-500 mb-4"
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder={t.messagePlaceholder}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none transition-colors duration-200 hover:border-indigo-400 focus:border-indigo-500 resize-none"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors duration-200 hover:bg-primary/90"
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Loader className="w-4 h-4" />
                                        </motion.div>
                                        <span>{t.sending}</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>{t.sendMessageBtn}</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
