const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define user schema fields as per your assignment
});

module.exports = mongoose.model('User', userSchema);
