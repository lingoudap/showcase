import Reveal from './Reveal';

export default function Timeline({ items = [] }) {
  return (
    <div className="relative">
      {/* Left Border Rail with Gradient */}
      <div className="absolute left-3 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/30 via-blue-500/30 to-cyan-500/30 rounded-full" />

      {/* Timeline Items */}
      <div className="space-y-8 md:space-y-12 pl-16 md:pl-20">
        {items.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="relative">
              {/* Numbered Dot */}
              <div className="absolute -left-14 md:-left-[4.5rem] top-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                {item.n}
              </div>

              {/* Content Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-5 md:p-6 border border-gray-700 hover:border-emerald-400 hover:translate-x-2 transition-all duration-300 shadow-md">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Phase Badge */}
                {item.label && (
                  <div className="mb-3">
                    <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/30">
                      {item.label}
                    </span>
                  </div>
                )}

                {/* Role */}
                {item.role && (
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    <span className="font-semibold text-white">My Role: </span>
                    {item.role}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
