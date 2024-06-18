import React from "react";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Skills from "./Skills";

const AboutSection = () => (
  <div className="container mx-auto px-4 py-4">
    <section className="mb-8">
      <Timeline />
    </section>
    <section className="mb-8">
      <h1 className="text-4xl font-bold text-center mb-2">Skills</h1>
      <Skills />
    </section>
    <section className="mb-8">
      <h1 className="text-4xl font-bold text-center mb-2">Testimonials</h1>
      <Testimonials />
    </section>
  </div>
);

export default AboutSection;
