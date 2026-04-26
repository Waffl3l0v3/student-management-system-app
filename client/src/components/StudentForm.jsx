import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';

const StudentForm = ({ onSubmit, selectedStudent, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollmentNumber: '',
    course: ''
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        name: selectedStudent.name,
        email: selectedStudent.email,
        enrollmentNumber: selectedStudent.enrollmentNumber,
        course: selectedStudent.course
      });
    } else {
      setFormData({
        name: '',
        email: '',
        enrollmentNumber: '',
        course: ''
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="glass-card">
      <h2 style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        {selectedStudent ? 'Edit Student' : 'Add New Student'}
        {selectedStudent && (
          <button className="btn-icon" onClick={onCancel} title="Cancel Edit">
            <X size={20} />
          </button>
        )}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Jane Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. jane@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="enrollmentNumber">Enrollment Number</label>
          <input
            type="text"
            id="enrollmentNumber"
            name="enrollmentNumber"
            className="form-control"
            value={formData.enrollmentNumber}
            onChange={handleChange}
            placeholder="e.g. ENR2023001"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course/Program</label>
          <input
            type="text"
            id="course"
            name="course"
            className="form-control"
            value={formData.course}
            onChange={handleChange}
            placeholder="e.g. Computer Science"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          <Save size={18} />
          {selectedStudent ? 'Update Student' : 'Save Student'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
