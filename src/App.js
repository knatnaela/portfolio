import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Badges from "./components/Badges";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans min-h-screen relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl animate-pulse delay-2000" />
      </div>

      <Navbar />
      <Hero />
      <Badges />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
