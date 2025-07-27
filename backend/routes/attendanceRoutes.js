const express = require('express');
const router = express.Router();
const {
  addAttendance,
  getAllAttendance
} = require('../controllers/attendanceController');

// POST: Add new student attendance
router.post('/', addAttendance);

// GET: Get all student attendance records
router.get('/', getAllAttendance);

module.exports = router;
