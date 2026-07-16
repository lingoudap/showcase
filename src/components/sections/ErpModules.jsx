import { modules } from '../../data/modules';
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';

export default function ErpModules() {
  const iconMap = {
    users: '👥',
    'trending-up': '📈',
    'file-text': '📄',
    package: '📦',
    box: '📭',
    'dollar-sign': '💰',
    briefcase: '💼',
  };

  return (
    <section id="erp-modules" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="ERP Modules" subtitle="Core Business Processes" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          The operational core I configure and support across complete enterprise workflows.
        </p>
      </div>

      {/* Module Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {modules.map((module, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
            {/* Code Badge */}
            <span className="absolute top-3 right-3 bg-gray-800 text-emerald-400 text-xs font-mono font-bold px-2 py-1 rounded border border-emerald-400/30">
              {module.code}
            </span>

            {/* Icon */}
            <div className="text-4xl mb-4">
              {iconMap[module.icon] || '•'}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
              {module.name}
            </h3>

            {/* Note */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {module.note}
            </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
