import { useState } from 'react';

function AboutExperience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Handle smooth navigation to sections
  const handleNavigate = (sectionId) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experience = [
    {
      role: "Technical Support & Implementation Engineer",
      company: "Accrete Globus Technology Pvt. Ltd",
      period: "Current",
      duration: "1+ years",
      type: "Full-Time",
      isCurrent: true,
      icon: "💼",
      description: "Leading technical solutions and enterprise system implementations",
      highlights: [
        "Delivered end-to-end technical support for SixOrbit ERP systems across 15+ clients",
        "Designed and executed ERP module deployments reducing implementation time by 40%",
        "Engineered complex data migration solutions handling 500K+ records with 99.9% accuracy",
        "Integrated third-party APIs (WhatsApp, ESSL biometric) enabling seamless business operations",
        "Developed custom connectivity solutions for legacy system integrations"
      ],
      technologies: ["ERP Systems", "Data Migration", "API Integration", "WhatsApp API", "Biometric Systems", "Custom Solutions"],
      results: [
        { metric: "15+", description: "Clients Successfully Onboarded" },
        { metric: "40%", description: "Faster Implementation Time" },
        { metric: "99.9%", description: "Data Migration Accuracy" },
        { metric: "50+", description: "API Integrations Completed" }
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Rachana Infotech Software Company",
      period: "Jun - Dec 2023",
      duration: "6 months",
      type: "Internship",
      isCurrent: false,
      icon: "🎓",
      description: "Built scalable analytics dashboards for enterprise clients",
      highlights: [
        "Architected and deployed Sales Management Admin Panel processing 10K+ transactions daily",
        "Implemented interactive data visualization dashboards using Chart.js with real-time analytics",
        "Optimized database queries reducing response time by 60% through strategic indexing",
        "Developed fully responsive UI/UX interfaces ensuring 100% cross-device compatibility",
        "Collaborated with 3-person full-stack team delivering 5+ production features"
      ],
      technologies: ["React", "PHP", "MySQL", "Chart.js", "Tailwind CSS", "JavaScript", "RESTful API"],
      results: [
        { metric: "10K+", description: "Daily Transactions Processed" },
        { metric: "60%", description: "Query Performance Improvement" },
        { metric: "100%", description: "Cross-Device Compatibility" },
        { metric: "5+", description: "Production Features Delivered" }
      ]
    }
  ];

  const totalYears = 1.5;
  const totalProjects = 8;
  const totalTechnologies = new Set(experience.flatMap(e => e.technologies)).size;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Professional Experience
        </h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
          A journey of technical excellence and practical implementation
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>

      {/* Summary Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto" data-aos="fade-up">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300">
          <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{totalYears}+</p>
          <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
        </div>
        <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
          <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{experience.length}</p>
          <p className="text-gray-400 text-sm md:text-base">Positions Held</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-900/10 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300">
          <p className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{totalProjects}</p>
          <p className="text-gray-400 text-sm md:text-base">Projects Delivered</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
          <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{totalTechnologies}</p>
          <p className="text-gray-400 text-sm md:text-base">Technologies</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative md:pl-28 group"
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-0 top-8 w-16 h-16 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-125 transition-transform duration-300 ${
                      job.isCurrent
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-blue-300 shadow-blue-500/50"
                        : "bg-gradient-to-br from-gray-700 to-gray-600 border-4 border-gray-500"
                    }`}
                  >
                    {job.icon}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    job.isCurrent
                      ? "bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 border-2 border-blue-400 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-gradient-to-br from-slate-900 to-gray-900 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  {/* Current Badge */}
                  {job.isCurrent && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-blue-500 text-white px-4 py-2 rounded-bl-xl font-semibold text-sm">
                      Currently Working
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl md:text-3xl font-bold text-white">
                            {job.role}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                              job.type === "Full-Time"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                                : "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                            }`}
                          >
                            {job.type}
                          </span>
                        </div>
                        <p className="text-blue-400 font-semibold text-lg mb-1">{job.company}</p>
                        <p className="text-gray-400 text-sm">{job.description}</p>
                      </div>
                      <div className="text-2xl md:flex hidden">
                        {expandedIndex === index ? "−" : "+"}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">📅</span>
                        <span className="text-gray-300 font-medium">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">⏱️</span>
                        <span className="text-gray-300 font-medium">{job.duration}</span>
                      </div>
                    </div>

                    {/* Highlights - Always Visible */}
                    <div className="mb-6">
                      <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Key Achievements</h5>
                      <div className="space-y-2">
                        {job.highlights.slice(0, 2).map((highlight, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                            <span className="text-emerald-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-gray-300 text-sm md:text-base">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedIndex === index && (
                      <div
                        className="space-y-6 pt-4 border-t border-gray-700 animate-in fade-in-50 duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* All Highlights */}
                        <div>
                          <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">All Achievements</h5>
                          <div className="space-y-2">
                            {job.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                                <span className="text-emerald-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                <span className="text-gray-300 text-sm md:text-base">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Tech Stack</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/50 rounded-full text-xs md:text-sm font-semibold hover:border-cyan-400 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Impact & Results */}
                        <div>
                          <h5 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Impact & Results</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {job.results.map((result, i) => (
                              <div
                                key={i}
                                className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 text-center"
                              >
                                <p className="text-2xl font-bold text-emerald-400 mb-1">{result.metric}</p>
                                <p className="text-gray-400 text-xs font-medium leading-snug">{result.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
        <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-emerald-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 group-hover:via-cyan-500/20 transition-all duration-500"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, innovative ideas, and opportunities to contribute technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleNavigate('#contact')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </button>
              <button 
                onClick={() => handleNavigate('#projects')}
                className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-300 font-bold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutExperience;
