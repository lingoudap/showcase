function AboutHighlights() {
  const highlights = [
    {
      number: "1+",
      label: "Years Experience",
      icon: "📅",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "15+",
      label: "Projects Completed",
      icon: "🚀",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "7+",
      label: "Services Offered",
      icon: "⚙️",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: "⭐",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${highlight.color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/10`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="text-4xl mb-3">{highlight.icon}</div>
          <div className="text-3xl font-bold text-white mb-1">{highlight.number}</div>
          <p className="text-white/90 text-sm font-semibold">{highlight.label}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutHighlights;
