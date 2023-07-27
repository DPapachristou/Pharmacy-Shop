const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection success"));

app.use("/server/user", userRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
