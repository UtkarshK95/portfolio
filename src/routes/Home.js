import React from "react";
import AboutSection from "../components/Main/AboutSection";
import ProjectsSection from "../components/Main/ProjectsSection";
import ContactSection from "../components/Main/ContactSection";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
