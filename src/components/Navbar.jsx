// Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { navLinks, contactInfo } from '../config';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const scrollTimeoutRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Handle scroll effects with improved accuracy
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      // Improved scroll state detection
      setIsScrolled(window.scrollY > 50);

      // Improved active section detection with debouncing
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const sections = navLinks.map(link => link.href.substring(1));
        let foundSection = '';

        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // More accurate detection with adjusted offset
            if (rect.top <= 120 && rect.bottom > 0) {
              foundSection = section;
              break;
            }
          }
        }

        setActiveSection(foundSection);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Smooth scroll behavior
  const handleNavClick = (href) => {
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced resume download handler
  const downloadResume = () => {
    try {
      // Try to download the resume file
      const resumeUrl = '/resume-lingouda-patil.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Lingouda-Patil-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: open resume in new tab
      window.open('/resume-lingouda-patil.pdf', '_blank');
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 w-full z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl py-3'
            : 'bg-gray-900/40 backdrop-blur-md border-b border-gray-800/30 shadow-lg py-5'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8">
          {/* Logo with Enhanced Animation */}
          <a
            href="#"
            onClick={() => handleNavClick('#')}
            className="flex items-center gap-2 group cursor-pointer relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 rounded-lg blur-lg transition duration-300 -z-10 group-hover:blur opacity-0 group-hover:opacity-100"></div>

            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-blue-400 transition duration-300">
              LP
            </div>
            <span className="text-xl font-bold text-blue-400 group-hover:scale-110 group-hover:translate-x-1 transition duration-300">
              Lingouda
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-all duration-300 relative flex items-center ${
                    activeSection === link.href.substring(1)
                      ? 'text-blue-400 font-semibold'
                      : 'text-gray-300 hover:text-blue-300'
                  }`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {/* Glow effect on hover/active */}
                  <span
                    className={`absolute -inset-2 rounded-lg transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? 'bg-blue-500/20 shadow-lg shadow-blue-500/30'
                        : 'bg-blue-500/0 group-hover:bg-blue-500/10 group-hover:shadow-md group-hover:shadow-blue-500/20'
                    }`}
                    aria-hidden="true"
                  ></span>

                  <span className="relative">{link.label}</span>

                  {/* Active indicator line with smooth animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Section - Enhanced */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Links with Tooltips */}
            <div className="flex gap-3 items-center">
              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial('linkedin')}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="relative p-2.5 text-gray-400 hover:text-blue-400 rounded-xl transition-all duration-300 group"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  {/* Glow background on hover */}
                  <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 rounded-xl blur-sm transition duration-300 -z-10"></span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  LinkedIn
                </div>
              </div>

              {/* GitHub */}
              <div className="relative group">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial('github')}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="relative p-2.5 text-gray-400 hover:text-cyan-400 rounded-xl transition-all duration-300 group"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  {/* Glow background on hover */}
                  <span className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 rounded-xl blur-sm transition duration-300 -z-10"></span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  GitHub
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

            {/* Enhanced CTA Buttons */}
            <button
              onClick={downloadResume}
              className="group relative px-4 py-2 text-sm font-medium text-white rounded-xl transition-all duration-300 overflow-hidden"
              aria-label="Download resume"
            >
              {/* Background gradient with glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Glow effect */}
              <span className="absolute -inset-1 bg-blue-500/30 blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></span>

              {/* Content */}
              <span className="relative flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <span>📄</span>
                <span className="hidden lg:inline">Resume</span>
              </span>
            </button>

            {/* View My Work Button */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#projects');
              }}
              className="group relative px-6 py-2 text-sm font-medium text-blue-300 rounded-xl transition-all duration-300 overflow-hidden border-2 border-blue-400 hover:bg-blue-500/10"
              aria-label="View projects"
            >
              {/* Content */}
              <span className="relative group-hover:scale-105 transition-transform duration-300">
                View My Work
              </span>
            </a>

            {/* Premium Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="group relative px-6 py-2 text-sm font-medium text-white rounded-xl transition-all duration-300 overflow-hidden"
              aria-label="Get in touch"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_auto] transition-all duration-300 group-hover:bg-right-bottom"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Glow effect */}
              <span className="absolute -inset-1 bg-emerald-500/50 blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></span>

              {/* Content */}
              <span className="relative flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <span>💬</span>
                <span>Hire Me</span>
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 p-2 rounded-lg transition-all duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation - Enhanced with smooth animations */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-2xl border-t border-gray-800/50 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-300"
            onClick={(e) => {
              // Close menu when clicking outside or on links
              if (e.target.tagName === 'A' || e.target.closest('a')) {
                closeMenu();
              }
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block py-3 px-4 rounded-xl transition-all duration-300 relative group ${
                      activeSection === link.href.substring(1)
                        ? 'text-blue-400 bg-blue-500/20 font-semibold border border-blue-500/50'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border border-transparent hover:border-blue-500/30'
                    }`}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Mobile Social Section */}
              <li className="border-t border-gray-800 pt-4 mt-4">
                <p className="text-xs text-gray-500 mb-3 font-bold uppercase tracking-wider">Connect</p>
                <div className="flex gap-2">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center text-gray-300 hover:text-blue-400 bg-gray-800/50 hover:bg-blue-500/20 rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-500/50 font-medium"
                    aria-label="LinkedIn profile"
                  >
                    💼 LinkedIn
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center text-gray-300 hover:text-cyan-400 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 font-medium"
                    aria-label="GitHub profile"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </li>

              {/* Mobile CTA Buttons */}
              <li className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => {
                    downloadResume();
                    closeMenu();
                  }}
                  className="w-full py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  📄 Download Resume
                </button>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#projects');
                  }}
                  className="w-full py-3 text-sm font-medium text-blue-300 bg-transparent border-2 border-blue-400 hover:bg-blue-500/10 rounded-xl transition-all duration-300 text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
                >
                  💬 Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;