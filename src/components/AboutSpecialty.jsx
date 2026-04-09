function AboutSpecialty() {
  const specialties = [
    {
      title: "ERP Implementation",
      description: "SixOrbit ERP deployment, module configuration, and end-to-end implementation",
      icon: "📊",
      color: "emerald"
    },
    {
      title: "CRM Development",
      description: "Custom CRM systems, lead management, and sales pipeline tracking",
      icon: "👥",
      color: "blue"
    },
    {
      title: "API Integration",
      description: "Third-party system integration, WhatsApp APIs, ESSL biometric devices",
      icon: "🔌",
      color: "cyan"
    },
    {
      title: "Full Stack Development",
      description: "MERN stack applications, admin dashboards, and real-time systems",
      icon: "🌐",
      color: "purple"
    },
    {
      title: "Technical Support",
      description: "Expert troubleshooting, client onboarding, and system optimization",
      icon: "🛠️",
      color: "orange"
    },
    {
      title: "Data Migration",
      description: "Complex data migration processes, database optimization, and cleanup",
      icon: "🗄️",
      color: "pink"
    }
  ];

  const colorMap = {
    emerald: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    cyan: "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        What I Specialize In
      </h3>
      <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
        Expertise across multiple domains to deliver comprehensive solutions
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${colorMap[specialty.color]} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/10 group`}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {specialty.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{specialty.title}</h4>
            <p className="text-white/90 text-sm leading-relaxed">{specialty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSpecialty;
