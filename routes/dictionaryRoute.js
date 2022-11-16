/* dependencies */

const getDictionary = require("../controllers/dictionary/getDictionary");
const dictionaryRoute = require("express").Router();

/* get home page */
dictionaryRoute.get("/", getDictionary);

/* post  */

module.exports = dictionaryRoute;
