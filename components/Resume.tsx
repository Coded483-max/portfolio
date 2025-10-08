"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/utils/animations";

const skills = ["React", "Node.js", "MongoDB", "React Native", "Tailwind CSS"];

const Resume = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="resume" className="h-screen py-20 bg-gray-900 text-white">
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 md:px-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
          Resume
        </h2>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="bg-gray-800 p-5 rounded-xl mb-6">
            <p className="text-gray-200 font-medium">
              BSc Computer Science — University of Ghana
            </p>
            <p className="text-gray-400">Expected Graduation: 2025</p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 bg-gray-700 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="/resume.pdf"
            download
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900 font-semibold hover:opacity-90 transition"
          >
            Download PDF
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
