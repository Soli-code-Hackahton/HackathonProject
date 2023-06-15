const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const AgencySchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  campanyName: {
    type: String,
  },
})

module.exports = mongoose.model("agencies", AgencySchema);