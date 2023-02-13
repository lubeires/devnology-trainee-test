const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
