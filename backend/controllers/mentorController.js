const User = require('../models/User');

exports.updateMentorProfile = async (req, res) => {
  try {
    const { expertise, bio, availableSlots } = req.body;

    const updated = await User.findByIdAndUpdate(
      req.user.id,
      { expertise, bio, availableSlots },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
