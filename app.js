const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const database = require('./config/database');

// const DB_CONNECTION_STRING = "mongodb+srv://e41c:3FiLVFHmjtLpYszS@cluster0.ijkhohf.mongodb.net/?retryWrites=true&w=majority"

// Testing database.js code, directly into app.js
const mongoose = require('mongoose');

const password = '3FiLVFHmjtLpYszS';

const mongoURL = `mongodb+srv://e41c:${password}@cluster0.ijkhohf.mongodb.net/comp3123_assignment1`;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err);
});

module.exports = mongoose;



// Middleware
app.use(bodyParser.json());
app.use(express.json());


// Routes
const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: false, message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
