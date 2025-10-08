"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import PageLoader from "@/components/PageLoader";

// ✨ Import your sections
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Services from "@/components/Services";
import Resume from "@/components/Resume";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => setShowContent(true), 3300); // after loader finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!showContent ? (
        // 🌀 Page loader first
        <PageLoader key="loader" />
      ) : (
        // 🌐 Portfolio content fades in
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-black text-white font-sans"
        >
          {/* ✅ Navbar */}
          <Navbar />

          {/* ✅ Hero Section */}
          <section data-aos="fade-up" className="pt-20" id="home">
            <Hero />
          </section>

          {/* ✅ Projects Section */}
          <section data-aos="fade-up" className="py-16" id="projects">
            <Projects />
          </section>
          {/* ✅ Services Section */}
          <section data-aos="fade-up" className="py-16" id="services">
            <Services />
          </section>

          {/* ✅ About Section */}
          <section data-aos="fade-up" className="py-16" id="about">
            <About />
          </section>
          {/* ✅ Contact Section */}
          <section data-aos="fade-up" className="py-16" id="contact">
            <Contact />
          </section>
          {/* ✅ Resume Section */}
          <section data-aos="fade-up" className="py-16" id="resume">
            <Resume />
          </section>

          {/* ✅ Footer */}
          <footer className="text-center text-gray-500 py-6 text-sm">
            &copy; {new Date().getFullYear()} Coded.dev — All rights reserved.
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
