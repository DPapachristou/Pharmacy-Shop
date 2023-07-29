const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection success"));

app.use(cors())
app.use(express.json());
app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
