import React from "react";
import "../style/App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs"
import AboutUs from "./AboutUs";
import Registration from "./Registration";
import BookingModal from "./BookingModal";
import HospitalCards from "./HospitalCards"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/hospital" element={<HospitalCards />}/>
        <Route path="/signup" element={<Registration />}/>
        <Route path="/booking" element={<BookingModal />}/>
      </Routes>
      </Router>
    </div>
  );
}
export default App;
