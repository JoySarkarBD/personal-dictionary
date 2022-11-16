/* dependencies */

const Dictionary = require("../../models/Dictionary-Data/DictionaryModel");

const updateDictionary = async (req, res) => {
  try {
    const { word, description } = req.body;
    const _id = req.params.id;
    const updatedData = await Dictionary.findOneAndUpdate(
      { _id },
      { $set: { word, description } }
    );
    if (updatedData) {
      res.redirect("/");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateDictionary;
