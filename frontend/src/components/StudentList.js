import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h2>🧑‍🎓 Student List</h2>
      <ul>
        {students.map((s, index) => (
          <li key={index}>
            <strong>{s.name}</strong> | Roll: {s.rollNumber} | SIC: {s.SIC} | Group: {s.group}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
