import projects from "../data/projects";
import SectionHeader from "./SectionHeader";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Featured Projects" subtitle="Portfolio Highlights" />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 border border-gray-700 hover:border-blue-400"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(", ").map((tech, i) => (
                <span key={i} className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;