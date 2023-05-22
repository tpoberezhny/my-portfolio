import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("https://646aa2107d3c1cae4ce2b010.mockapi.io/skills")
      .then((res) => {
        setSkills(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <Home />
      <AboutMe skills={skills} />
    </div>
  );
}

export default App;
