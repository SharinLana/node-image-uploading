require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const pageNotFound = require("./middleware/not-found");
const errorHadler = require("./middleware/error");
const productRouter = require("./routes/product-routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload());

const port = process.env.port || 3100;

app.use("/api/v1/products", productRouter);
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
