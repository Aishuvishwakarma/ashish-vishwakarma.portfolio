
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFilePdf,
  FaChevronDown,
} from "react-icons/fa";
import PdfPreviewModal from "./PdfPreviewModal";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ashish-vishwakarma-5827131a2",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/aishuvishwakarma",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/codeamon_",
    },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsSocialOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        setIsSocialOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-[#080b16] shadow-lg shadow-black/30 border-b border-white/10"
            : "bg-[#080b16] border-b border-white/10"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12 h-[72px] md:h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-xl md:text-2xl font-bold tracking-tight text-white relative z-10"
          >
            Ashish
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}
              Vishwakarma
            </span>
            <span className="text-blue-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={() => setActiveSection(item.id)}
                className={`relative cursor-pointer px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}

                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                )}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Social Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSocialOpen((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition"
              >
                Social
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    isSocialOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSocialOpen && (
                <div className="absolute right-0 top-14 w-48 p-2 rounded-xl bg-[#111827] border border-white/10 shadow-2xl">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsSocialOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-white/5 transition"
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CV Button */}
            <button
              onClick={() => setShowPdf(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaFilePdf />
              View CV
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden relative z-10 text-white text-xl p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 top-[72px] bg-black/60 z-[-1]"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Navigation Panel */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#0b1020] border-t border-white/10 shadow-2xl shadow-black/50 transition-all duration-300 ${
            isOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeMobileMenu}
                  onSetActive={() => setActiveSection(item.id)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl cursor-pointer font-medium transition-all ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-500/15 border border-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  )}
                </ScrollLink>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-white/10 mt-5 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-500 mb-4 px-2">
                Connect With Me
              </p>

              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    onClick={closeMobileMenu}
                    className="flex flex-col items-center justify-center gap-2 py-3 rounded-xl bg-[#151e30] border border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-500/40 transition"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-xs">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile CV Button */}
            <button
              onClick={() => {
                closeMobileMenu();
                setShowPdf(true);
              }}
              className="mt-5 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:opacity-90 transition"
            >
              <FaFilePdf />
              View My CV
            </button>

          </div>
        </div>
      </header>

      {/* PDF Preview Modal */}
      {showPdf && (
        <PdfPreviewModal onClose={() => setShowPdf(false)} />
      )}
    </>
  );
};

export default Header;
