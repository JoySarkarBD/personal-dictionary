/* dependencies */

const createHttpError = require("http-errors");
const Dictionary = require("../../models/Dictionary-Data/DictionaryModel");

const postDictionary = async (req, res) => {
  try {
    const { word, description } = req.body;
    const dicObj = new Dictionary({ word, description });
    const dicRes = await dicObj.save();
    const result = await Dictionary.find({});
    if (dicRes._id) {
      res.render("pages/home/home", { error: {}, result });
    } else {
      createHttpError(500, "Internal server error");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = postDictionary;
