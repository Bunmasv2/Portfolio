"use client";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import TechnicalSkills from "../sections/TechnicalSkills";
import Projects from "../sections/Projects";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";
import ThemeToggle from "../components/ThemeToggle";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext"
import Skill from "../sections/Skill";



const ProjectPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const el = document.getElementById(id);
            if (el) {
                // Delay 50ms để chắc chắn component render xong
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 50);
            }
        }
    }, [location]);
    return (
        // <LanguageProvider>
        <div className="bg-background text-foreground min-h-screen transition-colors duration-500">
            {/* <ThemeToggle /> */}
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 sm:px-8">
                <Skill />
                <TechnicalSkills />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
        // </LanguageProvider>
    );
};

export default ProjectPage;
