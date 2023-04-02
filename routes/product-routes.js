const express = require("express");
const { uploadImage } = require("../controllers/uploads-controllers");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/product-controllers");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadImage);

module.exports = router;
