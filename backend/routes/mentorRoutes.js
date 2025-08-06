const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware.js');
const { updateMentorProfile } = require('../controllers/mentorController.js');


router.put('/update', protect, restrictTo('mentor'), updateMentorProfile);

module.exports = router;
