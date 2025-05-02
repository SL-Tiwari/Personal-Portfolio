
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} Sahil Tiwari. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
