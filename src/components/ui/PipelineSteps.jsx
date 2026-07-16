import { useEffect, useState } from 'react';

export default function PipelineSteps({ steps = [], accent = 'emerald' }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const accentMap = {
    emerald: 'text-emerald-400 border-emerald-400',
    blue: 'text-blue-400 border-blue-400',
    cyan: 'text-cyan-400 border-cyan-400',
    teal: 'text-teal-400 border-teal-400',
  };

  const accentClass = accentMap[accent] || accentMap.emerald;

  const Chevron = ({ isVertical = false }) => {
    const animationClass = !prefersReducedMotion ? 'animate-pulse-dash' : '';

    if (isVertical) {
      return (
        <svg
          className={`w-6 h-6 mx-auto text-gray-600 ${animationClass}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={
            !prefersReducedMotion
              ? {
                  strokeDasharray: '4, 4',
                  animation: 'flowing-dash 1.5s linear infinite',
                }
              : {}
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      );
    }

    return (
      <svg
        className={`w-6 h-6 text-gray-600 ${animationClass}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={
          !prefersReducedMotion
            ? {
                strokeDasharray: '4, 4',
                animation: 'flowing-dash 1.5s linear infinite',
              }
            : {}
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    );
  };

  return (
    <>
      <style>{`
        @keyframes flowing-dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      `}</style>
      <div className="w-full">
      {/* Desktop: Horizontal */}
      <div className="hidden md:block overflow-x-auto pb-4">
        <div className="flex items-center gap-3 min-w-max px-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Step Tile */}
              <div
                className={`flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border-2 ${accentClass} shadow-md flex-shrink-0`}
              >
                <div className={`text-2xl md:text-3xl font-bold ${accentClass}`}>
                  {index + 1}
                </div>
                <div className="text-white text-xs md:text-sm font-semibold text-center px-2 mt-1">
                  {step.name}
                </div>
                {step.sub && (
                  <div className="text-gray-400 text-xs text-center px-2 mt-0.5">
                    {step.sub}
                  </div>
                )}
              </div>

              {/* Chevron Connector */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0">
                  <Chevron isVertical={false} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical */}
      <div className="md:hidden flex flex-col items-center gap-2 px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Step Tile */}
            <div
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border-2 ${accentClass} shadow-md`}
            >
              <div className={`text-xl font-bold ${accentClass}`}>
                {index + 1}
              </div>
              <div className="text-white text-xs font-semibold text-center px-1 mt-1">
                {step.name}
              </div>
              {step.sub && (
                <div className="text-gray-400 text-xs text-center px-1 mt-0.5 leading-tight">
                  {step.sub}
                </div>
              )}
            </div>

            {/* Vertical Chevron Connector */}
            {index < steps.length - 1 && (
              <div className="my-1">
                <Chevron isVertical={true} />
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
