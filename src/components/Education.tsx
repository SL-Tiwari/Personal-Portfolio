import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      level: "Secondary Education",
      institution: "CMR Model High School",
      year: "2004 – 2014",
      board: "CBSE",
      result: "85%",
    },
    {
      level: "Intermediate",
      institution: "Narayana Junior College",
      year: "2014 – 2016",
      board: "State Board",
      result: "96.4%",
    },
    {
      level: "Bachelor of Technology (B.Tech)",
      institution: "CMR Engineering College",
      year: "2016 – 2020",
      specialization: "Computer Science",
      result: "8.37 CGPA",
    },
    {
      level: "Master of Science (MS)",
      institution: "Western Illinois University",
      year: "2022 – 2024",
      specialization: "Computer and Information Sciences",
      result: "3.74 CGPA",
    },
  ];

  return (
<section id="education" className="py-20 bg-secondary/30 dark:bg-secondary/10">

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Education
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary dark:bg-white/30 transform -translate-x-1/2" />

          {education.reverse().map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative mb-8 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center md:items-center justify-between`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-2.5 h-2.5 bg-primary dark:bg-white rounded-full border-2 border-white dark:border-gray-900 shadow" />
              </div>

              {/* Spacer Side */}
              <div className="w-full md:w-5/12"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 p-2">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {edu.level}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.specialization && `${edu.specialization} • `}
                    {edu.board && `${edu.board} • `}
                    {edu.year}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Result: {edu.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
