import React, { useState, useEffect } from "react";
import axios from "axios";

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
