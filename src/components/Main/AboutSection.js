import React from "react";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Footer from "../Footer/Footer";

function AboutSection() {
  return (
    <div>
      <Timeline />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default AboutSection;
