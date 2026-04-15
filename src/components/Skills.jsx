import skills from "../data/Skills";
import SectionHeader from "./SectionHeader";

const skillIcons = {
  frontend: "🎨",
  backend: "⚙️",
  database: "🗄️",
  tools: "�",
  erp: "📊",
  integrations: "🔗",
};

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Technical Skills" subtitle="My Expertise" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div
            key={category}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">{skillIcons[category] || "⭐"}</span>
              {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-800 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;