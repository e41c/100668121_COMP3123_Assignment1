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
