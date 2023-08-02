import React, { useState } from "react";

function BookAppointment() {
  return (
    <div className="row justify-content-center my-5">
      <h1>Book an Appointment</h1>
      <div>
        <form>
          <label>Full Name</label>
          <input type="text" className="form-control form-control-mb"></input>
          <label>Phone number</label>
          <input type="number" className="form-control form-control-mb"></input>
          <label>Email address</label>
          <input type="email" className="form-control form-control-mb"></input>
          <label>Gender</label>
          <select className="form-select">
            <option>Choose gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label>Hospital</label>
          {/*hospital data will fetched from the api*/}
          <select className="form-select">
            <option>Karen Hospital</option>
            <option>Aga Khan Hospital</option>
            <option>PCE Hospital</option>
          </select>
          <label>Preferred date of appointment</label>
          <input type="date" className="form-control form control-sm"></input>
          <label>Speciality</label>
          <select className="form-select">
            <option>Infectious Diseases</option>
            <option>Dermatology</option>
            <option>Medical Oncology</option>
          </select>
          <div className="form-floating mb-3">
            <textarea className="form-control" rows="3"></textarea>
            <label>Primary medical issue </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-grid gap-2 col-2 mx-auto"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
