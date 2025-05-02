
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Reality AI Labs",
    period: "2024 - Present",
    description: [
      "Developed a real-time chat platform with an interactive chatbot, increasing user engagement by 40% and improving customer retention by 25%.",
      "Designed a responsive UI using React and Redux, improving user satisfaction by 30% through a dynamic, AI-powered chat interface.",
      "Optimized data retrieval using Firebase and Firestore, reducing response times by 30% and ensuring scalable data management.",
      "Created an AI chat interface using React 18, Next.js, and Redux, implementing advanced state management and an input-locking mechanism to prevent multiple submissions during AI processing, resulting in a 20% decrease in user submission errors.",
      "Leveraged React Hooks and Material-UI to enhance front-end performance by 35%, while maintaining source code, conducting code reviews, and improving team efficiency by 15% through GitHub Actions and optimized workflows."
    ],
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2021 - 2022",
    description: [
      "Designed and developed new Pro*C services to introduce new functionalities in existing applications. Created and optimized batch scripts for seamless database interactions and updates.Conducted impact analysis to ensure new changes didn’t disrupt existing workflows.",
      "Led end-to-end testing phases, including User Acceptance Testing (UAT), to ensure stability. Created comprehensive testing documents to validate critical applications.",
      "Coordinated and executed successful on-time deployments of enhancement projects. Led post-deployment resolutions, ensuring smooth transitions.Maintained a Knowledge Database to document frequent issues, workarounds, and best practices.",
      "Conducted knowledge transfer sessions for the Production Support team and new team members.Created effort estimation sheets to improve project planning and execution."
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Smart Interviews",
    period: "2019 - 2020",
    description: [
      "Guided students in debugging code, resolving logical errors, and improving overall efficiency.Helped students clear conceptual doubts during coding sessions, enhancing their understanding of programming fundamentals.",
      "Assisted in identifying edge cases and generating comprehensive test cases to ensure robust and optimized solutions.Encouraged a systematic approach to writing test cases for better debugging and validation.",
      "Supported students in improving algorithmic thinking and optimizing their problem-solving strategies.Fostered an environment of continuous learning by encouraging students to explore multiple approaches and refine their solutions",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.period}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
