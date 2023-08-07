import React from "react";
import logosimage from "../images/patanafuulogo.png";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <img className="logo" src={logosimage} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/hospital">Hospitals</Link>
          </li>
          <li>
            <Link to="/booking">Book Appointment</Link>
          </li>
          <li>
            <Link to="/contactus">Contacts</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
