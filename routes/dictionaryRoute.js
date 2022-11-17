/* dependencies */

const getDictionaryPage = require("../controllers/dictionary/getDictionaryPage");
const dictionaryRoute = require("express").Router();

/* get home page */
dictionaryRoute.get("/", getDictionaryPage);

/* post  */

module.exports = dictionaryRoute;
