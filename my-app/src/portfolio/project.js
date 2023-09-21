import React from 'react';
// import './App.css';
import image10_png from '../image/image10_png.png';
import image_png from '../image/image_png.png';
import download_jpg from '../image/download.jpg';

function Projects() {
    return (
      // Your Projects section JSX code here
    

<div className="project" id="three">
  <div id="dd"> <label>Projects</label></div>
  <hr />
  <div id="d1">
    <div id="d1a">
      <div id="d1a1">
        <a href="https://miro.com/app/board/uXjVM_uToaE=/?share_link_id=517358564690" target="_blank">
          <img src={image_png} alt="" width="100%" height="250px" />
        </a>
      </div>
      <br />
      <div id="d1a2"><label>Mockup<br />Wireframe</label></div>
    </div>
    <div id="d2">
      <a href="https://haladieabs.github.io/mini_project/mini_project/project.html" target="_blank">
        <img src={download_jpg} alt="" />
      </a>
      <br />
      <br />
      <label>Choclate cake <br />web page</label>
    </div>
    <div id="d3"><img src={image10_png} alt="" /><br /><br /><label >lorem ipsum</label></div>
  </div>
</div>
    );
  }
  
  export default Projects;







