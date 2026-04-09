import { useState, useEffect } from "react";

function ServiceModal({ service, isOpen, onClose }) {
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

        {/* Header with Icon & Category */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 md:p-10">
          <div className="flex items-start justify-between mb-4">
            <div className="text-6xl md:text-7xl">{service.icon}</div>
            <div className="flex gap-2 items-start">
              {service.featured && (
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
              )}
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                {service.category}
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {service.title}
          </h2>
          <p className="text-lg text-emerald-100 font-medium">
            {service.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Full Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-300 mb-3">📝 Description</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {service.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-300 mb-4">✨ Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                >
                  <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-300 mb-3">🎯 Ideal For</h3>
            <p className="text-gray-300 leading-relaxed text-base p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              {service.idealFor}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-300 mb-4">⚙️ Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-emerald-100 px-4 py-2 rounded-lg text-sm font-semibold hover:from-emerald-800 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-emerald-300 mb-4">📦 Deliverables</h3>
            <ul className="space-y-2">
              {service.deliverables.map((deliverable, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                >
                  <span className="text-emerald-400 font-bold">→</span>
                  <span className="text-gray-300">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-700">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50">
              💬 Get a Quote
            </button>
            <button className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-600/50">
              📧 Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
