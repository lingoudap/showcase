function AboutCTA() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border-t border-blue-700/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Collaborate
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Whether you need ERP implementation, custom development, technical support, or want to discuss a project opportunity, I'm ready to help you achieve your goals with expertise and professionalism.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Primary CTA */}
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50">
            💬 Get in Touch
          </button>

          {/* Secondary CTA */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            📁 View My Work
          </button>

          {/* Tertiary CTA */}
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-600/50 border border-gray-600 hover:border-blue-400">
            📄 Download Resume
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="text-sm text-gray-300">
          <p>
            ✓ Available for freelance projects | ✓ Responsive communication | ✓ Technical excellence
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
