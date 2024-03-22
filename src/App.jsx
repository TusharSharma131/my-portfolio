import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import HeroSection from "./Components/HeroSection/heroSection";
import Skills from "./Components/Skills/skills";
import Education from "./Components/Education/education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/footer";
import Projects from "./Components/Project/Project";
import ProjectDetails from "./Components/ProjectDetails/ProjDetails";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <Navbar />
      <div className={`bg-black text-white`}>
        <div className="overflow-x-hidden">
          <HeroSection />
          <div className="bg-gradient-to-br from-black to-black">
            <Skills />
          </div>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div className="bg-gradient-to-br from-black to-black">
            <Education />
            <Contact />
          </div>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
