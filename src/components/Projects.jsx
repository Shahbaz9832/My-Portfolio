import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Card from "./ui/Card";
import ExternalLink from "./ui/ExternalLink";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import Tag from "./ui/Tag";

const projects = [
  {
    title: "Plastecure",
    description:
      "AI-powered plastic waste detection platform using YOLOv8 and OpenCV with TensorFlow Lite deployment on ESP32-CAM.",
    tech: ["React", "Node.js", "YOLOv8", "OpenCV", "MongoDB"],
    achievement: "92% Plastic Detection Accuracy",
    demo: "https://plastecure.netlify.app",
    github: "https://github.com/Shahbaz9832/Plastecure",
  },
  {
    title: "AI Interview Preparation Platform",
    description:
      "Full-stack interview preparation platform featuring AI-generated questions, authentication, and interactive interview practice.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI"],
    achievement: "Full Stack AI Platform",
    demo: "https://ai-interview-preparation-platform-five.vercel.app",
    github: "https://github.com/Shahbaz9832/AI-Interview-Preparation-Platform",
  },
  {
    title: "iPhone Website Clone",
    description:
      "Modern Apple-inspired landing page built using React, GSAP, Tailwind CSS and Three.js with smooth animations.",
    tech: ["React", "GSAP", "Tailwind", "Three.js"],
    achievement: "Responsive 3D UI",
    demo: "https://iphone-website-nu-nine.vercel.app/",
    github: "https://github.com/Shahbaz9832/iphone_website",
  },
  {
    title: "MERN E-Commerce Backend API",
    description:
      "RESTful backend with JWT authentication, product management, protected routes and MongoDB integration.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    achievement: "Secure REST APIs",
    github: "https://github.com/Shahbaz9832/MERN-Stack-E-Commerce-Backend",
  },
  {
    title: "Note Taking Web Application",
    description:
      "Responsive React application supporting CRUD operations with reusable components and clean UI.",
    tech: ["React", "JavaScript", "CSS"],
    achievement: "CRUD Functionality",
    github: "https://github.com/Shahbaz9832/Note-Taking-WebApplication1",
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      className="bg-slate-50 dark:bg-slate-900"
      containerClassName="max-w-7xl"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of projects demonstrating my experience in full-stack development, backend engineering, AI, and modern frontend technologies."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between hover:-translate-y-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-7 mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item, i) => (
                  <Tag key={i} className="text-xs px-3 py-1">
                    {item}
                  </Tag>
                ))}
              </div>

              {/* Achievement */}
              <div className="mb-6">
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  ✓ {project.achievement}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              {project.demo && (
                <ExternalLink
                  href={project.demo}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </ExternalLink>
              )}

              <ExternalLink
                href={project.github}
                className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 px-4 py-2 rounded-full transition"
              >
                <FaGithub />
                GitHub
              </ExternalLink>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
