"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";
import ThemeToggle from "../components/ThemeToggle";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const ProjectPage = () => {
    return (
        <div className="bg-background text-foreground min-h-screen transition-colors duration-500">
            <ThemeToggle />
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 sm:px-8">
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default ProjectPage;
