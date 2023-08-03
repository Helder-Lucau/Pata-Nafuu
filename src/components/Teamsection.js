import React from "react";
import firstimage from "../images/first.jpeg"
import secondimage from "../images/2.jpeg"
import thirdimage from "../images/1.jpeg"
import fourthimage from "../images/fourth.jpeg"

function CardInfo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <div className="card" style={{ width: '300px', marginBottom: '20px' }}>
        <img className="card-img-top" src={firstimage} alt="" />
        <div className="card-body">
          <h5 className="card-title">John Smith - Founder and CEO</h5>
          <p className="card-text">
            John is the visionary behind our website, dedicated to helping with
            the search for hospitals and booking of appointments, making it easy.
          </p>
          <div>
            <p>
              Email: johnsmith@gmail.com
              <br />
              Phone: +254711188188
            </p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '300px', marginBottom: '20px' }}>
        <img className="card-img-top" src={secondimage} alt="" />
        <div className="card-body">
          <h5 className="card-title">Michael Jordan - IT Support Specialist</h5>
          <p className="card-text">
            Creates and maintains the technical backbone of the websites, ensuring seamless user
            experiences and providing expert troubleshooting for any technical issues that may arise.
          </p>
          <div>
            <p>
              Email: michaeljordan34@gmail.com
              <br />
              Phone: +2547311884588
            </p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '300px', marginBottom: '20px' }}>
        <img className="card-img-top" src={thirdimage} alt="" />
        <div className="card-body">
          <h5 className="card-title">Jane Davidson - Social Media Manager</h5>
          <p className="card-text">
            Creates engaging social media campaigns and content to raise awareness about the website
            and help with connecting us with the users.
          </p>
          <div>
            <p>
              Email: janedavidson@gmail.com
              <br />
              Phone: +254745118888
            </p>
          </div>
          
        </div>
      </div>

      <div className="card" style={{ width: '300px', marginBottom: '20px' }}>
        <img className="card-img-top" src= {fourthimage} alt="" />
        <div className="card-body">
          <h5 className="card-title">Kate Abdo - Medical Advisor</h5>
          <p className="card-text">
            Creates a reliable database of verified hospital information and
            help our users with help on medical issues whenever needed.
          </p>
          <div>
            <p>
              Email: Kateabdo@gmail.com
              <br />
              Phone: +254743488188
            </p>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default CardInfo;
