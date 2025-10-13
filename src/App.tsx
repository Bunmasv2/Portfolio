import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ClockWidget from "./components/ClockWidget";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-500">
      <ThemeToggle />
      {/* <ClockWidget /> */}
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 sm:px-8">
        <Hero />
        <About />
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


export default App;
