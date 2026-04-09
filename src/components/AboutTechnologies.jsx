function AboutTechnologies() {
  const technologies = {
    Backend: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Authentication"],
    Frontend: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Data Optimization"],
    Tools: ["Git", "VS Code", "Postman", "Chart.js", "Socket.io"],
    Platforms: ["SixOrbit ERP", "SAP", "Odoo", "AWS", "Stripe"]
  };

  const categoryColors = {
    Backend: "from-blue-900/30 to-blue-800/30 border-blue-600/30 hover:border-blue-500",
    Frontend: "from-purple-900/30 to-purple-800/30 border-purple-600/30 hover:border-purple-500",
    Database: "from-emerald-900/30 to-emerald-800/30 border-emerald-600/30 hover:border-emerald-500",
    Tools: "from-orange-900/30 to-orange-800/30 border-orange-600/30 hover:border-orange-500",
    Platforms: "from-pink-900/30 to-pink-800/30 border-pink-600/30 hover:border-pink-500"
  };

  const badgeColors = {
    Backend: "bg-blue-500/20 text-blue-200 border-blue-500/30 hover:bg-blue-500/30",
    Frontend: "bg-purple-500/20 text-purple-200 border-purple-500/30 hover:bg-purple-500/30",
    Database: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30 hover:bg-emerald-500/30",
    Tools: "bg-orange-500/20 text-orange-200 border-orange-500/30 hover:bg-orange-500/30",
    Platforms: "bg-pink-500/20 text-pink-200 border-pink-500/30 hover:bg-pink-500/30"
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        Technologies & Tools
      </h3>
      <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
        Proficient with modern tools and platforms for comprehensive solutions
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(technologies).map(([category, techs], categoryIndex) => (
          <div
            key={categoryIndex}
            className={`bg-gradient-to-br ${categoryColors[category]} rounded-xl p-5 border transition-all duration-300 hover:shadow-lg`}
            data-aos="fade-up"
            data-aos-delay={`${categoryIndex * 100}`}
          >
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              {category === "Backend" && "🔧"}
              {category === "Frontend" && "🎨"}
              {category === "Database" && "🗄️"}
              {category === "Tools" && "⚙️"}
              {category === "Platforms" && "🚀"}
              {category}
            </h4>

            <div className="space-y-2">
              {techs.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className={`${badgeColors[category]} px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 transform hover:scale-105 text-center`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTechnologies;
