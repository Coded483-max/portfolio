"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/utils/animations";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive, fast, and elegant web apps using React and Node.js.",
  },
  {
    title: "Mobile App Development",
    desc: "Developing seamless cross-platform mobile experiences using React Native.",
  },
  {
    title: "UI/UX Design",
    desc: "Designing modern interfaces with focus on usability and aesthetic appeal.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="h-screen py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
