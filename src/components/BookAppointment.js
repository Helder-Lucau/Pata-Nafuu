import React, { useState } from "react";

function BookAppointment() {
  const [name, setName] = useState("");
  const [pnumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [hospital, setHospital] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [issue, setIssue] = useState("");

  function handleSubmit(e) {
    e.prevent();

    const formData = {
      name,
      pnumber,
      email,
      gender,
      hospital,
      speciality,
      issue,
    };

    fetch("http://localhost:3001/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 bg-white m-auto wrapper">
          <h1 className="text-center pt-3 mb-4">Book an Appointment</h1>
          <p>Please fill out the form below to make an appointment</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label>Phone number</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label>Gender</label>
              <select className="form-select">
                <option>Choose gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Hospital</label>
              {/*hospital data will fetched from the api*/}
              <select className="form-select">
                <option>Karen Hospital</option>
                <option>Aga Khan Hospital</option>
                <option>PCE Hospital</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Preferred date of appointment</label>
              <input type="date" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label>Speciality</label>
              <select className="form-select">
                <option>Infectious Diseases</option>
                <option>Dermatology</option>
                <option>Medical Oncology</option>
              </select>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" rows="3"></textarea>
              <label>Primary medical issue </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success btn-lg mb-3">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
