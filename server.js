require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const pageNotFound = require("./middleware/not-found");
const errorHadler = require("./middleware/error");

const port = process.env.port || 3100;

app.use(errorHadler);
app.use(pageNotFound);

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
