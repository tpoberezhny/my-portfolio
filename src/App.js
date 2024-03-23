import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import DesignProjects from './Components/DesignProjects';
import ContactMe from "./Components/ContactMe";

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [designProjects, setDesignProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const skillsResponse = await axios.get(
          "https://65fdc1b8b2a18489b385620d.mockapi.io/api/tima/skills"
        );
        const projectsResponse = await axios.get(
          "https://65fdc1b8b2a18489b385620d.mockapi.io/api/tima/projects"
        );
        const designProjectsResponse = await axios.get(
          "https://65fdc1b8b2a18489b385620d.mockapi.io/api/tima/design"
        );

        setSkills(skillsResponse.data);
        setProjects(projectsResponse.data);
        setDesignProjects(designProjectsResponse.data);
      } catch (error) {
        alert("Data request error ;(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <Home />
      <AboutMe skills={skills} />
      <Projects projects={projects}/>
      <DesignProjects designProjects={designProjects} />
      <ContactMe />
    </div>
  );
}

export default App;
