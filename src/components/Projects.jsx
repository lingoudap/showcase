import { useState, useMemo } from "react";
import projects from "../data/projects";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(projects.map((p) => p.category))];
    return cats;
  }, []);

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by category
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      // Filter by search query (title or tech stack)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.subtitle.toLowerCase().includes(searchLower) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Featured Projects" subtitle="Portfolio Highlights" />

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            Showing{" "}
            <span className="text-blue-400 font-bold">{filteredProjects.length}</span>{" "}
            of <span className="text-blue-400 font-bold">{projects.length}</span>{" "}
            projects
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-400">
                Try adjusting your filters or search terms
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Featured Section (Optional) */}
      {activeCategory === "All" && searchQuery === "" && (
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              ⭐ Featured Highlights
            </h3>
            <p className="text-gray-400">
              My favorite projects and accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                  index={index}
                />
              ))}
          </div>
        </div>
      )}

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default Projects;