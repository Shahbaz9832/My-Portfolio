import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ctx;
    try {
      ctx = gsap.context(() => {
        gsap.fromTo(
          hero.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }, hero);
    } catch (error) {
      console.error("Hero intro animation failed", error);
      // Never leave the section stuck at opacity 0 if the animation fails.
      for (const child of hero.children) {
        child.style.opacity = "1";
        child.style.transform = "none";
      }
    }

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-8">
          🚀 Available for Full-Time Opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="text-blue-500">
            Shahbaz Ansari
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
          Software Engineer • Full Stack Developer • Backend Developer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-8 mb-10">
          Final-year Computer Science student passionate about building
          scalable web applications using React, Node.js, Express.js,
          MongoDB, JavaScript, and Java. I enjoy creating clean,
          responsive, and high-performance applications that solve
          real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">

          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-full font-semibold transition duration-300"
          >
            View Projects
            <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 hover:bg-slate-800 px-7 py-3 rounded-full font-semibold transition duration-300"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="border border-slate-600 hover:border-blue-500 hover:bg-slate-800 px-7 py-3 rounded-full font-semibold transition duration-300"
          >
            Contact Me
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-3xl">

          <a
            href="https://github.com/Shahbaz9832"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shahbaz-ansari-469326274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;
