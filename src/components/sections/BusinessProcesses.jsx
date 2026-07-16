import { processes } from '../../data/processes';
import PipelineSteps from '../ui/PipelineSteps';
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';

export default function BusinessProcesses() {
  const accentBgMap = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30',
    blue: 'bg-blue-500/10 border-blue-500/30',
    cyan: 'bg-cyan-500/10 border-cyan-500/30',
  };

  const accentTextMap = {
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
  };

  return (
    <section id="business-processes" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Business Processes" subtitle="End-to-End Flows" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          I think in end-to-end flows, not screens.
        </p>
      </div>

      {/* Process Cards */}
      <div className="max-w-6xl mx-auto space-y-8">
        {processes.map((process, index) => (
          <Reveal key={index} delay={index * 0.2}>
            <div
              className={`rounded-lg p-6 md:p-8 border-2 ${accentBgMap[process.accent]}`}
            >
            {/* Header with Code Badge and Title */}
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`inline-block ${accentTextMap[process.accent]} text-lg md:text-xl font-bold font-mono px-4 py-2 bg-gray-900 rounded border-2 border-current`}
              >
                {process.code}
              </span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {process.title}
                </h3>
              </div>
            </div>

            {/* Role Caption */}
            <p className="text-gray-400 text-sm md:text-base mb-8 italic">
              My Role: {process.role}
            </p>

            {/* Pipeline Steps */}
            <PipelineSteps steps={process.steps} accent={process.accent} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
