const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  produceType: {
    type: String,
    enum: ['onions', 'tomatoes'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  askingPrice: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['submitted', 'broughtin', 'approved', 'rejected', 'paid'],
    default: 'submitted'
  }
}, { timestamps: true });

module.exports = mongoose.model('Produce', produceSchema);