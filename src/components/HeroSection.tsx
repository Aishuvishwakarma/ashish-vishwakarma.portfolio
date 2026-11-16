
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";

const HeroSection: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Developer",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => {
      typed.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080b16] text-white px-6 md:px-16 lg:px-24 py-24"
    >
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="hero-content space-y-6">

          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm">
            Hello! Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Ashish
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Vishwakarma
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            I'm a <span
              ref={typedRef}
              className="text-blue-400"
            />
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            A results-driven MERN Stack Developer with 4+ years of
            professional experience building scalable web applications,
            RESTful APIs, and modern digital solutions. Experienced in
            developing EdTech, E-commerce, Accounting, and Cybersecurity
            platforms using modern technologies.
          </p>

          {/* Experience Highlight */}
          <div className="flex items-center gap-4 py-2">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="text-sm text-gray-400">
                Years of Experience
              </p>
            </div>

            <div className="border-l border-gray-700 pl-4">
              <h3 className="text-lg font-semibold text-white">
                Full Stack
              </h3>
              <p className="text-sm text-gray-400">
                Web Development
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-600/20"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition font-semibold"
            >
              Let's Connect
            </a>
          </div>

          {/* Core Technologies */}
          <div className="flex flex-wrap gap-3 pt-4 text-sm text-gray-400">
            <span>React.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Express.js</span>
            <span>•</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-image flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-2xl opacity-30" />

            <div className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500">
                AV
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
