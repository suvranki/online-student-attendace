import React, { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';
import AttendanceForm from './components/AttendanceForm';
import StudentList from './components/StudentList';
import AttendanceStats from './components/AttendanceStats';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleMarkAttendance = (rollNumber, status) => {
    const date = new Date().toLocaleDateString('en-GB');
    setAttendance([
      ...attendance,
      { rollNumber, date, status }
    ]);
  };

  return (
    <div className="app-container">
      <h1>📘 Student Attendance Tracker</h1>
      <AddStudentForm onAddStudent={handleAddStudent} />
      <AttendanceForm students={students} onMarkAttendance={handleMarkAttendance} />
      <StudentList students={students} />
      <AttendanceStats students={students} attendanceRecords={attendance} />
    </div>
  );
};

export default App;
