function AboutIntro() {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
        data-aos="fade-up"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Who I Am
        </h3>

        <div className="space-y-5 text-gray-300 leading-8">
          <p>
            I am a <span className="text-blue-400 font-semibold">Technical Support and Implementation Engineer</span> with 1+ years of hands-on experience in <span className="text-emerald-400 font-semibold">ERP deployment, API integrations, and technical problem-solving</span>. My career is built on delivering reliable technical solutions that drive business success.
          </p>

          <p>
            Currently at <span className="text-cyan-400 font-semibold">Accrete Globus Technology Pvt. Ltd</span>, I provide comprehensive technical support for SixOrbit ERP systems, managing everything from module deployments and client onboarding to complex data migrations. I've successfully integrated third-party systems including WhatsApp APIs, ESSL biometric devices, and custom connectivity solutions—all while ensuring seamless operations and client satisfaction.
          </p>

          <p>
            Beyond ERP systems, I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> specializing in MERN stack technologies. I've built CRM systems, task management applications, real-time chat solutions, and admin dashboards that combine functionality with excellent user experience. During my internship at <span className="text-cyan-400 font-semibold">Rachana Infotech Software Company</span>, I developed a Sales Management Admin Panel with dynamic visualization and optimized database architecture.
          </p>

          <p>
            My approach combines deep technical expertise with a strong customer focus. I'm a problem-solver who thrives on understanding complex business requirements and translating them into efficient technical solutions. Whether you need ERP support, custom development, or technical freelancing services, I bring professionalism, reliability, and a commitment to excellence.
          </p>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">1+</div>
            <p className="text-sm text-gray-400 mt-1">Years in Industry</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">15+</div>
            <p className="text-sm text-gray-400 mt-1">Projects Built</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <p className="text-sm text-gray-400 mt-1">Dedication</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
