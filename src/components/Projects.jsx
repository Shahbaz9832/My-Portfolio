const projects = [
  {
    title: "Plastecure",
    description:
      "An AI-powered plastic waste detection platform that uses YOLOv8 and computer vision to identify plastic bottles. The project includes a reward system and demonstrates machine learning deployment with TensorFlow Lite and ESP32-CAM.",
    demo: "https://plastecure.netlify.app",
    github: "https://github.com/Shahbaz9832/Plastecure",
  },
  {
    title: "AI Interview Preparation Platform",
    description:
      "A full-stack AI interview preparation platform that enables users to practise interviews, receive AI-generated questions, and improve technical and communication skills through an interactive interface.",
    demo: "https://ai-interview-preparation-platform-five.vercel.app",
    github:
      "https://github.com/Shahbaz9832/AI-Interview-Preparation-Platform",
  },
  {
    title: "iPhone Website Clone",
    description:
      "A modern 3D Apple iPhone landing page built using React, Tailwind CSS, GSAP, and Three.js with smooth animations and a fully responsive design.",
    demo: "https://iphone-website-nu-nine.vercel.app/",
    github: "https://github.com/Shahbaz9832/iphone_website",
  },
  {
    title: "MERN E-Commerce Backend API",
    description:
      "RESTful backend API for an e-commerce application with JWT authentication, protected routes, product and user management, and MongoDB integration.",
    github:
      "https://github.com/Shahbaz9832/MERN-Stack-E-Commerce-Backend",
  },
  {
    title: "Note Taking Web Application",
    description:
      "A React-based note-taking application with CRUD functionality, reusable components, and responsive UI for efficient note management.",
    github:
      "https://github.com/Shahbaz9832/Note-Taking-WebApplication1",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h4 className="text-xl font-bold mb-3">{project.title}</h4>

            <p className="text-gray-600 dark:text-gray-300 mb-5">
              {project.description}
            </p>

            <div className="flex gap-3 flex-wrap">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
