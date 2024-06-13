import React from "react";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Skills from "./Skills";

const AboutSection = () => (
  <div className="container mx-auto px-4 py-8">
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-6">Timeline</h2>
      <Timeline />
    </section>
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <Skills />
    </section>
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <Testimonials />
    </section>
  </div>
);

export default AboutSection;
