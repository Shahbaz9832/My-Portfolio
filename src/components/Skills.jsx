import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";
import Card from "./ui/Card";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import Tag from "./ui/Tag";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: ["C", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Google Colab"],
  },
  {
    title: "AI & Computer Vision",
    icon: <FaBrain />,
    skills: ["YOLOv8", "OpenCV", "PyTorch", "TensorFlow Lite", "ESP32-CAM"],
  },
  {
    title: "Core Computer Science",
    icon: <FaLaptopCode />,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      className="bg-slate-50 dark:bg-slate-900"
      containerClassName="max-w-7xl"
    >
      <SectionHeading
        title="Technical Skills"
        subtitle="A collection of technologies, programming languages, frameworks, and tools that I use to build scalable and modern web applications."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl text-blue-600">{category.icon}</div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <Tag
                  key={i}
                  className="px-4 py-2 text-sm hover:scale-105 transition"
                >
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
