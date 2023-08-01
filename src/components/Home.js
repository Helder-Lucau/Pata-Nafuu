import React from "react";

function Home() {
  return (
    <div id="carouselAppCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img scr="https://www.shutterstock.com/image-photo/diverse-team-professional-medical-surgeons-260nw-2195419303.jpg" class="d-block w-100" alt="Medics"></img>
        <div class="carousel-caption d-none d-md-block">
          <h5>Pata Nafuu</h5>
          <p>Healing is a biological process, not an art.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://media.istockphoto.com/id/1399993828/photo/unrecognizable-dentist-doing-a-routine-dental-checkup-using-a-mouth-mirror-and-an-excavator.webp?b=1&s=170667a&w=0&k=20&c=TEEDkVLDDfY1tviSzJFz_u_PZS33M0MSGPJeTi3gPRk=" class="d-block w-100" alt="Dental"></img>
        <div class="carousel-caption d-none d-md-block">
          <h5>we are Available in 6 Regions</h5>
          <ul>
            <li>Central</li>
            <li>Eastern</li>
            <li>Rift Valley</li>
            <li>Coastal</li>
            <li>Western</li>
          </ul>
          <p>Increasing access to Quality Care.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.parents.com/thmb/DJdUgSZ5L_ehIXlXfNYh2iSPAfo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/211207-Illustrations-Black-Fetus-in-Utero-2000-4cfb977c8f634364a1b078962c7446ce.jpg" class="d-block w-100" alt="woman"></img>
        <div class="carousel-caption d-none d-md-block">
          <h5>Use us Now for Quality Health Service</h5>
          <h6>Innovation for a Healthier World</h6>
          <p>Builing Heathier Tomorrows.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Home;