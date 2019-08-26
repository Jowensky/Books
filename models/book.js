const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  synopsis: String,
  image: String,
  link: String
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
