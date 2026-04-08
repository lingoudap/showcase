import services from "../data/services";
import Card from "./Card";
import SectionHeader from "./SectionHeader";

const serviceIcons = ["📊", "🌐", "🔌", "⚙️", "📋", "🛠️", "🗄️"];

function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-gray-900">
      <SectionHeader title="Services Offered" subtitle="What I Provide" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto lg:gap-6">
        {services.map((service, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <Card
              title={service}
              description={`Professional ${service.toLowerCase()} with proven expertise and successful deployments.`}
              icon={serviceIcons[index]}
              gradient="from-emerald-500 to-emerald-600"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;