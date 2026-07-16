import { integrations } from '../../data/integrations';
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';
import useCountUp from '../../hooks/useCountUp';

export default function ErpIntegrations() {
  const accentColors = ['emerald', 'blue', 'cyan'];

  const accentBgMap = {
    emerald: 'bg-emerald-500/10 border-l-4 border-emerald-500',
    blue: 'bg-blue-500/10 border-l-4 border-blue-500',
    cyan: 'bg-cyan-500/10 border-l-4 border-cyan-500',
  };

  const accentBadgeMap = {
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-400',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-400',
    cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-400',
  };

  const isNumeric = (value) => /^\d+/.test(value);

  const extractNumber = (value) => {
    const match = value.match(/^\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const ImpactStat = ({ stat }) => {
    const numeric = isNumeric(stat.value);
    const target = numeric ? extractNumber(stat.value) : 0;
    const suffix = stat.value.replace(/^\d+/, '');
    const { ref, count } = useCountUp(target);

    if (!numeric) {
      return (
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-gray-300">
            {stat.label}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-white mb-1">
          {count}
          {suffix}
        </div>
        <div className="text-xs md:text-sm text-gray-300">
          {stat.label}
        </div>
      </div>
    );
  };

  return (
    <section id="erp-integrations" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="ERP Integrations" subtitle="External System Connectors" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Real-world API + webhook + data sync projects I've designed and configured to extend ERP
          capabilities.
        </p>
      </div>

      {/* Integration Cards */}
      <div className="max-w-6xl mx-auto space-y-8">
        {integrations.map((integration, index) => {
          const accent = accentColors[index % accentColors.length];

          return (
            <Reveal key={index} delay={index * 0.2}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
                {/* Header with Number & Title */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 border-b border-gray-700">
                  <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-${accent}-500 to-${accent}-600 flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {integration.n}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {integration.title}
                    </h3>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {integration.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${accentBadgeMap[accent]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Problem */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Problem</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {integration.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {integration.solution}
                  </p>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Architecture</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-mono bg-gray-950/50 p-3 rounded border border-gray-700">
                    {integration.architecture}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Technologies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {integration.technologies}
                  </p>
                </div>

                {/* Business Impact */}
                <div className={`rounded-lg p-5 ${accentBgMap[accent]}`}>
                  <h4 className="text-lg font-bold text-white mb-4">Business Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {integration.impact.map((stat, i) => (
                      <ImpactStat key={i} stat={stat} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}