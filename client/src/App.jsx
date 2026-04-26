import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GraduationCap } from 'lucide-react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/students');
      setStudents(res.data);
      setLoading(false);
    } catch (err) {
      showAlert('error', 'Failed to fetch students. Is the server running?');
      setLoading(false);
    }
  };

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedStudent) {
        // Update existing
        const res = await axios.put(`/api/students/${selectedStudent._id}`, formData);
        setStudents(students.map(s => s._id === selectedStudent._id ? res.data : s));
        showAlert('success', 'Student updated successfully!');
        setSelectedStudent(null);
      } else {
        // Create new
        const res = await axios.post('/api/students', formData);
        setStudents([res.data, ...students]);
        showAlert('success', 'Student added successfully!');
      }
    } catch (err) {
      showAlert('error', err.response?.data?.message || 'An error occurred');
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student record?')) {
      try {
        await axios.delete(`/api/students/${id}`);
        setStudents(students.filter(s => s._id !== id));
        showAlert('success', 'Student deleted successfully!');
      } catch (err) {
        showAlert('error', 'Failed to delete student');
      }
    }
  };

  const handleCancelEdit = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>
          <GraduationCap size={40} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: '#818cf8' }} />
          Student Portal
        </h1>
        <p>Manage enrollments, updates, and student records efficiently.</p>
      </header>

      {alert && (
        <div className={`alert alert-${alert.type}`}>
          {alert.message}
        </div>
      )}

      <main className="main-content">
        <section className="form-section">
          <StudentForm 
            onSubmit={handleFormSubmit} 
            selectedStudent={selectedStudent} 
            onCancel={handleCancelEdit}
          />
        </section>

        <section className="list-section">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              Loading students...
            </div>
          ) : (
            <StudentList 
              students={students} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
