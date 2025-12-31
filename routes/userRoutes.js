const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the model we just made

// 1. POST: Add a new User
router.post('/add', async(req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. GET: Get all Users
router.get('/all', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;