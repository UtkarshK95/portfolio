import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/output.css";

//Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

//Components
import SideBar from "./components/Header/Navbar";
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
