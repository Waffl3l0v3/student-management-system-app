import React from 'react';
import StudentCard from './StudentCard';
import { Users } from 'lucide-react';

const StudentList = ({ students, onEdit, onDelete }) => {
  if (!students || students.length === 0) {
    return (
      <div className="glass-card empty-state">
        <Users size={48} color="var(--text-secondary)" style={{ marginBottom: '1rem' }} />
        <h3>No students found</h3>
        <p>Add a new student to get started.</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard 
          key={student._id} 
          student={student} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default StudentList;
