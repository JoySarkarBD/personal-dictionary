/* dependencies */

const Dictionary = require("../../models/Dictionary-Data/DictionaryModel");

const getDictionaryPage = async (req, res) => {
  try {
    const result = await Dictionary.find({});
    res.render("pages/home/home.pug", { error: {}, result });
  } catch (error) {
    throw error;
  }
};

module.exports = getDictionaryPage;
