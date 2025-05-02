import { useState, useEffect } from "react";
import { Moon, Sun, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-semibold text-gray-800 dark:text-white"
          >
            Sahil Tiwari
          </motion.span>

          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Education", "Experience","Certifications", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button className="rounded-full" asChild>
              <a
                href="/Resume/SahilTiwari-SEI.pdf"
                download="Sahil_Tiwari.pdf"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
