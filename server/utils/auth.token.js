const jwt = require("jsonwebtoken");

exports.genToken = (id, username) => {
  return (token = jwt.sign({ id, username }, process.env.SECRET, {
    expiresIn: process.env.END,
  }));
};
