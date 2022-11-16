/* dependencies */

const mongoose = require("mongoose");

const dictionaryModel = new mongoose.Schema(
  {
    word: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Dictionary = new mongoose.model("Dictionary", dictionaryModel);

module.exports = Dictionary;
