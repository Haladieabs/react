import React from 'react';
import image_png from '../image/image_png.png';
// import './App.css';


function Education() {
    return (
      // Your Education section JSX code here
      <div className="education" id="one">
        <div id="ll"><label>Education</label></div>
        <hr />
        <div id="sa">
          <img src={image_png} alt="" />
          <br />
          <label id="sq">
            Aqaba University of Technology <br />
            Information Technology College <br />
            Artificial Intelligence Major
          </label>
        </div>
      </div>

    );
  }
  
  export default Education;