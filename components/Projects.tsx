"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Vote",
    description:
      "A blockchain-based online voting system ensuring transparency, security, and verifiable election results.",
    image: "/projects/smartvote.png",
    live: "https://smartvote.vercel.app/",
    github: "https://github.com/Coded-SmartVote",
    tech: ["React", "Node.js", "Solidity", "MongoDB"],
  },
  {
    title: "Task Manager",
    description:
      "A full-featured task management app with priorities, due dates, and smooth animations.",
    image: "/projects/taskmanager.png",
    live: "https://coded-tasks.vercel.app/",
    github: "https://github.com/Coded-TaskManager",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "Coded Chat",
    description:
      "A real-time MERN chat application using Socket.io and Redux Toolkit for instant messaging.",
    image: "/projects/chatapp.png",
    live: "https://codedchat.vercel.app/",
    github: "https://github.com/Coded-ChatApp",
    tech: ["React", "Redux Toolkit", "Node.js", "Socket.io"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-gray-300 via-slate-200 to-gray-400 bg-clip-text text-transparent"
        >
          Featured Projects 💻
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="relative group rounded-2xl overflow-hidden border border-gray-700 bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Metallic Shimmer Border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-gray-400 via-slate-200 to-gray-400 opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="relative w-full h-52 overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700"
                    />
                    {/* Shimmer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                  </motion.div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-gray-700/70 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-700/50">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-gray-100 transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
