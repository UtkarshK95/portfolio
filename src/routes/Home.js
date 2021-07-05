import React from "react";
import AboutSection from "../components/Main/AboutSection";
import ProjectsSection from "../components/Main/ProjectsSection";
import ContactSection from "../components/Main/ContactSection";
import AboutPage from "../components/Main/AboutPage";

export default function Home() {
  return (
    <div>
      <AboutPage />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
