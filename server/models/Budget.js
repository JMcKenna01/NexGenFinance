const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    category: {
      type: String,
      required: true
    },
    limit: {
      type: Number,
      required: true,
      min: 0
    },
    currentSpend: {
      type: Number,
      default: 0,
      min: 0
    },
    period: {
      type: String,
      enum: ['monthly', 'yearly']
    },
    status: {
      type: String,
      enum: ['active', 'inactive']
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  });
  

module.exports = mongoose.model('Budget', budgetSchema);
