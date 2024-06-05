const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const Auth = require("../middleware/authMiddleware");
const Booking = require("../models/bookModels");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, phone, email, password } = req.body;
  console.log(email);

  try {
    // Validate input
    if (!username || !phone || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email:email});
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      username,
      phone,
      email,
      password,
    });

    // Save user to database
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    // Check for existing user
    const user = await User.findOne({email:email});
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        res.json({ success: true, token });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/get_info_userid", Auth, async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.find({ _id: userId });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error("Error getting User details:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error getting User details" });
  }
});

router.post("/book-service", Auth, async (req, res) => {
  try {
    const { userId, vehicleNumber, date, time, serviceType } = req.body;

    // Create a new booking
    const booking = new Booking({
      userId,
      vehicleNumber,
      date,
      time,
      serviceType,
    });

    // Save the booking to the database
    await booking.save();

    // Retrieve the booking ID
    const bookingId = booking._id;

    // Update the user document to include the booking ID in the bookings array
    await User.findByIdAndUpdate(userId, { $push: { bookings: bookingId } });

    res.status(201).json({ success: true, message: "Booking successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
router.get("/user-bookings", Auth, async (req, res) => {
  try {
    const { userId } = req.body;
    const bookings = await Booking.find({ userId });
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


router.get('/all-bookings',Auth, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId', 'username email phone'); // Assuming your User model has 'name' and 'email' fields
    res.json({ success: true, bookings });
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch all bookings' });
  }
});

router.put('/updateprofile',Auth, async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    if (req.body.password) {
      user.password = req.body.password; 
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
