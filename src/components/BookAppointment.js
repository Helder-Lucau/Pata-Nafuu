import React, { useState } from "react";

function BookAppointment() {
  const [pname, setPName] = useState("");
  const [pnumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //Putting together the current form data into an object using values stored in state
    const formData = {
      name: pname,
      pnumber: pnumber,
      email: email,
      gender: gender,
      hospital: hospital,
      date: date,
      speciality: speciality,
      issue: issue,
    };

    //Using POST method to send form data to the API
    fetch("http://localhost:3001/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // alert(`${name} thanks for using our services`);
      });

    //Setting state to an empty string to clear out the values from input fields
    setPName("");
    setPNumber("");
    setEmail("");
    setGender("");
    setHospital("");
    setDate("");
    setSpeciality("");
    setIssue("");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 bg-white m-auto wrapper">
          <h1 className="text-center pt-3 mb-4">Book an Appointment</h1>
          <p>Please fill out the form below to make an appointment</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={pname}
                onChange={(e) => setPName(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Phone number</label>
              <input
                type="text"
                className="form-control"
                value={pnumber}
                onChange={(e) => setPNumber(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Gender</label>
              <select
                className="form-select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>--Please Select--</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Hospital</label>
              {/*hospital data will fetched from the api*/}
              <select
                className="form-select"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              >
              <option>--Please Select--</option>
                <option>Karen Hospital</option>
                <option>Aga Khan Hospital</option>
                <option>PCE Hospital</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Preferred date of appointment</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Select Service</label>
              <select
                className="form-select"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option>--Please Select--</option>
                <option>Infectious Diseases</option>
                <option>Dermatology Clinic</option>
                <option>Medical Oncology</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Primary medical issue:</label>
              <textarea
                className="form-control"
                rows="3"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              ></textarea>
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
