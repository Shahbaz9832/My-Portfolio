const Projects = () => (
  <section id="projects" className="container mx-auto py-12 px-4">
    <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>

    {/* Flex container to center the card */}
    <div className="flex justify-center">
      {/* iPhone Website Clone */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-xl w-full">
        <h4 className="text-xl font-bold mb-2">iPhone Website Clone</h4>
        <p className="mb-4">
          An interactive 3D iPhone landing page built with React, Tailwind CSS, and Three.js. Features smooth animations, responsive design, and a realistic device model for an immersive product showcase experience.
        </p>

        <div className="flex gap-4">
          <a
            href="https://iphone-website-nu-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Shahbaz9832/iphone_website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
