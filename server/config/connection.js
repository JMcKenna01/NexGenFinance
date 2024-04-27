require('dotenv').config({ path: './.env' });
console.log('MongoDB URI:', process.env.MONGO_URI);

const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
console.log('Connecting to MongoDB URI:', mongoURI); // This will help you verify the URI

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connection established.'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection; // Export the connection
