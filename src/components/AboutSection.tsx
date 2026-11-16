
import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const AboutSection: React.FC = () => {
  const expertise = [
    "MERN Stack Development",
    "Frontend Development",
    "Backend API Development",
    "Database Design",
    "Responsive Web Applications",
    "REST API Integration",
    "Mobile App Development",
    "AI & Basic RAG Implementation",
  ];

  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "NestJS",
    "Remix.js",
    "React Native",
    "Firebase",
    "MySQL",
    "Prisma",
    "Tailwind CSS",
  ];

  const highlights = [
    {
      icon: <FaBriefcase />,
      value: "4+ Years",
      label: "Professional Experience",
    },
    {
      icon: <FaCode />,
      value: "Full Stack",
      label: "Development Expertise",
    },
    {
      icon: <FaLaptopCode />,
      value: "Multiple",
      label: "Industry Projects",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080b16] py-20 md:py-28"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-[-150px] w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-sm font-semibold tracking-[3px] uppercase text-blue-400 mb-4">
            Get To Know Me
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Me
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-5" />

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A little introduction about my journey, expertise and passion
            for building digital products.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Profile Card */}
          <div className="lg:col-span-4">
            <div className="relative bg-[#111827] border border-white/10 rounded-3xl p-7 sm:p-9 text-center overflow-hidden group">

              {/* Gradient Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />

              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-br from-blue-400 to-purple-600">
                <div className="w-full h-full rounded-full bg-[#080b16] flex items-center justify-center border-4 border-[#111827]">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    AV
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Ashish Vishwakarma
              </h3>

              <p className="text-blue-400 font-medium mt-2">
                MERN Stack Developer
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-4">
                <FaMapMarkerAlt className="text-blue-400" />
                Bhopal, Madhya Pradesh, India
              </div>

              <div className="border-t border-white/10 my-7" />

              {/* Education */}
              <div className="text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FaGraduationCap className="text-lg" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">
                      Education
                    </p>
                    <p className="text-white font-semibold text-sm">
                      B.Tech - Computer Science
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed pl-[52px]">
                  Radharaman Engineering College, Bhopal
                  <br />
                  RGPV University
                </p>
              </div>

              <div className="border-t border-white/10 my-7" />

              {/* Experience */}
              <div className="flex items-center justify-between text-left">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="text-white text-xl font-bold mt-1">
                    4+ Years
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl">
                  <FaBriefcase />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">

            {/* Introduction */}
            <div className="mb-9">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Building Digital Experiences with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Code & Creativity
                </span>
              </h3>

              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-8">
                <p>
                  Hi, I'm{" "}
                  <span className="text-white font-semibold">
                    Ashish Vishwakarma
                  </span>
                  , a MERN Stack Developer with over 4 years
                  of professional experience in building modern,
                  scalable and user-friendly web applications.
                </p>

                <p>
                  My core expertise lies in{" "}
                  <span className="text-blue-400">
                    React.js, Node.js, Express.js and MongoDB
                  </span>
                  . I also have hands-on experience working with
                  Next.js, NestJS, Remix.js, React Native, Firebase
                  and other modern development tools.
                </p>

                <p>
                  Throughout my journey, I've contributed to projects
                  across different domains, including EdTech platforms,
                  e-commerce applications, accounting software,
                  cybersecurity solutions and peer-to-peer delivery
                  platforms.
                </p>

                <p>
                  I enjoy solving real-world problems, learning new
                  technologies and collaborating with teams to turn
                  ideas into reliable digital products.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-blue-400 text-xl mb-3">
                    {item.icon}
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    {item.value}
                  </h4>

                  <p className="text-gray-500 text-xs mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Areas of Expertise */}
            <div className="mb-9">
              <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-3">
                <FaRocket className="text-blue-400" />
                What I Do
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <FaCheckCircle className="text-blue-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-3">
                <FaCode className="text-purple-400" />
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 bg-[#111827] border border-white/10 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
