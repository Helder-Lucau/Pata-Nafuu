import React from "react";
import { useNavigate } from "react-router-dom";

function EachHospitalCard({
  name,
  region,
  department,
  description,
  image,
  county,
  type,
  phoneno,
  email,
}) {
  const textStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "700",
  };

  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/booking")
  }

  return (
    <div className="card" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <img
          src={image}
          className="card-img"
          alt={name}
          style={{ height: "350px", width: "400px", paddingLeft: "40px" }}
        />
      </div>
      <div>
        <div style={{ paddingLeft: "30px" }}>
          <h3 className="card-title" style={textStyle}>
            Name:{" "}
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
              {name}
            </span>
          </h3>
          <p className="card-text" style={textStyle}>
            Region: {region}
          </p>
          <p className="card-text" style={textStyle}>
            Department: {department}
          </p>
          <p className="card-text" style={textStyle}>
            Description: {description}
          </p>
          <p className="card-text" style={textStyle}>
            County: {county}
          </p>
          <p className="card-text" style={textStyle}>
            Type: {type}
          </p>
          <p className="card-text" style={textStyle}>
            Phone Number: {phoneno}
          </p>
          <p className="card-text" style={textStyle}>
            Email Address: {email}
          </p>
        </div>
        <button
          style={{
            marginLeft: "1000px",
            padding: "15px",
            backgroundColor: "#5C5CFF",
          }}
          onClick={handleButtonClick}
        >
          {" "}
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
}
export default EachHospitalCard;
