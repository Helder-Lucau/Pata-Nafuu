import React, { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
  const [subName, setSubName] = useState("");
  const [subEmail, setSubEmail] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const subscriberData = {
      name: subName,
      email: subEmail,
    };

    const newsletterSubscribe = () =>
    toast(
      `Thank you for subscribing ${subName} to our newsletter`,
      {
        type: "success",
      }
    );
    //Using POST method to send form data to the API
    fetch("https://hospital-server-ovpz.onrender.com/newsLetter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscriberData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        newsletterSubscribe();
      });

    //Setting state to an empty string to clear out the values from input fields
    setSubName("");
    setSubEmail("");
  };

  return (
    <div className="col-lg-6 bg-white m-auto">
      <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={subName}
          onChange={(e) => setSubName(e.target.value)}
          placeholder="your name"
        ></input>
        </div>
        <div className="mb-3">
        <input
          type="email"
          className="form-control"
          value={subEmail}
          onChange={(e) => setSubEmail(e.target.value)}
          placeholder="your email address"
        ></input>
        </div>
        <button type="submit" className="btn btn-success btn-lg mb-3" onClick={handleSubmitButton}>SUBSCRIBE</button>
        <ToastContainer position="top-center"></ToastContainer>
      </form>
    </div>
  );
}
