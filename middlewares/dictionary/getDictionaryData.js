/* dependencies */

const { check } = require("express-validator");

const getDictionaryData = (req, res, next) => {
  return [
    check("word").trim().notEmpty().withMessage("word must be required"),
    check("description")
      .trim()
      .notEmpty()
      .withMessage("Description must be required"),
  ];
};

module.exports = getDictionaryData;
