"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => setShowContent(true), 3300); // after loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!showContent ? ( // show loader first
        <PageLoader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-center">
            Welcome to <span className="text-blue-600">Coded.dev</span> powered
            by <span className="text-green-600">Next.js</span> ⚡
          </h1>

          <p
            className="text-lg sm:text-2xl text-center max-w-2xl"
            data-aos="fade-up"
          >
            A sleek portfolio built with Next.js 15, Tailwind CSS, Framer
            Motion, and AOS animations — smooth, fast, and interactive.
          </p>

          <footer className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Coded.dev. All rights reserved.
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
