import { useState, useMemo } from "react";
import services from "../data/services";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import ServiceFilter from "./ServiceFilter";
import ServiceModal from "./ServiceModal";
import ServiceCTA from "./ServiceCTA";

function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(services.map((s) => s.category))];
    return cats;
  }, []);

  // Filter and search services
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // Filter by category
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;

      // Filter by search query (title, category, or technologies)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        service.title.toLowerCase().includes(searchLower) ||
        service.subtitle.toLowerCase().includes(searchLower) ||
        service.category.toLowerCase().includes(searchLower) ||
        service.technologies.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  return (
    <>
      <section id="services" className="py-20 px-6 md:px-20 bg-gray-950">
        <SectionHeader title="Services Offered" subtitle="What I Provide" />

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <ServiceFilter
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
              <span className="text-emerald-400 font-bold">{filteredServices.length}</span>{" "}
              of <span className="text-emerald-400 font-bold">{services.length}</span>{" "}
              services
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
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
                  No Services Found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your filters or search terms
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Featured Services Section */}
        {activeCategory === "All" && searchQuery === "" && (
          <div className="mt-20 max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                ⭐ My Specialty Services
              </h3>
              <p className="text-gray-400">
                Services I specialize in and deliver with excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services
                .filter((s) => s.featured)
                .map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onViewDetails={handleViewDetails}
                    index={index}
                  />
                ))}
            </div>
          </div>
        )}
      </section>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* CTA Section */}
      <ServiceCTA />
    </>
  );
}

export default Services;