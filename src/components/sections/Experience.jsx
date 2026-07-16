//client/src/components/sections/Experience.jsx
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="erp-experience" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Experience" subtitle="My Journey So Far" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Building ERP solutions that drive real business value—from configuration to go-live.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto space-y-8">
        {experience.map((role, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 border-b border-gray-700">
                <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                  {/* Monogram */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                    {role.monogram}
                  </div>
                  {/* Title & Meta */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {role.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded border border-emerald-500/30 whitespace-nowrap">
                        {role.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{role.meta}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-semibold text-sm">
                  {role.company}
                </p>
              </div>

            {/* Content: Two Columns */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Consulting & Delivery */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded"></span>
                  Consulting & Delivery
                </h4>
                <ul className="space-y-3">
                  {role.consulting.map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical & Integration */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-500 rounded"></span>
                  Technical & Integration
                </h4>
                <ul className="space-y-3">
                  {role.technical.map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
