import React from 'react';
// import './App.css';

import logo_png from '../image/logo.png'; // Adjust the path as needed



function Navbar() {
    return (
      // Your navbar JSX code here
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul>
            <li style={{ listStyle: 'none' }}>
              <img
                src={logo_png}
                alt="Image"
                height="70px"
                width="70px"
              />
            </li>
          </ul>
          <ul className="navbar-nav" id="io1">
            <li className="nav-item">
              <a className="nav-link" href="#zero" id="io4">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="io" aria-current="page" href="#one">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#two" id="io2">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#three" id="io3">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#four" id="io4">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#five" id="io5">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default Navbar;