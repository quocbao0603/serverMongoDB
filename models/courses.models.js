const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema(
  {
    title: String,
    details: String,
    category: String,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

module.exports = mongoose.model('classes', CourseSchema);
