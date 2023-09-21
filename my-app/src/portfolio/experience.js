import React from 'react';
// import './App.css';

import image10_png from '../image/image_png.png';
import download_jpg from'../image/download.jpg';


function Experience() {
    return (
      // Your Experience section JSX code here
      <div className="Experience" id="two">
      <div id="cc"> <label>Experience</label></div>
      <hr />
      <div id="c1">
        <div id="c1a">
          <img src={image10_png} alt="" />
          <br />
          <label>Orange coding academy<br />Web stack developer</label>
        </div>
        <div id="c1b">
          <img src={download_jpg} alt="" />
          <br />
          <label>Aqaba Container Terminal <br />IT Application Section Training</label>
        </div>
        <div id="c1c">
          <img src={image10_png} alt="" />
          <br />
          <label>lorem ipsum lorem ipsum lorem <br />ipsum lorem ipsum lorem ipsum</label>
        </div>
      </div>
    </div>
    );
  }
  
  export default Experience;