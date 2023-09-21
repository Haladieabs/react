import React from 'react';
import me from "../image/me.jpeg";
// import './App.css';

function AboutMe() {
    return (
      // Your About Me section JSX code here
      <div className="about" id="zero">
        <div className="img_con">
          <div>
            <img src={me} alt="" />
          </div>
        </div>
        <div className="text_cont">
          <h1>
            Hala Hisham Dieabs <br /> I'm Full Stack Developer
          </h1>
          <br />
          <br />
          <label id="kk">
            To secure a challenging position in a reputable organization to expand
            my learnings, knowledge, and skills.<br/><br/>
            Secure a responsible career opportunity to fully utilize my training
            and skills, while making a significant contribution to the success of
            the company.
          </label><br/>
          <button type="button" className="myButton">
            <a
              href="./Screenshot 2023-07-03 125027.png"
              className="myButton"
              download
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    );
  }
  
  export default AboutMe;