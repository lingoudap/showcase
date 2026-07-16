import { functional, technical } from '../../data/expertise';
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';

export default function Expertise() {
  const iconMap = {
    clipboard: '📋',
    workflow: '🔄',
    'file-text': '📄',
    'git-compare': '⚖️',
    'check-circle': '✅',
    users: '👥',
    plug: '🔌',
    send: '📤',
    database: '🗄️',
    move: '↔️',
    zap: '⚡',
    'bar-chart': '📊',
  };

  const ExpertiseCard = ({ item, delay = 0 }) => (
    <Reveal delay={delay}>
      <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 border border-gray-700 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">
          {iconMap[item.icon] || '•'}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-bold text-sm md:text-base group-hover:text-emerald-300 transition-colors duration-300">
            {item.title}
          </h4>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-1">
            {item.desc}
          </p>
        </div>
      </div>
    </Reveal>
  );

  return (
    <section id="expertise" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Expertise" subtitle="My Techno-Functional Skills" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          As a techno-functional ERP consultant with 1.9+ years at SixOrbit, I bridge business requirements and technical implementation across complete enterprise processes—Order-to-Cash, Procure-to-Pay, and Hire-to-Retire—combining functional expertise with hands-on integration and SQL skills.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Functional Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">FUNCTIONAL</h3>
            <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Business
            </span>
          </div>
          <div className="space-y-3">
            {functional.map((item, index) => (
              <ExpertiseCard key={index} item={item} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Technical Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">TECHNICAL</h3>
            <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Technology
            </span>
          </div>
          <div className="space-y-3">
            {technical.map((item, index) => (
              <ExpertiseCard key={index} item={item} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
