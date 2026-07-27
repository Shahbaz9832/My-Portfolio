const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-white dark:bg-slate-800 py-20 px-6 transition-colors"
    >
      <div className="container mx-auto max-w-4xl text-center">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Resume
        </h2>

        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Download my latest resume to learn more about my technical skills,
          projects, certifications, and academic background.
        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            📄 View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            ⬇ Download Resume
          </a>

        </div>

      </div>
    </section>
  );
};

export default Resume;
