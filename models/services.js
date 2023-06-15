const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
  description: {
    type: String,
  },
  quantity: {
    type: String,
  },
  category: {
    type: String,
  },
  agencyId: {
    type: Schema.Types.ObjectId,
    ref: "agencies",
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "services",
    },
  ],
});

module.exports = mongoose.model("services", ServicesSchema);
