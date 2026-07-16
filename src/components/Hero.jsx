function Hero() {
  return (
    <section className="text-center py-24 md:py-32 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Lingouda Patil</span>
        </h2>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <p className="text-lg md:text-2xl text-gray-300 mb-3 font-semibold">
          Customer Success Consultant - ERP | Technical Consultant | Full Stack Developer
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg">
          I translate business requirements into configured, integrated and tested ERP systems — bridging functional process design with hands-on technical delivery across CRM, Sales, Inventory and Payroll.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center gap-4 flex-wrap">
        <a 
          href="#erp-integrations" 
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold text-white transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-blue-500/50 inline-flex items-center gap-2"
        >
          View integration work <span className="text-xl">→</span>
        </a>
        <a 
          href="#contact" 
          className="border-2 border-blue-400 hover:border-blue-300 px-8 py-3 rounded-lg font-semibold text-blue-400 hover:text-white hover:bg-blue-500 transform hover:scale-105 transition duration-300 inline-flex items-center gap-2"
        >
          Let's talk <span className="text-xl">💬</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;