const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  price: String,
  duration: String,
  description: String,
  category: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
