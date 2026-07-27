const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Google Colab"],
  },
  {
    title: "AI & Computer Vision",
    skills: ["YOLOv8", "OpenCV", "PyTorch", "TensorFlow Lite", "ESP32-CAM"],
  },
  {
    title: "Core Computer Science",
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
      className="bg-white dark:bg-gray-800 py-16 px-4 transition-colors"
    >
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Skills</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-600">
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
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
