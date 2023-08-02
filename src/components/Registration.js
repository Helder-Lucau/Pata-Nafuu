import React, { useState } from "react";

function BookAppointment() {
  const [fname, setFName] = useState("");
  const [pnumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [redopass, setRedoPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //Putting together the current form data into an object using values stored in state
    const formData = {
      name: fname,
      pnumber: pnumber,
      email: email,
      gender: gender,
      dob: dob,
      password: password,
      redopass: redopass,
    };

    //Using POST method to send form data to the API
    fetch("http://localhost:3001/registration", {
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
    setFName("");
    setPNumber("");
    setEmail("");
    setGender("");
    setDob("");
    setPassword("");
    setRedoPass("");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 bg-white m-auto wrapper">
          <h1 className="text-center pt-3 mb-4">Register</h1>
          <p>Please fill out the form below to make an appointment</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
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
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={redopass}
                onChange={(e) => setRedoPass(e.target.value)}
              ></input>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success btn-lg mb-3">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
