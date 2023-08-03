import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import logosimage from "../images/patanafuulogo.png";

function Navbar() {
  return (
    <header>
      <img className="logo" src={logosimage} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/hospital">Hospitals</a>
          </li>
          <li>
            <a href="/booking">Book Appointment</a>
          </li>
          <li>
            <a href="/contactus">Contacts</a>
          </li>
          <li>
            <span className="signup"><a href="/signup">Sign Up</a></span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
