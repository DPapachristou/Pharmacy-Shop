const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

/* Register new user */
router.post("/register", async (req, res) => {
  try {
    // Hide the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    // Create new user object
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      isAdmin: req.body.isAdmin || false,
    });
    // Save user to database
    const user = await newUser.save();
    // Remove password before sending response
    const { password, ...safeUser } = user._doc;
    return res.status(201).json(safeUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Register failed" });
  }
});

/* Login user */
router.post("/login", async (req, res) => {
  try {
    // Find user by username
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }
    // Compare entered password with hashed password in DB
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
    // Send all user data except password
    const {password, ...others} = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;

