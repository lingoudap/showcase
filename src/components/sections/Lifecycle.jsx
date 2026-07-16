import { lifecycle } from '../../data/lifecycle';
import Timeline from '../ui/Timeline';
import SectionHeader from '../SectionHeader';

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="Implementation Lifecycle" subtitle="End-to-End Journey" />

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          I'm involved end-to-end, not just one slice.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <Timeline items={lifecycle} />
      </div>
    </section>
  );
}
