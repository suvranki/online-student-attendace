import React from 'react';
import './AttendanceStats.css';

const AttendanceStats = ({ students, attendanceRecords }) => {
  if (!students?.length || !attendanceRecords?.length) return null;

  const getAttendanceCount = (rollNumber) => {
    return attendanceRecords.filter(record => record.rollNumber === rollNumber && record.status === 'Present').length;
  };

  const studentWithCount = students.map(student => ({
    ...student,
    presentCount: getAttendanceCount(student.rollNumber)
  }));

  const maxAttendance = Math.max(...studentWithCount.map(s => s.presentCount));
  const minAttendance = Math.min(...studentWithCount.map(s => s.presentCount));

  const topStudents = studentWithCount.filter(s => s.presentCount === maxAttendance);
  const lowStudents = studentWithCount.filter(s => s.presentCount === minAttendance);

  return (
    <div className="attendance-stats">
      <h2>📊 Attendance Statistics</h2>

      <div className="stat-section">
        <h3>🥇 Top Attendance</h3>
        <ul>
          {topStudents.map((s, idx) => (
            <li key={idx}>
              {s.name} ({s.rollNumber}) - {s.presentCount} Days Present
            </li>
          ))}
        </ul>
      </div>

      <div className="stat-section">
        <h3>📉 Lowest Attendance</h3>
        <ul>
          {lowStudents.map((s, idx) => (
            <li key={idx}>
              {s.name} ({s.rollNumber}) - {s.presentCount} Days Present
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceStats;
