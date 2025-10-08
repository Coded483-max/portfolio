"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/utils/animations";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaHtml5,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const skills = [
    {
      name: "Frontend Development",
      icon: <FaReact size={28} className="text-cyan-400" />,
    },
    {
      name: "Backend Development",
      icon: <FaNodeJs size={28} className="text-green-500" />,
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma size={28} className="text-pink-400" />,
    },
    {
      name: "Mobile App Development",
      icon: <FaMobileAlt size={28} className="text-indigo-400" />,
    },
    {
      name: "Database Management",
      icon: <FaDatabase size={28} className="text-yellow-400" />,
    },
    {
      name: "API Integration",
      icon: <SiJavascript size={28} className="text-yellow-500" />,
    },
    {
      name: "Cybersecurity Awareness",
      icon: <FaLock size={28} className="text-red-400" />,
    },
    {
      name: "Cloud & Deployment",
      icon: <FaCloud size={28} className="text-blue-400" />,
    },
  ];

  const techStack = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "React Native", icon: <FaMobileAlt className="text-indigo-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  return (
    <section
      id="about"
      className="h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white flex items-center"
    >
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 md:px-12 text-center"
      >
        {/* 🌟 Heading */}
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          About Me
        </h2>

        {/* 🧍‍♂️ Intro */}
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 mb-12">
          I'm{" "}
          <span className="font-semibold text-indigo-400">Solomon Cudjoe</span>,
          also known as{" "}
          <span className="font-semibold text-purple-400">Coded</span> — a{" "}
          <span className="font-semibold">Full-Stack Developer</span> passionate
          about creating intuitive, scalable, and impactful digital products. My
          focus lies in merging clean design with solid functionality to deliver
          seamless experiences across web and mobile.
        </p>

        {/* 🧩 Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-5 border border-gray-700 rounded-xl bg-gray-800 hover:bg-gray-700 transition flex flex-col items-center justify-center space-y-3"
            >
              {skill.icon}
              <p className="font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* ⚙️ Tech Stack */}
        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">
            Tools & Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-3xl">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className="flex flex-col items-center text-gray-300"
              >
                {tech.icon}
                <p className="text-sm mt-1">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🚀 Call to Action */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
