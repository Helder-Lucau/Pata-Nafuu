import React from 'react';
import CardInfo from "./Teamsection";
import Footer from "./Footer";
import '../style/Home.css'; // Add this line to import custom CSS

function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1600" className="d-block w-100" alt="medics" />
          <div className="carousel-caption">
            <h5>Pata Nafuu</h5>
            <p>Caring at Your Fingertips: Find, Book, and Heal with Our Hospital Locator.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/4386504/pexels-photo-4386504.jpeg?auto=compress&cs=tinysrgb&w=1600"  alt='...'/>
          <div className="carousel-caption">
            <h5>Now in six Region</h5>
            <p>From Search to Service: Your Health Journey Simplified.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/7446997/pexels-photo-7446997.jpeg?auto=compress&cs=tinysrgb&w=1600" className="d-block w-100" alt="maternity" />
          <div className="carousel-caption">
            <h5>Where Care Meets Convenience: Locate, Book, Recover</h5>
            <p>Bridging Distances in Healthcare: Search, Select, Schedule.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <h1 className='meet-team'>MEET OUR TEAM</h1>
      <CardInfo />
      <Footer />
    </div>
  );
}


export default Home;
