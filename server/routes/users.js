const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

/* Update user */
router.put("/:id", async (req, res) => {
  // Check if the logged user is the same as the user to update
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
       // If password exists, hash it before saving
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
    }
    try {
      // Update user 
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

/* Delete user */
router.delete("/:id", async (req, res) => {
  // Check if the logged user is the same as the user to delete
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

/* Get user by id */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // Remove password before sending response
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
