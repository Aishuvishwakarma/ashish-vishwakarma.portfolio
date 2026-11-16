
import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiRemix,
  SiFirebase,
  SiTailwindcss,
  SiPrisma,
  SiPostman,
  SiGit,
  SiGithub,
  SiJira,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaDatabase, FaBrain } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: string;
  link?: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    subtitle: "Building modern and responsive user interfaces",
    skills: [
      {
        name: "React.js",
        icon: <SiReact />,
        description: "Component-based UI development",
        level: "Core Skill",
        link: "https://react.dev/",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        description: "Modern JavaScript and ES6+",
        level: "Core Skill",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        description: "Type-safe application development",
        level: "Working Experience",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        description: "Modern React applications",
        level: "Working Experience",
        link: "https://nextjs.org/",
      },
      {
        name: "Remix.js",
        icon: <SiRemix />,
        description: "Full-stack React development",
        level: "Working Experience",
        link: "https://remix.run/",
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        description: "Cross-platform mobile applications",
        level: "Working Experience",
        link: "https://reactnative.dev/",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        description: "Responsive and modern styling",
        level: "Working Experience",
        link: "https://tailwindcss.com/",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        description: "Semantic web structure",
        level: "Working Experience",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: <SiCss3 />,
        description: "Layouts, animations and styling",
        level: "Working Experience",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Developing APIs and scalable server-side solutions",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        description: "Server-side JavaScript development",
        level: "Core Skill",
        link: "https://nodejs.org/",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        description: "REST API development",
        level: "Core Skill",
        link: "https://expressjs.com/",
      },
      {
        name: "NestJS",
        icon: <SiNestjs />,
        description: "Structured backend architecture",
        level: "Working Experience",
        link: "https://nestjs.com/",
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
        description: "Database ORM and query management",
        level: "Working Experience",
        link: "https://www.prisma.io/",
      },
    ],
  },
  {
    title: "Databases & Cloud",
    subtitle: "Working with databases and cloud-based services",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        description: "NoSQL database management",
        level: "Core Skill",
        link: "https://www.mongodb.com/",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        description: "Backend services and integrations",
        level: "Working Experience",
        link: "https://firebase.google.com/",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        description: "Relational database management",
        level: "Working Experience",
        link: "https://www.mysql.com/",
      },
      {
        name: "SQL",
        icon: <FaDatabase />,
        description: "Relational database queries",
        level: "Working Experience",
      },
    ],
  },
  {
    title: "Tools & AI",
    subtitle: "Development workflow, collaboration and emerging technologies",
    skills: [
      {
        name: "Git",
        icon: <SiGit />,
        description: "Version control and collaboration",
        level: "Working Experience",
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        description: "Code hosting and collaboration",
        level: "Working Experience",
        link: "https://github.com/",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        description: "API testing and debugging",
        level: "Working Experience",
        link: "https://www.postman.com/",
      },
      {
        name: "Jira",
        icon: <SiJira />,
        description: "Project and task management",
        level: "Working Experience",
        link: "https://www.atlassian.com/software/jira",
      },
      {
        name: "RAG",
        icon: <FaBrain />,
        description: "Basic Retrieval-Augmented Generation implementations",
        level: "Basic Experience",
      },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#080b16] text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
            My Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Technologies, frameworks and tools I use to build
            scalable applications, develop robust APIs and
            deliver modern digital experiences.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title+categoryIndex}>

              {/* Category Header */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-400 to-purple-500" />

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm md:pl-4">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

                {category.skills.map((skill) => {
                  const content = (
                    <div className="group h-full p-5 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500/50 hover:bg-[#151e30] transition-all duration-300 hover:-translate-y-1">

                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400 text-2xl group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                          {skill.icon}
                        </div>

                        <span className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        {skill.description}
                      </p>

                      {skill.link && (
                        <div className="mt-4 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Documentation ↗
                        </div>
                      )}
                    </div>
                  );

                  return skill.link ? (
                    <a
                      key={skill.name}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${skill.name} official documentation`}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={skill.name} className="h-full">
                      {content}
                    </div>
                  );
                })}

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Always Learning, Always Building
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Continuously exploring new technologies, improving
            development practices and building solutions that
            solve real-world problems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
