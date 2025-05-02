import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2025",
    color: "bg-blue-500/10",
    image: "/Images/Microsoft-Azure.png",
  },
  {
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2025",
    color: "bg-blue-400/10",
    image: "/Images/AI Associate.png",
  },
  {
    title: "Salesforce Certified AI Specialist",
    issuer: "Salesforce",
    date: "2025",
    color: "bg-blue-400/10",
    image: "/Images/AI Specialist.png",
  },
  {
    title: "Command Line in Linux",
    issuer: "Coursera",
    date: "2024",
    color: "bg-yellow-500/10",
    image: "/Images/Command Line in linux.png",
  },
  {
    title: "Data Science and Big Data Analytics - Academic Associate",
    issuer: "Dell Technologies",
    date: "2019",
    color: "bg-gray-500/10",
    image: "/Images/Dell-EMC.png ",
  },
];

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    const delay = 20;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      className="py-20 bg-secondary/30 dark:bg-secondary/10 relative"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-1000 dark:text-white"
        >
          Certifications
        </motion.h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap auto-scroll-hide h-fit max-h-[500px]"

        >
          <div className="flex space-x-6 min-w-max px-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[45rem]" // Fixed consistent width
              >
                <Card className="w-full h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${cert.color}`}>
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-12 h-12 object-contain rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-300 rounded" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{cert.issuer} - {cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
