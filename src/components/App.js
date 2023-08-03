import React from "react";
import "../style/App.css";
import Footer from "./Footer";
import Home from "./Home";
import CardInfo from "./Teamsection";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <div className="content">
          <h1> MEET OUR TEAM</h1>
          <CardInfo />
        </div>
    <Footer />
      </div>
    </div>
  );
}
export default App;
