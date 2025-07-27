import React from 'react';
import './AttendanceList.css';

const AttendanceList = ({ attendanceRecords }) => {
  return (
    <div className="attendance-container">
      <h2>📋 Student Attendance Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Roll Number</th>
            <th>SIC Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>
                {record.rollNumber}
                {record.totalPresents >= 3 && <span className="badge">🏆 Top Attender</span>}
              </td>
              <td>{record.sicNumber}</td>
              <td>
                <span
                  className={
                    record.status === 'Present' ? 'status-present' : 'status-absent'
                  }
                >
                  {record.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
