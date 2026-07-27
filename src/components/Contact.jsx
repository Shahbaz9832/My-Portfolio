import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm currently looking for Software Engineer, Full Stack Developer,
            Backend Developer, and Java Developer opportunities. If you'd like
            to discuss a project or opportunity, feel free to connect.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Email */}
          <a
            href="mailto:shahbazansari6464141@gmail.com"
            className="bg-slate-800 rounded-2xl p-6 hover:bg-blue-600 transition duration-300"
          >
            <FaEnvelope className="text-3xl mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Email
            </h3>

            <p className="text-sm break-all text-slate-300">
              shahbazansari6464141@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shahbaz-ansari-469326274/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl p-6 hover:bg-blue-600 transition duration-300"
          >
            <FaLinkedin className="text-3xl mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-slate-300">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Shahbaz9832"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl p-6 hover:bg-blue-600 transition duration-300"
          >
            <FaGithub className="text-3xl mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              GitHub
            </h3>

            <p className="text-slate-300">
              View my repositories
            </p>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl p-6 hover:bg-blue-600 transition duration-300"
          >
            <FaDownload className="text-3xl mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Resume
            </h3>

            <p className="text-slate-300">
              Download PDF
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
