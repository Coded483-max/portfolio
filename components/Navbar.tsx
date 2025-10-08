"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Initialize theme properly on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ✅ Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // ✅ Detect scroll for background effect
  useEffect(() => {
    const sections = [
      "home",
      "projects",
      "services",
      "about",
      "contact",
      "resume",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= viewportHeight / 2 &&
            rect.bottom >= viewportHeight / 2
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✨ Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(120deg, #93c5fd, #a78bfa, #f9a8d4, #60a5fa)",
          }}
        >
          Coded.dev
        </a>

        {/* 🌐 Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              //   className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition"
              className={`${
                activeSection === link.href.replace("#", "")
                  ? "text-gray-300 underline underline-offset-4 transition"
                  : "text-gray-700"
              } hover:text-white hover:underline transition`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ☀️ / 🌙 & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl focus:outline-none transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md text-center py-6 space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 text-lg hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
