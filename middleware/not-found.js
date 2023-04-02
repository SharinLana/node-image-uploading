const { StatusCodes } = require("http-status-codes");

const NotFound = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).send("Page Not Found");
};

module.exports = NotFound;
