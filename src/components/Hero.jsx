import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
  }, []);

  return (
    <section ref={heroRef} className="text-center py-20 bg-gray-900 dark:bg-gray-900 transition-colors">
      <h2 className="text-4xl font-bold">Hi, I'm Shahbaz Ansari</h2>
      <p className="text-xl mt-2">Final-year B.Tech CSE student & Front-End Developer</p>
    </section>
  );
};

export default Hero;
