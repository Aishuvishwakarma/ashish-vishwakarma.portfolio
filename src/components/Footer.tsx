
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/aishuvishwakarma",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/ashish-vishwakarma-5827131a2",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/codeamon_",
    },
  ];

  return (
    <footer className="relative bg-[#080b16] text-white pt-20 pb-8 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Footer Main */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <a href="#home" className="inline-block mb-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Ashish{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Vishwakarma
                </span>
              </h2>
            </a>

            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              MERN Stack Developer with 4+ years of professional
              experience building scalable web applications,
              robust backend APIs and modern digital solutions.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to New Opportunities
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 text-xl hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span className="text-blue-500">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:vishwakarmaa949@gmail.com"
                className="flex items-start gap-3 group"
              >
                <FaEnvelope className="text-blue-400 mt-1" />

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Email
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-blue-400 transition break-all">
                    vishwakarmaa949@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918435180974"
                className="flex items-start gap-3 group"
              >
                <FaPhoneAlt className="text-blue-400 mt-1" />

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Phone
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-blue-400 transition">
                    +91 8435180974
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="text-sm text-gray-300">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Ashish Vishwakarma. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed with{" "}
            <span className="text-red-500">♥</span>{" "}
            by Ashish Vishwakarma
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
