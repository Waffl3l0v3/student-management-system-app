const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  enrollmentNumber: {
    type: String,
    required: [true, 'Enrollment number is required'],
    unique: true,
    trim: true,
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    trim: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
