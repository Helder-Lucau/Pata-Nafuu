import React, { useState } from "react";

export default function Newsletter() {
  const [subName, setSubName] = useState("");
  const [subEmail, setSubEmail] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const subscriberData = {
      name: subName,
      email: subEmail,
    };
    //Using POST method to send form data to the API
    fetch("https://hospital-server-ovpz.onrender.com/newsLetter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscriberData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //Setting state to an empty string to clear out the values from input fields
    setSubName("");
    setSubEmail("");
  };

  return (
    <div className="col-lg-6 bg-white m-auto">
      <form onSubmit={handleSubmitButton}>
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
        <button type="submit" className="btn btn-success btn-lg mb-3">SUBSCRIBE</button>
      </form>
    </div>
  );
}

// const express = require('express');
// const app = express();
// const port = 3000; // You can change this to your desired port number

// //app.use(express.json());

// // Mock database to store subscribers (You can use a real database in a production environment)
// //const subscribers = [];

// // API endpoint to handle newsletter subscriptions
// app.get('/subscribe', (req, res) => {
//     const { name, email } = req.query;

//     // Basic validation
//     if (!name || !email) {
//         return res.status(400).json({ error: "Name and email are required fields." });
//     }

//     // Save subscriber information to the mock database
//     subscribers.push({ name, email });

//     console.log("New subscriber:", { name, email });

//     return res.json({ message: "Subscription successful!" });
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
