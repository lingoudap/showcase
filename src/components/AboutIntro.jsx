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
            I'm an <span className="text-blue-400 font-semibold">ERP Technical-Functional Consultant</span> with 1.9+ years of hands-on experience turning business requirements into configured, integrated ERP solutions that improve how organizations actually operate. My work sits where functional process design meets technical delivery — I gather requirements, map processes, configure systems, and own the build through to go-live.
          </p>

          <p>
            At <span className="text-cyan-400 font-semibold">Accrete Globus Technology Pvt. Ltd</span> (Customer Success Consultant – ERP), I lead functional consulting for <span className="text-emerald-400 font-semibold">SixOrbit ERP</span> implementations across CRM, Sales, and Payroll — from requirement-gathering workshops and process mapping through configuration, data migration, UAT, and go-live support. I've designed and delivered integrations including the <span className="text-blue-400 font-semibold">WhatsApp Business API</span>, <span className="text-emerald-400 font-semibold">ESSL biometric</span> attendance, and <span className="text-blue-400 font-semibold">custom connectors</span>, owning the full path from functional requirements to a stable, deployed solution.
          </p>

          <p>
            What sets my profile apart is that the systems I consult on, I also build. Outside of client work I develop full-stack applications on the <span className="text-blue-400 font-semibold">MERN stack</span> (JavaScript, React, Node, MongoDB) and <span className="text-blue-400 font-semibold">MySQL</span> — including my own <span className="text-emerald-400 font-semibold">CRM</span> and <span className="text-emerald-400 font-semibold">Payroll</span> applications, reporting dashboards, and deployed portfolio projects. During my internship at <span className="text-cyan-400 font-semibold">Rachana Infotech</span>, I built a <span className="text-blue-400 font-semibold">Sales Management Admin Panel</span> pairing data architecture with business-focused visualization. So I understand CRM and Payroll not just as a consultant configuring them, but as a developer who has written them from the ground up.
          </p>

          <p>
            I bring strategic thinking, technical rigor, and a commitment to successful go-lives — whether I'm architecting an ERP implementation, mapping a business process, or shipping a custom integration. I'm equally at home in a requirements workshop and in the code.
          </p>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">1.9+</div>
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
