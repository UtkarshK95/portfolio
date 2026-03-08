import React from "react";
import Timeline from "../ui/Timeline";
import Testimonials from "../ui/Testimonials";
import Skills from "../ui/Skills";

const AboutSection = () => (
  <div className="relative bg-gray-900 text-white overflow-hidden">
    {/* Background bubbles */}
    <div className="absolute top-10 right-16 bg-green-500 rounded-full w-64 h-64 opacity-20 blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 left-16 bg-green-500 rounded-full w-64 h-64 opacity-20 blur-3xl pointer-events-none" />

    <div className="relative z-10 container mx-auto px-6 py-10 space-y-12">
      <section>
        <Timeline />
      </section>

      <section>
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-1">What I work with</p>
        <h1 className="text-3xl font-bold text-white mb-4">Skills</h1>
        <Skills />
      </section>

      <section className="pb-4">
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-1">Kind words</p>
        <h1 className="text-3xl font-bold text-white mb-4">Testimonials</h1>
        <Testimonials />
      </section>
    </div>
  </div>
);

export default AboutSection;
