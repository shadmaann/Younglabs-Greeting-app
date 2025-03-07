const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Endpoint: GET /api/greet
app.get('/api/greet', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});