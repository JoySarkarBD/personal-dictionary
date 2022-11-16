/* dependencies */

const { validationResult } = require("express-validator");

const getDictionaryResult = (req, res, next) => {
  const errors = validationResult(req);
  const mappedError = errors.mapped();
  if (!Object.keys(mappedError).length) {
    next();
  } else {
    return res.render("pages/home/home", { error: mappedError });
  }
};

module.exports = getDictionaryResult;
