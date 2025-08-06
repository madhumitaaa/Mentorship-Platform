const Booking = require('../models/Booking.js');

exports.createBooking = async (req, res) => {
  try {
    const { mentor, date, time } = req.body;
    const booking = await Booking.create({
      mentee: req.user.id,
      mentor,
      date,
      time
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookingsForMentor = async (req, res) => {
  try {
    const bookings = await Booking.find({ mentor: req.user.id }).populate('mentee');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }


};

exports.getBookingsForMentee = async (req, res) => {
  try {
    const bookings = await Booking.find({ mentee: req.user.id }).populate('mentor');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

