import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; 
import logosimage from "../images/patanafuulogo.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a href="#home" className="navbar-brand">
          <img src= {logosimage} alt="" height="50" />
        </a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#hospitals" className="nav-link">
                Hospitals
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
             </ul>
            </div>
               </div>
    </nav>
  );
}

export default Navbar;