import SectionHeader from "./SectionHeader";

function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-950">
      <SectionHeader title="About Me" subtitle="My Journey" />

      <div className="max-w-4xl mx-auto">
        <div
          className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg"
          data-aos="fade-up"
        >
          <p className="text-gray-300 leading-8 text-lg mb-6">
            I am a <span className="text-blue-400 font-semibold">Technical Support and Implementation Engineer</span> with 1+ years of experience in <span className="text-cyan-400 font-semibold">ERP deployment, API integrations, and troubleshooting</span>.
          </p>
          
          <p className="text-gray-300 leading-8 text-lg mb-6">
            Currently working at <span className="text-cyan-400 font-semibold">Accrete Globus Technology Pvt. Ltd</span>, I provide end-to-end technical support for SixOrbit ERP, manage ERP module deployments, client onboarding, and handle complex data migration processes. I have successfully integrated <span className="text-cyan-400 font-semibold">third-party systems</span> such as WhatsApp APIs, biometric attendance devices (ESSL), and custom connectivity solutions.
          </p>

          <p className="text-gray-300 leading-8 text-lg mb-6">
            Beyond ERP support, I am a <span className="text-emerald-400 font-semibold">Full Stack Developer</span> proficient in MERN stack with hands-on experience in building CRM systems, task management applications, real-time chat applications, and admin panels. I have worked as an intern at <span className="text-cyan-400 font-semibold\">Rachana Infotech Software Company</span>, developing Sales Management Admin Panel with dynamic visualization and optimized database queries.
          </p>
          
          <p className="text-gray-300 leading-8 text-lg">
            I am a strong problem-solver with excellent communication skills and a passion for delivering efficient technical solutions. My approach combines technical expertise with customer-focused support to ensure project success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;