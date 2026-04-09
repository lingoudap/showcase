import { useState } from "react";

function ServiceCard({ service, onViewDetails, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-emerald-400 h-full flex flex-col"
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {service.featured && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Header with Icon & Category */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl md:text-6xl">{service.icon}</div>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 mb-3 font-medium opacity-80">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {service.description.length > 130
            ? service.description.substring(0, 130) + "..."
            : service.description}
        </p>

        {/* Ideal For */}
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">
            📌 Ideal For
          </p>
          <p className="text-sm text-gray-300">{service.idealFor}</p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 font-semibold uppercase mb-2">
            ⚙️ Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gradient-to-r from-emerald-900 to-emerald-700 text-emerald-100 px-2 py-1 rounded-md font-medium hover:from-emerald-800 hover:to-emerald-600 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {service.technologies.length > 3 && (
              <span className="text-xs text-gray-400 px-2 py-1">
                +{service.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(service)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
