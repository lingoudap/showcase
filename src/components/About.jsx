import SectionHeader from "./SectionHeader";
import AboutIntro from "./AboutIntro";
import AboutHighlights from "./AboutHighlights";
import AboutSpecialty from "./AboutSpecialty";
import AboutExperience from "./AboutExperience";
import AboutTechnologies from "./AboutTechnologies";
import AboutCTA from "./AboutCTA";

function About() {
  return (
    <>
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-950">
        <SectionHeader title="About Me" subtitle="My Professional Journey" />

        {/* Introduction Section */}
        <AboutIntro />

        {/* Highlights/Quick Stats */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-20">
          <AboutHighlights />
        </div>

        {/* Specializations */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-20">
          <AboutSpecialty />
        </div>

        {/* Professional Experience */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-20">
          <AboutExperience />
        </div>

        {/* Technologies & Tools */}
        <div className="max-w-7xl mx-auto">
          <AboutTechnologies />
        </div>
      </section>

      {/* CTA Section */}
      <AboutCTA />
    </>
  );
}

export default About;