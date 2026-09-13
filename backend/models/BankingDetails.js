const mongoose = require('mongoose');

const bankingDetailsSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bankName: {
    type: String,
    trim: true
  },
  accountName: {
    type: String,
    trim: true
  },
  accountNumber: {
    type: String,
    trim: true
  },
  mpesaNumber: {
    type: String,
    trim: true
  },
  mpesaName: {
    type: String,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('BankingDetails', bankingDetailsSchema);