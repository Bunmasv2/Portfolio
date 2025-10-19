"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import TechnicalSkills from "../sections/TechnicalSkills";
import Contact from "../sections/Contact";
import ThemeToggle from "../components/ThemeToggle";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import SoftSkills from "../sections/SoftSkill";
import { LanguageProvider } from "../context/LanguageContext"
import Skill from "../sections/Skill";


const Home = () => {
    return (
        // <LanguageProvider>
        <div className="bg-background text-foreground min-h-screen transition-colors duration-500">
            {/* <ThemeToggle />
                <LanguageToggle /> */}
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 sm:px-8">
                <Hero />
                <About />
                <Skill />
                <TechnicalSkills />
                <SoftSkills />
                <Contact />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
        // </LanguageProvider>
    );
};

export default Home;
