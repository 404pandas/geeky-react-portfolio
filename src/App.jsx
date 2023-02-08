// Components go here
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Credits from "./pages/Credits.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";

import "./App.css";

export default function App() {
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      {/* <Route path="/About/*" element={<NestedAbout />} /> */}
      <Route path="/Contact" element={<Contact />} />
      {/* <Route path="/Contact/*" element={<NestedContact />} /> */}
      <Route path="/Credits" element={<Credits />} />
      {/* <Route path="/Credits/*" element={<NestedCredits />} /> */}
      <Route path="/Portfolio" element={<Portfolio />} />
      {/* <Route path="/Portfolio/*" element={<NestedPortfolio />} /> */}
      <Route path="/Resume" element={<Resume />} />
      {/* <Route path="/Resume/*" element={<Resume />} /> */}
    </Routes>
  </>;
}
