import React, { useState, useEffect } from "react";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import DesignProjects from "./Components/DesignProjects";
import ContactMe from "./Components/ContactMe";

import skillsData from "./data/skills.json";
import projectsData from "./data/projects.json";
import designProjectsData from "./data/designProjects.json";

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [designProjects, setDesignProjects] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
    setProjects(projectsData);
    setDesignProjects(designProjectsData);
  }, []);

  useEffect(() => {
    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    document.body.appendChild(dot);
  
    let dotX = 0;
    let dotY = 0;
    let mouseX = 0;
    let mouseY = 0;
  
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
  
    const animateDot = () => {
      dotX += (mouseX - dotX) * 0.21;
      dotY += (mouseY - dotY) * 0.21;
  
      if (window.innerWidth > 1920) {
        dot.style.transform = `translate3d(${dotX - 132.5}px, ${dotY - 2}px, 0)`;
      } else {
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }
  
      requestAnimationFrame(animateDot);
    };
  
    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animateDot);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(dot);
    };
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <Home />
      <AboutMe skills={skills} />
      <Projects projects={projects} />
      <DesignProjects designProjects={designProjects} />
      <ContactMe />
    </div>
  );
}

export default App;
