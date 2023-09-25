


import React from 'react';
import './App.css';

import Navbar from './portfolio/nav';
import AboutMe from './portfolio/about';
import Education from './portfolio/education';
import Projects from './portfolio/project';
import Experience from './portfolio/experience';
import Skills from './portfolio/skilles';
import ContactMe from './portfolio/contact';
// import Parent from './component/perant';
// import Child from './component/child';


function App() {
  return (
    <div className="App">
     {/* ..........portfolio.............. */}

<Navbar />
     
<AboutMe />

<Education />

<Experience />
 
<Projects />

<Skills />

<ContactMe />

{/* .................end portfolio........................ */}


{/* <Child/> */}




    </div>
  );
}

export default App;




