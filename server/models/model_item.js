const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: String
});

module.exports = mongoose.model("Item", itemSchema);
