
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const Index = () => {
  useEffect(() => {
    document.title = "Sahil Tiwari";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 dark:from-background dark:via-background dark:to-secondary/10">
      <div className="fixed inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Code Symbols */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-primary/20 animate-float">{`</>`}</div>
        <div className="absolute top-1/3 right-1/4 text-8xl text-primary/20 animate-float-delayed">{`{ }`}</div>
        <div className="absolute bottom-1/4 left-1/3 text-7xl text-primary/20 animate-float-slow">{`</>`}</div>
        
        {/* Tech Stack Icons */}
        <div className="absolute top-1/6 right-1/3 text-5xl text-primary/20 animate-float">{`<React/>`}</div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl text-primary/20 animate-float-delayed">{`{JSON}`}</div>
        <div className="absolute top-1/2 right-1/6 text-4xl text-primary/20 animate-float-slow">{`<div>`}</div>
        
        {/* Tech Circles */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 rounded-full bg-primary/10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 rounded-full bg-secondary/10 animate-pulse-delayed"></div>
        
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-[0.05] text-xs leading-loose whitespace-pre font-mono select-none overflow-hidden">
          {Array(50).fill('10').join(' ')}
        </div>
        
        {/* Connection Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.05]">
            <pattern id="pattern-hex" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M8 1L15 4.5V11.5L8 15L1 11.5V4.5L8 1Z" stroke="currentColor" fill="none"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-hex)"/>
          </svg>
        </div>

        {/* Curved Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q50,0 100,50 T200,50" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <path d="M0,100 Q50,50 100,100 T200,100" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <path d="M0,150 Q50,100 100,150 T200,150" stroke="currentColor" fill="none" strokeWidth="0.5"/>
        </svg>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, -5px) rotate(2deg); }
          50% { transform: translate(0, -10px) rotate(-2deg); }
          75% { transform: translate(-5px, -5px) rotate(2deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-5px, 5px) rotate(-2deg); }
          50% { transform: translate(0, 10px) rotate(2deg); }
          75% { transform: translate(5px, 5px) rotate(-2deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(0, 10px) rotate(3deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Index;
