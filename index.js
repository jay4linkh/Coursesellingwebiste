require('./db'); // Import the MongoDB connection
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Import the Course model
const Course = require('./models/Course'); // Adjust the path if necessary

const app = express();
const port = 5001;

// MongoDB connection
const uri = "mongodb+srv://webdev:<Pass%401234>@webdev.a2lxy.mongodb.net/?retryWrites=true&w=majority&appName=webdev";

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // For parsing JSON in API requests

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Login route example
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Form submission route
app.post('/submit', (req, res) => {
  const { email, password } = req.body;
  res.send(`email: ${email}, Password: ${password}`);
});

// Route to fetch all courses from the MongoDB database
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.json(courses); // Send as JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to fetch a single course by ID
app.get('/api/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id); // Fetch course by ID
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course); // Send as JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
