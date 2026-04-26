import React from 'react';
import { Mail, Hash, BookOpen, Edit2, Trash2 } from 'lucide-react';

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="glass-card student-card">
      <div className="student-card-header">
        <div>
          <h3 className="student-name">{student.name}</h3>
          <span className="student-course">{student.course}</span>
        </div>
        <div className="card-actions">
          <button 
            className="btn-icon" 
            onClick={() => onEdit(student)}
            title="Edit Student"
          >
            <Edit2 size={18} />
          </button>
          <button 
            className="btn-icon danger" 
            onClick={() => onDelete(student._id)}
            title="Delete Student"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      <div className="student-details">
        <div className="detail-item">
          <Mail size={16} />
          <span>{student.email}</span>
        </div>
        <div className="detail-item">
          <Hash size={16} />
          <span>{student.enrollmentNumber}</span>
        </div>
        <div className="detail-item">
          <BookOpen size={16} />
          <span>Enrolled in {student.course}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
