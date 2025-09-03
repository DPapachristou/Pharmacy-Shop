const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
    },
    profilePic: {
      type: String,
      default: "",
    },
    isAdmin:  { 
      type: Boolean, default: false 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
