const User=require('../models/User.js');
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await User.find({ role: 'mentor' }).select('-password');
    res.status(200).json(mentors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
