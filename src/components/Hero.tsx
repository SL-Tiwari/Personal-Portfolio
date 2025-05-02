import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const roles = ["Software Developer", "Java Developer", "Full Stack Enthusiast"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-blue-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="relative w-48 h-48 mx-auto mb-8 group"
        >
          <motion.img
            src="/Images/Profile Picture.png"
            alt="Sahil Tiwari"
            className="rounded-full object-cover w-full h-full shadow-2xl transition-transform duration-300 group-hover:scale-105"
            whileHover={{ scale: 1.35 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Sahil Tiwari
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="relative h-8 overflow-hidden"
        >
          <motion.div
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          >
            I am a {roles[currentRole]}
          </motion.div>
        </motion.div>


        <motion.div
          variants={itemVariants}
          className="mt-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 flex justify-center space-x-6"
        >
          <a
            href="https://github.com/SL-Tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sahil-tiw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/sahiltiwari98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              src="/Images/leetcode-icon.png"
              alt="LeetCode"
              className="w-6 h-6"
            />
          </a>
          
        </motion.div>
        <motion.div
  variants={itemVariants}
  className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 italic text-center"
>
  <motion.div
    variants={itemVariants}
    className="relative bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-10 rounded-xl shadow-lg max-w-2xl mx-auto"
  >
    <motion.q
      variants={itemVariants}
      className="relative z-10 text-xl md:text-2xl font-semibold leading-relaxed"
    >
      The best way to predict the future is to create it. – Peter Drucker
    </motion.q>
  </motion.div>
</motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
