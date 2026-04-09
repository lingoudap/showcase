import { useState } from "react";

function ProjectCard({ project, onViewDetails, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-400 h-full flex flex-col"
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 right-3 bg-blue-900 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
          {project.status}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        {/* Category */}
        <div className="inline-block w-fit mb-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-900/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 mb-3 font-medium opacity-80">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {project.description.length > 120
            ? project.description.substring(0, 120) + "..."
            : project.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 pb-4 border-b border-gray-700">
          <div className="flex items-center gap-1">
            <span className="text-blue-400">📋</span>
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-blue-400">⏱️</span>
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gradient-to-r from-blue-900 to-blue-700 text-blue-100 px-2.5 py-1 rounded-md font-medium hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-gray-400 px-2.5 py-1">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Buttons Container */}
        <div className="grid grid-cols-3 gap-2">
          {/* Live Demo Button */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            title="View Live Demo"
          >
            <span>🔗</span>
            <span className="hidden md:inline">Demo</span>
          </a>

          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            title="View on GitHub"
          >
            <span>💻</span>
            <span className="hidden md:inline">Code</span>
          </a>

          {/* View Details Button */}
          <button
            onClick={() => onViewDetails(project)}
            className="flex items-center justify-center gap-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            title="View Details"
          >
            <span>→</span>
            <span className="hidden md:inline">More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
