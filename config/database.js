const mongoose = require('mongoose');

// Replace '3FiLVFHmjtLpYszS' with your actual MongoDB Atlas password
const password = '3FiLVFHmjtLpYszS';

// Define the MongoDB Atlas connection URL
const mongoURL = `mongodb+srv://e41c:${password}@cluster0.ijkhohf.mongodb.net/comp3123_assignment1`;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err);
});

module.exports = mongoose;
