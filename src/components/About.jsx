const highlights = [
  { title: "Degree", value: "B.Tech CSE" },
  { title: "Graduation", value: "2026" },
  { title: "Projects", value: "5+ Completed" },
  { title: "Focus", value: "Full Stack Development" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-slate-900 py-20 px-6 transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          About Me
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-14">
          Passionate about building scalable web applications with clean code,
          modern UI, and great user experience.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Aspiring Software Engineer & Full Stack Developer
            </h3>

            <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-8">
              <p>
                I'm a final-year Computer Science and Engineering student with a
                strong interest in building scalable and user-friendly web
                applications. I enjoy transforming ideas into real products
                using React, JavaScript, Node.js, Express.js, and MongoDB.
              </p>

              <p>
                Through academic and personal projects, I've gained hands-on
                experience in full-stack development, REST APIs, authentication,
                responsive UI design, and AI-powered applications. I enjoy
                writing clean, reusable code while continuously improving my
                problem-solving skills.
              </p>

              <p>
                I'm currently seeking opportunities as a Software Engineer,
                Full Stack Developer, Backend Developer, or Java Developer where
                I can contribute to impactful projects, collaborate with
                experienced teams, and continue growing as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
