"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogList from "../../components/BlogList";
import ThemeToggle from "../../components/ThemeToggle";
import ScrollToTop from "../../components/ScrollToTop"; // Giả sử bạn có component này
import { LanguageProvider } from "../../context/LanguageContext"

const BlogPage = () => {
    return (
        <LanguageProvider>
            <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
                {/* <ThemeToggle /> */}
                <Navbar />
                <main className="max-w-7xl mx-auto px-6 py-24">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 dark:text-indigo-500 text-balance">
                            My Blog
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Sharing knowledge from Cisco NetAcad courses: Java, JavaScript Essentials, and Networking Basics.
                        </p>
                    </motion.div>

                    {/* Blog List Section */}
                    <BlogList />
                </main>
                <ScrollToTop />
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default BlogPage;