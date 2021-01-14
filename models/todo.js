const mongoose = require("mongoose");

const ToDo = mongoose.model(
  "ToDo",
  new mongoose.Schema({
    title: String,
    body: String,
  })
);

module.exports = { ToDo };
