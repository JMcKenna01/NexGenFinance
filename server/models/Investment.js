const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true,
      enum: {
        values: ['stocks', 'bonds', 'mutual funds', 'ETFs', 'crypto'],
        message: 'Invalid investment type'
      }
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    date: {
      type: Date,
      required: true
    },
    firm: String,
    broker: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
});

module.exports = mongoose.model('Investment', investmentSchema);
