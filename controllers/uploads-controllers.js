const path = require("path");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");

const uploadImage = async (req, res, next) => {
  // console.log(req.files);
  if (!req.files) {
    throw new BadRequestError("No File Uploaded!");
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("The File Is Not an Image!");
  }

  const maxSize = 1000;
  if (productImage.size > maxSize) {
    throw new BadRequestError("Please upload an image smaller than 1KB!");
  }

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
