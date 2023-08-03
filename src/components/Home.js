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
            <h5>PATA NAFUU</h5>
            <p>Caring at Your Fingertips: Find, Book, and Heal with Our Hospital Locator.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/4386504/pexels-photo-4386504.jpeg?auto=compress&cs=tinysrgb&w=1600" className="d-block w-100 h-100" alt='...'/>
          <div className="carousel-caption">
            <h5>Now in six Regions</h5>
            <p>From Search to Service: Your Health Journey Simplified.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/7446997/pexels-photo-7446997.jpeg?auto=compress&cs=tinysrgb&w=1600" className="d-block w-100 h-100" alt="maternity" />
          <div className="carousel-caption">
            <h5>Where Care Meets Convenience</h5>
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
      <section className='aboutus-container'>
      <h2>why choose us?</h2>
      <h5>Simple easy to use Web Portal</h5>
      <p> Pata Nafuu has invested in developing the most up to date and user friendly
      Web Portal , to ensure that planning and booking a holiday or even a business trip is a easy and pleasurable experience, and ensure that you get the best value for money. With instant access to the widest range of great value airfares from almost every major Airline operating from, to and within India, Bigbreaks.com offers the lowest fares in the simplest and quickest manner.</p>
      </section>
      <section>
      <h1 className='meet-team'>MEET OUR TEAM</h1>
      <CardInfo />
      </section>
      <section>
      <Footer />
      </section>
    </div>
  );
}


export default Home;
