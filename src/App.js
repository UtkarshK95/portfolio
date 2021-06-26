import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

import SideBar from "./components/Header/SideBar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
