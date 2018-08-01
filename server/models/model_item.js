const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  }
})

module.exports = mongoose.model("Item", itemSchema)