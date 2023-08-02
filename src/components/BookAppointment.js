import React, {useState} from "react";

function BookAppointment() {
  
  return (
    <div>
      <h1>Book an Appointment</h1>
      <form>
        <label>
          Full Name
          <input type="text"></input>
        </label>
        <label>
          Phone number
          <input type="number"></input>
        </label>
        <label>
          Email address
          <input type="email"></input>
        </label>
        <label>
          Gender
          <select>
            <option>Choose gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label>
          Preferred date of appointment
          <input type="date"></input>
        </label>
        <label>
          Gender
          <select>
            <option>Speciality</option>
            <option>Infectious Diseases</option>
            <option>Dermatology</option>
            <option>Medical Oncology</option>
          </select>
        </label>
        <label>
          Primary medical issue
          <textarea rows="10"></textarea>
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
