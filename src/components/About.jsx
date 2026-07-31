import Card from "./ui/Card";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  { title: "Degree", value: "B.Tech CSE" },
  { title: "Graduation", value: "2026" },
  { title: "Projects", value: "5+ Completed" },
  { title: "Focus", value: "Full Stack Development" },
];

const About = () => {
  return (
    <Section
      id="about"
      className="bg-slate-50 dark:bg-slate-900"
      containerClassName="max-w-6xl"
    >
      <SectionHeading
        title="About Me"
        subtitle="Passionate about building scalable web applications with clean code, modern UI, and great user experience."
        subtitleClassName="max-w-3xl text-slate-600 dark:text-slate-400"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="grid grid-cols-2 gap-5">
          {highlights.map((item, index) => (
            <Card key={index}>
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase">
                {item.title}
              </h3>

              <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {item.value}
              </p>
            </Card>
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
              applications. I enjoy transforming ideas into real products using
              React, JavaScript, Node.js, Express.js, and MongoDB.
            </p>

            <p>
              Through academic and personal projects, I've gained hands-on
              experience in full-stack development, REST APIs, authentication,
              responsive UI design, and AI-powered applications. I enjoy writing
              clean, reusable code while continuously improving my
              problem-solving skills.
            </p>

            <p>
              I'm currently seeking opportunities as a Software Engineer, Full
              Stack Developer, Backend Developer, or Java Developer where I can
              contribute to impactful projects, collaborate with experienced
              teams, and continue growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
