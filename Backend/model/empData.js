const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  }
});

const Employee = mongoose.model('Employee_detail', employeeSchema);

module.exports = Employee;
