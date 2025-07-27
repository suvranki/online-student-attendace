const Attendance = require('../models/Attendance');

// @desc    Add new attendance record
// @route   POST /api/attendance
exports.addAttendance = async (req, res) => {
  try {
    const { name, rollNumber, sicNumber, group, status } = req.body;

    // Basic validation
    if (!name || !rollNumber || !sicNumber || !group || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAttendance = new Attendance({
      name,
      rollNumber,
      sicNumber,
      group,
      status,
      date: new Date()
    });

    await newAttendance.save();
    res.status(201).json({ message: 'Attendance recorded successfully', data: newAttendance });
  } catch (error) {
    console.error('Error adding attendance:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all attendance records
// @route   GET /api/attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().sort({ date: -1 });
    res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
