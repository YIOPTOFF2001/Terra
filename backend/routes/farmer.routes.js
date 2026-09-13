const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/auth.middleware');
const User = require('../models/User');
const Produce = require('../models/Produce');
const BankingDetails = require('../models/BankingDetails');

// GET /api/farmer/dashboard
router.get('/dashboard', protect, authorizeRoles('farmer'), async (req, res) => {
  try {
    const farmer = await User.findById(req.user.id).select('-password');

    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    const totalListings = await Produce.countDocuments({ farmer: req.user.id });
    const paidListings = await Produce.find({ farmer: req.user.id, status: 'paid' });
    const totalSoldKg = paidListings.reduce((sum, p) => sum + p.quantity, 0);
    const totalRevenue = paidListings.reduce((sum, p) => sum + p.askingPrice, 0);

    res.json({
      farmer: {
        id: farmer._id,
        name: farmer.name,
        email: farmer.email,
        location: farmer.location,
        phone: farmer.phone,
        memberSince: farmer.createdAt
      },
      stats: {
        totalListings,
        totalSoldKg,
        totalRevenue
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/farmer/produce — submit new produce
router.post('/produce', protect, authorizeRoles('farmer'), async (req, res) => {
  try {
    const { produceType, quantity, askingPrice, notes } = req.body;

    if (!produceType || !quantity || !askingPrice) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const produce = new Produce({
      farmer: req.user.id,
      produceType,
      quantity,
      askingPrice,
      notes
    });

    await produce.save();

    res.status(201).json({ message: 'Produce submitted successfully', produce });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/farmer/produce — get this farmer's listings
router.get('/produce', protect, authorizeRoles('farmer'), async (req, res) => {
  try {
    const listings = await Produce.find({ farmer: req.user.id }).sort({ createdAt: -1 });
    res.json({ listings });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/farmer/banking — save or update banking details
router.post('/banking', protect, authorizeRoles('farmer'), async (req, res) => {
  try {
    const { bankName, accountName, accountNumber, mpesaNumber, mpesaName } = req.body;

    const details = await BankingDetails.findOneAndUpdate(
      { farmer: req.user.id },
      { bankName, accountName, accountNumber, mpesaNumber, mpesaName },
      { new: true, upsert: true }
    );

    res.json({ message: 'Banking details saved successfully', details });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/farmer/banking — fetch this farmer's banking details
router.get('/banking', protect, authorizeRoles('farmer'), async (req, res) => {
  try {
    const details = await BankingDetails.findOne({ farmer: req.user.id });
    res.json({ details });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;