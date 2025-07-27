import React, { useState } from 'react';
import './AttendanceForm.css';

const AttendanceForm = ({ students, onMarkAttendance }) => {
  const [selectedStatus, setSelectedStatus] = useState({});

  const handleSelectChange = (rollNumber, status) => {
    setSelectedStatus({ ...selectedStatus, [rollNumber]: status });
  };

  const handleMark = (rollNumber) => {
    if (selectedStatus[rollNumber]) {
      onMarkAttendance(rollNumber, selectedStatus[rollNumber]);
    }
  };

  return (
    <div className="attendance-form">
      <h2>📅 Mark Attendance</h2>
      {students.map((student) => (
        <div key={student.rollNumber} className="student-attendance-row">
          <span>{student.name} ({student.rollNumber})</span>
          <select onChange={(e) => handleSelectChange(student.rollNumber, e.target.value)}>
            <option value="">Select</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
          <button onClick={() => handleMark(student.rollNumber)}>Mark</button>
        </div>
      ))}
    </div>
  );
};

export default AttendanceForm;
