// import './App.css';
import Home from './Home';
import React from "react";
import './App.css';
import CardInfo from "./Teamsection";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
     <Home />
      <div className="container">
        <Navbar />
        <div className="content">
          <h1> MEET OUR TEAM</h1>
          <CardInfo />
        </div>
      </div>
    </div>
  );
}
export default App;

