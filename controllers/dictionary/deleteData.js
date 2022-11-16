/* dependencies */

const Dictionary = require("../../models/Dictionary-Data/DictionaryModel");

const deleteData = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedData = await Dictionary.findOneAndDelete({ _id });
    if (deletedData) {
      return res.redirect("/");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = deleteData;
