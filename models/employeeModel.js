const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  // Define employee schema fields as per your assignment
});

module.exports = mongoose.model('Employee', employeeSchema);
