const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const uploadImage = async (req, res, next) => {
  res.send("Upload Image");
};

module.exports = { uploadImage };
