import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 py-8 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Shahbaz Ansari
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Aspiring Software Engineer • Full Stack Developer • Backend Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://github.com/Shahbaz9832"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shahbaz-ansari-469326274/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-3">

          <p>
            © {new Date().getFullYear()} Shahbaz Ansari. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with React, Tailwind CSS & GSAP
            <FaHeart className="text-red-500" />
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
