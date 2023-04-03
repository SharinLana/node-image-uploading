const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({
    product,
  });
};

const getAllProducts = async (req, res, next) => {
  res.send("All Products");
};

module.exports = { createProduct, getAllProducts };
