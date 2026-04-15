import { useState, useEffect } from "react";

function ProjectModal({ project, isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 transform ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
          title="Close modal"
        >
          ✕
        </button>

        {/* Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent" />

          {/* Badges */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex flex-wrap gap-2">
            {project.featured && (
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}
            {project.portfolioLevels && (
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                🎨 Portfolio System
              </span>
            )}
            <span className="bg-blue-900 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
              {project.status}
            </span>
            <span className="bg-cyan-900 text-cyan-200 text-xs font-bold px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title & Subtitle */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-lg text-gray-300 font-medium">{project.subtitle}</p>
          </div>

          {/* Meta Information Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">Role</p>
              <p className="text-white font-semibold">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                Duration
              </p>
              <p className="text-white font-semibold">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                Status
              </p>
              <p className="text-white font-semibold">{project.status}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                Category
              </p>
              <p className="text-white font-semibold">{project.category}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-3">📝 Description</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-4">✨ Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <span className="text-blue-400 font-bold text-lg">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Variants Section (if exists) */}
          {project.portfolioLevels && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-purple-300 mb-4">🎨 Portfolio Variants</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.portfolioLevels.map((variant, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-700/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        {index === 0 && "🎯"}
                        {index === 1 && "⚡"}
                        {index === 2 && "👑"}
                        {variant.level}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {variant.description}
                      </p>
                    </div>
                    <a
                      href={variant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                    >
                      View Live →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contribution */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-3">🎯 My Contribution</h3>
            <p className="text-gray-300 leading-relaxed text-base p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              {project.contribution}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-4">⚙️ Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-900 to-blue-700 text-blue-100 px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-6 border-t border-gray-700">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              🔗 View Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-600/50"
            >
              💻 View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
