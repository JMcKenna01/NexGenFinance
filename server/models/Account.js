const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  accountType: {
    type: String,
    required: true,
    enum: ['checking', 'savings', 'credit card']
  },
  balance: {
    type: Number,
    required: true,
    min: 0
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
});

module.exports = mongoose.model('Account', accountSchema);
