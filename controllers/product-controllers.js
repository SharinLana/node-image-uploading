const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res, next) => {
  res.send("Create Product");
};

const getAllProducts = async (req, res, next) => {
  res.send("All Products");
};

module.exports = { createProduct, getAllProducts };
