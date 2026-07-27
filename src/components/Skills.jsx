import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

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
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Netlify",
      "Google Colab",
    ],
  },
  {
    title: "AI & Computer Vision",
    icon: <FaBrain />,
    skills: [
      "YOLOv8",
      "OpenCV",
      "PyTorch",
      "TensorFlow Lite",
      "ESP32-CAM",
    ],
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
    <section
      id="skills"
      className="bg-slate-50 dark:bg-slate-900 py-20 px-6 transition-colors"
    >
      <div className="container mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Technical Skills
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of technologies, programming languages, frameworks,
            and tools that I use to build scalable and modern web
            applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">

                <div className="text-3xl text-blue-600">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
