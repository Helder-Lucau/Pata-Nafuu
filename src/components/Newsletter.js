const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

app.use(express.json());

// Mock database to store subscribers (You can use a real database in a production environment)
const subscribers = [];

// API endpoint to handle newsletter subscriptions
app.get('/subscribe', (req, res) => {
    const { name, email } = req.query;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required fields." });
    }

    // Save subscriber information to the mock database
    subscribers.push({ name, email });

    console.log("New subscriber:", { name, email });

    return res.json({ message: "Subscription successful!" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
