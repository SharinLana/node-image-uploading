require("express-async-errors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cloudinary = require("cloudinary").v2; // MUST SPECIFY v2

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pageNotFound = require("./middleware/not-found");
const errorHadler = require("./middleware/error");
const productRouter = require("./routes/product-routes");

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true })); // required for accessing the uploaded files and is used in upload-controllers.js
app.use(cors());

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
