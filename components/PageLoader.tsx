"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react"; // nice minimal code icon

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [mouseX, setMouseX] = useState(50);
  const [isMobile, setIsMobile] = useState(false);
  const fullText = "Coded.dev";

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    // If user has already seen it, skip the loader
    // if (hasSeenLoader) {
    //   setIsLoading(false);
    //   return;
    // }

    const mobileCheck = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 120);

    // End loader after typing finishes
    const endAfterTyping = setTimeout(() => {
      setIsLoading(false);
      // sessionStorage.setItem("hasSeenLoader", "true");
    }, fullText.length * 120 + 1200);

    if (!mobileCheck) {
      // Desktop: move gradient with mouse
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 100;
        setMouseX(x);
      };
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        clearInterval(typing);
        clearTimeout(endAfterTyping);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      // Mobile: auto shimmer
      let dir = 1;
      const shimmer = setInterval(() => {
        setMouseX((prev) => {
          if (prev >= 100) dir = -1;
          if (prev <= 0) dir = 1;
          return prev + dir * 1.5;
        });
      }, 50);

      return () => {
        clearInterval(typing);
        clearTimeout(endAfterTyping);
        clearInterval(shimmer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-3">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                backgroundImage: `linear-gradient(
                  120deg,
                  hsl(${mouseX}, 80%, 85%),
                  #60a5fa,
                  #a78bfa,
                  hsl(${(mouseX + 60) % 360}, 80%, 85%)
                )`,
                backgroundSize: "200% 200%",
                backgroundPosition: `${mouseX}% 50%`,
                textShadow: "0 0 15px rgba(147, 197, 253, 0.7)",
                transition: "background-position 0.1s ease",
              }}
            >
              {text}
              <motion.span
                className="inline-block w-2 h-6 bg-gradient-to-b from-purple-400 to-blue-400 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
            </motion.h1>

            {/* 💻 Animated logo icon */}
            {text === fullText && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              >
                <Code2 className="text-blue-400 w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_12px_#60a5fa]" />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
