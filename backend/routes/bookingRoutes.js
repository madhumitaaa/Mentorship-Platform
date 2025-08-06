const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createBooking,
  getBookingsForMentor,
  getBookingsForMentee,
  updateBookingStatus
} = require('../controllers/bookingController');

router.post('/', protect, createBooking);

router.get('/mentee', protect, getBookingsForMentee);

router.get('/mentor', protect, getBookingsForMentor);


router.put('/:id', protect, updateBookingStatus);

module.exports = router;
