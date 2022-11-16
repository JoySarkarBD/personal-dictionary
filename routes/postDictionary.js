const deleteData = require("../controllers/dictionary/deleteData");
const postDictionary = require("../controllers/dictionary/postDictionary");
const updateDictionary = require("../controllers/dictionary/updateDictionary");
const getDictionary = require("../middlewares/dictionary/getDictionary");
const getDictionaryResult = require("../middlewares/dictionary/getDictionaryResult");

const postDictionaryRoute = require("express").Router();

/* add a data */
postDictionaryRoute.post(
  "/",
  getDictionary(),
  getDictionaryResult,
  postDictionary
);

/* update data */
postDictionaryRoute.post(
  "/update/:id",
  getDictionary(),
  getDictionaryResult,
  updateDictionary
);

/* delete data */
postDictionaryRoute.get("/delete/:id", deleteData);

module.exports = postDictionaryRoute;
