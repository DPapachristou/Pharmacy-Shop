const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      isAdmin: req.body.isAdmin || false,
    });
    const user = await newUser.save();
    const { password, ...safeUser } = user._doc;
    return res.status(201).json(safeUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Register failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
    const {password, ...others} = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;

