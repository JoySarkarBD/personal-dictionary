/* dependencies */

const { check } = require("express-validator");

const getDictionary = (req, res, next) => {
  return [
    check("word").trim().notEmpty().withMessage("word must be required"),
    check("description")
      .trim()
      .notEmpty()
      .withMessage("Description must be required"),
  ];
};

module.exports = getDictionary;
