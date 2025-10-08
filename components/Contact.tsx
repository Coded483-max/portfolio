"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-slate-300 via-gray-100 to-slate-400 bg-clip-text text-transparent"
        >
          Let’s Connect ⚡
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          Whether you have an idea, a question, or just want to say hi — my
          inbox is always open. Let’s build something amazing together.
        </p>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto bg-gray-800/60 p-8 rounded-2xl backdrop-blur-lg border border-gray-700"
        >
          <div className="grid gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-slate-400 to-gray-300 text-black font-semibold rounded-lg hover:from-gray-200 hover:to-white transition"
          >
            <Send size={18} /> Send Message
          </motion.button>
        </motion.form>

        <div className="flex justify-center gap-8 mt-12 text-gray-400">
          <a
            href="mailto:solomoncudjoe@gmail.com"
            className="hover:text-gray-100 transition"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
