import { motion } from "framer-motion";
import { Code, Database, Cloud, Brain, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skillsData = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "AngularJS"
    ],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Java (Spring Boot, Hibernate)",
      "RESTful APIs",
      "Microservices",
      "SQL (MySQL, PostgreSQL)",
      "MongoDB",
      "Firebase / Firestore",
      "PL/SQL"
    ],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions, Jenkins)",
      "AWS Lambda"
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI & ML",
    skills: [
      "Python (Flask, NumPy, Pandas)",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision"
    ],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Other Skills",
    skills: [
      "Agile Methodologies",
      "Unit/Integration Testing (Jest, JUnit)",
      "Debugging",
      "Git, GitHub, GitLab",
      "Jira",
      "LogRocket"
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.skills.map((item) => (
                      <li key={item} className="text-gray-600 dark:text-gray-300">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
