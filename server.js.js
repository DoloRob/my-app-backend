// server.js
const express = require('express');
const app = express();

// Allow JSON body parsing
app.use(express.json());

// Example route
app.post('/api/listings', (req, res) => {
  const { title, description } = req.body;
  res.json({
    success: true,
    message: "Listing received!",
    data: { title, description }
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
