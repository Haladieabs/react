


import React from 'react';
import './App.css';
import Navbar from './portfolio/nav';
import AboutMe from './portfolio/about';
import Education from './portfolio/education';
import Projects from './portfolio/project';
import Experience from './portfolio/experience';
import Skills from './portfolio/skilles';
import ContactMe from './portfolio/contact';

function App() {
  return (
    <div className="App">
     
<Navbar />
      {/* About Me Section */}
      
<AboutMe />

      {/* Education Section */}
<Education />      

      {/* Experience Section */}
     <Experience />

      {/* Projects Section */}
<Projects />

{/* Skills Section */}
<Skills />

{/* Contact Me Section */}
<ContactMe />

    </div>
  );
}

export default App;




