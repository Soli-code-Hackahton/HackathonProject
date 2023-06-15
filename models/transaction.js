const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
  },
  price: {
    type: Number,
  },
  paymentMethod: {
    type: String,
    enum : ['online','check', "espece"],
    default: 'online',
  }


})

module.exports = mongoose.model("transactions", TransactionSchema);