import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import Reveal from '../ui/Reveal';
import { reporting } from '../../data/reporting';

export default function SqlReporting() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="sql-reporting" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader
        title="SQL & Reporting"
        subtitle="Data-Driven Insights"
      />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          From complex queries to actionable dashboards—I turn raw data into strategic visibility.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Code Card */}
        <Reveal delay={0} className="md:col-span-2">
          <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-3 text-gray-400 text-xs font-mono">monthly_sales_by_rep.sql</span>
            </div>

            {/* Code Content */}
            <div className="p-6 bg-gray-950 font-mono text-sm overflow-x-auto">
              <div className="text-gray-300 leading-relaxed space-y-1">
                <div>
                  <span className="text-cyan-400">SELECT</span>
                  {' '}
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">sr</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">rep_name</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">COUNT</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-emerald-400">so</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">order_id</span>
                  <span className="text-gray-400">)</span>
                  {' '}
                  <span className="text-cyan-400">AS</span>
                  {' '}
                  <span className="text-emerald-300">order_count</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-amber-400">SUM</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-emerald-400">so</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">amount</span>
                  <span className="text-gray-400">)</span>
                  {' '}
                  <span className="text-cyan-400">AS</span>
                  {' '}
                  <span className="text-emerald-300">total_revenue</span>
                </div>
                <div>
                  <span className="text-cyan-400">FROM</span>
                  {' '}
                  <span className="text-emerald-400">sales_order</span>
                  {' '}
                  <span className="text-emerald-400">so</span>
                </div>
                <div>
                  <span className="text-cyan-400">JOIN</span>
                  {' '}
                  <span className="text-emerald-400">sales_rep</span>
                  {' '}
                  <span className="text-emerald-400">sr</span>
                  {' '}
                  <span className="text-cyan-400">ON</span>
                  {' '}
                  <span className="text-emerald-400">so</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">rep_id</span>
                  {' '}
                  <span className="text-gray-400">=</span>
                  {' '}
                  <span className="text-emerald-400">sr</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">id</span>
                </div>
                <div>
                  <span className="text-cyan-400">WHERE</span>
                  {' '}
                  <span className="text-amber-400">MONTH</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-emerald-400">so</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">order_date</span>
                  <span className="text-gray-400">)</span>
                  {' '}
                  <span className="text-gray-400">=</span>
                  {' '}
                  <span className="text-amber-400">MONTH</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-amber-400">CURDATE</span>
                  <span className="text-gray-400">())</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">AND</span>
                  {' '}
                  <span className="text-emerald-400">so</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">status</span>
                  {' '}
                  <span className="text-gray-400">=</span>
                  {' '}
                  <span className="text-teal-300">'CONFIRMED'</span>
                </div>
                <div>
                  <span className="text-cyan-400">GROUP BY</span>
                  {' '}
                  <span className="text-emerald-400">sr</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">rep_id</span>
                  <span className="text-gray-400">,</span>
                  {' '}
                  <span className="text-emerald-400">sr</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-emerald-300">rep_name</span>
                </div>
                <div>
                  <span className="text-cyan-400">ORDER BY</span>
                  {' '}
                  <span className="text-emerald-300">total_revenue</span>
                  {' '}
                  <span className="text-cyan-400">DESC</span>
                </div>
                <div>
                  <span className="text-cyan-400">LIMIT</span>
                  {' '}
                  <span className="text-teal-300">10</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Skills Panel */}
        <Reveal delay={0.2}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Reporting Skills</h3>
            <div className="space-y-6">
              {reporting.map((skill, index) => (
                <div key={index} className="space-y-2">
                  {/* Title & Level */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">{skill.title}</h4>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400">{skill.desc}</p>

                  {/* Progress Bar */}
                  <div className="bg-gray-900 rounded-full h-2 overflow-hidden border border-gray-700">
                    <motion.div
                      initial={{ width: prefersReducedMotion ? `${skill.pct}%` : 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.8,
                        ease: 'easeOut',
                        delay: index * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                    />
                  </div>

                  {/* Percentage */}
                  <div className="text-right">
                    <span className="text-xs text-gray-400 font-mono">{skill.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
