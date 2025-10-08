import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-indigo-600 to-purple-600 text-white dark:from-gray-900 dark:to-black"
      id="home"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Solomon Cudjoe
      </motion.h1>

      <motion.h2
        className="text-2xl font-medium mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        aka <span className="text-yellow-300">Coded</span>
      </motion.h2>

      <motion.p
        className="max-w-xl text-lg mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I’m a passionate{" "}
        <span className="font-semibold">Web & Mobile Developer</span> crafting
        modern and functional digital experiences.
      </motion.p>

      <motion.a
        href="#projects"
        className="bg-white text-indigo-700 dark:bg-indigo-500 dark:text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 hover:bg-gray-100 dark:hover:bg-indigo-600 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
