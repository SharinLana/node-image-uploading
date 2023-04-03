const path = require("path");
const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const uploadImage = async (req, res, next) => {
//   console.log(req.files);
  const productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    "../client/public/uploads/" + `${productImage.name}`
  );
  // then create an "uploads" folder in the "client/public"

  await productImage.mv(imagePath); //mv() - move - is an express-fileupload method
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/public/uploads/${productImage.name}` } });
  // Then, before checking the result via Postman, use express static method in server.js
  // to make this file publicly available
};

module.exports = { uploadImage };
