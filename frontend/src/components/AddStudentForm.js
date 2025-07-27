import React, { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [form, setForm] = useState({ name: '', rollNumber: '', SIC: '', group: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(form);
    setForm({ name: '', rollNumber: '', SIC: '', group: '' });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Student</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="rollNumber" placeholder="Roll Number" value={form.rollNumber} onChange={handleChange} required />
      <input name="SIC" placeholder="SIC Number" value={form.SIC} onChange={handleChange} required />
      <input name="group" placeholder="Group" value={form.group} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
