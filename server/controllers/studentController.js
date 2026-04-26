const Student = require('../models/Student');

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, email, enrollmentNumber, course } = req.body;
    
    // Check if student already exists
    const existingStudent = await Student.findOne({ 
      $or: [{ email }, { enrollmentNumber }] 
    });
    
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this email or enrollment number already exists' });
    }

    const newStudent = new Student({ name, email, enrollmentNumber, course });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, enrollmentNumber, course } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, enrollmentNumber, course },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
