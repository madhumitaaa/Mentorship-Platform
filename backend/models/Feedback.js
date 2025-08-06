const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
    rating: Number,
    comments: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
