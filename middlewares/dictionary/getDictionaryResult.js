/* dependencies */

const { validationResult } = require("express-validator");
const Dictionary = require("../../models/Dictionary-Data/DictionaryModel");

const getDictionaryResult = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    const mappedError = errors.mapped();
    const result = await Dictionary.find({});
    if (!Object.keys(mappedError).length) {
      next();
    } else {
      return res.render("pages/home/home", {
        error: mappedError,
        result,
      });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getDictionaryResult;
