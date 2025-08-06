const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const generateToken = (id, role) => jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const user = await User.create({ name, email, password, role });
        const token = generateToken(user._id, user.role);
        res.status(201).json({ token,  role: user.role  });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid password' });
        const token = generateToken(user._id, user.role);
        res.json({ token, role:user.role  });
    }
    catch {
        res.status(500).json({ error: 'Server error' });
    }
}