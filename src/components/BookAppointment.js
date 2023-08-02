import React, { useState } from "react";

function BookAppointment() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 bg-white m-auto wrapper">
          <h1 className="text-center pt-3 mb-4">Book an Appointment</h1>
          <form>
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
              <label>Hospitals</label>
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
