import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/output.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import Dropdown from "./components/Header/Dropdown";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Projects from "./components/Main/Projects";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
