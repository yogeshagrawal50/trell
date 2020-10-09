const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  shownId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Show'
  },
  quantity: {
    type: Number,
    required: true,
    min:[1, "Quantity less than 1"]
  }

})
module.exports = mongoose.model('order', orderSchema);
