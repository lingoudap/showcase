import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/sections/Expertise";
import ErpModules from "./components/sections/ErpModules";
import BusinessProcesses from "./components/sections/BusinessProcesses";
import ErpIntegrations from "./components/sections/ErpIntegrations";
import CaseStudies from "./components/sections/CaseStudies";
import SqlReporting from "./components/sections/SqlReporting";
import Experience from "./components/sections/Experience";
import AboutExperience from "./components/AboutExperience";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import AboutExperience from "./components/AboutExperience";

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AboutExperience />
      <Expertise />
      <ErpModules />
      <BusinessProcesses />
      <ErpIntegrations />
      <CaseStudies />
      <SqlReporting />
      <Experience />
      {/* <section id="experience" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-950">
        <AboutExperience />
      </section> */}
      <Skills />
      <Projects />
      <Services />
      <WhyHireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;