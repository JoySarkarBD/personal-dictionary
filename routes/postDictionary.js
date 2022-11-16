const postDictionary = require("../controllers/dictionary/postDictionary");
const getDictionary = require("../middlewares/dictionary/getDictionary");
const getDictionaryResult = require("../middlewares/dictionary/getDictionaryResult");

const postDictionaryRoute = require("express").Router();

postDictionaryRoute.post(
  "/",
  getDictionary(),
  getDictionaryResult,
  postDictionary
);

module.exports = postDictionaryRoute;
