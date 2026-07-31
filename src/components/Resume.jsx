import ExternalLink from "./ui/ExternalLink";
import Section from "./ui/Section";
import { RESUME_URL } from "../constants/links";

const Resume = () => {
  return (
    <Section
      id="resume"
      className="bg-white dark:bg-slate-800"
      containerClassName="max-w-4xl text-center"
    >
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Resume
      </h2>

      <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
        Download my latest resume to learn more about my technical skills,
        projects, certifications, and academic background.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <ExternalLink
          href={RESUME_URL}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          📄 View Resume
        </ExternalLink>

        <a
          href={RESUME_URL}
          download
          className="border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          ⬇ Download Resume
        </a>
      </div>
    </Section>
  );
};

export default Resume;
