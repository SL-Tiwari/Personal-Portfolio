import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I’m <strong>Sahil Tiwari</strong> — a Software Engineer with hands-on
            experience in Java Full Stack Development and a passion for building
            scalable web applications. I hold a Master’s in Computer and Information
            Science from Western Illinois University. I've worked at Cognizant and
            currently intern at Reality AI Labs. I enjoy solving real-world problems 
            through clean code and innovative thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
