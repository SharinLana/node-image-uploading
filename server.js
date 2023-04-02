const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const port = process.env.port || 3100;

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("MONGODB connected!"))
      .catch((err) => console.log(err));

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
