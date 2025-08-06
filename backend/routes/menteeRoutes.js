const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware.js');
const { getAllMentors } = require('../controllers/menteeController.js');

router.get('/mentors', protect, restrictTo('mentee'), getAllMentors);

module.exports = router;
