import { useState, useEffect } from 'react';
import { navLinks, contactInfo } from '../config';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll behavior
  const handleNavClick = (href) => {
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume handler
  const downloadResume = () => {
    // Create a sample resume link - replace with actual resume URL
    const resumeUrl = '/resume-lingouda-patil.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Lingouda-Patil-Resume.pdf';
    // If file doesn't exist, show message instead
    alert('Resume download will be available soon. Contact me directly for the latest version.');
  };

  return (
    <nav className={`sticky top-0 z-50 transition duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gray-900 shadow-md py-5'
    }`}>
      <div className="flex justify-between items-center px-6 md:px-8">
        {/* Logo with Animation */}
        <a 
          href="#" 
          onClick={() => handleNavClick('#')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-blue-400 transition duration-300">
            LP
          </div>
          <span className="text-xl font-bold text-blue-400 group-hover:scale-110 transition duration-300">
            Lingouda
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition duration-300 relative group ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-400 font-semibold'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                {/* Active indicator line */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition duration-300 ${
                  activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Section - Social + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition duration-300"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition duration-300"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Download Resume Button */}
          <button
            onClick={downloadResume}
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition duration-300 transform hover:scale-105 flex items-center gap-2"
            aria-label="Download resume"
          >
            <span>📄</span>
            <span className="hidden lg:inline">Resume</span>
          </button>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg transition duration-300 transform hover:scale-105 flex items-center gap-2"
            aria-label="Get in touch"
          >
            <span>💬</span>
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 shadow-lg md:hidden animate-in">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block py-2 px-3 rounded-lg transition duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-blue-400 bg-blue-400/10 font-semibold'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile Social Links */}
            <li className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-sm text-gray-400 mb-3 font-semibold">Connect</p>
              <div className="flex gap-3">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition duration-300"
                  aria-label="LinkedIn profile"
                >
                  💼 LinkedIn
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition duration-300"
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
                className="w-full py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition duration-300"
              >
                📄 Download Resume
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg transition duration-300 text-center"
              >
                💬 Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;