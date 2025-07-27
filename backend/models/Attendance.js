const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  sicNumber: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
