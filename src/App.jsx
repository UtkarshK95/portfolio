// Import statements
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Dropdown from "./components/Header/Dropdown";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Projects from "./components/Main/Projects";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/output.css";

// Main App component
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the dropdown
  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Effect hook to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
