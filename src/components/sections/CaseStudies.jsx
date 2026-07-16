import { cases } from '../../data/cases';
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';
import { useState } from 'react';

export default function CaseStudies() {
  const [expandedCase, setExpandedCase] = useState(null);
  const accentColors = ['emerald', 'blue'];

  const accentBgMap = {
    emerald: 'bg-emerald-500/10 border-l-4 border-emerald-500',
    blue: 'bg-blue-500/10 border-l-4 border-blue-500',
  };

  const toggleCase = (index) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

  return (
    <section id="case-studies" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Case Studies" subtitle="Real-World Implementations" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          How I've solved real business challenges with thoughtful ERP design and integration.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="max-w-6xl mx-auto space-y-12">
        {cases.map((caseStudy, index) => {
          const accent = accentColors[index % accentColors.length];
          const isExpanded = expandedCase === index;

          return (
            <Reveal key={index} delay={index * 0.2}>
              <div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg"
              >
                {/* Header with Case Number & Title */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 border-b border-gray-700">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-${accent}-500 to-${accent}-600 flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {caseStudy.n}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {caseStudy.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2">
                          <span className="font-semibold">Client:</span> {caseStudy.client}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCase(index)}
                      className="flex-shrink-0 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm font-semibold mt-1"
                      aria-label={isExpanded ? 'Collapse case study' : 'Expand case study'}
                    >
                      {isExpanded ? '−' : '+'}
                    </button>
                  </div>
                </div>

                {/* Content Blocks (Collapsible) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >

              {/* Content Blocks */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Client Problem */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Client Problem</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.steps.problem}
                  </p>
                </div>

                {/* Requirement Analysis */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Requirement Analysis</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.steps.requirement}
                  </p>
                </div>

                {/* Solution Design */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Solution Design</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.steps.solution}
                  </p>
                </div>

                {/* Implementation */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Implementation</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.steps.implementation}
                  </p>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Outcome</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.steps.outcome}
                  </p>
                </div>

                {/* Business Value */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Business Value</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseStudy.steps.value}
                  </p>
                </div>
              </div>
              </div>

              {/* Key Metrics Band */}
              <div className={`p-6 md:p-8 border-t border-gray-700 ${accentBgMap[accent]}`}>
                <h4 className="text-lg font-bold text-white mb-4">Key Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs md:text-sm text-gray-300">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
              </div>
            </Reveal>
            );
          })}
        </div>

      {/* Disclaimer Note */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-500 text-xs md:text-sm italic">
          Figures illustrate delivered outcomes — replace with exact verified numbers before publishing.
        </p>
      </div>
    </section>
  );
}
