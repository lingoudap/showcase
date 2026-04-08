import Card from "./Card";
import SectionHeader from "./SectionHeader";

const reasons = [
  { title: "CRM & ERP Expertise", description: "Real-world experience building enterprise solutions for complex business processes", icon: "🏢" },
  { title: "Full Stack Development", description: "Strong capabilities in both frontend (React) and backend (Node.js, PHP) development", icon: "🔗" },
  { title: "API Integration Specialist", description: "Expert in designing and integrating robust APIs for seamless system communication", icon: "🔌" },
  { title: "Business-Focused Solutions", description: "I build practical, scalable applications that solve real business problems", icon: "💡" },
];

function WhyHireMe() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900">
      <SectionHeader title="Why Choose Me" subtitle="My Value Proposition" />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <Card
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyHireMe;