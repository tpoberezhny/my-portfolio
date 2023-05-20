import React from 'react';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
