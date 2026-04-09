function AboutExperience() {
  const experience = [
    {
      role: "Technical Support & Implementation Engineer",
      company: "Accrete Globus Technology Pvt. Ltd",
      period: "Current",
      duration: "1+ years",
      highlights: [
        "End-to-end technical support for SixOrbit ERP",
        "ERP module deployments and client onboarding",
        "Complex data migration and system optimization",
        "Third-party API integrations (WhatsApp, ESSL biometric)",
        "Custom connectivity solutions development"
      ],
      icon: "💼"
    },
    {
      role: "Full Stack Developer Intern",
      company: "Rachana Infotech Software Company",
      period: "Previous",
      duration: "6 months",
      highlights: [
        "Built Sales Management Admin Panel with Chart.js",
        "Implemented dynamic visualization and analytics",
        "Optimized database queries for performance",
        "Developed responsive UI/UX interfaces",
        "Worked with PHP, MySQL, and modern web technologies"
      ],
      icon: "🎓"
    }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        Professional Experience
      </h3>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        A journey of technical excellence and practical implementation
      </p>

      <div className="space-y-6 max-w-3xl mx-auto">
        {experience.map((job, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">{job.icon}</div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {job.role}
                </h4>
                <p className="text-blue-400 font-semibold text-lg">{job.company}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-wrap gap-3 md:gap-6 mb-6 pb-6 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">📅</span>
                <span className="text-gray-400">{job.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">⏱️</span>
                <span className="text-gray-400">{job.duration}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {job.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutExperience;
