const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  topic: String,
  date: Date,
  time: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'offer_negotiation'],
    default: 'pending'
  },
  customMessage: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
