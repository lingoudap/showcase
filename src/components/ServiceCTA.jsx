function ServiceCTA() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-20 bg-gradient-to-r from-emerald-900 via-gray-900 to-emerald-900 border-t border-emerald-700/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need a Custom Solution for Your Business?
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Whether you need a specific service from the list or have a unique project in mind,
          I'm here to help you achieve your goals with expert solutions tailored to your needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50">
            💬 Let's Discuss Your Project
          </button>

          {/* Secondary CTA */}
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-600/50 border border-gray-600 hover:border-emerald-400">
            📧 Get in Touch
          </button>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-sm text-gray-400">
          <p>
            ✓ Free consultation | ✓ Flexible pricing | ✓ Quick turnaround
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceCTA;
