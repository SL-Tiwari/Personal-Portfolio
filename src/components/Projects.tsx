
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "To Do List",
    description: "A simple To-Do List app to help you manage tasks. Easily add, delete, and remove items from your list to stay organized and on top of your tasks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SL-Tiwari/To-do-List",
    live: "https://sl-tiwari.github.io/To-do-List/",
    image: "/Images/Todolist.jpg",
  },
  {
    title: "Cryptographic App",
    description: "A cryptographic app that provides tools for encrypting and decrypting messages, as well as generating secure keys and hashes.",
    technologies: ["Express js", "Node js", "Websockets", "Vercel"],
    github: "https://github.com/SL-Tiwari/Cryptographic_app",
    // live: "https://ai-image-gen.com",
    image: "/Images/Cryptographic.png",
  },
  {
    title: "Cosmos Chat UI",
    description: "A collaborative task management system with real-time updates, team collaboration features, and progress tracking.",
    technologies: ["React", "React Hooks", "Chat UI Library", "OpenAI API"],
    github: "https://github.com/SL-Tiwari/Cosmos-Chat-UI",
    image: "/Images/Cosmos-chat-ui.png",
  },
  {
    title: "Personal Portfolio",
    description: "A real-time weather dashboard that displays weather information using multiple APIs and interactive visualizations.",
    technologies: ["React ", "Typescript", "EmailJs", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-dashboard-demo.com",
    image: "/Images/Personal Portfolio.png",
  },
  {
    title: "Airline Management System",
    description: "Built a full-stack Airline Management System using Spring Boot and Angular 12. Admins manage flights; users can book, cancel, and edit reservations. Follows SOLID and MVC principles.",
    technologies: ["Angular 12","Java", "Spring Boot", "Typescript", "Babel", "JQuery", "Bootstrap", "MySQL"],
    github: "https://github.com/SL-Tiwari/Airline-Management-System",
    // live: "https://weather-dashboard-demo.com",
    image: "/Images/Airline.png",
  },
  {
    title: "Online Food Ordering System",
    description: "Developed an Online Food Ordering System using Spring Boot and Angular. Users can browse menus, place orders, and track status. Admins manage restaurants and orders. Follows SOLID and MVC design.",
    technologies: ["Angular 12","Java", "Spring Boot", "Typescript", "Babel", "JQuery", "Bootstrap", "MySQL"],
    github: "https://github.com/SL-Tiwari/Online-Food-Ordering-System",
    // live: "https://weather-dashboard-demo.com",
    image: "/Images/OnlineFood.jpeg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Link className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
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

export default Projects;
